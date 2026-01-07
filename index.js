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

export {capitalize, reverseString, calculator}