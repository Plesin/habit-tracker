import { Fab, Box } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import HabitList from './HabitList'

export default function Home() {
  return (
    <>
      <HabitList />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          position: 'fixed',
          bottom: '1rem',
          left: 0,
          right: 0,
        }}
      >
        <Fab color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
      </Box>
    </>
  )
}
