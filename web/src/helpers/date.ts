export function fixZero(date: number) {
  return date < 10 ? '0' + date : date
}

export function formatDate(date: string) {
  const monthList = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ]

  const newDate = new Date(date)
  const year = newDate.getFullYear()
  const month = newDate.getMonth()
  const day = newDate.getDate()

  return `${fixZero(day)} de ${monthList[month]} de ${fixZero(year)}`
}
