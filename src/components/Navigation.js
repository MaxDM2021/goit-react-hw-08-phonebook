import React from 'react';
import { NavLink } from 'react-router-dom';
import { getIsLoggedIn } from './redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = () => {
const isLoggedIn = useSelector(getIsLoggedIn);
return (
<nav>
    <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
      Home
    </NavLink>

{isLoggedIn && 
    <>
    <NavLink to="/contacts" exact style={styles.link} activeStyle={styles.activeLink}>
      Contacts
    </NavLink>
    <NavLink to="/upload" exact style={styles.link} activeStyle={styles.activeLink}>
      Douwnload
    </NavLink>
</>
}
  </nav>

);
}
export default Navigation;
