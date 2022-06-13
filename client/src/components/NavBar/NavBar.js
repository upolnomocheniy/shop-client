import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {NavLink} from "react-router-dom";

import {Context} from "../../index";
import {Navbar} from "react-bootstrap";
import {SHOP_ROUTE} from "../../utils/consts";
import {MAIN_PAGE} from "../../utils/consts";
import TrueAuth from "./preesent-components/trueAuth";
import FalseAuth from "./preesent-components/falseAuth";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import Nav from "react-bootstrap/Nav";

const NavBar = observer(() => {
    const {user} = useContext(Context);

    return (
        <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>

            <NavbarToggle/>
            <NavbarCollapse>
                <Nav >
                    <NavLink className={"mainpg"} style={{color: "white"}}
                             to={MAIN_PAGE}>Kvitka Sport Shop</NavLink>
                    <NavLink className={"catalog"} style={{color: "white", marginLeft: 25}}
                             to={SHOP_ROUTE}>Каталог</NavLink>
                </Nav>
                {user.isAuth ? <TrueAuth/> : <FalseAuth/>}
            </NavbarCollapse>

        </Navbar>
    );
});

export default NavBar;
