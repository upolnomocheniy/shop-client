import React from "react";
import {Alert, Badge, Card, Carousel, Col, Container, Image, Row, Tab} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from "react-bootstrap/Nav";

const MainPage = () => {
    return (
        <Container>
            <div className='my-3'>
                <Alert variant={"info"}>
                    <h5><Badge bg="warning">New</Badge>Тільки сьогодні! Безкоштовна доставка!</h5>
                </Alert>
            </div>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/slider/Shoes.webp"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3><img style={{height:"15%", width:"15%", marginRight:"90%"}} src="/logo.png"/></h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/slider/realMadrid.webp"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3><img style={{height:"15%", width:"15%", marginRight:"90%"}} src="/logo.png"/></h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/slider/Man.webp"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3><img style={{height:"15%", width:"15%", marginRight:"90%"}} src="/logo.png"/></h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/slider/reebok.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3><img style={{height:"15%", width:"15%", marginRight:"90%"}} src="/logo.png"/></h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/slider/Wooman.webp"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3><img style={{height:"15%", width:"15%", marginRight:"90%"}} src="/logo.png"/></h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className='blog my-5' style={{pointerEvents: "none"}}>
                <center><img
                    src="/specializationStore.png"
                    style={{
                        height:'100%',
                        width:'100%'
                    }}
                /></center>

                <Row className='mb-4'>
                    <Col md='3'>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="/modalBlock/basketball.webp"
                            />
                            <Card.Body>
                                <Card.Title>Баскетбол</Card.Title>
                                <Card.Text>
                                    Баскетбол - чудовий спосіб тренеруватись в команді з друзями.
                                    Великий асортимент товарів
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md='3'>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="/modalBlock/cycling.webp"
                            />
                            <Card.Body>
                                <Card.Title>Велоспорт</Card.Title>
                                <Card.Text>
                                    Велоспорт - чудовий вид спорту. Маємо в продажі велосипеди
                                    городського та горного типу та аксессуари.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col><Col md='3'>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="/modalBlock/tennis.webp"
                        />
                        <Card.Body>
                            <Card.Title>Теніс</Card.Title>
                            <Card.Text>
                                Маємо інвентарь для професійного тенісу, щоб
                                гра принесла задоволення та високі результати.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col><Col md='3'>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="/modalBlock/training.webp"
                        />
                        <Card.Body>
                            <Card.Title>Активний спорт</Card.Title>
                            <Card.Text>
                                Для людей, які мають активний спорт. Маємо товари для
                                комфортних тренувань та обладнання.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>

                </Row>
            </div>


            <div className='info'>

                <center><img
                    src="/ourMainAdv.png"
                    style={{
                        height:'100%',
                        width:'100%'
                    }}
                /></center>

                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Асортимент</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Доставка</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Вигода</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Аналітика</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Робота 24/7</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    В онлайн магазині Kvikta sport shop маємо великий асортимент товарів який постійно оновлюється.
                                    На кожен товар ми надаємо гарантію три місяці. Магазин Kvikta sport shop співпрацює з великою кількістю
                                    перевірених постачальників, та рекомендуємо покупати товари лише від перевірених компаній. Перед тим,
                                    як викласти в магазин товар, наша команда особиста перевіряє якість продукції.
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    Маємо великий вибір доставки. В основному Kvitka sport shop відправляє товари Новою поштою та Укрпоштою.
                                    Також маємо послуги кур'єра за додаткову плату або якщо сума чеку більше 15 тисяч гривень. Рекомендуємо
                                    перед оплатою товару на поштовому відділені спочатку перевірити товар.
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    Вигода купляти саме в нашому магазині полягає у тому, що ми надаємо клієнту великий
                                    асортимент товару та доставлямо за допомогою поштових служб в максимально короткі терміни.
                                    Для всіх товарів маємо велекий термін гарантії, та можливість заміни товару, якщо не підійшов розмір.
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    Аналітика грає одну з найголовніших ролей життєдіяльності нашого онлайн магазину.
                                    Наша команда активно проводить аналітику в залежонсті від попиту продукції. Ми стараємось,
                                    щоб клієнт був макимально задоволений від нашого сервісу.
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    Завдяки тому що це онлайн магазин. Ми можемо працювати 24/7. Обробка замовлень відбувається
                                    кожний день з 8 годин ранку до 22 вечора без перерв та вихідних.
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>

        </Container>


    );
};

export default MainPage;