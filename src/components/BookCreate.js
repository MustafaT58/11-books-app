import React, { useContext, useState } from 'react'
import BookPage from './BookPage'
import {addSelectedBook} from '../function/http'
import { BookContext } from '../contexts/BookContext'
import { useNavigate } from 'react-router-dom'

export default function BookCreate() {
  const navigate=useNavigate()
  const context=useContext(BookContext)
  const [newBook, setNewBook] = useState({
    id: "",
    bookname: "",
    description: "",
    author: "",
    picture: "",
    recyled: false,
  })
  const createBook = async ()=>{
    console.log("New Book",newBook)
    try {
      const id=await addSelectedBook(newBook)
      context.addBook({...newBook,id:id})
      alert(id)
      navigate("/")
    } catch (error) {
      
    }
  } 

  const onChangeText=(event)=>{
    setNewBook({...newBook,[event.target.name]:event.target.value})
  }

  return (

    <BookPage book={newBook} onChangeText={onChangeText} handleBook={createBook} text={"Ekle"}/>
  )
}
