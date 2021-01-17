import React from 'react';
import {
    Table,
    TableHeaderItem,
    InvoicesItem,
    InvoicesItemDropdown
} from "../components/Table";
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
        <Table>
            <h1 className="table__title">Таблица инвойсов</h1>

            <span className="table__subtitle">Результаты</span>


            <div className="table__group">

                <div className="table__item">
                    <TableHeaderItem title="Номер" SortIcon={ArrowDropDownIcon}/>
                    <TableHeaderItem title="Дата" SortIcon={ArrowDropDownIcon}/>
                    <TableHeaderItem title="Проект" className="project"/>
                    <TableHeaderItem title="Сумма заказа" SortIcon={ArrowDropDownIcon} c/>
                    <TableHeaderItem title="Плательщик"/>
                    <TableHeaderItem title="Сумма оплаты"/>
                    <TableHeaderItem title="Статус"/>
                </div>

                {items.map(item => (

                    <InvoicesItem item={item}>
                        {/*<InvoicesItemDropdown item={item}/>*/}
                    </InvoicesItem>

                ))}
            </div>
        </Table>
    );
};

export default InvoiceTableContainer;
