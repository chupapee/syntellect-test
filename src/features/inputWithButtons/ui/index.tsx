import { Input } from '@/shared/ui/input';

import { useControl } from '../model/hooks/useControl';
import { ButtonType } from '../model/types';
import { ChangeableButtons } from './changeableButtons';
import styles from './styles.module.css';

interface IInputWithButtons {
	initLeftButtons?: ButtonType[];
	initRightButtons?: ButtonType[];
}

export const InputWithButtons = ({ initLeftButtons, initRightButtons }: IInputWithButtons) => {
	const { control, handleControlChange, buttons, leftButtons, rightButtons, changeSideBtn, error } = useControl(
		initLeftButtons,
		initRightButtons
	);

	return (
		<div className={styles.main}>
			<div className={styles.side}>
				<ChangeableButtons
					buttons={buttons}
					sideButtons={leftButtons}
					side="left"
					changeSideBtn={changeSideBtn}
				/>
			</div>
			<div className={styles.control}>
				<Input error={error} variant="outlined" value={control} onChange={handleControlChange} />
			</div>
			<div className={styles.side}>
				<ChangeableButtons
					buttons={buttons}
					sideButtons={rightButtons}
					side="right"
					changeSideBtn={changeSideBtn}
				/>
			</div>
		</div>
	);
};
