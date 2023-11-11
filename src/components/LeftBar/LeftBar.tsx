// LeftBar.tsx
import React from 'react';
import FilterModal from '../MapsComponents/FilterModal/FilterModal';
import RouteCard from '../MapsComponents/RouteCard/RouteCard';
import styles from './LeftBar.module.scss';
import filterSvg from "../../assets/filter.svg"
import NavBar from '../NavBar/NavBar';


const LeftBar: React.FC = () => {
    const routeData: any[] = [];

    return (
        <div className={styles.leftBar}>
            <NavBar/>
            <div className={styles.formContainer}>
                <input type="text" placeholder="Search" className={styles.searchInput} />
                <button className={styles.filterButton}><img src={filterSvg} alt="Filter Icon" /></button>
            </div>
            {/*<FilterModal />*/}
            {/*{routeData.map((route, index) => (*/}
            {/*    <RouteCard key={index} route={route} />*/}
            {/*))}*/}
            <RouteCard cargoType={"Гениальность"} routeNumber={"GENIUSES"} wagonType={"AAAAAAA"} status={"Загружен"} additionalInfo={"4"} loadingPoints={["Чекпоинт №1", "Чекпоинт №2", "Чекпоинт №3"]} arrivalCity={"Золотое Место"} arrivalTime={"11:00 12.11.2023"} cargoWeight={"1 тонна"} departureCity={"Начало пути"} departureTime={"17:00 10.11.2023"} trainNumber={"ALLAH"} wagons={["Таня", "Юля", "Кирилл", "Вадим", "Саша"]}/>
            <RouteCard cargoType={"НеГениальность"} routeNumber={"НеGENIUSES"} wagonType={"АИА"} status={"В ремонте"} additionalInfo={"4"} loadingPoints={["Чекпоинт №3", "Чекпоинт №643578", "Рай"]} arrivalCity={"Ад"} arrivalTime={"11:00 12.11.2023"} cargoWeight={"100000 тонна"} departureCity={"РАССИЯ"} departureTime={"17:00 10.11.2023"} trainNumber={"БУДДА"} wagons={["1", "ывапгоапыво", "ываоывао", "ываовыао", "ываовыаоп"]}/>

        </div>
    );
};

export default LeftBar;
