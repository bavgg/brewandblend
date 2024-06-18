
import dotenv from 'dotenv';
import pg from 'pg'

dotenv.config();

const { Client } = pg

// Get the database URL from Render
const connectionString = process.env.DATABASE_URL;

// Create a new client instance
export const client = new Client({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});

// Connect to the database
client.connect()
  .then(() => console.log('Connected to PostgreSQL on Render'))
  .catch(err => console.error('Connection error', err.stack));





