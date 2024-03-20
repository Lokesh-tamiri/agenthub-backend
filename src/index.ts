// app.ts
import express, { Request, Response } from 'express';
// dotenv config
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Sample route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, welcome to my app!');
});

app.get('/api', (req: Request, res: Response) => {
  res.status(500).json({ message: 'Hello, welpranecome to my API!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
