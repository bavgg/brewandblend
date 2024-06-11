import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { authenticate, register } from './lib/actions.js';

const app = express();

app.use(express.json())

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(join(__dirname, "public")));

app.post('/user/authenticate', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  authenticate(email, password);
});

app.post('/user/register', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;

  register({email, password, username}, res);
});

app.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});