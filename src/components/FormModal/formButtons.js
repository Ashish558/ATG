import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react'
import { mobileStyle } from '../styles';

export default function FormButtons({ isSignupActive, setIsSignupActive }) {


    return (
        <Box sx={{ mb: { sm: '30px', lg: '20px' } }}>
            <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: '22px' }} >
                <Button disableRipple
                    sx={{
                        color: 'white',
                        textTransform: 'capitalize',
                        backgroundColor: '#2F6CE5',
                        borderRadius: '26px',
                        px: '25px',
                        py: '8px',
                        fontFamily: 'IBM_Plex_Sans_Semibold',
                        '&:hover': { backgroundColor: '#2F6CE5' },
                        ...styles.createBtn

                    }} >
                    {isSignupActive ? 'Create Account' : 'Sign in'}
                </Button>
                <Typography
                    fontSize='14px' fontFamily='IBM_Plex_Sans_Medium' color='#495057'
                    sx={{ textDecoration: 'underline', ...mobileStyle }}
                    onClick={() => setIsSignupActive(!isSignupActive)} >
                    {isSignupActive ? 'Or, Sign in' : 'or, Create Account'}
                </Typography>
            </Stack>
            <Stack>
                <Button disableRipple
                    sx={{ ...styles.socialBtn, mb: '10px' }} >
                    <Box component='img' src='/assets/logos/fb.png' sx={{ mr: '16px' }} />
                    Sign up with Facebook
                </Button>
                <Button disableRipple
                    sx={styles.socialBtn} >
                    <Box component='img' src='/assets/logos/google.png' sx={{ mr: '16px' }} />
                    Sign up with Google
                </Button>
            </Stack>
            {!isSignupActive && 
            <Typography my='20px' align='center' fontFamily='IBM_Plex_Sans_Semibold' >
                Forgot Password
            </Typography> 
            }
        </Box>
    )
}

const styles = {
    createBtn: {
        ['@media (min-width:970px)']: { // eslint-disable-line no-useless-computed-key
            width: '100%'
        },
    },
    socialBtn: {
        color: '#000',
        textTransform: 'capitalize',
        border: '1px solid #D9D9DB',
        borderRadius: '6px',
        px: '18px',
        py: '8px',
        fontFamily: 'IBM_Plex_Sans_Semibold',
        '&:hover': { backgroundColor: 'transparent' },
    }
}
