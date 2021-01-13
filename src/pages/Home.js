import React, {Fragment, useState} from 'react';
import HeaderContainer from "../containers/Header";
import InvoiceTableContainer from "../containers/InvoiceTable";
import Sidebar from "../components/Sidebar";

const Home = () => {
    return (
        <Fragment>
            <Sidebar />

            <div className="main-content">
                <HeaderContainer />

                <InvoiceTableContainer/>
            </div>
        </Fragment>
    );
};

export default Home;
