import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";

import {Context} from "../index";
import {Button, Col, Image, Row} from "react-bootstrap";
import OneItemInBasket from "../components/oneItemInBasket";

import emptyBasket from "./../assets/emptyBasket.png";
import {ORDERING_ROUTE} from "../utils/consts";
import {NavLink} from "react-router-dom";

const BasketCard = observer(() => {
    const {basket} = useContext(Context);

    if (basket.Basket.length === 0) {
        return (
            <div className="d-flex flex-column align-items-center mt-5">
                <div className="text-center" style={{fontSize: 28}}><b>Кошик зараз пустий :(</b></div>
                <Image src={emptyBasket}/>
            </div>
        )
    }

    return (
        <>
            <br/>
            <NavLink to={ORDERING_ROUTE}>
                <Button>Підтвердити замовлення</Button>
            </NavLink>
            <Row className="mt-3">
                <Col xs={12}>
                    {basket.Basket.map(product => <OneItemInBasket key={product.id} product={product}/>)}
                </Col>
            </Row>
        </>
    );
});

export default BasketCard;
