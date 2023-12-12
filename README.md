# 쇼핑박스 웹컴포넌트 버전

> 여러 프로젝트에 에드온 되므로 webcomponent의 shadow dom이 사용 되었습니다

### 프로젝트 환경

```
$ node -v
v20.10.0

$ yarn -v
1.22.21
```

### 프로젝트 실행

```
$ yarn #패키지 설치
$ yarn dev #개발서버 실행
$ yarn build #빌드
```

빌드 후 dist/m_shopbox.min.js 파일을 서비스에 사용합니다.

```
// 스크립트 로드
<script defer src="/js/m_shopbox.min.js"></script>
// 쇼핑박스 불러올 곳에 사용
<shop-box globalsvcpage="news"></shop-box>
```

쇼핑박스는 페이지 하단에 위치하므로 script tag에 defer 속성 사용을 권장합니다
