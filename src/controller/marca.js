import ServiceMarca from '../services/marca.js';

class ControllerMarca {
    Buscar(req, res) {
        try {
            const marca = ServiceMarca.Buscar();
            res.send({ marca });
        }catch (error) {
            res.send({ error: error.message });
        }
    }

    BuscarUm(req, res) {
        try {
            const id = req.params.id;
            const marca = ServiceMarca.BuscarUm(id);
            res.send({ marca });
        } catch (error) {
            res.send({ error: error.message });
        }
    }

    Criar(req, res) {
        try {
            const marca = req.body.marca;
            ServiceMarca.Criar(marca);
            res.send({ message: "Marca criada com sucesso" });
        } catch (error) {
            res.send({ error: error.message });
        }
    }

    Alterar(req, res) {
        try {
            const id = req.params.id;
            const marca = req.body.marca;
            ServiceMarca.Alterar(id, marca);
            res.send({ message: "Marca alterada com sucesso" });
        } catch (error) {
            res.send({ error: error.message });
        }
    }

    Deletar(req, res) {
        try {
            const id = req.params.id;
            ServiceMarca.Deletar(id);
            res.send({ message: "Marca deletada com sucesso" });
        } catch (error) {
            res.send({ error: error.message });
        }
    }
}

export default new ControllerMarca()