import React, {useState} from 'react';
import {Button, Col, ListGroup, Modal, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {fetchChangeStatusOrder, fetchDeleteOrder} from "../http/ordersAPI";
import {ORDERS_ROUTE} from "../utils/consts";

const ItemOneOrderInAdmin = ({id, complete, mobile, createdAt, updatedAt, userId, reRender}) => {
    const [modalDelete, setShowDelete] = useState(false);
    const [modalStatus, setShowStatus] = useState(false);

    //modal delete
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);
    const deleteOrder = () => {
        fetchDeleteOrder({id}).then(() => {
            setShowStatus(false);
            setTimeout(() => reRender(), 250);
        })
    }

    //modal status
    const handleCloseStatus = () => setShowStatus(false);
    const handleShowStatus = () => setShowStatus(true);
    const changeStatusOrder = () => {
        fetchChangeStatusOrder({complete: !complete, id}).then(() => {
            setShowStatus(false);
            setTimeout(() => reRender(), 250);
        })
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
        return date.toLocaleString("en-US", options);
    }

    return (
        <>
            <ListGroup.Item className="mt-3" key={id}>
                <Row>
                    <Col md={8}>
                        <Row>
                            <Col xs={12}>
                                <NavLink to={ORDERS_ROUTE + `/${id}`}>ID: {id}</NavLink>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                Телефон: <a href={`tel:${mobile}`}>{mobile}</a>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                Дата замовлення: {formatDate(createdAt)}
                            </Col>
                        </Row>
                        {complete ? <Row>
                            <Col xs={12}>
                                Дата виконання: {formatDate(updatedAt)}
                            </Col>
                        </Row> : false}
                        <Row>
                            <Col xs={12}>
                                {userId ? "Клієнт: Зареєстрований" : "Клієнт: Не зареєстрований"}
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                Статус замовлення: {complete ? "Завершено" : "В процесі"}
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <Row style={{height: "100%"}} className="d-flex align-items-center">
                            <Col xs={6} className="d-flex justify-content-center">
                                {complete ?
                                    <Button variant="success" onClick={handleShowStatus}>Відминити</Button>
                                    :
                                    <Button variant="warning" onClick={handleShowStatus}>Завершити</Button>}
                            </Col>
                            <Col xs={6} className="d-flex justify-content-center">
                                <Button variant="danger" onClick={handleShowDelete}>Видалити</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </ListGroup.Item>

            {/*modal confirm change status*/}
            <Modal show={modalStatus} onHide={handleCloseStatus}>
                <Modal.Header closeButton>
                    <Modal.Title>Будь-ласка підтвердіть</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Ви хочете змінити статус цього замовлення (ID: {id}), з {complete ? '\'Завершено\'' : '\'В процесі\''} на {complete ? '\'В процесі\'' : '\'Завершено\''}?
                    <br/><br/>
                    Інформація:
                    <ul>
                        <li>Номер телефону: {mobile}</li>
                        <li>Дата створення замовлення: {formatDate(createdAt)}</li>
                        {complete ? `Дата виконання: ${formatDate(updatedAt)}` : false}
                        <li>Статус: {complete ? 'Завершено' : `В процесі`}</li>
                        <li>{userId ? 'Клієнт: Зареєстрований' : `Клієнт: Не зареєстрований`}</li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseStatus}>
                        Відмінити
                    </Button>
                    <Button variant="primary" onClick={changeStatusOrder}>
                        Підтвердити
                    </Button>
                </Modal.Footer>
            </Modal>

            {/*modal confirm delete order*/}
            <Modal show={modalDelete} onHide={handleCloseDelete}>
                <Modal.Header closeButton>
                    <Modal.Title>Будь-ласка підтвердіть</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Ви хочете видалити це замовлення (ID: {id})?
                    <br/><br/>
                    Інформація:
                    <ul>
                        <li>Номер телефону: {mobile}</li>
                        <li>Дата створення замовлення: {formatDate(createdAt)}</li>
                        {complete ? `Дата виконання: ${formatDate(updatedAt)}` : false}
                        <li>Статус: {complete ? 'Завершено' : `В процесі`}</li>
                        <li>{userId ? 'Клієнт: Зареєстрований' : `Клієнт: Не зареєстрований`}</li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDelete}>
                        Відмінити
                    </Button>
                    <Button variant="primary" onClick={deleteOrder}>
                        Підтвердити
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
};

export default ItemOneOrderInAdmin;
