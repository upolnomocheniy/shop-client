import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from './../assets/star.png';
import {useParams} from 'react-router-dom';
import {addProductToBasket, addRating, checkRating, fetchOneProduct} from "../http/productAPI";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import RatingStars from "../components/ratingStars";
import ReactImageMagnify from 'react-image-magnify';

const ProductPage = observer(() => {
    const {user, basket} = useContext(Context);
    const [product, setProduct] = useState({info: []});
    const [resRate, setResRate] = useState("");
    const [isAccessRating, setSsAccessRating] = useState(false);
    const {id} = useParams();


    useEffect(() => {
        fetchOneProduct(id).then(data => setProduct(data));
        if (user.isAuth) {
            checkRating({productId: id}).then(res => setSsAccessRating(res.allow));
        }
    }, [id, resRate]);

    const isProductInBasket = () => {
        const findProduct = basket.Basket.findIndex(item => Number(item.id) === Number(product.id));
        return findProduct < 0;
    }

    const addProductInBasket = (product) => {
        if (user.isAuth) {
            addProductToBasket(product).then(() => basket.setBasket(product, true))
        } else {
            basket.setBasket(product);
        }
    }

    const ratingChanged = (rate) => {
        addRating({
            rate,
            productId: id
        }).then(res => {
            setResRate(res);
        });
    };

    return (
        <Container className="mt-3">
            <h1>{product.name}</h1>
            <Row>
                <Col md={4}>
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'kvit',
                            isFluidWidth: true,
                            src: process.env.REACT_APP_API_URL + product.img
                        },
                        largeImage: {
                            src: process.env.REACT_APP_API_URL + product.img,
                            width: 1200,
                            height: 1800
                        }
                    }} />
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">

                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{
                            marginLeft:60,
                            margin: 10,
                            width: 200,
                            height: 150,
                            fontSize: 32,
                            border: '5px solid lightgray'}}
                    >
                        <h3>{product?.price || 0} грн</h3>
                        {isProductInBasket() ?
                            <Button variant="outline-dark" onClick={() => addProductInBasket(product)}>Додати до кошика</Button>
                            :
                            <Button variant="outline-dark" disabled>Товар вже в кошику</Button>
                        }

                    </Card>
                </Col>
            </Row>
            <Row className="p-3">
                <h2>Рейтинг: </h2>
                <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                        background: `url(${bigStar}) no-repeat`,
                        backgroundSize: "cover",
                        width: 40,
                        height: 40,
                        fontSize: 18,
                        marginLeft:14,

                    }}
                >
                    {product?.rating || 0}
                </div>
                <RatingStars
                    ratingChanged={ratingChanged}
                    ratingVal={product?.rating || 0}
                    isAuth={user.isAuth}
                    isAccessRating={isAccessRating}
                />
                {resRate}
            </Row>
            <h2>Характеристики</h2>
            <Row className="d-flex flex-column m-3">

                {product.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? '#f2f3f4' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
});

export default ProductPage;



