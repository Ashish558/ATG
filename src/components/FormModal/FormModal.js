import React, { useState } from 'react'
import { Box, Grid, Input, Modal, Typography } from '@mui/material'
import { useGlobalContext } from '../../context';
import FormHeader from './formHeader';
import FormButtons from './formButtons';

//make parent cont --
export default function FormModal() {
    const [isSignupActive, setIsSignupActive] = useState(true)

    const { setIsModalOpen, isModalOpen } = useGlobalContext()
    const handleClose = () => setIsModalOpen(false)

    return (
        <Modal open={isModalOpen} onClose={handleClose}
            sx={{
                minHeight: '500px',
                overflow: 'auto',
                ...styles.modal
            }}>
            <Box sx={styles.form} >
                <FormHeader isSignupActive={isSignupActive} setIsSignupActive={setIsSignupActive} handleClose={handleClose} text={isSignupActive ? 'Create Account' : 'Welcome Back'} />
                <Grid container sx={{ px: { lg: '24px', py: '16px' } }} >
                    <Grid item xs={12} lg={6} >

                        <Box sx={{ mb: '24px' }} >
                            {isSignupActive &&
                                <Box sx={{ display: 'flex', justifyContent: 'stretch' }} >
                                    <Input placeholder='First Name' disableUnderline sx={{ flex: 1, ...styles.input }} />
                                    <Input disableUnderline placeholder='Last Name' sx={{ flex: 1, ...styles.input, borderLeft: '0' }} />
                                </Box>
                            }

                            <Input placeholder='Email' disableUnderline sx={{ ...styles.input }} />
                            <Input placeholder='Password' disableUnderline sx={{ ...styles.input, borderBottom: isSignupActive ? '0' : '1px solid #D9D9DB' }} />
                            {isSignupActive &&
                                <Input placeholder='Confirm Password' disableUnderline sx={{ ...styles.input, borderBottom: '1px solid #D9D9DB' }} />
                            }
                        </Box>
                        <FormButtons isSignupActive={isSignupActive} setIsSignupActive={setIsSignupActive} />
                        <Typography color='#212529' fontSize='13px' align='center' sx={styles.footer} >
                            By signing up, you agree to our Terms & conditions, Privacy policy
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={6} sx={{ ...styles.imageContainer, ...styles.center }}  >
                        <Box component='img' src='/assets/form-illustration.png' />
                        <Typography color='#212529' fontSize='13px' align='center' sx={styles.footerDesktop} >
                            By signing up, you agree to our Terms & conditions, Privacy policy
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    )
}


const styles = {
    modal: {
        display: 'flex',
        alignItems: 'flex-end',
        ['@media (min-width:970px)']: { // eslint-disable-line no-useless-computed-key
            alignItems: 'center',
            justifyContent: 'center',
        },
    },
    form: {
        position: 'relative',
        width: '100%',
        backgroundColor: 'white',
        p: '16px',
        pt: '20px',
        borderRadius: '8px 8px 0px 0px',

        ['@media (min-width:970px)']: { // eslint-disable-line no-useless-computed-key
            borderRadius: '8px',
            width: '780px',
            px: '0px',
            pt: 0
        },
    },
    input: {
        width: '100%',
        border: '1px solid #D9D9DB',
        borderBottom: '0',
        backgroundColor: '#F7F8FA',
        px: '10px', py: '3px',
        color: '#616161',
        '&::placeholder': {
            color: '#616161'

        }
    },
    imageContainer: {
        px: '16px',
        fontSize: '13px',
        ['@media (max-width:970px)']: { // eslint-disable-line no-useless-computed-key
            display: 'none',
        },
        ['@media (min-width:970px)']: { // eslint-disable-line no-useless-computed-key
            display: 'flex'
        },
    },
    footer: {
        ['@media (max-width:970px)']: { // eslint-disable-line no-useless-computed-key
            display: 'block',
        },
        ['@media (min-width:970px)']: { // eslint-disable-line no-useless-computed-key
            display: 'none'
        },
    },
    footerDesktop: {
        opacity: 0.6,
        mt: '16px',
        ['@media (max-width:970px)']: { // eslint-disable-line no-useless-computed-key
            display: 'none',
        },
        ['@media (min-width:970px)']: { // eslint-disable-line no-useless-computed-key
            display: 'block'
        },
    },
    center: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }

}