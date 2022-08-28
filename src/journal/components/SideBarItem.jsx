import { TurnedInNot } from "@mui/icons-material";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../../store/journal/journalSlice";

export const SideBarItem = ({id, title = "", body, date, imageUrls = []}) => {

  const dispatch = useDispatch();
  
  const newTitle = useMemo(() => 
    title.length > 37
     ? title.substring(0, 37)+"..."
     : title,
     [title]);

  const newBody = useMemo(() => 
      body.length > 74
     ? body.substring(0, 74)+"..."
     : body,
     [body]);

  

     const onClickNote = () => {
        dispatch(setActiveNote({
          id,
          title,
          body,
          date,
          imageUrls
        }))
     }

  return (
    <ListItem 
      disablePadding
    >
      <ListItemButton
        onClick={onClickNote}
      >
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText 
            primary={newTitle} 
          />
          <ListItemText
            secondary={newBody}
          />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
