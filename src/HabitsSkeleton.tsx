import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

export default function HabitsSkeleton() {
  return (
    <Stack spacing={1} sx={{ p: '1rem' }}>
      <Skeleton variant="rectangular" height={110} />
      <Skeleton
        variant="rectangular"
        height={60}
        component={'div'}
        sx={{ marginBottom: '1rem' }}
      />
      <Skeleton variant="rectangular" height={60} />
      <Skeleton variant="rectangular" height={60} />
      <Skeleton variant="rectangular" height={60} />
      <Skeleton variant="rectangular" height={60} />
    </Stack>
  )
}
