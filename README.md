# Rally Biblico

---

Um Software para gestão do Rally Bíblico. Seu objetivo é facilitar o preenchimento das trilhas e gerar relatórios de acompanhamento para a equipe de gestão. 

> Este **não** é um software livre, nem de livre distibuição. Não é permitida a cópia nem distribuição sem consulta prévia dos autores e dos proprietários do software.
> Favor consultar o arquivo LICENSE.md

Para fazer o deploy do **ambiente de desenvolvimento**:

> Testado em ambiente Linux. No meu ambiente foi necessário usar o sudo em todos os comandos docker

1. Instale o **Docker** conforme as instruções do site para o seu Sistema Operacional:
[Tutorial de Instalação do Docker](https://docs.docker.com/install/#server)

2. Clone o repositório do Projeto
´´´ git clone https://github.com:fillipefeitosa/rally-biblico.git ```

3. Crie uma imagem do ambiente de Dev usando o Docker build
``` 
mkdir /path/to/rally/ && cd /path/to/rally
(sudo) docker build -t "rally:meteor"
```

4. Use o alias para chamar o ambiente
``` 
alias meteor-dev='docker run -it --rm --name=app -v $PWD:/app -p 3000:3000 rally:meteor'
```

5. Inicie o ambiente
```
meteor-dev
```

---

Folha de estilo:
1. Identação e espaçamento: 4 espaços

