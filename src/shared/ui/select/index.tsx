import { PropsWithChildren, ReactNode, SelectHTMLAttributes } from 'react';

import styles from './styles.module.css';

interface ISelect extends PropsWithChildren, SelectHTMLAttributes<HTMLSelectElement> {
	children: ReactNode;
}

export const Select = ({ children, className, ...attrs }: ISelect) => {
	return (
		<select className={styles.main} {...attrs}>
			{children}
		</select>
	);
};
