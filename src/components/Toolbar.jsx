import React from 'react';
import { useSelector } from 'react-redux';

export const Toolbar = () => {
    const account = useSelector((state) => state.appReducer.account);
    return (
        <div>This is your account: {account}</div>
    );
};
