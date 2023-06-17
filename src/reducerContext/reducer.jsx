import { types } from "./types"

export const reducer = (state, action) => {
    const {
        ADD_TO_READ,
    //     ADD_TO_CURRENTLY_READING,
    //     ADD_TO_INTERESTED
    } = types

    switch (action.type) {
        case ADD_TO_READ :
            return {
                ...state,
                read: [...state.read, action?.payload],
                interested: state.interested.filter(({id}) => id !== action.payload.id ),
                reading: state.reading.filter(({id}) => id !== action.payload.id )
            }

        default:
            break;
    }
}