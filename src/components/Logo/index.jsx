import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import triplePng from '../../assets/triple2x.png'

const Container = styled.div`
  width: ${({ inputWidth }) => inputWidth};
  height: ${({ inputHeight }) => inputHeight};
  box-sizing: border-box;
  text-align: center;
  font-family: sans-serif;
  color: rgba(58, 58, 58, 0.7);
  background-image: url(${triplePng});
  background-size: ${({ inputWidth, inputHeight }) =>
    `${inputWidth} ${inputHeight}`};
  background-repeat: no-repeat;
`

const Logo = ({ children, width, height }) => {
  return (
    <Container inputWidth={width} inputHeight={height} className="logo">
      {children}
    </Container>
  )
}

Logo.propTypes = {
  children: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
}

Logo.defaultProps = {
  width: 'auto',
  height: 'auto',
}

export default Logo
