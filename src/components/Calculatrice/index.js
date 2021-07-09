import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import {
  isOperator,
  operatorCalculator,
  clearHistory,
  isPosOrNeg,
  equalCalculator,
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
      if (calcul === '') {
        setCalcValue(currentValue);
      }
      else {
        setCalcValue(calcul);
      }
      setCurrentValue('');
      setHistory(`${history}${input}`);
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
        <div className="row rowOne">
          <div onClick={handleOnClick} className="btn cancel">AC</div>
          <div onClick={handleOnClick} className="btn">+/-</div>
          <div onClick={handleOnClick} className="btn">%</div>
          <div onClick={handleOnClick} className="btn btn-last">/</div>
        </div>
        <div className="row">
          <div onClick={handleOnClick} className="btn">7</div>
          <div onClick={handleOnClick} className="btn">8</div>
          <div onClick={handleOnClick} className="btn">9</div>
          <div onClick={handleOnClick} className="btn btn-last">*</div>
        </div>
        <div className="row">
          <div onClick={handleOnClick} className="btn">4</div>
          <div onClick={handleOnClick} className="btn">5</div>
          <div onClick={handleOnClick} className="btn">6</div>
          <div onClick={handleOnClick} className="btn btn-last">-</div>
        </div>
        <div className="row">
          <div onClick={handleOnClick} className="btn">1</div>
          <div onClick={handleOnClick} className="btn">2</div>
          <div onClick={handleOnClick} className="btn">3</div>
          <div onClick={handleOnClick} className="btn btn-last">+</div>
        </div>
        <div className="last_row">
          <div onClick={handleOnClick} className="btn btn_last-row">0</div>
          <div onClick={handleOnClick} className="btn btn_last-row">.</div>
          <div onClick={handleOnClick} className="btn btn_last-row btn-last validate">=</div>
        </div>
      </div>
    </div>
  );
}

Calculatrice.propTypes = {

};
