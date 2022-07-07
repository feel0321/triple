import styled from '@emotion/styled'
import PropTyeps from 'prop-types'

import IntervalText from './IntervalText'

const MetricsContainer = styled.div`
  margin-left: 623px;
  padding-top: 150px;

  &.animation {
    animation-fill-mode: forwards;
    animation-name: init, upAndMakeVisible;
    animation-delay: 0s, 250ms;
    animation-duration: 250ms, 700ms;
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

const MetricsItem = styled.div`
  height: 36px;
  color: rgb(58, 58, 58);
  font-family: sans-serif;
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
`

const Metrics = ({ isInViewport }) => {
  return (
    <MetricsContainer className={isInViewport ? 'animation' : ''}>
      <MetricsItem>
        <IntervalText
          defaultString="만 명"
          targetCount={700}
          isInViewport={isInViewport}
        />
        <span>의 여행자</span>
      </MetricsItem>
      <MetricsItem>
        <IntervalText targetCount={100} isInViewport={isInViewport} />
        <span>의 여행 리뷰</span>
      </MetricsItem>
      <MetricsItem>
        <IntervalText targetCount={470} isInViewport={isInViewport} />
        <span>의 여행 일정</span>
      </MetricsItem>
    </MetricsContainer>
  )
}

Metrics.propTypes = {
  isInViewport: PropTyeps.bool.isRequired,
}

export default Metrics
