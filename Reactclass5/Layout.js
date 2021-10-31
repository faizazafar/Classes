import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ButtonAppBar from './MyNav';




export const Layout = ({children}) => {
    return (
        <div>
       <Container maxWidth="xlg">
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
        <ButtonAppBar></ButtonAppBar>
        <Container maxWidth="xlg">
        {children}
        </Container >   
      </Container>    
          </div>
    )
}
