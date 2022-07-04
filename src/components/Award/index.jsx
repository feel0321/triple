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
`

const Award = ({ children, size, url }) => {
  return (
    <Container size={size} url={url}>
      {children}
    </Container>
  )
}

Award.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  url: PropTypes.string.isRequired,
}

Award.defaultProps = {
  size: '54px',
}

export default Award
