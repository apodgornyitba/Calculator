import React from "react";

function Display(props) {
    const { displayValue, background, textColor} = props;

    const displayStyle = {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '55%',
        backgroundColor: background,
        color: textColor,
        height: '120px',
        borderRadius: '10px',
        fontSize: '50px',
        margin: 'auto',
        paddingRight: '30px',
    }
    return (
        <div style={displayStyle}>
            <p>{displayValue}</p>
        </div>
    );
}

export default Display;