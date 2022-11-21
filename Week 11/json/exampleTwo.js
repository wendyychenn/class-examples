var jsonContainer = '{"first": "John", "age": 25, "country" : "Canada"}';


console.log(jsonContainer);

var objectValue = JSON.parse(jsonContainer);

console.log(objectValue.first);