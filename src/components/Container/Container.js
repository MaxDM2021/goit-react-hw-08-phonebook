import styles from './Container.module.css';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../Loader/Loader';

import AppBar from 'components/AppBar';

export default function Container({ children }) {
  return <div className={styles.container}>
    <AppBar/>
    <Suspense fallback={Loader}>
        <Outlet />
      </Suspense>
    </div>;
}
