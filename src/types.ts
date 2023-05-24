export type THabit = {
  id: number
  name: string
  description: string
  iconName: 'check_circle'
  streak: number
  duration: number
  completed: boolean
  repeat: 'D' | 'W' | 'M'
}
