const axios = require('axios');

module.exports = {
    gerenciarAlarme(alarmeId, acao) {
        let request = {
            url: `http://${process.env.MONITOR_SERVER}/alarme/${alarmeId}/${acao}`,
            data: {},
            config: {}
        };

        axios.post(request.url, request.data, request.config)
            .then(res => {
                console.log(`Alarme ${alarmeId}: ${acao}`);
            })
            .catch(erro => {
                console.log(`${erro.message}`);
            });
    }
}