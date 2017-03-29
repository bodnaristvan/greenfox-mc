import { validateModel, PostModel } from '../../../models/post';
import unwrapEnvelope from '../utils/unwrapEnvelope';

function KinjaService() {
	return Object.freeze({
		getPost: function () {
			const rawData = require('../fixtures/post.json');
			const postData = unwrapEnvelope(rawData);
			const validData = validateModel(postData);
			return new PostModel(validData);
		}
	})
}

module.exports = KinjaService;
