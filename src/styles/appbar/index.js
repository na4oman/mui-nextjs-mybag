import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'
import { styled } from '@mui/system'
import '@fontsource/montez'
import { Colors } from '../theme'

export const AppbarContainer = styled(Box)(() => ({
  display: 'flex',
  marginTop: 4,
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2px 8px',
}))

export const AppbarHeader = styled(Typography)(() => ({
  flexGrow: 1,
  // padding: '4px',
  fontSize: '4em',
  fontFamily: '"Montez", "cursive"',
  color: Colors.secondary,
}))

export const MyList = styled(List)(({ type }) => ({
  display: type === 'row' ? 'flex' : 'block',
  flexGrow: 3,
  justifyContent: 'center',
  alignItems: 'center',
  '& .MuiListItem-root': {
    paddingLeft: 0,
    paddingRight: 0,
    alignItems: 'center',
    textAlign: 'center',
  },
}))

export const MyListItem = styled(ListItem)(() => ({
  dispay: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

export const MyListItemText = styled(ListItemText)(() => ({
  cursor: 'pointer',
  textTransform: 'uppercase',
  '& .MuiListItemText-primary': {
    letterSpacing: '1.2px',
    fontSize: '.8rem',
  },
}))

export const ActionIconsContainerMobile = styled(Box)(() => ({
  display: 'flex',
  background: Colors.shaft,
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  alignItems: 'center',
  zIndex: 99,
  borderTop: `1px solid ${Colors.border}`,
}))

export const ActionIconsContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}))

export const DrawerCloseButton = styled(IconButton)(() => ({
  position: 'absolute',
  top: 10,
  left: '200px',
  zIndex: 1999,
}))
