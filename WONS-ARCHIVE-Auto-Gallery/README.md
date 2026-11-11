# WONS ARCHIVE — 사진 자동 추가 버전

## 사진 추가하기 (코드 수정 불필요)

1. https://github.com/wondol2g-art/wons-archive 에 접속합니다.
2. **images** 폴더를 열고 **Add file → Upload files**를 누릅니다.
3. `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`, `.avif` 파일을 업로드합니다.
4. **Commit changes**를 누릅니다.
5. https://wondol2g-art.github.io/wons-archive/ 를 새로고침합니다.

업로드한 사진은 **ALL**과 **NEW PHOTOGRAPHS**에 자동 표시됩니다. 제목은 파일명에서 자동 생성됩니다.
기존 사진 17장의 제목 및 카테고리는 유지됩니다. `images/cover.png`는 표지로 사용되며 갤러리에 표시되지 않습니다.

## 최초 설치

이 ZIP 파일의 **내용물 전체**를 GitHub 저장소의 최상위 폴더에 업로드하고 커밋하세요. 기존 `index.html`, `script.js`, `style.css` 등의 파일은 덮어씁니다. `images` 폴더 구조를 유지해야 합니다.

## 참고

- 공개 GitHub 저장소의 `images` 폴더 목록을 브라우저에서 읽는 방식입니다. 별도의 Actions 설정은 필요하지 않습니다.
- GitHub API의 일시적인 장애나 호출 제한이 발생하면 기본 17장 갤러리가 표시됩니다.
- `images` 폴더에 파일이 아주 많아지면 GitHub Contents API 제한으로 일부 파일이 누락될 수 있습니다.
- 사진 업로드 직후에는 GitHub Pages 배포가 끝날 때까지 잠시 기다려야 할 수 있습니다.
- 표지 이미지는 `images/cover.png`입니다.
