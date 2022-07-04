import styled from '@emotion/styled'

import Award from '../../components/Award'
import Logo from '../../components/Logo'
import playStorePng from '../../assets/play-store2x.png'
import appleStorePng from '../../assets/badge-apple4x.png'

const SectionContainer = styled.div`
  min-width: 1200px;
`

const ResponsiveSection = styled.div`
  position: relative;
  width: 1040px;
  margin: 0 auto;
  position: relative;
  border: 2px solid red;

  & .logo {
    position: absolute;
    top: 150px;
    padding-top: 280px;
  }
`

const MetricsContainer = styled.div`
  margin-left: 623px;
  padding-top: 150px;
  border: 2px solid green;
`

const AwardsContainer = styled.div`
  margin: 50px 0px 140px 623px;
  border: 2px solid black;
  white-space: nowrap;
`

const HomePage = () => {
  return (
    <SectionContainer>
      <ResponsiveSection>
        <Logo width="400px" height="338px">
          2012년 12월 기준
        </Logo>
        <MetricsContainer>
          <div>700만 명의 여행자</div>
          <div>100만 개의 여행 리뷰</div>
          <div>470만 개의 여행 일정</div>
        </MetricsContainer>
        <AwardsContainer>
          <Award url={playStorePng}>
            2018 구글 플레이스토어
            <br />
            올해의 앱 최우수상 수상
          </Award>
          <Award url={appleStorePng}>
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
