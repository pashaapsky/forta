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
        <div className="invoice-detail__group-block">
            {children}
        </div>
    );
};

export const InvoiceDetailBlock = ({children, operation, column, id}) => {

    return (
        <div
            className={`invoice-detail__block ${column ? "invoice-detail__block--column" : ""} ${operation ? "invoice-detail__operation" : ""}`}
            id={id ? id : ""}
        >
            {children}
        </div>
    );
};


