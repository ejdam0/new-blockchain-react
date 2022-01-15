import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeTaskCompletion } from '../store/AppReducer';

export const TaskDoneCheckbox = (props) => {
    const [checked, setChecked] = useState(false);

    const account = useSelector((state) => state.appReducer.account);
    const dispatch = useDispatch();

    useEffect(() => {
        setChecked(props.task.isDone);
    }, [props.task]);

    const handleToggleTaskCompletion = () => {
        changeTaskCompletion(dispatch, props.task.id, !checked, account);
    };

    return (
        <Form.Check
            checked={checked}
            label="Zadanie wykonane"
            onChange={() => handleToggleTaskCompletion()}
        />
    );
};
