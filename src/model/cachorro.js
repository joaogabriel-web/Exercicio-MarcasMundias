const cachorro = [
    {tipo: "Labrador", nome: "Rex"},
    {tipo: "Poodle", nome: "Fifi"},
    {tipo: "Bulldog", nome: "Max"},
    {tipo: "Beagle", nome: "Buddy"},
    {tipo: "Chihuahua", nome: "Bella"}  
];

class Cachorro {
    Buscar() {
        return cachorro
    }

    BuscarUm(id) {
        return cachorro[id]
    }

    Criar(nome) {
        cachorro.push(nome)
    }

    Alterar(id, nome) {
        cachorro[id] = nome
    }

    Deletar(id) {
        cachorro.splice(id, 1)
    }
}

export default new Cachorro()