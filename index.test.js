import * as toTest from "./index.js";

// capitalize(s)
test("Capitalize should pass: ace -> Ace", () => {
    expect(toTest.capitalize('ace')).toBe('Ace');
});

test("Capitalize test on empty string: '' -> ''", () => {
    expect(toTest.capitalize('')).toBe('');
});

test("Capitalize test on number: 1 -> Error", () => {
    expect(()=>{toTest.capitalize(1)}).toThrow(); // toThrow needs expect() to use a wrapper, otherwise the error is just thrown normally
});

test("Capitalize test on object: {} -> Error", () => {
    expect(()=>{toTest.capitalize({})}).toThrow();
});

test("Capitalize test on array: [] -> Error", () => {
    expect(()=>{toTest.capitalize([])}).toThrow();
});

// reverseString(s)
test("Reverse should pass: ace -> eca", () => {
    expect(toTest.reverseString('ace')).toBe('eca');
});

test("Reverse test on empty string: '' -> ''", () => {
    expect(toTest.reverseString('')).toBe('');
});

test("Reverse test on number: 1 -> Error", () => {
    expect(()=>{toTest.reverseString(1)}).toThrow(); // toThrow needs expect() to use a wrapper, otherwise the error is just thrown normally
});

test("Reverse test on object: {} -> Error", () => {
    expect(()=>{toTest.reverseString({})}).toThrow();
});

test("Reverse test on array: [] -> Error", () => {
    expect(()=>{toTest.reverseString([])}).toThrow();
});

// calculator object: add, subtract, multiply, divide
test("Calculator Add, valid input: 1, 2 -> 3", () => {
    expect(toTest.calculator.add(1, 2)).toBe(3);
});

test("Calculator Subtract, valid input: 1, 2 -> -1", () => {
    expect(toTest.calculator.subtract(1, 2)).toBe(-1);
});

test("Calculator Multiply, valid input: 2, 3 -> 6", () => {
    expect(toTest.calculator.multiply(2, 3)).toBe(6);
});

test("Calculator Divide, valid input: 6, 2 -> 3", () => {
    expect(toTest.calculator.divide(6, 2)).toBe(3);
});

test("Calculator invalid input: '1', '2' -> Error", () => {
    expect(() => {toTest.calculator.add('1', '2')}).toThrow();
});

test("Calculator invalid input: no parameters -> Error", () => {
    expect(()=>{toTest.calculator.add()}).toThrow();
});

test("Calculator invalid input: 'a', 'b' -> Error", () => {
    expect(()=>{toTest.calculator.add('a', 'b')}).toThrow();
});

test("Calculator invalid input: [], 1 -> Error", () => {
    expect(()=>{toTest.calculator.add([], 1)}).toThrow();
});

test("Calculator invalid input: {}, 1 -> Error", () => {
    expect(()=>{toTest.calculator.add({}, 1)}).toThrow();
});