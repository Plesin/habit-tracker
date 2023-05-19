import { atom } from 'recoil'
import { subDays } from 'date-fns'

export const habitsState = atom({
  key: 'habits',
  default: [
    {
      id: 1,
      name: 'Meditate',
      description: 'Description',
      iconName: 'check_circle',
      streak: 0,
      duration: 10,
      completed: false,
      //   completedDates: []
      repeat: 'D',
    },
    {
      id: 2,
      name: 'Morning Yoga',
      description: 'Description',
      iconName: 'check_circle',
      streak: 0,
      duration: 5,
      completed: false,
      //   completedDates: []
      repeat: 'D',
    },
    {
      id: 3,
      name: '10k Steps a day',
      description: 'Description',
      iconName: 'check_circle',
      streak: 0,
      duration: 30,
      completed: false,
      //   completedDates: []
      repeat: 'D',
    },
    {
      id: 4,
      name: 'Vitamins',
      description: 'Description',
      iconName: 'check_circle',
      streak: 0,
      duration: 1,
      completed: false,
      //   completedDates: []
      repeat: 'D',
    },
  ],
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
