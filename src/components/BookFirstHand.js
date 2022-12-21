import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookContext } from '../contexts/BookContext'
import BookTable from './BookTable'

export default function BookFirstHand() {
  const navigate = useNavigate()
  const bookCtx = useContext(BookContext)
  const firstHandBooks = bookCtx.books.filter((b) => {
    return (b.recyled === false)
  })
  console.log(firstHandBooks)
  useEffect(() => {
    if (firstHandBooks.length === 0) {
      navigate("/")
    }
  },[firstHandBooks.length])
  return (
    <BookTable heading={"FirtHandBooks Books"} books={firstHandBooks} />

  )
}