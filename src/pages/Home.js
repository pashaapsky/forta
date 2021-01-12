import React, {Fragment, useState} from 'react';
import HeaderContainer from "../containers/Header";
import InvoiceTableContainer from "../containers/InvoiceTable";
import Sidebar from "../components/Sidebar";

const Home = () => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);

    const toggleSidebar = () => {
        setIsOpenSidebar(isOpenSidebar => !isOpenSidebar);
    };

    return (
        <div className="home-page">
            {isOpenSidebar && <Sidebar />}

            <div className="main-content">
                <HeaderContainer isOpenSidebar={isOpenSidebar} toggleSidebar={toggleSidebar}/>

                <InvoiceTableContainer/>
            </div>
        </div>
    );
};

export default Home;
