import {Button, Nav, NavLink} from "react-bootstrap";
import React, {useContext} from "react";
import {Context} from "../../../index";
import {useHistory} from "react-router-dom";
import {ADMIN_ROUTE, ORDERS_ROUTE} from "../../../utils/consts";
import BasketNavBar from "../BasketNavBar";
import AdminPanel from "../AdminPanel";

const TrueAuth = () => {
    const {user, basket} = useContext(Context);
    const history = useHistory();

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        localStorage.removeItem('token');
        basket.resetBasket();
    }

    return (
        <Nav className="ml-auto" style={{color: "white"}}>
            <AdminPanel/>
            <BasketNavBar/>
            {user.isAuth && user.User.role === "ADMIN" &&
                <Button
                    variant={"outline-light"}
                    onClick={() => {
                        history.push(ORDERS_ROUTE)
                    }}
                >
                    Замовлення
                </Button>}

            <div style={{margin: "5px"}}></div>
            <Button
                variant={"outline-light"}
                onClick={() => logOut()}
            >
                Вихід
            </Button>
        </Nav>
    );
};

export default TrueAuth;
