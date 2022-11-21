/**
 * @desc checking if number is even or not
 * @param {*} num the number
 * @returns if number is even or not
 */

function ifelse(num) {
    if (num % 2 == 0) {
        return "Is an event number";
    } else {
        return "Not a even number.";
    }
}

module.exports = ifelse;