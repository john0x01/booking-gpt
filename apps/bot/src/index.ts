import qrcode from 'qrcode-terminal'
import { Client, LocalAuth } from 'whatsapp-web.js'
import { openai } from './lib/openai'
import { companyPrompt } from './lib/prompts/companyPrompt'

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
  console.log(message.body)
  console.log(message.from)
  if (message.body === 'ping') {
    // await client.sendMessage(message.from, 'pong')
    const model = openai.chat('gpt-3.5-turbo', {
      user: message.from,
    })

    const messages = [
      {
        role: 'system',
        content: companyPrompt,
      },
      {
        role: 'user',
        content: message.body,
      },
    ]

    // const content =
    //   (await generateText({
    //     model,
    //     messages,
    //   })) || 'Não entendi...'
    // Ver como faz para passar o texto só uma vez para o modelo e ele entender
  }
})

client.initialize()
