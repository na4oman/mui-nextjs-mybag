import React from 'react'
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { Colors } from '../../styles/theme'
import CloseIcon from '@mui/icons-material/Close'
import { styled } from '@mui/system'
import { Product, ProductImage } from '../../styles/product'
import IncDec from '../ui'
import FavoriteIcon from '@mui/icons-material/Favorite'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='down' ref={ref} {...props} />
})

const ProductDetailWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(4),
}))

const ProductDetailInfoWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 500,
  lineHeight: 1.5,
}))

export default function ProductDetail({ open, onClose, product }) {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Dialog
      TransitionComponent={Transition}
      variant='permanent'
      open={open}
      fullScreen
    >
      <DialogTitle
        sx={{
          background: Colors.secondary,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          Product Title
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <ProductDetailWrapper flexDirection={matches ? 'column' : 'row'}>
          <Product sx={{ mr: 4 }}>
            <ProductImage src={product.image} />
          </Product>
          <ProductDetailInfoWrapper>
            <Typography variant='subtitle1'>SKU 123456</Typography>
            <Typography variant='subtitle1'>
              Availaability: 5 in stock
            </Typography>
            <Typography variant='h4' sx={{ lineHeight: 2 }}>
              {product.name}
            </Typography>
            <Typography variant='body1'>{product.description}</Typography>
            <Box
              sx={{
                mt: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <IncDec />
              <Button variant='contained'>Add to cart</Button>
            </Box>
            <Box
              display='flex'
              alignItems='center'
              sx={{ mt: 4, color: Colors.light }}
            >
              <FavoriteIcon sx={{ mr: 2 }} />
              Add to wishlist
            </Box>
            <Box sx={{ mt: 4, color: Colors.light }}>
              <TwitterIcon sx={{ mr: theme.spacing(4) }} />
              <InstagramIcon sx={{ mr: theme.spacing(4) }} />
              <FacebookIcon />
            </Box>
          </ProductDetailInfoWrapper>
        </ProductDetailWrapper>
      </DialogContent>
    </Dialog>
  )
}
