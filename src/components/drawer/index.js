import {
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import { styled } from '@mui/system'
import { useUIContext } from '../../context/ui'
import { DrawerCloseButton } from '../../styles/appbar'
import CloseIcon from '@mui/icons-material/Close'
import { Colors } from '../../styles/theme'
import { lighten } from 'polished'

const MiddleDivider = styled(props => <Divider variant='middle' {...props} />)``

export default function AppDrawer() {
  const { drawerOpen, setDrawerOpen } = useUIContext()

  return (
    <>
      {drawerOpen && (
        <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon
            sx={{
              fontSize: '2.5rem',
              color: lighten(0.09, Colors.secondary),
            }}
          />
        </DrawerCloseButton>
      )}
      <Drawer open={drawerOpen}>
        <List>
          <ListItem>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <MiddleDivider />
          <ListItem>
            <ListItemText>Categories</ListItemText>
          </ListItem>
          <MiddleDivider />
          <ListItem>
            <ListItemText>Products</ListItemText>
          </ListItem>
          <MiddleDivider />
          <ListItem>
            <ListItemText>About us</ListItemText>
          </ListItem>
          <MiddleDivider />
          <ListItem>
            <ListItemText>Contact us</ListItemText>
          </ListItem>
          <MiddleDivider />
        </List>
      </Drawer>
    </>
  )
}
