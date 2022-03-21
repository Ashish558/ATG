import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import PostTitle from './postTitle'
import PostImage from './postImage'
import Text from './text'
import User from './user'
import MeetupEvent from './Events/meetupEvent'
import PostButton from './postButton'
import JobEvent from './Events/jobEvent'

export default function PostsList() {

    return (
        <>
            <Card sx={styles.card}>
                <PostImage src='/assets/posts/post1.png' />
                <CardContent sx={{ flexGrow: 1, '&:last-child': { pb: '14px' } }}>
                    <Typography gutterBottom component="p" mb='10px' fontWeight='bolder'>
                        ✍️ Article
                    </Typography>
                    <PostTitle title='What if famous brands had regular fonts? Meet RegulaBrands!' />
                    <Text />
                    <User name='Sarthak Verma' views='1.4k' image='/assets/users/user1.png' />
                </CardContent>
            </Card>

            <Card sx={styles.card}>
                <PostImage src='/assets/posts/post2.png' />
                <CardContent sx={{ flexGrow: 1, '&:last-child': { pb: '14px' } }}>
                    <Typography gutterBottom component="p" mb='10px' fontWeight='bolder'>
                        🔬️ Education
                    </Typography>
                    <PostTitle title='Tax Benefits for Investment under National Pension Scheme launched by Government' />
                    <Text />
                    <User name='Sarah West' views='4.8k' image='/assets/users/user2.png' />
                </CardContent>
            </Card>

            <Card sx={styles.card}>
                <PostImage src='/assets/posts/post3.png' />
                <CardContent sx={{ flexGrow: 1, '&:last-child': { pb: '14px' } }}>
                    <Typography gutterBottom component="p" mb='10px' fontWeight='bolder'>
                        🗓️ Meetup
                    </Typography>
                    <PostTitle title='Finance & Investment Elite Social Mixer @Lujiazui' />
                    <MeetupEvent />

                    <PostButton color='#E56135' text='Visit Website' />
                    <User name='Ronal Jones' views='800' image='/assets/users/user3.png' />
                </CardContent>
            </Card>

            <Card sx={styles.card}>

                <CardContent sx={{ flexGrow: 1, '&:last-child': { pb: '14px' } }}>
                    <Typography gutterBottom component="p" mb='10px' fontWeight='bolder' >
                        💼️ Job
                    </Typography>
                    <PostTitle title='Software Developer - II' />
                    <JobEvent />
                    <PostButton color='#02B875' text='Apply on Timesjobs' />
                    <User name='Joseph Gray' views='1.7k' image='/assets/users/user4.png' />
                </CardContent>
            </Card>

        </>
    )
}

const styles = {
    card: {
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.12)',
        mb: '8px',
     
        ['@media (min-width:970px)']: { // eslint-disable-line no-useless-computed-key
            maxWidth: '600px'
        },
        
    }
}