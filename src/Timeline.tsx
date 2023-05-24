import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { useRecoilValue } from 'recoil'
import { format } from 'date-fns'

import { past7DaysState } from './atoms'

export default function Timeline() {
  const past7Days = useRecoilValue(past7DaysState)
  return (
    <List
      sx={{
        padding: '0 16px',
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
      }}
    >
      {past7Days.map((day) => {
        const dayOfMonth = format(day, 'd')
        return (
          <ListItem
            sx={{ p: 0, textAlign: 'center', backgroundColor: 'grey.100' }}
            key={dayOfMonth}
          >
            <ListItemText
              primary={`${format(day, 'eee')}`}
              secondary={dayOfMonth}
            />
          </ListItem>
        )
      })}
    </List>
  )
}
