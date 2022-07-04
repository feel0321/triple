import styled from '@emotion/styled'

const SectionContainer = styled.div`
  min-width: 1200px;
`

const ResponsiveSection = styled.div`
  position: relative;
  width: 1040px;
  margin: 0 auto;
  position: relative;
  border: 2px solid red;
`

const ContentLogo = styled.div`
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  padding-top: 280px;
  font-size: 15px;
  box-sizing: border-box;
  text-align: center;
  font-family: sans-serif;
  color: rgba(58, 58, 58, 0.7);
  border: 2px solid blue;
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
    <div>
      <SectionContainer>
        <ResponsiveSection>
          <ContentLogo>2021년 12월 기준</ContentLogo>
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
    </div>
  )
}

export default HomePage
