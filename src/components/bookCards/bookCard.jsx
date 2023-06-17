/* eslint-disable react/prop-types */
import { useContext } from 'react'
import './bookCard.css'
import { ReducerContext } from '../../reducerContext/reducerContext'

export const BookCard = ({ book }) => {
    const { addToRead, addToInterested, addToReading, addToNone, read, interested, reading, none } = useContext(ReducerContext)

    const changeHandler = (event) => {
        if (event.target.value === 'read') {
            addToRead(book)
        }
        if (event.target.value === 'interested') {
            addToInterested(book)
        }
        if (event.target.value === 'reading') {
            addToReading(book)
        }
        if (event.target.value === 'none') {
            addToNone(book)
        }
    }

    return (
        <div className="book-card">
            <div className="img-container">
                <img src={book.img} alt={book.bookName} />
            </div>
            <select name="categories" id="categories" onChange={(event) => changeHandler(event)} className='categories'>
                {/* <option value="" disabled selected>Categories...</option> */}
                <option value="read">{read.includes(book) && '✔️'} Read</option>
                <option value="interested" selected={interested.includes(book)}>{interested.includes(book) && '✔️'}Want to Read</option>
                <option value="reading" selected={reading.includes(book)}>{reading.includes(book) && '✔️'}Currently Reading</option>
                <option value="none" selected={none.includes(book)}>{none.includes(book) && '✔️'}None</option>
            </select>
            <div className="title-author">
                <p className="title">{book.bookName}</p>
                <p className="author">{book.writer}</p>
            </div>
        </div>
    )
}