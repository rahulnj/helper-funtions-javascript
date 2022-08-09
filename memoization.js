//The technique where we cache the results of a
// operation and use the cached value to avoid
//repeating the same operation again and again.

//Example:

function createGetData() {
  let isCached = false
  let cachedValue = null
  return function () {
    if (isCached) {
      return cachedValue
    }
    console.log('fetching data')
    let result = 123
    cachedValue = result
    isCached = true
    return result
  }
}
console.log(createGetData())
