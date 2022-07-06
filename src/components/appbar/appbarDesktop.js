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
} from '@mui/material'
import '@fontsource/montez'
import Link from 'next/link'
import { styled } from '@mui/system'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'

import {
  AppbarContainer,
  AppbarHeader,
  MyList,
  MyListItem,
  MyListItemText,
} from '../../styles/appbar'
import Actions from './actions'
import { Colors } from '../../styles/theme'

export default function AppbarDesktop({ matches }) {
  return (
    <AppbarContainer>
      <AppbarHeader>My Bag</AppbarHeader>
      <MyList type='row' sx={{ marginRight: '3rem' }}>
        <ListItem>
          <MyListItemText
            primary='Home'
            sx={{
              '&::after': {
                display: 'block',
                content: "''",
                borderBottom: `solid 3px ${Colors.secondary}`,
                transform: 'scaleX(0)',
                transition: 'transform 300ms ease-in-out',
              },
              '&:hover:after': {
                transform: 'scaleX(0.3)',
              },
            }}
          />
        </ListItem>
        <ListItem>
          <MyListItemText
            primary='Categories'
            sx={{
              '&::after': {
                display: 'block',
                content: "''",
                borderBottom: `solid 3px ${Colors.secondary}`,
                transform: 'scaleX(0)',
                transition: 'transform 300ms ease-in-out',
              },
              '&:hover:after': {
                transform: 'scaleX(0.6)',
              },
            }}
          />
        </ListItem>
        <ListItem>
          <MyListItemText
            primary='Products'
            sx={{
              '&::after': {
                display: 'block',
                content: "''",
                borderBottom: `solid 3px ${Colors.secondary}`,
                transform: 'scaleX(0)',
                transition: 'transform 300ms ease-in-out',
              },
              '&:hover:after': {
                transform: 'scaleX(0.5)',
              },
            }}
          />
        </ListItem>
        <ListItem>
          <MyListItemText
            primary='Contact Us'
            sx={{
              '&::after': {
                display: 'block',
                content: "''",
                borderBottom: `solid 3px ${Colors.secondary}`,
                transform: 'scaleX(0)',
                transition: 'transform 300ms ease-in-out',
              },
              '&:hover:after': {
                transform: 'scaleX(0.6)',
              },
            }}
          />
        </ListItem>
      </MyList>
      <Actions />
    </AppbarContainer>
  )
}
