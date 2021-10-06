import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { AppBar, Drawer, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme } from '@mui/system';
import PageItems from '../pageItems/PageItems';

const theme = createTheme();
const useStyles = makeStyles({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 30px'
    },
    pages: {
        display: 'flex',
        gap: '65px',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    menuIcon: {
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        }
    },
    drawer: {
        '& .MuiDrawer-paper': {
            width: '100%',
            background: 'black',
        },
    },
});

function Navbar() {
    const [toggleDrawer, setToggleDrawer] = React.useState();
    const classes = useStyles();

    const handleToggleDrawer = () => {
        setToggleDrawer(!toggleDrawer);
    }
    return (
      <div>
          <AppBar>
              <Toolbar className={classes.toolbar}>
                  <div className="logo">
                      <Typography variant="h6">DigiTech</Typography>
                  </div>
                  <div>
                    <MenuIcon onClick={handleToggleDrawer} className={classes.menuIcon}/>
                    <Drawer
                    className={classes.drawer}
                    variant="temporary"
                    anchor='right'
                    open={toggleDrawer}
                    >
                        <PageItems handleToggleDrawer={() => handleToggleDrawer(true)}></PageItems>
                    </Drawer>
                  </div>
                  <div className={classes.pages}>
                    <PageItems></PageItems>
                  </div>
              </Toolbar>
          </AppBar>
      </div>
  )
}

export default Navbar;