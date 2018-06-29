import React from 'react';
import './Screen.css';

const Screen = props => {
  let screenText = props.screen.join('')
  return (
    <div id='display'>
      {screenText}
    </div>
  );
}

export default Screen;