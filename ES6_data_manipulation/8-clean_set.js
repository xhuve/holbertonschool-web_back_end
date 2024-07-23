module.exports = function cleanSet(set, startString) {
    let combinedString = ''
    if (startString.length == 0)
        return combinedString

    set.forEach(element => {
        if (element.startsWith(startString)) {
            let newStr = element.slice(startString.length)

            combinedString = combinedString + newStr + '-'
        }
    });
    return combinedString.slice(0, -1)
}