import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';

dotenv.config()

const app: Express = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    message: "REST API WITH EXPRESS JS",
  })
});

app.listen(port, () => {
  console.log(`App Listening on http://localhost${port}`);
});
