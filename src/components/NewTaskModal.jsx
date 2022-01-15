import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setIsNewTaskModalOpen } from 'store/AppReducer';
import '../assets/TaskTable.css';
import { addNewTask } from '../store/AppReducer';

export const NewTaskModal = () => {
    const [inputValue, setInputValue] = useState('');

    const isModalOpen = useSelector((state) => state.appReducer.isNewTaskModalOpen);
    const account = useSelector((state) => state.appReducer.account);
    const dispatch = useDispatch();

    const handleClose = () => dispatch(setIsNewTaskModalOpen(false));
    const handleChangeInput = (value) => {
        const inputValue = value.target.value;
        setInputValue(inputValue);
    };

    const handleSave = () => {
        addNewTask(dispatch, inputValue, account);
        handleClose();
    };

    return (
        <Modal
            show={isModalOpen}
            onHide={handleClose}
            backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Dodaj nowe zadanie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Control
                    onChange={(value) => handleChangeInput(value)}
                    value={inputValue}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="secondary"
                    onClick={handleClose}>
                    Zamknij
                </Button>
                <Button
                    variant="primary"
                    onClick={handleSave}>
                    Zapisz
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
