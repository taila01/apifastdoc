import { FastifyInstance } from "fastify";
import { DocumentoController } from "../controllers/documento.controller";

const documentoController = new DocumentoController();

export async function documentoRoutes(app: FastifyInstance) {
  app.post("/documentos", documentoController.create);
  app.get("/documentos", documentoController.list);
  app.get("/documentos/:id", documentoController.show);
  
  app.put("/documentos/:id", documentoController.update); 
  
  app.patch("/documentos/:id/assinar", documentoController.sign);
  app.delete("/documentos/:id", documentoController.delete);
}