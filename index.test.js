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

describe("caesarCipher(message, shift) tests", () => {
    // Basic
    test("Basic lower case: abc, 1 -> bcd", ()=> {
        expect(toTest.caesarCipher("abc", 1)).toBe("bcd");
    });

    test("Basic upper case: ABC, 1 -> BCD", ()=> {
        expect(toTest.caesarCipher("ABC", 1)).toBe("BCD");
    });

    test("Basic mixed case: AbCd, 1 -> BcDe", ()=> {
        expect(toTest.caesarCipher("AbCd", 1)).toBe("BcDe");
    });

    test("Basic punctuation: a bc'!, 1 -> b cd'!", ()=> {
        expect(toTest.caesarCipher("a bc'!", 1)).toBe("b cd'!");
    });
    
    
    describe("Overflow", () => {
        test("Overflow lower case: vwx, 4 -> zab", ()=> {
            expect(toTest.caesarCipher("vwx", 4)).toBe("zab");
        });

        test("Overflow upper case: TUV, 12 -> FGH", ()=> {
            expect(toTest.caesarCipher("TUV", 12)).toBe("FGH");
        });

        test("Overflow mixed case: wXyZ, 4 -> aBcD", ()=> {
            expect(toTest.caesarCipher("wXyZ", 4)).toBe("aBcD");
        });
    });
    
    describe("Shift not in range 1-25", ()=> {
        test("Shift 0: wXyZ, 0 -> wXyZ", ()=> {
            expect(toTest.caesarCipher("wXyZ", 0)).toBe("wXyZ");
        });

        test("Shift 26: a, 26 -> b", ()=> {
            expect(toTest.caesarCipher("a", 26)).toBe("b");
        });

        test("Shift -1: c, -1 -> b", ()=> {
            expect(toTest.caesarCipher("c", -1)).toBe("b");
        });

        test("Shift -26: c, -1 -> b", ()=> {
            expect(toTest.caesarCipher("c", -26)).toBe("b");
        });
    });
    
    describe("Throw error tests", () => {
        test("Message is number: 1 , 0 -> Error", ()=> {
            expect(()=>{toTest.caesarCipher(1, 0)}).toThrow();;
        });

        test("Message is object: {} , 0 -> Error", ()=> {
            expect(()=>{toTest.caesarCipher({}, 0)}).toThrow();;
        });

        test("Shift is float: abc , '0.5' -> Error", ()=> {
            expect(()=>{toTest.caesarCipher('abc', 0.5)}).toThrow("shift must be an integer");
        });

        test("Shift is string: abc , '0' -> Error", ()=> {
            expect(()=>{toTest.caesarCipher('abc', '0')}).toThrow();
        });

        test("Shift is object: abc , {}' -> Error", ()=> {
            expect(()=>{toTest.caesarCipher('abc', {})}).toThrow();
        });
    })
});