import { useContext } from 'react'
import './homePage.css'
import { ReducerContext } from '../../reducerContext/reducerContext'
import { BookCard } from '../../components/bookCards/bookCard'

export const HomePage = () => {
    const { read, interested, reading } = useContext(ReducerContext)

    return (
        <div className="home-page page">
            <div className="shelf">
                <p className="head">Currently Reading</p>
                {reading.length > 0
                    ?
                    <div className="container">
                        {reading.map((book) => <BookCard book={book} key={book.id} />)}
                    </div>
                    :
                    <div className="declaration">
                        <p>There is no book here</p>
                    </div>
                }
            </div>
            <div className="shelf">
                <p className="head">Read Books</p>
                {read.length > 0
                    ?
                    <div className="container">
                        {read.map((book) => <BookCard book={book} key={book.id} />)}
                    </div>
                    :
                    <div className="declaration">
                        <p>There is no book here</p>
                    </div>
                }
            </div>
            <div className="shelf">
                <p className="head">Want to read</p>
                {interested.length > 0
                    ?
                    <div className="container">
                        {interested.map((book) => <BookCard book={book} key={book.id} />)}
                    </div>
                    :
                    <div className="declaration">
                        <p>There is no book here</p>
                    </div>
                }
            </div>
        </div>
    )
}