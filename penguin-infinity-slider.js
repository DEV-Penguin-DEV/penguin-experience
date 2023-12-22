// `author` - DEV-Penguin-DEV[https://github.com/DEV-Penguin-DEV]

/* eslint-disable no-undef */
const elements = document.querySelectorAll('.clients__list');
const GAP = 40;
const SLIDER_WIDTH = elements[0].offsetWidth + GAP;
const keyframes = new KeyframeEffect(
	elements[0], // Первый элемент, к которому применяется анимация
	[
		{ transform: 'translateX(0)' },
		{ transform: `translateX(-${SLIDER_WIDTH}px)`, offset: 0.5 },
		{ transform: `translateX(${SLIDER_WIDTH}px)`, offset: 0.501 },
		{ transform: 'translateX(0)', offset: 1 }
	],
	{
		duration: 50_000, // 50s
		iterations: Infinity,
		easing: 'linear'
	}
);

const keyframes2 = new KeyframeEffect(
	elements[1], // Второй элемент, к которому применяется анимация
	[
		{ transform: `translateX(${SLIDER_WIDTH}px)` },
		{ transform: `translateX(-${SLIDER_WIDTH}px)`, offset: 1 }
	],
	{
		duration: 50_000, // 50s
		iterations: Infinity,
		easing: 'linear'
	}
);

const animation = new Animation(keyframes, document.timeline);
const animation2 = new Animation(keyframes2, document.timeline);

export const startSlider = () => {
	animation.play();
	animation2.play();
};

