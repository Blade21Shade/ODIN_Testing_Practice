import * as toTest from "./index.js";

test("Capitalize first letter of a string: ace -> Ace", () => {
    expect(toTest.capitalize('ace')).toBe('Ace');
});