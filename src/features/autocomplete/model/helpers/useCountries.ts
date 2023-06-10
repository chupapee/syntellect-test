import { useState } from 'react';

import { CountryInfo, getCountryByName } from '@/api/apiService';
import { timeout } from '@/shared/helpers/timeout';

export function useCountries(maxCount?: number) {
	const [countries, setCountries] = useState<CountryInfo[]>([]);
	const [status, setStatus] = useState<'loading' | 'error' | 'success' | null>(null);
	const [error, setError] = useState<string | null>(null);

	const fetchCountries = async (value: string) => {
		if (value.length > 0) {
			try {
				setStatus('loading');
				setCountries([]);
				const list = await getCountryByName(value);
				await timeout(300);
				if (list.length > 0) {
					setCountries(list.slice(0, maxCount));
					setStatus('success');
				} else {
					throw new Error('Countries not found!');
				}
			} catch (error) {
				setStatus('error');
				if (error instanceof Error) {
					setError(error.message);
				} else setError('Oops.. Something went wrong!');
			}
		} else {
			setStatus('success');
			setCountries([]);
		}
	};

	return { fetchCountries, countries, status, error };
}
