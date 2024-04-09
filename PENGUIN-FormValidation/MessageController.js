import { PenguinFormConstants } from './constants';

/**
 * Класс для управления сообщениями об ошибках и стилями в полях формы.
 */
export class MessageController {
	static errorTextClass = PenguinFormConstants.ERROR_TEXT_CLASS.substring(1);
	static errorClass = PenguinFormConstants.ERROR_CLASS.substring(1);
  
	/**
     * Создаёт и добавляет блок с сообщением об ошибке к контейнеру поля ввода.
     * @param {HTMLElement} input - Элемент поля ввода, рядом с которым будет отображаться сообщение об ошибке.
     * @param {string} message - Содержимое сообщения об ошибке.
     */
	static createErrorBlock(input, message) {
		const errorBlock = document.createElement('p'); // Создаёт новый параграф для сообщения об ошибке.
		errorBlock.textContent = message; // Устанавливает текст сообщения об ошибке.
		errorBlock.classList.add(MessageController.errorTextClass); // Добавляет класс для стилизации текста ошибки.
		MessageController.getInputContainer(input)?.append(errorBlock); // Добавляет блок ошибки к контейнеру поля ввода.
	}
  
	/**
     * Создаёт сообщения об ошибках для множества полей ввода.
     * @param {HTMLElement[]} inputs - Массив элементов полей ввода для валидации.
     * @param {string | function} message - Сообщение об ошибке или функция, возвращающая сообщение об ошибке.
     * @param {boolean} isDifferentTexts - Указывает, используются ли разные тексты для каждого поля ввода на основе данных атрибутов.
     */
	static createErrorBlocks(inputs, message, isDifferentTexts = false) {
		inputs.forEach(input => {
			// Вызывает createErrorBlock для каждого поля ввода. Если isDifferentTexts равно true, message ожидается быть функцией.
			MessageController.createErrorBlock(input, isDifferentTexts ? message(input.dataset.limit) : message);
		});
	}
  
	/**
     * Находит ближайший родительский контейнер поля ввода, соответствующий определенному классу.
     * @param {HTMLElement} input - Элемент поля ввода, для которого нужно найти контейнер.
     * @returns {HTMLElement | null} - Ближайший родительский контейнер или null, если не найден.
     */
	static getInputContainer(input) {
		return input.closest(PenguinFormConstants.INPUT_CONTAINER_CLASS); // Использует метод closest для поиска ближайшего родительского элемента, соответствующего классу контейнера.
	}
  
	/**
     * Добавляет класс ошибки к контейнеру поля ввода для применения стилей ошибки.
     * @param {HTMLElement} input - Элемент поля ввода, к которому будет применено оформление ошибки.
     */
	static showErrorMessage(input) {
		MessageController.getInputContainer(input)?.classList.add(MessageController.errorClass); // Добавляет класс ошибки для визуального указания на ошибку.
	}
  
	/**
     * Удаляет класс ошибки с контейнера поля ввода, убирая стилизацию ошибки.
     * @param {HTMLElement} input - Элемент поля ввода, с которого будет убрано оформление ошибки.
     */
	static removeErrorMessage(input) {
		MessageController.getInputContainer(input)?.classList.remove(MessageController.errorClass); // Удаляет класс ошибки для снятия визуального указания на ошибку.
	}
}