import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function Pad({ handleOnClick }) {
  return (
    <>
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
    </>
  );
}

Pad.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
};
