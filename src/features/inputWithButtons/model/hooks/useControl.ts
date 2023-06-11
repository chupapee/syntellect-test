import { ChangeEvent, useState } from 'react';

import { ButtonType } from '../types';

const DEFAULT_REPLACE_TEXT = 'Hello, World!';

export const useControl = (initleftButtons?: ButtonType[], initRightButtons?: ButtonType[]) => {
	const [control, setControl] = useState('');
	const [leftButtons, setLeftButtons] = useState<ButtonType[]>(initleftButtons ?? []);
	const [rightButtons, setrightButtons] = useState<ButtonType[]>(initRightButtons ?? []);

	const changeSideBtn = (side: 'left' | 'right', index: number, newText: ButtonType) => {
		if (side === 'left') {
			const updated = leftButtons.map((prevText, i) => (i === index ? newText : prevText));
			setLeftButtons(updated);
		} else {
			const updated = rightButtons.map((prevText, i) => (i === index ? newText : prevText));
			setrightButtons(updated);
		}
	};

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

	return { control, handleControlChange, buttons, error, leftButtons, rightButtons, changeSideBtn };
};
