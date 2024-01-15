import React from "react";
import {Button} from "@mui/material";

function Key(props) {
    const {keyValue, keyBackground, keyShadow, textColor, width} = props;

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
        <Button style={keyStyle}>
            <p style={{margin: '0', fontFamily: 'League Spartan'}}>{keyValue}</p>
        </Button>
    );
}

function Keyboard(props) {
    const {keyboardBackground} = props;

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
                    keyValue={'7'}
                    keyBackground={'var(--light-grayish-orange-1)'}
                    keyShadow={'var(--grayish-orange-shadow-1)'}
                    textColor={'var(--text-color)'}
                />
                <Key
                    keyValue={'8'}
                    keyBackground={'var(--light-grayish-orange-1)'}
                    keyShadow={'var(--grayish-orange-shadow-1)'}
                    textColor={'var(--text-color)'}
                />
                <Key
                    keyValue={'9'}
                    keyBackground={'var(--light-grayish-orange-1)'}
                    keyShadow={'var(--grayish-orange-shadow-1)'}
                    textColor={'var(--text-color)'}
                />
                <Key
                    keyValue={'DEL'}
                    keyBackground={'var(--key-background-1)'}
                    keyShadow={'var(--key-shadow-1)'}
                    textColor={'var(--text-white)'}
                />
            </div>
            <div className="row">
                <Key
                    keyValue={'4'}
                    keyBackground={'var(--light-grayish-orange-1)'}
                    keyShadow={'var(--grayish-orange-shadow-1)'}
                    textColor={'var(--text-color)'}
                />
                <Key
                    keyValue={'5'}
                    keyBackground={'var(--light-grayish-orange-1)'}
                    keyShadow={'var(--grayish-orange-shadow-1)'}
                    textColor={'var(--text-color)'}
                />
                <Key
                    keyValue={'6'}
                    keyBackground={'var(--light-grayish-orange-1)'}
                    keyShadow={'var(--grayish-orange-shadow-1)'}
                    textColor={'var(--text-color)'}
                />
                <Key
                    keyValue={'+'}
                    keyBackground={'var(--light-grayish-orange-1)'}
                    keyShadow={'var(--grayish-orange-shadow-1)'}
                    textColor={'var(--text-color)'}
                />
            </div>
            <div className="row">
                <Key
                    keyValue={'1'}
                    keyBackground={'var(--light-grayish-orange-1)'}
                    keyShadow={'var(--grayish-orange-shadow-1)'}
                    textColor={'var(--text-color)'}
                />
                <Key
                    keyValue={'2'}
                    keyBackground={'var(--light-grayish-orange-1)'}
                    keyShadow={'var(--grayish-orange-shadow-1)'}
                    textColor={'var(--text-color)'}
                />
                <Key
                    keyValue={'3'}
                    keyBackground={'var(--light-grayish-orange-1)'}
                    keyShadow={'var(--grayish-orange-shadow-1)'}
                    textColor={'var(--text-color)'}
                />
                <Key
                    keyValue={'-'}
                    keyBackground={'var(--light-grayish-orange-1)'}
                    keyShadow={'var(--grayish-orange-shadow-1)'}
                    textColor={'var(--text-color)'}
                />
            </div>
            <div className="row">
                <Key
                    keyValue={'.'}
                    keyBackground={'var(--light-grayish-orange-1)'}
                    keyShadow={'var(--grayish-orange-shadow-1)'}
                    textColor={'var(--text-color)'}
                />
                <Key
                    keyValue={'0'}
                    keyBackground={'var(--light-grayish-orange-1)'}
                    keyShadow={'var(--grayish-orange-shadow-1)'}
                    textColor={'var(--text-color)'}
                />
                <Key
                    keyValue={'/'}
                    keyBackground={'var(--light-grayish-orange-1)'}
                    keyShadow={'var(--grayish-orange-shadow-1)'}
                    textColor={'var(--text-color)'}
                />
                <Key
                    keyValue={'x'}
                    keyBackground={'var(--light-grayish-orange-1)'}
                    keyShadow={'var(--grayish-orange-shadow-1)'}
                    textColor={'var(--text-color)'}
                />
            </div>
            <div className="row">
                <Key
                    width={'45%'}
                    keyValue={'RESET'}
                    keyBackground={'var(--key-background-1)'}
                    keyShadow={'var(--key-shadow-1)'}
                    textColor={'var(--text-white)'}
                />
                <Key
                    width={'45%'}
                    keyValue={'='}
                    keyBackground={'var(--toggle-key-background-1)'}
                    keyShadow={'var(--toggle-key-shadow-1)'}
                    textColor={'var(--text-white)'}
                />
            </div>
        </div>
    );
}

export default Keyboard;