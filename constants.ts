import { Currency } from './types';

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  [Currency.INR]: '₹',
  [Currency.USD]: '$',
  [Currency.EUR]: '€',
};

export const DEFAULT_LOAN_AMOUNT = 1000000;
export const DEFAULT_INTEREST_RATE = 10;
export const DEFAULT_TENURE = 5; // Years

export const DEFAULT_SIP_AMOUNT = 5000;
export const DEFAULT_SIP_RETURN = 12;
export const DEFAULT_SIP_DURATION = 10; // Years
