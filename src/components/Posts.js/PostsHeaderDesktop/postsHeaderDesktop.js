import React from 'react'
import { Box } from '@mui/material'
import Categories from './Categories'
import Buttons from './Buttons'
import WriteBtn from './WriteBtn'

export default function PostsHeaderDesktop() {


    return (
        <>
            <WriteBtn />
            <Box
                sx={{ ...styles.header }} >
             <Box sx={{position: 'relative',display: 'flex',  alignItems: 'center', justifyContent: 'space-between'}} >

                <Categories />
                <Buttons />
                <Box sx={styles.line} ></Box>
             </Box>
            </Box>
        </>
    )
}

const styles = {
    header: {
        py: '10px',
        mb: '20px',
        ['@media (min-width:970px)']: { // eslint-disable-line no-useless-computed-key
            display: 'block',
            px: '24px'
        },
        ['@media (max-width:970px)']: { // eslint-disable-line no-useless-computed-key
            display: 'none'
        },
    },
    btn: {
        color: 'black',
        fontFamily: 'IBM_Plex_Sans_Semibold',
        border: '0.5px solid white',
        textTransform: 'capitalize',
        backgroundColor: '#F1F3F5',
        px: 2,
        fontSize: ' 15px',
        '&:hover': {
            backgroundColor: '#F1F3F5',
        },
    },
    line: {
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '1px',
zIndex: -1,
        backgroundColor: '#E0E0E0',
    }
}
