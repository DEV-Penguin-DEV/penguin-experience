export const PenguinFormConstants = {
	REQUIRED_INPUT_CLASS: '.required',
	REQUIRED_CHECKBOX_CLASS: '.checkbox-required',
	EMAILS_INPUT_CLASS: '.email',
	TEXT_LIMIT_INPUT_CLASS: '.text-limit',
	ERROR_CLASS: '.error',
	ERROR_TEXT_CLASS: '.error-text',
	INPUT_CONTAINER_CLASS: '.penguin-form__input-container',
};

export const PenguinFormErrorMessages = {
	REQUIRED_ERROR: 'Заполните пожалуйста данное поле',
	CHECKBOX_REQUIRED_ERROR: 'Поставьте пожалуйста галочку)',
	EMAIL_ERROR:
    'Email должен соответствовать данному формату example@example.com',
	LIMIT_TEXT_ERROR: (limitCount) => {
		let symbolsText;
		switch (limitCount) {
		case 0:
			symbolsText = 'символов';
			break;
		case 1:
			symbolsText = 'символ';
			break;
		case limitCount > 1 && limitCount < 5:
			symbolsText = 'символа';
			break;
		case limitCount >= 5:
			symbolsText = 'символов';
			break;
		}
		return `Данное поле имеет ограничение в ${limitCount} ${symbolsText}`;
	},
};