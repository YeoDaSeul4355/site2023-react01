# 🎨 React를 활용한 모던 아트 사이트

![reactMain](https://github.com/YeoDaSeul4355/site2023-react01/assets/125419623/8c95aecd-cd25-4fbd-a7f6-f98ab9ccddaf)

> View Site : https://site2023-react-jjul.netlify.app/

## 👋 소개
React를 기반으로 구축된 현대 미술 작품과 아티스트를 소개하는 플랫폼입니다.이 사이트는 컴포넌트 기반 아키텍처를 활용하여 모듈화된 디자인과 사용자 친화적인 인터페이스를 제공합니다.
Restful API 활용하여 다양한 현대 미술 작품과 아티스트 정보를 외부 API로부터 불러와서 동적으로 표시합니다.(Youtube API, Unsplash API, Movie API 등등) 이 프로젝트에서 Component 기반의 모듈, 그리고 fetch를 이용해 API의 정보를 받아오는 방법과 React Hook을 사용해 상태를 관리하는 방법을 학습하였습니다.


## 🔧 사용 스택 
* React: JavaScript 라이브러리로 사용자 인터페이스를 구축하기 위해 사용됩니다.
* react-router-dom: React 애플리케이션의 클라이언트 사이드 라우팅을 관리하는 라이브러리입니다.
* BrowserRouter: react-router-dom에서 제공하는 라우터 구성 요소 중 하나로, HTML5 History API를 사용하여 브라우저의 주소 표시줄을 관리하고, 라우팅을 처리합니다.
* Route: react-router-dom에서 제공하는 라우터 구성 요소 중 하나로, 경로에 따라 특정 컴포넌트를 렌더링합니다.
* Routes: react-router-dom에서 제공하는 라우터 구성 요소로, 여러 Route를 그룹화하고, 라우팅 구성을 선언적으로 표현할 수 있도록 도와줍니다.
* fetch: 네트워크 요청을 보내기 위해 사용되는 자바스크립트 함수로, 비동기적으로 데이터를 가져오기 위해 사용됩니다. 해당 코드에서는 영화 데이터를 API로부터 가져오는데 사용되었습니다.
* useState: React 훅 중 하나로, 함수형 컴포넌트에서 상태(state)를 사용할 수 있게 해줍니다. 해당 코드에서는 영화 데이터를 상태로 관리하기 위해 사용되었습니다.
* useEffect: React 훅 중 하나로, 컴포넌트의 렌더링 이후에 실행되는 사이드 이펙트를 처리할 수 있도록 도와줍니다. 해당 코드에서는 초기 렌더링 시에 API를 호출하여 영화 데이터를 가져오는데 사용되었습니다.
* useRef: React 훅 중 하나로, 함수형 컴포넌트에서 DOM 요소에 접근하기 위해 사용됩니다. 해당 코드에서는 검색어 입력란(input 요소)에 접근하기 위해 사용되었습니다.


## ✍️ 구현 내역

* swiper를 활용한 이미지 슬라이드
* router기능을 활용한 페이지
* 탭 메뉴로 구성된 시대별 유명 작품
* Youtube 검색, 태그 기능
* Unsplash 랜덤 이미지 슬라이드, 검색, 태그 기능
* Movie 이미지 슬라이드, 검색, 태그 기능
<br><br>

## 📸 상세페이지
![reactIntro](https://github.com/YeoDaSeul4355/site2023-react01/assets/125419623/e0add7b9-4e13-4c28-b567-02d02949fbea)<br><br>
![reactYoutube](https://github.com/YeoDaSeul4355/site2023-react01/assets/125419623/255bbe78-a773-4607-91fc-4e2b0e773eb9)<br><br>
![reactUnsplash](https://github.com/YeoDaSeul4355/site2023-react01/assets/125419623/fdbffbb2-d0d2-4355-93a1-f78f837f9d9e)<br><br>
![reactMovie](https://github.com/YeoDaSeul4355/site2023-react01/assets/125419623/2539a58c-559e-48d6-953a-06456a275b55)

## ⚙️ 개발 환경 프로젝트 실행 방법

<b>Step 1: </b><br>
레포지토리 클론

```c
git clone https://github.com/YeoDaSeul4355/site2023-react01.git
```

<b>Step 2: </b><br>
종속성 설치

```c
npm install
```

<b>Step 4: </b><br>
프로젝트 시작

```c
npm start
```
