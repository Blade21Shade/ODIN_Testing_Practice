function capitalize(s) {
    if (typeof(s) !== 'string') {
        throw new Error("capitalize() should only take strings as parameters")
    }
    
    return s.charAt(0).toUpperCase() + s.slice(1);
}

export {capitalize}