import React from 'react'

export default function BookPage({ book, text, onChangeText, handleBook }) {
    return (
        <div className="row">
            <div className="col-md-5">
                <label>Book Name</label>
                <input
                    className="form-control"
                    type="text"
                    value={book.bookname}
                    name="bookname"
                    onChange={onChangeText}
                />
                <label>Author</label>
                <input
                    className="form-control"
                    type="text"
                    value={book.author}
                    name="author"
                    onChange={onChangeText}
                />
                <label>Description</label>
                <input
                    className="form-control"
                    type="text"
                    value={book.description}
                    name="description"
                    onChange={onChangeText}
                />
                <input className="btn btn-success mt-3" type="submit" value={text}
                    onClick={() => handleBook()}
                />
            </div>
        </div>
    )
}