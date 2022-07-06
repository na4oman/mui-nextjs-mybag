import { Box, Button, Typography } from '@mui/material'
import { Colors } from '../theme'
import { styled } from '@mui/system'

export const BannerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  padding: '0px 0px',
  background: Colors.light_gray,
  // boxShadow: '0px 2px 4px rgba(0,0,0,0.25)',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

export const ImageDiv = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '25rem',
  minWidth: '18rem',
  [theme.breakpoints.down('md')]: {
    width: '15rem',
  },
}))

export const BannerImage = styled('img')(({ src, theme }) => ({
  src: `url(${src})`,
  width: '100%',
  // width: '25rem',
  // [theme.breakpoints.down('md')]: {
  //   width: '20em',
  //   height: '20em',
  // },
  // [theme.breakpoints.down('sm')]: {
  //   width: '20rem',
  // },
}))

export const BannerContent = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  maxWidth: 420,
  padding: '30px',
}))

export const BannerTitle = styled(Typography)(({ theme }) => ({
  lineHeight: 1.5,
  fontSize: '4.5rem',
  marginBottom: '20px',
  [theme.breakpoints.down('md')]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
  },
}))

export const BannerDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: '3em',
  [theme.breakpoints.down('sm')]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: '1.5em',
  },
}))

export const BannerShopButton = styled(Button, {
  shouldForwardProp: prop => prop !== 'color',
  name: 'MyShopButton',
  slot: 'Root',
  overridesResolver: (props, styles) => [
    styles.root,
    props.color === 'primary' && styles.primary,
    props.color === 'secondary' && styles.secondary,
  ],
})(({ theme }) => ({
  padding: '20px 0px',
  fontWeight: 'bold',
  fontSize: '16px',
  [theme.breakpoints.down('sm')]: {
    padding: '10px 0px',
    fontSize: '14px',
  },
}))
