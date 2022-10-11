import mongoose from 'mongoose';

// export interface DBUserInterface extends mongoose.Document{
//     name: string;
//     email: string;
//     photoUrl: string
// }

export interface DBUserInterface extends mongoose.Document, UserInterface {}

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 255,
  },
  email: {
    type: String,
    minlength: 4,
  },
  password: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  diagnosisDone: {
    type: String,
    required: true,
  },
  diseases: {
    type: Array,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model<DBUserInterface>('User', userSchema);

export default User;
