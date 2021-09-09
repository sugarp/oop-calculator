import Calculator from "./Calculator"
import AdditionStrategy from "./operations/AdditionStrategy";
import Division from "./operations/Division";
import Multiplication from "./operations/Multiplication";
import Substraction from "./operations/Substraction";

const operations = [
  new AdditionStrategy(),
  new Division(),
  new Substraction(),
  new Multiplication(),
];

describe("Calculator tests suite",() => {
  it("should evaluate expression", () => {
    const calc = new Calculator(operations);

    const inputs = ['2+3+3', '2+3-3', '5 / 2 - 3'];
    const outpus = [8, 2, -0.5,];

    inputs.forEach(
      (expression, index) => expect(calc.evaluate(expression)).toBe(outpus[index])
    );
  })
})
