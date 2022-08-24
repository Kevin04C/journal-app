import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { TurnedInNot } from '@mui/icons-material';
import { useSelector } from "react-redux";



export const SideBar = ({drawerWith}) => {
  const { displayName } = useSelector(store => store.auth)

  return (
    <Box
      component='nav'
      sx={{width: {sm: drawerWith}, flexShrink: {sm:0}}}
    >
      <Drawer
        variant='permanent'
        open={ true }
        sx={{
          display: {xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWith}

        }}
      >

        <Toolbar>
          <Typography variant="h6" noWrap component="div">{displayName}</Typography>
        </Toolbar>
        <Divider />

        <List>
          {
            ["Enero", "Febrero", "Marzo"].map(text => (
              <ListItem
                key={ text }
                disablePadding
              >
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid container>
                      <ListItemText primary={text}/>
                      <ListItemText secondary={'Labore eu do deserunt ea reprehenderit aliqua fugiat nostrud anim proident duis ut irure.'}/>
                    </Grid>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </Drawer>
    </Box>
  )
}
