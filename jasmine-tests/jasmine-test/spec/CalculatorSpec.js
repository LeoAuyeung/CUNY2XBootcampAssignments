describe("Calculator", () => {
    const Calculator = require('../lib/Calculator.js')
    const calc = new Calculator;

    it("should add two numbers", () => {
        /* Test code goes in here */
        expect (calc.add(5, 5)).toEqual(10);
        expect (calc.subtract(10, 5)).toBe(5);
    })
})