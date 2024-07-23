import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.scss"
import { Switch } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { SWITCH_THEME } from '../../redux/actions/types';
function Navbar() {
  const isDarkMode = useSelector((state)=> state.isDarkMode)
  const dispatch = useDispatch();
  const handleThemeToggle = () => {
    dispatch({type: SWITCH_THEME})
  }
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">Home/Search</Link>
            </li>
            <li>
                <Link to="/bookmarks">Bookmarks</Link>
            </li>
            <li>
              <Switch 
                checked={isDarkMode}
                onChange={handleThemeToggle}
                name={isDarkMode ? "Dark Mode" : "Light Mode"}
                color='secondary'
              />
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;

// Link is a substitude of <a> tag. the problem with the a tag is that it reloades the page, which we want to avoid
// application state is lost in refresh