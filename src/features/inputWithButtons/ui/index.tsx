import { Input } from '@/shared/ui/input';

import { useControl } from '../model/hooks/useControl';
import { ButtonType } from '../model/types';
import { renderButtons } from './renderButtons';
import styles from './styles.module.css';

interface IInputWithButtons {
	leftButtons?: ButtonType[];
	rightButtons?: ButtonType[];
}

export const InputWithButtons = ({ leftButtons, rightButtons }: IInputWithButtons) => {
	const { control, handleControlChange, buttons, error } = useControl();

	return (
		<div className={styles.main}>
			<div className={styles.side}>{renderButtons(buttons, leftButtons)}</div>
			<div className={styles.control}>
				<Input error={error} variant="outlined" value={control} onChange={handleControlChange} />
			</div>
			<div className={styles.side}>{renderButtons(buttons, rightButtons)}</div>
		</div>
	);
};
