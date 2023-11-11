// Main.tsx
import React, {useState} from 'react';
import LeftBar from '../../components/LeftBar/LeftBar';
import Map from '../../components/MapsComponents/Map/Map'
import styles from './Main.module.scss';

const Main: React.FC = () => {
    const [selectedMarker, setSelectedMarker] = useState(null);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftBarContainer}>
                <LeftBar setSelectedMarker={setSelectedMarker} selectedMarker={selectedMarker} /> </div>
            <div className={styles.mapContainer}>
                <Map selectedMarker={selectedMarker} setSelectedMarker={setSelectedMarker} /></div>
        </div>
    );
};

export default Main;
