const getRandomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const numberWithCommas = (x: number) => {
  let lastThree = x.toString().substring(x.toString().length - 3);
  let otherNumbers = x.toString().substring(0, x.toString().length - 3);
  if (otherNumbers !== '') {
    lastThree = ',' + lastThree;
  }
  return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
}

const isNumber = (
  value: string | number | undefined | null,
): boolean => {
  return (
    value !== undefined &&
    value !== null &&
    value !== '' &&
    !isNaN(Number(value.toString()))
  );
};

const startsWithNumber = (str: string) => {
  return str.match(/^\d/);
};

const convertToNumber = (
  value: string | number | undefined | null,
): number => {
  if (isNumber(value)) {
    return Number(value);
  }
  return 0;
};

