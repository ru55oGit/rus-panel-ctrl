import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import useStyles from './styles'

const Splash = () => {
  const classes = useStyles()

  return (
    <Box className={classes.boxContainer}>
      <Avatar
        src="/images/logo-rusmar003-257x59.jpg"
        sx={{ height: 59, width: 257 }}
        variant="square"
      />
    </Box>
  )
}

export default Splash
