import * as toTest from "./index.js";

test("Capitalize should pass: ace -> Ace", () => {
    expect(toTest.capitalize('ace')).toBe('Ace');
});

test("Capitalize test on empty string: '' -> ''", () => {
    expect(toTest.capitalize('')).toBe('');
});

test("Capitalize test on number: 1 -> ? ** Should fail", () => {
    expect(()=>{toTest.capitalize(1)}).toThrow(); // toThrow needs expect() to use a wrapper, otherwise the error is just thrown normally
});