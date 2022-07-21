 const getUUID=()=> { // Public Domain/MIT
  var d = new Date().getTime();//Timestamp
  var d2 = 0
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16;//random number between 0 and 16
    if(d > 0){//Use timestamp until depleted
      r = (d + r)%16 | 0;
      d = Math.floor(d/16);
    } else {//Use microseconds since page-load if supported
      r = (d2 + r)%16 | 0;
      d2 = Math.floor(d2/16);
    }
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}


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

 const getOffPercentage = (
  originalPricePerUnitInPaisa: number,
  sellingPricePerUnitInPaisa: number,
) => {
  const percentage =
    ((originalPricePerUnitInPaisa - sellingPricePerUnitInPaisa) /
      originalPricePerUnitInPaisa) *
    100;
  // const actual = (Math.round(percentage * 100) / 100)
  // const trimmedStr = actual.toFixed(2)
  return parseInt(percentage.toString());
};

 const getAmountWithSignAndSymbol = (amount: number) => {
  return (
    (amount > 0 ? '[+] ' : amount === 0 ? '' : '[-] ') +
    getRupeesSymbol() +
    convertPaisa(amount, false, true)
  );
};

 const getMonthName = (monthNumber: number) => {
  const months = [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  if (monthNumber > 0 && monthNumber <= months.length) {
    return months[monthNumber - 1];
  }
  return '';
};

 const getCompanyId = (phoneNumber: string) => {
  const timestamp = Date.now();
  return phoneNumber + '_' + timestamp.toString();
};

 const getDigitAsStringWithLeadingZero = (num: number) => {
  return num > 9 ? '' + num : '0' + num;
};

 const minutesToHourString = (minutes: number) => {
  const hours = parseInt((minutes / 60).toString());
  return (
    getDigitAsStringWithLeadingZero(hours) +
    ':' +
    getDigitAsStringWithLeadingZero(minutes - hours * 60)
  );
};

function numberWithCommas(x: number) {
  let lastThree = x.toString().substring(x.toString().length - 3);
  let otherNumbers = x.toString().substring(0, x.toString().length - 3);
  if (otherNumbers !== '') {
    lastThree = ',' + lastThree;
  }
  return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
}

 const getRupeesSymbol = () => {
  return '₹';
};

 const convertPaisa = (
  amountInPaisa: number,
  isRupeeSymbolApplied: boolean = true,
  isCommaSeparated: boolean = true,
) => {
  const amount = amountInPaisa >= 0 ? amountInPaisa : -1 * amountInPaisa;
  const rupees = parseInt('' + amount / 100);
  const paisa = parseInt('' + (amount % 100));

  const rupeesText = isCommaSeparated ? numberWithCommas(rupees) : '' + rupees;
  const paisaText = paisa === 0 ? '00' : '' + paisa;

  const symbol = isRupeeSymbolApplied ? getRupeesSymbol() : '';

  return symbol + rupeesText + (paisaText === '00' ? '' : '.' + paisaText);
};

 const getRandomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

 const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
};

// @ts-ignore
 const groupBy = (xs, key) =>
  // @ts-ignore
  xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});

 const startsWithNumber = (str: string) => {
  return str.match(/^\d/);
};

 const startsWithChar = (str: string, ch: string) => {
  return str.length > 0 && str[0] === ch;
};

 const convertToNumber = (
  value: string | number | undefined | null,
): number => {
  if (isNumber(value)) {
    return Number(value);
  }
  return 0;
};

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

 const getAlphanumericString = (text: string) => {
  return text.replace(/[^\w ]/, '').replace(/[^A-Z0-9]+/gi, '');
};

 const parseStringToOnlyLettersAndNumbers = (text: string) => {
  return text.replace(/[^a-zA-Z0-9]+/gi, '');
};

 const isEmailAddressValid = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


