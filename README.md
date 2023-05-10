# Форма бронирования переговорной

Тестовое задание для стажеров фронтенд-разработки в VK

## Функциональность
* Отправка и очистка формы бронирования
* Выбор дня, даты начала и окончания события
* Выбор места и возможность написать комментарий
* Все поля, кроме комментариев, валидируются:
    + нельзя выбрать прошедшую дату
    + нельзя выбрать прошеднее время, если нужно забронировать сегодня
    + нельзя выбрать время окончания, предшествующее времени начала
    
## Запуск

`npm run dev` разработка  
`npm run build` продакшен  


## Технологии

* React, TypeScript
* Сборка: Create Next App
* Библиотека компонентов: Material UI
* Валидация: react hook form
