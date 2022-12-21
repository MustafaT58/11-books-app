import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { BookContext } from '../contexts/BookContext'
import { getBook, updateSelectedBook } from '../function/http'
import BookPage from './BookPage'

export default function BookUpdate() {
  const navigate=useNavigate()
  const contex=useContext(BookContext)
  const location = useLocation()
  const [selectedBook, setSelectedBook] = useState({
    id: "",
    bookname: "",
    description: "",
    author: "",
    picture: "",
    recyled: false,
  })
  //1.yol
  useEffect(()=>{
    getBook(location.state.id).then((res)=>{
      setSelectedBook(res.data)
    })
  },[])

/*   useEffect(() => {
    setSelectedBook(location.state.book)
  }, []) */

  const onChangeText = (event) => {
    setSelectedBook({...selectedBook,[event.target.name]:event.target.value})
  }

  const updateBook=async ()=>{
    try {
      await updateSelectedBook(location.state.id,selectedBook)
      await contex.updateBook(location.state.id,selectedBook)
      alert(selectedBook.bookname+"Güncellendi")
      navigate("/")
    } catch (error) {
      alert(error)
    }
  }

  return (
    <BookPage book={selectedBook} text={"Update Book"} handleBook={updateBook} onChangeText={onChangeText}/>
  )
}
