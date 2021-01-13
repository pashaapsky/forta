import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export const InvoiceTable = ({children}) => {
    return (
        <section className="invoice-table">
            <div className="invoice-table__container">
                <h1 className="invoice-table__title">Таблица инвойсов</h1>
                <span className="invoice-table__subtitle">Результаты</span>

                {children}
            </div>
        </section>
    );
};


export const InvoiceTableHeaders = ({children}) => {
    return (
        <div className="invoice-table__headers">
            {children}
        </div>
    );
};

export const InvoiceTableHeaderItem = ({SortIcon, className, title}) => {
    return (
        <div className={`invoice-table__header ${className}`}>
            {title}
            {SortIcon && <SortIcon/>}
        </div>
    );
};

export const InvoiceTableItem = ({item, children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const toggleOpen = () => {
        setIsOpen(isOpen => !isOpen);
    };

    return (
        <div className={`invoice-table__block ${isOpen ? "open" : ""}`}>
            <div className="invoice-table__group">
                {!isOpen ? (
                    <ArrowForwardIosIcon className="arrow-btn" onClick={toggleOpen}/>
                ) : (
                    <ExpandLessIcon className="arrow-btn arrow-btn--large" onClick={toggleOpen}/>
                )}

                <div className="invoice-table__item">
                    {item.number}
                </div>

                <div className="invoice-table__item">
                    {item.date}
                </div>

                <div className="invoice-table__item">
                    {item.projectName}
                </div>

                <div className="invoice-table__item">
                    {item.orderPrice}
                </div>

                <div className="invoice-table__item">
                    {item.email}
                </div>

                <div className="invoice-table__item">
                    {item.paymentPrice}
                </div>

                <div className="invoice-table__item">
                    <button className="status-btn status-btn--success">
                        {item.status}
                    </button>
                </div>

                <MoreVertIcon
                    className="more-btn"
                    onClick={() => setIsOpenMenu(isOpenMenu => !isOpenMenu)}
                />
            </div>

            {isOpenMenu && (
                <div
                    className="item-menu"
                    onMouseLeave={() => setIsOpenMenu(false)}
                >
                    <div className="item-menu__item">
                        <NavLink to={`/invoices/${item.id}`} className="item-menu__link">
                            Детальная
                        </NavLink>
                    </div>

                    <div className="item-menu__item">
                        <button className="item-menu__btn">Еще меню</button>
                    </div>
                </div>
            )}


            {isOpen && children}
        </div>
    );
};


export const InvoiceTableItemDropdown = ({item, children}) => {
    return (
        <div className={`dropdown`}>
            <div className="dropdown__group">
                <div className="dropdown__item">
                    <div className="dropdown__title">
                        ID транзакции :
                    </div>
                    <div className="dropdown__subtitle">
                        {item.id}
                    </div>
                </div>

                <div className="dropdown__item">
                    <div className="dropdown__title">
                        Зачислено на баланс:
                    </div>
                    <div className="dropdown__subtitle dropdown__subtitle--red">
                        {item.balance}
                    </div>
                </div>

                <div className="dropdown__item">
                    <div className="dropdown__title">
                        Покупатель :
                    </div>

                    <div className="dropdown__subtitle">
                        {item.username}
                    </div>
                </div>

                <div className="dropdown__item">
                    <div className="dropdown__title">
                        Ссылка на оплату :
                    </div>

                    <div className="dropdown__subtitle">
                        {item.paymentLink}
                    </div>
                </div>

                <div className="dropdown__item">
                    <div className="dropdown__title">
                        Дата транзакции :
                    </div>

                    <div className="dropdown__subtitle">
                        {item.transactionDate}
                    </div>
                </div>

                <div className="dropdown__item">
                    <div className="dropdown__title">
                        Комиссия :
                    </div>
                    <div className="dropdown__subtitle">
                        {item.commision}
                    </div>
                </div>

                <div className="dropdown__item">
                    <div className="dropdown__title">
                        Телефон:
                    </div>
                    <div className="dropdown__subtitle">
                        {item.phone}
                    </div>
                </div>
            </div>

            <div className="dropdown__img">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/240px-QR_code_for_mobile_English_Wikipedia.svg.png"
                    alt="штрих код"
                />
            </div>
        </div>
    );
};


