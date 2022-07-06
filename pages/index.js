import * as React from 'react'
import Container from '@mui/material/Container'
import { Box, Typography } from '@mui/material'
import Appbar from '../src/components/appbar'
import Banner from '../src/components/banner/banner'
import Promotions from '../src/components/promotions'
import Products from '../src/components/products'
import Footer from '../src/components/footer'
import AppDrawer from '../src/components/drawer'
import { UIProvider } from '../src/context/ui'
import Search from '../src/components/search'
import Cart from '../src/components/cart/cart'

export default function Index() {
  return (
    <UIProvider>
      <Container maxWidth='lg'>
        <Appbar />
        <Banner />
        <Promotions />
        <Box textAlign='center' m={4}>
          <Typography variant='h4'>Our Products</Typography>
        </Box>
        <Products />
        <Footer />
        <AppDrawer />
        <Cart />
        <Search />
      </Container>
    </UIProvider>
  )
}
