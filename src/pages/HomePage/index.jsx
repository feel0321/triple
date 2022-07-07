import styled from '@emotion/styled'
import { useEffect, useRef } from 'react'

import Award from '../../components/Award'
import Logo from '../../components/Logo'
import Text from '../../components/Text'
import playStorePng from '../../assets/play-store2x.png'
import appleStorePng from '../../assets/badge-apple4x.png'
import useObserver from '../../hooks/useObserver'

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

const MetricsContainer = styled.div`
  margin-left: 623px;
  padding-top: 150px;
`

const MetricsItem = styled.div`
  height: 36px;
  color: rgb(58, 58, 58);
  font-family: sans-serif;
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
`

const AwardsContainer = styled.div`
  margin: 50px 0px 140px 623px;
  white-space: nowrap;
`

const HomePage = () => {
  const ref = useRef()
  const isInViewport = useObserver(ref)

  useEffect(() => {
    if (isInViewport) {
      console.log('들어왔다!')
    }
  }, [isInViewport])

  return (
    <SectionContainer ref={ref}>
      <ResponsiveSection>
        <Logo width="400px" height="338px" isInViewport={isInViewport}>
          2012년 12월 기준
        </Logo>
        <MetricsContainer>
          <MetricsItem>
            <Text isStrong>700만 명</Text>
            <Text>의 여행자</Text>
          </MetricsItem>
          <MetricsItem>
            <Text isStrong>100만 개</Text>
            <Text>의 여행 리뷰</Text>
          </MetricsItem>
          <MetricsItem>
            <Text isStrong>470만 개</Text>
            <Text>의 여행 일정</Text>
          </MetricsItem>
        </MetricsContainer>
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
    </SectionContainer>
  )
}

export default HomePage
