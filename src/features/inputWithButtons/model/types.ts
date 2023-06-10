export interface IButton {
	id: number;
	method: () => void;
	text: string;
}

export type TSide = 'left' | 'right';
