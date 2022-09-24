const getRandomNumberBetween = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

const numberWithCommas=(x: number)=> {
    let lastThree = x.toString().substring(x.toString().length - 3);
    let otherNumbers = x.toString().substring(0, x.toString().length - 3);
    if (otherNumbers !== '') {
      lastThree = ',' + lastThree;
    }
    return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
  }

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

  const getAmountWithSignAndSymbol = (amount: number) => {
    return (
      (amount > 0 ? '[+] ' : amount === 0 ? '' : '[-] ') +
      getRupeesSymbol() +
      convertPaisa(amount, false, true)
    );
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

  