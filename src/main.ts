import Calculator from "./Calculator";
import AdditionStrategy from "./operationStrategies/AdditionStrategy";
import Division from "./operationStrategies/Division";
import Multiplication from "./operationStrategies/Multiplication";
import Substraction from "./operationStrategies/Substraction";

const strategies = [new AdditionStrategy(), new Division(), new Substraction(), new Multiplication()];
const calculator = new Calculator(strategies);
