import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Icon from '@mui/material/Icon'
import Divider from '@mui/material/Divider'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { habitsState } from './state'

import Summary from './Summary'

export default function InsetDividers() {
  const items = useRecoilValue(habitsState)
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
    <>
      <Summary />
      <List
        sx={{
          width: '100%',
        }}
      >
        {items.map((item) => {
          const color = item.completed ? 'success.main' : 'text.grey'
          return (
            <Box key={item.id}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    onClick={() => toggleCompleted(item.id)}
                    sx={{ backgroundColor: color }}
                  >
                    <Icon>{item.iconName}</Icon>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={`${item.name} | ${item.repeat}`}
                  secondary={`${item.duration} minutes`}
                />
              </ListItem>
              <Divider variant="inset" component="li" sx={{ marginLeft: 0 }} />
            </Box>
          )
        })}
      </List>
    </>
  )
}
