import React, {Fragment, useState} from 'react';
import HeaderContainer from "../containers/Header";
import InvoiceTableContainer from "../containers/InvoiceTable";
import Sidebar from "../components/Sidebar";

const Home = () => {
    return (
        <Fragment>
            <Sidebar />

            <HeaderContainer />

            <main className="main">
                <InvoiceTableContainer/>
            </main>
        </Fragment>
    );
};

export default Home;
