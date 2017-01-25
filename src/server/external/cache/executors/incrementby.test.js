/* global describe, it, expect */
import incrementBy from './incrementBy'

describe('incrementBy', () => {
	it('should increment the original value by amount', () => {
		expect(incrementBy(1, 1)).toBe(2)
	})
})
