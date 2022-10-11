import diseases from '../utils/diseases.json';
import { Router } from 'express';
import jwt from 'jsonwebtoken';
import auth from '@middleware/auth';
import bcrypt from 'bcrypt';
const router = Router();

import User from '@models/user';

router.post('/diagnosis', auth, (req, res) => {
  const { symptoms, details } = req.body;
  const listOfSymptoms = symptoms.split(',');

  //find most probable disease
  let highScore = {
    score: 0,
    disease: '',
  };

  diseases.forEach((disease) => {
    let score = 0;
    disease.symptoms.forEach((symptom) => {
      listOfSymptoms.forEach((userSymptom: any) => {
        if (symptom.includes(userSymptom.toLowerCase())) {
          score++;
        }
      });
    });

    if (score > highScore.score) {
      highScore.score = score;
      highScore.disease = disease.disease;
    }
  });

  return res.json({
    success: true,
    disease: highScore.disease,
  });
});

export default router;
