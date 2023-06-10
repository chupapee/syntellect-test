import { PropsWithChildren, ReactNode, SelectHTMLAttributes } from 'react';

interface ISelect extends PropsWithChildren, SelectHTMLAttributes<HTMLSelectElement> {
	children: ReactNode;
}

export const Select = ({ children, ...attrs }: ISelect) => {
	return <select {...attrs}>{children}</select>;
};
