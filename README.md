# ТАТБЕЛЭНЕРГО - React версия

React версия сайта ТАТБЕЛЭНЕРГО с сохранением визуального дизайна и структуры оригинального HTML сайта.

## Установка

```bash
npm install
```

## Запуск в режиме разработки

```bash
npm run dev
```

Откроется на http://localhost:3000

## Сборка для продакшена

```bash
npm run build
```

## Структура проекта

```
tatbel-react/
├── public/                    # Статические файлы (изображения, иконки)
│   └── wp-content/          # Копия из оригинального проекта
├── src/
│   ├── components/          # React компоненты
│   │   ├── Header.jsx       # Шапка сайта
│   │   ├── Footer.jsx      # Подвал сайта
│   │   └── Layout.jsx      # Общий layout
│   ├── pages/               # Страницы
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   ├── Career.jsx
│   │   ├── PressCenter.jsx
│   │   ├── Contacts.jsx
│   │   └── NotFound.jsx
│   ├── styles/              # CSS стили
│   │   └── main.css         # Основные стили (копия из оригинального проекта)
│   ├── App.jsx              # Главный компонент с роутингом
│   ├── main.jsx             # Точка входа
│   └── index.css            # Базовые стили
├── index.html
├── package.json
└── vite.config.js
```

## Особенности

- ✅ Сохранен визуальный дизайн оригинального сайта
- ✅ React Router для навигации
- ✅ Swiper для слайдеров
- ✅ Адаптивный дизайн
- ✅ Мобильное меню
- ✅ Модальные окна

