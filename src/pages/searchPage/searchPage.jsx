/* eslint-disable no-unsafe-optional-chaining */
import { useState } from 'react';
import './searchPage.css'
import { BookCard } from '../../components/bookCards/bookCard';
import { bookArray } from '../../data/bookData';

export const SearchPage = () => {
    const allBooks = bookArray

    const [searchResults, setSearchResults] = useState([])

    const searchBarChangeHandler = (event) => {
        if (event?.target?.value?.length === 0) {
            setSearchResults([])
        } else {
            setSearchResults(
                [
                    ...allBooks?.filter((user) => user?.bookName?.slice(0, event?.target?.value.length).toLowerCase() === event?.target?.value.toLowerCase()),
                    ...allBooks?.filter((user) => user?.bookName?.slice(0, event?.target?.value.length).toLowerCase() !== event?.target?.value.toLowerCase())
                        ?.filter((user) => user?.bookName.toLowerCase()?.includes(event?.target?.value?.toLowerCase()))
                ]
            )
        }
    }

    return (
        <div className="search-page page">
            <div className="searchbar">
                <input type="text" name="" id="" className="search" placeholder='Search Books' onChange={(event) => searchBarChangeHandler(event)} />
            </div>
            <div className="card-container">
                {searchResults.length !== 0
                    ?
                    searchResults.map((book) => <BookCard book={book} key={book.id} />)
                    :
                    allBooks.map((book) => <BookCard book={book} key={book.id} />)
                }
            </div>
        </div>
    )
}