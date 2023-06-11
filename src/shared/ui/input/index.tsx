import { InputHTMLAttributes, PropsWithChildren } from 'react';

import styles from './styles.module.css';

interface IInput extends PropsWithChildren, InputHTMLAttributes<HTMLInputElement> {
	variant: 'contained' | 'outlined';
	error?: string | null;
}

export const Input = ({ variant, error, className, ...attrs }: IInput) => {
	return (
		<div className={styles.wrapper}>
			<input className={`${styles[variant]} ${styles.input} ${className}`} {...attrs} />
			{error && <p className={styles.error}>{error}</p>}
		</div>
	);
};
