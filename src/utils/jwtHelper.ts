import jwt from 'jsonwebtoken';

declare module 'jsonwebtoken' {
  export interface ITokenPayload {
    id: string;
  }
}

export const createAuthToken = (id: string) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
};
