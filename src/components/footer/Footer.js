import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="footer__nav footer__col">
            <li className="footer__title">Навигация</li>
            <li className="footer__nav-item">
              <NavLink to="./" className="footer__link">
                Главная
              </NavLink>
            </li>
            <li className="footer__nav-item">
              <NavLink to="./projects" className="footer__link">
                Проекты
              </NavLink>
            </li>
            <li className="footer__nav-item">
              <NavLink to="./contacts" className="footer__link">
                Контакты
              </NavLink>
            </li>
          </ul>
          <ul className="footer__social footer__col">
            <li className="footer__title">Ссылки</li>
            <li className="footer__social-item">
              <a
                href="https://github.com/Yulencha"
                className="footer__link"
                target="_blank"
              >
                GitHub
              </a>
            </li>
            <li className="footer__social-item">
              <a
                href="https://www.linkedin.com/in/yulencha/"
                className="footer__link"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li className="footer__social-item">
              <a
                href="tg://resolve?domain=ilina_iu"
                className="footer__link"
                target="_blank"
              >
                Telegram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
