import { FastifyRequest, FastifyReply } from "fastify";
import { DocumentoService } from "../services/documento.service";

const service = new DocumentoService();

export class DocumentoController {
  async create(request: FastifyRequest, reply: FastifyReply) {
    const { titulo, descricao } = request.body as { titulo: string; descricao?: string };
    const doc = await service.criarDocumento(titulo, descricao); 
    return reply.status(201).send(doc);
  }

  async list(request: FastifyRequest, reply: FastifyReply) {
    const docs = await service.listarTodos();
    return reply.send(docs);
  }

  async update(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string };
    const doc = await service.assinarDocumento(Number(id)); 
    return reply.send(doc);
  }
}