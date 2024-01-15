import React, { useState } from "react";
import { Button, Container } from "@mui/material";

function ToggleButton({ index, onClick, toggleKeyShadow, toggleKeyBackground }) {
    return (
        <Button
            sx={{
                backgroundColor: toggleKeyShadow,
                padding: '0',
                minHeight: '0',
                minWidth: '0',
                width: '15px',
                height: '15px',
                borderRadius: '50%',
                '&:hover': {
                    backgroundColor: toggleKeyBackground,
                },
            }}
            onClick={() => onClick(index)}
        />
    );
}

function ThemeToggle(props) {
    const { toggleBackground, toggleKeyShadow, toggleKeyBackground } = props;
    const [selectedButton, setSelectedButton] = useState(1);

    const handleButtonClick = (buttonIndex) => {
        setSelectedButton(buttonIndex);
    };

    return (
        <Container
            sx={{
                backgroundColor: toggleBackground,
                width: "75px",
                height: "30px",
                borderRadius: "20px",
                padding: "2px !important",
                paddingLeft: "4px !important",
                paddingRight: "4px !important",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <ToggleButton
                index={1}
                onClick={handleButtonClick}
                toggleKeyShadow={ selectedButton === 1 ? toggleKeyShadow : 'transparent' }
                toggleKeyBackground={ selectedButton === 1 ? toggleKeyBackground : 'transparent'}
            />
            <ToggleButton
                index={2}
                onClick={handleButtonClick}
                toggleKeyShadow={selectedButton === 2 ? toggleKeyShadow : 'transparent'}
                toggleKeyBackground={selectedButton === 2 ? toggleKeyBackground : 'transparent'}
            />
            <ToggleButton
                index={3}
                onClick={handleButtonClick}
                toggleKeyShadow={selectedButton === 3 ? toggleKeyShadow : 'transparent'}
                toggleKeyBackground={selectedButton === 3 ? toggleKeyBackground : 'transparent'}
            />
        </Container>
    );
}

export default ThemeToggle;
