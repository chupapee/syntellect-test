import { InputWithButtons } from '@/features/inputWithButtons';
import { Title } from '@/shared/ui/title';

import styles from './styles.module.css';

export const Control = () => {
	return (
		<div className={styles.wrapper}>
			<Title>Control</Title>
			<div className={styles.contentBox}>
				<InputWithButtons initRightButtons={['Clear', 'Set text']} />
				<InputWithButtons initLeftButtons={['Show number']} initRightButtons={['Show text']} />
			</div>
		</div>
	);
};
