import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { useUIContext } from '../../context/ui'
import { Colors } from '../../styles/theme'
import CloseIcon from '@mui/icons-material/Close'

export default function Cart() {
  const { cart, showCart, setShowCart } = useUIContext()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  let cartContent = (
    <Box>
      <Typography variant='body1' textAlign='center'>
        Your cart is empty.
      </Typography>
    </Box>
  )

  cart.length > 0 &&
    (cartContent = cart.map(item => (
      <Box key={item.id} mb={2}>
        <Box
          display='flex'
          alignItems='start'
          justifyContent='space-between'
          mb={2}
        >
          <Avatar src={item.image} sx={{ width: 96, height: 96, mr: 2 }} />
          <Box display='flex' flexDirection='column'>
            <Typography variant='h6'>{item.name}</Typography>
            {!matches && (
              <Typography variant='subtitle2'>
                {item.description.slice(0, 100)}...
              </Typography>
            )}
          </Box>
          <Typography variant='body1' justifyContent='end' fontWeight={600}>
            ${item.price}
          </Typography>
        </Box>
        {matches && (
          <Typography variant='subtitle2' mb={2}>
            {item.description.slice(0, 100)}...
          </Typography>
        )}
        <Divider variant='inset' />
      </Box>
    )))

  return (
    <Drawer
      anchor='right'
      open={showCart}
      onClose={() => setShowCart(false)}
      PaperProps={{
        sx: {
          width: matches ? '100%' : 500,
          background: Colors.light_gray,
          borderRadius: 0,
          border: 'none',
        },
      }}
    >
      <Box
        sx={{ p: 1 }}
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        <Typography
          variant='h4'
          mb={1}
          mt={2}
          textAlign='center'
          color={Colors.black}
        >
          My Cart
        </Typography>
        <Paper
          elevation={0}
          sx={{
            mt: 2,
            width: '90%',
            padding: 4,
          }}
        >
          {cartContent}
        </Paper>
        {cart.length > 0 && (
          <Button sx={{ mt: 4 }} variant='contained'>
            Proceet to payment
          </Button>
        )}
        <IconButton
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
          }}
          onClick={() => setShowCart(false)}
        >
          <CloseIcon fontSize='large' />
        </IconButton>
      </Box>
    </Drawer>
  )
}
