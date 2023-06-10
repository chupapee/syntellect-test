import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react';

import styles from './styles.module.css';

interface IButton extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'contained' | 'outlined';
	children: ReactNode;
}

export const Button = ({ children, variant, ...attrs }: IButton) => {
	return (
		<button className={`${styles[variant]} ${styles.main}`} {...attrs}>
			{children}
		</button>
	);
};
