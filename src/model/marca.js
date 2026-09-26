const marca = Array("Dell", "HP", "Lenovo", "Asus", "Acer", "Apple", "Samsung", "Microsoft", "Razer", "MSI");

class Marca {
    Buscar() {
        return marca
    }

    BuscarUm(id) {
        return marca[id]
    }

    Criar(nome) {
        marca.push(nome)
    }

    Alterar(id, nome) {
        marca[id] = nome
    }

    Deletar(id) {
        marca.splice(id, 1)
    }
}

export default new Marca()