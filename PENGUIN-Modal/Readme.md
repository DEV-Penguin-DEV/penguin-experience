# PENGUIN Experience

`author` - DEV-Penguin-DEV[https://github.com/DEV-Penguin-DEV]

### PENGUIN-Modals

`Библиотека для всплывающих окон`

#### Зависимости

- penguin-utils.js

#### Инструкция к использованию

1. Для модальных окон нужно добавить класс **c-modal**
2. Для кнопок которые открывают модальные окна нужно добавить **data-src** с селектором модального окна и класс **c-modal__button**, также если кнопка открывает модальное из другого модального окна нужно указывать **data-is-first** с значением **false**
3. Вызвать функцию startModals в основном js файле проекта или на страницах где есть модальные окна

#### Интерфейс

**Functions**

- closeModalWindow - `Закрывает модальное окно`
- closeModalWindowShadow - `Закрывает модальное окно и удаляет тень на фоне`
- addModalStyle - `Добавляет для модального окна базовые классы нужные для работы`
- openModalWindow - `Открывает модальное окно`
- startModals - `Базовая функция запуска модальных окон из разметки`
