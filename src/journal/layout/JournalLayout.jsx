import { Toolbar } from "@mui/material";
import { Box } from "@mui/system"
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";

const drawerWith = 240;

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display: 'flex'}}
      className="animate__animated animate__fadeIn animate__faster"
    >

      {/* NAVBAR drawerWith*/}
      <NavBar drawerWith={drawerWith}/>

      {/* SIDEBAR */}
      <SideBar drawerWith={drawerWith}/>

      <Box 
        component="main"
        sx={{flexGrow: 1, padding: 2}}
      >
      <Toolbar />

      { children }
      </Box>
    </Box>
  )
}
