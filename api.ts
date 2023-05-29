import type { THabit } from './src/types'

const BaseUrl = 'http://localhost:3001'

export const getHabits = async () => {
  return fetch(`${BaseUrl}/habits`).then((res) => res.json())
}

export const postHabit = async (habit: THabit) => {
  return fetch(`${BaseUrl}/habits`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(habit),
  }).then((res) => res.json())
}

export const getCompletedDates = async () => {
  return fetch(`${BaseUrl}/completedDates`).then((res) => res.json())
}

export const getCompletedDatesById = async (habitId: string) => {
  return fetch(`${BaseUrl}/completedDates/${habitId}`).then((res) => res.json())
}
