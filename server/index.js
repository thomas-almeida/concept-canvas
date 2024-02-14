const express = require('express');
const { OpenAI } = require('openai');
require('dotenv').config();
const cors = require('cors')
const app = express();
const PORT = process.env.PORT;

const openai = new OpenAI(process.env.OPENAI_API_KEY);

app.use(express.json());
app.use(cors())

app.post('/send-message', async (req, res) => {
    try {
        const { message } = req.body;
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: message }]
        });
        res.json({ reply: response.choices[0].message.content });
    } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
        res.status(500).json({ error: 'Erro ao enviar mensagem' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor está ouvindo na porta ${PORT}`);
});
