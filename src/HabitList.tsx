import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Icon from '@mui/material/Icon'
import Divider from '@mui/material/Divider'

import { atom, useRecoilValue } from 'recoil'

export const habitsState = atom({
  key: 'habits',
  default: [
    {
      id: 1,
      name: 'Meditate',
      description: 'Description',
      iconName: 'star',
      streak: 0,
      lastCompleted: null,
      repeat: 'D',
    },
    {
      id: 2,
      name: 'Morning Yoga',
      description: 'Description',
      iconName: 'add_circle',
      streak: 0,
      lastCompleted: null,
      repeat: 'D',
    },
    {
      id: 3,
      name: '10k Steps a day',
      description: 'Description',
      iconName: 'directions_walk',
      streak: 0,
      lastCompleted: null,
      repeat: 'D',
    },
  ],
})

export default function InsetDividers() {
  const items = useRecoilValue(habitsState)
  return (
    <List
      sx={{
        width: '100%',
      }}
    >
      {items.map((item) => (
        <Box key={item.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Icon>{item.iconName}</Icon>
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`${item.name} | ${item.repeat}`}
              secondary={item.description}
            />
          </ListItem>
          <Divider variant="inset" component="li" sx={{ marginLeft: 0 }} />
        </Box>
      ))}
    </List>
  )
}
