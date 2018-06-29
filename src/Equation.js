import React from 'react';
import './Equation.css';

const Equation = props => {
  let equationText = props.equation.join('')
  return (
    <div id='equation'>
      {equationText}
    </div>
  );
}

export default Equation;