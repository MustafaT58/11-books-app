import React, { useEffect, useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext';
import { getBooks } from '../function/http';
import BookTable from './BookTable';

export default function BookList() {
  // const [blist, setBlist] = useState([]); // Buraya global olarak blist tanımlamazsak return içerisinde blist i kullanamıyorduk. Bu sayede map fonksiyonunu return de kullanabileceğiz.
  const bookCtx = useContext(BookContext)

  useEffect(() => {
    async function getAllBooks() {
      try {
        const books = await getBooks();
        // setBlist(books) 
        bookCtx.sortDesc(books); // context te saklamış olduk.
        console.log(bookCtx.books)
      } catch (error) {
        console.log(error)
      }
    }
    getAllBooks()
  }, [])

  

  // console.log(blist)

  return (
    <BookTable heading={"All Books"} books={bookCtx.books} />
  )
}
