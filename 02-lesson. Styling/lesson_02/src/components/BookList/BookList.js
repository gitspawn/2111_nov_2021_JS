import PropTypes from "prop-types";
import styled from "styled-components";

// console.log(styled);

let List = styled.ul`
    margin: 15px;
`;

let ListItem = styled.li`
    color: green;
    margin: 15px;
    background: papayawhip;
    &: last-child {
        margin-bottom: 0;
        background: gray;
    }
`;

let BookList = ({ books }) => {
    return (
        <List>
            {books.map((book) => (
                <ListItem key={book.id}>
                    <p>Autor: {book.author}</p>
                    <p>Title: {book.title}</p>
                    <p>
                        Link: <a href={book.link}>{book.title}</a>
                    </p>
                </ListItem>
            ))}
        </List>
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
