import { selectByProp } from '@/shared/helpers/selectByProp';
import { Button } from '@/shared/ui/button';

import { ButtonType, IButton } from '../model/types';

export const renderButtons = (buttons: IButton[], sideButtons?: ButtonType[]) => {
	return sideButtons?.map((text) => {
		const btn = selectByProp(buttons, 'text', text);
		if (btn) {
			return (
				<Button key={btn.id} onClick={btn.method} variant="contained">
					{btn.text}
				</Button>
			);
		}
		return null;
	});
};
