import Marca from "../model/cachorro.js";

class ServiceCachorro {
    Buscar() {
        return Cachorro.Buscar()
    }

    BuscarUm() {
        if (!id || isNaN(id)) {
            return { error: "ID inválido" };
        }
        return Marca.BuscarUm(id)
    }

    Criar(cachorro) {
        if (!cachorro) {
            throw new Error("Nome do cachorro é obrigatório");
        }
        Marca.Criar(cachorro)
    }

    Alterar(id, cachorro) {
        if (!id || isNaN(id) || !cachorro) {
            throw new Error("Imforme o ID e o Cachorro para alterar");
        }
        Marca.Alterar(id, cachorro)
    }
    
    Deletar(id) {
        if (!id || isNaN(id)) {
            throw new Error("ID inválido");
        }
        Marca.Deletar(id)
    }
}

export default new ServiceCachorro()