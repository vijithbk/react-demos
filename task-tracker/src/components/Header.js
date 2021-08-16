import PropTypes from 'prop-types'
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
    const onClick = () => {
    console.log('clicked')
    }

    return (
        <div className="header">
            <h1 style={headingStyle}>{title}</h1>
            <Button onClick={onAdd} color={ showAdd ? "red" : "green"} text={showAdd ? 'Close' : 'Add'} />
        </div>
    )
}

const headingStyle = {
    color: 'black',
    backgroundColor: ''
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

Header.defaultProps = {
    title: 'Task tracker'
}

export default Header
