export interface IButton {
	id: number;
	method: () => void;
	text: string;
}

export type ButtonType = 'Show number' | 'Show text' | 'Set text' | 'Clear';
