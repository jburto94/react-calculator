import React, {Component} from 'react';
import Screen from './Screen';
import Equation from './Equation';
import Buttons from './Buttons';
import './Calculator.css';

const operators = ['+', '-', '*', '/'];

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: ['0'],
      equation: []
    };
    this.handleNumber = this.handleNumber.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleEval = this.handleEval.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleNumber(e) {
    if(this.state.screen.length > 18 || this.state.equation.length > 24) return;
    let text = e.target.innerText;
    let screen = [...this.state.screen];
    let equation = [...this.state.equation];
    if(equation.includes('=')) {
      screen = [];
      equation = [];
    }
    if(operators.includes(screen[0])) {
      screen.pop();
    }
    if(operators.includes(equation[0])){
      equation.shift();
    }
    if(screen[0] === '0' && !(screen.includes('.'))) {
      screen.pop();
    }
    screen.push(text);
    if(operators.includes(equation[equation.length - 2]) && equation[equation.length -1] === '0') {
      equation.pop();
    }
    equation.push(text);
    this.setState({
      screen: screen,
      equation: equation
    });
  }

  handleOperator(e) {
    let text = e.target.innerText;
    let screen = [text];
    let equation = [...this.state.equation];
    if (equation.includes('=')) {
      equation = [...this.state.screen];
    }
    if(operators.includes(equation[equation.length - 1])) {
      equation.pop();
    }
    equation.push(text);
    this.setState({
      screen: screen,
      equation: equation
    });
  }

  handleDecimal(e) {
    if(this.state.screen.length > 18 || this.state.equation.length > 24) return;
    let text = e.target.innerText;
    let screen = [...this.state.screen];
    let equation = [...this.state.equation];
    if(screen.includes('.')) {
      return;
    }
    if(operators.includes(screen[0]) || equation[0] === undefined) {
      screen = ['0', text];
      equation.push('0', text);
    } else {
      screen.push(text);
      equation.push(text);
    }
    this.setState({
      screen: screen,
      equation: equation
    });
  }

  handleEval(e) {
    let text = e.target.innerText;
    let equation = [...this.state.equation];
    if(operators.includes(equation[equation.length - 1])) {
      equation.pop();
    }
    if(equation.includes('=')) {
      return;
    }
    if(equation === []) return;
    let equationStr = equation.join('');
    let evil = fn => new Function('return ' + fn)();
    let answer = evil(equationStr);
    let strAnswer;
    if(answer) {
      strAnswer = answer.toString();
    } else return;
    let screen = [strAnswer];
    equation.push(text, ' ', strAnswer);
    this.setState({
      screen: screen,
      equation: equation
    });
  }

  handleClear() {
    this.setState({
      screen: ['0'],
      equation: []
    });
  }

  render() {
    return (
      <div id='calculator'>
        <Equation equation={this.state.equation} />
        <Screen screen={this.state.screen} />
        <Buttons 
          handleNumber={this.handleNumber}
          handleOperator={this.handleOperator}
          handleDecimal={this.handleDecimal}
          handleEval={this.handleEval}
          handleClear={this.handleClear}
        />
      </div>
    );
  }
}

export default Calculator;