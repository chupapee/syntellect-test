import { Autocomplete } from '@/features/autocomplete';
import { Title } from '@/shared/ui/title';

import styles from './styles.module.css';

export const AutocompleteWidget = () => {
	return (
		<div className={styles.wrapper}>
			<Title>Autocomplete</Title>
			<div className={styles.contentBox}>
				<Autocomplete initCount={3} />
				<Autocomplete initCount={10} />
			</div>
		</div>
	);
};
