import {createContext, useContext} from 'react';

export const TokenContext = createContext({});
export const useTokenContext = () => useContext(TokenContext);