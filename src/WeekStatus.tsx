import { memo } from 'react'
import Box from '@mui/material/Box'
import { format } from 'date-fns'
import { useRecoilValue } from 'recoil'

import { past7DaysState, completedDatesState } from './atoms'

// TODO - optimize - too many calls
const getCompletedState = (
  day: number | Date,
  completedDates: string[] = []
) => {
  if (completedDates.includes(format(day, 'yyyy-MM-dd'))) {
    return 'success.main'
  }
  return 'grey.400'
}

const WeekStatus = memo(function ({ habitId }: { habitId: string }) {
  const past7Days = useRecoilValue(past7DaysState)
  const completedDates = useRecoilValue(completedDatesState)
  return (
    <Box
      sx={{
        padding: '0 16px',
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        gap: '10px',
      }}
    >
      {past7Days.map((day) => {
        return (
          <Box
            title={format(day, 'eee d')}
            key={format(day, 'd')}
            sx={{
              flex: 1,
              height: '6px',
              mb: '3px',
              borderRadius: '3px',
              backgroundColor: getCompletedState(day, completedDates[habitId]),
              ':last-child': {
                visibility: 'hidden',
              },
            }}
          ></Box>
        )
      })}
    </Box>
  )
})

export default WeekStatus
