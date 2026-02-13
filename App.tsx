import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { EMICalculator } from './components/calculators/EMICalculator';
import { SIPCalculator } from './components/calculators/SIPCalculator';
import { CalculatorType, Currency } from './types';
import { CurrencyContext } from './contexts/CurrencyContext';

const App: React.FC = () => {
  const [activeCalculator, setActiveCalculator] = useState<CalculatorType>('EMI');
  const [currency, setCurrency] = useState<Currency>(Currency.INR);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      <Layout
        activeCalculator={activeCalculator}
        setActiveCalculator={setActiveCalculator}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      >
        <div className="w-full max-w-7xl mx-auto p-4 md:p-6">
          {activeCalculator === 'EMI' ? <EMICalculator /> : <SIPCalculator />}
        </div>
      </Layout>
    </CurrencyContext.Provider>
  );
};

export default App;