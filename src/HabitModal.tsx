import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'

import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useSetRecoilState } from 'recoil'
import { v4 as uuidv4 } from 'uuid'

import { habitsState } from './atoms'
import { CustomInput } from './CustomInput'
import InputField from './InputField'
import type { THabit } from './types'
import { postHabit } from '../api'

const style = {
  position: 'absolute',
  width: '100vw',
  height: '100vh',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 3,
}

type THabitModalProps = {
  open: boolean
  handleModalOpen: (open: boolean) => void
}

export default function HabitModal({
  open,
  handleModalOpen,
}: THabitModalProps) {
  const [habitName, setHabitName] = useState('')
  const [duration, setDuration] = useState('' as string | number)
  const [repeat, setRepeat] = useState('D')
  const setHabitsState = useSetRecoilState(habitsState)

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHabitName(event.target.value)
  }

  const handleDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(event.target.value)
  }

  const handleRepeatChange = (event: SelectChangeEvent<string>) => {
    setRepeat(event.target.value)
  }

  const addHabit = (habit: THabit) => {
    setHabitsState((oldHabits: THabit[]) => {
      setHabitName('')

      return [
        ...oldHabits,
        {
          id: habit.id,
          name: habit.name,
          duration: habit.duration,
          description: habit.description,
          iconName: 'check_circle',
          streak: habit.streak,
          completed: habit.completed,
          repeat: habit.repeat,
        },
      ]
    })
  }

  const handleHabitSubmit = async () => {
    const newHabit = await postHabit({
      id: uuidv4(),
      name: habitName,
      duration: 5,
      description: 'abcd',
      iconName: 'check_circle',
      streak: 0,
      completed: false,
      repeat: 'D',
    })
    addHabit(newHabit)
    handleModalOpen(false)
  }

  return (
    <>
      <Modal open={open} aria-labelledby="modal-modal-title">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            New Habit
          </Typography>
          <InputField
            name="habit name"
            defaultValue={habitName}
            onChange={handleNameChange}
          />
          <InputField
            name="habit time (minutes)"
            defaultValue={duration}
            onChange={handleDurationChange}
            inline
            inputProps={{
              type: 'number',
              min: 0,
              step: 1,
            }}
          />
          <FormControl variant="standard">
            <InputLabel shrink id="reapeat-habit-label">
              Repeat
            </InputLabel>
            <Select
              labelId="reapeat-habit-label"
              id="reapeat-habit-label"
              value={repeat}
              onChange={handleRepeatChange}
              autoWidth
              input={<CustomInput />}
            >
              <MenuItem value="D">Daily</MenuItem>
              <MenuItem value="W">Weekly</MenuItem>
              <MenuItem value="M">Montly</MenuItem>
            </Select>
          </FormControl>
          <Box
            sx={{
              my: '1rem',
              justifyContent: 'right',
              display: 'flex',
              gap: '0.5rem',
            }}
          >
            <Button variant="text" onClick={() => handleModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleHabitSubmit}>
              OK
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  )
}
