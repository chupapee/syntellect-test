import { selectByProp } from '@/shared/helpers/selectByProp';
import { Button } from '@/shared/ui/button';

import { IButton } from '../../model/types';

export const renderButton = (buttons: IButton[], text: string) => {
	const btn = selectByProp(buttons, 'text', text);
	if (btn)
		return (
			<Button key={btn.id} onClick={btn.method} variant="contained">
				{btn.text}
			</Button>
		);
};
