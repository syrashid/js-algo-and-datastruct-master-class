function collectStrings(obj) {
  // Establish strings array
  let strings = [];

  (function dig(nestObj) {
    // Iterate through each part of the object
    for (const key in nestObj) {
      if (typeof nestObj[key] === 'string') strings.push(nestObj[key]);
      // Dig as necessary
      if (nestObj[key] instanceof Object) dig(nestObj[key]);
    }
    return;
  })(obj);

  return strings;
}


const testObj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(testObj)); // ["foo", "bar", "baz"])
