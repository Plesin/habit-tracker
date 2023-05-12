import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Icon from '@mui/material/Icon'
import Divider from '@mui/material/Divider'

const items = [
  {
    id: 1,
    name: 'Meditate',
    description: 'Description',
    iconName: 'star',
    streak: 0,
    lastCompleted: null,
  },
  {
    id: 2,
    name: 'Morning Yoga',
    description: 'Description',
    iconName: 'add_circle',
    streak: 0,
    lastCompleted: null,
  },
  {
    id: 3,
    name: '10k Steps a day',
    description: 'Description',
    iconName: 'directions_walk',
    streak: 0,
    lastCompleted: null,
  },
]

export default function InsetDividers() {
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
            <ListItemText primary={item.name} secondary={item.description} />
          </ListItem>
          <Divider variant="inset" component="li" />
        </Box>
      ))}

      {/* <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem> */}
    </List>
  )
}
