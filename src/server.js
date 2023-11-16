import express from "express";
import { config } from "dotenv";
import rotaAnimais from "./routes/animais.routes.js";

config();

const port = process.env.PORT || 5005;

const app = express();
app.use(express.json());
app.use(rotaAnimais);

app.listen(port, () =>
  console.log(`⚡ Server started on http://localhost:${port}`)
);