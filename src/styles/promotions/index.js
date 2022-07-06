import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { Colors } from '../theme'

export const PromotionsContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    padding: '1.5rem 0',
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem 0',
  background: Colors.secondary,
}))

export const MessageText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
  fontFamily: '"Montez", "cursive"',
  color: Colors.white,
  fontSize: '1.5rem',
}))
