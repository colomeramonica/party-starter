import express, { Request, Response } from 'express';
import App from './client/src/App';

const app = express();
const port = 3001;

app.get('/', (req: Request, res: Response) => {
  res.send('App');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});