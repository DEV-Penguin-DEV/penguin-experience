import {
	addModalStyle,
	openModalWindow,
	closeModalWindow,
} from '../PENGUIN-Modal/penguin-modal';
import './penguin-alerts.scss';

const modalTemplate = (icon, titleText, text, buttonText) => `
<div class="custom-modal c-modal">
        ${icon}
        <p class="custom-modal__title">${titleText}</p>
        <p class="custom-modal__text">${text}</p>
        <button class="custom-modal__button" data-fancybox-close>${buttonText}</button>
    </div>
`;

const ICONS = {
	error: `
  <div class="swal2-icon swal2-error swal2-icon-show" style="display: flex;">
    <span class="swal2-x-mark">
      <span class="swal2-x-mark-line-left"></span>
      <span class="swal2-x-mark-line-right"></span>
    </span>
  </div>
  `,
	success: `
	<div class="swal2-icon swal2-success swal2-icon-show" style="display: flex;">
		<span class="swal2-success-line-tip"></span>
		<span class="swal2-success-line-long"></span>
		<div class="swal2-success-ring"></div>
	</div>  `,
};

const createElement = (template) => {
	const newElement = document.createElement('div');
	newElement.innerHTML = template;

	return newElement.firstElementChild;
};

/**
 *
 * Example:
 * ```
 * {
 *   iconType: 'error',
 *   titleText: 'Everything is good',
 *   text: 'Everything is good',
 *   buttonText: 'OK'
 * }
 * ```
 *
 * iconType variants:
 * - error
 * - success
 *
 * buttonText:
 * Default text is 'OK'
 */
export const showModal = (modalContent) => {
	const prevActiveModal = document.querySelector('.c-modal.active');
	if (prevActiveModal) {
		closeModalWindow(prevActiveModal);
	}
	const { iconType, titleText, text, buttonText } = modalContent;
	const modalElement = createElement(
		modalTemplate(
			ICONS[iconType],
			titleText,
			text,
			modalContent.buttonText != undefined ? buttonText : 'OK'
		)
	);
	const body = document.querySelector('body');
	body.appendChild(modalElement);
	addModalStyle(modalElement);
	openModalWindow(modalElement);
};
