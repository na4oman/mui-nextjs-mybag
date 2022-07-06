import {
  Box,
  Button,
  Grid,
  List,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material'
import { FooterTitle, SubscribrTf } from '../../styles/footer'
import { Colors } from '../../styles/theme'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import SendIcon from '@mui/icons-material/Send'

export default function Footer() {
  return (
    <Box
      sx={{
        background: Colors.shaft,
        color: Colors.white,
        p: { xs: 4, md: 10 },
        py: 12,
        fontSize: { xs: '12px', md: '14px' },
      }}
    >
      <Grid container spacing={2} justifyContent='center'>
        <Grid item md={6} lg={4}>
          <FooterTitle variant='body1'>About us</FooterTitle>
          <Typography variant='caption2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            exercitationem saepe doloremque quibusdam explicabo, cumque ad,
            dicta nihil maxime quia ratione nulla reprehenderit, assumenda
            beatae qui velit eum eius unde. Numquam suscipit error.
          </Typography>
          <Box
            sx={{
              mt: 4,
              color: Colors.dove_gray,
            }}
          >
            <FacebookIcon sx={{ mr: 1 }} />
            <TwitterIcon sx={{ mr: 1 }} />
            <InstagramIcon />
          </Box>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant='body1'>Information</FooterTitle>
          <List>
            <ListItemText>
              <Typography variant='caption2' lineHeight={2}>
                About us
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant='caption2' lineHeight={2}>
                Order Tracking
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant='caption2' lineHeight={2}>
                Privacy &amp; Policy
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant='caption2' lineHeight={2}>
                Terms &amp; Conditions
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant='body1'>My Account</FooterTitle>
          <List>
            <ListItemText>
              <Typography variant='caption2' lineHeight={2}>
                Login
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant='caption2' lineHeight={2}>
                My Account
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant='caption2' lineHeight={2}>
                My Cart
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant='caption2' lineHeight={2}>
                Wishlist
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={4}>
          <FooterTitle variant='body1'>newsletter</FooterTitle>
          <Stack>
            <SubscribrTf
              color='primary'
              variant='standard'
              label='Email address'
            />
            <Button
              startIcon={<SendIcon sx={{ color: Colors.white }} />}
              sx={{ my: 4 }}
              variant='contained'
            >
              Subscribe
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}
