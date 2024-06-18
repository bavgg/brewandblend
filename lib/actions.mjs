import bcrypt from "bcrypt";
import { client } from '../onlineDatabase.mjs';
import { timeNow } from "./utils.mjs";

async function verifyPassword(password, hash) {
  const is = await bcrypt.compare(password, hash);
  return is;
}

async function hashPassword(password) {
  const hash = await bcrypt.hash(password, 10);
  return hash;
}

export async function authenticate(email, password) {
  try {
    const query = 'SELECT * FROM users WHERE email = $1';
    const result = await client.query(query, [email]);

    const user = result.rows[0];
    if (user) {
      const isPasswordValid = await verifyPassword(password, user.password);
      if (isPasswordValid) {
        return { success: true, user };
      } else {
        return { success: false, message: 'Invalid password' };
      }
    } else {
      return { success: false, message: 'Cannot find user' };
    }
  } catch (error) {
    console.error('Error during authentication:', error);
    return { success: false, message: 'Authentication failed' };
  }
}
export async function register(input) {

  try {
    // Hash the password
    const hashed_password = await hashPassword(input.password);

    // Query to insert user data into the database
    const query = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, email';

    // Execute the query
    const result = await client.query(query, [input.username, input.email, hashed_password]);
    const user = result.rows[0];
    console.log(user);
    // Check if the query was successful
    if (result.rowCount === 1) {
      return { success: true, user };
    } else {
      return { success: false, message: 'User registration failed' };
    }
  } catch (error) {
    // Handle errors
    console.error('Error during registration:', error);
    return { success: false, message: 'An error occurred during registration' };
  }
}

export async function saveCartItems(cartItems, user_id) {

  const time = timeNow();
  try {
    cartItems.map(async (cartItem) => {
      const query = 'INSERT INTO cart_items (user_id, quantity, price, created_at) VALUES ($1, $2, $3, $4)';
      await client.query(query, [user_id, cartItem.quantity, cartItem.price, time]);
    });

    return { success: true, message: 'Cart items saved successfully' };
  } catch (error) {
    console.error('Error saving cart items:', error);
    return { success: false, message: 'An error occurred while saving cart items' };
  }
}