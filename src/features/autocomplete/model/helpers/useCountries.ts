import { useState } from 'react';

import { CountryInfo, getCountryByName } from '@/api/apiService';

export function useCountries(maxCount?: number) {
	const [countries, setCountries] = useState<CountryInfo[]>([]);
	const [status, setStatus] = useState<'loading' | 'error' | 'success' | null>(null);
	const [error, setError] = useState<string | null>(null);

	const fetchCountries = async (value: string) => {
		try {
			setStatus('loading');
			const list = await getCountryByName(value);
			if (list.length > 0) {
				setCountries(list.slice(0, maxCount));
				setStatus('success');
			} else {
				throw new Error('Countries not found!');
			}
		} catch (error) {
			setStatus('error');
			setCountries([]);
			if (error instanceof Error) {
				setError(error.message);
			} else setError('Oops.. Something went wrong!');
		}
	};

	return { fetchCountries, countries, status, error };
}
