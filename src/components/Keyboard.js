import React from "react";
import {Button} from "@mui/material";

function Key(props) {
    const {handle, keyValue, keyBackground, lightKeyBackground, keyShadow, textColor, width} = props;

    const keyStyle = {
        backgroundColor: keyBackground,
        boxShadow: `0 5px ${keyShadow}`,
        color: textColor,
        width: width ? width : '21%',
        borderRadius: '10px',
        fontSize: '30px',
        marginLeft: '3%',
        marginBottom: '2%',
        marginTop: '2%',
        padding: '1%',

    }
    return (
        <Button
            onClick={() => handle(keyValue)}
            style={keyStyle}
            sx={{
                '&:hover': {
                    backgroundColor: `${lightKeyBackground} !important`,
                }
            }}>
            <p style={{margin: '0', fontFamily: 'League Spartan'}}>{keyValue}</p>
        </Button>
    );
}

function Keyboard(props) {
    const {keyboardBackground, handleNumberClick, handleDELClick, handleEqualClick, handleResetClick} = props;

    const keyboardStyle = {
        marginLeft: '20.5%',
        width: '55%',
        backgroundColor: keyboardBackground,
        borderRadius: '10px',
        padding: '2%',
        marginTop: '4%',
    };

    return (
        <div className="keyboard" style={keyboardStyle}>
            <div className="row">
                <Key
                    handle={handleNumberClick}
                    keyValue={'7'}
                    keyBackground={'var(--light-grayish-orange)'}
                    lightKeyBackground={'var(--lighter-grayish-orange)'}
                    keyShadow={'var(--grayish-orange-shadow)'}
                    textColor={'var(--text-color)'}
                />
                <Key
                    handle={handleNumberClick}
                    keyValue={'8'}
                    keyBackground={'var(--light-grayish-orange)'}
                    lightKeyBackground={'var(--lighter-grayish-orange)'}
                    keyShadow={'var(--grayish-orange-shadow)'}
                    textColor={'var(--text-color)'}
                />
                <Key
                    handle={handleNumberClick}
                    keyValue={'9'}
                    keyBackground={'var(--light-grayish-orange)'}
                    lightKeyBackground={'var(--lighter-grayish-orange)'}
                    keyShadow={'var(--grayish-orange-shadow)'}
                    textColor={'var(--text-color)'}
                />
                <Key
                    handle={handleDELClick}
                    keyValue={'DEL'}
                    keyBackground={'var(--key-background)'}
                    lightKeyBackground={'var(--key-background-light)'}
                    keyShadow={'var(--key-shadow)'}
                    textColor={'var(--text-white)'}
                />
            </div>
            <div className="row">
                <Key
                    handle={handleNumberClick}
                    keyValue={'4'}
                    keyBackground={'var(--light-grayish-orange)'}
                    lightKeyBackground={'var(--lighter-grayish-orange)'}
                    keyShadow={'var(--grayish-orange-shadow)'}
                    textColor={'var(--text-color)'}
                />
                <Key
                    handle={handleNumberClick}
                    keyValue={'5'}
                    keyBackground={'var(--light-grayish-orange)'}
                    lightKeyBackground={'var(--lighter-grayish-orange)'}
                    keyShadow={'var(--grayish-orange-shadow)'}
                    textColor={'var(--text-color)'}
                />
                <Key
                    handle={handleNumberClick}
                    keyValue={'6'}
                    keyBackground={'var(--light-grayish-orange)'}
                    lightKeyBackground={'var(--lighter-grayish-orange)'}
                    keyShadow={'var(--grayish-orange-shadow)'}
                    textColor={'var(--text-color)'}
                />
                <Key
                    handle={handleNumberClick}
                    keyValue={'+'}
                    keyBackground={'var(--light-grayish-orange)'}
                    lightKeyBackground={'var(--lighter-grayish-orange)'}
                    keyShadow={'var(--grayish-orange-shadow)'}
                    textColor={'var(--text-color)'}
                />
            </div>
            <div className="row">
                <Key
                    handle={handleNumberClick}
                    keyValue={'1'}
                    keyBackground={'var(--light-grayish-orange)'}
                    lightKeyBackground={'var(--lighter-grayish-orange)'}
                    keyShadow={'var(--grayish-orange-shadow)'}
                    textColor={'var(--text-color)'}
                />
                <Key
                    handle={handleNumberClick}
                    keyValue={'2'}
                    keyBackground={'var(--light-grayish-orange)'}
                    lightKeyBackground={'var(--lighter-grayish-orange)'}
                    keyShadow={'var(--grayish-orange-shadow)'}
                    textColor={'var(--text-color)'}
                />
                <Key
                    handle={handleNumberClick}
                    keyValue={'3'}
                    keyBackground={'var(--light-grayish-orange)'}
                    lightKeyBackground={'var(--lighter-grayish-orange)'}
                    keyShadow={'var(--grayish-orange-shadow)'}
                    textColor={'var(--text-color)'}
                />
                <Key
                    handle={handleNumberClick}
                    keyValue={'-'}
                    keyBackground={'var(--light-grayish-orange)'}
                    lightKeyBackground={'var(--lighter-grayish-orange)'}
                    keyShadow={'var(--grayish-orange-shadow)'}
                    textColor={'var(--text-color)'}
                />
            </div>
            <div className="row">
                <Key
                    handle={handleNumberClick}
                    keyValue={'.'}
                    keyBackground={'var(--light-grayish-orange)'}
                    lightKeyBackground={'var(--lighter-grayish-orange)'}
                    keyShadow={'var(--grayish-orange-shadow)'}
                    textColor={'var(--text-color)'}
                />
                <Key
                    handle={handleNumberClick}
                    keyValue={'0'}
                    keyBackground={'var(--light-grayish-orange)'}
                    lightKeyBackground={'var(--lighter-grayish-orange)'}
                    keyShadow={'var(--grayish-orange-shadow)'}
                    textColor={'var(--text-color)'}
                />
                <Key
                    handle={handleNumberClick}
                    keyValue={'/'}
                    keyBackground={'var(--light-grayish-orange)'}
                    lightKeyBackground={'var(--lighter-grayish-orange)'}
                    keyShadow={'var(--grayish-orange-shadow)'}
                    textColor={'var(--text-color)'}
                />
                <Key
                    handle={handleNumberClick}
                    keyValue={'x'}
                    keyBackground={'var(--light-grayish-orange)'}
                    lightKeyBackground={'var(--lighter-grayish-orange)'}
                    keyShadow={'var(--grayish-orange-shadow)'}
                    textColor={'var(--text-color)'}
                />
            </div>
            <div className="row">
                <Key
                    handle={handleResetClick}
                    width={'45%'}
                    keyValue={'RESET'}
                    keyBackground={'var(--key-background)'}
                    lightKeyBackground={'var(--key-background-light)'}
                    keyShadow={'var(--key-shadow)'}
                    textColor={'var(--text-white)'}
                />
                <Key
                    handle={handleEqualClick}
                    width={'45%'}
                    keyValue={'='}
                    keyBackground={'var(--toggle-key-background)'}
                    lightKeyBackground={'var(--toggle-key-background-light)'}
                    keyShadow={'var(--toggle-key-shadow)'}
                    textColor={'var(--text-white)'}
                />
            </div>
        </div>
    );
}

export default Keyboard;