const Calculator = require('./calculator')

/*test("Adds 2 + 3 toequal 5", () => {
    const calc = new Calculator()
    expect(calc.add(2, 3)).toBe(5)      //Function test
})

test("Subtract 5 - 2 to equal 3", () => {
    const calc = new Calculator()
    expect(calc.subtract(5,2)).toBe(3)
})*/

/*test('should return a user object', () => {
    const user = Calculator()          //Object test
    expect(user).toEqual({
      name: 'Archit',
      age: 21
    })
})*/

test('fetches data successfully', () => {     //Asynchronous code
  return Calculator().then(data => {
    expect(data).toBe('Data fetched!');
  });
});