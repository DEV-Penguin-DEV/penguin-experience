# PENGUIN Experience

### PENGUIN-Pagination
`Универсальная пагинация`

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