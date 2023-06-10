import { Autocomplete } from '@/features/autocomplete';
import { InputWithButtons } from '@/features/inputWithButtons';

export const App = () => {
	return (
		<div>
			<InputWithButtons leftBtnExists={true} rightBtnExists={true} />
			<Autocomplete maxCount={3} />
		</div>
	);
};
