import React, {useContext} from 'react';
import {Button, Nav} from "react-bootstrap";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {ADMIN_ROUTE} from "../../utils/consts";
import {useHistory} from "react-router-dom";

const AdminPanel = observer(() => {
    const {user} = useContext(Context);
    const history = useHistory();
    if (user.User.role === 'ADMIN') {
        return (
            <div className="d-flex align-items-center">
                <Nav className="m-1">
                    <Button
                        className={"mr-5"}
                        variant={"outline-light"}
                        onClick={() => {
                            history.push(ADMIN_ROUTE)
                        }}
                    >
                        Адмін панель
                    </Button>
                </Nav>
            </div>
        );
    } else return (
        <div className="d-flex align-items-center mr-3">
        </div>
    )

});
export default AdminPanel;


