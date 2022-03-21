import React from 'react'
import { AppBar, Box, Button, Input, InputAdornment, Toolbar, Typography } from '@mui/material'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import { useGlobalContext } from '../../context';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

export default function NavbarDesktop() {

    const { isAuthenticated, setIsModalOpen, isModalOpen } = useGlobalContext()

    return (
        <AppBar
            position="static"
            color="default"

            sx={styles.navbar}
        >
            <Toolbar sx={{ flexWrap: 'wrap', justifyContent: 'space-between' }}>
                <Box component='img' src='/assets/logo.png' />
                <Button variant="outlined" sx={styles.btn}>
                    Join group
                </Button>
                <Input disableUnderline sx={{ width: '300px', backgroundColor: '#F2F2F2', borderRadius: '21px', px: '10px', py: '1px', color: '#7A7A7A' }}
                    startAdornment={<InputAdornment position="start"> <SearchRoundedIcon sx={{ fontSize: '20px' }} /> </InputAdornment>}
                />
                {
                    isAuthenticated ?
                        <Box sx={{ display: 'flex', alignItems: 'center' }} >
                            <Box component='img' src='/assets/users/user4.png' />
                            <Typography ml='10px' mr='8px' >
                                Siddhart Goyal
                            </Typography>
                            <ArrowDropDownOutlinedIcon />
                        </Box>
                        :
                        <Box sx={{ display: 'flex', fontFamily: 'IBM_Plex_Sans_Medium', alignItems: 'center' }} >
                            Create account.
                            <Typography color='#2F6CE5' ml='3px' fontFamily='IBM_Plex_Sans_Medium' sx={{ display: 'flex' }}
                                onClick={() => setIsModalOpen(!isModalOpen)} >
                                It’s free! <ArrowDropDownSharpIcon sx={{ color: '#2E2E2E', ml: '4px' }} />
                            </Typography>
                        </Box>
                }

            </Toolbar>
        </AppBar >
    )
}

const styles = {
    navbar: {
        boxShadow: 'none',
        position: "absolute",
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'white',
        zIndex: 2,
        ['@media (min-width:970px)']: { // eslint-disable-line no-useless-computed-key
            display: 'block',
            px: '30px'
        },
        ['@media (max-width:970px)']: { // eslint-disable-line no-useless-computed-key
            display: 'none'
        },
    },
    btn: {
        color: 'white',
        border: '0.5px solid white',
        textTransform: 'capitalize',
        '&:hover': {
            border: '0.5px solid white',

        },
    }
}
