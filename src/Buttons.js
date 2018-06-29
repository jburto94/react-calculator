import React from 'react';
import './Buttons.css';

const Buttons = props => {
  return (
    <div id='buttons'>
      <div id='clear' className='wide' onClick={props.handleClear}>AC</div>
      <div id='divide' className='operator' onClick={props.handleOperator}>/</div>
      <div id='multiply' className='operator' onClick={props.handleOperator}>*</div>
      <div id='seven' className='number' onClick={props.handleNumber}>7</div>
      <div id='eight' className='number' onClick={props.handleNumber}>8</div>
      <div id='nine' className='number' onClick={props.handleNumber}>9</div>
      <div id='subtract' className='operator' onClick={props.handleOperator}>-</div>
      <div id='four' className='number' onClick={props.handleNumber}>4</div>
      <div id='five' className='number' onClick={props.handleNumber}>5</div>
      <div id='six' className='number' onClick={props.handleNumber}>6</div>
      <div id='add' className='operator' onClick={props.handleOperator}>+</div>
      <div id='one' className='number' onClick={props.handleNumber}>1</div>
      <div id='two' className='number' onClick={props.handleNumber}>2</div>
      <div id='three' className='number' onClick={props.handleNumber}>3</div>
      <div id='equals' onClick={props.handleEval}>=</div>
      <div id='zero' className='number wide' onClick={props.handleNumber}>0</div>
      <div id='decimal' className='number' onClick={props.handleDecimal}>.</div>
    </div>
  )
}

export default Buttons;