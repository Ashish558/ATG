import { CardMedia } from '@mui/material'
import React from 'react'

export default function PostImage({src}) {


    return (
        <CardMedia
            component="img"
            sx={{
                pt: '5.25%',
            }}
            image={src}
            alt="post"
        />
    )
}
