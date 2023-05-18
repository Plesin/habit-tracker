import { Paper, Typography } from '@mui/material'
import { Grid } from '@mui/material'
import { useRecoilValue, selector } from 'recoil'

import { habitsState } from './state'

export default function Summary() {
  const summaryState = selector({
    key: 'summaryState',
    get: ({ get }) => {
      const habits = get(habitsState)
      const total = habits.length
      const completed = habits.filter((habit) => habit.completed).length
      const todo = total - completed
      const allCompleted = total === completed
      const totalDuration = habits.reduce((acc, habit) => {
        return acc + habit.duration
      }, 0)

      return {
        total,
        totalColor: allCompleted ? 'success.main' : 'warning.main',
        completed,
        completedColor: allCompleted ? 'success.main' : 'warning.main',
        todo,
        todoColor: allCompleted ? 'success.main' : 'info.main',
        allCompleted,
        totalDuration,
      }
    },
  })
  const summaryValues = useRecoilValue(summaryState)
  const partyIcon = summaryValues.allCompleted ? '🎉' : ''

  return (
    <Paper sx={{ m: '0.5rem', p: '0.5rem 1rem', backgroundColor: 'primary' }}>
      <Typography variant="h6" sx={{ textAlign: 'center' }}>
        {partyIcon} Summary {partyIcon}
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
          <Typography
            variant="subtitle1"
            display="block"
            gutterBottom
            sx={{ color: 'info.main' }}
          >
            Time {summaryValues.totalDuration} minutes
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}
