import { Container, Grid } from '@mui/material'
import React from 'react'
import Location from './Location.js/location'
import PostsHeader from './postsHeader'
import PostsHeaderDesktop from './PostsHeaderDesktop/postsHeaderDesktop'
import PostsList from './postsList/postsList'

export default function Posts() {


    return (
        <Container sx={{ px: { xs: 0 } }} >
            <PostsHeader />
            <PostsHeaderDesktop />
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={7} sx={styles.gridItem} >
                    <PostsList />
                </Grid>
                <Grid item lg={5} >
                    <Location />
                </Grid>
            </Grid>
        </Container>
    )
}

const styles = {
    gridItem: {
        ['@media (min-width:970px)']: { // eslint-disable-line no-useless-computed-key
            px: '24px'
        },
    }
}