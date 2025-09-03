<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern Calculator</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }

        .calculator {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            max-width: 400px;
            width: 100%;
        }

        .display {
            background: rgba(0, 0, 0, 0.3);
            border-radius: 15px;
            padding: 20px;
            margin-bottom: 20px;
            text-align: right;
            color: white;
            min-height: 120px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .previous-operand {
            font-size: 18px;
            color: rgba(255, 255, 255, 0.7);
            min-height: 25px;
            word-wrap: break-word;
            word-break: break-all;
        }

        .current-operand {
            font-size: 36px;
            font-weight: 600;
            min-height: 50px;
            word-wrap: break-word;
            word-break: break-all;
        }

        .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 15px;
        }

        button {
            background: rgba(255, 255, 255, 0.2);
            border: none;
            border-radius: 15px;
            color: white;
            font-size: 20px;
            font-weight: 600;
            padding: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        button:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        button:active {
            transform: translateY(0);
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }

        button.span-two {
            grid-column: span 2;
        }

        .operator {
            background: rgba(255, 165, 0, 0.3);
        }

        .operator:hover {
            background: rgba(255, 165, 0, 0.5);
        }

        .equals {
            background: rgba(76, 175, 80, 0.3);
        }

        .equals:hover {
            background: rgba(76, 175, 80, 0.5);
        }

        .clear {
            background: rgba(244, 67, 54, 0.3);
        }

        .clear:hover {
            background: rgba(244, 67, 54, 0.5);
        }

        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            transform: scale(0);
            animation: ripple 0.6s ease-out;
        }

        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }

        @media (max-width: 480px) {
            .calculator {
                padding: 20px;
            }
            
            button {
                padding: 15px;
                font-size: 18px;
            }
            
            .current-operand {
                font-size: 28px;
            }
        }
    </style>
</head>
<body>
    <div class="calculator">
        <div class="display">
            <div class="previous-operand" id="previousOperand"></div>
            <div class="current-operand" id="currentOperand">0</div>
        </div>
        <div class="buttons">
            <button class="clear span-two" onclick="calculator.clear()">AC</button>
            <button class="operator" onclick="calculator.delete()">DEL</button>
            <button class="operator" onclick="calculator.chooseOperation('÷')">÷</button>
            
            <button onclick="calculator.appendNumber('7')">7</button>
            <button onclick="calculator.appendNumber('8')">8</button>
            <button onclick="calculator.appendNumber('9')">9</button>
            <button class="operator" onclick="calculator.chooseOperation('×')">×</button>
            
            <button onclick="calculator.appendNumber('4')">4</button>
            <button onclick="calculator.appendNumber('5')">5</button>
            <button onclick="calculator.appendNumber('6')">6</button>
            <button class="operator" onclick="calculator.chooseOperation('-')">-</button>
            
            <button onclick="calculator.appendNumber('1')">1</button>
            <button onclick="calculator.appendNumber('2')">2</button>
            <button onclick="calculator.appendNumber('3')">3</button>
            <button class="operator" onclick="calculator.chooseOperation('+')">+</button>
            
            <button onclick="calculator.appendNumber('.')">.</button>
            <button onclick="calculator.appendNumber('0')">0</button>
            <button class="equals" onclick="calculator.compute()">=</button>
        </div>
    </div>

    <script>
        class Calculator {
            constructor(previousOperandTextElement, currentOperandTextElement) {
                this.previousOperandTextElement = previousOperandTextElement;
                this.currentOperandTextElement = currentOperandTextElement;
                this.clear();
            }

            clear() {
                this.currentOperand = '0';
                this.previousOperand = '';
                this.operation = undefined;
                this.updateDisplay();
            }

            delete() {
                if (this.currentOperand === '0') return;
                this.currentOperand = this.currentOperand.toString().slice(0, -1);
                if (this.currentOperand === '') this.currentOperand = '0';
                this.updateDisplay();
            }

            appendNumber(number) {
                if (number === '.' && this.currentOperand.includes('.')) return;
                if (this.currentOperand === '0' && number !== '.') {
                    this.currentOperand = number;
                } else {
                    this.currentOperand = this.currentOperand.toString() + number.toString();
                }
                this.updateDisplay();
            }

            chooseOperation(operation) {
                if (this.currentOperand === '') return;
                if (this.previousOperand !== '') {
                    this.compute();
                }
                this.operation = operation;
                this.previousOperand = this.currentOperand;
                this.currentOperand = '0';
                this.updateDisplay();
            }

            compute() {
                let computation;
                const prev = parseFloat(this.previousOperand);
                const current = parseFloat(this.currentOperand);
                if (isNaN(prev) || isNaN(current)) return;
                switch (this.operation) {
                    case '+':
                        computation = prev + current;
                        break;
                    case '-':
                        computation = prev - current;
                        break;
                    case '×':
                        computation = prev * current;
                        break;
                    case '÷':
                        if (current === 0) {
                            this.currentOperand = 'Error';
                            this.previousOperand = '';
                            this.operation = undefined;
                            this.updateDisplay();
                            return;
                        }
                        computation = prev / current;
                        break;
                    default:
                        return;
                }
                this.currentOperand = this.formatNumber(computation);
                this.operation = undefined;
                this.previousOperand = '';
                this.updateDisplay();
            }

            formatNumber(number) {
                if (number === undefined || number === null) return '0';
                const floatNumber = parseFloat(number);
                if (isNaN(floatNumber)) return '0';
                
                // Handle very large or very small numbers
                if (Math.abs(floatNumber) > 999999999 || Math.abs(floatNumber) < 0.000001 && floatNumber !== 0) {
                    return floatNumber.toExponential(6);
                }
                
                // Round to avoid floating point precision issues
                const rounded = Math.round(floatNumber * 100000000) / 100000000;
                return rounded.toString();
            }

            updateDisplay() {
                this.currentOperandTextElement.innerText = this.currentOperand;
                if (this.operation != null) {
                    this.previousOperandTextElement.innerText = 
                        `${this.previousOperand} ${this.operation}`;
                } else {
                    this.previousOperandTextElement.innerText = this.previousOperand;
                }
            }
        }

        // Initialize calculator
        const previousOperandTextElement = document.getElementById('previousOperand');
        const currentOperandTextElement = document.getElementById('currentOperand');
        const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

        // Add ripple effect to buttons
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                ripple.classList.add('ripple');
                
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });

        // Keyboard support
        document.addEventListener('keydown', function(e) {
            if (e.key >= '0' && e.key <= '9') {
                calculator.appendNumber(e.key);
            } else if (e.key === '.') {
                calculator.appendNumber('.');
            } else if (e.key === '+') {
                calculator.chooseOperation('+');
            } else if (e.key === '-') {
                calculator.chooseOperation('-');
            } else if (e.key === '*') {
                calculator.chooseOperation('×');
            } else if (e.key === '/') {
                e.preventDefault();
                calculator.chooseOperation('÷');
            } else if (e.key === 'Enter' || e.key === '=') {
                calculator.compute();
            } else if (e.key === 'Escape') {
                calculator.clear();
            } else if (e.key === 'Backspace') {
                calculator.delete();
            }
        });
    </script>
</body>
</html>