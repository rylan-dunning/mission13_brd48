import React from 'react';
import styles from './Blah.module.css';

function TopBanner({ saying }: any) {
  return (
    <>
      <div className="row">
        <div className="col-2">
          <img src="./movie.png" alt="companylogo" style={{ margin: '1rem' }} />
        </div>
        <div className="col align-self-center text-start">
          <h1 className={styles.h1} style={{ marginTop: '1rem' }}>
            {saying}
          </h1>
        </div>
      </div>
    </>
  );
}
export default TopBanner;
