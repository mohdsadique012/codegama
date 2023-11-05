import { Box, Container, Typography } from '@mui/material'
import React from 'react'

function Jumbotron() {
  return (
    <Container sx={{
        width: '100%',
        height: "300px",
        backgroundImage: 'url("https://aphconnectcenter.org/wp-content/uploads/sites/5/MicrosoftTeams-image-15-1.jpg")', // Replace with your image URL
        
        backgroundSize: 'cover', 
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
            
      }}>
      <Box align="center" maxHeight="100px">  <Typography align="center" variant="h4" sx={{ fontWeight: 'bolder', color: 'red', fontSize: '2.5rem' }}>
      Let's Start Shopping
    </Typography> </Box>
   
   </Container>
  )
}

export default Jumbotron