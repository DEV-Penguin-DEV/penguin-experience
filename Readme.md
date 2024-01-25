# PENGUIN Experience

`author` - DEV-Penguin-DEV[https://github.com/DEV-Penguin-DEV]

### PENGUIN-Alerts

`Библиотека для всплывающих окон оповещения`

#### Зависимости

`Для работы данной библиотеки нужна друга Библиотека PENGUIN-Modal`

#### Интерфейс

**Functions**

- modalTemplate - `Создаёт template для модального окна`
- showModal - `Функция для пока модального окна с уведомлением`

**Constants**

- ICON - `Константа иконок`
- - SUCCESS
- - ERROR

### PENGUIN-Modals

`Библиотека для анимации`

#### Зависимости

`Дополнительных зависимостей не нужно`

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

### PENGUIN-Animation

`Библиотека для анимации`

#### Зависимости

`Дополнительных зависимостей не нужно`

#### Инструкция к использованию стандартной анимации

1. В файле **animation.js** в функции startAnimation для функции addBaseAnimationClass передаём через запятую селеторы элементов которые будут отслеживаться для анимации и когда они будут находится полностью в поле зрение юзера будет добавляется класс **block-animation--active**
2. Вызвать функцию **startAnimation** 

#### Инструкция к использованию анимации цифр

1. В файле **number-animation.js** в функцию startStatisticAnimation нужно пережать 2 параметра, класс блока в котором находятся цифры и класс элементов с самими цифрами
2. Вызвать функцию **startStatisticAnimation** 

#### Интерфейс

**JS Functions**

- startAnimation - `Базовая функция запуска анимации`
- startStatisticAnimation - `Отдельная функция для запуска анимации цифр`

**SCSS Functions**

- scaleAnimation - `Анимация увелечения`
- moveAnimation - `Анимация движения`
- moveToAnimation - `Анимация движение от точки до точки`
- widthAnimation - `Анимация изменения ширины`
- skewMoveAnimation - `Анимация изменения наклона`
- opacityAnimation - `Анимация изменения opacity`

### scripts.scss

`Набор SCSS скриптов`

### settings.scss

`Общие базовые стили для каждого проекта`

### penguin-infinity-slider.js

`Бесконечный слайдер`


### PENGUIN-Pagination

`Универсальная пагинация`

#### Зависимости

`Дополнительных зависимостей не нужно`

#### HTML пример

<div class="gallery" data-current-page="1">
    <div class="gallery__item">
        <!-- Контент Элемента -->
    </div>
</div>

<div class="pagination">
    <button class="pagination__arrow pagination__arrow--left">
    </button>
    <div class="pagination__container"> <!-- Контейнер для номеров страниц --> </div>
    <button class="pagination__arrow pagination__arrow--right">
    </button>
</div>


#### Инструкция к использованию

1. Указать нужные переменные:
 - paginations - `Класс контейнер пагинации`
 - CARDS_PER_PAGE - `Количество элементов на одной странице`
 - NUMBER_LINK_TEMPLATE - `Template для элемента номера страницы`
 - paginationItems - `Класс элементов для которых создана пагинация`
 - leftButton - `Кнопка влево`
 - rightButton - `Кнопка вправо`
 - numberLinksContainer - `Контейнер для номеров страниц`


### PENGUIN-mask

`Маски для различных полей ввода`

#### Зависимости

`Дополнительных зависимостей не нужно`

#### Инструкция к использованию

1. Указать для input нужный класс
- **.js_phone** - `Маска для вводу телефона (+7)`
2. Вызвать соответствующую функцию
- startPhoneMask - `Маска для вводу телефона (+7)`


### php-utils.php

`Файл с полезными функциями для php`

