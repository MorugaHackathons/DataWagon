import React, { useState } from 'react';
import styles from './NavBar.module.scss'; // Создайте файл NavBar.module.scss для стилей
import logo from "../../assets/logo.svg";

const NavBar: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className={`${styles.navBar} ${isHovered ? styles.hovered : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Ваши кнопки-иконки здесь */}
            <div className={styles.icon}> <img src={logo}/> </div>
            {/* Добавьте еще три кнопки-иконки с помощью div с классом styles.icon */}
        </div>
    );
};

export default NavBar;
