import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { desktopStyle, mobileStyle } from '../styles';

export default function FormHeader({ text, handleClose,setIsSignupActive, isSignupActive }) {

    return (
        <>
           <CancelRoundedIcon onClick={() => handleClose()} sx={{position: 'absolute', right: '-30px', top: '-30px', color: 'white', ...desktopStyle }} />
            <Box sx={{ backgroundColor: '#EFFFF4', borderRadius: '8px', py: '15px', px: '50px', ...desktopStyle }} >
                <Typography color='#008A45' fontFamily='IBM_Plex_Sans_Semibold' fontSize='15px'  >
                    Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
                </Typography>
            </Box>
            <Stack direction='row' justifyContent='space-between' sx={{ mb: '18px', px: { lg: '24px' },  py: { lg: '10px' } }} >

                <Typography variant='h5' fontSize='20px' fontFamily='IBM_Plex_Sans_Bold' >
                    {text}
                </Typography>

                <CancelRoundedIcon onClick={() => handleClose()} sx={{ color: '#4d4d4d', ...mobileStyle }} />
             
                <Typography component='p' fontSize='15px' sx={desktopStyle} >
                    Already have an account?
                    <Typography fontSize='15px' component='span' ml='3px' color='#2F6CE5' fontFamily='IBM_Plex_Sans_Semibold' 
                    onClick={()=>setIsSignupActive(!isSignupActive)}>
                        Sign In
                    </Typography>
                </Typography>

            </Stack>
        </>
    )
}

