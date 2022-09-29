const number = 123456.78;

new Intl.NumberFormat('de-DE', {
    style: 'currency', currency: 'EUR',
}).format(number)
//Output : 123.456,78 €

const value = new Intl.NumberFormat('en-IN', {
    style: 'currency', currency: 'INR',
}).format(number)
//Output : ₹1,23,456.78

const getRupeesSymbol = () => {
    return '₹';
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
