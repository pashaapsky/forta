import React from 'react';
import {
    InvoiceTable,
    InvoiceTableHeaderItem,
    InvoiceTableHeaders,
    InvoiceTableItem,
    InvoiceTableItemDropdown
} from "../components/InvoiceTable";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowForwardIosIcon from "@material-ui/core/SvgIcon/SvgIcon";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const InvoiceTableContainer = () => {
    const items = [
        {
            id: 1,
            number: 123123,
            date: "12.12.2020",
            projectName: 'ООО "Солнышко"',
            orderPrice: "3000.00 руб",
            email: "radmir@hmai.com",
            paymentPrice: '2100.00 руб',
            status: "Оплачен",
            balance: "10062.90",
            username: "Батин Максим Владимирович",
            paymentLink: "https://xforta.com/pay/1212123",
            transactionDate: "15/12/2020 11:06",
            commision: "200.44",
            phone: "+7(924)330-79-77"
        },
        {
            id: 2,
            number: 123123,
            date: "12.12.2020",
            projectName: 'ООО "Рога и копыта"',
            orderPrice: "3000.00 руб",
            email: "radmir@hmai.com",
            paymentPrice: '2100.00 руб',
            status: "Оплачен",
            balance: "10062.90",
            username: "Батин Максим Владимирович",
            paymentLink: "https://xforta.com/pay/1212123",
            transactionDate: "15/12/2020 11:06",
            commision: "200.44",
            phone: "+7(924)330-79-77"
        },
        {
            id: 3,
            number: 123123,
            date: "12.12.2020",
            projectName: 'ООО "Что то очень длинное длинное длинное"',
            orderPrice: "3000.00 руб",
            email: "radmir@hmai.com",
            paymentPrice: '2100.00 руб',
            status: "Оплачен",
            balance: "10062.90",
            username: "Батин Максим Владимирович",
            paymentLink: "https://xforta.com/pay/1212123",
            transactionDate: "15/12/2020 11:06",
            commision: "200.44",
            phone: "+7(924)330-79-77"
        }
    ];

    return (
        <InvoiceTable>
            <div className="container">
                <InvoiceTableHeaders>
                    <InvoiceTableHeaderItem />
                    <InvoiceTableHeaderItem title="Номер" SortIcon={ArrowDropDownIcon} className="number"/>
                    <InvoiceTableHeaderItem title="Дата" SortIcon={ArrowDropDownIcon} className="date"/>
                    <InvoiceTableHeaderItem title="Проект" className="project"/>
                    <InvoiceTableHeaderItem title="Сумма заказа" SortIcon={ArrowDropDownIcon} className="order-price"/>
                    <InvoiceTableHeaderItem title="Плательщик" className="email"/>
                    <InvoiceTableHeaderItem title="Сумма оплаты" className="payment-price"/>
                    <InvoiceTableHeaderItem title="Статус" className="status"/>
                </InvoiceTableHeaders>

                {items.map(item => (
                    <InvoiceTableItem item={item}>
                        <InvoiceTableItemDropdown item={item}/>
                    </InvoiceTableItem>
                ))}
            </div>
        </InvoiceTable>
    );
};

export default InvoiceTableContainer;
