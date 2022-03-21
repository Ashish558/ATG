import React from 'react'
import { Box } from '@mui/material'
import EditRoundedIcon from '@mui/icons-material/EditRounded'

export default function WriteBtn() {


  return (
    <Box sx={style} >
      <EditRoundedIcon fontSize='small' sx={{ mr: '40px' }} />
    </Box>
  )
}

const style = {
  py: '80px',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  ['@media (min-width:970px)']: { // eslint-disable-line no-useless-computed-key
    display: 'flex',
    px: '24px'
  },
  ['@media (max-width:970px)']: { // eslint-disable-line no-useless-computed-key
    display: 'none'
  },
}