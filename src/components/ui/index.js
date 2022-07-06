import { Box, IconButton, Typography } from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import { useState } from 'react'
import { clamp } from './clamp'
import { Colors } from '../../styles/theme'

export default function IncDec() {
  const [value, setValue] = useState(1)
  const clampV = clamp(1, 10)

  return (
    <Box display='flex'>
      <IconButton
        onClick={() => setValue(clampV(value - 1))}
        sx={{
          borderRadius: 0,
          background: `${Colors.secondary}`,
        }}
      >
        <RemoveIcon />
      </IconButton>
      <Typography variant='h6' px={2}>
        {value}
      </Typography>
      <IconButton
        onClick={() => setValue(clampV(value + 1))}
        sx={{
          borderRadius: 0,
          background: `${Colors.secondary}`,
        }}
      >
        <AddIcon />
      </IconButton>
    </Box>
  )
}
