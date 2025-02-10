const Calculator = require('./calculator')

test("Adds 2 + 3 toequal 5", () => {
    const calc = new Calculator()
    expect(calc.add(2, 3)).toBe(5)
})

test("Subtract 5 - 2 to equal 3", () => {
    const calc = new Calculator()
    expect(calc.subtract(5,2)).toBe(3)
})