import { NUMBER_CHARS } from "./constants";
import UnsupportedExpression from "./exceptions/UnsupportedExpression";
import { ParsedExpression, Expression, OperationStrategy as Operation } from "./types";

const BODMAS_PRIORITIES_MAP = {
  "/": 1,
  "*": 1,
  "+": 2,
  "-": 2,
};

class Calculator {
  private operations: Operation[] = [];

  static parseExpression(rawExpression: string): ParsedExpression {
    const expression: ParsedExpression = [];
    let currentNumber = '';

    Array.from(rawExpression).forEach((char) => {
      if(char === " ") return;

      if (NUMBER_CHARS.includes(char)) {
        currentNumber += char;
      } else {
        expression.push(parseFloat(currentNumber));
        expression.push(char);

        currentNumber = '';
      }
    });

    // add last operand number
    expression.push(parseFloat(currentNumber));

    return expression;
  }

  constructor(operations: Operation[]) {
    this.operations = operations.sort(
      (a, b) => BODMAS_PRIORITIES_MAP[a.char] - BODMAS_PRIORITIES_MAP[b.char],
    );
  }

  evaluate(rawExpression: string) {
    let expression = Calculator.parseExpression(rawExpression);

    this.operations.forEach((strategy) => {
      expression = strategy.parseOperations(expression);
    });

    if (expression.length > 1) throw new UnsupportedExpression();

    const rootOperation = expression[0] as Expression;

    return rootOperation.calculate();
  }
}

export default Calculator;
