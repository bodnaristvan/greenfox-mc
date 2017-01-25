/* global describe, it, expect */
import atoint from './atoint'

const numNumber = 123
const numString = "123"
const numFloat = 123.723
const invalidString = "onetwothree"

describe('atoint', () => {
	it('should parse a number stored as a string', () => {
		expect(atoint(numString)).toBe(123)
	})
	it('should parse a number stored as a number', () => {
		expect(atoint(numNumber)).toBe(123)
	})
	it('should return a float as an integer', () => {
		expect(atoint(numFloat)).toBe(123)
	})
	it('should throw an error when converting non-numeric strings', () => {
		expect(() => {
			atoint(invalidString)
		}).toThrow()
	})
})
