import { Operand } from "../types";
import operandToNumber from "../utils/operandToNumber";
import BinaryOperationStrategy from "./BinaryOperationStrategy";

class Substraction extends BinaryOperationStrategy {
  char = "-";

  calculate(operand1: Operand, operand2: Operand): number {
    return operandToNumber(operand1) - operandToNumber(operand2);
  }
}

export default Substraction;
