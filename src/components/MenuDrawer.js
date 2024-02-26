import { Drawer, List, ListItem, ListItemButton, Toolbar } from '@mui/material'
import React, { useContext } from 'react'
import { Create, Scoreboard } from '@mui/icons-material'
import { locationContext } from '../hooks/appState'

function MenuDrawer(props) {
  const {location, setLocation} = useContext(locationContext);
  return (
    <Drawer
    sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        }}}
    anchor='left'
    color='primary'
    open={props.open}
    >
        <Toolbar/>
        <List>
          <ListItemButton onClick={()=>setLocation("input")}>
            <Create />
            <div>Input Score</div>
          </ListItemButton>
          <ListItemButton onClick={()=>setLocation("check")}>
            <Scoreboard />
            <div>Score</div>
          </ListItemButton>
        </List>
    </Drawer>
  )
}

export default MenuDrawer