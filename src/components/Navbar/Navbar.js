import React from 'react'
import { AppBar, Button, Toolbar } from '@mui/material'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import NavbarDesktop from './NavbarDesktop'

export default function Navbar() {


    return (
        <>
            <AppBar
                position="static"
                color="default"

                sx={styles.navbar}
            >
                <Toolbar sx={{ flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    <ArrowBackRoundedIcon sx={{ color: 'white' }} />

                    <Button variant="outlined" sx={styles.btn}>
                        Join group
                    </Button>
                </Toolbar>
            </AppBar >
            <NavbarDesktop />
        </>
    )
}

const styles = {
    navbar: {
        boxShadow: 'none',
        position: "absolute",
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'transparent',
        zIndex: 2,
        ['@media (min-width:970px)']: { // eslint-disable-line no-useless-computed-key
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

// ['@media (min-width:970px)']: { // eslint-disable-line no-useless-computed-key
//     py: '1rem',
//     backgroundColor: isActive ? 'background.blue' : 'transparent',
//     '&:hover': {
//         // backgroundColor: isActive ? 'background.blue' : '#f3f3f3',
//         backgroundColor: getBg(isActive),
//         color: '#1081e8'
//     },
// },