import { HTMLAttributes } from 'react';

import styles from './styles.module.css';

type ITitle = HTMLAttributes<HTMLParagraphElement>;

export const Title = ({ className, children, ...attrs }: ITitle) => {
	return (
		<p className={`${styles.main} ${className}`} {...attrs}>
			{children}
		</p>
	);
};
