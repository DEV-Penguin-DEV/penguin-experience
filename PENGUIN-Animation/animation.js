import './animation.scss';

const Visible = (target) => {
  // Все позиции элемента
  const targetPosition = {
    top: window.pageYOffset + target.getBoundingClientRect().top,
    left: window.pageXOffset + target.getBoundingClientRect().left,
    right: window.pageXOffset + target.getBoundingClientRect().right,
    bottom: window.pageYOffset + target.getBoundingClientRect().bottom,
  };
  // Получаем позиции окна
  const windowPosition = {
    top: window.pageYOffset,
    left: window.pageXOffset,
    right: window.pageXOffset + document.documentElement.clientWidth,
    bottom: window.pageYOffset + document.documentElement.clientHeight,
  };
  if (
    targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    targetPosition.left < windowPosition.right
  ) {
    // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
    // Если элемент полностью видно, то запускаем следующий код
    if (!target.classList.contains("block-animation--active")) {
      target.classList.add("block-animation--active");
    }
  } else {
    // Если элемент не видно, то запускаем этот код
    if (target.classList.contains("block-animation--active")) {
      target.classList.remove("block-animation--active");
    }
  }
};

const addBaseAnimationClass = (...classes) => {
  classes.forEach((elClass) => {
    document.querySelectorAll(elClass).forEach((el) => {
      el.classList.add("block-animation");
      window.addEventListener("scroll", () => Visible(el));
    });
  });
};

export const startAnimation = () => {
  addBaseAnimationClass(
  );
  const blockElements = document.querySelectorAll(".block-animation");
  blockElements.forEach((el) => {
    Visible(el);
  });
  blockElements.forEach((block) => {
    window.addEventListener("scroll", () => Visible(block));
  });
};
