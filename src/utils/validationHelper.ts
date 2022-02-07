export const isInputNotNull = (value: any) => {
	return value.length > 3;
};

export const isInputFilled = (value: any) => {
	return value.length > 0;
};

export const isInputNumeric = (value: any) => {
	return value.match(/^[0-9]*$/gm);
};

export const isEmailValid = (value: any) => {
	return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
};

export const isNumericInputValid = (value: any) => {
	if (value !== undefined) {
		return value === null || value.toString().length === 0 || value > 100;
	}
};
