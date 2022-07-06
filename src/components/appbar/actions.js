import {
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Stack,
  Box,
  Typography,
  ListItemIcon,
  Divider,
  Item,
  tabScrollButtonClasses,
  Badge,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'
import {
  ActionIconsContainerDesktop,
  ActionIconsContainerMobile,
  AppbarContainer,
  AppbarHeader,
  MyList,
  MyListItem,
  MyListItemText,
} from '../../styles/appbar'
import { Colors } from '../../styles/theme'
import { useUIContext } from '../../context/ui'

export default function Actions({ matches }) {
  const { cart, setShowSearchBox, setShowCart } = useUIContext()

  const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop

  return (
    <Component>
      <MyList type='row'>
        <ListItem sx={{ padding: 0 }}>
          <ListItemButton
            onClick={() => setShowSearchBox(true)}
            sx={{
              justifyContent: 'center',
              padding: 0,
            }}
          >
            <ListItemIcon
              sx={{
                display: 'flex',
                justifyContent: 'center',
                color: matches && Colors.light,
              }}
            >
              <SearchIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <Divider orientation='vertical' flexItem />
        <ListItem sx={{ padding: 0 }} onClick={() => setShowCart(true)}>
          <ListItemButton
            sx={{
              justifyContent: 'center',
              padding: 0,
            }}
          >
            <ListItemIcon
              sx={{
                display: 'flex',
                justifyContent: 'center',
                color: matches && Colors.light,
              }}
            >
              <Badge badgeContent={cart && cart.length} color='secondary'>
                <ShoppingCartIcon />
              </Badge>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <Divider orientation='vertical' flexItem />
        <ListItem sx={{ padding: 0 }}>
          <ListItemButton
            sx={{
              justifyContent: 'center',
              padding: 0,
            }}
          >
            <ListItemIcon
              sx={{
                display: 'flex',
                justifyContent: 'center',
                color: matches && Colors.light,
              }}
            >
              <FavoriteIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <Divider orientation='vertical' flexItem />
        <ListItem sx={{ padding: 0 }}>
          <ListItemButton
            sx={{
              justifyContent: 'center',
              padding: 0,
            }}
          >
            <ListItemIcon
              sx={{
                display: 'flex',
                justifyContent: 'center',
                color: matches && Colors.light,
              }}
            >
              <PersonIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <Divider orientation='vertical' flexItem />
      </MyList>
    </Component>
  )
}
