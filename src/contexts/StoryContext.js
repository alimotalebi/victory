import {createContext, useContext} from 'react';

export const StoryContext = createContext({});
export const useStoryContext = () => useContext(StoryContext);