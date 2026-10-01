import ServiceMarca from '../services/cachorro.js';

class ControllerCachorro {
    Buscar(req, res) {
        try {
            const cachorro = ServiceCachorro.Buscar();
            res.send({ cachorro });
        }catch (error) {
            res.send({ error: error.message });
        }
    }

    BuscarUm(req, res) {
        try {
            const id = req.params.id;
            const cachorro = ServiceCachorro.BuscarUm(id);
            res.send({ cachorro });
        } catch (error) {
            res.send({ error: error.message });
        }
    }

    Criar(req, res) {
        try {
            const cachorro = req.body.cachorro;
            ServiceCachorro.Criar(cachorro);
            res.send({ message: "Cachorro criado com sucesso" });
        } catch (error) {
            res.send({ error: error.message });
        }
    }

    Alterar(req, res) {
        try {
            const id = req.params.id;
            const cachorro = req.body.cachorro;
            ServiceCachorro.Alterar(id, cachorro);
            res.send({ message: "Cachorro alterado com sucesso" });
        } catch (error) {
            res.send({ error: error.message });
        }
    }

    Deletar(req, res) {
        try {
            const id = req.params.id;
            ServiceCachorro.Deletar(id);
            res.send({ message: "Cachorro deletado com sucesso" });
        } catch (error) {
            res.send({ error: error.message });
        }
    }
}

export default new ControllerCachorro()