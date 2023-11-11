import React from 'react';
import styles from './RouteCard.module.scss';

interface RouteCardProps {
    routeNumber: string;
    status: 'В ремонте' | 'Требует ремонта' | 'Загружен' | 'Свободен';
    wagonType: string;
    additionalInfo: string;
}

const RouteCard: React.FC<RouteCardProps> = ({ routeNumber, status, wagonType, additionalInfo }) => {
    return (
        <div className={styles.routeCard}>
            <h3 className={styles.routeNumber}>{routeNumber}</h3>
            <p className={styles.status}>{status}</p>
            <p className={styles.wagonType}>{wagonType}</p>
            <p className={styles.additionalInfo}>{additionalInfo}</p>
            {/*
            - Откуда и куда
            - тра-ля-ля */}


        </div>
    );
};

export default RouteCard;
