import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

export const TaskDoneCheckbox = (props) => {
    const [checked, setChecked] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        setChecked(props.isDone);
    }, [props.isDone]);

    const handleToggleTaskCompletion = () => {
        setChecked(!checked);
        // todo dispatch toggle completion, update, props.id, checked
    };

    return (
        <Form.Check
            checked={checked}
            label="Zadanie wykonane"
            onChange={() => handleToggleTaskCompletion()}
        />
    );
};
