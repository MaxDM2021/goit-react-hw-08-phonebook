import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from '../redux/auth';
import { getUseremail } from "../redux/auth/auth-selectors"
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
// import defaultAvatar from './default-avatar.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 5,
    fontWeight: 700,
    color: '#2A363B',
    backgroundColor: 'inherit',
    borderRadius: '4px',
  },
  activeLink: {
    color: '#E84A5F',
  },
};




export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(getUseremail);


  const userOut = async () => {
    await dispatch(authOperations.logOut());
    window.localStorage.removeItem('persist:auth');
};
  

  return (
    <div style={styles.container}>
      <img src={BsFillEmojiSunglassesFill} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Welcome, {email}</span>
      <button style={styles.link} type="button" onClick={userOut}>
        Log out
      </button>
    </div>
  );
}
