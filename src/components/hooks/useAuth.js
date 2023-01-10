import { useSelector } from 'react-redux';
import { getUser, getIsLoggedIn, getUserRefreshing }  from '../redux/auth/auth-selectors';


export const useAuth = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getUserRefreshing);
  const user = useSelector(getUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};


// getIsLoggedIn,
// getUserRefreshing,