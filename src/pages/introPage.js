import Box from '@mui/material/Box'
import Splash from '../components/Splash'
import { useTheme } from '@mui/material'

const IntroPage = () => {
  const theme = useTheme()

  return (
    <Box sx={{ backgroundColor: theme.palette.primary.main }}>
      <Splash />
    </Box>
  )
}

export default IntroPage
