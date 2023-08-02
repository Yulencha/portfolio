import React from "react";

const Home = () => {
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">
            Привет! Я <em>Юлия</em>
          </h1>
          <div className="header__text">Фронтент разработчик</div>
          <a
            className="btn"
            target="_blank"
            href="https://hh.ru/resume/6c193bf2ff0259322f0039ed1f743163763767"
          >
            Резюме hh.ru
          </a>

          {/* <a href="#!" className="btn">
            Download CV
          </a> */}
        </div>
      </header>
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Навыки</h2>
              <p>
                JavaScript, ReactJS, HTML, CSS, BootStrap, БЭМ, SCSS, адаптивная
                верстка
              </p>
            </li>
            {/* <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
            </li> */}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
