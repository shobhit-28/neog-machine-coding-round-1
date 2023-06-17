import { useContext } from 'react'
import './homePage.css'
import { ReducerContext } from '../../reducerContext/reducerContext'
import { BookCard } from '../../components/bookCards/bookCard'

export const HomePage = () => {
    const {read, interested, reading} = useContext(ReducerContext)
    
    return (
        <div className="home-page page">
            <div className="read-shelf">
                <p className="head">Currently Reading</p>
                {reading.map((book) => <BookCard book={book} key={book.id}/>)}
            </div>
            <div className="read-shelf">
                <p className="head">Read Books</p>
                {read.map((book) => <BookCard book={book} key={book.id}/>)}
            </div>
            <div className="read-shelf">
                <p className="head">Want to read</p>
                {interested.map((book) => <BookCard book={book} key={book.id}/>)}
            </div>
        </div>
    )
}