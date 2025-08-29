'use client';
import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

const InteractiveCalculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const inputNumber = (num: string) => {
    if (waitingForNewValue) {
      setDisplay(num);
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const inputOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(display);
    } else if (operation) {
      const currentValue = previousValue || '0';
      const newValue = calculate(parseFloat(currentValue), inputValue, operation);
      
      setDisplay(String(newValue));
      setPreviousValue(String(newValue));
    }

    setWaitingForNewValue(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue: number, secondValue: number, operation: string): number => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '×':
        return firstValue * secondValue;
      case '÷':
        return firstValue / secondValue;
      default:
        return secondValue;
    }
  };

  const performCalculation = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(parseFloat(previousValue), inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForNewValue(true);
    }
  };

  const clearDisplay = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };

  const clearEntry = () => {
    setDisplay('0');
  };

  const inputDecimal = () => {
    if (waitingForNewValue) {
      setDisplay('0.');
      setWaitingForNewValue(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const buttons = [
    { label: 'C', action: clearDisplay, className: 'bg-red-500 hover:bg-red-600 text-white' },
    { label: 'CE', action: clearEntry, className: 'bg-orange-500 hover:bg-orange-600 text-white' },
    { label: '⌫', action: () => setDisplay(display.slice(0, -1) || '0'), className: 'bg-gray-500 hover:bg-gray-600 text-white' },
    { label: '÷', action: () => inputOperation('÷'), className: 'bg-blue-500 hover:bg-blue-600 text-white' },
    
    { label: '7', action: () => inputNumber('7'), className: 'bg-gray-200 hover:bg-gray-300 text-gray-900' },
    { label: '8', action: () => inputNumber('8'), className: 'bg-gray-200 hover:bg-gray-300 text-gray-900' },
    { label: '9', action: () => inputNumber('9'), className: 'bg-gray-200 hover:bg-gray-300 text-gray-900' },
    { label: '×', action: () => inputOperation('×'), className: 'bg-blue-500 hover:bg-blue-600 text-white' },
    
    { label: '4', action: () => inputNumber('4'), className: 'bg-gray-200 hover:bg-gray-300 text-gray-900' },
    { label: '5', action: () => inputNumber('5'), className: 'bg-gray-200 hover:bg-gray-300 text-gray-900' },
    { label: '6', action: () => inputNumber('6'), className: 'bg-gray-200 hover:bg-gray-300 text-gray-900' },
    { label: '-', action: () => inputOperation('-'), className: 'bg-blue-500 hover:bg-blue-600 text-white' },
    
    { label: '1', action: () => inputNumber('1'), className: 'bg-gray-200 hover:bg-gray-300 text-gray-900' },
    { label: '2', action: () => inputNumber('2'), className: 'bg-gray-200 hover:bg-gray-300 text-gray-900' },
    { label: '3', action: () => inputNumber('3'), className: 'bg-gray-200 hover:bg-gray-300 text-gray-900' },
    { label: '+', action: () => inputOperation('+'), className: 'bg-blue-500 hover:bg-blue-600 text-white' },
    
    { label: '0', action: () => inputNumber('0'), className: 'bg-gray-200 hover:bg-gray-300 text-gray-900 col-span-2' },
    { label: '.', action: inputDecimal, className: 'bg-gray-200 hover:bg-gray-300 text-gray-900' },
    { label: '=', action: performCalculation, className: 'bg-green-500 hover:bg-green-600 text-white' },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 max-w-sm mx-auto">
      <div className="flex items-center space-x-2 mb-4">
        <Calculator className="h-6 w-6 text-blue-600" />
        <h3 className="text-lg font-bold text-gray-900">Calculadora Interativa</h3>
      </div>
      
      {/* Display */}
      <div className="bg-gray-900 text-white p-4 rounded-lg mb-4 text-right">
        <div className="text-2xl font-mono">{display}</div>
        {operation && previousValue && (
          <div className="text-sm text-gray-400">
            {previousValue} {operation}
          </div>
        )}
      </div>

      {/* Buttons Grid */}
      <div className="grid grid-cols-4 gap-2">
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={button.action}
            className={`p-3 rounded-lg font-semibold transition-colors ${button.className}`}
          >
            {button.label}
          </button>
        ))}
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Use esta calculadora para verificar seus cálculos!
        </p>
      </div>
    </div>
  );
};

export default InteractiveCalculator;
