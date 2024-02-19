export const startScrollAnimation = () => {

	document.addEventListener('DOMContentLoaded', () => {
		const body = document.querySelector('.main-page');
		const BLOCKS_COUNT = 5.7;
		const BLOCK_HEIGHT = window.innerHeight;
		body.style.minHeight = `${BLOCKS_COUNT * BLOCK_HEIGHT}px`;
	});
	
	window.addEventListener('scroll', () => {
		const scrollPosition = window.scrollY; // Где сейчас находиться юзер
		const screenHeight = window.innerHeight; // Высота одного блока (1 блок == 1 экран)

		const blockCounts = 5; // Количество блоков

		// Проверяем какой сейчас именно блок и затем принимаем соответствующее решение
		for (let index = 1; index <= blockCounts; index++) {
			const endBlock = screenHeight * index;
			const startBlock = (screenHeight * (index - 1));
			switch (index) {
			case 1:
				elementAnimation({
					elSelector: '.blog__image', // Селектор элемента который нужно анимировать
					animations: [
						{
							startPosition: startBlock, // Позиция скролла с которой мы начинаем
							currentScrollPosition: scrollPosition, // Текущая позиция скролла
							endPosition: endBlock, // Позиция скролла когда мы заканчиваем
							changeProperties: {
								translate: {
									direction: 'Y',
									from: '0',
									to: '-10',
									unit: '%'
								},
							}
						}
					]
				});
				break;
			}
			
		}
	});
};


/**
 * Функция для анимации одного элемента
 *
 * @param {Object} animationObject - object with animation params
 * 
 * @example <caption>animationObject structure</caption>
 * ```
 * const animationObject = {
 *     elSelector: string, // Селектор элемента который нужно анимировать
 *     animations: [
 *         {
 *             startPosition: string, // Позиция скролла с которой мы начинаем
 *             currentScrollPosition: string, // Текущая позиция скролла
 *             endPosition: string, // Позиция скролла когда мы заканчиваем
 *             changeProperties: {
 *                 scale: '1',
 *                 // Другие свойства...
 *             }
 *         }
 *     ]
 * }
 * ```
 *
 */
const elementAnimation = (animationObject) => {
	const elements = document.querySelectorAll(animationObject.elSelector); // Элемент для анимации
	// Проходимся по массиву с анимациями для нашего элемента
	animationObject.animations.forEach((animation) => {
		// TODO убрать хардкод с футером
		if (animation.currentScrollPosition >= animation.startPosition || animationObject.elSelector == '.fixed-container__bg-container' || animationObject.elSelector == '.form-container' || animationObject.elSelector == '.benefits__container'  || animationObject.elSelector == '.short-news') {
			for (const propertyName in animation.changeProperties) {
				const animationProperty = animation.changeProperties[propertyName];
				const from = animationProperty.from; // Изначальное значение изменяющегося свойства
				const to = animationProperty.to; // Конечное значение изменяющегося свойства
				const unit = animationProperty.unit; // Единицы измерения
				const scrollMultiplicator = animation.currentScrollPosition <= animation.startPosition + 60?
					0
					: animation.currentScrollPosition >= animation.endPosition ?
						1
						: (animation.currentScrollPosition - animation.startPosition) / (animation.endPosition - animation.startPosition);
				
				const fromTo = (index = 'default') => {
					return index == 'default' ? `${Number(from) + ((to - from) * scrollMultiplicator)}` : `${Number(from[index]) + ((to[index] - from[index]) * scrollMultiplicator)}${unit[index]}`;
				};
					
				
				elements.forEach((element) => {
					const prevStyle = element.style.cssText;
					switch (propertyName) {
					case 'translate':
						element.style.transform = animationProperty.direction == 'XY' ? `${propertyName}(${fromTo(0)}, ${fromTo(1)})`
							: `${propertyName + animationProperty.direction}(${fromTo()}${unit})`;
						break;
					case 'padding':
						switch (animationProperty.sideCount) {
						case 1:
							element.style.padding = `${fromTo()}${unit}`;
							break;
						case 2:
							element.style.padding = `${fromTo(0)} ${fromTo(1)}`;
							break;
						case 3:
							element.style.padding = `${fromTo(0)} ${fromTo(1)} ${fromTo(2)}`;
							break;
						case 4:
							element.style.padding = `${fromTo(0)} ${fromTo(1)} ${fromTo(2)} ${fromTo(3)}`;
							break;
						}
						break;
							
					default:
						element.style = `${prevStyle} ${propertyName}: ${fromTo()}${unit ? unit : ''}`;
						break;
					}
				});
				
			}
		}
	});
};

