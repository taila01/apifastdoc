import fastify from "fastify";
import cors from "@fastify/cors";
import { documentoRoutes } from "./routes/documento.routes";

const app = fastify();

app.register(cors, {
    origin: true 
});

app.register(documentoRoutes);

export { app };