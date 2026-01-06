import * as toTest from "./index.js";

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