import { ChangeEvent, useState } from 'react';

import { Input } from '@/shared/ui/input';

import { ButtonType } from '../../model/types';
import { renderButtons } from './renderButtons';
import styles from './styles.module.css';

interface IInputWithButtons {
	leftButtons?: ButtonType[];
	rightButtons?: ButtonType[];
}

const DEFAULT_REPLACE_TEXT = 'Hello, World!';

export const InputWithButtons = ({ leftButtons, rightButtons }: IInputWithButtons) => {
	const [controlVal, setControlVal] = useState('');
	const clearControl = () => setControlVal('');

	const [error, setError] = useState<string | null>(null);
	const clearError = () => setError(null);

	const handleControlChange = (e: ChangeEvent<HTMLInputElement>) => {
		clearError();
		setControlVal(e.target.value);
	};

	const replaceControlVal = () => setControlVal(DEFAULT_REPLACE_TEXT);

	const showText = () => {
		if (controlVal) {
			clearError();
			alert(controlVal);
		} else setError('Type something!');
	};

	const showNumber = () => {
		if (Number(controlVal)) {
			clearError();
			alert(controlVal);
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

	return (
		<div className={styles.main}>
			<div className={styles.side}>{renderButtons(buttons, leftButtons)}</div>
			<div className={styles.control}>
				<Input error={error} variant="outlined" value={controlVal} onChange={handleControlChange} />
			</div>
			<div className={styles.side}>{renderButtons(buttons, rightButtons)}</div>
		</div>
	);
};
