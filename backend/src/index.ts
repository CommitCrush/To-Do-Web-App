import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
const PORT = 3008;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


app.get("/api/ping", (req: Request, res: Response) => {
  res.status(200).json({ message: "pong" });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}
);