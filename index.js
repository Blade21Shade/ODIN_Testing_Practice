let a = -5 % 1;

function capitalize(s) {
    if (typeof(s) !== 'string') {
        throw new Error("capitalize() only takes a string as input")
    }
    
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function reverseString(s) {
    if (typeof(s) !== 'string') {
        throw new Error("reverseString() only takes a string as input")
    }
    
    let toReturn = '';
    for (let i = 1; i <= s.length; i++) {
        toReturn += s.at(-i);
    }

    return toReturn;
}

const calculator = {
    add(a, b) {
        this.inputValidation(a,b);
        return a + b;
    },

    subtract(a, b) {
        this.inputValidation(a,b);
        return a - b;
    },

    multiply(a, b) {
        this.inputValidation(a,b);
        return a * b;
    },

    divide(a, b) {
        this.inputValidation(a,b);
        return a / b;
    },

    inputValidation(a, b) {
        if (typeof(a) !== 'number' || typeof(b) !== 'number') {
            throw new Error("calculator functions can only be called with numbers");
        }
    }
}

function caesarCipher(message, shift) {
    if (typeof(message) !== 'string') {
        throw new Error("message must be a string");
    }

    if (typeof(shift) !== 'number') {
        throw new Error("shift must be a number");
    }

    if (shift % 1 !== 0) {
        throw new Error("shift must be an integer")
    }
    
    // Force shift into the alphabetical shift range
    shift = shift % 25;
    
    // If shift is negative make it positive for straightforward use later
    if (shift < 0) {
        shift = 26 + shift; // + since shift is negative
    }

    if (shift === 0 ) {
        return message;
    }
    
    // UTT-16 code mins and maxs for letters
    const minUpperCaseCode = 65; // A
    const maxUpperCaseCode = 90; // Z
    const minLowerCaseCode = 97; // a
    const maxLowerCaseCode = 122; // z

    let shiftedCharCodes = [];
    for (let i = 0; i < message.length; i++) {
        let code = message.charCodeAt(i);

        // Capital letters
        if (code >= minUpperCaseCode && code <= maxUpperCaseCode) {
            code += shift;
            if (code > maxUpperCaseCode) {
                let difference = code - maxUpperCaseCode;
                code = minUpperCaseCode + difference - 1;
                // -1 because we start at the minimum code, and difference would go 1 beyond what is expected
            }
        }

        // Lowercase letters
        if (code >= minLowerCaseCode && code <= maxLowerCaseCode) {
            code += shift;
            if (code > maxLowerCaseCode) {
                let difference = code - maxLowerCaseCode;
                code = minLowerCaseCode + difference - 1;
            }
        }

        shiftedCharCodes.push(code);
    }

    return String.fromCharCode(...shiftedCharCodes);
}

function analyzeArray(arr) {
    // arr error handling
    if (!Array.isArray(arr)) {
        throw new Error("arr must be an Array object")
    }
    
    if (arr.length === 0) {
        throw new Error("arr must have entries");
    }

    const toReturn = {
        average: 0,
        min: Number.MAX_VALUE, // Start with max values instead of 0 so comparisons always work
        max: Number.MAX_VALUE * -1,
        length: 0
    }

    let sum = 0;
    let len = arr.length;
    for (let i = 0; i < arr.length; i++) {
        let n = arr[i];
        // Inner error handling
        if (typeof(n) !== 'number') {
            throw new Error("all entries in arr must be numbers");
        }

        sum += n;
        if (toReturn.min > n) {
            toReturn.min = n;
        }

        if (toReturn.max < n) {
            toReturn.max = n;
        }
    }

    toReturn.average = sum / len;
    toReturn.length = len;
    
    return toReturn;
}

export {capitalize, reverseString, calculator, caesarCipher, analyzeArray}