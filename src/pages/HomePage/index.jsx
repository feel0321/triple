import styled from '@emotion/styled'

import Logo from '../../components/Logo'

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
          <div>2018 구글 수상</div>
          <div>2018 애플 수상</div>
        </AwardsContainer>
      </ResponsiveSection>
    </SectionContainer>
  )
}

export default HomePage
