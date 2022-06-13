import React from 'react';
import {Container, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const ShippingPaymant = observer(() => {
    return (
        <Container
            style={{height: window.innerHeight - 296}}
        >
            <Row className="d-flex justify-content-center align-items-center mb-2">
                <h1>Доставка та оплата</h1>
            </Row>
            <Row>
                <h2>Доступні способи оплати</h2>
            </Row>
            <Row>
                <h6>Безготівковий розрахунок (для фізичних та юридичних осіб).<br/>
                    Банківський переказ через відділення банку.<br/>
                    Оплата на картку ПриватБанку через Приват24.<br/><br/>
                    Передплата.<br/>
                    Ми приступаємо до виконання замовлення лише після 100% передоплати його вартості.<br/>
                    <br/>
                </h6>
            </Row>
            <Row>
                <h2>Доставка</h2>
            </Row>
            <Row>
                <h6>
                    Термін доставки замовлення – залежить від перевізника.<br/>
                    Доставка готового замовлення по Києву: кур'єрські служби, Нова пошта. Також ви можете самостійно забрати товар з нашого офісу або надіслати за ним кур'єра.<br/>
                    Вартість доставки по Сумам – 50 грн.<br/>
                    Доставка замовлення по Україні: Нова пошта.<br/>
                    Вартість доставки в Україні визначається тарифами перевізника.<br/>
                </h6>
            </Row>
        </Container>
    );
});

export default ShippingPaymant;
