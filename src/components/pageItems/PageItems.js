import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/system';
import React from 'react';

const theme = createTheme();
const useStyles = makeStyles({
    container:{
        display: 'flex',
        gap: '30px',
        [theme.breakpoints.down('sm')]:{
            marginTop: '20px',
            flexDirection: 'column'
        }
    },
    btn: {
      color: 'white',
    },
    closeIcon: {
        color: 'white',
        marginLeft: '30px',
        fontSize: '40px',
        [theme.breakpoints.up('sm')]:{
            display: 'none'
        }
    }
});

const PageItems = (props) => {
    console.log(props.device);

    const classes = useStyles();
    return (
        <div className={classes.container}>
            <CloseIcon className={classes.closeIcon} onClick={() => props.handleToggleDrawer(false)}/>
            <Button className={classes.btn}>Home</Button>
            <Button className={classes.btn}>Home</Button>
            <Button className={classes.btn}>Home</Button>
            <Button className={classes.btn}>Home</Button>
        </div>
    );
};

export default PageItems;