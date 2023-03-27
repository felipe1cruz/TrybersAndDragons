## Trybers and Dragons

## Sobre
&nbsp;&nbsp; Trybers And Dragons é um projeto do curso de Desenvolvedor Web Full Stack da Trybe, para o módulo de backend. Nesse Projeto foi utilizado os princípios de arquitetura SOLID e os princípios de POO, utilizando o Typescript para fazer uma estrutura de um jogo RPG, montando classes de raças, arquétipo e estrutura de batalha.

## Desafios
&nbsp;&nbsp; Os primeiros contatos com o Typescript ele "atrapalha" a maneira que estava acostumado a programar, te obrigando a "tipar" e pensar em todos os retornos de todas as funções. O POO e o SOLID auxiliam muito o pensar e montar o projeto como um todo.

## Arquivos:
&nbsp;&nbsp; A base do projeto foi desenvolvido pela Trybe (Dockerfile, package.json, docker-compose.yml and other configurations). Arquivos desenvolvidos por mim:
- tudo na pasta `./src/`, exceto `./src/Battle/Battle.ts` e `./src/utils.ts`;

## Tecnologias:
&nbsp;&nbsp; Tecnologias aplicadas por mim nesse projeto:
- Typescript;
- POO;
- Solid;

## Como rodar o projeto:
- Certifique-se de ter o docker instalado com as versões 1.29 ou superior;
- Clone o repositório;
- Execute os containers do banco de dados e do Node com o comando `docker-compose up -d`;
- Acesse o container do Node com o comando `docker exec -it trybers_and_dragons bash`; 
- Instale todas as dependências do projeto com `npm install`;
- Rode a aplicação com `npm start`; 

![image](https://user-images.githubusercontent.com/96309898/206855577-9df9fb92-5552-4a84-9eeb-ee85fb03a4ba.png)
printscreen com a estrutura de arquivos e a classe Abstrata Race.
