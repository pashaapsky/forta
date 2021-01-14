import React from 'react';
import {InvoiceDetail, InvoiceDetailBlock, InvoiceDetailGroup} from '../components/InvoiceDetail'

const InvoiceDetailContainer = ({item}) => {
    return (
        <InvoiceDetail>
            <h1 className="invoice-detail__header">
                Онлайн магазин/Интернет магазин/
                <strong>Инвойс {item.id}</strong>
            </h1>

            <InvoiceDetailBlock id="main-detail">
                <div className="invoice-detail__item">
                    <div className="invoice-detail__title">
                        ID
                    </div>
                    <div className="invoice-detail__subtitle">
                        566333
                    </div>
                </div>

                <div className="invoice-detail__group">
                    <div className="invoice-detail__item">
                        <div className="invoice-detail__title">
                            Сумма транзакций
                        </div>
                        <div className="invoice-detail__subtitle invoice-detail__subtitle--red">
                            19 223.05 Р
                        </div>
                    </div>

                    <div className="invoice-detail__item">
                        <div className="invoice-detail__title">
                            Сумма на балансе
                        </div>
                        <div className="invoice-detail__subtitle invoice-detail__subtitle--blue">
                            1 923.05 Р
                        </div>
                    </div>

                    <div className="invoice-detail__item">
                        <div className="invoice-detail__title">
                            Комиссия
                        </div>
                        <div className="invoice-detail__subtitle invoice-detail__subtitle--grey">
                            51.95 Р
                        </div>
                    </div>
                </div>

                <div className="invoice-detail__item">
                    <button className="invoice-detail__btn btn--blue">Приостановлен</button>
                </div>
            </InvoiceDetailBlock>

            <InvoiceDetailGroup>
                <InvoiceDetailBlock >
                    <div className="invoice-detail__item">
                        <div className="invoice-detail__title">Проект</div>
                        <div className="invoice-detail__subtitle">Гринлайт Ecom</div>
                    </div>
                    <div className="invoice-detail__item">
                        <div className="invoice-detail__title invoice-detail__title--underline">Дата оплаты</div>
                        <div className="invoice-detail__subtitle">19/11/2020 00:54</div>
                    </div>
                    <div className="invoice-detail__item">
                        <div className="invoice-detail__title">Почта покупателя</div>
                        <div className="invoice-detail__subtitle">batin-maks@mail.ru</div>
                    </div>
                    <div className="invoice-detail__item">
                        <div className="invoice-detail__title">Номер заказа</div>
                        <div className="invoice-detail__subtitle">1239911</div>
                    </div>
                    <div className="invoice-detail__item">
                        <div className="invoice-detail__title">Дата создания</div>
                        <div className="invoice-detail__subtitle">19/11/2020 00:54</div>
                    </div>
                    <div className="invoice-detail__item">
                        <div className="invoice-detail__title">Клиент</div>
                        <div className="invoice-detail__subtitle">Батин Максим Владимирович</div>
                    </div>
                    <div className="invoice-detail__item">
                        <div className="invoice-detail__title">Тип транзакции</div>
                        <div className="invoice-detail__subtitle">Онлайн эквайринг</div>
                    </div>
                    <div className="invoice-detail__item">
                        <div className="invoice-detail__title">Дата обновления</div>
                        <div className="invoice-detail__subtitle">19/11/2020 00:54</div>
                    </div>
                    <div className="invoice-detail__item">
                        <div className="invoice-detail__title">Телефон покупателя</div>
                        <div className="invoice-detail__subtitle">+79121283122</div>
                    </div>
                </InvoiceDetailBlock>

                <InvoiceDetailBlock>
                    <div className="invoice-detail__item">
                        <div className="invoice-detail__title">Ссылка на транзакцию</div>
                        <div className="invoice-detail__subtitle">https://xforta.com/pay/387845</div>
                    </div>

                    <div className="invoice-detail__item">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/240px-QR_code_for_mobile_English_Wikipedia.svg.png"
                            alt="штрих код"
                        />
                    </div>
                </InvoiceDetailBlock>
            </InvoiceDetailGroup>

            <InvoiceDetailBlock operation={true} column={true}>
                <h3 className="invoice-detail__heading">Связная операция №1</h3>

                <div className="invoice-detail__group">
                    <div className="invoice-detail__item">
                        <div className="invoice-detail__title">Тип операции</div>
                        <div className="invoice-detail__subtitle">Оплаты</div>
                    </div>

                    <div className="invoice-detail__item">
                        <div className="invoice-detail__title">Сумма</div>
                        <div className="invoice-detail__subtitle">1039.05 Р</div>
                    </div>

                    <div className="invoice-detail__item">
                        <div className="invoice-detail__title">Дата операции</div>
                        <div className="invoice-detail__subtitle">19/11/2020 00:54</div>
                    </div>

                    <div className="invoice-detail__item">
                        <div className="invoice-detail__title">На балансе</div>
                        <div className="invoice-detail__subtitle">987.1 Р</div>
                    </div>

                    <div className="invoice-detail__item">
                        <button className="invoice-detail__btn">Создан</button>
                    </div>
                </div>

                <div className="invoice-detail__group">
                    <h3 className="invoice-detail__heading">Детальная карты</h3>

                    <div className="divider" />
                </div>

                <div className="invoice-detail__group">
                    <div className="invoice-detail__item">
                        <div className="invoice-detail__title">Данные карты (BIN)</div>
                        <div className="invoice-detail__subtitle">546950</div>
                    </div>

                    <div className="invoice-detail__item">
                        <div className="invoice-detail__title">MPS</div>
                        <div className="invoice-detail__subtitle">Mastercard</div>
                    </div>

                    <div className="invoice-detail__item">
                        <div className="invoice-detail__title">Банк</div>
                        <div className="invoice-detail__subtitle">Sberbank of Russia</div>
                    </div>

                    <div className="invoice-detail__item">
                        <div className="invoice-detail__title">Тип карты</div>
                        <div className="invoice-detail__subtitle">Debit</div>
                    </div>

                    <div className="invoice-detail__item">
                        <div className="invoice-detail__title">3DS</div>
                        <div className="invoice-detail__subtitle">Да</div>
                    </div>
                </div>
            </InvoiceDetailBlock>

            <InvoiceDetailBlock operation={true} column={true}>
                <h3 className="invoice-detail__heading">Связная операция №2</h3>

                <div className="invoice-detail__group">
                    <div className="invoice-detail__item">
                        <div className="invoice-detail__title">Тип операции</div>
                        <div className="invoice-detail__subtitle">Оплаты</div>
                    </div>

                    <div className="invoice-detail__item">
                        <div className="invoice-detail__title">Сумма</div>
                        <div className="invoice-detail__subtitle">1039.05 Р</div>
                    </div>

                    <div className="invoice-detail__item">
                        <div className="invoice-detail__title">Дата операции</div>
                        <div className="invoice-detail__subtitle">19/11/2020 00:54</div>
                    </div>

                    <div className="invoice-detail__item">
                        <div className="invoice-detail__title">На балансе</div>
                        <div className="invoice-detail__subtitle">987.1 Р</div>
                    </div>

                    <div className="invoice-detail__item">
                        <button className="invoice-detail__btn btn--green">Оплачен</button>
                    </div>
                </div>

                <div className="invoice-detail__group">
                    <h3 className="invoice-detail__heading">Детальная карты</h3>

                    <div className="divider" />
                </div>

                <div className="invoice-detail__group">
                    <div className="invoice-detail__item">
                        <div className="invoice-detail__title">Данные карты (BIN)</div>
                        <div className="invoice-detail__subtitle">546950</div>
                    </div>

                    <div className="invoice-detail__item">
                        <div className="invoice-detail__title">MPS</div>
                        <div className="invoice-detail__subtitle">Mastercard</div>
                    </div>

                    <div className="invoice-detail__item">
                        <div className="invoice-detail__title">Банк</div>
                        <div className="invoice-detail__subtitle">Sberbank of Russia</div>
                    </div>

                    <div className="invoice-detail__item">
                        <div className="invoice-detail__title">Тип карты</div>
                        <div className="invoice-detail__subtitle">Debit</div>
                    </div>

                    <div className="invoice-detail__item">
                        <div className="invoice-detail__title">3DS</div>
                        <div className="invoice-detail__subtitle">Да</div>
                    </div>
                </div>
            </InvoiceDetailBlock>
        </InvoiceDetail>
    );
};

export default InvoiceDetailContainer;
