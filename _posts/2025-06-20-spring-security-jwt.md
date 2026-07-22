---
title: "Spring Security + JWT 인증 정리"
date: 2025-06-20 20:00:00 +0900
category: Backend
tags: [Spring, 인증]
---

토큰 발급부터 필터 체인까지, 인증 흐름을 처음부터 정리했습니다.

처음 Spring Security를 붙일 때 가장 헷갈렸던 건 필터가 요청을 가로채는 순서였습니다. 이 글에서는 로그인 요청이 토큰을 받아 최종적으로 인증 컨텍스트에 담기기까지의 흐름을 순서대로 정리합니다.

## 필터 체인의 순서

```java
protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain chain) {
    String token = resolveToken(req);
    if (token != null && validate(token)) {
        SecurityContextHolder.getContext().setAuthentication(getAuthentication(token));
    }
    chain.doFilter(req, res);
}
```

> 핵심은 "누가 먼저 요청을 보느냐"입니다. 순서를 이해하면 디버깅이 훨씬 쉬워집니다.

이 파일을 지우고 여러분의 공부 기록으로 채워보세요.
