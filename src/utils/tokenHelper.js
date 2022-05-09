

import _ from 'lodash';
import { isNilOrEmpty } from './helper';



const MY_WEB_APP_TOKENS = 'my-web-app-tokens';
const TOKENS = ['userName', 'accessToken', 'email', 'name', 'id'];



export const getLocalStorageTokens = () => {
    const currentTokensString = localStorage.getItem(MY_WEB_APP_TOKENS);
    const currentTokensObject = JSON.parse(currentTokensString);

    const returnTokens = {};

    TOKENS.forEach((token) => {
        returnTokens[`${token}`] = _.get(currentTokensObject, [`${token}`], '');
    });

    return returnTokens;
};

export const setLocalStorageTokens = (tokens) => {
    const currentTokens = getLocalStorageTokens();
    const newTokensValues = { ...currentTokens, ...tokens };
    const tokensToSet = {};

    TOKENS.forEach((token) => {
        tokensToSet[`${token}`] = newTokensValues[`${token}`];
    });

    console.log('%c tokensToSet ', 'background: lime; color: black', { tokensToSet });

    localStorage.setItem(MY_WEB_APP_TOKENS, JSON.stringify(tokensToSet));
};

export const isPresentLocalStorageTokens = () => {
    const currentTokens = getLocalStorageTokens();
    let isTokenPresent = true;

    const tokenValue = currentTokens[`email`];
    if (isNilOrEmpty(tokenValue)) {
        isTokenPresent = false;
    }

    return isTokenPresent;
};

export const clearLocalStorageTokens = () => {
    localStorage.removeItem(MY_WEB_APP_TOKENS);
};
