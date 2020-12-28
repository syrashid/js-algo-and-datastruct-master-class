function stringifyNumbers(obj) {
  // Iterate through each part of the object
  for (const key in obj) {
    if (Number.isInteger(obj[key])) obj[key] = obj[key].toString();
    // Recurse as needed
    if (obj[key] instanceof Object) stringifyNumbers(obj[key]);
  }
  return obj;
}


let testObj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


console.log(stringifyNumbers(testObj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
