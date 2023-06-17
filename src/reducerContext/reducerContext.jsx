import { createContext, useReducer } from "react";

import { bookArray } from "../data/bookData";
import { reducer } from "./reducer";
import { types } from "./types";

export const ReducerContext = createContext();

// eslint-disable-next-line react/prop-types
export const ReducerContextHandler = ({children}) => {
    const {
        ADD_TO_READ,
        ADD_TO_CURRENTLY_READING,
        ADD_TO_INTERESTED,
        ADD_TO_NONE
    } = types
    
    const initialState = {
        allBooks: bookArray,
        read: bookArray.filter(({category}) => category === 'read' ),
        interested: bookArray.filter(({category}) => category === 'interested' ),
        reading: bookArray.filter(({category}) => category === 'reading' ),
        none: bookArray.filter(({category}) => category === 'none' ),
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToRead = (book) => {
        dispatch({
            type: ADD_TO_READ,
            payload: book
        })
    }
    const addToInterested = (book) => {
        dispatch({
            type: ADD_TO_INTERESTED,
            payload: book
        })
    }
    const addToReading = (book) => {
        dispatch({
            type: ADD_TO_CURRENTLY_READING,
            payload: book
        })
    }
    const addToNone = (book) => {
        dispatch({
            type: ADD_TO_NONE,
            payload: book
        })
    }

    return (
        <ReducerContext.Provider value={{
            addToRead,
            addToInterested,
            addToNone,
            addToReading,
            allBooks: state?.allBooks,
            read: state?.read,
            interested: state?.interested,
            reading: state?.reading,
            none: state.none
        }}>
            {children}
        </ReducerContext.Provider>
    )
}