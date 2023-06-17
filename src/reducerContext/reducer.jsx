import { types } from "./types"

export const reducer = (state, action) => {
    const {
        ADD_TO_READ,
        ADD_TO_CURRENTLY_READING,
        ADD_TO_INTERESTED,
        ADD_TO_NONE
    } = types

    switch (action.type) {
        case ADD_TO_READ :
            return {
                ...state,
                read: [...state.read, action?.payload],
                interested: state.interested.filter(({id}) => id !== action.payload.id ),
                reading: state.reading.filter(({id}) => id !== action.payload.id ),
                none: state.none.filter(({id}) => id !== action.payload.id )
            }
        case ADD_TO_CURRENTLY_READING :
            return {
                ...state,
                reading: [...state.reading, action?.payload],
                interested: state.interested.filter(({id}) => id !== action.payload.id ),
                read: state.read.filter(({id}) => id !== action.payload.id ),
                none: state.none.filter(({id}) => id !== action.payload.id )
            }
        case ADD_TO_INTERESTED :
            return {
                ...state,
                interested: [...state.interested, action?.payload],
                reading: state.reading.filter(({id}) => id !== action.payload.id ),
                read: state.read.filter(({id}) => id !== action.payload.id ),
                none: state.none.filter(({id}) => id !== action.payload.id )
            }
        case ADD_TO_NONE :
            return {
                ...state,
                none: [...state.none, action?.payload],
                reading: state.reading.filter(({id}) => id !== action.payload.id ),
                read: state.read.filter(({id}) => id !== action.payload.id ),
                interested: state.interested.filter(({id}) => id !== action.payload.id )
            }

        default:
            break;
    }
}