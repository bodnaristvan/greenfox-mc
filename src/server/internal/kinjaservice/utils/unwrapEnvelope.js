export default function unwrapEnvelope(response) {
	if (response.meta.error !== null || !response.data) {
		throw new Error('Error unwrapping API envelope');
	}
	return response.data;
}
