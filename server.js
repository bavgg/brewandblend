import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { client } from './database.js';


const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(join(__dirname, "public")));

app.get('/cats', async (req, res) => {
  try {
    const {rows} = await client.query('SELECT * FROM cats');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});

// try {
//   const {rows} = await client.query('SELECT * FROM cats');
//   res.json(rows);
// } catch (error) {
//   console.error('Error fetching users:', error);
//   res.status(500).send('Internal Server Error');
// }