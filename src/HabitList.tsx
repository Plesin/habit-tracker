import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Icon from '@mui/material/Icon'
import Divider from '@mui/material/Divider'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import { habitsState } from './atoms'
import type { THabit } from './types'
import WeekStatus from './WeekStatus'

export default function HabitList() {
  const habits = useRecoilValue(habitsState)
  const setHabitsState = useSetRecoilState(habitsState)

  const toggleCompleted = (id: string) => {
    // TODO a POST call
    setHabitsState((oldHabits: THabit[]) => {
      return oldHabits.map((habit) => {
        if (habit.id === id) {
          return {
            ...habit,
            completed: !habit.completed,
          }
        }
        return habit
      })
    })
  }

  return (
    <List
      sx={{
        width: '100%',
      }}
    >
      {habits.map((item: THabit) => {
        const color = item.completed ? 'success.main' : 'text.grey'
        return (
          <Box key={item.id}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <ListItem sx={{ pb: 0 }}>
                <ListItemText
                  primary={`${item.name} | ${item.repeat}`}
                  secondary={`${item.duration} minutes`}
                />
              </ListItem>
              <ListItemAvatar>
                <Avatar
                  onClick={() => toggleCompleted(item.id)}
                  sx={{ backgroundColor: color }}
                >
                  <Icon>{item.iconName}</Icon>
                </Avatar>
              </ListItemAvatar>
            </Box>
            <WeekStatus habitId={item.id} />
            <Divider variant="inset" component="li" sx={{ marginLeft: 0 }} />
          </Box>
        )
      })}
    </List>
  )
}
