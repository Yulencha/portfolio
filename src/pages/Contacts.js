import React from "react";

const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Контакты</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Местоположение</h2>
            <p> Пхукет, Таиланд</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram</h2>
            <p>
              <a href="tel:+79051234567">+7 (924) 402-86-67</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:webdev@protonmail.com">ilinauv@outlook.com</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
