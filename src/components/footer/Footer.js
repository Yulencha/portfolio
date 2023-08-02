import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import telegram from "./../../img/icons/telegram.svg";
import instagram from "./../../img/icons/instagram.svg";
import twitter from "./../../img/icons/twitter.svg";
import gitHub from "./../../img/icons/gitHub.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";

const Footer = () => {
  const activeLink = "footer__link footer__link--active";
  const normalLink = "footer__link";
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="footer__nav footer__col">
            <li className="footer__title">Навигация</li>
            <li className="footer__nav-item">
              <NavLink
                to="./portfolio"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Главная
              </NavLink>
            </li>
            <li className="footer__nav-item">
              <NavLink
                to="./projects"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Проекты
              </NavLink>
            </li>
            <li className="footer__nav-item">
              <NavLink
                to="./contacts"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
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
