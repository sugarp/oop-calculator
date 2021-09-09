import { Expression, Operand, OperationStrategy } from "./types";

class ExpressionImpl implements Expression {
  private _operand1: Operand;
  private _operand2: Operand;
  private strategy: OperationStrategy;

  static operandToNumber(operand: Operand): number {
    if (typeof operand !== 'number') return operand.calculate();

    return operand;
  }

  constructor(operand1: Operand, operand2: Operand, strategy: OperationStrategy) {
    this._operand1 = operand1;
    this._operand2 = operand2;
    this.strategy = strategy;
  }

  get operand1(): number {
    return ExpressionImpl.operandToNumber(this._operand1);
  }

  get operand2(): number {
    return ExpressionImpl.operandToNumber(this._operand2);
  }

  calculate = (): number => {
    return this.strategy.calculate(this._operand1, this._operand2);
  };
}

export default ExpressionImpl;
