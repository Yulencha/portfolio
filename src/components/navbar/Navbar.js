import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";

const Navbar = () => {
  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to="./" className="nav-list__link">
                Главная
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="./projects" className="nav-list__link">
                Проекты
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="./contacts" className="nav-list__link">
                Контакты
              </NavLink>
            </li>
          </ul>
          <ul className="social">
            <li className="social__item">
              <a href="https://github.com/Yulencha" target="_blank">
                {/* gitHub */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 38 38"
                  fill="none"
                  opacity="0.7"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.7101 29.8331C12.7101 29.9863 12.5339 30.1089 12.3117 30.1089C12.0589 30.1319 11.8827 30.0093 11.8827 29.8331C11.8827 29.6798 12.0589 29.5573 12.281 29.5573C12.5109 29.5343 12.7101 29.6569 12.7101 29.8331ZM10.3274 29.4883C10.2738 29.6415 10.427 29.8177 10.6569 29.8637C10.856 29.9403 11.0859 29.8637 11.1319 29.7105C11.1778 29.5573 11.0323 29.3811 10.8024 29.3121C10.6032 29.2585 10.381 29.3351 10.3274 29.4883ZM13.7137 29.3581C13.4915 29.4117 13.3383 29.5573 13.3613 29.7335C13.3843 29.8867 13.5835 29.9863 13.8133 29.9327C14.0355 29.879 14.1887 29.7335 14.1657 29.5802C14.1427 29.4347 13.9359 29.3351 13.7137 29.3581ZM18.7548 0C8.12863 0 0 8.06734 0 18.6935C0 27.1899 5.34758 34.4605 12.9859 37.0194C13.9665 37.1956 14.3113 36.5903 14.3113 36.0923C14.3113 35.6173 14.2883 32.9972 14.2883 31.3883C14.2883 31.3883 8.9254 32.5375 7.79919 29.1052C7.79919 29.1052 6.92581 26.8758 5.66935 26.3012C5.66935 26.3012 3.91492 25.0984 5.79194 25.1214C5.79194 25.1214 7.6996 25.2746 8.74919 27.098C10.427 30.0552 13.2387 29.2048 14.3343 28.6992C14.5105 27.4734 15.0085 26.623 15.5601 26.1173C11.2774 25.6423 6.95645 25.0218 6.95645 17.6516C6.95645 15.5448 7.53871 14.4875 8.76452 13.1391C8.56532 12.6411 7.91411 10.5879 8.96371 7.9371C10.5649 7.43911 14.25 10.0056 14.25 10.0056C15.7823 9.57661 17.4294 9.35444 19.0613 9.35444C20.6931 9.35444 22.3403 9.57661 23.8726 10.0056C23.8726 10.0056 27.5577 7.43145 29.1589 7.9371C30.2085 10.5956 29.5573 12.6411 29.3581 13.1391C30.5839 14.4952 31.3347 15.5524 31.3347 17.6516C31.3347 25.0448 26.8222 25.6347 22.5395 26.1173C23.2444 26.7226 23.8419 27.8718 23.8419 29.6722C23.8419 32.254 23.819 35.4488 23.819 36.077C23.819 36.575 24.1714 37.1802 25.1444 37.004C32.8056 34.4605 38 27.1899 38 18.6935C38 8.06734 29.381 0 18.7548 0ZM7.44677 26.4238C7.34718 26.5004 7.37016 26.6766 7.5004 26.8222C7.62298 26.9448 7.79919 26.9984 7.89879 26.8988C7.99839 26.8222 7.9754 26.646 7.84516 26.5004C7.72258 26.3778 7.54637 26.3242 7.44677 26.4238ZM6.61936 25.8032C6.56573 25.9028 6.64234 26.0254 6.79556 26.102C6.91815 26.1786 7.07137 26.1556 7.125 26.0484C7.17863 25.9488 7.10202 25.8262 6.94879 25.7496C6.79556 25.7036 6.67298 25.7266 6.61936 25.8032ZM9.10161 28.5306C8.97903 28.6302 9.025 28.8601 9.20121 29.0056C9.37742 29.1819 9.5996 29.2048 9.69919 29.0823C9.79879 28.9827 9.75282 28.7528 9.5996 28.6073C9.43105 28.431 9.20121 28.4081 9.10161 28.5306ZM8.22823 27.4044C8.10565 27.4811 8.10565 27.6802 8.22823 27.8565C8.35081 28.0327 8.55766 28.1093 8.65726 28.0327C8.77984 27.9331 8.77984 27.7339 8.65726 27.5577C8.55 27.3815 8.35081 27.3048 8.22823 27.4044Z" />
                </svg>
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.linkedin.com/in/yulencha/" target="_blank">
                {/* linkedIn */}
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 38 38"
                  fill="none"
                  opacity="0.7"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M35.2857 0H2.7058C1.21295 0 0 1.22991 0 2.73973V35.2603C0 36.7701 1.21295 38 2.7058 38H35.2857C36.7786 38 38 36.7701 38 35.2603V2.73973C38 1.22991 36.7786 0 35.2857 0ZM11.4848 32.5714H5.85268V14.4366H11.4933V32.5714H11.4848ZM8.66875 11.9598C6.86205 11.9598 5.40312 10.4924 5.40312 8.6942C5.40312 6.89598 6.86205 5.42857 8.66875 5.42857C10.467 5.42857 11.9344 6.89598 11.9344 8.6942C11.9344 10.5009 10.4754 11.9598 8.66875 11.9598ZM32.5969 32.5714H26.9647V23.75C26.9647 21.6464 26.9223 18.9406 24.0384 18.9406C21.1036 18.9406 20.654 21.2308 20.654 23.5973V32.5714H15.0219V14.4366H20.425V16.9134H20.5013C21.2562 15.4884 23.0969 13.9871 25.8366 13.9871C31.5366 13.9871 32.5969 17.7446 32.5969 22.6304V32.5714Z" />
                </svg>
              </a>
            </li>
            <li className="social__item">
              <a href="tg://resolve?domain=ilina_iu" target="_blank">
                {/* telegram */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  opacity="0.7"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                  <path d="M16.1953 0.333984C24.9695 0.333984 32.1953 7.55979 32.1953 16.334C32.1953 25.1727 24.9695 32.334 16.1953 32.334C7.3566 32.334 0.195312 25.1727 0.195312 16.334C0.195312 7.55979 7.3566 0.333984 16.1953 0.333984ZM23.5501 11.2372C23.6147 11.0437 23.6147 10.8501 23.5501 10.592C23.5501 10.463 23.4211 10.2695 23.3566 10.205C23.1631 10.0114 22.8405 10.0114 22.7114 10.0114C22.1308 10.0114 21.1631 10.334 16.7114 12.205C15.1631 12.8501 12.0663 14.1404 7.42112 16.205C6.64693 16.5275 6.25983 16.7856 6.19531 17.1082C6.1308 17.6243 6.96951 17.8179 7.93725 18.1404C8.77596 18.3985 9.87273 18.7211 10.4534 18.7211C10.9695 18.7211 11.5502 18.5275 12.1953 18.0759C16.5179 15.1082 18.776 13.6243 18.905 13.6243C19.034 13.6243 19.1631 13.5598 19.2276 13.6243C19.3566 13.7533 19.3566 13.8824 19.2921 13.9469C19.2276 14.2695 15.1631 18.0114 14.905 18.2695C14.0018 19.1727 12.9695 19.7533 14.5824 20.7856C15.9372 21.6888 16.7114 22.2695 18.1308 23.1727C19.034 23.7533 19.7437 24.463 20.6469 24.3985C21.0985 24.334 21.5502 23.9469 21.7437 22.7211C22.3243 19.9469 23.3566 13.7533 23.5501 11.2372Z" />
                </svg>
              </a>
            </li>
            <li>
              <BtnDarkMode />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
