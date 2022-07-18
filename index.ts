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

 const isNOTNullOrUndefined = (value: any): boolean => {
  return !isNullOrUndefined(value);
};

 const isNullOrUndefined = (value: any): boolean => {
    return value === null || value === undefined || value === '' || value === 'null' || value === 'undefined';
};

 const removeExtraSpacesFromString = (str: string) => {

  if (isNullOrUndefined(str)) {
    return str
  }else{
    return str.replace(/\s+/g, ' ').trim()
  }



};