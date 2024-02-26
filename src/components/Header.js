import { AppBar, Box, Toolbar, IconButton } from '@mui/material'
import React, { useContext } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { menuContext } from '../hooks/appState'

function Header() {
    const {isOpened, setOpened} = useContext(menuContext);
    const toggleOpen = () => {
        setOpened(!isOpened);
    }
  return (
    <Box>
        <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleOpen}
                >
                    <MenuIcon/>
                </IconButton>
            </Toolbar>   
        </AppBar>
    </Box>
  )
}

export default Header