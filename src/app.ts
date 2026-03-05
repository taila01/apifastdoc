import fastify from "fastify";
import { documentoRoutes } from "./routes/documento.routes";

const app = fastify();

app.register(documentoRoutes);

export { app };