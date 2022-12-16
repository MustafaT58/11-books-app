import { createContext, useReducer } from "react";
import { } from '../function/http'

export const BookContext = createContext(
    {
        books: [],
        sortDesc: (books) => { },
    })
//State  metot ismi , parametre

function bookReducer(state, action) {
    switch (action.type) {

        case "SET":
            const inverted = action.payload.reverse();
            return inverted;
        default:
            return state
    }
}
function BookProvider({ children }) {
    const [booksState, dispatch] = useReducer(bookReducer, [])
    function sortDesc(books) {

        //alert (children)
        dispatch({ type: 'SET', payload: books });
    }
    const value = {
        books: booksState,
        sortDesc: sortDesc,
    }

    return (
        <BookContext.Provider value={value}>
            {children}
        </BookContext.Provider>
    )
}
export default BookProvider