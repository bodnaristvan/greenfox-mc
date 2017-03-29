import validate from '../lib/validate';
import VError from 'verror';

export function validateModel({headline, id, body}) {
	validate.string(
		headline,
		new VError(`[PostModel] headline must be a string, got "${headline}" (${typeof headline})`)
	);
	validate.number(
		id,
		new VError(`[PostModel] id must be a number, got "${id}" (${typeof id})`)
	);
	return {headline, id, body};
}

export class PostModel {
	constructor({headline, id, body}) {
		this.headline = headline;
		this.id = id;
		this.body = body;
	}
}
