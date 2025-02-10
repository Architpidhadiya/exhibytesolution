/*const Calculator = require('./calculator')

test("Adds 2 + 3 toequal 5", () => {
    const calc = new Calculator()
    expect(calc.add(2, 3)).toBe(5)
})

test("Subtract 5 - 2 to equal 3", () => {
    const calc = new Calculator()
    expect(calc.subtract(5,2)).toBe(3)
})*/

const square = require("../calculator")
const { expect } = require("chai")

describe("Math Utilities", () => {
    it("should return square of 4 as 16 ", () => {
        expect(square(4)).to.equal(16)
    })

    it("should return square of -3 as 9 ", () => {
        expect(square(-3)).to.equal(9)
    })
})