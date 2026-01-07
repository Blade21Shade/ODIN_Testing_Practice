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

export {capitalize, reverseString}