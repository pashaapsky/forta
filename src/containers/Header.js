import React, {Fragment, useState} from 'react';
import {Header, HeaderGroup, HeaderItem} from "../components/Header";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const HeaderContainer = () => {
    const [isOpenCompany, setIsOpenCompany] = useState(false);

    const toggleCompany = () => {
        setIsOpenCompany(isOpenCompany => !isOpenCompany);
    };

    return (
        <Fragment>
            <Header>
                <button className="toggle-nav-btn">
                    <MenuIcon/>
                </button>

                <HeaderGroup>
                    <HeaderItem>
                        <NotificationsIcon className="notification-icon"/>
                        <span className="circle"/>
                    </HeaderItem>

                    <HeaderItem>
                        <span className="bank">1944223.05 Р</span>
                    </HeaderItem>

                    <HeaderItem>
                        Мегабит
                        {!isOpenCompany ? <ExpandMoreIcon className="arrow-icon" onClick={toggleCompany}/> :
                            <ExpandLessIcon className="arrow-icon" onClick={toggleCompany}/>}
                    </HeaderItem>
                </HeaderGroup>
            </Header>
        </Fragment>
    );
};

export default HeaderContainer;
