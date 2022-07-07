# Triple Frontend Homework 3 - 고광필

## 개발 환경

node v16.15.1
npm 8.11.0

## 실행 방법

1. `npm i` 명령어로 의존성 라이브러리를 설치해주세요
2. `npm start` 또는 `npm run start` 명령어로 시작합니다

### HomePage

![Jul-07-2022 19-22-33](https://user-images.githubusercontent.com/50919342/177751937-e5b43d8c-4e46-471b-b666-f94082c61c45.gif)

과제의 요구사항을 구현했습니다

### TestPage

![Jul-07-2022 19-22-03](https://user-images.githubusercontent.com/50919342/177752084-8b2b9881-cd3c-4bac-b569-f80b7d9e5047.gif)

HomePage 코드를 복사해서 margin-top만 추가했습니다
스크롤을 내려서 확인할 수 있습니다

## 사용한 기술과 이유

1. Javascript

   > TypeScript를 사용합니다. 처음 보는 코드의 적응을 돕고, 잘못 참조하거나 맞지 않는 타입의 변수를 할당하는 등의 실수를 막아줍니다.

   [Triple Javascript Guide](https://github.com/titicacadev/eslint-config-triple/blob/main/STYLE_GUIDE.md)에서 해당 내용을 보았지만,
   채용 과제 요구사항에 React 외 개발 스택은 자유롭게 구성하라고 써있어서 제게 좀 더 익숙하다고 생각되는 Javascript로 개발했습니다

2. prop-types

   > prop-types를 사용하지 않습니다. TypeScript를 대신 사용합니다. react/prop-types

   1번과 마찬가지로 해당 내용을 확인했지만, Typescript를 사용하지 않았기에 임의로 prop-types를 사용했습니다

3. styled-component (@emotion/styled)

   [Triple 사이트](https://triple.guide/)의 html class에 `section__ResponsiveSection`과 같이 BEM 방법론을 도입한듯한 class를 확인했습니다
   하지만 제가 아직 BEM 방법론에 대한 이해가 부족한 점, class 네이밍에도 신경써야 하는 점, css 파일을 따로 관리해야 하는 점이 불편하다고 생각해서 styled-component를 사용했습니다

4. IntersectionObserver API

   사용자의 화면에 DOM요소가 잡혔을 때 애니메이션 효과를 발생시킬 수 있도록 하기 위해서 사용했습니다

5. eslint-config-triple

   린팅 / 포매팅 셋업했습니다

## 폴더 구조 (컴포넌트 구분)

여러곳에서 동일한 로직이 사용될 때 재사용을 위해서 함수로 분리합니다
컴포넌트는 같은 UI를 여러곳에서 재사용할 수 있도록 만들고, 추가 확장하는 것이라 생각합니다

page단위로 개발시에는 가독성과 로직의 분리를 위해서
딱 이 페이지에서만 사용되지만, 컴포넌트로 분리할 수도 있습니다

이렇게 페이지에서만 사용하는 일회성 컴포넌트는 page에 함께 두고, 다른곳에서 사용하는 컴포넌트는 components 폴더에 두었습니다

Award, Logo는 이미지와 텍스트의 결합으로 다른곳에서 쓰일만하다고 판단했고,
Metrics쪽은 다른곳에서 사용되지 않을것 같아서 page에 두었습니다

## 상태

![스크린샷 2022-07-07 오후 11 15 14](https://user-images.githubusercontent.com/50919342/177795531-5126063a-e62e-48d2-b730-c634c889ecde.png)

HomePage/index.jsx에서 useObserver.js를 통해 과제로 구현한 부분을 사용자가 보고 있는지 유무를 isInViewport라는 state로 가지고 있습니다
이 값을 Metrics, Logo, Award로 넘겨서 애니메이션을 동작 유무를 결정합니다

IntervalText는 count라는 state로 값을 표시합니다
이 값은 Metrics에서 넘겨 받은 isInViewport로 viewport에 들어왔을 때 2초동안 증가합니다
