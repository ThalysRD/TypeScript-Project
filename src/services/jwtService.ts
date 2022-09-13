import jwt from 'jsonwebtoken';

const secret = 'secretJWT';

const jwtService = {
  generateToken: (id: number) => {
    const token = jwt.sign({ data: id }, secret, { expiresIn: '1d', algorithm: 'HS256' });
    return token;
  },

  validateToken: (token: string) => {
    try {
      const decode = jwt.verify(token, secret);
      return decode;
    } catch (error) {
      return { message: 'Expired or invalid token' };
    }
  },
};
export default jwtService;