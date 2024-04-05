import './penguin-modal.scss';
import { PenguinModalConstants } from './constants';
import { get, getAll } from '../penguin-utils';

let isBodyClickListenerAdded = false;

/** 
 * Закрывает модальное окно, удаляя активный класс и применяя анимацию уменьшения.
 * @param {HTMLElement} modal - Элемент модального окна, которое необходимо закрыть.
 */
export const closeModalWindow = (modal) => {
	modal.classList.remove('active');
	modal.style.transform = 'translate(-50%, -50%) scale(0)';
	window.setTimeout(() => (modal.style.zIndex = '-10000'), PenguinModalConstants.MODAL_TRANSITION);
};

/** 
 * Закрывает все активные модальные окна и снимает блокировку прокрутки на теле документа.
 */
export const closeModalWindowShadow = () => {
	getAll(`.c-modal.${PenguinModalConstants.MODAL_ACTIVE_CLASS}`).forEach(closeModalWindow);
	const shadowDomElement = get(PenguinModalConstants.MODAL_SHADOW_CLASS);
	if (shadowDomElement) shadowDomElement.classList.remove('active');
	get('body').style.overflowY = '';
};

/** 
 * Добавляет стили к модальному окну для корректного отображения в зависимости от высоты содержимого и экрана.
 * @param {HTMLElement} modal - Элемент модального окна для применения стилей.
 * @param {boolean} isMobile - Флаг, указывающий на мобильное устройство, для специфической стилизации.
 * @param {number} scale - Контролирует показ окна.
 */
export const addModalStyle = (modal, isMobile = false, scale = 0) => {
	const viewportHeight = window.innerHeight;
	const modalHeight = modal.getBoundingClientRect().height;
	const style = isMobile && modalHeight > viewportHeight ? '0' : '50%';

	Object.assign(modal.style, {
		top: style,
		left: '50%',
		transform: `translateX(-50%) scale(${scale}) translateY(${style === '0' ? '0' : '-50%'})`
	});
};

/** 
 * Открывает модальное окно, добавляя активный класс, применяя стили и блокируя прокрутку тела документа.
 * @param {HTMLElement} modal - Элемент модального окна.
 * @param {boolean} isMobile - Флаг, указывающий на мобильное устройство, для специфической стилизации.
 * @param {boolean} isFirst - Флаг, указывающий, является ли это первым открытием модального окна, для добавления обработчика клика.
 */
export const openModalWindow = (modal, isMobile = false, isFirst = true) => {
	modal.classList.add(PenguinModalConstants.MODAL_ACTIVE_CLASS);
	modal.style.zIndex = '10000';

	addModalStyle(modal, isMobile, 1);
	get('body').style.overflowY = 'hidden';
	prepareModalCloseButton(modal);

	if (isFirst) window.setTimeout(addBodyClickListener, PenguinModalConstants.MODAL_TRANSITION);
	prepareShadow();
};

/** 
 * Инициализирует модальные окна, создавая теневой элемент и назначая обработчики для кнопок открытия модалок.
 */
export const startModals = () => {
	createShadow();

	getAll(PenguinModalConstants.MODAL_OPEN_BUTTON_SELECTOR).forEach(modalButton => {
		const modal = get(modalButton.dataset.src);
		addModalStyle(modal, PenguinModalConstants.IS_MOBILE);
		prepareModalCloseButton(modal);
		modalButton.addEventListener('click', evt => onModalOpenButtonClick(evt, modal, modalButton));
	});
};

/** Создает теневой элемент для фона при открытии модальных окон. */
function createShadow() {
	const shadowElement = document.createElement('div');
	shadowElement.classList.add('modal-window-shadow');
	document.body.appendChild(shadowElement);
}

/** Создает кнопку закрытия внутри модального окна. 
 * @param {HTMLElement} modal - Элемент модального окна. */
function createModalCloseButton(modal) {
	const closeModalButton = document.createElement('button');
	closeModalButton.setAttribute(PenguinModalConstants.CLOSE_BUTTON_ATTRIBUTE, '');
	closeModalButton.setAttribute('type', 'button');
	closeModalButton.innerHTML = PenguinModalConstants.DEFAULT_CLOSE_BUTTON_TEMPLATE;
	modal.appendChild(closeModalButton);
}

/** 
 * Обрабатывает клик по кнопке открытия модального окна, открывая соответствующее модальное окно.
 * @param {Event} evt - Событие клика, используется для предотвращения стандартного действия браузера.
 * @param {HTMLElement} modal - Элемент модального окна, которое будет открыто.
 * @param {HTMLElement} modalButton - Кнопка, по которой произошел клик для открытия модального окна. Используется для получения дополнительных данных, например, состояния 'isFirst'.
 */
function onModalOpenButtonClick(evt, modal, modalButton) {
	evt.preventDefault(); // Предотвращает стандартное действие для ссылок или кнопок, если таковое имеется.

	const oldModal = get(`.c-modal.${PenguinModalConstants.MODAL_ACTIVE_CLASS}`); // Ищет активное модальное окно для его закрытия перед открытием нового.
	if (oldModal) closeModalWindow(oldModal);

	openModalWindow(modal, PenguinModalConstants.IS_MOBILE, modalButton.dataset.isFirst == 'false' ? false : true); // Открывает новое модальное окно с учетом параметров.
}

/** Подготавливает кнопки закрытия внутри модального окна, добавляя обработчики событий. 
 * @param {HTMLElement} modal - Элемент модального окна. */
function prepareModalCloseButton(modal) {
	let modalCloseButtons = getAll(PenguinModalConstants.CLOSE_BUTTON_SELECTOR, modal);
	if (modalCloseButtons.length <= 0) {
		createModalCloseButton(modal);
		modalCloseButtons = getAll(PenguinModalConstants.CLOSE_BUTTON_SELECTOR, modal);
	}
	modalCloseButtons.forEach(modalCloseButton => modalCloseButton.addEventListener('click', closeModalWindowShadow));
}

/** Подготавливает или создает элемент c тенью для модальных окон, если он еще не создан. */
function prepareShadow() {
	let shadowElement = get(PenguinModalConstants.MODAL_SHADOW_CLASS);

	if (!shadowElement) {
		createShadow();
		shadowElement = get(PenguinModalConstants.MODAL_SHADOW_CLASS);
	}

	shadowElement.classList.add('active');
}

/** 
 * Добавляет обработчик события на клик для Body для закрытия модального окна.
 */
function addBodyClickListener() {
	if (!isBodyClickListenerAdded) {
		document.body.addEventListener('click', onWindowClick);
		isBodyClickListenerAdded = true;
	}
}

/** 
 * Закрывает модальное окно при клике вне модального окна.
 */
function onWindowClick(evt) {
	const target = evt.target;
	if (!target.closest('.c-modal') && !target.closest('.c-modal__button')) closeModalWindowShadow();
}