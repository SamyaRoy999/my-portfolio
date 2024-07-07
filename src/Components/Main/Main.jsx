import PropTypes from 'prop-types';
const Main = ({ children }) => {
    return (
        <div>{children}</div>
    )
}

export default Main

Main.propTypes = {
    children: PropTypes.any
};