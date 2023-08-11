import project01 from "./../img/projects/01.png";
import project01Big from "./../img/projects/01-big.png";

import project02 from "./../img/projects/02.png";
import project02Big from "./../img/projects/02-big.png";

import project03 from "./../img/projects/03.png";
import project03Big from "./../img/projects/03-big.png";

import project04 from "./../img/projects/04.png";
import project04Big from "./../img/projects/04-big.png";

import project05 from "./../img/projects/05.png";
import project05Big from "./../img/projects/05-big.png";

import project06 from "./../img/projects/06.png";
import project06Big from "./../img/projects/06-big.png";

const projects = [
  {
    title: "Агрегатор ресторанов",
    img: project03,
    imgBig: project03Big,
    skills:
      "React, React Hooks, фильтрация по поисковому запросу, Bootstrap, Flexbox, pixel perfect, адаптивная верстка по макету из Figma",
    link: "https://yulencha.github.io/UberEats_react/",
    gitHubLink: "https://github.com/Yulencha/UberEats_react",
    description:
      "Учебный проект курса 'Веб-разработка для начинающих: HTML и CSS' на stepik.org переделаный на React",
  },
  {
    title: "Сайт-визитка",
    img: project02,
    imgBig: project02Big,
    skills:
      "React, React Hooks, Flexbox, темная/светлая тема, адаптивная верстка",
    link: "https://yulencha.github.io/portfolio/",
    gitHubLink: "https://github.com/Yulencha/portfolio",
    description: "Pet-project для изучения React",
  },
  {
    title: "Рекламная страница",
    skills:
      "SCSS, БЭМ, JS, Flexbox, слайдеры (swiper slider), popUp, pixel perfect, адаптивная верстка по макету из Photoshop",
    img: project01,
    imgBig: project01Big,
    link: "https://yulencha.github.io/cars_advertisement/",
    gitHubLink: "https://github.com/Yulencha/cars_advertisement",
    description: "Тестовое задание",
  },
  {
    title: "Поиск по GitHub",
    img: project04,
    imgBig: project04Big,
    skills: "Асинхронные API запросы",
    link: "https://yulencha.github.io/githab_search/",
    gitHubLink: "https://github.com/Yulencha/githab_search",
    description: "Учебный проект на стажировке в Hotels.ru",
  },
  {
    title: "Локальный мессенджер",
    img: project05,
    imgBig: project05Big,
    skills: "SCSS, БЭМ, JS, Flexbox",
    link: "https://yulencha.github.io/chat-messenger/",
    gitHubLink: "https://github.com/Yulencha/chat-messenger",
    description: "Учебный проект на стажировке в Hotels.ru",
  },
  {
    title: "Лендинг",
    img: project06,
    imgBig: project06Big,
    skills:
      "Flexbox, SCSS, БЭМ, pixel perfect, адаптивная верстка по макету из Figma",
    link: "https://yulencha.github.io/watch_store/",
    gitHubLink: "https://github.com/Yulencha/watch_store",
    description: "Учебный проект на стажировке в Hotels.ru",
  },
];

export { projects };
