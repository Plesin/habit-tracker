import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Icon from '@mui/material/Icon'
import Divider from '@mui/material/Divider'
import { useRecoilValue, useSetRecoilState, selector } from 'recoil'
import { habitsState, last7DaysState } from './state'
import { format } from 'date-fns'

export default function InsetDividers() {
  const items = useRecoilValue(habitsState)
  const past6DaysState = selector({
    key: 'past6Days',
    get: ({ get }) => {
      const last7days: (number | Date)[] = get(last7DaysState)
      const past6Days = last7days.slice(0, 6)
      return past6Days
    },
  })
  const past6Days = useRecoilValue(past6DaysState)
  const setHabitsState = useSetRecoilState(habitsState)
  const toggleCompleted = (id: number) => {
    setHabitsState((oldHabits) => {
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
      {items.map((item) => {
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
                margin: '3px 0',
                display: 'flex',
                gap: '8px',
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'start',
              }}
            >
              {past6Days.map((item) => (
                <Box
                  sx={{
                    width: '40px',
                    height: '6px',
                    borderRadius: '3px',
                    backgroundColor: 'green',
                  }}
                  title={format(item, 'eee d')}
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
