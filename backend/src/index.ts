import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { bibleRoutes } from './routes/bible';
import { devotionRoutes } from './routes/devotion';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/bible', bibleRoutes);
app.use('/api/devotion', devotionRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 