function parseQueryString(queryString: string) {
	if (!queryString) return;
	const keyValuePairs = queryString.split("&");
	const result = {};

	for (const pair of keyValuePairs) {
		const [key, value] = pair.split("=");
		result[key] = value;
	}

	return result;
}
export default parseQueryString;
