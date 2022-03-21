import React, { useState } from 'react'

import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { Menu, MenuItem } from '@mui/material'
import { withStyles } from '@material-ui/core/styles'


function ActionBtn(props) {
    const { classes } = props

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl)

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);


    return (
        <div>
            <MoreHorizIcon id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={styles.icon} />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                classes={{ list: classes.list }}
            >
                <MenuItem  sx={{ ...styles.link }}  >
                    Edit
                </MenuItem>
                <MenuItem  sx={{ ...styles.link }} >
                    Report
                </MenuItem>
                <MenuItem  sx={{ ...styles.link }} >
                    Option 3
                </MenuItem>
            </Menu>
        </div>
    )
}

const styles = {
    link: {
        color: 'rgb(0 0 0 / 67%)',
        textDecoration: 'none',
        fontSize: '14.5px',
        borderRadius: '3px',
        px: '10px',
        py: '6px',
        fontFamily: 'IBM_Plex_Sans_Semibold'
    },
    icon: {
        '&:hover': {
            backgroundColor: '#f3f3f3',
        },
    }
}

const classes = theme => ({
    list: {
        padding: '0',
        width: '92px',
    }
})

export default withStyles(classes)(ActionBtn)