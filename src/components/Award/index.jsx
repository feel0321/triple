import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const Container = styled.div`
  display: inline-block;
  font-family: sans-serif;
  background-image: ${({ url }) => `url(${url})`};
  background-position: left top;
  background-repeat: no-repeat;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;
  background-size: ${({ size }) => `${size} ${size}`};
  height: ${({ size }) => size};
  padding: 5px 0px 5px 62px;
  font-size: 14px;
  line-height: 22px;
  margin-right: 39px;

  &.animation {
    animation-fill-mode: forwards;
    animation-name: init, upAndMakeVisible;
    animation-delay: 0s, 500ms;
    animation-duration: 500ms, 700ms;
    animation-timing-function: linear, ease-in-out;

    @keyframes init {
      from {
        opacity: 0;
      }
      to {
        opacity: 0;
      }
    }

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

const Award = ({ children, size, url, isInViewport }) => {
  return (
    <Container
      size={size}
      url={url}
      className={isInViewport ? `animation` : ''}
    >
      {children}
    </Container>
  )
}

Award.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  url: PropTypes.string.isRequired,
  isInViewport: PropTypes.bool,
}

Award.defaultProps = {
  size: '54px',
  isInViewport: false,
}

export default Award
