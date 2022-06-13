import React from "react";

import {Button, Nav} from "react-bootstrap";
import {LOGIN_ROUTE} from "../../../utils/consts";
import {NavLink} from "react-router-dom";
import BasketNavBar from "../BasketNavBar";

const FalseAuth = () => {
    return (
        <Nav className="ml-auto" style={{color: "white"}}>
            <BasketNavBar/>
            <NavLink to={LOGIN_ROUTE}>
                <Button
                    style={{margin:"11px"}}
                    variant={"outline-light"}
                >
                    Авторизація
                </Button>
            </NavLink>
        </Nav>

    );
};

export default FalseAuth;
