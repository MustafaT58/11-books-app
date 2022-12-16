import React, { useEffect, useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

export default function BookRecyled() {

  const bookCtx=useContext(BookContext)
  const rclBooks=bookCtx.sortDesc()
  console.log(rclBooks)
  

  // useEffect(() => {
  //   async function getAllBooks() {
  //     try {
  //       const books = await getBooks()
  //       setBList(books.filter((b) => {
  //         return (b.recyled === true)
  //       }))
  //     }
  //     catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getAllBooks()
  // }, [])
  // console.log(bList)

  return (

    <>

    </>
  )
}
