import { getAll } from '../penguin-utils';
import { PenguinFormConstants, PenguinFormErrorMessages } from './constants';
import './penguin-form-validation.scss';
import { MessageController } from './MessageController';

/**
 * Инициализирует процесс валидации для всех форм на странице.
 * @param {Object} cbs - Объект коллбэков, ключи которого соответствуют значениям атрибутов 'data-cb' форм.
 */
export const startPenguinForms = (cbs) => {
	// Получаем все элементы форм на странице и итерируем по ним
	const forms = getAll('.penguin-form');
	forms.forEach((form) => {
		// Для каждой формы создаём группы валидации ввода и проверяем их
		const validationInputsGroups = getValidationInputGroups(form);
		validationInputsGroups.forEach(({ inputs, errorText, isDifferentTexts }) => {
			if (inputs.length > 0) 
				MessageController.createErrorBlocks(inputs, errorText, isDifferentTexts);
		});
  
		// Навешиваем обработчик событий на отправку формы
		form.addEventListener('submit', async (evt) => {
			evt.preventDefault(); // Предотвращаем стандартное поведение отправки
			validationInputsGroups.forEach(({ inputs, validationFunction }) => {
				if (inputs.length > 0)
					validateInputs(inputs, validationFunction);
			});
  
			// Если после валидации в форме есть ошибки, прерываем выполнение функции
			if (getAll(PenguinFormConstants.ERROR_CLASS, form).length > 0) return;
  
			// Если валидация пройдена, вызываем коллбэк и сбрасываем форму
			await cbs[form.dataset.cb](form);
			form.reset();
		});
	});
};
  
/**
   * Возвращает массив объектов для валидации каждой формы.
   * @param {HTMLElement} form - Элемент формы, для которой необходимо получить группы валидации.
   * @returns {Array<Object>} Массив объектов групп валидации.
   */
const getValidationInputGroups = form => [
	{
		inputs: getAll(PenguinFormConstants.REQUIRED_INPUT_CLASS, form),
		errorText: PenguinFormErrorMessages.REQUIRED_ERROR,
		isDifferentTexts: false,
		validationFunction: validateRequiredInput,
	},
	{
		inputs: getAll(PenguinFormConstants.EMAILS_INPUT_CLASS, form),
		errorText: PenguinFormErrorMessages.EMAIL_ERROR,
		isDifferentTexts: false,
		validationFunction: validateEmailInput,
	},
	{
		inputs: getAll(PenguinFormConstants.TEXT_LIMIT_INPUT_CLASS, form),
		errorText: PenguinFormErrorMessages.LIMIT_TEXT_ERROR,
		isDifferentTexts: true,
		validationFunction: validateLimitTextInput,
	},
	{
		inputs: getAll(PenguinFormConstants.REQUIRED_CHECKBOX_CLASS, form),
		isDifferentTexts: false,
		errorText: PenguinFormErrorMessages.CHECKBOX_REQUIRED_ERROR,
		validationFunction: validateRequiredCheckbox,
	},
];
  
/**
   * Выполняет валидацию группы полей ввода.
   * @param {HTMLElement[]} validateInputs - Массив элементов для валидации.
   * @param {Function} validateFunction - Функция валидации для элементов.
   */
const validateInputs = (validateInputs, validateFunction) => {
	// Итерация по полям ввода и их валидация
	validateInputs.forEach(validateFunction);
};
  
/**
   * Осуществляет валидацию конкретного поля ввода.
   * @param {boolean} validateCondition - Условие валидации.
   * @param {HTMLElement} input - Элемент поля ввода.
   */
const validateInput = (validateCondition, input) => {
	if (validateCondition) {
		MessageController.removeErrorMessage(input);
	} else {
		MessageController.showErrorMessage(input);
	}
};
  

/**
 * Проверяет, заполнено ли обязательное текстовое поле.
 * @param {HTMLElement} input - Элемент поля ввода, который необходимо проверить.
 */
const validateRequiredInput = (input) => validateInput(input.value, input);

/**
 * Проверяет, установлен ли флажок в чекбоксе.
 * @param {HTMLElement} input - Элемент чекбокса, который необходимо проверить.
 */
const validateRequiredCheckbox = (input) => validateInput(input.checked, input);

/**
 * Проверяет, соответствует ли значение поля ввода формату email.
 * @param {HTMLElement} input - Элемент поля ввода email, который необходимо проверить.
 */
const validateEmailInput = (input) => {
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Регулярное выражение для проверки формата email
	validateInput(regex.test(input.value), input);
};

/**
 * Проверяет, не превышает ли длина текста в поле ввода установленный лимит.
 * @param {HTMLElement} input - Элемент поля ввода, который необходимо проверить.
 */
const validateLimitTextInput = (input) => validateInput(input.value.length <= input.dataset.limit, input);
