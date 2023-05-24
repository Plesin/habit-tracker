export type THabit = {
  id: string
  name: string
  description: string
  iconName: 'check_circle'
  streak: number
  duration: number
  completed: boolean
  repeat: 'D' | 'W' | 'M'
}
