import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import styles from './Map.module.scss'

const HandleMapZoom = () => {
    const map = useMap();

    useEffect(() => {
        const handleMapZoom = () => {
            const currentZoomLevel = map.getZoom();
            console.log(`Map zoom level: ${currentZoomLevel}`);
        };

        map.on('zoom', handleMapZoom);
    }, [map]);

    return null;
};

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

const Map: React.FC = () => {
    return (
        <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            className={styles.mapContainer}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="© OpenStreetMap contributors"
            />
            <Marker icon={DefaultIcon} position={[51.505, -0.09]} opacity={0.5}>
                <Popup>
                    <div style={{backgroundColor: 'white', height: '100px', padding: '10px', color: 'red'}}>
                        ы<br/>в<br/>а<br/>щ<br/>р<br/>г<br/>о<br/>ы<br/>в<br/>а<br/>г<br/>ш<br/>щ<br/>п<br/>р<br/>ф<br/>ы<br/>в<br/>а<br/>пг<br/>ш<br/>щ<br/>ы<br/>в<br/>о<br/>а<br/>п<br/>ш<br/>з<br/>ф<br/>ы<br/>в<br/>а<br/>о<br/>п<br/>рщ\nфывагшпрывагш<br/>прывагщптывао<br/>прывагщпрвагщпрыв<br/>агшпроваг<br/>щпровагшщпр<br/>ывагщрогщывашрогшщ<br/>ывароывагшщрогш<br/>щваырогшщыв<br/>арогшщывап<br/>гщывапгщываопщгшв<br/>ыапогшщвыапогщва<br/>вагщрывагщроывагщрогщшыварошщывар<br/>ошщыварошщываоршщывар
                    </div>
                </Popup>
            </Marker>
            <HandleMapZoom/>
        </MapContainer>
    );
};

export default Map;
