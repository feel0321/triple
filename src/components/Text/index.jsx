import PropTypes from 'prop-types'

const Text = ({ children, isStrong }) => {
  const result = <span>{children}</span>

  if (isStrong) {
    return <strong>{result}</strong>
  }

  return result
}

Text.propTypes = {
  children: PropTypes.string.isRequired,
  isStrong: PropTypes.bool,
}

Text.defaultProps = {
  isStrong: false,
}

export default Text
