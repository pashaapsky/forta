import React from 'react';
import {InvoiceDetail, InvoiceDetailBlock, InvoiceDetailGroup} from '../components/InvoiceDetail'

const InvoiceDetailContainer = ({id}) => {
    return (
        <InvoiceDetail>
            <h1 className="invoice-detail__title">
                Онлайн магазин/Интернет магазин/Инвойс {id}
            </h1>

            <InvoiceDetailBlock>
                <div className="invoice-detail__item">
                    <div className="invoice-detail__title">

                    </div>
                    <div className="invoice-detail__subtitle">

                    </div>
                </div>
            </InvoiceDetailBlock>

            <InvoiceDetailGroup>
                <InvoiceDetailBlock>

                </InvoiceDetailBlock>

                <InvoiceDetailBlock>

                </InvoiceDetailBlock>
            </InvoiceDetailGroup>

            <InvoiceDetailBlock>

            </InvoiceDetailBlock>

            <InvoiceDetailBlock>

            </InvoiceDetailBlock>
        </InvoiceDetail>
    );
};

export default InvoiceDetailContainer;
