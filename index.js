function capitalize(s) {
    if (typeof(s) !== 'string') {
        throw new Error("capitalize() should only take strings as parameters")
    }
    
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function reverseString(s) {
    let toReturn = '';
    for (let i = 1; i <= s.length; i++) {
        toReturn += s.at(-i);
    }

    return toReturn;
}

export {capitalize, reverseString}