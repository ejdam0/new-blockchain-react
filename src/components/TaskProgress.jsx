import React, { useEffect, useState } from 'react';
import { Alert, Container, Form, ProgressBar, Row, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeTaskProgress } from '../store/AppReducer';

export const TaskProgress = (props) => {
    const [invalid, setInvalid] = useState(false);
    const [inputValue, setInputValue] = useState(0);

    const account = useSelector((state) => state.appReducer.account);
    const dispatch = useDispatch();

    useEffect(() => {
        setInputValue(props.task.progress);
    }, [props.task]);

    const handleValidateAndChangeInput = (value) => {
        const inputValue = parseInt(value.target.value);
        setInputValue(inputValue);
        if (inputValue > 100 || value.target.value < 0) {
            setInvalid(true);
        } else {
            setInvalid(false);
        }
    };

    const handleChangeProgress = () => {
        if (!invalid) {
            changeTaskProgress(dispatch, props.task.id, inputValue, props.task.isDone, account);
        }
    };

    return (
        <Stack>
            <Container>
                <Row style={{ marginBottom: "1rem", width: "50%" }}>
                    <Form.Label>Zmień postęp</Form.Label>
                    <Form.Control
                        onChange={(value) => handleValidateAndChangeInput(value)}
                        onBlur={() => handleChangeProgress()}
                        type="number"
                        value={inputValue}
                        isInvalid={invalid}
                    />
                </Row>
            </Container>
            <Container>
                {props.task.progress === 0 ?
                    <Row>
                        <Alert variant="danger">
                            Brak postępu w zadaniu!
                        </Alert>
                    </Row> :
                    <Row style={{ marginBottom: "1rem" }}>
                        <ProgressBar animated
                            now={props.task.progress}
                            label={`${props.task.progress}%`}
                            variant={parseInt(props.task.progress) === 100 ? "success" : ""} />
                    </Row>
                } </Container>
        </Stack>
    );
};
