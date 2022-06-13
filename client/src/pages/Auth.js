import React, {useContext, useEffect, useState} from 'react';
import {NavLink, useLocation, useHistory} from "react-router-dom";

import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context);
    const history = useHistory();
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('Емейл не може бути пустим');
    const [passwordError, setPasswordError] = useState('Пароль не може бути пустим');
    const [formValid, setFormValid] = useState(false)

    const blurHandler = (e) => {
        switch (e.target.className) {
            case 'email my-4 form-control' :
                setEmailDirty(true)
                break
            case 'password form-control' :
                setPasswordDirty(true)
                break
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!regexp.test(String(e.target.value).toLowerCase())) {
            setEmailError('Не корректиний емейл')
        } else {
            setEmailError("")
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 10) {
            setPasswordError('Пароль має бути більше ніж 3 та менше ніж 10 символів')
            if (!e.target.value) {
                setPasswordError('Пароль не може бути пустим')
            }
        } else {
            setPasswordError("")
        }
    }

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(data);
            user.setIsAuth(true);
            history.push(SHOP_ROUTE);
        } catch (e) {
            alert(e.response.data.message);
        }
    };

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? "Авторизація" : "Реєстрація"}</h2>

                <Form className="d-flex flex-column">

                    {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}

                    <Form.Control
                        className="email my-4"
                        placeholder="Введіть свою Email..."
                        value={email}
                        onChange={e => emailHandler(e)}
                        onBlur={e => blurHandler(e)}
                    />

                    {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}

                    <Form.Control
                        className="password"
                        placeholder="Введіть пароль..."
                        value={password}
                        onChange={e => passwordHandler(e)}
                        onBlur={e => blurHandler(e)}
                        type="password"
                    />

                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3 align-items-center">
                        {isLogin ?
                            <div>
                                Немає акаунту? <NavLink to={REGISTRATION_ROUTE}>Реєстрація</NavLink>
                            </div>
                            :
                            <div>
                                Маєш акаунт? <NavLink to={LOGIN_ROUTE}>Вхід</NavLink>
                            </div>
                        }

                        <Button
                            className="align-self-end"
                            variant="outline-success"
                            onClick={click}
                            disabled={!formValid}
                        >
                            {isLogin ? "Авторизація" : "Реєстрація"}
                        </Button>
                    </Row>
                </Form>
            </Card>

        </Container>
    );
});

export default Auth;
