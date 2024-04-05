export const PenguinModalConstants = {
	IS_MOBILE: window.matchMedia('(max-width: 500px)').matches,
	CLOSE_BUTTON_SELECTOR: '[data-fancybox-close]',
	CLOSE_BUTTON_ATTRIBUTE: 'data-fancybox-close',
	DEFAULT_CLOSE_BUTTON_TEMPLATE: '<span class="visually-hidden">Кнопка закрытия модального окна</span>',
	MODAL_OPEN_BUTTON_SELECTOR: '.c-modal__button',
	MODAL_TRANSITION: 500,
	MODAL_ACTIVE_CLASS: 'active',
	MODAL_SHADOW_CLASS: '.modal-window-shadow',
};