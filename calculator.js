/*class Calculator {        //function test
    add(a, b) {
        return a + b
    }

    subtract(a, b) {
        return a-b
    }
}*/

/*function Calculator() {
    return {                //Object testing
        name: "Archit",
        age: 21
    }
}*/

const Calculator = () => {        //Asynchronous Code
    return new Promise((resolve) => {
      setTimeout(() => resolve('Data fetched!'), 1000);
    });
  };
   

module.exports = Calculator