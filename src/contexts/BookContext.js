import { createContext, useReducer } from "react";
import { } from '../function/http'

export const BookContext = createContext(
    {
        books: [],
        sortDesc: (books) => { },
        addBook: ({ bookname, auther, description }) => { },
        updateBook: ({ bookName, author, description }) => { },

    })
//State  metot ismi , parametre

function bookReducer(state, action) {
    switch (action.type) {

        case "SORTD":
            const inverted = action.payload.reverse();
            return inverted;
        case "DELETE":
            return state.filter((book) => book.id !== action.payload)
        case "ADD":
            return [action.payload, ...state]
        case "UPDATE":
            const updatableBookIndex = state.findIndex(
                (book) => book.id === action.payload.id
            )
            const updatableBook = state[updatableBookIndex]
            const updatedItem = { ...updatableBook, ...action.payload.data }
            const updatedBooks = [...state]
            updatedBooks[updatableBookIndex] = updatedItem
            return updatedBooks

        default:
            return state
    }
}
function BookProvider({ children }) {
    const [booksState, dispatch] = useReducer(bookReducer, [])
    function sortDesc(books) {

        //alert (children)
        dispatch({ type: 'SORTD', payload: books });
    }
    function deleteBook(id) {
        dispatch({ type: 'DELETE', payload: id });
    }

    function addBook(bookData) {
        dispatch({ type: 'ADD', payload: bookData });
    }

    function updateBook(id, bookData) {
        dispatch({ type: 'UPDATE', payload: { id: id, data: bookData } });
    }

    const value = {
        books: booksState,
        sortDesc: sortDesc,
        deleteBook: deleteBook,
        addBook: addBook,
        updateBook: updateBook,
    }



    return (
        <BookContext.Provider value={value}>
            {children}
        </BookContext.Provider>
    )
}
export default BookProvider