import jwt from 'jsonwebtoken';
import { User } from '../interfaces';

const secretKey = process.env.JWT_SECRET || 'JWT_SECRET';

const config: object = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

export function generateToken(payload: User) {
  return jwt.sign(
    {
      data: {
        username: payload.username,
        vocation: payload.vocation,
        level: payload.level,
      },
    },
    secretKey,
    config,
  );
}

export function verifyToken(token: string) {
  return jwt.verify(token, secretKey, config);
}