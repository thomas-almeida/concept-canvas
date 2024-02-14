## ConceptCanvas

![img](https://uploaddeimagens.com.br/images/004/739/722/full/358shots_so.png?1707896070)

Breve documentação do projeto, o objetivo desta documentação é de forma simples e objetiva, ajudar a dar os primeiros passos e acessar plenamente o app.

> Stack: Node.js, Express, Prisma (SQLite)

---- 

## Instalação

Voce pode testar o conceptCanvas no seu ambiente de desenvolvimento de uma forma muito simples, o projeto está dividido em dois ambientes: Backend (pasta **server**) e Frontend (pasta **client**)

- Arquivo **.env** na pasta server: Para que o app de as respostas sobre as ideias de startups, é necessário uma chave da Api do chatgpt, disponível no site da própria OpenAi, uma vez que tiver a sua, poderá inseri-la como cita o arquivo **.env.example** que contém o exemplo de como inserir corretamente sua chave no projeto para o backend conseguir acessar o chatgpt.
> OPENAI_API_KEY = "SUA_CHAVE"

- Iniciar o **backend**: Para acessar o backend basta dar o comando **node .** na raiz da pasta **server**
> node .
- Iniciar o **frontend**: Para iniciar o cliente basta dar o comando **npm run dev** na raiz da pasta **client**
> npm run dev
----

## Funcionamento do App
O que faz o ConceptCanvas especial, é a forma como o prompt é focado em mostrar uma ideia de como seria criar aquela ideia de startup inovadora,com isso existem 3 inputs iniciais.


- Ramo de Atividade
  - Nesse input podemos inserir qual nicho do mercado queremos atingir com nossa ideia, isso faz com que o prompt foque em varias coisas como publico alvo, além de analisar o nicho de mercado antes de gerar uma resposta;
- Modelo de público alvo:
  - Aqui, diferenciamos e escolhemos quem será o alvo da nossa persona, se são empresas (B2B) ou clientes de pessoa física (B2C).
- Sobre a ideia inovadora:
  - Este é um input mais livre, para que o usuário detalhe com maior enfase como sua ideia deve ser modelada. 
