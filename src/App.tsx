import { Header } from './Components/Header'
import { MusicBox } from './Components/MusicBox'
import './App.css'
import { Box } from '@mui/material'

function App() {

  return (
    <Box 
      className='App'
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        px: { xs: 1, md: 2, xl: 4 },
        // py: { xs: 1, md: 2 },
      }}
    >
      <Header/>
      <MusicBox/>
    </Box>
  )
}

export default App
