/* global describe, it  */
import {renderText} from './postBodyParser';
import {expect} from 'chai';

describe('postBodyParser', function () {
	describe('renderText', function () {
		it('should render text from container', function () {
			const renderedText = renderText({value: 'igen'});
			expect(renderedText).to.eql('igen');
		})
	});
});
