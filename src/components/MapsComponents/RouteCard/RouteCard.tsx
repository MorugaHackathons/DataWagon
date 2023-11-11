// RouteCard.tsx
import React from 'react';
import styles from './RouteCard.module.scss';

interface RouteCardProps {
    routeNumber?: string;
    status?: 'В ремонте' | 'Требует ремонта' | 'Загружен' | 'Свободен';
    wagonType?: string;
    additionalInfo?: string;
    departureCity?: string;
    arrivalCity?: string;
    departureTime?: string;
    arrivalTime?: string;
    loadingPoints?: string[] | undefined;
    trainNumber?: string;
    wagons?: string[] | undefined;
    cargoType?: string;
    cargoWeight?: string;
}

const RouteCard: React.FC<RouteCardProps> = ({
                                                 routeNumber,
                                                 status,
                                                 wagonType,
                                                 additionalInfo,
                                                 departureCity,
                                                 arrivalCity,
                                                 departureTime,
                                                 arrivalTime,
                                                 loadingPoints,
                                                 trainNumber,
                                                 wagons,
                                                 cargoType,
                                                 cargoWeight,
                                             }) => {
    return (
        <div className={styles.routeCard}>
            <div className={styles.routeInfo}>
                {routeNumber && <h3 className={styles.routeNumber}>Маршрут: {routeNumber}</h3>}
                {status && <p className={styles.status}>{status}</p>}
            </div>
            <div>
                {routeNumber && status && (
                    <div className={styles.progressBarContainer}>
                        <div className={styles.progressBarBackground}></div>
                        <div className={styles.progressBarFill}></div>
                    </div>
                )}
            </div>
            <div className={styles.detailsContainer}>
                <div className={styles.leftDetails}>
                    {departureCity && (
                        <p className={styles.location}>
                            <strong>Отбыл: </strong>
                            {departureCity}
                        </p>
                    )}

                    {departureTime && (
                        <p className={styles.time}>
                            {/*<strong>Время отбытия:</strong> */}
                            {departureTime}
                        </p>
                    )}

                    {trainNumber && (
                        <p className={styles.trainInfo}>
                            <strong>Поезд</strong> <br/>
                            {trainNumber}
                        </p>
                    )}
                    {cargoType && (
                        <p className={styles.cargoInfo}>
                            <strong>Тип груза</strong> <br/>
                            {cargoType}
                        </p>
                    )}
                </div>
                {/*<div className={styles.centerDetails}>*/}
                {/*    {loadingPoints && loadingPoints.length > 0 && (*/}
                {/*        <p className={styles.loadingPoints}>*/}
                {/*            <strong>Пункты:</strong> {loadingPoints.join(', ')}*/}
                {/*        </p>*/}
                {/*    )}*/}
                {/*</div>*/}
                <div className={styles.rightDetails}>
                    {arrivalCity && (
                        <p className={styles.location}>
                            <strong>Прибыл: </strong>
                            {arrivalCity}
                        </p>
                    )}
                    {arrivalTime && (
                        <p className={styles.time}>
                            {/*<strong>Время прибытия:</strong> */}
                            {arrivalTime}
                        </p>
                    )}
                    {wagons && wagons.length > 0 && (
                        <p className={styles.trainInfo}>
                            <strong>Вагоны</strong> <br/>
                            {wagons.join("\n")}
                        </p>
                    )}
                    {cargoWeight && (
                        <p className={styles.cargoInfo}>
                            <strong>Масса груза</strong> <br/>
                            {cargoWeight} кг
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RouteCard;
