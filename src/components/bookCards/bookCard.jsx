import './bookCard.css'

export const BookCard = ({ book }) => {
    return (
        <div className="book-card">
            <div className="img-container">
                <img src={book.img} alt={book.bookName} />
                <select name="categories" id="categories">
                    <option value="read">{book.category === 'read' && '✔️'} Read</option>
                    <option value="interested">{book.category === 'interested' && '✔️'}Want to Read</option>
                    <option value="reading">{book.category === 'reading' && '✔️'}Currently Reading</option>
                    <option value="audi">{book.category === 'none' && '✔️'}None</option>
                </select>
            </div>
            <div className="title-author">
                <p className="title">{book.bookName}</p>
                <p className="author">{book.writer}</p>
            </div>
        </div>
    )
}