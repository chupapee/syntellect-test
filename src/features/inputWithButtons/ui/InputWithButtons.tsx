import { ChangeEvent, useState } from 'react';

import { selectByProp } from '@/shared/helpers/selectByProp';

import { TSide } from '../model/types';
import { BtnWithSelect } from './BtnWithSelect';

interface IInputWithButtons {
	leftBtnExists: boolean;
	rightBtnExists: boolean;
}

const DEFAULT_REPLACE_TEXT = 'Hello, World!';

export const InputWithButtons = ({ leftBtnExists = true, rightBtnExists }: IInputWithButtons) => {
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
			text: `Set "${DEFAULT_REPLACE_TEXT}"`,
		},
		{
			id: 2,
			method: showText,
			text: 'Show control text',
		},
		{
			id: 3,
			method: clearControl,
			text: 'Clear control',
		},
	];

	const [leftBtnId, setLeftBtnId] = useState(buttons[0].id);
	const [rightBtnId, setRightBtnId] = useState(buttons[1].id);

	const handleChangeBtn = (id: number, side: TSide) => {
		const changedBtn = selectByProp(buttons, 'id', id);
		if (changedBtn) {
			if (side === 'left') setLeftBtnId(changedBtn.id);
			else setRightBtnId(changedBtn.id);
		}
	};

	return (
		<div style={{ display: 'flex', gap: 4 }}>
			{leftBtnExists && (
				<BtnWithSelect buttons={buttons} selectedBtnId={leftBtnId} side="left" onSelect={handleChangeBtn} />
			)}
			<input value={controlVal} onChange={handleControlChange} />
			{rightBtnExists && (
				<BtnWithSelect buttons={buttons} selectedBtnId={rightBtnId} side="right" onSelect={handleChangeBtn} />
			)}
			{error && <div>{error}</div>}
		</div>
	);
};
