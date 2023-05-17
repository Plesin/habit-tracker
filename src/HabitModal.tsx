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
import { habitsState } from './state'

import { CustomInput } from './CustomInput'
import InputField from './InputField'

const style = {
  position: 'absolute' as 'absolute',
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
  const [repeat, setRepeat] = useState('D')
  const setHabitsState = useSetRecoilState(habitsState)

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHabitName(event.target.value)
  }

  const handleRepeatChange = (event: SelectChangeEvent<string>) => {
    setRepeat(event.target.value)
  }

  const addHabit = () => {
    setHabitsState((oldHabits) => {
      const ids = oldHabits.map((habit) => habit.id)
      let maxId = Math.max(...ids)
      const newId = maxId + 1
      setHabitName('')

      return [
        ...oldHabits,
        {
          id: newId,
          name: habitName,
          description: 'Description',
          iconName: 'check_circle',
          streak: 0,
          completed: false,
          repeat,
        },
      ]
    })
  }

  const handleAddHabit = () => {
    addHabit()
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
            <Button variant="contained" onClick={handleAddHabit}>
              OK
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  )
}
