import React, { useEffect, useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext';
import BookTable from './BookTable';
import { useNavigate } from 'react-router-dom';
export default function BookRecyled() {
  const navigate = useNavigate()


  const bookCtx = useContext(BookContext);

  const rclBooks = bookCtx.books.filter((c) => {
    return (c.recyled === true)
  })

  useEffect(() => {
    if (rclBooks.length == 0) {
      navigate("/")
    }
  },[rclBooks.length])
  // console.log(rclBooks)

  return (

    <BookTable heading={"Recyled Books"} books={rclBooks} />
  )
}