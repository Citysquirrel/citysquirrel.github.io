# 도시다람쥐 깃허브 페이지

## 🏁 Plans
* [x] citysquirrel.github.io 레포로 이사하기
  * [x] 굳이 posting 페이지 따로 없어도 될것같아!
  * [x] 이사는 했는데 gh-pages ssh 키 인증문제 생김 => [아이디 인증으로 우회함](https://velog.io/@tok1324/TIL-gh-pages-%EC%82%AC%EC%9A%A9%EC%8B%9C-ssh-public-key-%EC%9D%B8%EC%A6%9D%EB%AC%B8%EC%A0%9C)
* [ ] react build 이후 404.html 페이지 자동으로 만드는 작업이 잘 안됨 ㅠ 좀 더 연구 필요함
  * [ ] postbuild 이후 copy 명령어 사용해보기, 현재 윈도우 환경이기 때문에 cp 명령어가 다르게 작동함
  * [ ] 목적: github pages 기능이 react 라우팅을 지원하지 않기 때문에 404.html 파일을 통해 fake routing을 실행하기 위함
지금은 404.html 파일을 웹에서 직접 만들고 있으나, 자동화를 하고싶음!
* [ ] 페이지를 어떤 것들로 채울 것인지에 대해 생각해보기
  * [ ] 현재의 Home Intro 부분을 Examples 페이지로 옮기고, Home 화면에 자기소개로 채우는 구성 괜찮을 것같음

* 컴포넌트 만들기: 가급적이면 라이브러리 형태로 여러군데에서 사용할 수 있는 형태 선호
  * [x] 코드 블럭 (버튼을 통한 복사 기능)
  * [ ] 공통 모달창

[페이지 링크](https://citysquirrel.github.io/)
