// LeftBar.tsx
import React from 'react';
import FilterModal from '../MapsComponents/FilterModal/FilterModal';
import RouteCard from '../MapsComponents/RouteCard/RouteCard';
import styles from './LeftBar.module.scss';
import filterSvg from "../../assets/filter.svg"
import NavBar from '../NavBar/NavBar';


interface LeftBarProps {
    selectedMarker: any;
    setSelectedMarker: (markerId: any) => void;
}

const LeftBar: React.FC<LeftBarProps> = ({selectedMarker, setSelectedMarker }: LeftBarProps) => {
    const routeData = [
        {
            id: 1,
            cargoType: "Гениальность",
            routeNumber: "GENIUSES",
            wagonType: "AAAAAAA",
            status: "Загружен",
            additionalInfo: "4",
            loadingPoints: ["Чекпоинт №1", "Чекпоинт №2", "Чекпоинт №3"],
            arrivalCity: "Золотое Место",
            arrivalTime: "11:00 12.11.2023",
            cargoWeight: "1 тонна",
            departureCity: "Начало пути",
            departureTime: "17:00 10.11.2023",
            trainNumber: "ALLAH",
            wagons: ["Таня", "Юля", "Кирилл", "Вадим", "Саша"]
        },
        {
            id: 2,
            cargoType: "НеГениальность",
            routeNumber: "НеGENIUSES",
            wagonType: "АИА",
            status: "В ремонте",
            additionalInfo: "4",
            loadingPoints: ["Чекпоинт №3", "Чекпоинт №643578", "Рай"],
            arrivalCity: "Ад",
            arrivalTime: "11:00 12.11.2023",
            cargoWeight: "100000 тонна",
            departureCity: "РАССИЯ",
            departureTime: "17:00 10.11.2023",
            trainNumber: "БУДДА",
            wagons: ["1", "ывапгоапыво", "ываоывао", "ываовыао", "ываовыаоп"]
        },
        {
            id: 3,
            cargoType: "1241235",
            routeNumber: "НеGE3456742567NIUSES",
            wagonType: "34573457",
            status: "В ре445373457монте",
            additionalInfo: "4",
            loadingPoints: ["Чек43575437поинт №3", "Чекп457457оинт №643578", "Р457457ай"],
            arrivalCity: "А457457457д",
            arrivalTime: "11:00 12.11.2023",
            cargoWeight: "1004574574000 тонна",
            departureCity: "457457",
            departureTime: "14574577:00 10.11.2023",
            trainNumber: "БУДД457457А",
            wagons: ["1", "ыва457457пгоапыво", "ы457457ваоывао", "ываовыао", "ываовыаоп"]
        }
    ];
    console.log(selectedMarker)
    // Find the index of the selected route in the array
    const selectedIndex = routeData.findIndex(route => route.id === selectedMarker);

    if (selectedIndex !== -1) {
        const selectedRoute = routeData.splice(selectedIndex, 1)[0];
        routeData.unshift(selectedRoute);
    }

    const handleCardClick = (markerId: any) => {
        setSelectedMarker(markerId);
    };

    console.log(selectedMarker);

    return (
        <div className={styles.leftBar}>
            <NavBar />
            <div className={styles.formContainer}>
                <input type="text" placeholder="Search" className={styles.searchInput} />
                <button className={styles.filterButton}><img src={filterSvg} alt="Filter Icon" /></button>
            </div>
            <div className={styles.scrollContainer}>
                {routeData.map((route, index) => (
                    <RouteCard
                        key={index}
                        routeNumber={route.routeNumber}
                        status={route.status}
                        wagonType={route.wagonType}
                        additionalInfo={route.additionalInfo}
                        departureCity={route.departureCity}
                        arrivalCity={route.arrivalCity}
                        departureTime={route.departureTime}
                        arrivalTime={route.arrivalTime}
                        loadingPoints={route.loadingPoints}
                        trainNumber={route.trainNumber}
                        wagons={route.wagons}
                        cargoType={route.cargoType}
                        cargoWeight={route.cargoWeight}
                        selected={route.id === selectedMarker}
                        onClick={() => handleCardClick(route.id)} // Обработчик клика на карточку
                    />
                ))}
            </div>
        </div>
    );
};

export default LeftBar;