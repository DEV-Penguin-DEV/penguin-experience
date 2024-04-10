# PENGUIN Gallery

`author` - DEV-Penguin-DEV[https://github.com/DEV-Penguin-DEV]

### PENGUIN-Modals

`Библиотека для всплывающих галерей`

#### Зависимости

- penguin-utils.js
- PENGUIN Modal
- Swiper

#### HTML пример

<div class="penguin-gallery">
    <ul class="reviews__slider swiper-wrapper">
        <li class="gallery-item swiper-slide">
            <!-- Контент -->
        </li>
        <li class="gallery-item swiper-slide">
            <!-- Контент -->
        </li>
        <li class="gallery-item swiper-slide">
            <!-- Контент -->
        </li>
        <li class="gallery-item swiper-slide">
            <!-- Контент -->
        </li>
    </ul>

    <div class="pagination"></div>
</div>

#### Инструкция к использованию

1. Для контейнера слайдера которого Вы хотите сделать модальным добавьте класс **penguin-gallery**
2. Затем для каждого кликабельного элемента добавьте класс **gallery-item**
3. Так же поскольку данная библиотека связана с swiper Вы должны использовать класс swiper-wrapper в соответствие с swiper документацией
4. Вызвать функцию **startGallery** в основном js файле проекта и наслаждаться результатом