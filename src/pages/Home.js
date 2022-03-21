import React from 'react'
import { Box } from '@mui/material'
import { useGlobalContext } from '../context'
import Hero from '../components/Hero.js/Hero'
import Posts from '../components/Posts.js/posts'
import FormModal from '../components/FormModal/FormModal'

const Home = () => {
   const { setIsModalOpen } = useGlobalContext()

   return (
      <Box>
         <Hero />
         <Posts />
         <Box component='img' src='/assets/create-icon.svg' sx={styles.createIcon} onClick={() => setIsModalOpen(true)} />
         <FormModal />
      </Box>
   )
}

const styles = {
   createIcon: {
      position: 'fixed',
      bottom: '10px',
      right: '10px',
      zIndex: '100',

      ['@media (min-width:970px)']: { // eslint-disable-line no-useless-computed-key
         display: 'none'
      },

   }
}


export default Home