# 내 포트폴리오 사이트

Claude Design 시안을 편집 가능한 Jekyll 사이트로 옮긴 버전입니다. 반응형이고,
블로그·프로젝트는 파일 하나만 추가하면 됩니다 (상세 페이지까지 자동 생성).

---

## 🚀 처음 한 번: 깃허브에 올려서 사이트 띄우기
1. 깃허브 → **+** → New repository → 이름은 **정확히** `본인아이디.github.io` (Public)
2. 이 폴더 안의 파일 전부 업로드 (**Add file → Upload files** → 드래그 → Commit)
3. 1~2분 뒤 `https://본인아이디.github.io` 접속

---

## ✏️ 내 정보로 바꾸기 → `_config.yml`
이름, 히어로 제목/소개, 스킬 태그, 학력, 경력·활동, 링크가 전부 여기 있어요.
프로필 사진은 깃허브 아이디만 맞으면 자동으로 들어오고, 따로 쓰려면 `avatar:` 에 이미지 경로를 넣으면 됩니다.

---

## 📁 프로젝트 추가 → `_projects/` 에 파일 하나
프로젝트 하나 = 파일 하나예요. 상세 페이지가 자동으로 만들어집니다.
`_projects/teamsync.md` 를 복사해서 새 이름(예: `_projects/my-app.md`)으로 저장하고 내용만 바꾸세요:

```yaml
---
name: 프로젝트 이름
type: team            # team(팀) 또는 personal(개인)
featured: true        # 홈 '대표 프로젝트'에 노출하려면 true
order: 5              # 정렬 순서(숫자)
year: 2025
tagline: "카드에 보일 한 줄 소개."
tech: [Spring Boot, MySQL]
repo: "https://github.com/본인아이디/저장소"
demo: ""              # 없으면 빈칸
thumbnail: ""         # 카드 썸네일 이미지 경로(비우면 자리표시)
screenshots: []       # 상세 스크린샷 이미지들: ["/assets/shot1.png", ...]
overview: "이 프로젝트가 뭔지."
responsibilities:
  - "맡은 일 1"
  - "맡은 일 2"
result: "결과를 숫자로."
---
```

- 파일 이름이 곧 주소가 돼요 (`my-app.md` → `/projects/my-app/`).
- `type` 값(team/personal)이 프로젝트 페이지 필터에 연결됩니다.
- 이미지를 쓰려면 `assets/` 폴더에 올리고 경로를 적으면 됩니다. 비우면 줄무늬 자리표시가 나와요.

---

## 📝 블로그 글 추가 → `_posts/` 에 파일 하나 (설치 없이 깃허브 웹에서)
1. 저장소에서 **Add file → Create new file**
2. 이름: `_posts/2026-08-01-my-post.md` (앞 날짜 형식 필수)
3. 내용:
```markdown
---
title: "글 제목"
date: 2026-08-01 20:00:00 +0900
category: Backend      # 목록에 뱃지로 표시 (Backend / 회고 / 에세이 등 자유)
tags: [Spring]
---

여기부터 마크다운 본문.
```
4. Commit → 1분 뒤 블로그에 등록

---

## ➕ 새 메뉴 추가 (가끔)
`about.md` 처럼 파일을 만들고 맨 위에 `layout: default`, `permalink: /about/` 를 넣은 뒤,
`_layouts/default.html` 의 `<nav class="side-nav">` 안에 링크 한 줄을 추가하면 됩니다.

## 🎨 색·폰트
`assets/css/style.css` 맨 위 `:root` 값만 바꾸면 전체가 바뀝니다.

## 🖥️ (선택) 로컬 미리보기
```bash
bundle install && bundle exec jekyll serve   # http://localhost:4000
```
