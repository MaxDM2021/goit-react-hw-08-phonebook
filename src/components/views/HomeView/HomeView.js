import React from 'react';
import "./HomeStyles.scss"

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    justifyContent: 'center',
    margin: '50px'
    
  },
  title: {
    fontWeight: 700,
    fontSize: 48,
    textAlign: 'center',
    color: '#2A363B',
   
  },
};

const HomeView = () => (
  <div style={styles.container} className="Homepage ">
    <h1 style={styles.title}>
       PHONE-DATA STORAGE
    </h1>
  </div>
);

export default HomeView;
