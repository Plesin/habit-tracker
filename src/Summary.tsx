import { Paper, Typography } from '@mui/material'
import { Grid } from '@mui/material'
import { useRecoilValue, selector } from 'recoil'

import { habitsState } from './state'

export default function Summary() {
  const items = useRecoilValue(habitsState)
  const summaryState = selector({
    key: 'summaryState',
    get: ({ get }) => {
      const habits = get(habitsState)
      const total = habits.length
      const completed = habits.filter((habit) => habit.completed).length
      const todo = total - completed
      return {
        total,
        totalColor: total === completed ? 'success.main' : 'warning.main',
        completed,
        completedColor: total === completed ? 'success.main' : 'warning.main',
        todo,
        todoColor: todo !== total ? 'success.main' : 'info.main',
      }
    },
  })
  const summaryValues = useRecoilValue(summaryState)

  return (
    <Paper sx={{ m: '0.5rem', p: '0.5rem 1rem' }}>
      <Typography variant="h6" sx={{ textAlign: 'center' }}>
        Summary
      </Typography>
      <Grid sx={{ flexGrow: 1 }} container>
        <Grid item xs={6}>
          <Typography
            variant="subtitle1"
            display="block"
            gutterBottom
            sx={{ color: summaryValues.totalColor }}
          >
            Total {summaryValues.total}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="subtitle1"
            display="block"
            gutterBottom
            sx={{ color: summaryValues.completedColor }}
          >
            Completed {summaryValues.completed}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="subtitle1"
            display="block"
            gutterBottom
            sx={{ color: summaryValues.todoColor }}
          >
            Todo {summaryValues.todo}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1" display="block" gutterBottom>
            Date: {new Date().toLocaleDateString()}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}
