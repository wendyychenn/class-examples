var arrayNumbers = [1,3,5,7];

// Inline callback function format

var modifiedNumbers = arrayNumbers.map(function(element) {
    return element * 3;
});

console.log(modifiedNumbers);