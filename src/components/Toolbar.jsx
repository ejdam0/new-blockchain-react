import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export const Toolbar = () => {
    const account = useSelector((state) => state.appReducer.account);

    return (
        <Navbar fixed="top" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand>Zadania</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Zalogowano jako: {account}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};
