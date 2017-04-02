const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
const calculator = require('./Calculator.js');

describe("Calculator", () => {
    it("should be initiated", () => {
        expect(calculator).to.not.undefined;
    })
    describe("#add()", () => {
        it("should return NaN when no parameter send", () => {
            var actual = calculator.add();;
            var expected = NaN;
            expect(actual).to.NaN;
        })
        it("should return NaN when invalid parameter send", () => {
            var actual = calculator.add('abc', 5);;
            var expected = NaN;
            expect(actual).to.NaN;
        })
        it("should return addition when valid parameter send", () => {
            var actual = calculator.add(6, 5);;
            var expected = 11;
            expect(actual).to.equal(expected);
        })
    })
    describe("#subtract()", () => {
        it("should return NaN when no parameter send", () => {
            var actual = calculator.add();;
            var expected = NaN;
            expect(actual).to.NaN;
        })
        it("should return NaN when invalid parameter send", () => {
            var actual = calculator.add('abc', 5);;
            var expected = NaN;
            expect(actual).to.NaN;
        })
        it("should return subtracted value when valid parameter send", () => {
            var actual = calculator.subtract(6, 5);;
            var expected = 1;
            expect(actual).to.equal(expected);
        })
    })
})
