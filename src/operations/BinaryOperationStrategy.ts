import ExpressionImpl from "../Operation";
import { ParsedExpression, OperationStrategy } from "../types";

abstract class BinaryOperationStrategy implements OperationStrategy {
  abstract char: string;

  parseOperations(expression: ParsedExpression): ParsedExpression {
    let index = expression.indexOf(this.char);

    while (index > -1) {
      const operand1 = expression[index - 1];
      const operand2 = expression[index + 1];

      if (typeof operand1 === "string") throw `${operand1} invalid operand found in expression`;
      if (typeof operand2 === "string") throw `${operand2} invalid operand found in expression`;

      expression.splice(
        index - 1,
        3,
        new ExpressionImpl(operand1 as number | ExpressionImpl, operand2 as number | ExpressionImpl, this)
      );
      index = expression.indexOf(this.char);
    }

    return expression;
  }

  abstract calculate(operand1: number, operand2: number): number;
}

export default BinaryOperationStrategy;
