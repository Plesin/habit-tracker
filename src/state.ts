import { atom } from 'recoil'

export const habitsState = atom({
  key: 'habits',
  default: [
    {
      id: 1,
      name: 'Meditate',
      description: 'Description',
      iconName: 'check_circle',
      streak: 0,
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
      completed: false,
      //   completedDates: []
      repeat: 'D',
    },
  ],
})
