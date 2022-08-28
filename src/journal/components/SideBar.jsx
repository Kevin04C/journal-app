import {
  Alert,
  Box,
  Button,
  Divider,
  Drawer,
  List,  
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "../../../store/journal/journalSlice";
import { SideBarItem } from "./SideBarItem";

export const SideBar = ({ drawerWith }) => {

  const dispatch = useDispatch();
  const [typeDrawer, setTypeDrawer] = useState();
  const { displayName } = useSelector((store) => store.auth);
  const { notes = [], showMenu } = useSelector((store) => store.journal);


  useEffect(() => {
    const matches = matchMedia('(min-width:600px)').matches
    if(!matches) return setTypeDrawer("temporary")
    setTypeDrawer("permanent")
  }, [])

  const onCloseMenu = () => {
    dispatch(setMenu())
  }
  

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWith }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant={typeDrawer}
        open={showMenu}
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWith },
        }}
        onClose={onCloseMenu}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {displayName}
          </Typography>
          <Button>

          </Button>
        </Toolbar>
        <Divider />

        <List >
          {/* {
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
          } */}

          {notes.length === 0 ? (
            <Box
              sx={{padding: 1}}
            >
              <Alert variant="outlined" severity="info">
                Aún no tienes notas
              </Alert>
            </Box>
          ) : (
            notes.map((note) => <SideBarItem key={note.id} {...note} />)
          )}
        </List>
      </Drawer>
    </Box>
  );
};
