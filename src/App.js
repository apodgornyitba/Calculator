import './App.css';
import './theme1.css';
import './theme2.css';
import './theme3.css';
import ThemeToggle from "./components/themeToggle";
import Display from "./components/Display";
import Keyboard from "./components/Keyboard";
import {useState} from "react";
import * as math from 'mathjs';
import {ThemeProvider} from "./components/ThemeContext";

function App() {
    const [displayValue, setDisplayValue] = useState('');
    const [isCalculated, setIsCalculated] = useState(false);

    const handleNumberClick = (number) => {
        if (number === 'x') {
            setDisplayValue(displayValue + '*');
            return;
        }

        if (isCalculated && (number === '+' || number === '-' || number === 'x' || number === '/')) {
            setIsCalculated(false);
            setDisplayValue(displayValue + number);
            return;
        } else if (isCalculated && !isNaN(number)) {
            setDisplayValue(number);
            setIsCalculated(false);
            return;
        }

        if (displayValue === 'Math error') {
            setDisplayValue(number);
            return;
        }

        setDisplayValue(displayValue + number);
    }

    const handleDELClick = () => {
        if (displayValue === 'Math error') {
            setDisplayValue('');
            return;
        }
        setDisplayValue(displayValue.slice(0, -1));
    }

    const handleResetClick = () => {
        setDisplayValue('');
        setIsCalculated(false);
    }

    const handleEqualClick = () => {
        try {
            const result = math.evaluate(displayValue);

            if (!isNaN(result)) {
                const formattedResult = Number(result).toLocaleString('en-US', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 5,
                });

                setDisplayValue(formattedResult);
                setIsCalculated(true);
            } else {
                setDisplayValue('Math error');
            }
        } catch (error) {
            setDisplayValue('Math error');
        }
    };

    return (
        <ThemeProvider>
            <div className="App">
                <div className="titleAndTheme">
                    <h1 style={{marginTop: '50px'}}>calc</h1>
                    <div className="theme">
                        <p style={{marginRight: '30px', marginTop: '50px', letterSpacing: '2px'}}>THEME</p>
                        <div className="themeButtons">
                            <div>
                                <div className="labels">
                                    <p>1</p>
                                    <p>2</p>
                                    <p>3</p>
                                </div>
                                <ThemeToggle
                                    toggleBackground={'var(--toggle-background)'}
                                    toggleKeyShadow={'var(--toggle-key-shadow)'}
                                    toggleKeyBackground={'var(--toggle-key-background)'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="calculator">
                    <Display
                        displayValue={displayValue}
                        background={'var(--screen-background)'}
                        textColor={'var(--text-for-display)'}
                    />
                    <Keyboard
                        handleNumberClick={handleNumberClick}
                        handleDELClick={handleDELClick}
                        handleResetClick={handleResetClick}
                        handleEqualClick={handleEqualClick}
                        keyboardBackground={'var(--keypad-background)'}
                    />
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
