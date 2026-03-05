import { FastifyInstance } from "fastify";
import { DocumentoController } from "../controllers/documento.controller";

export async function documentoRoutes(app: FastifyInstance) {
  const controller = new DocumentoController();

  app.post("/documentos", controller.create);
  app.get("/documentos", controller.list);
  app.patch("/documentos/:id/assinar", controller.update);
}