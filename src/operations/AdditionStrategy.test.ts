import AdditionStrategy from "./AdditionStrategy"

const addition = new AdditionStrategy();

it("should do addition", () => {
  expect(addition.calculate(2, 2)).toBe(4)
})
