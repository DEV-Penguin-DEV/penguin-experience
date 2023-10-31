# PENGUIN Experience

### PENGUIN-Animation

`Библиотека для анимации`

#### Зависимости

`Дополнительных зависимостей не нужно`

#### Инструкция к использованию

1. В файле **animation.js** в функции startAnimation для функции addBaseAnimationClass передаём через запятую селеторы элементов которые будут отслеживаться для анимации и когда они будут находится полностью в поле зрение юзера будет добавляется класс **block-animation--active**
2. Вызвать функцию **startAnimation** в основном js файле проекта

#### Интерфейс

**JS Functions**

- startAnimation - `Базовая функция запуска анимации`

**SCSS Functions**

- scaleAnimation - `Анимация увелечения`
- moveAnimation - `Анимация движения`
- moveToAnimation - `Анимация движение от точки до точки`
- widthAnimation - `Анимация изменения ширины`
- skewMoveAnimation - `Анимация изменения наклона`
