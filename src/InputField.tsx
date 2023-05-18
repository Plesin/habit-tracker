import { InputHTMLAttributes } from 'react'
import { Box } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import { CustomInput } from './CustomInput'

type TInputFieldProps = {
  name: string
  defaultValue?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  inputProps?: InputHTMLAttributes<HTMLInputElement>
  inline?: boolean
}

export default function InputField({
  name,
  defaultValue = '',
  onChange,
  inputProps,
  inline = false,
}: TInputFieldProps) {
  const nameDashed = name.trim().replace(/\s/g, '-')
  const inputId = `custom-input-${nameDashed}`
  return (
    <Box>
      <FormControl
        variant="standard"
        sx={{ display: `${inline ? '' : 'flex'}`, mb: '1rem' }}
      >
        <InputLabel shrink htmlFor={inputId}>
          {name}
        </InputLabel>
        <CustomInput
          defaultValue={defaultValue}
          id={inputId}
          onChange={onChange}
          inputProps={inputProps}
        />
      </FormControl>
    </Box>
  )
}
