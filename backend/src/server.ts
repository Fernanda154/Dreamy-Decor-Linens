import "reflect-metadata";
import express from 'express';
import "./database";
import { routes } from "./routes";
import cors from "cors";
const allowedOrigins = ["http://localhost:5173"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

const app = express();
app.use(cors(options));
app.use(express.json());
app.use(routes);

app.listen(3001, () => {
  console.log("Dreamy Decor no ar. Porta 3001");
});