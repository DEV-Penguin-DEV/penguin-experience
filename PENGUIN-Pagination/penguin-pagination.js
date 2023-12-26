const paginations = document.querySelectorAll('.gallery');
let CARDS_PER_PAGE = 0;
const NUMBER_LINK_TEMPLATE = (
	number,
	isActive = false
) => `<div class="pagination__number ${
	isActive ? 'pagination__number--active' : ''
}"> ${number}
              </div>`;

export const startPagination = (cardsPerPage) => {
	CARDS_PER_PAGE = cardsPerPage;
	paginations.forEach((pagination) => {
		const paginationItems = pagination.querySelectorAll('.gallery__item'); // Все элементы
		const pageCount = Math.ceil(paginationItems.length / CARDS_PER_PAGE); // Количество страниц
		let currentPage = pagination.dataset.currentPage; // Текущая страницы
		const leftButton = document.querySelector('.pagination__arrow--left'); // Кнопка влево
		const rightButton = document.querySelector('.pagination__arrow--right'); // Кнопка вправо
		const numberLinksContainer = document.querySelector(
			'.pagination__container'
		); // Контейнер номеров страниц

		// Добавляем номера страниц для пагинации
		if (pageCount == 0) {
			const newLink = document.createElement('div');
			newLink.innerHTML = NUMBER_LINK_TEMPLATE(1, true);
			numberLinksContainer.append(newLink);
		} else {
			for (let i = 1; i <= pageCount; i++) {
				const newLink = document.createElement('div');
				newLink.innerHTML = NUMBER_LINK_TEMPLATE(i, i == 1);
				numberLinksContainer.append(newLink);
			}
		}

		changePage(paginationItems, currentPage); // Показываем текущие элементы и скрываем не нужные

		// Клик по левой кнопке, если текущая страница не первая то он листает страницу влево
		leftButton.addEventListener('click', () => {
			if (currentPage <= 1) {
				return;
			}
			currentPage--;
			changePage(paginationItems, currentPage);
			changeActiveLink(currentPage);
		});

		// Клик по правоц кнопке, если текущая страница не последняя то он листает страницу вправо
		rightButton.addEventListener('click', () => {
			if (currentPage >= pageCount) {
				return;
			}
			currentPage++;
			changePage(paginationItems, currentPage);
			changeActiveLink(currentPage);
		});

		// Клик по определённому номеру страницы
		numberLinksContainer.addEventListener('click', (evt) => {
			const target = evt.target;
			currentPage = Number(target.textContent);
			changePage(paginationItems, currentPage);
			changeActiveLink(currentPage);
		});
	});
};

/**
 * Функция отображает текущие элементы и скрывает не нужные
 * @param {Array<NodeList>} paginationItems массив со всеми блоками контента
 * @param {Number} currentPage номер текущей страницы
 */
const changePage = (paginationItems, currentPage) => {
	paginationItems.forEach((paginationItem, index) => {
		paginationItem.classList.add('hide'); // Прячет не нужные элементы
		if (
			index >= (currentPage - 1) * CARDS_PER_PAGE &&
      index < currentPage * CARDS_PER_PAGE
		) {
			paginationItem.classList.remove('hide'); // Показывает текущие элементы
		}
	});
};
/**
 * Функция меняет текущий номер страницы
 * @param {number} currentPage номер текущей страницы
 */
const changeActiveLink = (currentPage) => {
	const numberLinksContainer = document.querySelector('.pagination__container'); // Контейнер номеров страниц
	const links = numberLinksContainer.querySelectorAll('.pagination__number'); // Номера страницы
	numberLinksContainer
		.querySelector('.pagination__number--active')
		?.classList.remove('pagination__number--active'); // Убирает стили у предыдущего активного номера страницы
	links[currentPage - 1].classList.add('pagination__number--active'); // Выделяет текущий номер страницы
};

startPagination();
