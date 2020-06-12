import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNav } from '../styled/StyledNav';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth } from '../Contexts/AuthContext';

const useStyles = makeStyles((theme) => ({
     root: {
    position: 'relative',
  },
  dropdown: {
    position: 'absolute',
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid pink',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,

  },

}));


export default function Header() {
    const [open, setOpen] = React.useState(false);
    const auth = useAuth();
    const classes = useStyles();

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };
  const {SignOut,user} = auth
   
    return (
        <StyledNav>
            <Link to="/">  <h2>To-Do List</h2> </Link>
            <Link to="/mylist">My List</Link>
            <ul>
                 { user && 
                   <Link> Sign out</Link>
                
               && <><li className="welcome"> Welcome {user.displayName}</li>
            <img src={user.photoURL} alt={user.displayName}/>
                <ClickAwayListener onClickAway={handleClickAway}>
                        <div className={classes.root}>
                            <button style={{border:"none", background:"none"}} type="button" onClick={handleClick}>
                             <ArrowDropDownIcon />
                            </button>
                            {open ? (
                            <div className={classes.dropdown}>
                               
                               <Link to="/userprofile"><li>My Profile</li> </Link>
                                <li><button onClick={SignOut}>Sign Out</button></li>
                                
                            </div>
                            ) : null}
                        </div>
               </ClickAwayListener> </>}
               
                
                
            </ul>
            
        </StyledNav>
    )
}
