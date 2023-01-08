import styled from 'styled-components';
import {
  BsFillCameraReelsFill,
  BsFillHouseFill
} from 'react-icons/bs';

import { NavLink } from 'react-router-dom';
import { Box } from './Box';
import "../components/Styles/styles.css"

const navItems = [
  { href: 'home', text: 'Home', icon: BsFillHouseFill },
  { href: 'movies', text: 'Movies', icon: BsFillCameraReelsFill },

];

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-right: 20px;
  font-family:Verdana, Geneva, Tahoma, sans-serif
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 18px;
  
  color: ${p => p.theme.colors.text};
  &.active {
    background-color: hsl(232, 9%, 50%);
    color: ${p => p.theme.colors.white};
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.white};
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
`;

export const AppBar = () => {
  return (
    <Box as="header" p={4} height="70px" borderBottom="4px solid #3f4b4b" >
      <Box as="nav" display="flex" justifyContent="center" >
        {navItems.map(({ href, text, icon: Icon }) => (
        <NavItem to={href} key={href}>
            <Icon className='icon' size="16"/>
        {text}
       </NavItem>
        ))}
      </Box>
    </Box>
  );
};