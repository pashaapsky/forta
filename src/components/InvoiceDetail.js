import React from 'react';

export const InvoiceDetail = ({children}) => {
    return (
        <section className="invoice-detail">
            <div className="invoice-detail__container">
                {children}
            </div>
        </section>
    );
};

export const InvoiceDetailGroup = ({children}) => {
    return (
        <div className="invoice-detail__group">
            {children}
        </div>
    );
};

export const InvoiceDetailBlock = ({children}) => {
    return (
        <div className="invoice-detail__block">
            {children}
        </div>
    );
};


