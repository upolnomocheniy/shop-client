import React from 'react';
import {Card, Col, Image} from "react-bootstrap";

import star from './../assets/star.png';
import {useHistory} from 'react-router-dom';
import {PRODUCT_ROUTE} from "../utils/consts";

const ProductItem = ({product}) => {
    const history = useHistory();

    return (
        <Col md={3} className="mt-3" onClick={() => history.push(PRODUCT_ROUTE + '/' + product.id)}>
            <Card
                className="p-2"
                style={{width: 200, cursor: "pointer"}}
                border={"Light"}
            >
                <Image style={{width: "100%"}} src={process.env.REACT_APP_API_URL + product.img}/>
                <div className="d-flex justify-content-between align-items-center mt-4">
                    <div className="text-black-50">{product && product.brand.name}</div>
                    <div className="d-flex align-items-center">
                        <div>{product.rating}</div>
                        <Image className="ml-1" src={star} style={{width: "20px", height: "20px"}}/>
                    </div>
                </div>
                <div>{product.name}</div>
                <div><b>{product.price} грн</b></div>
            </Card>
        </Col>
    );
};

export default ProductItem;
