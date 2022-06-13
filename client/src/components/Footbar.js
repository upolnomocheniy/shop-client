import './Footbar.css';
import React from 'react';
import {observer} from "mobx-react-lite";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faYoutube, faTelegram, faViber} from "@fortawesome/free-brands-svg-icons";
import {CONTACTS, SHIPPINGPAYMANT, SHOP_ROUTE, SIZES, LOGIN_ROUTE} from "../utils/consts";
import {NavLink} from "react-router-dom";

const Footbar = observer(() => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6>Про інтернет-магазин</h6>
                        <p className="text-justify">
                            Придбання на замовлення.
                            Багато продукції.
                            Індивідуальний підхід.
                            Сучасний стиль.</p>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Контакти</h6>
                        <ul className="footer-links">
                            <li>LifeCell: <a href="/">+38(073)111-12-13</a></li>
                            <li>Email: <a href="mailto:jenya.kwitka@gmail.com">jenya.kwitka@gmail.com</a></li>
                            <li>Skype: <a href="skype:evgen3607?add">evgen3607</a></li>
                            <li>Telegram: <a href="https://t.me/upolnomocheniy">@upolnomocheniy</a></li>
                            <li>Viber: <a href="viber://chat?number=%2B3845435345">+38(073)111-12-13</a></li>
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Швидкі посилання</h6>
                        <ul className="footer-links">
                            <li><NavLink to={SHOP_ROUTE}>Головна</NavLink></li>
                            <li><NavLink to={SIZES}>Розмір одягу</NavLink></li>
                            <li><NavLink to={SHIPPINGPAYMANT}>Доставка і оплата</NavLink></li>
                            <li><NavLink to={CONTACTS}>Контакти</NavLink></li>
                            <li><NavLink to={LOGIN_ROUTE}>Авторизація</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by
                            <a href="jenya.kwitka@gmail.com"> jenya.kwitka@gmail.com</a>.
                        </p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li><a className="facebook" href="/"><FontAwesomeIcon icon={faViber}/></a></li>
                            <li><a className="twitter" href="/"><FontAwesomeIcon icon={faTelegram}/></a></li>
                            <li><a className="dribbble" href="/"><FontAwesomeIcon icon={faInstagram}/></a></li>
                            <li><a className="linkedin" href="/"><FontAwesomeIcon icon={faYoutube}/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
});
export default Footbar;


