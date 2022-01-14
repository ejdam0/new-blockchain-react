import React, { useEffect, useState } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import '../assets/TaskRename.css';

export const TaskRename = (props) => {
    const [inputValue, setInputValue] = useState('');
    const [disabled, setDisabled] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        console.log(props.taskName);
        setInputValue(props.taskName);
    }, [props.taskName]);

    const handleChangeInput = (value) => {
        const inputValue = value.target.value;
        setInputValue(inputValue);
    };

    const handleChangeTaskName = () => {
        // TODO dispatch and update props.id, inputValue
        setDisabled(true);
    };
    return (
        <Container>
            <Row>
                <Form.Control
                    disabled={disabled}
                    onChange={(value) => handleChangeInput(value)}
                    onBlur={() => handleChangeTaskName()}
                    value={inputValue}
                />
            </Row>
            <Row>
                <Button
                    className="center-button"
                    size="sm"
                    onClick={() => setDisabled(false)}>
                    Zmień zadanie
                </Button>
            </Row>
        </Container >
    );
};
