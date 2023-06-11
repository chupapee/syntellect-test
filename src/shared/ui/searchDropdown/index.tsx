import { ChangeEvent, ReactNode } from 'react';

import { Input } from '../input';
import styles from './styles.module.css';

interface ISearchDropdown {
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	options: unknown[];
	loading: boolean;
	error: string | null;
	children: ReactNode;
}

export const SearchDropdown = ({ value, onChange, options, loading, error, children }: ISearchDropdown) => {
	return (
		<div className={styles.wrapper}>
			<Input className={styles.search} variant="contained" value={value} onChange={onChange} />
			<div className={styles.menu}>
				{options.length > 0 ? (
					<>{children}</>
				) : (
					<div className={styles.fallback}>
						{value.length > 0 && error ? <p>{error}</p> : loading && <p>loading...</p>}
					</div>
				)}
			</div>
		</div>
	);
};
