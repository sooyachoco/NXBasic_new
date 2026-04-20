# Nexon Basic 1.0 Design System

> Source: Figma — [Nexon-Basic-1.0v](https://www.figma.com/design/7jRzS83vrvxnwFwWUYOfmO/Nexon-Basic-1.0v?m=dev)  
> 이 문서는 Claude가 UI 구현 시 참조하는 디자인 시스템입니다.

---

## Foundation

### Colors

#### Point Color (브랜드 메인 — Blue)
| 토큰 | 값 | 용도 |
|------|----|------|
| `--pc-100` | `#ECF1F9` | 극히 연한 배경 |
| `--pc-200` | `#CCE2FF` | hover bg |
| `--pc-300` | `#B8D7FF` | disabled 상태 |
| `--pc-400` | `#8FBFFF` | |
| `--pc-500` | `#6BABFF` | |
| `--pc-600` | `#57A0FF` | |
| `--pc-700` | `#3D91FF` | hover |
| **`--pc-800`** | **`#0A74FF`** | **★ 브랜드 메인 컬러 (Primary)** |
| `--pc-900` | `#0056C7` | active/pressed |
| `--pc-1000` | `#1E4B85` | dark variant |

#### Basic Color (Neutral — Gray)
| 토큰 | 값 | 용도 |
|------|----|------|
| `--bc-100` | `#E8EBF2` | 밝은 라인 |
| `--bc-200` | `#D2D6E0` | 일반 라인, 딤드 텍스트 |
| `--bc-300` | `#C6CCD7` | 인풋창 라인, 진한 라인 |
| `--bc-400` | `#B1B7C4` | |
| `--bc-500` | `#A1A7B5` | Secondary 버튼, 보조/서브 텍스트 |
| `--bc-600` | `#8F96A3` | |
| `--bc-700` | `#747A86` | 진한 보조 텍스트, 다크테마 아이콘 |
| `--bc-800` | `#51555D` | |
| `--bc-900` | `#3D4148` | 다크테마 Secondary 버튼 |
| **`--bc-1000`** | **`#17191C`** | **★ 기본 텍스트 (본문)** |

#### White & Black
| 토큰 | 값 | 용도 |
|------|----|------|
| `--color-white` | `#FFFFFF` | On surface 구분 배경 |
| `--color-black` | `#000000` | 딤드 오버레이 레이어 |

#### On Surface (배경 레이어)
| 토큰 | 값 | 용도 |
|------|----|------|
| `--lb-100` | `#FCFCFD` | 전체 화면 BG (가장 밝음) |
| `--lb-200` | `#F9FAFB` | LB100 위 컨텐츠 BG |
| `--lb-300` | `#EEF1F6` | Footer BG |
| `--pb-150` | `#A0A9BA` | |
| `--db-100` | `#393C41` | Dark Footer |
| `--db-200` | `#26282C` | Dark LNB |

#### Theme Color (상태별)
| 카테고리 | 토큰 | 값 |
|----------|------|----|
| Error 에러 | `--r-100` | `#FEE1E1` |
| | `--r-200` | `#EF5D5D` |
| | `--r-300` | `#D84141` |
| Confirm 확인 | `--b-100` | `#E5F8FF` |
| | `--b-200` | `#2EC7FF` |
| | `--b-300` | `#00ABF5` |
| Warning 주의/경고 | `--y-100` | `#FFF2D1` |
| | `--y-200` | `#FFBB00` |
| | `--y-300` | `#DD7F13` |
| Approve 승인 | `--g-100` | `#E0FAE9` |
| | `--g-200` | `#59E387` |
| | `--g-300` | `#26A138` |

#### Legend & Tag Colors
| 카테고리 | 토큰 | 값 |
|----------|------|----|
| Purple (범례 & 태그, 링크 visited) | `--pp-100` | `#F7F0FF` |
| | `--pp-200` | `#9747FF` |
| | `--pp-300` | `#6C10E5` |
| Blue (범례 & 태그) | `--pb-100` | `#EBEFFF` |
| | `--pb-200` | `#4D76FF` |
| | `--pb-300` | `#214BD4` |
| Pink (범례 & 태그) | `--p-100` | `#FCD9EE` |
| | `--p-200` | `#EF4EAE` |
| | `--p-300` | `#C20F7B` |

---

### Typography

- **Font**: `Noto Sans KR` (한글 기본), weights: Light(300) / Regular(400) / Medium(500) / Bold(700)
- **Base text color**: `--bc-1000` (#17191C)
- **CSS 클래스 패턴**: `.text-{size}-{weight}` / 링크는 `.link-{size}-{weight}`

#### 전체 타입 스케일

| Size | Weight | Line Height | Letter Spacing | Figma 스타일명 |
|------|--------|-------------|----------------|---------------|
| 54px | 300/400/500/700 | 82px | -0.5px | `default_54_{weight}` |
| 48px | 300/400/500/700 | 72px | -0.5px | `default_48_{weight}` |
| 42px | 300/400/500/700 | 64px | -0.5px | `default_42_{weight}` |
| 36px | 300/400/700 | 54px | -0.45px | `default_36_{weight}` |
| 36px | **500 (medium)** | 54px | **-1.26px** | `default_36_medium` ← 예외값 |
| 32px | 300/400/500/700 | 48px | -0.45px | `default_32_{weight}` |
| 28px | 300/400/500/700 | 42px | -0.43px | `default_28_{weight}` |
| 24px | 300/400/500/700 | 36px | -0.43px | `default_24_{weight}` |
| 20px | 300/400/500/700 | 30px | -0.43px | `default_20_{weight}` |
| 18px | 300/400/500/700 | 28px | -0.4px  | `default_18_{weight}` |
| 16px | 300/400/500/700 | 24px | -0.35px | `default_16_{weight}` |
| 14px | 300/400/500/700 | 22px | -0.3px  | `default_14_{weight}` |
| 12px | 300/400/500/700 | 18px | -0.26px | `default_12_{weight}` |
| 11px | 300/400/500/700 | 18px | -0.26px | `default_11_{weight}` |

#### Letter Spacing 규칙 (크기별)
| 사이즈 | Letter Spacing |
|--------|----------------|
| 54 / 48 / 42px | -0.5px |
| 36 / 32px | -0.45px |
| 28 / 24 / 20px | -0.43px |
| 18px | -0.4px |
| 16px | -0.35px |
| 14px | -0.3px |
| 12 / 11px | -0.26px |

#### 링크 스타일 (text-decoration: underline)
링크는 `11~24px` × `Light/Regular/Medium/Bold` 조합 제공.  
Figma 스타일명: `link_{size}_{weight}` / CSS 클래스: `.link-{size}-{weight}`

#### 자주 쓰는 스타일
| 용도 | CSS 클래스 | Size | Weight | LH |
|------|-----------|------|--------|----|
| 페이지 대제목 | `.text-32-bold` | 32px | 700 | 48px |
| 섹션 소제목 | `.text-24-bold` | 24px | 700 | 36px |
| 본문 기본 | `.text-16-regular` | 16px | 400 | 24px |
| 본문 강조 | `.text-16-bold` | 16px | 700 | 24px |
| 레이블/버튼 | `.text-14-bold` | 14px | 700 | 22px |
| 본문 서브 | `.text-14-regular` | 14px | 400 | 22px |
| 캡션/뱃지 | `.text-12-bold` | 12px | 700 | 18px |
| 보조 설명 | `.text-12-regular` | 12px | 400 | 18px |

---

### Icons ✅ (SVG 추출 완료)

모든 아이콘: `24×24px`, fill color `var(--fill-0, #17191C)` (CSS variable로 색상 제어 가능)  
파일 위치: `design-system/icons/`

#### Outlined_2px (42개)

| 아이콘 | 파일 | 아이콘 | 파일 |
|--------|------|--------|------|
| Add | `outlined-2px/Add.svg` | Add Circle | `outlined-2px/Add-circle.svg` |
| Alarm | `outlined-2px/Alarm.svg` | Alert | `outlined-2px/Alert.svg` |
| Arrow Back | `outlined-2px/Arrow-back.svg` | Arrow Down | `outlined-2px/Arrow-down.svg` |
| Arrow Forward | `outlined-2px/Arrow-forward.svg` | Arrow Up | `outlined-2px/Arrow-up.svg` |
| Autorenew | `outlined-2px/Autorenew.svg` | Bookmark | `outlined-2px/Bookmark.svg` |
| Cancel | `outlined-2px/Cancel.svg` | Check Circle | `outlined-2px/Check-circle.svg` |
| Chevron Down | `outlined-2px/Chevron-down.svg` | Chevron Left | `outlined-2px/Chevron-left.svg` |
| Chevron Left Double | `outlined-2px/Chevron-left-double.svg` | Chevron Right | `outlined-2px/Chevron-right.svg` |
| Chevron Right Double | `outlined-2px/Chevron-right-double.svg` | Chevron Up | `outlined-2px/Chevron-up.svg` |
| Close | `outlined-2px/Close.svg` | Delete | `outlined-2px/Delete.svg` |
| Done | `outlined-2px/Done.svg` | Favorite | `outlined-2px/Favorite.svg` |
| Home | `outlined-2px/Home.svg` | Image | `outlined-2px/Image.svg` |
| Info | `outlined-2px/Info.svg` | Login | `outlined-2px/Login.svg` |
| Logout | `outlined-2px/Logout.svg` | Menu | `outlined-2px/Menu.svg` |
| More Horizontal | `outlined-2px/More-horizontal.svg` | More Vertical | `outlined-2px/More-vertical.svg` |
| Open In New | `outlined-2px/Open-in-new.svg` | Refresh | `outlined-2px/Refresh.svg` |
| Remove | `outlined-2px/Remove.svg` | Search | `outlined-2px/Search.svg` |
| Settings | `outlined-2px/Settings.svg` | Share | `outlined-2px/Share.svg` |
| Star | `outlined-2px/Star.svg` | Toggle Off | `outlined-2px/Toggle-off.svg` |
| Toggle On | `outlined-2px/Toggle-on.svg` | Upload/Download | `outlined-2px/Upload-download.svg` |
| User | `outlined-2px/User.svg` | Warning | `outlined-2px/Warning.svg` |
| Write | `outlined-2px/Write.svg` | | |

#### Outlined_1.5px (44개)

Outlined_2px와 동일한 아이콘 세트, 선 두께만 2px → 1.5px로 변경.

| 아이콘 | 파일 | 아이콘 | 파일 |
|--------|------|--------|------|
| Add | `outlined-1.5px/Add.svg` | Add Circle | `outlined-1.5px/Add-circle.svg` |
| Alarm | `outlined-1.5px/Alarm.svg` | Alert | `outlined-1.5px/Alert.svg` |
| Arrow Back | `outlined-1.5px/Arrow-back.svg` | Arrow Down | `outlined-1.5px/Arrow-down.svg` |
| Arrow Forward | `outlined-1.5px/Arrow-forward.svg` | Arrow Up | `outlined-1.5px/Arrow-up.svg` |
| Autorenew | `outlined-1.5px/Autorenew.svg` | Bookmark | `outlined-1.5px/Bookmark.svg` |
| Cancel | `outlined-1.5px/Cancel.svg` | Check Circle | `outlined-1.5px/Check-circle.svg` |
| Chevron Down | `outlined-1.5px/Chevron-down.svg` | Chevron Left | `outlined-1.5px/Chevron-left.svg` |
| Chevron Left Double | `outlined-1.5px/Chevron-left-double.svg` | Chevron Right | `outlined-1.5px/Chevron-right.svg` |
| Chevron Right Double | `outlined-1.5px/Chevron-right-double.svg` | Chevron Up | `outlined-1.5px/Chevron-up.svg` |
| Close | `outlined-1.5px/Close.svg` | Delete | `outlined-1.5px/Delete.svg` |
| Done | `outlined-1.5px/Done.svg` | Download | `outlined-1.5px/Download.svg` |
| Favorite | `outlined-1.5px/Favorite.svg` | Home | `outlined-1.5px/Home.svg` |
| Image | `outlined-1.5px/Image.svg` | Info | `outlined-1.5px/Info.svg` |
| Login | `outlined-1.5px/Login.svg` | Logout | `outlined-1.5px/Logout.svg` |
| Menu | `outlined-1.5px/Menu.svg` | More Horizontal | `outlined-1.5px/More-horizontal.svg` |
| More Vertical | `outlined-1.5px/More-vertical.svg` | Open In New | `outlined-1.5px/Open-in-new.svg` |
| Refresh | `outlined-1.5px/Refresh.svg` | Remove | `outlined-1.5px/Remove.svg` |
| Search | `outlined-1.5px/Search.svg` | Settings | `outlined-1.5px/Settings.svg` |
| Share | `outlined-1.5px/Share.svg` | Star | `outlined-1.5px/Star.svg` |
| Toggle Off | `outlined-1.5px/Toggle-off.svg` | Toggle On | `outlined-1.5px/Toggle-on.svg` |
| Upload | `outlined-1.5px/Upload.svg` | User | `outlined-1.5px/User.svg` |
| Warning | `outlined-1.5px/Warning.svg` | Write | `outlined-1.5px/Write.svg` |

#### Filled (5개)

상태 표시 전용 아이콘. 원형 배경 + 흰색 심볼 2-레이어 구조.  
`_circle-bg.svg` — Alert / Check Circle / Cancel / Info 공용 배경 (원형 fill).

| 아이콘 | 파일 | 용도 |
|--------|------|------|
| Alert | `filled/Alert.svg` | 주의 알림 (! 심볼) |
| Cancel | `filled/Cancel.svg` | 취소/오류 (× 심볼) |
| Check Circle | `filled/Check-circle.svg` | 성공/확인 (✓ 심볼) |
| Info | `filled/Info.svg` | 정보 안내 (i 심볼) |
| Warning | `filled/Warning.svg` | 경고 (삼각형, 독립 SVG) |

#### 사용 방법

```html
<!-- SVG 인라인 삽입 (색상 변경 가능) -->
<svg style="--fill-0: var(--bc-1000)">...</svg>

<!-- img 태그 (색상 고정) -->
<img src="icons/outlined-2px/Search.svg" width="24" height="24" alt="검색" />
```

```css
/* 아이콘 색상을 CSS variable로 제어 */
.icon-primary { --fill-0: var(--pc-800); }   /* 브랜드 블루 */
.icon-muted   { --fill-0: var(--bc-500); }   /* 보조 텍스트 회색 */
.icon-white   { --fill-0: var(--color-white); }
```

**선택 기준**
- **Outlined 2px** — 기본 UI 아이콘 (버튼, 인풋, 일반 컨텐츠)
- **Outlined 1.5px** — 본문 내 인라인, 작은 공간, 세밀한 레이아웃
- **Filled** — Notification, Badge, Toast 등 상태 강조 요소

---

## Components

---

### Button ✅ (Figma 실측값)

**구조**
- **Class** (외형): `Filled` | `Outlined` | `Ghost`
- **Type** (색상): `primary_1` | `primary_2` | `secondary_1` | `secondary_2` | `Tertiary_1` | `Tertiary_2`
- **Size**: `XXsmall` | `Xsmall` | `Small` | `Medium` | `Large` | `Xlarge`
- **State**: `enabled` | `hover/pressed` | `disabled`
- **Icon**: `Non icon` | `Icon_left` | `Icon_right` | `Icon_both` | `Only icon`

#### 사이즈 스펙 (실측값)

| Size | Height | Padding (H/V) | Border Radius | Font Size | Font Weight |
|------|--------|---------------|---------------|-----------|-------------|
| XXsmall | 28px | px-8px | 3px | 12px | 500 (Medium) |
| Xsmall | 32px | px-8px | 3px | 12px | 500 (Medium) |
| Small | 40px | px-12px py-9px | 3px | 14px | 500 (Medium) |
| Medium | 48px | px-16px py-12px | 4px | 16px | 500 (Medium) |
| Large | 56px | px-20px py-14px | 4px | 18px | 500 (Medium) |
| Xlarge | 72px | px-24px py-18px | 5px | 24px | 500 (Medium) |

#### 아이콘 전용 버튼 (Only icon)

| Size | Total Size | Padding | Border Radius |
|------|-----------|---------|---------------|
| XXsmall | 24×24px | 4px | 3px |
| Xsmall | 32×32px | 6px | 3px |
| Small | 40×40px | 8px | 4px |
| Medium | 48×48px | 8px | 4px |
| Large | 56×56px | 8px | 5px |
| Xlarge | 72×72px | 8px | 5px |

#### 아이콘 크기 (텍스트 버튼 내 아이콘)

| Size | Icon Size |
|------|-----------|
| Xlarge | 32×32px |
| Large | 24×24px |
| Medium | 20×20px |
| Small | 16×16px |

#### 버튼 레이블 폰트 상세

| Size | Font | Size | Line Height | Letter Spacing |
|------|------|------|-------------|----------------|
| Xlarge | Noto Sans KR Medium | 24px | 36px | -0.43px |
| Large | Noto Sans KR Medium | 18px | 28px | -0.4px |
| Medium | Noto Sans KR Medium | 16px | 24px | -0.35px |
| Small | Noto Sans KR Medium | 14px | 22px | -0.3px |
| Xsmall | Noto Sans KR Medium | 12px | 18px | -0.26px |
| XXsmall | Noto Sans KR Medium | 12px | 18px | -0.26px |

#### 색상 (Filled 기준)

| Type | Background | Text | 용도 |
|------|-----------|------|------|
| primary_1 | `--pc-800` (#0A74FF) | white | 주요 CTA |
| primary_2 | `--pc-1000` (#1E4B85) | white | 다크 primary |
| secondary_1 | `--bc-300` (#C6CCD7) | `--bc-1000` | 보조 액션 |
| secondary_2 | `--bc-900` (#3D4148) | white | 다크 secondary |

#### Outlined 버튼

| Type | Border | Text | Background |
|------|--------|------|-----------|
| primary_1 | `--pc-800` 1px | `--pc-800` | transparent |
| secondary_1 | `--bc-300` 1px | `--bc-700` | transparent |

#### Ghost 버튼

| Type | Text | Background | Hover Background |
|------|------|-----------|-----------------|
| primary_1 | `--pc-800` | transparent | `--pc-100` (10%) |
| secondary_1 | `--bc-700` | transparent | `--bc-100` (10%) |

#### States

| State | Filled primary_1 | Outlined primary_1 | Ghost primary_1 |
|-------|-----------------|-------------------|-----------------|
| Enabled | bg `--pc-800` | border `--pc-800` | text `--pc-800` |
| Hover/Pressed | bg `--pc-700` | bg `--pc-100` | bg `--pc-100` |
| Disabled | bg `--bc-200`, text `--bc-400` | border `--bc-200`, text `--bc-400` | text `--bc-300` |

#### CSS 예시

```css
/* Filled Primary Medium */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  cursor: pointer;
  border: none;
}

.btn-filled-primary  { background: var(--pc-800); color: white; }
.btn-filled-primary:hover { background: var(--pc-700); }
.btn-filled-primary:active { background: var(--pc-900); }
.btn-filled-primary:disabled { background: var(--bc-200); color: var(--bc-400); }

.btn-xlarge  { height: 72px; padding: 18px 24px; border-radius: 5px; font-size: 24px; line-height: 36px; letter-spacing: -0.43px; }
.btn-large   { height: 56px; padding: 14px 20px; border-radius: 4px; font-size: 18px; line-height: 28px; letter-spacing: -0.4px; }
.btn-medium  { height: 48px; padding: 12px 16px; border-radius: 4px; font-size: 16px; line-height: 24px; letter-spacing: -0.35px; }
.btn-small   { height: 40px; padding: 9px 12px;  border-radius: 3px; font-size: 14px; line-height: 22px; letter-spacing: -0.3px; }
.btn-xsmall  { height: 32px; padding: 0   8px;   border-radius: 3px; font-size: 12px; line-height: 18px; letter-spacing: -0.26px; }
.btn-xxsmall { height: 28px; padding: 0   8px;   border-radius: 3px; font-size: 12px; line-height: 18px; letter-spacing: -0.26px; }
```

### Checkbox ✅ (Figma 실측값)

**Props:** Size (Medium / Small / Xsmall) · State (Enabled / Hover·Press / Disabled / Error) · Selected (true / false) · Compact (true / false)

#### 크기별 스펙

| Size | Box | Border-radius | Icon size | Label font | Gap (box↔label) |
|------|-----|---------------|-----------|------------|-----------------|
| Medium | 24×24px | 3px | 16px | 16px Regular (ls -0.35px) | 12px |
| Small | 20×20px | 2px | 14px | 14px Regular (ls -0.3px) | 8px |
| Xsmall | 16×16px | 2px | 12px | 12px Regular (ls -0.26px) | 4px |

#### 체크박스 박스 색상 (Selected=true)

| State | Background | Border | 비고 |
|-------|-----------|--------|------|
| Enabled | `--pc-800` (#0A74FF) | none | 체크마크 흰색 |
| Hover/Press | `--pc-900` (#0056C7) | none | |
| Error | `--r-200` (#EF5D5D) | none | |
| Disabled | `--bc-100` (#E8EBF2) | `--bc-200` (#D2D6E0) 1px | opacity 50% |

#### 체크박스 박스 색상 (Selected=false)

| State | Background | Border |
|-------|-----------|--------|
| Enabled | white | `--bc-200` (#D2D6E0) 1px |
| Hover/Press | white | `--pc-900` (#0056C7) 1px |
| Error | white | `--r-200` (#EF5D5D) 1px |
| Disabled | `--bc-100` (#E8EBF2) | `--bc-200` (#D2D6E0) 1px, opacity 50% |

#### 라벨 텍스트 색상

| State | Color |
|-------|-------|
| Enabled / Hover | `--bc-1000` (#17191C) |
| Disabled | `--bc-400` (#B1B7C4) |
| Error | `--r-200` (#EF5D5D) |

#### CSS 예시

```css
/* Checkbox base */
.checkbox { display: inline-flex; align-items: center; cursor: pointer; }
.checkbox__box { flex-shrink: 0; border: 1px solid var(--bc-200); background: white; }
.checkbox__box--medium  { width: 24px; height: 24px; border-radius: 3px; }
.checkbox__box--small   { width: 20px; height: 20px; border-radius: 2px; }
.checkbox__box--xsmall  { width: 16px; height: 16px; border-radius: 2px; }

/* Selected */
.checkbox__box--checked { background: var(--pc-800); border: none; }
.checkbox__box--checked:hover { background: var(--pc-900); }

/* States */
.checkbox__box--hover   { border-color: var(--pc-900); }
.checkbox__box--error   { border-color: var(--r-200); }
.checkbox__box--error.checkbox__box--checked { background: var(--r-200); border: none; }
.checkbox__box--disabled { background: var(--bc-100); border-color: var(--bc-200); opacity: 0.5; cursor: not-allowed; }

/* Label gap */
.checkbox--medium .checkbox__label { margin-left: 12px; font-size: 16px; letter-spacing: -0.35px; }
.checkbox--small  .checkbox__label { margin-left: 8px;  font-size: 14px; letter-spacing: -0.3px;  }
.checkbox--xsmall .checkbox__label { margin-left: 4px;  font-size: 12px; letter-spacing: -0.26px; }

.checkbox__label--disabled { color: var(--bc-400); }
.checkbox__label--error    { color: var(--r-200); }
```

### Radio Button ✅ (Figma 실측값)

**Props:** Size (Medium / Small / Xsmall) · State (Enabled / Hover·Press / Disabled / Error) · Selected (true / false) · Compact (true / false)

> 체크박스와 동일한 구조지만 **모양이 완전한 원형** (border-radius: 50%). 선택 상태는 내부 작은 원(dot)으로 표현.

#### 크기별 스펙

| Size | 외부 원 | 내부 Dot | 라벨 폰트 | Gap (원↔라벨) |
|------|--------|---------|-----------|--------------|
| Medium | 24×24px | 12px | 16px Regular (ls -0.35px) | 12px |
| Small | 20×20px | 10px | 14px Regular (ls -0.3px) | 8px |
| Xsmall | 16×16px | 8px | 12px Regular (ls -0.26px) | 4px |

#### 외부 원 색상 (Selected=true — 내부 dot 표시)

| State | Background | Border | 내부 Dot 색 |
|-------|-----------|--------|------------|
| Enabled | white | `--pc-800` (#0A74FF) 1px | `--pc-800` |
| Hover/Press | white | `--pc-900` (#0056C7) 1px | `--pc-900` |
| Error | white | `--r-200` (#EF5D5D) 1px | `--r-200` |
| Disabled | `--bc-100` (#E8EBF2) | `--bc-200` (#D2D6E0) 1px, opacity 50% | gray |

#### 외부 원 색상 (Selected=false — 내부 dot 없음)

| State | Background | Border |
|-------|-----------|--------|
| Enabled | white | `--bc-200` (#D2D6E0) 1px |
| Hover/Press | white | `--pc-900` (#0056C7) 1px |
| Error | white | `--r-200` (#EF5D5D) 1px |
| Disabled | `--bc-100` (#E8EBF2) | `--bc-200` (#D2D6E0) 1px, opacity 50% |

#### 라벨 텍스트 색상

| State | Medium | Small / Xsmall |
|-------|--------|----------------|
| Enabled / Hover | `--bc-1000` (#17191C) | `--bc-1000` (#17191C) |
| Disabled | `--bc-400` (#B1B7C4) | `--bc-400` (#B1B7C4) |
| Error | `--bc-1000` (#17191C) | `--r-200` (#EF5D5D) |

#### CSS 예시

```css
/* Radio button */
.radio { display: inline-flex; align-items: center; cursor: pointer; }

.radio__circle {
  flex-shrink: 0;
  border-radius: 50%;
  border: 1px solid var(--bc-200);
  background: white;
  position: relative;
}
.radio__circle--medium  { width: 24px; height: 24px; }
.radio__circle--small   { width: 20px; height: 20px; }
.radio__circle--xsmall  { width: 16px; height: 16px; }

/* Inner dot */
.radio__circle::after {
  content: '';
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: var(--pc-800);
  display: none;
}
.radio__circle--medium::after  { width: 12px; height: 12px; }
.radio__circle--small::after   { width: 10px; height: 10px; }
.radio__circle--xsmall::after  { width: 8px;  height: 8px;  }

/* Selected */
.radio__circle--selected { border-color: var(--pc-800); }
.radio__circle--selected::after { display: block; }
.radio__circle--selected:hover  { border-color: var(--pc-900); }
.radio__circle--selected:hover::after { background: var(--pc-900); }

/* States */
.radio__circle--hover   { border-color: var(--pc-900); }
.radio__circle--error   { border-color: var(--r-200); }
.radio__circle--error.radio__circle--selected::after { background: var(--r-200); }
.radio__circle--disabled { background: var(--bc-100); border-color: var(--bc-200); opacity: 0.5; cursor: not-allowed; }

/* Label gap */
.radio--medium .radio__label { margin-left: 12px; font-size: 16px; letter-spacing: -0.35px; }
.radio--small  .radio__label { margin-left: 8px;  font-size: 14px; letter-spacing: -0.3px;  }
.radio--xsmall .radio__label { margin-left: 4px;  font-size: 12px; letter-spacing: -0.26px; }

.radio__label--disabled { color: var(--bc-400); }
.radio__label--error    { color: var(--r-200); } /* Small/Xsmall만 적용, Medium은 bc-1000 유지 */
```

### Text Fields ✅ (Figma 실측값)

**Props:** Variant (Outlined / Filled / Underlined) · Size (Xsmall / Small / Medium / Large) · State (Enabled / Hover / Focused / Active-typing / Activated / Disabled / Error) · Show Info (None / Counter / Message / Message+Counter)

#### 크기별 스펙 (Outlined 기준, 모든 variant 동일)

| Size | 높이 | Padding 상하 | Padding 좌우 | Border-radius | 폰트 | Line-height | LS |
|------|------|------------|------------|---------------|------|-------------|-----|
| Xsmall | 32px | 6px | 8px | 3px | 12px Regular | 18px | -0.26px |
| Small | 40px | 8px | 13px | 3px | 14px Regular | 22px | -0.3px |
| Medium | 48px | 11px | 17px | 4px | 16px Regular | 24px | -0.35px |
| Large | 56px | 12.5px | 16px | 5px | 18px Regular | 28px | -0.4px |

#### 상태별 색상 (Outlined)

| State | Border | Background | 텍스트 | 비고 |
|-------|--------|-----------|--------|------|
| Enabled | `--bc-200` (#D2D6E0) 1px | white | `--bc-500` placeholder | |
| Hover | `--pc-800` (#0A74FF) 1px | white | `--bc-500` placeholder | |
| Focused | `--pc-800` (#0A74FF) 1px | white | `--bc-500` placeholder | 커서 표시 |
| Active-typing | `--pc-800` (#0A74FF) 1px | white | `--bc-1000` 입력 텍스트 | |
| Activated | `--bc-200` (#D2D6E0) 1px | white | `--bc-1000` 입력 텍스트 | 값 있음, blur 상태 |
| Error | `--r-200` (#EF5D5D) 1px | white | `--bc-1000` | X 아이콘(clear) 우측 표시 |
| Disabled | `--bc-300` (#C6CCD7) 1px | `--bc-100` (#E8EBF2) | `--bc-500` | opacity 50% |

#### Variant별 차이

| Variant | 기본 Background | 기본 Border |
|---------|---------------|------------|
| Outlined | white | `--bc-200` 전체 테두리 |
| Filled | `--lb-100` (#FCFCFD) | `--bc-100` (#E8EBF2) 전체 테두리 |
| Underlined | 없음 | `--bc-200` 하단 테두리만 (border-bottom) |

> Filled와 Underlined의 Focus/Hover/Error 상태 border 색은 Outlined와 동일 (`--pc-800`, `--r-200`)

#### Info 영역 (입력창 하단)

- **Counter** — 글자 수 (예: 0/100), 12px Regular, `--bc-500`, 우측 정렬
- **Message** — 도움말/에러 텍스트, 12px Regular, Error 시 `--r-200`
- **Message + Counter** — 둘 다 표시

#### CSS 예시

```css
/* Outlined Medium */
.input-outlined-md {
  height: 48px;
  padding: 11px 17px;
  border: 1px solid var(--bc-200);
  border-radius: 4px;
  background: white;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.35px;
  color: var(--bc-1000);
  width: 100%;
}
.input-outlined-md::placeholder { color: var(--bc-500); }
.input-outlined-md:hover  { border-color: var(--pc-800); }
.input-outlined-md:focus  { border-color: var(--pc-800); outline: none; }
.input-outlined-md.error  { border-color: var(--r-200); }
.input-outlined-md:disabled { background: var(--bc-100); border-color: var(--bc-300); opacity: 0.5; }

/* Filled Medium */
.input-filled-md {
  background: var(--lb-100);
  border: 1px solid var(--bc-100);
}
.input-filled-md:hover, .input-filled-md:focus { border-color: var(--pc-800); }

/* Underlined Medium */
.input-underlined-md {
  border: none;
  border-bottom: 1px solid var(--bc-200);
  border-radius: 0;
  background: transparent;
}
.input-underlined-md:hover, .input-underlined-md:focus { border-bottom-color: var(--pc-800); }
```

### Dropdown ✅ (Figma 실측값)

**Props:** Variant (Outlined / Filled / Underlined) · Size (Xsmall / Small / Medium / Large) · State (Enabled / Hover / Open / Focused(option) / Active(option) / Activated / Disabled / Error)

> Trigger는 Text Field와 동일한 크기·패딩·반경을 사용. 우측에 **Chevron-down 아이콘(24px)** 추가, gap 16px.

#### Trigger 상태별 색상 (Outlined 기준)

| State | Border | Background | 텍스트 | 아이콘 |
|-------|--------|-----------|--------|--------|
| Enabled | `--bc-200` 1px | white | `--bc-500` placeholder | Chevron-down |
| Hover | `--pc-800` 1px | white | `--bc-500` placeholder | Chevron-down |
| Open | `--pc-800` 1px | white | `--bc-1000` 선택값 | **Chevron-up** |
| Activated | `--bc-200` 1px | white | `--bc-1000` 선택값 | Chevron-down |
| Error | `--r-200` 1px | white | `--bc-1000` | Chevron-down |
| Disabled | `--bc-300` 1px | `--bc-100` | `--bc-500` | Chevron-down, opacity 50% |

#### 드롭다운 리스트 (Open 시)

- **컨테이너**: bg white, border `--pc-800` 1px, border-radius 4px, padding 5px
- **그림자**: `box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.12)` (Dropdown list shadow)
- **아이템 간격**: gap 2px
- **스크롤바**: 4px 너비, `--bc-200` 색, border-radius 2px

#### 옵션 아이템 (Medium 기준 — 높이 48px)

| 상태 | Background | 텍스트 색 | 폰트 |
|------|-----------|---------|------|
| 기본 (Enabled) | transparent | `--bc-700` (#747A86) | 16px Regular |
| Hover | `--pc-100` (#ECF1F9) | `--bc-700` (#747A86) | 16px Regular |
| Selected | transparent | `--pc-800` (#0A74FF) | **16px Bold** |
| Selected + Hover | `--pc-100` (#ECF1F9) | `--pc-800` (#0A74FF) | **16px Bold** |

- 아이템 패딩: `pt-[10px] pb-[14px] px-[12px]`

#### Error 하단 메시지

- gap: 4px (trigger↔message)
- Alert 아이콘 (16px) + 메시지 텍스트: 14px Regular, `--r-200`, ls -0.48px

#### CSS 예시

```css
/* Trigger — Outlined Medium (Text Field과 동일 구조) */
.dropdown-trigger {
  display: flex;
  align-items: center;
  gap: 16px;
  height: 48px;
  padding: 11px 17px;
  border: 1px solid var(--bc-200);
  border-radius: 4px;
  background: white;
  cursor: pointer;
}
.dropdown-trigger:hover, .dropdown-trigger.open { border-color: var(--pc-800); }
.dropdown-trigger.error   { border-color: var(--r-200); }
.dropdown-trigger.disabled { background: var(--bc-100); border-color: var(--bc-300); opacity: 0.5; }

/* List */
.dropdown-list {
  background: white;
  border: 1px solid var(--pc-800);
  border-radius: 4px;
  padding: 5px;
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.12);
  display: flex;
  flex-direction: column;
  gap: 2px;
}

/* Options */
.dropdown-option {
  padding: 10px 12px 14px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  color: var(--bc-700);
  letter-spacing: -0.35px;
  cursor: pointer;
}
.dropdown-option:hover          { background: var(--pc-100); }
.dropdown-option.selected       { color: var(--pc-800); font-weight: 700; }
.dropdown-option.selected:hover { background: var(--pc-100); }
```

### Search ✅ (Figma 실측값)

**Props:** Variant (Outlined / Filled / Underlined) · Size (Xsmall / Small / Medium / Large) · State (Enabled / Hover / Active / Focused / Activated / Disabled / Error)

> Dropdown과 동일한 Trigger 구조. 차이점: 우측 아이콘이 **Search(돋보기)**이며, 입력값 있을 때 **X(clear) 아이콘**이 Search 아이콘 왼쪽에 추가됨 (gap 4px).

#### 상태별 색상 및 아이콘 (Outlined Medium 기준)

| State | Border | Background | 텍스트 | 우측 아이콘 |
|-------|--------|-----------|--------|------------|
| Enabled | `--bc-200` 1px | white | `--bc-500` placeholder | Search (24px) |
| Hover | `--pc-800` 1px | white | `--bc-500` placeholder | Search |
| Active (typing) | `--pc-800` 1px | white | `--bc-1000` | X + Search (gap 4px) |
| Focused (suggestion open) | `--pc-800` 1px | white | `--bc-1000` | X + Search |
| Activated (값 있음, blur) | `--bc-200` 1px | white | `--bc-1000` | X + Search |
| Error | `--r-200` 1px | white | `--bc-1000` | X + Search + 에러 메시지 하단 |
| Disabled | `--bc-300` 1px | `--bc-100` | `--bc-500` | Search, opacity 50% |

#### 자동완성 리스트 (Focused 상태)

- Dropdown 리스트와 동일: bg white, border `--pc-800` 1px, border-radius 4px, padding 5px
- Shadow: `box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.12)`
- 아이템 높이: 48px (Medium), padding 12px 전체

| 아이템 상태 | Background | 텍스트 |
|-----------|-----------|--------|
| 일치 항목 (선택) | transparent | `--pc-800` Regular |
| Hover | `--pc-100` (#ECF1F9) | 일치 부분 `--pc-800` + 나머지 `--bc-700` |
| 일반 옵션 | transparent | `--bc-700` Regular |

#### CSS 예시

```css
/* Search input — Outlined Medium */
.search-input {
  display: flex;
  align-items: center;
  gap: 16px;
  height: 48px;
  padding: 11px 17px;
  border: 1px solid var(--bc-200);
  border-radius: 4px;
  background: white;
}
.search-input:hover, .search-input:focus-within { border-color: var(--pc-800); }
.search-input.error   { border-color: var(--r-200); }
.search-input.disabled { background: var(--bc-100); border-color: var(--bc-300); opacity: 0.5; }

/* 우측 아이콘 영역 */
.search-icons { display: flex; align-items: center; gap: 4px; flex-shrink: 0; }
.search-icon-clear { /* X 버튼: 24px 터치영역, 18px 아이콘, padding 10px */ }
.search-icon-search { width: 24px; height: 24px; }

/* Suggestion list */
.search-suggestions {
  background: white;
  border: 1px solid var(--pc-800);
  border-radius: 4px;
  padding: 5px;
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.12);
  margin-top: 4px;
}
.search-suggestion-item {
  height: 48px;
  padding: 12px;
  border-radius: 4px;
  font-size: 16px;
  color: var(--bc-700);
}
.search-suggestion-item:hover  { background: var(--pc-100); }
.search-suggestion-item.match  { color: var(--pc-800); }
```

### Notification ✅ (Figma 실측값)

**두 가지 타입**: Inline Notification / Toast Notification  
**Props:** State (Information / Warning / Error / Success) · Title (True / False) · showIcoX · showLink

---

#### Inline Notification

배경을 상태 색으로 채우는 형태. 전체 너비 사용.

| State | Background | 텍스트 색 | 아이콘 |
|-------|-----------|---------|--------|
| Information | `--pc-100` (#ECF1F9) | `#1E4B85` (PC1000) | Info (14px) |
| Warning | `--y-200` (#FFBB00) | white | Warning triangle (14px) |
| Error | `--r-200` (#EF5D5D) | white | Cancel/X circle (14px) |
| Success | `--g-200` (#59E387) | white | Check circle (14px) |

**레이아웃:**
- Padding: `pt-12px pb-16px px-16px`
- 구조: `[Icon 20px] [gap 4px] [Text group] [gap 32px] [X 16px]`
- Title: 14px Bold, line-height 22px, ls -0.3px
- Body: 14px Regular, line-height 22px, ls -0.3px
- Link: 14px Regular, underline, 텍스트와 동색 (Information만 PC800)
- X(close) 아이콘: 16px, 우측 상단 고정

---

#### Toast Notification

흰색 배경 + 좌측 4px 컬러 액센트 바 형태.

| State | 액센트 바 색 | 아이콘 색 |
|-------|------------|---------|
| Information | `--pc-800` (#0A74FF) | `--pc-800` |
| Warning | `--y-200` (#FFBB00) | `--y-200` |
| Error | `--r-200` (#EF5D5D) | `--r-200` |
| Success | `--g-200` (#59E387) | `--g-200` |

**레이아웃:**
- bg white, border `--bc-100` (#E8EBF2) 1px, border-radius 4px
- **Shadow**: `box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.08)` (Inline보다 진함)
- **좌측 액센트 바**: width 4px, height 100%, 상태 색
- Padding: `pt-14px pb-14px pl-16px pr-48px`
- X(close) 아이콘 16px: absolute, `top-12px right-12px`
- Title: 14px Bold, `--bc-1000`, line-height 22px
- Body: 14px Regular, `--bc-700` (#747A86), line-height 22px
- Link: 14px Regular, `--pc-800`
- Title↔Link 간격: 24px

#### CSS 예시

```css
/* Inline Notification */
.notification-inline {
  display: flex;
  align-items: flex-start;
  gap: 32px;
  padding: 12px 16px 16px;
  width: 100%;
}
.notification-inline--info    { background: var(--pc-100); color: #1E4B85; }
.notification-inline--warning { background: var(--y-200);  color: white; }
.notification-inline--error   { background: var(--r-200);  color: white; }
.notification-inline--success { background: var(--g-200);  color: white; }

/* Toast Notification */
.notification-toast {
  position: relative;
  display: flex;
  align-items: flex-start;
  padding: 14px 48px 14px 16px;
  background: white;
  border: 1px solid var(--bc-100);
  border-radius: 4px;
  box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.08);
  overflow: hidden;
}
.notification-toast::before {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 4px;
}
.notification-toast--info::before    { background: var(--pc-800); }
.notification-toast--warning::before { background: var(--y-200); }
.notification-toast--error::before   { background: var(--r-200); }
.notification-toast--success::before { background: var(--g-200); }

.notification-toast__title { font-size: 14px; font-weight: 700; color: var(--bc-1000); line-height: 22px; }
.notification-toast__body  { font-size: 14px; font-weight: 400; color: var(--bc-700);  line-height: 22px; }
.notification-toast__close { position: absolute; top: 12px; right: 12px; width: 16px; height: 16px; }
```

### Tooltip ✅ (Figma 실측값)

**두 가지 타입**: Dialog Tooltip / Definition Tooltip

---

#### Dialog Tooltip

안내·튜토리얼 용도. 닫기 버튼 + 액션 영역 포함.

**컨테이너:**
- bg: `white`
- border: `--bc-100` (#E8EBF2) 1px
- border-radius: `4px`
- **Shadow**: `box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.08)`
- Padding: `pt-13px pb-13px px-17px`
- Width: ~307px (고정)

**화살표(Arrow):**
- 8×8px 삼각형
- Bottom placement → 화살표 상단 중앙 (top center)
- Top placement → 화살표 하단 중앙 (bottom center)
- Placements: Top / Bottom / Left / Right × Center / Start / End

**내부 레이아웃:**
- 닫기(X) 아이콘: 16×16px, absolute `top-16px right-9px`
- 본문 텍스트: 12px Regular, `--bc-1000`, line-height 18px, ls -0.26px, `pr-16px` (닫기 버튼 여백)
- 텍스트 ↔ 액션 영역 gap: `12px`

**액션 영역 (하단):**
- Skip 텍스트: 12px Regular, `--bc-500`
- Next 버튼: bg `--bc-1000`, text white 12px Bold, height 32px, padding `7px 10px`, border-radius 3px

---

#### Definition Tooltip

호버 시 단어 정의/설명을 보여주는 심플 툴팁.

**컨테이너:**
- bg: `rgba(24,25,28,0.8)` — BC1000 80% 투명도
- `backdrop-filter: blur(7.5px)`
- border-radius: `4px`
- **Shadow**: `box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.15)`
- Padding: `pt-4px pb-6px px-8px`

**텍스트:**
- 12px Regular, `white`, line-height 18px, ls -0.26px

---

#### CSS 예시

```css
/* Definition Tooltip */
.tooltip-definition {
  background: rgba(24, 25, 28, 0.8);
  backdrop-filter: blur(7.5px);
  border-radius: 4px;
  box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.15);
  padding: 4px 8px 6px;
  font-size: 12px;
  font-weight: 400;
  color: white;
  line-height: 18px;
  letter-spacing: -0.26px;
}

/* Dialog Tooltip */
.tooltip-dialog {
  position: relative;
  width: 307px;
  background: white;
  border: 1px solid var(--bc-100);
  border-radius: 4px;
  box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.08);
  padding: 13px 17px;
}
.tooltip-dialog__close {
  position: absolute;
  top: 16px;
  right: 9px;
  width: 16px;
  height: 16px;
}
.tooltip-dialog__text {
  font-size: 12px;
  font-weight: 400;
  color: var(--bc-1000);
  line-height: 18px;
  letter-spacing: -0.26px;
  padding-right: 16px;
}
.tooltip-dialog__actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
}
.tooltip-dialog__skip {
  font-size: 12px;
  font-weight: 400;
  color: var(--bc-500);
}
.tooltip-dialog__next {
  background: var(--bc-1000);
  color: white;
  font-size: 12px;
  font-weight: 700;
  height: 32px;
  padding: 7px 10px;
  border-radius: 3px;
  border: none;
}
/* Arrow — Bottom placement (화살표 위) */
.tooltip-dialog--bottom::before {
  content: '';
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  border: 8px solid transparent;
  border-bottom-color: white;
  border-top: none;
}
```

### Badge ✅ (Figma 실측값)

**두 가지 타입**: Container Badge (숫자) / Dot Badge (표시점)  
**색상**: bg `--pc-800` (#0A74FF) 기본 — 상황에 따라 `--r-200`, `--g-200` 등 교체

---

#### Container Badge

숫자를 담는 뱃지. Single (한 자리) / Multi (두 자리 이상) 스타일로 분기.

| Size | Single 크기 | Multi 크기 | 폰트 | Letter-spacing | Border-radius |
|------|------------|-----------|------|----------------|---------------|
| Small | 14×14px | 25×14px | 9px Bold | -0.12px | 8px |
| Medium | 16×16px | 30×16px | 11px Bold | -0.26px | 10px |
| Large | 22×22px | 38×22px | 14px Bold | -0.30px | 12px |
| Xlarge | 24×24px | 46×24px | 16px Bold | -0.35px | 12px |
| Xxlarge | 32×32px | 61×32px | 20px Bold | -0.43px | 16px |

- bg: `--pc-800` (#0A74FF), text: white, font-weight: 700
- Multi(Xxlarge): `px-12px`, border-radius 16px (pill 형태)
- Single: border-radius = size/2 (완전한 원)

---

#### Dot Badge

알림 표시용 작은 점. 색상은 컨텍스트에 따라 결정 (Figma 기본값: `--r-200`).

| Size | 크기 | Border-radius |
|------|------|---------------|
| Small | 4×4px | 2px |
| Medium | 6×6px | 3px |
| Large | 8×8px | 4px |
| Xlarge | 12×12px | 6px |
| Xxlarge | 16×16px | 8px |

---

#### CSS 예시

```css
/* Container Badge */
.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--pc-800);
  color: white;
  font-weight: 700;
  white-space: nowrap;
}
/* Single (정사각형 → 원) */
.badge--sm   { width: 14px; height: 14px; border-radius: 8px;  font-size: 9px;  letter-spacing: -0.12px; }
.badge--md   { width: 16px; height: 16px; border-radius: 10px; font-size: 11px; letter-spacing: -0.26px; }
.badge--lg   { width: 22px; height: 22px; border-radius: 12px; font-size: 14px; letter-spacing: -0.30px; }
.badge--xl   { width: 24px; height: 24px; border-radius: 12px; font-size: 16px; letter-spacing: -0.35px; }
.badge--xxl  { width: 32px; height: 32px; border-radius: 16px; font-size: 20px; letter-spacing: -0.43px; }
/* Multi (pill) */
.badge--multi { border-radius: 999px; padding: 0 8px; }
.badge--xxl.badge--multi { padding: 0 12px; }

/* Dot Badge */
.badge-dot { border-radius: 50%; background: var(--r-200); }
.badge-dot--sm  { width: 4px;  height: 4px; }
.badge-dot--md  { width: 6px;  height: 6px; }
.badge-dot--lg  { width: 8px;  height: 8px; }
.badge-dot--xl  { width: 12px; height: 12px; }
.badge-dot--xxl { width: 16px; height: 16px; }
```

### Toggle Button ✅ (Figma 실측값)

**사이즈**: Large / Medium / Small  
**텍스트 옵션**: None / Right / Side to side / Thumb / Track text + Thumb text

---

#### 크기 스펙

| Size | Track | Thumb | Padding | Border-radius |
|------|-------|-------|---------|---------------|
| Large | 80×40px | 34px | 3px | 20px (pill) |
| Medium | 64×32px | 26px | 3px | 16px (pill) |
| Small | 48×24px | 20px | 2px | 12px (pill) |

- Thumb: white 원형 (`border-radius: 100px`)
- Track: `overflow: hidden`

---

#### 상태별 스타일

| State | Track bg | Thumb 위치 |
|-------|---------|-----------|
| OFF Enabled | `--bc-200` (#D2D6E0) | 왼쪽 |
| OFF Hover/Pressed | `--bc-300` (#C6CCD7) | 왼쪽 |
| OFF Disabled | `--bc-200` opacity 50% | 왼쪽 |
| ON Enabled | `--pc-800` (#0A74FF) | 오른쪽 |
| ON Hover/Pressed | `--pc-900` (#0056C7) | 오른쪽 |
| ON Disabled | `--pc-800` opacity 20% | 오른쪽 |

---

#### CSS 예시

```css
.toggle {
  position: relative;
  display: flex;
  align-items: center;
  padding: 3px;
  border-radius: 20px;
  background: var(--bc-200);
  overflow: hidden;
  cursor: pointer;
  transition: background 0.2s;
}
.toggle--lg { width: 80px; height: 40px; border-radius: 20px; }
.toggle--md { width: 64px; height: 32px; border-radius: 16px; }
.toggle--sm { width: 48px; height: 24px; border-radius: 12px; padding: 2px; }

.toggle__thumb {
  background: white;
  border-radius: 100px;
  flex-shrink: 0;
  transition: transform 0.2s;
}
.toggle--lg .toggle__thumb { width: 34px; height: 34px; }
.toggle--md .toggle__thumb { width: 26px; height: 26px; }
.toggle--sm .toggle__thumb { width: 20px; height: 20px; }

/* ON 상태 — thumb을 오른쪽으로 이동 */
.toggle.on { background: var(--pc-800); justify-content: flex-end; }
.toggle.on:hover { background: var(--pc-900); }
.toggle:not(.on):hover { background: var(--bc-300); }
.toggle:disabled,
.toggle[aria-disabled="true"] { opacity: 0.5; pointer-events: none; }
.toggle.on:disabled { opacity: 0.2; }
```

---

### Dialog ✅ (Figma 실측값)

**구성**: Header + Content Area + Footer  
**사이즈**: XSmall (320px) / Small (400px) / Medium (520px) / Large (800px) / XLarge (960px)

---

#### 컨테이너

```css
.dialog {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 4px;
  background: white;
  box-shadow: 0px 4px 25px 0px rgba(0,0,0,0.25);
}
```

**딤드 오버레이**: `background: rgba(0,0,0,0.5)` (전체 화면 덮음)

---

#### Header

| 구성 | 설명 |
|------|------|
| None | 높이 32px 여백만 |
| Left / Center | 제목 정렬 방향 |
| _X suffix | X(닫기) 버튼 포함 |
| _Sub suffix | 서브 텍스트 포함 |

- bg: white, border-radius: top 4px
- Padding: `pt-32px pb-20px px-28px`
- 타이틀 폰트: 20px Bold, `--bc-1000`, lh 30px, ls -0.43px
- X 버튼: 오른쪽 상단 고정

---

#### Content Area

- bg: `--lb-300` (#EEF1F6)
- 너비: 100% (다이얼로그 폭에 맞춤)
- 높이: 콘텐츠에 따라 가변 (Figma 예시 기본값 218px)
- padding: 콘텐츠에 따라 자유롭게

---

#### Footer

| 구성 | 버튼 구성 |
|------|---------|
| None | 높이 32px 여백만 |
| One | 전체 폭 버튼 1개 (primary_2 = `--bc-1000` 배경) |
| Two | 보조 + 주요 버튼 나란히 |
| Three | 보조 2개 + 주요 버튼 |

- bg: white, border-radius: bottom 4px
- Padding: `pt-32px pb-28px px-28px`
- 버튼은 사이즈별로 다이얼로그 크기에 맞춤

**버튼 타입 (Footer 내):**
- Primary: bg `--bc-1000` (#17191C), 텍스트 white (dark filled)
- Secondary: bg `--lb-300` (#EEF1F6), 텍스트 `--bc-1000` (light filled)
- Ghost: bg 없음, 테두리 없음, 텍스트 `--bc-1000`

---

#### 전체 높이 계산 (Medium 기준)

```
Header None:  32px
Content:     218px (예시)
Footer None:  32px
= 282px 기본

Footer One:  32 + 48(버튼) + 28 = 108px → 기본 대비 +76px
Footer Two:  +108px 이상
Footer Three: +164px 이상
```

---

#### CSS 예시

```css
.dialog-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.dialog {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 4px;
  background: white;
  box-shadow: 0px 4px 25px 0px rgba(0,0,0,0.25);
  width: 520px; /* Medium */
}
.dialog__header {
  background: white;
  border-radius: 4px 4px 0 0;
  padding: 32px 28px 20px;
  font-size: 20px;
  font-weight: 700;
  color: var(--bc-1000);
  line-height: 30px;
  letter-spacing: -0.43px;
}
.dialog__header--none { height: 32px; }
.dialog__content {
  background: var(--lb-300);
  flex: 1;
  padding: 24px 28px;
}
.dialog__footer {
  background: white;
  border-radius: 0 0 4px 4px;
  padding: 32px 28px 28px;
  display: flex;
  gap: 8px;
  justify-content: center;
}
.dialog__footer--none { height: 32px; }
.dialog__footer-btn { flex: 1; height: 48px; border-radius: 4px; font-size: 16px; font-weight: 500; }
.dialog__footer-btn--primary   { background: var(--bc-1000); color: white; }
.dialog__footer-btn--secondary { background: var(--lb-300); color: var(--bc-1000); }
```

---

### Link ✅ (Figma 실측값)

**타입**: Primary / Secondary  
**케이스**: Text / Underline / Text + Icon / Text + Icon + Underline  
**텍스트 굵기**: Regular / Bold  
**상태**: Enabled / Hover/pressed / Visited

---

#### 사이즈 & 폰트

| Size | 폰트 크기 | Line-height | Letter-spacing |
|------|---------|-------------|----------------|
| Large | 16px | 24px | -0.35px |
| Medium | 14px | 22px | -0.30px |
| Small | 12px | 18px | -0.26px |

---

#### 색상 — 타입 × 상태

| State | Primary 색 | Secondary 색 | 비고 |
|-------|-----------|-------------|------|
| Enabled | `--pc-800` (#0A74FF) | `--bc-700` (#747A86) | — |
| Hover/Pressed | `--pc-900` (#0056C7) | `--bc-800` (#51555D) | underline 추가 |
| Visited | `--pp-200` (#9747FF) | `--pp-200` (#9747FF) | Primary와 동일 purple |

---

#### 케이스별 시각 처리

| Case | 설명 |
|------|------|
| Text | 텍스트만. Hover 시 underline 자동 추가 |
| Underline | 항상 underline (`text-decoration-skip-ink: none`) |
| Text + Icon | 텍스트 + 오른쪽 외부링크 아이콘 |
| Text + Icon + Underline | 위 두 가지 조합 |

---

#### CSS 예시

```css
/* Base */
.link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.35px;
  color: var(--pc-800);
  text-decoration: none;
  cursor: pointer;
}

/* Type */
.link--secondary { color: var(--bc-700); }

/* States */
.link:hover              { color: var(--pc-900); text-decoration: underline; text-decoration-skip-ink: none; }
.link--secondary:hover   { color: var(--bc-800); text-decoration: underline; text-decoration-skip-ink: none; }
.link:visited            { color: var(--pp-200); }
.link--secondary:visited { color: var(--pp-200); }

/* Case: Underline — 항상 underline */
.link--underline { text-decoration: underline; text-decoration-skip-ink: none; }

/* Size */
.link--md { font-size: 14px; line-height: 22px; letter-spacing: -0.30px; }
.link--sm { font-size: 12px; line-height: 18px; letter-spacing: -0.26px; }

/* Bold variant */
.link--bold { font-weight: 700; }
```

---

### Pagination ✅ (Figma 실측값)

**사이즈**: Medium (M) / Large (L)  
**상태 변형**: Standard Non Arrow / Standard Arrow / Truncation Start / Truncation End / Truncation Middle

---

#### 구성 요소

**Number 버튼:**

| Size | 크기 | 폰트 | Letter-spacing |
|------|------|------|----------------|
| M | 32×32px | 14px Regular | -0.30px |
| L | 44×44px | 16px Regular | -0.35px |

| State | Background | 텍스트 색 | Border-radius |
|-------|-----------|---------|---------------|
| Enabled | — | `--bc-600` (#8F96A3) | — |
| Hover/Pressed | — | `--pc-800` (#0A74FF) | — |
| Selected | `--bc-1000` (#17191C) | white | 4px |
| Disabled | — | `--bc-600` opacity 50% | — |

**Arrow 버튼 (M: 26×32px / L: 37×44px):**
- Padding: `11px`, border-radius: `4px`
- 아이콘: 10px SVG (M), 색: `--bc-600`
- 4종: First Page (`|◀`) / Previous Page (`◀`) / Next Page (`▶`) / End Page (`▶|`)
- Hover: bg `--lb-200` (#F9FAFB); Disabled: opacity 50%

**Ellipsis (...):**
- Number 버튼과 동일 크기, 텍스트 `...`, 색 `--bc-600`

---

#### 레이아웃 구조

```
Standard Non Arrow:
  [num] [num] [num★] [num] [num]   ← gap 4px

Standard Arrow:
  [|◀][◀]  [gap 12px]  [num][num][num★][num][num]  [gap 12px]  [▶][▶|]

Truncation Start:   [|◀][◀] [1] [2★] [...] [8] [9] [10] [▶][▶|]
Truncation End:     [|◀][◀] [1] [2] [3] [...] [9★] [10] [▶][▶|]
Truncation Middle:  [|◀][◀] [1] [...] [5★] [...] [10] [▶][▶|]
```

---

#### CSS 예시

```css
.pagination { display: flex; align-items: center; gap: 12px; }

.pagination__numbers { display: flex; align-items: center; gap: 4px; }

.page-num {
  display: flex; align-items: center; justify-content: center;
  width: 32px; height: 32px;
  font-size: 14px; font-weight: 400;
  color: var(--bc-600);
  letter-spacing: -0.3px;
  cursor: pointer;
}
.page-num:hover      { color: var(--pc-800); }
.page-num.selected   { background: var(--bc-1000); color: white; border-radius: 4px; }
.page-num:disabled   { opacity: 0.5; pointer-events: none; }

.page-arrow {
  display: flex; align-items: center; justify-content: center;
  width: 26px; height: 32px;
  padding: 11px;
  border-radius: 4px;
  cursor: pointer;
  color: var(--bc-600);
}
.page-arrow:hover    { background: var(--lb-200); }
.page-arrow:disabled { opacity: 0.5; pointer-events: none; }

/* Large */
.pagination--lg .page-num   { width: 44px; height: 44px; font-size: 16px; letter-spacing: -0.35px; }
.pagination--lg .page-arrow { width: 37px; height: 44px; }
```

---

### Tab ✅ (Figma 실측값)

**두 가지 타입**: Line Tab / Box Tab  
**콘텐츠 스타일**: Text / Number / Icon + Number  
**레이아웃**: Flexible Center / Flexible Left / Fixed

---

#### Line Tab

하단 2px 라인으로 선택 표시. 탭 전체 너비에 걸쳐 가로 배치.

**탭 아이템 높이:** 38px (텍스트 24px + 하단 라인 2px + gap 12px)  
**폰트:** 16px, ls -0.35px, lh 24px

| State | 폰트 굵기 | 텍스트 색 | 하단 라인 |
|-------|---------|---------|---------|
| Selected | Bold (700) | `--bc-1000` (#17191C) | 2px `--bc-1000` |
| Hover/Pressed | Medium (500) | `--bc-1000` | — |
| Unselected | Medium (500) | `--bc-700` (#747A86) | — |

---

#### Box Tab

상단 3면(top+left+right) 테두리로 탭 형태 표현. 선택된 탭이 2px 더 높아 돌출된 느낌.

**Border-radius:** `border-top-left-radius: 8px; border-top-right-radius: 8px`  
**폰트:** 16px, ls -0.35px, lh 24px

| State | 높이 | bg | Border | Border-width | pt | pb | px | 텍스트 굵기 | 텍스트 색 |
|-------|------|----|---------|--------------|----|----|----|------------|---------|
| Selected | 58px | white | `--bc-1000` | 2px | 19px | 15px | 18px | Bold (700) | `--bc-1000` |
| Hover | 56px | `--lb-200` (#F9FAFB) | `--bc-100` (#E8EBF2) | 1px | 17px | 15px | 16px | Medium (500) | `--bc-1000` |
| Unselected | 56px | `--lb-200` (#F9FAFB) | `--bc-100` (#E8EBF2) | 1px | 17px | 15px | 16px | Medium (500) | `--bc-700` |

> Selected가 58px인 이유: border 2px vs 1px 차이로 자연스럽게 1px 돌출

---

#### CSS 예시

```css
/* Line Tab */
.tab-list--line { display: flex; align-items: flex-end; }

.tab-item--line {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  height: 38px;
  padding-bottom: 0;
  cursor: pointer;
}
.tab-item--line span {
  font-size: 16px; font-weight: 500;
  color: var(--bc-700);
  line-height: 24px; letter-spacing: -0.35px;
}
.tab-item--line:hover span    { color: var(--bc-1000); }
.tab-item--line.selected span { font-weight: 700; color: var(--bc-1000); }
.tab-item--line.selected::after {
  content: ''; display: block;
  height: 2px; width: 100%;
  background: var(--bc-1000);
}

/* Box Tab */
.tab-item--box {
  display: flex; align-items: center; justify-content: center;
  width: 152px; height: 56px;
  padding: 17px 16px 15px;
  border: 1px solid var(--bc-100);
  border-bottom: none;
  border-radius: 8px 8px 0 0;
  background: var(--lb-200);
  font-size: 16px; font-weight: 500;
  color: var(--bc-700);
  letter-spacing: -0.35px;
  cursor: pointer;
}
.tab-item--box:hover       { color: var(--bc-1000); }
.tab-item--box.selected    {
  height: 58px;
  padding: 19px 18px 15px;
  border-width: 2px;
  border-color: var(--bc-1000);
  background: white;
  font-weight: 700;
  color: var(--bc-1000);
}
```

---

### Tag ✅ (Figma 실측값)

**세 가지 타입**: Text Tag (Filter) / Delete Tag / Option Tag

---

#### 공통 사이즈

| Size | 크기 (Text/Option) | 크기 (Delete) | 폰트 | Letter-spacing | Border-radius (Text/Delete) | Border-radius (Option) |
|------|-------------------|--------------|------|----------------|----------------------------|------------------------|
| Small | 68×32px | 90×32px | 12px Regular | -0.26px | 16px | 4px |
| Medium | 77×36px | 98×36px | 14px Regular | -0.30px | 18px | 4px |
| Large | 90×40px | 108×40px | 16px Regular | -0.35px | 20px | 4px |

---

#### Text Tag / Filter Tag

선택/필터 용도의 pill형 태그.

**Padding:**
- Small: `py-7px px-12px`
- Medium: `py-7px px-13px`
- Large: `py-8px px-16px`

| State | Border | Background | 텍스트 색 |
|-------|--------|-----------|---------|
| Unselected Enabled | `--bc-100` (#E8EBF2) | — | `--bc-1000` (#17191C) |
| Unselected Hover | `--pc-800` (#0A74FF) | — | `--pc-800` |
| Unselected Disabled | `--bc-100` | — | `--bc-300` (#C6CCD7) |
| Selected Enabled | — | `--pc-800` | white |
| Selected Hover | — | `--pc-700` | white |
| Selected Disabled | — | `--bc-100` | `--bc-300` |

---

#### Delete Tag

삭제 가능한 태그. 텍스트 + X 버튼 구조.

**Padding:** `pl-12px pr-8px py-7px`, 텍스트 ↔ X 아이콘 gap: `8px`

**X 버튼:** 18×18px 원형 (border-radius 9px)

| State | 컨테이너 border | 텍스트 색 | X 버튼 bg |
|-------|--------------|---------|---------|
| Enabled | `--bc-100` | `--bc-1000` | `--bc-100` (#E8EBF2) |
| Tag Hover | `--pc-800` | `--pc-800` | `--bc-100` |
| Icon Hover | `--pc-800` | `--pc-800` | `--bc-300` (#C6CCD7) |
| Disabled | `--bc-100` | `--bc-300` | `--bc-100` (opacity 50%) |

---

#### Option Tag

사각형(4px radius) 선택 태그. Text Tag와 동일한 크기/패딩이나 border-radius만 다름.

| State | Border | Background | 텍스트 색 |
|-------|--------|-----------|---------|
| Unselected Enabled | `--bc-100` | — | `--bc-1000` |
| Unselected Hover | `--pc-800` | — | `--pc-800` |
| Unselected Disabled | `--bc-100` | — | `--bc-300` |
| Selected Enabled | — | `--pc-800` | white |
| Selected Hover | — | `--pc-700` | white |
| Selected Disabled | — | `--bc-100` | `--bc-300` |

---

#### CSS 예시

```css
/* Text Tag */
.tag {
  display: inline-flex;
  align-items: center;
  border-radius: 16px;
  border: 1px solid var(--bc-100);
  padding: 7px 12px;
  font-size: 12px;
  font-weight: 400;
  color: var(--bc-1000);
  line-height: 18px;
  letter-spacing: -0.26px;
  cursor: pointer;
}
.tag:hover          { border-color: var(--pc-800); color: var(--pc-800); }
.tag.selected       { background: var(--pc-800); border-color: transparent; color: white; }
.tag.selected:hover { background: var(--pc-700); }
.tag:disabled       { color: var(--bc-300); pointer-events: none; }

/* Option Tag — border-radius만 다름 */
.tag--option { border-radius: 4px; }

/* Delete Tag */
.tag--delete {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 8px 7px 12px;
  border-radius: 16px;
  border: 1px solid var(--bc-100);
}
.tag--delete:hover { border-color: var(--pc-800); color: var(--pc-800); }
.tag__close {
  width: 18px; height: 18px;
  border-radius: 9px;
  background: var(--bc-100);
  display: flex; align-items: center; justify-content: center;
}
.tag__close:hover { background: var(--bc-300); }
```

### Card List ✅ (Figma 실측값)

공통: border `--bc-100` 1px, radius 4px, padding 1px, bg white

**Medium Card (vertical, 284×357px)** — Enabled / Hover / Disabled(opacity 50%)
- Image: 282×160px, bg `--bc-400` placeholder
- Content: bg white, py-16px, gap-12px
- Text: px-16px, gap-8px
  - Title: 16px Bold `--bc-1000`, lh 24px, ls -0.35px, 1 line ellipsis
  - Description: 14px Regular `--bc-700`, lh 22px, ls -0.30px, 2 lines h-44px, w-250px ellipsis
- Badge row: px-16px, gap-16px; Heart icon 12px + count `--bc-500` 14px; Personnel icon 12px + count `--bc-500` 14px
- Divider: 1px full width
- Nickname: px-16px, gap-4px; avatar 24×24 radius 12px; 14px Medium `--bc-500`
- Hover: border `--pc-800`, shadow `0px 2px 5px 0px rgba(0,0,0,0.12)`, title → `--pc-800`
- Disabled: opacity 50%

**Large Card (vertical, 542×539px)**
- Container: radius 5px (나머지는 동일)
- Image: 540×304px, bg `--bc-400` placeholder
- Content: pt-24 pb-20 px-32, gap-16px
- Text: gap-4px
  - Title: 24px Bold `--bc-1000`, lh 36px, ls -0.43px, single line
  - Description: 16px Regular `--bc-700`, lh 24px, ls -0.35px, w-476px
- Date: 14px Regular `--bc-500`, lh 22px, ls -0.30px
- Divider: 1px full width
- Badge row: gap-15px; Heart 20px icon + label "좋아요" `--bc-500` Regular + count `--bc-800` Bold; Personnel 20px icon + label `--bc-600` Regular + count `--bc-800` Bold; label-count gap-2px
- Floating action buttons: Favorite + Share (32×32px Ghost XSmall), absolute top-181 right area

**Small Card (vertical, 210×250px)**
- Image: 208×117px
- Content: pb-20 pt-16 px-16, gap-5px
  - Title: 16px Bold `--bc-1000`, w-132px, 1 line ellipsis
  - Description: 14px Regular `--bc-700`, w-176px, h-66px (3 lines)
- Floating more button (⋮): 24×24px Ghost XXSmall icon-only, absolute top-131px right-14px

**Vertical Card (horizontal layout, 397×110px)**
- Image: 108×108px square (left)
- Content: px-16 py-13, gap-12px
  - Title: 16px Bold `--bc-1000`, single line
  - Description: 14px Regular `--bc-700`, 1 line h-22px, w-255px
  - Info row: gap-8px; date `--bc-500` + heart icon+count + personnel icon+count; 14px Regular `--bc-500`

### Table List ✅ (Figma 실측값)

공통: 각 row는 상단·하단 divider(`--bc-100` 1px)로 구분. 모든 title: 16px Bold `--bc-1000`, lh 24px, ls -0.35px

**List Line (w-300px) — 제목 행 패턴**
| 타입 | 높이 | 구조 |
|------|------|------|
| Single-line (Default) | 58px | Divider / Title 1줄 ellipsis / Divider |
| Two-line 01 | 82px | Divider / Title 2줄 wrap (2줄 초과 시 말줄임) / Divider |
| Three-line 01 | 110px | Divider / Title 1줄 + Sub 14px Regular `--bc-700` 2줄 h-44px / Divider |

gap: 15px (divider ↔ content ↔ divider)

**Contents (w-365~372px) — 콘텐츠 포함 행 패턴**
| 타입 | 크기 | 구조 | gap |
|------|------|------|-----|
| Content text 01 | 365×120px | [Title + Sub `--bc-700` + Tertiary `--bc-500`] flex-1 \| Meta 14px `--bc-700` 우측 | 20px |
| Content Icon&btn 01 | 365×66px | Title flex-1 \| XXSmall Outlined 버튼 (55×28px, border `--bc-200`, r-3px, 12px Medium `--bc-700`) | 18px |
| Content avata 01 | 365×74px | Avatar 40×40px circle \| Title 1줄 ellipsis w-300px | 16px |
| Content Image 01 | 372×90px | 이미지 56×56px square \| Title 1줄 + Sub 14px `--bc-700` w-300px | 16px |

---

## Semantic Color Aliases (추천 사용법)

```css
/* 이 토큰들을 코드에서 직접 사용하세요 */
--color-primary          → --pc-800   (#0A74FF)
--color-primary-hover    → --pc-700   (#3D91FF)
--color-primary-active   → --pc-900   (#0056C7)
--color-primary-disabled → --pc-300   (#B8D7FF)

--color-text-primary     → --bc-1000  (#17191C)
--color-text-secondary   → --bc-500   (#A1A7B5)
--color-text-tertiary    → --bc-300   (#C6CCD7)
--color-text-disabled    → --bc-300   (#C6CCD7)
--color-text-inverse     → white

--color-bg-base          → --lb-100   (#FCFCFD)
--color-bg-elevated      → --lb-200   (#F9FAFB)

--color-border-light     → --bc-100   (#E8EBF2)
--color-border-default   → --bc-200   (#D2D6E0)
--color-border-strong    → --bc-300   (#C6CCD7)
--color-border-input     → --bc-300   (#C6CCD7)

--color-error            → --r-200    (#EF5D5D)
--color-error-bg         → --r-100    (#FEE1E1)
--color-warning          → --y-200    (#FFBB00)
--color-warning-bg       → --y-100    (#FFF2D1)
--color-success          → --g-300    (#26A138)
--color-success-bg       → --g-100    (#E0FAE9)
--color-info             → --b-300    (#00ABF5)
--color-info-bg          → --b-100    (#E5F8FF)
```

---

## 파일 구조

```
design-system/
├── DESIGN_SYSTEM.md          ← 이 파일 (Claude 참조용 문서)
└── tokens/
    ├── colors.css            ← CSS 커스텀 프로퍼티 (컬러)
    └── typography.css        ← CSS 커스텀 프로퍼티 (타이포그래피)
```

---

## Claude에게 — 사용 가이드

이 디자인 시스템으로 UI를 구현할 때:

1. **컬러는 항상 토큰 참조** — 하드코딩된 hex 사용 금지, `--pc-800` 등 CSS 변수 사용
2. **Primary 액션** = `--pc-800` (#0A74FF), hover = `--pc-700`
3. **기본 텍스트** = `--bc-1000` (#17191C)
4. **배경 레이어 순서** = LB100(전체) → LB200(컨텐츠) → white(카드)
5. **상태 피드백** = R계열(에러), G계열(성공), Y계열(경고), B계열(정보)
6. **폰트** = Noto Sans KR (Korean), Noto Sans (Latin/Numbers)
7. **컴포넌트 더 자세한 스펙이 필요하면** → 피그마 해당 컴포넌트 페이지를 선택하고 요청
