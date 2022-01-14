import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkAppStyle } from '../store/AppReducer';

export const ToggleDarkStyle = () => {
    const dispatch = useDispatch();
    const isDarkStyle = useSelector((state) => state.appReducer.darkStyle);
    const toggleAppStyle = (value) => {
        dispatch(setDarkAppStyle(value));
    };
    return (
        <ButtonGroup style={{ marginLeft: "1rem" }}>
            <Button variant="light" onClick={() => toggleAppStyle(false)} disabled={!isDarkStyle}>Jasny</Button>
            <Button variant="dark" onClick={() => toggleAppStyle(true)} disabled={isDarkStyle}> Ciemny</Button>
        </ButtonGroup >
    );
};
