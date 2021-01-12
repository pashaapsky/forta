import React, {useState} from 'react';
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

    const toggleOpen = () => {
        setIsOpen(isOpen => !isOpen);
    };

    return (
        <div className={`invoice-table__block`}>
            <div className="invoice-table__group">
                {!isOpen ? <ArrowForwardIosIcon onClick={toggleOpen}/> : <ExpandLessIcon onClick={toggleOpen}/>}

                <div className="invoice-table__item number">
                    {item.number}
                </div>

                <div className="invoice-table__item date">
                    {item.date}
                </div>

                <div className="invoice-table__item project">
                    {item.projectName}
                </div>

                <div className="invoice-table__item order-price">
                    {item.orderPrice}
                </div>

                <div className="invoice-table__item email" >
                    {item.email}
                </div>

                <div className="invoice-table__item payment-price">
                    {item.paymentPrice}
                </div>

                <button className="invoice-table__item status">
                    {item.status}
                </button>

                <MoreVertIcon/>
            </div>

            {isOpen && children}
        </div>
    );
};

export const InvoiceTableItemDropdown = ({item, children}) => {

    return (
        <div className={`dropdown`}>
            <div className="dropdown__group">
                <div className="dropdown__item">
                    ID транзакции
                    {item.id}
                </div>

                <div className="dropdown__item">
                    Зачислено на баланс
                    {item.balance}
                </div>

                <div className="dropdown__item">
                    Покупатель
                    {item.username}
                </div>

                <div className="dropdown__item">
                    Ссылка на оплату
                    {item.paymentLink}
                </div>

                <div className="dropdown__item">
                    Дата транзакции
                    {item.transactionDate}
                </div>

                <div className="dropdown__item">
                    Комиссия
                    {item.commission}
                </div>

                <div className="dropdown__item">
                    Телефон
                    {item.phone}
                </div>
            </div>

            <div className="dropdown__group">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/240px-QR_code_for_mobile_English_Wikipedia.svg.png"
                    alt="штрих код"
                />
            </div>
        </div>
    );
};


