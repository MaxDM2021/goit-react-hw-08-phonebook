import styles from './Container.module.css';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import AppBar from 'components/AppBar';

export default function Container({ children }) {
  return <div className={styles.container}>
    <AppBar/>
    <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>;
}
