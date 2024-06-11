import jwt from 'jsonwebtoken';

const secretKey = 'masarapAngBabae'; // Replace with your actual secret key

export const generateAuthToken = (email) => {
  const payload = { email }; // You can add more payload data if needed
  const options = { expiresIn: '1h' }; // Token expiration time, e.g., 1 hour

  // Generate and return the JWT token
  const token = jwt.sign(payload, secretKey, options);
  return token;
};
