import { ChangeEvent, useState, useTransition } from 'react';

import { CountryInfo } from '@/api/apiService';

import { useCountries } from '../model/helpers/useCountries';

interface IAutocomplete {
	maxCount?: number;
}

export const Autocomplete = ({ maxCount }: IAutocomplete) => {
	const [controlVal, setControlVal] = useState('');
	const [isPending, startTransition] = useTransition();

	const { fetchCountries, countries, status, error } = useCountries(maxCount);

	const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
		const val = e.target.value;
		setControlVal(val);
		startTransition(() => {
			fetchCountries(val);
		});
	};

	const selectCountry = (country: CountryInfo) => {
		setControlVal(country.fullName);
	};

	return (
		<div>
			<h1>Autocomplete</h1>
			<input value={controlVal} onChange={handleChange} />
			{(status === 'loading' || isPending) && <p>Loading...</p>}
			{countries.map((c) => (
				<div key={c.name}>
					<button onClick={() => selectCountry(c)}>
						<p>{c.name}</p>
						<img src={c.flag} alt={c.name} />
						<p>{c.fullName}</p>
					</button>
				</div>
			))}
			{status === 'error' && <h2>{error}</h2>}
		</div>
	);
};
