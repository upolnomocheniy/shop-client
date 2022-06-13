import React from 'react';
import {Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const Contacts = observer(() => {
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 296}}
        >
            <ul className="footer-links">
                <li>LifeCell: <a href="/">+38(073)111-12-13</a></li>
                <li>Email: <a href="mailto:jenya.kwitka@gmail.com">jenya.kwitka@gmail.com</a></li>
                <li>Skype: <a href="skype:evgen3607?add">evgen3607</a></li>
                <li>Telegram: <a href="https://t.me/upolnomocheniy">@upolnomocheniy</a></li>
                <li>Viber: <a href="viber://chat?number=%2B380663727102">+38(073)111-12-13</a></li>
            </ul>
        </Container>
    );
});

export default Contacts;
