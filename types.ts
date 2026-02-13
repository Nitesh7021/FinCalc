export type CalculatorType = 'EMI' | 'SIP';

export enum Currency {
  INR = 'INR',
  USD = 'USD',
  EUR = 'EUR'
}

export interface EMIDetail {
  month: number;
  principalPaid: number;
  interestPaid: number;
  remainingBalance: number;
  totalPaid: number;
  date: string;
}

export interface EMIResult {
  monthlyEMI: number;
  totalInterest: number;
  totalAmount: number;
  yearlyBreakdown: { year: number; paid: number }[];
  amortizationSchedule: EMIDetail[];
}

export interface SIPDetail {
  month: number;
  year: number;
  investedAmount: number;
  accumulatedAmount: number;
  returns: number;
}

export interface SIPResult {
  totalInvested: number;
  totalReturns: number;
  maturityAmount: number;
  yearlyBreakdown: { year: number; invested: number; value: number }[];
  monthlyBreakdown: SIPDetail[];
}

export interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
}
