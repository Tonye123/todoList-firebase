import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNav } from '../styled/StyledNav';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth } from '../Contexts/AuthContext';
import defaultImage from '../images/defaultPhoto.png'

const useStyles = makeStyles((theme) => ({
     root: {
    position: 'relative',
  },
  dropdown: {
    position: 'absolute',
    minWidth:'max-content',
    top: 28,
    right: 0,
    zIndex: 1,
    border: '1px solid #bdbaba',
    padding: '8px 0px',
    backgroundColor: '#e8e8e8',

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
            <Link to="/">My List</Link>
            <ul>
                 { user && 
                   <Link to="/signin"> Sign out</Link>
                
               && <><li className="welcome"> Welcome {user.displayName}</li>
            {user.photoURL ? <img src={user.photoURL} alt={user.displayName} />
              : <img src={defaultImage} alt="default avatar" />}
                <ClickAwayListener onClickAway={handleClickAway}>
                        <div className={classes.root}>
                            <button style={{border:"none", background:"none",outline:"none"}} type="button" onClick={handleClick}>
                             <ArrowDropDownIcon />
                            </button>
                            {open ? (
                            <div className={classes.dropdown}>
                               
                               <Link to="/userprofile"><li>My Profile</li> </Link>
                               <hr />
                                <li><button onClick={SignOut}>Sign Out</button></li>
                                
                            </div>
                            ) : null}
                        </div>
               </ClickAwayListener> </>}
               
                
                
            </ul>
            
        </StyledNav>
    )
}
