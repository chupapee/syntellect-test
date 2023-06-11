import { InputHTMLAttributes, ReactNode } from 'react';

import { Input } from '../input';
import styles from './styles.module.css';

interface ISearchDropdown extends InputHTMLAttributes<HTMLInputElement> {
	options: unknown[];
	loading: boolean;
	error: string | null;
	children: ReactNode;
}

export const SearchDropdown = ({ options, loading, error, children, value, ...attrs }: ISearchDropdown) => {
	return (
		<div className={styles.wrapper}>
			<Input {...attrs} value={value} className={styles.search} variant="contained" />
			<div className={styles.menu}>
				{options.length > 0 ? (
					children
				) : (
					<div className={styles.fallback}>
						{loading && <p>loading...</p>}
						{value && error && <p>{error}</p>}
					</div>
				)}
			</div>
		</div>
	);
};
