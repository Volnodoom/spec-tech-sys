# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

General project view [general app view](./src/assets/img/general-view.jpg)

## Tasks Setup
* Make SPA on React by follow layout in [Figma](https://www.figma.com/file/XgA2DS9z49JFUkLwTabMEI/%D0%B2%D1%85%D0%BE%D0%B4-crm?node-id=2%3A36).
* It is required to use mask +7 XXX XXX XX XX.
* The correct login is **+7 111 111 11 11** and password is **123456**.
* Show alert if login/password is incorrect.
* Make animation transition when you click on the button **Forgot password**. After putting correct login, modal window popping up with temporary password (**123456**).
* Closing modal window redirect you on the main page, where login is already inserted.
* When login and password correct redirect to empty page with logout button. Click on Logout button redirect on the main page.
* Responsive layout.
* Inset different format values into login must be properly formatted according to the mask (Like 71111111111, +71111111111, 1111111111, +7 (111) 111 11-11 etc.).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


## Поставленные задачи
* Разработать SPA на React следуя макету [Figma](https://www.figma.com/file/XgA2DS9z49JFUkLwTabMEI/%D0%B2%D1%85%D0%BE%D0%B4-crm?node-id=2%3A36).
* Обязательно использовать маску +7 XXX XXX XX XX.
* Данные для входа (тестовые) +7 111 111 11 11 пароль: 123456.
* Обязательно вывести если логин/пароль неверен.
* Восстановление пароля - +7 111 111 11 11, должно открыться модальное окно (Стилизация - на свой вкус, на данный момент не сильно важно как реализуется модальное окно) с указанием временного пароля (пусть будет 123456).
* При закрытии модального окна, необходимо вернуться на страницу входа и телефон, который восстанавливали, в поле ЛОГИН должен быть подставлен.
* Если данные верные - отобразить пустую страницу с “выходом”, по нажатию на “выход” - попадаем на страницу авторизации. Сохранить информацию о том, что человек авторизован в системе (Необязательно к выполнению).
* Реализация мобильной версии (адаптив верстка).
* Добавить анимацию “вылета” логина, при нажатии на восстановить пароль, “развернуть” вместе с краном, который держит форму на 180 градусов вокруг своей оси и должна быть форма с восстановлением пароля.
* При вставке логина (если скопировали откуда-то), обработать как можно больше вариантов (Например 71111111111, +71111111111, 1111111111, +7 (111) 111 11-11 и т.д).


