const Calculator = require('./calculator')
//const renderer = require('react-test-renderer');
//const Button = require('./test')

//const test = require('./test')
/*test("Adds 2 + 3 toequal 5", () => {
    const calc = new Calculator()
    expect(calc.add(2, 3)).toBe(5)      //Function test
})

test("Subtract 5 - 2 to equal 3", () => {
    const calc = new Calculator()
    expect(calc.subtract(5,2)).toBe(3)
})*/0

/*test('should return a user object', () => {
    const user = Calculator()          //Object test
    expect(user).toEqual({
      name: 'Archit',
      age: 21
    })
})*/

/*test('fetches data successfully', () => {     //Asynchronous code
  return Calculator().then(data => {
    expect(data).toBe('Data fetched!');
  });
});*/

/*const mockCallback = jest.fn(x => 42 + x);

test('forEach mock function', () => {
  Calculator([0, 1], mockCallback);

  expect(mockCallback.mock.calls).toHaveLength(2);

  expect(mockCallback.mock.calls[0][0]).toBe(0);

  expect(mockCallback.mock.calls[1][0]).toBe(1);

  expect(mockCallback.mock.results[0].value).toBe(42);
});*/

/*test('Button renders correctly', () => {
  const tree = renderer.create(<Button label="Click me" />).toJSON();
  expect(tree).toMatchSnapshot();
});*/


/*describe('Calculator', () => {
  // Define at least one valid test
  test('adds 2 + 3 to equal 5', () => {
    const calc = new Calculator();
    expect(calc.add(2, 3)).toBe(5);
  });
});*/

test('adds 1 + 2 to equal 3', () => {
  expect(Calculator(1, 2)).toBe(3);
});