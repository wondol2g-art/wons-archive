# WONS ARCHIVE — GitHub Pages

따뜻한 아이보리 배경의 미니멀 사진 포트폴리오입니다. 별도 빌드 과정 없이 GitHub Pages에 바로 배포할 수 있습니다.

## 1. GitHub 저장소 만들기
1. GitHub에 로그인하고 **New repository**를 선택합니다.
2. 저장소 이름을 `wons-archive`로 입력하고 Public으로 만듭니다.
3. 이 압축 파일의 내용을 저장소 최상위(root)에 업로드합니다. `index.html`이 최상위에 있어야 합니다.

## 2. 사진 교체하기
`images` 폴더의 `photo-01.svg`부터 `photo-06.svg`까지를 본인 사진으로 교체하세요.
- 가장 쉬운 방법: 사진 파일을 `photo-01.jpg`처럼 업로드한 다음 `script.js`의 `src` 경로도 `.jpg`로 바꾸기
- 사진은 긴 변 1800~2400px 정도, JPG 또는 WebP를 권장합니다.
- `script.js`의 `title`, `location`도 본인의 사진 설명으로 바꾸면 됩니다.

## 3. GitHub Pages 켜기
1. 저장소의 **Settings → Pages**로 이동합니다.
2. **Build and deployment → Deploy from a branch** 선택
3. Branch는 `main`, folder는 `/ (root)`로 선택하고 Save
4. 잠시 기다리면 `https://깃허브아이디.github.io/wons-archive/` 주소로 공개됩니다.

## 4. 개인화할 곳
- 사이트 이름: `index.html` 안의 `WONS ARCHIVE`
- 소개 문구: `index.html`의 `.intro` 및 `.about-copy`
- 이메일: `mailto:hello@example.com`을 실제 이메일 주소로 변경
- 사진과 캡션: `script.js`의 `photos` 배열

## 참고
현재 포함된 SVG는 레이아웃 확인용 샘플 이미지입니다. 공개 전에 본인 사진으로 교체하세요.
