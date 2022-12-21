import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookContext } from '../contexts/BookContext'
import { deleteSelectedBook, updateSelectedBook } from '../function/http'

export default function BookTable({ heading, books }) {

    const navigate = useNavigate()
    const context = useContext(BookContext)

    // 1.Yoll
    const updateBook = async (id) => {
        navigate("/book/update/" + id, {
            state: { id: id }
        })
    }
    ////2.yol
    // const updateBook = async (book) => {
    //     navigate("/book/update/", {
    //         state: { book: book }
    //     })
    // }

    const deleteBook = async (id) => {
        try {
            await deleteSelectedBook(id)
            await context.deleteBook(id)
            // window.location.reload()
        } catch (error) {
            alert(error)
        }
    }
    var reader = books.map((b) => {
        return (
            <tr key={b.id}>
                <td><img src={b.picture} width={50} height={50} /></td>
                <td>{b.bookname}</td>
                <td>{b.description}</td>
                <td>{b.author}</td>
                <td><a className='btn btn-success'onClick={() => {updateBook(b.id)}}
                // onClick={() => {
                //     updateBook(b)
                // }}
                >Update</a></td>
                <td><button className='btn btn-danger' onClick={() => {
                    { deleteBook(b.id) }
                }}>Delete</button></td>
            </tr>
        )

    }/*  */)
    return (
        <>
            <div className='row'>
                <div className='col-md-7'>
                    <h3>{heading}</h3>
                    <button className='btn btn-primary' onClick={() => navigate("/book/create")}>New Book</button>
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th>Book </th>
                                <th>BookName</th>
                                <th>Description</th>
                                <th>Auther</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reader}
                            {/* <tr>
                                <td>{b.bookName}</td>
                                <td>{b.description}</td>
                                <td>{b.auther}</td>
                                <td><img src="{b.picture}" alt="" /></td>
                                <td><a className='btn btn-success'>Update</a></td>
                                <td><a className='btn btn-danger'>Delete</a></td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
