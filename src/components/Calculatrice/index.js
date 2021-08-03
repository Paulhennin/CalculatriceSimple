import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Pad from 'src/components/Calculatrice/Pad';
import './style.scss';
import {
  isOperator,
  operatorCalculator,
  clearHistory,
  isPosOrNeg,
  equalCalculator,
  percentCalculator
} from './calculator';

export default function Calculatrice() {
  const [calcValue, setCalcValue] = useState('');
  const [currentValue, setCurrentValue] = useState('');
  const [history, setHistory] = useState('');
  const [posOrNeg, setPosOrNeg] = useState(true);
  const handleOnClick = (event) => {
    const input = event.target.innerHTML;
    if (input === 'AC') {
      setCurrentValue('');
      setCalcValue('');
      setHistory('');
      clearHistory();
    }
    else if (isPosOrNeg(input)) {
      setPosOrNeg(!posOrNeg);
      const value = posOrNeg ? `-${currentValue}` : currentValue.replace('-', '');
      setCurrentValue(value);
    }
    else if (isOperator(input)) {
      const calcul = operatorCalculator(input, currentValue);
      console.log(calcul, currentValue);
      if (calcul === 0) {
        setCalcValue(currentValue);
      }
      else {
        setCalcValue(calcul);
      }
      setCurrentValue('');
      setHistory(`${history}${input}`);
    }
    else if (input === '%') {
      const calcul = percentCalculator(currentValue);
      setCalcValue(calcul);
      setCurrentValue('');
    }
    else if (input === '=') {
      const calcul = equalCalculator(input, currentValue);
      setCalcValue(calcul);
      setCurrentValue(calcul);
    }
    else {
      setCurrentValue(`${currentValue}${input}`);
      setHistory(`${history}${input}`);
    }
  };
  return (
    <div className="container">
      <div>Calculatrice</div>
      <div className="calc__container">
        <div>
          <input
            type="text"
            readOnly
            autoComplete="none"
            value={currentValue}
            placeholder="0"
            className="calc__input"
          />
          Total:
          <input
            type="text"
            readOnly
            autoComplete="none"
            value={calcValue}
            placeholder="0"
            className="calc__input"
          />
        </div>
        <Pad handleOnClick={handleOnClick} />
      </div>
    </div>
  );
}

Calculatrice.propTypes = {

};
