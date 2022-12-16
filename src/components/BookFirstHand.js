import React, { useEffect, useState, useContext } from 'react'
import { getBooks } from '../function/http'

export default function BookFirstHand() {
  const [bList, setBList] = useState([])

  useEffect(() => {
    async function getAllBooks() {
      try {
        const books = await getBooks()
        setBList(books.filter((b)=>{
          return (b.recyled===false)
        }))

      }
      catch (error) {
        console.log(error)
      }
    }
    getAllBooks()
  }, [])

  console.log(bList)
}
