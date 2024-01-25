const Visible = (target, numberSelector) => {
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
		targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней части окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней части окна, то элемент виден снизу
    targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    targetPosition.left < windowPosition.right
	) {
		// Если позиция левой стороны элемента меньше позиции правой части окна, то элемент виден справа
		// Если элемент полностью видно, то запускаем следующий код
		if (!target.classList.contains('block-animation--active')) {
			target.classList.add('block-animation--active');
			countAnimation(numberSelector);
		}
	}
};

const countAnimation = (numberSelector) => {
	const valueElements = document.querySelectorAll(numberSelector);
	const animationSteps = 100; // Количество шагов анимации
	// Указанное значение, до которого вы хотите увеличить

	valueElements.forEach((valueElement) => {
        // Начнем анимацию увеличения значения
        const goalNumber = valueElement.textContent;
		valueElement.style.transform = 'scale(1)';
		valueElement.textContent = '0';

		const stepValue = goalNumber / animationSteps;
		let currentStep = 0;

		const incrementValue = () => {
			currentStep++;
			const animatedValue = currentStep * stepValue;
			valueElement.textContent = Math.round(animatedValue);

			if (currentStep < animationSteps) {
				requestAnimationFrame(incrementValue);
			}
		};

		// Запуск анимации после небольшой задержки
		setTimeout(incrementValue, 300);
	});
};


export const startStatisticAnimation = (blockSelector, numberSelector) => {
	const blockElements = document.querySelectorAll(blockSelector);
	blockElements.forEach((el) => {
		Visible(el);
	});
	blockElements.forEach((block) => {
		window.addEventListener('scroll', () => Visible(block, numberSelector));
	});
};