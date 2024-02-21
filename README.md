# ConceptCanvas

![Imagem do ConceptCanvas](https://uploaddeimagens.com.br/images/004/739/722/full/358shots_so.png?1707896070)

Esta é uma breve documentação do projeto ConceptCanvas, elaborada para auxiliar de forma simples e objetiva os usuários a darem os primeiros passos e explorarem plenamente o aplicativo.

## Stack

- **Node.js**
- **Express** com a API da OpenAI

---

## Instalação

Você pode testar o ConceptCanvas em seu ambiente de desenvolvimento de forma simples. O projeto está dividido em dois ambientes: Backend (pasta **server**) e Frontend (pasta **client**).

### Backend

1. Instale as dependências:
```bash
$ cd server
$ npm install
```
2. Inicie o servidor:
```bash
$ node .
```
### Arquivo `.env` no backend
Para que o aplicativo forneça respostas sobre ideias de startups, é necessário obter uma chave da API do ChatGPT, disponível no site da OpenAI. Uma vez obtida a chave, insira-a no arquivo .env, conforme exemplificado no arquivo .env.example.
```dotenv
OPEN_AI_API_KEY="SUA_CHAVE"
```

### Frontend
1. Instale as dependências:
```bash
$ cd client
$ npm install
```
2. Inicie o servidor:
```bash
$ npm run dev
```

----

### Funcionamento do App
O que torna o ConceptCanvas especial é a maneira como o prompt é focado em gerar ideias para startups inovadoras. Existem três inputs iniciais:

- Ramo de Atividade
  - Insira o nicho de mercado que deseja explorar com sua ideia. Isso permite que o prompt leve em consideração o público-alvo e analise o mercado antes de gerar uma resposta.
- Modelo de Público Alvo
   - Escolha entre empresas (B2B) ou clientes pessoa física (B2C) como público-alvo para sua ideia.
- Sobre sua ideia inovadora
  - Este campo permite detalhar com maior ênfase como sua ideia deve ser modelada e implementada.
