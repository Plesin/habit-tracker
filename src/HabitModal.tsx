import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'

import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
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
  const [repeate, setRepeat] = useState('day')
  return (
    <>
      <Modal open={open} aria-labelledby="modal-modal-title">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            New Habit
          </Typography>
          <InputField name="habit name" />
          <FormControl variant="standard">
            <InputLabel shrink id="reapeat-habit-label">
              Repeat
            </InputLabel>
            <Select
              labelId="reapeat-habit-label"
              id="reapeat-habit-label"
              value={repeate}
              onChange={(e) => setRepeat(e.target.value as string)}
              autoWidth
              input={<CustomInput />}
            >
              <MenuItem value="day">Daily</MenuItem>
              <MenuItem value="week">Weekly</MenuItem>
              <MenuItem value="month">Montly</MenuItem>
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
            <Button variant="contained">OK</Button>
          </Box>
        </Box>
      </Modal>
    </>
  )
}
