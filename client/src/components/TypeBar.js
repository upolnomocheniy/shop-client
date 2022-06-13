import './Dropdown.css'
import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Dropdown, ListGroup} from "react-bootstrap";
import {LinearProgress, MenuList} from "@material-ui/core";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";

const TypeBar = observer(() => {
    const {product} = useContext(Context);

    const getAllProducts = () => {
        product.setSelectedType("all");
        product.setSelectedBrand("all");
    }

    return (
        <div>
            <div>
                <h4>Категорії</h4>

                <Dropdown>
                    <DropdownToggle>
                        Категорії
                    </DropdownToggle>

                    <DropdownMenu variant="success" id="dropdown-basic">
                        <DropdownItem
                            style={{cursor: "pointer"}}
                            active={"all" === product.selectedType}
                            onClick={getAllProducts}
                        >
                            Всі категорії
                        </DropdownItem>
                        {product.types.map(type =>
                            <DropdownItem
                                style={{cursor: "pointer"}}
                                active={type.id === product.selectedType.id}
                                key={type.id}
                                onClick={() => product.setSelectedType(type)}
                            >
                                {type.name}
                            </DropdownItem>
                        )}
                    </DropdownMenu>
                </Dropdown>
            </div>

            <div style={{marginTop: "5%"}}>
                <h4>Бренди</h4>
                <Dropdown>
                    <DropdownToggle>
                        Бренди
                    </DropdownToggle>
                    <DropdownMenu variant='success' id="dropdown-basic">
                        {product.brands.map(brand =>
                            <DropdownItem
                                style={{cursor: "pointer"}}
                                // border={brand.id === product.selectedBrand.id ? "danger" : "light"}
                                active={brand.id === product.selectedBrand.id}
                                key={brand.id}
                                onClick={() => product.setSelectedBrand(brand)}
                            >
                                {brand.name}
                            </DropdownItem>
                        )}
                    </DropdownMenu>
                </Dropdown>

            </div>

            {/*<ListGroup>*/}

            {/*    <ListGroup.Item*/}
            {/*        style={{cursor: "pointer"}}*/}
            {/*        active={"all" === product.selectedType}*/}
            {/*        onClick={getAllProducts}*/}
            {/*    >*/}
            {/*        Всі категорії*/}
            {/*    </ListGroup.Item>*/}
            {/*    {product.types.map(type =>*/}
            {/*        <ListGroup.Item*/}
            {/*            style={{cursor: "pointer"}}*/}
            {/*            active={type.id === product.selectedType.id}*/}
            {/*            key={type.id}*/}
            {/*            onClick={() => product.setSelectedType(type)}*/}
            {/*        >*/}
            {/*            {type.name}*/}
            {/*        </ListGroup.Item>*/}
            {/*    )}*/}
            {/*</ListGroup>*/}


            {/*test*/}
            {/*<div style={{marginTop: "5%"}}>*/}
            {/*    <h4>Бренди</h4>*/}
            {/*    <ListGroup>*/}

            {/*        {product.brands.map(brand =>*/}
            {/*            <ListGroup.Item*/}
            {/*                style={{cursor: "pointer"}}*/}
            {/*                // border={brand.id === product.selectedBrand.id ? "danger" : "light"}*/}
            {/*                active={brand.id === product.selectedBrand.id}*/}
            {/*                key={brand.id}*/}
            {/*                onClick={() => product.setSelectedBrand(brand)}*/}
            {/*            >*/}
            {/*                {brand.name}*/}
            {/*            </ListGroup.Item>*/}
            {/*        )}*/}

            {/*    </ListGroup>*/}
            {/*</div>*/}
            {/*    test*/}

        </div>

    );
});

export default TypeBar;
