const express = require('express')
const OpenAI = require('openai')
const { PrismaClient } = require('@prisma/client')
require('dotenv').config()

const app = express()
const port = process.env.PORT
const prisma = new PrismaClient()
const openai = new OpenAI({ apiKey: process.env.OPEN_AI_API_KEY })

app.use(express.json())

app.post('/conversations', async (req, res) => {
  try {
    const conversation = await prisma.conversation.create({
      data: {}
    })
    res.json({ conversationId: conversation.id })
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ error: 'An error occurred' })
  }
})

app.post('/chat/:conversationId', async (req, res) => {
  const { message } = req.body
  const { conversationId } = req.params

  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: message }],
      model: 'gpt-3.5-turbo',
    })

    const response = completion.choices[0].message.content

    await prisma.message.create({
      data: {
        content: message,
        isUserMessage: true,
        conversationId: parseInt(conversationId)
      }
    })

    await prisma.message.create({
      data: {
        content: response,
        isUserMessage: false,
        conversationId: parseInt(conversationId)
      }
    })

    res.json(response)
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ error: 'An error occurred' })
  }
})

app.get('/conversations', async (req, res) => {
  try {
    const conversations = await prisma.conversation.findMany()
    res.json(conversations)
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ error: 'An error occurred' })
  }
})

app.get('/conversations/:conversationId/messages', async (req, res) => {
  const { conversationId } = req.params

  try {
    const messages = await prisma.message.findMany({
      where: {
        conversationId: parseInt(conversationId)
      }
    })
    res.json(messages)
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ error: 'An error occurred' })
  }
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
