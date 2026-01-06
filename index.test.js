import * as toTest from "./index.js";

test("Capitalize should pass: ace -> Ace", () => {
    expect(toTest.capitalize('ace')).toBe('Ace');
});

test("Capitalize test on empty string: '' -> ''", () => {
    expect(toTest.capitalize('')).toBe('');
});