import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {createProduct, fetchBrands, fetchTypes} from "../../http/productAPI";
import {observer} from "mobx-react-lite";

const CreateProduct = observer(({show, onHide}) => {
    const {product: product} = useContext(Context);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data));
        fetchBrands().then(data => product.setBrands(data));
    }, []);

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}]);
    };

    const deleteInfo = (number) => {
        setInfo(info.filter(item => item.number !== number));
    };

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i));
    };

    const selectFile = e => {
        setFile(e.target.files[0]);
    };

    const addProduct = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', `${price}`);
        formData.append('img', file);
        formData.append('brandId', product.selectedBrand.id);
        formData.append('typeId', product.selectedType.id);
        formData.append('info', JSON.stringify(info));
        createProduct(formData).then(() => onHide());
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Додати новий товар
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{product.selectedType.name || "Вибери Категорію"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {product.types.map(type =>
                                <Dropdown.Item
                                    key={type.id}
                                    onClick={() => product.setSelectedType(type)}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{product.selectedBrand.name || "Вибери Бренд"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {product.brands.map(brand =>
                                <Dropdown.Item
                                    key={brand.id}
                                    onClick={() => product.setSelectedBrand(brand)}
                                >
                                    {brand.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введіть назву вашого товару..."
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введіть назву ціни для товару..."
                        type="number"
                        min="0"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr/>
                    <Button
                        variant="outline-dark"
                        onClick={() => addInfo()}
                    >
                        Додати нову характеристику
                    </Button>
                    {info.map(item =>
                        <Row key={item.number} className="mt-3">
                            <Col md={4}>
                                <Form.Control
                                    placeholder="Введіть назву характеристику товару..."
                                    value={item.title}
                                    onChange={e => changeInfo('title', e.target.value, item.number)}
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    placeholder="Введіть значення характеристики..."
                                    value={item.description}
                                    onChange={e => changeInfo('description', e.target.value, item.number)}
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    variant="outline-danger"
                                    onClick={() => deleteInfo(item.number)}
                                >
                                    Видалити характеристику
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрити</Button>
                <Button variant="outline-success" onClick={addProduct}>Додати</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateProduct;
