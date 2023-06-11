import { ChangeEvent, useEffect, useState } from 'react';

import { MenuItem } from '@/shared/ui/menuItem';
import { SearchDropdown } from '@/shared/ui/searchDropdown';
import { Select } from '@/shared/ui/select';

import { useCountries } from '../model/helpers/useCountries';
import styles from './styles.module.css';

interface IAutocomplete {
	initCount: number;
}

const availableCounts = [3, 5, 8, 10, 15];

export const Autocomplete = ({ initCount }: IAutocomplete) => {
	const [count, setCount] = useState(initCount);
	const handleCountChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setCount(Number(e.target.value));
	};

	const [controlVal, setControlVal] = useState('');
	const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
		const val = e.target.value;
		setControlVal(val);
	};

	const { fetchCountries, countries, status, error } = useCountries(count);

	useEffect(() => {
		if (controlVal.length > 0) fetchCountries(controlVal);
	}, [controlVal, count]);

	const selectCountry = (countryName: string) => {
		setControlVal(countryName);
	};

	return (
		<div className={styles.wrapper}>
			<SearchDropdown
				value={controlVal}
				onChange={handleChange}
				loading={status === 'loading'}
				options={controlVal.length > 0 ? countries : []}
				error={status === 'error' ? error : null}
			>
				{countries.map((c) => (
					<MenuItem key={c.name} mainVal={c.fullName} addtVal={c.name} img={c.flag} onClick={selectCountry} />
				))}
			</SearchDropdown>
			<Select onChange={handleCountChange} defaultValue={count}>
				{availableCounts.map((c) => (
					<option key={c} value={c}>
						{c}
					</option>
				))}
			</Select>
		</div>
	);
};
