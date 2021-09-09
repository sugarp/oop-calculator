export type Operand = number | Expression;
export type ParsedExpression = Array<number | Expression | string>;

export interface Expression {
  calculate(): number;
}

export interface OperationStrategy {
  char: string;
  parseOperations(expression: ParsedExpression): ParsedExpression;
  calculate(operand1: Operand, operand2: Operand): number;
}
