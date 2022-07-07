import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'

const MAX_SECOND = 2000
const UNIT_SECOND = 10
const totalFrame = MAX_SECOND / UNIT_SECOND

const easeOutExpo = (t) => {
  if (t === 1) {
    return 1
  }
  return 1 - 2 ** (-10 * t)
}

const IntervalText = ({ defaultString, targetCount, isInViewport }) => {
  const [count, setCount] = useState(0)
  const intervalId = useRef()
  const currentNumber = useRef(0)

  useEffect(() => {
    if (isInViewport) {
      setCount(0)
      intervalId.current = setInterval(() => {
        currentNumber.current += 1
        const progress = easeOutExpo(currentNumber.current / totalFrame)
        setCount(Math.ceil(targetCount * progress))
      }, UNIT_SECOND)
    }
  }, [isInViewport, targetCount])

  useEffect(() => {
    if (count >= targetCount) {
      clearInterval(intervalId.current)
    }
  }, [count, targetCount])

  useEffect(() => {
    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current)
      }
    }
  }, [])

  return (
    <strong>
      <span>{`${count || targetCount}${defaultString}`}</span>
    </strong>
  )
}

IntervalText.propTypes = {
  defaultString: PropTypes.string,
  targetCount: PropTypes.number.isRequired,
  isInViewport: PropTypes.bool.isRequired,
}

IntervalText.defaultProps = {
  defaultString: '만 개',
}

export default IntervalText
