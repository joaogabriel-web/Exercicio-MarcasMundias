import Cachorro  from '../model/cachorro.js';

class ServiceCachorro {
    Buscar() {
        return Cachorro.Buscar()
    }

    BuscarUm(id) {
        if (!id || isNaN(id)) {
            return { error: "ID inválido" };
        }
        return Cachorro.BuscarUm(id)
    }

    Criar(cachorro) {
        if (!cachorro) {
            throw new Error("Nome do cachorro é obrigatório");
        }
        Cachorro.Criar(cachorro)
    }

    Alterar(id, cachorro) {
        if (!id || isNaN(id) || !cachorro) {
            throw new Error("Imforme o ID e o Cachorro para alterar");
        }
        Cachorro.Alterar(id, cachorro)
    }
    
    Deletar(id) {
        if (!id || isNaN(id)) {
            throw new Error("ID inválido");
        }
        Cachorro.Deletar(id)
    }
}

export default new ServiceCachorro()