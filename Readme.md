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

### PENGUIN-Animation

`Библиотека для анимации`

#### Зависимости

`Дополнительных зависимостей не нужно`

#### Инструкция к использованию стандартной анимации

1. В файле **animation.js** в функции startAnimation для функции addBaseAnimationClass передаём через запятую селеторы элементов которые будут отслеживаться для анимации и когда они будут находится полностью в поле зрение юзера будет добавляется класс **block-animation--active**
2. Вызвать функцию **startAnimation**

#### Инструкция к использованию scroll анимацию

1. В файле **scroll-animation.js** в функции startScrollAnimation настроить анимацию
2. Вызвать функцию **startScrollAnimation** 

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


### penguin-utils.js

`Файл с полезными функциями для JavaScript`


# PENGUIN Form Validation

### PENGUIN-Modals

`Библиотека для валидации форм`

#### Зависимости

`Дополнительных зависимостей не нужно`

#### HTML пример

<form action="" class="penguin-form" data-cb="order">
    <div class="penguin-form__input-container">
        <input type="text" class="required" name="organization_name"
            placeholder="Название организации">
    </div>

    <div class="penguin-form__input-container">
        <input type="email" class="required email" name="email"
            placeholder="Электронная почта">
    </div>

    <div class="penguin-form__input-container">
        <input type="phone" class="required" name="phone"
            placeholder="Телефон">
    </div>

    <div class="penguin-form__input-container">
        <textarea name="comment" class="text-limit" 
        placeholder="Комментарий к заявке" data-limit="200"></textarea>
    </div>
    <div class="penguin-form__input-container">
        <input type="checkbox" name="is_confirm" id="confirm-checkbox-2"
            class="checkbox-required">
        <label for="confirm-checkbox-2" class="order__label relative text-12">
            <span>
                <svg width="9" height="8" viewBox="0 0 11 10" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1 3L4.14085 7.71127C4.54369 8.31554 5.43599 8.30242 5.82089 7.68657L10 1"
                        stroke="#6A8419" stroke-width="2" stroke-linecap="round" />
                </svg>
            </span>
            Нажимая на кнопку,
            вы соглашаетесь
            с политикой конфиденциальности, согласием на передачу персональных данных,согласием
            на обработку персональных данных,публичной офертой.</label>
    </div>
    <button type="submit" class="order__button button button--green">Отправить</button>
</form>

#### Инструкция к использованию

1. Для всех форм которые нужно валидировать нужно добавить класс **penguin-form** и data атрибут **cb** с названием callback который нужно вызывать в при успешной отправке формы
2. Валидация: 
- Для валидации на заполнение для input нужно добавить класс **required**
- Для валидации email для input нужно добавить класс **email**
- Для валидации ограничения символов для input нужно добавить класс **text-limit** и data атрибут **limit** с максимальным количеством символов
- Для валидации checkbox на заполнение для input нужно добавить класс **checkbox-required**
3. Вызвать функцию **startPenguinForms** в основном js файле проекта и передать объект со всеми callback которые нужно для форм
