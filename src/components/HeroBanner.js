import { Box, Typography,Stack,Button } from '@mui/material'
import React from 'react'
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt:{lg:"212px", xs:"70px"},
        ml:{sm:"50px"}
    }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
    </Typography>
    <Typography fontWeight="700" 
    sx={{fontSize:{
        lg:"44px", xs:"24px", sm:"24px"
    }}}  mt="60px">
    Sweat, Smile <br/> and repeat
    </Typography>
    <Typography  fontWeight="600" fontSize="22px" lineHeight="35px" mb="4px">
    Check out the most effective exersices    </Typography>
   <Button variant='contained' color='error' href='#exercises'
   sx={{backgroundColor:"#FF26225", padding:"15px"}}
   >EXPLORE EXERCICES</Button>
   <Typography fontWeight="600px"
   color="#FF2625"
   sx={{
    opacity: 0.2,
    display:{lg:"block", sx:"none"}    
   }}
   fontSize="200px">
    EXCERCICE
   </Typography>
        <img src={HeroBannerImage} alt="banner" className='hero-banner-img'/>
 </Box>
  )
}

export default HeroBanner