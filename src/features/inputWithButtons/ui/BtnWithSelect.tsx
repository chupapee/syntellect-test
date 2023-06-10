import { ChangeEvent, useState } from 'react';

import { selectByProp } from '@/shared/helpers/selectByProp';
import { Select } from '@/shared/ui/Select';

import { IButton, TSide } from '../model/types';

interface IBtnWithSelect {
	buttons: IButton[];
	side: TSide;
	selectedBtnId: number;
	onSelect: (id: number, side: TSide) => void;
}

export const BtnWithSelect = ({ buttons, selectedBtnId, onSelect, side }: IBtnWithSelect) => {
	const [changing, setChanging] = useState(false);

	const initChanging = () => setChanging(true);

	const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
		setChanging(false);
		onSelect(Number(e.target.value), side);
	};

	const selectedBtn = selectByProp(buttons, 'id', selectedBtnId);

	return (
		<div>
			{side === 'left' && (
				<button onClick={initChanging} disabled={changing}>
					Change button
				</button>
			)}
			{changing ? (
				<Select onChange={handleSelect} defaultValue={selectedBtn?.id}>
					{buttons.map(({ id, text }) => (
						<option key={id} value={id}>
							{text}
						</option>
					))}
				</Select>
			) : (
				<button onClick={selectedBtn?.method}>{selectedBtn?.text}</button>
			)}
			{side === 'right' && (
				<button onClick={initChanging} disabled={changing}>
					Change button
				</button>
			)}
		</div>
	);
};
