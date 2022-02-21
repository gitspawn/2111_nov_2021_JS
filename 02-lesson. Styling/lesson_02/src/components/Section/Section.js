import PropTypes from "prop-types";

let Section = (props) => {
    const { title, children } = props;
    let test = undefined;

    return (
        <section>
            {test}
            <hr />
            {/* <h1>{title}</h1> */}
            {title && <h1>{title}</h1>}

            {children}
        </section>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
};
export default Section;
