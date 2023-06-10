export const selectByProp = <T, K extends keyof T>(array: T[], prop: K, value: T[K]) => {
	return array.find((item) => item[prop] === value);
};
