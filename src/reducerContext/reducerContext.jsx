import { createContext, useReducer } from "react";

import { bookArray } from "../data/bookData";
import { reducer } from "./reducer";
import { types } from "./types";

export const ReducerContext = createContext();

// eslint-disable-next-line react/prop-types
export const ReducerContextHandler = ({children}) => {
    const {
        ADD_TO_READ,
    //     ADD_TO_CURRENTLY_READING,
    //     ADD_TO_INTERESTED
    } = types
    
    const initialState = {
        allBooks: bookArray,
        read: bookArray.filter(({category}) => category === 'read' ),
        interested: bookArray.filter(({category}) => category === 'interested' ),
        reading: bookArray.filter(({category}) => category === 'reading' )
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToRead = (book) => {
        dispatch({
            type: ADD_TO_READ,
            payload: book
        })
    }

    return (
        <ReducerContext.Provider value={{
            addToRead,
            read: state?.read,
            interested: state?.interested,
            reading: state?.reading
        }}>
            {children}
        </ReducerContext.Provider>
    )
}