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

  async show(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string };
    const doc = await service.buscarPorId(Number(id));
    if (!doc) return reply.status(404).send({ message: "Documento não encontrado" });
    return reply.send(doc);
  }

  async sign(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string };
    const doc = await service.assinarDocumento(Number(id)); 
    return reply.send(doc);
  }

  async delete(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string };
    await service.excluirDocumento(Number(id));
    return reply.status(204).send();
  }
}