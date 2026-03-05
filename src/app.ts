import fastify from "fastify";
import cors from "@fastify/cors";
import { documentoRoutes } from "./routes/documento.routes";
import multipart from '@fastify/multipart';

const app = fastify();

app.register(cors, {
  origin: "*", 
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
});

app.register(multipart, { 
  attachFieldsToBody: true,
  limits: {
    fileSize: 1024 * 1024 * 5 
  }
});

app.register(documentoRoutes);

export { app };