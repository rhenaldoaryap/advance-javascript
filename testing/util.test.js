const { generateText } = require("./util");

test("should output name and age", () => {
  const text = generateText("Rhenaldo", 22);
  expect(text).toBe("Rhenaldo (22 years old)");
});

// check the opposite
test("should output data-less text", () => {
  const text = generateText("", null);
  expect(text).toBe(" (null years old)");
});
