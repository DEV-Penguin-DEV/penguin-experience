# PENGUIN Experience

`author` - DEV-Penguin-DEV[https://github.com/DEV-Penguin-DEV]

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
