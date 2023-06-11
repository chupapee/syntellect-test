import { ChangeEvent, useState } from 'react';

import { Button } from '@/shared/ui/button';
import { Select } from '@/shared/ui/select';

import { ButtonType, IButton } from '../../model/types';
import { renderButton } from './renderButton';
import styles from './styles.module.css';

interface IButtonsWithSelect {
	buttons: IButton[];
	sideButtons: ButtonType[];
	side: 'left' | 'right';
	changeSideBtn: (side: 'left' | 'right', index: number, text: ButtonType) => void;
}

export const ChangeableButtons = ({ buttons, sideButtons, side, changeSideBtn }: IButtonsWithSelect) => {
	const [changingId, setChangingId] = useState<number | null>(null);

	const initChange = (index: number) => {
		setChangingId(index);
	};

	const handleChangeBtn = (index: number, e: ChangeEvent<HTMLSelectElement>) => {
		changeSideBtn(side, index, e.target.value as ButtonType);
		setChangingId(null);
	};

	return (
		<div className={styles.wrapper}>
			{sideButtons.map((text, i) => (
				<div key={i} className={styles.buttons}>
					{side === 'left' && (
						<Button variant="outlined" onClick={() => initChange(i)}>
							change
						</Button>
					)}
					{changingId === i ? (
						<Select className={styles.select} defaultValue={text} onChange={(e) => handleChangeBtn(i, e)}>
							{buttons.map(({ id, text }) => (
								<option key={id} value={text}>
									{text}
								</option>
							))}
						</Select>
					) : (
						renderButton(buttons, text)
					)}
					{side === 'right' && (
						<Button variant="outlined" onClick={() => initChange(i)}>
							change
						</Button>
					)}
				</div>
			))}
		</div>
	);
};
