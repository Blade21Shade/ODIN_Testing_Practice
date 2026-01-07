import * as toTest from "./index.js";

describe("capitalize(s) tests", () => {
    test("Basic: ace -> Ace", () => {
        expect(toTest.capitalize('ace')).toBe('Ace');
    });

    test("Empty string: '' -> ''", () => {
        expect(toTest.capitalize('')).toBe('');
    });

    describe("Throw error tests", () => {
        test("Number: 1 -> Error", () => {
            expect(()=>{toTest.capitalize(1)}).toThrow(); // toThrow needs expect() to use a wrapper, otherwise the error is just thrown normally
        });

        test("Object: {} -> Error", () => {
            expect(()=>{toTest.capitalize({})}).toThrow();
        });

        test("Array: [] -> Error", () => {
            expect(()=>{toTest.capitalize([])}).toThrow();
        });
    });
});

describe("reverseString(s) tests", () => {
    test("Basic: ace -> eca", () => {
        expect(toTest.reverseString('ace')).toBe('eca');
    });

    test("Empty string: '' -> ''", () => {
        expect(toTest.reverseString('')).toBe('');
    });

    describe("Throw error tests", () => {
        test("Number: 1 -> Error", () => {
            expect(()=>{toTest.reverseString(1)}).toThrow(); // toThrow needs expect() to use a wrapper, otherwise the error is just thrown normally
        });

        test("Object: {} -> Error", () => {
            expect(()=>{toTest.reverseString({})}).toThrow();
        });

        test("Array: [] -> Error", () => {
            expect(()=>{toTest.reverseString([])}).toThrow();
        });
    });
});

describe("Calculator tests", () => {
    test("Add, basic: 1, 2 -> 3", () => {
        expect(toTest.calculator.add(1, 2)).toBe(3);
    });

    test("Subtract, basic: 1, 2 -> -1", () => {
        expect(toTest.calculator.subtract(1, 2)).toBe(-1);
    });

    test("Multiply, basic: 2, 3 -> 6", () => {
        expect(toTest.calculator.multiply(2, 3)).toBe(6);
    });

    test("Divide, basic: 6, 2 -> 3", () => {
        expect(toTest.calculator.divide(6, 2)).toBe(3);
    });

    describe("Throw error tests\nA helper function is used to validate input in each function, so each type of invalid input only needs tested once", () => {
        // beforeAll(() => I couldn't get this to work, so I've just thrown the notification into the describe for now 
        //     console.log("A helper function is used to validate input in each function, so each type of invalid input only needs tested once")
        // );

        test("No parameters: -> Error", () => {
            expect(()=>{toTest.calculator.add()}).toThrow();
        });

        test("String char: 'a', 'b' -> Error", () => {
            expect(()=>{toTest.calculator.add('a', 'b')}).toThrow();
        });

        test("String num: '1', '2' -> Error", () => {
            expect(() => {toTest.calculator.add('1', '2')}).toThrow();
        });

        test("Array: [], 1 -> Error", () => {
            expect(()=>{toTest.calculator.add([], 1)}).toThrow();
        });

        test("Object: 1, {} -> Error", () => {
            expect(()=>{toTest.calculator.add(1, {})}).toThrow();
        });
    });
});