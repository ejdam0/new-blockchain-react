import React, { useEffect, useState } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { renameTask } from 'store/AppReducer';
import '../assets/TaskRename.css';

export const TaskRename = (props) => {
    const [inputValue, setInputValue] = useState('');
    const [disabled, setDisabled] = useState(true);

    const account = useSelector((state) => state.appReducer.account);
    const dispatch = useDispatch();

    useEffect(() => {
        setInputValue(props.task.taskName);
    }, [props.task]);

    const handleChangeInput = (value) => {
        const inputValue = value.target.value;
        setInputValue(inputValue);
    };

    const handleChangeTaskName = () => {
        renameTask(dispatch, props.task.id, inputValue, account);
        setDisabled(true);
    };
    return (
        <Container>
            <Row>
                <Form.Control
                    disabled={props.task.isRecentlyCreated ? false : disabled}
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
