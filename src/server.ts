import express from "express";
import dotenv from "dotenv";

// Ativa o uso das variáveis de ambiente do arquivo .env
dotenv.config();

const server = express();

server.use("/", (request, response) => {
  const { name } = request.query;
  return response.json(`Hello, ${name}`);
});

server.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
