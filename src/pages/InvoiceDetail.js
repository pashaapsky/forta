import React, {Fragment} from 'react';
import {useParams} from 'react-router-dom';
import Sidebar from "../components/Sidebar";
import HeaderContainer from "../containers/Header";
import InvoiceDetailContainer from "../containers/InvoiceDetail";

const InvoiceDetail = () => {
    let {id} = useParams();

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

    const detailItem = items.find(item => item.id = id);

    console.log(detailItem);

    return (
        <Fragment>
            <Sidebar/>

            <HeaderContainer/>

            <main className="main">
                <InvoiceDetailContainer item={detailItem}/>
            </main>
        </Fragment>

    );
};

export default InvoiceDetail;
