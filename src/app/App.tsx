import { Autocomplete } from '@/features/autocomplete';
import { InputWithButtons } from '@/features/inputWithButtons';

import styles from './styles.module.css';

export const App = () => {
	return (
		<div className={styles.wrapper}>
			<p className={styles.title}>First control</p>
			<div className={styles.firstControl}>
				<InputWithButtons initRightButtons={['Clear', 'Set text']} />
				<InputWithButtons initLeftButtons={['Show number']} />
			</div>
			<p className={styles.title}>Autocomplete</p>
			<div className={styles.autocomplete}>
				<Autocomplete initCount={3} />
				<Autocomplete initCount={10} />
			</div>
		</div>
	);
};
