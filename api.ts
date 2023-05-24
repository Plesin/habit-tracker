const BaseUrl = 'http://localhost:3001'

export const getHabits = async () => {
  return fetch(`${BaseUrl}/habits`).then((res) => res.json())
}
