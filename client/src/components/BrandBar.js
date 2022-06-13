import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Button, Card, Col, Dropdown, Form, Image, InputGroup, Row} from "react-bootstrap";
import {getAllProductsInAdminPage} from "../http/productAPI";
import {PRODUCT_ROUTE} from "../utils/consts";
import star from "../assets/star.png";
import {useHistory} from "react-router-dom";
import ProductItem from "./ProductItem";
import * as PropTypes from "prop-types";
import ProductList from "./ProductList";


function Raw(props) {
    return null;
}

Raw.propTypes = {
    onClick: PropTypes.func,
    md: PropTypes.number,
    className: PropTypes.string,
    children: PropTypes.node
};
const BrandBar = observer(() => {
    const {product} = useContext(Context);
    const [filter, setFilter] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const [searchProduct, setSearchProduct] = useState('');
    const [searchedProduct, setSearchedProduct] = useState([]);
    const [count, setCount] = useState(1);
    const [successMsg, setSuccessMsg] = useState('');
    const history = useHistory();

    const getAllProducts = () => {
        product.setSelectedType("all");
        product.setSelectedBrand("all");
    }

    return (

        // <InputGroup className="mb-3">
        //
        //
        //
        //     {/*<Form.Control*/}
        //     {/*    aria-label="Default"*/}
        //     {/*    aria-describedby="inputGroup-sizing-default"*/}
        //     {/*    value={searchProduct}*/}
        //     {/*    onChange={e => setSearchProduct(e.target.value)}*/}
        //     {/*    placeholder="Введіть назву товару..."*/}
        //     {/*/>*/}
        //     {/*<Button*/}
        //     {/*    onClick={fetchProduct}*/}
        //     {/*    variant="outline-dark"*/}
        //     {/*    className="ml-2"*/}
        //     {/*>*/}
        //     {/*    Шукати*/}
        //     {/*</Button>*/}
        //
        //     {/*{searchedProduct && searchedProduct.map((product) => {*/}
        //     {/*    return (*/}
        //     {/*         <ProductItem product={product}/>*/}
        //     {/*    )*/}
        //     {/*})}*/}
        //
        // </InputGroup>

        <Row className="d-flex">

            {product.types.map(type =>
                <h2>{type.id === product.selectedType.id ? type.name + '\xa0' : ""}</h2>
            )}

            {product.brands.map(brand =>

                <h2>{brand.id === product.selectedBrand.id ? " " + brand.name : ""}</h2>

                // <Card
                //     style={{cursor: "pointer"}}
                //     border={brand.id === product.selectedBrand.id ? "danger" : "light"}
                //     key={brand.id}
                //     className="p-3"
                //     onClick={() => product.setSelectedBrand(brand)}
                // >
                //     {brand.name}
                // </Card>
            )}
        </Row>
    );
});

export default BrandBar;
