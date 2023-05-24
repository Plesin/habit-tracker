import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Icon from '@mui/material/Icon'
import Divider from '@mui/material/Divider'
import {
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from 'recoil'
import { format } from 'date-fns'

import { habitsState, past7DaysState } from './atoms'
import HabitsSkeleton from './HabitsSkeleton'
import type { THabit } from './types'

export default function HabitList() {
  const habitsLoadable = useRecoilValueLoadable(habitsState)
  const past7Days = useRecoilValue(past7DaysState)
  const setHabitsState = useSetRecoilState(habitsState)
  const toggleCompleted = (id: string) => {
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

  if (habitsLoadable.state === 'loading') {
    return <HabitsSkeleton />
  }

  const habits = habitsLoadable.contents

  return (
    <List
      sx={{
        width: '100%',
      }}
    >
      {habits.map((item: THabit) => {
        const color = item.completed ? 'success.main' : 'text.grey'
        return (
          <>
            <Box
              key={item.id}
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
            <Box
              sx={{
                padding: '0 16px',
                display: 'flex',
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'center',
                gap: '10px',
              }}
            >
              {past7Days.map((item) => (
                <Box
                  title={format(item, 'eee d')}
                  sx={{
                    flex: 1,
                    height: '6px',
                    mb: '3px',
                    borderRadius: '3px',
                    backgroundColor: 'green',
                    ':last-child': {
                      visibility: 'hidden',
                    },
                  }}
                ></Box>
              ))}
            </Box>
            <Divider variant="inset" component="li" sx={{ marginLeft: 0 }} />
          </>
        )
      })}
    </List>
  )
}
