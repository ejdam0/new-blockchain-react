import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import '../assets/TaskTable.css';
import { TaskDoneCheckbox } from './TaskDoneCheckbox';
import { TaskProgress } from './TaskProgress';
import { TaskRename } from './TaskRename';


export const TasksTable = () => {
    const tasks = useSelector((state) => state.appReducer.tasks);
    const isDarkStyle = useSelector((state) => state.appReducer.darkStyle);

    return (
        <Container style={{ marginTop: "1rem" }}>
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
                            <tr key={idx} className="middle-contents">
                                <td>{task.id}</td>
                                <td><TaskRename taskName={task.taskName} isRecentlyCreated={task.isRecentlyCreated} id={task.id} /></td>
                                <td><TaskProgress progress={task.progress} id={task.id} /></td>
                                <td><TaskDoneCheckbox isDone={task.isDone} id={task.id} /></td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </Container>
    );
};
