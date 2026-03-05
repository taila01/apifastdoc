import { DocumentoRepository } from "../repositories/documento.repository";

const repository = new DocumentoRepository();

export class DocumentoService {
  async criarDocumento(titulo: string, descricao?: string) {
    return await repository.create({ titulo, descricao });
  }

  async listarTodos() {
    return await repository.findAll();
  }

  async buscarPorId(id: number) {
    return await repository.findById(id);
  }

  async atualizarDocumento(id: number, data: { titulo?: string; descricao?: string; status?: string }) {
    return await repository.update(id, data);
  }

  async assinarDocumento(id: number) {
    return await repository.updateStatus(id, "assinado");
  }

  async excluirDocumento(id: number) {
    return await repository.delete(id);
  }
}