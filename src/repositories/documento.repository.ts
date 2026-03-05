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
    return await prisma.documento.findMany();
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