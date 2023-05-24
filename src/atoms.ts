import { atom } from 'recoil'
import { subDays } from 'date-fns'
import { getHabits } from '../api'

export const habitsState = atom({
  key: 'habits',
  default: getHabits(),
})

const currentDate = new Date()
const past7Days: (number | Date)[] = []
for (let i = 6; i >= 0; i--) {
  const date: number | Date = subDays(currentDate, i)
  past7Days.push(date)
}

export const past7DaysState = atom({
  key: 'past7Days',
  default: past7Days,
})
