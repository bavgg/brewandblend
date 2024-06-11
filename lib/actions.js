import bcrypt from "bcrypt";
import { client } from '../database.js';

async function verifyPassword(password, hash) {
  const is = await bcrypt.compare(password, hash);
  return is;
}

async function hashPassword(password) {
  const hash = await bcrypt.hash(password, 10);
  return hash;
}

export async function authenticate(email, password) {
  const query = 'SELECT * FROM coffee_users WHERE email = $1';
  const res = await client.query(query, [email]);

  const user = res.rows[0];
  if (user) {
    const isPasswordValid = await verifyPassword(password, user.password);
    if (isPasswordValid) {
      res.status(201).send();
    }
  }
}

export async function register(input, res) {
  const hashed_password = await hashPassword(input.password);

  try {
    const query = 'INSERT INTO coffee_users (username, email, password) VALUES ($1, $2, $3)';
    const ress = await client.query(query, [input.username, input.email, hashed_password]);
    console.log(res);
    res.status(201).send();
  } catch (error) {
    console.log(error.detail);
    res.status(500).send()
  }
}