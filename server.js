import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { authenticate, register } from './lib/actions.js';
import { generateAuthToken } from './utils/server.js';

const app = express();

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(join(__dirname, "public")));

app.post('/user/authenticate', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const authResult = await authenticate(email, password);
  if (authResult.success) {
    const token = generateAuthToken(authResult.user.email); // Assuming you have a token generation function
    // return res.json({ success: true, token });

    // Set token in response header or cookie
    res.cookie('authToken', token, { maxAge: 3600000, httpOnly: true });

    return res.redirect('/');
  } else {
    return res.status(401).json({ success: false, message: authResult.message });
  }
});

app.post('/user/register', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;

  register({email, password, username});
});

app.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});