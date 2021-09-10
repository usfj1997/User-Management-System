import PropTypes from 'prop-types'

const Button = ({align,color,text, onClick}) => {
    
    return (
            <button 
            onClick={onClick} 
            style= {{backgroundColor: color}} 
            className = 'btn'
            >
                {text}
            </button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
    // verticalAlign:'middle'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
