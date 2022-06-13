import React, {useEffect, useState} from 'react';
import {
    Button,
    Col,
    Container,
    Dropdown,
    Form,
    Image,
    InputGroup,
    ListGroup,
    Pagination,
    Row
} from "react-bootstrap";

import CreateProduct from "../components/modals/CreateProduct";
import CreateBrand from "../components/modals/CreateBrand";
import CreateType from "../components/modals/CreateType";
import {getAllProductsInAdminPage} from "../http/productAPI";
import {NavLink} from "react-router-dom";
import {PRODUCT_EDIT_ROUTE} from "../utils/consts";
import DeleteBrandOrType from "../components/modals/DeleteBrandOrType";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);
    const [productVisible, setProductVisible] = useState(false);
    const [deleteBrandOrType, setDeleteBrandOrType] = useState(false);

    const [searchProduct, setSearchProduct] = useState('');
    const [searchedProduct, setSearchedProduct] = useState([]);
    const [filter, setFilter] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const [count, setCount] = useState(1);

    const [successMsg, setSuccessMsg] = useState('');
    const [showSuccessMsg, setShowSuccessMsg] = useState(false);

    //pagination
    const limit = 5;
    const pageCount = Math.ceil(Number(count) / limit);
    const pages = [];
    for (let number = 1; number < pageCount + 1; number++) {
        pages.push(
            <Pagination.Item key={number} active={number === currentPage} onClick={() => setCurrentPage(number)}>
                {number}
            </Pagination.Item>
        );
    }


    useEffect(() => {
        getAllProductsInAdminPage(searchProduct, currentPage, filter).then(({count, rows}) => {
            setSearchedProduct(rows);
            setCount(count)
        })
    }, [currentPage])

    useEffect(() => {
        getAllProductsInAdminPage(searchProduct, 1, filter).then(({count, rows}) => {
            setSearchedProduct(rows);
            setCount(count);
            setCurrentPage(1);
        })
    }, [filter, successMsg])

    const fetchProduct = () => {
        getAllProductsInAdminPage(searchProduct, currentPage, filter).then(({count, rows}) => {
            setSearchedProduct(rows);
            setCount(count)
        })
    };

    const showSuccessMsgFunc = (msg) => {
        setSuccessMsg(msg);
        setShowSuccessMsg(true);
        setTimeout(() => setShowSuccessMsg(false), 5000);
    }

    return (
        <Container className="d-flex flex-column">
            {showSuccessMsg && <p>{successMsg}</p>}
            <Button
                onClick={() => setTypeVisible(true)}
                variant="outline-dark"
                className="mt-4 p-2"
            >
                Додати категорію
            </Button>
            <Button
                onClick={() => setBrandVisible(true)}
                variant="outline-dark"
                className="mt-4 p-2"
            >
                Додати бренд
            </Button>
            <Button
                onClick={() => setProductVisible(true)}
                variant="outline-dark"
                className="mt-4 p-2"
            >
                Додати товар
            </Button>
            <Button
                onClick={() => setDeleteBrandOrType(true)}
                variant="outline-dark"
                className="mt-4 p-2"
            >
                Видалити категорію або товар
            </Button>
            <CreateProduct show={productVisible} onHide={() => setProductVisible(false)}/>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <DeleteBrandOrType show={deleteBrandOrType} onHide={() => setDeleteBrandOrType(false)}
                               showSuccessMsgFunc={showSuccessMsgFunc}/>

            <Dropdown className="mt-5 mb-3" style={{margin: "0 auto"}}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {filter}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {filter === "Всі" ? <Dropdown.Item disabled>Всі</Dropdown.Item> :
                        <Dropdown.Item onClick={() => setFilter("All")}>Всі</Dropdown.Item>}
                    {filter === "Без бренду або категорії" ?
                        <Dropdown.Item disabled>Без бренду або категорії</Dropdown.Item> :
                        <Dropdown.Item onClick={() => setFilter("Без бренду або категорії")}>
                            Без бренду або категорії
                        </Dropdown.Item>}
                </Dropdown.Menu>
            </Dropdown>

            <InputGroup className="mb-3">
                <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    value={searchProduct}
                    onChange={e => setSearchProduct(e.target.value)}
                    placeholder="Введіть назву товару..."
                />
                <Button
                    onClick={fetchProduct}
                    variant="outline-dark"
                    className="ml-2"
                >
                    Шукати
                </Button>
            </InputGroup>

            <ListGroup>
                {searchedProduct && searchedProduct.map(({id, img, brand, type, price, name}) => {
                    return (
                        <ListGroup.Item className="mt-3" key={id}>
                            <Row>
                                <Col xs={4.5}>
                                    <Image width={150} src={process.env.REACT_APP_API_URL + img}/>
                                </Col>
                                <Col xs={8}>
                                    <Row>
                                        <Col xs={12}>
                                            <NavLink to={PRODUCT_EDIT_ROUTE + `/${id}`}>ID: {id}</NavLink>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12}>
                                            Назва: {name}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12}>
                                            Ціна: {price}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12}>
                                            Бренд: {brand.name}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12}>
                                            Тип: {type.name}
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={2}>
                                    <NavLink to={PRODUCT_EDIT_ROUTE + `/${id}`}>Змінити</NavLink>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    )
                })}
            </ListGroup>

            <Pagination size="sm" className="mt-4 mb-4" style={{margin: "0 auto"}}>
                {searchedProduct && searchedProduct.length > 0 ? pages : false}
            </Pagination>
        </Container>
    );
};

export default Admin;
