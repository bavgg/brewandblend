
import dotenv from 'dotenv';
import pg from 'pg'

dotenv.config();


const { Client } = pg

const pgConfig = {
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT, 
};
console.log(pgConfig);
export const client = new Client(pgConfig);

await client.connect()
console.log("database connected successfully");


