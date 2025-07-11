module.exports = {
    inserir(req, res) {
        res.json({ op: 'inserir' })
    },
    buscar(req, res) {
        res.json({ op: 'buscar' })
    }
}