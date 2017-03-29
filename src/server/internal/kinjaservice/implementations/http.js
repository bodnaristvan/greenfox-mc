import fetch from 'node-fetch';
import { validateModel, PostModel } from '../../../models/post';
import unwrapEnvelope from '../utils/unwrapEnvelope';

function KinjaService() {
	return Object.freeze({
		getPost: function (postId) {
			return fetch(`https://kinja.com/api/core/post/${postId}`)
				.then((response) => response.json())
				.then(unwrapEnvelope)
				.then(validateModel)
				.then((rawData) => new PostModel(rawData))
		}
	})
}

module.exports = KinjaService;
