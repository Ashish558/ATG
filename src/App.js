import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import Home from './pages/Home'

const theme = createTheme({
   breakpoints: {
      values: {
         xs: 0,
         sm: 568,
         md: 760,
         lg: 970,
         xl: 1200,
      }
   },
   typography: {
      fontFamily: [
         "IBM_Plex_Sans",
         "Helvetica Neue",
         "Arial",
         "sans-serif"
      ].join(",")
   },
   overrides: {
      MuiButton: { 
        root: { 
          textTransform: 'capitalize',
         },
      },
    },
  
})
const App = () => {

   return (
      <ThemeProvider theme={theme}>
         <GlobalStyles styles={{ listStyle: 'none', body: { backgroundColor: "#f9f8ffe3" }, }} />
         <CssBaseline />
         <Home />

      </ThemeProvider>
   )
}


export default App
