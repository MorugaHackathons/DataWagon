// NavBar.tsx
import React, { useState } from 'react';
import styles from './NavBar.module.scss'; // Make sure you have the necessary styles
import Chat from './Chat/Chat'; // Import your components here
import Support from './Support/Support';
import chatIcon from "../../assets/chat.svg"
import supportIcon from "../../assets/support.svg"
import closeIcon from "../../assets/close.svg"
import dashboardIcon from "../../assets/dashboard.svg"
import support from "./Support/Support";

const NavBar: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [activeComponent, setActiveComponent] = useState<React.ReactNode | null>(null);

    const handleMouseEnter = () => {
        if (!activeComponent) {
            setIsHovered(true);
        } else {setIsHovered(true);}
    };

    const handleMouseLeave = () => {
        if (!activeComponent) {
            setIsHovered(false);
        } else {setIsHovered(true);}
    };

    const handleClick = (component: React.ReactNode) => {
        setActiveComponent(component);
    };

    const handleCloseClick = () => {
        setActiveComponent(null);
    };

    return (
        <div
            className={`${styles.navBar} ${isHovered ? styles.hovered : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>

            {/* Your icon buttons go here */}
            <div className={styles.icon} onClick={() => {console.log("dashboard")}}><img src={dashboardIcon} alt={"Dashboard"}/></div>
            <div className={styles.icon} onClick={() => handleClick(<Chat />)}><img src={chatIcon} alt={"Chat"}/></div>
            <div className={styles.icon} onClick={() => handleClick(<Support />)}><img src={supportIcon} alt={"Support"}/></div>
            {activeComponent ? (<div className={`${styles.icon} ${styles.closeButton}`} onClick={handleCloseClick}>
                <img src={closeIcon} alt={"Close"}/>
            </div>) : null}
            <div>
                {activeComponent ? (
                    <div className={styles.activeComponent}>
                        {activeComponent}
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default NavBar;
