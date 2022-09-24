 const shuffleArray=(array: any[])=> {
  let currentIndex = array.length,  randomIndex;
  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

// @ts-ignore
 const groupBy = (xs, key) =>
  // @ts-ignore
  xs.reduce( (rv, x)=> {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});

//using set method to remove duplicates from array
const removeArrayDuplicatesUsingSet = (array: any[]) => {
  return Array.from(new Set(array));
}

//using filter method to remove duplicates from array
const removeArrayDuplicatesUsingFilter = (array: any[]) => {
  return array.filter((item, index) => array.indexOf(item) === index);
}

//using reduce method to remove duplicates from array
const removeArrayDuplicatesUsingReduce = (array:any[]) => {
  return array.reduce(
    (partial, item) => (partial.includes(item) ? partial : [...partial, item]),
    []
  )
}


