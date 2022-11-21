function array(values) {
    var newArray = [];

    for (var i = 0; i < values.length; i++) {
        newArray.push(values[i] * 3);
    }
    return newArray
}

module.exports = array;