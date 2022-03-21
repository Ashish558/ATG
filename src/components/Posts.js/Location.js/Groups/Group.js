import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function Group({ name, image }) {

    const [isFollowing, setisFollowing] = useState(false)
console.log(isFollowing)
    return (
        <Stack direction='row' alignItems='center' justifyContent='space-between' >
            <Stack direction='row' alignItems='center'>
                <Box component='img' src={image} />
                <Typography ml='8px' >
                    {name}
                </Typography>
            </Stack>
            <Button sx={ isFollowing ?  { ...styles.btn, ...styles.active } : { ...styles.btn, ...styles.btnInactive }} 
            onClick={()=>setisFollowing(!isFollowing)}
            >
                {isFollowing ? 'Followed' : 'Follow' }
            </Button>
        </Stack>
    )
}

const styles = {
    btnInactive: {
        color: 'black',
        backgroundColor: '#EDEEF0',
        '&:hover': {
            backgroundColor: '#EDEEF0',
        },
    },
    btn: {
        fontSize: '14px',
        textTransform: 'capitalize',
        borderRadius: '16px',
        px: '10px',
        py: '2px',
        color: 'black'
    },
    active: {
        color: 'white',
        backgroundColor: '#000',
        '&:hover': {
            backgroundColor: '#000',
        },
    }
}