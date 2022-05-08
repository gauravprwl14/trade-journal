import React from 'react';
import { Redirect } from 'react-router-dom';
import { isPresentLocalStorageTokens } from '../../utils/tokenHelper';
import { Routes } from '../../routes';

console.log('Routes', { Routes })

const Landing = () => {
    console.log('%c isPresentLocalStorageTokens ', 'background: lime; color: black', isPresentLocalStorageTokens());

    if (isPresentLocalStorageTokens()) {
        return <Redirect to={Routes.Dashboard.path} />;
    }

    return <Redirect to={Routes.Signin.path} />;
};

export default Landing;
