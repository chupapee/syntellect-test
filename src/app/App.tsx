import { Circles } from '@/shared/ui/animation/Circles';
import { AutocompleteWidget } from '@/widgets/autocomplete';
import { Control } from '@/widgets/control';

import styles from './styles.module.css';

export const App = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.contentBox}>
				<Control />
				<AutocompleteWidget />
			</div>
			<Circles />
		</div>
	);
};
