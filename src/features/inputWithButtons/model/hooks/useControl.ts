import { ChangeEvent, useState } from 'react';

const DEFAULT_REPLACE_TEXT = 'Hello, World!';

export const useControl = () => {
	const [control, setControl] = useState('');
	const clearControl = () => setControl('');

	const [error, setError] = useState<string | null>(null);
	const clearError = () => setError(null);

	const handleControlChange = (e: ChangeEvent<HTMLInputElement>) => {
		clearError();
		setControl(e.target.value);
	};

	const replaceControlVal = () => setControl(DEFAULT_REPLACE_TEXT);

	const showText = () => {
		if (control) {
			clearError();
			alert(control);
		} else setError('Type something!');
	};

	const showNumber = () => {
		if (Number(control)) {
			clearError();
			alert(control);
		} else {
			setError('Not a number');
		}
	};

	const buttons = [
		{
			id: 0,
			method: showNumber,
			text: 'Show number',
		},
		{
			id: 1,
			method: replaceControlVal,
			text: 'Set text',
		},
		{
			id: 2,
			method: showText,
			text: 'Show text',
		},
		{
			id: 3,
			method: clearControl,
			text: 'Clear',
		},
	];

	return { control, handleControlChange, buttons, error };
};
