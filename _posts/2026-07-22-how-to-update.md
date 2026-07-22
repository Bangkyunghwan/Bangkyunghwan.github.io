---
title: "이 사이트 관리법 (나를 위한 메모)"
date: 2026-07-22 06:00:00 +0900
category: 기록
tags: [메모, 사이트]
---

> 이 깃허브 페이지를 어떻게 고치고 글·프로젝트를 추가하는지 정리해둔다.


## 사이트 구조

- `_config.yml` — 이름·소개·스킬·학력 등 내 기본 정보
- `_projects/` — 프로젝트. 파일 하나 = 프로젝트 하나 (상세 페이지 자동 생성)
- `_posts/` — 블로그 글. 파일 하나 = 글 하나
- `assets/` — 이미지·PDF 등 파일
- `_layouts/` — 페이지 틀 (웬만하면 안 건드림)

---
## 블로그 글 추가하는 법

`_posts/` 에 `YYYY-MM-DD-영문제목.md` 파일을 만든다. 맨 앞 날짜 형식은 필수.

```
---
title: "글 제목"
date: 2026-08-01 20:00:00 +0900
category: 기록        # 목록에 뱃지로 표시 (기록 / 회고 / Backend 등 자유)
tags: [태그1, 태그2]
---

여기부터 마크다운으로 본문.
```

이미지는 `assets/images/` 에 넣고 본문에서 `![설명](/assets/images/파일.png)` 로 불러온다.

---
## 프로젝트 추가하는 법

`_projects/` 에 `영문이름.md` 파일을 만든다. 파일 이름이 곧 주소가 된다 (`my-app.md` → `/projects/my-app/`). 아래 속성만 채우면 카드와 상세 페이지가 자동으로 만들어진다.

```
---
name: 프로젝트 이름
type: personal          # team(팀) 또는 personal(개인)
featured: true          # 홈 '대표 프로젝트'에 띄우려면 true
order: 1                # 정렬 순서(숫자, 작을수록 앞)
year: 2025
tagline: "카드에 보이는 한 줄 소개."
tech: [Spring Boot, MySQL]
repo: ""                # 코드 저장소 주소 (있으면 GitHub 버튼 생김)
demo: ""                # 배포 주소 (있으면 Live Demo 버튼 생김)
poster_pdf: ""          # 포스터·상장 등 PDF (있으면 PDF 버튼 생김)
thumbnail: ""           # 카드 썸네일 이미지 경로 (비우면 자리표시)
screenshots: []         # 상세 상단 이미지들 (비우면 안 나옴)
overview: "무엇을 한 프로젝트인지."
responsibilities:
  - "내가 한 일 1"
  - "내가 한 일 2"
result: "성과·결론. 숫자가 있으면 좋다."
---

여기 아래에 마크다운으로 전체 상세 내용을 쓸 수 있다 (선택).
```
---
## 각 속성 의미

- **name** — 카드·상세 제목
- **type** — team/personal. 프로젝트 페이지 필터와 뱃지
- **featured** — true면 홈 대표 프로젝트에 노출
- **order** — 정렬 순서 (작을수록 앞)
- **year** — 연도
- **tagline** — 카드에 보이는 한 줄 소개
- **tech** — 기술 태그 (`[ ]` 안에 쉼표로)
- **repo / demo / poster_pdf** — 값이 있으면 각각 GitHub / Live Demo / PDF 버튼이 생김. 비우면 안 나옴
- **thumbnail** — 카드 썸네일. 비우면 줄무늬 자리표시
- **screenshots** — 상세 상단 이미지들. 비우면 안 나옴
- **overview / responsibilities / result** — 상세 페이지의 개요 / 맡은 일 / 결과
- 규칙: 값이 있으면 나오고 없으면 안 나온다. 왼쪽 이름과 들여쓰기는 그대로 두고 값만 바꾼다.

---

## 올리는 법

수정 또는 추가한 후 커밋하고 푸시하면 된다.

```
git add .
git commit -m "설명"
git push
```

1~2분 뒤 사이트에 자동 반영된다. 편집기 미리보기에서 이미지가 깨져 보여도 실제 사이트에서는 정상인 경우가 많으니, 최종은 사이트에서 확인한다.
