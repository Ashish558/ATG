import { Box, Input, InputAdornment, Stack, Typography } from '@mui/material'
import React from 'react'
import { useGlobalContext } from '../../../context'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined'
import RecommenredGroups from './Groups/recommendedGroups';

export default function Location() {

    const { isAuthenticated } = useGlobalContext()

    return (
        <Box sx={{ py: '20px', px: '30px' }} >
            <Input disableUnderline sx={styles.input} type='search'
                disabled={isAuthenticated ? false : true}
                placeholder='Enter your location'
                value={!isAuthenticated ? 'Noida, India' : ''}
                startAdornment={
                    <InputAdornment position="start">
                        <PlaceOutlinedIcon sx={{ fontSize: '20px', color: 'black' }} />
                    </InputAdornment>
                }
            />
            <Stack direction='row' alignItems='flex-start' sx={{ opacity: '0.5', mb: '60px' }} >
                <ErrorOutlineOutlinedIcon />
                <Typography ml='3px' fontSize='15px' >
                    Your location will help us serve better and extend a personalised experience.
                </Typography>
            </Stack>
            {isAuthenticated && <RecommenredGroups />}

        </Box>
    )
}

const styles = {
    input: {
        width: '300px',
        backgroundColor: 'transparent',
        borderRadius: '0',
        px: '0',
        py: '6px',
        color: 'black',
        borderBottom: '1px solid #B8B8B8',
        fontSize: '15px',
        mb: '40px'
    }
}