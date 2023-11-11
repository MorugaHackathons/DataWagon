// Main.tsx
import React from 'react';
import LeftBar from '../../components/LeftBar/LeftBar';
import Map from '../../components/MapsComponents/Map/Map'
import styles from './Main.module.scss';

const Main: React.FC = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftBarContainer}>
                <LeftBar/>
            </div>
            <div className={styles.mapContainer}>
                <Map />
            </div>
        </div>
    );
};

export default Main;
