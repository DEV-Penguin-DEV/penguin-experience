import './penguin-modal.scss';

export const closeModalWindow = (modal) => {
	modal.classList.remove('active');
	modal.style.transform = 'translate(-50%, -50%) scale(0)';
	window.setTimeout(() => (modal.style.zIndex = '-10000'), 500);
	if (modal.classList.contains('custom-modal')) {
		modal.remove();
	}
};

export const closeModalWindowShadow = (modal) => {
	closeModalWindow(modal);
	const shadowDomElement = document.querySelector('.modal-window-shadow');
	if (shadowDomElement) {
		shadowDomElement.classList.remove('active');
	}
	document.querySelector('body').style.height = '';
	document.querySelector('body').style.overflowY = '';
};

export const addModalStyle = (
	modal,
	animationDuration = 500,
	isMobile = false
) => {
	modal.style = `
      transition: ${animationDuration}ms;
      display: block;
      position: fixed;
      will-change: transform;
      `;

	const viewportHeight = window.innerHeight;
	const modalHeight = modal.getBoundingClientRect().height;

	modal.style.top = isMobile && modalHeight > viewportHeight ? '0' : '50%';
	modal.style.left = '50%';
	modal.style.transform = isMobile
		? 'translateX(-50%) scale(0)'
		: 'translate(-50%, -50%) scale(0)';
};

export const openModalWindow = (modal, isMobile = false, isFirst = true) => {
	modal.classList.add('active');
	modal.style.zIndex = '10000';

	const viewportHeight = window.innerHeight;
	const modalHeight = modal.getBoundingClientRect().height;

	modal.style.transform =
    isMobile && modalHeight > viewportHeight ? 'translateX(-50%) scale(1)' : 'translate(-50%, -50%) scale(1)';
	document.querySelector('body').style.overflowY = 'hidden';

	const modalCloseButtons = modal.querySelectorAll('[data-fancybox-close]');
	
	modalCloseButtons.forEach((modalCloseButton) => {
		modalCloseButton.addEventListener('click', closeModal);
	});

	if (isFirst) {
		window.setTimeout(
			() => document.body.addEventListener('click', onWindowClick),
			500
		);
	}

	const shadowElement = document.querySelector('.modal-window-shadow');

	shadowElement.classList.add('active');

	function onWindowClick(evt) {
		if (!evt.target.closest('.c-modal')) {
			closeModal();
		}
	}

	function closeModal() {
		const activeModals = document.querySelectorAll('.c-modal.active');

		activeModals.forEach((modalEl) => {
			closeModalWindowShadow(modalEl);
		});

		modalCloseButtons.forEach((modalCloseButton) => {
			modalCloseButton.removeEventListener('click', closeModal);
		});
		document.body.removeEventListener('click', onWindowClick);
	}
};

export const startModals = () => {
	const isMobile = window.matchMedia('(max-width: 1024px)').matches;
	const shadowElement = document.createElement('div');
	shadowElement.classList.add('modal-window-shadow');
	document.body.appendChild(shadowElement);
	
	const modalsButtons = document.querySelectorAll('.c-modal__button');
	if (modalsButtons.length <= 0) {
		return;
	}
	
	modalsButtons.forEach((modalButton) => {
		const modal = document.querySelector(modalButton.dataset.src);
		addModalStyle(modal, 500, isMobile);

		const modalCloseButtons = modal.querySelectorAll('[data-fancybox-close]');

		if (modalCloseButtons.length <= 0) {
			const closeModalButton = document.createElement('button');
			closeModalButton.setAttribute('data-fancybox-close', '');
			closeModalButton.setAttribute('type', 'button');
			closeModalButton.innerHTML =
									'<span class="visually-hidden">Кнопка закрытия модального окна</span>';
			modal.appendChild(closeModalButton);
		}

		modalButton.addEventListener('click', (evt) => {
			evt.preventDefault();
			const oldModal = document.querySelector('.c-modal.active');
			if (oldModal) {
				closeModalWindow(oldModal);
			}

			openModalWindow(modal, isMobile);
		});
	});
};
