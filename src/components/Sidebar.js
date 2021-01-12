import React from 'react';
import {NavLink} from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <h1 className="sidebar__header">x 100</h1>

            <nav className="navbar">
                <ul className="navbar-menu">
                    <li className="navbar-menu__item">
                        <NavLink exact to="/" className="navbar-menu__link">Онлайн эквайринг</NavLink>
                    </li>

                    <li className="navbar-menu__item">
                        <NavLink to="/payments" className="navbar-menu__link">Выплаты</NavLink>
                    </li>

                    <li className="navbar-menu__item">
                        <NavLink to="/purses" className="navbar-menu__link">Кошельки</NavLink>
                    </li>

                    <li className="navbar-menu__item">
                        <NavLink to="/orders" className="navbar-menu__link">Отчеты</NavLink>
                    </li>
                </ul>
            </nav>

        </aside>
    );
};

export default Sidebar;
