import { Box } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import { CustomInput } from './CustomInput'

type TInputFieldProps = {
  name: string
  defaultValue?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputField({
  name,
  defaultValue = '',
  onChange,
}: TInputFieldProps) {
  return (
    <Box>
      <FormControl variant="standard" sx={{ display: 'flex', mb: '1rem' }}>
        <InputLabel shrink htmlFor="custom-input">
          {name}
        </InputLabel>
        <CustomInput
          defaultValue={defaultValue}
          id="custom-input"
          onChange={onChange}
        />
      </FormControl>
    </Box>
  )
}
