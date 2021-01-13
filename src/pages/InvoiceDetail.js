import React, {Fragment} from 'react';
import {useParams} from 'react-router-dom';
import Sidebar from "../components/Sidebar";
import HeaderContainer from "../containers/Header";
import InvoiceDetailContainer from "../containers/InvoiceDetail";

const InvoiceDetail = () => {
    let {id} = useParams();

    const item = {

    };

    return (
        <Fragment>
            <Sidebar/>

            <div className="main-content">
                <HeaderContainer/>

                <InvoiceDetailContainer item={item}/>
            </div>
        </Fragment>

    );
};

export default InvoiceDetail;
