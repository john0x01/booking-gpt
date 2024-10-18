import { getInitialPrompt } from './lib/prompts'

const text = getInitialPrompt({
  customerName: 'Pedro',
  companyName: 'Barbearia do John',
  niche: 'Barbearia',
  services: [
    {
      name: 'Barba',
      value: '35',
    },
    {
      name: 'Corte',
      value: '40',
    },
    {
      name: 'Corte e barba',
      value: '70',
    },
  ],
  currentBookings: [
    {
      customerName: 'José',
      customerPhone: '1234567890',
      serviceName: 'Barba',
      value: '35',
      dateStart: new Date('2022-01-01 12:00:00'),
      dateEnd: new Date('2022-01-01 13:00:00'),
    },
    {
      customerName: 'José',
      customerPhone: '1234567890',
      serviceName: 'Barba',
      value: '35',
      dateStart: new Date('2022-01-01 13:00:00'),
      dateEnd: new Date('2022-01-01 14:00:00'),
    },
    {
      customerName: 'José',
      customerPhone: '1234567890',
      serviceName: 'Barba',
      value: '35',
      dateStart: new Date('2022-01-01 15:00:00'),
      dateEnd: new Date('2022-01-01 16:00:00'),
    },
  ],
})

console.log(text)
