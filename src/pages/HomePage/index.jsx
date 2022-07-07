import styled from '@emotion/styled'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

import Award from '../../components/Award'
import Logo from '../../components/Logo'
import playStorePng from '../../assets/play-store2x.png'
import appleStorePng from '../../assets/badge-apple4x.png'
import useObserver from '../../hooks/useObserver'

import Metrics from './Metrics'

const SectionContainer = styled.div`
  min-width: 1200px;
  height: 552px;
`

const ResponsiveSection = styled.div`
  position: relative;
  width: 1040px;
  margin: 0 auto;
  position: relative;

  & .logo {
    position: absolute;
    top: 150px;
    padding-top: 280px;
  }
`

const AwardsContainer = styled.div`
  margin: 50px 0px 140px 623px;
  white-space: nowrap;
`

const HomePage = () => {
  const ref = useRef()
  const isInViewport = useObserver(ref)

  return (
    <SectionContainer ref={ref}>
      <ResponsiveSection>
        <Logo width="400px" height="338px" isInViewport={isInViewport}>
          2021년 12월 기준
        </Logo>
        <Metrics isInViewport={isInViewport} />
        <AwardsContainer>
          <Award url={playStorePng} isInViewport={isInViewport}>
            2018 구글 플레이스토어
            <br />
            올해의 앱 최우수상 수상
          </Award>
          <Award url={appleStorePng} isInViewport={isInViewport}>
            2018 애플 앱스토어
            <br />
            오늘의 여행앱 선정
          </Award>
        </AwardsContainer>
      </ResponsiveSection>
      <Link to="/test" style={{ textAlign: 'center', display: 'block' }}>
        TestPage로 이동
      </Link>
    </SectionContainer>
  )
}

export default HomePage
