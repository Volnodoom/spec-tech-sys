import { FIX_DIGITS_NUMBER } from "./constants";

export const maskMobile = (string) => {
  const numberSequence = /(^[\d]{1})(\d{3})?(\d{3})?(\d{2})?(\d{2})?/g;
  const elevenDigitsString = string.slice(0, FIX_DIGITS_NUMBER);
  const result = elevenDigitsString.replace(numberSequence, '+$1 $2 $3 $4 $5' );
  return result;
}

export const unmaskMobile = (string) => {
  const numberRegexp = /\D/g;
  const onlyNumberString = string.replace(numberRegexp, '');
  return onlyNumberString;
}
