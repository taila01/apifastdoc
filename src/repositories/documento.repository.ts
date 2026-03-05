import { prisma } from "../lib/prisma";

export class DocumentoRepository {
  async create(data: { titulo: string; descricao?: string }) {
    return await prisma.documento.create({
      data: {
        titulo: data.titulo,
        descricao: data.descricao,
        status: 'pendente'
      }
    });
  }

  async findAll() {
    return await prisma.documento.findMany({
      orderBy: { criado_em: 'desc' } 
    });
  }

  async findById(id: number) {
    return await prisma.documento.findUnique({
      where: { id }
    });
  }

  async update(id: number, data: { titulo?: string; descricao?: string; status?: string }) {
    return await prisma.documento.update({
      where: { id },
      data: {
        titulo: data.titulo,
        descricao: data.descricao,
        status: data.status as 'pendente' | 'assinado'
      }
    });
  }

  async updateStatus(id: number, status: 'pendente' | 'assinado') {
    return await prisma.documento.update({
      where: { id },
      data: { status }
    });
  }
  
  async delete(id: number) {
    return await prisma.documento.delete({
      where: { id }
    });
  }
}