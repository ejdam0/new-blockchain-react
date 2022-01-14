import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { TaskProgress } from './TaskProgress';

export const TasksTable = () => {
    const tasks = useSelector((state) => state.appReducer.tasks);
    const isDarkStyle = useSelector((state) => state.appReducer.darkStyle);

    return (
        <Container style={{ marginTop: "5rem" }}>
            <Table striped bordered hover responsive variant={isDarkStyle ? 'dark' : ''}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Zadanie</th>
                        <th>Postęp</th>
                        <th>Wykonano</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, idx) => {
                        return (
                            <tr key={idx} >
                                <td>{task.id}</td>
                                <td>{task.taskName}</td>
                                <td><TaskProgress progress={task.progress} /></td>
                                <td>{task.isDone}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </Container>
    );
};
