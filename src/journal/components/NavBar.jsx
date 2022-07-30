import { MenuOutlined, LogoutOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"

export const NavBar = ({drawerWith}) => {
  return (
    <AppBar 
      position="fixed"
      sx={{
        width: {sm: `calc(100% - ${drawerWith}px)`},
        ml: {sm: `${drawerWith}px`}
      }}    
    >
      <Toolbar>
        <IconButton
          color='inherit'
          edge='start'
          sx={{marginRight: 2, display: {sm: 'none'}}}
        >
          <MenuOutlined />
        </IconButton>

      <Grid 
        container
        direction='row'
        justifyContent='space-between'
        alignItems='center'
      >
        <Typography variant="h6" noWrap component='div'>JournalApp</Typography>
        <IconButton color="error">
          <LogoutOutlined />
        </IconButton>        
      </Grid>
        
      </Toolbar>

    </AppBar>
  )
}
