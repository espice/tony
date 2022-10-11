import { Router } from 'express';
import jwt from 'jsonwebtoken';
import auth from '@middleware/auth';
import bcrypt from 'bcrypt';
const router = Router();

//models
import User from '@models/user';

router.post('/register', async (req, res) => {
  console.log(req.body);
  const { name, email, password, dob, weight } = req.body;
  const diagnosisDone = false;

  if (
    !name ||
    !email ||
    !password ||
    !dob ||
    !weight ||
    name == '' ||
    email == '' ||
    password == '' ||
    dob == '' ||
    weight == '' ||
    name == null ||
    email == null ||
    password == null ||
    dob == null ||
    weight == null ||
    name.trim() == '' ||
    email.trim() == '' ||
    password.trim() == '' ||
    dob.trim() == '' ||
    weight.trim() == ''
  ) {
    return res.json({ success: false, messdob: 'Missing Credentials' });
  }

  const doesUserExist = await User.findOne({ email: email });
  if (doesUserExist) {
    return res.json({ success: false, messdob: 'User already exists' });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    dob,
    weight,
    diagnosisDone,
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_KEY!, {
    expiresIn: '7d',
  });

  res
    .cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    })
    .send({
      success: true,
      message: 'User created successfully',
    });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (
    !email ||
    !password ||
    email == '' ||
    password == '' ||
    email.trim() == '' ||
    password.trim() == ''
  ) {
    return res.json({ success: false, messdob: 'Invalid Credentials' });
  }

  const user = await User.findOne({ email: email });

  if (!user) {
    return res.json({ success: false, messdob: 'Invalid Credentials' });
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res.json({ success: false, messdob: 'Invalid Credentials' });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_KEY!, {
    expiresIn: '7d',
  });

  res
    .cookie('token', token, {
      httpOnly: true,
      maxage: 15552000000,
    })
    .send(
      JSON.stringify({
        success: true,
        message: 'Login Successful',
      })
    );
});

router.get('/me', auth, async (req, res) => {
  if (!req.user)
    return res.send({ success: false, messdob: 'Invalid Session' });

  const user = await User.findOne({ _id: req.user.id }).select('-password');
  res.send({ success: true, user: user });
});

router.post('/logout', auth, (req, res) => {
  res.clearCookie('token').send({ success: true });
});

export default router;
