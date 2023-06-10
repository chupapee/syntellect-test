import { Autocomplete } from '@/features/autocomplete';
import { InputWithButtons } from '@/features/inputWithButtons';

import styles from './styles.module.css';

export const App = () => {
	return (
		<div className={styles.wrapper}>
			<div>
				<p className={styles.title}>First control</p>
				<InputWithButtons rightButtons={['Clear', 'Set text']} />
				<InputWithButtons leftButtons={['Show number']} rightButtons={['Show text']} />
			</div>
			<div>
				<p className={styles.title}>Autocomplete</p>
				<Autocomplete maxCount={3} />
			</div>
		</div>
	);
};
