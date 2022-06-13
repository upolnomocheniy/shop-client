import React, {useEffect, useState} from 'react';
import {Col, Container, Image, Row, Spinner} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {getOneOrderProducts} from "../http/ordersAPI";

const OneOrder = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);

    let sumPrice = Number(0);

    useEffect(() => {
        getOneOrderProducts(id).then(data => {
            setOrder(data);
            setLoading(false);
            console.log(order);
        })
    }, []);

    if (loading) {
        return <Spinner animation="grow"/>
    }

    //Format date (createdAt)
    const formatDate = (propsDate) => {
        const date = new Date(Date.parse(propsDate));
        const options = {
            weekday: "short",
            hour: 'numeric',
            minute: 'numeric',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            timezone: 'UTC'
        };
        return date.toLocaleString("UA", options);
    }

    return (
        <div>
            <Container className="">
                ID замовлення: {id} <br/>
                Статус: {order?.descr.complete ? "Завершено" : "В процесі"} <br/>
                Клієнт: {order?.descr.userId ? order.descr.userId : "Клієнт не зареєстрований"} <br/>
                Дата створення: {formatDate(order?.descr.createdAt)} <br/>
                {order?.descr.complete ? formatDate(order.descr.complete.updatedAt) : false}
                <a href={`tel:${order?.descr.mobile}`}>Телефон: {order?.descr.mobile}</a>
                <br/>

                {order?.products.map(({count, descr}, i) => {
                    sumPrice += descr.price;
                })}

                {order?.products.map(({count, descr}, i) => {
                    return (
                        <Row key={i} className="p-3">
                            <Col xs={2}>
                                <Image width={150} src={process.env.REACT_APP_API_URL + descr.img}/>
                            </Col>
                            <Col xs={10}>
                                <div style={{marginLeft:"100px"} }>
                                    Бренд: {descr.brand.name}<br/>
                                    Категорія: {descr.type.name}<br/>
                                    Назва: {descr.name}<br/>
                                    Ціна: {descr.price} грн<br/>
                                    Кількість: {count}<br/>
                                    Ціна: {count * descr.price} грн
                                </div>
                            </Col>
                        </Row>
                    )
                })}
                <h5><b>Загальна ціна замовлення: {sumPrice} грн</b></h5>
            </Container>
        </div>
    );
};

export default OneOrder;
