## TODO List

- [x] Implementar função 'atualizar'.
- [x] Implementar função 'excluir'.
- [x] Melhorar lógica dos query parameters da função 'buscar' (spread req.query).
- [x] Criar middleware para exibir os payloads em ambiente 'dev' (reusar logger).
- [x] Testar o que acontece com o petstore se o auth não estiver rodando.
- [ ] Extrair erros para um enum (criar 'error-code' module).
- [ ] [Monitor] Criar um middleware para validar se o alarme a ser ativado/desativado existe.
- [ ] [Monitor] Juntar ativar e desativar numa única função.
- [ ] [Monitor] Refletir se está correto usar POST no ativar/desativar.
- [ ] [Monitor] Incluir validação do token para todas as requisições /alarme (gerar o token antes de chamar o monitor).
- [ ] [Monitor] Incluir mais um alarme para situações em que o Auth está fora do ar - refletir como resolver o problema de geração do token quando o Auth está fora do ar e você precisa de um token para ativar um alarme.