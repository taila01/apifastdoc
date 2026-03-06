import { FastifyRequest, FastifyReply } from "fastify";
import { DocumentoService } from "../services/documento.service";

const service = new DocumentoService();

interface CreateDocumentoBody {
  titulo: string;
  conteudoTexto: string;
}

export class DocumentoController {
  // No DocumentoController.ts
async create(request: FastifyRequest, reply: FastifyReply) {
  const { titulo, conteudoTexto } = (request.body as CreateDocumentoBody) || {};
  
  if (!titulo || !conteudoTexto) {
    return reply.status(400).send({ message: "Título e conteúdo são obrigatórios" });
  }

  try {
    const nomeArquivo = `${titulo.replace(/\s+/g, '_')}.txt`;
    const doc = await service.criarDocumento(titulo, conteudoTexto, nomeArquivo); 
    return reply.status(201).send(doc);
  } catch (error: any) {
    // Isso vai mostrar o erro do Prisma no console do seu VS Code/Terminal
    console.error("ERRO NO BANCO:", error); 
    return reply.status(500).send({ message: error.message || "Erro interno" });
  }
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
    const body = request.body as { titulo?: string; descricao?: string; status?: string };
    
    try {
      const doc = await service.atualizarDocumento(Number(id), body);
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