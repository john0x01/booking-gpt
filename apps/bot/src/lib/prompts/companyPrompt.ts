import { getInitialPrompt } from '.'

export function companyPrompt({ customerName }: { customerName: string }) {
  return getInitialPrompt({
    customerName,
    companyName: 'Barbearia do John',
    niche: 'Barbearia',
    services: [
      {
        name: 'Barba',
        value: 35,
      },
      {
        name: 'Corte',
        value: 40,
      },
      {
        name: 'Corte e barba',
        value: 70,
      },
    ],
    currentBookings: [
      {
        dateStart: new Date('2024-10-19 12:00:00'),
        dateEnd: new Date('2024-10-19 13:00:00'),
      },
      {
        dateStart: new Date('2024-10-19 13:00:00'),
        dateEnd: new Date('2024-10-19 14:00:00'),
      },
      {
        dateStart: new Date('2024-10-19 15:00:00'),
        dateEnd: new Date('2024-10-19 16:00:00'),
      },
    ],
  })
}
