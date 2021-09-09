import { Operand } from "../types";

function operandToNumber(operand: Operand): number {
  if (typeof operand !== "number") return operand.calculate();

  return operand;
}

export default operandToNumber;
