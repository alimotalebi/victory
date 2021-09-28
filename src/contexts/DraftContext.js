import {createContext, useContext} from 'react';

export const DraftContext = createContext({});
export const useDraftContext = () => useContext(DraftContext);