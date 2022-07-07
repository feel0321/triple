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

  &.animation {
    animation-name: upAndMakeVisible;
    animation-duration: 700ms;
    animation-timing-function: ease-in-out;

    @keyframes upAndMakeVisible {
      from {
        transform: translate(0, 25px);
        opacity: 0;
      }
      to {
        transform: translate(0, 0);
        opacity: 1;
      }
    }
  }
`

const Logo = ({ children, width, height, isInViewport }) => {
  const className = isInViewport ? 'logo animation' : 'logo'

  return (
    <Container inputWidth={width} inputHeight={height} className={className}>
      {children}
    </Container>
  )
}

Logo.propTypes = {
  children: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  isInViewport: PropTypes.bool,
}

Logo.defaultProps = {
  width: 'auto',
  height: 'auto',
  isInViewport: false,
}

export default Logo
