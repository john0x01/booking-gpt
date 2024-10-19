import { generateText } from 'ai'
import dotenv from 'dotenv'
import qrcode from 'qrcode-terminal'
import { Client, LocalAuth } from 'whatsapp-web.js'
import { openai } from './lib/openai'
import { companyPrompt } from './lib/prompts/companyPrompt'

dotenv.config()

const client = new Client({
  authStrategy: new LocalAuth(),
})
client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true })
})

client.on('ready', () => {
  console.log('Client is ready!')
})

client.on('message_create', async (message) => {
  const model = openai.chat('gpt-3.5-turbo', {
    user: message.from,
  })

  const customer = await message.getContact()

  const { text } = await generateText({
    model,
    system: companyPrompt({ customerName: customer.pushname }),
    prompt: message.body,
  })

  await client.sendMessage(message.from, text)
})

client.initialize()
