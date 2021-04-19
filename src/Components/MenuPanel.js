import React from 'react'
import './Styles.css'

const MenuPanel = () => {
    return (
        <div className="menu-container">
            <div className="menu-container-title">Количество пересадок</div>
            <div className="menu-container-item">
                <input type="checkbox"/>
                <p>Без пересадок</p>
                </div>
            <div className="menu-container-item">
                <input type="checkbox"/>
                <p>1 пересадка</p>
                </div>
            <div className="menu-container-item">
                <input type="checkbox"/>
                <p>2 пересадки</p>
            </div>
            <div className="menu-container-item">
                <input type="checkbox"/>
                <p>3 пересадки</p>
                </div>
        </div>
    );
}

export default MenuPanel