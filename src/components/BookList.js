import React, { useEffect, useState, useContext } from 'react'
import { BookContext } from '../contexts/BookContext'
import { getBooks } from '../function/http'

export default function BookList() {
  const [bList, setBList] = useState([])
  const bookCtx=useContext(BookContext)

  useEffect(() => {
    async function getAllBooks() {
      try {
        const books = await getBooks()
        setBList(books)
      bookCtx.sortDesc(books)

      }
      catch (error) {
        console.log(error)
      }
    }
    getAllBooks()
  }, [])
  console.log(bList)

  return (

    <>

    </>
  )
}
