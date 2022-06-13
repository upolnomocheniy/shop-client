import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {Context} from "../index";
import {sendOrder} from "../http/ordersAPI";
import {useHistory} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";

const Ordering = () => {
    const {basket, user} = useContext(Context);
    const [phone, setPhone] = useState(null);
    const history = useHistory();

    const [numberDirty, setNumberDitry] = useState(false)
    const [numberError, setNumberError] = useState("Некоректний номер телефону")
    const [formValid, setFormValid] = useState(false)

    const numberHandler = (e) => {
        setPhone(e.target.value)
        const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
        if (!regex.test(String(e.target.value).toLowerCase())) {
            setNumberError('Не корректний номер телефону')
        } else {
            setNumberError("")
        }
    }

    useEffect(() => {
        if(numberError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [numberError])

    const blurHandler = (e) => {
        switch (e.target.className) {
            case 'phone form-control' :
                setNumberDitry(true)
        }
    }

    const buy = () => {
        let order = {
            mobile: phone,
            basket: basket.Basket
        }

        if(user.isAuth) {
            order.auth = true;
        }

        sendOrder(order).then(data => {
            console.log(data);
            basket.setDeleteAllProductFromBasket();
            history.push(SHOP_ROUTE);
        });
    }
    return (
        <>
            <Form style={{marginTop: 100}}>

                {(numberDirty && numberError) && <div style={{color: 'red'}}>{numberError}</div>}

                <Form.Control
                    className="phone"
                    placeholder="Введіть номер телефону..."
                    value={phone}
                    onChange={e => numberHandler(e)}
                    onBlur={e => blurHandler(e)}
                    maxlength={13}
                />
            </Form>
            <Row className="mt-3">
                <Col xs={12}>
                    <Button variant="secondary" onClick={buy} disabled={!formValid}>Замовити</Button>
                </Col>
            </Row>
        </>
    );
};

export default Ordering;
