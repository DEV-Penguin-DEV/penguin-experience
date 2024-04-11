import Swiper, { Navigation, Pagination } from 'swiper';
import './modal-gallery.scss';
import { getAll, get } from '../penguin-utils';
import { openModalWindow } from '../PENGUIN-Modal/penguin-modal';
import { PenguinGalleryConstants } from './constants';

let galleryModal;

/**
 * Инициализирует галерею, добавляя обработчики событий на элементы галереи.
 */
export const startGallery = () => {
	galleryModal = get(PenguinGalleryConstants.MODAL_CLASS);
	const galleries = getAll(PenguinGalleryConstants.GALLERY_CLASS);
  
	galleries.forEach(gallery => {
		gallery.addEventListener('click', evt => {
			// Находим элемент галереи, на который был совершен клик
			const target = evt.target.closest(PenguinGalleryConstants.GALLERY_ITEM_CLASS);
			if (!target) return; // Если элемент не найден, выходим из функции
  
			// Определяем индекс выбранного элемента
			let index;
			const slides = getAll('.swiper-wrapper > li', gallery);
			for (let i = 0; i < slides.length; i++) {
				index = slides[i].classList.contains('swiper-slide-active') ? i : -1;
				if (index != -1) break;
			}
			// Настраиваем модальное окно галереи и открываем его
			setupGalleryModal(gallery, index);
			openModalWindow(galleryModal);
		});
	});
};

/**
 * Настраивает модальное окно галереи, устанавливая содержимое и инициализируя Swiper.
 * @param {HTMLElement} gallery - Элемент текущей галереи.
 * @param {HTMLElement} galleryModal - Модальное окно для вставки галерее.
 * @param {number} initialSlide - Индекс начального слайда для отображения.
 */
function setupGalleryModal(gallery, initialSlide) {
	const currentGalleryModal = get(PenguinGalleryConstants.MODAL_CLASS);
	currentGalleryModal.innerHTML = galleryModal.innerHTML;
	const galleryModalContent = get(PenguinGalleryConstants.MODAL_CONTENT_CLASS, currentGalleryModal);
	galleryModalContent.innerHTML = get(PenguinGalleryConstants.SWIPER_WRAPPER_CLASS, gallery)?.outerHTML ?? ''; // Используем опциональную цепочку и логическое присваивание
  
	// Инициализируем Swiper с настройками
	new Swiper(galleryModalContent, getSwiperOptions(initialSlide));
}

/**
 * Возвращает объект настроек для инициализации Swiper.
 * @param {number} initialSlide - Индекс начального слайда.
 * @returns {Object} Объект настроек для Swiper.
 */
function getSwiperOptions(initialSlide) {
	// Возвращаем объект настроек
	return {
		modules: [Navigation, Pagination], // Включаем модули навигации и пагинации
		lazy: { loadPrevNext: true }, // Включаем ленивую загрузку для предыдущего и следующего слайдов
		slidesPerView: 1, // Один слайд видим во время просмотра
		slidesPerGroup: 1, // Перелистывание по одному слайду
		spaceBetween: 5, // Расстояние между слайдами
		initialSlide, // Начальный слайд
		pagination: { // Настройки пагинации
			el: `${PenguinGalleryConstants.MODAL_CLASS} .pagination`,
			clickable: true,
		},
		navigation: { // Настройки навигационных кнопок
			nextEl: `${PenguinGalleryConstants.MODAL_CLASS} .swiper-button-next`,
			prevEl: `${PenguinGalleryConstants.MODAL_CLASS} .swiper-button-prev`,
		},
	};
}