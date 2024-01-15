import './App.css';
import './theme1.css';
import './theme2.css';
import './theme3.css';
import ThemeToggle from "./components/themeToggler";
import Display from "./components/Display";
import Keyboard from "./components/Keyboard";


function App() {
    return (
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
                                toggleBackground={'var(--toggle-background-1)'}
                                toggleKeyShadow={'var(--toggle-key-shadow-1)'}
                                toggleKeyBackground={'var(--toggle-key-background-1)'}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="calculator">
                <Display
                    displayValue={'1.000.000'}
                    background={'var(--screen-background-1)'}
                    textColor={'var(--text-white)'}
                />
                <Keyboard
                    keyboardBackground={'var(--keypad-background-1)'}
                />
            </div>
        </div>
    );
}

export default App;
