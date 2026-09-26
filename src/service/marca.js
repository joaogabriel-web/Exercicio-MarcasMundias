import Marca from "../model/marca.js";

class ServiceMarca {
    Buscar() {
        return Marca.Buscar()
    }

    BuscarUm() {
        if (!id || isNaN(id)) {
            return { error: "ID inválido" };
        }
        return Marca.BuscarUm(id)
    }

    Criar(marca) {
        if (!marca) {
            throw new Error("Nome da marca é obrigatório");
        }
        Marca.Criar(marca)
    }

    Alterar(id, marca) {
        if (!id || isNaN(id) || !marca) {
            throw new Error("Imforme o ID ea Marca para alterar");
        }
        Marca.Alterar(id, marca)
    }
    
    Deletar(id) {
        if (!id || isNaN(id)) {
            throw new Error("ID inválido");
        }
        Marca.Deletar(id)
    }
}