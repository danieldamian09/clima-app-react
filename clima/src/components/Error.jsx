import PropTypes from 'prop-types'

export default function Error({mesage}) {
    return (
        <div>
            <p className="red darken-4 error">{mesage}</p>
        </div>
    )
}

Error.propTypes = {
    mesage: PropTypes.string.isRequired
}