import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { ToggleDarkStyle } from './ToggleDarkStyle';

export const Toolbar = () => {
    const account = useSelector((state) => state.appReducer.account);
    const isDarkStyle = useSelector((state) => state.appReducer.darkStyle);

    return (
        <Navbar fixed="top" bg={isDarkStyle ? 'dark' : 'primary'} variant="dark">
            <Container>
                <Navbar.Brand>Zadania</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <>Zalogowano jako: {account} </>
                        <ToggleDarkStyle />
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};
