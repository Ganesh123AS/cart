export const rupeesFormat = (number: number | undefined): string => {
    if (typeof number !== 'number' || isNaN(number)) {
        return 'Invalid number';
    }

    return `RS ${number.toFixed(2)}`;
};