import PropTypes from "prop-types";
let BookList = ({ books }) => {
    return (
        <ul>
            {books.map((book) => (
                <li key={book.id}>
                    <p>Autor: {book.author}</p>
                    <p>Title: {book.title}</p>
                    <p>
                        Link: <a href={book.link}>{book.title}</a>
                    </p>
                </li>
            ))}
        </ul>
    );
};

BookList.propTypes = {
    books: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};
export default BookList;
