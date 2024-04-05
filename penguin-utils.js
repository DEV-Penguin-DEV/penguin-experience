// `author` - DEV-Penguin-DEV[https://github.com/DEV-Penguin-DEV]

/**
 * Возвращает первый элемент, соответствующий указанному селектору, в пределах заданного родительского элемента или всего документа.
 * @param {string} selector - CSS селектор для поиска элемента.
 * @param {Element|Document} [parentEl=document] - Родительский элемент, в пределах которого будет осуществляться поиск. По умолчанию используется весь документ.
 * @returns {Element|null} Возвращает найденный элемент или `null`, если элемент не найден.
 */
export const get = (selector, parentEl = document) => {
	return parentEl.querySelector(selector);
};

/**
 * Возвращает все элементы, соответствующие указанному селектору, в пределах заданного родительского элемента или всего документа.
 * @param {string} selector - CSS селектор для поиска элементов.
 * @param {Element|Document} [parentEl=document] - Родительский элемент, в пределах которого будет осуществляться поиск. По умолчанию используется весь документ.
 * @returns {NodeList} Возвращает NodeList содержащий все найденные элементы. Если элементы не найдены, возвращает пустой NodeList.
 */
export const getAll = (selector, parentEl = document) => {
	return parentEl.querySelectorAll(selector);
};