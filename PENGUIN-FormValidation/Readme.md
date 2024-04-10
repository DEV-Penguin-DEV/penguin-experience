# PENGUIN Form Validation

`author` - DEV-Penguin-DEV[https://github.com/DEV-Penguin-DEV]

### PENGUIN-Modals

`Библиотека для валидации форм`

#### Зависимости

- penguin-utils.js

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
