import { FastifyRequest, FastifyReply } from "fastify";
import { DocumentoService } from "../services/documento.service";

const service = new DocumentoService();

export class DocumentoController {
  async create(request: FastifyRequest, reply: FastifyReply) {
    const data = await request.file();
    
    if (!data) {
      return reply.status(400).send({ message: "Arquivo não enviado" });
    }

    const buffer = await data.toBuffer();
    const conteudoTexto = buffer.toString("utf-8");

    const doc = await service.criarDocumento(data.filename, conteudoTexto); 
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

  async update(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string };
    const data = request.body as { titulo?: string; descricao?: string; status?: string };
    
    try {
      const doc = await service.atualizarDocumento(Number(id), data);
      return reply.send(doc);
    } catch (error) {
      return reply.status(500).send({ message: "Erro ao atualizar" });
    }
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