import { Typography } from '@mui/material'
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
  ImageDiv,
} from '../../styles/banner'

export default function Banner() {
  return (
    <BannerContainer>
      <ImageDiv>
        <BannerImage src='/images/banner/banner.png' />
      </ImageDiv>
      <BannerContent>
        <Typography component='h3' variant='subtitle1'>
          Huge Collection
        </Typography>
        <BannerTitle component='h2' variant='h2'>
          New Bags
        </BannerTitle>
        <BannerDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          voluptas repudiandae minima quidem, provident ipsa ea nisi officia
          consequatur molestias atque minus rem laboriosam perspiciatis possimus
          laborum id autem quam? Fugiat ipsa laborum rem?
        </BannerDescription>
        <BannerShopButton color='primary'>Shop now</BannerShopButton>
      </BannerContent>
    </BannerContainer>
  )
}
