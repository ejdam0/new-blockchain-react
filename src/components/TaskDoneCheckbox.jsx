import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

export const TaskDoneCheckbox = (props) => {
    const [checked, setChecked] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        setChecked(props.task.isDone);
    }, [props.task.isDone]);

    const handleToggleTaskCompletion = () => {
        setChecked(!checked);
        // todo dispatch toggle completion, update, props.task.id, checked
    };

    return (
        <>
            {props.task.isRecentlyCreated ?
                null :
                <Form.Check
                    checked={checked}
                    label="Zadanie wykonane"
                    onChange={() => handleToggleTaskCompletion()}
                />
            }
        </>
    );
};
