import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../redux/auth';
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
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUseremail);
  

  return (
    <div style={styles.container}>
      <img src={BsFillEmojiSunglassesFill} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Welcome, {email}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </button>
    </div>
  );
}
