import React from 'react'
import { Box, Button } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

import { useGlobalContext } from '../../../context';
export default function Buttons() {
    const { setIsAuthenticated, isAuthenticated } = useGlobalContext()

    return (
        <Box mb='3px' >
            <Button disableRipple sx={{ ...styles.btn, ...styles.btn1, mr: '16px' }} endIcon={<ArrowDropDownIcon />} >
                Write a Post
            </Button>
            {isAuthenticated ?
                <Button disableRipple sx={{ ...styles.btn, ...styles.btnExit }} startIcon={<ExitToAppOutlinedIcon />}
                    onClick={() => setIsAuthenticated(!isAuthenticated)}>
                    Leave Group
                </Button>
                :
                <Button disableRipple sx={{ ...styles.btn, ...styles.btnJoin }} startIcon={<GroupAddRoundedIcon />}
                    onClick={() => setIsAuthenticated(!isAuthenticated)}>
                    Join Group
                </Button>
            }
        </Box>
    )
}


const styles = {

    btn: {
        fontFamily: 'IBM_Plex_Sans_Semibold',
        textTransform: 'capitalize',
        px: 2,
        fontSize: ' 14px',
    },
    btn1: {
        color: 'black',
        backgroundColor: '#F1F3F5',
        '&:hover': {
            backgroundColor: '#F1F3F5',
        },
    },
    btnJoin: {
        color: 'white',
        backgroundColor: '#2F6CE5',
        '&:hover': {
            backgroundColor: '#2F6CE5',
        },
    },
    btnExit: {
        color: '#6A6A6B',
        border: '1px solid #989899',
        backgroundColor: 'transparent',
        '&:hover': {
            backgroundColor: 'transparent',
        },

    }

}
