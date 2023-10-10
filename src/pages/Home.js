import React from "react";

const Home = () => {
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">
            Привет! Я <em>Юлия</em>
          </h1>
          <div className="header__text">
            Начинающий фронтенд разработчик с инженерным бэкграундом. Люблю
            разбираться в сложных вещах и изучать новые технологии. Меня
            вдохновляет создавать то, чем будут пользоваться другие люди.
          </div>
          <a
            className="btn"
            target="_blank"
            href="https://hh.ru/applicant/resumes/view?resume=6293f99fff0c3def870039ed1f6d72754d415a"
          >
            Резюме hh.ru
          </a>
        </div>
      </header>
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Навыки</h2>
              <p>
                React, React Hooks, JavaScript, HTML, CSS, БЭМ, SCSS, PUG,
                анимация, BootStrap, Flexbox, pixel perfect, адаптивная верстка,
                Rest API, Figma
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">В процессе изучения</h2>
              <p>jQuery, TypeScript, Redux</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
