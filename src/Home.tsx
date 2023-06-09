import { useState, Suspense } from 'react'
import { Fab, Box } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import HabitList from './HabitList'
import HabitModal from './HabitModal'
import Summary from './Summary'
import Timeline from './Timeline'
import HabitsSkeleton from './HabitsSkeleton'

export default function Home() {
  const [open, setOpen] = useState(false)

  const handleModalOpen = (open: boolean) => {
    setOpen(open)
  }

  return (
    <>
      <Suspense fallback={<HabitsSkeleton />}>
        <Summary />
        <Timeline />
        <HabitList />
      </Suspense>
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
        <Fab
          color="secondary"
          aria-label="add"
          onClick={() => handleModalOpen(true)}
        >
          <AddIcon />
        </Fab>
      </Box>
      <HabitModal open={open} handleModalOpen={handleModalOpen} />
    </>
  )
}
