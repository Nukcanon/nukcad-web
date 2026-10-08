var e=`---
id: start-delete
title: 삭제
분류: 시작하기
난이도: 기초
workspace: 공통
keywords: 지우, 지우기, 삭제, 없애, 버리, 빼 버리, delete, erase, remove, 삭제하기, 지워, 없애기, 딜리트, Delete 키, 면 지우기, 선 지우기, 점 지우기, 부분 삭제, 선택 요소 삭제, 치수 지우기, 잘못 지움, 되살리기
commands: delete, deleteSub
howto: delete
context: delete
order: 130
---

## 무엇

선택한 물체·스케치·선을 삭제합니다. 물체의 면·모서리·꼭짓점만 선택한 상태에서는 물체 전체가 아니라 그 부분만 삭제합니다.

## 하는 순서

1. 물체를 클릭해 선택합니다.
2. Delete 키를 누릅니다 ({c:delete}).
3. 잘못 삭제했으면 Ctrl+Z로 되돌립니다.

## 팁

- Shift+클릭이나 상자로 여러 개를 선택한 뒤 한 번에 삭제할 수 있습니다: [선택](help:start-select).
- 선택한 물체 옆에 뜨는 단추 줄, 여러 개를 선택했을 때 {t:panel.props} 창에 나오는 단추, {t:panel.objects} 창의 오른쪽 클릭 메뉴({t:obj.mDelete})로도 삭제합니다.
- {t:panel.objects} 창에서 그룹이나 3D 건설의 층·부재 종류 줄을 오른쪽 클릭해 {t:obj.mDelete}를 선택하면 그 안의 것이 모두 삭제됩니다. 삭제 전에 "{t:ot.k.wall} 24개, {t:ot.k.slab} 3개"처럼 삭제할 개수를 보여 주고 한 번 묻습니다. 빈 그룹도 이렇게 삭제합니다.
- 건물 줄을 삭제할 때는 {t:ot.deleteBuilding}와 {t:ot.deleteParts} 가운데에서 선택합니다. 건물이 하나뿐이면 건물은 남고 부재만 삭제할 수 있습니다.
- {t:panel.objects} 창에서 한꺼번에 삭제한 것은 Ctrl+Z 한 번으로 모두 되돌아옵니다.
- 명령줄에 \`erase\` 또는 \`e\`를 입력해도 됩니다.
- 스케치를 편집하는 중에 선을 선택하고 Delete를 누르면 그 선만 삭제됩니다. 그 선에 붙은 치수도 함께 삭제됩니다.
- 물체를 한 번 더 클릭해 면·모서리·꼭짓점을 선택한 뒤 Delete를 누르면 {c:deleteSub}가 됩니다. 그 부분만 삭제하고, 할 수 있으면 둘레를 이어 모양을 다시 만듭니다. 남는 것이 없으면 물체가 삭제됩니다: [부분 삭제와 나누기](help:obj-partial-delete).
- 3D 치수는 그 치수를 클릭하고 Delete를 누르거나, {t:panel.objects} 창의 {t:panel.annotations} 목록에서 삭제합니다.
- Blender 단축키 방식에서는 X 키로도 삭제합니다.

## 자주 하는 실수

- 면을 선택한 상태에서 Delete를 누르면 물체 전체가 아니라 그 면만 삭제됩니다. 물체 전체를 삭제하려면 Esc로 면 선택을 푼 뒤 삭제합니다.
- 그룹에 든 물체를 3D 화면에서 클릭하면 그룹 전체가 선택되어 함께 삭제됩니다. 하나만 삭제하려면 {t:panel.objects} 창에서 그 물체만 선택합니다.
- 다른 프로그램에서 가져온 메시 물체는 면·모서리를 따로 삭제할 수 없습니다. {t:panel.props} 창의 {t:btn.meshToSolid} 단추를 먼저 누릅니다.
- 잠시 안 보이게 하려는 것이면 삭제하지 말고 숨깁니다: [숨기기·보이기](help:start-hide).
- 삭제한 뒤 다른 작업을 했어도 Ctrl+Z를 여러 번 누르면 되돌릴 수 있습니다: [되돌리기](help:start-undo).
`,t=`---
id: start-export
title: 내보내기·3D 프린팅
분류: 시작하기
난이도: 기초
workspace: 공통
keywords: 3d 프린트, 3d 프린터, 프린트, 프린터, 출력하, 뽑, stl, 3mf, 내보내, 슬라이서, print, 3d print, export, slicer, 내보내기, 출력, 3D 출력, 큐라, cura, 뱀부, step, obj, dxf, svg, 레이저 커팅, 레이저, 도면 파일, 다른 CAD, 프린터 판, 축척, 배율, 크게 출력, 작게 출력, 1:50, 2:1, 프린터 크기, 3D 프린팅
commands: exportStl, export3mf, exportStep, exportObj, exportDxf3d, exportSvg, exportDxf, print3d
howto: stl
context: exportStl, export3mf, exportStep, exportObj, exportDxf3d, exportSvg, exportDxf, print3d
order: 60
---

## 무엇

만든 물체를 3D 프린터나 다른 프로그램이 읽는 파일로 내보냅니다. 3D 프린팅에는 STL이나 3MF를, 다른 CAD에는 STEP을, 레이저 커팅이나 2D 도면에는 SVG·DXF를 씁니다.

## 하는 순서

1. 왼쪽 위 NukCAD 단추를 누릅니다.
2. {t:menu.export3d} → {c:exportStl} 순서로 선택합니다 (단축키 Ctrl+P).
3. 저장할 곳을 정하면 완료됩니다. 슬라이서 프로그램에서 열어 출력합니다.

## 팁

- 저장할 곳을 묻기 전에 내보내기 창이 먼저 뜹니다. {t:ex.what} 칸에서 {t:ex.picked}이나 {t:ex.all} 가운데 하나를 선택하고, 창 아래의 내보내기 단추(Enter)를 누릅니다. 물체를 선택한 채 열면 {t:ex.picked} 상태로 시작합니다.
- {t:ex.quality} 설정은 곡면을 삼각형으로 나누는 정도입니다. {t:ex.q.medium}이 3D 프린팅에 알맞고, {t:ex.q.fine} 쪽은 곡면이 매끈하지만 파일이 커집니다.
- 형식별 쓰임:

| 형식 | 쓰임 |
|---|---|
| {c:exportStl} | 3D 프린터. 모든 물체를 한 메시로 저장하고 색은 담지 않음 |
| {c:export3mf} | 3D 프린터. 물체의 색을 함께 저장 |
| {c:exportStep} | 다른 CAD. 곡면을 나누지 않고 정확한 모양 그대로 |
| {c:exportObj} | 다른 3D 프로그램. 색을 담은 .mtl 파일을 하나 더 저장 |
| {c:exportDxf3d} | AutoCAD용 3D DXF |
| {t:menu.export2d} → {c:exportSvg}, {c:exportDxf} | 한 평면의 단면과 스케치를 2D 선으로 (레이저 커팅, 2D 도면) |

- 2D 내보내기 창에서는 {t:pe.plane}을 {t:pe.ground}, {t:pe.front}, {t:pe.side} 가운데에서 선택하거나, 스케치·평평한 면을 클릭해 {t:pe.picked}을 씁니다. 창의 {t:pe.preview}에서 파일에 들어갈 선을 확인합니다.
- 3D 프린팅 전 확인:
  - {t:panel.props} 창의 {t:panel.info}에서 {t:m.solidCheck} 줄이 {t:m.solidOk}인지 봅니다. 떨어진 덩어리가 여러 개이면 {c:union}로 합칩니다.
  - 떠 있는 물체는 {c:drop}로 바닥에 내려놓습니다.
  - 프린터 판 크기는 {c:settings} → {t:set.units} → {t:set.printer}에서 정합니다. 바닥 격자가 판 크기를 보여 줍니다.
- {m:print3d} 단추도 같은 STL 내보내기 창을 엽니다. {t:level.basic} 메뉴에서는 3D 물체의 {t:lv.group.output} 탭, 3D 건설의 {t:flow.group.finish} 탭에 있습니다.
- 투상도와 건물 도면은 {t:menu.export2d} 안에 있습니다: [투상도](help:obj-drawing), [도면](help:arch-drawing).

### 축척 (크기 바꿔 내보내기)

- 모든 내보내기 창에는 {t:sc.section} 칸이 있어, 문서는 그대로 두고 파일만 키우거나 줄여 저장합니다. {t:sc.label} 칸의 ▾에서 표준 축척을 선택하거나 직접 입력합니다.

| 입력 | 뜻 |
|---|---|
| \`1:50\` 또는 \`1/50\` | 50분의 1로 줄임 |
| \`2:1\` | 2배로 키움 |
| \`×2\`, \`x2\`, \`2배\` | 2배로 키움 |
| \`0.5배\`, \`50%\` | 절반으로 줄임 |
| \`2\` (숫자만) | 그 배수 (2배) |

- 입력한 뒤 Enter를 누르면 적용되고, ↑ ↓ 키로 다음 표준 축척으로 바꿉니다. 칸 아래에 "1:50 · 50분의 1로 줄임"처럼 뜻과 {t:sc.outSize}가 나옵니다.
- STL·OBJ·3MF 창에는 {t:sc.bed}(가로·세로·높이)도 있습니다. {t:sc.fit} 단추는 프린터에 들어가는 가장 큰 축척으로 바꾸고, 프린터보다 크거나 0.8 mm보다 얇은 부분이 있으면 빨간 글씨로 알려 줍니다.
- 3D 건설에서 STL·OBJ·3MF를 내보낼 때는 프린터에 들어가는 가장 큰 표준 축척이 먼저 선택됩니다. 모형 아래에 판을 붙이려면 {t:sc.base}를 정합니다.

## 자주 하는 실수

- 스케치(2D 선)는 3D 파일에 들어가지 않습니다. 먼저 [돌출](help:obj-extrude)로 입체를 만듭니다.
- 숨긴 물체는 내보내지 않습니다. 빠진 물체가 있으면 다시 보이게 한 뒤 내보냅니다: [숨기기·보이기](help:start-hide).
- 일부만 내보내졌으면 창에서 {t:ex.picked}이 선택되어 있었는지 확인하고 {t:ex.all} 쪽을 선택합니다.
- STL은 작업 파일이 아닙니다. 나중에 고칠 수 있도록 .nkx로도 저장합니다: [저장](help:start-save).
- 3D 건설에서 내보낸 STL은 실제 크기가 아니라 축척으로 줄인 크기입니다. 창의 {t:sc.outSize}를 확인합니다.
- 축척 칸에 \`50\`처럼 숫자만 쓰면 50배로 커집니다. 줄이려면 \`1:50\`처럼 씁니다. 투상도의 척도 칸에서는 숫자만 쓰면 1:숫자로 읽습니다.
- 축척을 입력하고 Enter를 누르지 않으면 칸 아래에 {t:sc.pending} 표시가 남아 있습니다. Enter를 누르거나 다른 칸을 클릭하면 적용됩니다.
`,n=`---
id: start-hide
title: 숨기기·보이기
분류: 시작하기
난이도: 기초
workspace: 공통
keywords: 숨기, 숨기기, 가리, 안 보이게, 감추, 다시 보이게, hide, show, invisible, 보이기, 보이게, 숨김, 숨김 해제, 숨기기 해제, 모두 표시, 선택만 표시, 나머지 숨기기, 눈, 눈 모양, 눈 단추, 사라짐, 사라졌, 물체가 사라짐, 안 보임, isolate, unhide, show all
commands: hide, unhideAll, unhidePick, isolate
howto: hide
context: hide, unhideAll, unhidePick, isolate
order: 120
---

## 무엇

작업에 방해되는 물체를 잠시 숨겼다가 다시 보이게 합니다. 숨긴 물체는 삭제되지 않고 화면에서만 안 보입니다.

## 하는 순서

1. {t:panel.objects} 창에서 물체 줄 오른쪽의 눈 모양을 누르면 숨겨지고, 다시 누르면 보입니다.
2. 숨긴 것을 모두 다시 보이게 하려면 명령줄에 \`unhide\`를 입력합니다 ({c:unhideAll}).

## 팁

- 3D 화면에서 물체를 선택한 뒤, 옆에 뜨는 단추 줄이나 오른쪽 클릭 메뉴의 {c:hide}를 눌러도 숨겨집니다.
- 선택한 것만 남기고 나머지를 모두 숨기려면 오른쪽 클릭 메뉴의 {c:isolate}를 씁니다.
- 보기 도구 줄의 눈 단추({t:vis.menu})에는 다음이 있습니다.
  - {c:unhidePick}: 숨긴 물체가 흐리게 보이며, 다시 보일 것을 눌러 선택하고 적용합니다.
  - {t:unhide.all}: 숨긴 것을 한 번에 모두 보이게 합니다.
  - {t:vis.solids}·{t:vis.sketches}: {t:vis.show} | {t:vis.hide}로 솔리드나 스케치를 통째로 숨깁니다.
- {t:panel.objects} 창에서 그룹 줄의 눈 단추는 그 안의 것을 모두 숨기거나 보이게 합니다. 3D 건설에서는 대지·건물·층·부재 종류({t:ot.k.wall}, {t:ot.k.roof} …) 줄의 눈 단추로 그 안의 부재를 한꺼번에 숨깁니다.
- {t:panel.objects} 창의 줄을 오른쪽 클릭하면 {t:obj.mHide}(숨긴 것이면 {t:obj.mShow}), {t:obj.mIsolate}, {t:obj.mZoom}도 있습니다.
- Blender 단축키 방식에서는 H로 숨기고, Shift+H로 선택한 것만 표시하고, Alt+H로 모두 보이게 합니다.

## 자주 하는 실수

- 물체가 사라졌다고 삭제된 것은 아닙니다. {t:panel.objects} 창에서 눈이 꺼진 물체를 찾거나 {c:unhideAll} 명령을 씁니다.
- 솔리드나 스케치를 통째로 숨기면 3D 화면에 {t:vis.hiddenSolids} 같은 표시가 뜹니다. 표시 옆의 단추로 다시 보이게 합니다.
- {c:isolate} 뒤에는 나머지가 숨겨진 상태로 남습니다. 끝나면 {c:unhideAll} 명령으로 되돌립니다.
- 숨긴 물체는 내보내기 파일에 들어가지 않고 {c:selectAll}에도 선택되지 않습니다.
- 물체가 화면 밖에 있어 안 보일 수도 있습니다: [화면 보기](help:start-view), [물체가 안 보일 때](help:faq-lost-view).
`,r=`---
id: start-level
title: 일반·고급 메뉴
분류: 시작하기
난이도: 기초
workspace: 공통
keywords: 일반, 고급, 일반 메뉴, 고급 메뉴, 메뉴 수준, 고급 모드, 고급 설정, 도구가 없음, 도구가 안 보임, 메뉴에 없음, 숨은 도구, 기계 요소, 토목, 더 많은 도구, basic, advanced, menu level, more tools, hidden tools
commands: settings
order: 30
---

## 무엇

메뉴 줄 오른쪽의 {t:level.basic} | {t:level.advanced} 전환은 메뉴의 구성을 정합니다. {t:level.basic}은 수업에서 자주 쓰는 도구를 작업 순서에 맞춘 별도의 탭으로 보여 주고, {t:level.advanced}은 모든 도구를 기능별 탭으로 보여 줍니다.

## 하는 순서

1. 메뉴 줄 오른쪽의 {t:level.basic} | {t:level.advanced} 단추에서 하나를 누릅니다.
2. {t:level.basic}에서는 도구 창의 드문 설정이 {t:ac.advanced} 아래에 접혀 있습니다. 필요하면 눌러서 펼칩니다.
3. {t:level.advanced}을 선택하면 모든 도구가 메뉴에 나오고, 도구 창의 설정도 모두 펼쳐집니다.
4. 같은 설정은 {c:settings} → {t:set.general} 탭의 {t:level.switch}에서도 바꿀 수 있습니다.

## 팁

- {t:level.basic}과 {t:level.advanced}은 탭의 이름과 순서가 다릅니다. 같은 도구도 수준에 따라 다른 탭에 있을 수 있습니다. 도움말에 나오는 메뉴 경로는 지금 선택한 수준의 탭으로 바뀌어 보입니다.

| 작업 | {t:level.basic} 탭 | {t:level.advanced} 탭 |
|---|---|---|
| 3D 물체 | {t:group.transform}, {t:group.primitives}, {t:group.sketch}, {t:group.modify}, {t:group.pattern}, {t:group.combine}, {t:group.dims}, {t:lv.group.output} | {t:group.transform}, {t:group.primitives}, {t:group.sketch}, {t:group.sketchEdit}, {t:group.modify}, {t:group.construct}, {t:group.parts}, {t:group.combine}, {t:group.dims} |
| 3D 건설 | {t:group.site}, {t:group.build}, {t:lib.group}, {t:flow.group.finish}, {t:archui.tab.model} | {t:group.site}, {t:group.civil}, {t:group.build}, {t:lib.group}, {t:flow.group.finish}, {t:archui.tab.model} |

- 3D 물체의 {t:level.basic} {t:group.sketch} 탭에는 그리기 도구 뒤에 {t:lv.head.edit}({c:editSketch}, {c:trim}, {c:offset} …)과 {t:lv.head.solid}({c:extrude}, {c:revolve}) 도구가 이어서 있습니다. {t:lv.group.output} 탭에는 {c:drawing}, {c:print3d}, {c:screenshot}이 있습니다.
- 3D 건설의 {t:level.basic}에서는 {c:road}가 {t:group.site} 탭에 있고, {c:planView}와 {c:archSection} 단추가 {t:flow.group.finish} 탭에 있습니다.
- {t:level.basic}에서 메뉴에 없는 도구도 명령줄에 이름을 입력하거나 단축키를 누르면 실행됩니다. 이때 그 도구가 {t:level.advanced} 메뉴에 있다고 알려 줍니다.
- 3D 물체의 {t:level.basic}에서는 {t:group.parts} 탭이 보이지 않습니다. {c:sweep}, {c:loft}, {c:pipe}, {c:ellipse}, {c:spline}, {c:extend}, {c:sectionView} 같은 도구도 {t:level.advanced}에만 있습니다.
- 3D 건설의 {t:level.basic}에서는 {t:group.civil} 탭이 보이지 않습니다. {c:contours}, {c:curtainWall}, {c:lighting}, {c:ceilingView} 같은 도구도 {t:level.advanced}에만 있습니다.
- 물체를 선택하면 뜨는 단추 줄과 오른쪽 클릭 메뉴도 {t:level.basic}에서는 {t:level.advanced} 메뉴에만 있는 도구를 빼고 보여 줍니다.
- 선택한 수준은 두 작업 종류에 함께 적용되고, 이 컴퓨터에 저장되어 다음에 켤 때도 그대로입니다.

## 자주 하는 실수

- 설명대로 메뉴를 찾았는데 도구가 없으면 {t:level.basic} 메뉴인지 확인합니다. {t:level.basic}에서는 같은 도구가 다른 탭에 있을 수 있습니다.
- 도구 창에 설명된 설정이 보이지 않으면 {t:ac.advanced}을 눌러 펼칩니다.
- {t:level.advanced}으로 바꾸어도 만든 물체는 바뀌지 않습니다. 메뉴와 도구 창의 모양만 바뀝니다.
`,i=`---
id: start-modes
title: 3D 물체와 3D 건설
분류: 시작하기
난이도: 기초
workspace: 공통
keywords: 작업 종류, 모드, 모드 바꾸기, 모드 전환, 3D 물체, 3D 건설, 물체 모델링, 건설 모델링, 건축, 건물, 3D 프린트, 처음 화면, 시작 화면, 홈, 새로 만들기, 새 파일, 새 작업, 전환, mode, modes, object, building, start screen, home, new
commands: home, new, sendToBuilding
context: home, new
order: 20
---

## 무엇

NukCAD에는 작업 종류가 두 가지 있습니다. {t:mode.print}은 손에 드는 크기의 물체를 mm 단위로 만들고, {t:mode.arch}은 지도 위의 땅에 건물과 토목 구조물을 m 단위로 만듭니다.

## 하는 순서

1. 처음 화면에서 {t:start.print} 또는 {t:start.arch} 카드를 누릅니다.
2. 작업 중에 다른 종류로 가려면 메뉴 줄 오른쪽의 {t:mode.short.print} | {t:mode.short.arch} 전환 단추를 누릅니다.
3. 전환해도 두 작업은 각각 열린 채로 남습니다. 다시 누르면 하던 작업으로 돌아옵니다. 작업 층과 작업 범위, {t:ab.allLevels}, 숨긴 층, 격자 간격, 카메라도 떠날 때 그대로 돌아옵니다.
4. 같은 종류에서 빈 문서로 새로 시작하려면 {c:new} ({k:new})를 누릅니다.
5. 처음 화면으로 돌아가려면 왼쪽 위 NukCAD 단추 → {c:home} 순서로 누릅니다.

## 팁

| | {t:mode.short.print} | {t:mode.short.arch} |
|---|---|---|
| 단위 | mm | m |
| 크기 | 2,000 mm 이하 | 2 m 이상 |
| 메뉴 | {t:group.transform}, {t:group.primitives}, {t:group.sketch}, {t:group.modify}, {t:group.parts} … | {t:group.site}, {t:group.civil}, {t:group.build}, {t:lib.group}, {t:flow.group.finish}, {t:archui.tab.model} |
| 바닥 격자 | 프린터 판 (기본 200 × 200 mm) | 대지, 대지가 없으면 100 × 100 m 판 |
| 주된 결과 | STL·3MF로 3D 프린팅, 투상도 | 평면도·입면도, 축척을 줄인 3D 프린팅 |

- 3D 물체에서 만든 물체를 3D 건설로 가져가려면 메뉴 줄의 {c:sendToBuilding} 단추를 씁니다: [건설 물체로 보내기](help:more-send-to-building).
- 3D 건설에서 문·창·가구를 두 번 클릭하면 묻고 나서 그 물체만 3D 물체에서 고칠 수 있습니다.
- 처음 화면에는 저장하지 않은 작업의 복구본이 나옵니다. {t:start.recoverOpen} 단추를 누르면 다시 엽니다: [저장](help:start-save).
- 처음 화면 아래의 {c:open} 단추로 파일을 바로 엽니다. 3D 건설 파일을 열면 3D 건설로 열립니다.
- 단위와 크기 입력은 [단위와 크기](help:start-units)를 봅니다.

## 자주 하는 실수

- {c:home}으로 처음 화면에 가면 두 작업이 모두 닫힙니다. 저장하지 않은 변경이 있으면 먼저 묻습니다. 필요한 작업은 먼저 저장합니다.
- 전환 단추는 물체를 이동하지 않습니다. 3D 물체의 물체를 건물에 놓으려면 {c:sendToBuilding} 단추를 씁니다.
- 저장은 지금 보고 있는 작업만 파일로 만듭니다. 두 작업을 모두 남기려면 각각 저장합니다.
- 3D 건설에서 수만 입력하면 m입니다. 30 cm는 \`0.3\` 또는 \`30cm\`로 입력합니다.
`,a=`---
id: start-open
title: 열기·가져오기
분류: 시작하기
난이도: 기초
workspace: 공통
keywords: 열기, 열어, 불러오, 불러오기, 파일 열, 가져오, stl 열, open, load, import, 파일 열기, 가져오기, 파일 가져오기, 불러오기 안 됨, nkx, stl, step, stp, obj, 3mf, dxf, svg, dwg, blend, 블렌더, 123dx, 123d, f3d, 퓨전, 다른 프로그램 파일, 단위, 메시
commands: open, importFile, new
howto: open
context: open, importFile
order: 50
---

## 무엇

저장한 NukCAD 파일을 다시 열거나, 다른 프로그램에서 만든 3D·2D 파일을 지금 작업에 가져옵니다.

## 하는 순서

1. Ctrl+O를 누르거나 왼쪽 위 NukCAD 단추 → {c:open} 순서로 누릅니다.
2. STL·STEP 같은 다른 프로그램 파일은 {t:menu.import} → {c:importFile}로 가져옵니다.

## 팁

- {c:open} 메뉴는 NukCAD 파일(.nkx)을 엽니다. STL·OBJ·STEP·DXF·SVG 같은 다른 파일을 선택하면 새 문서를 만들고 그 안에 가져옵니다.
- {c:importFile} 메뉴는 지금 작업을 그대로 두고 파일의 물체를 더합니다. 다른 NukCAD 파일을 합칠 때도 씁니다.
- 가져온 물체는 3D 화면에서 놓을 곳을 클릭해 놓습니다. 면 위에 놓으면 면에 붙고, 꼭짓점·중심 표시에 맞추면 그 점에 붙습니다. Esc는 취소입니다.
- 가져올 수 있는 형식:

| 형식 | 들어오는 것 |
|---|---|
| STEP (.step, .stp) | 정확한 솔리드 |
| STL, OBJ, 3MF | 삼각형 메시 물체 |
| Blender (.blend) | 메시 (미러·서브디비전 모디파이어만 적용) |
| 123D Design (.123dx) | 솔리드 |
| DXF | 2D 선·원·호·폴리선·블록·치수선, 3D 솔리드 |
| SVG | 2D 선 (스케치) |
| NukCAD (.nkx) | 지금 작업에 합쳐짐 |
| DWG, DWS | 설치판에서만: 무료 변환기 ODA File Converter가 있으면 DXF로 바꿔 가져옴 |

- STL·OBJ를 놓을 때 {t:imp.unit}(mm·cm·inch·m)를 선택할 수 있습니다. 크기가 이상하게 크거나 작으면 단위를 바꿉니다.
- 메시 물체는 보기·이동·내보내기만 됩니다. 모깎기나 구멍 같은 작업을 하려면 {t:panel.props} 창의 {t:btn.meshToSolid} 단추를 누릅니다 (삼각형 30,000개 이하).
- 저장 방법은 [저장](help:start-save)을 봅니다.

## 자주 하는 실수

- {c:open} 메뉴는 지금 작업을 닫고 새 파일을 엽니다. 저장하지 않은 변경이 있으면 먼저 묻습니다. 두 작업을 합치려면 {c:importFile} 메뉴를 씁니다.
- Fusion 360 파일(.f3d)은 열 수 없습니다. Fusion에서 STEP으로 내보내 가져옵니다.
- 웹판에서는 DWG를 가져올 수 없습니다. AutoCAD에서 DXF로 저장해 가져옵니다.
- 삼각형이 150만 개를 넘는 메시는 읽지 않습니다. 원래 프로그램에서 줄여 내보냅니다.
- 파일이 열리지 않으면 [파일이 안 열릴 때](help:faq-file-open)를 봅니다.
`,o=`---
id: start-save
title: 저장
분류: 시작하기
난이도: 기초
workspace: 공통
keywords: 저장, 저장하기, 세이브, 보관, 파일로, save, 다른 이름으로 저장, 새 이름, 사본, 저장 위치, 파일 저장, nkx, 자동 저장, 복구, 복구본, 날아감, 저장 안 됨, 저장안됨, 저장 단추, Ctrl+S, save as, autosave, recover
commands: save, saveAs
howto: save
context: save, saveAs
order: 40
---

## 무엇

지금 작업을 NukCAD 파일(.nkx)로 저장합니다. 이 파일을 다시 열면 물체와 작업 단계가 그대로 돌아와 계속 고칠 수 있습니다.

## 하는 순서

1. Ctrl+S를 누르거나 왼쪽 위 NukCAD 단추 → {c:save} 순서로 누릅니다.
2. 처음 저장할 때 위치와 이름을 정합니다.
3. 새 이름으로 따로 저장하려면 {c:saveAs} (Ctrl+Shift+S)를 씁니다.

## 팁

- 메뉴 줄의 NukCAD 단추 바로 오른쪽에 있는 저장 단추를 눌러도 됩니다.
- 한 번 저장한 뒤에는 {k:save}를 누를 때마다 같은 파일에 덮어씁니다. 저장되면 파일 이름과 함께 알림이 뜹니다.
- NukCAD 단추에 보이는 파일 이름 뒤에 • 표시가 있으면 저장하지 않은 변경이 있다는 뜻입니다.
- 이름을 정하지 않은 새 작업은 \`3D_Object_날짜_시각\` 같은 이름이 미리 들어갑니다.
- 파일에는 보던 화면도 함께 저장됩니다: 카메라 위치·방향·투영·확대, 3D 건설의 작업 층과 작업 범위, 조명 시각. 파일을 열면 그대로 돌아옵니다. {c:otrack}(F11), {t:grid.ortho}(F8), 격자 스냅은 저장하지 않습니다. 화면만 회전해서는 저장할 변경이 생기지 않습니다.
- 저장 위치를 선택하는 창이 없는 브라우저에서는 파일이 다운로드 폴더에 저장됩니다.
- USB나 클라우드 드라이브 폴더에 저장하면 다른 컴퓨터에서도 열 수 있습니다: [열기·가져오기](help:start-open).
- {t:set.autosave} 설정은 기본으로 5분마다 저장하지 않은 작업의 복구본을 이 컴퓨터에 남깁니다. 프로그램이 갑자기 꺼지면 처음 화면에서 {t:start.recoverOpen} 단추를 누릅니다. 간격은 {c:settings} → {t:set.options}에서 바꿉니다. {c:new}, {c:open}, {c:home}에서 작업을 버리기로 하면 그 복구본도 삭제됩니다.
- 3D 프린터용 STL은 저장이 아니라 내보내기입니다: [내보내기·3D 프린팅](help:start-export).

## 자주 하는 실수

- 복구본만 믿으면 안 됩니다. 복구본은 이 컴퓨터에만 있고 오래된 것부터 삭제될 수 있습니다. 작업은 {c:save} 명령으로 파일에 저장합니다.
- STL로만 내보내 두면 나중에 작업 단계를 고칠 수 없습니다. 고칠 작업은 .nkx로 저장합니다.
- 저장은 지금 보고 있는 작업 종류만 파일로 만듭니다. 3D 물체와 3D 건설은 각각 저장합니다: [3D 물체와 3D 건설](help:start-modes).
- 저장 창을 닫으면 아무것도 저장되지 않습니다. 파일 이름 뒤의 • 표시가 남아 있으면 다시 저장합니다.
`,s=`---
id: start-screen
title: 화면 구성
분류: 시작하기
난이도: 기초
workspace: 공통
keywords: 화면, 화면 구성, 처음, 둘러보기, 메뉴, 메뉴 줄, 메뉴바, 리본, 탭, NukCAD 단추, 파일 메뉴, 속성, 속성 창, 속성창, 물체 창, 브라우저, 도구 설정, 명령줄, 명령 창, 상태 표시줄, 상태줄, 뷰 큐브, 보기 상자, 보기 도구, 지구본, 언어 단추, 이동 간격, 회전 간격, Cadoo, 카두, 캐릭터, 도움말, 인터페이스, 어디 있, 단추 위치, screen, layout, interface, ui, ribbon, properties, browser
commands: toggleRight, toggleLeft, toggleCommand, cadooChat, help
context: toggleRight, toggleLeft
order: 10
---

## 무엇

NukCAD 화면은 위의 메뉴 줄, 가운데의 3D 화면, 양옆의 창, 아래의 명령줄과 상태 표시줄로 이루어집니다. 이 문서는 각 부분의 이름과 쓰임, 그리고 {t:panel.props} 창에 나오는 내용을 설명합니다.

## 하는 순서

1. 메뉴 줄 맨 왼쪽의 NukCAD 단추를 누르면 {c:new}, {c:open}, {c:save}, {t:menu.import}, {t:menu.export3d}, {c:settings}, {c:home} 같은 파일 메뉴가 열립니다. 단추에는 지금 파일 이름이 보이고, 저장하지 않은 변경이 있으면 이름 뒤에 • 표시가 붙습니다.
2. NukCAD 단추 오른쪽의 작은 단추는 {c:save}, 지구본 모양의 {c:lang} 단추(한국어·English), {c:undo}, {c:redo}입니다.
3. 가운데의 탭(예: {t:group.primitives}, {t:group.sketch})을 누르면 그 아래 줄에 도구 단추가 나옵니다. 탭의 구성은 {t:level.basic}과 {t:level.advanced}에서 다릅니다. 한 줄에 다 들어가지 않는 도구는 {t:menu.more} 단추 안에 있습니다.
4. 메뉴 줄 오른쪽에는 {t:win.menu} 메뉴, {t:level.basic} | {t:level.advanced} 전환, {t:mode.short.print} | {t:mode.short.arch} 전환, 도움말(?) 단추, {c:settings} 단추가 있습니다. 3D 물체에서는 그 사이에 {c:sendToBuilding} 단추가, 3D 건설에서는 {c:buildFlow} 단추가 더 있습니다.
5. 가운데의 3D 화면에서 물체를 만들고 선택합니다. 오른쪽 위의 뷰 큐브와 그 아래의 보기 도구 줄로 보는 방향과 표시 방식을 바꿉니다.
6. 왼쪽 {t:panel.objects} 창에는 만든 물체와 스케치가 목록으로 나오고, 오른쪽 {t:panel.props} 창에는 선택한 것의 이름·색·위치·크기가 나옵니다. 도구를 열면 {t:win.toolPanel} 창이 따로 뜹니다.
7. 3D 화면 아래의 {c:toggleCommand}에 명령이나 값을 입력합니다 (예: \`box 30 20 10\`).
8. 맨 아래 상태 표시줄에는 준비 상태, 물체 개수, 지금 할 수 있는 일의 안내, {t:grid.linear}·{t:grid.angular} 목록, 스냅 단추, 단축키 방식 단추가 있습니다.

## 팁

### 속성 창에 나오는 것

| 선택한 것 | 나오는 내용 |
|---|---|
| 없음 | {t:panel.props.empty} 안내 |
| 물체 하나 | 색과 {t:panel.name}, {t:panel.material}, {t:panel.position}, {t:panel.rotation}, 그 물체를 만든 단계의 값(예: 직육면체의 {t:param.x}·{t:param.y}·{t:param.z}), {t:panel.info}({t:m.size}·{t:m.volume}·{t:m.surface}·{t:m.solidCheck}) |
| 스케치 하나 | {t:panel.name}, {t:panel.position}, {t:panel.rotation}, 선 개수, {c:editSketch}·{c:extrude}·{c:revolve} 같은 단추, 선 굵기·색 |
| 여러 개 | 선택한 개수, {c:union}·{c:subtract}·{c:group}·{c:delete} 같은 단추, 함께 바꿀 수 있는 값과 색·재질 |

- {t:panel.props} 창의 숫자를 바꾸면 바로 물체에 적용됩니다. 숫자 칸에는 계산식도 쓸 수 있습니다: [계산식](help:input-calc).
- {t:panel.objects} 창에서 물체의 작업 단계를 펼쳐 한 단계를 누르면, {t:panel.props} 창에서 그 단계의 값을 고칠 수 있습니다.
- 3D 건설의 건축 부재를 선택하면 층과 높이에 관한 설정이 더 나옵니다. 다른 프로그램에서 가져온 메시 물체에는 {t:btn.meshToSolid} 단추가 나옵니다.
- 3D 화면에서 물체를 선택하면 클릭한 곳 옆에 작은 단추 줄이 떠서 자주 쓰는 도구를 바로 씁니다. 오른쪽 클릭하면 그 밖의 도구가 메뉴로 나옵니다.
- 도구를 쓰는 동안 3D 화면에 {t:btn.apply} 단추가 뜹니다. Enter나 오른쪽 클릭도 같습니다. Esc는 도구를 끝내며, 완성된 것은 남습니다.
- 3D 화면 아래쪽, 명령줄 바로 위에는 도우미 캐릭터 Cadoo가 있습니다. 클릭하면 인사와 팁이, 두 번 클릭하면 {c:cadooChat} 창이 열립니다: [Cadoo와 대화](help:more-cadoo).
- {k:help} 키나 메뉴 줄 오른쪽의 ? 단추를 누르면 도움말이 열립니다.
- 메뉴 줄 아래 가장자리를 끌면 메뉴 크기가 바뀌고, 두 번 누르면 자동 크기로 돌아갑니다.
- 탭 줄 끝의 핀 단추로 {t:menu.unpin}를 하면 탭을 누를 때만 도구가 펼쳐집니다.
- {t:level.basic} 메뉴는 수업 순서에 맞춘 탭입니다. 3D 물체에서는 스케치 탭에 그리기, {t:lv.head.edit}, {t:lv.head.solid} 도구가 차례로 있고, {t:group.pattern} 탭과 {t:lv.group.output} 탭({c:drawing}, {c:print3d}, {c:screenshot})이 따로 있습니다: [일반·고급 메뉴](help:start-level).

### 상태 표시줄

| 부분 | 하는 일 |
|---|---|
| {t:grid.linear} · {t:grid.angular} | 이동하거나 회전할 때 맞출 간격을 선택합니다: [격자·격자 스냅](help:snap-grid) |
| {c:snap} (F9) | 누를 때마다 {t:ux.snap.auto} → {t:ux.snap.on} → {t:ux.snap.off}으로 바뀝니다 |
| {t:grid.osnap} (F3) ▾ | 앞부분은 객체 스냅을 켜고 끄고, ▾는 스냅 메뉴를 엽니다: [객체 스냅](help:snap-osnap) |
| {c:otrack} (F11) | [스냅 추적](help:snap-track)을 켜고 끕니다 |
| {t:grid.ortho} (F8) | [수평·수직 고정](help:snap-ortho)을 켜고 끕니다 |
| 키보드 단추 | 지금 단축키 방식을 보여 주고, 누르면 {c:settings}이 열립니다 |

- 3D 건설에서는 상태 표시줄 왼쪽에 대지 › 건물 › 층 줄이 더 나와, 작업할 층을 바로 바꿉니다.

## 자주 하는 실수

- {t:panel.props} 창이 보이지 않으면 {k:toggleRight} 키를 누르거나 {t:win.menu} 메뉴에서 켭니다. 창 이동은 [창 다루기](help:start-windows)를 봅니다.
- 명령줄이 보이지 않으면 {k:toggleCommand} 키를 누릅니다.
- 메뉴에서 도구를 찾지 못하면 {t:level.basic} 메뉴라서 다른 탭에 있거나 숨어 있을 수 있습니다. 도움말의 메뉴 경로는 지금 선택한 수준의 탭으로 나옵니다. 메뉴 줄 오른쪽에서 {t:level.advanced}을 선택하면 모든 도구가 보입니다: [일반·고급 메뉴](help:start-level).
- 3D 건설의 메뉴는 3D 물체와 다릅니다 ({t:group.site}, {t:group.build} 같은 탭). 3D 물체의 도구는 {t:archui.tab.model} 탭 안에 있습니다.
- 언어 단추가 상태 표시줄에 없습니다. 언어는 메뉴 줄 왼쪽, {c:save} 단추 옆의 지구본 단추에서 바꿉니다.
`,c=`---
id: start-select
title: 선택
분류: 시작하기
난이도: 기초
workspace: 공통
keywords: 고르기, 선택, 선택하기, 클릭, 여러 개 선택, 여러개, 다중 선택, 쉬프트, Shift, Ctrl, 상자 선택, 드래그 선택, 끌어서 선택, 영역 선택, 걸침, 면 선택, 모서리 선택, 꼭짓점 선택, 점 선택, 선 선택, 전체 선택, 모두 선택, 선택 해제, 선택 취소, 안 골라짐, 선택 대상 고정, select, selection, pick, box select, window select, crossing, select all, deselect, face, edge
commands: selectAll, deselect, selectSimilar
context: selectAll, deselect
order: 100
---

## 무엇

도구를 쓰거나 삭제 전에 물체·스케치·면·모서리를 선택합니다. 선택한 것은 강조되어 보이고 {t:panel.props} 창에 그 정보가 나옵니다.

## 하는 순서

1. 도구를 쓰지 않는 상태에서 물체를 클릭하면 그 물체가 선택됩니다.
2. Shift나 Ctrl을 누른 채 클릭하면 더 선택하고, 이미 선택한 것을 누르면 빠집니다.
3. 빈 곳에서 끌어 상자를 그리면 한꺼번에 선택합니다. 오른쪽으로 끌면 실선 상자가 되어 상자 안에 다 들어간 것만, 왼쪽으로 끌면 점선 상자가 되어 상자에 걸친 것까지 선택합니다. Shift를 누른 채 끌면 선택한 것에 더하고, Ctrl을 누른 채 끌면 선택한 것에서 뺍니다.
4. 면·모서리·꼭짓점을 선택하려면 선택한 물체를 한 번 더 클릭합니다. 더블클릭은 면을 선택하지 않습니다.
5. 보이는 것을 모두 선택하려면 {k:selectAll} ({c:selectAll})를 누릅니다. 3D 건설에서는 작업 범위 안의 것만 상자 선택과 같은 규칙으로 선택합니다.
6. 선택을 풀려면 빈 곳을 클릭하거나 Esc를 누릅니다.

## 팁

- 상자 선택은 물체의 실제 모양으로 판단합니다. 상자에 걸쳤는지는 물체를 감싸는 상자가 아니라 물체의 면과 선이 상자에 닿았는지로 정하며, 다른 물체 뒤에 가려진 것도 선택됩니다.
- 아무것도 선택하지 않았을 때 상태 표시줄 가운데에 {t:hint.boxSelect} 안내가 나옵니다.
- {t:panel.objects} 창의 목록에서도 선택합니다. 클릭하면 그것 하나만, Ctrl+클릭하면 하나씩 더하거나 빼고, Shift+클릭하면 사이의 것을 모두 선택합니다. 그룹이나 3D 건설의 층·종류 줄을 클릭하면 그 안의 것을 모두 선택합니다. 이때와 Shift+클릭에서는 숨긴 것을 건너뜁니다.
- 그룹에 든 물체를 3D 화면에서 클릭하면 그룹 전체가 선택됩니다. 더블클릭하면 그룹 안으로 한 단계 들어가 안쪽 그룹이나 그 물체 하나만 선택됩니다. 목록에서 선택해도 됩니다.
- 상자를 그리거나 물체·이동 손잡이를 끄는 도중에 Esc를 누르면 끌기만 취소되고 처음 자리로 돌아갑니다. 선택한 것은 그대로입니다.
- 단면 보기가 켜져 있어도 Esc는 선택한 것을 먼저 풉니다. 다음 Esc가 단면 보기를 끕니다.
- 면을 선택한 채 Shift+클릭하면 같은 물체의 면을 더 선택합니다. 모서리와 꼭짓점도 같습니다.
- {t:panel.objects} 창 위의 {t:sel.byKind}에서 보이는 것 가운데 한 종류를 모두 선택합니다.
- 같은 색·같은 종류를 한꺼번에 선택하려면 [동시 선택](help:obj-select-similar)을 씁니다.
- Shift를 누른 채 오른쪽 클릭하면 커서 아래 것의 메뉴가 열립니다. 여기의 {t:pf.title}을 쓰면 클릭이 면·선·점·물체 가운데 한 가지만 선택합니다. 상태 표시줄에 나오는 표시를 누르면 {t:pf.all}로 돌아갑니다.
- 스케치를 편집하는 동안에는 클릭과 상자가 그 스케치의 선을 선택하고, {k:selectAll} 키는 그 스케치의 선을 모두 선택합니다.
- 명령줄에 \`deselect\`를 입력해도 선택이 풀립니다 ({c:deselect}). 면을 선택한 상태에서 Esc를 한 번 누르면 면 선택만 풀리고 물체는 선택된 채로 남습니다.
- 선택한 물체 옆에 뜨는 작은 단추 줄과 오른쪽 클릭 메뉴에는 선택한 것에 맞는 도구가 나옵니다.

## 자주 하는 실수

- 선택한 물체 위에서 끌면 상자가 그려지지 않고 물체가 바닥을 따라 이동됩니다. 상자는 빈 곳에서 시작해 끕니다. 잘못 이동했으면 Ctrl+Z로 되돌립니다.
- 처음 클릭에는 물체 전체가 선택됩니다. 면을 선택하려면 한 번 더 클릭합니다.
- 상자로 더 선택하려고 Ctrl을 누른 채 끌면 오히려 상자 안의 것이 빠집니다. 상자로 더할 때는 Shift를 누릅니다.
- 오른쪽으로 끌었는데 일부만 선택되었습니다. 오른쪽으로 끄는 상자는 다 들어간 것만 선택합니다. 걸친 것까지 선택하려면 왼쪽으로 끕니다.
- 도구를 쓰는 동안의 클릭은 그 도구가 받습니다. 선택만 하려면 Esc로 도구를 끝냅니다.
- {t:pf.title}이 켜져 있으면 물체 전체가 선택되지 않을 수 있습니다. 상태 표시줄을 확인합니다.
- 숨긴 물체는 {c:selectAll}에도 선택되지 않습니다: [숨기기·보이기](help:start-hide).
`,l=`---
id: start-settings
title: 환경 설정
분류: 시작하기
난이도: 기초
workspace: 공통
keywords: 환경 설정, 설정, 옵션, 톱니, 톱니바퀴, 언어, 한국어, 영어, English, 단축키, 단축키 방식, 키 설정, 키맵, 오토캐드, 블렌더, 퓨전, 글자 크기, 글씨 크기, 글씨가 작아, 화면 색, 어둡게, 다크 모드, 격자, 격자 크기, 프린터 판, 자동 저장, 지도 키, 브이월드, 캐릭터 끄기, 초기화, 기본값, 회전 중심, 지구본, settings, preferences, options, language, keymap, shortcuts, text size, theme, dark mode, grid, autosave
commands: settings, lang
context: settings, lang
order: 140
---

## 무엇

{c:settings}에서 언어, 단축키 방식, 글자 크기, 화면 색, 격자, 자동 저장 같은 설정을 바꿉니다. 설정은 이 컴퓨터(브라우저)에 저장되어 다음에 켤 때도 그대로입니다.

## 하는 순서

1. 메뉴 줄 오른쪽 끝의 톱니 단추를 누르거나, 왼쪽 위 NukCAD 단추 → {c:settings} 순서로 누릅니다.
2. 위쪽 탭 {t:set.general}, {t:set.options}, {t:set.units} 가운데 하나를 선택합니다. 3D 건설에서는 {t:set.map} 탭도 있습니다.
3. 값을 바꾸면 바로 적용됩니다.
4. {t:btn.ok} 단추나 Esc로 창을 닫습니다.

## 팁

| 탭 | 들어 있는 설정 |
|---|---|
| {t:set.general} | {t:set.language}, {t:set.uiScale}, {t:set.theme}, {t:set.keymap}, {t:level.switch}, {t:set.tooltipDelay}, {t:set.palette}, AI 연결 |
| {t:set.options} | {t:set.projection}, {t:set.drawQuality}, {t:set.wheelZoom}, {t:set.orbitSpeed}, {t:ux.set.pivot}, {t:set.cubeSize}, {t:gizmo3.size}, {t:set.buddy}, {t:buddy.still}, {t:set.buddySize}, {t:set.autosave}, {t:stable.storage}, {t:set.commandLine}, {t:set.edges} · 3D 건설: {t:ux.set.scopeFit}, {t:nuke.setting} |
| {t:set.units} | 3D 물체: {t:set.printer}, {t:set.gridW}, {t:set.gridH} · 3D 건설: {t:set.archGrid} · 공통: {t:set.gridCell}, {t:set.gridMajor}, {t:set.showGrid}, {t:set.planes}, {t:set.objectSnap}, {t:dyn.setting}, {t:dyn.coords} |
| {t:set.map} | {t:set.vworldKey}, {t:set.siteMax} |

- {t:set.keymap}: 기본인 {t:set.keymap.autocad} 방식에서는 글자를 치면 명령줄에 들어가고 Enter로 실행합니다. {t:set.keymap.fusion} 방식과 {t:set.keymap.blender} 방식에서는 한 글자 키로 도구를 바로 실행합니다. 선택한 방식의 주요 키가 그 아래에 나옵니다.
- 상태 표시줄 오른쪽의 키보드 단추(지금 단축키 방식 이름)를 누르면 이 창이 열립니다.
- 언어는 메뉴 줄 왼쪽, {c:save} 단추 옆의 지구본 단추에서 한국어와 English 가운데 하나를 선택해도 바뀝니다. 명령줄에 \`lang\`을 입력하면 두 언어가 번갈아 바뀌고, \`lang en\`, \`lang ko\`처럼 정할 수도 있습니다.
- {t:ux.set.pivot}은 화면을 회전할 때의 중심입니다. {t:ux.set.pivot.cursor}(처음 설정)는 끌기 시작한 곳의 점을, {t:ux.set.pivot.selection}은 선택한 것의 가운데를 중심으로 회전합니다: [화면 보기](help:start-view).
- {t:set.uiScale}는 90%부터 150%까지 선택합니다. 글자가 작으면 크게 합니다.
- {t:set.autosave} 간격은 끔, 1·2·5·10·15·30분 가운데에서 선택합니다 (기본 5분): [저장](help:start-save).
- {t:set.buddy}에서 {t:buddy.off}을 선택하면 Cadoo 캐릭터가 사라집니다. {t:buddy.still} 칸을 켜면 Cadoo가 걸어 다니지 않고 그 자리에 있습니다.
- {t:set.showGrid}는 {t:ag.show.auto}, {t:ag.show.always}, {t:ag.show.off} 가운데에서 선택하며, 작업 종류마다 따로 기억됩니다: [격자·격자 스냅](help:snap-grid).
- {t:set.map} 탭의 키는 3D 건설의 항공사진에 씁니다: [건설 지역](help:site-map). AI 연결은 [AI 연결](help:more-ai-setup)을 봅니다.
- 창 아래의 {t:set.reset} 단추는 모든 설정과 창 배치를 처음 상태로 되돌립니다. 누르면 먼저 묻고, 지도 키와 AI 연결 정보는 그대로 둡니다.

## 자주 하는 실수

- 단위를 mm에서 m로 바꾸는 설정은 없습니다. 작업 종류가 단위를 정합니다: [단위와 크기](help:start-units).
- 글자 키를 눌렀더니 도구가 바로 실행되면 단축키 방식이 {t:set.keymap.fusion}이나 {t:set.keymap.blender}입니다. 명령줄에 입력하려면 {t:set.keymap.autocad} 방식을 선택합니다.
- 3D 물체에서 {t:set.map} 탭이 보이지 않는 것은 정상입니다.
- 브라우저의 사이트 데이터를 삭제하면 설정이 처음 상태로 돌아갈 수 있습니다.
`,u=`---
id: start-undo
title: 되돌리기
분류: 시작하기
난이도: 기초
workspace: 공통
keywords: 되돌리기, 되돌, 취소, 실수, 잘못, 원래대로, 뒤로, 다시 실행, undo, mistake, go back, redo, 실행 취소, 앞으로, 다시 하기, 복구, 되살리기, 컨트롤 z, Ctrl+Z, Ctrl+Y
commands: undo, redo
howto: undo
context: undo, redo
order: 70
---

## 무엇

마지막 작업을 취소해 그 전 상태로 돌아가고, 취소한 작업을 다시 실행합니다.

## 하는 순서

1. Ctrl+Z를 누르거나 맨 위 왼쪽의 {c:undo} 단추를 누릅니다.
2. 다시 앞으로 가려면 Ctrl+Y ({c:redo})를 누릅니다.

## 팁

- 여러 번 누르면 한 단계씩 더 뒤로 갑니다. 최대 200단계까지 되돌릴 수 있습니다.
- {c:redo} 명령은 Ctrl+Shift+Z로도 됩니다. 명령줄에는 \`u\`(되돌리기), \`redo\`를 입력합니다.
- 도구를 쓰는 중에 Ctrl+Z를 누르면 문서 전체가 아니라 그 도구에서 마지막으로 찍은 점이나 마지막으로 끈 화살표 하나가 취소됩니다.
- 한 번의 조작은 되돌리기 한 단계입니다. 숫자 칸에서 ↑/↓ 키를 누르고 있거나 색상 선택에서 색을 끌며 바꾼 것은 한 번에 되돌아갑니다.
- 3D 물체와 3D 건설은 되돌리기 기록을 따로 가집니다. 작업 종류를 바꿨다 돌아와도 기록이 남아 있습니다.
- 지난 작업 단계를 고치거나 끄려면 {t:panel.objects} 창에서 물체의 작업 단계를 펼쳐 씁니다.

## 자주 하는 실수

- 되돌린 뒤 새 작업을 하면 그 뒤의 {c:redo} 기록은 사라집니다.
- Esc는 되돌리기가 아닙니다. Esc는 도구를 끝내고 완성된 것은 남깁니다.
- 화면을 회전하거나 물체를 선택하는 것은 되돌리기 단계가 아닙니다.
- 파일을 새로 열거나 {c:new}로 시작하면 되돌리기 기록이 처음부터 다시 쌓입니다.
- 기록이 메모리를 너무 많이 차지하면 가장 오래된 단계부터 삭제되고 알림이 뜹니다.
`,d=`---
id: start-units
title: 단위와 크기
분류: 시작하기
난이도: 기초
workspace: 공통
keywords: 단위, 크기, 치수, mm, 밀리, 밀리미터, cm, 센티, 센티미터, m, 미터, 인치, inch, in, 단위 바꾸기, 단위 변경, 단위 섞기, 소수점, 소수, 쉼표, 각도, 도, 크기 확인, 몇 mm, 몇 센티, 너무 크다, 너무 작다, unit, units, size, millimetre, centimetre, metre
commands: snap, measure, settings
order: 80
---

## 무엇

단위는 작업 종류가 정합니다. {t:mode.short.print}에서는 mm, {t:mode.short.arch}에서는 m를 씁니다. 숫자 칸에 다른 단위를 붙여 입력하면 그 칸의 단위로 바뀌어 들어갑니다.

## 하는 순서

1. 숫자 칸에 수만 입력하면 그 칸의 단위로 읽습니다 (3D 물체는 mm, 3D 건설은 m).
2. 다른 단위로 입력하려면 수 바로 뒤에 \`mm\`, \`cm\`, \`m\`, \`in\`을 붙입니다. 예: 3D 물체에서 \`2.5cm\` → 25 mm.
3. 단위를 섞어 계산할 수도 있습니다. 예: 3D 건설에서 \`3m+20cm\` → 3.2 m.
4. Enter를 누르거나 다른 칸으로 이동하면 값이 정해집니다. Esc를 누르면 원래 값으로 돌아갑니다.
5. 만든 크기는 {t:panel.props} 창의 {t:panel.info} → {t:m.size}에서, 두 점 사이 거리는 {c:measure} 도구로 확인합니다.

## 팁

| | {t:mode.short.print} | {t:mode.short.arch} |
|---|---|---|
| 단위 | mm | m |
| 도구의 길이 칸 범위 | 0.1~2,000 mm | 0.01~500 m |
| 격자 스냅 간격 | 0.1, 0.5, 1, 5, 10 mm (기본 1 mm) | 0.01~10 m (기본 0.1 m) |

- 인치는 \`in\` 대신 \`"\`를 붙여도 됩니다 (예: \`2"\` → 50.8 mm).
- 각도는 도(°) 단위입니다. \`45\`, \`45°\`, \`45deg\` 모두 45도입니다.
- 소수점은 \`3.5\`처럼 점으로 씁니다. \`3,5\`도 3.5로 읽고, \`1,000\`은 1000으로 읽습니다.
- 숫자 칸에는 \`10/3\`, \`(20+5)*2\` 같은 계산식도 됩니다: [계산식](help:input-calc).
- 격자 스냅 간격은 3D 화면 구석의 {t:grid.title} 상자에서 {t:grid.linear}을 바꿉니다: [격자·격자 스냅](help:snap-grid).
- {t:panel.props} 창의 {t:panel.position} 제목 옆 괄호에 지금 단위가 나옵니다. {t:m.volume} 단위는 mm³·m³, {t:m.surface} 단위는 mm²·m²입니다.
- 다른 프로그램의 STL·OBJ를 가져올 때는 놓는 동안 {t:imp.unit}를 선택합니다: [열기·가져오기](help:start-open).

## 자주 하는 실수

- 3D 건설에서 \`30\`은 30 m입니다. 30 cm는 \`0.3\` 또는 \`30cm\`로 입력합니다.
- 3D 물체의 길이 칸은 2,000 mm까지만 받습니다. 큰 구조물은 3D 건설에서 만듭니다: [3D 물체와 3D 건설](help:start-modes).
- \`km\`, \`ft\` 같은 단위는 읽지 않습니다. mm, cm, m, in만 씁니다.
- 단위를 mm에서 m로 바꾸는 설정은 없습니다. 작업 종류가 단위를 정합니다.
- 가져온 STL이 10배나 25.4배쯤 크거나 작으면 파일 단위가 다른 것입니다. 놓을 때 {t:imp.unit}를 바꿉니다.
`,f=`---
id: start-view
title: 화면 보기
분류: 시작하기
난이도: 기초
workspace: 공통
keywords: 화면 보기, 화면 회전, 화면 돌리기, 돌려 보기, 화면 이동, 옮겨 보기, 확대, 축소, 줌, 휠, 마우스, 오른쪽 드래그, 가운데 버튼, 뷰 큐브, 보기 상자, 큐브, 홈, 기본 보기, 전체 보기, 선택 보기, 면 보기, 정면, 평면, 위에서, 옆에서, 등각, 방향, 평행, 원근, 투영, 표시 방식, 반투명, 엑스레이, 와이어, 회전 중심, 커서 중심 회전, 평면 보기, 단면 보기, 천장 보기, Alt+P, Alt+S, Alt+C, view, orbit, rotate view, pan, zoom, fit, view cube, home view, perspective, orthographic
commands: fit, fitSel, faceView, viewIso, viewTop, viewFront, viewRight, projection, visual, orbit, pan, zoomMode
context: fit, fitSel, faceView, viewIso, viewTop, viewBottom, viewFront, viewBack, viewRight, viewLeft, projection, visual, orbit, pan, zoomMode
order: 90
---

## 무엇

3D 화면을 회전하고, 이동하고, 확대해 원하는 방향에서 물체를 봅니다. 마우스, 오른쪽 위의 뷰 큐브, 그 아래의 보기 도구 줄을 씁니다. 보는 방향이 바뀌어도 물체는 움직이지 않습니다.

## 하는 순서

1. 마우스 오른쪽 단추를 누른 채 끌면 화면이 돕니다. 끌기 시작한 곳의 커서 아래 점을 중심으로 돌고, 그 점에 작은 표시가 나타납니다.
2. 가운데 단추(휠)를 누른 채 끌면 잡은 점이 커서를 따라오도록 화면이 이동됩니다. Shift나 Ctrl을 누른 채 오른쪽 단추로 끌어도 됩니다.
3. 휠을 굴리면 커서가 있는 곳을 중심으로 확대·축소됩니다.
4. 모든 물체를 화면에 맞추려면 {k:fit} 키({c:fit})를 누르거나 가운데 단추를 두 번 누릅니다.
5. 뷰 큐브의 면·모서리·꼭짓점을 누르면 그 방향으로 돌아갑니다. 큐브 옆의 집 단추는 {t:nav.home}으로 돌아갑니다.
6. 선택한 것만 크게 보려면 보기 도구 줄의 {c:fitSel} 단추를, 선택한 면을 정면에서 보려면 {c:faceView} 단추를 누릅니다.

## 팁

- 보기 도구 줄에는 {t:view.ortho} | {t:view.persp} 전환, {c:pan}, {c:orbit}, {c:zoomMode}, {t:nav.zoomTitle}(%), {c:fit}, {c:fitSel}, {c:faceView}, {c:visual}, {t:vis.menu}, {c:grid}, {c:dimInfo}, {c:screenshot} 단추가 있습니다.
- 회전 중심: 커서 아래에 아무것도 없으면 선택한 것의 가운데, 그다음 보이는 모델의 가운데를 중심으로 돕니다. 선택한 것의 가운데를 늘 중심으로 쓰려면 {c:settings} → {t:set.options} → {t:ux.set.pivot}에서 {t:ux.set.pivot.selection}을 선택합니다.
- {c:faceView}는 면을 선택하지 않았으면 볼 면을 클릭하게 합니다. 평면과 곡면 모두 됩니다.
- {c:pan}·{c:orbit}·{c:zoomMode} 단추를 켜 두면 왼쪽 단추로 끌어서 그 동작을 합니다. Esc를 누르면 꺼집니다.
- {t:nav.zoomTitle} 숫자(%)를 누르면 막대와 숫자 칸으로 정확히 맞춥니다. 100%는 바닥판이 화면 높이에 꼭 맞는 크기입니다.
- 표준 방향은 명령줄에 입력합니다: \`top\`({c:viewTop}), \`bottom\`({c:viewBottom}), \`front\`({c:viewFront}), \`back\`({c:viewBack}), \`right\`({c:viewRight}), \`left\`({c:viewLeft}), \`iso\`({c:viewIso}). 방향을 바꾸면서 모두 화면에 맞춥니다.
- Blender·Fusion 360 단축키 방식에서는 숫자패드로 방향을 바꿉니다: 7 위, 1 정면, 3 오른쪽, Ctrl과 함께 누르면 반대쪽, 0 등각, 5 투영 전환, . 선택 보기.
- {t:view.ortho} 보기는 크기가 왜곡되지 않고, {t:view.persp} 보기는 눈으로 보는 모습과 같습니다. 처음 켤 때의 방식은 {c:settings} → {t:set.options} → {t:set.projection}에서 정합니다.
- {c:visual}: {t:vis.shadedEdges}, {t:vis.shaded}, {t:vis.wire}, {t:vis.xrayEdges}, {t:vis.xray} 가운데에서 선택합니다. 반투명으로 하면 속에 가려진 부분이 보입니다.
- 뷰 큐브를 끌면 화면이 돕니다. 큐브 옆의 손잡이를 끌면 큐브를 화면의 다른 구석으로 이동합니다. 3D 건설에서는 큐브 둘레에 동·서·남·북이 나옵니다 (북쪽이 +Y).
- 큐브 크기, 휠 한 칸의 확대 정도, 회전 속도는 {c:settings} → {t:set.options}의 {t:set.cubeSize}, {t:set.wheelZoom}, {t:set.orbitSpeed}에서 바꿉니다.
- 터치 화면에서는 두 손가락으로 회전하고 확대하며, 세 손가락으로 이동합니다. 길게 누르면 오른쪽 클릭과 같습니다.
- 3D 건설에서는 건물을 잘라 보는 보기가 더 있습니다: {c:planView}({k:planView})는 한 층을 잘라 위에서, {c:archSection}({k:archSection})은 건물을 세로로 잘라 옆에서, {c:ceilingView}({k:ceilingView})는 한 층의 천장을 아래에서 봅니다. 같은 키를 다시 누르거나 Esc를 누르면 끝납니다: [천장 보기·위 잘라 보기](help:arch-ceiling).
- 3D 건설에서 작업 범위를 다른 건물이나 층으로 바꾸면 그곳이 화면에 들어오도록 이동됩니다. 끄려면 {c:settings} → {t:set.options}의 {t:ux.set.scopeFit} 칸을 끕니다.

## 자주 하는 실수

- 물체가 안 보이면 {k:fit} 키를 누릅니다. 숨긴 물체는 전체 보기에도 나오지 않습니다: [숨기기·보이기](help:start-hide), [물체가 안 보일 때](help:faq-lost-view).
- {c:pan}이나 {c:orbit} 단추가 켜진 채로 클릭하면 물체가 선택되지 않습니다. Esc를 눌러 끕니다.
- 오른쪽 단추를 끌지 않고 떼면 화면이 돌지 않고 메뉴가 열립니다. 도구를 쓰는 중에는 적용(Enter)이 됩니다.
- {t:view.persp} 보기에서는 길이를 눈으로 비교하기 어렵습니다. 크기를 맞출 때는 {t:view.ortho} 보기를 씁니다.
`,p=`---
id: start-windows
title: 창 다루기
분류: 시작하기
난이도: 중급
workspace: 공통
keywords: 창, 창 메뉴, 창 옮기기, 창 이동, 창 붙이기, 도킹, 따로 띄우기, 띄우기, 플로팅, 탭, 탭으로 합치기, 접기, 펼치기, 닫기, 다시 열기, 창이 사라짐, 창이 없어짐, 창 배치, 배치 초기화, 원래대로, 모으기, 창 크기, 패널, 속성 창, 물체 창, window, windows, panel, dock, float, tab, collapse, reset layout, gather
commands: winGather, winReset, toggleLeft, toggleRight
context: winGather, winReset
order: 110
---

## 무엇

{t:panel.objects}, {t:panel.props}, {t:win.toolPanel} 같은 창은 화면 왼쪽·오른쪽·아래에 붙이거나 따로 띄우고, 탭으로 합치고, 접고 닫을 수 있습니다. 창 배치는 작업 종류마다 따로 기억됩니다.

## 하는 순서

1. 창의 제목 줄을 끌면 창이 따로 뜹니다. 제목 줄의 {t:win.float} 단추를 눌러도 됩니다.
2. 따로 뜬 창을 화면 왼쪽·오른쪽·아래 가장자리로 끌면 그쪽에 붙습니다. 끄는 동안 붙을 자리가 밝게 표시됩니다.
3. 창을 다른 창의 제목 줄 위에 놓으면 탭으로 합쳐집니다. 탭을 끌어내면 그 창만 빠집니다.
4. 제목 줄을 두 번 누르거나 {t:win.collapse} 단추를 누르면 창이 접히고, 다시 누르면 펼쳐집니다.
5. {t:win.close} 단추로 닫은 창은 메뉴 줄의 {t:win.menu} 메뉴에서 다시 켭니다.
6. 창이 흩어졌으면 {t:win.menu} 메뉴 → {c:winReset} 순서로 누릅니다.

## 팁

- {t:win.menu} 메뉴에는 지금 작업 종류의 창이 모두 있고, 켜진 창에는 체크 표시가 있습니다.
- {c:winGather}는 모든 창을 오른쪽에 탭으로 모아 붙입니다.
- 따로 뜬 창의 {t:win.dock} 단추를 누르면 원래 쪽에 다시 붙습니다.
- 붙은 창 사이의 경계를 끌면 길이가 바뀌고, 옆 영역의 안쪽 가장자리를 끌면 폭이 바뀝니다. 두 번 누르면 내용에 맞추거나 기본 크기로 돌아갑니다.
- 따로 뜬 창은 가장자리나 아래 모서리를 끌어 크기를 바꿉니다.
- 닫은 창은 붙어 있던 쪽에 작은 단추로 남아, 누르면 다시 열립니다.
- {k:toggleRight} 키는 {t:panel.props} 창을 열고 닫습니다. {t:panel.objects} 창은 명령줄에 \`browser\`를 입력해 열고 닫습니다.
- {t:win.toolPanel} 창은 도구를 열 때만 나타납니다. 이 창을 닫으면 Esc와 같이 도구가 끝납니다.
- 3D 건설에서는 왼쪽에 {c:buildFlow} 창과 {t:panel.objects} 창이 탭으로 있고, 오른쪽에 {c:levelPanel} 창과 {t:panel.props} 창이 있습니다.
- {t:panel.objects} 창은 나무 모양의 목록입니다. 3D 물체에서는 {t:panel.objects}·{t:panel.sketches} 묶음 아래에 그룹과 물체가, 3D 건설에서는 대지 › 건물 › 층 › 부재 종류({t:ot.k.wall}, {t:ot.k.slab} …) 순서로 나옵니다. 위쪽의 {t:obj.search} 칸에 이름 일부나 초성을 입력하면 맞는 것만 남습니다.
- {t:panel.objects} 창의 줄을 끌어 그룹 안이나 다른 줄의 위아래에 놓으면 목록의 그 자리로 이동됩니다. 3D 화면 속 위치는 바뀌지 않습니다. 오른쪽 클릭 메뉴에는 {t:ot.mNewGroup}, {t:ot.mGroup}, {t:obj.rename}, {t:obj.mDelete} 같은 항목이 있습니다: [그룹·분리](help:obj-group).
- 폭이 좁은 화면(900 px 이하)에서는 창이 옆에서 하나씩 열리는 서랍이 됩니다.

## 자주 하는 실수

- 창을 3D 화면 가운데에 놓으면 따로 뜬 창이 됩니다. 붙이려면 화면 가장자리까지 끕니다.
- {t:panel.props} 창이 안 보이면 닫혔거나 접힌 것입니다. {t:win.menu} 메뉴에서 켜거나 {k:toggleRight} 키를 누릅니다.
- {c:winReset} 명령은 지금 작업 종류의 배치만 처음 상태로 되돌립니다.
- {c:settings}의 {t:set.reset} 단추는 다른 설정과 함께 창 배치도 처음 상태로 되돌립니다: [환경 설정](help:start-settings).
`,m=`---
id: obj-align
title: 정렬
분류: 3D 물체 도구
난이도: 중급
workspace: 공통
keywords: 정렬, 맞추기, 줄 맞추기, 가운데 맞추기, 가운데 정렬, 끝 맞추기, 왼쪽 맞춤, 오른쪽 맞춤, 위 맞춤, 아래 맞춤, 높이 맞추기, 나란히, 일렬로, 기준 물체, 정열, align, alignment, line up, center align, centre, al, 3dalign
commands: align, faceSnap
context: align
order: 320
---

## 무엇

여러 물체의 끝이나 가운데를 X·Y·Z 축마다 맞추는 도구입니다. 물체 둘레에 나타나는 점을 클릭해 맞출 쪽을 선택하고, 이동될 자리를 미리 보며 정렬합니다.

## 하는 순서

1. Shift를 누른 채 맞출 물체를 두 개 이상 클릭해 선택합니다.
2. {m:align} 단추를 누릅니다.
3. 물체 둘레에 축 색깔(X 빨강, Y 초록, Z 파랑)의 점이 나타납니다. 점 위에 마우스를 올리면 물체가 이동될 자리가 미리 보입니다.
4. 맞출 쪽의 점을 클릭합니다. 다른 축의 점도 이어서 선택할 수 있습니다.
5. 적용 (Enter)을 누르면 완료됩니다.

## 팁

- 축마다 점이 세 개씩 있습니다. X는 {t:opt.alignLeft}·{t:opt.align.mid}·{t:opt.alignRight}, Y는 {t:opt.alignFront}·{t:opt.align.mid}·{t:opt.alignBack}, Z는 {t:opt.alignBottom}·{t:opt.align.mid}·{t:opt.alignTop}입니다. 도구 창의 표에도 같은 단추가 있어 점 대신 눌러도 됩니다.
- 기준 물체를 정하지 않으면 선택한 물체 전체를 감싸는 범위에 맞춥니다. 도구 창에 {t:align2.noRef} 안내가 나옵니다.
- 한 물체에 다른 물체들을 맞추려면 그 물체를 기준 물체로 정합니다. 도구 창의 {t:align2.ref} 칸을 누른 뒤 물체를 클릭하거나, Alt를 누른 채 물체를 클릭합니다. 점이 기준 물체에 놓이고 기준 물체는 움직이지 않습니다. 같은 물체를 다시 지정하면 기준이 풀립니다.
- 점 위에 마우스를 올리면 이동될 자리에 물체가 흐리게 그려지고, 각 물체의 가운데에서 이동될 자리까지 끝에 작은 화살촉이 달린 가는 선이 그려집니다. 점 옆에는 그 점의 이름(축과 맞출 쪽)과 물체가 움직이는 거리가 나옵니다.
- 이미 맞춰져 있어 움직일 물체가 없으면 {t:alignv.same} 안내가 나옵니다.
- 도구 창의 {t:align2.movers} 목록에서 물체를 정렬에서 뺄 수 있습니다.
- 이미 선택한 점을 다시 클릭하면 그 축의 선택이 풀립니다. Ctrl+Z는 마지막에 선택한 축을 취소합니다.
- 적용해도 도구가 열려 있어 다음 정렬을 이어서 할 수 있습니다.
- 도구를 연 뒤에 물체를 클릭해 더하거나 뺄 수도 있습니다.
- 물체를 여러 개 선택하면 속성 창에도 {c:align} 단추가 나옵니다. 명령줄에서는 \`al\`을 입력해도 됩니다.
- 한 물체의 면을 다른 물체의 면에 맞붙이려면 {c:faceSnap}를 씁니다 ([바닥에 놓기](help:obj-drop)).
- 정렬한 뒤 겹친 물체는 {c:union}로 합치거나 {c:subtract}로 뺄 수 있습니다 ([합치기](help:obj-union)).

## 자주 하는 실수

- 물체를 하나만 선택하면 점이 나오지 않습니다. 두 개 이상 선택하거나 기준 물체를 정합니다.
- 기준 물체 없이 가운데 맞추기를 하면 모든 물체가 움직일 수 있습니다. 한 물체를 그대로 두려면 그 물체를 기준 물체로 정합니다.
- 빈 곳을 클릭하면 도구가 끝납니다. 점이나 물체 위를 클릭합니다.
- 높이가 없는 스케치만 선택하면 Z 점이 나오지 않습니다.
`,h=`---
id: obj-annotate
title: 3D 치수 넣기
분류: 3D 물체 도구
난이도: 중급
workspace: 공통
keywords: 치수 넣기, 치수선, 치수 표시, 3d 치수, 지름 표시, annotate, dimension, label size, 3D치수, 지름 치수, 반지름 치수, 호 길이, 세로좌표, 꺾기 반지름, 지시선, 메모, 치수 편집, 치수 지우기, 길이 표시, 크기 표시, dim3d, dimension3d
commands: annotate, measure
howto: annotate
context: annotate
order: 380
---

## 무엇

3D 물체 위에 길이·지름·반지름 같은 치수를 남기는 도구입니다. 치수는 물체에 붙어 있어 물체를 이동하면 함께 움직입니다. 치수는 표시만 하고 물체의 크기를 바꾸지는 않습니다.

## 하는 순서

1. {m:annotate} 단추를 누릅니다.
2. 첫 점과 두 번째 점을 클릭합니다 (원형 모서리는 한 번 클릭하면 지름).
3. 치수가 놓일 곳을 클릭합니다.

## 팁

- 곧은 모서리를 처음에 클릭하면 그 모서리의 두 끝점 사이 길이가 됩니다.
- 원형 모서리는 처음에 {t:m.diameter}으로 잡힙니다. 도구 창에서 {t:m.radius}으로 바꿀 수 있습니다.
- 두 점 치수의 방향은 {t:dm.auto}(마우스를 끄는 방향을 보고 정함), {t:opt.aligned}, {t:opt.horizontal}, {t:opt.vertical} 가운데에서 선택합니다.
- 도구 창의 탭으로 다른 치수도 넣습니다.
  - {t:dm.tab.general}: 두 점 사이 길이, 원형 모서리의 지름·반지름
  - {t:tab.dimArc}: 둥근 모서리의 호 길이
  - {t:tab.dimOrdinate}: 원점에서 한 점까지의 X·Y·Z 값 하나
  - {t:tab.dimJogged}: 큰 원이나 호의 반지름을 꺾인 선으로
  - {t:tab.leader}: 화살표와 메모 글자({t:opt.text} 칸에 입력)
- 치수를 놓은 뒤에도 도구가 열려 있어 다음 치수를 이어서 넣을 수 있습니다. Enter를 누르면 지금 마우스 자리에 치수가 놓입니다.
- Ctrl+Z는 마지막에 선택한 점을 취소합니다.
- 놓은 치수를 두 번 클릭하면 {t:cmd.dimEdit}이 열립니다. {t:dimedit.angle}와 {t:dimedit.offset}을 핸들로 끌거나 숫자로 넣어 치수선의 방향과 거리를 바꿉니다. 끌면 15° 단위와 주 평면에 맞춰집니다.
- 치수를 삭제하려면 치수 글자를 클릭해 선택한 뒤 Delete 키를 누릅니다.
- 객체 스냅이 켜져 있으면 꼭짓점·중점·원 중심에 정확히 붙습니다 ([객체 스냅](help:snap-osnap)).
- 3D 치수에는 각도 치수가 없습니다. 각도는 [측정](help:obj-measure)으로 잽니다.
- 스케치 안에서 값을 입력해 크기를 바꾸는 치수는 [2D 치수](help:obj-dimension)입니다.
- 명령줄에서는 \`dim3d\`를 입력해도 됩니다.

## 자주 하는 실수

- 두 점을 선택하려 했는데 첫 클릭에서 모서리 전체가 잡혔습니다. 꼭짓점 표시가 보일 때 클릭해야 점으로 잡힙니다.
- {t:tab.dimArc}와 {t:tab.dimJogged}은 둥근 모서리만 받습니다. 곧은 모서리를 클릭하면 안내만 나옵니다.
- 3D 치수의 숫자를 고쳐 크기를 바꿀 수는 없습니다. 크기는 [스마트 스케일](help:obj-smart-scale)이나 속성 창에서 바꿉니다.
`,g=`---
id: obj-box
title: 직육면체
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: 상자, 박스, 직육면체, 정육면체, 육면체, 큐브, 네모, 사각형 블록, 블록, box, cube, cuboid, block, bx, 사각 상자, 네모 상자, 벽돌, 판, 판자, 기본 도형, 직육면채, 정육면채, 상자 만들기, 박스 만들기
commands: box, smartScale
howto: box
context: box
order: 10
---

## 무엇

가로·세로·높이를 정해 직육면체를 놓는 기본 도형입니다. 많은 모델이 상자 하나에서 시작해 [빼기](help:obj-subtract)·[모깎기](help:obj-fillet)·[구멍](help:obj-hole)으로 다듬어집니다.

## 하는 순서

1. {m:box} 단추를 누릅니다.
2. 3D 화면에서 놓을 곳을 클릭합니다 (면 위도 됩니다).
3. 속성 창에서 가로·세로·높이를 바꿀 수 있습니다.
4. 명령 창에 box 30 20 10처럼 가로 세로 높이를 입력해도 바로 만들어집니다.

## 팁

- 처음 크기는 3D 물체에서 20 × 20 × 20 mm, 3D 건설에서 3 × 3 × 3 m입니다.
- 속성 창의 {t:param.x}, {t:param.y}, {t:param.z} 칸에서 크기를 바꿉니다. 같은 창의 {t:panel.position}·{t:panel.rotation} 칸으로 자리와 방향도 숫자로 정합니다.
- 클릭하기 전에 명령 창에 \`30 20 10\`처럼 숫자만 입력하면 미리 보기 크기가 바뀌고, 그다음 클릭한 곳에 그 크기로 놓입니다.
- 숫자를 일부만 입력하면 나머지는 처음 크기를 씁니다. 예: \`box 30\`은 3D 물체에서 30 × 20 × 20 mm 상자입니다.
- 숫자에 단위를 붙이거나(\`3cm\`) 계산식을 써도 됩니다 (\`60/4\`). [계산식](help:input-calc)을 봅니다.
- 평평한 면 위를 클릭하면 상자가 그 면에 세워집니다. 꼭짓점·모서리 중점 같은 스냅 점을 클릭하면 그 점에 놓입니다 ([객체 스냅](help:snap-osnap)).
- 명령 창에서 \`box 30 20 10\`으로 바로 만든 상자는 이미 있는 물체들의 오른쪽 바닥에 놓입니다.
- 놓은 뒤에는 [스마트 스케일](help:obj-smart-scale)의 손잡이를 끌어 크기를 바꿀 수도 있습니다.
- 상자를 하나 더 놓으려면 Enter를 누릅니다. 마지막 도구가 다시 열립니다.

## 자주 하는 실수

- 숫자의 순서는 가로(X) 세로(Y) 높이(Z)입니다. 순서를 바꿔 쓰면 다른 방향으로 긴 상자가 됩니다.
- 3D 물체에서는 0.1 ~ 2000 mm, 3D 건설에서는 0.01 ~ 500 m를 벗어난 값은 받지 않고 허용 범위를 알려 줍니다.
- 3D 건설에서는 숫자가 m 단위입니다. \`box 30 20 10\`은 30 m 크기의 큰 상자가 됩니다.
- 클릭 한 번에 상자 하나가 놓이고 도구가 끝납니다. 새로 놓인 상자는 선택된 상태이므로 이어서 클릭해도 상자가 더 생기지 않습니다.
`,_=`---
id: obj-chamfer
title: 모따기
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: 모따기, 비스듬, 비스듬히, 깎기, 각지게, 챔퍼, 경사 모서리, chamfer, bevel, 모서리 깎기, 비스듬한 모서리, 사선 모서리, 모서리 자르기, 모따끼, 챔퍼링, 베벨
commands: chamfer, fillet, chamfer2d
howto: chamfer
context: chamfer
order: 190
---

## 무엇

솔리드의 모서리를 같은 거리만큼 비스듬히 잘라 내는 도구입니다. 날카로운 모서리를 없애거나, 조립할 부품이 잘 들어가도록 입구를 넓힐 때 씁니다.

## 하는 순서

1. {m:chamfer} 단추를 누릅니다.
2. 깎을 모서리를 클릭합니다 (여러 개 가능).
3. 크기 화살표를 끌어 놓거나 크기를 입력하고 Enter를 누릅니다.

## 팁

- 창의 {t:opt.distance} 칸이 모서리에서 잘려 나가는 거리입니다. 처음 값은 1 mm(3D 건설에서는 0.1 m)입니다.
- 선택한 모서리를 한 번 더 클릭하면 빠지고, Ctrl+Z를 누르면 마지막에 선택한 모서리가 빠집니다.
- 물체 하나를 선택한 채 {c:chamfer}를 열면 창에 그 물체의 모서리를 한꺼번에 모두 선택하는 단추가 나옵니다.
- 물체를 선택한 뒤 한 번 더 클릭해 모서리를 먼저 선택해 두고(Shift: 여러 개) {c:chamfer}를 누르면 그 모서리로 바로 시작합니다.
- 화살표를 끌어 놓으면 바로 적용되고 도구가 닫힙니다. 놓은 뒤 잠시 보이는 값 칸에 숫자를 넣으면 방금 만든 크기를 바꿀 수 있습니다.
- 둥글게 깎으려면 [모깎기](help:obj-fillet)를, 스케치 안의 두 선 모서리는 {c:chamfer2d}를 씁니다.

## 자주 하는 실수

- 거리가 너무 크면 {t:err.chamfer-failed}라는 오류가 나고 적용되지 않습니다. 화살표는 물체의 가장 얇은 두께의 절반에서 멈춥니다.
- 다른 물체의 모서리를 클릭하면 앞에서 선택한 모서리가 풀리고 그 물체로 새로 시작합니다. 한 번에 한 물체만 선택합니다.
- 잘못 깎았으면 Ctrl+Z로 되돌리거나, {c:toggleLeft} 창의 단계 목록에서 모따기 단계를 삭제합니다.
`,v=`---
id: obj-curve-edit
title: 곡선 편집
분류: 3D 물체 도구
난이도: 중급
workspace: 공통
keywords: 곡선 편집, 곡선, 커브, 베지어, 핸들, 조절점, 기준점, 점 추가, 점 지우기, 부드럽게, 꺾인 점, 핸들 따로, 직접 선택, 일러스트레이터, 펜, 펜 도구, 휘기, 구부리기, 곡선 벽, 곡선 도로, 둥근 벽, 휘어진 길, curve, bezier, handle, anchor, pen, path edit, pathedit, pedit, edit curve, direct selection, smooth, corner, 곡선편집, 곡선 수정
commands: pathEdit, spline, polyline
context: pathEdit
order: 16
---

## 무엇

일러스트레이터의 직접 선택 도구처럼 선의 점과 핸들을 끌어 곡선 모양을 고칩니다. 스케치의 직선과 펜으로 그린 곡선, 그리고 3D 건설의 벽·난간·바닥판·계단 경로·도로·다리·댐·옹벽·물길에 씁니다.

## 하는 순서

1. {m:pathEdit} 단추를 누릅니다.
2. 고칠 선이나 물체를 클릭합니다. 점(네모)과 핸들이 나타납니다.
3. 점을 끌어 이동하고, 핸들 끝을 끌어 휘는 정도를 바꿉니다.
4. 선 위를 클릭하면 점이 하나 생기고, 선을 끌면 그 구간이 휩니다.
5. 점을 클릭해 선택한 뒤 창의 {t:curves.smooth}, {t:curves.corner}, {t:curves.split} 단추로 점의 종류를 바꿉니다.
6. 다 고쳤으면 Esc를 누릅니다.

## 팁

- 여는 다른 방법: 스케치 편집 중에 선을 두 번 클릭하거나, 3D 건설에서 벽·난간·도로 같은 물체를 두 번 클릭합니다. 벽·도로 같은 물체를 선택하면 나오는 작은 막대와 스케치의 오른쪽 클릭 메뉴에도 {c:pathEdit} 단추가 있습니다.
- 점은 네모, 핸들 끝은 동그라미로 보입니다. 선택한 점은 속이 찬 네모가 됩니다.
- 곡선은 그릴 때부터 만들 수 있습니다. {c:spline}의 {t:curves.splinePen}에서는 점을 누른 채 끌고, {c:polyline}의 직선 상태에서는 누른 채 0.5초 기다렸다가 끌면 부드러운 곡선 점이 됩니다. 3D 건설의 벽·난간·도로는 {c:polyline}과 같은 방법으로 곡선을 그립니다.
- Alt+점 끌기는 꺾인 점에서 핸들을 뽑고, Alt+점 클릭은 핸들을 모두 없애 꺾인 점으로 만듭니다.
- Alt+핸들 끌기는 두 핸들을 따로 움직이고, Shift+핸들 끌기는 두 핸들을 한 직선으로 맞춥니다. 핸들 끝을 점 위에 끌어 놓으면 그 핸들만 없어집니다.
- Shift+클릭으로 점을 여러 개 선택하고, 선택한 점을 끌면 함께 이동됩니다. 점을 끌 때 Shift를 누르면 45° 방향으로만 움직입니다. {t:curves.selectAll} 단추는 이 선의 점을 모두 선택합니다.
- 점 하나를 선택하면 창에 {t:curves.inLen}, {t:curves.inAng}, {t:curves.outLen}, {t:curves.outAng} 칸이 나와 숫자로 정할 수 있습니다.
- 선택한 점은 Delete나 {t:curves.remove} 단추로 삭제합니다. {t:curves.dropIn}·{t:curves.dropOut} 단추는 한쪽 핸들만 없앱니다.
- Ctrl+Z는 끌기나 단추 한 번씩 되돌립니다. 다른 벽이나 도로를 클릭하면 그 물체로 바뀝니다.
- 3D 건설의 {c:levelOutline} 창과 {c:landEdit}에서도 곡선 편집으로 이어집니다. 벽은 [벽](help:arch-wall), 도로는 [도로](help:civil-road)를 봅니다.

## 자주 하는 실수

- 호·원·타원과 {t:curves.splineThrough} 방식 스플라인은 곡선 편집으로 고칠 수 없습니다. 직선과 펜으로 그린 곡선만 됩니다.
- 세 개 이상의 선이 한 점에서 만나면 곡선이 그 점에서 끊겨, 각 부분을 따로 고칩니다.
- 점이 너무 적어지는 삭제는 되지 않고 그 점은 남습니다.
- 곡선 도로가 폭의 절반보다 급하게 꺾이면 그 모양은 받지 않습니다. 핸들을 줄여 완만하게 고칩니다.
- 기울여 돌려 놓은 벽·도로 같은 물체는 곡선 편집으로 열리지 않습니다.
`,y=`---
id: obj-dimension
title: 2D 치수
분류: 3D 물체 도구
난이도: 중급
workspace: 공통
keywords: 치수, 2D 치수, 스케치 치수, 치수 넣기, 치수로 크기 바꾸기, 길이 치수, 지름 치수, 반지름 치수, 각도 치수, 호 길이 치수, 원점 좌표 치수, 세로좌표 치수, 꺾은 반지름 치수, 설명선, 지시선, 메모, 참고 치수, 치수 정보, 가로 세로 높이, 크기 보기, 치수선, 치슈, dimension, dim, arc length, ordinate, jogged radius, leader, reference dimension, dimension info
commands: dimension, dimArc, dimOrdinate, dimJogged, leader, dimInfo, annotate
context: dimension, dimArc, dimOrdinate, dimJogged, leader, dimInfo
order: 260
---

## 무엇

스케치의 선·원·호에 길이·지름·반지름·각도 치수를 넣는 도구입니다. 치수에 원하는 값을 입력하면 스케치의 크기가 그 값에 맞게 바뀝니다. {c:dimInfo}는 선택한 물체 전체의 가로·세로·높이를 화면에 보여 줍니다.

## 하는 순서

1. {m:dimension} 단추를 누릅니다.
2. 치수를 넣을 스케치의 선·원·호를 클릭합니다. 스케치를 편집하고 있지 않으면 그 스케치의 편집이 시작됩니다.
3. 치수선이 놓일 곳을 클릭합니다.
4. 바로 원하는 값을 입력하고 Enter를 누르면 스케치의 크기가 그 값에 맞게 바뀝니다. 값을 입력하지 않고 Enter를 누르면 크기는 그대로입니다.
5. 다음 치수를 이어서 넣거나 Esc를 눌러 도구를 끝냅니다.

## 팁

- 클릭한 것에 따라 치수가 정해집니다. 선 하나는 길이, 원은 지름, 호는 반지름, 선 두 개는 두 선 사이의 각도입니다. 끝점·중점·중심을 두 개 차례로 클릭하면 두 점 사이 거리가 됩니다.
- 길이는 창에서 {t:opt.aligned}, {t:opt.horizontal}, {t:opt.vertical} 가운데 잴 방향을 선택합니다.
- 이미 넣은 치수의 값을 바꾸려면 치수 글자를 더블클릭하고 새 값을 입력합니다.
- 크기를 알려 주기만 하고 스케치를 바꾸지 않을 치수는, 치수를 놓은 바로 뒤 창의 {t:ks.ref} 칸을 켭니다. 길이 치수 앞에는 {t:ks.symSq}이나 {t:ks.symT} 기호를 붙일 수 있습니다.
- 창 위쪽 탭으로 다른 치수를 넣습니다.
  - {t:tab.dimArc} ({c:dimArc}): 호를 클릭해 호의 길이를 적습니다.
  - {t:tab.dimOrdinate} ({c:dimOrdinate}): 선의 끝점이나 중심 가까이를 클릭한 뒤, 커서를 옆으로 이동하면 Y 값, 위아래로 이동하면 X 값을 적습니다.
  - {t:tab.dimJogged} ({c:dimJogged}): 큰 원이나 호의 반지름을 꺾인 선으로 적습니다.
  - {t:tab.leader} ({c:leader}): 화살표 끝을 클릭한 뒤 글자가 놓일 곳을 클릭합니다. 글자는 창의 {t:opt.text} 칸에 씁니다.
- {m:dimInfo}를 켜면 선택한 물체의 가로·세로·높이가 화면에 보입니다. 화면에 뜨는 {c:dimInfo} 표시의 {t:tg.off} 단추로 끕니다.
- {c:dimArc}, {c:dimOrdinate}, {c:dimJogged}, {c:leader}, {c:dimInfo}는 {t:level.advanced} 메뉴에 있습니다. [일반·고급 메뉴](help:start-level)를 봅니다.
- 3D 물체에 직접 치수를 붙이려면 [3D 치수](help:obj-annotate)를, 길이를 재기만 하려면 [측정](help:obj-measure)을 씁니다.

## 자주 하는 실수

- 3D 물체의 모서리는 이 도구로 잴 수 없습니다. {t:msg.clickSketchLine}라는 알림이 뜨면 스케치의 선을 클릭하거나 [3D 치수](help:obj-annotate)를 씁니다.
- 참고 치수는 크기를 보여 주기만 하므로 값을 바꿀 수 없습니다.
- 탭에 맞지 않는 선을 클릭하면 {t:msg.dimWrongKind}라는 알림이 뜹니다. 예를 들어 {c:dimArc}에는 호를 클릭합니다.
- 각도 치수는 0°보다 크고 180°보다 작은 값만 쓸 수 있습니다.
`,b=`---
id: obj-drawing-sheet
title: 도면 용지·표제란·내보내기
분류: 3D 물체 도구
난이도: 중급
workspace: 3D 물체
keywords: 용지, 도면 용지, A4, A3, A2, A1, A0, 가로, 세로, 척도, 축척, 표제란, 도명, 성명, 작성일, 도번, 페이지, 여러 장, 철하기 여백, 비교 눈금, 구역 표시, 중심 마크, 윤곽선, 제3각법, 제1각법, KS, KS 규칙, 제도 규칙, 인쇄, PDF, DXF, SVG, PNG, 오토캐드, 도면 저장, 도면 출력, 표제난, title block, sheet, paper, scale
commands: drawing
order: 420
---

## 무엇

투상도를 그리는 용지의 크기·방향·척도, 오른쪽 아래의 표제란, 여러 페이지, 그리고 인쇄·PDF·DXF 내보내기를 다룹니다. 용지 양식과 선 굵기는 KS 제도 규칙(KS B 0001 등)을 따릅니다.

## 하는 순서

1. {m:drawing} 단추를 눌러 투상도 화면을 엽니다.
2. 오른쪽 창의 {t:dv.sheet}에서 용지 크기(A4~A0)와 {t:dv.landscape}·{t:dv.portrait}를 선택합니다.
3. {t:dv.scale} 칸에서 척도를 선택하거나 \`1:2\`처럼 입력합니다. 용지에 들어가는 가장 큰 척도로 맞추려면 {t:dsh.fitScale}을 누릅니다.
4. {t:dp.titleSetup}을 눌러 {t:ks.title}·{t:ks.author} 같은 표제란 값을 입력합니다.
5. {t:dv.print}를 누르고 인쇄 창에서 프린터나 PDF로 저장을 선택합니다. AutoCAD에서 열 파일은 {t:dv.dxf}로 저장합니다.

## 팁

### 용지와 척도

- 용지를 바꾸면 모든 페이지의 투상도가 새 용지에 들어가는 척도로 다시 놓이고, 바뀐 척도가 안내됩니다.
- {t:dv.sheet} 아래의 {t:dv.scale}는 주 투상도(정면도)의 척도입니다. 바꾸면 다른 투상도도 같은 비율로 맞춰 다시 놓입니다.
- {t:dv.scale} 칸의 ▾에서 표준 척도(50:1부터 1:1000까지)를 선택하거나, 칸에 직접 입력하고 Enter를 누릅니다. \`1:50\`, \`1/50\`, \`2:1\`, \`×2\`처럼 쓰고, 숫자만 쓰면 1:숫자로 읽습니다(\`50\` → 1:50). ↑ ↓ 키는 다음 표준 척도로 바꿉니다.
- 칸 아래에 "1:2 · 2분의 1로 줄임"처럼 척도의 뜻과 {t:sc.paperSize}가 나옵니다. 치수는 척도와 관계없이 실제 크기로 적힙니다.
- 투상도 하나만 다른 척도로 그리려면 그 투상도를 클릭하고 창 아래쪽의 {t:dv.scale}를 바꿉니다. 이름 옆에 (1:2)처럼 그 척도가 따로 적힙니다.
- 투상도의 척도를 NA로 선택하거나 칸에 \`NA\`를 입력하면 척도 없이 크기를 자유롭게 정합니다. 모서리 손잡이를 끌거나 {t:dsh.viewWidth}를 입력합니다.
- 제3각법과 제1각법을 바꾸면 표제란의 투상법 기호가 바뀝니다. 투상도 배치까지 바꾸려면 {t:dv.relayout}를 누릅니다.
- {t:ks.filing}을 켜면 도면을 묶을 수 있게 왼쪽 여백이 25 mm로 넓어집니다.

### 그릴 물체와 양식

- {t:dp.targets}에서 {t:dp.targetAll} 대신 {t:dp.targetPicked}를 선택하면 목록에서 그릴 물체를 체크합니다. {t:dp.useSelection}을 누르면 3D 화면에서 선택한 물체만 그립니다.
- {t:dsh.show}에서 {t:ks.titleBlock}, {t:dsh.scaleBar}, {t:dsh.zones}, {t:dsh.centre}, {t:dsh.axes}을 하나씩 켜고 끕니다.

### 표제란

- 표제란은 처음에 용지 오른쪽 아래에 4행 4열(120 × 32 mm)로 놓입니다.
- 용지의 표제란 칸을 클릭하면 그 칸에 바로 입력합니다. Tab을 누르면 다음 칸으로 갑니다. \`{도명}\`처럼 중괄호로 쓴 이름은 표제란 값으로 바뀝니다.
- {t:dp.titleSetup} 창
  - {t:dsh.values}: {t:ks.title}, {t:ks.school}, {t:ks.number}, {t:ks.author}, {t:ks.date}, {t:ks.docNo}
  - {t:dp.size}: {t:dsh.rows}(1~12), {t:dsh.cols}(1~8), {t:dsh.width}
  - {t:dp.cells}: 칸마다 {t:dp.cellLabel}을 쓰고 {t:dp.cellValue}으로 넣을 값을 선택합니다.
  - {t:dp.reset}을 누르면 처음 표제란으로 돌아갑니다.
- {t:ks.date}을 비우면 오늘 날짜가, {t:ks.title}을 비우면 파일 이름이 들어갑니다. 페이지가 여러 장이면 비워 둔 {t:ks.docNo}에 \`1/3\`처럼 페이지 번호가 들어갑니다.

### 페이지

- 용지 아래쪽의 페이지 탭에서 + 단추({t:dp.addPage})로 페이지를 더합니다 (최대 20장).
- 탭을 두 번 클릭하면 이름을 변경하고, 지금 페이지 탭의 ×로 페이지를 삭제합니다.
- 페이지가 여러 장이면 투상도를 클릭한 뒤 {t:dp.page} 칸에서 다른 페이지로 이동할 수 있습니다.

### 내보내기

- {t:dv.print}: 모든 페이지를 차례로 인쇄합니다. PDF는 인쇄 창에서 PDF로 저장을 선택합니다.
- {t:dv.dxf}, SVG, PNG: 지금 보이는 페이지를 저장합니다. DXF는 VISIBLE·HIDDEN·CENTER·DIM·TEXT·BORDER 같은 레이어로 나뉩니다.
- {t:dp.dxfAll}: 페이지가 여러 장일 때 모든 페이지를 한 파일에 나란히 놓습니다.
- {t:dv.viewDxf}: 선택한 투상도 하나만 1:1 축척 DXF로 저장합니다.

### KS 규칙 (자동 적용)

| 항목 | A4~A2 | A1·A0 |
| --- | --- | --- |
| 굵은 실선 (외형선) | 0.5 mm | 0.7 mm |
| 가는 선 (치수선·숨은선·중심선) | 0.25 mm | 0.35 mm |
| 글자 높이 | 3.5 mm | 5 mm |
| 윤곽선 여백 | 10 mm | 20 mm |

- 척도는 1:2처럼 띄어 쓰지 않고, 치수에는 단위(mm)를 쓰지 않습니다.
- 첫 치수선은 외형선에서 10 mm 떨어지고, 같은 크기는 한 번만 씁니다.

## 자주 하는 실수

- {t:dsh.tooBig} 안내가 나옵니다. 가장 작은 척도로도 용지에 다 들어가지 않는다는 뜻입니다. 더 큰 용지를 선택하거나 그릴 물체를 줄입니다.
- PDF 단추를 찾습니다. PDF는 {t:dv.print}를 누른 뒤 인쇄 창에서 PDF로 저장을 선택합니다.
- {t:dv.dxf}로 저장했는데 한 페이지만 들어 있습니다. 모든 페이지는 {t:dp.dxfAll}로 저장합니다.
- 페이지를 삭제하면 그 페이지의 투상도도 함께 삭제됩니다. 잘못 삭제했으면 Ctrl+Z로 되돌립니다.
`,x=`---
id: obj-drawing
title: 투상도 만들기
분류: 3D 물체 도구
난이도: 중급
workspace: 3D 물체
keywords: 투상도, 도면, 정면도, 평면도, 측면도, 삼면도, 제도, 인쇄, pdf, 종이, drawing, blueprint, views, orthographic, print, 우측면도, 좌측면도, 배면도, 저면도, 등각 투상도, 등각도, 사투상도, 보조 투상도, 단면도, 숨은선, 제3각법, 제1각법, 정투상도, 3면도, 설계도, 도면 그리기, layout, proj
commands: drawing
howto: drawing
context: drawing
order: 410
---

## 무엇

3D 물체를 정면도·평면도·측면도 같은 투상도로 바꿔 용지에 그리는 기능입니다. 숨은선과 치수가 KS 제도 규칙에 따라 들어가며, 인쇄하거나 PDF·DXF로 저장할 수 있습니다.

## 하는 순서

1. {m:drawing} 단추를 누릅니다.
2. 처음 열면 표준 배치 투상도가 놓인 용지가 만들어집니다.
3. {t:dv.addView}로 다른 보기를 더 넣을 수 있습니다.
4. {t:dv.print}로 인쇄하거나 PDF로 저장합니다.

## 팁

### 처음 만들어지는 용지

- A3 가로 용지에 제3각법으로 정면도, 그 위에 평면도, 오른쪽에 우측면도, 남는 자리에 등각 투상도가 놓입니다. 척도는 용지에 들어가는 가장 큰 표준 척도로 정해집니다.
- 솔리드 가운데 몇 개만 선택한 채로 열면 {t:dp.startTitle} 창이 먼저 나와, 선택한 물체만 그릴지 전체를 그릴지 선택합니다. 그릴 물체는 나중에도 바꿀 수 있습니다 ([도면 용지·표제란](help:obj-drawing-sheet)).

### 투상도 넣기와 고치기

- {t:dv.addView}에는 {t:dv.front}, {t:dv.top}, {t:dv.right}, {t:dv.left}, {t:dv.back}, {t:dv.bottom}, {t:dv.iso}, {t:dv.oblique}, {t:dv.custom}, {t:dv.section} 단추가 있습니다. 새 투상도는 용지의 빈 자리에 놓입니다.
- 용지의 투상도를 클릭하면 오른쪽 창에서 그 투상도의 {t:dv.scale}, {t:dv.hidden}, {t:dv.dims}를 바꾸거나 {t:cmd.delete}할 수 있습니다. 투상도를 끌면 자리가 이동됩니다.
- {t:dv.scale} 칸은 ▾에서 표준 척도를 선택하거나 \`1:50\`, \`2:1\`, \`×2\`처럼 입력하고 Enter를 누릅니다. 숫자만 쓰면 1:숫자로 읽습니다: [도면 용지·표제란](help:obj-drawing-sheet).
- {t:dv.hidden}를 켜면 가려진 모서리가 점선(숨은선)으로 그려집니다.
- {t:dv.dims}를 켜면 전체 가로·세로·높이가 투상도마다 겹치지 않게 한 번씩 들어가고, 구멍과 축에는 ∅, 둥근 모서리에는 R 치수가 들어갑니다. 구멍의 위치 치수와 모따기 치수는 자동으로 넣지 않습니다.
- {t:dv.iso}와 {t:dv.oblique}는 처음에 숨은선이 꺼져 있고 치수가 들어가지 않습니다.
- 구멍·축 같은 둥근 부분에는 중심선이 자동으로 그려집니다.

### 단면도와 보조 투상도

- {t:dv.section} 단추를 누르면 {t:dp.setupSection}이 나옵니다. {t:dp.cutAt}는 {t:dp.byPlane}(XY·XZ·YZ 평면과 {t:dv.offset}, 비우면 물체 가운데), {t:dp.byFace}(3D 화면에서 평평한 면 클릭), {t:dp.byLine}(다른 투상도 위에 두 점 클릭) 가운데에서 선택한 뒤 {t:btn.cancel} 옆의 단추를 누릅니다. {t:dp.byPlane}이면 그 단추가 {t:dp.add}입니다.
- 단면도에는 A-A처럼 기호가 붙고, 절단면이 선으로 보이는 투상도에 절단선이 그려집니다. 기호는 단면도를 클릭한 뒤 {t:dp.letter} 칸에서 바꿉니다. 잘린 면에는 빗금이 그려집니다.
- {t:dv.custom}는 비스듬한 면을 정면에서 본 모습을 그립니다. {t:dp.auxFrom}은 {t:dp.byIncline}(3D에서 면 클릭), {t:dp.byEdge}(투상도에서 경사진 모서리 클릭), {t:dp.byPlane} 가운데에서 선택합니다.
- 단면도와 보조 투상도는 {t:dv.flip}로 보는 방향을 뒤집고, {t:dp.includes}로 그릴 물체를 따로 선택할 수 있습니다.

### 그 밖에

- 3D 모델을 고치면 투상도도 고친 모양으로 다시 그려집니다. 도면은 파일과 함께 저장됩니다.
- 용지는 마우스 휠로 확대·축소하고, 빈 곳을 끌어 이동합니다. {t:dv.fit}을 누르면 용지 전체가 보입니다.
- 투상도 화면에서도 Ctrl+Z와 Ctrl+Y가 됩니다.
- {t:dv.back3d}를 누르면 3D 화면으로 돌아갑니다.
- 용지 크기, 척도, 표제란, 페이지, DXF·PDF 내보내기는 [도면 용지·표제란](help:obj-drawing-sheet)에서 설명합니다.

## 자주 하는 실수

- {t:dv.noSolids}가 나옵니다. 숨긴 물체와 스케치는 그리지 않습니다. 보이는 솔리드가 있어야 합니다.
- STL 같은 메시 물체는 투상도에서 빠집니다. 속성 창의 {t:btn.meshToSolid}으로 바꾸면 들어갑니다.
- 정면도에 넣은 치수가 평면도에는 나오지 않습니다. 같은 크기를 두 번 쓰지 않는 KS 규칙에 따른 것입니다.
- {t:dp.byLine}는 정면도·평면도·측면도처럼 정투상한 투상도 위에만 그릴 수 있습니다. 등각 투상도 위에는 그릴 수 없습니다.
`,S=`---
id: obj-drop
title: 바닥에 놓기
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: 바닥에 놓기, 바닥, 내려, 내려놓, 떠 있, 공중, 바닥에 붙, 눕히, drop, floor, lay flat, on the ground, 면으로 놓기, 원점으로, 원점, 가운데로, 원점으로 높이 유지, 면 맞붙이기, 붙이기, 맞붙이기, 떠있어요, 공중에 떠, 바닥 맞추기, 눕혀 놓기, dropface, toorigin, center, facesnap, snapface
commands: drop, dropFace, toOrigin, center, faceSnap
howto: drop
context: drop, dropFace, toOrigin, center, faceSnap
order: 330
---

## 무엇

떠 있거나 바닥 아래로 들어간 물체를 바닥(Z=0)에 내려놓는 도구입니다. 같은 {t:group.transform} 메뉴에서 원점으로 이동, 다른 면으로 눕히기, 두 물체의 면 맞붙이기도 할 수 있습니다.

## 하는 순서

1. 떠 있는 물체를 클릭해 선택합니다.
2. {m:drop} 단추를 누르면 바닥(Z=0)에 내려앉습니다.
3. 다른 면이 바닥에 닿게 눕히려면 {m:dropFace} 단추를 누르고 그 면을 클릭합니다.

## 팁

- {c:drop}는 물체의 가장 낮은 점을 Z=0에 맞춥니다. 옆으로는 움직이지 않습니다. 여러 물체를 선택하면 각각 바닥에 내려앉습니다.
- 면을 하나 선택한 상태에서 {c:drop}를 누르면 그 면이 아래로 가도록 돌려 놓습니다.
- {m:toOrigin}는 선택한 물체를 원점으로 이동합니다 (단축키 {k:toOrigin}). 원점에 맞출 곳은 {t:opt.originBottom}(처음 값, 바닥에 놓인 채 이동됨), {t:opt.originCenter}, {t:opt.originPoint} 가운데에서 선택하고, 기준점을 정해 두었으면 {t:opt.pivot}도 선택할 수 있습니다. 적용 (Enter)을 누르면 이동됩니다.
- {m:center}는 높이는 그대로 두고 가로·세로만 원점 위로 이동합니다. 여러 물체를 선택하면 전체의 가운데가 원점 위로 갑니다.
- {m:faceSnap}는 한 물체의 면을 다른 물체의 면에 맞붙입니다. {t:step.movingFace}을 클릭하고 {t:step.targetFace}을 클릭하면, 첫 면이 둘째 면과 마주 보도록 돌아가 두 면의 중심이 맞춰집니다. 면을 클릭할 때 객체 스냅으로 꼭짓점이나 모서리 중점을 클릭하면 그 점끼리 맞춰집니다.
- 그룹으로 묶인 물체는 {c:faceSnap}에서 통째로 움직입니다.
- 3D 건설에서 물체를 땅 위에 놓으려면 {c:dropGround}를 씁니다 ([지형 보기](help:site-terrain-view)).
- 3D 프린팅할 물체는 바닥에 닿아 있어야 출력이 안정됩니다. 넓은 면이 아래로 가도록 {c:dropFace}로 눕히면 받침이 덜 필요합니다 ([내보내기·3D 프린팅](help:start-export)).

## 자주 하는 실수

- 원기둥 옆면이나 구처럼 굽은 면은 {c:dropFace}와 {c:faceSnap}에 쓸 수 없습니다. 평평한 면만 선택할 수 있습니다.
- 물체를 선택하지 않고 {c:drop}를 누르면 안내만 나오고 아무것도 움직이지 않습니다. 물체를 먼저 클릭합니다.
- {c:drop}는 바닥(Z=0)에만 맞춥니다. 다른 물체 위에 올리려면 {c:faceSnap}나 [정렬](help:obj-align)을 씁니다.
- {c:faceSnap}에서 두 번째로 같은 물체의 면을 클릭하면 아무 일도 일어나지 않습니다. 붙일 다른 물체의 면을 클릭합니다.
`,C=`---
id: obj-duplicate
title: 복제·복사·연동 복제
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: 복제, 복사, 똑같은, 하나 더, 사본, 붙여넣기, copy, duplicate, clone, paste, 연동 복제, 연동 해제, 링크 복사, 같이 바뀌는 복사, 인스턴스, 복사 붙여넣기, 컨트롤 D, 똑같은거, 붙여 넣기, ctrl+d, ctrl+c, ctrl+v, linkcopy, unlink, instance
commands: duplicate, linkcopy, unlink, copy, paste
howto: duplicate
context: duplicate, linkcopy, unlink, copy, paste
order: 350
---

## 무엇

선택한 물체와 똑같은 사본을 만드는 기능입니다. {c:duplicate}는 따로 고칠 수 있는 독립 사본을, {c:linkcopy}는 원본과 모양이 함께 바뀌는 사본을 만듭니다.

## 하는 순서

1. 물체를 클릭해 선택합니다.
2. Ctrl+D ({c:duplicate})를 누르면 옆에 똑같은 것이 생깁니다.
3. Ctrl+C, Ctrl+V로 복사해 붙여 넣어도 됩니다.

## 팁

- 사본은 원본에서 X와 Y 방향으로 기본 크기만큼(3D 물체 20 mm, 3D 건설 3 m) 떨어진 곳에 생기고, 이름 뒤에 {t:copySuffix}이 붙습니다. 독립 사본은 새 색을 받습니다.
- Ctrl+V를 여러 번 누르면 붙일 때마다 같은 거리만큼 더 옆에 놓입니다.
- 물체를 선택하면 나오는 작은 단추 줄에도 {c:duplicate}와 {c:linkcopy}가 있습니다.

### 연동 복제

- {c:linkcopy}로 만든 사본은 원본과 모양을 함께 씁니다 (단축키 {k:linkcopy}). 어느 쪽에 모깎기·구멍을 더하거나 크기 값을 바꾸어도 연결된 사본이 모두 함께 바뀝니다.
- 위치·회전·색은 사본마다 따로 정할 수 있습니다.
- 연동 복제를 선택하면 속성 창 위쪽에 모양을 함께 쓰는 원본의 이름과 {c:unlink} 단추가 나옵니다.
- {c:unlink}를 누르면 연결이 풀려 독립 물체가 됩니다. 그 뒤로는 따로 고쳐집니다.
- 연동 복제를 Ctrl+C, Ctrl+V로 붙여 넣으면 연결되지 않은 독립 물체가 됩니다.

### 여러 개 한꺼번에

- 같은 간격으로 여러 개가 필요하면 [패턴](help:obj-pattern)을, 거울처럼 반대쪽에 필요하면 [대칭 복사](help:obj-mirror)를 씁니다. 패턴에는 사본을 연동 복제로 만드는 설정({t:opt.linkedCopies})도 있습니다.
- 명령줄에서는 \`copy\` 또는 \`co\`가 {c:duplicate}입니다.

## 자주 하는 실수

- 물체를 선택하지 않고 Ctrl+D를 누르면 안내만 나옵니다. 물체를 먼저 클릭합니다.
- 연동 복제 하나에 구멍을 뚫었더니 다른 사본에도 모두 뚫렸습니다. 그 사본만 고치려면 먼저 {c:unlink}를 누릅니다.
- Ctrl+C만 누르면 아무것도 생기지 않습니다. Ctrl+V까지 눌러야 사본이 놓입니다.
`,w=`---
id: obj-extrude
title: 돌출
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: 돌출, 돌출하기, 두께, 두께 주기, 높이, 올리기, 밀어 올리기, 세우기, 입체로, 입체 만들기, 양방향, 방향 반전, 파내기, 음각, 양각, 새기기, 글자 돌출, 홈, extrude, extrusion, pad, thickness, height, symmetric, flip, cut, engrave, emboss, 돌츨, 익스트루드, ext
commands: extrude, presspull, closeOpen
context: extrude
order: 17
---

## 무엇

스케치의 닫힌 영역에 두께를 주어 입체를 만듭니다. 바닥에 그린 모양을 세워 새 물체를 만들고, 물체 면에 그린 모양을 밀어 넣어 홈을 파거나, 글자를 새기거나 튀어나오게 할 때 씁니다.

## 하는 순서

1. 닫힌 모양이 있는 스케치를 그립니다 ([스케치에서 입체로](help:obj-sketch)).
2. {m:extrude} 단추를 누릅니다.
3. 돌출할 닫힌 영역을 클릭합니다. 같은 스케치의 영역은 더 클릭해 여러 개를 선택할 수 있습니다.
4. 화살표를 끌어 높이를 정하거나, 창의 {t:opt.distance} 칸에 높이를 입력합니다.
5. 화살표를 놓거나 Enter를 누르면 만들어집니다.

## 팁

- 스케치를 선택한 상태나 편집 중에 {c:extrude} 단추를 누르면 영역이 바로 선택됩니다. 영역이 여러 개면 안쪽 구멍을 뺀 영역이 모두 선택되고, 영역을 클릭하면 빼거나 다시 넣습니다.
- 화살표는 화살표 위가 아니어도 화면의 빈 곳 어디서나 끌 수 있습니다. [격자 스냅](help:snap-grid)이 켜져 있으면 그 단계로 움직입니다.
- 창의 {t:opt.distance} 칸에 숫자를 입력하고 Enter를 누르면 그 높이로 바로 만들어집니다. 명령줄에 입력했을 때는 높이만 바뀌고, Enter를 한 번 더 누르면 만들어집니다. 처음 높이는 3D 물체에서 10 mm입니다.
- {t:opt.symmetric} 옵션을 켜면 스케치 평면 양쪽으로 거리의 절반씩 돌출됩니다.
- {t:opt.flip}은 방향을 반대로 바꿉니다. 거리를 음수로 입력해도 같습니다.
- 결과는 {t:op.new}, {t:op.union}, {t:op.subtract}, {t:op.intersect} 가운데 선택하고, 합치거나 뺄 물체는 {t:role.target}에서 선택합니다.
- 물체 면에 그린 스케치는 그 물체가 바로 {t:role.target}가 됩니다. 바깥으로 끌면 {t:op.union}, 안으로 밀면 {t:op.subtract}가 되어 홈이 파입니다.
- 영역을 선택한 뒤 다른 물체의 면을 클릭하면 그 물체가 {t:role.target}가 됩니다.
- {c:text}로 만든 글자를 클릭하면 모든 글자가 한꺼번에 선택됩니다 ([문자](help:obj-text)).
- 새 물체로 만든 돌출은 선택한 뒤 속성 창의 {t:opt.distance} 칸에서 높이를 다시 바꿀 수 있습니다.
- 영역 없이 물체의 면을 클릭하면 [밀고 당기기](help:obj-presspull)로 바뀌어 그 면을 바로 밀고 당깁니다.
- 만들기 전에 Ctrl+Z를 누르면 마지막 끌기나 마지막으로 선택한 영역이 되돌아갑니다.

## 자주 하는 실수

- 선만 있고 닫힌 영역이 없으면 돌출되지 않습니다. 선 끝을 이어 닫거나 {c:closeOpen} 단추를 씁니다.
- 거리는 0이 될 수 없습니다. 3D 물체에서는 -2000 ~ 2000 mm입니다.
- {t:op.subtract}나 {t:op.union}를 선택해도 {t:role.target}가 비어 있으면 새 물체가 따로 생깁니다.
- 미리 보기에 오류가 있으면 만들어지지 않고 {t:msg.fixErrorFirst}라는 안내가 나옵니다. 거리나 방향을 바꿔 봅니다.
- 한 번에 돌출하는 영역은 한 스케치의 영역뿐입니다. 다른 스케치의 영역을 클릭하면 앞서 선택한 영역이 풀리고 그 스케치의 영역으로 바뀝니다.
`,T=`---
id: obj-fillet
title: 모깎기
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: 둥글, 둥글게, 모서리, 모깎기, 라운드, 필렛, 부드럽게, round, rounded, fillet, edge, smooth, 모서리 둥글게, 둥근 모서리, 라운딩, 모깍기, 모깎이, 휠렛, rounding
commands: fillet, chamfer, fillet2d
howto: fillet
context: fillet
order: 180
---

## 무엇

솔리드의 모서리를 정한 반지름으로 둥글게 깎는 도구입니다. 손에 닿는 모서리를 부드럽게 하거나 3D 프린팅한 물건이 덜 깨지게 할 때 씁니다.

## 하는 순서

1. {m:fillet} 단추를 누릅니다.
2. 둥글게 할 모서리를 클릭합니다 (여러 개 가능).
3. 크기 화살표를 끌어 놓거나 반지름을 입력하고 Enter를 누릅니다.

## 팁

- 선택한 모서리를 한 번 더 클릭하면 빠집니다. Ctrl+Z를 누르면 마지막에 선택한 모서리가 빠집니다.
- 물체 하나를 선택한 채 {c:fillet}를 열면 창에 그 물체의 모서리를 한꺼번에 모두 선택하는 단추가 나옵니다. 한 번 더 누르면 모두 풀립니다.
- 물체를 선택한 뒤 한 번 더 클릭해 모서리를 먼저 선택해 두고(Shift: 여러 개) {c:fillet}를 누르면 그 모서리로 바로 시작합니다.
- 처음 반지름은 1 mm(3D 건설에서는 0.1 m)입니다. 숫자 칸에는 \`2.5\`처럼 값이나 [계산식](help:input-calc)을 넣습니다.
- 화살표를 끌어 놓으면 바로 적용되고 도구가 닫힙니다. 놓은 뒤 잠시 보이는 값 칸에 숫자를 넣으면 방금 만든 반지름을 바꿀 수 있습니다.
- Enter로 적용하면 도구가 빈 채로 다시 열려 다음 모서리를 바로 선택할 수 있습니다.
- 만든 모깎기는 {c:toggleLeft} 창의 단계 목록에서 끄거나 삭제할 수 있습니다. 둥근 면을 선택해 [부분 삭제](help:obj-partial-delete)를 해도 모서리가 다시 각이 집니다.
- 스케치 안의 두 선을 둥글게 이으려면 {c:fillet2d}를 씁니다.

## 자주 하는 실수

- 반지름이 너무 크면 {t:err.fillet-failed}라는 오류가 나고 적용되지 않습니다. 화살표는 물체의 가장 얇은 두께의 절반에서 멈추므로 그보다 작게 둡니다.
- 한 번에 한 물체의 모서리만 선택할 수 있습니다. 다른 물체의 모서리를 클릭하면 앞에서 선택한 모서리가 풀리고 그 물체로 새로 시작합니다.
- 면 한가운데를 클릭하면 아무것도 선택되지 않습니다. 모서리 선 위를 클릭합니다.
`,E=`---
id: obj-group
title: 그룹·분리
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: 그룹, 묶기, 묶어, 한 덩어리, 한 묶음, 함께 움직, group, bundle, 그룹 해제, 그룹 풀기, 묶음 풀기, 모두 그룹 해제, 새 그룹, 빈 그룹, 그룹에서 제외, 그룹에 넣기, 끌어다 놓기, 드래그, 폴더, 이름 바꾸기, 분리, 덩어리 나누기, 따로 떼기, 떨어진 조각, 그룹핑, 구룹, ungroup, separate, split apart
commands: group, ungroup, ungroupAll, separate, union
howto: group
context: group, ungroup, ungroupAll, separate
order: 170
---

## 무엇

여러 물체를 한 묶음으로 묶어 함께 선택하고 이동하는 기능입니다. 모양은 바뀌지 않으며, 그룹을 풀면 원래 물체로 돌아갑니다. 그룹은 {c:toggleLeft} 창의 나무 목록에서 끌어다 놓아 정리할 수 있습니다. {c:separate}는 한 물체 안에 떨어져 있는 덩어리를 각각의 물체로 나눕니다.

## 하는 순서

1. Shift를 누른 채 물체를 여러 개 클릭합니다.
2. {m:group} 단추 (Ctrl+G)를 누릅니다.
3. 풀려면 {c:ungroup} (Ctrl+Shift+G)를 누릅니다.

## 팁

- 그룹 안의 물체를 하나 클릭하면 그룹 전체가 선택됩니다. 그룹 안의 물체 하나만 고치려면 3D 화면에서 그 물체를 더블클릭하거나(그룹 안의 그룹은 한 번에 한 단계씩 들어갑니다) {c:toggleLeft} 창의 목록에서 그 물체를 클릭합니다.
- 그룹은 {c:toggleLeft} 창에서 펼치고 접는 줄로 보이며, 안에 든 개수가 함께 나옵니다. 그룹 줄을 클릭하면 그 안의 것이 모두 선택되고, 줄의 눈 단추는 모두 숨기거나 보이게 합니다.
- 그룹을 다른 물체와 함께 다시 묶으면 그룹 안에 그룹이 들어갑니다. {c:ungroup}는 한 단계만 풉니다. 안에 있던 그룹은 그대로 남아 바깥 그룹이 됩니다.
- 그룹 이름은 처음에 "{t:obj.group} 1"처럼 붙습니다. 그룹을 선택하고 F2 키를 누르거나 줄의 이름을 두 번 클릭하면 이름을 변경합니다.
- {c:ungroupAll}는 문서의 모든 그룹을 한꺼번에 풉니다. 3D 물체에서는 {t:level.advanced} 메뉴의 {t:group.combine} 탭에 있고, 어느 작업 공간에서나 명령줄에 \`ungroupall\`을 입력해도 됩니다.
- {m:separate}는 빼기나 솔리드 분할 뒤에 한 물체가 여러 조각으로 떨어졌을 때 씁니다. 물체를 선택하고 누르면 첫 조각은 원래 물체에 남고, 나머지는 원래 이름 뒤에 (2), (3)이 붙은 새 물체가 됩니다.
- {c:separate}와 {c:ungroupAll}는 {t:level.advanced} 메뉴에 있습니다. [일반·고급 메뉴](help:start-level)를 봅니다.
- 여러 물체를 하나의 솔리드로 만들려면 그룹 대신 [합치기](help:obj-union)를 씁니다.

### 물체 창에서 그룹 다루기

- 줄을 끌어 그룹 줄 위에 놓으면 그 그룹에 들어가고, 다른 줄의 위나 아래에 놓으면 목록의 그 자리로 이동됩니다. 여러 개를 선택한 채 그중 하나를 끌면 선택한 것이 함께 이동됩니다. 3D 화면 속 위치는 바뀌지 않습니다.
- 줄을 오른쪽 클릭하면 다음 항목이 나옵니다. 쓸 수 없는 항목은 흐리게 보이고, 마우스를 올리면 까닭이 나옵니다.

| 항목 | 하는 일 |
|---|---|
| {t:ot.mNewGroup} | 그 자리에 빈 그룹을 만들고 바로 이름을 입력합니다. 빈 그룹은 삭제할 때까지 남습니다 |
| {t:ot.mGroup} (Ctrl+G) | 선택한 것을 새 그룹으로 묶습니다 |
| {t:ot.mUngroup} (Ctrl+Shift+G) | 그룹을 풉니다 |
| {t:obj.outOfGroup} | 선택한 것을 그룹 밖으로 꺼냅니다 |
| {t:obj.rename} (F2) | 이름을 변경합니다 |
| {t:obj.mDelete} | 그룹과 그 안의 것을 모두 삭제합니다. 삭제할 개수를 보여 주고 한 번 묻습니다 |

- 3D 건설에서는 그룹이 그 첫 부재가 있는 층 아래에 나옵니다.

## 자주 하는 실수

- 물체를 하나만 선택하고 {c:group}을 누르면 {t:msg.needTwo}라는 알림이 뜹니다. 두 개 이상 선택합니다.
- 그룹으로 묶어도 모양은 하나가 되지 않습니다. 3D 프린팅할 때 한 덩어리로 붙이려면 [합치기](help:obj-union)를 씁니다.
- 떨어진 덩어리가 없는 물체에 {c:separate}를 쓰면 {t:msg.nothingToSeparate}라는 알림만 뜹니다.
- 3D 건설에서 부재를 다른 층의 그룹으로 끌어다 놓을 수 없습니다. 끌어다 놓기는 부재의 층을 바꾸지 않습니다.
- 그룹 줄에서 {t:obj.mDelete}를 선택하면 안의 물체도 모두 삭제됩니다. 그룹만 없애려면 {t:ot.mUngroup}를 선택합니다.
`,D=`---
id: obj-hole
title: 구멍
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: 구멍, 뚫, 뚫기, 뚫어, 관통, 나사 구멍, 볼트 구멍, 구멍 내, 구멍내기, 단 구멍, 접시 구멍, 카운터보어, 카운터싱크, 사각 구멍, 네모 구멍, 구먹, hole, drill, bore, counterbore, countersink, rectangular hole
commands: hole, subtract
howto: hole
context: hole
order: 60
---

## 무엇

면 위의 한 점을 선택해 그 면에서 안쪽으로 구멍을 뚫는 도구입니다. 둥근 구멍과 사각형 구멍을 만들 수 있고, 볼트 머리가 들어가는 {t:opt.holeCbore}과 나사 머리가 묻히는 {t:opt.holeCsink}도 만들 수 있습니다.

## 하는 순서

1. {m:hole} 단추를 누릅니다.
2. 구멍을 뚫을 면 위의 점을 클릭합니다.
3. 지름과 깊이를 정합니다 (깊이 0 = 끝까지 뚫기).
4. 적용 (Enter)을 누르면 완료됩니다.
5. 네모난 구멍은 창에서 {t:mo.holeRect}을 선택합니다. 다른 모양의 구멍은 그 모양을 겹쳐 놓고 {c:subtract}를 씁니다.

## 팁

- 점을 찍을 때 꼭짓점·모서리 중점·원의 중심 같은 스냅 점에 붙습니다. 점을 찍은 뒤 다른 곳을 클릭하면 구멍 위치가 이동됩니다.
- 평평한 면에 점을 찍으면 창에서 위치를 {t:tweak.atClick}, {t:tweak.center}, {t:tweak.byDistance} 가운데에서 선택할 수 있습니다. {t:tweak.byDistance}은 면의 {t:tweak.fromLeft}·{t:tweak.fromBottom} 거리로 구멍 위치를 정합니다.
- 창에서 {t:mo.holeRect}을 선택하면 사각형 구멍이 됩니다. {t:mo.holeWidth}, {t:mo.holeLength}, {t:mo.holeCorner}, {t:mo.turn}를 정합니다.
- 둥근 구멍은 {t:opt.holeSimple}, {t:opt.holeCbore}, {t:opt.holeCsink} 가운데에서 선택합니다. {t:opt.holeCbore}은 {t:opt.cbDiameter}과 {t:opt.cbDepth}를, {t:opt.holeCsink}은 {t:opt.csDiameter}을 따로 정합니다. [일반 메뉴](help:start-level)에서는 이 선택이 창의 {t:ac.advanced} 안에 접혀 있습니다.
- 깊이 화살표를 끌어 놓으면 바로 구멍이 뚫리고 도구가 닫힙니다. 적용 (Enter)으로 뚫으면 도구가 빈 채로 다시 열려 다음 구멍을 바로 뚫을 수 있습니다.
- 물체를 선택한 뒤 한 번 더 클릭해 평평한 면을 선택해 두고 {c:hole} 단추를 누르면 그 면의 가운데에서 시작합니다.
- 숫자 칸에는 계산식을 쓸 수 있습니다. 예: 지름 칸에 \`3.2+0.2\`.
- 3D 프린팅할 나사 구멍은 나사 지름보다 0.2~0.4 mm 크게 뚫으면 나사가 잘 들어갑니다.
- 같은 간격의 구멍 여러 개는 원기둥 하나를 [패턴](help:obj-pattern)으로 늘어놓은 뒤 한꺼번에 {c:subtract}로 빼면 빠릅니다.

## 자주 하는 실수

- 곡면(원기둥의 옆면)에 찍은 구멍은 클릭한 점에서 면에 수직인 방향으로 뚫립니다. 곡면에서는 위치를 {t:tweak.atClick}로만 정할 수 있습니다.
- 깊이를 물체 두께보다 작게 두면 바닥이 막힌 구멍이 됩니다. 끝까지 뚫으려면 깊이를 0으로 둡니다.
- {t:opt.cbDiameter}이나 {t:opt.csDiameter}이 구멍 지름보다 크지 않으면 적용되지 않습니다. 구멍 지름보다 크게 정합니다.
- 빈 곳을 클릭하면 아무 일도 일어나지 않습니다. 물체의 면 위를 클릭해야 합니다.
`,O=`---
id: obj-image-relief
title: 부조 만들기
분류: 3D 물체 도구
난이도: 중급
workspace: 3D 물체
keywords: 부조, 양각, 리토페인, 리소페인, 높이 지도, 하이트맵, 사진 입체, 그림 입체, 사진 3D, 얼굴 부조, 음영, 깊이, 깊이 모델, AI 깊이, 깊이 추정, 3D 프린팅 사진, 명판, 메달, 도장, relief, lithophane, heightmap, height map, emboss, shading, depth, depth map, AI depth, 2.5D
commands: imageRelief, imageMenu
context: imageRelief
order: 396
---

## 무엇

그림으로 입체를 만드는 기능입니다. 판 위에 그림의 모양이 올라온 닫힌 물체가 만들어지고 바로 3D 프린팅할 수 있습니다. 방식이 셋 있습니다.

- {t:img.reliefMethod.depth}: AI 깊이 모델이 사진 속의 앞뒤 거리를 읽습니다. 가까운 곳은 올라오고 먼 곳은 내려가며, 큰 형태는 눌러 얕게 만들고 잔 형태는 남깁니다. 실제 사진에 가장 잘 맞습니다. 깊이 모델이 필요합니다(아래 "깊이 모델" 참고).
- {t:img.reliefMethod.shade}: 사진의 빛과 그늘에서 입체를 추정합니다. 빛을 받은 쪽은 올라오고 그늘진 쪽은 내려가도록 면을 이어 붙입니다. 깊이 모델 없이 동작합니다.
- {t:img.reliefMethod.bright}: 밝은 곳이 높게(반전하면 어두운 곳이 높게) 올라옵니다. 빛에 비춰 보는 리토페인, 글자, 무늬에 씁니다.

## 하는 순서

1. {m:imageMenu}를 누르고 {c:imageRelief}를 선택합니다.
2. 그림 파일을 선택합니다. 이미 붙인 이미지를 선택한 채 시작하면 그 이미지의 자리와 크기, 자르기와 보정이 그대로 쓰입니다.
3. {t:img.reliefMethod}을 선택합니다. 사진이면 {t:img.reliefMethod.depth}, 리토페인이면 {t:img.reliefMethod.bright}입니다. 깊이 모델이 있으면 처음부터 {t:img.reliefMethod.depth}가 선택되어 있습니다.
4. {t:img.reliefMethod.depth}에서는 처음 한 번 "{t:depth.loading}", 이어서 "{t:depth.running}"이 창에 보입니다. 그림마다 한 번만 계산하므로 그 뒤의 슬라이더는 바로 따라옵니다. {t:img.depth}, {t:img.detail}, {t:img.smooth}를 보면서 정합니다.
5. {t:img.reliefMethod.shade}에서는 {t:img.light}을 사진을 찍을 때 빛이 온 쪽으로 맞춥니다. 원 위의 점을 끌거나 각도를 적습니다. 대부분의 사진은 왼쪽 위(135°)입니다.
6. {t:img.reliefBase}, {t:img.reliefHeight}, {t:img.reliefRes}를 정합니다. 화면에 결과가 미리 보입니다. 슬라이더를 끄는 동안은 성긴 격자로, 놓으면 전체 격자로 다시 그립니다.
7. 놓을 면이나 바닥을 클릭합니다. 붙인 이미지에서 시작했으면 {t:btn.apply}을 누릅니다.

## 깊이 모델

- 설치판에는 깊이 모델이 들어 있습니다. 따로 받을 것이 없습니다.
- 웹판은 처음 {t:img.reliefMethod.depth}를 선택할 때 "깊이 모델(약 50 MB)을 받을까요?"라고 한 번 묻습니다. {t:depth.get}를 누르면 받는 동안 진행률이 보이고, 받은 파일이 원본과 같은지 확인한 뒤 이 브라우저에 저장합니다. 다음부터는 받지 않습니다.
- {t:depth.later}를 누르면 다시 묻지 않습니다. {t:img.reliefMethod.depth} 칸에 "{t:depth.none}"가 보이며, 받기 전까지는 {t:img.reliefMethod.shade}이 기본 방식입니다.
- {c:settings} → {t:set.options} 탭 › {t:stable.storage}의 "{t:depth.row}" 줄에서 상태를 보고 {t:depth.get}와 {t:depth.delete}를 할 수 있습니다. 브라우저의 사이트 데이터를 삭제하면 모델도 함께 없어집니다.

## 팁

- {t:img.depth}를 낮추면 전체의 앞뒤 차이가 납작해지고 눈·코·입 같은 잔 형태가 또렷해집니다. 얇은 메달이나 명판에는 30~50, 둥근 느낌을 살리려면 70 이상이 맞습니다.
- {t:img.detail}은 잔 형태와 가장자리를 올립니다. 너무 올리면 잡티가 함께 올라오므로 {t:img.smooth}와 같이 조절합니다.
- {t:img.flatBg}를 켜면 투명한 곳이나 테두리와 같은 배경이 판 높이에 남고 피사체만 올라옵니다. 그림에 투명한 픽셀이 있으면 처음부터 켬이고, 없으면 끔으로 시작합니다. 직접 바꾼 값은 그대로 둡니다. 배경을 삭제한(투명한) PNG가 가장 깨끗합니다.
- {t:img.invert}을 {t:img.reliefMethod.depth}나 {t:img.reliefMethod.shade}에서 켜면 입체가 뒤집혀 오목한 틀이 됩니다. {t:img.reliefMethod.bright}에서는 어두운 곳이 높아집니다. 빛에 비춰 보는 리토페인은 {t:img.reliefMethod.bright}에 반전을 켜고 {t:img.reliefBase}를 0.6~0.8 mm 정도로 얇게 합니다.
- {t:img.reliefMethod.shade}에서 {t:img.light}이 틀리면 코가 들어가고 볼이 나오는 식으로 뒤집혀 보입니다. 점을 반대쪽으로 끌어 보면 바로 알 수 있습니다. {t:img.lightElev}는 빛이 낮을수록(그늘이 길수록) 작게 둡니다.
- {t:img.reliefRes}는 높이를 재는 간격입니다. 작을수록 곱지만 무거워집니다. 컴퓨터가 감당할 수 있는 만큼보다 작게 정하면 간격을 넓히고 창에 알려 줍니다.
- 만든 부조는 STL·OBJ·3MF로 내보내고 3D 프린팅할 수 있습니다. 한 번의 되돌리기로 없어집니다.

## 자주 하는 실수

- 3D 건설에는 이 기능이 없습니다. 3D 물체에서 만듭니다.
- {t:img.reliefMethod.depth}는 앞뒤 거리를 비율로만 압니다. 실제 두께는 {t:img.reliefHeight}로 정합니다. 유리·거울·하늘처럼 거리가 모호한 곳은 어긋날 수 있습니다.
- 바닥이 그림 아래까지 이어진 사진은 바닥이 비탈로 남습니다. {t:img.flatBg}를 켜거나 {t:img.depth}를 낮춥니다.
- {t:img.reliefMethod.shade}은 빛이 한쪽에서 온 사진에 맞습니다. 정면 플래시, 역광, 여러 조명이 섞인 사진이나 무늬가 강한 사진은 모양이 어긋납니다. 그럴 때는 {t:img.reliefMethod.depth}를 씁니다.
- {t:img.reliefMethod.bright}에서 배경이 투명한 그림은 투명한 곳이 흰색으로 계산되어 높게 올라옵니다. 필요하면 {t:img.invert}을 켭니다.
- 부조에 합치기·모깎기 같은 도구를 쓰려면 먼저 속성 창의 {t:btn.meshToSolid}을 누릅니다. 삼각형이 많으면 바꿀 수 없으니 {t:img.reliefRes}를 키워 다시 만듭니다.
`,k=`---
id: obj-image-trace
title: 윤곽 따기
분류: 3D 물체 도구
난이도: 중급
workspace: 3D 물체
keywords: 윤곽, 윤곽 따기, 외곽선, 그림 따라 그리기, 로고 따기, 실루엣, 벡터화, 이미지 선, 사진 선, 그림을 스케치로, 트레이스, trace, outline, vectorize, silhouette, logo, image to sketch
commands: imageTrace, imageMenu, extrude
context: imageTrace
order: 397
---

## 무엇

그림에서 어두운 부분(반전하면 밝은 부분)의 경계를 찾아 닫힌 스케치 선으로 만드는 기능입니다. 만든 선은 보통 스케치처럼 {c:extrude}로 입체를 만들 수 있고, 한 번에 돌출까지 할 수도 있습니다.

## 하는 순서

1. {m:imageMenu}를 누르고 {c:imageTrace}를 선택합니다.
2. 그림 파일을 선택합니다. 이미 붙인 이미지를 선택한 채 시작하면 그 이미지의 자리와 크기에 선이 생깁니다.
3. {t:img.threshold}와 {t:img.traceTol}를 정합니다. 화면에 선이 미리 보입니다.
4. 놓을 면이나 바닥을 클릭합니다. 붙인 이미지에서 시작했으면 {t:btn.apply}을 누릅니다.

## 팁

- {t:img.threshold}보다 어두운 부분이 모양이 됩니다. 밝은 부분을 모양으로 쓰려면 {t:img.invert}을 켭니다.
- {t:img.traceTol}를 키우면 선의 수가 줄고 매끈해집니다. 선이 너무 많으면 저절로 키우고 창에 알려 줍니다.
- {t:img.traceExtrude}를 켜고 {t:img.traceDepth}를 정하면 선과 돌출 입체가 한 번에 만들어집니다. 되돌리기 한 번으로 모두 없어집니다.
- 스케치를 편집하는 중에 쓰면 선이 지금 스케치에 더해집니다. 스케치에 깐 밑그림을 따라 선을 만들 수 있습니다. [밑그림](help:obj-image-underlay)을 봅니다.
- 그림의 밝기와 대비, 자르기는 창의 고급 설정이나 붙인 이미지의 보정에서 바꿉니다.

## 자주 하는 실수

- 3D 건설에는 이 기능이 없습니다. 3D 물체에서 만듭니다.
- 윤곽이 하나도 생기지 않습니다. 그림이 너무 밝거나 어둡습니다. {t:img.threshold}를 이동하거나 {t:img.invert}을 바꿉니다.
- 아주 작은 점은 잡음으로 보고 빼므로 선이 생기지 않습니다. 그림을 크게 붙이거나 대비를 올립니다.
`,A=`---
id: obj-image-underlay
title: 밑그림
분류: 3D 물체 도구
난이도: 중급
workspace: 3D 물체
keywords: 밑그림, 밑그림 넣기, 참고 그림, 도면 사진, 사진 따라 그리기, 트레이싱, 축척, 크기 맞추기, 실제 크기, 배경 그림, underlay, reference image, trace over, calibrate, scale
commands: imageUnderlay, imageCalibrate, imageTrace
context: imageUnderlay, imageCalibrate
order: 398
---

## 무엇

스케치를 편집하는 중에 그림을 스케치 평면에 깔아 두고 그 위에 선을 따라 그리는 기능입니다. 밑그림은 스케치 선 아래에 놓여 선을 클릭하거나 스냅하는 데 방해가 되지 않습니다. 크기 맞추기로 실제 치수에 맞출 수 있습니다.

## 하는 순서

1. 스케치를 편집하는 중에 {m:imageMenu}를 누르고 {c:imageUnderlay}을 선택합니다.
2. 그림 파일을 선택하고 스케치 평면에서 놓을 곳을 클릭합니다.
3. {c:imageCalibrate}를 선택하고 그림 속 길이를 아는 두 점을 차례로 클릭합니다.
4. 두 점 사이의 실제 거리(mm)를 입력하고 Enter를 누릅니다. 첫 점은 그 자리에 있고 그림 크기가 바뀝니다.
5. 선, 원, 호 같은 그리기 도구로 밑그림을 따라 그리거나 {c:imageTrace}로 윤곽을 바로 선으로 만듭니다.

## 팁

- 새 밑그림은 {t:img.transparency} 50 %로 놓여 위에 그린 선이 잘 보입니다. 속성 창에서 바꿀 수 있습니다.
- 크기를 맞추면 밑그림이 고정되어 화면에서 클릭해도 잡히지 않습니다. 이동하려면 물체 창에서 선택하고 {c:imageLock}을 풉니다.
- 스케치를 끝내도 밑그림은 스케치 평면에 남고 스케치를 이동하면 함께 움직입니다. 눈 메뉴의 {t:vis.images}로 모든 이미지를 숨길 수 있습니다.
- 스케치를 숨기면 밑그림도 숨겨지고, 스케치를 삭제하면 밑그림도 함께 삭제됩니다.
- 밑그림의 자르기·밝기·대비·채도·명도는 다른 이미지와 같이 속성 창에서 바꿉니다. 물체 창에서 이미지를 선택해 속성을 엽니다.

## 자주 하는 실수

- 스케치를 편집하는 중이 아니면 {c:imageUnderlay}을 쓸 수 없습니다. 먼저 스케치를 만들거나 편집합니다.
- 스케치 편집 중에는 화면에서 밑그림을 클릭해 선택할 수 없습니다. 선을 선택하는 것이 먼저이기 때문입니다. 물체 창의 이미지 줄을 클릭해 선택합니다.
- 크기를 맞췄는데 어긋납니다. 사진이 비스듬히 찍혔으면 가로와 세로 축척이 다릅니다. 정면에서 찍은 사진이나 스캔한 도면을 씁니다.
`,j=`---
id: obj-image
title: 이미지 붙이기
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: 이미지, 그림, 사진, 스티커, 데칼, 로고, 라벨, 간판, 붙이기, 그림 붙이기, 사진 붙이기, 면에 그림, 벽에 사진, 붙여 넣기, 끌어 놓기, 투명도, 밝기, 대비, 채도, 명도, 자르기, image, picture, photo, decal, sticker, logo, png, jpg
commands: placeImage, imageMenu, importImage, imageCrop, imageReset, imageReplace, imageRepick, imageFront, imageBack, imageLock
context: placeImage, imageMenu, imageCrop, imageRepick, importImage
order: 395
---

## 무엇

그림 파일(PNG·JPG·WebP·GIF·BMP·SVG)을 물체의 면, 벽, 바닥, 땅에 붙이는 기능입니다. 붙인 이미지는 물체를 따라 움직이고, 곡면에도 휘어져 붙습니다. 이미지는 모양에 영향을 주지 않으므로 합치기·빼기, STL 내보내기, 3D 프린팅, 도면에는 들어가지 않습니다.

## 하는 순서

1. 3D 물체에서는 {m:imageMenu}를 누르고 {c:placeImage}를 선택합니다. 3D 건설에서는 {m:importImage}를 선택합니다.
2. 열리는 창에서 그림 파일을 선택합니다.
3. 붙일 면 위로 마우스를 움직이면 그림이 미리 보입니다. 면을 클릭하면 그 면의 짧은 변 절반 크기로 붙습니다.
4. 붙인 이미지를 클릭해 선택하고, 끌어서 이동하거나 모서리 손잡이로 크기를 바꿉니다.
5. 속성 창에서 {t:img.transparency}, {t:img.brightness}, {t:img.contrast}, {t:img.saturation}, {t:img.lightness}를 조절합니다.

## 팁

- 다른 프로그램에서 복사한 그림은 Ctrl+V로 바로 붙일 수 있습니다. 그림 파일을 3D 화면에 끌어 놓으면 놓은 자리의 면에 붙습니다.
- 크기를 정확히 정하려면 붙이기 전에 창의 {t:img.width}·{t:img.height}를 입력하거나 명령 창에 \`200x100\`처럼 mm로 입력합니다. 3D 건설에서도 mm로 입력합니다(\`20000x15000\`은 20 × 15 m). 칸이 비어 있으면 붙일 곳에 맞춘 크기가 됩니다.
- 이미지를 끌면 같은 물체의 옆면으로도 넘어갑니다. 위의 둥근 손잡이를 끌면 돌아갑니다. Shift를 누르고 모서리를 끌면 비율이 자유롭게 바뀝니다.
- 이미지를 더블클릭하면 {c:imageCrop}가 시작됩니다. 손잡이를 끌어 보일 부분만 남깁니다. 잘라 낸 부분은 삭제되지 않아 {c:imageReset}로 언제든 되돌릴 수 있습니다.
- {t:img.transparency}는 0 %가 그대로 보이는 상태이고 100 %는 보이지 않는 상태입니다.
- 이미지가 겹치면 {c:imageFront}·{c:imageBack}로 위아래를 바꿉니다. {c:imageRepick}는 이미지를 다른 면으로 이동합니다.
- 이미지를 우클릭하면 {c:imageCrop}, {c:imageCalibrate}, 만들기 기능, {c:imageFront}·{c:imageBack}, {c:imageReset}, {c:imageLock}, 숨기기, 삭제가 차례로 나옵니다. 속성 창 맨 위에도 {c:imageCrop}·{c:imageCalibrate}·삭제 단추가 있습니다.
- {c:imageLock}을 켠 이미지는 화면에서 클릭하거나 상자로 선택해도 잡히지 않아 그 위에 그리는 데 방해가 되지 않습니다. 물체 창이나 전체 목록의 이미지 줄을 눌러 선택하고, 줄의 자물쇠를 누르면 풀립니다.
- 3D 건설의 {m:archUnderlay}은 그림을 누른 대지나 건물에 꽉 차게 평평히 깔고 바로 {c:imageCalibrate}로 넘어갑니다. 크기를 맞추면 밑그림이 고정되고, {t:img.calSkip}를 누르면 놓은 크기 그대로 둡니다. 전체 목록에서는 대지·층·땅 아래 이미지 줄로 보입니다.
- 눈 메뉴의 {t:vis.images}에서 모든 이미지를 한꺼번에 숨기거나 보이게 합니다. 이미지 하나는 물체 창의 눈 단추로 숨깁니다.
- 물체를 삭제하면 그 물체에 붙은 이미지도 함께 삭제되고 몇 개가 삭제되었는지 알려 줍니다. 되돌리기 한 번으로 모두 돌아옵니다.
- 화면 저장 그림에는 이미지가 들어갑니다. 큰 사진은 컴퓨터에 맞는 크기로 줄여 저장합니다.

## 자주 하는 실수

- 고정된 이미지는 화면에서 클릭되지 않습니다. 목록에서 선택하거나 {c:imageLock}을 풉니다.
- 다른 도구를 쓰는 중에는 이미지를 클릭할 수 없습니다. 도구가 이미지 아래의 면을 선택하도록 되어 있습니다. Esc로 도구를 끝내고 클릭합니다.
- 이미지가 보이지 않습니다. 눈 메뉴의 {t:vis.images}가 숨기기로 되어 있거나, 이미지가 붙은 물체를 숨겼습니다.
- STL 파일에 그림이 없습니다. 이미지는 색칠과 같아서 모양에 들어가지 않습니다. 그림을 입체로 만들려면 [부조 만들기](help:obj-image-relief)나 [윤곽 따기](help:obj-image-trace)를 씁니다.
`,M=`---
id: obj-intersect
title: 교집합
분류: 3D 물체 도구
난이도: 중급
workspace: 공통
keywords: 교집합, 겹친 부분, 겹치는, 공통 부분, 겹친 곳, intersect, overlap, common, 겹친 부분만, 겹치는 부분 남기기, 인터섹트, 불리언, 교차, 교짐합, boolean, intersection
commands: intersect, union, subtract
howto: intersect
context: intersect
order: 160
---

## 무엇

두 물체가 서로 겹친 부분만 남기고 나머지는 삭제하는 불리언 도구입니다. 예를 들어 구 두 개를 조금 겹쳐 놓고 교집합을 하면 렌즈 모양이 됩니다.

## 하는 순서

1. {m:intersect} 단추를 누릅니다.
2. 기준 물체를 클릭합니다.
3. 겹칠 물체를 클릭하고 적용 (Enter)을 누릅니다.

## 팁

- 겹친 물체 두 개를 Shift를 누른 채 미리 선택해 두고 {c:intersect}을 누르면 바로 결과가 만들어집니다.
- 겹칠 물체를 여러 개 선택하면 모든 물체가 함께 겹친 부분만 남습니다.
- 결과는 기준 물체의 이름을 쓰고, 겹칠 물체는 사라집니다. 겹칠 물체를 남기려면 도구 창의 {t:opt.keepTools}를 켭니다([일반 메뉴](help:start-level)에서는 {t:ac.advanced} 안에 있습니다).
- 선택한 물체를 다시 클릭하면 목록에서 빠지고, Ctrl+Z는 마지막에 선택한 물체를 놓습니다.
- 3D 건설에서는 {c:intersect}이 {t:level.advanced} 메뉴에 있습니다. [일반·고급 메뉴](help:start-level)를 봅니다.

## 자주 하는 실수

- 기준 물체에 닿지 않은 물체는 선택할 수 없습니다. 두 물체가 실제로 겹치도록 먼저 이동합니다.
- 면끼리 닿기만 하고 속이 겹치지 않으면 남는 부분이 없어 결과를 만들 수 없습니다.
- 두께 없는 면 물체는 쓸 수 없습니다. 먼저 [두께 주기나 면 채우기](help:obj-tweak)로 솔리드를 만듭니다.
`,N=`---
id: obj-line-style
title: 2D 선 굵기·색·종류
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: 선 굵기, 굵기, 선 색, 선 종류, 점선, 숨은선, 중심선, 굵게, 가늘게, line weight, line colour, line color, dashed, linetype, thickness of line, 선 모양, 실선, 가상선, 파선, 1점 쇄선, 2점 쇄선, 선색, 선굵기, 새 선, 기본으로, 레이어, line style
commands: editSketch, selectSimilar, exportSvg, exportDxf
howto: lineStyle
order: 400
---

## 무엇

스케치 선의 색, 굵기, 종류(실선·숨은선·중심선·가상선)를 바꾸는 기능입니다. 정한 모양은 화면에 보이고, SVG·DXF로 내보낼 때도 그대로 들어갑니다.

## 하는 순서

1. 스케치를 선택하거나, 스케치 안에서 선을 클릭해 선택합니다.
2. 속성 창의 {t:ls.title}에서 {t:ls.color}, {t:ls.weight}, {t:ls.type} 칸을 바꿉니다.

## 팁

- 스케치를 편집하는 동안 선을 선택하면 선택한 선에만 적용됩니다. 스케치 전체를 선택하면 그 스케치의 기본값이 바뀌어, 따로 정하지 않은 선에 모두 적용됩니다.
- {t:ls.color}: {t:ls.default}, 팔레트에서 선택, 색 견본 8가지 가운데에서 선택합니다.
- {t:ls.weight}: {t:ls.default} 또는 0.13~2.0 mm의 KS·ISO 표준 굵기 가운데에서 선택합니다. 화면에서는 확대·축소해도 같은 두께로 보입니다.
- {t:ls.type}
  - {t:ls.type.continuous}: 끊기지 않는 선, 보이는 외형선
  - {t:ls.type.dashed}: 짧은 선이 이어지는 파선, 보이지 않는 모서리
  - {t:ls.type.chain}: 1점 쇄선, 중심선·피치선
  - {t:ls.type.chain2}: 2점 쇄선, 움직인 위치나 이웃 부품
- {t:ls.reset}를 누르면 색·굵기·종류 설정을 한꺼번에 삭제합니다.
- 앞으로 그릴 선의 모양은 스케치 편집 중에 위쪽 안내 줄의 {t:ls.new} 단추에서 정합니다. 이 설정은 앱을 닫을 때까지만 기억됩니다.
- 같은 종류의 선을 한꺼번에 선택하려면 스케치 안에서 [동시 선택](help:obj-select-similar)을 씁니다.
- {c:exportSvg}·{c:exportDxf}로 내보내면 선의 색·굵기·종류가 파일에 들어갑니다. DXF를 가져올 때도 선의 모양을 읽어 옵니다.
- 어두운 화면에서는 검은 선이 밝게 보입니다. 파일에는 검은색 그대로 들어갑니다.

## 자주 하는 실수

- 칸에 {t:ls.mixed}이 보입니다. 선택한 선들의 값이 서로 다르다는 뜻입니다. 새 값을 선택하면 모두 같아집니다.
- 3D 물체의 색은 여기서 바뀌지 않습니다. [색·재질](help:obj-material)을 봅니다.
- 투상도의 선 굵기와 종류는 KS 규칙에 따라 자동으로 정해집니다. 여기서 바꾸지 않습니다 ([투상도](help:obj-drawing)).
`,P=`---
id: obj-loft
title: 단면 잇기
분류: 3D 물체 도구
난이도: 중급
workspace: 공통
keywords: 단면 잇기, 로프트, 단면, 잇기, 이어 붙이기, 모양 바꾸며 잇기, 네모에서 원, 깔때기, 꽃병, 병목, 전이, 블렌드, 직선으로 잇기, loft, lofting, blend, transition, sections, profiles, funnel, 로프트하기, 롭트
commands: loft, workPlane, newSketch
context: loft
order: 20
---

## 무엇

높이가 다른 단면 여러 개를 선택한 순서대로 이어 입체를 만듭니다. 아래는 네모이고 위는 동그란 화분, 깔때기, 점점 가늘어지는 손잡이처럼 모양이 바뀌는 물체에 씁니다.

## 하는 순서

1. {m:workPlane}으로 바닥에서 띄운 평면을 만듭니다.
2. 바닥과 작업 평면에 각각 스케치를 만들고 닫힌 모양을 하나씩 그립니다.
3. {m:loft} 단추를 누릅니다.
4. 이을 단면을 아래부터 차례로 클릭합니다.
5. Enter를 누르면 만들어집니다.

## 팁

- 단면은 스케치마다 하나입니다. 이미 선택한 스케치의 영역을 다시 클릭하면 그 단면이 목록에서 빠집니다.
- 창의 목록에 선택한 단면이 순서대로 보입니다. 단면은 이 순서대로 이어집니다.
- 단면을 세 개 이상 선택하면 가운데가 부풀거나 잘록한 모양도 만들 수 있습니다. 작업 평면을 높이마다 하나씩 만듭니다 ([작업 평면](help:obj-workplane)).
- {t:opt.ruled}를 켜면 단면 사이를 곧은 면으로 잇고, 끄면 부드러운 곡면으로 잇습니다. 새 물체로 만든 뒤에도 속성 창에서 바꿀 수 있습니다.
- 모든 단면에 구멍이 같은 수만큼 있으면 구멍도 이어져 속이 빈 물체가 됩니다.
- 결과는 [돌출](help:obj-extrude)과 같이 {t:op.new}, {t:op.union}, {t:op.subtract}, {t:op.intersect} 가운데 선택합니다.
- 만들기 전에 Ctrl+Z를 누르면 마지막으로 선택한 단면이 빠집니다.

## 자주 하는 실수

- 단면이 하나뿐이면 만들어지지 않습니다 ({t:err.loft-sections}).
- 한 스케치에서 다른 영역을 단면으로 바꾸려고 그 영역을 클릭하면 단면이 빠지기만 합니다. 원하는 영역을 한 번 더 클릭해 다시 넣으면 그 단면은 목록 맨 뒤로 갑니다.
- 단면마다 구멍 수가 다르면 만들어지지 않습니다 ({t:err.loft-holes}).
- 단면을 섞인 순서로 선택하면 위아래가 엇갈려 이어집니다. Ctrl+Z로 빼고 아래부터 다시 선택합니다.
- 모든 단면을 한 스케치에 그리면 하나만 선택할 수 있습니다. 단면마다 다른 스케치(다른 평면)에 그립니다.
`,F=`---
id: obj-material
title: 색·재질 바꾸기
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: 색, 색깔, 색칠, 칠하, 빨간, 파란, 노란, 여러 개 색, 재질, 나무 무늬, 금속, color, colour, paint, material, 색 바꾸기, 색상, 색상환, 색 코드, 최근 색, 유리, 투명, 플라스틱, 목재, 고무, 색 덧입히기, 여러 개 한꺼번에, 칼라, 컬러, materials, mat
commands: material, selectSimilar
howto: color
context: material
order: 390
---

## 무엇

선택한 물체의 색과 재질(플라스틱·금속·목재·유리 등)을 바꾸는 기능입니다. 속성 창에서 바꾸며, 여러 물체를 함께 선택하면 한 번에 바뀝니다.

## 하는 순서

1. 물체를 클릭해 선택합니다. Shift를 누른 채 클릭하면 여러 개를 선택할 수 있습니다.
2. 속성 창의 {t:panel.color}에서 색을 선택합니다.
3. 나무·금속 같은 표면은 {t:panel.material}에서 바꿉니다.

## 팁

- {t:panel.material}은 {t:matcat.basic}·{t:matcat.metal}·{t:matcat.plastic}·{t:matcat.wood}·{t:matcat.misc} 탭으로 나뉘어 있고, 그림을 눌러 선택합니다.
- {t:panel.color}에서는 색상환의 바깥 고리로 색을, 안쪽 네모로 밝기와 진하기를 선택합니다. {t:mat.hex} 칸에 \`#FF8800\`처럼 입력해도 되고, 아래의 색 견본과 {t:mat.recent}을 눌러도 됩니다.
- 금속·목재처럼 고유한 색이 있는 재질은 처음에 그 재질의 색으로 보입니다. 색을 선택하면 {t:mat.overlay}가 켜져 선택한 색이 재질 위에 입혀지고, 끄면 다시 재질의 색으로 돌아갑니다. 무광·유광 플라스틱처럼 고유한 색이 없는 재질은 늘 선택한 색으로 보입니다.
- {t:mat.clearGlass}·{t:mat.frostedGlass}와 투명 플라스틱 재질은 뒤가 비쳐 보입니다.
- 여러 물체를 선택하면 속성 창에 몇 개를 선택했는지 나오고, 값이 서로 다른 칸에는 {t:multi.mixed}이 표시됩니다. 색·재질은 선택한 물체 모두에 한 번에 들어가며 되돌리기도 한 번에 됩니다.
- 면마다 따로 칠한 색이 있는 물체를 여러 개 선택했을 때 {t:multi.clearFaces}를 켜면 그 색까지 삭제하고 물체 전체를 새 색으로 칠합니다.
- {m:material} 단추를 누르면 속성 창이 열리고 재질 칸으로 바로 이동합니다.
- 같은 색이나 같은 종류의 물체를 한꺼번에 선택하려면 [동시 선택](help:obj-select-similar)을 씁니다.
- 3D 건설에서 벽의 한 면만 칠하려면 [면 칠하기](help:arch-face-paint)를 씁니다.

## 자주 하는 실수

- 물체를 선택하지 않고 {c:material} 단추를 누르면 안내만 나오고 재질 칸이 열리지 않습니다. 물체를 먼저 선택합니다.
- 색을 선택했는데 재질의 색 그대로입니다. {t:mat.overlay}가 꺼져 있습니다. 켜면 선택한 색이 보입니다.
- 스케치 선의 색은 여기서 바꾸지 않습니다. [2D 선 굵기·색](help:obj-line-style)을 봅니다.
`,I=`---
id: obj-measure
title: 측정
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: 재기, 재, 치수 재, 길이, 거리, 각도, 넓이, 부피, 몇 mm, 얼마나, measure, distance, length, angle, volume, area, how long, 측정, 최단 거리, 지름, 반지름, 겉넓이, 면적, 체적, 크기 확인, 자, 줄자, 치수 정보, 길이 재기, 거리 재기, dist, diminfo
commands: measure, dimInfo
howto: measure
context: measure
order: 370
---

## 무엇

점·모서리·면·물체를 클릭해 거리, 각도, 넓이, 부피를 재는 도구입니다. 잰 값은 도구 창에 나오고 모델은 바뀌지 않습니다.

## 하는 순서

1. {m:measure} 단추를 누릅니다.
2. 점·모서리·면을 두 개 차례로 클릭하면 거리나 각도가 나옵니다.
3. 면이나 물체를 클릭하면 넓이·부피도 보입니다.

## 팁

- 하나만 클릭해도 그 대상의 값이 창에 나옵니다.
  - 모서리: {t:m.edgeLength}. 원이나 호 모서리는 {t:m.diameter}(∅)와 {t:m.radius}(R)도 나옵니다.
  - 면: {t:m.faceArea}
  - 점: 좌표(X, Y, Z)
- 두 대상을 클릭하면 {t:m.minDistance}가 나오고, 화면에도 치수선으로 표시됩니다. 두 점 사이는 {t:m.dx}·{t:m.dy}·{t:m.dz} 거리도 따로 나옵니다.
- 평평한 면 두 개, 곧은 모서리 두 개, 또는 곧은 모서리와 평평한 면을 클릭하면 사이 각도({t:m.angle})가 나옵니다.
- 물체 전체를 재려면 창 위쪽에서 {t:m.filterBody}를 선택한 뒤 물체를 클릭합니다. {t:m.size}(가로 × 세로 × 높이), {t:m.volume}, {t:m.surface}가 나옵니다. 물체를 한두 개 선택한 채로 도구를 열면 바로 물체를 잽니다.
- 객체 스냅({k:osnap})이 켜져 있으면 꼭짓점, 중점, 원 중심, 면 중심에 마우스를 가져갈 때 그 점에 붙습니다 ([객체 스냅](help:snap-osnap)). 정확한 점끼리 재려면 표시가 보일 때 클릭합니다.
- 세 번째로 클릭하면 새로 재기 시작합니다. 빈 곳을 클릭해도 처음부터 다시 잽니다. Ctrl+Z는 마지막에 클릭한 대상을 취소합니다.
- 길이 단위는 3D 물체에서 mm, 3D 건설에서 m입니다.
- {m:dimInfo}를 켜 두면 선택한 물체의 가로·세로·높이가 화면에 계속 표시됩니다.
- 잰 값을 모델에 남기려면 [3D 치수](help:obj-annotate)를 씁니다.
- 명령줄에서는 \`dist\` 또는 \`mea\`를 입력해도 됩니다.

## 자주 하는 실수

- 부피가 나오지 않습니다. 면을 클릭하면 면 넓이만 나옵니다. {t:m.filterBody}로 바꾼 뒤 물체를 클릭합니다.
- 각도가 나오지 않습니다. 곡면이나 굽은 모서리 사이의 각도는 계산하지 않습니다. 평평한 면이나 곧은 모서리를 선택합니다.
- 꼭짓점을 재려 했는데 모서리 길이가 나왔습니다. 점 표시가 나타날 때까지 꼭짓점에 더 가까이 가서 클릭합니다.
`,L=`---
id: obj-mirror
title: 대칭 복사
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: 대칭, 대칭 복사, 거울, 반대쪽, 좌우 대칭, 뒤집, mirror, symmetric, flip copy, 미러, 거울 복사, 대칭복사, 반쪽, 양쪽 똑같이, 상하 대칭, 앞뒤 대칭, 뒤집기, 3dmirror, mirror3d
commands: mirror3d, union
howto: mirror
context: mirror3d
order: 300
---

## 무엇

평면을 기준으로 솔리드의 대칭 사본을 만드는 도구입니다. 좌우가 같은 물체는 반쪽만 만든 뒤 대칭 복사하면 빠르게 완성할 수 있습니다.

## 하는 순서

1. 물체를 선택하고 {m:mirror3d} 단추를 누릅니다.
2. 기준이 될 평면을 선택하고 적용 (Enter)을 누릅니다.

## 팁

- 평면은 {t:opt.planeYZ}(YZ 평면), {t:opt.planeXZ}(XZ 평면), {t:opt.planeXY}(XY 평면), {t:opt.planeFace} 가운데에서 선택합니다. 처음에는 {t:opt.planeYZ}이 선택되어 있습니다.
- {t:opt.mirrorAt}는 평면을 놓을 자리입니다.
  - {t:opt.atSide}: 물체의 끝면(좌표가 큰 쪽)에 평면을 둡니다. 사본이 원본 바로 옆에 맞붙어 생깁니다.
  - {t:opt.atCenter}: 물체의 가운데를 지나는 평면입니다. 사본이 원본과 겹칩니다.
  - {t:opt.atOrigin}: 원점을 지나는 평면입니다.
- {t:opt.planeFace}을 선택하고 평평한 면을 클릭하면 그 면을 기준으로 바로 대칭 복사됩니다.
- {t:opt.keepSource}를 끄면 사본을 만들지 않고 원본을 뒤집습니다.
- 솔리드를 여러 개 선택하면 모두 같은 평면으로 한 번에 대칭됩니다.
- 적용하기 전에 결과가 반투명하게 미리 보입니다.
- 맞붙은 원본과 사본은 {c:union}로 하나의 물체로 합칠 수 있습니다 ([합치기](help:obj-union)).
- 명령줄에서는 \`mirror3d\`를 입력해도 됩니다.

## 자주 하는 실수

- 스케치는 대칭 복사되지 않습니다. 이 도구는 솔리드만 다룹니다. 스케치 선은 스케치 안에서 {c:mirror2d}을 씁니다 ([2D 수정](help:obj-sketch-edit)).
- {t:opt.planeFace}에서 원기둥 옆면 같은 곡면은 선택할 수 없습니다. 평평한 면을 클릭합니다.
- {t:opt.atCenter}에서는 좌우가 같은 물체의 사본이 원본과 정확히 겹쳐 생긴 것처럼 보이지 않습니다. 사본을 옆에 두려면 {t:opt.atSide}을 선택합니다.
- 같은 간격으로 여러 개가 필요하면 대칭 복사를 되풀이하지 말고 [패턴](help:obj-pattern)을 씁니다.
`,R=`---
id: obj-move
title: 이동·회전
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: 옮기, 옮기기, 이동, 움직, 돌리, 돌리기, 회전, 위치, 기울, 각도 바꾸, move, rotate, turn, position, tilt, 이동 회전, 핸들, 화살표, 고리, 기즈모, 기준점, 피벗, 90도 돌리기, 눕히기, 세우기, 거리 입력, 3dmove, 3drotate, pivot, gizmo
commands: move, pivotHere, rotX, rotY, rotZ
howto: move
context: move, pivotHere, rotX, rotY, rotZ
order: 310
---

## 무엇

선택한 물체를 화살표·네모·고리 핸들로 이동하고 회전하는 도구입니다. 거리와 각도를 숫자로 넣어 정확하게 이동할 수도 있습니다.

## 하는 순서

1. 물체를 클릭해 선택하고 {m:move} 단추를 누릅니다.
2. 화살표를 끌면 이동되고, 고리를 끌면 회전합니다.
3. 화살표를 끌지 않고 클릭하면 거리를 숫자로 입력할 수 있습니다.
4. 속성 창의 {t:panel.position}·{t:panel.rotation} 칸에 숫자를 넣어도 됩니다.

## 팁

- 핸들은 X 빨강, Y 초록, Z 파랑입니다. 화살표는 한 축 방향으로, 네모는 두 축이 이루는 평면 안에서 이동하고, 고리는 그 축을 중심으로 회전합니다.
- 화살표나 고리를 끈 뒤에도 옆에 값 상자가 열립니다. 숫자를 고쳐 넣으면 방금 끈 값을 대신합니다.
- 끄는 거리는 상태 표시줄의 격자 스냅에 맞춰집니다. {t:ux.snap.auto}에서는 보이는 격자 한 칸, {t:ux.snap.on}에서는 {t:grid.linear}에 맞춥니다. Shift를 누른 채 끌면 자유롭게 움직입니다: [격자·격자 스냅](help:snap-grid).
- 고리를 끌면 각도기 눈금이 나타납니다. 눈금 위에서 끌면 5° 단위로, 눈금 밖에서 끌면 상태 표시줄의 {t:grid.angular}에 맞춰 돌아갑니다. Shift를 누르면 자유롭게 돌아갑니다.
- 객체 스냅이 켜져 있으면 끄는 동안 다른 물체의 꼭짓점·중점 같은 점에 맞춰집니다 ([객체 스냅](help:snap-osnap)).

### 기준점

- 핸들은 처음에 선택한 물체들의 가운데에 놓입니다. 이 점이 이동·회전의 기준점입니다.
- {t:gizmo2.pivotBtn} 단추나 P 키를 누른 뒤 꼭짓점·모서리 중점·면 중심 같은 점을 클릭하면 그 점이 새 기준점이 됩니다. 모서리나 면을 클릭하면 핸들의 축이 그 방향에 맞춰집니다. Esc로 끝냅니다.
- Alt를 누르고 있는 동안에도 잠시 기준점을 바꿀 수 있습니다.
- {t:gizmo2.axisReset}는 돌아간 핸들의 축을 X·Y·Z 방향으로 되돌립니다.
- 면·모서리·꼭짓점을 하나 선택한 상태에서 오른쪽 클릭 메뉴의 {c:pivotHere}를 누르면 그 점(모서리는 중점, 면은 중심)을 기준점으로 {c:move}이 열립니다.
- {t:ac.advanced}(고급 메뉴에서는 처음부터 보임)에는 기준점을 클릭한 점으로 이동하는 {t:opt.pivotToPoint}, 원점으로 이동하는 {t:opt.pivotToOrigin}, 처음 상태로 되돌리는 {t:opt.pivotReset}가 있습니다. 앞의 두 단추는 물체도 함께 이동합니다.

### 숫자로 이동

- 도구 창의 {t:opt.moveBy} X·Y·Z와 {t:opt.rotateBy} X·Y·Z 칸은 지금 자리에서 더 이동할 거리와 각도입니다. 입력하면 바로 움직이고 칸은 다시 0이 됩니다.
- 속성 창의 {t:panel.position}·{t:panel.rotation} 칸의 값은 원점을 기준으로 한 값입니다. 물체를 하나만 선택했을 때 나옵니다.
- 숫자 칸에는 계산식을 쓸 수 있습니다. 예: \`25/2\` ([계산식](help:input-calc)).

### 90° 회전

- {m:rotX}, {c:rotY}, {c:rotZ}는 기준점(정하지 않았으면 선택한 물체들의 가운데)을 중심으로 바로 90° 회전합니다. 누를 때마다 90°씩 더 돕니다.

### 그 밖에

- 단축키는 {k:move}입니다. 명령줄에서는 \`m\`을 입력해도 됩니다.
- 도구가 열린 동안 Shift나 Ctrl을 누른 채 다른 물체를 클릭하면 함께 선택합니다.

## 자주 하는 실수

- 물체를 선택하지 않으면 핸들이 나오지 않습니다. 물체를 먼저 클릭합니다.
- 빈 곳을 클릭하면 도구가 끝납니다. 물체 위를 정확히 클릭합니다.
- 네모 핸들은 클릭해도 숫자를 넣을 수 없습니다. 정확한 거리는 화살표를 클릭해 넣습니다.
- 한 번 회전한 뒤에는 핸들도 함께 돌아가 있어 화살표가 비스듬한 방향을 가리킵니다. 월드 방향으로 이동하려면 {t:gizmo2.axisReset}를 누릅니다.
`,z=`---
id: obj-partial-delete
title: 부분 삭제와 나누기
분류: 3D 물체 도구
난이도: 중급
workspace: 공통
keywords: 부분 지우기, 선택 요소 삭제, 면 지우기, 면 삭제, 모서리 지우기, 꼭짓점 지우기, 점 지우기, 선 지우기, 모깎기 없애기, 구멍 메우기, 구멍 없애기, 일부만 지우기, 나누기, 면 나누기, 분할, 쪼개기, 부분삭제, delete face, delete edge, delete vertex, remove fillet, fill hole, partial delete, delete elements, deletesub
commands: deleteSub, delete, splitFace, addLine, addPoint, split, separate
context: deleteSub
order: 240
---

## 무엇

물체 전체가 아니라 선택한 면·모서리·꼭짓점만 삭제하는 기능입니다. 모깎기나 구멍 면을 삭제하면 그 자리가 주변 면으로 메워집니다. 이 쪽에는 면과 물체를 나누는 도구도 함께 정리합니다.

## 하는 순서

1. 물체를 클릭해 선택합니다.
2. 같은 물체를 한 번 더 클릭해 삭제할 면·모서리·꼭짓점을 선택합니다. Shift를 누른 채 클릭하면 같은 종류를 더 선택합니다.
3. {k:delete} 키를 누르거나, 물체 옆에 뜨는 작은 단추 줄에서 {c:deleteSub} 단추를 누릅니다.
4. 무엇을 했는지 알림으로 확인합니다.
5. 잘못 삭제했으면 {k:undo}로 되돌립니다.

## 팁

- 삭제한 것에 따라 결과가 다릅니다.

| 선택한 것 | 삭제한 결과 |
| --- | --- |
| {c:addLine}·{c:splitFace}로 넣은 선 | 나뉜 면이 다시 하나로 합쳐집니다 |
| {c:addPoint}로 넣은 점 | 모서리가 다시 이어집니다 |
| 모깎기·모따기·구멍·홈·돌기의 면 | 주변 면을 늘여 그 자리를 메우거나 깎아 냅니다 |
| 메울 수 없는 면 | 그 면만 빠져 열린 곳이 남습니다 |
| 원래 있던 꼭짓점·모서리 | 그 자리를 빼고 주변 면을 다시 만듭니다 |

- 열린 곳이 남아 두께 없는 면 물체가 되면 [두께 주기나 면 채우기](help:obj-tweak)로 다시 솔리드를 만듭니다.
- 삭제하고 나서 남는 것이 없으면 물체가 통째로 삭제됩니다.
- {k:delete} 키는 면·모서리·꼭짓점을 선택한 동안에만 그것을 삭제합니다. 물체 전체를 삭제하려면 물체만 선택한 상태에서 누릅니다. [삭제](help:start-delete)를 봅니다.
- Shift+오른쪽 클릭 메뉴의 {t:pf.title}에서 {t:pf.face}, {t:pf.edge}, {t:pf.vertex} 가운데 하나를 선택하면 한 번 클릭으로 그 종류만 바로 선택할 수 있습니다.
- 나누는 도구: 면을 나누려면 {c:addLine}와 {c:splitFace}([점·선·면 이동](help:obj-tweak)), 솔리드를 둘로 자르려면 [솔리드 분할](help:obj-split), 떨어진 덩어리를 따로 떼려면 [분리](help:obj-group)를 씁니다.

## 자주 하는 실수

- 삼각형 메시로 가져온 물체(STL 등)는 면·모서리·꼭짓점을 따로 삭제할 수 없습니다.
- 곡면에 닿은 꼭짓점·모서리는 삭제할 수 없습니다. 그 곡면을 선택해 삭제합니다.
- 선택한 것이 없으면 {t:err.sub-none}라는 알림만 뜹니다. 물체를 선택한 뒤 한 번 더 클릭해야 면·모서리·꼭짓점이 선택됩니다.
`,B=`---
id: obj-parts
title: 기계 요소
분류: 3D 물체 도구
난이도: 중급
workspace: 3D 물체
keywords: 볼트, 너트, 나사, 기어, 톱니, 톱니바퀴, 랙, 스프링, 용수철, 캠, 코일, 기계 요소, 기계 부품, bolt, nut, screw, gear, spring, cam, coil, rack, 평기어, 3D 나선, 나선, 알루미늄 프로파일, 프로파일, T 너트, T 볼트, 꺾쇠, 브래킷, 리니어 가이드, 레일, 철재 앵글, 앵글, ㄱ형강, 기계 요소 편집, 볼트 크기, 나사산, 모듈, 잇수, 기아, helix, profile, extrusion, t-nut, t-bolt, bracket, linear guide, steel angle, edit part
commands: gearPart, bolt, nut, rack, cam, spring, helix, alProfile, tNut, tBolt, cornerBracket, linearGuide, steelAngle, editPart
howto: parts
context: bolt, nut, gearPart, rack, cam, spring, helix, alProfile, tNut, tBolt, cornerBracket, linearGuide, steelAngle, editPart
order: 250
---

## 무엇

볼트, 너트, 평기어, 랙, 캠, 스프링, 3D 나선 같은 기계 부품과 알루미늄 프로파일, 리니어 가이드, 철재 앵글 같은 구조 부품을 규격에 맞는 크기로 바로 만들어 놓는 도구입니다.

## 하는 순서

1. {t:group.parts} 메뉴를 엽니다.
2. {c:bolt}, {c:nut}, {c:gearPart}, {c:spring} 가운데 하나를 누릅니다.
3. 창에서 값을 바꾸고 3D 화면에서 놓을 곳을 클릭합니다.

## 팁

- 적용은 놓을 곳을 정하는 것입니다. 부품이 커서를 따라다니므로 3D 화면에서 놓을 곳(면 위도 가능)을 클릭합니다. Enter를 누르면 커서가 있는 곳에 놓입니다. 하나를 놓으면 도구가 끝나고, 놓은 부품이 선택된 채 남습니다.
- 창 위쪽의 탭으로 다른 부품으로 바꿀 수 있습니다. {c:bolt}부터 {c:helix}까지가 한 창의 탭이고, {c:alProfile}부터 {c:steelAngle}까지가 다른 창의 탭입니다.
- {t:opt.out3d} 대신 {t:opt.out2d}을 선택하면 부품의 윤곽이 바닥에 스케치로 그려집니다.
- 볼트·너트는 {t:opt.threadSize}에서 M2~M24를 선택하거나 {t:opt.custom}으로 지름과 피치를 직접 넣습니다. 처음 값은 M6, 길이 20 mm인 육각 볼트입니다. 볼트 머리는 {t:opt.headHex}, {t:opt.headSocket}, {t:opt.headCross} 가운데에서 선택하고, {t:opt.realThread}를 끄면 나사산 없이 만들어집니다.
- 창의 {t:opt.fit} 부분을 펼치면 3D 프린팅용 {t:opt.printGap}(처음 0.15 mm)와 공차 등급을 정할 수 있습니다.
- 평기어는 모듈과 잇수로 정하거나({t:opt.byModule}), 피치원 지름이나 바깥지름으로 정합니다({t:opt.byDiameter}). {t:opt.pressureAngle}은 14.5°, 20°, 25° 가운데 선택합니다. 서로 맞물릴 기어와 {c:rack}은 모듈과 압력각을 같게 둡니다.
- 창 아래 표에 {t:opt.pitchDia}, {t:opt.outerDia} 같은 값이 나옵니다. 두 평기어의 중심 사이 거리는 두 피치원 지름을 더해 2로 나눈 값입니다.
- {c:cam}은 {t:opt.camDrop}, {t:opt.camPear}, {t:opt.camHeart}, {t:opt.camEccentric} 모양이 있고, {c:spring}은 {t:opt.outerDia}, {t:opt.wireDia}, {t:opt.freeLength}, {t:opt.coils}를 정합니다.
- {c:alProfile}은 2020~4590 규격에서 선택하고 길이만 정합니다(처음 200 mm). {t:opt.standUp}와 {t:opt.layDown} 가운데 놓는 방향을 선택합니다.
- 놓은 부품을 선택하면 물체 옆의 작은 단추 줄에 {c:editPart} 단추가 나옵니다. 규격과 크기를 다시 바꾸고 Enter를 누르면 적용됩니다.
- {t:group.parts} 메뉴는 {t:level.advanced} 메뉴에 있습니다. 메뉴가 보이지 않으면 [일반·고급 메뉴](help:start-level)를 봅니다.

## 자주 하는 실수

- 3D 화면을 클릭하거나 Enter를 누르기 전에 Esc를 누르면 부품이 놓이지 않습니다.
- {t:group.parts} 메뉴는 3D 물체에만 있습니다. 3D 건설에서 쓰려면 3D 물체에서 만든 뒤 [건설 물체로 보내기](help:more-send-to-building)를 합니다.
- 기어 두 개의 모듈이 다르면 이가 맞물리지 않습니다. 같은 모듈로 만듭니다.
`,V=`---
id: obj-pattern
title: 패턴
분류: 3D 물체 도구
난이도: 중급
workspace: 공통
keywords: 패턴, 여러 개, 줄지어, 줄줄이, 배열, 반복, 둥글게 늘어, 빙 둘러, 일정한 간격, array, pattern, repeat, copies, many, 직사각형 패턴, 원형 패턴, 경로 패턴, 사각 배열, 원형 배열, 원형배열, 경로 배열, 선 따라 복사, 돌려서 복사, 어레이, 패턴복사, 여러개, 똑같이 여러 개, arrayrect, arraypolar, arraypath, polar
commands: rectPattern, circPattern, pathPattern
howto: pattern
context: rectPattern, circPattern, pathPattern
order: 290
---

## 무엇

선택한 물체의 사본을 같은 간격으로 여러 개 만드는 도구입니다. {c:rectPattern}은 가로·세로·높이 방향으로, {c:circPattern}은 축을 중심으로 둥글게, {c:pathPattern}은 스케치 선을 따라 늘어놓습니다.

## 하는 순서

1. 물체를 선택하고 {m:rectPattern} 단추를 누릅니다 (둥글게 늘어놓으려면 {c:circPattern}).
2. 개수와 간격을 정하고 적용 (Enter)을 누릅니다.

## 팁

### 직사각형 패턴

- {t:opt.count} X·Y·Z는 원본을 포함한 개수입니다 (방향마다 1~100). 예: X를 4로 두면 원본 1개와 사본 3개가 생깁니다.
- {t:opt.spacing}은 이웃한 두 물체의 같은 점 사이 거리(중심 간격)입니다. 처음에는 물체 크기보다 조금 넓게 정해져 있습니다.
- X·Y를 함께 늘리면 바둑판처럼, Z를 늘리면 위로 쌓듯이 놓입니다.

### 원형 패턴

- {t:opt.count}는 원본을 포함해 2~360개입니다. {t:opt.totalAngle}가 360°이면 한 바퀴에 고르게 나뉘고, 그보다 작으면 원본에서 마지막 사본까지의 각도가 됩니다.
- {t:opt.patternCenter}은 처음에 {t:opt.atOrigin}(0, 0, 0)입니다. 미리 보기에서 회전 중심은 점과 ‘{t:opt.patternCenter}’ 글자, 십자와 회전축 선으로 보이고, 사본이 놓일 원은 선택한 물체의 가운데를 지나는 점선으로 그려집니다. 창에는 중심의 좌표가 나옵니다.
- 다른 곳을 중심으로 회전하려면 {t:opt.originPoint}을 선택하고 중심이 될 점을 클릭합니다. 객체 스냅이 켜져 있으면 원의 중심이나 모서리 끝점에 정확히 맞춰집니다. 점을 찍지 않고 Esc를 누르면 중심은 그대로입니다.
- 회전축은 처음에 Z축(바닥에 수직)입니다. {t:opt.axisXRot}·{t:opt.axisYRot}은 {t:ac.advanced}을 펼치면 나옵니다. 고급 메뉴에서는 처음부터 보입니다 ([일반·고급 메뉴](help:start-level)).

### 경로 패턴

- {m:pathPattern} 단추를 누르고 물체를 선택한 뒤, 사본이 따라갈 스케치 선을 클릭합니다. 끝점끼리 이어진 선은 한꺼번에 하나의 경로가 됩니다.
- {t:opt.count}(2~500개)만큼 경로 전체에 같은 간격으로 놓입니다. 닫힌 선이면 한 바퀴에 고르게 놓입니다.
- {t:opt.alignPath}을 켜 두면 사본이 선의 방향에 맞춰 돌아갑니다.
- 경로는 물체에 가까운 끝에서 시작합니다. 물체를 그 끝점 위에 두면 사본이 선 위에 바로 놓이고, 떨어져 있으면 그만큼 떨어진 채로 선을 따라갑니다.

### 함께 쓰는 기능

- {t:opt.linkedCopies}를 켜면 사본이 연동 복제로 만들어집니다 (직사각형·원형 패턴에서는 {t:ac.advanced} 안에 있습니다). 하나의 모양을 고치면 모두 함께 바뀝니다 ([복제](help:obj-duplicate)).
- 도구를 연 뒤에도 물체를 클릭하면 대상에 더해지고, 다시 클릭하면 빠집니다. 그룹은 통째로 들어갑니다.
- 적용하기 전에 사본이 미리 보입니다.
- 명령줄에서는 \`ar\`(직사각형), \`polar\`(원형), \`arraypath\`(경로)를 입력해도 됩니다.
- 같은 간격의 구멍 여러 개는 원기둥 하나를 패턴으로 늘어놓은 뒤 {c:subtract}로 한꺼번에 뺍니다 ([구멍](help:obj-hole)).
- 스케치 선만 반복하려면 스케치 안에서 {c:array2d}를 씁니다 ([2D 수정](help:obj-sketch-edit)).

## 자주 하는 실수

- 원형 패턴의 사본이 모두 한 자리에 겹칩니다. 선택한 물체의 가운데가 회전축 위에 있으면 제자리에서 돌기 때문이며, 이때 창에 안내가 나옵니다. 물체를 중심에서 떨어진 곳에 두거나 {t:opt.originPoint}으로 다른 중심을 정합니다.
- 직사각형 패턴에서 개수가 모두 1이면 사본이 없어 적용할 수 없습니다. 한 방향 이상을 2 이상으로 둡니다.
- 간격이 물체 크기보다 작으면 사본끼리 겹칩니다. 간격을 물체 크기보다 크게 넣습니다.
- 경로 패턴은 스케치 선만 경로로 씁니다. 3D 물체의 모서리는 클릭해도 경로가 되지 않습니다.
`,H=`---
id: obj-presspull
title: 밀고 당기기
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: 밀고 당기기, 밀기, 당기, 면 늘리, 면을 밀, 두껍게, 얇게, 늘리기, push, pull, presspull, thicker, 면 밀기, 면 당기기, 두께 바꾸기, 높이 바꾸기, 프레스풀, 밀고당기기, press pull, offset face
commands: presspull, tweak, extrude
howto: presspull
context: presspull
order: 210
---

## 무엇

솔리드의 면 하나를 면에 수직인 방향으로 밀거나 당겨 두께와 크기를 바꾸는 도구입니다. 바깥으로 당기면 살이 붙고, 안으로 밀면 그만큼 깎입니다.

## 하는 순서

1. {m:presspull} 단추를 누릅니다.
2. 움직일 면을 클릭합니다.
3. 화살표를 끌어 놓거나 거리를 입력하고 Enter를 누릅니다 (+ 바깥으로, − 안으로).

## 팁

- 처음 거리는 5 mm(3D 건설에서는 0.75 m)입니다. 창의 {t:opt.distance} 칸에 \`-3\`처럼 음수를 넣으면 안으로 들어갑니다.
- 곡면도 선택할 수 있습니다. 원기둥의 옆면을 당기면 면 전체가 고르게 바깥으로 나가 지름이 커집니다.
- 물체를 선택한 뒤 한 번 더 클릭해 평평한 면을 먼저 선택해 두고 {c:presspull} 단추를 누르면 그 면으로 바로 시작합니다.
- 화살표를 끌어 놓으면 바로 적용되고 도구가 닫힙니다. 놓은 뒤 잠시 보이는 값 칸에 숫자를 넣으면 방금 이동한 거리를 바꿀 수 있습니다.
- 3D 건설에서 다른 단계가 더해지지 않은 벽의 윗면을 위아래로 밀고 당기면 벽의 높이가 바뀌고, 벽은 벽 설정을 그대로 가진 채 남습니다.
- 면을 기울이거나 옆으로 이동하려면 [점·선·면 이동](help:obj-tweak)을 씁니다.

## 자주 하는 실수

- 거리 0은 쓸 수 없습니다. {t:msg.notZero}라는 알림이 뜨면 0이 아닌 값을 넣습니다.
- 한 번에 면 하나만 움직입니다. 다른 면을 클릭하면 선택한 면이 그 면으로 바뀝니다.
- 미리 보기가 오류로 나오면 적용되지 않습니다. 거리를 줄이거나 방향을 바꿔 봅니다.
`,U=`---
id: obj-primitives
title: 기본 도형
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: 원기둥, 실린더, 원통, 공, 구, 구슬, 원뿔, 고깔, 반구, 도넛, 토러스, 각기둥, 각뿔, 피라미드, 쐐기, cylinder, sphere, ball, cone, torus, donut, pyramid, prism, wedge, hemisphere, 기본 도형, 기본도형, 둥근 기둥, 동그라미 기둥, 원기퉁, 원뿔대, 고리, 링, 반지, 삼각기둥, 육각기둥, 사각뿔, 삼각뿔, 돔, 경사, 비탈, sph, cyl, tor, hemi, pyr, primitive, ring
commands: cylinder, sphere, cone, torus, wedge, prism, pyramid, hemisphere, box
howto: round
context: sphere, cylinder, cone, torus, wedge, prism, pyramid, hemisphere
order: 11
---

## 무엇

구·원기둥·원뿔·토러스·쐐기·각기둥·각뿔·반구를 클릭 한 번으로 놓는 기본 도형입니다. 크기는 놓기 전에 숫자로 입력하거나, 놓은 뒤 속성 창에서 바꿉니다. 직육면체는 [직육면체 만들기](help:obj-box)를 봅니다.

## 하는 순서

1. {m:cylinder}, {c:sphere}, {c:cone} 같은 기본 도형 단추를 누릅니다.
2. 3D 화면에서 놓을 곳을 클릭합니다.
3. 속성 창에서 반지름과 높이를 바꿉니다.
4. 명령 창에 cylinder 10 30 (반지름 높이)처럼 입력해도 됩니다.

## 팁

### 도형별 크기와 명령 입력

숫자는 아래 순서대로 입력합니다. 처음 크기는 3D 물체 기준이며, 3D 건설에서는 같은 비율로 3 m 기준입니다 (예: 구 반지름 1.5 m).

| 도형 | 크기 (입력 순서) | 명령 입력 예 | 처음 크기 |
|---|---|---|---|
| {c:sphere} | {t:param.r} | \`sphere 15\` | 반지름 10 mm |
| {c:cylinder} | {t:param.r} {t:param.h} | \`cylinder 10 30\` | 반지름 10 mm, 높이 20 mm |
| {c:cone} | {t:param.r} {t:param.h} | \`cone 10 30\` | 반지름 10 mm, 높이 20 mm |
| {c:torus} | {t:param.R} {t:param.r2} | \`torus 20 4\` | 고리 반지름 10 mm, 관 반지름 2.5 mm |
| {c:wedge} | {t:param.x} {t:param.y} {t:param.z} | \`wedge 30 20 10\` | 20 × 20 × 20 mm |
| {c:prism} | {t:param.r} {t:param.h} {t:param.n} | \`prism 10 30 6\` | 반지름 10 mm, 높이 20 mm, 6각 |
| {c:pyramid} | {t:param.r} {t:param.h} {t:param.n} | \`pyramid 10 30 4\` | 반지름 10 mm, 높이 20 mm, 4각 |
| {c:hemisphere} | {t:param.r} | \`hemisphere 15\` | 반지름 10 mm |
| {c:box} | {t:param.x} {t:param.y} {t:param.z} | \`box 30 20 10\` | 20 × 20 × 20 mm |

- 짧은 명령 이름도 됩니다: \`sph\`(구), \`cyl\`(원기둥), \`tor\`(토러스), \`we\`(쐐기), \`pyr\`(각뿔), \`hemi\`(반구).
- 명령 창에서 크기와 함께 입력하면 클릭 없이 바로 만들어지고, 이미 있는 물체들의 오른쪽 바닥에 놓입니다.
- 도구를 연 뒤 클릭하기 전에 \`10 30\`처럼 숫자만 입력하면 미리 보기 크기가 바뀌고, 클릭한 곳에 그 크기로 놓입니다. 빠진 숫자는 지금 크기를 그대로 씁니다.
- 숫자에는 단위(\`2cm\`)나 계산식(\`25/2\`)을 쓸 수 있습니다 ([계산식](help:input-calc)).
- 평평한 면 위를 클릭하면 도형이 그 면에 세워집니다. 예를 들어 상자 윗면을 클릭하면 원기둥이 그 위에 섭니다.
- 반구는 평평한 면이 아래로 가게 놓입니다. 토러스는 바닥에 눕힌 고리 모양입니다.
- 각기둥과 각뿔의 {t:param.n}는 3 ~ 64입니다. 변의 수를 64처럼 크게 하면 원기둥·원뿔에 가까워집니다.
- 3D 건설의 일반 메뉴에는 원기둥·쐐기·각기둥·각뿔·직육면체만 보이고, 구·원뿔·토러스·반구는 고급 메뉴에 있습니다. 명령으로는 언제나 쓸 수 있습니다 ([일반·고급 메뉴](help:start-level)).
- 놓은 뒤 손잡이를 끌어 크기를 바꾸려면 [스마트 스케일](help:obj-smart-scale)을 씁니다.

## 자주 하는 실수

- 원기둥·원뿔·구의 크기는 지름이 아니라 반지름입니다. 지름 20 mm 원기둥은 \`cylinder 10 30\`입니다.
- 원기둥은 반지름을 먼저, 높이를 나중에 입력합니다. 순서를 바꾸면 넓적한 원판이 됩니다.
- 토러스의 관 반지름은 고리 반지름보다 작아야 합니다. 더 크게 넣으면 받지 않습니다.
- 3D 물체에서 0.1 ~ 2000 mm, 3D 건설에서 0.01 ~ 500 m를 벗어난 값은 받지 않고 허용 범위를 알려 줍니다. 변의 수는 정수만 됩니다.
- 클릭 한 번에 도형 하나가 놓이고 도구가 끝납니다. 같은 도형을 더 놓으려면 Enter를 눌러 도구를 다시 엽니다.
`,W=`---
id: obj-revolve
title: 회전체
분류: 3D 물체 도구
난이도: 중급
workspace: 공통
keywords: 회전체, 돌려서, 돌려 만들, 컵, 병, 꽃병, 그릇, 팽이, 화분, revolve, lathe, vase, cup, bottle, bowl, 회전, 돌리기, 선반, 축, 회전축, 단면, 반쪽 단면, 체스 말, 폰, 접시, 링, 도자기, rev, revolution, spin
commands: revolve, xline, line
howto: revolve
context: revolve
order: 18
---

## 무엇

반쪽 단면을 축을 중심으로 회전해 컵·병·꽃병·팽이처럼 둥근 물체를 만듭니다. 도자기 물레나 선반으로 깎는 것과 같은 원리입니다.

## 하는 순서

1. 스케치에 반쪽 단면과 회전축이 될 선을 그리고 {c:exitSketch} 단추를 누릅니다.
2. {m:revolve} 단추를 누릅니다.
3. 단면 영역을 클릭하고, 회전축이 될 선을 클릭합니다.
4. 각도 화살표를 끌어 놓으면 바로 만들어집니다 (각도를 입력했으면 Enter).

## 팁

- 단면은 세로로 세운 평면(정면 쪽 면이나 [작업 평면](help:obj-workplane))에 그리면 결과가 바로 서 있는 모양이 됩니다. 바닥에 그리면 누운 모양이 됩니다.
- 축은 단면과 같은 스케치의 직선이나 {c:xline}입니다. 단면의 한 변을 축으로 써도 됩니다.
- 축 선을 따로 그리지 않으려면 창의 {t:opt.axisX}·{t:opt.axisY} 단추를 누릅니다. 스케치 원점을 지나는 축이 됩니다.
- {t:opt.angle}는 -360 ~ 360°이고 처음은 360°(한 바퀴)입니다. 180°면 반쪽만 만들어집니다.
- 단면이 축에 붙어 있으면 가운데가 찬 물체가, 축에서 떨어져 있으면 가운데가 빈 고리 모양이 됩니다.
- 결과는 [돌출](help:obj-extrude)과 같이 {t:op.new}, {t:op.union}, {t:op.subtract}, {t:op.intersect} 가운데 선택합니다.
- 새 물체로 만든 회전체는 선택한 뒤 속성 창의 {t:opt.angle} 칸에서 각도를 다시 바꿀 수 있습니다.
- 꽃병 만들기 예제는 [꽃병 예제](help:rec-vase-revolve)를 봅니다.

## 자주 하는 실수

- 단면이 축의 양쪽에 걸치면 만들어지지 않습니다 ({t:err.revolve-cross}). 단면을 축 한쪽에만 그립니다.
- 축은 직선이나 무한 보조선만 됩니다. 호나 곡선을 누르면 {t:msg.axisLineOnly}라는 안내가 나옵니다.
- 축 선은 단면과 같은 스케치에 있어야 합니다. 다른 스케치의 선은 축으로 쓸 수 없습니다.
- 각도는 0이 될 수 없습니다.
- 컵처럼 속이 빈 물체는 두께가 있는 반쪽 단면(ㄴ자 모양)을 그리거나, 꽉 찬 회전체를 만든 뒤 [속 비우기](help:obj-shell)를 씁니다.
`,G=`---
id: obj-section
title: 단면 보기
분류: 3D 물체 도구
난이도: 중급
workspace: 공통
keywords: 단면, 단면 보기, 잘라 보기, 속 보기, 안쪽 보기, 단면도, 절단면, 자른 면, 속이 보이게, 반 잘라 보기, 클리핑, 단면보기, 딘면, 건물 단면, 평면 보기, Alt+S, section, section view, cross section, clip, clipping plane, cut view, look inside
commands: sectionView, split, workPlane
context: sectionView
order: 270
---

## 무엇

평면으로 화면 속 물체를 잘라 그 안쪽을 보는 기능입니다. 보이는 모습만 잘라 보여 주고, 물체는 바뀌지 않습니다. 속 비우기나 구멍이 제대로 되었는지 확인할 때 씁니다.

## 하는 순서

1. {m:sectionView} 단추를 누릅니다.
2. 자를 방향을 {t:opt.planeXY}, {t:opt.planeYZ}, {t:opt.planeXZ} 가운데에서 선택하거나, {t:opt.sectionPick}을 선택하고 평평한 면이나 작업 평면을 클릭합니다.
3. 화살표를 끌거나 {t:opt.offset} 칸에 거리를 입력해 자르는 위치를 이동합니다.
4. 적용 (Enter)을 누르면 단면이 켜진 채로 창이 닫힙니다.
5. 다 본 뒤 화면에 뜬 {c:sectionView} 표시의 {t:btn.sectionOff} 단추를 누릅니다.

## 팁

- 처음에는 3D 물체와 3D 건설 모두 정면을 바라보는 세로 평면({t:opt.planeXZ})으로 자릅니다. 앞쪽 절반이 사라져 안쪽이 정면에서 보입니다.
- 반대쪽 절반을 보려면 창의 {t:dv.flip}를 켭니다.
- 물체를 선택한 채 시작하면 자르는 평면이 선택한 물체의 가운데를 지납니다. 아무것도 선택하지 않으면 보이는 물체 전체의 가운데를 지납니다.
- 물체를 선택한 뒤 한 번 더 클릭해 평평한 면을 선택해 두고 시작하면 그 면이 자르는 평면이 됩니다.
- 화면에 뜬 {c:sectionView} 표시의 {t:btn.sectionEdit} 단추를 누르면 창이 다시 열려 평면을 바꿀 수 있습니다.
- 도구 창이 닫힌 뒤에는 Esc를 눌러도 단면 보기가 꺼집니다. 자르는 평면이 보이는 물체를 하나도 지나지 않게 되면 저절로 꺼집니다.
- 실제로 물체를 둘로 나누려면 [솔리드 분할](help:obj-split)을 씁니다. 3D 건설에서 방 안을 위에서 보려면 [천장 보기·위 잘라 보기](help:arch-ceiling)도 있습니다.
- {c:sectionView}는 3D 물체와 3D 건설의 {t:level.advanced} 메뉴, {t:group.dims} 탭에 있습니다. [일반·고급 메뉴](help:start-level)를 봅니다. 단축키는 없고, 명령줄에 \`section\`이나 \`clip\`을 입력해도 열립니다. 3D 건설에서는 땅속의 터널이나 댐 속을 볼 때도 씁니다.
- 3D 건설에는 건물만 자르는 {m:archSection}({k:archSection})도 있습니다. 작업 범위의 건물을 세로로 잘라 옆에서 보며, 층 높이선과 잘린 바닥판·벽·지붕이 함께 보입니다. 한 층을 잘라 위에서 보는 {c:planView}({k:planView})와 천장을 올려다보는 {c:ceilingView}({k:ceilingView})도 있습니다: [천장 보기·위 잘라 보기](help:arch-ceiling).

## 자주 하는 실수

- 창의 {t:btn.close}나 Esc를 누르면 창이 닫히면서 단면도 꺼집니다. 단면을 켜 둔 채 닫으려면 적용 (Enter)을 누릅니다.
- 단면 보기는 보이는 모습만 자릅니다. 내보내기나 3D 프린팅할 물체는 잘리지 않습니다.
- {t:opt.sectionPick}에서 곡면을 클릭하면 {t:msg.flatFaceOnly}라는 알림이 뜹니다. 평평한 면이나 작업 평면을 클릭합니다.
`,K=`---
id: obj-select-similar
title: 동시 선택
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: 같은 것 선택, 같은 것, 같은 색, 같은 종류, 한꺼번에 선택, 한꺼번에 고르기, 동시 선택, 모두 선택, 비슷한, similar, same, select all like, 이어진 것, 연결된 것, 맞닿은 물체, 종류별 고르기, 같은 재질, 같은 그룹, 같은 층, 같은 선, 빠른 선택, 동시선택, selectsimilar, qselect
commands: selectSimilar
howto: selectSimilar
context: selectSimilar
order: 360
---

## 무엇

기준이 되는 물체나 2D 선과 같은 것을 한 번에 모두 선택하는 도구입니다. 종류·색·재질이 같은 것이나, 서로 이어진 것을 선택할 수 있습니다. 선택한 뒤 색을 바꾸거나 삭제하거나 숨기는 일을 한꺼번에 합니다.

## 하는 순서

1. {m:selectSimilar} 단추를 누릅니다.
2. 기준이 될 물체나 2D 선을 클릭합니다 (Shift: 여러 개).
3. 같다고 볼 기준(종류·색·재질 …)을 선택합니다.

## 팁

- 도구 창 위쪽에서 {t:sel.mode.similar}과 {t:sel.mode.connected} 가운데 하나를 선택합니다. {t:sel.mode.connected}은 끝점끼리 이어진 선이나 서로 맞닿은 물체를 모두 선택합니다.
- {t:sel.byTitle}은 3D 물체에서 {t:sel.by.kind}·{t:sel.by.color}·{t:sel.by.material}·{t:sel.by.group}이고, 3D 건설에서는 {t:sel.by.shape}과 {t:sel.by.level}이 더 있습니다. {t:sel.by.kind}는 벽·문, 직육면체·원기둥처럼 같은 종류이고, {t:sel.by.shape}은 같은 문 모델처럼 모델까지 같은 것입니다.
- 물체를 선택한 채로 도구를 열면 바로 같은 것이 선택됩니다. 다른 물체를 클릭하면 그 물체가 새 기준이 됩니다.
- 창 아래의 {t:sel.byKind} 목록에는 보이는 물체가 종류별로 개수와 함께 나옵니다. 한 줄을 누르면 그 종류가 모두 선택됩니다. 물체 창에도 같은 {t:sel.byKind} 목록이 있습니다.
- 스케치를 편집하는 동안에는 선을 선택합니다. 기준은 {t:sel.by.kind}(직선·호·원 …)나 {t:sel.by.size}(길이·반지름까지 같음)입니다.
- Enter나 오른쪽 클릭으로 도구를 끝내도 선택한 것은 그대로 남습니다. 이어서 [색·재질](help:obj-material)을 바꾸거나 Delete로 삭제합니다.
- 명령줄에서는 \`similar\` 또는 \`qselect\`를 입력해도 됩니다.
- {t:panel.objects} 창에서는 그룹 줄이나 3D 건설의 층·부재 종류({t:ot.k.wall}, {t:ot.k.slab} …) 줄을 클릭해 그 안의 것을 모두 선택할 수도 있습니다. 3D 건설에 놓은 내 물체의 줄을 오른쪽 클릭하면 {t:tc.mSameObject} 항목으로 같은 물체를 놓은 것을 모두 선택합니다.

## 자주 하는 실수

- 숨긴 물체는 선택하지 않습니다. 숨긴 것까지 선택하려면 먼저 다시 보이게 합니다 ([숨기기·보이기](help:start-hide)).
- {t:sel.by.color}은 색이 완전히 똑같은 것만 선택합니다. 비슷해 보여도 색 코드가 다르면 빠집니다.
- 그룹에 든 물체를 선택하면 그룹 전체가 함께 선택됩니다.
`,q=`---
id: obj-shell
title: 속 비우기
분류: 3D 물체 도구
난이도: 중급
workspace: 공통
keywords: 속, 속 비우기, 비우, 쉘, 껍데기, 상자 안, 그릇 만들, 빈 상자, 얇은 벽, shell, hollow, empty inside, 속비우기, 속 파기, 컵 만들기, 그릇, 벽 두께, 셸, 쉘 두께, hollow out, thin wall
commands: shell, subtract
howto: shell
context: shell
order: 200
---

## 무엇

솔리드의 선택한 면을 열고 속을 비워, 정한 두께의 벽만 남기는 도구입니다. 상자, 컵, 화분처럼 속이 빈 물건을 만들 때 씁니다.

## 하는 순서

1. {m:shell} 단추를 누릅니다.
2. 열어 둘 면(예: 윗면)을 클릭합니다.
3. 두께 화살표를 끌어 놓거나 벽 두께를 입력하고 Enter를 누릅니다.

## 팁

- 열어 둘 면은 여러 개 선택할 수 있습니다. 선택한 면을 한 번 더 클릭하면 빠지고, Ctrl+Z를 누르면 마지막에 선택한 면이 빠집니다.
- 벽은 안쪽으로 생깁니다. 바깥 크기는 그대로이고 속만 비워집니다.
- 처음 두께는 1.5 mm(3D 건설에서는 0.2 m)입니다. 창의 {t:opt.thickness} 칸에 값을 넣어도 됩니다.
- 두께 화살표는 마지막에 선택한 면의 맞은편 벽에 섭니다. 끌어 놓으면 바로 적용되고 도구가 닫힙니다.
- 물체를 선택한 뒤 한 번 더 클릭해 열 면을 먼저 선택해 두고 {c:shell}를 누르면 그 면으로 바로 시작합니다.
- 3D 건설에서는 {c:shell}가 {t:level.advanced} 메뉴에 있습니다. [일반·고급 메뉴](help:start-level)를 봅니다.
- 이 도구를 쓰는 예는 [속 비우기로 만드는 등](help:rec-shell-lamp) 예제에 있습니다.

## 자주 하는 실수

- 두께가 너무 두꺼우면 {t:err.shell-failed}라는 오류가 나고 적용되지 않습니다. 화살표는 물체의 가장 얇은 크기의 절반에서 멈춥니다.
- 열 면을 하나도 선택하지 않으면 적용할 수 없습니다. 이 도구는 적어도 한 면을 열어야 합니다.
- 다른 물체의 면을 클릭하면 앞에서 선택한 면이 풀리고 그 물체로 새로 시작합니다.
`,J=`---
id: obj-sketch-draw
title: 스케치 그리기 도구
분류: 3D 물체 도구
난이도: 중급
workspace: 공통
keywords: 선, 직선, 연속선, 폴리선, 폴리라인, 직사각형, 사각형, 네모, 원, 접선 원, 호, 반원, 타원, 다각형, 육각형, 오각형, 정다각형, 스플라인, 곡선, 펜, 무한 보조선, 보조선, 구성선, 점, 등분, 등분하기, 나누기, 도넛, 고리, 나선, 2D 나선, 소용돌이, 끝점 잇기, 닫기, 모서리 투영, 투영, 면 윤곽, 면 스케치, 스케치 종료, 그리기, 라인, 써클, line, polyline, pline, rectangle, rect, circle, ttr, arc, ellipse, polygon, spline, pen, xline, construction line, point, divide, donut, spiral, join, close, project, face to sketch, exit sketch, draw
commands: line, polyline, rect, circle, circleTTR, arc, ellipse, polygon, spline, xline, point2d, divide, donut, spiral, closeOpen, project, faceToSketch, exitSketch
context: line, polyline, rect, circle, circleTTR, arc, ellipse, polygon, spline, xline, point2d, divide, donut, spiral, closeOpen, project, faceToSketch, exitSketch
order: 14
---

## 무엇

스케치 평면에 선·사각형·원·호·곡선 같은 2D 모양을 그리는 AutoCAD식 도구들입니다. 그린 모양의 닫힌 영역은 [돌출](help:obj-extrude)·[회전체](help:obj-revolve)의 단면이 되고, 열린 선은 [경로 밀기](help:obj-sweep)의 경로가 됩니다.

## 하는 순서

1. {m:line} 같은 그리기 도구 단추를 누릅니다.
2. 편집 중인 스케치가 없으면 그릴 면·작업 평면·바닥을 먼저 클릭합니다. 이 클릭은 평면만 선택합니다.
3. 도구 창에서 그리는 방법과 크기를 선택합니다.
4. 점을 차례로 클릭하거나, 명령 창에 좌표·길이를 입력하고 Enter를 누릅니다.
5. 선처럼 이어 그리는 도구는 Enter로 한 줄을 끝내고, Esc로 도구를 닫습니다.
6. 다 그렸으면 {c:exitSketch}를 누릅니다.

## 팁

### 도구별 사용법

- {c:line}: 점을 차례로 클릭해 이어진 직선을 그립니다. 점이 셋 이상일 때 \`C\`를 입력하면 첫 점으로 닫히고, Enter를 누르면 그 줄이 끝나 새 줄을 시작합니다.
- {c:polyline}: 직선과 이어지는 호를 한 번에 그립니다. \`A\`를 입력하면 호, \`L\`을 입력하면 직선, \`C\`를 입력하면 닫힙니다. 직선 상태에서 누른 채 0.5초 기다렸다가 끌면 곡선 점이 됩니다 ([곡선 편집](help:obj-curve-edit)).
- {c:rect}: 두 모서리를 클릭합니다. {t:opt.fromCenter}를 켜면 첫 클릭이 중심입니다. 창의 {t:opt.sideW}·{t:opt.sideH}에 크기를 넣거나, 첫 모서리 뒤에 \`@30,20\`처럼 입력합니다.
- {c:circle}: {t:opt.centerRadius}, {t:opt.twoPoint}, {t:opt.threePoint}, {t:opt.ttr} 가운데 선택합니다. 중심을 찍은 뒤 숫자를 입력하면 그 반지름으로 그려집니다.
- {c:circleTTR}: 원 창에서 {t:opt.ttr} 방식을 선택한 것과 같습니다. 원이 닿을 선이나 원 두 개를 차례로 클릭하고, 반지름은 창에서 정합니다.
- {c:arc}: {t:opt.threePoint}(시작점 → 지나는 점 → 끝점) 또는 {t:opt.centerStartEnd} 방식으로 그립니다.
- {c:ellipse}: 중심 → 한 축의 끝 → 다른 축 길이 순서로 클릭합니다.
- {c:polygon}: 중심과 반지름을 클릭합니다. {t:opt.sides}는 3 ~ 64(처음 6)이고 {t:opt.inscribed}·{t:opt.circumscribed} 가운데 선택합니다. 중심을 찍기 전에 \`8\`처럼 정수를 입력해도 변의 수가 바뀝니다.
- {c:spline}: {t:curves.splinePen}(처음 방식)은 클릭하면 꺾인 점, 누른 채 끌면 부드러운 곡선 점입니다. {t:curves.splineThrough}는 찍은 점을 부드럽게 지나는 곡선입니다. Enter로 끝냅니다.
- {c:xline}: 끝없이 뻗는 보조선입니다. {t:opt.twoPoint} 방식은 첫 점을 지나는 선을 클릭할 때마다 하나씩 더 그리고, {t:opt.horizontal}·{t:opt.vertical}·{t:opt.angle}도 선택할 수 있습니다. [회전체](help:obj-revolve)의 축으로도 씁니다.
- {c:point2d}: 클릭한 곳마다 점을 찍습니다.
- {c:divide}: 선을 클릭하면 같은 길이의 조각으로 자릅니다. {t:opt.segments}(처음 5)와 {t:opt.dividePoints}를 정합니다. 선을 미리 여러 개 선택하고 Enter를 누르면 한꺼번에 나눕니다.
- {c:donut}: {t:opt.innerDia} 칸과 {t:opt.outerDia} 칸을 정하고 중심을 클릭하면 원 두 개로 된 고리가 생깁니다. 안지름이 0이면 원 하나입니다.
- {c:spiral}: 중심 → 바깥 끝 순서로 클릭합니다. {t:opt.turns}(처음 3), {t:opt.startRadius}, {t:opt.ccw}·{t:opt.cw}를 선택합니다.
- {c:closeOpen}: 편집 중이거나 선택한 스케치에서 거의 닿은 끝을 붙이고, 열린 줄마다 닫는 선을 넣어 닫힌 영역을 만듭니다.
- {c:project}: 스케치 편집 중에 물체의 모서리나 면을 클릭하면 그 윤곽이 스케치 평면에 이동해 그려집니다. 정면으로 보이는 원과 호는 원·호로 남아 치수를 넣을 수 있습니다.
- {c:faceToSketch}: 물체를 클릭한 뒤 평평한 면을 한 번 더 클릭해 선택하고 실행하면, 그 면의 윤곽으로 새 스케치를 만듭니다. 면을 선택하면 나오는 작은 막대에 있습니다.
- {c:exitSketch}: 스케치 편집을 끝냅니다. 화면 위 {t:status.sketchEditing} 막대의 단추와 같습니다.
- 글자는 {c:text}로 씁니다 ([문자](help:obj-text)).

### 함께 쓰는 기능

- 점 대신 명령 창에 \`x,y\`(절대 좌표), \`@dx,dy\`(앞 점에서), \`길이<각도\`, 숫자 하나(커서 쪽으로 그 길이)를 입력할 수 있습니다 ([좌표·길이 입력](help:input-coords)).
- {k:osnap} [객체 스냅](help:snap-osnap), {k:snap} [격자 스냅](help:snap-grid), {k:ortho} [수평·수직 고정](help:snap-ortho)이 점 찍기를 돕습니다.
- 그리는 중 Ctrl+Z는 마지막 점만 삭제합니다. 화면을 끌지 않고 오른쪽 클릭하면 Enter와 같습니다.
- 사각형·원처럼 한 번에 끝나는 모양은 만들어지면 도구가 닫힙니다. 선·폴리선·무한 보조선·점은 Esc를 누를 때까지 이어집니다.
- 길이는 3D 물체에서 mm, 3D 건설에서 m입니다. 3D 건설의 스케치 메뉴에는 등분하기·도넛·2D 나선이 없지만 명령으로는 쓸 수 있습니다.

## 자주 하는 실수

- 선 끝이 정확히 만나지 않으면 닫힌 영역이 생기지 않습니다. 객체 스냅으로 끝점을 잡거나 {c:closeOpen} 단추로 닫습니다.
- {c:project} 도구는 스케치 편집 중에만 됩니다. 스케치를 두 번 클릭해 편집을 시작한 뒤 씁니다.
- 굽은 면 위에는 그릴 수 없습니다. {t:plane3.auto}에서 굽은 면을 누르면 세 점으로 평면을 정하는 방식이 시작됩니다 ([세 점 평면](help:obj-sketch-plane3)).
- 평면이 거의 옆에서 보이면 점이 찍히지 않습니다. {c:faceView}로 평면을 정면에서 봅니다.
- 그리기 도구로 만든 스케치는 도구를 닫으면 편집도 끝납니다. 계속 그리려면 {c:newSketch}로 시작하거나 {c:editSketch} 단추를 누릅니다.
`,Y=`---
id: obj-sketch-edit
title: 2D 수정
분류: 3D 물체 도구
난이도: 중급
workspace: 공통
keywords: 2D 수정, 스케치 편집, 스케치 고치기, 자르기, 트림, 연장, 늘리기, 간격 띄우기, 오프셋, 평행선, 선 모깎기, 둥근 모서리, 선 모따기, 이동, 옮기기, 선 복사, 복사, 회전, 돌리기, 확대 축소, 크기, 선 대칭, 대칭, 미러, 패턴 복사, 배열, 어레이, 늘이고 줄이기, 신축, 끊기, 나누기, 길이 조정, 길이, edit sketch, trim, extend, offset, fillet, chamfer, move, copy, rotate, scale, mirror, array, stretch, break, lengthen, 트림하기, 오프셋하기
commands: editSketch, trim, extend, offset, fillet2d, chamfer2d, move2d, copy2d, rotate2d, scale2d, mirror2d, array2d, stretch, breakLine, lengthen
context: editSketch, trim, extend, offset, fillet2d, chamfer2d, move2d, copy2d, rotate2d, scale2d, mirror2d, array2d, stretch, breakLine, lengthen
order: 15
---

## 무엇

스케치 안의 선을 자르고, 늘이고, 평행하게 띄우고, 이동하고, 회전하는 AutoCAD식 2D 수정 도구들입니다. 스케치 편집 중이 아니어도 선을 클릭하면 그 스케치가 열려 고쳐집니다.

## 하는 순서

1. 고칠 스케치를 두 번 클릭하거나, {m:editSketch} 단추를 누르고 스케치를 클릭합니다.
2. {m:trim} 같은 2D 수정 도구 단추를 누릅니다.
3. 안내에 따라 선이나 점을 클릭합니다.
4. 간격·반지름·각도·배율은 도구 창의 칸이나 명령 창에 숫자로 입력합니다.
5. Esc로 도구를 닫고, 다 고쳤으면 {c:exitSketch}를 누릅니다.

## 팁

### 도구별 사용법

- {c:editSketch}: 선택한 스케치(없으면 다음에 클릭한 스케치)를 편집합니다. {c:exitSketch}나 Esc를 누를 때까지 이어집니다.
- {c:trim}: 잘라 낼 부분을 클릭하면 교차점 사이의 조각이 삭제됩니다. 다른 선과 만나지 않는 선은 통째로 삭제됩니다.
- {c:extend}: 선의 늘릴 끝 쪽을 클릭하면 다음 선까지 늘어납니다. 직선과 호에만 됩니다.
- {c:offset}: 간격을 숫자로 입력하고(3D 물체에서 처음 2 mm), 선을 클릭한 뒤 띄울 쪽을 클릭합니다. {t:opt.offsetChain} 옵션을 켜 두면 이어진 선 전체가 모서리를 맞춰 함께 띄워집니다.
- {c:fillet2d}·{c:chamfer2d}: 반지름이나 거리를 입력하고(처음 2 mm) 두 선을 차례로 클릭합니다. 직선과 호에 되고, 선 모깎기는 원에도 됩니다.
- {c:move2d}·{c:copy2d}: 선을 클릭해 선택하고 Enter → 기준점 → 두 번째 점을 클릭합니다. 선택한 뒤 나오는 화살표 손잡이를 끌어도 됩니다. 선 복사는 기준점을 바꿔 가며 계속 복사합니다.
- {c:rotate2d}: 선을 선택하고 기준점을 찍은 뒤 각도를 입력하거나 고리 손잡이를 끕니다. 각도 스냅이 켜져 있으면 마우스로 회전할 때 그 단계에 맞춰지고, Shift를 누르면 자유롭게 돕니다.
- {c:scale2d}: 선을 선택하고 기준점을 찍은 뒤 {t:opt.factor} 값을 입력합니다 (0.001 ~ 1000).
- {c:mirror2d}: 선을 선택하고 대칭선의 두 점을 클릭합니다. {t:opt.keepSource}를 끄면 원본이 없어집니다.
- {c:array2d}: {t:tab.arrayRect}·{t:tab.arrayPolar}·{t:tab.arrayPath} 가운데 선택합니다. 선을 선택한 뒤 원형은 회전 중심, 경로는 경로가 될 선을 클릭하고 Enter를 누릅니다.
- {c:stretch}: 걸침 창의 두 구석 → 기준점 → 두 번째 점을 클릭합니다. 창 안에 든 끝점만 이동되어 모양이 늘거나 줄어듭니다.
- {c:breakLine}: 선 위의 두 점을 클릭하면 그 사이가 삭제됩니다. {t:opt.breakAtPoint}를 켜면 한 점에서 둘로 나뉩니다.
- {c:lengthen}: {t:opt.lenDelta}·{t:opt.lenTotal}·{t:opt.lenPercent} 가운데 선택하고 바꿀 끝 근처를 클릭합니다.

### 함께 쓰는 기능

- 도구를 열기 전에 선을 선택해 두면 그 선에 바로 적용됩니다. 이동·복사·회전·배율·대칭은 기준점부터 시작합니다.
- 스케치 편집 중에 선을 선택하면 나오는 작은 막대에 {c:move2d}·{c:copy2d}·{c:offset} 같은 도구가 있습니다.
- 도구 안에서 Ctrl+Z는 마지막으로 선택한 것이나 찍은 점만 되돌립니다.
- 숫자 칸에는 계산식을 쓸 수 있습니다 ([계산식](help:input-calc)). 정확한 길이는 [2D 치수](help:obj-dimension)로 맞춥니다.
- 점과 핸들을 끌어 곡선을 고치려면 [곡선 편집](help:obj-curve-edit)을 씁니다.

## 자주 하는 실수

- 2D 수정은 스케치 선에만 됩니다. 3D 물체는 [이동·회전](help:obj-move), [대칭 복사](help:obj-mirror), [패턴](help:obj-pattern)을 씁니다.
- 닫힌 곡선(원)은 다른 선과 두 곳 이상에서 만나야 자를 수 있습니다.
- 늘릴 방향에 다른 선이 없으면 {c:extend} 도구로 늘어나지 않습니다. 이때는 {c:lengthen}으로 길이를 정합니다.
- 스플라인 같은 곡선은 {c:lengthen}으로 줄이기만 됩니다.
- 고치다가 선이 없어지면 그 선을 재던 치수도 삭제되고 몇 개가 삭제되었는지 알려 줍니다. 필요하면 치수를 다시 넣습니다.
`,X=`---
id: obj-sketch-plane3
title: 세 점으로 비스듬한 평면에 스케치하기
분류: 3D 물체 도구
난이도: 중급
workspace: 공통
keywords: 세 점, 세점, 점 세 개, 비스듬한 면, 비스듬한 평면, 기울어진 평면, 경사면, 여러 면, 여러 판, 걸쳐, 꼭짓점 사이, three points, slanted plane, tilted plane, across faces, plane through points, 3점, 삼점, 세 점 평면, 기울어진 스케치, 경사 스케치, 비스듬히 자르기, 대각선 면, 사선 면, 스케치 평면, 투영됨, 면 보기
commands: newSketch, line, polyline, faceView
howto: sketchThreePoints
order: 13
---

## 무엇

서로 다른 면이나 물체 위의 점 세 개로 평면을 정하고, 그 평면에 스케치합니다. 상자 모서리를 비스듬히 잘라 낼 면이나 여러 판에 걸친 경사면처럼, 이미 있는 면에 없는 평면이 필요할 때 씁니다.

## 하는 순서

1. {m:newSketch} 단추를 누르고 창에서 {t:plane3.three}를 선택합니다.
2. 평면이 지날 점 세 개(꼭짓점·모서리 중점·면 위 점)를 차례로 클릭합니다. 서로 다른 면이나 물체여도 됩니다.
3. 세 번째 점을 찍으면 그 평면에 스케치가 생깁니다. {c:line}이나 {c:polyline}으로 닫힌 모양을 그립니다.
4. 그리기 도구로 바로 꼭짓점을 눌러 시작해도 처음 세 점으로 평면이 정해지고, 그 세 점부터 이어서 그려집니다.
5. 평면이 너무 비스듬히 보여 점이 안 찍히면 {c:faceView}로 평면을 정면에서 봅니다.

## 팁

- 점을 찍는 동안 찍은 점, 점을 잇는 선, 다음 점이 만들 평면이 반투명 사각형으로 보이고, 커서 옆에 몇 번째 점인지(예: 2/3) 나옵니다.
- 평면의 x축은 첫 점에서 둘째 점 쪽이고, 평면의 앞쪽은 화면을 향합니다. 그래서 이 스케치를 돌출하면 보는 쪽으로 나옵니다.
- 세 점이 모두 한 물체의 평평한 면 위에 있으면 스케치가 그 물체에 붙어, 돌출할 때 그 물체와 합쳐집니다.
- 편집 중인 스케치가 없을 때 그리기 도구 창 맨 위의 {t:plane3.choice}에서 평면 선택하는 방식을 정합니다. {t:plane3.auto} 방식은 면 안쪽을 누르면 그 면에 그리고, 꼭짓점·모서리 중점·원 중심이나 굽은 면을 누르면 세 점 방식으로 바뀝니다.
- {t:plane3.face} 방식은 늘 처음 누른 평평한 면(빈 곳이면 바닥)에 그리고, {t:plane3.three} 방식은 늘 점 세 개를 먼저 찍습니다.
- 세 점은 그리기의 첫 점이 됩니다. 선·폴리선·스플라인은 처음 세 꼭짓점, 호와 원은 세 점을 지나는 호·원, 타원은 중심·축 끝·다른 축, 사각형은 첫 두 점이 한 변이고 셋째 점이 폭입니다.
- 두 점으로 끝나는 모양(사각형·원·다각형)은 {t:plane3.auto}에서 두 점이 클릭한 평평한 면 하나 위에 있으면 그 면으로 바로 정해집니다.
- 스케치 편집 중에 다른 면의 꼭짓점을 잡으면 점이 스케치 평면으로 수직으로 이동되고 {t:plane3.projected} 표시가 붙습니다.
- 잘못 찍은 점은 Ctrl+Z로 하나씩 삭제합니다.
- 기존 면과 나란한 평면이면 [작업 평면](help:obj-workplane)이 더 간단합니다. 비스듬한 면으로 물체를 자르려면 이 스케치를 [돌출](help:obj-extrude)에서 빼기로 쓰거나 [솔리드 분할](help:obj-split)을 씁니다.

## 자주 하는 실수

- 세 점이 한 직선 위에 있으면 평면이 정해지지 않아 세 번째 점을 받지 않습니다. 다른 점을 찍습니다.
- {c:newSketch}에서 점이 셋이 되기 전에 Enter를 누르면 점을 하나 더 찍으라는 안내가 나옵니다.
- 세 점으로 평면을 정해도 화면은 그대로입니다. 평면을 정면에서 보려면 {c:faceView}를 씁니다.
- 꼭짓점에서 선을 시작하면 세 번째 점까지 스케치가 생기지 않습니다. 그 면에 바로 그리려면 {t:plane3.face} 방식을 선택하거나 면 안쪽을 누릅니다.
`,Z=`---
id: obj-sketch
title: 스케치를 그려 입체로 만들기
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: 스케치, 자유 스케치, 새 스케치, 그려서, 그리기, 그린, 돌출, 입체로, 두께 주기, 평면 도형, 내 모양, sketch, free sketch, draw, extrude, profile, shape, 2D, 2d 그리기, 평면도형, 도면 그리기, 스캐치, 스케지, 단면, 프로파일, 닫힌 영역, 영역, 바닥에 그리기, 면에 그리기, 스케치 종료, 스케치 편집
commands: newSketch, extrude, exitSketch, editSketch, line, rect, circle
howto: sketchExtrude
context: newSketch
order: 12
---

## 무엇

면이나 바닥 위에 2D 스케치(선·사각형·원)를 그리고, 그 닫힌 영역에 두께를 주어 입체로 만드는 기본 흐름입니다. 상자와 원기둥만으로 만들기 어려운 ㄱ자·별·톱니 같은 모양을 만들 때 씁니다.

## 하는 순서

1. {m:newSketch} 단추를 누르고 그릴 면이나 빈 곳(바닥)을 클릭합니다.
2. {c:line}, {c:rect}, {c:circle} 단추로 닫힌 모양을 그립니다.
3. {c:exitSketch} 단추를 누릅니다.
4. {m:extrude} 단추를 누르고 닫힌 영역을 클릭합니다.
5. 화살표를 끌어 놓으면 바로 만들어집니다 (높이를 입력했으면 Enter).

## 팁

- 평평한 면을 한 번 클릭하면 바로 그 면에 스케치가 시작되고, 화면이 그 면을 정면으로 봅니다. 빈 곳을 클릭하면 바닥에, [작업 평면](help:obj-workplane)을 클릭하면 그 평면에 그립니다.
- 면을 먼저 선택하거나 작업 평면을 선택한 채 {c:newSketch}를 누르면 클릭 없이 바로 시작됩니다.
- 같은 평면에 있는 면 여러 개는 Shift를 누른 채 클릭해 모은 뒤 {t:btn.sketchHere}를 누릅니다. 그러면 닫힌 영역이 그 면들 안에서만 생깁니다.
- 스케치 편집 중에는 화면 위에 {t:status.sketchEditing} 막대가 보이고, 그 막대의 단추가 {c:exitSketch}입니다. 빈 곳을 두 번 클릭하거나 Esc를 눌러도 스케치를 빠져나옵니다.
- {c:newSketch} 없이 {c:line} 같은 그리기 도구를 바로 눌러도 됩니다. 첫 클릭이 그릴 평면을 선택하고, 다음 클릭부터 그려집니다. 이렇게 만든 스케치는 도구를 닫으면 함께 닫힙니다.
- 스케치 편집 중에 바로 {c:extrude} 단추를 눌러도 됩니다. 스케치가 닫히고 그 닫힌 영역이 바로 선택됩니다. 영역이 여러 개면 안쪽 구멍을 뺀 영역이 모두 선택되고, 영역을 클릭하면 빼거나 다시 넣습니다.
- 정확한 크기는 그리면서 길이를 입력하거나([좌표·길이 입력](help:input-coords)), 다 그린 뒤 [2D 치수](help:obj-dimension)로 맞춥니다.
- 다 그린 스케치를 다시 고치려면 스케치를 두 번 클릭하거나 {c:editSketch} 단추를 누릅니다 ([2D 수정](help:obj-sketch-edit)).
- 그리기 도구는 [스케치 그리기 도구](help:obj-sketch-draw), 돌출의 방향·빼기 같은 옵션은 [돌출](help:obj-extrude)을 봅니다. 단면을 회전하면 [회전체](help:obj-revolve)가 됩니다.

## 자주 하는 실수

- 선 끝이 서로 닿지 않으면 닫힌 영역이 생기지 않아 돌출이 되지 않습니다. 끝점을 [객체 스냅](help:snap-osnap)으로 정확히 잇거나 {c:closeOpen} 단추로 닫습니다.
- 굽은 면(원기둥 옆면)에는 스케치할 수 없습니다. 평평한 면이나 [작업 평면](help:obj-workplane)을 선택합니다.
- 물체 면 위에 그린 스케치를 돌출하면 새 물체가 아니라 그 물체에 합쳐집니다. 따로 두려면 [돌출](help:obj-extrude) 창에서 {t:op.new}를 선택합니다.
- 그리기 도구로 꼭짓점이나 모서리를 먼저 누르면 세 점으로 평면을 정하는 방식이 시작됩니다. 면 안쪽을 누르면 그 면에 바로 그립니다 ([세 점 평면](help:obj-sketch-plane3)).
`,Q=`---
id: obj-smart-scale
title: 스마트 스케일
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: 크기, 크게, 작게, 키우, 줄이, 늘이, 사이즈, 스마트 스케일, 배율, 비율, size, scale, resize, bigger, smaller, stretch, 크기 조절, 크기 바꾸기, 늘리기, 줄이기, 확대, 축소, 비율 유지, 목표 크기, 스마트스케일, 스케일, 손잡이, ss, smartscale
commands: smartScale, scale
howto: smartScale
context: smartScale, scale
order: 340
---

## 무엇

물체 둘레의 손잡이를 끌어 크기를 바꾸는 도구입니다. 한 방향만 늘이거나, 바닥 모서리를 끌어 가로·세로를 함께 바꾸거나, 배율과 목표 크기를 숫자로 정할 수 있습니다.

## 하는 순서

1. 물체를 클릭해 선택한 뒤 {m:smartScale} 단추를 누릅니다.
2. 노란 손잡이를 끌면 그 면만, 바닥 모서리의 흰 손잡이를 끌면 그 모서리에 만나는 두 면이 함께 움직입니다. 위의 손잡이는 높이를 바꿉니다.
3. 정확한 배율이나 목표 크기는 {m:scale}에서 숫자로 정합니다.

## 팁

- 노란 손잡이는 바닥 네 변의 가운데와 윗면에 있습니다. 노란 손잡이를 끌면 반대쪽 면은 그대로 있고 그 면만 움직입니다.
- 흰 모서리 손잡이를 끌면 맞은편 모서리와 바닥은 그대로 있고 가로·세로가 함께 바뀝니다.
- 물체 둘레의 상자에 적힌 세 길이를 클릭하면 그 크기를 숫자로 바로 넣을 수 있습니다.
- 도구 창의 {t:opt.factor}은 세 방향을 같은 비율로 키우거나 줄입니다 (0.01~100배). {t:opt.sizeTo} X·Y·Z 칸에는 목표 크기를 넣습니다. 숫자 칸에는 계산식도 쓸 수 있습니다 ([계산식](help:input-calc)).
- {t:opt.keepRatio}를 켜면 손잡이를 끌거나 크기를 넣을 때 세 방향이 같은 비율로 바뀝니다.
- 끌 때마다 앞의 크기에 이어서 바뀝니다. Ctrl+Z는 직전 끌기 한 번을 취소합니다.
- 적용 (Enter)을 누르면 크기가 확정됩니다. 빈 곳을 클릭하거나 Esc를 눌러도 바꾼 크기가 적용된 뒤 도구가 끝납니다.
- 직육면체·원기둥 같은 기본 도형은 크기 값 자체가 바뀌어, 나중에 속성 창에서 다시 고칠 수 있습니다. 구를 한 방향으로만 늘이면 타원체가 됩니다.
- STL 같은 메시 물체는 세 방향을 같은 비율로만 바꿀 수 있습니다.
- 3D 건설의 문·창·가구 같은 물체는 정해진 범위 안에서만 크기가 바뀝니다.
- {c:scale}은 물체를 하나 선택하면 스마트 스케일을 엽니다 (단축키 {k:scale}). 물체나 스케치를 여러 개 선택하면 전체의 가운데를 기준으로 같은 배율로 키우거나 줄이며, {t:opt.factor}이나 {t:opt.sizeTo}로 정합니다.
- 명령줄에서는 \`ss\`를 입력해도 됩니다.

## 자주 하는 실수

- 손잡이가 나오지 않습니다. 물체를 먼저 선택합니다. 도구가 열린 뒤 다른 물체를 클릭하면 그 물체로 바뀝니다.
- 노란 손잡이로 키웠더니 물체가 한쪽으로만 커졌습니다. 반대쪽은 그대로 두는 것이 정상입니다. 가운데를 기준으로 키우려면 {t:opt.factor}을 씁니다.
- 스마트 스케일은 한 번에 물체 하나만 다룹니다. 여러 물체를 함께 키우려면 {c:scale}을 씁니다.
- 크기를 바꾸면 구멍 지름과 벽 두께도 같은 비율로 바뀝니다. 나사 구멍처럼 크기가 정해진 부분은 크기를 바꾼 뒤 다시 확인합니다 ([측정](help:obj-measure)).
`,$=`---
id: obj-split
title: 솔리드 분할
분류: 3D 물체 도구
난이도: 중급
workspace: 공통
keywords: 자르, 자르기, 잘라, 나누, 반으로, 쪼개, 두 조각, 반쪽, split, slice, cut in half, divide, 솔리드 분할, 분할, 반 자르기, 두 개로 나누기, 평면으로 자르기, 슬라이스, 솔리드 나누기, 절단, 분활, cut
commands: split, separate, splitFace, sectionView
howto: split
context: split
order: 230
---

## 무엇

솔리드 하나를 평면으로 잘라 따로 움직일 수 있는 두 물체로 나누는 도구입니다. 큰 모델을 3D 프린터에 맞게 나누거나 반쪽만 쓸 때 씁니다.

## 하는 순서

1. {m:split} 단추를 누릅니다.
2. 나눌 솔리드를 클릭합니다.
3. 분할 평면을 선택하고 적용 (Enter)을 누릅니다.

## 팁

- {t:split.pick}에서 선택하는 분할 평면은 다섯 가지입니다.
  - {t:opt.planeXY}, {t:opt.planeYZ}, {t:opt.planeXZ}: 솔리드의 가운데를 지나는 평면입니다. 화살표를 끌거나 {t:opt.offset} 칸에 거리를 넣어 평면을 이동합니다.
  - {t:opt.planeFace}: 다른 물체의 평평한 면이나 [작업 평면](help:obj-workplane)을 클릭하면 그 평면으로 바로 나뉩니다.
  - {t:opt.planeSketch}: 자를 선이 그려진 스케치를 클릭하면 그 선을 따라 바로 나뉩니다. 선이 여러 개면 세 조각 이상으로도 나뉩니다.
- {t:split.draw}를 선택하면 평면을 그 자리에서 정합니다. {t:split.byLine}는 면이나 바닥에 선을 그어 그 면에 수직으로 자르고, {t:split.by3}은 세 점을 지나는 평면, {t:split.byPoint}은 찍은 점을 지나며 선택한 방향과 나란한 평면으로 자릅니다. Ctrl+Z를 누르면 마지막에 찍은 점이 삭제됩니다.
- 나눈 뒤 원래 물체에는 조각 하나가 남고, 나머지는 원래 이름 뒤에 (2)가 붙은 새 물체가 됩니다. 세 조각 이상이면 새 물체에 여러 조각이 함께 들어가므로 [분리](help:obj-group)로 다시 나눕니다.
- 모양을 자르지 않고 속만 보려면 [단면 보기](help:obj-section)를 씁니다. 면만 나누려면 [면 나누기](help:obj-tweak)를 씁니다.

## 자주 하는 실수

- 평면이 솔리드를 지나지 않으면 {t:err.split-miss}라는 알림이 나오고 적용되지 않습니다. 평면을 솔리드 안으로 이동합니다.
- 나눌 솔리드 자신의 면을 클릭해도 분할 평면이 되지 않습니다. 다른 물체의 면이나 [작업 평면](help:obj-workplane)을 클릭하거나, {t:split.draw}로 평면을 정합니다.
- 곡면은 분할 평면으로 선택할 수 없습니다. {t:msg.flatFaceOnly}라는 알림이 뜨면 평평한 면을 선택합니다.
- {t:split.by3}에서 세 점이 한 줄에 있으면 평면을 만들 수 없습니다.
`,ee=`---
id: obj-subtract
title: 빼기
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: 빼기, 빼, 파내, 파기, 파, 홈, 오목, 깎아 내, 도려, 구멍 모양, subtract, cut out, carve, minus, remove, 차집합, 파내기, 홈 파기, 뚫기, 도려내기, 음각, 불리언, 뺴기, 뻬기, boolean, difference
commands: subtract, union, intersect, hole
howto: subtract
context: subtract
order: 150
---

## 무엇

남길 물체에서 겹쳐 놓은 다른 물체의 모양만큼 파내는 불리언 도구입니다. 홈, 네모난 구멍, 글자 새기기처럼 모양을 깎아 낼 때 씁니다.

## 하는 순서

1. 빼낼 모양(예: 원기둥)을 남길 물체에 겹쳐 놓습니다.
2. {m:subtract} 단추를 누릅니다.
3. 남길 물체를 클릭합니다.
4. 빼낼 물체를 클릭하고 적용 (Enter)을 누릅니다.

## 팁

- 빼낼 물체는 여러 개를 한꺼번에 선택할 수 있습니다. 같은 간격의 홈은 하나를 [패턴](help:obj-pattern)으로 늘어놓은 뒤 한 번에 뺍니다.
- 물체를 미리 Shift를 누른 채 선택해 두고 {c:subtract}를 누르면, 먼저 선택한 물체가 {t:role.keep}, 나머지가 {t:role.cutters}가 됩니다. 이때도 적용 (Enter)을 눌러야 빠집니다.
- 역할을 거꾸로 선택했으면 도구 창의 {t:opt.swapRoles} 단추를 누릅니다.
- 빼낸 물체는 보통 사라집니다. 같은 모양으로 여러 번 파내려면 도구 창의 {t:opt.keepTools}를 켭니다. [일반 메뉴](help:start-level)에서는 이 칸이 {t:ac.advanced} 안에 접혀 있습니다.
- {c:toggleLeft} 창에서 남긴 물체의 단계 목록을 펼치면 빼기 단계가 보입니다. {t:step.restore} 단추를 누르면 빼기를 없애고 빼낸 물체를 되살립니다.
- 둥근 구멍 하나는 [구멍](help:obj-hole) 도구가 더 빠릅니다.

## 자주 하는 실수

- 빼낼 물체가 남길 물체에 닿아 있지 않으면 선택할 수 없습니다. 먼저 겹치게 이동합니다.
- 남길 물체와 빼낼 물체를 거꾸로 클릭하면 반대 결과가 나옵니다. 적용하기 전에 창의 {t:role.keep} 목록을 확인하고, 거꾸로 되었으면 {t:opt.swapRoles}를 누릅니다.
- 빼고 난 물체가 둘 이상으로 떨어졌으면 [분리](help:obj-group)로 각각의 물체로 나눕니다.
- 오류가 나면 [합치기·빼기가 안 될 때](help:faq-boolean-fail)를 봅니다.
`,te=`---
id: obj-sweep
title: 경로 밀기·파이프
분류: 3D 물체 도구
난이도: 중급
workspace: 공통
keywords: 경로 밀기, 스윕, 경로, 단면, 밀기, 따라 만들기, 파이프, 관, 막대, 호스, 손잡이, 레일, 철사, 빨대, 배관, 둥근 막대, 휘어진 막대, 나선 관, 안지름, 바깥지름, sweep, pipe, tube, rod, path, profile, handle, wire, hose, spring, sweap, swip
commands: sweep, pipe
context: sweep, pipe
order: 19
---

## 무엇

{c:sweep}는 단면을 경로를 따라 밀어 휘어진 막대·손잡이·레일 같은 모양을 만듭니다. {c:pipe}는 단면을 그리지 않고 선이나 모서리를 따라 둥근 막대나 속이 빈 관을 만듭니다.

## 하는 순서

1. 단면이 될 닫힌 모양과 경로가 될 선을 각각 스케치로 그립니다.
2. {m:sweep} 단추를 누릅니다.
3. 단면 영역을 클릭합니다.
4. 경로가 될 스케치 선이나 물체의 모서리를 클릭합니다.
5. Enter를 누르면 만들어집니다.
6. 둥근 막대·관만 필요하면 {m:pipe} 단추를 누르고 경로를 클릭한 뒤 {t:opt.pipeDiameter} 칸과 {t:opt.pipeInner} 칸을 정하고 Enter를 누릅니다.

## 팁

- {t:opt.sweepAnchor} 칸은 단면의 어느 점을 경로 시작점에 맞출지 정합니다. 처음 선택한 {t:opt.anchorCenter} 방식은 단면 중심을 경로 시작점에 놓고 경로에 수직으로 세웁니다. 그래서 단면을 아무 평면에 그려도 됩니다.
- {t:opt.anchorPoint} 방식은 단면에서 클릭한 점을 경로 시작점에 맞추고, {t:opt.anchorKeep}는 단면을 그린 자리 그대로 밉니다.
- 스케치 선을 경로로 클릭하면 그 선과 끝이 이어진 선 전체가 경로가 됩니다. 물체 모서리는 클릭할 때마다 더하거나 뺍니다.
- 물체 모서리를 먼저 선택한 뒤 도구를 열면 그 모서리가 바로 경로가 됩니다.
- {t:opt.frenet}를 켜면 단면이 경로가 휘는 방향을 따라 돌아갑니다. 나선처럼 꼬인 경로에 씁니다.
- {c:pipe}의 처음 {t:opt.pipeDiameter}은 3D 물체에서 4 mm입니다. {t:opt.pipeInner}이 0이면 속이 찬 막대, 0보다 크면 관이 됩니다.
- {c:pipe}는 스케치를 선택한 채 열면 그 스케치의 선이 바로 경로가 됩니다.
- 결과는 [돌출](help:obj-extrude)과 같이 {t:op.new}, {t:op.union}, {t:op.subtract}, {t:op.intersect} 가운데 선택합니다. 컵 손잡이를 컵에 붙이려면 {t:op.union}와 컵을 선택합니다.
- 예제는 [파이프 예제](help:rec-pipe-sweep)와 [컵 손잡이 예제](help:rec-cup-handle)를 봅니다.

## 자주 하는 실수

- 구멍이 있는 단면은 바깥 윤곽만 밀립니다. 속이 빈 관은 {c:pipe}의 {t:opt.pipeInner}을 씁니다.
- 경로 선이 중간에 끊겨 있으면 끊긴 곳까지만 경로가 됩니다. 끝점을 객체 스냅으로 정확히 잇습니다.
- {t:err.sweep-failed}가 나오면 경로의 날카로운 꺾임을 {c:fillet2d}로 둥글게 하거나 단면을 작게 해 봅니다.
- {c:pipe}의 {t:opt.pipeInner}은 {t:opt.pipeDiameter}보다 작아야 합니다.
- 경로를 선택 전에 단면을 먼저 선택해야 합니다. 단면 없이 선을 클릭하면 경로로 받지 않습니다.
`,ne=`---
id: obj-text
title: 문자
분류: 3D 물체 도구
난이도: 기초
workspace: 3D 물체
keywords: 글자, 글씨, 문자, 이름, 새기, 새겨, 각인, 양각, 음각, 텍스트, 이니셜, text, letter, engrave, emboss, name, lettering, 문자 편집, 글자 고치기, 글꼴, 폰트, 서체, 굵게, 기울임, 이름표, 명패, 한글, 숫자, 글짜, 텍스트 넣기, font, edit text, mtext
commands: text, extrude, editText
howto: text
context: text, editText
order: 21
---

## 무엇

글자 윤곽을 스케치로 만들고, 돌출로 물체에 새기거나(음각) 튀어나오게(양각) 합니다. 이름표·명패·열쇠고리에 이름이나 숫자를 넣을 때 씁니다.

## 하는 순서

1. {m:text} 단추를 누릅니다.
2. 글자를 쓸 물체의 평평한 면을 클릭합니다.
3. 내용·글자 높이·글꼴을 정하고 적용합니다.
4. {m:extrude} 단추를 누르고 글자를 클릭한 다음, 글자가 놓인 물체를 클릭합니다.
5. 안쪽으로 끌면 파이고 바깥으로 끌면 튀어나옵니다. 적용 (Enter)을 누릅니다.

## 팁

- 첫 클릭은 글자를 놓을 평면(면·작업 평면·바닥)을 선택하고, 다음 클릭이 글자의 시작점입니다. 그 뒤에 다른 곳을 클릭하거나 시작점의 작은 네모를 끌면 글자가 이동됩니다.
- 창의 칸에서 글자 내용, {t:text.font}, {t:text.bold}, {t:text.italic}, {t:text.height}, {t:text.angle}를 바꾸면 화면에 바로 보입니다. 처음 {t:text.height}는 10 mm입니다.
- {t:text.pcFonts} 단추는 이 PC에 깔린 글꼴을 불러옵니다 (처음 한 번 브라우저가 허락을 묻습니다). 한글 글꼴이 목록 앞에 옵니다.
- {t:text.fontFile} 단추로 .ttf·.otf·.ttc·.woff 글꼴 파일을 열 수 있습니다. 연 글꼴은 앱을 닫을 때까지 목록에 남습니다.
- 굵게·기울임 글꼴이 따로 없는 글꼴도 {t:text.bold}·{t:text.italic}이 됩니다. 글꼴에 없는 글자는 기본 글꼴로 그려지고 창에 안내가 나옵니다.
- 이미 만든 글자를 고치려면 글자를 두 번 클릭하거나, 선택한 뒤 작은 막대의 {c:editText} 단추를 누릅니다.
- 돌출에서 글자를 클릭하면 모든 글자가 한꺼번에 선택됩니다(글자 속 빈 곳은 빠짐). 글자 하나를 클릭하면 빼거나 다시 넣습니다.
- 면 위에 쓴 글자는 그 물체가 돌출의 기준 물체가 되어, 안으로 밀면 빼기(음각), 밖으로 끌면 합치기(양각)가 됩니다 ([돌출](help:obj-extrude)).
- 3D 프린팅할 글자는 획이 너무 가늘면 잘 나오지 않습니다. {t:text.bold}를 켜거나 글자를 크게 합니다.
- 이름표 만들기 예제는 [이름표 예제](help:rec-nameplate)를 봅니다.

## 자주 하는 실수

- 굽은 면에는 글자를 놓을 수 없습니다. 평평한 면이나 [작업 평면](help:obj-workplane)을 선택합니다.
- 글꼴을 읽을 수 없으면 {t:text.unreadableNone}라는 안내가 나옵니다. 다른 글꼴을 선택합니다.
- {c:editText} 기능은 문자 도구로 만든 스케치에만 됩니다. 다른 스케치를 선택하면 {t:msg.pickText}라는 안내가 나옵니다.
- 돌출할 때 거리를 물체 두께보다 깊게 밀면 글자 모양으로 뚫립니다. 새기는 깊이는 두께보다 얕게 정합니다.
- 3D 건설의 메뉴에는 {c:text}가 없습니다. 명령 창에 \`text\`를 입력하면 쓸 수 있습니다.
`,re=`---
id: obj-tweak
title: 점·선·면 이동·두께 주기·면 채우기
분류: 3D 물체 도구
난이도: 중급
workspace: 공통
keywords: 점 선 면 이동, 점·선·면 이동, 꼭짓점 이동, 모서리 이동, 면 이동, 꼭지점, 형상 변형, 모양 바꾸기, 기울이기, 비스듬하게, 경사 만들기, 트윅, 점 추가, 선 추가, 면 나누기, 면 분할, 두께 주기, 두께 없는 면, 면 채우기, 열린 곳 막기, 솔리드로 만들기, 곡면 오프셋, tweak, move vertex, move edge, move face, add point, add line, imprint, split face, thicken, fill faces, cap
commands: tweak, addPoint, addLine, splitFace, thicken, capSolid, presspull
context: tweak, addPoint, addLine, splitFace, thicken, capSolid
order: 220
---

## 무엇

솔리드의 꼭짓점·모서리·면을 화살표로 이동해 모양을 바꾸는 도구입니다. 상자의 윗모서리 하나를 옆으로 이동해 경사면을 만드는 식으로 씁니다. 같은 메뉴의 {c:addPoint}, {c:addLine}, {c:splitFace}로 이동할 점과 선을 먼저 만들 수 있고, {c:thicken}와 {c:capSolid}는 두께 없는 면 물체를 솔리드로 만듭니다.

## 하는 순서

1. {m:tweak} 단추를 누릅니다.
2. 이동할 꼭짓점·모서리·면을 클릭합니다.
3. 꼭짓점이나 모서리를 이동할 때는 창의 {t:tweakflat.choice}에서 {t:tweakflat.flat}와 {t:tweakflat.bend} 가운데 하나를 선택합니다.
4. 화살표를 끌거나, 창의 ΔX·ΔY·ΔZ 칸에 이동할 거리를 입력합니다. 면은 {t:tweak.alongNormal} 칸에 넣어도 됩니다.
5. 적용 (Enter)을 누릅니다. 빈 곳을 클릭해도 이동한 결과가 남고 도구가 끝납니다.

## 팁

### 점·선·면 이동

- {t:tweakflat.flat}를 선택하면 이동한 꼭짓점·모서리에 붙은 면이 평평한 채로 기울고, 옆 꼭짓점이 따라 움직입니다. 평평하게 할 수 없는 이동은 미리 보기가 빨갛게 보이고 적용되지 않습니다.
- {t:tweakflat.bend}를 선택하면 이동한 꼭짓점·모서리만 움직이고, 휜 면은 삼각형 면으로 나뉩니다.
- 면을 통째로 이동하면 늘 평평합니다. 곡면은 면에 수직인 방향으로만 움직입니다.
- 명령줄에 \`5 0 0\`처럼 X·Y·Z 거리를 입력해도 됩니다. 면을 선택한 경우 숫자 하나만 넣으면 면에 수직인 거리가 됩니다.
- 물체를 선택한 뒤 한 번 더 클릭해 꼭짓점·모서리·면을 먼저 선택해 두고 {c:tweak} 단추를 누르면 그것으로 바로 시작합니다.
- 3D 건설에서 다른 단계가 없는 벽이나 지붕은, 이동할 수 있으면 벽 위 높이나 지붕 경사 값을 바꾸는 방식으로 이동되어 벽과 지붕으로 남습니다.

### 점 추가·선 추가·면 나누기

- {m:addPoint}: 면이나 모서리를 클릭한 곳에 점이 바로 들어가고 도구가 끝납니다. 창에서 {t:tweak.atClick}, {t:al.centerMid}, {t:tweak.byDistance} 가운데 넣는 방식을 선택합니다. 넣은 점은 {c:tweak}으로 이동할 수 있는 꼭짓점이 됩니다.
- {m:addLine}: 면을 클릭한 뒤 두 점을 찍습니다. 두 번째 점을 찍으면 두 점을 지나는 선이 바로 들어가 면이 둘로 나뉩니다. 평평한 면에서는 선이 면 끝까지 이어집니다.
- {m:splitFace}: 나눌 면을 클릭하고(여러 개 가능) Enter를 누릅니다. {t:split.pick}에서는 스케치 선이나 다른 물체를 클릭하면 바로 나뉘고, {t:split.draw}에서는 면 위에 선을 그립니다. 선 양 끝이 면 가장자리에 닿거나 첫 점으로 돌아와 닫히면 바로 나뉩니다.
- 나눈 면의 한 부분만 [밀고 당기기](help:obj-presspull)나 {c:tweak}으로 이동할 수 있습니다. 넣은 점과 선은 [부분 삭제](help:obj-partial-delete)로 다시 삭제합니다.

### 두께 주기·면 채우기

- {m:thicken}: 두께 없는 면 물체를 클릭하고 {t:opt.thickOut}, {t:opt.thickIn}, {t:opt.thickBoth} 가운데 방향을 선택한 뒤 {t:opt.thickness}를 정합니다. 처음 두께는 2 mm(3D 건설에서는 0.3 m)이고, 화살표를 끌어 놓으면 바로 적용됩니다.
- {m:capSolid}: 열린 곳을 모두 면으로 막아 닫힌 솔리드로 만듭니다. 열린 물체를 선택한 채 누르면 바로 채워지고, 아무것도 선택하지 않고 누르면 채울 물체를 클릭합니다.
- {c:addPoint}, {c:addLine}, {c:splitFace}, {c:thicken}, {c:capSolid}는 {t:level.advanced} 메뉴에 있습니다. [일반·고급 메뉴](help:start-level)를 봅니다.

## 자주 하는 실수

- 원기둥·구·모깎기한 물체처럼 곡면이 있는 물체는 꼭짓점·모서리·평평한 면을 이동할 수 없고 {t:err.tweak-curved}라는 오류가 납니다. 이때는 [밀고 당기기](help:obj-presspull)를 씁니다.
- 너무 많이 이동하면 면끼리 서로 뚫고 지나가 적용되지 않습니다. 덜 이동하거나 다른 방향으로 이동합니다.
- 구멍이 있는 면에는 점이나 선을 넣을 수 없습니다.
- 이미 닫힌 솔리드에는 {c:thicken}와 {c:capSolid}를 쓸 수 없습니다. 두 도구는 두께 없는 면이나 열린 물체에만 씁니다.
`,ie=`---
id: obj-union
title: 합치기
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: 합치, 합치기, 합체, 하나로, 붙여, 결합, 더하기, 연결, union, merge, join, combine, 합집합, 하나로 만들기, 붙이기, 불리언, 불린, 합치기 안 됨, 함치기, 합치가, boolean, add
commands: union, subtract, intersect, group
howto: union
context: union
order: 140
---

## 무엇

닿아 있거나 겹친 솔리드 여러 개를 하나의 솔리드로 합치는 불리언 도구입니다. 합친 결과는 기준 물체에 단계로 남고, 더한 물체는 기준 물체 안으로 들어가 따로 남지 않습니다.

## 하는 순서

1. Shift를 누른 채 닿아 있는 물체 두 개를 클릭해 선택합니다.
2. {m:union} 단추를 누르면 바로 하나가 됩니다.
3. 선택하지 않고 누르면 기준 물체 → 더할 물체 순서로 클릭하고 적용 (Enter)을 누릅니다.

## 팁

- 세 개 이상도 한 번에 합칠 수 있습니다. 선택한 물체들이 서로 이어져 닿아 있으면 됩니다.
- 물체를 두 개 이상 선택하면 물체 옆에 뜨는 작은 단추 줄에도 {c:union}, {c:subtract}, {c:group} 단추가 나옵니다.
- 도구 창의 {t:role.target}·{t:role.others} 목록에서 × 단추를 누르면 잘못 선택한 물체가 빠집니다. 화면에서 선택한 물체를 한 번 더 클릭해도 빠지고, Ctrl+Z는 마지막에 선택한 물체를 놓습니다.
- 합친 물체는 기준 물체의 이름을 그대로 씁니다. {c:toggleLeft} 창에서 그 물체의 단계 목록을 펼치면 합치기 단계가 보이고, {t:step.restore} 단추로 단계를 삭제하면서 더했던 물체를 되살릴 수 있습니다.
- 도구 창의 {t:opt.keepTools}를 켜면 더한 물체가 삭제되지 않고 그대로 남습니다. [일반 메뉴](help:start-level)에서는 이 칸이 {t:ac.advanced} 안에 접혀 있습니다.
- 묶어서 함께 이동만 하려면 합치지 말고 [그룹](help:obj-group)으로 묶습니다. 그룹은 모양을 바꾸지 않습니다.

## 자주 하는 실수

- 떨어져 있는 물체는 합칠 수 없습니다. 닿지 않은 물체를 선택하면 닿아 있지 않다는 알림이 뜨고 목록에서 빠집니다. [정렬](help:obj-align)이나 [이동·회전](help:obj-move)으로 먼저 맞붙입니다.
- 두께 없는 면 물체는 합칠 수 없습니다. 먼저 [두께 주기나 면 채우기](help:obj-tweak)로 솔리드를 만듭니다.
- 결과가 이상하거나 오류가 나면 [합치기·빼기가 안 될 때](help:faq-boolean-fail)를 봅니다.
`,ae=`---
id: obj-workplane
title: 작업 평면
분류: 3D 물체 도구
난이도: 중급
workspace: 공통
keywords: 작업 평면, 작업평면, 기준 평면, 보조 평면, 평면, 띄우기, 띄운 평면, 오프셋 평면, 가운데 평면, 중간 평면, 공중에 그리기, 높이에 스케치, 스케치 평면, workplane, work plane, construction plane, offset plane, midplane, reference plane, plane, wp, 작업 편면
commands: workPlane, newSketch, split, sectionView
context: workPlane
order: 22
---

## 무엇

면이나 바닥에서 일정한 거리만큼 띄운 평면, 또는 마주 보는 두 면의 가운데 평면을 만듭니다. 공중에 스케치하거나, [단면 잇기](help:obj-loft)의 위쪽 단면을 그리거나, 물체를 자르는 기준 면으로 씁니다.

## 하는 순서

1. {m:workPlane} 단추를 누릅니다.
2. 창에서 {t:opt.wpOffset} 또는 {t:opt.wpMid}를 선택합니다.
3. {t:opt.wpOffset}이면 기준이 될 평평한 면을 클릭합니다. 빈 곳을 클릭하면 바닥이 기준입니다.
4. 화살표를 끌어 놓거나, 거리를 입력하고 Enter를 누르면 만들어집니다.
5. {t:opt.wpMid}이면 마주 보는 평행한 두 면을 차례로 클릭합니다. 두 번째 면을 클릭하면 바로 가운데에 만들어집니다.

## 팁

- 작업 평면을 클릭하면 {c:newSketch}·그리기 도구·{c:text}가 그 평면에 그립니다. 작업 평면을 선택한 채 {c:newSketch}를 누르면 바로 스케치가 시작됩니다.
- {c:split}과 {c:sectionView}에서도 작업 평면을 자르는 면으로 클릭할 수 있습니다 ([솔리드 분할](help:obj-split), [단면 보기](help:obj-section)).
- 면을 먼저 선택하거나 작업 평면을 선택한 채 도구를 열면 그것이 바로 기준이 됩니다. 작업 평면에서 또 띄운 평면도 만들 수 있습니다.
- 처음 띄우기 거리는 3D 물체에서 10 mm입니다. 음수를 넣으면 반대쪽으로 띄웁니다. 창의 {t:opt.offset} 칸에 입력하고 Enter를 누르면 바로 만들어집니다.
- 만든 작업 평면은 물체 창에 이름과 함께 나타납니다. 눈 모양으로 숨기거나 보이게 하고, 선택한 뒤 Delete로 삭제합니다.
- 비스듬한 평면이 필요하면 [세 점 평면](help:obj-sketch-plane3)을 씁니다.
- 높이가 다른 단면을 여러 개 그릴 때 작업 평면을 높이마다 하나씩 만들면 [단면 잇기](help:obj-loft)가 쉬워집니다.

## 자주 하는 실수

- 굽은 면은 기준이 될 수 없습니다 ({t:msg.flatFaceOnly}).
- {t:opt.wpMid}에서는 서로 평행한 면만 선택할 수 있습니다 ({t:msg.parallelOnly}).
- {t:opt.wpMid}에서는 빈 곳(바닥)을 기준으로 선택할 수 없습니다. 물체의 면이나 작업 평면을 클릭합니다.
- 작업 평면은 물체가 아니어서 3D 프린팅이나 합치기에 들어가지 않습니다. 그리기와 자르기의 기준으로만 씁니다.
`,oe="---\nid: rec-bookshelf\ntitle: 책장\n분류: 3D 물체 예제\n난이도: 중급\nworkspace: 3D 물체\nkeywords: 책장, 책꽂이, 선반, 수납장, 진열장, 칸, 칸막이, 가구, 가구 모형, 미니어처, 속 비우기, 직사각형 패턴, 책장 만들기, 책짱, bookshelf, bookcase, shelf, shelves, cabinet, furniture\ncommands: box, shell, rectPattern, union\norder: 50\n---\n\n## 무엇\n\n폭 60 mm, 깊이 20 mm, 높이 80 mm인 책장 모형을 만듭니다. 직육면체의 앞면을 열어 [속 비우기](help:obj-shell)로 틀을 만들고, 선반 하나를 [직사각형 패턴](help:obj-pattern)으로 위로 늘어놓아 높이가 같은 네 칸으로 나눕니다.\n\n## 하는 순서\n\n1. {m:box} 단추를 누르고 바닥에 놓습니다. 속성 창에서 {t:param.x} `60`, {t:param.y} `20`, {t:param.z} `80`으로 바꾸고 {t:panel.position} X, Y, Z를 모두 `0`으로 넣습니다.\n2. {m:shell} 단추를 누르고 앞면(Y가 작은 쪽, 책을 넣을 쪽)을 클릭합니다. {t:opt.thickness}를 `2`로 하고 {t:btn.apply} 단추를 누릅니다. 안쪽 공간은 폭 56, 깊이 18, 높이 76 mm가 됩니다.\n3. 선반이 될 직육면체를 놓고 {t:param.x} `56`, {t:param.y} `18`, {t:param.z} `2`, {t:panel.position} X `0`, Y `-1`, Z `19.5`로 바꿉니다. 선반이 양옆 벽과 뒤판에 닿습니다.\n4. 선반을 선택한 채 {m:rectPattern} 단추를 누릅니다. {t:opt.count} X `1`, Y `1`, Z `3`, {t:opt.spacing} Z `19.5`로 정하고 {t:btn.apply} 단추를 누릅니다. 네 칸의 높이가 모두 17.5 mm가 됩니다.\n5. {k:selectAll}로 모두 선택하고 {m:union} 단추를 누릅니다.\n\n## 팁\n\n- 칸 높이 계산: (안쪽 높이 76 − 선반 두께 2 × 선반 수 3) ÷ 칸 수 4 = 17.5 mm, 선반 간격 = 칸 높이 + 선반 두께 = 19.5 mm. 숫자 칸에 `(76-2*3)/4+2`처럼 [계산식](help:input-calc)을 바로 넣어도 됩니다.\n- 같은 책장을 [빼기](help:obj-subtract)로도 만듭니다. 속을 비우지 않은 상자에 칸 크기 56 × 19 × 17.5 직육면체를 X `0`, Y `-1.5`, Z `2`에 놓고 {c:rectPattern}으로 Z 방향 4개(간격 19.5)를 만든 뒤, {c:subtract}에서 책장을 먼저 클릭하고 칸 네 개를 차례로 클릭하고 Enter를 누릅니다. 빼낼 상자를 앞면보다 1 mm 더 나오게 두어 깔끔하게 잘립니다.\n- 뒤판이 없는 진열장을 만들려면 {c:shell}에서 앞면과 뒷면을 함께 클릭합니다. 열어 둘 면은 여러 개 선택할 수 있습니다.\n- 3D 프린팅할 때는 {c:dropFace}로 뒷면을 바닥에 놓아 눕히면 선반이 모두 세로 벽이 되어 서포트 없이 출력하기 쉽습니다.\n- 칸을 가로로도 나누려면 세로 칸막이(2 × 18 × 76)를 하나 만들어 {c:rectPattern}의 X 방향으로 늘어놓습니다.\n\n## 자주 하는 실수\n\n- {c:shell}에서 윗면을 선택하면 위가 뚫린 상자가 됩니다. 책을 넣을 앞면을 선택합니다.\n- {c:rectPattern}의 {t:opt.count} X 기본값이 3이므로 X를 `1`로 바꾸지 않으면 선반이 옆으로도 늘어서 책장 밖으로 나갑니다.\n- 선반이 벽에 닿지 않으면 합치기에서 닿아 있지 않다는 알림이 뜹니다. 선반의 가로를 안쪽 폭(56)과 같게 합니다.\n- 속 비우기 두께를 바꾸면 안쪽 크기도 바뀝니다. 두께를 바꿨다면 선반 크기와 간격을 다시 계산합니다.\n",se="---\nid: rec-car\ntitle: 간단한 자동차\n분류: 3D 물체 예제\n난이도: 중급\nworkspace: 3D 물체\nkeywords: 자동차, 차, 장난감 자동차, 장난감 차, 미니카, 승용차, 바퀴, 바퀴 네 개, 타이어, 차체, 대칭 복사, 모깎기, 자동차 만들기, 자동챠, car, toy car, vehicle, wheels, tyre, tire, mirror\ncommands: box, fillet, cylinder, mirror3d, union\norder: 100\n---\n\n## 무엇\n\n길이 80 mm, 폭 46 mm, 높이 34 mm인 장난감 자동차를 만듭니다. 차체와 지붕은 직육면체의 모서리를 둥글게 깎고, 바퀴는 원기둥 하나를 [대칭 복사](help:obj-mirror)로 두 번 복사해 네 개로 만듭니다.\n\n## 하는 순서\n\n1. {m:box} 단추를 누르고 바닥에 놓습니다. 속성 창에서 {t:param.x} `80`, {t:param.y} `36`, {t:param.z} `14`, {t:panel.position} X `0`, Y `0`, Z `8`로 바꿉니다. 차체입니다.\n2. 직육면체를 하나 더 놓고 {t:param.x} `40`, {t:param.y} `30`, {t:param.z} `12`, {t:panel.position} X `-6`, Y `0`, Z `22`로 바꿉니다. 지붕(객실)입니다.\n3. 차체를 선택하고 {m:fillet} 단추를 누릅니다. 창에서 이 물체의 모서리를 모두 선택하는 단추를 누르고 {t:opt.radius}을 `3`으로 한 뒤 {t:btn.apply} 단추를 누릅니다. 지붕도 같은 방법으로 둥글립니다.\n4. {m:cylinder} 단추를 누르고 바닥에 놓은 뒤, 속성 창에서 {t:param.r} `9`, {t:param.h} `6`으로 바꾸고 {t:panel.rotation} X 칸에 `90`, {t:panel.position} X `25`, Y `23`, Z `9`를 넣습니다. 세운 원기둥은 위치에서 −Y 쪽으로 6 mm 뻗어 차체 옆면에 1 mm 묻힙니다.\n5. 바퀴를 선택한 채 {m:mirror3d} 단추를 누르고 {t:opt.planeYZ} 평면을 선택하고, {t:opt.mirrorAt}는 {t:opt.atOrigin}으로 바꾼 뒤 {t:btn.apply} 단추를 누릅니다. 뒷바퀴가 생깁니다.\n6. Shift를 누른 채 바퀴 두 개를 선택하고 {c:mirror3d} 단추를 다시 누릅니다. {t:opt.planeXZ} 평면, {t:opt.mirrorAt}는 {t:opt.atOrigin}으로 하고 {t:btn.apply} 단추를 누르면 반대쪽 바퀴 두 개가 생깁니다.\n7. {k:selectAll}로 모두 선택하고 {m:union} 단추를 누릅니다.\n\n## 팁\n\n- 대칭 복사 대신 [직사각형 패턴](help:obj-pattern)도 됩니다. 첫 바퀴를 위치 X `-25`, Y `-17`에 두고 {c:rectPattern}에서 {t:opt.count} X·Y `2`, {t:opt.spacing} X `50`, Y `40`으로 늘어놓습니다.\n- 타이어 느낌: {c:torus}를 {t:param.R} `7`, {t:param.r2} `2.5`로 만들어 {t:panel.rotation} X `90`, {t:panel.position} X `25`, Y `25.5`, Z `9`에 놓으면 바퀴 바깥면에 고리가 걸칩니다. 고리가 바닥 아래로 0.5 mm 내려가므로 합친 뒤 {c:drop}로 바닥에 올립니다.\n- 창문: 지붕 옆면에 얇은 직육면체를 1 mm 겹쳐 놓고 {c:subtract}로 파냅니다. 한쪽 창을 만든 뒤 {c:mirror3d}로 반대쪽을 만들면 빠릅니다.\n- 모깎기는 합치기 전에 차체와 지붕에 각각 합니다. 합친 뒤에는 모서리가 많아져 선택 어렵습니다.\n- 차체 아래가 바닥에서 8 mm 떠 있으므로 3D 프린팅할 때는 슬라이서에서 서포트를 켭니다.\n- 크기를 바꾸려면 [스마트 스케일](help:obj-smart-scale)에서 {t:opt.keepRatio}를 켜고 길이를 입력합니다. 대칭 복사와 정렬을 섞는 방법은 [정렬과 대칭으로 빠르게 배치](help:rec-trick-align-mirror)에 있습니다.\n\n## 자주 하는 실수\n\n- 원기둥을 세우지 않으면(회전 X 0) 바퀴가 바닥에 누운 원판이 됩니다.\n- {t:opt.mirrorAt}를 {t:opt.atSide}으로 두면 사본이 원본 바로 옆에 붙어 생깁니다. 차체의 가운데가 원점이므로 {t:opt.atOrigin}을 선택합니다.\n- 바퀴 Y를 `24`처럼 차체에서 떨어지게 두면 바퀴가 차체에 겨우 닿거나 떨어져 한 덩어리로 합쳐지지 않습니다. 바퀴가 차체에 조금 묻히게 둡니다.\n- 모깎기 반지름을 지붕 높이의 절반(6 mm)보다 크게 하면 만들 수 없습니다.\n",ce="---\nid: rec-chair\ntitle: 의자\n분류: 3D 물체 예제\n난이도: 중급\nworkspace: 3D 물체\nkeywords: 의자, 걸상, 스툴, 등받이, 좌판, 가구, 가구 모형, 의자 다리, 다리 네 개, 미니어처, 인형 의자, 의자 만들기, 의쟈, chair, stool, furniture, legs, backrest, miniature\ncommands: box, align, rectPattern, union, fillet\norder: 30\n---\n\n## 무엇\n\n실제 의자를 1/10로 줄인 모형(좌판 45 × 45 mm, 전체 높이 90 mm)을 직육면체 다섯 개로 만듭니다. 다리 하나를 [정렬](help:obj-align)로 좌판 모서리에 맞추고, [직사각형 패턴](help:obj-pattern)으로 나머지 다리를 한 번에 만듭니다.\n\n## 하는 순서\n\n1. {m:box} 단추를 누르고 바닥을 클릭해 놓습니다. 속성 창에서 {t:param.x} `45`, {t:param.y} `45`, {t:param.z} `4`, {t:panel.position} X `0`, Y `0`, Z `41`로 바꿉니다. 좌판입니다.\n2. 직육면체를 하나 더 놓고 {t:param.x} `4`, {t:param.y} `4`, {t:param.z} `41`로 바꿉니다. 다리입니다.\n3. Shift를 누른 채 좌판과 다리를 선택하고 {m:align} 단추를 누릅니다. 창의 {t:align2.ref} 칸을 누르고 좌판을 클릭합니다.\n4. 창의 X 줄에서 {t:opt.alignLeft}, Y 줄에서 {t:opt.alignFront}을 누르고 {t:btn.apply} 단추를 누릅니다. 다리가 좌판의 왼쪽 앞 모서리 아래로 이동됩니다. Esc로 창을 닫습니다.\n5. 다리만 선택하고 {m:rectPattern} 단추를 누릅니다. {t:opt.count} X `2`, Y `2`, Z `1`, {t:opt.spacing} X `41`, Y `41`로 정하고 {t:btn.apply} 단추를 누릅니다. 간격 41은 좌판 폭 45에서 다리 굵기 4를 뺀 값입니다.\n6. 직육면체를 하나 더 놓고 {t:param.x} `45`, {t:param.y} `4`, {t:param.z} `45`, {t:panel.position} X `0`, Y `20.5`, Z `45`로 바꿉니다. 좌판 뒤쪽 위에 서는 등받이입니다.\n7. {k:selectAll}로 모두 선택하고 {m:union} 단추를 누릅니다.\n8. {m:fillet} 단추를 누르고 등받이 위쪽의 긴 모서리 두 개를 클릭합니다. {t:opt.radius}을 `1.5`로 하고 {t:btn.apply} 단추를 누릅니다.\n\n## 팁\n\n- 다리 네 개는 [대칭 복사](help:obj-mirror)로도 만듭니다. 다리 하나를 {t:opt.planeYZ} 평면, {t:opt.mirrorAt}는 {t:opt.atOrigin}으로 복사하고, 두 다리를 선택해 {t:opt.planeXZ} 평면으로 한 번 더 복사합니다. 좌판의 가운데가 원점에 있을 때 맞습니다.\n- {c:rectPattern} 창에서 {t:opt.linkedCopies}를 켜면 합치기 전까지는 다리 하나의 크기만 바꿔도 네 다리가 함께 바뀝니다.\n- 등받이를 뒤로 기울이려면 등받이만 선택하고 속성 창의 {t:panel.rotation} X 칸에 `-8`처럼 작은 각도를 넣습니다. 아랫면을 중심으로 기울어 좌판과 계속 겹칩니다.\n- 실제 크기(좌판 450 mm)로 만든 뒤 [스마트 스케일](help:obj-smart-scale)의 {t:opt.factor}에 `0.1`을 넣어 줄여도 됩니다.\n- 명령줄에 `box 45 45 4`처럼 가로 세로 높이를 입력하면 그 크기의 직육면체가 바로 만들어집니다.\n- 정렬과 대칭 복사를 함께 쓰는 방법은 [정렬과 대칭으로 빠르게 배치](help:rec-trick-align-mirror)에 더 있습니다. 같은 방법으로 [탁자](help:rec-table)도 만듭니다.\n\n## 자주 하는 실수\n\n- {c:align}에서 기준 물체를 정하지 않으면 두 물체를 감싸는 전체 상자에 맞춰져 좌판도 함께 움직일 수 있습니다. 좌판을 기준 물체로 정합니다.\n- {c:rectPattern}의 {t:opt.count} X 기본값은 3입니다. 그대로 두면 다리가 옆으로 세 줄 생기므로 X와 Y를 `2`로 바꿉니다.\n- 간격에 좌판 폭(45)을 넣으면 다리가 좌판 밖으로 나갑니다. 간격은 다리 중심 사이의 거리입니다.\n- 다리 높이와 좌판 Z가 맞지 않으면 틈이 생겨 닿아 있지 않다는 알림이 뜹니다. 다리 높이 41과 좌판 Z 41을 같게 합니다.\n",le=`---
id: rec-chess
title: 체스 말
분류: 3D 물체 예제
난이도: 심화
workspace: 3D 물체
keywords: 체스, 체스 말, 체스말, 폰, 졸, 나이트, 말, 장기, 장기 말, 보드게임, 게임 말, 회전체, 반쪽 단면, 체스 만들기, chess, chess piece, pawn, knight, board game, revolve
commands: newSketch, polyline, revolve, dropFace, sphere, union, extrude, subtract
order: 90
---

## 무엇

높이 44 mm, 밑지름 30 mm인 체스 폰(졸)을 만듭니다. 받침과 몸통은 반쪽 단면을 [회전체](help:obj-revolve)로 회전해 만들고, 머리는 구를 얹어 합칩니다. 나이트(말)처럼 둥글지 않은 말을 돌출과 빼기로 만드는 방법은 팁에 있습니다.

## 하는 순서

1. {m:newSketch} 단추를 누르고 빈 바닥을 클릭해 바닥에 스케치를 시작합니다.
2. {m:polyline} 단추를 누르고 명령줄에 \`0,0\`, \`15,0\`, \`15,4\`, \`12,6\`, \`7,24\`, \`10,26\`, \`10,28\`, \`5,30\`, \`0,30\`을 하나씩 입력하며 Enter를 누릅니다. 마지막으로 \`C\`를 입력하고 Enter를 누르면 (0,0)까지 닫힙니다. X는 반지름, Y는 높이입니다.
3. {c:exitSketch} 단추를 누릅니다.
4. {m:revolve} 단추를 누르고 단면 영역을 클릭합니다 (이미 선택되어 있으면 건너뜁니다). 이어서 (0,30)–(0,0) 세로선을 클릭하고 Enter를 누릅니다.
5. {m:dropFace} 단추를 누르고 폰의 평평한 밑면(지름 30 mm)을 클릭해 세웁니다. 밑면의 가운데가 원점에 옵니다.
6. {m:sphere} 단추를 누르고 바닥에 놓은 뒤 속성 창에서 {t:param.r} \`8\`, {t:panel.position} X \`0\`, Y \`0\`, Z \`28\`로 바꿉니다. 구의 아랫부분 2 mm가 몸통 꼭대기에 묻힙니다.
7. Shift를 누른 채 몸통과 구를 선택하고 {m:union} 단추를 누릅니다.

## 팁

- 구의 위치는 구의 맨 아래 점입니다. Z 28에 놓으면 구는 높이 28~44 mm를 차지합니다.
- 단면의 점만 바꾸면 다른 말이 됩니다. 몸통을 더 길게 그리고 머리에 원뿔이나 반구를 얹어 비숍·퀸·킹을 만듭니다.
- 나이트(말): 바닥에 새 스케치를 열고 {c:polyline}으로 말 머리의 옆모습(폭 22, 높이 30 mm쯤)을 닫힌 모양으로 그립니다. {c:extrude}로 10 mm 돌출하고, {c:dropFace}로 평평한 아랫면을 바닥에 놓아 세웁니다. 폰 단면에서 받침 부분(Y 0~6)만 그려 회전체로 만든 받침 위에 얹고 {c:union}합니다.
- 나이트의 눈과 갈기: 지름 3 mm 원기둥이나 얇은 직육면체를 머리에 겹쳐 놓고 {c:subtract}로 파냅니다. 같은 홈을 양쪽에 내려면 하나를 만든 뒤 {c:mirror3d}로 반대쪽을 만듭니다.
- 말 하나를 다 만든 뒤 {c:rectPattern}으로 {t:opt.count} X \`8\`, {t:opt.spacing} X \`35\`로 늘어놓으면 폰 여덟 개가 한 번에 생깁니다.
- 체스판 칸에 맞추려면 [스마트 스케일](help:obj-smart-scale)에서 {t:opt.keepRatio}를 켜고 밑지름을 입력합니다.
- 점 입력과 단면 그리기는 [회전체 꽃병](help:rec-vase-revolve)도 참고합니다.

## 자주 하는 실수

- \`C\`로 닫지 않으면 마지막 선이 없어 닫힌 영역이 생기지 않습니다. 열린 채 끝났으면 {c:closeOpen}로 닫습니다.
- 비스듬한 선을 회전축으로 클릭하면 엉뚱한 모양으로 돕니다. 축은 X가 0인 세로선입니다.
- 회전체가 바닥 아래로 반쯤 묻혀 누워 있는 것은 바닥에 그린 단면을 회전했기 때문입니다. {c:dropFace}로 세우면 됩니다.
- 구의 Z를 30 이상으로 하면 몸통과 겨우 닿거나 떨어져 한 덩어리가 되지 않습니다. 구가 몸통에 조금 묻히게 둡니다.
`,ue=`---
id: rec-cup-handle
title: 손잡이 달린 컵
분류: 3D 물체 예제
난이도: 중급
workspace: 3D 물체
keywords: 컵, 머그, 머그컵, 손잡이, 손잡이 컵, 찻잔, 커피잔, 컵 만들기, 고리, 토러스, 도넛, 원기둥, 속 비우기, 빼기, 합치기, 머그잔, cup, mug, handle, torus
commands: cylinder, torus, union, subtract, fillet
order: 10
---

## 무엇

지름 80 mm, 높이 90 mm인 머그컵을 만듭니다. 꽉 찬 원기둥에 세운 토러스(고리)를 겹쳐 합친 뒤 안쪽 원기둥을 빼서 속을 비웁니다. 이 순서로 하면 컵 안으로 들어간 고리 부분도 함께 잘려 나가 손잡이만 깨끗하게 남습니다.

## 하는 순서

1. {m:cylinder} 단추를 누르고 바닥을 클릭해 놓습니다. 속성 창에서 {t:param.r} \`40\`, {t:param.h} \`90\`으로 바꾸고 {t:panel.position} X, Y, Z를 모두 \`0\`으로 넣습니다.
2. {m:torus} 단추를 누르고 바닥에 놓습니다. 속성 창에서 {t:param.R} \`25\`, {t:param.r2} \`5\`로 바꿉니다.
3. 같은 속성 창의 {t:panel.rotation} X 칸에 \`90\`을 넣어 고리를 세우고, {t:panel.position}를 X \`40\`, Y \`5\`, Z \`45\`로 넣습니다. 고리의 중심이 컵 옆면의 높이 45 mm 지점에 옵니다.
4. Shift를 누른 채 원기둥과 토러스를 클릭해 선택하고 {m:union} 단추를 누릅니다.
5. 원기둥을 하나 더 놓고 {t:param.r} \`37\`, {t:param.h} \`90\`, {t:panel.position} X \`0\`, Y \`0\`, Z \`3\`으로 바꿉니다. 벽과 바닥이 3 mm씩 남고, 이 원기둥의 윗부분은 컵 위로 3 mm 나옵니다.
6. {m:subtract} 단추를 누르고 컵을 클릭한 다음 안쪽 원기둥을 클릭하고 Enter를 누릅니다.
7. {m:fillet} 단추를 누르고 컵 입구의 바깥 모서리와 안쪽 모서리를 클릭합니다. {t:opt.radius}을 \`1\`로 하고 {t:btn.apply} 단추를 누릅니다.

## 팁

- 세운 토러스는 관 반지름만큼 −Y 쪽으로 이동됩니다. 그래서 위치 Y에 관 반지름(5)을 넣어야 컵 가운데에 맞습니다. 숫자 대신 [정렬](help:obj-align)로 원기둥을 기준 물체로 정하고 Y를 가운데에 맞춰도 됩니다.
- 손가락이 들어가는 틈은 고리 반지름 − 관 반지름 = 20 mm입니다. 손잡이를 키우려면 {t:param.R}을, 굵게 하려면 {t:param.r2}을 늘립니다.
- 순서가 핵심입니다. [속 비우기](help:obj-shell)를 먼저 하면 토러스의 안쪽 반이 컵 속으로 튀어나옵니다. 이때는 토러스를 [솔리드 분할](help:obj-split)에서 {t:opt.planeYZ} 평면, {t:opt.offset} \`-2\`로 잘라 벽 속까지 들어가는 바깥 조각만 남기고 합칩니다.
- 명령줄에 \`cylinder 40 90\`이나 \`torus 25 5\`를 입력하면 그 크기의 도형이 바로 만들어집니다. 위치만 속성 창에서 고칩니다.
- 벽이 아래로 갈수록 두꺼운 컵은 반쪽 단면을 [회전체](help:obj-revolve)로 회전해 만듭니다. 만드는 법은 [회전체 꽃병](help:rec-vase-revolve)과 같습니다.
- 다 만든 컵의 크기를 비율대로 바꾸려면 [스마트 스케일](help:obj-smart-scale)에서 {t:opt.keepRatio}를 켜고 높이를 입력합니다.
- 합친 뒤 빼서 속을 비우는 방법은 [합치고 빼서 속 비우기](help:rec-hollow-boolean)에 더 자세히 있습니다.

## 자주 하는 실수

- 안쪽 원기둥의 Z를 \`0\`으로 두면 바닥까지 뚫린 관이 됩니다. Z를 바닥 두께만큼 올립니다.
- 안쪽 원기둥의 윗면을 컵 윗면과 꼭 같은 높이에 두면 빼기 결과가 깔끔하지 않을 수 있습니다. 빼낼 물체는 남길 물체보다 조금 더 나오게 둡니다.
- 토러스를 세우지 않으면 고리가 바닥에 누워 컵 둘레를 감쌉니다. {t:panel.rotation} X를 \`90\`으로 합니다.
- 원기둥과 토러스가 떨어져 있으면 닿아 있지 않아 선택할 수 없다는 알림이 뜹니다. 토러스의 위치 X가 컵 반지름(40)과 같은지 확인합니다.
- 빼기에서 순서를 바꿔 누르면 컵 대신 안쪽 원기둥이 남습니다. 남길 물체(컵)를 먼저 클릭합니다.
`,de="---\nid: rec-gear\ntitle: 맞물리는 톱니바퀴\n분류: 3D 물체 예제\n난이도: 심화\nworkspace: 3D 물체\nkeywords: 톱니바퀴, 기어, 평기어, 맞물림, 맞물리는 기어, 기어 두 개, 랙, 랙과 피니언, 모듈, 잇수, 피치원, 중심 거리, 감속, 기어비, 기계 요소, 톱니, 기아, gear, gears, spur gear, rack, pinion, module, teeth, gear ratio\ncommands: gearPart, rack, editPart\norder: 60\n---\n\n## 무엇\n\n{t:group.parts} 탭의 평기어로 모듈 2, 잇수 24인 큰 기어와 잇수 12인 작은 기어를 만들어 맞물려 놓습니다 (기어비 2:1). 두 기어의 중심 거리는 모듈 × (잇수 합) ÷ 2 = 2 × 36 ÷ 2 = 36 mm입니다.\n\n## 하는 순서\n\n1. {m:gearPart} 단추를 누릅니다. 창에서 {t:opt.byModule}를 선택하고 {t:opt.module} `2`, {t:opt.teeth} `24`, {t:opt.faceWidth} `6`, {t:opt.boreDia} `5`로 정합니다. {t:opt.pressureAngle}은 20°로 둡니다. 창 아래 표의 {t:opt.pitchDia}이 48 mm인지 봅니다.\n2. 바닥을 클릭해 놓고, 속성 창의 {t:panel.position}를 X `0`, Y `0`, Z `0`으로 바꿉니다.\n3. {c:gearPart} 단추를 다시 누르고 {t:opt.module} `2`, {t:opt.teeth} `12`, {t:opt.faceWidth} `6`, {t:opt.boreDia} `5`로 정한 뒤 바닥을 클릭해 놓습니다. {t:opt.pitchDia}은 24 mm입니다.\n4. 작은 기어의 속성 창에서 {t:panel.position}를 X `36`, Y `0`, Z `0`으로 바꿉니다.\n5. 같은 속성 창의 {t:panel.rotation} Z 칸에 `15`를 넣습니다. 반 이(360 ÷ 12 ÷ 2 = 15°)만큼 회전해 작은 기어의 이 사이 홈이 큰 기어의 이를 마주 보게 합니다. 위에서 내려다보며 이가 서로 겹치지 않는지 확인합니다.\n\n## 팁\n\n- {t:group.parts} 탭은 [고급 메뉴](help:start-level)에 있습니다. 일반 메뉴에서는 명령줄에 `gear`를 입력해 열 수 있습니다.\n- 기어의 첫 이는 +X 방향을 향합니다. 큰 기어는 이가 작은 기어 쪽을 향하므로 그대로 두고, 작은 기어만 180 ÷ 잇수만큼 회전합니다. 작은 기어의 잇수가 홀수이면 처음부터 홈이 큰 기어 쪽을 향해 회전하지 않아도 됩니다.\n- 맞물리는 기어는 {t:opt.module}과 {t:opt.pressureAngle}이 같아야 합니다. 중심 거리는 두 {t:opt.pitchDia}의 합의 절반입니다.\n- 3D 프린팅한 기어가 빡빡하면 창의 {t:opt.advanced} 부분을 펼쳐 {t:opt.backlash}를 0.1~0.2 mm로 늘리거나, 중심 거리를 0.2 mm쯤 더 띄웁니다.\n- 회전해 볼 받침: 직육면체 100 × 56 × 3을 위치 X `13`, Y `0`, Z `-3`에 놓고, 반지름 2.3 mm(지름 4.6), 높이 12 mm 원기둥 두 개를 X `0`과 X `36` (Y `0`, Z `-3`)에 세워 받침과 합칩니다. 축 구멍(5 mm)보다 가늘어 기어가 돕니다. 기어와 받침은 따로 출력합니다.\n- 기어를 선택하면 뜨는 작은 막대의 {c:editPart}으로 모듈·잇수·두께를 나중에 다시 바꿀 수 있습니다.\n- {m:rack}을 같은 {t:opt.module}로 만들면 이 기어와 맞물립니다. 랙의 길이는 잇수 × 3.14 × 모듈로 창에 {t:opt.rackLength}로 나옵니다. 랙은 이가 위를 향하게 누워 놓이므로, 랙에 맞물리려면 기어를 {t:panel.rotation} X `90`으로 세웁니다.\n- 레이저 커터나 도면용으로는 창 위쪽에서 {t:opt.out2d}을 선택하면 기어 윤곽이 스케치로 놓입니다. 다른 기계 요소는 [기계 요소](help:obj-parts)를 봅니다.\n\n## 자주 하는 실수\n\n- 두 번째 기어를 놓을 때 창의 값이 처음 값(모듈 1 등)으로 돌아와 있습니다. 모듈·두께·축 구멍을 다시 정합니다.\n- 모듈이 다른 기어는 이 크기가 달라 맞물리지 않습니다.\n- 작은 기어를 회전하지 않으면 이와 이가 정면으로 부딪혀 겹쳐 보입니다.\n- 중심 거리를 피치원이 아닌 바깥지름으로 계산하면 기어가 떨어집니다. 중심 거리는 피치원 지름으로 계산합니다.\n- 두 기어의 Z가 다르면 위아래로 어긋나 맞물리지 않습니다.\n",fe=`---
id: rec-hollow-boolean
title: 불리언으로 속 빈 물체 만들기
분류: 3D 물체 예제
난이도: 중급
workspace: 3D 물체
keywords: 불리언, 부울, 속 빈, 속이 빈, 빈 상자, 작은 사본 빼기, 사본 빼기, 교집합, 겹친 부분, 합치기, 빼기, 둥근 상자, 둥근 모서리 상자, 보관함, 주사위 모양, 칸막이, 불린, boolean, hollow, subtract, intersect, union, container, rounded box
commands: subtract, intersect, union, box, sphere, duplicate, smartScale, align, move
order: 170
---

## 무엇

큰 물체에서 조금 작은 사본을 빼면 속이 빈 물체가 됩니다. [속 비우기](help:obj-shell)와 달리 안쪽 모양과 벽 두께를 따로 정할 수 있고, 칸막이처럼 안쪽에 남길 것도 정할 수 있습니다. 예제는 상자와 구의 [교집합](help:obj-intersect)으로 모서리가 둥근 블록을 만들고, 그 사본을 줄여 빼서 위가 열린 둥근 보관함(60 × 60 × 40 mm, 벽과 바닥 약 3 mm)을 만듭니다.

## 하는 순서

1. 새 문서에서 명령줄에 \`box 60 60 40\`을 입력합니다. 원점에 놓입니다.
2. 명령줄에 \`sphere 40\`을 입력하고 속성 창의 {t:panel.position}를 X \`0\`, Y \`0\`, Z \`-20\`으로 바꿉니다. 구의 중심이 상자의 중심(높이 20)에 옵니다.
3. 상자를 클릭하고 Shift를 누른 채 구를 클릭한 뒤 {m:intersect} 단추를 누릅니다. 겹친 부분만 남아 모서리가 둥근 블록이 됩니다.
4. 블록을 선택한 채 {k:duplicate}를 눌러 사본을 만들고 {m:smartScale} 단추를 누릅니다. 창의 {t:opt.sizeTo} X 칸에 \`54\`를 입력하고 Tab 키로 Y 칸으로 가서 \`54\`를 입력합니다. 높이 40은 그대로 두고 Enter를 눌러 적용한 뒤 Esc로 닫습니다.
5. 블록을 클릭하고 Shift를 누른 채 사본을 클릭한 뒤 {m:align} 단추를 누릅니다. {t:align2.ref}를 누르고 블록을 클릭한 다음, X {t:opt.align.mid}, Y {t:opt.align.mid}, Z {t:opt.alignBottom}를 누르고 Enter를 누른 뒤 Esc로 닫습니다.
6. 사본만 클릭해 선택하고 {m:move} 단추를 누른 뒤 창의 {t:opt.moveBy} Z 칸에 \`3\`을 입력하고 Enter를 누릅니다. 사본이 위로 3 mm 올라가 블록 위로 삐져나옵니다. Esc로 닫습니다.
7. 블록을 클릭하고 Shift를 누른 채 사본을 클릭한 뒤 {m:subtract} 단추를 누르고 Enter를 누릅니다.

## 팁

- 칸을 둘로 나누려면 7단계 전에 \`box 2 60 50\`으로 얇은 상자를 만들어 {t:panel.position}를 X \`0\`, Y \`0\`, Z \`0\`으로 두고, 사본에서 먼저 {c:subtract}합니다. 사본이 두 조각이 되어, 블록에서 빼면 가운데에 2 mm 칸막이가 남습니다.
- {c:intersect}으로 겹친 부분만 남기는 요령: 정육면체(\`box 40 40 40\`)와 반지름 27인 구를 중심을 맞춰 교집합하면 모서리가 둥근 주사위 모양이 됩니다. 반지름이 같은 원기둥 두 개를 직각으로 겹쳐 교집합하면 두 원통이 겹친 볼록한 입체가 됩니다.
- 빼낼 물체가 여러 개면 서로 닿게 놓고 {c:union}로 먼저 합치거나, {c:group}으로 묶어 한 번에 선택한 뒤 뺍니다.
- 같은 사본을 뚜껑 만들 때 다시 쓰려면 {c:subtract} 창에서 {t:opt.keepTools}를 켭니다. 빼낸 물체가 삭제되지 않고 남습니다.
- 남길 것과 뺄 것을 거꾸로 선택했으면 {c:subtract} 창의 {t:opt.swapRoles} 단추를 누릅니다.
- 벽 두께가 모두 같은 단순한 통은 {c:shell}가 더 빠릅니다. 관련 도구: [빼기](help:obj-subtract), [합치기](help:obj-union), [정렬](help:obj-align), [스마트 스케일](help:obj-smart-scale).

## 자주 하는 실수

- 6단계를 빼먹으면 사본이 바닥면까지 블록과 똑같이 걸쳐 바닥 없는 통이 됩니다. 사본을 위로 올려 바닥을 남기고 위로는 삐져나오게 합니다.
- 4단계에서 {t:opt.factor}로 세 방향을 함께 줄이면 높이도 줄어 사본이 블록 위로 나오지 않습니다. 그러면 위가 막힌 채 속만 비어 안이 보이지 않습니다.
- 사본이 블록과 겹치지 않으면 {c:subtract}에서 선택할 수 없다는 알림이 뜹니다. 5단계 정렬을 다시 확인합니다.
- 4단계의 {c:smartScale}을 닫지 않고 5단계에서 블록을 클릭하면 크기를 바꿀 물체가 블록으로 바뀝니다. Esc로 먼저 닫습니다.
- 불리언이 되지 않을 때는 [합치기·빼기가 안 될 때](help:faq-boolean-fail)를 봅니다.
`,pe="---\nid: rec-house-model\ntitle: 집 모형\n분류: 3D 물체 예제\n난이도: 중급\nworkspace: 3D 물체\nkeywords: 집, 집 모형, 주택, 오두막, 건물 모형, 박공지붕, 지붕, 쐐기, 굴뚝, 문, 창, 창문, 미니어처, 3D 프린트 집, 집 만들기, 집모양, house, house model, home, cottage, gable roof, roof, wedge, chimney, door, window\ncommands: box, mirror3d, subtract, wedge, union\norder: 110\n---\n\n## 무엇\n\n3D 프린터로 뽑기 알맞은 크기(64 × 44 × 56 mm)의 집 모형을 만듭니다. 몸채는 직육면체, 지붕은 쐐기 하나를 [대칭 복사](help:obj-mirror)해 맞붙인 박공지붕, 문과 창은 [빼기](help:obj-subtract)로 판 2 mm 깊이의 홈, 굴뚝은 지붕에 꽂은 작은 직육면체입니다.\n\n## 하는 순서\n\n1. {m:box} 단추를 누르고 바닥에 놓습니다. 속성 창에서 {t:param.x} `60`, {t:param.y} `40`, {t:param.z} `35`로 바꾸고 {t:panel.position} X, Y, Z를 모두 `0`으로 넣습니다. 몸채입니다.\n2. 직육면체를 하나 더 놓고 {t:param.x} `12`, {t:param.y} `4`, {t:param.z} `20`, {t:panel.position} X `0`, Y `-20`, Z `0`으로 바꿉니다. 앞벽(Y −20)에 반쯤 묻힌 문입니다.\n3. 직육면체를 하나 더 놓고 {t:param.x} `10`, {t:param.y} `4`, {t:param.z} `10`, {t:panel.position} X `18`, Y `-20`, Z `14`로 바꿉니다. 창을 선택한 채 {m:mirror3d} 단추를 누르고 {t:opt.planeYZ} 평면, {t:opt.mirrorAt}는 {t:opt.atOrigin}으로 한 뒤 {t:btn.apply} 단추를 눌러 왼쪽 창을 만듭니다.\n4. {m:subtract} 단추를 누르고 몸채를 클릭한 다음, 문과 창 두 개를 차례로 클릭하고 Enter를 누릅니다.\n5. {m:wedge} 단추를 누르고 바닥에 놓은 뒤 {t:param.x} `32`, {t:param.y} `44`, {t:param.z} `20`, {t:panel.position} X `16`, Y `0`, Z `35`로 바꿉니다. 높은 쪽이 집 가운데(X 0)에 오는 지붕의 오른쪽 반입니다.\n6. 쐐기를 선택한 채 {c:mirror3d} 단추를 누르고 {t:opt.planeYZ} 평면, {t:opt.mirrorAt}는 {t:opt.atOrigin}으로 한 뒤 {t:btn.apply} 단추를 눌러 지붕의 왼쪽 반을 만듭니다.\n7. 직육면체를 하나 더 놓고 {t:param.x} `6`, {t:param.y} `6`, {t:param.z} `18`, {t:panel.position} X `-15`, Y `8`, Z `38`로 바꿉니다. 아랫부분이 지붕 속에 묻히는 굴뚝입니다.\n8. {k:selectAll}로 모두 선택하고 {m:union} 단추를 누릅니다.\n\n## 팁\n\n- 쐐기는 기본으로 −X 쪽이 높고 +X 쪽으로 내려가는 모양입니다. 그래서 X `16`에 두면 높은 쪽이 가운데에 옵니다. 지붕 높이는 쐐기의 {t:param.z}, 처마는 쐐기 {t:param.x}에서 벽 반쪽 폭(30)을 뺀 2 mm입니다.\n- 지붕을 {c:prism}의 {t:param.n} `3`으로 만들어 눕힐 수도 있지만 정삼각형이라 기울기가 정해집니다. 쐐기 두 개를 쓰면 높이와 처마를 따로 정하기 쉽습니다.\n- 창 너머가 보이게 뚫으려면 먼저 몸채를 {c:shell}로 밑면을 열어 두께 2 mm로 비우고, 창 상자의 {t:param.y}를 `6` 이상으로 해 벽을 관통시킵니다.\n- 네모난 홈은 {c:hole} 창에서 {t:mo.holeRect}을 선택하고 벽면을 클릭해 {t:mo.holeWidth}, {t:mo.holeLength}, {t:opt.holeDepth} `2`를 넣어 파도 됩니다.\n- 창이 여러 개면 창 하나를 {c:rectPattern}으로 늘어놓은 뒤 한꺼번에 빼면 빠릅니다.\n- 다 만든 집을 비율대로 키우거나 줄이려면 [스마트 스케일](help:obj-smart-scale)에서 {t:opt.keepRatio}를 켭니다. 3D 건설의 땅 위에 놓으려면 [건설 물체로 보내기](help:more-send-to-building)를 씁니다.\n\n## 자주 하는 실수\n\n- 쐐기를 X `-16`에 두면 높은 쪽이 바깥으로 가서 지붕이 V자로 파입니다. 높은 쪽이 가운데에 오도록 X `16`에 두고 반대쪽은 대칭 복사로 만듭니다.\n- 빼기 전에 모두 합치면 문과 창 상자까지 집에 붙어 버립니다. 빼기를 먼저 하고 지붕과 굴뚝을 합칩니다.\n- 문·창 상자가 벽에 닿지 않으면 빼기에서 선택할 수 없다는 알림이 뜹니다. Y를 앞벽 면(`-20`)에 맞춥니다.\n- 대칭 복사에서 {t:opt.mirrorAt}를 {t:opt.atSide}으로 두면 사본이 원본 옆에 붙어 생깁니다. {t:opt.atOrigin}을 선택합니다.\n",me="---\nid: rec-knot\ntitle: 매듭 모양: 꿰어진 고리 사슬\n분류: 3D 물체 예제\n난이도: 중급\nworkspace: 3D 물체\nkeywords: 매듭, 매듭 모양, 고리, 사슬, 체인, 꿰어진 고리, 엮인 고리, 연결 고리, 트레포일, 꼬임, 꼰 줄, 밧줄, 새끼줄, 토러스, 도넛, 매뜹, 메듭, knot, chain, linked rings, chain link, trefoil, rope, twisted\ncommands: torus, duplicate, rectPattern, group, helix, pipe\norder: 150\n---\n\n## 무엇\n\n트레포일 같은 진짜 매듭은 공간에서 휘며 자기 자신을 넘어가는 닫힌 경로가 필요합니다. NukCAD의 스케치는 늘 한 평면 위에 있고 공간 곡선(3D 스플라인)을 그리는 도구가 없어서, 그런 매듭 경로를 그려 [경로 밀기·파이프](help:obj-sweep)로 감쌀 수는 없습니다. 대신 평평한 고리를 서로 꿰어 풀리지 않는 사슬을 만들고, 꼰 줄은 {c:helix}으로 만듭니다. 예제는 고리 6개가 이어진 사슬(길이 약 114 mm, 고리 바깥지름 29 mm)입니다.\n\n## 하는 순서\n\n1. 새 문서에서 명령줄에 `torus 12 2.5`를 입력합니다(고리 반지름 12, 관 반지름 2.5). 속성 창의 {t:panel.position} Z를 `12`로 바꿉니다. 바닥에서 12 mm 떠 있는 누운 고리입니다.\n2. 고리를 선택한 채 {k:duplicate}를 눌러 {c:duplicate}합니다.\n3. 사본의 속성 창에서 {t:panel.rotation} X를 `90`으로, {t:panel.position}를 X `17`, Y `2.5`, Z `14.5`로 바꿉니다. 선 고리가 누운 고리의 구멍을 지나갑니다.\n4. 화면을 회전해 두 고리가 서로 닿지 않고 꿰어져 있는지 봅니다. 가장 가까운 곳의 틈은 2 mm입니다.\n5. 누운 고리를 클릭하고 Shift를 누른 채 선 고리를 클릭한 뒤 {m:rectPattern} 단추를 누릅니다. {t:opt.count} X를 `3`, {t:opt.spacing} X를 `34`로 하고 Enter를 누릅니다.\n6. {k:selectAll}로 모두 선택하고 {m:group} 단추를 눌러 한 묶음으로 만듭니다.\n\n## 팁\n\n- 사슬을 더 길게 하려면 5단계의 {t:opt.count} X를 늘립니다. 34 mm마다 누운 고리와 선 고리가 한 쌍씩 붙습니다.\n- 고리끼리 닿지 않으므로 출력하면 따로 움직이는 진짜 사슬이 됩니다. 누운 고리는 떠 있으므로 슬라이서에서 서포트를 켭니다.\n- 꼰 줄 모양: {m:helix}으로 {t:opt.coilRadius} `6`, {t:opt.pitch} `16`, {t:opt.turns} `3`, {t:opt.wireSize} `4`인 나선을 놓습니다. 복제한 사본을 원래와 같은 {t:panel.position}에 두고 {t:panel.rotation} Z를 `180`으로 바꾸면 두 가닥이 엇갈려 감깁니다. 같은 위치에 `cylinder 5 52` 원기둥을 놓고 셋을 {c:union}하면 꼬인 기둥이 됩니다.\n- {c:pipe}는 스케치 선 말고 물체의 모서리도 경로로 받습니다. 물체의 모서리 가운데에는 공간에서 휜 것이 있습니다. 예를 들어 반지름 20과 12인 두 원기둥을 직각으로 겹쳐 {c:union}하면 만나는 곳의 모서리가 말안장처럼 휜 닫힌 선이 되고, 이 모서리를 {c:pipe}의 경로로 선택할 수 있습니다. 모서리 모양에 따라 관이 만들어지지 않을 수도 있습니다.\n- 고리 크기를 바꿀 때는 모든 값을 같은 비율로 바꿉니다. 두 배로 하려면 `torus 24 5`, 1단계 Z `24`, 3단계 X `34`·Y `5`·Z `29`, 5단계 간격 `68`입니다.\n- 관련 도구: [기본 도형](help:obj-primitives), [복제](help:obj-duplicate), [패턴](help:obj-pattern), [기계 요소](help:obj-parts).\n\n## 자주 하는 실수\n\n- 고리끼리 닿지 않으므로 {c:union}로 합치려 하면 닿아 있지 않다는 알림이 뜹니다. 함께 이동하려면 6단계처럼 {c:group}으로 묶습니다.\n- 3단계에서 위치를 정확히 넣지 않으면 두 고리가 서로 파고들거나 꿰어지지 않습니다. 복제한 사본은 원래 고리 옆에 생기므로 X·Y·Z를 모두 다시 넣습니다.\n- 스케치에 8자나 매듭 모양 선을 그려 {c:pipe}로 감싸면 선이 한 평면 위에서 자기 자신과 겹쳐 관이 서로 파고듭니다. 매듭이 되지 않고 만들어지지 않을 수도 있습니다.\n- {c:rotX} 단추로 회전하면 고리의 가운데를 기준으로 돌아 위치가 3단계 값과 달라집니다. 속성 창의 {t:panel.rotation}에 직접 넣습니다.\n",he=`---
id: rec-nameplate
title: 이름표
분류: 3D 물체 예제
난이도: 기초
workspace: 3D 물체
keywords: 이름표, 명찰, 네임택, 네임태그, 키링, 열쇠고리, 가방 고리, 이름 새기기, 글자 새기기, 양각, 음각, 각인, 판, 끈 구멍, 이름표 만들기, 명찰 만들기, nameplate, name tag, keychain, key ring, emboss, engrave, text
commands: box, fillet, hole, text, extrude
order: 80
---

## 무엇

80 × 25 × 3 mm 판의 네 귀퉁이를 둥글게 깎고, 끈을 꿸 구멍을 뚫고, 이름을 1 mm 도드라지게 올린 이름표를 만듭니다. 가방 고리나 열쇠고리로 쓸 수 있습니다.

## 하는 순서

1. {m:box} 단추를 누르고 바닥에 놓습니다. 속성 창에서 {t:param.x} \`80\`, {t:param.y} \`25\`, {t:param.z} \`3\`으로 바꾸고 {t:panel.position} X, Y, Z를 모두 \`0\`으로 넣습니다.
2. {m:fillet} 단추를 누르고 판 네 귀퉁이의 짧은 세로 모서리 네 개를 클릭합니다. {t:opt.radius}을 \`5\`로 하고 {t:btn.apply} 단추를 누릅니다.
3. {m:hole} 단추를 누르고 판 윗면의 왼쪽 끝에서 7 mm쯤 안쪽, 폭의 가운데를 클릭합니다. {t:opt.diameter} \`5\`, {t:opt.holeDepth} \`0\`으로 하고 {t:btn.apply} 단추를 누릅니다.
4. {m:text} 단추를 누르고 판 윗면을 클릭해 평면을 선택한 뒤, 글자가 시작할 곳(구멍 오른쪽)을 한 번 더 클릭합니다.
5. 창에 이름(예: 홍길동)을 쓰고 글꼴을 선택합니다. {t:text.height}를 \`12\`로 하고 {t:btn.apply} 단추를 누릅니다.
6. {m:extrude} 단추를 누릅니다. 글자가 모두 선택되고 판이 합칠 물체로 정해집니다. {t:opt.distance}에 \`1\`을 넣고 {t:btn.apply} 단추를 누르면 글자가 1 mm 도드라집니다.

## 팁

- 글자를 파 넣으려면(음각) {t:opt.distance}에 \`-0.8\`처럼 음수를 넣습니다. 안쪽으로 들어가면 결과가 {t:op.subtract}로 바뀝니다.
- 구멍 위치를 정확히 정하려면 {c:hole} 창에서 {t:tweak.byDistance}을 선택하고 {t:tweak.fromLeft}와 {t:tweak.fromBottom}에 거리를 넣습니다.
- 납작한 끈을 꿰려면 {c:hole} 창에서 {t:mo.holeRect}을 선택하고 {t:mo.holeWidth} \`3\`, {t:mo.holeLength} \`12\`, {t:mo.holeCorner} \`1.5\`로 길쭉한 구멍을 뚫습니다. 방향은 {t:mo.turn}로 회전합니다.
- 글자를 놓은 뒤에는 시작점의 작은 네모 손잡이를 끌어 위치를 이동합니다. 가는 획이 프린트에서 끊어지면 {t:text.bold}를 켭니다.
- 선택한 글꼴에 한글이 없으면 그 글자를 다른 글꼴로 그린다는 안내가 창에 나옵니다. 한글 글꼴을 선택하면 모양이 고르게 나옵니다.
- 판 윗면 테두리까지 둥글게 하려면 글자를 올리기 전에 윗면 테두리 모서리를 선택해 반지름 \`0.5\`로 한 번 더 모깎기합니다.
- 더 자세한 글자 옵션은 [문자](help:obj-text), 돌출은 [돌출](help:obj-extrude), 구멍 모양은 [구멍](help:obj-hole)을 봅니다.

## 자주 하는 실수

- {c:extrude}에서 이미 선택된 글자를 클릭하면 그 글자만 빠집니다. 모두 선택되어 있으면 바로 거리를 넣습니다.
- 거리를 바꾸지 않고 적용하면 기본값(10 mm)만큼 글자가 높이 솟습니다.
- 돌출한 뒤에 글자 스케치를 고쳐도 판의 글자는 바뀌지 않습니다. 내용과 위치를 돌출 전에 확인합니다.
- 글자가 판 밖으로 나가면 공중에 뜬 조각이 생깁니다. 글자 높이와 시작점을 판 안에 맞춥니다.
- 세로 모서리가 짧아 잘 클릭되지 않으면 화면을 확대합니다. 윗면 테두리를 선택하면 위쪽만 둥글어집니다.
`,ge=`---
id: rec-pencil-holder
title: 구멍 무늬 연필꽂이
분류: 3D 물체 예제
난이도: 중급
workspace: 3D 물체
keywords: 연필꽂이, 펜꽂이, 연필통, 필통, 펜 홀더, 펜통, 붓꽂이, 구멍 무늬, 구멍 뚫린 통, 원형 패턴, 둥글게 늘어놓기, 원통, 속 비우기, 연필꽃이, 연필 꽂이, pencil holder, pen holder, pen cup, desk organizer
commands: circPattern, cylinder, shell, group, subtract
order: 130
---

## 무엇

원기둥의 [속을 비워](help:obj-shell) 통을 만들고, 작은 원기둥 하나를 [원형 패턴](help:obj-pattern)으로 둘레에 늘어놓은 뒤 한꺼번에 빼서 옆면에 구멍 무늬를 냅니다. 완성 크기는 지름 80 mm, 높이 100 mm, 벽 두께 2.4 mm이고, 높이 50 mm에 지름 10 mm 구멍 12개가 둘러 있습니다.

## 하는 순서

1. 새 문서에서 명령줄에 \`cylinder 40 100\`을 입력합니다(반지름 40, 높이 100). 속성 창의 {t:panel.position}가 X \`0\`, Y \`0\`, Z \`0\`인지 확인합니다.
2. {m:shell} 단추를 누르고 원기둥의 윗면을 클릭한 뒤 \`2.4\`를 입력하고 Enter를 누릅니다.
3. 명령줄에 \`cylinder 5 20\`을 입력해 작은 원기둥을 만들고, 속성 창에서 {t:panel.rotation}의 Y를 \`90\`, {t:panel.position}를 X \`25\`, Y \`0\`, Z \`50\`으로 바꿉니다. 작은 원기둥이 옆으로 누워 통의 벽을 뚫고 지나갑니다.
4. 작은 원기둥을 선택한 채 {m:circPattern} 단추를 누르고 {t:opt.count}를 \`12\`, {t:opt.totalAngle}를 \`360\`으로 하고 {t:opt.patternCenter}이 {t:opt.atOrigin}인지 확인한 뒤 Enter를 누릅니다.
5. 작은 원기둥 12개가 모두 선택된 채 {m:group} 단추({k:group})를 눌러 한 묶음으로 만듭니다.
6. 통을 클릭하고 Shift를 누른 채 작은 원기둥 하나를 클릭합니다. 그룹 전체가 함께 선택됩니다.
7. {m:subtract} 단추를 누르고 Enter를 누르면 구멍 12개가 한 번에 뚫립니다.

## 팁

- 구멍 크기와 개수를 바꾸면 무늬가 달라집니다. 예를 들어 3단계에서 \`cylinder 3 20\`, 4단계에서 {t:opt.count} \`18\`로 하면 지름 6 mm 구멍 18개가 됩니다.
- 3단계에서 원기둥 대신 \`prism 5 20 6\`(반지름 5, 높이 20, 변 6개)으로 {c:prism}을 만들면 육각 구멍 무늬가 됩니다.
- 구멍을 두 줄로 내려면 4단계 전에 작은 원기둥을 {k:duplicate}로 복제하고 사본의 {t:panel.position}를 X \`25\`, Y \`0\`, Z \`75\`로 바꾼 뒤, 두 개를 함께 선택하고 원형 패턴을 만듭니다.
- 구멍 하나하나를 원하는 곳에 뚫을 때는 [구멍](help:obj-hole)보다, 이 예제처럼 원기둥을 겹쳐 [빼기](help:obj-subtract)하는 쪽이 곡면에서도 잘 됩니다.
- 노즐 0.4 mm 프린터에서는 벽 두께를 0.4의 배수(1.6, 2.4)로 하면 슬라이서가 벽을 빈틈없이 채웁니다.
- 통 안을 칸으로 나누려면 두께 2 mm 직육면체를 통 안에 세우고 벽과 바닥에 닿게 한 뒤 {c:union}로 붙입니다.
- 패턴과 그룹은 [패턴](help:obj-pattern), [그룹·분리](help:obj-group)에 자세히 있습니다.

## 자주 하는 실수

- 1단계 원기둥이 원점에 있지 않으면 원형 패턴이 원점을 중심으로 돌아 구멍이 엉뚱한 곳에 생깁니다. 위치를 \`0\`으로 맞추거나, {t:opt.patternCenter}에서 {t:opt.originPoint}을 선택하고 통 바닥 원의 중심을 클릭합니다.
- 5단계에서 그룹을 만들지 않으면 6단계에서 작은 원기둥이 하나만 선택됩니다.
- {t:panel.rotation} Y를 \`-90\`으로 넣으면 작은 원기둥이 통 안쪽으로 누워 벽에 닿지 않고, {c:subtract}에서 선택할 수 없다는 알림이 뜹니다.
- 작은 원기둥이 벽을 다 지나가지 못하면 구멍 대신 오목한 홈이 됩니다. 벽은 중심에서 37.6~40 mm에 있으므로, 3단계처럼 25~45 mm에 걸치게 놓습니다.
`,_e="---\nid: rec-phone-stand\ntitle: 휴대폰 거치대\n분류: 3D 물체 예제\n난이도: 중급\nworkspace: 3D 물체\nkeywords: 휴대폰 거치대, 핸드폰 거치대, 폰 거치대, 스마트폰 거치대, 휴대폰 받침, 폰 스탠드, 거치대, 받침대, 태블릿 거치대, 충전선 홈, 케이블 홈, 옆모습 돌출, 단면 돌출, 거치데, 핸폰 거치대, phone stand, phone holder, tablet stand\ncommands: extrude, newSketch, line, fillet, subtract, rotX, drop\norder: 120\n---\n\n## 무엇\n\n옆모습(단면)을 바닥 스케치에 그리고 [돌출](help:obj-extrude)해 휴대폰 거치대를 만듭니다. 앞쪽 받침에는 충전선이 지나가는 홈을 내고, 힘을 받는 안쪽 모서리는 [모깎기](help:obj-fillet)로 둥글게 해 튼튼하게 합니다. 완성 크기는 너비 70 mm, 깊이 100 mm, 높이 80 mm이고 등받이는 바닥에서 약 72° 기울어 있습니다.\n\n## 하는 순서\n\n1. {m:newSketch} 단추를 누르고 빈 바닥을 클릭합니다. 원점에 바닥 스케치가 시작됩니다.\n2. {m:line} 단추를 누르고 명령줄에 좌표를 하나씩 입력하며 Enter를 누릅니다: `0,0` → `100,0` → `100,20` → `94,20` → `94,6` → `74,6` → `50,80` → `44,80` → `68,6` → `0,6` → `c` (첫 점으로 닫기).\n3. {c:exitSketch} 단추를 누릅니다.\n4. {m:extrude} 단추를 누르고 그린 옆모습 영역을 클릭한 뒤 `70`을 입력하고 Enter를 누릅니다. 거치대가 옆으로 누운 채 만들어집니다.\n5. {m:fillet} 단추를 누르고 등받이와 바닥판이 만나는 안쪽 모서리 두 개(스케치 좌표 `74,6`과 `68,6` 자리)를 클릭한 뒤 `3`을 입력하고 Enter를 누릅니다.\n6. 명령줄에 `box 26 22 12`를 입력해 상자를 만들고, 속성 창의 {t:panel.position}를 X `89`, Y `10`, Z `29`로 바꿉니다. 받침 앞쪽 가운데를 덮는 이 상자가 충전선 홈 자리입니다.\n7. 거치대를 클릭하고 Shift를 누른 채 상자를 클릭한 뒤 {m:subtract} 단추를 누르고 Enter를 누릅니다.\n8. 거치대를 선택한 채 {m:rotX} 단추를 눌러 세우고, {m:drop} 단추를 눌러 바닥에 내려놓습니다.\n\n## 팁\n\n- 좌표 `74,6`부터 `94,6`까지 20 mm가 휴대폰이 놓이는 받침 폭이고, 앞쪽 턱 높이는 받침 위로 14 mm입니다. 두꺼운 케이스에 맞추려면 등받이 네 점(`74,6`, `50,80`, `44,80`, `68,6`)의 X를 모두 같은 값만큼 줄입니다. 4씩 줄이면 받침 폭이 24 mm가 됩니다.\n- 등받이 각도는 위쪽 두 점으로 정합니다. `50,80`과 `44,80` 대신 `44,80`과 `38,80`을 입력하면 등받이가 더 눕습니다. 두 점의 X 차이 6 mm가 등받이 두께이므로 그대로 둡니다.\n- 태블릿용은 4단계의 돌출 거리를 `120`으로 하고, 6단계 상자의 Z를 `54`로 바꾸면 홈이 다시 가운데에 옵니다.\n- 좌표를 명령줄이 아니라 커서 옆 입력 칸에 바로 칠 때는 `#100,0`처럼 앞에 `#`을 붙여야 X·Y 좌표로 들어갑니다. 자세한 방법은 [좌표·길이 입력](help:input-coords)과 [명령줄](help:input-cmdline)에 있습니다.\n- 8단계처럼 세운 방향 그대로 출력하면 등받이가 수직에서 약 18°만 기울어 있어 대개 서포트 없이 출력됩니다.\n- 모든 모서리를 조금씩 둥글게 하려면 {c:fillet} 창에서 선택한 물체의 모서리를 한꺼번에 선택하는 단추를 누르고 `1`을 넣습니다.\n- 재료를 줄이려면 4단계 돌출 거리를 `50`으로 줄이고 6단계 상자의 Z를 `19`로 바꿉니다.\n\n## 자주 하는 실수\n\n- 마지막에 `c`를 입력하지 않으면 선이 닫히지 않아 돌출할 영역이 생기지 않습니다. 그대로 끝냈으면 스케치에서 {m:closeOpen}로 두 끝을 잇습니다.\n- 커서 옆 입력 칸에 `#` 없이 `100,0`을 치면 길이 100, 각도 0으로 읽혀 모양이 틀어집니다. 명령줄에 입력하거나 `#`을 붙입니다.\n- 6단계 위치를 잘못 넣어 상자가 거치대에 닿지 않으면 {c:subtract}에서 상자를 선택할 수 없다는 알림이 뜹니다. 속성 창의 위치를 다시 확인합니다.\n- {c:rotX}는 누를 때마다 90°씩 회전합니다. 거꾸로 섰으면 {k:undo}로 되돌립니다.\n",ve=`---
id: rec-pipe-sweep
title: 휘어진 파이프
분류: 3D 물체 예제
난이도: 중급
workspace: 3D 물체
keywords: 파이프, 관, 굽은 관, 휘어진 관, 엘보, 엘보우, 배관, 호스, 빨대, 휘어진 막대, 경로, 경로 밀기, 스윕, 파이프 만들기, 파이브, pipe, tube, elbow, bent pipe, hose, sweep, path
commands: newSketch, polyline, pipe, drop, sweep
order: 70
---

## 무엇

바닥에 그린 경로(직선 50 mm → 반지름 30 mm로 굽은 호 → 직선 50 mm)를 따라 바깥지름 12 mm, 안지름 8 mm인 ㄴ자 굽은 관을 만듭니다. 둥근 관은 {c:pipe}, 사각형이나 별 같은 다른 단면은 {c:sweep}로 만듭니다 ([경로 밀기·파이프](help:obj-sweep)).

## 하는 순서

1. {m:newSketch} 단추를 누르고 빈 바닥을 클릭해 바닥에 스케치를 시작합니다.
2. {m:polyline} 단추를 누르고 명령줄에 \`0,0\`, \`50,0\`을 하나씩 입력하며 Enter를 누릅니다.
3. 명령줄에 \`A\`를 입력해 호로 바꾸고 \`80,30\`을 입력합니다. 앞 직선에 매끄럽게 이어지는 반지름 30 mm 호가 그려집니다.
4. \`L\`을 입력해 직선으로 바꾸고 \`80,80\`을 입력한 뒤, 빈 명령줄에서 Enter를 눌러 끝냅니다. 이어서 {c:exitSketch} 단추를 누릅니다.
5. {m:pipe} 단추를 누르고 경로 선을 클릭합니다. 끝점끼리 이어진 직선·호·직선이 한 경로로 선택됩니다.
6. 창에서 {t:opt.pipeDiameter} \`12\`, {t:opt.pipeInner} \`8\`로 정하고 {t:btn.apply} 단추를 누릅니다.
7. 관의 중심선이 바닥 높이에 있어 절반이 바닥 아래에 있으므로 {m:drop} 단추를 눌러 바닥 위로 올립니다.

## 팁

- \`A\`, \`L\`을 입력하는 대신 {c:polyline} 창에서 {t:opt.segArc}와 {t:opt.segLine}을 눌러 바꿔도 됩니다.
- {t:opt.pipeInner}을 \`0\`으로 두면 속이 찬 막대가 됩니다. 고리, 손잡이, 철사 모양에 씁니다.
- 둥글지 않은 단면은 {m:sweep}로 만듭니다. 바닥의 다른 곳에 새 스케치를 열어 단면(예: 10 × 10 mm 직사각형)을 그리고, {c:sweep}에서 단면 영역을 클릭한 다음 경로 선을 클릭하고 Enter를 누릅니다. {t:opt.sweepAnchor}이 {t:opt.anchorCenter}이면 단면의 중심이 경로 시작점으로 이동되어 경로에 직각으로 섭니다.
- 물체의 모서리도 경로가 됩니다. {c:pipe}에서 상자의 모서리를 여러 개 클릭하면 그 모서리를 따라 막대가 생겨 테두리 틀을 만들 수 있습니다.
- {c:pipe} 창에서 {t:op.subtract}를 선택하고 {t:role.target}를 정하면 그 물체 속에 굽은 홈이나 구멍을 팝니다.
- 관 끝에 반지름 8 mm, 두께 3 mm 원기둥을 겹쳐 {c:union}하면 플랜지가 됩니다.
- {c:pipe}, {c:sweep}, {c:spline}은 [고급 메뉴](help:start-level)에 있습니다. 경로는 {c:spline}이나 {c:arc}로 그려도 되며, 끝점끼리 이어져 있어야 한 경로가 됩니다.

## 자주 하는 실수

- 선의 끝점이 떨어져 있으면 클릭한 선과 이어진 부분까지만 경로가 됩니다. 좌표를 다시 확인하거나 {c:closeOpen}로 잇습니다.
- 굽은 곳의 반지름이 관 반지름(6 mm)보다 작으면 관이 스스로 겹쳐 만들어지지 않습니다. 굽은 반지름을 넉넉히 크게 합니다.
- 호 없이 직선만 꺾어 이으면 꺾인 곳에서 관이 잘 만들어지지 않을 수 있습니다. 꺾이는 곳은 호로 둥글게 잇습니다.
- 안지름은 바깥지름보다 작아야 하며, 창은 더 큰 값을 받지 않습니다. 바깥지름(처음 값 4 mm)을 먼저 바꾼 뒤 안지름을 넣습니다.
`,ye=`---
id: rec-shell-lamp
title: 속 비운 전등갓
분류: 3D 물체 예제
난이도: 중급
workspace: 3D 물체
keywords: 전등갓, 등갓, 램프, 램프 갓, 조명, 조명 갓, 스탠드 갓, 무드등, 펜던트 조명, 반구, 돔, 속 비우기, 구멍 무늬, 빛 새는 구멍, 전등 갓, 전등깟, lamp shade, lampshade, lamp, light shade, dome, pendant
commands: hemisphere, shell, cylinder, circPattern, group, subtract
order: 160
---

## 무엇

반구의 [속을 비워](help:obj-shell) 얇은 갓을 만들고, 꼭대기에는 전구 소켓 구멍을, 둘레에는 작은 구멍 무늬를 냅니다. 불을 켜면 구멍으로 빛이 새어 나옵니다. 완성 크기는 지름 120 mm, 높이 60 mm, 두께 2 mm, 소켓 구멍 지름 41 mm이고, 지름 8 mm 구멍 12개가 둘러 있습니다.

## 하는 순서

1. 새 문서에서 명령줄에 \`hemisphere 60\`을 입력합니다(반지름 60). 속성 창의 {t:panel.position}가 X \`0\`, Y \`0\`, Z \`0\`인지 확인합니다.
2. {m:shell} 단추를 누르고, 화면을 회전해 아래에서 보며 반구의 평평한 바닥면을 클릭한 뒤 \`2\`를 입력하고 Enter를 누릅니다.
3. 명령줄에 \`cylinder 20.5 80\`을 입력하고 {t:panel.position}를 X \`0\`, Y \`0\`, Z \`0\`으로 바꿉니다. 꼭대기를 뚫을 소켓 구멍 자리입니다.
4. 명령줄에 \`cylinder 4 80\`을 입력하고 {t:panel.position}를 X \`40\`, Y \`0\`, Z \`0\`으로 바꿉니다.
5. 작은 원기둥을 선택한 채 {m:circPattern} 단추를 누르고 {t:opt.count}를 \`12\`, {t:opt.totalAngle}를 \`360\`으로 하고 {t:opt.patternCenter}이 {t:opt.atOrigin}인지 확인한 뒤 Enter를 누릅니다.
6. 작은 원기둥 12개가 모두 선택된 채 {m:group} 단추를 누릅니다.
7. 갓을 클릭하고 Shift를 누른 채 소켓 원기둥과 작은 원기둥 하나를 차례로 클릭한 뒤, {m:subtract} 단추를 누르고 Enter를 누릅니다.

## 팁

- 구멍을 한 줄 더 내려면 4단계처럼 X \`52\`에 원기둥을 놓고 5~6단계를 한 번 더 한 뒤, 7단계에서 그 그룹도 함께 선택합니다. 가장자리 가까이에 둘째 줄이 생깁니다.
- 갓 모양을 바꾸려면 반구 대신 {m:cone}을 씁니다. 높이가 반지름보다 큰 원뿔은 벽이 45°보다 가팔라 서포트 없이 출력하기 쉽습니다.
- 종 모양처럼 원하는 단면이 있으면 그 단면의 반쪽을 스케치에 그려 [회전체](help:obj-revolve)로 만듭니다. 처음부터 두께 2 mm의 띠 모양 단면을 그리면 {c:shell}가 필요 없습니다.
- 작은 원기둥 대신 {c:prism}이나 별 모양 스케치를 돌출한 물체를 쓰면 구멍 모양이 달라집니다.
- 구멍 무늬를 만드는 방법은 [구멍 무늬 연필꽂이](help:rec-pencil-holder)와 같습니다. 그곳의 팁도 함께 봅니다.
- 플라스틱 갓에는 열이 적은 LED 전구만 씁니다.

## 자주 하는 실수

- 2단계에서 평평한 바닥면 대신 둥근 면을 클릭하면 원하는 갓이 되지 않습니다. {k:undo}로 되돌리고 바닥면을 선택합니다.
- 반구 꼭대기 쪽의 안쪽 면은 거의 수평이라 서포트 없이 출력하면 처집니다. 슬라이서에서 서포트를 켜거나 원뿔 모양 갓으로 바꿉니다.
- 1단계 반구가 원점에 있지 않으면 소켓 구멍과 구멍 무늬가 가운데에서 벗어납니다. 위치를 \`0\`으로 맞춥니다.
- 7단계에서 그룹이 아닌 작은 원기둥을 하나만 선택하면 구멍이 하나만 뚫립니다. 6단계에서 그룹을 먼저 만듭니다.
`,be=`---
id: rec-spiral
title: 나선: 3D 나선·스프링·평면 나선
분류: 3D 물체 예제
난이도: 기초
workspace: 3D 물체
keywords: 나선, 나선형, 코일, 스프링, 용수철, 소용돌이, 회오리, 달팽이, 모기향, 꼬불꼬불, 3d 나선, 평면 나선, 2d 나선, 헬릭스, 나사선, 나선 만들기, 나선형 띠, spiral, helix, coil, spring, swirl
commands: helix, spring, spiral, offset, extrude
order: 140
---

## 무엇

공간에서 감겨 올라가는 나선은 [기계 요소](help:obj-parts)의 {c:helix}과 {c:spring}으로 값만 넣어 바로 만듭니다. 바닥에 납작한 나선은 스케치의 {c:spiral}으로 그린 뒤 띠 모양으로 닫아 돌출합니다. 예제의 3D 나선은 바깥지름 33 mm, 높이 43 mm이고, 평면 나선은 지름 약 86 mm, 띠 폭 3 mm, 두께 3 mm입니다.

## 하는 순서

1. {m:helix} 단추를 누르고 창에서 단면 {t:opt.secCircle}을 선택한 뒤 {t:opt.coilRadius} \`15\`, {t:opt.pitch} \`8\`, {t:opt.turns} \`5\`, {t:opt.wireSize} \`3\`을 넣고 바닥을 클릭해 놓습니다.
2. {m:spring} 단추를 누르고 {t:opt.outerDia} \`20\`, {t:opt.wireDia} \`2\`, {t:opt.freeLength} \`40\`, {t:opt.coils} \`8\`을 넣은 뒤 바닥을 클릭해 놓습니다.
3. {m:newSketch} 단추를 누르고 빈 바닥을 클릭해 바닥 스케치를 시작합니다.
4. {m:spiral} 단추를 누르고 창에서 {t:opt.turns} \`4\`, {t:opt.startRadius} \`5\`를 넣습니다. 중심을 클릭한 뒤 커서를 바깥쪽에 둔 채 \`40\`을 입력하고 Enter를 누릅니다.
5. {m:offset} 단추를 누르고 창의 {t:opt.distance}를 \`3\`으로 바꾼 뒤, 나선을 클릭하고 나선의 바깥쪽을 클릭합니다.
6. {m:line} 단추를 누르고 두 나선의 안쪽 끝끼리 이은 뒤 Enter를 누르고, 바깥쪽 끝끼리도 이은 뒤 Enter를 누릅니다. 객체 스냅({k:osnap})의 끝점에 붙여 정확히 잇습니다.
7. {c:exitSketch} 단추를 누르고 {m:extrude} 단추를 누른 뒤, 나선 띠 영역을 클릭하고 \`3\`을 입력해 Enter를 누릅니다.

## 팁

- 1단계에서 {t:opt.secSquare}이나 {t:opt.secTriangle} 단면을 선택하면 각진 줄이나 나사산 같은 나선이 됩니다. {t:opt.leftHand}를 켜면 반대 방향으로 감깁니다.
- 1·2단계의 창에서 {t:opt.groundEnds}를 켜면 양 끝이 평평하게 잘려 바닥에 바로 섭니다.
- 놓은 나선과 스프링은 선택한 뒤 {c:editPart}으로 값을 다시 바꿀 수 있습니다.
- 둥근 철사 같은 평면 나선은 5~7단계 대신 {m:pipe} 단추를 누르고 나선을 클릭한 뒤 {t:opt.pipeDiameter}을 \`3\`으로 해서 만듭니다. 관의 가운데가 바닥 높이에 있으므로 {c:drop}로 바닥 위에 올립니다.
- 평면 나선을 띠 폭 2 mm, 두께 1.2 mm처럼 얇게 출력하면 가운데를 잡아 올렸을 때 원뿔처럼 늘어나는 나선이 됩니다.
- 다음 바퀴와의 간격은 (바깥 반지름 − {t:opt.startRadius}) ÷ {t:opt.turns}입니다. 이 예제는 (40 − 5) ÷ 4 = 8.75 mm라 띠 폭 3 mm 사이에 틈이 넉넉합니다.
- {c:helix}, {c:spring}, {c:spiral}, {c:pipe}는 고급 메뉴에 있습니다 ([일반·고급 메뉴](help:start-level)). 꼬인 줄과 고리 모양은 [매듭 모양](help:rec-knot)에 있습니다.

## 자주 하는 실수

- {t:opt.wireSize}를 {t:opt.pitch}보다 크게 넣으면 감긴 줄끼리 겹치므로, 창이 단면 크기를 피치보다 작은 값으로 줄여 놓습니다. 굵은 줄이 필요하면 피치를 먼저 키웁니다.
- 나선은 열린 선이라 그대로는 돌출할 영역이 없습니다. 간격 띄우기 선을 만들고 두 끝을 이어 닫힌 띠로 만들어야 합니다.
- 띠 폭을 바퀴 사이 간격보다 크게 하면 띠가 다음 바퀴와 겹쳐 영역이 제대로 생기지 않습니다.
- 1단계 창에서 {t:opt.out2d}을 선택한 채 놓으면 옆에서 본 물결 모양 2D 도면이 생깁니다. 입체가 필요하면 {t:opt.out3d}를 선택합니다.
`,xe=`---
id: rec-table
title: 탁자
분류: 3D 물체 예제
난이도: 기초
workspace: 3D 물체
keywords: 탁자, 테이블, 둥근 탁자, 원탁, 식탁, 책상, 탁자 다리, 다리 네 개, 가구, 가구 모형, 미니어처, 원형 패턴, 테이블 만들기, 탁짜, table, round table, desk, furniture, legs, circular pattern
commands: cylinder, fillet, circPattern, union
order: 40
---

## 무엇

지름 80 mm, 높이 50 mm인 둥근 탁자 모형을 만듭니다. 상판을 원점 가운데에 놓고 다리 하나를 만든 뒤, [원형 패턴](help:obj-pattern)으로 원점을 중심으로 다리 네 개를 같은 간격으로 늘어놓습니다.

## 하는 순서

1. {m:cylinder} 단추를 누르고 바닥을 클릭해 놓습니다. 속성 창에서 {t:param.r} \`40\`, {t:param.h} \`4\`, {t:panel.position} X \`0\`, Y \`0\`, Z \`46\`으로 바꿉니다. 탁자 상판입니다.
2. {m:fillet} 단추를 누르고 상판의 위아래 둥근 모서리 두 개를 클릭합니다. {t:opt.radius}을 \`1\`로 하고 {t:btn.apply} 단추를 누릅니다.
3. 원기둥을 하나 더 놓고 {t:param.r} \`2.5\`, {t:param.h} \`46\`, {t:panel.position} X \`30\`, Y \`0\`, Z \`0\`으로 바꿉니다. 다리입니다.
4. 다리를 선택한 채 {m:circPattern} 단추를 누릅니다. {t:opt.count} \`4\`, {t:opt.totalAngle} \`360\`으로 하고 {t:opt.patternCenter}은 {t:opt.atOrigin}으로 둔 채 {t:btn.apply} 단추를 누릅니다.
5. {k:selectAll}로 모두 선택하고 {m:union} 단추를 누릅니다.

## 팁

- 다리 수를 바꾸려면 {t:opt.count}만 \`3\`이나 \`6\`으로 바꿉니다. 다리가 원점 둘레에 같은 간격으로 놓입니다.
- 네모난 탁자는 상판을 직육면체 80 × 50 × 4 (Z 46), 다리를 4 × 4 × 46으로 만들고 [의자](help:rec-chair)처럼 다리를 상판 모서리에 정렬한 뒤, {c:rectPattern}에서 {t:opt.count} X·Y \`2\`, {t:opt.spacing} X \`76\`, Y \`46\`으로 늘어놓습니다. 간격은 상판 크기에서 다리 굵기를 뺀 값입니다.
- 상판이 원점에 있지 않으면 {t:opt.patternCenter}을 {t:opt.originPoint}으로 바꾸고 상판의 가운데를 클릭합니다.
- 가운데 기둥 하나짜리 탁자: 다리 대신 반지름 5 mm 원기둥을 원점에 세우고, 바닥에 반지름 20 mm, 높이 3 mm 원기둥을 받침으로 깔아 합칩니다.
- 다 만든 뒤 크기를 바꾸려면 [스마트 스케일](help:obj-smart-scale)에서 {t:opt.keepRatio}를 켜고 지름이나 높이를 입력합니다.

## 자주 하는 실수

- 다리를 원점(X 0, Y 0)에 두면 패턴 사본이 모두 같은 자리에 겹칩니다. 다리는 원점에서 떨어진 곳(X 30)에 둡니다.
- 다리 높이(46)와 상판 Z(46)가 다르면 틈이 생겨 합쳐지지 않거나 다리가 상판 위로 튀어나옵니다.
- 모깎기 반지름은 상판 두께의 절반(2 mm)보다 작게 합니다. 위아래 모서리를 모두 둥글리면 두 반지름의 합이 두께보다 작아야 합니다.
`,Se=`---
id: rec-trick-align-mirror
title: 요령: 정렬과 대칭 복사로 대칭 물체 빨리 만들기
분류: 3D 물체 예제
난이도: 심화
workspace: 3D 물체
keywords: 정렬, 대칭, 대칭 복사, 좌우 대칭, 양쪽 똑같이, 거울, 미러, 반쪽, 반만 만들기, 끝 맞추기, 가운데 맞추기, 쟁반, 손잡이, 양손잡이, 대칭복사, align, mirror, symmetric, symmetry, tray, handles
commands: mirror3d, align, move, shell, union
order: 180
---

## 무엇

좌우가 같은 물체는 한쪽만 만들고 {c:mirror3d}로 반대쪽을 복사하면 빠르고 정확합니다. 붙일 부품의 자리는 {c:align}로 기준 물체의 끝이나 가운데에 맞추면 좌표를 계산하지 않아도 됩니다. 예제는 양쪽에 손잡이가 달린 쟁반(손잡이까지 140 × 80 × 15 mm)입니다.

## 하는 순서

1. 새 문서에서 명령줄에 \`box 120 80 15\`를 입력합니다. 원점에 놓입니다.
2. {m:shell} 단추를 누르고 윗면을 클릭한 뒤 \`2\`를 입력하고 Enter를 누르면 쟁반이 됩니다.
3. 명령줄에 \`box 12 50 8\`을 입력해 손잡이를 만듭니다.
4. 쟁반을 클릭하고 Shift를 누른 채 손잡이를 클릭한 뒤 {m:align} 단추를 누릅니다. {t:align2.ref}를 누르고 쟁반을 클릭한 다음, X {t:opt.alignLeft}, Y {t:opt.align.mid}, Z {t:opt.alignTop}를 누르고 Enter를 누른 뒤 Esc로 닫습니다.
5. 손잡이만 클릭해 선택하고 {m:move} 단추를 누른 뒤 창의 {t:opt.moveBy} X 칸에 \`-10\`을 입력하고 Enter를 누릅니다. 손잡이가 쟁반 벽에 2 mm 겹친 채 바깥으로 나옵니다. Esc로 닫습니다.
6. 손잡이를 선택한 채 {m:mirror3d} 단추를 누르고 평면을 {t:opt.planeYZ}으로, {t:opt.mirrorAt}를 {t:opt.atOrigin}으로 선택한 뒤 Enter를 누릅니다. 반대쪽 벽에 같은 손잡이가 생깁니다.
7. {k:selectAll}로 모두 선택하고 {m:union} 단추를 누르면 한 덩어리가 됩니다.

## 팁

- 반쪽만 만들어 붙이는 방법: {t:opt.mirrorAt}를 {t:opt.atSide}으로 두면 사본이 선택한 물체의 옆면(평면에 따라 X·Y·Z가 큰 쪽)에 딱 붙어 생깁니다. 바로 {c:union}하면 좌우 대칭 물체가 됩니다.
- {t:opt.keepSource}를 끄면 사본을 만들지 않고 원래 물체를 뒤집습니다. 왼쪽·오른쪽 짝이 다른 부품을 만들 때 씁니다.
- 6단계 전에 손잡이에 손가락 구멍을 뚫거나 모서리를 [모깎기](help:obj-fillet)해 두면, 대칭 사본에도 같은 모양이 그대로 생깁니다.
- {t:opt.atOrigin} 대칭은 원점을 지나는 평면을 씁니다. 쟁반이 원점에 있지 않으면 먼저 쟁반을 선택하고 {m:toOrigin} 단추를 누른 뒤 Enter로 이동합니다.
- {c:align}에서는 기준 물체 둘레에 X·Y·Z 축 색깔의 점이 나타납니다. 점 위에 커서를 두면 이동될 곳이 미리 보이고, 점을 클릭해도 창의 단추와 같습니다.
- 스케치 안에서 대칭으로 그릴 때는 {m:mirror2d}을 씁니다 ([2D 수정](help:obj-sketch-edit)).
- 관련 도구: [정렬](help:obj-align), [대칭 복사](help:obj-mirror), [이동·회전](help:obj-move), [집 모형](help:rec-house-model).

## 자주 하는 실수

- 정렬의 X {t:opt.alignLeft}은 손잡이의 왼쪽 끝을 쟁반의 왼쪽 끝에 맞춥니다. 바깥에 맞붙이는 선택은 없으므로 5단계처럼 더 이동합니다.
- {t:opt.mirrorAt}를 {t:opt.atSide}으로 둔 채 손잡이만 선택하면 사본이 손잡이 바로 옆에 붙어 생깁니다. 쟁반 반대쪽에 두려면 {t:opt.atOrigin}을 선택합니다.
- 손잡이가 쟁반에 닿지 않으면 {c:union}에서 빠집니다. 5단계 거리를 확인합니다.
- 4단계에서 {t:align2.ref}를 정하지 않으면 두 물체를 합친 범위에 맞추므로 쟁반도 함께 움직일 수 있습니다.
`,Ce=`---
id: rec-trick-carve
title: 요령: 선을 넣고 이동해 깎고 다듬기
분류: 3D 물체 예제
난이도: 심화
workspace: 3D 물체
keywords: 깎기, 다듬기, 조각, 모양 다듬기, 선 추가, 면 나누기, 점 추가, 점선면 이동, 점·선·면 이동, 트윅, 부분 지우기, 선택 요소 삭제, 박공지붕, 집 모양, 홈 파기, 문 파기, 용마루, carve, sculpt, reshape, tweak, add line, split face, add point, delete face, gable roof
commands: tweak, addLine, splitFace, presspull, deleteSub, addPoint, box
order: 200
---

## 무엇

상자 하나에 선을 넣어 면을 나누고, 그 선이나 나뉜 면을 이동하고 밀어 모양을 깎아 냅니다. 부품을 따로 만들어 붙이지 않아도 되어 빠릅니다. 예제는 상자에 용마루 선을 넣어 박공지붕을 올리고, 앞면을 나눠 문을 파 넣은 작은 집(60 × 40 × 50 mm, 지붕 경사 45°)입니다.

## 하는 순서

1. 명령줄에 \`box 60 40 30\`을 입력합니다.
2. {m:addLine} 단추를 누르고 상자의 윗면을 클릭합니다. 창에서 {t:tweak.mid}을 선택하고 왼쪽 위 모서리를 클릭한 뒤, 다시 {t:tweak.mid}을 선택하고 오른쪽 위 모서리를 클릭합니다. 윗면이 가운데 선을 따라 둘로 나뉩니다.
3. {m:tweak} 단추를 누르고 2단계에서 생긴 가운데 선을 클릭합니다. {t:tweakflat.choice}이 {t:tweakflat.flat}인지 확인하고 창의 ΔZ 칸에 \`20\`을 입력한 뒤 Enter를 누르면 박공지붕이 됩니다.
4. {m:splitFace} 단추를 누르고 앞면(긴 쪽 벽)을 클릭한 뒤 창에서 {t:split.draw}를 선택합니다.
5. 앞면 아래 모서리에서 가운데보다 8 mm쯤 왼쪽을 클릭하고, 명령줄에 \`@0,25\` → \`@16,0\` → \`@0,-25\`를 차례로 입력합니다. 선이 아래 모서리에 닿으면 면이 바로 나뉘고, 닿지 않았으면 Enter를 누릅니다.
6. {m:presspull} 단추를 누르고 나뉜 문 조각을 클릭한 뒤 \`-2\`를 입력하고 Enter를 누르면 문이 2 mm 파입니다.

## 팁

- 창문도 같은 방법으로 만듭니다. {c:splitFace}에서 첫 점으로 다시 돌아와 닫힌 네모를 그리면 면 가운데에 조각이 생기고, {c:presspull}로 \`-1\`만큼 밀면 창이 됩니다.
- 6단계에서 \`-2\` 대신 \`2\`를 넣으면 앞으로 튀어나온 문이 됩니다.
- {m:addPoint}로 윗면 가운데에 점을 넣고 {c:tweak}에서 {t:tweakflat.bend}를 선택한 뒤 그 점을 위로 이동하면, 둘레 면이 삼각형으로 나뉘며 뾰족한 지붕이 됩니다.
- 잘못 판 홈이나 모깎기 면을 없애려면 물체를 클릭한 뒤 그 면을 한 번 더 클릭해 선택하고 Delete를 누릅니다({c:deleteSub}). 면이 삭제되고 둘레 면이 이어져 메워집니다. 선 추가로 넣은 선을 같은 방법으로 삭제하면 나뉜 면이 다시 하나로 합쳐집니다.
- 꼭짓점 하나를 {t:tweakflat.flat}로 이동하면 면이 기울지 않고 나란히 밀립니다. 한쪽만 기울이려면 모서리를 이동하거나 {t:tweakflat.bend}를 선택합니다.
- {c:addLine}, {c:splitFace}, {c:addPoint}는 고급 메뉴에 있습니다 ([일반·고급 메뉴](help:start-level)).
- 관련 도구: [점·선·면 이동](help:obj-tweak), [부분 삭제와 나누기](help:obj-partial-delete), [밀고 당기기](help:obj-presspull). 쐐기로 지붕을 올리는 방법은 [집 모형](help:rec-house-model)에 있습니다.

## 자주 하는 실수

- 2단계에서 모서리 가운데가 아닌 곳을 찍으면 용마루가 비뚤어져 지붕이 한쪽으로 쏠립니다. {t:tweak.mid}을 선택하거나 객체 스냅({k:osnap})의 중간점에 붙여 찍습니다.
- 3단계에서 선 대신 면을 클릭하면 윗면 반쪽이 통째로 올라갑니다. 선 위를 정확히 클릭합니다.
- 미리 보기가 빨갛게 바뀌면 면을 평평하게 유지할 수 없는 이동이라 적용되지 않습니다. 값을 줄이거나 {t:tweakflat.bend}를 선택합니다.
- 원기둥이나 모깎기한 물체처럼 곡면이 있는 물체는 꼭짓점·모서리를 이동할 수 없습니다. 이런 모양은 상자에서 시작해 다 깎은 뒤 마지막에 모깎기합니다.
`,we='---\nid: rec-trick-fence\ntitle: 요령: 패턴으로 울타리·난간·빗·격자 만들기\n분류: 3D 물체 예제\n난이도: 심화\nworkspace: 3D 물체\nkeywords: 패턴, 울타리, 펜스, 난간, 빗, 격자, 그릴, 환기구, 통풍구, 창살, 반복, 줄지어, 같은 간격, 기둥 여러 개, 직사각형 패턴, 경로 패턴, 원형 패턴, 디오라마, 울따리, fence, railing, comb, grille, grid, vent, pattern, array, repeat\ncommands: rectPattern, circPattern, pathPattern, box, chamfer, union, dropFace\norder: 210\n---\n\n## 무엇\n\n같은 부품을 같은 간격으로 늘어놓는 일은 {c:rectPattern}으로 한 번에 합니다. 간격은 "부품 폭 + 틈"으로 정합니다. 예제는 끝이 뾰족한 기둥 15개와 가로대 두 개로 된 디오라마용 울타리(길이 180 mm, 높이 50 mm)입니다. 같은 방법으로 빗, 환기 격자, 휜 난간도 만듭니다.\n\n## 하는 순서\n\n1. 새 문서에서 명령줄에 `box 6 3 50`을 입력해 기둥을 만듭니다.\n2. 기둥을 선택한 채 {m:chamfer} 단추를 누르고 윗면의 짧은 모서리 두 개(왼쪽·오른쪽)를 클릭한 뒤 `2.5`를 입력하고 Enter를 누릅니다. 기둥 끝이 뾰족해집니다.\n3. 기둥을 선택한 채 {m:rectPattern} 단추를 누르고 {t:opt.count} X를 `15`, {t:opt.spacing} X를 `12`로 바꾼 뒤 Enter를 누릅니다.\n4. 명령줄에 `box 180 2 6`을 입력하고 속성 창의 {t:panel.position}를 X `84`, Y `2`, Z `10`으로 바꿉니다. 기둥 뒤쪽에 0.5 mm 겹친 아래 가로대입니다.\n5. 가로대를 선택한 채 {k:duplicate}를 누르고, 사본의 {t:panel.position}를 X `84`, Y `2`, Z `34`로 바꿉니다. 위 가로대입니다.\n6. {k:selectAll}로 모두 선택하고 {m:union} 단추를 누르면 한 덩어리가 됩니다.\n7. 출력하기 전에 {m:dropFace} 단추를 누르고 기둥의 앞면을 클릭해 울타리를 눕힙니다.\n\n## 팁\n\n- 빗: 새 문서에서 `box 100 12 4`로 손잡이를 만들고, `box 1.6 25 4`로 만든 살의 {t:panel.position}를 X `-48`, Y `-18`, Z `0`으로 둡니다. 살을 {t:opt.count} X `30`, {t:opt.spacing} X `3`으로 패턴한 뒤 모두 {c:union}합니다. 살 사이 틈은 1.4 mm입니다.\n- 환기 격자: 새 문서에서 만든 `box 60 60 3` 판에 `box 50 3 10` 홈 칼을 {t:panel.position} X `0`, Y `-21`, Z `-2`로 놓고, {t:opt.count} Y `8`, {t:opt.spacing} Y `6`으로 패턴합니다. 칼 8개를 그룹으로 묶어 판에서 {c:subtract}하면 3 mm 홈 8줄이 뚫립니다.\n- 둥근 울타리나 톱니 같은 테두리는 {m:circPattern}으로 만듭니다.\n- 휜 난간은 스케치에 호나 스플라인을 그리고 {m:pathPattern}으로 늘어놓습니다. 기둥을 선의 한쪽 끝에 두고 {t:opt.alignPath}을 켜면 기둥이 선 방향을 따라 돕니다.\n- {t:opt.count}의 X와 Y를 함께 쓰면 가로·세로 격자로 늘어놓습니다. 받침대의 발이나 블록 장난감의 돌기에 씁니다.\n- 패턴 창의 {t:opt.linkedCopies}를 켜면 사본이 원본과 모양을 함께 씁니다. 기둥 하나의 모양을 고치면 나머지도 함께 바뀝니다.\n- 관련 도구: [패턴](help:obj-pattern), [모따기](help:obj-chamfer), [합치기](help:obj-union), [바닥에 놓기](help:obj-drop).\n\n## 자주 하는 실수\n\n- 간격을 부품 폭보다 작게 하면 사본이 서로 겹쳐 한 장의 판처럼 붙습니다. 간격은 부품 폭보다 크게 합니다.\n- 가로대가 기둥과 겹치지 않고 떨어져 있으면 {c:union}에서 빠집니다. 4단계의 Y 값을 확인합니다.\n- 기둥을 세운 채 출력하면 두께 3 mm 판이 흔들려 쓰러지기 쉽습니다. 7단계처럼 눕혀서 출력합니다.\n- 모따기 크기를 기둥 폭의 절반(3 mm) 이상으로 하면 윗면이 없어져 모따기가 만들어지지 않을 수 있습니다. 절반보다 조금 작게 합니다.\n',Te=`---
id: rec-trick-smart-scale
title: 요령: 스마트 스케일로 정확한 크기 맞추기
분류: 3D 물체 예제
난이도: 심화
workspace: 3D 물체
keywords: 스마트 스케일, 크기 조절, 크기 맞추기, 크기 바꾸기, 정확한 크기, 한쪽만 늘리기, 한 방향 늘이기, 비율 유지, 비율대로, 배율, 카드 상자, 명함 상자, 카드 케이스, 사이즈, 스마트스케일, smart scale, scale, resize, exact size, stretch, proportional, card box
commands: smartScale, scale, box, shell, presspull
order: 190
---

## 무엇

{c:smartScale}은 손잡이를 끌거나 길이를 입력해 물체의 한쪽만 늘이거나, 비율을 지켜 통째로 키웁니다. 예제는 기본 상자를 정확한 크기로 바꾼 뒤 속을 비워 교통카드·명함이 들어가는 상자(바깥 94 × 62 × 25 mm, 안쪽 88 × 56 mm, 벽 3 mm)를 만듭니다. 크기를 먼저 맞추고 속은 마지막에 비우는 순서가 요령입니다.

## 하는 순서

1. {m:box} 단추를 누르고 바닥을 클릭해 기본 상자(20 × 20 × 20 mm)를 놓습니다.
2. 상자를 선택한 채 {m:smartScale} 단추를 누릅니다. 상자 둘레에 손잡이와 세 길이 숫자가 나타납니다.
3. 가로(X) 길이 숫자를 클릭하고 \`94\`를 입력한 뒤 Enter를 누릅니다. 왼쪽 면은 그대로 있고 오른쪽만 늘어납니다.
4. 같은 방법으로 세로(Y) 길이를 \`62\`, 높이(Z)를 \`25\`로 바꿉니다. 앞면과 바닥은 그대로 있습니다.
5. Enter를 눌러 적용하고 Esc로 도구를 닫습니다. 직육면체는 크기 값 자체가 바뀌어 속성 창에 94, 62, 25로 보입니다.
6. {m:shell} 단추를 누르고 윗면을 클릭한 뒤 \`3\`을 입력하고 Enter를 누릅니다.

## 팁

- 노란 손잡이를 끌면 그 면만, 바닥 모서리의 흰 손잡이를 끌면 그 모서리에서 만나는 두 면이, 위 손잡이를 끌면 높이만 바뀝니다. 끌기는 앞 결과에 이어지고, 적용하기 전에는 {k:undo}가 직전 끌기 한 번만 되돌립니다.
- {t:opt.keepRatio}를 켜고 흰 손잡이를 끌면 세 방향이 같은 비율로 커지고 바닥은 그대로 있습니다. 캐릭터나 모형을 통째로 키울 때 씁니다.
- 길이 숫자를 클릭해 넣으면 작은 쪽(왼쪽·앞·바닥) 면이 고정되고, 창의 {t:opt.sizeTo} X·Y·Z 칸에 넣으면 가운데를 기준으로 양쪽이 함께 바뀝니다.
- {t:opt.factor}에 \`2\`를 넣으면 가운데를 기준으로 두 배가 됩니다. 바닥 아래로 내려간 부분은 {c:drop}로 올립니다.
- 구를 한 방향으로만 늘이면 달걀 같은 타원체가 됩니다.
- 여러 물체를 한꺼번에 같은 배율로 바꾸려면 모두 선택하고 {m:scale}을 씁니다.
- STL로 가져온 삼각형 메시 물체는 한 방향으로 늘일 수 없고 세 방향이 같은 비율로만 바뀝니다.
- 관련 도구: [스마트 스케일](help:obj-smart-scale), [속 비우기](help:obj-shell), [밀고 당기기](help:obj-presspull).

## 자주 하는 실수

- 속을 비운 뒤에 크기를 바꾸면 벽 두께와 구멍도 같은 비율로 늘거나 줄어듭니다. 이 예제처럼 크기를 먼저 맞추고 마지막에 속을 비웁니다.
- 속을 비운 상자의 높이만 바꾸려면 스마트 스케일 대신 {m:presspull}로 테두리 윗면을 당기거나 밉니다. 벽 두께가 그대로 남습니다.
- 카드 크기(85.6 × 54 mm)에 꼭 맞게 안쪽을 만들면 카드가 들어가지 않습니다. 출력 오차를 생각해 사방 1 mm쯤 여유를 둡니다.
- 손잡이를 끈 뒤 빈 곳을 클릭하면 그때까지의 크기가 적용되고 도구가 끝납니다. 원하지 않았으면 {k:undo}로 되돌립니다.
`,Ee=`---
id: rec-vase-revolve
title: 회전체 꽃병
분류: 3D 물체 예제
난이도: 중급
workspace: 3D 물체
keywords: 꽃병, 화병, 병, 항아리, 화분, 회전체, 돌려 만들기, 돌리기, 반쪽 단면, 단면, 스플라인, 곡선, 속 비우기, 꽃병 만들기, 회전채, vase, revolve, lathe, spline, bottle, pot
commands: newSketch, polyline, spline, revolve, dropFace, shell
order: 20
---

## 무엇

높이 120 mm, 가장 넓은 곳의 지름 80 mm인 꽃병을 만듭니다. 바닥에 꽃병의 오른쪽 반쪽 단면을 그리고 세로 축을 중심으로 한 바퀴 회전한 뒤, 세워 놓고 입구를 열어 속을 비웁니다.

## 하는 순서

1. {m:newSketch} 단추를 누르고 빈 바닥을 클릭해 바닥에 스케치를 시작합니다.
2. {m:polyline} 단추를 누르고 명령줄에 \`30,0\`, \`0,0\`, \`0,120\`, \`25,120\`을 하나씩 입력하며 Enter를 누릅니다. 빈 명령줄에서 Enter를 한 번 더 눌러 끝냅니다. (0,0)–(0,120) 선이 회전축이 됩니다.
3. {m:spline} 단추를 누르고 창에서 {t:curves.splineThrough}를 선택합니다. 명령줄에 \`30,0\`, \`40,45\`, \`20,95\`, \`25,120\`을 차례로 입력하고 빈 명령줄에서 Enter를 누릅니다. 곡선의 양 끝이 폴리선의 끝점과 같아 단면이 닫힙니다.
4. {c:exitSketch} 단추를 누릅니다.
5. {m:revolve} 단추를 누르고 단면 영역을 클릭합니다 (이미 색이 칠해져 선택되어 있으면 건너뜁니다). 이어서 (0,0)–(0,120) 세로선을 클릭하고 Enter를 누르면 360° 회전체가 만들어집니다.
6. 꽃병이 바닥에 누워 있으므로 {m:dropFace} 단추를 누르고 꽃병의 평평한 밑면(지름 60 mm)을 클릭해 세웁니다.
7. {m:shell} 단추를 누르고 꽃병의 윗면(입구)을 클릭합니다. {t:opt.thickness}를 \`2\`로 하고 {t:btn.apply} 단추를 누릅니다.

## 팁

- 좌표를 입력하지 않고 격자 스냅({k:snap} 키)을 켜고 5 mm 간격의 격자점을 클릭해도 됩니다. 이때 곡선의 처음과 끝은 객체 스냅({k:osnap} 키)으로 폴리선 끝점에 붙입니다. [좌표·길이 입력](help:input-coords)
- 회전축 선을 따로 그리지 않아도 {c:revolve} 창의 {t:opt.axisY} 단추를 누르면 스케치의 Y축(X가 0인 세로선)이 축이 됩니다.
- {c:revolve} 창의 {t:opt.angle}를 \`180\`으로 하면 벽에 붙이는 반쪽 꽃병이 됩니다.
- 곡선 모양은 회전하기 전에 [곡선 편집](help:obj-curve-edit)으로 점을 끌어 다듬습니다. 회전체를 만든 뒤 스케치를 고쳐도 이미 만든 꽃병은 바뀌지 않습니다.
- 스플라인 대신 {c:polyline}의 {t:opt.segArc}로 둥근 단면을 그려도 됩니다. 스플라인은 [고급 메뉴](help:start-level)에 있습니다.
- 화분으로 쓰려면 속을 비운 뒤 안쪽 바닥을 [구멍](help:obj-hole) 도구로 클릭해 지름 6 mm, {t:opt.holeDepth} \`0\`으로 물 빠짐 구멍을 뚫습니다.
- 크기를 바꾸려면 [스마트 스케일](help:obj-smart-scale)에서 {t:opt.keepRatio}를 켜고 높이를 입력합니다. 벽 두께도 함께 바뀌므로 크게 줄일 때는 속 비우기 전에 크기를 정합니다.

## 자주 하는 실수

- 곡선 끝이 폴리선 끝점에 붙지 않으면 닫힌 영역이 생기지 않아 회전체가 단면을 선택하지 못합니다. 좌표를 다시 확인하거나 {c:closeOpen}로 끝을 잇습니다.
- 단면은 축의 한쪽(X가 0보다 큰 쪽)에만 그립니다. 곡선이 축을 넘어가면 회전체가 제대로 만들어지지 않습니다.
- 회전축으로 곡선을 클릭하면 축은 직선이나 보조선만 된다는 알림이 뜹니다. X가 0인 곧은 세로선을 클릭합니다.
- 단면이 이미 선택된 상태에서 영역을 다시 클릭하면 선택이 풀립니다. 색이 칠해져 있으면 바로 축을 클릭합니다.
- 속 비우기에서 밑면을 클릭하면 바닥이 뚫린 통이 됩니다. 입구인 윗면을 선택합니다.
`,De='---\nid: input-calc\ntitle: 계산식\n분류: 스냅과 입력\n난이도: 중급\nworkspace: 공통\nkeywords: 계산식, 계산, 수식, 사칙연산, 엑셀, 엑셀 함수, 등호, 분수, 제곱근, 반올림, 계산기, 식, 함수, 루트, 제곱, 거듭제곱, 삼각함수, 사인, 코사인, 라디안, 단위 섞기, 단위 변환, 더하기, 빼기, 곱하기, 나누기, 빗변, 숫자 칸, formula, calculate, calculation, expression, arithmetic, excel, calculator, square root\ncommands: toggleCommand\nhowto: calc\norder: 90\n---\n\n## 무엇\n\n숫자나 크기를 넣는 칸에는 숫자 대신 계산식을 쓸 수 있습니다. `=`로 시작하면 엑셀과 같은 이름의 함수도 쓸 수 있습니다.\n\n## 하는 순서\n\n1. 숫자나 크기를 넣는 칸(속성 창, 도구 창, 명령 창, 커서 옆 값 칸, 환경 설정)에 식을 바로 입력합니다: `10/3`, `(20+5)*2`, `2^3`. 곱하기는 `*` 또는 `×`, 나누기는 `/` 또는 `÷`를 씁니다.\n2. 단위를 섞어도 됩니다: `3m+20cm`. 단위를 쓰지 않은 수는 그 칸의 단위(mm 또는 m)입니다.\n3. `=`로 시작하면 엑셀 함수를 쓸 수 있습니다: `=ROUND(10/3,2)`, `=SQRT(2)*10`, `=SUM(10,20,30)`, `=MAX(5,8)`, `=IF(5>3,1,0)`, `=PI()`.\n4. 삼각함수는 엑셀처럼 라디안입니다: `=SIN(RADIANS(30))`. 도 단위로 바로 쓰려면 `=SIND(30)`, `=COSD(60)`, `=TAND(45)`를 씁니다.\n5. 입력하는 동안 칸 아래에 `= 3.333`처럼 결과가 보입니다. 잘못된 식은 빨간 글씨로 이유가 나오고 값은 그대로입니다.\n6. 명령 창의 점도 칸마다 식을 쓸 수 있습니다: `@10/3,5*2` 또는 `=@SQRT(200)<45`. 도구가 없을 때 명령 창은 계산기로 동작합니다.\n\n## 팁\n\n- 쓸 수 있는 함수: `SUM`, `PRODUCT`, `AVERAGE`, `MIN`, `MAX`, `ROUND`, `ROUNDUP`, `ROUNDDOWN`, `TRUNC`, `INT`, `ABS`, `SIGN`, `SQRT`, `POWER`, `MOD`, `PI`, `SIN`, `COS`, `TAN`, `ASIN`, `ACOS`, `ATAN`, `ATAN2`, `RADIANS`, `DEGREES`, `SIND`, `COSD`, `TAND`, `HYPOT`, `EXP`, `LN`, `LOG10`, `LOG`, `CEILING`, `FLOOR`, `IF`, `AND`, `OR`, `NOT`, `TRUE`, `FALSE`. 함수 이름은 대문자와 소문자를 가리지 않습니다.\n- `=HYPOT(30,40)`은 가로 30, 세로 40인 직사각형의 대각선 길이 50을 줍니다.\n- `=`로 시작하는 식에서는 비교(`=`, `<>`, `<`, `>`, `<=`, `>=`)와 백분율(`50%`는 0.5)도 씁니다.\n- 붙일 수 있는 단위는 `mm`, `cm`, `m`, `in`, `"`(인치)입니다. `°`나 `deg`를 붙여도 값은 바뀌지 않습니다.\n- 거듭제곱은 학교 수학처럼 계산합니다: `-2^2`는 -4, `2^3^2`는 2의 9제곱입니다.\n- 도구가 없을 때 명령줄에 `10/3`을 입력하고 Enter를 누르면 `= 3.333333`처럼 소수 여섯째 자리까지 답이 나옵니다.\n- 좌표를 입력하는 방법은 [좌표·길이 입력](help:input-coords)에, 명령줄 쓰는 법은 [명령줄](help:input-cmdline)에 있습니다.\n\n## 자주 하는 실수\n\n- 곱하기를 `x`로 썼습니다. `*`나 `×`를 씁니다.\n- `=` 없이 함수를 썼습니다 (`SQRT(2)`). 함수는 `=`로 시작하는 식에서만 씁니다.\n- `=PI`처럼 괄호를 뺐습니다. `=PI()`로 씁니다.\n- `=SIN(30)`이 0.5가 나오지 않습니다. 라디안으로 계산하기 때문입니다. `=SIND(30)`을 씁니다.\n- 숫자 칸 하나에 `3,5`를 쓰면 3.5로, `1,000`은 1000으로 읽습니다. 소수점은 `.`을 씁니다. 명령줄의 점에서는 쉼표가 X와 Y를 나눕니다.\n',Oe=`---
id: input-cmdline
title: 명령줄·자동완성
분류: 스냅과 입력
난이도: 기초
workspace: 공통
keywords: 명령줄, 명령 줄, 명령 창, 명령어, 명령 입력, 명령 이름, 커맨드, 커맨드 라인, 자동완성, 자동 완성, 명령 목록, 다시 실행, 반복, 마지막 명령, 계산기, 별칭, 줄임말, 오토캐드 명령, 한글로 입력, 단축키 방식, 명령줄 숨기기, 명령줄 안 보임, command line, command, commands, autocomplete, alias, repeat last command, typed command
commands: toggleCommand, help
context: toggleCommand
order: 70
---

## 무엇

명령줄은 명령 이름을 입력해 도구를 여는 곳입니다. 도구가 열려 있을 때는 점, 길이, 옵션 같은 값을 입력하는 곳이 되고, 도구가 없을 때는 계산기로도 쓸 수 있습니다.

## 하는 순서

1. 명령줄을 클릭합니다. 도구가 열려 있지 않을 때는 Space 키를 눌러도 됩니다.
2. 명령 이름의 앞부분을 입력합니다 (예: \`bo\`). 그 글자로 시작하는 명령 목록이 나타납니다.
3. ↑ ↓ 키로 선택하고 Enter를 누르면 그 도구가 열립니다. Tab 키를 누르면 이름만 채워집니다.
4. 이름 뒤에 값을 이어 쓰면 바로 만들어지는 도구도 있습니다 (예: \`box 30 20 10\`).
5. 도구가 열려 있을 때는 명령줄에 점이나 값을 입력하고 Enter를 누릅니다 (예: \`@10,5\`, \`20\`).
6. 도구가 없을 때 Enter를 누르면 마지막에 쓴 도구가 다시 열립니다.

## 팁

- AutoCAD 방식(처음 설정)에서는 화면 어디에서든 글자를 치면 명령줄에 들어갑니다. 예를 들어 \`l\`을 치고 Enter를 누르면 {c:line} 도구가 열립니다.
- 목록이 보일 때 명령 이름 뒤에서 Space 키를 눌러도 실행됩니다.
- 한글 입력 상태로 쳐도 같은 자리의 영문 글자로 읽습니다 (\`ㅠㅐㅌ\` → \`box\`).
- 빈 명령줄에서 ↑ 키를 누르면 앞에 입력한 줄을 차례로 다시 불러옵니다.
- 도구가 없을 때 \`10/3\`처럼 계산식을 입력하고 Enter를 누르면 \`= 3.333333\`처럼 답이 나옵니다. 자세한 내용은 [계산식](help:input-calc)에 있습니다.
- 일반 메뉴에 보이지 않는 도구도 이름을 입력하면 열립니다. 이때 고급 메뉴에서 보인다는 안내가 함께 나옵니다.
- 틀린 이름을 입력하면 비슷한 명령 이름을 알려 줍니다.
- 모든 명령의 이름과 단축키는 {c:help} 창({k:help})의 {t:hd.shortcuts}에 있습니다.
- 명령줄은 {k:toggleCommand} 키나 {c:settings} → {t:set.options} 탭의 {t:set.commandLine}로 보이거나 숨깁니다.
- 단축키 방식이 Fusion 360이나 Blender이면 몇몇 글자 키가 바로 도구를 엽니다. 그때 명령 이름은 명령줄을 클릭하고 입력합니다. 자세한 내용은 [단축키](help:faq-shortcuts)에 있습니다.
- 점을 입력하는 방법은 [좌표·길이 입력](help:input-coords)에 있습니다.

## 자주 하는 실수

- 도구가 열려 있을 때는 명령 목록이 나오지 않습니다. 이름을 끝까지 입력하고 Enter를 누르면 새 도구가 열립니다. 다만 지금 도구가 쓰는 글자(예: {c:line}의 \`c\`)는 그 도구의 옵션으로 읽힙니다.
- 3D 물체에서 벽 같은 3D 건설 도구의 이름을 입력하면 열리지 않습니다. 3D 건설로 바꾼 뒤 입력합니다.
- 명령줄에서 Esc를 누르면, 도구가 없을 때는 입력한 글자를 삭제하고 명령줄에서 빠져나옵니다. 도구가 열려 있을 때는 처음 Esc가 입력한 글자만 삭제하고, 다음 Esc가 도구를 끝냅니다.
- 숫자를 쳤는데 명령줄이 아니라 커서 옆 칸에 들어갑니다. {t:dyn.setting}이 켜져 있으면 점을 찍는 동안 숫자는 커서 옆 칸으로 갑니다. 명령줄에 쓰려면 명령줄을 먼저 클릭합니다.
- 명령줄이 보이지 않습니다. {k:toggleCommand} 키로 다시 보이게 합니다.
`,ke=`---
id: input-coords
title: 좌표·길이 입력
분류: 스냅과 입력
난이도: 중급
workspace: 공통
keywords: 좌표, 좌표 입력, 절대 좌표, 상대 좌표, 극좌표, 길이 입력, 각도 입력, 거리 입력, 숫자로 그리기, 정확한 길이, 정확한 위치, 골뱅이, 앳, @, 커서 옆 입력, 동적 입력, 다이내믹 입력, 값 칸, 자물쇠, F12, Tab, coordinates, coordinate input, absolute, relative, polar, dynamic input, direct distance, typed point
commands: line, toggleCommand
order: 80
---

## 무엇

점을 클릭하는 대신 좌표나 길이를 입력해 정확한 위치에 놓을 수 있습니다. 명령줄에 쓰는 방법과, 점을 찍는 동안 커서 옆에 뜨는 값 칸({t:dyn.setting})에 쓰는 방법이 있습니다.

## 하는 순서

1. {m:line} 단추를 누릅니다.
2. 바닥을 클릭해 그릴 평면을 선택합니다.
3. 명령줄을 클릭하고 \`0,0\`을 입력한 뒤 Enter를 누릅니다. 바닥의 원점에 첫 점이 놓입니다.
4. \`@50,0\`을 입력하고 Enter를 누릅니다. 앞 점에서 X로 50, Y로 0 떨어진 곳에 다음 점이 놓입니다.
5. \`@30<90\`을 입력하고 Enter를 누릅니다. 앞 점에서 90° 방향(Y축 방향)으로 길이 30인 곳에 점이 놓입니다.
6. 커서를 그릴 방향에 두고 \`20\`만 입력한 뒤 Enter를 누릅니다. 앞 점에서 커서 쪽으로 길이 20인 곳에 점이 놓입니다.
7. Esc를 누르면 그린 선은 남고 도구가 끝납니다.

## 팁

- 값의 단위는 3D 물체에서는 mm, 3D 건설에서는 m입니다. \`3cm\`처럼 단위를 붙여도 되고, 값마다 계산식을 써도 됩니다 (\`@10/3,5*2\`). [계산식](help:input-calc)을 봅니다.
- 면 위의 스케치에서 \`x,y\`는 그 면의 가운데를 원점으로 잰 값입니다.
- {t:dyn.setting}: 점을 찍는 동안 커서 옆에 값 칸이 뜹니다. 첫 점은 {t:dyn.x}·{t:dyn.y} 칸, 다음 점은 {t:dyn.len}·{t:dyn.ang} 칸입니다. 직사각형의 {t:dyn.w}·{t:dyn.h}처럼 도구마다 칸이 다를 수 있습니다.
- 숫자 키를 누르면 커서 옆 첫 칸에 들어가고, 그 값으로 고정됩니다(자물쇠 표시). Tab 키로 다음 칸으로 가고, Enter를 누르면 점이 찍힙니다. 고정하지 않은 값은 커서를 따라갑니다.
- 커서 옆 칸에서 \`#\`를 먼저 치면 이 점만 {t:dyn.x}·{t:dyn.y}(평면 원점에서 잰 값)로, \`@\`를 먼저 치면 {t:dyn.len}·{t:dyn.ang}로 입력합니다.
- 커서 옆 칸에 쉼표나 \`<\`를 넣으면 명령줄과 똑같이 점 하나로 읽습니다. \`@30,40\`은 명령줄에 쓰든 커서 옆 칸에 쓰든 앞 점에서 X로 30, Y로 40 떨어진 점입니다. 칸이 {t:dyn.len}·{t:dyn.ang}일 때는 \`@\` 없이 \`30,40\`만 써도 앞 점에서 잽니다.
- 다음 점을 처음부터 X·Y로 입력하려면 {c:settings} → {t:set.units} 탭의 {t:dyn.coords}에서 {t:dyn.abs}를 선택합니다. 처음 설정은 {t:dyn.rel}(길이·각도)입니다.
- F12 키를 누르면 {t:dyn.setting}이 켜지고 꺼집니다. {c:settings} → {t:set.units} 탭의 같은 이름 칸과 같은 스위치입니다.
- [스냅 추적](help:snap-track)의 점선 위에서 숫자 하나를 입력하면 그 점선을 따라 그 거리만큼 갑니다.
- [수평·수직 고정](help:snap-ortho)을 켜고 길이만 입력하면 가로나 세로로 정확히 그립니다.

## 자주 하는 실수

- 선 도구의 첫 클릭으로 점이 찍히지 않습니다. 스케치를 편집하고 있지 않을 때 첫 클릭은 그릴 평면을 선택할 뿐입니다.
- 숫자가 명령줄이 아니라 커서 옆 칸에 들어갑니다. {t:dyn.setting}이 켜져 있으면 점을 찍는 동안 숫자 키는 커서 옆 칸으로 갑니다. 명령줄에 쓰려면 명령줄을 먼저 클릭합니다.
- 길이와 각도를 따로 넣으려다 \`50,90\`을 씁니다. 쉼표는 X·Y로 읽으므로 앞 점에서 X로 50, Y로 90인 점이 됩니다. 길이 \`50\`을 쓰고 Tab 키로 다음 칸에 \`90\`을 쓰거나, \`@50<90\`을 씁니다.
- 명령줄에서 \`@\`를 빼면 원점에서 잰 좌표가 됩니다. 앞 점에서 재려면 \`@\`를 붙입니다. 첫 점처럼 앞 점이 없으면 \`@\`를 붙여도 원점에서 잽니다.
- 각도의 방향이 헷갈립니다. 평면의 X축 방향이 0°, Y축 방향이 90°입니다.

## 예

| 명령줄 입력 | 놓이는 점 |
|---|---|
| \`30,20\` | 평면의 원점에서 X로 30, Y로 20인 점 |
| \`@30,20\` | 앞 점에서 X로 30, Y로 20 떨어진 점 |
| \`@50<30\` | 앞 점에서 30° 방향으로 길이 50인 점 |
| \`50<30\` | 평면의 원점에서 30° 방향으로 길이 50인 점 |
| \`50\` | 앞 점에서 커서 쪽으로 길이 50인 점 |
| \`@3cm,2cm\` | 단위를 붙인 상대 좌표 (3D 물체에서는 \`@30,20\`과 같음) |
`,Ae=`---
id: snap-from
title: 기준점에서·두 점 사이 중간
분류: 스냅과 입력
난이도: 중급
workspace: 공통
keywords: 기준점에서, 기준점, 떨어진 점, 간격, 거리 띄우기, 오프셋, 두 점 사이 중간, 두 점 중간, 두 점의 가운데, 가운데 점, 중간 점, 중점, 점 입력 보조, 스냅 메뉴, from, m2p, mid between 2 points, offset from base point, midpoint between two points
commands: osnapWin, osnap
order: 40
---

## 무엇

{t:osnap.aid.from}는 기준점을 하나 찍고, 그 점에서 떨어진 간격을 입력해 다음 점을 정하는 점 입력 보조입니다. {t:osnap.aid.m2p}은 두 점을 찍으면 그 가운데를 다음 점으로 씁니다. 둘 다 점을 찍는 도구가 열려 있을 때 객체 스냅 메뉴의 {t:osnap.aidHead}에서 선택합니다.

## 하는 순서

### 기준점에서

1. 점을 찍는 도구를 엽니다 (예: {m:line}).
2. 3D 화면에서 Ctrl 키를 누른 채 오른쪽 클릭을 하고 {t:osnap.aid.from}를 선택합니다.
3. 기준점을 클릭합니다 (예: 상자의 꼭짓점).
4. \`@10,5\`처럼 간격을 입력하고 Enter를 누릅니다. 기준점에서 X로 10, Y로 5 떨어진 곳이 도구의 점이 됩니다.

### 두 점 사이 중간

1. 점을 찍는 도구가 열린 상태에서 같은 메뉴의 {t:osnap.aid.m2p}을 선택합니다.
2. 첫째 점을 클릭합니다.
3. 둘째 점을 클릭합니다. 두 점의 가운데가 도구의 점이 됩니다.

## 팁

- 두 보조 모두 상태 표시줄 {c:osnap} 칸의 ▾나 {m:osnapWin} 단추에서도 선택할 수 있습니다.
- 간격은 커서 옆 칸이나 명령줄에 입력합니다. \`@\` 없이 \`10,5\`라고 써도 기준점에서 잰 간격으로 읽습니다.
- 숫자 하나만 입력하면 기준점에서 커서 쪽으로 그 거리만큼 떨어진 점이 됩니다.
- 명령줄에서는 \`@20<45\`처럼 길이와 각도로도 입력할 수 있습니다.
- 스케치 밖 3D 공간에 점을 찍는 도구에서는 \`@10,5,3\`처럼 X, Y, Z 세 값을 입력할 수 있습니다. 커서 옆에도 {t:dyn.z} 칸이 생깁니다.
- {t:osnap.aid.m2p}은 높이가 다른 두 꼭짓점이어도 공간에서의 가운데를 잡습니다. 스케치에 그릴 때는 그 점을 스케치 평면 위로 이동해 씁니다.
- 기준점과 두 점은 객체 스냅으로 정확히 잡을 수 있습니다.
- 보조로 만든 점은 한 번만 쓰입니다. Esc를 누르면 보조만 그만두고 도구는 그대로 열려 있습니다.
- 줄만 맞추면 되는 점은 [임시 추적점](help:snap-temp-track)이나 [스냅 추적](help:snap-track)을 씁니다.

## 자주 하는 실수

- 메뉴의 {t:osnap.aidHead} 항목이 흐리게 보입니다. 점을 찍는 도구를 먼저 엽니다.
- 기준점을 찍은 뒤 다시 클릭하면 그 클릭한 자리가 그대로 점이 됩니다. 간격은 입력해야 합니다.
- 간격이 반대쪽으로 갑니다. 간격은 작업 평면의 X·Y축 방향으로 잽니다. 반대쪽은 \`@-10,5\`처럼 음수로 씁니다.
- 다른 도구를 열면 선택한 보조는 취소됩니다.
`,je=`---
id: snap-grid
title: 격자·격자 스냅
분류: 스냅과 입력
난이도: 기초
workspace: 공통
keywords: 격자, 그리드, 격자 스냅, 그리드 스냅, 스냅, 이동 간격, 회전 간격, 각도 간격, 각도 스냅, 간격, 눈금, 모눈, 격자 칸, 격자 크기, 바닥 격자, 굵은 선, 격자 숨기기, 격자 안 보임, 격자 표시, 격자 자동, 스냅 자동, 스냅 끄기, 딱 떨어지게, 기준면, 면 고르기, 높이 입력, 대지 바닥, 층 바닥, 그릴 높이, 지붕 위에 그리기, F7, F9, grid, grid snap, snap, step, snap step, angle step, increment, reference plane
commands: snap, grid, settings
context: grid, snap
order: 50
---

## 무엇

{c:grid}({k:grid})는 격자선을 보이는 방식을 {t:ag.show.auto}·{t:ag.show.always}·{t:ag.show.off} 가운데에서 정합니다. {c:snap}({k:snap})은 점을 찍거나 물체를 이동할 때 격자에 맞추는 기능으로, {t:ux.snap.auto}·{t:ux.snap.on}·{t:ux.snap.off} 세 상태가 있습니다. 이동하는 간격({t:grid.linear})과 회전하는 각도 간격({t:grid.angular})은 상태 표시줄에서 선택합니다.

## 하는 순서

1. 상태 표시줄의 {c:snap} 칸을 누르거나 {k:snap} 키를 누를 때마다 {t:ux.snap.auto} → {t:ux.snap.on} → {t:ux.snap.off} 순서로 바뀝니다. 칸에 지금 상태가 쓰여 있습니다.
2. {t:ux.snap.auto}에서는 화면에 보이는 격자 한 칸에 맞춥니다. 확대·축소로 격자 칸이 바뀌면 간격도 함께 바뀝니다.
3. 정해진 간격에 맞추려면 상태 표시줄의 {t:grid.linear} 목록에서 간격을 선택합니다. 간격을 선택하면 {t:ux.snap.on} 상태가 됩니다.
4. 회전할 때 맞출 각도는 {t:grid.angular} 목록에서 선택합니다.
5. 격자선은 {k:grid} 키나 보기 도구 줄의 격자 단추를 누를 때마다 {t:ag.show.auto} → {t:ag.show.always} → {t:ag.show.off} 순서로 바뀝니다.

## 팁

### 격자 스냅과 간격

| 상태 | 맞추는 곳 |
|---|---|
| {t:ux.snap.auto} | {t:ux.snap.tip.auto} |
| {t:ux.snap.on} | {t:ux.snap.tip.on} |
| {t:ux.snap.off} | {t:ux.snap.tip.off} |

- {t:grid.linear} 목록: {t:grid.off}, {t:ux.step.auto}, 그리고 3D 물체에서는 0.1, 0.5, 1, 5, 10 mm, 3D 건설에서는 0.01, 0.05, 0.1, 0.5, 1, 2, 5, 10 m입니다. {t:grid.off}은 격자 스냅을 끄고, 목록의 {t:ux.step.auto} 항목은 격자 스냅의 {t:ux.snap.auto} 상태와 같습니다.
- {t:grid.angular} 목록: {t:grid.off}, {t:ux.step.auto}, 1°, 5°, 15°, 45°, 90° (처음 5°). {t:ux.step.auto} 항목을 선택하면 15°씩 회전하고, 핸들에서 멀리 떨어져 끌면 5°씩 회전합니다.
- 처음에는 격자 스냅이 {t:ux.snap.auto}입니다.
- {t:ux.snap.auto}에서는 격자가 보이지 않을 때 격자에 맞추지 않습니다. 가까운 객체 스냅이 있으면 그것이 먼저입니다: [객체 스냅](help:snap-osnap).
- 이동·회전 핸들을 끌 때 Shift 키를 누르고 있으면 간격에 맞추지 않고 자유롭게 움직입니다.
- 도구가 열려 있지 않을 때 물체를 선택하고 화살표 키를 누르면 {t:grid.linear}의 10분의 1씩 움직입니다. 누르고 있으면 점점 빨라지고, Shift 키를 함께 누르면 10배로, Page Up·Page Down 키는 위아래로 움직입니다.
- 명령줄에서도 정할 수 있습니다: \`snap auto\`, \`snap on\`, \`snap off\`, \`snap 5\`(이동 간격을 5로 정하고 켜기), \`snap angle 15\`, \`snap angle off\`. 간격은 목록에 있는 값만 쓸 수 있고, \`1cm\`처럼 단위를 붙여도 됩니다.
- {c:snapSettings} 창과 Ctrl+오른쪽 클릭 메뉴에도 {c:snap} 켜기·끄기가 있습니다.
- [스냅 추적](help:snap-track)의 {t:otrack.dir.polar}도 {t:grid.angular}을 씁니다.

### 격자선 보이기

- {t:ag.show.auto}: 3D 물체에서는 그리거나 고칠 때(스케치 편집, 도구 사용, 물체를 선택한 동안)와 아직 아무것도 없을 때 보입니다. 3D 건설에서는 그리거나 고칠 때, 대지를 선택하거나 작업 범위가 대지일 때, {c:planView}에서 보입니다.
- 처음 설정은 3D 물체가 {t:ag.show.always}, 3D 건설이 {t:ag.show.auto}이며, 작업 종류마다 따로 기억됩니다.
- 같은 설정은 {c:settings} → {t:set.units} 탭의 {t:set.showGrid}에도 있습니다. 같은 탭에서 {t:set.gridCell}({t:set.gridAuto}이면 확대·축소에 맞춰 바뀝니다)과 {t:set.gridMajor}도 정합니다.
- 3D 건설의 격자는 땅이나 부재에 가려지지 않게 위에 흐리게 그려지고, 지금 작업하는 대지·건물 외곽선 둘레만 덮습니다.

### 3D 건설의 기준면

- 벽, 바닥판, 기둥, 천장, 지붕, 계단, 난간, 물체 놓기, 영역에 채우기 같은 3D 건설 도구는 도구 창 맨 위의 {t:ag.plane}에 그립니다. 격자도 이 면 위에 놓입니다.

| {t:ag.plane} | 그리는 높이 |
|---|---|
| {t:ag.kind.level} | {t:ag.kindTip.level} |
| {t:ag.kind.face} | {t:ag.kindTip.face} |
| {t:ag.kind.height} | {t:ag.kindTip.height} |
| {t:ag.kind.land} | {t:ag.kindTip.land} |

- {t:ag.kind.face}에서 기울어진 면을 누르면 누른 점의 높이만 씁니다. 다른 높이에 그린 부재는 그 높이가 들어가는 층에 속합니다.
- Esc를 누르면 {t:ag.kind.level}으로 돌아갑니다. 선택한 기준면은 그리기 도구를 이어서 여는 동안 유지되고, 도구를 끝내면 {t:ag.kind.level}으로 돌아갑니다.

## 자주 하는 실수

- 격자선 한 칸과 움직이는 간격이 다릅니다. {t:ux.snap.on}에서는 {t:grid.linear}에 맞춥니다. 보이는 칸에 맞추려면 {t:ux.snap.auto}으로 바꿉니다.
- {k:grid} 키로 격자선을 숨기면 {t:ux.snap.auto} 상태의 격자 스냅도 맞추지 않습니다. {t:ux.snap.on} 상태는 격자선이 없어도 {t:grid.linear}에 맞춥니다.
- 값이 딱 떨어지지 않습니다. 격자 스냅이 {t:ux.snap.off}인지, 끌 때 Shift 키를 누르고 있지 않았는지 확인합니다. 정확한 값은 입력하는 것이 가장 확실합니다.
- {k:snap} 키를 눌렀는데도 회전할 때 정해진 각도로만 돌아갑니다. {k:snap} 키는 {t:grid.linear}만 바꿉니다. 각도 간격을 끄려면 {t:grid.angular}에서 {t:grid.off}을 선택합니다.
- 3D 건설에서 벽이 엉뚱한 높이에 그려집니다. 도구 창의 {t:ag.plane}이 {t:ag.kind.level}인지 확인합니다.
- \`snap 3\`처럼 목록에 없는 간격은 쓸 수 없습니다. 목록의 값 가운데에서 선택합니다.
`,Me=`---
id: snap-ortho
title: 수평·수직 고정
분류: 스냅과 입력
난이도: 기초
workspace: 공통
keywords: 수평·수직 고정, 수평 수직 고정, 수평 수직, 수평, 수직, 직교 모드, 오쏘, 오소, 가로 세로, 가로세로, 반듯하게, 똑바로, 직각, 90도, 일직선, 비뚤어짐, F8, ortho, orthogonal, ortho mode, straight lines
commands: ortho, otrack
context: ortho
order: 60
---

## 무엇

{c:ortho}({k:ortho})을 켜면 다음 점이 앞 점과 가로나 세로로 줄이 맞는 곳에만 놓입니다. 선, 폴리선, 벽처럼 점을 이어 찍을 때 반듯한 선을 그리기 좋습니다.

## 하는 순서

1. {k:ortho} 키를 누르거나 상태 표시줄의 {t:grid.ortho} 칸을 눌러 켭니다.
2. 점을 이어 찍는 도구를 엽니다 (예: {m:line}).
3. 첫 점을 클릭합니다.
4. 커서를 움직입니다. 다음 점은 커서가 더 많이 움직인 쪽(가로 또는 세로)의 줄 위에 놓입니다.
5. 클릭하거나, 길이만 입력하고 Enter를 누릅니다.
6. 끄려면 {k:ortho} 키를 다시 누릅니다.

## 팁

- 가로·세로는 그리는 평면의 두 축입니다. 바닥에서는 X·Y축이고, 면 위의 스케치에서는 그 스케치의 두 축입니다.
- 길이만 입력하면 커서가 있는 쪽으로 정확히 가로나 세로로 그 길이만큼 갑니다.
- \`@30,40\`, \`@50<30\` 같은 좌표 입력은 입력한 그대로 쓰입니다. 자세한 방법은 [좌표·길이 입력](help:input-coords)에 있습니다.
- 직사각형의 맞은편 모서리에는 적용되지 않습니다.
- 한 방향으로만 잠깐 고정하려면 점을 찍는 동안 화살표 키를 씁니다: → X축, ← Y축, ↑ Z축, ↓ 풀기. 3D 공간에서도 됩니다. 자세한 내용은 [스냅 추적](help:snap-track)에 있습니다.
- 앞 점이 아닌 다른 점과 줄을 맞추려면 [스냅 추적](help:snap-track)이나 [임시 추적점](help:snap-temp-track)을 씁니다.

## 자주 하는 실수

- 선이 대각선으로 그려집니다. 커서가 스냅점 위에 있으면 객체 스냅이 먼저 적용됩니다. 스냅 표시가 없는 곳을 클릭하거나 {k:osnap} 키로 객체 스냅을 잠시 끕니다.
- 첫 점은 고정되지 않습니다. 앞 점이 있어야 줄을 맞춥니다.
- 켜는 칸을 찾지 못합니다. 상태 표시줄에는 {t:grid.ortho}이라고 짧게 쓰여 있고, {c:otrack} 칸 옆에 있습니다.
`,Ne=`---
id: snap-osnap
title: 객체 스냅
분류: 스냅과 입력
난이도: 기초
workspace: 공통
keywords: 객체 스냅, 객체스냅, 오스냅, 오브젝트 스냅, 스냅, 점 스냅, 끝점, 중간점, 교차점, 연장선, 중심점, 사분점, 접점, 직교, 평행, 노드, 근처점, 가상 교차점, 지연 직교, 지연 접점, 스냅 설정, 항상 사용할 스냅, 다음 점 한 번만, 스냅 메뉴, 붙이기, 달라붙기, 꼭짓점에 붙이기, 정확한 점, 컨트롤 오른쪽 클릭, 가려진 점, 뒤쪽 점, 알트, Alt, F3, osnap, object snap, dsettings
commands: osnap, osnapWin, snapSettings, otrack
context: osnap, osnapWin, snapSettings
order: 10
---

## 무엇

객체 스냅은 커서를 선의 끝, 모서리의 가운데, 원의 중심처럼 정확한 점에 붙여 주는 기능입니다. 점을 찍는 모든 도구에서 쓰이며, 보이는 모든 스케치의 선과 물체의 모서리에 붙습니다. 늘 쓰는 스냅({t:osnap.keepHead})과, 다음 점 하나에만 쓰는 스냅({t:osnap.onceHead})이 있습니다.

## 하는 순서

1. 화면 아래 상태 표시줄의 {t:grid.osnap} F3 ▾ 칸이 켜져 있는지 확인합니다. 꺼져 있으면 칸의 앞부분을 누르거나 {k:osnap} 키를 누릅니다.
2. 점을 찍는 도구를 엽니다 (예: {m:line}).
3. 커서를 꼭짓점이나 선 가까이 가져갑니다. 붙을 점에 표시가 생기고, 커서 옆에 스냅 이름(예: {t:osnap.end})이 나옵니다.
4. 표시가 보일 때 클릭하면 점이 그 위치에 정확히 놓입니다.
5. 다음 점 하나에만 다른 스냅을 쓰려면 3D 화면에서 Ctrl 키를 누른 채 오른쪽 클릭을 하고, {t:osnap.onceHead} 목록에서 하나를 선택합니다.
6. 늘 쓸 스냅을 바꾸려면 상태 표시줄 {c:osnap} 칸 오른쪽의 ▾를 누르고, 각 줄 오른쪽의 {t:osnap.keepShort} 칸을 켜거나 끕니다.

## 팁

- 같은 메뉴가 세 곳에서 열립니다: 3D 화면의 Ctrl+오른쪽 클릭, 상태 표시줄 {c:osnap} 칸의 ▾, {m:osnapWin} 단추. {m:osnapWin} 단추는 {t:osnapWin.title}이라는 작은 창을 메뉴 단추 아래에 엽니다. {t:osnap.keepShort} 칸은 ▾ 메뉴에만 있습니다.
- 다음 점 한 번만 쓸 스냅이나 점 입력 보조를 선택하면 상태 표시줄의 ▾ 앞에 그 표시가 나옵니다.
- 음영 보기에서는 면 뒤에 가려진 스냅점에 붙지 않습니다. Alt 키를 누르고 있으면 가려진 점에도 붙고, 커서 옆에 {t:ux.osnap.hidden}이라고 나옵니다. 선만 보이는 보기나 반투명 보기에서는 모든 점에 붙습니다.
- {t:osnap.onceHead}에서 선택한 스냅은 다음 점 하나에만 쓰이고, 그 뒤에는 늘 쓰는 스냅으로 돌아갑니다. 같은 것을 다시 선택하거나 다른 도구를 열면 취소됩니다.
- 도구를 열기 전에 선택한 스냅은 다음에 여는 도구의 첫 점에 쓰입니다.
- {t:osnap.none}을 선택하면 다음 점은 어디에도 붙지 않습니다. 스냅점이 많은 곳에서 아무 곳에나 점을 찍을 때 씁니다.
- {c:snapSettings} 창에서는 {t:osnap.use}, {t:osnap.keepHead}({t:osnap.all}·{t:osnap.clear}), {c:otrack}, {c:snap}을 한곳에서 정합니다. 상태 표시줄의 {c:osnap} 칸이나 {c:otrack} 칸을 오른쪽 클릭하거나, 메뉴 맨 아래의 {t:osnap.settings}을 누르거나, 명령줄에 \`ds\`를 입력하면 열립니다. 바꾼 내용은 바로 적용되고 저장됩니다.
- {t:osnap.extension}: 선의 끝점 위에 커서를 잠시 멈추면 작은 + 표시가 생기고, 그 선을 늘인 점선 위에 점을 찍을 수 있습니다.
- {t:osnap.parallel}: 첫 점을 찍은 뒤 다른 선 위에 커서를 잠시 멈추면 그 선과 평행한 점선이 나타납니다.
- {t:osnap.perpendicular}와 {t:osnap.tangent}은 앞 점에서 잽니다. 첫 점에서 선택하면 {t:osnap.deferPerp}나 {t:osnap.deferTan}이 되어, 다음 점이 정해질 때 위치가 정해집니다.
- 높이가 다른 두 선이 화면에서만 겹쳐 보이면 앞쪽 선 위에 {t:osnap.apparent}이 잡힙니다.
- 처음에는 {t:osnap.tangent}과 {t:osnap.parallel}을 뺀 모든 스냅이 켜져 있습니다.
- {c:settings} → {t:set.units} 탭의 {t:set.objectSnap} 칸도 {k:osnap} 키와 같은 스위치입니다.
- 객체 스냅은 [격자 스냅](help:snap-grid)과 [수평·수직 고정](help:snap-ortho)보다 먼저 적용됩니다.
- 스냅점에 멈추어 줄을 맞추는 방법은 [스냅 추적](help:snap-track)에, 기준점에서 떨어진 점을 찍는 방법은 [기준점에서](help:snap-from)에 있습니다.

## 자주 하는 실수

- 원하지 않는 점에 자꾸 붙습니다. 화면을 확대하거나, {t:osnap.onceHead}에서 필요한 스냅 하나만 선택하거나, {k:osnap} 키로 잠시 끕니다.
- 다음 점 한 번만 쓸 스냅을 선택한 뒤 그런 점이 없는 곳을 클릭하면 점이 찍히지 않습니다. 해당 선이나 면 위를 클릭합니다.
- 메뉴의 {t:osnap.aidHead} 항목이 흐리게 보입니다. 점을 찍는 도구를 먼저 엽니다.
- 도구를 쓰는 중에 Ctrl 없이 오른쪽 클릭하면 Enter와 같아서 도구의 단계가 끝납니다. 오른쪽 단추를 누른 채 끌면 화면이 돌아갑니다.
- 숨긴 물체와 숨긴 스케치의 점에는 붙지 않습니다.
- 물체 뒤쪽의 꼭짓점에 붙지 않습니다. 음영 보기에서는 가려진 점을 건너뜁니다. Alt 키를 누른 채 커서를 가져가거나 화면을 회전해 그 점이 보이게 합니다.

## 예

| 스냅 | 붙는 곳 |
|---|---|
| {t:osnap.end} | {t:osnap.ex.end} |
| {t:osnap.mid} | {t:osnap.ex.mid} |
| {t:osnap.intersection} | {t:osnap.ex.intersection} |
| {t:osnap.extension} | {t:osnap.ex.extension} |
| {t:osnap.center} | {t:osnap.ex.center} |
| {t:osnap.quadrant} | {t:osnap.ex.quadrant} |
| {t:osnap.tangent} | {t:osnap.ex.tangent} |
| {t:osnap.perpendicular} | {t:osnap.ex.perpendicular} |
| {t:osnap.parallel} | {t:osnap.ex.parallel} |
| {t:osnap.node} | {t:osnap.ex.node} |
| {t:osnap.nearest} | {t:osnap.ex.nearest} |
`,Pe=`---
id: snap-temp-track
title: 임시 추적점
분류: 스냅과 입력
난이도: 중급
workspace: 공통
keywords: 임시 추적점, 추적점, 임시 추적, 추적, 트래킹, 줄 맞추기, 줄맞춤, 가로 세로 맞추기, 같은 줄, 같은 높이, 점 입력 보조, 스냅 메뉴, tt, temporary track point, track point, tracking point, tracking
commands: osnapWin, otrack, osnap
order: 30
---

## 무엇

임시 추적점은 점 하나를 클릭해 두고, 그 점과 가로나 세로로 줄이 맞는 곳에 다음 점을 놓는 점 입력 보조입니다. 한 점만 잠깐 따라갈 때 쓰며, {c:otrack}이 꺼져 있어도 동작합니다.

## 하는 순서

1. 점을 찍는 도구를 엽니다 (예: {m:line}).
2. 3D 화면에서 Ctrl 키를 누른 채 오른쪽 클릭을 하고 {t:osnap.aid.track}을 선택합니다.
3. 따라갈 점을 클릭합니다 (예: 원의 중심). 객체 스냅으로 정확한 점을 잡습니다.
4. 커서를 그 점과 가로나 세로로 줄이 맞는 곳으로 이동합니다. 점선이 나타나고 점이 그 줄 위에 붙습니다.
5. 줄 위를 클릭합니다. 또는 거리를 입력하고 Enter를 누르면, 따라간 점에서 커서 쪽으로 그 거리만큼 떨어진 곳에 점이 놓입니다.

## 팁

- {t:osnap.aid.track}은 상태 표시줄 {c:osnap} 칸의 ▾나 {m:osnapWin} 단추에서도 선택할 수 있습니다.
- 거리는 커서 옆 칸이나 명령줄에 입력합니다. 커서가 가로 줄에 가까우면 가로로, 세로 줄에 가까우면 세로로 갑니다. 음수를 쓰면 반대쪽으로 갑니다.
- 스케치나 작업 평면 위에서는 그 평면의 가로·세로로 줄을 맞춥니다. 작업 평면이 없는 3D 공간에서는 선택한 점을 지나는 X·Y·Z축 방향 점선이 나옵니다.
- 커서가 따라간 점과 가로·세로 모두 가까우면 그 점 자체에 붙습니다.
- 임시 추적점으로 만든 점은 한 번만 쓰입니다. 다시 쓰려면 메뉴에서 다시 선택합니다.
- Esc를 누르면 임시 추적점만 그만두고 도구는 그대로 열려 있습니다.
- 여러 점을 계속 따라가려면 [스냅 추적](help:snap-track)이 편합니다. 정확한 간격만큼 떨어진 점은 [기준점에서](help:snap-from)를 씁니다.

## 자주 하는 실수

- 메뉴의 {t:osnap.aid.track}이 흐리게 보입니다. 점을 찍는 도구를 먼저 엽니다.
- 처음 클릭한 곳에 도구의 점이 찍히지 않습니다. 첫 클릭은 따라갈 점을 정할 뿐이고, 도구의 점은 그다음 클릭이나 입력으로 정해집니다.
- 줄에서 멀리 떨어진 곳을 클릭하면 그 자리에 점이 놓입니다. 점선이 보일 때 클릭합니다.
- 다른 도구를 열면 임시 추적점은 취소됩니다.
`,Fe=`---
id: snap-track
title: 스냅 추적
분류: 스냅과 입력
난이도: 중급
workspace: 공통
keywords: 스냅 추적, 객체 스냅 추적, 추적, 오토트랙, 점선, 색 점선, 줄 맞추기, 줄맞춤, 정렬, 같은 높이, 같은 줄, 가로 세로 맞추기, X축, Y축, Z축, 극좌표, 극좌표 추적, 극좌표 각도, 방향 고정, Shift 고정, 화살표 고정, 추적 방향, F11, otrack, autotrack, object snap tracking, snap tracking, tracking, polar tracking
commands: otrack, osnap, snapSettings
context: otrack
order: 20
---

## 무엇

스냅 추적은 스냅점(끝점, 중간점, 중심점 등)에 커서를 잠시 멈추어 그 점을 잡아 두고, 그 점과 줄이 맞는 색 점선을 따라 다음 점을 놓는 기능입니다. 다른 물체의 꼭짓점과 같은 높이나 같은 줄에 점을 놓을 때 씁니다.

## 하는 순서

1. 상태 표시줄의 {c:otrack} 칸({k:otrack})과 {c:osnap} 칸({k:osnap})이 모두 켜져 있는지 확인합니다.
2. 점을 찍는 도구를 엽니다 (예: {m:line}).
3. 줄을 맞출 스냅점 위에 커서를 잠시 멈춥니다. 그 점에 작은 + 표시가 생깁니다.
4. 커서를 그 점과 줄이 맞는 쪽으로 이동합니다. 점선이 나타나고, 커서 옆에 방향 이름(예: {t:otrack.axis.x})이 나옵니다.
5. 점선 위를 클릭합니다. 또는 거리를 입력하고 Enter를 누르면, 잡아 둔 점에서 점선을 따라 그 거리만큼 떨어진 곳에 점이 놓입니다.
6. 잡아 둔 점을 풀려면 그 + 표시 위에 커서를 다시 잠시 멈춥니다.

## 팁

- 점선의 색은 방향을 나타냅니다. X축은 빨강, Y축은 초록, Z축은 파랑이고, 그 밖의 방향(기울어진 면의 방향, 극좌표 각도 등)은 보라색입니다.
- 스케치나 도구의 작업 평면 위에서는 그 평면의 두 축 방향 점선만 나옵니다. 작업 평면이 없는 3D 공간에서는 X·Y·Z축 방향 점선이 나오고, 기울어진 지붕이나 회전한 벽 위의 점에서는 그 면의 방향 점선도 나옵니다.
- 두 점에서 나온 점선이 만나는 곳은 {t:osnap.intersection}으로 잡힙니다. {t:osnap.intersection}이 켜져 있으면 점선과 선이 만나는 곳도 잡힙니다.
- 점은 7개까지 잡아 둘 수 있고, 더 잡으면 가장 먼저 잡은 점이 풀립니다. 잡아 둔 점은 도구를 끝낼 때까지 남습니다.
- 점선 위에서 Shift 키를 누르고 있으면 그 점선에 고정됩니다. Shift 키를 놓으면 풀립니다.
- 점을 찍는 동안 화살표 키 →, ←, ↑를 누르면 앞 점에서 X·Y·Z축 방향으로 고정됩니다. 작업 평면 위에서는 → ←가 그 평면의 두 축입니다. 같은 키를 다시 누르거나 ↓ 키를 누르면 풀립니다. 이 고정은 {c:otrack}이 꺼져 있어도 됩니다.
- 거리는 커서 옆 {t:dyn.dist} 칸이나 명령줄에 입력합니다. 계산식도 됩니다.
- {c:snapSettings} 창의 {t:otrack.dirHead}에서 {t:otrack.dir.polar}를 선택하면 {t:grid.angular}마다 방향이 더해집니다 (15°보다 작으면 45°마다). 처음에는 {t:otrack.dir.ortho}입니다.
- 상태 표시줄의 {c:otrack} 칸을 오른쪽 클릭하면 {c:snapSettings} 창이 열립니다.
- 한 점만 잠깐 따라가려면 [임시 추적점](help:snap-temp-track)을 씁니다. 앞 점과 가로·세로만 맞추려면 [수평·수직 고정](help:snap-ortho)이 간단합니다.

## 자주 하는 실수

- 스냅점에 멈추어도 + 표시가 생기지 않습니다. {c:osnap}이 꺼져 있거나, {t:osnap.onceHead}에서 스냅을 선택한 상태입니다. 스냅 추적은 객체 스냅이 켜져 있고 한 번만 쓸 스냅을 선택하지 않았을 때 동작합니다.
- 커서가 스냅점을 빨리 지나가면 점이 잡히지 않습니다. 스냅 표시가 나온 뒤 잠시 멈춥니다.
- 위에서 똑바로 내려다볼 때 Z축 점선이 나오지 않습니다. 화면이 거의 정면으로 보는 방향의 점선은 보여 주지 않으므로, 화면을 조금 회전합니다.
- 숨긴 물체나 숨긴 스케치에서 잡은 점은 쓰이지 않습니다.
`,Ie=`---
id: site-area-table
title: 면적표
분류: 땅과 대지
난이도: 기초
workspace: 3D 건설
keywords: 면적표, 대지면적, 건축면적, 연면적, 건폐율, 용적률, 바닥면적, 층별 면적, 면적 계산, 용적률 계산, 건폐율 계산, 건페율, 용적율, 토공량, area table, site area, gross floor area, coverage, floor area ratio, FAR
commands: areaTable, siteArea, buildingOutline
context: areaTable
order: 60
---

## 무엇

대지면적·건축면적·층별 바닥면적·연면적·건폐율·용적률을 한 창에 보여 주는 표입니다. 모델을 고치면 값이 바로 다시 계산됩니다.

## 하는 순서

1. {m:areaTable} 단추를 누르면 오른쪽에 면적표 창이 열립니다.
2. 대지가 여러 개이면 창 위쪽 목록에서 볼 대지를 선택하거나 {t:at.all}를 선택합니다.
3. {t:at.coverage}과 {t:at.far}을 확인하고, 필요하면 층 외곽선이나 건물 외곽선을 고칩니다.
4. 다시 {m:areaTable} 단추를 누르면 창이 닫힙니다.

## 팁

- 값은 다음과 같이 계산합니다.

| 항목 | 계산 |
|---|---|
| 대지면적 | 그린 대지의 넓이 (대지가 없으면 땅 전체) |
| 건축면적 | 건물마다 지상층 외곽선(필로티 포함, 지하층·중정 제외)을 합친 넓이를 건물 외곽선 안에서 잰 값 (층 외곽선이 없으면 가장 넓은 층, 그것도 없으면 건물 외곽선 넓이) |
| 층별 바닥면적 | 그 층의 닫힌 벽 중심선이 둘러싼 넓이 (닫힌 벽이 없으면 바닥판 넓이) |
| 연면적 | 지하층을 포함한 모든 층 바닥면적의 합 |
| 용적률 산정용 연면적 | 지상층 바닥면적의 합 |
| 건폐율 | 건축면적 ÷ 대지면적 × 100 % |
| 용적률 | 용적률 산정용 연면적 ÷ 대지면적 × 100 % |

- 층마다 바닥면적 옆에 {t:at.byWalls}, {t:at.bySlabs}처럼 무엇으로 쟀는지 작게 적힙니다. 건축면적 옆에는 {t:at.byLevels}, {t:at.largestFloor}, {t:at.byOutline} 가운데 하나가 적힙니다: [건물 외곽선](help:build-outline).
- 한 대지에 건물이 여럿이면 건물마다 층별 바닥면적과 {t:at.subtotal}가 따로 나옵니다.
- {t:at.all}에서는 대지마다 건폐율·용적률이 한 줄씩 나오고, 그 아래 {t:at.allSum}가 나옵니다. 어느 대지에도 들어가지 않은 건물은 {t:at.outside} 묶음으로 따로 보이고 합계에서 빠집니다.
- 처음에는 [작업 범위](help:site-scope)의 대지가 보입니다.
- 땅을 [평탄화](help:site-grade)했거나 도로·물길·못·터널 입구가 땅을 깎고 채웠으면, 표 아래에 이들을 모두 합한 토공량(깎기·채우기)이 나옵니다.
- 예: 대지 20 × 25 m(500 m²)에 10 × 12 m 건물 외곽선을 그리고 120 m² 층을 3개 세우면 건축면적 120 m², 건폐율 24 %, 연면적 360 m², 용적률 72 %입니다.

## 자주 하는 실수

- 층의 바닥면적이 0으로 나옵니다. 그 층에 닫힌 벽도 바닥판도 없는 경우입니다. 벽을 첫 점까지 이어 닫거나 바닥판을 깝니다.
- 건폐율이 생각보다 크게 나옵니다. 건축면적은 지상층을 모두 합친 모양이므로 위층이 튀어나온 부분도 들어갑니다. 지하층은 들어가지 않습니다: [건물 외곽선](help:build-outline).
- 비율이 "—"로 나옵니다. 대지면적이 없는 묶음(대지 밖)이라 비율을 계산하지 않습니다.
- 면적표의 값은 학습용 계산입니다. 실제 법규의 면적 산정 기준(발코니, 필로티 등)은 따로 확인합니다.
`,Le=`---
id: site-area
title: 대지·건물 외곽선·면적표
분류: 땅과 대지
난이도: 기초
workspace: 3D 건설
keywords: 대지, 대지 면적, 면적, 면적표, 건폐율, 용적률, 연면적, 경계, site area, coverage, floor area ratio, area table, 대지면적, 대지 경계, 땅 경계, 부지, 필지, 바닥 면적, 건페율, 용적율, site, site boundary
commands: siteArea, buildingOutline, areaTable, landEdit
howto: siteArea
context: siteArea
order: 30
---

## 무엇

건설 지역 안에서 건물을 지을 땅의 경계(대지)를 그리고, 그 안에 건물 외곽선을 그려 건물을 만든 뒤, 면적표로 대지면적·건축면적·연면적·건폐율·용적률을 확인하는 과정입니다. 대지 → 건물 외곽선 → 면적표 순서로 진행합니다.

## 하는 순서

1. {m:siteArea} 단추를 누르고 땅의 경계를 사각형이나 점으로 그립니다.
2. {m:buildingOutline} 단추로 대지 안에 건물이 차지할 자리를 그립니다. 다 그리면 그 자리에 건물이 생깁니다.
3. {m:areaTable} 단추를 누르면 대지면적·건축면적·연면적·건폐율·용적률이 보입니다.

## 팁

- 도구 창에서 {t:opt.areaRect}과 {t:opt.areaPoly} 가운데 하나를 선택합니다. {t:opt.areaRect}은 두 모서리를 클릭하고, {t:opt.areaPoly}은 점을 차례로 클릭한 뒤 첫 점을 다시 누르거나 Enter를 누릅니다.
- 두 번째 모서리는 \`@20,25\`처럼 가로·세로 길이를 입력해도 됩니다.
- {c:siteArea} 도구를 열면 화면이 위에서 내려다보는 평면 보기로 바뀝니다. 점은 다른 대지와 땅의 모서리에 붙고, {c:snap}({k:snap})이 켜져 있으면 격자에도 붙습니다.
- 대지는 여러 개 그릴 수 있고, 대지마다 테두리 색이 다릅니다. 겹치거나 맞닿게 그린 대지는 하나로 합쳐집니다.
- {c:siteArea} 도구에서 대지 안을 클릭하면 그 대지가 선택되고, 창에 {c:pathEdit}·{t:area.redraw}·{c:landEdit} 단추가 나옵니다. 도구 없이 대지를 클릭하면 대지 옆에 작은 막대가 나타납니다. 모양을 고치는 방법은 [대지 편집](help:site-land-edit)에 있습니다.
- 대지가 있으면 건물 외곽선은 선택한 대지 안에 그립니다. 대지 없이 땅 전체에 그릴 수도 있습니다. 자세한 내용은 [건물 외곽선](help:build-outline)에 있습니다.
- 면적표의 각 값이 무엇을 뜻하는지는 [면적표](help:site-area-table)에 있습니다. 건축면적은 층 모양에서 저절로 계산됩니다.
- 땅에 높이가 있으면 대지를 그린 뒤 [평탄화](help:site-grade)로 대지를 한 높이로 선택합니다.
- 건물 하나를 처음부터 끝까지 따라 만들려면 메뉴 탭 줄 맨 앞의 {c:buildFlow} 단추를 누릅니다.

## 자주 하는 실수

- 건물 외곽선이 대지 밖으로 나가 그려지지 않습니다. 사각형의 다른 구석이 대지 밖에 있는 경우입니다. 대지 안쪽에서 다시 그립니다.
- 다각형이 닫히지 않습니다. 첫 점을 다시 클릭하거나 Enter를 눌러야 닫힙니다. 점이 3개보다 적으면 닫을 수 없습니다.
- 대지 안을 클릭했더니 새 대지가 그려지지 않고 그 대지가 선택됩니다. 새 대지는 기존 대지 밖에서 시작합니다.
- 너무 작게 그린 영역은 만들어지지 않습니다.
`,Re=`---
id: site-grade
title: 평탄화·토공량
분류: 땅과 대지
난이도: 중급
workspace: 3D 건설
keywords: 평탄화, 평평하게, 평평, 땅 고르, 땅을 깎, 흙, 토공량, 깎기, 채우기, 성토, 절토, 비탈, 경사, 지형, grade, flatten, level the ground, earthwork, cut and fill, terrain, 땅 고르기, 정지, 부지 조성, 땅 높이, 평탄화 높이, 평균 높이, 토공량 균형, 비탈면, 법면, 경사면, 평탄 화, cut, fill, slope
commands: grade, earthwork, siteMap, contours
howto: grade
context: grade, earthwork
order: 70
---

## 무엇

대지를 한 높이로 선택하는 도구입니다. 대지 안은 정한 높이로 평평해지고, 둘레는 깎기·채우기 비탈로 원래 땅과 이어집니다. 깎을 흙과 채울 흙의 양(토공량)도 계산합니다.

## 하는 순서

1. {m:grade} 단추를 누르고 {t:so.target} 목록에서 대지를 선택합니다.
2. 높이를 입력하거나 {t:grade.average}, {t:grade.balance} 가운데 하나를 누릅니다.
3. Enter를 누르면 대지가 고르게 되고 둘레가 비탈로 이어집니다.
4. 같은 창의 {t:cmd.earthwork} 단추로 깎을 흙·채울 흙의 양(m³)을 볼 수 있습니다.
5. 높이 자료 파일이 있으면 {m:siteMap} 창의 {t:hs.title}에서 {t:hs.file}를 선택합니다.

## 팁

- 창에서 대지를 선택하는 목록은 {t:so.target}입니다. 화면에서 대지를 클릭해도 선택할 수 있고, 대지가 없으면 {t:grade.whole}를 선택합니다. 이미 평탄화한 대지에는 {t:grade.done}이 붙습니다.
- 건물 하나 아래의 땅만 선택하려면 {t:so.target} 목록에서 건물 A 외곽선처럼 건물 외곽선을 선택합니다. 그 평탄화는 건물 외곽선을 고치거나 건물을 다른 대지로 이동하면 함께 따라갑니다. 건물을 삭제할 때는 평탄화도 삭제할지 남길지 묻고, 남기면 목록에 ‘대지 없음’이 붙은 항목으로 남습니다.
- {t:grade.height}는 기준면 0 m에서 잰 높이이며, 원래 땅의 가장 낮은 곳보다 50 m 아래부터 가장 높은 곳보다 50 m 위까지 정할 수 있습니다. 처음에는 대지 아래 땅의 평균 높이로 정해집니다.
- {t:grade.average}는 선택한 대지 안의 지금 땅 높이 평균으로, {t:grade.balance}은 깎는 흙과 채우는 흙이 거의 같아지는 높이로 맞춥니다. 흙을 밖으로 실어 내거나 들여오지 않으려면 {t:grade.balance}을 씁니다.
- 값을 바꾸는 동안 땅이 바로 바뀌어 보이고, Enter를 누르거나 다음 도구를 열어야 문서에 들어갑니다. 한 번 넣을 때마다 되돌리기 한 단계입니다.
- 평탄화한 땅을 지나는 토목 구조물(교량·터널·댐·옹벽·제방·배수 시설, 지형을 따라가는 도로)은 같은 되돌리기 단계 안에서 새 땅에 저절로 다시 맞춰집니다. 자세한 내용은 [평탄화와 토목](help:civil-grading)에 있습니다.
- {t:grade.more}를 열면 {t:grade.sea}로 높이를 입력할 수 있고, {t:grade.cut}과 {t:grade.fill}을 \`1 : n\`의 n으로 정합니다(0 ~ 5, 기본 1과 1.5). 1 : 1.5면 높이 1 m에 옆으로 1.5 m 퍼지고, 0이면 수직 벽(옹벽)이 됩니다.
- 토공량은 {t:grade.cutV}, {t:grade.fillV}, {t:grade.net}(m³)으로 나옵니다. 평탄화가 있으면 [면적표](help:site-area-table) 아래에도 함께 나옵니다.
- 평탄화를 없애려면 그 대지를 선택하고 {t:grade.remove}를 누릅니다.
- 이미 세운 건물 아래를 평탄화하면, 1층 바닥이 새 평탄화 높이와 다른 건물이 있을 때 {t:lf.followTitle} 창이 뜹니다. {t:lf.followBtn}를 누르면 1층 바닥이 그 높이로 이동되고 앞으로도 평탄화를 따라갑니다. {t:lf.followKeep}를 누르면 건물은 그대로 있습니다.
- 평탄화 높이는 건물의 1층 바닥 높이를 정할 때 선택할 수 있습니다. 비탈 대신 벽으로 높이 차이를 받치려면 [옹벽](help:civil-retaining)을 세웁니다.
- 평탄화한 땅은 [등고선](help:site-terrain-view)으로 확인하면 비탈이 잘 보입니다.

## 자주 하는 실수

- 창에 지형이 없다는 글만 나옵니다. 평평한 땅(높이 자료 없음)은 평탄화할 수 없습니다. 창의 {c:siteMap} 단추로 지도에서 영역을 정하거나 높이 파일을 가져옵니다.
- 대지를 삭제했는데 평탄화가 남아 있습니다. 대지를 삭제할 때 평탄화를 남기기로 했다면 목록에 ‘대지 없음’이 붙은 항목으로 남습니다. 그 항목을 선택해 고치거나 {t:grade.remove}를 누릅니다. {t:cfit.unlink}로 보통 솔리드가 된 호수·연못이 판 땅도 같은 방식으로 남습니다.
- 깎기 비탈을 0으로 두었더니 땅이 수직으로 잘렸습니다. 0은 옹벽처럼 수직 벽을 뜻합니다. 보통 1 ~ 2 정도로 둡니다.
- Esc를 눌렀더니 바꾼 높이가 들어가지 않았습니다. Enter를 눌러야 들어갑니다.
`,ze=`---
id: site-land-edit
title: 대지 편집
분류: 땅과 대지
난이도: 중급
workspace: 3D 건설
keywords: 대지 편집, 대지 고치기, 대지 모양, 꼭짓점, 모서리 끌기, 대지 수정, 대지 이름, 이름 바꾸기, 대지 삭제, 대지 지우기, 다시 그리기, 곡선 대지, 대지 합치기, 대지편집, edit site, reshape site, site corners, rename site, delete site, redraw site
commands: landEdit, siteArea, pathEdit
context: landEdit
order: 40
---

## 무엇

이미 그린 대지의 꼭짓점을 끌어 모양을 바꾸고, 곡선 편집·다시 그리기·이름 변경·삭제를 하는 도구입니다. 편집하는 동안 대지 위에 대지 가운데를 원점으로 하는 격자가 깔립니다.

## 하는 순서

1. {m:landEdit} 단추를 누르거나, 대지를 클릭한 뒤 옆 막대나 오른쪽 클릭 메뉴의 {c:landEdit}을 누릅니다.
2. 대지가 여러 개이면 편집할 대지를 클릭합니다.
3. 꼭짓점의 네모 손잡이를 끌어 모양을 바꿉니다.
4. 이름을 변경하거나 삭제하려면 대지 옆 작은 막대에서 {t:lb.rename}이나 {t:lb.delete}를 누릅니다.
5. 위쪽 막대의 {t:land.done}를 누르면 편집이 끝납니다.

## 팁

- 편집을 시작하면 화면이 위에서 내려다보는 평면 보기로 바뀌고, 대지가 옅은 파란 바탕과 격자로 보입니다. 격자 원점은 대지 가운데이며, 화면도 이 점을 중심으로 돕니다.
- 꼭짓점을 끄는 동안 그 모서리에 붙은 두 변의 길이와 새 넓이가 보입니다. 꼭짓점은 다른 대지와 땅의 모서리, 객체 스냅({k:osnap})에 붙습니다.
- 끄는 도중에 Esc를 누르면 꼭짓점이 제자리로 돌아갑니다. 끌지 않을 때 Esc를 누르면 편집이 끝납니다. 끌기 한 번이 되돌리기 한 단계입니다.
- 대지 옆 막대의 {t:lb.corners}은 꼭짓점 손잡이를 보이거나 숨깁니다. {c:pathEdit}은 점과 곡선 손잡이를 이동하고 점을 더하거나 뺍니다. {t:area.redraw}는 이 대지를 처음부터 새로 그린 뒤 편집으로 돌아옵니다.
- 편집 중에 다른 대지를 클릭하면 그 대지를 편집합니다. 위쪽 막대의 목록에서 바꿀 수도 있습니다.
- 도구 없이 대지를 한 번 클릭하면 대지가 선택되기만 합니다. 대지의 빈 곳을 더블클릭하면 [작업 범위](help:site-scope)가 그 대지로 이동됩니다.
- 건물 외곽선도 같은 방법으로 편집합니다. 외곽선 안의 빈 땅을 클릭한 뒤 옆 막대의 {c:areaEdit}을 누릅니다. 건물 외곽선은 대지 밖으로 나가거나 다른 건물과 겹치게 바꿀 수 없습니다: [건물 외곽선](help:build-outline).
- 벽·바닥판처럼 건물을 만드는 도구나 토목 도구를 열면 대지 편집이 저절로 끝나고 화면이 3D 보기로 돌아옵니다.

## 자주 하는 실수

- 꼭짓점이 더 움직이지 않습니다. 변끼리 엇갈리는 모양이나 너무 작은 모양은 만들 수 없어 마지막으로 가능했던 자리에서 멈춥니다.
- 곡선이 있는 대지에는 꼭짓점 손잡이가 없습니다. {c:pathEdit}으로 점과 손잡이를 이동합니다.
- 다른 대지와 겹치게 끌었더니 두 대지가 하나로 합쳐졌습니다. 겹친 대지는 하나로 합쳐지며, Ctrl+Z로 되돌릴 수 있습니다. 두 대지 모두 평탄화되어 있으면 어느 높이를 남길지 묻습니다.
- 대지를 삭제하면 그 대지를 채운 물 높이도 삭제됩니다. 대지 위에 건물이 있거나 평탄화가 있으면 먼저 묻습니다. 건물은 그대로 땅 전체에 남고, [건설 진행 상황](help:arch-flow)의 다음 단계도 막히지 않습니다. 평탄화를 삭제하면 이미 세운 건물은 지금 땅 그대로 둔 것으로 봅니다.
`,Be=`---
id: site-map
title: 건설 지역 정하기
분류: 땅과 대지
난이도: 기초
workspace: 3D 건설
keywords: 건설 지역, 지역 정하, 지도, 위치, 주소, 우리 학교, 동네, 항공사진, 행정구역, 검색, map, location, address, aerial, region, 건설지역, 공사할 땅, 땅 고르기, 위성사진, 브이월드, 인증키, 높이 자료, 지형, 높이 파일, 수치표고모델, 시도, 시군구, 읍면동, vworld, site location, terrain, height file
commands: siteMap, terrainView, grade
howto: siteMap
context: siteMap
order: 10
---

## 무엇

3D 건설에서 모든 작업이 놓일 땅(건설 지역)을 지도에서 사각형으로 선택하는 창입니다. 선택한 범위의 항공사진과 땅 높이(지형)가 문서에 들어오고, 그 위에 대지·건물·토목 구조물을 만듭니다.

## 하는 순서

1. {m:siteMap} 단추를 누릅니다.
2. 주소나 장소 이름으로 찾거나, {t:site.region0} → {t:site.region1} → {t:site.region2} 순서로 선택합니다.
3. 지도를 끌어 이동하고, 공사할 땅을 사각형으로 끌어 그립니다.
4. {t:site.confirm}를 누르면 항공사진과 땅 높이가 들어옵니다.
5. 항공사진을 보려면 브이월드 인증키(무료)가 필요합니다: {t:site.openSettings}.

## 팁

- 땅이 아직 없는 문서로 3D 건설에 들어가면 이 창이 저절로 열립니다. 그냥 닫으면 지도 없이 50 × 50 m 평평한 땅에서 시작합니다.
- 찾기 결과를 누르면 지도가 그곳으로 이동됩니다. 행정구역 목록은 선택할 때마다 지도를 그 지역으로 이동하고 다음 목록을 채웁니다. {t:site.region3} 목록은 리가 있는 곳에서만 보입니다.
- 지도는 끌어서 이동하고 마우스 휠이나 {t:site.zoomIn}·{t:site.zoomOut} 단추로 확대·축소합니다.
- 사각형을 그린 뒤에는 모서리·변을 끌어 크기를, 안쪽을 끌어 위치를 바꿉니다. 처음부터 다시 그리려면 {t:site.redraw}를 누릅니다.
- 오른쪽의 {t:opt.sideW}·{t:opt.sideH} 칸에 길이를 직접 입력해도 사각형이 그 크기로 바뀝니다. 한 변은 5 m 이상이고, 가장 긴 변은 기본 2000 m입니다. 더 넓은 땅이 필요하면 환경 설정의 {t:set.siteMax}를 늘립니다(컴퓨터 메모리에 따라 한도가 정해집니다).
- {t:hs.title}는 {t:hs.auto}이면 공개 높이 자료(약 30 m 간격)를 함께 받습니다. 더 정밀한 자료(.asc 격자, x y z 점 목록)가 있으면 {t:hs.file}를 선택하고 {t:tf.coords}를 맞춥니다. 영역은 그대로 두고 높이만 바꾸려면 {t:hs.applyNow}를 누릅니다.
- {t:tv.depth}는 땅 아래 흙덩이(지층 단면)를 얼마나 깊게 그릴지 정합니다(1 ~ 200 m, 기본 10 m).
- 인증키가 없거나 인터넷이 막혀 있으면 {t:site.other}을 씁니다. {t:site.file}는 직접 찍었거나 써도 되는 사진과 그 실제 가로 길이로, {t:site.plain}은 가로·세로 길이만으로 땅을 만듭니다.
- 인증키가 없을 때 지도 위에 보이는 {t:site.openSettings} 단추를 누르면 환경 설정의 지도 쪽이 열리고, 키를 받는 세 단계가 적혀 있습니다. 받은 키는 {t:set.vworldKey} 칸에 넣습니다.
- 받은 항공사진은 문서에 한 장으로 저장되므로 다음부터는 인터넷 없이 열립니다. 높이가 처음 들어오면 {c:terrainView} 창이 함께 열립니다. 자세한 보기 방법은 [지형 보기·등고선](help:site-terrain-view)에 있습니다.
- 나중에 건설 지역을 다시 정해도 지어 둔 물체는 땅 위 제자리에 남고, [평탄화](help:site-grade)와 물 높이도 그대로 남습니다. 도로·교량·터널 같은 토목 구조물은 새 땅에 저절로 다시 맞춰집니다.

## 자주 하는 실수

- {t:site.confirm}가 눌리지 않습니다. 지도에 사각형을 먼저 그려야 하고, 브이월드에 연결되어 있어야 합니다. 연결이 안 되면 {t:site.retry}을 누르거나 {t:site.other}을 씁니다.
- 새 영역 밖에 물체가 남는다는 알림이 뜹니다. {t:site.grow}를 누르면 물체가 모두 들어가도록 영역이 커지고, {t:site.keep}를 누르면 그대로 정합니다.
- 항공사진은 받았는데 땅이 평평합니다. 높이 자료를 받지 못한 경우입니다. 이 창을 다시 열어 영역을 다시 정하거나 {t:hs.title}에서 높이 파일을 가져옵니다.
- 높이 파일이 땅과 겹치지 않는다고 나옵니다. {t:tf.coords}가 파일과 맞지 않는 경우가 많습니다. 다른 좌표계를 선택하거나 {t:tf.centre}를 선택합니다.
- Google 지도 화면을 찍은 사진은 쓸 수 없습니다. 브이월드 지도나 직접 찍은 사진만 씁니다.
`,Ve=`---
id: site-scope
title: 작업 범위
분류: 땅과 대지
난이도: 중급
workspace: 3D 건설
keywords: 작업 범위, 범위, 작업 위치, 경로, 지금 층, 작업 층, 현재 층, 대지 고르기, 건물 고르기, 층 고르기, 상태 표시줄, 흐리게, 흐리게 끄기, 모든 층, 더블클릭, Esc, 범위 위로, 선택이 안 됨, 다른 건물, 붙은 건물, work scope, scope, path, current level, working level, fade, double-click, scope up
commands: levelPanel, buildFlow, buildingEasy, buildingNew
order: 80
---

## 무엇

지금 어느 대지의 어느 건물, 어느 층에서 작업하는지를 정한 것이 작업 범위입니다. 상태 표시줄의 경로 대지 1 › 건물 A › 3층이 늘 이것을 보여 줍니다. 새로 만드는 벽·바닥판·기둥 같은 부품은 이 범위의 층에 놓이고, 건물 도구를 쓰는 동안에는 범위 밖의 부품을 선택할 수 없습니다.

## 하는 순서

1. 상태 표시줄의 경로에서 지금 작업하는 대지·건물·층을 확인합니다.
2. 경로의 대지 단계를 누르면 대지 목록이 열립니다. 작업할 대지를 선택합니다.
3. 건물 단계를 누르면 그 대지의 건물이 나옵니다. 작업할 건물을 선택합니다.
4. 층 단계를 누르면 그 건물의 층이 바닥 높이와 함께 나옵니다. 작업할 층을 선택합니다.
5. 도구 창 첫 줄에서 그 도구가 작업하는 곳을 확인하고 작업합니다.

## 팁

- 같은 경로가 {c:buildFlow} 창의 맨 위에도 있습니다. {c:levelPanel} 창의 목록에도 같은 범위가 강조되어 보입니다. 목록의 행을 클릭하면 선택만 하고, 두 번 클릭하면 범위가 그곳으로 이동됩니다: [건물 이름·색·전체 목록](help:build-names-tree).
- 상태 표시줄의 경로 옆에는 지금 층의 바닥 높이와 층고, {t:ab.allLevels}, {t:bo.fade} 스위치가 있습니다. 경로 앞의 층 단추를 누르면 {c:levelPanel} 창이 앞으로 나옵니다.
- {t:bo.fade} 스위치를 켜 두면(처음에 켜짐) 벽·바닥판·문 같은 건물 도구를 쓰는 동안에만 위층과 작업 범위 밖이 흐리게 보입니다. 보기만 할 때는 모두 또렷하고, 끄면 도구를 쓸 때도 흐리게 하지 않습니다.
- {t:ab.allLevels}을 켜면 상자 선택이 지금 층을 넘어 건물의 모든 층에 미칩니다.
- 한 대지에 건물이 여럿이면 건물 단계의 목록에 건물마다 한 줄씩 나옵니다. 외곽선이 맞닿은 건물도 하나씩 따로 선택합니다: [붙은 건물](help:build-shared-levels).
- 건물이 없는 곳을 선택하면 경로에 {t:so.noBuilding}이 보이고, {c:buildFlow} 창에 {c:buildingEasy}와 {c:buildingNew} 단추가 나옵니다. 경로에서 선택만 해서는 대화 창이 열리지 않습니다.
- 벽·바닥판·기둥·문·창처럼 한 층에서 쓰는 도구는 범위의 층에 있는 부품만, 지붕·계단은 범위 건물의 모든 층의 부품만 선택하고 스냅합니다. 도로·댐 같은 토목 구조물은 스냅만 되고 건물 도구로 선택할 수는 없습니다.
- 대지·토목 도구의 창 첫 줄에는 그 도구가 작업하는 대지가 나옵니다. [평탄화](help:site-grade)·물·[건물 외곽선](help:build-outline) 도구 창의 {t:so.target}을 바꾸면 작업 범위도 함께 이동됩니다.
- 다른 건물의 부품을 더블클릭하면 범위가 그 건물과 층으로 이동되고 알림이 뜹니다.
- 클릭은 선택만 합니다. 범위는 이동하지 않습니다. 대지의 빈 곳을 더블클릭하면 범위가 그 대지로, 건물이나 건물 외곽선 안의 빈 땅을 더블클릭하면 그 건물로 이동됩니다. 외곽선 모양은 {c:areaEdit}으로 고칩니다: [건물 외곽선](help:build-outline).
- 도구도 선택한 것도 없을 때 Esc를 누르면 범위가 한 단계씩 위로 올라갑니다(층·건물 → 대지 → 땅). 대지가 없으면 그 단계는 건너뜁니다.
- 범위가 바뀌면 새 범위 밖에 있는 건물 부재는 선택에서 빠집니다. 도로처럼 땅 위에 있는 것은 그대로 남습니다.
- 범위의 층이 숨겨져 있거나 흐리게 보이면 경로 옆에 눈 표시가 나옵니다. 눈 표시를 누르면 그 층이 다시 또렷이 보입니다.

## 자주 하는 실수

- 벽이나 기둥이 클릭되지 않습니다. 다른 건물이나 다른 층의 부품이라 범위 밖인 경우입니다. 경로에서 그 층을 선택하거나 부품을 더블클릭합니다.
- 벽을 그렸더니 엉뚱한 층에 생겼습니다. 새 부품은 범위의 층에 놓입니다. 그리기 전에 경로의 층 단계를 확인합니다.
- 도구를 쓰는 동안 화면이 흐려 보기 어렵습니다. 상태 표시줄의 {t:bo.fade} 스위치를 끕니다.
- 되돌리기를 했더니 범위가 다른 곳으로 이동되었다는 알림이 뜹니다. 범위의 층이나 건물이 없어져 가장 가까운 곳으로 이동한 것입니다. 필요하면 경로에서 다시 선택합니다.
`,He=`---
id: site-terrain-view
title: 지형 보기·등고선·지형에 놓기
분류: 땅과 대지
난이도: 중급
workspace: 3D 건설
keywords: 지형 보기, 지형, 땅 보기, 땅 투명, 불투명도, 비춰 보기, 위성지도, 지도, 지적편집도, 지적도, 지번, 용도지역, 흙덩이, 지층, 단면, 등고선, 등고선 간격, 높이선, 지형에 놓기, 땅에 놓기, 땅에 붙이기, 바닥에 맞추기, 해발, terrain view, contours, contour lines, drop on ground, cadastral, ground opacity
commands: terrainView, contours, dropGround
context: terrainView, contours, dropGround
order: 20
---

## 무엇

땅(지형)을 보는 방법을 정하는 기능입니다. {c:terrainView}에서는 땅의 불투명도, 땅 위에 깔 지도, 흙덩이 깊이를 정하고, {c:contours}은 같은 높이를 잇는 선을 그립니다. {c:dropGround}는 선택한 물체를 그 자리의 땅 높이로 내려놓거나 올립니다.

## 하는 순서

1. 뷰 큐브 옆 보기 단추 줄에서 {c:terrainView} 단추를 누릅니다 (일반 메뉴에서는 명령줄에 \`terrainview\`를 입력합니다).
2. {t:tv.opacity}를 낮추면 땅이 비쳐 지하층과 기초가 보입니다.
3. {t:tv.picture}에서 {t:tv.aerial}, {t:tv.base}, {t:tv.cadastral} 가운데 하나를 선택합니다.
4. 등고선은 {m:contours} 단추를 누르면 켜지고, 옆에 열린 창에서 {t:ct.interval}과 {t:ct.color}을 정합니다.
5. 물체를 땅에 앉히려면 물체를 선택하고 {m:dropGround} 단추를 누릅니다.

## 팁

- 땅에 높이가 처음 들어오면 {c:terrainView} 창이 저절로 열립니다. 보기 단추 줄의 {c:terrainView} 단추는 고급 메뉴에서 보이고, {c:contours} 단추는 일반·고급 모두에서 보입니다.
- {t:tv.opacity}를 0 %로 두면 땅이 숨겨집니다.
- {t:tv.aerial}는 문서에 저장된 항공사진입니다. {t:tv.base}와 {t:tv.cadastral}는 선택할 때 브이월드에서 받아 오므로 인증키와 인터넷이 있어야 합니다. 설치한 프로그램에서는 받은 지도도 파일에 함께 저장됩니다.
- {t:tv.cadastral}의 용도지역 색과 지번 경계는 참고용이며 법적 효력이 없습니다.
- 등고선 간격을 자동으로 두면 땅의 높낮이에 맞춰 정해지고, 1·2·5·10·20 m 가운데에서 선택할 수도 있습니다. 해발 높이가 간격의 5배인 선은 굵게 그려집니다. {t:ct.opacity}를 낮추면 땅 위 지도가 잘 보입니다.
- 등고선은 [평탄화](help:site-grade)한 뒤의 땅을 따라 그려지므로, 평탄화 높이를 바꾸면 선도 함께 바뀝니다.
- 등고선이 켜진 채로 {m:contours} 단추를 다시 누르면 창이 닫히고 선도 꺼집니다.
- {c:dropGround}는 물체를 위아래로만 이동해, 물체 바닥이 물체 가운데 아래의 땅에 닿게 합니다. 한 번의 되돌리기로 돌아옵니다.
- 3D 화면에서 땅 위에 커서를 두면 아래 상태 표시줄에 그 자리의 땅 해발 높이가 나옵니다.
- 지형을 가져오는 방법은 [건설 지역 정하기](help:site-map)에 있습니다.

## 자주 하는 실수

- 등고선 창에 지형이 없다는 글이 나옵니다. 아직 땅에 높이 자료가 없는 경우입니다. 창 안의 {c:siteMap} 단추로 지도에서 영역을 정하거나 높이 파일을 가져옵니다.
- {t:tv.base}나 {t:tv.cadastral}가 나오지 않습니다. 브이월드 인증키가 없거나 인터넷이 끊긴 경우입니다. 지도에서 정하지 않은 땅(사진 파일·평평한 땅)에는 가져온 사진만 깔 수 있습니다.
- {c:dropGround}를 눌러도 아무것도 바뀌지 않습니다. 물체를 먼저 선택해야 합니다.
- 경사진 땅에서 큰 물체를 내려놓으면 한쪽이 땅에 묻히거나 뜹니다. 물체 가운데 아래 한 점의 높이에 맞추기 때문입니다. 큰 건물은 먼저 [평탄화](help:site-grade)합니다.
`,Ue=`---
id: arch-ceiling
title: 천장·천장 보기·위 잘라 보기
분류: 건축 부재
난이도: 중급
workspace: 3D 건설
keywords: 천장, 천장 달기, 반자, 반자 속, 반자 속 깊이, 천장 높이, 층고 따라, 모든 층에 천장, 천장 넣기, 석고보드, 텍스, 천장 보기, 천장도, 반사 천장도, 천장 평면도, 천정, 천장 조명, 올려다보기, 아래에서 보기, 좌우 반전, 위 잘라 보기, 잘라 보기, 자르는 높이, 방 안 보기, 방 들여다보기, rcp, ceiling, ceiling view, reflected ceiling plan, cut away, cut height, plenum
commands: ceiling, ceilingAll, ceilingView, cutAway, lighting, lightPlace
context: ceilingView, cutAway, ceiling, ceilingAll
order: 180
---

## 무엇

{c:ceiling}은 층 전체나 방 하나에 반자(천장판)를 다는 도구입니다. 천장은 위 바닥판이나 지붕 밑면에서 {t:ceil.plenum}만큼 내려온 높이에 걸리고, 층고가 바뀌면 따라 움직입니다. {c:ceilingView}는 작업 층의 천장을 아래에서 올려다보는 보기이고, {c:cutAway}는 작업 층 위를 잘라 내고 방 안을 위에서 들여다보는 보기입니다.

## 하는 순서

1. {m:ceiling} 단추를 누릅니다.
2. 창의 {t:ceil.how}에서 {t:ceil.how.level}, {t:ceil.how.room}, {t:ceil.how.draw} 가운데 하나를 선택합니다.
3. {t:ceil.how.level}는 클릭하거나 Enter를 누르면 작업 층 전체에 천장이 생깁니다. {t:ceil.how.room}은 벽으로 둘러싸인 방 안을 클릭하고, {t:ceil.how.draw}는 사각형이나 다각형을 그립니다.
4. 천장을 확인하려면 {m:ceilingView} 단추를 누르거나 {k:ceilingView} 키를 누릅니다. 화면이 아래에서 올려다보는 방향으로 바뀌고 땅·다른 층·다른 건물은 숨겨집니다.
5. 3D 화면 위의 작은 창에서 {t:lt.cutHeight}를 정하고, 평면도와 같은 방향으로 보려면 {t:ceil.flip}을 켭니다.
6. 다 보았으면 작은 창의 × 단추나 Esc를 누르거나 {k:ceilingView} 키를 다시 눌러 원래 화면으로 돌아갑니다.
7. 방 안을 위에서 들여다보려면 {m:cutAway} 단추를 누르고 작은 창의 {t:lt.cutHeight}로 자를 높이를 정합니다.

## 팁

- {t:ceil.rule}가 켜져 있으면(처음에 켜짐) 천장 높이는 위 바닥판이나 지붕 밑면에서 {t:ceil.plenum}(처음 0.4 m)만큼 내려온 곳입니다. 층고 3 m, 바닥판 두께 0.2 m이면 천장은 2.4 m입니다. 끄면 {t:ceil.height}에 넣은 높이를 지킵니다.
- 천장 두께는 처음 20 mm입니다. 경사 지붕 아래에서는 {t:ceil.kind}에서 {t:ceil.kind.flat}이나 {t:ceil.kind.roof}를 선택합니다.
- {t:ceil.how.level}로 단 천장은 층 외곽선과 중정을 따르고, 외곽선을 고치면 함께 바뀝니다.
- {c:ceilingAll}은 천장이 없는 층마다 외곽선을 따라 천장을 한 번에 답니다. 필로티 층과 이미 천장이 있는 층은 빼고, 알림에 단 수와 뺀 수가 나옵니다. {m:ceilingAll} 단추, {c:ceiling} 도구 창, {c:levelPanel}의 건물 행 오른쪽 클릭 메뉴에 있습니다.
- [건물 세우기](help:build-overview)의 {t:ceil.build} 스위치는 처음부터 켜져 있어, 세울 때 필로티 층을 뺀 모든 층에 천장이 함께 생깁니다.
- 천장을 선택하면 속성 창에서 높이·두께와 {t:ceil.finish}({t:ceil.finish.gypsum}·{t:ceil.finish.tex}·{t:ceil.finish.wood})를 바꿉니다. 천장 조명은 천장에 붙어 천장 높이가 바뀌면 함께 움직입니다: [조명·시간·밤](help:arch-lighting).
- {t:lt.cutHeight}의 처음 값은 1.2 m입니다. {c:ceilingView}에서는 0.1 m부터 층고나 가장 낮은 천장보다 0.1 m 낮은 높이까지 정할 수 있어, 단 천장이 늘 보입니다.
- {c:levelPanel}에서 층 행을 오른쪽 클릭해 {c:ceilingView}를 선택하면 작업 범위가 그 층으로 이동된 뒤 천장 보기가 켜집니다.
- {c:planView}, {c:archSection}, {c:ceilingView}, {c:cutAway}는 한 번에 하나만 켜집니다. 하나를 켜면 다른 보기는 꺼집니다.

## 자주 하는 실수

- 엉뚱한 층의 천장이 보입니다. {c:ceilingView}는 작업 층을 봅니다. 상태 표시줄의 경로나 {c:levelPanel}에서 층을 먼저 바꿉니다.
- 천장이 비어 보이고 이 층 위에 바닥판이나 지붕이 없다는 안내가 나옵니다. 위층 바닥판이나 지붕을 먼저 만듭니다.
- 천장이 2.2 m보다 낮다는 안내가 나옵니다. {t:ceil.plenum}를 줄이거나 층고를 높입니다.
- {t:ceil.how.room}에서 방이 아니라는 알림이 나옵니다. 벽이 닫혀 있지 않은 곳입니다. 벽을 잇거나 {t:ceil.how.draw}로 그립니다.
- 잘린 부분의 물체를 클릭해도 선택되지 않습니다. 잘라 낸 부분은 선택할 수 없으므로 보기를 끄고 선택합니다.
`,We=`---
id: arch-column
title: 기둥 세우기
분류: 건축 부재
난이도: 기초
workspace: 3D 건설
keywords: 기둥, 네모 기둥, 사각 기둥, 둥근 기둥, 원형 기둥, 필로티 기둥, 기둥 크기, 기둥 높이, 기둥 세우기, 기둥 여러 개, 지둥, column, pillar, post, square column, round column, column height
commands: column, levelAdd
context: column
order: 70
---

## 무엇

누르는 곳마다 네모나 둥근 기둥을 세웁니다. 기둥은 지금 층 바닥에서 시작하고, 위층이 있으면 위층 바닥까지 닿습니다.

## 하는 순서

1. {m:column} 단추를 누릅니다.
2. 창에서 {t:opt.colSquare} 또는 {t:opt.colRound} 단추를 누릅니다.
3. 크기 칸({t:opt.colWidth} 또는 {t:opt.diameter})에 값을 넣습니다.
4. 바닥에서 기둥을 세울 곳을 누릅니다. 도구는 열린 채로 있어 계속 세울 수 있습니다.
5. 다 세웠으면 Esc를 누릅니다.

## 팁

- 크기는 처음에 0.4 m이고 0.1~3 m로 정합니다.
- 위층이 있으면 {t:flow.top}이 {t:flow.top.toFloor}로 정해져 높이를 따로 넣지 않습니다. 층고를 바꾸면 기둥 높이도 따라 바뀌고, 위층 바닥판이 덮는 기둥은 바닥판 아랫면에서 멈춥니다.
- 위층이 없거나 {t:flow.top.height} 단추를 누르면 높이를 직접 넣습니다 (0.1~30 m).
- {t:flow.topLevel} 칸에서 더 위의 층을 선택하면 여러 층을 지나는 긴 기둥이 됩니다.
- 명령줄에 \`3,4\`처럼 좌표를 입력하면 그 자리에 기둥이 섭니다 ([좌표·길이 입력](help:input-coords)).
- 2층 이상 어느 층에든 세울 수 있습니다. 창의 {t:lv.pickLevel} 칸에서 층을 선택하면 작업 층도 그 층으로 바뀝니다.
- {t:flow.baseOffset} 칸에 값을 넣으면 층 바닥보다 그만큼 위에서 기둥이 시작합니다.
- 세운 기둥을 선택하면 속성 창의 {t:flow.props}에서 {t:flow.props.level}, {t:flow.baseOffset}, {t:flow.top}을 바꿉니다 ([벽 위쪽 맞추기](help:arch-wall-top)).

## 자주 하는 실수

- Enter를 눌러도 도구가 닫히지 않습니다. 기둥 도구는 Esc로 닫습니다.
- 기둥이 위층 바닥을 뚫고 올라갑니다. {t:flow.top.height} 방식으로 높이를 넣었는지 확인하고 {t:flow.top.toFloor} 방식으로 바꿉니다.
- 기둥이 바닥에서 떠 있습니다. {t:flow.baseOffset} 값이 0인지 확인합니다.
- 기둥은 [건설 진행 상황](help:arch-flow)에서 {t:fl.state.optional} 단계입니다. 세우지 않아도 다음 단계로 넘어갈 수 있습니다.
`,Ge=`---
id: arch-curtain-wall
title: 커튼월
분류: 건축 부재
난이도: 중급
workspace: 3D 건설
keywords: 커튼월, 커튼 월, 유리벽, 유리 벽, 통유리, 유리 외벽, 멀리언, 트랜섬, 유리 칸, 유리 건물, 커텐월, curtain wall, curtainwall, glass wall, glazing, mullion, transom, glass facade
commands: curtainWall, window, wall
context: curtainWall
order: 90
---

## 무엇

멀리언(세로 틀)과 트랜섬(가로 틀) 사이에 유리를 끼운 유리벽입니다. 바닥에 그린 선을 따라 세우거나, 창처럼 벽에 끼울 수 있습니다.

## 하는 순서

1. {m:curtainWall} 단추를 누릅니다.
2. 창에서 {t:lib.curtain.line} 또는 {t:lib.curtain.wall} 단추를 누릅니다.
3. {t:presetParam.h}, {t:presetParam.gx}, {t:presetParam.gz}, {t:presetParam.mw} 칸에 값을 넣습니다.
4. {t:lib.curtain.line}: 바닥에 점을 차례로 찍고, 마지막 점을 다시 누르거나 Enter를 누르면 커튼월이 섭니다.
5. {t:lib.curtain.wall}: 벽 위를 클릭하면 벽에 구멍이 나고 그 자리에 커튼월이 끼워집니다. 다 끼웠으면 Esc를 누릅니다.

## 팁

- 선을 따라 세우면 꺾인 토막마다 커튼월이 한 장씩 서고, 모두 한 그룹으로 묶입니다. 1 m보다 짧은 토막은 건너뜁니다.
- 처음 값은 높이 3 m, 멀리언·트랜섬 간격 1.5 m, 멀리언 폭 0.06 m입니다. 간격을 바꾸면 유리 칸의 크기가 바뀝니다.
- 선을 그리는 도중 {k:undo}는 마지막 점을 삭제합니다.
- {t:lib.curtain.line} 방식으로 세운 커튼월은 지금 층 바닥에 섭니다. 층고에 맞추려면 {t:presetParam.h} 칸에 층고와 같은 값을 넣습니다.
- {t:lib.curtain.wall} 방식에서는 {t:presetParam.w} 칸으로 너비를 정하고, R 키로 앞뒤를 바꿉니다.
- 커튼월은 {t:level.advanced} 메뉴에 있고 {t:level.basic} 메뉴에서는 보이지 않습니다 ([일반·고급 메뉴](help:start-level)). 명령줄에 \`cw\`를 입력하면 어느 쪽 메뉴에서든 열립니다.
- 보통 크기의 창은 [문·창](help:arch-door-window)의 {c:window} 도구를 씁니다.

## 자주 하는 실수

- 점을 하나만 찍고 끝내면 아무것도 생기지 않습니다. 점을 두 개 이상 찍습니다.
- {t:lib.curtain.line} 방식으로 세운 커튼월은 벽에 구멍을 내지 않습니다. 벽 안에 넣으려면 {t:lib.curtain.wall} 방식을 씁니다.
- 선을 따라 세운 커튼월 한 장만 이동하려면 {c:ungroup} 도구로 묶음을 먼저 풉니다.
`,Ke=`---
id: arch-door-window
title: 문·창 넣기
분류: 건축 부재
난이도: 기초
workspace: 3D 건설
keywords: 문, 문 넣기, 창, 창문, 출입문, 현관, 미닫이, 여닫이, 통창, door, doors, window, windows, 창호, 개구부, 양개문, 미닫이문, 자동문, 방화문, 회전문, 붙박이창, 여닫이창, 미닫이창, 들창, 오르내리창, 천창, 문틀, 창틀, 벽에 구멍, 문 달기, 창문 달기, 창문넣기, sliding door, double door, revolving door, skylight, opening, frame
commands: door, window, curtainWall, move
howto: doorWindow
context: door, window
order: 80
---

## 무엇

벽에 문과 창을 끼웁니다. 문·창을 벽 위에 놓으면 벽에 그 크기만큼 구멍이 저절로 나고, 벽을 이동하면 끼운 문·창도 함께 움직입니다.

## 하는 순서

1. {m:door} 또는 {c:window} 단추를 누릅니다.
2. 창에서 모양을 선택하고 폭·높이를 정합니다.
3. 벽을 클릭하면 벽에 끼워지고 그만큼 구멍이 납니다 (R: 방향 바꾸기).
4. Esc로 끝냅니다.

## 팁

- 문 종류: {t:preset.door.single}, {t:preset.door.double}, {t:preset.door.sliding}, {t:preset.door.auto}, {t:preset.door.fire}, {t:preset.door.revolving}.
- 창 종류: {t:preset.window.single}, {t:preset.window.double}, {t:preset.window.tall}, {t:preset.window.fixed}, {t:preset.window.casement}, {t:preset.window.sliding}, {t:preset.window.awning}, {t:preset.window.hung}, {t:preset.window.skylight}.
- 창 위쪽의 {t:lib.group.opening} 묶음에서 {t:presetCat.door}, {t:presetCat.window}, {t:presetCat.curtain} 사이를 오갑니다. 검색 칸에 이름을 입력해도 찾습니다.
- 크기 칸은 {t:presetParam.w}, {t:presetParam.thick}, {t:presetParam.h}, {t:presetParam.frame}입니다. 정한 크기는 프로그램을 닫을 때까지 기억됩니다.
- 문은 바닥에 붙어 끼워집니다. 창은 대부분 바닥에서 0.9 m 높이에 끼워지며, {t:preset.window.awning}은 1.5 m, {t:preset.window.hung}은 0.8 m, {t:preset.window.tall}은 바닥부터입니다.
- 벽 안에서 R 키나 창의 {t:opt.presetFlip} 단추를 누르면 문·창의 앞뒤가 바뀝니다. 바닥 위에서는 90° 돌아갑니다.
- {t:preset.door.single}, {t:preset.door.double}, {t:preset.door.fire}은 벽 안에서 F 키나 {t:auto.door.side} 단추로 열리는 쪽만 바꿉니다. {t:preset.door.single}과 {t:preset.door.fire}은 H 키나 {t:auto.door.hinge} 단추로 경첩 쪽만 바꿉니다.
- 끼운 뒤에는 문을 선택해 속성 창에서 바꿉니다. {t:auto.door.hinge}은 방 바깥쪽에서 볼 때(방을 알 수 없으면 문을 미는 쪽에서 볼 때) 경첩이 있는 쪽이고, {t:auto.door.side}은 {t:auto.door.in}(방 쪽)과 {t:auto.door.out} 가운데 선택합니다. 하나를 바꿔도 다른 하나는 그대로입니다.
- 도구는 하나를 끼운 뒤에도 열려 있어 다음 문·창을 바로 끼울 수 있습니다. 끼울 벽은 밝게 표시됩니다.
- 끼운 문·창을 {c:move} 도구로 벽을 따라 이동하면 구멍도 함께 이동됩니다. 문·창을 삭제하면 벽의 구멍이 막힙니다.
- {t:preset.window.skylight}은 벽이 아니라 지붕 위에 놓입니다 ([지붕](help:arch-roof)).
- 넓은 유리벽은 [커튼월](help:arch-curtain-wall)을 씁니다.

## 자주 하는 실수

- Enter를 눌러도 도구가 닫히지 않으면 Esc를 누릅니다.
- 바닥을 클릭하면 문·창이 벽 없이 바닥에 놓이고 구멍이 나지 않습니다. 벽 면 위를 클릭합니다.
- 문이 벽 끝에 걸치지 않고 안쪽으로 밀려 들어갑니다. 문·창은 벽 한 토막 안에 들어가도록 자리가 맞춰지고, 토막이 문보다 짧으면 토막 가운데에 놓입니다.
- 문이 벽보다 높으면 구멍은 벽 높이까지만 납니다. 문 높이를 줄이거나 벽을 높입니다.
`,qe=`---
id: arch-drawing
title: 건축 도면
분류: 건축 부재
난이도: 중급
workspace: 3D 건설
keywords: 도면, 평면도, 입면도, 단면도, 설계도, 건축 도면, 인쇄, 출력, pdf, 축척, 종이, floor plan, plan, elevation, section, drawing, print, blueprint, 층별 평면도, 정면도, 배면도, 좌측면도, 우측면도, 용지, A3, A4, 1:100, 표제란, DXF, 도면 출력, 도면 인쇄, 설계 도면, 도먼, 평면도 그리기, 문 열림, 문 여닫는 방향, 평면 보기, 단면 보기, 단면선
commands: archDrawing, planView, archSection
howto: archDrawing
context: archDrawing, planView, archSection
order: 190
---

## 무엇

건물의 층마다 평면도와 네 방향 입면도를 축척에 맞춰 용지에 그리고, 인쇄하거나 PDF로 저장합니다. 평면도는 층 바닥에서 1.2 m 높이로 잘라 위에서 본 그림이고, 문마다 열리는 모습이 함께 그려집니다. {c:planView}와 {c:archSection}에서 보던 그대로 평면도·단면도 한 장을 만들 수도 있습니다.

## 하는 순서

1. {m:archDrawing} 단추를 누릅니다.
2. {t:ad.makeTitle}에서 {t:ad.all}, 용지, 축척을 선택하고 {t:ad.make}를 누릅니다.
3. 모두 인쇄 / PDF 단추로 인쇄하거나 PDF로 저장합니다.

## 팁

- 도면을 처음 열면 추천값(A3 가로, 용지에 맞는 축척)으로 층별 평면도가 저절로 만들어집니다. 입면도를 더하거나 용지·축척을 바꾸려면 {t:ad.new}를 누릅니다. 저절로 만든 도면은 되돌리기(Ctrl+Z) 한 번으로 취소됩니다.
- {t:ad.what}은 {t:ad.all}, {t:ad.plans}, {t:ad.elevations} 가운데에서 선택합니다.
- 용지는 A4~A0 가로, 축척은 1:20~1:500입니다. 용지에 맞는 축척에는 추천 표시가 붙고, 용지에 다 들어가지 않는 축척을 선택하면 경고가 나옵니다.
- 평면도는 한 층에 한 장씩, 입면도는 정면도와 배면도, 좌측면도와 우측면도를 짝지어 놓습니다. 입면도에는 층마다 \`1층 FL ±0\`처럼 바닥 높이가 적힙니다.
- 평면도에는 문마다 활짝 연 문짝과 문이 지나가는 4분의 1 원호가 가는 선으로 그려집니다. 문짝 길이는 벽에 난 문 구멍의 폭과 같고, 문짝은 경첩 쪽 끝에 그려집니다. 속성 창에서 {t:auto.door.hinge}이나 {t:auto.door.side}을 바꾸면 그림도 바뀝니다.
- {m:planView} ({k:planView})는 작업 층을 {t:lt.cutHeight}(처음 1.2 m)에서 잘라 3D 화면에서 내려다보는 보기입니다. 잘린 벽은 채워 그리고 문 열림도 보여 주며, 작은 창의 {t:av.below}을 켜면 바로 아래층이 흐리게 함께 보입니다.
- {m:archSection} ({k:archSection})은 작업 범위의 건물을 세로로 잘라 옆에서 봅니다. 작은 창에서 {t:av.axisX}·{t:av.axisY}와 {t:av.at}를 정하거나, {t:av.drawLine}로 평면에 단면선을 그려 자릅니다.
- 두 보기의 작은 창에 있는 {c:archDrawing} 단추를 누르면 보고 있는 층·자르는 높이(단면은 자르는 위치) 그대로 A3 도면 한 장을 만들고 엽니다. 같은 보기로 만든 도면은 새것으로 바뀝니다. 평면도는 지붕 처마까지 그 층에 보이는 부재가 다 들어가게 맞춥니다.
- 같은 종류의 도면을 다시 만들면 전에 만든 도면은 새것으로 바뀝니다. 평면 보기나 단면 보기에서 만든 도면은 {t:ad.new}로 다시 만들어도 남습니다.
- 층이나 건물을 삭제하면 그 층·건물을 그린 도면도 함께 삭제되고, 알림에 삭제한 장 수가 나옵니다.
- {t:ad.sheet}에서 다른 도면으로 바꿔 보고, 필요 없는 도면은 {t:ad.deleteSheet}로 삭제합니다.
- 지금 보는 도면 한 장은 {t:dv.print}로 인쇄하고, {t:dv.dxf}·SVG·PNG로도 내보냅니다. PDF는 인쇄 창에서 PDF로 저장을 선택하면 만들어집니다.
- {t:dp.titleSetup}에서 표제란의 {t:ks.author}·{t:ks.school}·{t:ks.number}를 쓰면 모든 건물 도면에 한꺼번에 들어갑니다. 용지와 표제란은 [도면 용지·표제란](help:obj-drawing-sheet)에 자세히 있습니다.
- 건물이 여러 개이면 층 이름 앞에 건물 이름이 붙고, 건물마다 평면도가 따로 만들어집니다.
- 도면 화면에서 {t:dv.back3d}를 누르면 3D 화면으로 돌아갑니다.

## 자주 하는 실수

- 도면이 저절로 만들어지지 않습니다. 벽·바닥판·기둥 같은 건축 부재가 하나도 없는 경우입니다. 건물을 먼저 만듭니다.
- 용지에 다 들어가지 않는다는 경고가 나옵니다. 축척을 더 작게(1:200 등) 하거나 더 큰 용지를 선택합니다. 평면 보기에서 만든 도면이 가장 작은 축척으로도 A3에 다 들어가지 않을 때도 알림이 나옵니다.
- 평면 보기의 {c:archDrawing} 단추를 눌렀는데 도면이 생기지 않고 알림만 나옵니다. 그 층에 외곽선도 부재도 없는 경우입니다.
- 평면도에 위층이 보이지 않습니다. 평면도는 그 층 바닥에서 1.2 m 높이로 자른 그림이라 위층은 그리지 않습니다.
- 평면도에 문 열림이 그려지지 않는 문이 있습니다. 벽에 끼워지지 않고 바닥에 놓인 문입니다. 문을 삭제하고 벽 면 위를 클릭해 다시 끼웁니다.
- 모두 인쇄 / PDF가 아닌 {t:dv.print}를 누르면 지금 보는 한 장만 인쇄됩니다.
`,Je=`---
id: arch-face-paint
title: 면 칠하기
분류: 건축 부재
난이도: 기초
workspace: 3D 건설
keywords: 면 칠하기, 벽 색, 벽 칠, 페인트, 색칠, 외벽 색, 한 면만, paint, face colour, face color, wall colour, 칠하기, 벽 색칠, 내벽 색, 안쪽 벽, 바깥 벽, 바닥 색, 면 색, 도색, 지우개, 색 지우기, 면칠하기, 벽색, wall color, paint faces, eraser
commands: facePaint, material
howto: facePaint
context: facePaint
order: 160
---

## 무엇

물체 전체가 아니라 면을 하나씩 클릭해 색을 칠하는 도구입니다. 같은 벽이라도 안쪽 면과 바깥쪽 면을 다른 색으로 칠할 수 있습니다.

## 하는 순서

1. {m:facePaint} 단추를 누릅니다.
2. 색을 선택하고 칠할 면을 하나씩 클릭합니다.
3. Esc로 끝냅니다.

## 팁

- 창의 {t:opt.paintColor}에는 벽·바닥에 흔히 쓰는 색 12가지가 있습니다. 다른 색은 {t:opt.paintPick} 칸에서 선택합니다.
- {t:opt.eraser}를 켜고 면을 클릭하면 그 면의 색이 삭제되고 물체 원래 색으로 돌아갑니다. 색 칸을 다시 누르면 지우개가 꺼집니다.
- 면 하나를 칠할 때마다 되돌리기(Ctrl+Z) 한 단계가 됩니다.
- 칠한 벽 면에 나중에 문·창을 끼워도 칠한 색은 그대로 남습니다.
- 마지막에 쓴 색은 다음에 도구를 열 때도 선택되어 있습니다.
- 물체 전체의 색과 재질은 {m:material}로 바꿉니다. 자세한 내용은 [색·재질](help:obj-material)에 있습니다.
- 창을 닫고 도구를 끝내려면 Esc를 누릅니다.

## 자주 하는 실수

- 빈 곳을 클릭하면 아무 일도 일어나지 않습니다. 물체의 면 위를 클릭합니다.
- {t:opt.eraser}가 켜져 있으면 클릭한 면의 색이 삭제됩니다. 색을 칠하려면 색 칸을 먼저 누릅니다.
- 벽 한쪽 면만 칠하려 했는데 반대쪽이 그대로입니다. 벽의 안쪽과 바깥쪽은 서로 다른 면이므로 각각 클릭합니다.
`,Ye=`---
id: arch-fill-area
title: 영역에 채우기
분류: 건축 부재
난이도: 중급
workspace: 3D 건설
keywords: 영역에 채우기, 채우기, 가득 놓기, 격자로 놓기, 줄 맞춰 놓기, 한꺼번에 놓기, 여러 개 놓기, 교실 책상, 책상 배치, 주차장, 주차 칸, 나무 심기, 숲, 공원, 배열, 무작위, 섞어 놓기, 영역채우기, fill area, fill, area fill, classroom desks, parking lot, car park, trees, grid, array, random
commands: fillArea, objects, furniture
context: fillArea
order: 150
---

## 무엇

바닥에 영역을 그리면 선택한 물체를 그 안에 격자로 줄 맞춰 가득 놓습니다. 교실 책상, 주차장의 주차 칸, 공원의 나무처럼 같은 물체를 많이 놓을 때 씁니다.

## 하는 순서

1. {m:fillArea} 단추를 누릅니다. 물체 라이브러리에서 마지막으로 선택한 물체가 채울 물체가 됩니다 (처음에는 책상).
2. 다른 물체로 채우려면 창 아래의 {t:fa.choose}을 열고 선택합니다. Ctrl·Shift+클릭으로 여러 물체를 더하거나 뺍니다.
3. 영역 모양을 {t:opt.areaRect}, {t:opt.areaPoly}, {t:fa.shape.pick} 가운데에서 선택합니다.
4. 바닥에 영역을 그립니다. 사각형은 두 모서리를 클릭하고, 다각형은 점을 차례로 클릭한 뒤 첫 점을 다시 누르거나 Enter로 닫습니다. {t:fa.shape.pick}은 그려 둔 대지나 건물 외곽선 안을 클릭합니다.
5. 미리 보기에서 놓일 자리와 개수를 보고 간격·방향을 고칩니다.
6. Enter(또는 오른쪽 클릭)를 누르면 모두 놓입니다. Esc를 누를 때까지 다음 영역을 이어서 그릴 수 있습니다.

## 팁

- {c:objects} 창에서 물체를 선택한 뒤 창 아래의 {c:fillArea} 단추를 눌러도 됩니다. 그 창에서 Ctrl·Shift+클릭으로 선택한 물체들이 함께 들어옵니다.
- {t:fa.gapX}·{t:fa.gapY}은 처음에 물체 크기에 여유를 더한 값입니다. 직접 바꾼 값은 {t:dc.rowAuto} 단추로 되돌립니다.
- {t:fa.dir}은 {t:fa.dir.auto}가 기본이고, {t:fa.dir.set}을 선택하면 각도를 직접 씁니다.
- {t:fa.margin}는 영역 경계와 벽 면에서 물체까지 띄우는 거리입니다 (기본 0.3 m).
- {t:fa.skip}가 켜져 있으면(기본) 벽·기둥·이미 놓인 물체와 겹치는 자리는 건너뜁니다. 건너뛴 자리 수는 창에 나옵니다.
- 여러 물체를 선택하면 {t:fa.order}를 {t:fa.order.alternate} 또는 {t:fa.order.random}로 정합니다. {t:fa.order.random}는 {t:fa.seed}가 같으면 같은 배치가 나오고, {t:fa.shuffle}를 누르면 다른 배치가 됩니다.
- {t:fa.max}은 기본 300개이고 1~2000개로 정합니다.
- {t:fa.linked}를 켜면 놓은 물체 하나의 크기를 바꿀 때 같은 물체가 모두 함께 바뀝니다.
- 다각형을 그릴 때 누른 채 0.5초 기다렸다가 끌면 그 변이 곡선이 됩니다.
- 한 번에 놓은 물체는 되돌리기(Ctrl+Z) 한 번으로 모두 취소됩니다. 한 줄로만 놓을 때는 [가구·조경·물체 라이브러리](help:arch-furniture)처럼 바닥을 누른 채 끌어도 됩니다.

## 자주 하는 실수

- 문·창·천창은 영역을 채우지 않습니다. 책상·차·나무처럼 바닥에 서는 물체를 선택합니다.
- 영역을 그린 뒤 화면을 클릭해도 아무 일도 일어나지 않습니다. Enter로 놓거나 {t:fa.redraw}를 누릅니다.
- 영역을 그린 채 Esc를 누르면 그 영역을 채운 뒤 도구가 끝납니다. 채우지 않고 끝내려면 먼저 {t:fa.redraw}를 누릅니다.
- 생각보다 적게 놓입니다. 경계·벽에서 띄우는 거리, 겹치는 자리 건너뛰기, {t:fa.max}을 확인합니다.
- 너무 작은 영역은 만들어지지 않습니다. 더 크게 그립니다.
- 물체는 지금 작업 중인 층 바닥에 놓입니다. 다른 층을 채우려면 층을 먼저 바꿉니다.
`,Xe=`---
id: arch-flow
title: 건설 진행 상황
분류: 건축 부재
난이도: 기초
workspace: 3D 건설
keywords: 건설 진행 상황, 진행 상황, 진행, 건물 만들기 순서, 건물 순서, 순서, 단계, 12단계, 다음 단계, 할 일, 안내, 처음, 시작, 건물 만들기, 건물 짓기, 집 짓기, 체크리스트, 뭐부터, 무엇부터, 앞 단계 먼저, build progress, building steps, steps, workflow, progress, checklist, where to start
commands: buildFlow, buildingEasy, buildingNew, siteArea, grade, buildingOutline, levelOutline, wall, slab, column, door, window, stair, roof
context: buildFlow
order: 10
---

## 무엇

{c:buildFlow} 창은 건물 하나를 대지 → 건물 외곽선 → 평탄화 → 1층 바닥 높이 → 건물 세우기 → 층마다 외곽선 → 벽 → 바닥판 → 기둥 → 문·창 → 계단 → 지붕의 12단계 순서로 안내합니다. 단계마다 끝났는지 보여 주고, 그 단계에 쓰는 도구 단추를 모아 둡니다. 5단계에서는 건물 세우기의 {t:ab.easy}나 {t:ab.detailed}로 층·외곽선·벽·지붕을 한 번에 만들 수 있습니다.

## 하는 순서

1. 메뉴 줄의 {t:win.menu} 메뉴 옆에 있는 {c:buildFlow} 단추를 누릅니다. 창은 처음에 왼쪽에 열려 있고, 단추의 숫자는 끝난 단계 수입니다 ({t:fl.state.optional} 단계도 끝난 것으로 셉니다).
2. 창 맨 위의 경로(대지 › 건물 › 층)에서 단계를 볼 건물이 맞는지 확인합니다. 건물이 없는 대지에서는 {c:buildingEasy}와 {c:buildingNew} 단추가 나오고, 건물이 있는 대지에서는 그 대지의 건물마다 {t:fl.enter} 단추가 나옵니다. Esc로 작업 범위를 대지로 올렸을 때도 같습니다.
3. {t:fl.next} 표시가 붙은 단계를 찾습니다.
4. 그 단계 아래의 단추를 눌러 도구를 열고 작업합니다.
5. 작업을 마치면 그 단계의 표시가 {t:fl.state.done}으로 바뀌고 다음 단계가 강조됩니다.
6. 12단계를 모두 마치면 창 아래에 {c:areaTable}, {c:archDrawing}, {c:facePaint}, {c:buildingNew} 단추가 나타납니다.

## 팁

### 단계와 단추

| 단계 | 하는 일 | 창의 단추 |
|---|---|---|
| 1 {t:fl.step.site} | 건물이 설 대지를 선택하거나, 대지 없이 {t:bld.wholeLand}에 세우기로 정합니다. 대지가 하나도 없으면 저절로 {t:bld.wholeLand}로 끝납니다. 목록에서 다른 대지를 고르면 건물이 그 대지로 이동할지 먼저 묻습니다. | {t:so.bldSite} 목록, {c:siteArea} |
| 2 {t:fl.step.shape} | 건물이 차지할 외곽선을 그립니다. 그린 뒤에는 그 넓이와 건축면적·건폐율이 함께 보입니다. | {c:buildingOutline} 또는 {t:cmd.outlineEdit} |
| 3 {t:fl.step.grade} | 건물 외곽선 아래 땅을 평평하게 만듭니다. 하지 않아도 되는 {t:fl.state.optional} 단계라 뒤 단계를 막지 않습니다. | {c:grade}, {t:fl.gradeSkip} |
| 4 {t:fl.step.base} | 1층 바닥을 둘 높이를 정합니다. | {t:base.button} |
| 5 {t:fl.step.levels} | {t:ab.build}: {t:ab.easy}는 층 수와 층고로 건물 전체를, {t:ab.detailed}는 층마다 외곽선과 종류를 정합니다. | {t:ab.easy}, {t:ab.detailed} |
| 6 {t:fl.step.outlines} | 층마다 바깥 모양을 그립니다. {t:ca.outlinesFromShape}은 모든 층에 건물 외곽선을 그대로 씁니다. | {c:levelOutline}, {t:ca.outlinesFromShape} |
| 7 {t:fl.step.walls} | 외곽선을 따라 바깥벽을 세우거나 벽을 직접 그립니다: [외벽 세우기](help:build-outer-walls). | {c:outerWalls}, {c:wall} |
| 8 {t:fl.step.slabs} | 외곽선이 있는 층은 바닥판이 저절로 생깁니다. | {t:ca.slabsFromOutline}, {c:slab} |
| 9 {t:fl.step.columns} | 필요할 때 기둥을 세웁니다. 이 단계는 {t:fl.state.optional}입니다. | {c:column} |
| 10 {t:fl.step.openings} | 벽에 문과 창을 끼웁니다. | {c:door}, {c:window} |
| 11 {t:fl.step.stairs} | 맨 위 층을 뺀 층마다 위층으로 오르는 계단을 놓습니다. | {c:stair} |
| 12 {t:fl.step.roof} | 맨 위 층 외곽선 위에 지붕을 얹습니다. | {t:fl.roofTop}, {c:roof} |

- 단계 이름 옆에는 {t:fl.state.done}, {t:fl.state.todo}, {t:fl.state.optional}, {t:fl.state.wait} 가운데 하나가 보입니다. 대지·건물 외곽선·1층 바닥 높이·건물 세우기 단계 가운데 끝나지 않은 단계가 있으면 그 뒤의 남은 단계는 {t:fl.state.wait}로 보이고 단추가 꺼져 있습니다. 꺼진 단계 아래에는 먼저 할 단계가 적혀 있습니다.
- 층마다 하는 단계(외곽선·벽·바닥판·계단)는 \`2/3\`처럼 끝난 층 수와 전체 층 수가 보이고, 아직 남은 층 이름도 함께 나옵니다.
- 5단계에서 건물 세우기로 세우면 6~8단계와 12단계가 한 번에 끝납니다: [건물 세우기](help:build-overview). 손으로 벽을 그린 건물은 5단계가 처음부터 {t:ab.detailed}로 열리고, 맨 위의 층 수 칸과 {t:fl.planApply} 단추로 층만 정합니다.
- 4단계의 {t:base.button} 단추를 누르면 묻는 창이 열립니다. ‘평탄화 높이 사용’, {t:base.high}, {t:base.keep}, {t:base.typed} 가운데 하나를 선택하고 {t:base.ok} 단추를 누릅니다. 1층 바닥을 이동하면 그 건물의 모든 층과 부품이 함께 움직입니다.
- 1층 바닥 높이를 정하지 않은 채 지형 위에 부품을 놓으면, 놓기 전에 같은 창이 먼저 열립니다. 지형이 없는 땅에서는 1층 바닥이 0 m이고 4단계는 끝난 것으로 봅니다.
- 7단계의 바깥벽 단추는 외곽선 안쪽에 두께 0.2 m 벽을 위층 바닥까지 세웁니다. 남은 층이 여럿이면 모든 층에 한꺼번에 세우는 단추가 함께 나옵니다. 지하층에는 두께 0.3 m 지하 외벽이 서고, 벽이 이미 있는 층은 건너뜁니다.
- 12단계의 {t:fl.roofTop} 단추는 맨 위 외곽선을 선택한 상태로 [지붕](help:arch-roof) 도구를 엽니다. 처마 높이는 맨 위 층 바닥 + 층고입니다. 모양을 확인한 뒤 Enter를 눌러 지붕을 만듭니다.
- 창을 닫았으면 메뉴 줄의 {c:buildFlow} 단추를 다시 누릅니다. 창이 앞에 있을 때 누르면 창이 숨겨집니다.

## 자주 하는 실수

- 창에 다른 건물의 단계가 보입니다. 창 맨 위의 경로나 {c:levelPanel}에서 건물을 다시 선택합니다 ([작업 범위](help:site-scope)).
- 뒤 단계의 단추가 눌리지 않습니다. 꺼진 단계 아래에 적힌 단계를 먼저 마칩니다. 평탄화는 하지 않아도 됩니다.
- 층 수를 줄였는데 층이 남습니다. 부품이나 외곽선이 있는 층은 삭제하지 않습니다. 그 층을 비우거나 {c:levelPanel} 창의 {t:levels.delete} 단추로 삭제합니다.
- 10단계는 문이나 창이 하나라도 있으면 {t:fl.state.done}으로 바뀝니다. 모든 방에 문과 창이 들어갔는지는 직접 확인합니다.
- 손으로 세운 건물에서는 외곽선을 고쳐도 7단계에서 세운 바깥벽이 따라 움직이지 않습니다. 벽은 따로 고치거나 삭제하고 다시 세웁니다. 건물 세우기로 만든 벽은 외곽선을 따라 다시 만들어집니다.
`,Ze=`---
id: arch-furniture
title: 가구·조경·물체 라이브러리
분류: 건축 부재
난이도: 기초
workspace: 3D 건설
keywords: 가구, 책상, 의자, 식탁, 침대, 소파, 책장, 옷장, 욕실, 화장실, 변기, 주방, 냉장고, 조경, 나무, 자동차, 주차, 사람, furniture, desk, chair, bed, sofa, tree, car, people, landscape, 물체 라이브러리, 라이브러리, 물체 놓기, 가구 놓기, 가구 배치, 나무 심기, 칠판, 학생 책상, 사물함, 놀이터, 그네, 미끄럼틀, 벤치, 버스, 자전거, 태양광, 내 물체, 내 것, 물체 불러오기, 물체 내보내기, 묶음 파일, nklib, 검색, 돌리기, 갸구, 가구배치, library, objects, import objects, export objects
commands: furniture, landscape, objects, myObjects, libImport, libExport
howto: furniture
context: furniture, landscape, objects, myObjects, libImport, libExport
order: 140
---

## 무엇

가구, 주방·욕실 집기, 학교 비품, 나무·차·사람 같은 기성 물체를 선택해 바닥에 놓습니다. {m:objects}는 모든 물체를 묶음과 종류별로 보여 주고 이름으로 찾을 수 있는 창입니다.

## 하는 순서

1. {m:furniture} 단추를 누릅니다 (나무·차·사람은 {c:landscape}).
2. 창에서 놓을 것을 선택합니다.
3. 바닥을 클릭해 놓습니다 (R: 90° 회전, Esc: 끝).

## 팁

- 물체는 지금 작업 중인 층 바닥에 놓입니다. 놓은 뒤에도 창이 열려 있어 같은 물체를 이어서 놓을 수 있고, 창을 닫고 도구를 끝내려면 Esc를 누릅니다.
- 창 위쪽의 찾기 칸에 이름을 쓰면 모든 종류에서 찾습니다. 한글·영어 이름 모두 됩니다 (예: \`의자\`, \`tree\`).
- {c:objects} 창은 {t:lib.group.opening}, {t:lib.group.interior}, {t:lib.group.school}, {t:lib.group.exterior}, {t:lib.group.mine} 묶음으로 나뉘고, 묶음 안에서 다시 종류를 선택합니다.
- 선택한 물체의 {t:presetParam.w}·{t:presetParam.d}·{t:presetParam.h}를 창에서 바꾼 뒤 놓습니다. 이미 놓은 물체의 크기는 속성 창에서 바꿉니다.
- 바닥을 누른 채 끌면 끈 선을 따라 {t:dc.rowGap}마다 여러 개를 한 줄로 놓습니다 (교실 책상 줄처럼). {t:dc.rowGap}은 물체 너비에 여유를 더한 값으로 시작하고, 창에서 직접 바꿀 수 있습니다. 넓은 곳을 가득 채우려면 [영역에 채우기](help:arch-fill-area)를 씁니다.
- 도구를 닫은 상태에서 놓은 문·창·가구·조경 물체를 두 번 클릭하면 3D 물체 모델링에서 모양을 고칠 수 있습니다. 다 고친 뒤 화면 위의 {t:trip.back}를 누르면 고친 모양이 건물에 들어갑니다.
- 3D 물체 모델링에서 만든 물체는 [건설 물체로 보내기](help:more-send-to-building)로 보내면 {c:myObjects}에 들어옵니다.
- {m:libImport}는 STEP·STL·OBJ·3MF·NukCAD 파일이나 물체 묶음(.nklib) 여러 개를 한 번에 라이브러리에 넣습니다. 파일을 선택하거나 창으로 끌어다 놓고, 파일마다 {t:li.name}·{t:li.kind}·{t:li.unit}·{t:li.scale}을 확인한 뒤 넣습니다.
- {m:libExport}는 내가 넣은 물체를 묶음 파일(.nklib) 하나로 저장합니다. 다른 컴퓨터의 {c:libImport}로 그대로 들어가고, 물체 하나는 STEP으로도 내보낼 수 있습니다.
- 그림에서 Ctrl·Shift+클릭으로 여러 물체를 함께 선택하면 영역에 채우기, 라이브러리에서 삭제, {t:li.move}에 함께 쓰입니다. 기본 물체는 라이브러리에서 삭제되지 않습니다.

## 자주 하는 실수

- 물체가 다른 층에 놓입니다. 물체는 작업 중인 층 바닥에 놓이므로 {c:levelPanel}에서 층을 먼저 바꿉니다.
- {c:myObjects}가 비어 있습니다. 3D 물체 모델링에서 아직 보낸 물체가 없는 경우입니다.
- 마우스가 물체 그림 위에 있을 때 Delete를 누르면 선택한 내 물체가 라이브러리에서 삭제됩니다(묻는 창이 먼저 나옵니다). 이미 놓은 물체는 남고, 바로 아래 {t:li.undo}로 되살립니다.
- 웹판의 내 물체는 이 브라우저에만 보관되어, 브라우저 데이터를 삭제하거나 오래 쓰지 않으면 사라질 수 있습니다. {c:libExport}로 묶음 파일(.nklib)을 만들어 둡니다. 이미 놓은 물체는 작업 파일 안에도 들어 있습니다.
`,Qe=`---
id: arch-levels
title: 층 만들기
분류: 건축 부재
난이도: 기초
workspace: 3D 건설
keywords: 층, 층 추가, 2층, 3층, 위층, 아래층, 지하, 지하층, 층고, 층 높이, level, floor, storey, story, basement, 층 목록, 프로젝트, 층 복사, 층 삭제, 층 지우기, 층 이름, 바닥 높이, 지하1층, B1층, 레벨, 층수, 몇 층, 위층 보기, 위층 숨기기, 흐리게, 이 층만 보기, 작업 층, 층 바꾸기, levels, copy level, delete level, storey height, upper levels
commands: levelAdd, levelPanel, levelCopy, upperLevels, buildingNew, levelOutline
howto: levels
context: levelAdd, levelCopy, levelPanel, upperLevels
order: 20
---

## 무엇

건물은 층으로 이루어집니다. 층마다 이름과 층고가 있고, 바닥 높이는 1층 바닥에서 층고를 차례로 쌓아 저절로 계산됩니다. 새 벽·바닥판·기둥은 지금 작업하는 층의 바닥에서 시작합니다.

## 하는 순서

1. {m:levelAdd} 단추를 누르면 맨 위에 새 층이 생기고 그 층에서 작업합니다.
2. 지금 층을 물체와 함께 위로 복사하려면 {m:levelCopy} 단추를 누릅니다.
3. 층고·바닥 높이와 지하층 추가는 오른쪽 {c:levelPanel} 창에서 합니다.

## 팁

- {c:levelPanel} 창은 땅 › 대지 › 건물 › 층 순서의 목록이며, 건물 아래에 층이 위층부터 보입니다. 층 행을 누르면 그 층에서 작업하고, 작업 중인 층은 강조됩니다: [건물 이름·색·전체 목록](help:build-names-tree).
- 층 이름 칸을 눌러 바로 고칩니다. Enter는 확정, Esc는 되돌리기입니다. 직접 고친 이름은 그대로 남고, 기본 이름(1층, 2층, B1층)은 층을 더하거나 삭제하면 자리에 맞게 다시 매겨집니다.
- 층 행의 {t:levels.height} 칸에서 층고를 바꾸면 그 위의 층과 부품이 함께 올라가거나 내려갑니다. 지하층의 층고를 바꾸면 그 지하층의 바닥과 그 아래 지하층이 움직입니다. 층고는 1~20 m로 정합니다.
- 바닥 높이(예: \`+3\`)는 1층 바닥에서 층고를 쌓아 계산되므로 직접 고치지 않습니다. 1층 바닥 높이는 건물 행의 1층 바닥 단추나 [건설 진행 상황](help:arch-flow) 4단계에서 다시 정합니다.
- 목록 아래의 {t:levels.add}, {t:levels.addBasement}, {t:levels.copy}, {t:levels.delete} 단추는 지금 작업 중인 층의 건물에 적용됩니다. {t:levels.addBasement} 단추는 맨 아래에 지하층을 만듭니다. 건물 행의 **+** 단추도 그 건물 맨 위에 층을 더합니다.
- {c:levelCopy}는 층의 부품과 층 외곽선을 함께 바로 위에 복사하고, 그 위의 층은 한 층씩 올라갑니다. 같은 평면이 되풀이되는 건물을 빨리 쌓을 때 씁니다. 지하층을 복사하면 복사본도 지하층입니다.
- 건물 세우기로 만든 건물에서는 층을 더하거나 복사하거나 삭제하면 자동 벽과 지붕이 새 층 구성에 맞게 다시 만들어집니다: [건물 세우기](help:build-overview).
- 층 행 오른쪽에는 층 외곽선 단추([층 외곽선](help:arch-outline) 도구를 엽니다), 보기 단추(누를 때마다 보이기 → 흐리게 → 숨기기), {t:lt.isolate}, {t:lt.view} 단추가 있습니다.
- 아래층을 그릴 때 위층이 가리면 창 아래 {t:levels.upper} 칸에서 {t:upper.fade}나 {t:upper.hide}를 선택합니다. 명령줄에 \`upperlevels\`를 입력해도 {c:upperLevels}가 보이기 → 흐리게 → 숨기기 순서로 바뀝니다. 층 보기 상태는 파일에 저장되지 않습니다.
- {t:upper.fade}는 벽·바닥판 같은 건물 도구를 쓰는 동안에만 흐리게 보이고, 보기만 할 때는 또렷합니다. 상태 표시줄의 {t:bo.fade} 스위치를 끄면 도구를 쓸 때도 흐리게 하지 않습니다: [작업 범위](help:site-scope).
- 상태 표시줄에 지금 작업 위치의 경로와 층의 바닥 높이·층고가 늘 보입니다. 경로 앞의 층 단추를 누르면 {c:levelPanel} 창이 앞으로 나옵니다.
- 한 건물의 층은 지상과 지하를 합쳐 60개까지입니다. 지상·지하 층 수를 한 번에 정하려면 [건설 진행 상황](help:arch-flow)의 {t:fl.step.levels} 단계를 씁니다.
- 위층이 있으면 벽·기둥·계단은 기본으로 위층 바닥까지 올라가고, 층고를 바꾸면 함께 늘고 줄어듭니다 ([벽 위쪽 맞추기](help:arch-wall-top)). 그래서 층을 먼저 만들고 부품을 그리면 편합니다.

## 자주 하는 실수

- 엉뚱한 층에 벽이 그려집니다. 그리기 전에 상태 표시줄의 경로나 {c:levelPanel} 창에서 작업할 층을 확인합니다. 도구 창의 {t:lv.pickLevel} 칸에서 바꿀 수도 있습니다.
- {t:levels.delete} 단추가 눌리지 않습니다. 건물에 지상층이 하나뿐이면 삭제할 수 없습니다.
- 물체가 있는 층을 삭제하면 물체를 함께 삭제할지, 바로 아래층(맨 아래 층이면 위층)에 남길지 묻습니다. 잘못 삭제했으면 {k:undo}로 되돌립니다.
- 위층이 보이지 않습니다. {t:levels.upper} 칸이 {t:upper.hide}로 되어 있거나 그 층의 보기 단추가 숨기기 상태인지 확인합니다.
- 층고를 바꿨는데 벽 높이가 그대로입니다. 그 벽의 {t:flow.top}이 높이 입력으로 되어 있는 경우입니다. 속성 창에서 위층에 묶습니다.
`,$e=`---
id: arch-lighting
title: 조명·시간·밤
분류: 건축 부재
난이도: 중급
workspace: 3D 건설
keywords: 조명, 조명 달기, 전등, 등, 램프, 다운라이트, 펜던트, 벽등, 스탠드, 가로등, 매입등, 평판등, 스포트, 조명 시간, 밤, 낮, 저녁, 시간, 날짜, 해, 햇빛, 해 위치, 그림자, 일조, 춘분, 하지, 동지, 밝기, 루멘, 색온도, 전구색, 주백색, 주광색, 야경, 조맹, light, lights, lamp, lighting, daylight, sun, time, night, shadow, brightness, lumen, colour temperature
commands: lightPlace, lighting, ceilingView
context: lightPlace, lighting
order: 170
---

## 무엇

천장·벽·바닥에 조명을 달고, {c:lighting} 창에서 시간과 날짜를 바꿔 해·하늘·조명의 빛과 그림자가 낮·저녁·밤에 어떻게 보이는지 확인합니다.

## 하는 순서

1. {m:lightPlace} 단추를 누릅니다.
2. 창의 {t:light.on.ceiling}, {t:light.on.wall}, {t:light.on.floor} 줄마다 붙일 조명을 선택합니다.
3. 천장·벽·바닥 면을 클릭합니다. 면이 보는 방향에 따라 그 줄에서 선택한 조명이 붙습니다 (R: 90° 회전).
4. 다 달았으면 Esc를 누릅니다.
5. {m:lighting} 단추를 눌러 창을 엽니다.
6. {t:lt.day}, {t:lt.evening}, {t:lt.night} 단추를 누르거나 {t:lt.time}·{t:lt.date} 막대를 끌어 시간을 정합니다.
7. 그림자를 보려면 {t:lt.shadows}에서 {t:lt.sh.sun} 또는 {t:lt.sh.all}를 선택합니다.

## 팁

- {t:lt.sky}이 켜져 있어야 해·하늘·조명이 시간에 따라 바뀌고 조명이 실제로 주변을 비춥니다. {t:lt.day}·{t:lt.evening}·{t:lt.night} 단추를 누르거나 그림자를 켜면 저절로 켜지고, 끄면 모델링용 고른 빛으로 돌아갑니다.
- {t:lt.day} 단추는 13:00, {t:lt.evening} 단추는 18:45, {t:lt.night} 단추는 22:00으로 맞춥니다. {t:lt.spring}·{t:lt.summer}·{t:lt.winter} 단추로 날짜를 바로 선택합니다.
- 해의 위치는 지도에서 선택한 땅의 위치로 셈하고, 지도로 정한 땅이 아니면 서울 기준입니다. {t:lt.tz}는 UTC와의 시간 차이입니다 (한국은 9).
- 처음 선택되어 있는 조명은 천장 {t:preset.light.downlight}, 벽 {t:preset.light.sconce}, 바닥 {t:preset.light.floor}입니다. 바닥 줄에는 {t:preset.streetlight}도 있습니다.
- 달아 둔 조명을 선택하면 창의 {t:lt.selected}이나 속성 창에서 {t:light.onOff}, {t:light.lm}(lm), {t:light.watt}(W), {t:light.k}(K)를 바꿉니다. {t:light.kWarm}(2700 K), {t:light.kNeutral}(4000 K), {t:light.kDay}(6500 K) 단추도 있고, 빛을 한쪽으로 비추는 조명은 {t:light.angle}도 정합니다.
- {t:lt.allOn}·{t:lt.allOff}로 모든 조명을 한 번에 켜고 끕니다.
- {t:lt.exposure}은 화면에서 조명 빛이 얼마나 밝게 보일지만 바꿉니다 (×0.25~×4). 조명의 lm 값은 그대로입니다.
- {t:lt.quality}는 {t:lt.q.low} 4개, {t:lt.q.mid} 8개, {t:lt.q.high} 16개입니다 (종류마다). 나머지 조명은 빛나는 모습만 보입니다.
- 조명은 붙인 물체(천장 바닥판, 벽 등)에 고정되어 그 물체가 움직이면 함께 움직입니다.
- 천장 조명은 [천장 보기](help:arch-ceiling)로 아래에서 올려다보며 달면 쉽습니다. {c:lightPlace} 창에도 {c:ceilingView} 단추가 있습니다.
- 조명은 {c:objects} 창의 {t:lib.group.interior} 묶음, {t:presetCat.light} 종류에서 선택해 놓을 수도 있습니다.

## 자주 하는 실수

- 조명을 달았는데 주변이 밝아지지 않습니다. {t:lt.sky}이 꺼져 있으면 조명은 빛나는 모습만 보입니다. 창에서 켭니다.
- 면이 없는 빈 곳을 클릭하면 지금 층 바닥에 바닥 조명이 놓입니다. 천장이나 벽 면 위를 정확히 클릭합니다.
- 조명 위에는 다른 조명이 붙지 않습니다.
- 화면이 느려집니다. 그림자를 끄거나 {t:lt.quality}를 {t:lt.q.low}로 줄입니다. [느릴 때](help:faq-slow)도 봅니다.
- 밤 장면이 너무 어둡거나 너무 밝습니다. 조명의 밝기(lm)를 바꾸거나 {t:lt.exposure}을 조절합니다.
`,et=`---
id: arch-my-arch
title: 내 건축 구조물
분류: 건축 부재
난이도: 중급
workspace: 3D 건설
keywords: 내 건축 구조물, 건축 구조물 저장, 내 건물, 건물 저장, 건물 저장하기, 건물 불러오기, 건물 다시 쓰기, 건물 복사, 다른 프로젝트, 다른 대지, 재사용, 라이브러리, 새 건물로 놓기, 고른 층에 놓기, my building, my buildings, save building, saved building, reuse building, place building
commands: myArch, myArchSave, objects
context: myArch, myArchSave
order: 200
---

## 무엇

만든 건물을 층마다 한 덩어리로 묶어 물체 라이브러리의 {t:lib.group.mine} → {t:presetCat.arch}에 저장하고, 이 프로젝트나 다른 프로젝트·대지에 층 구성 그대로 다시 놓습니다.

## 하는 순서

1. {m:myArchSave} 단추를 누릅니다.
2. 저장할 건물의 벽이나 바닥판을 클릭합니다. 건물이 여러 개이면 창에서 건물을 선택해도 됩니다.
3. {t:ma.save.name}을 쓰고 {t:ma.save.go}을 누릅니다.
4. 놓을 때는 {m:myArch} 단추를 누르고 창에서 저장한 건물을 선택합니다.
5. {t:ma.how}에서 {t:ma.howBuilding} 또는 {t:ma.howLevel}를 선택합니다.
6. 놓을 곳을 클릭합니다 (R: 90° 회전).

## 팁

- {t:ma.howBuilding}: 클릭한 곳에 새 건물이 생기고, 저장된 층마다 그 층의 부분이 놓입니다. 1층 바닥은 그 자리의 땅 높이에 놓이고, 놓은 건물의 1층이 작업 층이 됩니다. 층 높이를 바꾸면 위층이 따라 움직입니다.
- {t:ma.howLevel}: 건물 전체를 한 덩어리로 {t:ma.level}에서 선택한 층 바닥에 놓습니다. 그 층과 함께 오르내립니다.
- 창에는 저장된 건물의 {t:ma.levels}(지상·지하 층 수)이 보입니다.
- 저장이 끝난 뒤 저장 창의 {t:ma.save.goPlace}를 누르면 바로 {c:myArch} 창이 열립니다.
- {c:objects} 창의 {t:lib.group.mine} 묶음, {t:presetCat.arch} 종류에서도 저장한 건물을 선택할 수 있고, 그 창의 {c:myArchSave} 단추로 지금 건물을 저장합니다.
- 저장한 건물은 이 컴퓨터의 라이브러리에 남아 다른 프로젝트에서도 씁니다. 다른 컴퓨터로 이동하려면 {c:libExport}로 묶음 파일(.nklib)을 만듭니다. 층 구성도 함께 들어갑니다.
- 새 문서에 아무것도 없는 첫 건물만 있으면, 놓은 건물이 그 빈 건물 대신 들어갑니다.

## 자주 하는 실수

- 놓은 건물의 벽·바닥판을 하나씩 고칠 수 없습니다. 저장할 때 층마다 한 덩어리가 되기 때문입니다. 고치려면 원래 프로젝트에서 고친 뒤 다시 저장합니다.
- 저장할 부분이 없다는 안내가 나옵니다. 벽이나 바닥판을 먼저 만듭니다.
- 숨긴 부분과 땅 위의 도로·다리 같은 토목 구조물은 함께 저장되지 않습니다. 숨긴 부분은 먼저 보이게 합니다.
- 건물이 너무 복잡하면 저장되지 않습니다. 층이나 부분을 줄여 봅니다.
- 건물을 더 만들 수 없다는 안내가 나오면 쓰지 않는 건물을 삭제한 뒤 다시 놓습니다.
`,tt=`---
id: arch-new-building
title: 새 건물
분류: 건축 부재
난이도: 중급
workspace: 3D 건설
keywords: 새 건물, 건물 추가, 건물 하나 더, 건물 더 만들기, 여러 건물, 건물 여러 개, 두 번째 건물, 별동, 동, 대지, 건물 외곽선, 건축 면적, 1층 바닥 높이, 층 수, 층고, 지하, 지하층, 건물 이름, 건물 삭제, 새건물, 건물 B, new building, add building, another building, several buildings, buildings, storey height, levels, basement
commands: buildingNew, buildingOutline, buildingEasy, levelPanel
context: buildingNew
order: 210
---

## 무엇

건물을 하나 더 만듭니다. {c:buildingNew}은 [건물 외곽선](help:build-outline) 도구를 열고, 외곽선을 다 그리면 그 자리에 1층 하나짜리 새 건물이 생깁니다. 층·벽·지붕은 그다음 건물 세우기로 만듭니다. 층·벽·지붕까지 한 번에 만들려면 [건물 바로 세우기](help:build-easy)를 씁니다.

## 하는 순서

1. {m:buildingOutline} 단추를 누르거나 명령줄에 \`buildingnew\`를 입력합니다. 지금 작업 범위의 대지에서 건물 외곽선 도구가 열립니다.
2. 창의 {t:so.target} 목록에서 건물이 설 대지를 확인합니다. 대지 없이 지으려면 {t:bld.wholeLand}를 선택합니다.
3. {t:opt.areaRect}이나 {t:opt.areaPoly}을 선택하고 건물이 차지할 자리를 그립니다.
4. 다 그리면 건물 B 같은 이름의 새 건물이 생기고, 그 건물의 1층에서 작업이 이어집니다.
5. {c:buildFlow} 창 5단계의 {t:ab.easy}에서 {t:bnew.above}, {t:bnew.below}, {t:bnew.height}를 넣고 {t:aw.easyGo}를 누르거나, {t:ab.detailed}에서 층마다 외곽선을 정합니다.

## 팁

- 새 문서에는 아무것도 없는 건물 A가 있어서 첫 외곽선은 건물 A가 받습니다. 그다음 외곽선부터 새 건물이 생깁니다.
- 1층 바닥 높이는 그 자리에 맞게 미리 정해지고, 지형 위에 첫 부품을 놓을 때 {t:base.title} 창에서 묻습니다. 나중에 [건설 진행 상황](help:arch-flow)의 {t:fl.step.base} 단계나 {c:levelPanel}의 건물 행에 있는 1층 바닥 단추로 다시 정할 수 있습니다.
- 층 수는 지하 0~10개, 지상 1~50개, 층고는 1~20 m로 정합니다.
- 새 외곽선은 다른 건물의 외곽선과 겹칠 수 없습니다. 맞닿게 그리면 두 건물이 서로 바닥과 지붕을 덮고 받칩니다: [붙은 건물](help:build-shared-levels).
- 한 문서에 건물은 30개까지 만듭니다.
- {c:levelPanel}에는 대지마다 건물과 층이 나옵니다. 대지 행의 **+** 단추도 건물 외곽선 도구를 엽니다. 이름 변경와 삭제는 건물 행을 오른쪽 클릭해서 합니다. 그 창 아래와 {c:buildFlow} 창에도 {c:buildingNew} 단추가 있습니다.

## 자주 하는 실수

- 새 건물이 엉뚱한 대지에 생깁니다. 그리기 전에 {t:so.target}을 확인합니다. 이미 만든 건물은 {c:levelPanel}에서 건물 행을 다른 대지 행으로 끌어다 놓아 이동합니다.
- 벽이나 바닥판이 다른 건물에 들어갑니다. 부재는 작업 중인 건물의 층에 놓이므로 {c:levelPanel}에서 건물을 먼저 누릅니다.
- 건물이 하나뿐이면 삭제할 수 없습니다. 삭제하는 대신 {t:lt.clearBuilding}로 내용을 모두 비웁니다.
- 건물을 30개 넘게 만들 수 없습니다. 쓰지 않는 건물을 삭제합니다.
`,nt=`---
id: arch-outline
title: 층 외곽선
분류: 건축 부재
난이도: 중급
workspace: 3D 건설
keywords: 층 외곽선, 외곽선, 평면 윤곽, 윤곽, 평면 모양, 층 모양, 바깥 모양, 층 평면, 캔틸레버, 내민 바닥, 돌출 바닥, 2층이 더 클 때, 넓히기, 줄이기, 지하 외벽, 외곽선 복사, 외각선, outline, level outline, plan outline, floor plan shape, cantilever, overhang, grow, shrink, basement wall
commands: levelOutline, buildingOutline, slab, wall, pathEdit
context: levelOutline
order: 30
---

## 무엇

층 외곽선은 한 층의 바깥 모양입니다. 외곽선을 그리면 그 층의 바닥판이 외곽선 모양으로 저절로 생기고, 외곽선을 고치면 바닥판도 따라 바뀝니다. 층마다 외곽선이 달라도 되므로, 건물 외곽선 안에서 위층을 더 크게 그리면 그 바닥판이 아래층 밖으로 내밀어집니다.

## 하는 순서

1. 외곽선을 그릴 층을 작업 층으로 선택합니다.
2. {m:levelOutline} 단추를 누릅니다.
3. 점선으로 보이는 기준 모양을 그대로 쓰려면 창의 그대로 쓰기 단추를 누릅니다.
4. 새로 그리려면 {t:ol.mode.draw}에서 {t:ol.shape.poly} 또는 {t:ol.shape.rect} 단추를 누르고 바닥에 점을 찍습니다. 다각형은 첫 점을 다시 누르거나 Enter를 누르면 닫힙니다.
5. 모양을 고치려면 {t:ol.mode.edit}에서 꼭짓점을 누르고 새 자리를 누릅니다. 변 위를 누르면 그 자리에 점이 생깁니다.
6. 모든 변을 한꺼번에 이동하려면 {t:ol.offset} 칸에 거리를 넣고 {t:ol.grow} 또는 {t:ol.shrink} 단추를 누릅니다.
7. 다 됐으면 Esc를 눌러 도구를 닫습니다.

## 팁

- 점선 기준 모양: 처음 그리는 1층은 건물 외곽선, 위층은 외곽선이 있는 가장 가까운 아래층, 지하층은 외곽선이 있는 가장 가까운 위층의 모양이 깔립니다.
- 한 층을 그린 뒤 창에 나오는 외곽선 없는 층 모두에 쓰기 단추를 누르면, 외곽선이 없는 같은 건물의 다른 층에 같은 모양이 한 번에 들어갑니다. 다음 층 단추는 외곽선이 없는 다음 층으로 작업 층을 이동합니다.
- [건설 진행 상황](help:arch-flow)의 {t:ca.outlinesFromShape} 단추는 건물 외곽선(곡선 포함)을 이 건물 모든 층의 외곽선으로 정합니다. 이미 있던 외곽선도 바뀌며, 한 번에 되돌릴 수 있습니다.
- {t:ol.offset}의 처음 값은 0.5 m입니다. 위층만 사방으로 1 m 크게 하려면 기준 모양을 그대로 쓴 뒤 \`1\`을 넣고 {t:ol.grow} 단추를 누릅니다. 건물 외곽선 밖으로 나가는 부분은 잘립니다.
- 점을 찍을 때 마우스를 누른 채 0.5초 기다렸다가 끌면 곡선 변이 됩니다. 곡선 외곽선은 {c:pathEdit}으로 점과 핸들을 고칩니다 ([곡선 편집](help:obj-curve-edit)).
- 창에 외곽선의 {t:ol.area}와 {t:ol.perimeter}가 보입니다.
- {t:ol.autoSlab} 스위치는 처음부터 켜져 있습니다. 바닥판 윗면은 층 바닥 높이에 맞고 두께는 아래로 생깁니다.
- 지하층에서는 {t:ol.retain} 스위치를 켜면 외곽선 안쪽을 따라 두께 0.3 m 벽이 위층 바닥까지 섭니다.
- 외곽선을 정한 뒤 {m:outerWalls}의 {t:ow.mode.all}로 외곽선을 따라 바깥벽을 한 번에 세웁니다: [외벽 세우기](help:build-outer-walls).
- {c:levelPanel} 창의 층 줄마다 있는 외곽선 단추로도 그 층의 외곽선 도구가 열립니다.
- 층 외곽선(지하층 포함)은 건물 외곽선 안에만 둡니다. 밖으로 나가면 건물 외곽선에 맞춰 잘리고 알림이 나옵니다. 완전히 밖에 있거나 잘려서 여러 조각이 되면 정해지지 않습니다: [건물 외곽선](help:build-outline).

## 자주 하는 실수

- 외곽선을 고쳐도 이미 세운 벽은 움직이지 않습니다. 외곽선을 따르는 것은 자동 바닥판과 지하 외벽뿐입니다. 벽은 따로 고치거나 삭제하고 다시 세웁니다.
- 자동 바닥판을 삭제하면 {t:ol.autoSlab} 스위치가 꺼져 다시 생기지 않습니다. 스위치를 다시 켜거나 [건설 진행 상황](help:arch-flow)의 {t:ca.slabsFromOutline} 단추를 누릅니다.
- 줄이는 거리가 너무 크면 모양이 뒤집히므로 바뀌지 않고 알림이 나옵니다. 거리를 줄여 다시 누릅니다.
- 점이 3개보다 적거나 너무 작은 외곽선은 정해지지 않습니다.
- {t:ol.clear} 단추를 누르면 그 층의 자동 바닥판도 함께 삭제됩니다.
- 그리는 도중에 작업 층을 바꾸면 찍던 점이 사라지고 새 층의 외곽선으로 바뀝니다.
`,rt=`---
id: arch-railing
title: 난간 세우기
분류: 건축 부재
난이도: 중급
workspace: 3D 건설
keywords: 난간, 난간대, 핸드레일, 손잡이, 발코니 난간, 계단 난간, 옥상 난간, 울타리, 펜스, 난간 높이, 기둥 간격, 난관, railing, railings, handrail, balustrade, guardrail, fence, balcony railing
commands: railing, stair, pathEdit
context: railing
order: 110
---

## 무엇

점을 차례로 찍거나, 모서리·선을 따라가거나, 계단 옆을 따라 난간을 세웁니다. 높이가 다른 점을 이으면 난간이 경사를 따라 오릅니다.

## 하는 순서

1. {m:railing} 단추를 누릅니다.
2. 창에서 {t:stairs.railHow.points}, {t:stairs.railHow.edge}, {t:stairs.railHow.stair} 가운데 하나를 누릅니다.
3. {t:param.h}와 {t:opt.postSpacing}을 정합니다.
4. {t:stairs.railHow.points}: 점을 차례로 찍고 더블클릭이나 Enter로 끝냅니다.
5. {t:stairs.railHow.edge}: 따라갈 모서리나 스케치 선을 차례로 클릭하고 Enter로 끝냅니다.
6. {t:stairs.railHow.stair}: 계단의 한쪽 옆을 클릭하면 그쪽 가장자리를 따라 난간이 생깁니다.
7. 다 세웠으면 Esc를 누릅니다.

## 팁

- {t:param.h}는 처음 1.1 m(0.3~3 m), {t:opt.postSpacing}은 처음 1 m(0.1~10 m)입니다.
- {t:stairs.railHow.points}에서 물체의 꼭짓점·모서리 끝·윗면에 맞춘 점은 그 높이를 그대로 씁니다. 계단 코를 차례로 찍으면 난간이 계단을 따라 오릅니다.
- {t:stairs.railHow.points}에서 첫 점을 다시 누르면 난간이 한 바퀴 닫힙니다. 발코니나 옥상 둘레에 씁니다.
- {t:stairs.railHow.points}에서 점을 찍을 때 마우스를 누른 채 0.5초 기다렸다가 끌면 곡선 난간이 됩니다.
- {t:stairs.railHow.edge}에서 끝이 이어지는 모서리와 선은 한 난간으로 이어집니다. 이어지지 않는 것을 클릭하면 앞의 난간이 끝나고 새 난간이 시작됩니다.
- {t:stairs.railHow.stair}는 계단 경사와 계단참을 따라갑니다. 클릭한 곳에서 가까운 쪽 옆에 생깁니다.
- 도구는 Esc를 누를 때까지 열려 있어 난간 여러 개를 이어서 세울 수 있습니다. 그리는 도중 {k:undo}는 마지막 점을 삭제합니다.
- 그린 난간을 선택하면 속성 창에서 {t:param.h}와 {t:opt.postSpacing}을 바꾸고, {c:pathEdit}으로 점과 곡선을 고칩니다.
- 계단을 만들 때 계단의 {t:stairs.rails} 칸을 쓰면 계단과 한 몸인 난간이 함께 생깁니다 ([계단](help:arch-stair)).

## 자주 하는 실수

- {t:stairs.railHow.stair}로 만든 난간은 나중에 계단을 고쳐도 따라 바뀌지 않습니다. 계단을 바꾼 뒤에는 난간을 삭제하고 다시 만들거나, 계단 속성의 {t:stairs.rails} 칸을 씁니다.
- 나선 계단에는 {t:stairs.railHow.stair}를 쓸 수 없습니다.
- 난간이 경사를 따르지 않고 바닥에 평평하게 그려집니다. 점이 바닥에 찍히고 물체에 맞춰지지 않은 것입니다. 계단 모서리 끝이나 꼭짓점에 점을 맞춰 찍습니다. 객체 스냅({k:osnap})이 켜져 있으면 맞추기 쉽습니다 ([객체 스냅](help:snap-osnap)).`,it=`---
id: arch-roof-edit
title: 지붕 변 선택
분류: 건축 부재
난이도: 중급
workspace: 3D 건설
keywords: 지붕 변, 경사 변, 지붕 고치기, 지붕 수정, 지붕 편집, 변 켜기, 변 끄기, 박공 벽, 박공면, 상자 끌기, 곡선 지붕, 둥근 지붕, 곡선 변, 변마다 경사, 용마루 옮기기, 추녀, 천창, 지붕 창, 지붕 구멍, 채광창, roof edge, roof side, sloped side, gable end, skylight, roof edit
commands: roof, tweak, window
order: 130
---

## 무엇

지붕 아래 모양을 선택한 뒤, 어느 변에서 지붕이 경사지게 올라갈지 변마다 켜고 끄는 방법입니다. 켜진 변에서 지붕이 경사지게 올라가고, 꺼진 변은 박공(세운 면)이 됩니다. 이미 만든 지붕도 속성 창에서 같은 방법으로 고칩니다.

## 하는 순서

1. {m:roof} 단추를 누르고 바닥판이나 닫힌 벽을 클릭합니다.
2. 화면에서 변 가까이를 클릭하면 그 변의 경사가 켜지거나 꺼집니다. 켜진 변은 실선, 꺼진 변은 점선으로 보입니다.
3. 여러 변을 한꺼번에 바꾸려면 마우스를 누른 채 끌어 상자로 감쌉니다. 상자 안에 들어온 변이 모두 켜지고, 이미 모두 켜져 있었으면 모두 꺼집니다.
4. 모든 변을 한 번에 바꾸려면 창의 {t:ca.allOn} 또는 {t:ca.allOff}를 누릅니다.
5. {t:opt.roofPitch}와 {t:opt.overhang}를 확인하고 적용 (Enter)을 누릅니다.
6. 만든 지붕을 고치려면 지붕을 선택하고 속성 창의 변 번호 단추를 눌러 변을 켜고 끕니다.

## 팁

- 곡선 변은 잘게 나뉘어 있어도 한 변으로 셉니다. 클릭 한 번이나 상자 한 번으로 곡선 변 전체가 함께 켜지거나 꺼지고, 속성 창의 변 번호 단추에는 \`~\`가 붙습니다.
- 창에는 켜진 경사 변 수와 전체 변 수가 함께 보입니다.
- 지붕 모양 단추({t:opt.roofGable}, {t:opt.roofHip} 등)를 누르면 그 모양에 맞게 경사 변이 다시 정해집니다. 모양을 먼저 선택한 뒤 필요한 변만 하나씩 고치면 빠릅니다.
- 속성 창의 {t:archedit.roofSlopes}에서 켜진 변마다 경사를 따로 정합니다. 경사를 다르게 하면 용마루와 추녀 점이 이동됩니다. {t:archedit.sameSlope}를 누르면 모든 변이 다시 같은 경사가 됩니다.
- {m:tweak}으로 지붕의 용마루 점이나 선을 이동해도 변마다 경사 값이 바뀌고, 지붕 설정으로 계속 고칠 수 있습니다.
- 속성 창에서는 지붕 모양, {t:opt.roofPitch}, {t:opt.overhang}, {t:opt.thickness}도 바꾸고 {t:flow.roofEave}와 {t:flow.roofRidge}를 확인합니다.
- 천창: {m:window}에서 {t:preset.window.skylight}을 선택하고 지붕 경사면 위를 클릭하면 경사면 기울기대로 놓이고 지붕에 그만큼 구멍이 뚫립니다. 지붕 경사나 높이를 바꾸면 천창이 지붕을 따라 이동되고, 천창을 삭제하면 구멍도 없어집니다.

## 자주 하는 실수

- 변에서 멀리 떨어진 곳을 클릭하면 아무 변도 바뀌지 않습니다. 변 바로 옆을 클릭합니다.
- 모든 변을 끄면 경사 없는 평지붕이 됩니다. 경사가 필요한 변을 다시 켭니다.
- 경사 변이 많고 외곽선이 복잡하면 평지붕으로 만든다는 안내가 나옵니다. 경사 변을 줄이거나 외곽선을 단순하게 합니다.
- 천창을 지붕 밖이나 지붕에서 떨어진 곳에 놓으면 구멍이 나지 않습니다. 지붕이 없는 곳에서는 천창이 바닥 위에 놓입니다.
`,at=`---
id: arch-roof
title: 지붕 얹기
분류: 건축 부재
난이도: 중급
workspace: 3D 건설
keywords: 지붕, 박공, 박공지붕, 경사 지붕, 평지붕, 모임지붕, 처마, roof, gable, 외쪽지붕, 외쪽, 모임, 경사, 지붕 경사, 물매, 용마루, 처마 높이, 처마 길이, 지붕 두께, 지붕 얹기, 지붕 만들기, 지붕 씌우기, 집웅, 지붕만들기, hip, shed, flat roof, pitch, overhang
commands: roof, wall, slab
howto: roof
context: roof
order: 120
---

## 무엇

바닥판이나 닫힌 벽 위, 또는 바닥에 그린 사각형 위에 지붕을 얹는 도구입니다. 지붕 모양은 {t:opt.roofFlat}, {t:opt.roofShed}, {t:opt.roofGable}, {t:opt.roofHip} 가운데에서 선택하고, {t:opt.roofPitch}·{t:opt.overhang}·{t:opt.thickness}를 정합니다.

## 하는 순서

1. {m:roof} 단추를 누릅니다.
2. 바닥판이나 벽을 클릭하거나 사각형을 그립니다.
3. 지붕 모양과 기울기를 정하고 적용 (Enter)을 누릅니다.

## 팁

- 지붕 아래 모양을 선택하는 방법은 세 가지입니다. 닫힌 벽을 클릭하면 벽 바깥면을 따라, 바닥판을 클릭하면 바닥판 외곽선을 따라 정해집니다. 부재가 없는 빈 곳에서 두 모서리를 클릭하면 사각형이 되고, 두 번째 모서리는 \`@10,8\`처럼 가로·세로 길이로 입력해도 됩니다.
- 지붕 모양에 따라 경사지게 올라가는 변이 정해집니다. {t:opt.roofGable}은 가장 긴 변과 그 맞은편 변, {t:opt.roofShed}은 가장 긴 변 하나, {t:opt.roofHip}은 모든 변이 경사지고, {t:opt.roofFlat}은 경사가 없습니다. 경사지지 않는 변은 박공(세운 면)이 됩니다.
- 경사 변을 하나씩 켜고 끄거나 만든 지붕을 고치는 방법은 [지붕 변 선택](help:arch-roof-edit)에 있습니다.
- {t:opt.roofPitch}는 5°~70°(기본 30°), {t:opt.overhang}는 0~3 m(기본 0.5 m), {t:opt.thickness}는 0.05~1 m(기본 0.2 m)입니다. 숫자 칸에는 [계산식](help:input-calc)을 쓸 수 있습니다.
- 지붕 아랫면 높이는 {t:flow.roofBase} 바닥 + {t:flow.offset}입니다. 처음에는 바로 위층 바닥(맨 위층이면 지금 층 바닥 + 층고), 곧 맨 위층 벽의 위로 정해집니다. 창에서 {t:flow.roofEave}와 {t:flow.roofRidge}를 바로 확인합니다.
- {t:flow.roofAttach}가 켜져 있으면(기본) 지붕 아래 벽의 위쪽이 지붕 아랫면을 따라 올라갑니다. 자세한 내용은 [벽 위쪽 맞추기](help:arch-wall-top)에 있습니다.
- 지붕 아래 모양을 잘못 선택했으면 {t:opt.repick}을 누르거나 Ctrl+Z로 처음부터 다시 선택합니다.
- 오목한 모양이나 곡선 벽 위에도 지붕이 얹히고, 골짜기와 추녀가 저절로 생깁니다.

## 자주 하는 실수

- 벽이 끊겨 닫히지 않았으면 클릭한 벽 하나의 둘레 사각형만 잡힙니다. 벽 끝을 이어 닫거나 바닥판을 클릭합니다.
- 외곽선이 서로 겹치거나 꼬여 있으면 지붕을 만들 수 없다는 안내가 나옵니다. 벽이나 바닥판의 모양을 먼저 고칩니다.
- 경사 지붕을 선택했는데 평지붕으로 만든다는 안내가 나옵니다. 모양이 너무 복잡한 경우이므로 경사 변을 줄이거나 외곽선을 단순하게 합니다.
- 다른 건물의 벽이나 바닥판은 선택할 수 없습니다. {c:levelPanel}에서 그 건물을 눌러 작업할 건물을 바꾼 뒤 다시 클릭합니다.
- 지붕이 벽 위에 떠 있거나 벽에 묻힙니다. {t:flow.roofBase}과 {t:flow.offset}을 확인합니다.
- 지붕 아래 모양을 선택한 뒤 Esc를 누르면 그때까지 정한 지붕이 만들어지고 도구가 끝납니다. 만들지 않고 끝내려면 먼저 Ctrl+Z로 선택한 모양을 취소합니다.
`,ot=`---
id: arch-slab
title: 바닥판 깔기
분류: 건축 부재
난이도: 기초
workspace: 3D 건설
keywords: 바닥판, 바닥 깔기, 슬래브, 천장, 마루, 방바닥, slab, floor slab, ceiling, 바닥, 바닥 만들기, 벽으로 바닥판, 자동 바닥판, 바닥판 두께, 바닥 구멍, 계단 구멍, 슬라브, 바닥판 그리기, floor, slab from walls, slab thickness, slab hole, stair opening
commands: slabAuto, slab, levelOutline, stair, pathEdit
howto: slab
context: slab, slabAuto
order: 60
---

## 무엇

바닥판은 층의 바닥이 되는 판입니다. 윗면이 층 바닥 높이에 맞고 두께는 아래로 생깁니다. 닫힌 벽 아래에 한 번에 깔거나, 사각형·다각형으로 직접 그리거나, 층 외곽선에서 저절로 만들 수 있습니다.

## 하는 순서

1. 벽을 첫 점까지 이어 닫힌 모양으로 그립니다.
2. {m:slabAuto} 단추를 누르고 Enter를 누르면 벽 아래에 바닥판이 깔립니다.
3. 직접 그리려면 {m:slab} 단추로 사각형이나 다각형을 그립니다.

## 팁

- {c:slabAuto} 도구는 지금 층에서 닫힌 벽을 모두 찾아 벽 바깥면까지 바닥판을 깝니다. 창의 {t:opt.closedWalls}에 찾은 수가 보이고, 끝이 서로 맞닿아 한 바퀴를 이루는 벽들도 닫힌 벽으로 봅니다.
- {c:slab} 도구의 {t:opt.slabRect}은 두 모서리를 찍어 만듭니다. 창의 {t:opt.sideW}와 {t:opt.sideH} 칸에 크기를 넣으면 그 크기로 만들어집니다.
- {t:opt.slabPoly}은 점을 차례로 찍고 첫 점을 다시 누르거나 Enter를 눌러 닫습니다. 점을 찍을 때 마우스를 누른 채 0.5초 기다렸다가 끌면 곡선 변이 됩니다.
- {t:opt.thickness}는 처음에 0.2 m이고 0.05~2 m로 정합니다. {t:flow.baseOffset} 칸에 값을 넣으면 바닥판 윗면이 그만큼 올라갑니다.
- 층 외곽선이 있는 층은 바닥판이 저절로 생기고 외곽선을 따라 바뀝니다 ([층 외곽선](help:arch-outline)). 위층 외곽선을 더 크게 그리면 아래층 밖으로 내민 바닥판이 됩니다.
- 바닥판의 구멍: 계단을 놓으면 그 위의 바닥판에 계단 크기만큼 구멍이 저절로 뚫립니다. 계단을 이동하면 구멍도 따라가고, 계단을 삭제하면 구멍이 막힙니다 ([계단](help:arch-stair)).
- 그린 바닥판을 선택하면 속성 창에서 두께를 바꾸고, {c:pathEdit}으로 외곽 점과 곡선을 고칩니다.
- 바닥판은 다른 층에도 놓을 수 있습니다. 창의 {t:lv.pickLevel} 칸에서 층을 선택합니다.

## 자주 하는 실수

- {t:opt.closedWalls} 값이 0입니다. 벽이 닫히지 않았거나 다른 층에 있습니다. 벽 끝이 정확히 맞닿게 고치거나 작업 층을 확인합니다.
- 층 외곽선이 있는 층에 {c:slabAuto} 도구나 {c:slab} 도구를 또 쓰면 바닥판이 두 장 겹칩니다. 겹친 것 가운데 하나를 삭제합니다.
- 바닥판 하나를 만들면 {c:slab} 도구는 닫힙니다. 다음 바닥판은 단추를 다시 누르거나 Enter를 눌러 도구를 다시 엽니다.
- 바닥판이 바닥 위로 떠 보입니다. {t:flow.baseOffset} 값이 0인지 확인합니다.
- 계단 위에 구멍이 나지 않습니다. 계단의 {t:stairs.slabCut} 스위치가 켜져 있는지, 바닥판 높이가 계단 꼭대기와 맞는지 확인합니다.
`,st=`---
id: arch-stair
title: 계단 놓기
분류: 건축 부재
난이도: 중급
workspace: 3D 건설
keywords: 계단, 기둥, 난간, 오르는, 올라가, 층계, stair, stairs, column, pillar, railing, 직선 계단, 일자 계단, ㄱ자 계단, ㄷ자 계단, ㄹ자 계단, 나선 계단, 회전 계단, 곡선 계단, 계단참, 단 높이, 디딤 폭, 단 수, 계단 구멍, 계단 만들기, 게단, staircase, spiral stair, landing, riser, tread, steps
commands: stair, column, railing, pathEdit
howto: stair
context: stair
order: 100
---

## 무엇

위층까지 오르는 계단을 놓습니다. 오를 높이와 단 수는 위층 바닥에 맞춰 저절로 정해지고, 위층 바닥판에는 계단 위만큼 구멍이 저절로 뚫립니다. 같은 묶음의 기둥·난간 도구도 함께 씁니다.

## 하는 순서

1. {m:stair} 단추를 누르고 계단이 시작할 곳을 클릭합니다 (R: 90° 회전).
2. {m:column} 단추는 누르는 곳마다 기둥을 세웁니다.
3. {m:railing} 단추로 점을 차례로 눌러 난간을 세웁니다.

## 팁

- 시작점을 찍은 뒤 두 번째 클릭이 오를 방향입니다. 시작점을 다시 클릭하면 시작점을 찍기 전에 보이던 방향(R로 회전한 방향) 그대로 놓입니다. 계단 하나를 놓으면 도구가 닫힙니다.
- 계단 모양은 {t:opt.stairStraight}, {t:opt.stairL}, {t:opt.stairU}, {t:stairs.style.z}, {t:opt.stairSpiral}, {t:stairs.style.path} 가운데에서 선택합니다. ㄱ·ㄷ·ㄹ자는 {t:stairs.flip} 스위치로 꺾는 쪽을 바꿉니다.
- {t:stairs.top} 칸의 처음 값은 바로 위층입니다. 더 위의 층이나 {t:stairs.top.typed} 항목을 선택할 수 있습니다.
- 두 번째 클릭으로 위층 바닥의 모서리나 점을 선택하면 그 높이까지 오릅니다. {t:opt.stairStraight} 계단은 그 점에서 끝나도록 디딤 폭이 맞춰집니다.
- 단 수는 {t:opt.stairRise}를 {t:stairs.maxRiser}(처음 0.18 m)로 나눠 올림한 값입니다. 층고 3 m이면 17단, 한 단 높이는 약 0.176 m입니다. {t:opt.stairSteps} 칸에 직접 넣어도 됩니다.
- {t:opt.stairWidth}은 처음 1 m(0.5~5 m), {t:opt.stairGoing}은 처음 0.27 m(0.15~0.6 m)입니다. 한 단이 최대 단 높이보다 높거나 디딤 폭이 0.26 m보다 좁으면 창에 경고가 나옵니다.
- {t:stairs.style.path}: 계단 가운데를 걷는 선을 점으로 그립니다. 꺾일 때마다 계단참이 생기고, Enter나 더블클릭으로 끝냅니다. 점을 찍을 때 마우스를 누른 채 0.5초 기다렸다가 끌면 곡선 계단이 됩니다.
- {t:stairs.rails} 칸에서 {t:stairs.rails.none}, {t:stairs.rails.left}, {t:stairs.rails.right}, {t:stairs.rails.both} 가운데 하나를 선택하고 {t:stairs.railHeight}(처음 0.9 m)를 정합니다. 이 난간은 계단과 한 몸이라 계단을 고치면 함께 바뀝니다. 나선 계단에는 이 칸이 없습니다.
- {t:stairs.slabCut} 스위치는 처음부터 켜져 있고, 계단 둘레를 {t:stairs.slabGap}(처음 0.1 m)만큼 더 넓게 뚫습니다.
- 놓은 계단을 선택하면 속성 창에서 모양·폭·오를 높이·단 수·난간·구멍을 바꿉니다. {t:stairs.style.path}로 그린 계단은 {c:pathEdit}으로 걷는 선의 점과 곡선을 고칩니다 ([곡선 편집](help:obj-curve-edit)).
- 위층에 묶인 계단은 층고를 바꾸면 오를 높이와 단 수가 따라 바뀝니다.
- 기둥은 [기둥](help:arch-column), 난간은 [난간](help:arch-railing)에 자세히 있습니다.

## 자주 하는 실수

- 맨 위층에서 계단을 놓으면 오를 층이 없어 높이를 직접 넣어야 합니다. 계단은 아래층에서 시작해 위층으로 놓습니다.
- 계단 위 바닥판에 구멍이 나지 않습니다. {t:stairs.slabCut} 스위치가 꺼져 있거나, 바닥판 높이가 계단 꼭대기와 맞지 않는지 확인합니다.
- {t:stairs.style.path}가 아닌 계단은 {c:pathEdit}으로 고칠 수 없습니다. 속성 창의 값으로 바꿉니다.
- R 키는 시작점을 찍기 전의 방향을 회전합니다. 시작점을 찍은 뒤에는 두 번째 클릭이 방향을 정합니다.
- 경고가 나오는 계단은 오르기 힘듭니다. 단 수를 늘리거나 걷는 선을 길게 그립니다.
`,ct=`---
id: arch-wall-top
title: 벽 위쪽 맞추기
분류: 건축 부재
난이도: 심화
workspace: 3D 건설
keywords: 벽 위쪽, 벽 높이, 위층 바닥까지, 높이 입력, 붙일 층, 다음 층 바닥까지만, 지붕에 붙이기, 지붕에 붙음, 지붕 아래 벽, 박공벽, 위쪽 제약, 띄움, 바닥에서 띄움, 기준 층, 층·높이 제약, 벽 위 높이 점, 기울어진 벽, 두 층 높이 벽, wall top, top constraint, attach to roof, attach top, base level, base offset, top offset, gable wall, sloped wall top
commands: wall, column, stair, roof
order: 50
---

## 무엇

벽 위가 어디까지 올라갈지 정하는 방법입니다. 높이를 직접 정하거나, 위쪽 층의 바닥에 묶거나, 지붕 아랫면에 붙일 수 있습니다. 층에 묶은 벽은 층고를 바꾸면 함께 늘고 줄어듭니다.

## 하는 순서

1. {m:wall} 단추를 누르고 창의 {t:flow.top}에서 {t:flow.top.toFloor} 단추를 누릅니다.
2. {t:flow.topLevel} 칸에서 벽 위가 닿을 층을 선택합니다. 더 위의 층을 선택하면 벽이 사이 층을 지나 그 층 바닥까지 올라갑니다.
3. 사이 층의 바닥판이 덮는 곳에서는 벽을 그 층에서 멈추게 하려면 {t:flow.stopAtSlabs} 칸을 켭니다.
4. 벽을 그립니다.
5. 이미 그린 벽은 벽을 선택하고 속성 창의 {t:flow.props}에서 {t:flow.top}과 {t:flow.offset}을 바꿉니다.
6. 벽 위를 지붕 아랫면에 맞추려면 같은 곳의 {t:flow.props.attach} 칸에서 지붕을 선택합니다.

## 팁

- 층에 묶은 벽은 그 층 바닥판의 아랫면에서 멈춥니다. 층고 3 m, 바닥판 두께 0.2 m이면 바닥판이 덮는 곳의 벽은 2.8 m이고, 바닥판이 없는 곳만 3 m까지 올라갑니다. 바닥판이 벽 위에 얹히는 구조입니다.
- 예: 1층 벽을 3층에 묶고 {t:flow.stopAtSlabs} 칸을 켜면, 2층 바닥판 아래 부분은 2층 바닥에서 멈추고 2층 바닥판이 없는 부분만 3층 바닥까지 올라갑니다. 2층이 3층보다 작은 건물의 바깥벽에 씁니다.
- {t:flow.stopAtSlabs} 칸은 사이에 층이 있을 때만 켤 수 있습니다. 바로 위층을 선택하면 꺼진 채로 있습니다.
- 위층이 없으면 {t:flow.top.aboveNone} 표시가 보이고 높이를 직접 정합니다. {c:levelAdd}로 층을 더하면 그 층까지 올릴 수 있습니다.
- {t:flow.offset}은 묶은 층 바닥에서 더하거나 빼는 거리입니다. \`-0.5\`를 넣으면 그 층 바닥보다 0.5 m 아래에서 멈춥니다.
- {t:flow.props}의 {t:flow.props.level}과 {t:flow.baseOffset}을 바꾸면 벽이 서는 층과 높이가 바뀝니다. 평면 위치는 그대로입니다.
- 지붕을 만들 때 {t:flow.roofAttach}가 켜져 있으면(처음부터 켜짐), 지붕 바로 아래 층의 벽 위가 지붕 아랫면을 따라 잘리고 박공 쪽 벽은 삼각형으로 올라갑니다 ([지붕](help:arch-roof)).
- 지붕에 붙은 벽은 원래 높이를 기억합니다. {t:flow.props.attach} 칸에서 {t:flow.props.detach}를 선택하거나 지붕을 삭제하면 그 높이로 돌아갑니다. 속성 창에 {t:archedit.ownHeight}가 보입니다.
- 벽 위를 비스듬하게 하려면 속성 창의 {t:archedit.tops}에서 {t:archedit.addTop} 단추를 누르고 {t:archedit.topAt}와 {t:archedit.topZ}를 정합니다. 점 사이는 곧게 기울고, 점이 없는 양 끝은 벽 높이입니다. {t:archedit.clearTops} 단추로 되돌립니다.
- 기둥과 계단도 같은 방법으로 위층 바닥에 묶입니다. {t:flow.stopAtSlabs} 칸과 지붕에 붙이기는 벽에만 있습니다.

## 자주 하는 실수

- 지붕에 붙은 벽은 속성 창에 {t:flow.top} 칸이 나오지 않습니다. 먼저 {t:flow.props.attach} 칸에서 {t:flow.props.detach}를 선택합니다.
- {t:flow.top.height} 방식으로 만든 벽은 층고를 바꿔도 높이가 그대로입니다. 층고를 자주 바꿀 건물은 {t:flow.top.toFloor} 방식으로 묶습니다.
- 벽 위가 바닥판 윗면까지 올라오지 않는 것은 잘못이 아닙니다. 벽은 바닥판 아랫면에서 멈춥니다.
- 벽을 묶어 둔 층을 삭제하면, 그 자리로 내려온 위층에 다시 묶입니다. 그 위에 층이 없으면 지금 높이 그대로 남고 묶임이 풀립니다.
- 지붕을 만들 때 {t:flow.roofAttach} 스위치를 껐으면 벽이 지붕에 붙지 않습니다. 나중에 벽마다 속성 창의 {t:flow.props.attach} 칸에서 그 지붕을 선택합니다.
`,lt=`---
id: arch-wall
title: 벽 그리기
분류: 건축 부재
난이도: 기초
workspace: 3D 건설
keywords: 벽, 벽 그리기, 벽 세우, 담, 칸막이, 방 만들, 방, wall, walls, room, 외벽, 내벽, 바깥벽, 안쪽 벽, 벽 두께, 벽 높이, 중심선, 기준선, 바깥면, 안쪽면, 벽 이음, 벽 잇기, 곡선 벽, 둥근 벽, 벽 그리는법, 벼, partition, exterior wall, interior wall, wall thickness, curved wall
commands: wall, slabAuto, levelOutline, pathEdit
howto: wall
context: wall
order: 40
---

## 무엇

바닥에 점을 차례로 찍어 벽을 세웁니다. 벽은 지금 층 바닥에서 시작하고, 위층이 있으면 위층 바닥까지 올라갑니다. 찍은 토막마다 벽이 하나씩 생기고, 벽끼리 만나는 곳은 저절로 깔끔하게 이어집니다.

## 하는 순서

1. {m:wall} 단추를 누릅니다.
2. 점을 차례로 클릭해 벽을 세웁니다 (길이를 5처럼 입력해도 됩니다).
3. 첫 점을 다시 누르면 닫히고, 더블클릭이나 Enter로 끝납니다.
4. 두께와 높이는 창에서 정합니다.

## 팁

- 그린 선이 벽의 어디에 오는지 창의 그림 단추로 선택합니다. {t:flow.justify.center}, {t:flow.justify.left}, {t:flow.justify.right} 가운데 하나이며, 명령줄에 \`f\`를 입력하면 벽이 그린 선의 반대쪽으로 이동됩니다.
- 두께는 처음에 0.2 m이고 0.05~2 m로 정합니다. 위층이 없으면 높이는 층고와 같고 0.1~30 m로 정합니다.
- 위층이 있으면 창의 {t:flow.top}이 {t:flow.top.toFloor}로 정해져, 층고를 바꿀 때 벽 높이도 따라 바뀝니다. 높이를 직접 정하려면 {t:flow.top.height} 단추를 누릅니다. 자세한 것은 [벽 위쪽 맞추기](help:arch-wall-top)에 있습니다.
- 포인터는 같은 층 벽의 끝, 벽 모서리, 벽 선 위에 붙고 화면에 {t:flow.snap.end}, {t:flow.snap.corner}, {t:flow.snap.line} 표시가 나옵니다.
- 창의 {t:opt.segLength}와 {t:opt.angle} 칸에 값을 넣으면 다음 벽의 길이와 방향이 정해집니다. 명령줄에 \`@5<90\`처럼 입력해도 됩니다 ([좌표·길이 입력](help:input-coords)).
- 점을 찍을 때 마우스를 누른 채 0.5초 기다렸다가 끌면 곡선 벽이 됩니다. 곡선이 들어간 벽은 한 벽으로 만들어집니다.
- {t:archedit.wallJoin} 스위치를 끄면 새 벽의 끝이 다른 벽과 이어지지 않습니다. 그린 뒤에는 속성 창의 {t:archedit.joins} 단추로 끝마다 잇거나 끊습니다.
- 외곽선을 따라 바깥벽을 한 번에 세우거나, 변의 일부에만 세우거나, 벽의 일부만 삭제하려면 {m:outerWalls}를 씁니다: [외벽 세우기](help:build-outer-walls).
- {t:flow.baseOffset} 칸에 값을 넣으면 층 바닥보다 그만큼 위(음수면 아래)에서 벽이 시작합니다.
- 그린 벽을 선택하면 속성 창에서 두께·높이·그린 선의 위치를 바꾸고, {t:archedit.tops}으로 벽 위를 기울이고, {c:pathEdit}으로 선을 고칩니다.
- Esc를 누르면 그때까지 그린 벽은 남고 도구가 닫힙니다. 그리는 도중 {k:undo}는 마지막 점만 삭제합니다.

## 자주 하는 실수

- 벽이 닫히지 않아 {c:slabAuto} 도구가 닫힌 벽을 찾지 못합니다. 마지막에 첫 점을 다시 누르거나 벽 끝이 서로 정확히 닿게 그립니다.
- 벽이 다른 층에 생깁니다. 도구 창의 {t:lv.pickLevel} 칸과 상태 표시줄의 층을 확인합니다.
- 벽 높이가 2.8 m처럼 층고보다 조금 낮습니다. 벽이 위층 바닥판 아랫면에서 멈추기 때문이며 정상입니다 ([벽 위쪽 맞추기](help:arch-wall-top)).
- 창에 높이 칸이 없습니다. {t:flow.top}이 {t:flow.top.toFloor}로 되어 있으면 높이는 위층에 맞춰 저절로 정해집니다. {t:flow.top.height} 단추를 누르면 칸이 나옵니다.
- {t:flow.justify.left}을 선택하고 건물 둘레를 시계 반대 방향으로 돌며 그리면 벽이 바깥쪽으로 두꺼워집니다. 시계 방향으로 돌며 그리거나, 명령줄에 \`f\`를 입력하거나, 그린 뒤 속성 창의 {t:opt.flip} 단추로 뒤집습니다.
`,ut=`---
id: build-auto-roof
title: 자동 옥상과 옥상 높이
분류: 건물 세우기
난이도: 중급
workspace: 3D 건설
keywords: 옥상, 자동 지붕, 평지붕, 테라스, 세트백, 옥상 높이, 돌출 아랫면, 필로티 천장, 지붕 자동, 옥상높이, 옥상 낮추기, 옥상 올리기, 노출 면
commands: buildFlow, levelOutline, roof
order: 40
---

## 무엇

건물 세우기는 층 외곽선만 보고 지붕을 자동으로 정합니다. 층의 윗면 가운데 위층이 덮지 않는 부분은 평지붕(옥상)이 되고, 아랫면 가운데 아래층이 받치지 않는 부분은 돌출 아랫면이 됩니다. 옥상 윗면은 기본으로 위층 바닥과 같은 높이이고, 층마다 {t:aw.roofOffset}로 올리거나 내립니다.

## 하는 순서

1. {t:ab.easy}나 {t:ab.detailed}로 건물을 세웁니다.
2. 위층 외곽선을 아래층보다 좁게 그리면, 아래층 윗면 가운데 위층이 덮지 않는 부분에 평지붕이 자동으로 생깁니다.
3. {c:buildFlow} 창의 {t:fl.step.levels} 단계 {t:ab.detailed}에서 옥상이 생긴 층(아래층)의 행을 찾습니다.
4. {t:aw.roofOffset}에 m 단위로 값을 넣습니다. 예: \`-0.1\`은 옥상 윗면을 위층 바닥보다 0.1 m 낮춥니다.
5. 옥상 지붕을 선택해 속성 창의 {t:aw.roofOffset}를 바꿔도 같습니다. 그 층의 옥상 조각이 모두 함께 움직입니다.

## 팁

- 맨 위층은 덮는 층이 없으므로 윗면 전체가 지붕이 됩니다. 그 지붕의 윗면은 맨 위층 바닥에서 층고만큼 올라간 높이에 놓입니다.
- {t:aw.roofOffset}는 -3 m부터 3 m까지이고, 0이면 위층 바닥과 같은 높이입니다. 지붕 두께는 0.2 m이며 윗면을 기준으로 놓입니다.
- 층고를 바꾸면 옥상도 위층 바닥을 따라 함께 움직입니다.
- 옥상 높이를 바꾸면 그 지붕에 붙은 벽도 지붕 아랫면을 따라갑니다. 위층 바닥까지 올라가는 벽은 그대로입니다: [벽 자동 나누기](help:build-wall-split).
- 아래층이 받치지 않는 아랫면(돌출 아랫면)에는 따로 부재가 생기지 않고 그 층의 바닥판이 그 자리를 덮습니다. 위층이 아래층보다 넓을 때와 [필로티](help:build-piloti) 층 위의 층이 그렇습니다.
- 위층이 아래층 가운데에만 있거나 [중정](help:build-courtyard)이 있어 옥상이 고리 모양이 되면, 평지붕은 여러 조각으로 나뉘어 생깁니다.
- 외곽선이 맞닿은 다른 건물의 위층이 덮는 곳에도 옥상이 생기지 않습니다: [붙은 건물](help:build-shared-levels).
- {t:ab.kind.piloti} 층과 지하층에는 지붕이 생기지 않습니다. 필로티 층에서 위층이 덮지 않는 부분은 바닥판만 있는 열린 바닥입니다.

## 자주 하는 실수

- {t:aw.roofOffset}를 위층 행에서 찾는 경우가 많습니다. 옥상 높이는 옥상이 생긴 층(아래층)의 값입니다.
- 위층 외곽선을 아래층과 조금 어긋나게 그리면 아주 좁은 옥상 조각이 생길 수 있습니다. 넓이 0.01 m² 미만이거나 평균 폭 20 mm 미만인 조각에는 지붕을 만들지 않고, 버린 넓이가 한 층에서 1 m²를 넘으면 {c:buildFlow} 창에 안내가 나옵니다. 모서리를 맞추려면 {t:aw.useBelow}으로 시작해 고칩니다.
- 자동으로 생긴 지붕을 삭제해도 그 층을 다시 적용하면 다시 생깁니다. 옥상을 없애려면 위층 외곽선을 넓혀 그 부분을 덮습니다.
- {m:roof}으로 직접 만든 지붕에는 {t:aw.roofOffset} 칸이 없습니다. 건물 세우기가 만든 지붕에만 나옵니다.
`,dt=`---
id: build-courtyard
title: 중정
분류: 건물 세우기
난이도: 중급
workspace: 3D 건설
keywords: 중정, 안마당, 가운데 마당, 구멍 뚫린 건물, ㅁ자 건물, 외곽선 구멍, 안쪽 벽, 중정 지우기, 아트리움, 안뜰, 중정 만들기, 중청, 바닥판 구멍
commands: levelOutline, buildFlow
order: 70
---

## 무엇

층 외곽선 안에 구멍을 그려 가운데가 빈 마당(중정)을 만드는 방법입니다. 중정 둘레에는 안쪽 벽이 자동으로 서고, 그 층의 바닥판에도 같은 모양의 구멍이 뚫립니다.

## 하는 순서

1. {c:buildFlow} 창의 {t:fl.step.levels} 단계 {t:ab.detailed}에서 중정을 둘 층의 외곽선 단추를 누릅니다.
2. 외곽선 도구에서 {t:ol.mode.draw}를 누릅니다.
3. {t:aw.ring.outer}·{t:aw.ring.hole} 선택에서 {t:aw.ring.hole}을 선택합니다.
4. 외곽선 안쪽에 중정 모양을 {t:ol.shape.poly}이나 {t:ol.shape.rect}으로 그립니다. 첫 모서리는 \`5,5\`처럼 좌표로 입력해도 됩니다.
5. 다 그리면 바로 적용되어 중정 둘레에 안쪽 벽이 서고 바닥판에 구멍이 뚫립니다.
6. 위아래로 뚫린 중정이면 위층마다 같은 자리에 중정을 그립니다.

## 팁

- 한 층에 중정을 여러 개 그릴 수 있습니다. 모두 삭제하려면 외곽선 도구의 {t:aw.courtClear}를 누릅니다.
- 외곽선 밖으로 나간 부분은 잘라 내고 외곽선 안쪽 부분만 중정이 됩니다.
- 중정 둘레의 옥상은 중정을 피해 여러 조각의 평지붕으로 생깁니다: [자동 옥상과 옥상 높이](help:build-auto-roof).
- 층 전체에 단 천장도 중정을 피해 생깁니다.
- 중정이 있는 층을 {t:ab.kind.piloti}로 바꾸면 중정 둘레에도 기둥이 섭니다: [필로티](help:build-piloti).
- {t:aw.useBelow}은 바깥 외곽선만 받고 중정은 받지 않습니다. 중정은 층마다 따로 그립니다.
- 사방이 막힌 ㅁ자 건물은 중정 하나로, 한쪽이 트인 ㄷ자 건물은 건물 외곽선을 ㄷ자로 그려 만듭니다: [중정 주택](help:brec-courtyard-house), [ㄷ자 건물](help:brec-u-shape).
- 벽 없이 바닥판에만 구멍을 내는 방법은 [여러 층이 트인 아트리움](help:brec-atrium)에 있습니다.

## 자주 하는 실수

- 1층에만 중정을 그리면 2층 바닥이 중정 위를 덮습니다. 하늘이 보이는 중정은 모든 위층의 같은 자리에 중정을 그립니다.
- {t:aw.ring.hole} 선택은 그 층에 외곽선이 있을 때 {t:ol.mode.draw}에서만 나타납니다. 외곽선을 먼저 그립니다.
- 외곽선 밖에 그린 중정은 만들어지지 않고 알림이 나옵니다.
- 손으로 시작한 건물에서 {c:levelPanel}이나 메뉴로 연 외곽선 도구로 중정을 그리면 바닥판 구멍만 생기고 안쪽 벽은 생기지 않습니다. 안쪽 벽까지 만들려면 {t:ab.detailed}의 외곽선 단추로 엽니다.
- {t:ol.clear}를 누르면 그 층의 중정도 함께 삭제됩니다.
`,ft=`---
id: build-detailed
title: 층마다 건물 세우기
분류: 건물 세우기
난이도: 중급
workspace: 3D 건설
keywords: 층마다, 고급, 층마다 외곽선, 층 종류, 보통, 필로티, 옥탑, 아래층 모양, 위층 모양, 외곽선 그대로, 건물 외곽선, 세트백, 돌출, 외곽선 적용, 층별 모양, 세부, 이대로 정하기, 외벽 세우기, 외벽, 벽 세우기, 변 고르기
commands: buildFlow, levelOutline, outerWalls, buildingEasy
order: 30
---

## 무엇

층마다 외곽선과 {t:ab.kind}({t:ab.kind.normal}·{t:ab.kind.piloti}·{t:ab.kind.rooftop})를 따로 정해 건물을 세우는 방법입니다. 외곽선을 끝내거나 종류를 바꾸면 그 층과 바로 아래층의 지붕·바닥판·필로티 기둥이 바로 다시 만들어집니다. {t:ab.detailed}는 벽을 스스로 만들지 않습니다. 벽은 {c:outerWalls}로 세웁니다. {t:ab.easy}로 세운 건물의 한 층만 바꿀 때도 씁니다.

## 하는 순서

1. {c:buildFlow} 창의 {t:fl.step.levels} 단계에서 {t:ab.build} 옆의 {t:ab.detailed}를 선택합니다. 층은 위층부터 나옵니다.
2. 바꿀 층의 이름을 눌러 그 층에서 작업합니다.
3. 그 층의 외곽선 단추({t:aw.outlineDraw} 또는 넓이 m²)를 눌러 외곽선 도구를 열고, 외곽선을 새로 그리거나 점을 이동합니다. 외곽선을 끝내는 즉시 적용됩니다.
4. 아래층과 같은 모양이면 외곽선 단추 옆의 {t:aw.useBelow}을 누릅니다. 아래에 외곽선 있는 층이 없으면 건물 외곽선을 그대로 쓰는 {t:aw.useShape}이 나옵니다.
5. {t:ab.kind} 칸에서 {t:ab.kind.normal}, {t:ab.kind.piloti}, {t:ab.kind.rooftop} 가운데 하나를 선택합니다. 선택하는 즉시 적용됩니다.
6. 벽을 세우려면 목록 위의 {t:cmd.outerWalls}를 누릅니다. 창 위에서 {t:ow.mode.all}, {t:ow.mode.pick}, {t:ow.mode.draw} 가운데 하나를 선택하고 창 아래의 {t:ew.build}를 누릅니다: [외벽 세우기](help:build-outer-walls).
7. 자동 지붕이 있는 층에는 {t:aw.roofOffset} 칸이, {t:ab.kind.piloti} 층에는 기둥 설정 칸이 그 층 행 아래에 나타납니다.

## 팁

- {t:ab.kind.normal}은 바닥판이 있는 보통 층, {t:ab.kind.piloti}는 기둥만 세우는 층([필로티](help:build-piloti)), {t:ab.kind.rooftop}은 아래층보다 작은 맨 위층입니다. {t:ab.kind.rooftop}은 이름만 다르고 만들어지는 부재는 {t:ab.kind.normal}과 같습니다.
- 지하층의 외곽선 단추 옆에는 {t:aw.useAbove}이 나옵니다.
- 층 외곽선(지하층 포함)은 건물 외곽선 안에만 둡니다. 밖으로 나간 부분은 잘리고, 완전히 밖이거나 여러 조각이 되는 외곽선은 받아들이지 않습니다. 위층을 내밀려면 건물 외곽선을 가장 넓은 층에 맞춰 그리고 아래층을 줄입니다: [건물 외곽선](help:build-outline).
- {t:cmd.outerWalls} 단추는 메뉴의 {m:outerWalls}와 같습니다. 선택한 변이나 구간마다 보통 벽이 하나씩 서고, 처음에는 벽의 바깥면이 외곽선 위에 맞으며 높이는 위층 바닥까지입니다. 한 번 세운 것이 되돌리기 한 번입니다.
- {c:outerWalls}로 세운 벽은 손으로 그린 벽과 같아서 외곽선을 바꿔도 따라 움직이지 않습니다. {t:ab.easy}로 세운 건물의 바깥벽만 외곽선을 따라 다시 만들어집니다.
- 적용 한 번이 되돌리기 한 번입니다. 알림에 다시 만든 벽·기둥·지붕의 수가 나옵니다.
- 목록 위의 {t:ceil.build} 스위치를 켜 두면 외곽선을 끝낸 층에 천장도 함께 생깁니다.
- 외곽선 도구의 {t:ol.mode.draw}에서 {t:aw.ring.hole}을 선택하면 외곽선 안에 빈 마당을 그립니다: [중정](help:build-courtyard).
- 층 수와 층고는 맨 위 칸에서 정하고 {t:fl.planApply}을 누릅니다. 외곽선만 그린 새 건물은 1층 하나뿐이므로 여기서 층을 늘립니다. 새 층은 아래층 외곽선을, 새 지하층은 위층 외곽선을 저절로 받습니다.
- 위아래 층 모양에 따른 지붕과 벽: [자동 옥상과 옥상 높이](help:build-auto-roof), [벽 자동 나누기](help:build-wall-split).
- 건물에 문제가 있으면 {t:ab.build} 위에 한 줄씩 나옵니다. 다른 건물과 외곽선이 겹치거나 대지 밖으로 나갔으면 {t:cmd.outlineEdit} 단추가, 외곽선 밖에 벽·기둥이 있으면 {t:bo.issuePick} 단추가 함께 나옵니다.
- 손으로 벽을 그린 건물은 {c:buildFlow} 창을 열면 처음부터 {t:ab.detailed}가 선택되어 있습니다.

## 자주 하는 실수

- 외곽선을 정했는데 벽이 생기지 않습니다. {t:ab.detailed}는 벽을 스스로 만들지 않습니다. {c:outerWalls}로 세웁니다.
- 위층 외곽선을 넓혔는데 잘렸습니다. 층 외곽선은 건물 외곽선 밖으로 나갈 수 없습니다. 먼저 건물 외곽선을 {c:areaEdit}으로 넓힙니다.
- {c:levelPanel}이나 메뉴에서 연 외곽선 도구는 건물 세우기로 만든 건물에서만 지붕을 바로 다시 만듭니다. 손으로 시작한 건물은 {t:ab.detailed}의 외곽선 단추로 엽니다.
- {t:ab.easy}로 세운 건물에서 외곽선을 바꾸면 그 층의 자동 벽이 새로 만들어지므로, 새 벽이 옛 벽 자리에 서지 않으면 그 벽의 문·창이 삭제됩니다. 외곽선을 정한 뒤 문·창을 넣습니다.
- 자동으로 만든 벽을 손으로 고친 뒤 그 층을 다시 적용하면 고친 벽이 새로 만든 벽으로 바뀔 수 있습니다. 그때는 {c:undo} ({k:undo})로 되돌립니다.
- {t:ab.kind.piloti}로 바꾸면 그 층의 바깥벽이 모두 삭제되고 기둥이 섭니다. 벽에 넣은 문·창도 함께 삭제됩니다.
`,pt=`---
id: build-easy
title: 건물 바로 세우기
분류: 건물 세우기
난이도: 기초
workspace: 3D 건설
keywords: 건물 바로 세우기, 일반, 빠른 건물, 한 번에 건물, 층 수, 층고, 지하층, 다시 세우기, 건물 자동, 바로세우기, 건물바로세우기, 퀵 빌딩, 대지 그리기, 외곽선 그리기, 건물 외곽선, 평탄화, 그대로 두기, 천장 넣기, 외벽, 벽 있음, 벽 없음, 일부, 변마다 벽, 벽 일부, 차고
commands: buildingEasy, buildFlow, buildingOutline, siteArea, grade, levelAdd
context: buildingEasy
order: 20
---

## 무엇

층 수와 층고만 정하면 건물 외곽선 위에 층, 층 외곽선, 바깥벽, 바닥판, 평지붕이 한 번에 생기는 방법입니다. 창이 ① {t:bo.step.site} ② {t:bo.step.outline} ③ {t:bo.step.grade} ④ {t:bo.step.build} 순서를 안내하고, 빠진 단계가 있으면 그 단계부터 하게 합니다. ③ {t:bo.step.grade}는 하지 않아도 되는 단계이며, 대지 전체를 먼저 평탄화하라고 묻지 않습니다. 모든 층의 외곽선은 건물 외곽선과 같은 모양이 되고, 바깥벽은 외곽선을 따라 섭니다. 변마다 벽 있음·벽 없음·일부를 선택할 수 있습니다. 세운 결과 전체가 되돌리기 한 번에 해당합니다.

## 하는 순서

1. {m:buildingEasy} 단추를 누릅니다. 명령줄에 \`quickbuilding\`을 입력해도 됩니다.
2. 대지가 있으면 {t:bo.site} 목록에서 대지를 선택합니다. 대지 없이 땅 전체에 지으려면 {t:bld.wholeLand}를 선택합니다. 대지가 하나도 없으면 이 단계는 저절로 땅 전체로 끝납니다.
3. {t:bo.outlinePick} 목록에서 세울 건물을 선택합니다. 외곽선이 없으면 {t:aw.drawOutline}를 누르고 외곽선을 그립니다. 다 그리면 창이 다시 열립니다.
4. 지형이 있는 땅이면 창 아래에 {t:bo.grade} 단추가 나옵니다. 누르면 건물 외곽선 아래 땅을 대상으로 평탄화 도구가 열리고, 도구를 닫으면 창이 다시 열립니다. 평탄화하지 않으려면 이 단계를 건너뜁니다.
5. {t:bnew.above}(1~50), {t:bnew.below}(0~10), {t:bnew.height}(m)를 정합니다.
6. {t:ec.title} 칸에서 벽이 필요 없는 변을 {t:ec.state.none}으로, 일부만 비울 변을 {t:ec.state.part}로 바꿉니다. 그대로 두면 사방에 벽이 섭니다.
7. 창 아래 안내 문장에서 세울 자리를 확인하고 {t:aw.easyGo}를 누릅니다. 알림에 만든 층·벽·기둥·지붕의 수가 나오고, 작업 위치가 그 건물의 1층으로 이동됩니다.

## 팁

- 창을 여는 곳: 메뉴 단추, {c:levelPanel} 창 아래의 {c:buildingEasy} 단추, 건물 외곽선의 옆 막대와 오른쪽 클릭 메뉴, 건물이 없는 범위의 {c:buildFlow} 창. 건물 외곽선을 선택해 두고 열면 그 건물이 선택되어 있습니다.
- {t:bo.site}·{t:bo.outlinePick} 목록 대신 {t:bo.pickInView}을 누르고 화면에서 대지나 건물 외곽선을 클릭해도 됩니다. Esc를 누르면 창으로 돌아갑니다.
- {t:bo.outlinePick} 목록에는 외곽선만 그리고 아직 세우지 않은 건물이 넓이와 함께 나옵니다. 새 외곽선을 그리려면 {t:bo.outlineNew}를 선택합니다.
- {t:ec.title} 칸에는 외곽선의 변에 번호를 붙인 작은 평면과, 변 3 · 12.0 m처럼 변마다 한 줄씩 있는 목록이 있습니다. 줄마다 {t:ec.state.wall}, {t:ec.state.none}, {t:ec.state.part} 가운데 하나를 선택합니다. 평면의 변을 누르면 {t:ec.state.wall}과 {t:ec.state.none}이 바뀝니다. 평면과 목록은 [외벽 세우기](help:build-outer-walls)의 {t:ow.mode.pick}과 같습니다.
- {t:ec.state.part}: 벽이 없는 구간을 {t:ec.start}(변의 첫 점에서 잰 거리)와 {t:ec.length}로 mm 단위로 정합니다. 평면에 보이는 구간 양 끝의 동그라미를 끌어도 됩니다. {t:ec.addGap}로 한 변에 구간을 여러 개 둘 수 있습니다. 예를 들어 앞쪽 20 m 변에 시작 8000, 길이 3000을 넣으면 가운데 3 m만 트입니다.
- 세운 뒤에 {m:outerWalls}의 {t:ow.mode.cut}로 바깥벽의 일부를 삭제해도 같은 칸에 {t:ec.state.part}로 나타나고, 다시 세워도 그 자리에는 벽이 생기지 않습니다.
- 층이 둘 이상이면 {t:ec.title} 칸의 층 목록에서 {t:ec.allLevels} 대신 한 층을 선택해 그 층의 벽만 바꿀 수 있습니다. 층 목록은 세우기 전에도 입력한 지상 층 수만큼 1층, 2층으로 나오고, 세울 때 실제 층에 그대로 적용됩니다. 예를 들어 지상 층 수를 2로 두고 1층을 선택해 앞쪽 변을 {t:ec.state.none}으로 바꾸면, 한 번에 1층이 트인 차고가 됩니다. 지하층은 층 목록에 나오지 않습니다.
- 목록의 줄은 변 1 · 남쪽 · 12.0 m처럼 변이 바라보는 방위도 보여 줍니다. 작은 평면의 화살표가 북쪽입니다. 줄이나 평면의 변에 마우스를 올리면 3D 화면에서 그 변이 번호와 함께 강조됩니다.
- {t:ec.start}과 {t:ec.length}는 mm로 입력하고, 칸 옆에 m 값이 함께 나옵니다.
- {t:ec.allLevels}을 선택한 채 층마다 벽이 다른 변은 {t:ec.state.varies}으로 보입니다. 그 줄에서 {t:ec.state.wall}이나 {t:ec.state.none}을 선택하면 모든 층이 같아집니다.
- 곡선 변도 {t:ec.state.part}를 선택할 수 있습니다. {t:ec.start}과 {t:ec.length}는 곡선을 따라 잰 길이입니다. {t:ab.kind.piloti} 층에는 원래 바깥벽이 없습니다.
- {t:ec.state.none}으로 둔 변은 나중에 건물 외곽선을 고쳐 변이 길어져도 변 전체가 벽 없이 남습니다.
- 세운 뒤에 건물 세우기가 만든 벽·지붕·기둥을 삭제하거나 고치면, 다시 세우거나 층을 더해도 그대로 남습니다. 삭제한 바깥벽은 {t:ec.title} 칸에 그 층의 {t:ec.state.none}이나 {t:ec.state.part}로 나타나고, 고친 부재는 손으로 그린 부재가 됩니다.
- 다시 세울 때 벽이 바뀌어 문·창이 들어갈 벽이 없어지면 문·창이 삭제되고, 알림에 그 수와 {t:cmd.undo} 단추가 나옵니다.
- 창을 처음 열면 지상 3층, 지하 0층, 층고 3 m가 들어 있고, 그다음부터는 마지막에 쓴 값이 들어 있습니다. {c:buildFlow} 창의 {t:ab.easy}도 빈 건물에서는 같은 값으로 시작합니다. 대지나 외곽선을 그리고 돌아와도 넣은 값은 그대로입니다.
- {t:ceil.build} 스위치를 켜 두면(처음에 켜짐) 필로티 층을 뺀 모든 층에 천장이 함께 생깁니다.
- 지하층에는 바깥벽 대신 외곽선을 따라 두께 0.3 m 지하 외벽이 생깁니다. 바닥판은 모든 층에 생기고, 평지붕은 맨 위층에 생깁니다.
- 1층 바닥 높이는 그 자리에 평탄화가 있으면 그 높이를 따르고, 없으면 그 자리에서 가장 높은 땅의 높이를 씁니다 (지형이 없으면 0). 나중에 [건설 진행 상황](help:arch-flow)의 {t:fl.step.base} 단계에서 바꿉니다.
- 이렇게 세운 건물은 {c:buildFlow} 창의 {t:fl.step.levels} 단계 {t:ab.easy}에서 층 수·층고와 변마다 벽을 바꾸고 {t:aw.easyAgain}를 누르면 다시 만들어집니다. 늘어난 층은 옆 층의 외곽선을 받습니다.
- 건물 외곽선을 고치면 바깥벽도 새 외곽선을 따라 다시 만들어집니다: [건물 외곽선](help:build-outline).
- {m:levelAdd}로 층을 더해도 새 층이 아래층 외곽선을 받아 벽과 지붕이 함께 생기고, 평지붕은 새 맨 위층으로 이동됩니다. {t:ceil.build}가 켜져 있으면 새 층에 천장도 생깁니다.
- 한 층만 모양을 바꾸려면 [층마다](help:build-detailed)를 씁니다.

## 자주 하는 실수

- 층고 칸은 m 단위입니다. \`3000\`이 아니라 \`3\`을 입력합니다.
- {t:aw.easyAgain}로 층 수를 줄여도 손으로 넣은 물체가 있는 층은 삭제되지 않고 남습니다. 남긴 층 수는 알림에 나옵니다.
- 벽이나 기둥을 손으로 그린 건물에서는 {t:ab.easy}에 {t:aw.easyGo} 대신 안내와 {c:buildingEasy} 단추가 나옵니다. 그 건물은 [층마다](help:build-detailed)에서 고치거나 새 건물을 세웁니다.
- 건물 외곽선을 저절로 만들지는 않습니다. 세울 건물이 없으면 {t:bo.outlinePick} 목록이 {t:bo.outlineNew}로 되어 있고, 주 단추가 {t:aw.drawOutline}로 바뀝니다.
- {t:ec.state.none}이나 {t:ec.state.part}로 바꾼 변에는 다시 세워도 그 자리에 벽이 생기지 않습니다. 벽이 필요하면 그 변을 {t:ec.state.wall}으로 바꾸고 {t:aw.easyAgain}를 누릅니다.
- 구간 끝이 변의 끝에서 0.3 m보다 가까우면 그 사이의 짧은 벽은 만들지 않습니다.
`,mt=`---
id: build-names-tree
title: 건물 이름·색·전체 목록
분류: 건물 세우기
난이도: 기초
workspace: 3D 건설
keywords: 건물 이름, 건물 A, 건물 색, 전체 목록, 프로젝트 목록, 프로젝트 창, 트리, 층 목록, 땅, 대지, 토목, 지하층 이름, B1층, 이름 바꾸기, 건물 숨기기, 경로, 작업 위치, 모든 층, 오른쪽 클릭, 모든 층에 천장, 건물 옮기기, 다른 대지로, 끌어다 놓기
commands: levelPanel, buildingEasy, buildingNew, buildingOutline, levelAdd, ceilingAll
order: 90
---

## 무엇

새 건물은 **건물 A, 건물 B …** 이름과 자기 색을 받습니다. {c:levelPanel} 창에는 땅 › 대지 › 건물 › 층과 토목이 한 목록으로 나오고, 여기서 작업할 곳을 선택하며 이름·색·숨기기·삭제를 관리합니다.

## 하는 순서

1. 상태 표시줄의 경로 앞에 있는 층 단추를 눌러 {c:levelPanel} 창을 앞으로 꺼냅니다. 창은 처음에 화면 오른쪽에 붙어 있습니다.
2. 행을 클릭하면 선택만 합니다. 대지 행은 그곳을, 건물·층 행은 그 안의 보이는 부재를 선택하고, 선택한 행이 표시됩니다. 행을 두 번 클릭하거나 Enter를 누르면 그 대지·건물·층으로 작업 위치가 이동됩니다. 이름 위를 두 번 클릭해도 같습니다. 도구가 열려 있을 때 층 행을 클릭하면 부재를 선택하지 않고 작업 층만 바뀝니다. {t:aw.land} 행은 클릭하면 땅 전체로 작업 위치가 이동됩니다.
3. 행의 **+** 단추로 아래 항목을 더합니다. {t:aw.land} 행은 {t:aw.addSite}, 대지 행은 그 대지에 [건물 외곽선](help:build-outline)을 그리는 도구, 건물 행은 층 추가입니다.
4. 대지와 건물 행의 눈 단추로 화면에서 숨기거나 다시 보입니다.
5. 행을 오른쪽 클릭하면 {t:aw.rename}, {t:aw.delete} 같은 메뉴가 나옵니다. 삭제는 한 번 더 묻습니다. 행을 선택하고 F2를 눌러도 이름을 바꿀 수 있습니다. 이름은 바꿀 때만 입력 칸이 됩니다.
6. 건물과 층의 이름은 행의 이름 칸을 눌러 바로 고칠 수도 있습니다 (40자까지). Enter로 정하고 Esc로 되돌립니다.

## 팁

- 오른쪽 클릭 메뉴: 층 행에는 {c:planView}, {c:ceilingView}, {c:archSection}, 건물 행에는 {c:archSection}, {t:aw.color}, {c:ceilingAll}이 더 있습니다. 보기를 선택하면 작업 범위가 그 층이나 건물로 먼저 이동됩니다.
- 새 건물 이름은 프로젝트에서 아직 쓰지 않은 첫 글자를 씁니다. 건물 A가 있으면 다음은 건물 B입니다. 이름을 변경한 건물(예: 본관)은 글자를 차지하지 않습니다.
- 건물이 둘 이상이면 층 이름 앞에 건물 이름이 붙어 건물 A · 2층처럼 나옵니다.
- 새 지하층 이름은 B1층, B2층입니다. 직접 바꾼 층 이름은 그대로 둡니다.
- 새 건물의 색은 아직 쓰지 않은 색으로 정해지고 파일에 저장됩니다. 목록, 상태 표시줄의 경로, 작업 범위 밖에서 흐리게 보이는 건물에 같은 색이 쓰입니다.
- {t:aw.color} 메뉴에서 12가지 색 가운데 하나나 색상 선택으로 색을 바꾸고, {t:aw.colorAuto}을 누르면 목록 순서에 따른 색으로 돌아갑니다. 색상 선택에서 끌며 바꾼 색은 되돌리기 한 번에 돌아갑니다.
- 건물은 서 있는 대지 행 아래에 나오고, 어느 대지에도 없는 건물은 {t:aw.land} 행 바로 아래에 나옵니다. 외곽선이 맞닿은 건물도 한 행씩 따로 나옵니다: [붙은 건물](help:build-shared-levels).
- 건물 행을 다른 대지 행으로 끌어다 놓거나, 건물 행 오른쪽 클릭 메뉴의 {t:so.moveToSite}에서 대지를 고르면, 건물이 그 대지 밖에 있을 때 먼저 묻고 이동합니다. 건물은 그 대지 가운데로, 자리가 없으면 다른 건물과 1 m 떨어진 가장 가까운 빈자리로 이동되고, 선택되어 화면에 맞춰집니다. 들어갈 자리가 없으면 이동하지 않고 알림이 나옵니다. 물체 창에서도 같습니다.
- 층 행에는 이름, {t:levels.height} 칸, 바닥 높이, 외곽선 단추, 보기 단추(누를 때마다 보이기 → 흐리게 → 숨기기), 이 층만 보기, 화면 맞추기 단추가 있습니다. 건물 행의 1층 바닥 단추로 1층 바닥 높이를 다시 정합니다.
- 목록 아래에는 {t:levels.add}, {t:levels.addBasement}, {t:levels.copy}, {t:levels.delete}, {c:buildingEasy}, {c:buildingNew} 단추와 {t:levels.upper} 보기 칸이 있습니다: [층](help:arch-levels).
- 목록 끝의 {t:aw.civil} 묶음에는 도로·교량·터널·제방 같은 토목 구조물이 종류 순서로, 각자의 이름(도로 1, 교량 1 …)으로 나오고, 누르면 그 구조물이 선택됩니다.
- 새 부품과 구조물의 이름은 같은 이름의 가장 큰 번호 다음 번호를 받습니다. 도로 1과 도로 3이 있으면 새 도로는 도로 4이고, 이미 있는 이름은 바뀌지 않습니다.
- 상태 표시줄의 경로(대지 1 › 건물 A › 3층)에서 한 단계를 누르면 같은 단계의 다른 곳으로 이동해 갈 수 있습니다: [작업 범위](help:site-scope).
- 상자 선택은 지금 건물의 지금 층 부재만 선택합니다. 상태 표시줄의 {t:ab.allLevels}을 켜면 그 건물의 모든 층으로 넓어집니다.

## 자주 하는 실수

- 눈 단추로 숨긴 대지·건물은 화면에서만 숨겨지고 파일에 저장되지 않습니다. 파일을 다시 열면 다시 보입니다.
- 건물이 하나뿐이면 그 건물은 삭제할 수 없습니다. 삭제하려고 하면 대신 {t:lt.clearBuilding}로 내용을 모두 비울 수 있습니다.
- 대지를 삭제해도 그 위의 건물은 남습니다. 그 대지에 평탄화가 있으면 함께 삭제할지 먼저 묻습니다.
- 물체가 있는 층을 삭제하면 물체도 삭제할지, 다른 층에 남길지 묻습니다.
- 다른 건물이 흐리게만 보이면 작업 범위 밖이기 때문입니다. 그 건물에서 작업하려면 목록에서 그 건물 행을 두 번 클릭합니다.
- 건물 행을 한 번 클릭했더니 부재가 모두 선택되었습니다. 클릭은 선택만 합니다. 작업 위치를 이동하려면 두 번 클릭합니다.
`,ht=`---
id: build-outer-walls
title: 외벽 세우기
분류: 건물 세우기
난이도: 기초
workspace: 3D 건설
keywords: 외벽 세우기, 외벽, 바깥벽, 외곽선 따라 벽, 전체, 변 고르기, 직접 그리기, 일부 삭제, 벽 일부, 벽 일부 삭제, 구간, 변 일부, 벽 두께, 벽 높이, 바깥면, 중심선, 안쪽면, 모든 층, 벽 먼저, 벽으로 외곽선, outer walls, outerwalls, edgewall
commands: outerWalls, wallCut, wall, buildingOutline
howto: outerWalls
context: outerWalls, wallCut
order: 35
---

## 무엇

건물 외곽선을 따라 바깥벽을 만드는 창입니다. 창 위의 네 가지 방법은 같은 설정을 씁니다. {t:ow.mode.all}는 모든 변에, {t:ow.mode.pick}은 선택한 변이나 그 일부에 벽을 세웁니다. {t:ow.mode.draw}는 벽을 선으로 그리고, {t:ow.mode.cut}는 이미 있는 벽의 한 구간만 삭제합니다. 어느 방법으로 만들어도 보통 벽이 생기고, 나중에 같은 방법으로 고칩니다.

## 하는 순서

1. {m:outerWalls} 단추를 누릅니다. [건설 진행 상황](help:arch-flow)의 {t:fl.step.walls} 단계나 {t:ab.detailed}의 {t:cmd.outerWalls} 단추도 같은 창을 엽니다.
2. 창 위에서 {t:ow.mode.all}, {t:ow.mode.pick}, {t:ow.mode.draw}, {t:ow.mode.cut} 가운데 하나를 선택합니다.
3. 설정을 정합니다. 순서는 늘 같습니다: {t:opt.wallJustify}({t:flow.justify.left}·{t:flow.justify.center}·{t:flow.justify.right}), {t:flow.top}, {t:opt.thickness}, {t:param.h}, {t:ew.thisLevel} 또는 {t:ec.allLevels}.
4. {t:ow.mode.all}이면 창 아래의 {t:ew.build}를 누릅니다. 외곽선의 모든 변에 벽이 섭니다. 창 아래의 단추가 이 창의 하나뿐인 실행 단추이며, {t:ow.mode.cut}에서는 {t:ew.delete}로 바뀝니다.
5. {t:ow.mode.pick}이면 화면에서 변을 클릭해 변 전체를 선택하거나, 변을 따라 끌어 그 구간만 선택합니다. 창의 목록에서 변마다 {t:ec.state.wall}, {t:ec.state.none}, {t:ec.state.part}를 선택해도 됩니다. 다 선택하면 {t:ew.build}를 누릅니다.
6. {t:ow.mode.draw}이면 [벽](help:arch-wall) 도구가 같은 설정으로 열리고, 점을 차례로 클릭해 벽을 그립니다. {t:ow.mode.cut}이면 벽을 따라 끌어 삭제할 구간을 선택하고 Delete 키나 {t:ew.delete} 단추를 누릅니다.

## 팁

- {t:opt.wallJustify}는 외곽선이 벽의 어느 면에 오는지 정합니다. 처음 값인 {t:flow.justify.left}이면 벽이 외곽선 안쪽에 섭니다.
- {t:flow.top}에서 {t:flow.top.toFloor}를 선택하면 벽이 위층 바닥까지 서고 층고가 바뀌면 함께 바뀝니다. 위층이 없으면 {t:param.h}를 입력합니다.
- {t:ec.allLevels}을 선택하면 같은 변이 있는 모든 층에 한 번에 세웁니다. {t:ow.mode.all}에서는 지하층에 0.3 m 지하 외벽이 서고, 벽이 이미 있는 층은 건너뜁니다.
- 창 이름은 어느 방법을 선택해도 {t:cmd.outerWalls}입니다. 지금 방법은 창 위의 단추에 표시됩니다.
- 변을 따라 끌 때는 변의 양 끝과 가운데에 붙고, 그 밖에서는 격자 간격에 맞춰집니다. 끄는 동안 커서 옆에 시작과 길이가 mm로 보입니다.
- 곡선 변과 곡선 벽도 일부만 선택하고 삭제할 수 있습니다. 시작과 길이는 곡선을 따라 잰 길이이고, 곡선의 양 끝과 곡선 길이의 가운데, 곡선을 따라 잰 격자 간격에 붙습니다. 선택한 구간은 곡선 위에 그대로 표시됩니다.
- {t:ow.mode.pick}이나 {t:ow.mode.cut}로 구간을 선택하는 동안에는 위층과 이 층의 지붕·천장이 흐리게 보여 위에서 벽이 잘 보입니다. 다른 방법으로 바꾸거나 창을 닫으면 원래 보기로 돌아옵니다. {c:upperLevels} 설정은 바뀌지 않습니다.
- 명령줄에 \`2000,3000\`처럼 시작,길이를 mm로 입력하면 마지막으로 가리킨 변에서 그 구간을 선택합니다. 숫자 하나만 입력하면 마지막 구간의 길이가 바뀝니다.
- 창의 평면과 목록은 [건물 바로 세우기](help:build-easy)의 {t:ec.title} 칸과 같은 번호와 같은 이름을 씁니다. {t:ec.state.part}는 구간마다 {t:ec.start}과 {t:ec.length}를 mm로 정하고, 평면의 동그라미를 끌어도 됩니다.
- {t:ow.mode.cut}는 벽을 오른쪽 클릭했을 때 나오는 {c:wallCut}와 같습니다. 구간 양쪽의 벽 조각은 남고, 구간 안에 다 들어간 문·창은 함께 삭제되며 알림에 그 수가 나옵니다. 곡선 벽은 곡선이 그 자리에서 나뉘고, 남은 조각은 같은 곡선 위에 같은 두께·위쪽·기준선으로 남습니다.
- {t:ab.easy}로 세운 건물의 바깥벽을 일부 삭제하면 {t:ec.title} 칸의 그 변이 {t:ec.state.part}가 됩니다. 다시 세워도 그 구간에는 벽이 생기지 않습니다.
- 벽을 먼저 그려도 됩니다. 외곽선이 없는 건물에서 벽이 닫힌 고리가 되면 벽의 바깥면을 따라 건물 외곽선이 저절로 생기고, 알림에 {t:bo.fromWalls}가 나옵니다. 되돌리기 한 번에 벽과 외곽선이 함께 없어집니다. 알림의 {t:cmd.outlineEdit} 단추로 바로 외곽선을 고치거나 {t:cmd.undo} 단추로 되돌릴 수 있습니다. 넓이가 작거나 아주 가는 고리는 실수일 수 있어 저절로 만들지 않고, 알림의 {t:bo.fromWallsBtn} 단추로 묻습니다. 외곽선을 만든 벽을 나중에 고치면 {t:bo.refit} 단추가 있는 알림이 나옵니다.
- 벽이 닫히지 않았으면 외곽선은 생기지 않고, [건설 진행 상황](help:arch-flow)의 {t:fl.step.shape} 단계에 {t:bo.fromWallsBtn} 단추가 나옵니다. 누르면 그린 벽을 모두 둘러싸는 외곽선이 생깁니다.
- 세우기 한 번, 삭제 한 번이 되돌리기 한 번입니다.

## 자주 하는 실수

- {t:ow.mode.pick}에서 {t:ew.build}가 꺼져 있습니다. 아직 선택한 변이 없습니다. 변을 클릭하거나 목록에서 {t:ec.state.wall}을 선택합니다.
- 문·창이 구간 끝에 걸렸다는 알림이 뜹니다. 문·창이 반쯤 걸친 구간은 삭제하지 않습니다. 구간을 문·창 밖으로 이동하거나 문·창까지 넣습니다.
- 닫힌 벽, 높이가 바뀌는 벽, 연결 복사한 벽은 일부만 삭제할 수 없습니다. 닫힌 곡선 벽도 같습니다. 건물 세우기로 만든 바깥벽은 닫힌 벽이라도 일부를 삭제할 수 있습니다.
- 100 mm보다 짧은 구간은 삭제할 수 없습니다. 끝에서 100 mm 안쪽까지 끌면 그 끝까지 삭제합니다.
`,gt=`---
id: build-outline
title: 건물 외곽선
분류: 건물 세우기
난이도: 기초
workspace: 3D 건설
keywords: 건물 외곽선, 외곽선, 건축 면적, 건축면적, 건물 자리, 건물 바닥 영역, 앉을 자리, 풋프린트, 건폐율, 건축 영역, 새 건물, 건물 만들기, 외곽선 그리기, 외곽선 편집, 건물 삭제, 건물 옮기기, 다른 대지로, footprint, building outline, building area, building footprint, coverage
commands: buildingOutline, siteArea, areaTable, buildingEasy
howto: buildingOutline
context: buildingOutline
order: 15
---

## 무엇

건물이 차지할 수 있는 가장 넓은 자리를 그리는 도구입니다. 외곽선을 그리면 그 자리에 바로 건물이 생깁니다. 새 문서의 빈 건물 A가 첫 외곽선을 받고, 그다음부터는 건물 B, 건물 C …가 새로 생깁니다. 층 외곽선·벽·기둥은 모두 이 외곽선 안에 있어야 하고, 법적인 건축면적과 건폐율은 층 모양에서 저절로 계산됩니다.

## 하는 순서

1. {m:buildingOutline} 단추를 누릅니다. 새 건물을 만들 때 쓰는 {c:buildingNew}이나 전체 목록의 대지 행 **+** 단추도 같은 도구를 엽니다.
2. 대지가 있으면 창의 {t:so.target} 목록에서 건물이 설 대지를 선택합니다. 대지 없이 지으려면 {t:bld.wholeLand}를 선택합니다.
3. {t:opt.areaRect}이나 {t:opt.areaPoly}을 선택하고 외곽선을 그립니다. 다각형에서 누른 채 0.5초 기다렸다가 끌면 곡선 변이 됩니다.
4. 다 그리면 건물이 생기고, 알림에 건물 이름과 넓이(예: 건물 B를 만들었습니다 · 120.0 m²)가 나옵니다. 작업 위치는 그 건물의 1층으로 이동됩니다.
5. 층·벽·지붕은 [건물 바로 세우기](help:build-easy)이나 [층마다](help:build-detailed)로 세웁니다.

## 팁

- 대지는 없어도 됩니다. 대지가 하나도 없으면 땅 전체에 그립니다. 대지를 선택하면 그리는 점이 그 대지 안에 붙잡히고, 선택한 대지는 점선으로 보입니다.
- 건물 외곽선끼리는 맞닿아도 되지만 겹치면 안 됩니다. 0.1 m²보다 많이 겹치면 그리지 않고 알림이 나옵니다. 맞닿은 건물은 서로 바닥과 지붕을 덮고 받칩니다: [붙은 건물](help:build-shared-levels).
- 외곽선은 건물이 차지하는 가장 넓은 자리입니다. 층 외곽선(지하층 포함)이 밖으로 나가면 외곽선에 맞춰 잘리고 알림이 나옵니다. 완전히 밖에 있거나 잘려서 여러 조각이 되는 층 외곽선은 받아들이지 않습니다.
- 벽과 기둥은 외곽선 밖에 그리면 만들지 않고 알림이 나옵니다. 바닥판·계단·난간·가구는 밖에 놓을 수 있지만, 밖에 있다는 안내가 [건설 진행 상황](help:arch-flow)의 {t:ab.build} 위에 나옵니다. 지붕은 처마가 있으므로 밖으로 나가도 됩니다.
- 건축면적은 저절로 계산됩니다. 층 외곽선이 있으면 지상층(필로티 포함, 지하층·중정 제외) 외곽선을 합친 넓이를 건물 외곽선 안에서 잽니다. 층 외곽선이 없으면 가장 넓은 층의 바닥면적을, 그것도 없으면 건물 외곽선 넓이를 씁니다. [면적표](help:site-area-table)에 {t:at.byLevels}, {t:at.largestFloor}, {t:at.byOutline}처럼 기준이 적힙니다.
- 건폐율은 건축면적 ÷ 대지면적입니다. 예: 500 m² 대지에 12 × 12 m 건물 외곽선을 그리고, 1층 외곽선은 10 × 12 m, 2층 외곽선은 12 × 12 m로 정하면 건축면적은 두 층을 합친 144 m², 건폐율은 28.8 %입니다. 지하층이 더 넓어도 건축면적에는 들어가지 않습니다.
- {c:buildFlow} 창의 {t:fl.step.shape} 단계에 건물 외곽선 넓이와 건축면적·건폐율이 함께 보입니다.
- 나중에 고치기: 도구 없이 외곽선 안의 빈 땅을 클릭하면 그 건물 외곽선이 선택됩니다. 옆 막대와 오른쪽 클릭 메뉴에서 {c:areaEdit}·{c:buildingEasy}·{c:areaDelete}를 할 수 있습니다. 외곽선 안을 더블클릭하면 작업 범위가 그 건물로 이동됩니다.
- {c:areaEdit}으로 꼭짓점을 끌거나 곡선을 고치거나 다시 그리면 바로 적용됩니다. 옛 외곽선을 쓰던 층은 새 외곽선을 받고, 다른 층은 새 외곽선에 맞춰 잘립니다. 건물 세우기로 만든 벽과 지붕도 새 외곽선에 맞춰 다시 만들어지고, 맞닿은 옆 건물의 벽과 지붕도 함께 맞춰집니다. 밖에 남은 손으로 그린 벽은 그대로 두고 알림에 그 수가 나옵니다.
- {t:ec.state.none}으로 둔 변이 길어지면 늘어난 부분까지 벽 없이 남습니다. {t:ec.state.part}의 구간은 변의 첫 점에서 잰 자리 그대로 남습니다.
- {c:areaDelete}는 그 건물을 층과 부품까지 함께 삭제합니다. 건물이 하나뿐이면 삭제하는 대신 {t:lt.clearBuilding}를 권합니다. 건물 외곽선에 평탄화가 있으면 대지를 삭제할 때처럼 평탄화도 삭제할지 남길지 먼저 묻습니다.
- 다른 대지로 이동: 전체 목록이나 물체 창에서 건물 행을 다른 대지 행으로 끌어다 놓습니다. 건물이 그 대지 가운데로, 자리가 없으면 가장 가까운 빈자리로 이동되고 알림이 나옵니다. {c:buildFlow} 창 ① 단계의 {t:so.bldSite} 목록이나 오른쪽 클릭 메뉴의 {t:so.moveToSite}으로 바꿔도 같고, 건물이 그 대지 밖에 있으면 먼저 묻습니다. 다른 건물과는 1 m 떨어진 자리를 찾고, 이동한 건물은 선택되어 화면에 맞춰집니다.

## 자주 하는 실수

- 그렸는데 건물이 생기지 않고 대지 밖으로 나갔다는 알림이 뜹니다. 사각형의 다른 구석이나 변이 대지 바깥을 지나간 경우입니다. 대지 안쪽에 들어오도록 다시 그리거나 {t:so.target}을 {t:bld.wholeLand}로 바꿉니다.
- 다른 건물의 외곽선과 겹친다는 알림이 뜹니다. 두 외곽선은 맞닿게만 그립니다. 다른 건물의 구석에 붙여 그리면 정확히 맞닿습니다.
- 외곽선을 줄였더니 바뀌지 않았습니다. 층 외곽선이 둘로 나뉘거나 없어지게 되는 모양은 받아들이지 않습니다. 층 외곽선을 먼저 고칩니다.
- 위층을 외곽선보다 넓게 내밀 수 없습니다. 건물 외곽선을 가장 넓은 층에 맞춰 그리고, 아래층을 [층마다](help:build-detailed)에서 줄입니다.
- 다른 대지로 끌었더니 들어가지 않는다는 알림이 뜹니다. 그 대지가 건물보다 작거나 빈자리가 없는 경우입니다. 알림에 건물과 대지의 가로×세로 크기가 함께 나옵니다.
`,_t=`---
id: build-overview
title: 건물 세우기
분류: 건물 세우기
난이도: 기초
workspace: 3D 건설
keywords: 건물 세우기, 건물 만들기, 건물 짓기, 일반, 고급, 건물 바로 세우기, 자동 벽, 자동 지붕, 층마다 외곽선, 건물세우기, 건물 자동, 빌딩, 체크리스트, 대지 평탄화 건물 외곽선 세우기, 건물 외곽선, 건물 순서
commands: buildingEasy, buildFlow, levelOutline, buildingOutline
order: 10
---

## 무엇

층, 층 외곽선, 바깥벽, 바닥판, 지붕을 하나씩 그리지 않고 한꺼번에 만드는 기능입니다. 모든 건물은 [건물 외곽선](help:build-outline)에서 시작합니다. {t:ab.easy}는 층 수와 층고만으로 바깥벽까지 건물 전체를 세우고, {t:ab.detailed}는 층마다 외곽선과 {t:ab.kind}를 따로 정하며 벽은 선택한 변에만 세웁니다. 두 방법은 같은 데이터를 만들므로 {t:ab.easy}로 세운 뒤 한 층만 {t:ab.detailed}에서 바꿀 수 있습니다.

## 하는 순서

1. {m:buildingEasy} 단추를 누릅니다.
2. 창 위쪽의 순서 ① {t:bo.step.site} ② {t:bo.step.outline} ③ {t:bo.step.grade} ④ {t:bo.step.build}에서 지금 할 단계를 확인합니다. 아래쪽 주 단추가 그 단계의 일을 합니다.
3. 건물 외곽선이 없으면 주 단추를 눌러 그립니다. 다 그리면 이 창이 다시 열립니다.
4. {t:bnew.above}, {t:bnew.below}, {t:bnew.height}를 정하고 {t:aw.easyGo}를 누릅니다.
5. 모양이 다른 층이 있으면 {c:buildFlow} 창의 {t:fl.step.levels} 단계에서 {t:ab.detailed}를 선택하고, 그 층의 외곽선이나 {t:ab.kind}를 바꿉니다. 바꾼 내용은 바로 적용됩니다.
6. 결과가 마음에 들지 않으면 {c:undo} ({k:undo})를 누릅니다. 세우기와 적용은 각각 되돌리기 한 번입니다.

## 팁

- {t:ab.easy}는 모든 층을 건물 외곽선과 같은 모양으로 만들고, 바깥벽을 두르고(변마다 끌 수 있음), 맨 위에 평지붕을 얹습니다: [건물 바로 세우기](help:build-easy).
- 3층만 좁은 건물, 1층이 기둥만 있는 건물, 가운데가 빈 건물은 [층마다](help:build-detailed)에서 만듭니다.
- 자동으로 정해지는 부분: [자동 옥상과 옥상 높이](help:build-auto-roof), [벽 자동 나누기](help:build-wall-split), [필로티](help:build-piloti), [중정](help:build-courtyard).
- {t:ceil.build} 스위치는 처음부터 켜져 있어, 필로티 층을 뺀 모든 층에 층고를 따르는 천장이 함께 생깁니다: [천장](help:arch-ceiling).
- 따라 하는 예제: [ㄷ자 건물](help:brec-u-shape), [3층만 좁게](help:brec-setback), [1층 필로티](help:brec-piloti-overhang), [중정 주택](help:brec-courtyard-house), [위로 갈수록 좁아지는 탑](help:brec-stepped-tower).
- 벽을 한 장씩 그리는 방법도 그대로 쓸 수 있습니다: [벽부터 그리는 작은 집](help:brec-small-house).
- 건물과 층은 {c:levelPanel} 창의 목록에서 선택하고 관리합니다: [건물 이름·색·전체 목록](help:build-names-tree).

## 자주 하는 실수

- 자동으로 만든 벽·지붕을 하나씩 삭제하고 다시 그리는 경우가 많습니다. 모양을 바꿀 때는 그 층의 외곽선을 고치면 벽과 지붕이 함께 다시 만들어집니다.
- 손으로 벽을 그린 층에는 바깥벽이 자동으로 생기지 않고 지붕만 생깁니다.
- {t:ab.detailed}만으로 세운 건물에는 벽이 저절로 생기지 않습니다. {m:outerWalls}로 세웁니다: [외벽 세우기](help:build-outer-walls).
- 외곽선을 바꾸면 그 층의 자동 벽이 다시 만들어집니다. 새 벽이 옛 벽 자리에 서지 않으면 그 벽에 넣은 문·창은 삭제되므로, 외곽선을 먼저 정하고 문·창을 넣습니다.
- 지형이 있는 땅에서는 ② 단계에서 {t:bo.grade}나 {t:fl.gradeSkip} 가운데 하나를 선택해야 다음 단계로 넘어갑니다.
`,vt=`---
id: build-piloti
title: 필로티
분류: 건물 세우기
난이도: 중급
workspace: 3D 건설
keywords: 필로티, 기둥만, 1층 주차장, 열린 1층, 기둥 간격, 기둥 크기, 원기둥, 각기둥, 필로티 기둥, 필로티층, 필로티 천장, 필로트, 피로티
commands: buildFlow, column, levelOutline
order: 60
---

## 무엇

바깥벽 없이 기둥만 서는 층입니다. {t:ab.kind}를 {t:ab.kind.piloti}로 바꾸면 그 층의 바깥벽이 없어지고, 외곽선을 따라 모든 모서리와 일정한 간격마다 기둥이 섭니다. 1층 주차장처럼 아래가 트인 건물에 씁니다.

## 하는 순서

1. {t:ab.easy}나 {t:ab.detailed}로 건물을 세웁니다.
2. {c:buildFlow} 창의 {t:fl.step.levels} 단계에서 {t:ab.detailed}를 선택합니다.
3. 기둥만 세울 층의 {t:ab.kind}에서 {t:ab.kind.piloti}를 선택합니다. 바로 적용됩니다.
4. 그 층의 바깥벽이 삭제되고, 처음에는 5 m 이하 간격으로 0.4 m 각기둥이 섭니다. 모든 모서리에도 하나씩 섭니다.
5. 그 층 행 아래에 나타난 {t:ab.columnSpacing}과 {t:aw.pilotiSize}를 m 단위로 바꿉니다.
6. {t:aw.square} 또는 {t:aw.round}을 선택합니다. 값을 바꿀 때마다 기둥이 바로 다시 만들어집니다.

## 팁

- 예: 20 × 10 m 층을 필로티로 바꾸면 기둥은 12개입니다 (모서리 4개, 긴 변 사이에 3개씩, 짧은 변 사이에 1개씩).
- 기둥은 외곽선에서 기둥 크기의 반만큼 안쪽에 섭니다. 각 변을 간격 이하로 고르게 나누므로 실제 간격은 설정값보다 조금 좁을 수 있습니다.
- {t:ab.columnSpacing}은 1~20 m, {t:aw.pilotiSize}는 0.15~2 m 사이에서 정합니다.
- 기둥은 그 층 바닥에서 위층 바닥까지 올라갑니다. 맨 위층이면 층고만큼 올라갑니다.
- 필로티 층의 바닥판은 그대로 남아 열린 바닥이 됩니다. 필로티 층에는 지붕이 생기지 않고, 위층의 아랫면은 돌출 아랫면이 됩니다: [자동 옥상과 옥상 높이](help:build-auto-roof).
- 필로티 층에는 천장이 생기지 않습니다. {t:ceil.build}로 층 전체에 달았던 천장은 필로티로 바꿀 때 삭제됩니다.
- 중정이 있는 층이면 중정 둘레에도 기둥이 섭니다: [중정](help:build-courtyard).
- {c:buildFlow} 창의 {t:fl.step.walls} 단계는 필로티 층을 벽이 다 된 층으로 셉니다.
- 위층을 필로티보다 넓게 내미는 예: [1층 필로티 + 위층 돌출](help:brec-piloti-overhang).

## 자주 하는 실수

- 지하층을 {t:ab.kind.piloti}로 바꿔도 기둥이 생기지 않습니다. 필로티는 지상층에 씁니다.
- 손으로 벽을 그린 층을 {t:ab.kind.piloti}로 바꾸면 그 벽은 그대로 남고 기둥은 생기지 않습니다.
- {t:ab.columnSpacing}을 기둥 크기의 2배보다 작게 넣어도 기둥 사이는 기둥 크기의 2배보다 가까워지지 않습니다.
- {t:ab.kind.normal}으로 되돌리면 기둥이 삭제되고 바깥벽이 다시 생깁니다. 기둥에 맞춰 놓은 물체는 위치를 다시 확인합니다.
`,yt=`---
id: build-shared-levels
title: 붙은 건물
분류: 건물 세우기
난이도: 심화
workspace: 3D 건설
keywords: 붙은 건물, 맞붙은 건물, 맞닿은 건물, 이웃 건물, 여러 건물, 건물 두 개, 두 동, 별동, 본관 별관, 경계벽, 공용 벽, 공용 부재, 층 같이 씀, 층 공유, 외곽선 맞닿음, 동 나누기, joined buildings, attached buildings, shared wall
commands: buildingOutline, buildingEasy, buildFlow, levelOutline
order: 80
---

## 무엇

건물마다 자기 [건물 외곽선](help:build-outline)이 있습니다. 같은 대지에서 외곽선이 맞닿은 건물끼리는 붙은 건물로 보고, 바닥 높이가 같은 층은 서로 덮고 받치는 것으로 계산합니다. 그래서 옆 건물의 위층이 덮는 곳에는 옥상이 생기지 않습니다. 벽과 지붕은 건물마다 자기 외곽선으로 따로 만들고, 맞닿은 선 위의 벽은 두 건물이 함께 씁니다.

## 하는 순서

1. {m:buildingOutline}으로 첫 건물의 외곽선을 그립니다. 건물 A가 생깁니다.
2. 다시 {m:buildingOutline}을 누르고, 첫 건물 외곽선의 구석에서 시작해 맞닿는 외곽선을 그립니다. 건물 B가 생깁니다.
3. {m:buildingEasy}를 누르고 {t:bo.outlinePick} 목록에서 건물 A를 선택해 층 수와 층고를 넣고 {t:aw.easyGo}를 누릅니다.
4. 다시 {m:buildingEasy}를 열고 건물 B를 선택해 같은 층고로 세웁니다.
5. {c:levelPanel}에서 두 건물이 같은 대지 아래에 한 행씩 따로 나오는지 확인합니다.

## 팁

- 붙은 건물이 되는 조건은 같은 대지에 있고 외곽선의 변이 맞닿는 것입니다. 서로 덮고 받치는 층은 바닥 높이가 같고, 둘 다 지상층이거나 둘 다 지하층인 층입니다.
- 외곽선은 맞닿기만 하고 겹치면 안 됩니다. 0.1 m²보다 많이 겹치면 그리지 않습니다. 다른 건물의 구석에 붙여 그리면 정확히 맞닿습니다.
- 한 건물의 위층만 좁히면 그 건물의 아래층에만 옥상이 생기고 옆 건물은 그대로입니다.
- 두 건물이 맞닿는 선에는 먼저 세운 건물의 바깥벽 한 장만 섭니다. 나중에 세운 건물은 같은 높이의 층에서 그 벽과 겹치는 곳에 벽을 만들지 않습니다.
- 두 건물에 걸친 부재(맞닿은 선 위의 벽 등)는 공용으로 보며, 작업 범위 밖에서 흐리게 보일 때 회색 줄무늬로 나옵니다. 부재를 선택해 속성 창의 {t:aw.owner} 칸에서 속한 건물이나 {t:aw.ownerShared}을 직접 선택할 수도 있습니다.
- 작업 범위는 건물마다 따로 선택합니다. 목록의 건물 행이나 상태 표시줄 경로의 건물 단계에서 선택합니다: [작업 범위](help:site-scope).
- 떨어진 곳에 건물을 따로 세우려면 외곽선을 떨어뜨려 그립니다. 떨어진 건물끼리는 서로 영향을 주지 않습니다.
- 따라 하는 예제: [붙은 건물 둘](help:brec-two-buildings). 건물 이름과 색은 [건물 이름·색·전체 목록](help:build-names-tree)을 봅니다.

## 자주 하는 실수

- 두 번째 외곽선이 그려지지 않고 겹친다는 알림이 뜹니다. 첫 건물의 외곽선 안으로 들어가게 그린 경우입니다. 첫 건물의 구석이나 변에 붙여 다시 그립니다.
- 오가는 길이 없습니다. 맞닿은 선의 벽에 문을 넣습니다.
- 두 건물의 층고가 달라 바닥 높이가 어긋난 층은 서로 덮지 않습니다. 그때는 옆 건물의 위층이 덮는 곳에도 옥상이 생깁니다.
- 두 건물이 다른 대지에 있으면 맞닿아도 붙은 건물로 보지 않습니다. 같은 대지에 둡니다.
`,bt=`---
id: build-wall-split
title: 벽 자동 나누기
분류: 건물 세우기
난이도: 중급
workspace: 3D 건설
keywords: 벽 나누기, 벽 자동 나누기, 세트백 벽, 옥상 벽, 벽 높이, 위층 바닥까지, 지붕에 붙음, 바깥벽, 벽나누기, 벽 분할, 벽 자르기, 경계에서 벽 나누기
commands: buildFlow, levelOutline, wallSplit, wall, roof
context: wallSplit
order: 50
---

## 무엇

한 변의 바깥벽이 일부는 위층 아래에, 일부는 옥상 아래에 걸치면 건물 세우기가 그 경계에서 벽을 자동으로 나눕니다. 위층 아래 조각은 위층 바닥까지 올라가고, 옥상 아래 조각은 그 지붕의 아랫면에 붙습니다. 손으로 그린 벽은 {c:wallSplit}로 직접 나눕니다.

## 하는 순서

1. 20 × 10 m 건물 외곽선에 {t:ab.easy}로 3층 건물을 세웁니다.
2. {c:buildFlow} 창의 {t:fl.step.levels} 단계 {t:ab.detailed}에서 3층의 외곽선 단추를 누릅니다.
3. 외곽선 도구에서 한쪽 짧은 변을 맞추어 3층을 12 × 10 m로 좁게 그립니다.
4. 외곽선을 끝내면 2층의 긴 변 벽이 3층 아래 조각(12 m)과 옥상 아래 조각(8 m)으로 나뉘어 다시 만들어집니다.
5. 나뉜 벽을 하나씩 선택해 속성 창의 {t:flow.props}을 봅니다. 3층 아래 조각은 {t:flow.top}이 3층이고, 옥상 아래 조각은 {t:flow.props.attach}에 지붕이 나옵니다.
6. 2층의 {t:aw.roofOffset}를 바꾸면 옥상 아래 조각만 지붕을 따라 움직입니다.

## 팁

- 벽 하나는 위쪽 규칙 하나만 가지므로, 위층 바닥까지 가는 부분과 지붕을 따라가는 부분을 다른 벽으로 나눕니다.
- 0.3 m보다 짧은 조각은 따로 만들지 않고 옆 조각에 합칩니다.
- 곡선 변은 곡선 벽 하나로 만들고, 경계에서 나뉘면 조각마다 매끄러운 곡선 벽이 됩니다.
- 3층을 긴 방향의 가운데에만 두면 2층의 긴 변 벽은 옥상·3층·옥상 세 조각이 됩니다.
- 손으로 그린 벽은 {m:wallSplit}로 누른 자리에서 둘로 나눈 뒤, 조각마다 위쪽을 따로 정합니다. 누를 때마다 그 자리에서 나뉘고 Esc로 마칩니다: [벽 위쪽 맞추기](help:arch-wall-top).
- {m:roof}으로 지붕을 직접 만들 때 {t:aw.splitWalls}를 켜 두면(처음에 켜져 있습니다) 지붕 경계에 걸친 벽을 경계에서 나누고 지붕 아래 조각만 지붕에 붙입니다.
- 손으로 그린 벽이 건물 세우기가 만든 옥상 아래에 완전히 들어가 있으면 그 지붕에 자동으로 붙습니다.

## 자주 하는 실수

- 손으로 그린 벽은 옥상 경계에 걸쳐도 자동으로 나뉘지 않습니다. 필요하면 {c:wallSplit}로 직접 나눕니다.
- 손으로 벽을 그린 층에는 바깥벽이 자동으로 생기지 않고 지붕만 생깁니다.
- 나뉜 자동 벽 가운데 하나를 삭제하면 다음에 그 층을 적용해도 그 자리에는 벽이 다시 생기지 않습니다. 다시 세우려면 [외벽 세우기](help:build-outer-walls)나 {m:wall}으로 그립니다.
- 곡선 벽, 닫힌 벽, 높이가 바뀌는 벽, 연결 복사한 벽은 {c:wallSplit}로 나눌 수 없고, 벽 끝에서 0.1 m 안쪽은 나눌 수 없습니다.
- {c:wallSplit}가 메뉴에 없습니다. 고급 메뉴에만 있으므로 메뉴 줄 오른쪽에서 {t:level.advanced}을 선택합니다: [일반·고급 메뉴](help:start-level).
`,xt=`---
id: brec-atrium
title: 여러 층이 트인 아트리움
분류: 건물 예제
난이도: 심화
workspace: 3D 건설
keywords: 아트리움, 보이드, 오픈 천장, 여러 층 트인 공간, 바닥판 구멍, 바닥 구멍, 높은 벽, 세 층 높이 벽, 두 층 높이, 로비, 홀, 난간, 중정, 예제, 따라하기
commands: buildingOutline, buildFlow, levelOutline, outerWalls, wall, railing
order: 70
---

## 무엇

24 × 18 m 4층 건물의 2층과 3층 바닥판에 8 × 6 m 구멍을 뚫어, 1층부터 4층 바닥까지 세 층이 트인 아트리움을 만듭니다. 구멍 둘레에는 벽 대신 난간을 세우고, 아트리움 안에는 1층에서 4층 바닥까지 올라가는 높은 벽을 하나 세웁니다. {t:ab.easy}를 쓰지 않고 {t:ab.detailed}로 지으므로 벽이 저절로 생기지 않아, 구멍 둘레에 안쪽 벽이 서지 않습니다.

## 하는 순서

1. {m:buildingOutline}으로 24 × 18 m 건물 외곽선을 그립니다 ({t:opt.areaRect}, 첫 구석을 찍고 \`@24,18\`). 건물이 생깁니다.
2. {c:buildFlow} 창의 {t:fl.step.levels} 단계에서 {t:ab.detailed}를 선택하고, {t:aw.more}를 펼쳐 {t:bnew.above} \`4\`, {t:bnew.height} \`3\`을 넣은 뒤 {t:fl.planApply}을 누릅니다.
3. {t:fl.step.outlines} 단계에서 {t:ca.outlinesFromShape}을 누릅니다. 이어서 {t:ab.detailed}의 {t:cmd.outerWalls}를 누르고 {t:ow.mode.all}와 {t:ec.allLevels}을 선택한 뒤 {t:ew.build}를 누릅니다.
4. {c:levelPanel}에서 2층 행의 외곽선 단추를 누릅니다. 외곽선 도구에서 {t:ol.mode.draw}를 누르고 {t:aw.ring.hole}과 {t:ol.shape.rect}을 선택합니다.
5. Ctrl 키를 누른 채 오른쪽 클릭해 {t:osnap.aid.from}를 선택하고, 건물 외곽선의 첫 구석과 같은 외곽선 모서리를 클릭한 뒤 \`@8,6\`, 이어서 \`@8,6\`을 입력합니다. 2층 바닥판에 8 × 6 m 구멍이 뚫립니다.
6. 3층 행의 외곽선 단추를 누르고 4~5와 같은 방법으로 같은 자리에 구멍을 뚫습니다.
7. 2층에서 {m:railing}을 누르고 {t:stairs.railHow.edge}를 선택한 뒤 구멍의 네 모서리를 차례로 클릭하고 Enter를 누릅니다. 3층에서도 같은 방법으로 난간을 세웁니다.
8. 1층에서 {m:wall}을 누르고 {t:flow.top}을 {t:flow.top.toFloor}, {t:flow.topLevel}을 4층으로 정합니다. {t:osnap.aid.from}로 같은 모서리에서 \`@9,9\`를 찍고 \`@6,0\`을 입력해 아트리움 가운데를 가로지르는 6 m 벽을 그리고 Enter로 마칩니다.

## 팁

- 8의 벽은 1층 바닥에서 4층 바닥판 아랫면까지 8.8 m로 섭니다. 2층·3층 바닥판은 구멍이 뚫려 있어 벽을 막지 않습니다. 층고를 바꾸면 벽 높이도 따라 바뀝니다: [벽 위쪽 맞추기](help:arch-wall-top).
- 3의 바깥벽은 {m:outerWalls}로 세운 보통 벽입니다. 바깥 면이 건물 외곽선 위에 맞고 위층 바닥까지 섭니다: [외벽 세우기](help:build-outer-walls).
- {t:ab.easy}로 세운 건물에 그린 중정은 둘레에 안쪽 벽이 섭니다. 이 건물은 {t:ab.detailed}으로만 지었으므로 구멍만 뚫립니다: [중정](help:build-courtyard).
- 2층·3층의 구멍은 1층과 4층이 덮으므로 건축면적은 24 × 18 m, 432 m² 그대로입니다.
- 지붕은 {c:buildFlow} 창의 {t:fl.step.roof} 단계에서 {t:fl.roofTop}을 누르고 {t:opt.roofFlat}을 선택한 뒤 Enter를 누릅니다.
- 계단을 놓으면 위층 바닥판에 계단 크기만큼 구멍이 저절로 뚫립니다: [계단](help:arch-stair).
- 기준점 입력은 [기준점에서](help:snap-from)를 봅니다.

## 자주 하는 실수

- {t:ab.easy}로 세운 건물에서 구멍을 그리면 둘레에 안쪽 벽이 섭니다. 아트리움은 이 순서처럼 {t:ab.detailed}로 짓는 건물에서 만듭니다.
- 2층과 3층의 구멍 자리가 다르면 아트리움이 이어지지 않습니다. 두 층 모두 같은 모서리에서 같은 간격으로 찍습니다.
- 8에서 {t:flow.topLevel}을 2층으로 두면 벽이 한 층 높이로만 섭니다. 4층을 선택합니다.
- 난간은 작업 층의 바닥판 모서리만 선택할 수 있습니다. 난간을 세울 층을 먼저 작업 층으로 선택합니다.
`,St=`---
id: brec-courtyard-house
title: 중정 주택
분류: 건물 예제
난이도: 중급
workspace: 3D 건설
keywords: 중정 주택, 중정, ㅁ자 집, ㅁ자 건물, 안마당, 마당 있는 집, 한옥 마당, 가운데 마당, 안쪽 벽, 중정 그리기, 예제, 따라하기, 미음자
commands: buildingEasy, buildFlow, levelOutline, door
order: 40
---

## 무엇

18 × 18 m 2층 주택 가운데에 하늘이 보이는 8 × 8 m 중정을 둡니다. 건물은 {t:ab.easy}로 세우고, {t:ab.detailed}의 외곽선 도구로 1층과 2층에 같은 자리의 중정을 그립니다. 중정 둘레에는 안쪽 벽이 자동으로 서고, 바닥판에는 구멍이 뚫리며, 옥상은 중정을 둘러싼 여러 조각의 평지붕이 됩니다.

## 하는 순서

1. {m:buildingEasy} 창의 순서를 따라 {t:aw.drawOutline}를 누릅니다. {t:opt.areaRect}으로 첫 구석을 찍고 \`@18,18\`을 입력합니다.
2. {t:bnew.above} \`2\`, {t:bnew.below} \`0\`, {t:bnew.height} \`3\`을 넣고 {t:aw.easyGo}를 누릅니다.
3. {c:buildFlow} 창의 {t:fl.step.levels} 단계에서 {t:ab.detailed}를 선택하고, 1층 행의 외곽선 단추를 누릅니다.
4. 외곽선 도구에서 {t:ol.mode.draw}를 누르고, {t:aw.ring.hole}과 {t:ol.shape.rect}을 선택합니다.
5. 3D 화면에서 Ctrl 키를 누른 채 오른쪽 클릭해 {t:osnap.aid.from}를 선택하고, 건물 외곽선의 첫 구석과 같은 외곽선 모서리를 클릭한 뒤 \`@5,5\`를 입력합니다. 중정의 첫 구석이 찍힙니다.
6. 명령줄에 \`@8,8\`을 입력합니다. 중정이 그려지고 바로 적용되어 안쪽 벽 네 개가 서고 1층 바닥판에 구멍이 뚫립니다.
7. 2층 행의 외곽선 단추를 누르고 4~6과 같은 방법으로 같은 자리에 중정을 그립니다.
8. {m:door}으로 중정 쪽 안쪽 벽에 문을 끼워 마당으로 나가는 길을 만듭니다.

## 팁

- 중정을 다시 그리려면 외곽선 도구의 {t:aw.courtClear}를 누르고 새로 그립니다.
- 2층 옥상은 중정을 피해 여러 조각의 평지붕으로 생깁니다. 옥상 가장자리에는 [난간](help:arch-railing)을 세웁니다.
- {t:ceil.build}가 켜져 있으면 천장도 중정을 피해 생깁니다.
- 건축면적에는 중정이 들어가지 않습니다. 18 × 18 m에서 8 × 8 m를 뺀 260 m²입니다.
- 1층에만 중정을 그리면 2층 바닥이 그 위를 덮는 실내 마당이 됩니다. 2층에만 그리면 2층 아래 1층 지붕이 마당 바닥이 됩니다.
- 한쪽이 트인 마당은 건물 외곽선을 ㄷ자로 그려 만듭니다: [ㄷ자 건물](help:brec-u-shape).
- 기준점 입력은 [기준점에서](help:snap-from)를 봅니다. 중정 규칙은 [중정](help:build-courtyard)에 있습니다.

## 자주 하는 실수

- 2층에 중정을 그리지 않으면 하늘이 보이지 않습니다. 위층마다 같은 자리에 그립니다.
- {t:aw.useBelow}은 바깥 외곽선만 받고 중정은 받지 않습니다.
- 중정이 외곽선에 닿거나 밖으로 나가면 외곽선 안쪽 부분만 중정이 됩니다. 사방에 벽이 설 자리를 남깁니다.
- 중정을 그리기 전에 넣은 문·창은 외곽선을 고칠 때 자동 벽과 함께 삭제될 수 있습니다. 중정을 먼저 그립니다.
`,Ct=`---
id: brec-curved-site
title: 곡선 대지 위 건물
분류: 건물 예제
난이도: 중급
workspace: 3D 건설
keywords: 곡선 대지, 곡선 건물 외곽선, 건축 면적, 둥근 건물, 곡선 건물, 반원 건물, 아치 모양, 곡선 벽, 둥근 벽, 누른 채 끌기, 곡선 편집, 예제, 따라하기, 커브
commands: buildingEasy, buildingOutline, siteArea, pathEdit
order: 80
---

## 무엇

한쪽은 곧은 18 m 변이고 반대쪽은 둥근 아치인 건물 외곽선을 그리고, 그 위에 {c:buildingEasy}로 2층 건물을 세웁니다. 건물 외곽선의 곡선은 모든 층의 외곽선에 그대로 들어가고, 곡선 변마다 매끄러운 곡선 벽 하나가 생깁니다. 바닥판과 평지붕도 곡선 모양을 따릅니다.

## 하는 순서

1. {m:buildingEasy} 단추를 누릅니다. 대지가 있으면 {t:bo.site} 목록에서 40 × 30 m 정도의 대지를 선택하고, 없으면 땅 전체에 짓습니다.
2. {t:aw.drawOutline}를 누르고, 건물 외곽선 도구에서 {t:opt.areaPoly}을 선택합니다.
3. 빈 곳을 클릭해 첫 점을 찍고, 명령줄에 \`@18,0\`을 입력합니다.
4. 두 점의 가운데 위쪽으로 약 8 m 떨어진 곳에서 마우스를 누른 채 0.5초 기다린 뒤 왼쪽으로 끌었다가 놓습니다. 부드러운 곡선 점이 생겨 아치 모양이 됩니다.
5. 첫 점을 클릭해 닫습니다. 건물이 생기고 {c:buildingEasy} 창이 다시 열립니다.
6. {t:bnew.above} \`2\`, {t:bnew.below} \`0\`, {t:bnew.height} \`3\`을 넣고 {t:aw.easyGo}를 누릅니다.
7. 층마다 곧은 벽 하나와 아치를 따라가는 곡선 벽 하나, 곡선 모양 바닥판이 생기고, 맨 위에 같은 모양의 평지붕이 얹힙니다.

## 팁

- 대지도 같은 방법으로 곡선 변을 넣어 그릴 수 있습니다. {t:opt.areaPoly}에서 점을 찍을 때 누른 채 0.5초 기다렸다가 끌면 곡선 점이 됩니다.
- 곡선이 마음에 들지 않으면 세우기 전에 건물 외곽선을 선택해 {c:pathEdit}으로 점과 핸들을 고칩니다: [곡선 편집](help:obj-curve-edit), [건물 외곽선](help:build-outline).
- 곡선 점을 만들 때 끄는 방향과 길이가 곡선의 휘는 정도를 정합니다. 끄는 중 Shift를 누르면 45° 단위로 맞춰집니다.
- 위층만 다른 모양으로 하려면 [층마다](help:build-detailed)에서 그 층의 외곽선을 고칩니다.
- 맨 위의 평지붕도 곡선 외곽선을 따라 생깁니다: [자동 옥상과 옥상 높이](help:build-auto-roof).

## 자주 하는 실수

- 첫 점은 곡선 점이 되지 않습니다. 첫 점은 클릭으로 찍고, 둘째 점부터 누른 채 0.5초 기다렸다가 끌어 곡선을 만듭니다.
- 곡선 건물 외곽선이 다른 건물의 외곽선과 겹치면 만들어지지 않습니다. 떨어뜨리거나 맞닿게만 그립니다.
- 곡선 벽은 {c:wallSplit}로 나눌 수 없습니다.
- 끌지 않고 클릭만 하거나 누르자마자 끌면 꺾인 점이 되어 삼각형이 됩니다. 마우스를 누른 채 0.5초 기다린 뒤 움직이고 놓습니다.
`,wt=`---
id: brec-piloti-overhang
title: ③ 1층 필로티 + 위층 돌출
분류: 건물 예제
난이도: 중급
workspace: 3D 건설
keywords: 필로티, 1층 필로티, 돌출, 위층 돌출, 내민 건물, 캔틸레버, 주차장 건물, 기둥, 줄이기, 필로티 건물, 예제, 따라하기
commands: buildingEasy, buildFlow, levelOutline, column
order: 30
---

## 무엇

23 × 13 m 건물 외곽선에 2층 건물을 세운 뒤, 1층을 사방으로 1.5 m씩 줄여 기둥만 있는 20 × 10 m 필로티로 바꿉니다. 2층은 23 × 13 m 그대로 남아 1층보다 튀어나옵니다. 1층 기둥은 1층 외곽선을 따라 서고, 2층의 아랫면은 2층 바닥판이 덮는 돌출 아랫면이 됩니다. 층 외곽선은 건물 외곽선 밖으로 나갈 수 없으므로, 건물 외곽선은 가장 넓은 층에 맞춰 그립니다.

## 하는 순서

1. {m:buildingEasy} 창의 순서를 따라 {t:aw.drawOutline}를 누르고, 건물 외곽선 도구에서 {t:opt.areaRect}으로 첫 구석을 찍은 뒤 \`@23,13\`을 입력합니다.
2. {t:bnew.above} \`2\`, {t:bnew.below} \`0\`, {t:bnew.height} \`3\`을 넣고 {t:aw.easyGo}를 누릅니다.
3. {c:buildFlow} 창의 {t:fl.step.levels} 단계에서 {t:ab.detailed}를 선택합니다.
4. 1층 행의 외곽선 단추를 눌러 외곽선 도구를 엽니다. {t:ol.offset}에 \`1.5\`를 넣고 {t:ol.shrink}를 누릅니다. 1층이 20 × 10 m가 되고 바로 적용됩니다.
5. 1층 행의 {t:ab.kind}에서 {t:ab.kind.piloti}를 선택합니다. 1층 바깥벽이 삭제되고 기둥 12개가 섭니다.
6. 1층 행 아래의 {t:ab.columnSpacing}, {t:aw.pilotiSize}, {t:aw.square}·{t:aw.round} 선택으로 기둥을 다듬습니다.

## 팁

- 2층을 한쪽으로만 내밀려면 건물 외곽선을 그쪽으로만 넓게 그리고, 1층 외곽선을 {t:ol.mode.draw}로 새 사각형을 그려 정합니다.
- 건축면적은 필로티 층과 튀어나온 2층을 합친 23 × 13 m, 299 m²로 계산됩니다: [건물 외곽선](help:build-outline).
- 층을 더 올리려면 {m:levelAdd}를 누릅니다. 새 층은 2층 외곽선을 받아 벽과 지붕이 함께 생깁니다.
- 필로티 층의 바닥판은 그대로 남아 열린 바닥이 됩니다. 주차 칸이나 조경은 [가구·조경·물체 라이브러리](help:arch-furniture)에서 놓습니다.
- 필로티 층에는 지붕과 천장이 생기지 않고, 2층 아랫면 전체가 돌출 아랫면이 됩니다: [자동 옥상과 옥상 높이](help:build-auto-roof).
- 필로티 설정: [필로티](help:build-piloti).

## 자주 하는 실수

- 건물 외곽선을 20 × 10 m로 그리고 2층 외곽선을 넓히면, 2층 외곽선이 건물 외곽선 밖으로 나갈 수 없어 잘립니다. 건물 외곽선을 가장 넓은 2층 크기로 그립니다.
- {t:ol.shrink}는 모든 변을 함께 이동합니다. 한쪽만 줄이려면 점을 이동하거나 새로 그립니다.
- 1층을 {t:ab.kind.piloti}로 바꾸기 전에 1층 바깥벽에 문·창을 넣었다면 그 문·창은 벽과 함께 삭제됩니다.
- 1층 대신 2층을 {t:ab.kind.piloti}로 바꾸면 2층이 기둥만 남은 열린 층이 됩니다. 종류는 기둥만 세울 층의 행에서 선택합니다.
`,Tt=`---
id: brec-setback
title: ② 3층만 좁게
분류: 건물 예제
난이도: 중급
workspace: 3D 건설
keywords: 세트백, 3층만 좁게, 위층 좁게, 옥상, 테라스, 계단식 건물, 옥상 높이, 벽 나누기, 고급, 예제, 따라하기, 셋백
commands: buildingEasy, buildFlow, levelOutline, buildingOutline
order: 20
---

## 무엇

20 × 10 m 3층 건물을 {t:ab.easy}로 세운 뒤 3층만 12 × 10 m로 좁힙니다. 3층이 덮지 않는 2층 윗면 8 × 10 m에 옥상 평지붕이 자동으로 생기고, 2층의 긴 변 벽은 3층 아래와 옥상 아래에서 자동으로 나뉩니다.

## 하는 순서

1. {m:buildingEasy} 창의 순서를 따라 {t:aw.drawOutline}를 누릅니다. 건물 외곽선 도구에서 {t:opt.areaRect}으로 첫 구석을 찍고 \`@20,10\`을 입력합니다.
2. 창이 다시 열리면 {t:bnew.above} \`3\`, {t:bnew.below} \`0\`, {t:bnew.height} \`3\`을 넣고 {t:aw.easyGo}를 누릅니다.
3. {c:buildFlow} 창의 {t:fl.step.levels} 단계에서 {t:ab.detailed}를 선택하고, 3층 행의 외곽선 단추를 누릅니다.
4. 외곽선 도구에서 {t:ol.mode.draw}를 누르고 {t:ol.shape.rect}을 선택합니다.
5. 점선으로 보이는 2층 외곽선에서 건물 외곽선의 첫 구석과 같은 모서리를 누르고, 명령줄에 \`@12,10\`을 입력합니다.
6. 사각형이 끝나면 바로 적용되어 2층 위에 8 × 10 m 옥상 지붕이 생기고, 2층의 긴 변 벽이 두 조각씩으로 나뉩니다.
7. 2층 행의 {t:aw.roofOffset}에 \`-0.1\`을 넣으면 옥상 윗면이 3층 바닥보다 0.1 m 낮아집니다.

## 팁

- 옥상 지붕을 선택해도 속성 창에 {t:aw.roofOffset}가 나옵니다.
- 3층을 사방으로 고르게 좁히려면 3층 외곽선 도구에서 {t:ol.offset}를 정하고 {t:ol.shrink}를 누릅니다. 이때 옥상은 3층 둘레를 도는 모양이라 여러 조각으로 나뉘고, 2층 벽은 모두 옥상 아래 벽이 됩니다.
- 위로 갈수록 좁아지는 건물은 층마다 같은 방법으로 외곽선을 줄입니다: [위로 갈수록 좁아지는 탑](help:brec-stepped-tower).
- 옥상 가장자리의 난간은 [난간](help:arch-railing)을 봅니다.
- 규칙 설명: [자동 옥상과 옥상 높이](help:build-auto-roof), [벽 자동 나누기](help:build-wall-split).
- 건축면적은 지상층을 합친 모양이므로 3층을 좁혀도 200 m² 그대로입니다: [건물 외곽선](help:build-outline).

## 자주 하는 실수

- 3층 외곽선을 2층 외곽선과 몇 mm 어긋나게 그리면 아주 좁은 옥상 조각이 생기거나 버려집니다. 첫 구석은 2층 외곽선의 모서리에 붙여 찍습니다.
- {t:aw.roofOffset}는 3층 행이 아니라 옥상이 생긴 2층 행에 있습니다.
- {t:ol.mode.edit}로 점을 하나씩 이동해도 되지만, 점을 이동할 때마다 바로 적용되어 중간 모양에서도 벽과 지붕이 다시 만들어집니다.
- 3층에 문·창을 먼저 넣고 외곽선을 바꾸면 그 문·창은 3층의 자동 벽과 함께 삭제될 수 있습니다.
`,Et=`---
id: brec-small-house
title: 벽부터 그리는 작은 집
분류: 건물 예제
난이도: 기초
workspace: 3D 건설
keywords: 작은 집, 집 짓기, 벽부터, 벽 그리기, 단층집, 오두막, 박공지붕, 문 달기, 창 달기, 바닥판, 손으로 그리기, 예제, 따라하기, 집 만들기, 처음 건물
commands: wall, slabAuto, door, window, roof
order: 100
---

## 무엇

건물 세우기를 쓰지 않고 벽을 한 장씩 그려 8 × 6 m 단층집을 짓습니다. 벽 네 개를 닫힌 모양으로 그리고, 그 아래에 바닥판을 깔고, 문과 창을 끼운 뒤 박공지붕을 얹습니다. 부재 하나하나가 어떻게 이어지는지 익히기에 좋습니다.

## 하는 순서

1. 새 문서의 3D 건설에서 시작합니다. 상태 표시줄의 경로가 1층을 가리키는지 확인합니다.
2. {m:wall} 단추를 누르고, 바닥의 빈 곳을 클릭해 첫 점을 찍습니다.
3. 명령줄에 \`@8,0\`, \`@0,6\`, \`@-8,0\`을 하나씩 입력하고 그때마다 Enter를 누릅니다.
4. 첫 점을 다시 클릭해 벽 네 개를 닫고, Esc를 눌러 도구를 닫습니다.
5. {m:slabAuto} 단추를 누르고 Enter를 누르면 닫힌 벽 아래에 바닥판이 깔립니다.
6. {m:door} 단추를 누르고 {t:preset.door.single}을 선택한 뒤 8 m 벽의 가운데를 클릭합니다. Esc로 도구를 닫습니다.
7. {m:window} 단추를 누르고 {t:preset.window.single}을 선택한 뒤 다른 벽들을 클릭해 창을 끼웁니다. Esc로 도구를 닫습니다.
8. {m:roof} 단추를 누르고 벽을 클릭한 뒤 {t:opt.roofGable}을 선택하고 Enter를 누릅니다. 짧은 변의 벽은 지붕 아랫면을 따라 삼각형으로 올라갑니다.

## 팁

- 벽은 처음에 두께 0.2 m이고, 위층이 없으므로 높이는 층고(3 m)와 같습니다. 지붕의 처마도 1층 바닥 + 층고에 놓입니다.
- 방을 나누려면 {c:wall}으로 안쪽 벽을 더 그립니다. 벽 끝은 다른 벽에 붙어 저절로 이어집니다: [벽](help:arch-wall).
- {t:opt.roofPitch}(기본 30°)와 {t:opt.overhang}(기본 0.5 m)는 지붕 도구 창에서 바꿉니다: [지붕](help:arch-roof).
- 지형이 있는 땅에서는 첫 벽을 놓기 전에 1층 바닥 높이를 묻는 창이 먼저 열립니다. 추천 높이를 선택하고 {t:base.ok}를 누릅니다.
- 2층을 올리려면 {m:levelAdd}를 누르고 2층에서 같은 방법으로 벽을 그립니다. 위층이 있는 층에 그린 벽은 위층 바닥까지 올라가므로, 층을 먼저 만들고 벽을 그리면 편합니다: [층](help:arch-levels).
- 벽을 손으로 그린 건물은 건물 세우기의 {t:ab.easy}로 다시 세울 수 없습니다. 층 수가 많은 건물은 [건물 바로 세우기](help:build-easy)가 빠릅니다.
- {c:buildFlow} 창을 열면 이 집이 12단계 가운데 어디까지 왔는지 보입니다: [건설 진행 상황](help:arch-flow).

## 자주 하는 실수

- 마지막에 첫 점을 정확히 누르지 않아 벽이 닫히지 않으면 {c:slabAuto} 도구가 닫힌 벽을 찾지 못합니다. 창의 {t:opt.closedWalls} 값이 0이면 벽 끝을 이어 다시 그립니다.
- 좌표에 mm 값을 넣는 실수가 많습니다. \`@8000,0\`이 아니라 \`@8,0\`입니다.
- 닫히지 않은 벽 하나를 클릭해 지붕을 만들면 그 벽 하나의 둘레 사각형만 잡힙니다. 벽을 닫거나 바닥판을 클릭합니다.
- 문·창을 바닥에 놓으면 벽에 구멍이 나지 않습니다. 벽 면 위를 클릭합니다.
`,Dt=`---
id: brec-stepped-tower
title: 위로 갈수록 좁아지는 탑
분류: 건물 예제
난이도: 중급
workspace: 3D 건설
keywords: 탑, 계단식 탑, 위로 갈수록 좁아지는 건물, 피라미드 건물, 세트백, 층마다 줄이기, 줄이기, 옥상 테라스, 옥탑, 고급, 지구라트, 예제, 따라하기
commands: buildingEasy, buildFlow, levelOutline
order: 90
---

## 무엇

20 × 20 m 4층 건물을 {t:ab.easy}로 세운 뒤, {t:ab.detailed}에서 2층부터 한 층 올라갈 때마다 사방을 2 m씩 줄여 20 → 16 → 12 → 8 m 크기의 탑을 만듭니다. 층마다 위층이 덮지 않는 테두리에 옥상 평지붕이 자동으로 생기고, 바깥벽은 위층 아래와 옥상 아래에서 자동으로 나뉩니다.

## 하는 순서

1. {m:buildingEasy} 창의 순서를 따라 {t:aw.drawOutline}를 누르고, {t:opt.areaRect}으로 첫 구석을 찍은 뒤 \`@20,20\`을 입력해 건물 외곽선을 그립니다. {t:bnew.above} \`4\`, {t:bnew.below} \`0\`, {t:bnew.height} \`3\`으로 세웁니다.
2. {c:buildFlow} 창의 {t:fl.step.levels} 단계에서 {t:ab.detailed}를 선택합니다. 층은 4층부터 나옵니다.
3. 4층 행의 외곽선 단추를 누르고, 외곽선 도구의 {t:ol.offset}에 \`6\`을 넣은 뒤 {t:ol.shrink}를 누릅니다. 4층이 8 × 8 m가 됩니다.
4. 3층 행의 외곽선 단추를 누르고 {t:ol.offset}에 \`4\`를 넣은 뒤 {t:ol.shrink}를 누릅니다. 3층이 12 × 12 m가 됩니다.
5. 2층 행의 외곽선 단추를 누르고 {t:ol.offset}에 \`2\`를 넣은 뒤 {t:ol.shrink}를 누릅니다. 2층이 16 × 16 m가 됩니다.
6. 4층 행의 {t:ab.kind}에서 {t:ab.kind.rooftop}을 선택하고, Esc를 눌러 외곽선 도구를 닫습니다.
7. 1층·2층·3층 위에 폭 2 m의 옥상 테두리가 여러 조각의 평지붕으로 생기고, 4층 위에 8 × 8 m 지붕이 얹힌 것을 확인합니다.

## 팁

- 테라스 바닥을 조금 낮추려면 1층·2층·3층 행의 {t:aw.roofOffset}에 \`-0.1\`처럼 넣습니다: [자동 옥상과 옥상 높이](help:build-auto-roof).
- 줄이는 거리를 층마다 다르게 하면 테라스 폭이 달라집니다. 한쪽으로만 물러나게 하려면 {t:ol.mode.draw}로 새 사각형을 그립니다: [3층만 좁게](help:brec-setback).
- {t:ab.kind.rooftop}은 이름만 다르고 부재는 {t:ab.kind.normal}과 같습니다.
- 테라스 가장자리에는 [난간](help:arch-railing)을 세웁니다.
- 벽이 위층 아래와 옥상 아래에서 어떻게 나뉘는지는 [벽 자동 나누기](help:build-wall-split)를 봅니다.

## 자주 하는 실수

- {t:ol.offset}는 외곽선 도구를 열 때마다 0.5 m로 돌아갑니다. 층마다 값을 다시 넣습니다.
- 줄이기는 모든 변을 함께 이동하므로 2 m를 넣으면 가로·세로가 각각 4 m씩 줄어듭니다.
- 위층에서 {t:aw.useBelow}을 누르면 아래층 모양으로 되돌아갑니다. 줄인 뒤에는 누르지 않습니다.
- 줄이는 거리가 너무 커서 모양이 뒤집히면 바뀌지 않고 알림이 나옵니다. 20 m 층은 10 m보다 작게 줄입니다.
`,Ot=`---
id: brec-terraced-slope
title: 경사지 계단식 건물
분류: 건물 예제
난이도: 심화
workspace: 3D 건설
keywords: 경사지, 비탈, 언덕, 계단식 건물, 단차, 높이가 다른 땅, 평탄화 높이, 대지 두 개, 옹벽, 깎기 비탈, 채우기 비탈, 테라스 하우스, 산비탈 건물, 예제, 따라하기
commands: buildingEasy, grade, siteArea, buildingOutline, retainingWall
order: 60
---

## 무엇

비탈진 땅에 두 건물을 한 층 높이씩 차이 나게 계단처럼 앉힙니다. 평탄화는 대지마다 한 높이로 정해지므로, 아래쪽과 위쪽에 대지를 하나씩 그리고 대지마다 다른 높이로 평탄화합니다. 각 건물의 1층 바닥은 그 대지의 평탄화 높이를 따르고, 높이 차이가 나는 경계에는 옹벽을 세웁니다.

## 하는 순서

1. 지형이 있는 비탈에서 시작합니다 ([건설 지역](help:site-map)). {m:siteArea}로 비탈 아래쪽에 24 × 16 m 대지 1을, 그보다 2 m 이상 떨어진 위쪽에 같은 크기의 대지 2를 그립니다.
2. {m:buildingEasy} 단추를 누르고 {t:bo.site} 목록에서 대지 1을 선택한 뒤 {t:bo.grade}를 누릅니다.
3. 평탄화 도구에서 {t:grade.balance}을 누르고, {t:grade.more}를 펼쳐 {t:grade.cut}을 \`0\`으로 정한 뒤 Enter로 적용합니다. 평탄화 도구 창을 닫으면 건물 창이 다시 열립니다.
4. {t:aw.drawOutline}를 누르고 대지 1 안에 20 × 12 m 건물 외곽선을 그린 뒤, {t:bnew.above} \`2\`, {t:bnew.height} \`3\`으로 {t:aw.easyGo}를 누릅니다.
5. {m:buildingEasy}를 다시 누르고 {t:bo.site} 목록에서 대지 2를 선택한 뒤 {t:bo.grade}를 누릅니다.
6. 평탄화 도구에서 {t:grade.height}를 대지 1보다 3 m 높게 넣고, {t:grade.more}에서 {t:grade.fill}을 \`0\`으로 정한 뒤 Enter로 적용하고 창을 닫습니다.
7. {t:aw.drawOutline}를 누르고 대지 2 안에 20 × 12 m 건물 외곽선을 그린 뒤 같은 값으로 {t:aw.easyGo}를 누릅니다. 두 번째 건물의 1층 바닥이 첫 건물의 2층 바닥 높이에 놓입니다.
8. {m:retainingWall}으로 대지 1의 위쪽 경계와 대지 2의 아래쪽 경계를 따라 옹벽을 하나씩 세웁니다. 흙 쪽이 반대이면 그리는 동안 {t:civil.x.flip}를 누릅니다.

## 팁

- 대지를 겹치거나 맞닿게 그리면 하나로 합쳐집니다. 대지 사이를 띄워 그립니다.
- 비탈 값 \`0\`은 수직 단을 만듭니다. 아래쪽 대지는 비탈 위쪽을 깎으므로 {t:grade.cut}을, 위쪽 대지는 비탈 아래쪽을 채우므로 {t:grade.fill}을 0으로 둡니다: [평탄화](help:site-grade).
- 1층 바닥 높이는 [건설 진행 상황](help:arch-flow)의 {t:fl.step.base} 단계에서 확인하고 다시 정할 수 있습니다. 평탄화를 따르는 건물은 평탄화 높이를 바꾸면 함께 움직입니다.
- 옹벽의 형식과 두께는 [옹벽](help:civil-retaining)을 봅니다. 땅을 깎은 깊이보다 기초 깊이를 크게 정합니다.
- 두 건물 사이를 오가는 길은 [계단](help:arch-stair)이나 [도로](help:civil-road)로 잇습니다.

## 자주 하는 실수

- 한 대지 안에 건물 외곽선을 둘 그리면 두 건물이 같은 평탄화 높이에 놓입니다. 높이를 달리하려면 대지를 나눠 그립니다.
- 지형이 없는 평평한 땅에서는 평탄화 단계가 없고 두 건물이 같은 높이에 섭니다. 먼저 [건설 지역](help:site-map)에서 지형을 가져옵니다.
- {c:retainingWall}은 땅 모양을 바꾸지 않습니다. 높이 차이는 평탄화로 먼저 만듭니다.
- {c:retainingWall}이 메뉴에 없으면 메뉴 줄 오른쪽에서 {t:level.advanced}을 선택합니다.
`,kt=`---
id: brec-two-buildings
title: 붙은 건물 둘
분류: 건물 예제
난이도: 심화
workspace: 3D 건설
keywords: 건물 둘, 건물 두 개, 두 동, 별동, 붙은 건물, 맞붙은 건물, 맞닿은 건물, 본관 별관, 경계벽, 공용 벽, 층 같이 씀, 건물 A 건물 B, 예제, 따라하기
commands: buildingOutline, buildingEasy, buildFlow, levelPanel
order: 50
---

## 무엇

외곽선이 맞닿은 3층 건물 둘을 나란히 세웁니다. 건물 A는 왼쪽 14 × 12 m, 건물 B는 오른쪽 10 × 12 m를 차지합니다. 같은 대지에서 외곽선이 맞닿은 건물은 붙은 건물이 되어, 바닥 높이가 같은 층끼리 서로 덮고 받칩니다. {c:levelPanel}에는 두 건물이 한 행씩 따로 나옵니다.

## 하는 순서

1. {m:buildingOutline}을 누르고 {t:opt.areaRect}으로 첫 구석을 찍은 뒤 \`@14,12\`를 입력합니다. 건물 A가 생깁니다.
2. 다시 {m:buildingOutline}을 누르고, 건물 A 외곽선의 오른쪽 아래 구석을 클릭한 뒤 \`@10,12\`를 입력합니다. 건물 A에 맞닿은 건물 B가 생깁니다.
3. {m:buildingEasy}를 누르고 {t:bo.outlinePick} 목록에서 건물 A를 선택합니다. {t:bnew.above} \`3\`, {t:bnew.below} \`0\`, {t:bnew.height} \`3\`을 넣고 {t:aw.easyGo}를 누릅니다.
4. {m:buildingEasy}를 다시 열고 {t:bo.outlinePick} 목록에서 건물 B를 선택한 뒤 같은 값으로 {t:aw.easyGo}를 누릅니다.
5. 두 건물이 맞닿는 선에 벽이 한 장만 서 있는지 확인합니다. 먼저 세운 건물 A의 바깥벽이며, 두 건물이 함께 씁니다.
6. {c:levelPanel}에서 건물 행을 두 번 클릭하면 그 건물로 작업 범위가 이동됩니다.

## 팁

- 건물 B를 2층으로 세우면 건물 B의 2층 위에만 지붕이 생기고, 건물 A는 그대로 3층입니다.
- 건물 A의 3층만 좁히면 건물 A의 2층에만 옥상이 생깁니다. 옆 건물 B는 영향을 받지 않습니다.
- 두 건물은 이름과 색이 다르게 나옵니다. 오른쪽 클릭 메뉴로 이름(예: 본관, 별관)과 색을 바꿉니다: [건물 이름·색·전체 목록](help:build-names-tree).
- 두 건물에 걸쳐 있는 부재는 공용으로 보며, 속성 창의 {t:aw.owner} 칸에서 속한 건물을 바꿀 수 있습니다.
- 면적표에는 건물마다 건축면적이 따로 나오고(168 m², 120 m²), 대지의 건폐율은 두 건물을 합친 288 m²로 계산합니다: [면적표](help:site-area-table).
- 규칙 설명은 [붙은 건물](help:build-shared-levels)에 있습니다.

## 자주 하는 실수

- 건물 B가 그려지지 않고 겹친다는 알림이 뜹니다. 첫 구석이 건물 A 안쪽에 찍힌 경우입니다. 건물 A의 구석에 붙여 다시 그립니다.
- 오가는 길이 없습니다. 맞닿는 선의 벽에 문을 넣습니다.
- 건물 B의 층고를 다르게 넣으면 바닥 높이가 어긋나 서로 덮고 받치지 않습니다.
- 두 건물을 서로 다른 대지에 두면 맞닿아도 붙은 건물이 되지 않습니다.
`,At=`---
id: brec-u-shape
title: ① ㄷ자 건물 한 번에
분류: 건물 예제
난이도: 기초
workspace: 3D 건설
keywords: ㄷ자 건물, U자 건물, 디귿자, ㄷ자, 유자 건물, 오목한 건물, 건물 외곽선 다각형, 건축 면적, 건물 바로 세우기, 학교 건물, 예제, 따라하기, 디귿자 건물
commands: buildingEasy, buildingOutline
order: 10
---

## 무엇

ㄷ자(U자) 모양 건물 외곽선을 그린 뒤 {c:buildingEasy}로 3층 건물을 한 번에 세웁니다. 바깥 크기 20 × 15 m에 한쪽이 트인 8 × 9 m 안마당이 있는 모양입니다. 오목한 모양이어도 모든 층의 외곽선, 변마다 하나씩인 바깥벽, ㄷ자 평지붕 하나가 그대로 생깁니다.

## 하는 순서

1. {m:buildingEasy} 단추를 누릅니다. 대지가 있으면 {t:bo.site} 목록에서 30 × 25 m보다 넉넉한 대지를 선택하고, 없으면 땅 전체에 짓습니다.
2. {t:bo.outlinePick} 목록이 {t:bo.outlineNew}인지 확인하고 {t:aw.drawOutline}를 누릅니다.
3. 건물 외곽선 도구 창에서 {t:opt.areaPoly}을 선택하고, 빈 곳을 클릭해 첫 구석을 찍습니다.
4. 명령줄에 \`@20,0\`, \`@0,15\`, \`@-6,0\`, \`@0,-9\`, \`@-8,0\`, \`@0,9\`, \`@-6,0\`을 하나씩 입력하고 그때마다 Enter를 누릅니다.
5. Enter를 한 번 더 누르면 구석 8개의 ㄷ자 외곽선이 닫혀 건물이 생기고, {c:buildingEasy} 창이 다시 열립니다.
6. {t:bnew.above} \`3\`, {t:bnew.below} \`0\`, {t:bnew.height} \`3\`을 넣습니다.
7. 창 아래 안내에 방금 만든 건물이 나오는지 확인하고 {t:aw.easyGo}를 누릅니다.
8. 세 층 모두 ㄷ자 외곽선을 받고, 층마다 바깥벽 8개와 바닥판, 맨 위에 ㄷ자 평지붕 하나가 생깁니다.

## 팁

- 좌표 입력 방법은 [좌표·길이 입력](help:input-coords)을 봅니다. 마우스로 구석을 찍어도 됩니다.
- {m:buildingOutline}으로 외곽선을 먼저 그려 두었으면 {t:bo.outlinePick} 목록에서 그 건물을 선택합니다: [건물 외곽선](help:build-outline).
- 건축면적은 ㄷ자 외곽선의 넓이 228 m²로 계산되고, 안마당은 들어가지 않습니다.
- L자, T자 모양도 같은 방법으로 세웁니다. 사방이 막힌 ㅁ자는 [중정](help:build-courtyard)으로 만듭니다.
- 한쪽 날개만 높이를 달리하려면 [층마다](help:build-detailed)에서 위층 외곽선을 고칩니다.
- 곡선 변이 있는 건물 외곽선도 그대로 세워지고, 곡선 변마다 곡선 벽 하나가 생깁니다: [곡선 대지 위 건물](help:brec-curved-site).
- 결과가 마음에 들지 않으면 {c:undo} ({k:undo}) 한 번으로 건물 전체가 되돌아갑니다.

## 자주 하는 실수

- 대지를 선택했으면 외곽선은 대지 안에 있어야 합니다. 밖으로 나가면 만들어지지 않고 알림이 나옵니다. 20 × 15 m가 들어갈 자리에서 시작합니다.
- 첫 구석을 기존 건물 외곽선 안에서 찍으면 새로 그리지 않고 그 외곽선이 선택됩니다. 다른 건물과 겹치게 그리면 만들어지지 않습니다.
- 좌표에 mm 값을 넣는 실수가 많습니다. 3D 건설에서는 m 단위이므로 \`@20000,0\`이 아니라 \`@20,0\`입니다.
- 안내에 다른 건물이 나오면 그 건물이 세워집니다. 세우기 전에 {t:bo.outlinePick} 목록에서 원하는 건물을 선택합니다.
`,jt=`---
id: civil-bridge
title: 교량
분류: 토목
난이도: 중급
workspace: 3D 건설
keywords: 교량, 다리, 육교, 고가, 고가도로, 거더교, 트러스교, 아치교, 사장교, 현수교, 엑스트라도즈드교, 라멘교, 교각, 교대, 경간, 측경간, 상판, 주탑, 케이블, 행어, 트러스, 사재, 프랫, 하우, 와렌, 라멘, 박스 거더, 형하고, 앵커리지, 다리 만들기, 교량 만들기, 다리기둥, 교랑, bridge, girder bridge, truss bridge, arch bridge, cable-stayed bridge, suspension bridge, pier, abutment, span, deck, pylon
commands: bridge, road, pathEdit
context: bridge
order: 30
---

## 무엇

선을 따라 상판을 걸치고, 교각을 땅 아래 기초 깊이까지 내리는 도구입니다. 형식은 거더교·트러스교·아치교·사장교·현수교 다섯 가지이고, 형식마다 상부 구조(거더·트러스 사재·아치·케이블·주탑)와 교각·교대의 모양을 따로 선택합니다.

## 하는 순서

1. {m:bridge} 단추를 누릅니다.
2. {t:civil.typeOf}에서 {t:civil.type.bridge.beam}, {t:civil.type.bridge.truss}, {t:civil.type.bridge.arch}, {t:civil.type.bridge.cable}, {t:civil.type.bridge.suspension} 가운데 하나를 선택합니다.
3. 건널 곳의 한쪽 끝에서 다른 쪽 끝까지 점을 차례로 클릭합니다.
4. 창에서 {t:civil.width}과 형식별 값(예: 트러스교의 {t:cf.bridge.web}, {t:cf.bridge.panels})을 정합니다.
5. 교각 사이 거리는 {t:civil.more}의 {t:civil.span}에서 정합니다.
6. Enter·오른쪽 클릭·더블클릭으로 만듭니다. 교량 하나를 만들면 도구가 끝납니다.

## 팁

- {t:civil.z0}·{t:civil.z1}는 저절로 정해집니다. 양 끝은 땅이나 이어진 도로의 높이에 맞고, 상판 아래가 땅이나 물에서 {t:civil.x.clearance}(기본 5 m)만큼 뜨도록 올라갑니다. 직접 넣은 높이는 그대로 씁니다.
- 다리 길이는 같은 길이의 경간으로 나뉘며, 한 경간은 {t:civil.span}(5 ~ 200 m)을 넘지 않습니다. {t:civil.x.spans}로 경간 수를 직접 정해도 됩니다. 창에 {t:civil.piers}가 나옵니다. 처음 경간은 거더교 30 m, 트러스교 40 m, 아치교 60 m, 사장교 100 m, 현수교 30 m입니다.
- 교각 높이는 따로 넣지 않습니다. 교각은 상판 아래에서 평탄화 뒤의 땅까지 내려가고, 땅 아래로 {t:civil.footing}(기본 2 m)만큼 더 들어갑니다. 교각 높이를 바꾸려면 시작·끝 높이를 바꿉니다.
- 형식별로 선택하는 값은 다음과 같습니다.

| 형식 | 선택하는 값 |
| --- | --- |
| {t:civil.type.bridge.beam} | {t:cf.bridge.deck}(슬래브·I형 거더·박스 거더·라멘), {t:cf.bridge.girders}(2 ~ 12), {t:cf.bridge.cells}(1 ~ 4), {t:cf.bridge.haunch}(0 ~ 5 m) |
| {t:civil.type.bridge.truss} | {t:cf.bridge.web}(프랫·하우·와렌·와렌과 수직재·K·X), 경간마다 {t:cf.bridge.panels}(2 ~ 30), {t:cf.bridge.trussH}(2 ~ 40 m), {t:cf.bridge.deckPos}(하로·상로·중로), {t:cf.bridge.topChord}(수평·곡현), {t:cf.bridge.member}, {t:cf.bridge.bracing} |
| {t:civil.type.bridge.arch} | {t:cf.bridge.arch}(상로·하로·타이드·중로), {t:cf.bridge.rise}(경간의 8 ~ 60 %), {t:cf.bridge.hangers}, {t:cf.bridge.ribs}(1 ~ 3), {t:cf.bridge.ribShape} |
| {t:civil.type.bridge.cable} | {t:cf.bridge.stay}(팬·하프·세미팬), {t:cf.bridge.pylons}(1 ~ 3), {t:cf.bridge.pylon}(H형·A형·역Y형·1주형), {t:cf.bridge.pylonH}, {t:cf.bridge.stays}, {t:cf.bridge.extradosed} |
| {t:civil.type.bridge.suspension} | {t:cf.bridge.tower}(H형·A형·문형), {t:cf.bridge.towerH}, {t:cf.bridge.sag}, {t:cf.bridge.hangerGap}, {t:cf.bridge.anchors} |

- 사장교·현수교의 주탑 자리는 {t:cf.bridge.sideRatio}(전체 길이의 10 ~ 40 %)로 정합니다. 주탑이 2개 이상인 사장교는 {t:cf.bridge.sidePiers}을 켜면 끝에서 주탑까지의 측경간에 {t:cf.bridge.sideGap}(기본 40 m)을 넘지 않게 교각이 고르게 섭니다. 주탑이 1개이면 측경간 교각이 없습니다.
- {t:cf.bridge.pier}은 벽식·1주식·2주식·T형·문형 가운데에서 선택하고, {t:cf.bridge.capH}와 {t:civil.pier}을 정합니다. 사장교·현수교의 주탑 아래 교각은 늘 상판 폭 전체의 벽식입니다. 라멘 거더교에는 교각 모양 칸이 없습니다.
- {t:cf.bridge.abut}은 역T형과 중력식이 있고, 역T형은 {t:cf.bridge.wings}을 켜고 끕니다.
- 창의 {t:cf.members}가 360개를 넘으면 삼각형·행어·케이블 수가 저절로 줄거나 행어 간격이 넓어지고, 그렇다는 안내가 나옵니다.
- 형식을 바꾸면 그 형식의 값은 처음 값으로 돌아가고, 교각·교대 모양은 그대로 남습니다. 이 설정이 생기기 전에 만든 교량은 교각 모양을 {t:civil.x.pier.wall}·{t:civil.x.pier.column}·{t:civil.x.pier.twin} 가운데에서 선택합니다.
- {t:civil.more}에는 {t:civil.deckThick}, {t:civil.x.girder}, {t:civil.x.abutment}, {t:civil.railings}, {t:civil.x.parapet}, {t:civil.x.joints}도 있습니다.
- 다리 양 끝에 도로를 이어 그리면 도로 끝이 교량 윗면 높이에 맞춰집니다. 만든 뒤에는 속성 창에서 값을 바꾸고 {c:pathEdit}으로 선을 고칩니다.
- 다리 밑 땅을 평탄화하거나 도로가 지나가 땅이 바뀌면, 교각과 교대가 새 땅에 저절로 다시 맞춰집니다. 상판 높이는 그대로입니다.
- 속성 창의 {t:cfit.editIn}으로 다리에 표지판 같은 물체를 더하면, 경간이나 형식 값을 바꿔도 더한 것이 그대로 남습니다. {t:cfit.unlink}를 누르면 형식이 없는 보통 솔리드가 됩니다.

## 자주 하는 실수

- 다리가 너무 짧다는 빨간 글이 나옵니다. 거더교 5 m, 트러스교 15 m, 아치교 20 m, 사장교 40 m, 현수교 60 m 이상으로 그립니다.
- 굽은 선으로 그렸더니 만들어지지 않습니다. 아치교·트러스교·사장교·현수교는 곧게(꺾는 각 15° 이하) 그려야 합니다. 굽은 다리는 거더교로 만듭니다.
- 상판이 땅속을 지나간다는 글이 나옵니다. 시작·끝 높이를 올리거나 선을 이동합니다.
- 교각이 200 m보다 높아진다는 글이 나옵니다. 상판 높이를 낮춥니다.
- 땅을 고쳤는데 교량이 그대로이고 창에 빨간 글이 있습니다. 새 땅에 맞추면 위의 두 경우가 되어 그대로 둔 것입니다. 상판 높이를 고친 뒤 {t:civil.refit}를 누릅니다.
- {t:cf.bridge.pier}을 바꿨는데 사장교·현수교의 주탑 아래 교각이 그대로입니다. 주탑 아래 교각은 늘 벽식입니다.
- {c:bridge}이 메뉴에 없습니다. 토목 도구는 고급 메뉴에서 보입니다. 메뉴 줄에서 {t:level.advanced}을 선택하거나 명령줄에 \`bridge\`를 입력합니다.
`,Mt=`---
id: civil-dam
title: 댐·보
분류: 토목
난이도: 중급
workspace: 3D 건설
keywords: 댐, 보, 수중보, 저수지, 호수, 물, 물 높이, 담수, 만수위, 상시 만수위, dam, water, lake, reservoir, weir, 중력식 댐, 콘크리트 댐, 흙댐, 필댐, 석괴 댐, 사력댐, 아치 댐, 마루, 마루 높이, 여수로, 월류, 슈트, 측면 수로, 물받이, 갤러리, 코어, 필터, 사석, 소단, 추력 블록, 수문, 어도, 여유고, 상류, 하류, 골짜기, 계곡, 물 막기, 댐 만들기, 뎀, spillway, gallery, core, riprap, fishway, gate
commands: dam, water, waterBody, levee, pathEdit
howto: dam
context: dam
order: 70
---

## 무엇

골짜기를 가로지르는 축선을 그리면 마루에서 땅속까지 댐을 쌓는 도구입니다. 형식은 {t:civil.type.dam.concrete}, {t:civil.type.dam.fill}, {t:civil.type.dam.arch}, {t:civil.type.dam.weir} 네 가지이고, 여수로·갤러리·코어·수문·어도 같은 부분을 형식마다 정합니다. 댐 뒤의 골짜기는 만수위까지 물로 채워집니다.

## 하는 순서

1. {m:dam} 단추를 누릅니다.
2. {t:civil.typeOf}에서 형식을 선택합니다.
3. 물이 찰 쪽(상류)이 그리는 방향의 왼쪽이 되도록, 골짜기 한쪽 비탈에서 반대쪽 비탈까지 점을 클릭합니다.
4. Enter·오른쪽 클릭·더블클릭으로 만듭니다. {t:civil.crest}는 저절로 정해집니다.
5. 창의 {t:cf.dam.reservoir}가 켜져 있으면 댐 뒤 골짜기가 {t:civil.x.fullLevel}까지 물로 채워집니다.

## 팁

- {t:civil.crest}는 선 양 끝의 땅 가운데 낮은 쪽 높이로 정해지고, 평평한 땅에서는 가장 낮은 땅보다 20 m 높게, {t:civil.type.dam.weir}는 3 m 높게 정해집니다. 상류에 이미 물이 있으면 그 물보다 {t:civil.x.freeboard}(기본 2 m) 이상 높아집니다. 직접 넣은 값은 그대로 씁니다.
- 창에 {t:civil.damHeight}와 {t:civil.x.fullLevel}가 나옵니다. 만수위는 마루에서 여유고를 뺀 높이이고, 보는 마루 바로 아래입니다.
- 마루보다 높은 땅에는 댐이 생기지 않으므로 골짜기보다 조금 길게 그려도 됩니다.
- 형식마다 정하는 값은 다음과 같습니다.

| 형식 | 값 |
| --- | --- |
| 여수로 (보 빼고) | {t:cf.dam.spill}({t:cf.dam.spill.none}·{t:cf.dam.spill.overflow}·{t:cf.dam.spill.chute}·{t:cf.dam.spill.side}), {t:cf.dam.spillW}, {t:cf.dam.spillAt}, 슈트·측면 수로는 {t:cf.dam.apron} |
| {t:civil.type.dam.concrete} | {t:cf.dam.gallery}(몸체 안의 점검 통로라 겉에서는 보이지 않습니다) |
| {t:civil.type.dam.fill} | {t:cf.dam.fillMat}({t:cf.dam.fillMat.rock}·{t:cf.dam.fillMat.earth}), {t:cf.dam.berms}(0 ~ 4), {t:cf.dam.bermW}, {t:cf.dam.riprap}, {t:cf.dam.core}, {t:cf.dam.coreW}, {t:cf.dam.coreSlope}, {t:cf.dam.filter} |
| {t:civil.type.dam.arch} | {t:cf.dam.angle}(40 ~ 160°), {t:cf.dam.baseT}, {t:cf.dam.thrust}, {t:cf.dam.thrustL} |
| {t:civil.type.dam.weir} | {t:cf.dam.gates}(0 ~ 12, 0이면 고정보), {t:cf.dam.gateW}, {t:cf.dam.fishway} |

- {t:civil.type.dam.fill}의 코어와 필터는 몸체 안에 있어 겉모양을 바꾸지 않습니다. 겉으로는 코어 아래 땅속으로 더 깊게 파인 차수 부분만 달라집니다. 여수로는 처음에 끝 쪽의 측면 수로입니다.
- 코어·필터·갤러리 같은 안쪽 구역은 {c:sectionView}, {c:archSection}, {c:planView}에서 댐이 잘린 곳에 색으로 칠해지고, 보기 막대에 {t:zone.legend} 범례가 나옵니다. 도면 시트와 PDF에도 칠해지지만, DXF로 내보낸 도면에는 칠하지 않습니다.
- {t:civil.type.dam.arch}은 두 점만 찍으면 상류 쪽으로 저절로 휩니다. {t:cf.dam.angle}을 바꾸면 양 끝은 그대로 두고 축을 다시 휩니다. 아치 댐에서는 마루 폭 대신 {t:cf2.crestT}를 정합니다.
- 형식을 바꾸면 비탈·마루 폭과 그 형식의 값이 처음 값으로 돌아가고, {t:cf.dam.reservoir} 스위치는 그대로 남습니다.
- {t:civil.more}에서 {t:civil.crestWidth}, {t:civil.x.freeboard}, 상류·하류 비탈, {t:civil.embed}(기본 2 m)를 정합니다. 그리는 방향의 왼쪽이 상류입니다. 반대로 하려면 {t:civil.swap}를 누릅니다.
- 담수는 땅(지형)이 있을 때 그려지고, {c:water} 창의 {t:water.dams}에 댐마다 만수위와 담수 면적이 나옵니다. 댐이 골짜기보다 짧으면 물이 끝으로 돌아 나가 넓게 퍼집니다.
- 만든 댐을 더블클릭하거나 {m:pathEdit}으로 축선을 고칩니다. 밑의 땅이 평탄화로 바뀌면 새 땅에 저절로 다시 맞춰지고, 마루 높이는 그대로입니다.
- 강을 따라 쌓는 둑은 [제방](help:civil-levee), 땅을 파서 만드는 호수와 하천은 [물길·못](help:civil-waterway)에 있습니다.

## 자주 하는 실수

- 축선의 땅이 모두 마루보다 높아 댐을 만들 수 없다고 나옵니다. {t:civil.crest}를 높입니다.
- 댐이 너무 높다고 나옵니다. 가장 낮은 땅에서 마루까지 320 m 이하로 낮춥니다.
- 폭에 비해 너무 급하게 꺾였다고 나옵니다. 댐은 마루 폭과 비탈만큼 넓으므로, 꺾는 각을 줄이거나 꺾인 사이를 길게 그립니다.
- 물이 댐 아래쪽(하류)에 찹니다. 상류가 반대로 그려졌습니다. 댐을 삭제하고 반대 방향으로 다시 그립니다.
- 댐 뒤에 물이 생기지 않습니다. {t:cf.dam.reservoir}가 꺼져 있거나 지형이 없는 평평한 땅입니다. 평평한 땅에서는 {c:water}로 물 높이를 정합니다.
- {c:dam}이 메뉴에 없습니다. 메뉴 줄 오른쪽에서 {t:level.advanced}을 선택하거나 명령줄에 \`dam\`을 입력합니다.
`,Nt=`---
id: civil-drainage
title: 배수 시설
분류: 토목
난이도: 중급
workspace: 3D 건설
keywords: 배수, 배수 시설, 배수로, 측구, 도랑, U형 측구, L형 측구, 연석, 덮개, 암거, 박스 암거, 관, 배수관, 하수관, 맨홀, 우수, 물빠짐, 콘크리트관, 강관, 흙 덮기, 날개벽, 배수시설, drain, drainage, ditch, gutter, culvert, box culvert, pipe, manhole, sewer
commands: drain, road, pathEdit
context: drain
order: 55
---

## 무엇

선을 따라 측구(도랑)·박스 암거·땅속 관·맨홀을 놓는 도구입니다. 높이는 선 아래 땅을 따라가고, 땅 모양은 바꾸지 않습니다.

## 하는 순서

1. {m:drain} 단추를 누릅니다.
2. {t:civil.typeOf}에서 {t:civil.type.drain.ditch}, {t:civil.type.drain.culvert}, {t:civil.type.drain.pipe}, {t:civil.type.drain.manhole} 가운데 하나를 선택합니다.
3. 창에서 폭·깊이·지름 같은 값을 정합니다.
4. 물이 흐를 길을 따라 점을 차례로 클릭합니다. 암거는 길을 가로지르는 처음 점과 끝 점만 찍습니다.
5. Enter·오른쪽 클릭·더블클릭으로 만듭니다. 하나를 만들면 도구가 끝납니다.

## 팁

- 형식마다 창에 나오는 값은 다음과 같습니다.

| 형식 | 값 |
| --- | --- |
| {t:civil.type.drain.ditch} | {t:cf.drain.ditch}({t:cf.drain.ditch.U}·{t:cf.drain.ditch.L}), {t:cf.drain.ditchW}(0.3 ~ 3 m), U형은 {t:cf.drain.ditchD}와 {t:cf.drain.cover}, L형은 {t:cf.drain.curbH}, {t:cf.drain.ditchT} |
| {t:civil.type.drain.culvert} | {t:cf.drain.cells}(1 ~ 4), {t:cf.drain.cellW}·{t:cf.drain.cellH}(1 ~ 8 m), {t:cf.drain.wallT}, {t:cf.drain.wings} |
| {t:civil.type.drain.pipe} | {t:cf.drain.dia}(0.2 ~ 3 m), {t:cf.drain.material}({t:cf.drain.material.concrete}·{t:cf.drain.material.steel}·{t:cf.drain.material.plastic}), {t:cf.drain.depth}(0.3 ~ 6 m) |
| {t:civil.type.drain.manhole} | {t:cf.drain.dia}, {t:cf.drain.material}, {t:cf.drain.mhD}, {t:cf.drain.mhDepth}(1 ~ 15 m), {t:cf.drain.mhGap}(10 ~ 200 m, 기본 50 m) |

- 박스 암거는 찍은 점과 상관없이 처음 점과 끝 점을 곧게 잇습니다. 바닥은 양 끝의 땅보다 0.3 m 낮게 곧게 기웁니다.
- 맨홀은 선의 양 끝과 그 사이에 {t:cf.drain.mhGap}을 넘지 않게 고르게 서고, 창에 {t:cf2.manholes}가 나옵니다. 60개를 넘으면 간격이 저절로 넓어지고 안내가 나옵니다.
- 관과 맨홀은 땅속에 있어 잘 보이지 않습니다. {c:terrainView}에서 땅 불투명도를 낮춰 봅니다.
- 도로 가장자리를 따라가는 측구는 [도로](help:civil-road) 창의 {t:cf.road.ditch}로 붙이는 것이 편합니다. 도로를 이동하면 측구도 함께 이동됩니다.
- 점을 누른 채 0.5초 기다렸다가 끌면 곡선이 됩니다. 만든 뒤에는 속성 창에서 값을 바꾸고 {c:pathEdit}으로 선을 고칩니다. 밑의 땅이 평탄화로 바뀌면 새 땅에 저절로 다시 맞춰집니다.
- 토목 전체는 [토목](help:civil-overview)에 정리되어 있습니다.

## 자주 하는 실수

- 암거가 만들어지지 않고 빨간 글이 나옵니다. 암거는 곧게(꺾는 각 15° 이하) 그리고, 암거 높이의 2배와 2 m보다 길게 그려야 합니다.
- 측구를 놓았는데 땅이 파이지 않습니다. 배수 시설은 땅 모양을 바꾸지 않습니다. 땅을 파야 하는 물길은 [물길·못](help:civil-waterway)으로 만듭니다.
- 선이 자기 자신과 엇갈리면 만들어지지 않습니다. 엇갈리지 않게 다시 그립니다.
- {c:drain}이 메뉴에 없습니다. 토목 탭은 고급 메뉴에만 있으므로 {t:level.advanced}을 선택하거나 명령줄에 \`drain\`을 입력합니다.
`,Pt=`---
id: civil-grading
title: 평탄화와 토목
분류: 토목
난이도: 심화
workspace: 3D 건설
keywords: 평탄화, 토목, 깎기, 채우기, 절토, 성토, 깎기 비탈, 채우기 비탈, 법면, 토공량, 땅 고르기, 겹침, 순서, 먼저, 나중, 도로 아래 땅, 길이 뜸, 길이 묻힘, 지형에 다시 맞추기, 다시 맞추기, 저절로 맞춤, 입구 깎기, 수직 단, 단차, 평탄화 순서, 평탄와, grading, grade, cut and fill, earthwork, slope, order, refit, fit to terrain
commands: grade, road, retainingWall, dam, waterBody, bridge, tunnel, earthwork
order: 100
---

## 무엇

평탄화, 도로, 물길·못, 터널 입구는 땅 모양을 바꾸고, 교량·댐·옹벽·제방·배수 시설은 땅을 바꾸지 않고 그 위에 섭니다. 이 페이지는 이들이 겹칠 때 어느 것이 땅 높이를 정하는지, 땅이 바뀌면 구조물이 어떻게 다시 맞춰지는지, 알맞은 작업 순서를 설명합니다.

## 하는 순서

1. {m:grade}로 건물이 앉을 대지를 먼저 평탄화합니다.
2. {m:road}로 길을, {m:waterBody}으로 호수·연못·하천을 만듭니다. 길은 평탄화한 땅을 따라가고, 길과 물길·못 아래의 땅이 다시 깎이고 채워집니다.
3. 평탄화로 생긴 높이 차이를 따라 {m:retainingWall}을 세웁니다.
4. {m:bridge}, {m:tunnel}, {m:dam}을 놓습니다. 모두 평탄화 뒤의 땅 위에 섭니다.
5. 나중에 평탄화를 바꾸면, 그 땅을 지나는 구조물이 같은 되돌리기 단계 안에서 저절로 다시 맞춰집니다. 창에 빨간 글이 남은 구조물은 높이나 선을 고칩니다.
6. 평탄화 창의 {c:earthwork} 단추나 [면적표](help:site-area-table)에서 깎은 흙과 채운 흙의 양을 봅니다.

## 팁

- 완성된 땅은 원래 땅에 평탄화·도로·물길·못·터널 입구 깎기를 만든 순서대로 차례로 적용한 결과입니다. 겹치는 곳에서는 나중에 만든 것이 땅 높이를 정합니다. 이미 있는 것을 고치면 처음 만든 순서를 그대로 지킵니다.
- 구조물마다 땅을 다루는 방식은 다음과 같습니다.

| 도구 | 땅 모양 | 높이의 기준 |
| --- | --- | --- |
| {c:grade} | 대지 안을 한 높이로 선택하고 둘레를 비탈로 잇습니다 | 직접 정한 평탄화 높이 |
| {c:road} | 길 폭과 양쪽 0.5 m를 길 바닥 높이로 선택하고 둘레를 비탈로 잇습니다 | {t:civil.follow}는 평탄화 뒤 땅을 따라가고, 땅이 바뀌면 다시 따라갑니다 |
| {c:waterBody} | 외곽선 안이나 물길을 바닥까지 팝니다 | 물 높이는 평탄화 전의 원래 땅을 봅니다 |
| {c:tunnel} | 양 입구 앞을 노면 아래까지 깎기만 합니다 | 노면 높이는 갱문에서 정한 값 |
| {c:bridge}, {c:dam}, {c:retainingWall}, {c:levee}, {c:drain} | 바꾸지 않습니다 | 평탄화 뒤 땅 (교각·기초는 그 아래 기초 깊이까지) |

- 저절로 다시 맞출 때 사용자가 정한 값은 그대로 둡니다. 교량 상판·터널 노면 높이, 댐 마루, 옹벽 윗면, 호수·연못 물 높이, {t:civil.grade} 도로의 높이가 그렇습니다. 바뀌는 것은 교각·교대·기초의 길이와 {t:civil.follow} 도로의 윗면입니다.
- 다시 맞춘 모양을 만들 수 없으면(교각이 200 m를 넘거나 상판이 땅속을 지나면) 구조물은 그대로 남고, 속성 창에 그 이유가 빨간 글로 나옵니다. 높이를 고친 뒤 {t:civil.refit}를 누르면 다시 맞춰집니다.
- 길이 다시 맞춰져 길 아래 땅이 바뀌면, 그 땅을 지나는 다른 구조물도 이어서 다시 맞춰집니다.
- 비탈 1 : n에서 n이 클수록 비탈이 완만하고 넓게 퍼집니다. 0은 수직 단(옹벽 자리)이 됩니다. 평탄화는 {t:grade.more}에서 {t:grade.cut}과 {t:grade.fill}을, 길은 {t:civil.more}의 {t:civil.x.earthHead}에서 깎기·채우기 비탈을 정합니다.
- 길의 비탈이 평탄화한 대지 안까지 퍼지면 길의 비탈 값을 줄이거나 0으로 합니다. 0이면 길 폭 밖의 땅은 그대로 남습니다.
- 평탄화 높이는 그 대지에 세우는 건물의 1층 바닥 높이로 쓰입니다. 토목 구조물은 층에 속하지 않으므로 1층 바닥 높이를 바꿔도 그대로입니다. 평탄화 자체는 [평탄화·토공량](help:site-grade)에 있습니다.
- 평탄화 창의 토공량은 선택한 대지의 평탄화만 셉니다. 면적표의 토공량은 평탄화, 도로 아래 땅 선택, 물길·못이 판 흙, 터널 입구 깎기를 모두 합한 양입니다.
- 구조물에서 {t:cfit.unlink}를 누르면 그 구조물이 판 땅(도로 아래 땅, 물길, 터널 입구)은 보통 평탄화로 남아 땅이 바뀌지 않습니다.

## 자주 하는 실수

- 길을 {t:civil.grade}으로 만든 뒤 평탄화했더니 길이 뜨거나 묻힙니다. 이 길은 정한 높이를 지키므로 {t:civil.z0}와 {t:civil.z1}를 새 땅에 맞게 고치거나 {t:civil.follow}로 바꿉니다.
- 옹벽을 세웠는데 땅의 높이 차이가 생기지 않습니다. 옹벽은 땅을 바꾸지 않습니다. 평탄화의 비탈을 0으로 해서 수직 단을 먼저 만듭니다.
- 평탄화를 바꿨는데 교량이 그대로이고 창에 빨간 글이 있습니다. 새 땅에 맞추면 만들 수 없는 모양이 되어 그대로 둔 것입니다. 상판 높이를 고친 뒤 {t:civil.refit}를 누릅니다.
- 평탄화를 바꿨는데 하천 물 높이가 그대로입니다. 하천은 평탄화 전의 원래 땅을 따르므로 평탄화로는 바뀌지 않습니다.
- 토목 탭이 보이지 않습니다. 메뉴 줄 오른쪽에서 {t:level.advanced}을 선택합니다.
`,Ft=`---
id: civil-levee
title: 제방
분류: 토목
난이도: 중급
workspace: 3D 건설
keywords: 제방, 둑, 강둑, 방죽, 뚝, 둑방, 호안, 콘크리트 호안, 블록 호안, 계단식 제방, 흉벽, 파라펫, 마루, 마루 폭, 소단, 강 쪽 비탈, 땅 쪽 비탈, 홍수, 하천 정비, 제방 쌓기, 재방, levee, dike, dyke, embankment, revetment, parapet wall, berm, flood bank
commands: levee, waterBody, water, pathEdit
context: levee
order: 65
---

## 무엇

강이나 물길을 따라 흙을 사다리꼴로 쌓은 둑(제방)을 만드는 도구입니다. 강 쪽 비탈을 콘크리트·계단·블록으로 덮거나 마루에 흉벽을 세우는 형식도 있습니다. 둑만 쌓고 땅 모양은 바꾸지 않습니다.

## 하는 순서

1. {m:levee} 단추를 누릅니다.
2. {t:civil.typeOf}에서 {t:civil.type.levee.earth}, {t:civil.type.levee.concrete}, {t:civil.type.levee.stepped}, {t:civil.type.levee.parapet}, {t:civil.type.levee.block} 가운데 하나를 선택합니다.
3. 강이 그리는 방향의 왼쪽에 오도록 둑의 중심선을 따라 점을 차례로 클릭합니다.
4. {t:civil.topGround}에서는 {t:cf2.leveeHeight}를, {t:civil.topLevel}에서는 {t:cf2.leveeTop}를 정합니다.
5. Enter·오른쪽 클릭·더블클릭으로 만듭니다. 제방 하나를 만들면 도구가 끝납니다.

## 팁

- {t:civil.topGround}이면 마루가 땅 위로 {t:cf2.leveeHeight}(기본 4 m)만큼 높게 선을 따라갑니다. 이 높이는 땅을 앞뒤 20 m씩 고르게 한 높이에서 재므로 작은 굴곡에 흔들리지 않습니다. {t:civil.topLevel}이면 마루를 한 높이로 맞추고, 처음 값은 선을 따라 가장 높은 땅에 제방 높이를 더한 값입니다.
- {t:cf.g.lsection} 묶음에서 {t:cf.levee.crestW}(2 ~ 30 m, 기본 5 m), {t:cf.levee.riverSlope}, {t:cf.levee.landSlope}, {t:cf.levee.berms}(0 ~ 3), {t:cf.levee.bermW}, {t:cf.levee.embed}를 정합니다. 비탈은 높이 1에 대한 수평 거리이고, 소단은 땅 쪽 비탈에 같은 간격으로 놓이는 평평한 단입니다.
- 형식마다 더 정하는 값은 다음과 같습니다. 형식을 바꾸면 강 쪽 비탈이 그 형식의 기본값으로 바뀝니다.

| 형식 | 값 |
| --- | --- |
| {t:civil.type.levee.earth} | 단면 값만 씁니다 |
| {t:civil.type.levee.concrete} | {t:cf.levee.revetT}, {t:cf.levee.toeW}, {t:cf.levee.toeD} |
| {t:civil.type.levee.stepped} | {t:cf.levee.stepH}, {t:cf.levee.steps}(1 ~ 30) |
| {t:civil.type.levee.parapet} | {t:cf.levee.wallH}, {t:cf.levee.wallT} |
| {t:civil.type.levee.block} | {t:cf.levee.blockS}, {t:cf.levee.rows}(1 ~ 40) |

- 강물은 [물길·못](help:civil-waterway)의 하천으로 파서 만들고, 그 둑을 따라 제방을 그립니다. 넓은 범위의 물은 [물 높이](help:civil-water)로 보여 줍니다.
- 점을 누른 채 0.5초 기다렸다가 끌면 곡선이 됩니다. 만든 뒤에는 속성 창에서 값을 바꾸고 {c:pathEdit}으로 선을 고칩니다. 밑의 땅이 평탄화로 바뀌면 새 땅에 저절로 다시 맞춰집니다.
- 골짜기를 가로질러 물을 가두는 둑은 [댐·보](help:civil-dam)로 만듭니다.

## 자주 하는 실수

- 강 쪽과 땅 쪽이 반대로 만들어졌습니다. 강은 그리는 방향의 왼쪽입니다. 제방을 삭제하고 반대 방향으로 다시 그립니다.
- 폭에 비해 너무 급하게 꺾였다는 빨간 글이 나옵니다. 마루 폭에 비해 급하게 꺾인 경우입니다. 꺾는 각을 줄이거나 마루 폭을 줄입니다.
- 선이 자기 자신과 엇갈리면 만들어지지 않습니다. 엇갈리지 않게 다시 그립니다.
- {c:levee}이 메뉴에 없습니다. 토목 탭은 고급 메뉴에만 있으므로 {t:level.advanced}을 선택하거나 명령줄에 \`levee\`를 입력합니다.
`,It=`---
id: civil-my-civil
title: 내 토목 구조물
분류: 토목
난이도: 중급
workspace: 3D 건설
keywords: 내 토목 구조물, 내 토목, 토목 구조물, 내 구조물, 직접 만든 다리, 직접 만든 댐, 다리 모형, 구조물 모형, 3D 물체에서 보내기, 건설 물체로 보내기, 보낸 물체, 땅 위에 놓기, 라이브러리, 범주, 축척, 1:100, 같은 물체 고치기, 내토목, my civil structures, mycivil, my civil
commands: myCivil, sendToBuilding, objects
context: myCivil
order: 90
---

## 무엇

3D 물체에서 직접 모델링한 다리·댐·탑 같은 구조물을 3D 건설의 땅 위에 놓는 도구입니다. 3D 물체에서 {c:sendToBuilding}로 보낼 때 범주를 {t:tc.sort.civil}로 선택한 물체가 여기에 모입니다.

## 하는 순서

1. 3D 물체에서 보낼 구조물을 클릭해 선택합니다 (Shift: 여러 개).
2. 3D 물체 메뉴 줄의 {c:sendToBuilding} 단추를 누릅니다.
3. {t:tc.sort}에서 {t:tc.sort.civil}을 선택하고, {t:tc.scale}을 정합니다 (실제 크기로 만들었으면 \`1:1\`, 1:100 모형이면 \`1:100\`).
4. {t:tc.after}에서 {t:tc.afterPlace}를 선택하고 Enter를 누릅니다.
5. 3D 건설이 열리고 구조물이 커서를 따라오면 땅 위의 놓을 곳을 클릭합니다. R을 누르면 90° 돌아가고, Esc를 누르면 끝납니다.
6. 나중에 다시 놓을 때는 3D 건설에서 {m:myCivil} 단추를 누르고 구조물을 선택합니다.

## 팁

- 구조물은 클릭한 곳의 땅 높이에 섭니다. 층에 속하지 않으므로 건물의 1층 바닥 높이를 바꿔도 움직이지 않고, 이동해도 바닥에 붙거나 층 소속이 바뀌지 않습니다.
- 누른 채 끌면 끈 선을 따라 {t:dc.rowGap}마다 여러 개가 놓이고, 하나하나가 그 자리의 땅 높이에 섭니다.
- 창에서 {t:presetParam.w}, {t:presetParam.d}, {t:presetParam.h}를 바꿔 늘이거나 줄입니다. {t:lib.natural}를 누르면 보낼 때의 실제 크기로 돌아갑니다. 놓은 뒤에는 [스마트 스케일](help:obj-smart-scale)로도 크기를 바꿉니다.
- 3D 물체에서 구조물을 고쳐 다시 보낼 때 {t:tc.howUpdate}를 선택하면, 이미 놓은 구조물도 자리와 늘린 비율을 그대로 두고 새 모양으로 바뀝니다.
- 같은 구조물은 {m:objects}의 {t:lib.group.mine} 묶음에서도 선택할 수 있습니다.
- 내 물체는 이 컴퓨터의 라이브러리에 저장되고, 놓은 구조물은 파일 안에도 들어가므로 다른 컴퓨터에서도 열립니다.
- {t:lib.remove}는 라이브러리에서만 삭제합니다. 이미 놓은 구조물은 그대로 남습니다.
- 도로·교량 같은 토목 도구로 만든 구조물에서 {t:cfit.unlink}를 누르면, 형식이 없는 보통 솔리드가 되어 내 토목 구조물처럼 땅 위에 남습니다.
- 보내는 창의 자세한 설명은 [건설 물체로 보내기](help:more-send-to-building)에 있습니다.

## 자주 하는 실수

- 목록이 비어 있습니다. 보낼 때 {t:tc.sort}를 {t:tc.sort.civil}로 선택하지 않은 경우입니다. 다시 보내면서 범주를 바꾸거나, 내 물체 창에서 물체를 오른쪽 클릭하고 {t:tc.mSort}를 선택합니다.
- 크기가 너무 크거나 작게 들어왔습니다. 1:100 모형을 실제 크기로 보냈거나 그 반대입니다. {t:tc.scale}을 맞게 선택해 {t:tc.howUpdate}로 다시 보냅니다(가장 긴 변 1 cm ~ 2 km).
- 비탈에서 구조물 한쪽이 뜨거나 땅에 묻힙니다. 내 토목 구조물은 땅을 깎거나 채우지 않고 지형을 따라 휘지도 않습니다. 땅을 따라가야 하는 길·다리·댐은 [도로](help:civil-road), [교량](help:civil-bridge), [댐·보](help:civil-dam) 도구로 만듭니다.
- {c:myCivil}이 메뉴에 없습니다. 메뉴 줄 오른쪽에서 {t:level.advanced}을 선택합니다.
`,Lt=`---
id: civil-overview
title: 토목
분류: 토목
난이도: 중급
workspace: 3D 건설
keywords: 토목, 토목 구조물, 토목공사, 도로, 길, 교량, 다리, 터널, 굴, 옹벽, 배수, 측구, 암거, 제방, 둑, 물길, 하천, 호수, 연못, 댐, 보, 물 높이, 노선, 구역, 구간, 스테이션, 측점, 토목 메뉴, 토목 목록, 다시 맞추기, 풀기, 3D 물체로 편집, civil, civil works, civil engineering, road, bridge, tunnel, retaining wall, drainage, levee, dam, route, zone, station, chainage
commands: road, bridge, tunnel, retainingWall, drain, waterBody, levee, dam, water, myCivil
order: 10
---

## 무엇

땅 위에 도로·교량·터널·옹벽·배수 시설·물길·제방·댐 같은 구조물을 만드는 작업입니다. 토목 구조물은 건물의 층이 아니라 땅에 속하고, 높이는 지형과 이어진 구조물에 맞춰 저절로 정해집니다. 땅이 바뀌면 구조물도 새 땅에 다시 맞춰집니다.

## 하는 순서

1. 메뉴 줄의 {t:level.basic}·{t:level.advanced} 단추에서 {t:level.advanced}을 누릅니다. {t:group.civil} 탭은 고급 메뉴에 있습니다.
2. {t:group.civil} 탭에서 만들 구조물의 단추를 누릅니다.
3. 창의 {t:civil.typeOf}에서 형식을 선택하고, 폭이나 높이 같은 값을 정합니다.
4. 땅 위에 중심선(호수·연못은 외곽선)의 점을 차례로 클릭합니다.
5. Enter·오른쪽 클릭·더블클릭으로 만듭니다. 구조물 하나를 만들면 도구가 끝납니다.

## 팁

- {c:road}: 중심선을 따라 길을 내고 그 아래 땅을 깎고 채웁니다. 가드레일·중앙분리대·보도·측구를 붙입니다. [도로](help:civil-road)
- {c:bridge}: 선을 따라 상판을 걸치고 교각·교대를 세웁니다. [교량](help:civil-bridge)
- {c:tunnel}: 갱문에서 갱문까지 라이닝·노면·갱문을 만들고 양 입구의 땅을 팝니다. [터널](help:civil-tunnel)
- {c:retainingWall}: 높이가 다른 땅의 경계에서 흙을 받칩니다. [옹벽](help:civil-retaining)
- {c:drain}: 측구·박스 암거·관·맨홀을 선을 따라 놓습니다. [배수 시설](help:civil-drainage)
- {c:waterBody}: 호수·연못·하천을 파고 물을 채웁니다. [물길·못](help:civil-waterway)
- {c:levee}: 강을 따라 마루·비탈·소단이 있는 둑을 쌓습니다. [제방](help:civil-levee)
- {c:dam}: 골짜기를 가로질러 댐이나 보를 쌓고, 댐 뒤에 물을 채웁니다. [댐·보](help:civil-dam)
- {c:water}: 물 높이보다 낮은 땅을 물에 잠긴 모습으로 보여 줍니다. [물 높이](help:civil-water)
- {c:myCivil}: 3D 물체에서 보낸 내 구조물을 땅 위에 놓습니다. [내 토목 구조물](help:civil-my-civil)
- 일반 메뉴에서는 {c:road}만 {t:group.site} 탭에 있습니다. 다른 토목 도구는 명령줄에 \`bridge\`, \`tunnel\`처럼 명령 이름을 입력해도 열립니다.
- 높이는 찍은 점의 땅·물·이어진 도로에 맞춰 저절로 정해지고, 창에서 직접 고친 값은 그대로 씁니다. 지형이 있으면 {t:civil.heightRef}에서 {t:civil.sea}과 {t:civil.aboveGround} 가운데 높이를 넣는 방식을 선택합니다.
- 자주 쓰지 않는 값은 창의 {t:civil.more} 안에 있습니다.
- 점을 누른 채 0.5초 기다렸다가 끌면 곡선이 됩니다. 만든 뒤에는 구조물을 선택하고 속성 창에서 값을 바꾸거나 {c:pathEdit}으로 선을 고칩니다.
- 평탄화·도로·물길이 땅을 바꾸거나 구조물을 이동하면, 그 땅을 지나는 구조물이 같은 되돌리기 단계 안에서 새 땅에 다시 맞춰집니다. 사용자가 정한 높이(상판·갱문 높이, 마루, 옹벽 윗면, 호수 물 높이)는 그대로입니다. 자세한 내용은 [평탄화와 토목](help:civil-grading)에 있습니다.
- 속성 창 맨 아래에는 {t:civil.refit}, {t:cfit.editIn}, {t:cfit.unlink} 단추가 있습니다. {t:cfit.editIn}은 구조물을 3D 물체 작업 공간에서 열어 점·선·물체를 더하거나 구멍을 냅니다. {t:cfit.unlink}는 형식을 버리고 보통 솔리드로 바꿉니다.
- 만든 구조물은 {c:levelPanel} 창 맨 아래의 {t:aw.civil} 묶음에 종류별로 나옵니다. 이름을 클릭하면 그 구조물이 선택됩니다.
- 토목 구조물은 땅에 속하므로 건물의 1층 바닥 높이를 바꿔도 움직이지 않습니다. 건물 도구로는 선택할 수 없지만 스냅은 됩니다.
- 도로나 교량이 건물을 지나가도 만들어지지만, 알림이 뜨고 겹친 곳이 빨갛게 보입니다.
- 지형이 없으면 높이 0의 평평한 땅 위에 만듭니다.

## 자주 하는 실수

- {t:group.civil} 탭이 보이지 않습니다. 일반 메뉴에는 토목 탭이 없습니다. {t:level.advanced}을 선택하거나 명령줄에 \`road\`처럼 명령 이름을 입력합니다.
- 빨간 글이 나오고 만들어지지 않습니다. 선이 자기 자신과 엇갈리거나, 폭에 비해 너무 급하게 꺾였거나, 교량·터널이 형식에 비해 짧은 경우입니다. 창에 나온 이유대로 선을 고칩니다.
- 땅을 고쳤는데 교량이나 댐이 그대로이고 창에 빨간 글이 있습니다. 새 땅에 맞추면 만들 수 없는 모양(교각 200 m 초과, 상판이 땅속)이 되어 그대로 둔 경우입니다. 창에 나온 이유대로 높이나 선을 고칩니다.
`,Rt=`---
id: civil-rec-river-crossing
title: 예제: 강을 건너는 길
분류: 토목
난이도: 심화
workspace: 3D 건설
keywords: 예제, 따라 하기, 강, 하천, 개울, 다리, 교량, 거더교, 도로, 길, 진입로, 옹벽, 둑, 성토, 강 건너기, 다리 놓기, 다리와 길 잇기, 토목 예제, 강을 건너는 길, river crossing, bridge, road, retaining wall, tutorial
commands: waterBody, bridge, road, retainingWall
order: 110
---

## 무엇

골짜기를 흐르는 하천을 파고, 그 위에 거더교를 놓고, 다리 양쪽에서 길을 내어 다리 상판에 잇습니다. 다리 가까이의 높은 길둑은 옆면을 수직으로 하고 옹벽으로 받칩니다. 물길·교량·도로·옹벽이 서로의 높이를 읽어 저절로 맞춰지는 순서를 익히는 예제입니다.

## 하는 순서

1. 지형이 있는 땅을 준비합니다. {m:siteMap}로 개울이나 낮은 골짜기가 지나가는 곳을 선택하고, 메뉴 줄 오른쪽에서 {t:level.advanced}을 선택합니다.
2. {m:waterBody} 단추를 누르고 {t:civil.typeOf}에서 {t:civil.type.waterbody.river}을 선택합니다. {t:civil.more}을 펼쳐 {t:civil.width}을 \`20\`으로 정하고, {t:civil.waterDepth} 2 m와 {t:civil.bank} 1:2는 그대로 둡니다.
3. 골짜기의 높은 쪽(상류)에서 낮은 쪽(하류)으로 중심선의 점을 클릭하고 Enter를 누릅니다.
4. {m:bridge} 단추를 누르고 {t:civil.type.bridge.beam}를 선택합니다. 강을 직각으로 가로질러, 강 가운데에서 양쪽으로 30 m씩 떨어진 두 점(길이 60 m)을 클릭하고 Enter를 누릅니다. 상판은 물 위로 {t:civil.x.clearance}(기본 5 m)만큼 저절로 올라갑니다.
5. {m:road} 단추를 누르고 {t:civil.type.road.sidewalk}을 선택합니다(폭 10 m로 다리와 같습니다). 다리에서 100 m쯤 떨어진 곳에서 시작해, 마지막 점을 다리 한쪽 끝의 가운데(5 m 안)에 찍고 Enter를 누릅니다. 길 끝이 상판 높이에 맞춰집니다.
6. 다리 반대쪽 끝에도 같은 방법으로 길을 냅니다.
7. 길을 하나씩 선택하고 속성 창의 {t:civil.more} → {t:civil.x.earthHead}에서 {t:civil.fillSlope} 값을 \`0\`으로 바꿉니다. 다리 가까이의 길둑 옆면이 수직이 됩니다.
8. {m:retainingWall} 단추를 누르고 길둑 옆면을 따라 다리 끝에서부터 15 m쯤 그린 뒤 Enter를 누릅니다. 흙 쪽과 높이가 저절로 정해집니다. 다음 15 m와 반대쪽 옆면에도 같은 방법으로 옹벽을 세웁니다.

## 팁

- 순서가 중요합니다. 강이 먼저 있어야 다리가 물 위로 올라가고, 다리가 먼저 있어야 길 끝이 상판 높이에 맞춰집니다.
- 길은 {t:civil.maxGrade}(기본 8 %)보다 가파르게 오르지 않습니다. 8 %이면 높이 1 m를 오르는 데 12.5 m가 필요하므로, 상판이 땅보다 많이 높으면 길을 더 길게 그립니다.
- 교량 형식을 바꿔 볼 수 있습니다. {t:civil.type.bridge.arch}는 20 m 이상, {t:civil.type.bridge.truss}는 15 m 이상이고 곧게 그려야 합니다. 자세한 내용은 [교량](help:civil-bridge)에 있습니다.
- 다리 아래 높이는 교량의 {t:civil.more} → {t:civil.x.heightHead}에서 {t:civil.x.clearance}로 바꿉니다.
- 옹벽을 짧게 나눠 그리면 조각마다 높이가 그 구간의 길둑에 맞춰집니다. {t:civil.type.retaining.block}를 선택하면 돌을 쌓은 모양이 됩니다.
- 높은 길둑에는 도로 창의 {t:cf.road.rail}에서 {t:cf.road.rail.beam}을 선택해 가드레일을 세웁니다. 강가에는 [제방](help:civil-levee)을 그려 둑을 쌓을 수 있습니다.
- 나중에 강가 땅을 평탄화해도 교량의 교각·교대와 길은 새 땅에 저절로 다시 맞춰지고, 상판 높이는 그대로입니다.
- 다 만든 뒤 [면적표](help:site-area-table)에서 길둑과 물길 때문에 생긴 토공량을 봅니다. 순서의 원리는 [평탄화와 토목](help:civil-grading)에 있습니다.

## 자주 하는 실수

- 하천을 하류에서 상류 쪽으로 그렸습니다. 물 높이가 첫 점에 머물러 위쪽 땅이 깊게 파이므로 상류에서 하류 쪽으로 다시 그립니다.
- 다리를 강보다 먼저 그렸습니다. 상판이 물 위로 올라가지 않으므로 다리를 삭제하고 다시 그리거나 {t:civil.z0}와 {t:civil.z1}를 직접 높입니다.
- 길과 다리 사이에 턱이 생깁니다. 길의 마지막 점이 다리 끝 가운데에서 5 m보다 멀리 찍힌 경우입니다. 길을 삭제하고 다리 끝 가까이에 다시 찍습니다.
- 다리가 너무 짧다고 나옵니다. 형식마다 가장 짧은 길이가 있으므로 다리를 길게 그리거나 {t:civil.type.bridge.beam}를 씁니다.
- 옹벽 윗면이 길보다 많이 높습니다. 한 옹벽은 처음부터 끝까지 땅 위로 같은 높이이므로 길둑이 낮아지는 곳은 옹벽을 나눠 그립니다.
`,zt=`---
id: civil-retaining
title: 옹벽
분류: 토목
난이도: 중급
workspace: 3D 건설
keywords: 옹벽, 흙막이, 흙막이벽, 축대, 석축, 돌쌓기, 블록 쌓기, 캔틸레버, 역T형, L형, 중력식 옹벽, 보강토, 보강토 옹벽, 앵커, 앵커 옹벽, 지압판, 저판, 앞굽, 뒷굽, 배수공, 물빠짐 구멍, 난간, 기초 깊이, 높이 차이, 단차, 비탈, 언덕, 옹벽 세우기, 옹벽만들기, 옹볙, retaining wall, retaining, cantilever wall, gravity wall, reinforced earth, anchored wall
commands: retainingWall, grade, pathEdit
context: retainingWall
order: 50
---

## 무엇

높이가 다른 두 땅의 경계를 따라 흙을 받치는 벽을 세우는 도구입니다. 형식은 {t:civil.type.retaining.cantilever}, {t:civil.type.retaining.gravity}, {t:civil.type.retaining.block}, {t:civil.type.retaining.L}, {t:civil.type.retaining.rse}, {t:civil.type.retaining.anchor} 여섯 가지이고, 바닥은 땅속 기초 깊이까지 내려갑니다.

## 하는 순서

1. {m:retainingWall} 단추를 누릅니다.
2. {t:civil.typeOf}에서 형식을 선택합니다.
3. 높이가 바뀌는 땅의 경계를 따라 점을 차례로 클릭합니다.
4. 지형이 있으면 높은 쪽(흙 쪽)과 벽 높이가 저절로 정해집니다. 흙 쪽이 반대이면 {t:civil.x.flip}를 누릅니다.
5. 높이를 직접 정하려면 {t:civil.topGround}에서는 {t:civil.wallHeight}를, {t:civil.topLevel}에서는 {t:civil.wallTop}를 넣습니다.
6. Enter, 오른쪽 클릭 또는 더블클릭으로 만듭니다. 옹벽 하나를 만들면 도구가 끝납니다.

## 팁

- 흙(높은 쪽)은 그리는 방향의 왼쪽에 놓입니다. 지형이 있으면 선 양옆 2 m의 평탄화 뒤 땅을 비교해 높은 쪽을 찾고, 벽 윗면은 높은 쪽 땅보다 0.3 m 높게 정해집니다.
- {t:civil.topGround}은 선을 따라 땅 위로 같은 높이를 유지하고, {t:civil.topLevel}은 윗면을 한 높이로 맞춥니다.
- 형식마다 창에 나오는 값은 다음과 같습니다.

| 형식 | 값 |
| --- | --- |
| {t:civil.type.retaining.cantilever} | {t:civil.more}의 {t:civil.base}, {t:civil.x.toe} (뒷굽은 나머지) |
| {t:civil.type.retaining.L} | {t:cf.wall.lSide}({t:cf.wall.lSide.heel}·{t:cf.wall.lSide.toe}), {t:civil.more}의 {t:civil.base} |
| {t:civil.type.retaining.gravity} | {t:cf.wall.baseRatio}, {t:cf.wall.batter} |
| {t:civil.type.retaining.block} | 돌을 계단처럼 물려 쌓은 모양 |
| {t:civil.type.retaining.rse} | {t:cf.wall.blockH}, {t:cf.wall.stripGap}, {t:cf.wall.stripL} |
| {t:civil.type.retaining.anchor} | {t:cf.wall.rows}(1 ~ 6), {t:cf.wall.anchorGap}, {t:cf.wall.anchorL}, {t:cf.wall.anchorAngle}, {t:cf.wall.plate}, {t:cf.wall.plateS} |

- 어느 형식이든 {t:cf.g.wtop} 묶음의 {t:cf.wall.railing}을 켜면 윗면에 난간이 서고, {t:cf.wall.railH}를 정합니다.
- 앵커가 150개를 넘으면 앵커 간격이 저절로 넓어지고 안내가 나옵니다. 창에 {t:cf2.anchors}가 나옵니다.
- 지형이 있으면 {t:civil.heightRef}에서 높이를 {t:civil.sea}로 넣을지 {t:civil.aboveGround}로 넣을지 선택합니다.
- {t:civil.more}을 펼치면 {t:civil.wallThick}(기본 0.4 m), {t:civil.footing}(땅속으로 내려가는 깊이, 기본 1 m), {t:civil.x.weep}을 정합니다. 배수공 간격을 넣으면 그 간격마다 땅 위 0.3 m에 10 cm 구멍이 뚫리고, 0이면 구멍이 없습니다.
- 점을 누른 채 0.5초 기다렸다가 끌면 곡선이 됩니다. 만든 뒤에는 옹벽을 더블클릭하거나 {m:pathEdit}으로 점과 핸들을 고칩니다. 자세한 방법은 [곡선 편집](help:obj-curve-edit)에 있습니다.
- 만든 옹벽을 선택하면 속성 창에서 같은 값을 바꿉니다. 밑의 땅이 평탄화로 바뀌면 바닥이 새 땅에 저절로 다시 맞춰지고, 윗면 높이는 그대로입니다.
- 땅의 높이 차이는 [평탄화](help:site-grade)에서 깎기·채우기 비탈을 0으로 두면 수직 단이 됩니다. 그 경계를 따라 옹벽을 세우면 됩니다. 자세한 내용은 [평탄화와 토목](help:civil-grading)에 있습니다.

## 자주 하는 실수

- 옹벽을 세워도 땅 모양은 바뀌지 않습니다. 옹벽은 땅 위에 놓이는 벽일 뿐이므로, 높이 차이는 [평탄화](help:site-grade)로 먼저 만듭니다.
- 흙 쪽이 반대로 세워졌습니다. 흙 쪽은 그리는 동안 {t:civil.x.flip}로 바꿉니다. 이미 만든 옹벽은 삭제하고 반대 방향으로 다시 그립니다.
- 긴 옹벽의 윗면이 한쪽에서 너무 높습니다. {t:civil.topGround}은 선 전체에 같은 높이를 쓰므로, 높이 차이가 달라지는 곳은 옹벽을 여러 개로 나눠 그립니다.
- {t:civil.type.retaining.cantilever}인데 저판이 보이지 않습니다. {t:civil.base}이 0입니다. {t:civil.more}에서 폭을 넣습니다(예: \`1.8 m\`).
- 선이 자기 자신과 엇갈리면 만들어지지 않습니다. 엇갈리지 않게 다시 그립니다.
- {c:retainingWall}이 메뉴에 없습니다. 토목 탭은 고급 메뉴에만 있으므로 메뉴 줄 오른쪽에서 {t:level.advanced}을 선택합니다. [일반·고급 메뉴](help:start-level)를 봅니다.
`,Bt=`---
id: civil-road
title: 도로
분류: 토목
난이도: 중급
workspace: 3D 건설
keywords: 도로, 길, 찻길, 다리, 교량, 육교, 길 내기, road, street, bridge, 도로 만들기, 차로, 차선, 2차로, 4차로, 보도, 인도, 오솔길, 산책로, 중앙분리대, 가드레일, 방호벽, 연석, 측구, 도랑, 길어깨, 갓길, 횡단 경사, 편경사, 종단, 종단 경사, 오르막, 내리막, 포장, 지형 따라, 경사 일정, 깎기, 채우기, 도로 부속, 도루, lane, sidewalk, footpath, guardrail, median, curb, side ditch, cross slope, superelevation, grade, profile, pavement
commands: road, bridge, pathEdit
howto: road
context: road
order: 20
---

## 무엇

땅 위에 중심선을 점으로 찍어 길을 내는 도구입니다. 길은 지형을 따라가거나 일정한 경사로 놓이고, 그 아래 땅은 깎고 채워 길과 이어집니다. 가드레일·중앙분리대·보도·측구를 길에 붙일 수 있습니다.

## 하는 순서

1. {m:road} 단추를 누릅니다 (다리는 {c:bridge}).
2. 중심선이 될 점을 차례로 클릭합니다.
3. Enter·오른쪽 클릭·더블클릭으로 만듭니다. 폭과 경사는 창에서 정합니다.

## 팁

- {t:civil.typeOf}은 {t:civil.type.road.two}(폭 6 m), {t:civil.type.road.four}(16 m, 중앙분리대), {t:civil.type.road.sidewalk}(10 m), {t:civil.type.road.path}(1.5 m) 가운데에서 선택합니다. 형식을 바꾸면 폭도 그 형식에 맞게 바뀝니다. 폭은 1 ~ 50 m로 직접 넣을 수 있습니다.
- 높이(종단)는 두 가지로 정합니다. {t:civil.follow}는 땅을 부드럽게 따라가되 {t:civil.maxGrade}(기본 8 %)보다 가파르지 않게 언덕은 깎고 골은 채웁니다. {t:civil.grade}은 {t:civil.z0}에서 {t:civil.z1}까지 곧게 오르내리고, 창에 그 {t:civil.gradeNow}가 나옵니다. 경사는 30 %를 넘지 않도록 끝 높이가 맞춰집니다.
- 끝점이 다른 도로나 교량·터널의 끝 가까이에 있으면 그 높이에 맞춰 이어집니다. 다른 도로와 엇갈리는 곳은 두 길의 윗면 높이가 맞춰집니다.
- 창의 도로 부속 칸으로 길에 부속을 붙입니다. 모두 {t:cf.road.rail.none}이면 예전처럼 포장만 만듭니다.

| 부속 | 선택하는 값 |
| --- | --- |
| {t:cf.road.rail} | {t:cf.road.rail.beam}·{t:cf.road.rail.pipe}·{t:cf.road.rail.concrete}, {t:cf.road.railSide}, {t:cf.road.railH}, {t:cf.road.postGap} |
| {t:cf.road.median} | {t:cf.road.median.curb}·{t:cf.road.median.barrier}, {t:cf.road.medianW}, {t:cf.road.medianH} |
| {t:cf.road.walk} | 왼쪽·오른쪽·양쪽, {t:cf.road.walkW}, {t:cf.road.curbH} |
| {t:cf.road.ditch} | {t:cf.road.ditch.U}, {t:cf.road.ditchW}, {t:cf.road.ditchD} |

- 보도와 중앙분리대는 길 폭 안에, 측구는 길 가장자리 바로 바깥에 놓입니다. 가드레일 지주가 양쪽 합쳐 90개를 넘으면 지주 간격이 저절로 넓어지고 안내가 나옵니다.
- {t:civil.more}을 펼치면 차로 구성({t:civil.x.lanes} 1 ~ 8, {t:civil.x.laneWidth} 2.5 ~ 4 m, {t:civil.x.shoulder}, {t:civil.x.median}, {t:civil.x.walk})을 정합니다. 이 값들의 합이 길의 폭이 되고, 폭을 직접 넣으면 차로가 그 폭을 다시 나눠 가집니다.
- {t:civil.x.crossSlope}는 물이 흘러내리도록 길 가운데를 높게 하는 기울기입니다(0 ~ 6 %, 새 도로는 2 %). {t:civil.x.superelev}는 굽은 곳에서 길을 안쪽으로 기울입니다(0 ~ 10 %).
- 포장은 {t:civil.x.layer0}·{t:civil.x.layer1}·{t:civil.x.layer2} 세 층이고, 합이 {t:civil.paveThick}입니다.
- 길 아래 땅의 비탈은 {t:civil.cutSlope}·{t:civil.fillSlope}으로 정합니다(기본 1과 1.5).
- 점을 누른 채 0.5초 기다렸다가 끌면 곡선 도로가 됩니다. 점은 \`x,y\`처럼 좌표로 입력해도 됩니다. Ctrl+Z는 마지막 점 하나를 취소합니다.
- 만든 도로를 선택하면 속성 창에서 같은 값을 바꾸고, {c:pathEdit}으로 점과 핸들을 고칩니다.
- {t:civil.follow} 도로는 나중에 평탄화나 지형이 바뀌어도 새 땅을 저절로 다시 따라갑니다. {t:civil.grade} 도로는 정한 높이를 그대로 지킵니다.
- 강이나 골짜기를 건너는 곳은 [교량](help:civil-bridge)으로, 산을 지나는 곳은 [터널](help:civil-tunnel)로 만들고 도로 끝을 그 끝에 이어 그립니다. 길과 따로 놓는 배수로는 [배수 시설](help:civil-drainage)에 있습니다.

## 자주 하는 실수

- {c:road}가 메뉴에 없습니다. 일반 메뉴에서는 {t:group.site} 탭에, 고급 메뉴에서는 {t:group.civil} 탭에 있습니다. 명령줄에 \`road\`를 입력해도 됩니다.
- 곡선 도로가 만들어지지 않고 빨간 글이 나옵니다. 길 폭에 비해 너무 급하게 굽어 길 가장자리가 접히는 경우입니다. 곡선을 완만하게 하거나 폭을 줄입니다.
- 도로가 건물을 지나간다는 알림이 뜹니다. 도로는 만들어지지만 겹친 곳이 빨갛게 보입니다. 선을 이동하거나 [작업 범위](help:site-scope)의 건물 위치를 확인합니다.
- {t:civil.grade}으로 두었더니 길이 땅속으로 들어가거나 높이 뜹니다. 땅을 따라가지 않으므로 {t:civil.z0}·{t:civil.z1}를 땅 높이에 맞추거나 {t:civil.follow}로 바꿉니다.
- 보도를 켰더니 차로가 좁아졌습니다. 보도는 길 폭 안에 들어가므로 길 폭을 그만큼 넓힙니다.
`,Vt=`---
id: civil-tunnel
title: 터널
분류: 토목
난이도: 중급
workspace: 3D 건설
keywords: 터널, 굴, 지하차도, 갱문, 갱구, 라이닝, 마제형, 원형 터널, 상자형, 개착, 개착형, 내공, 인버트, 쌍굴, 터널 두 개, 면벽, 벨마우스, 원통절개, 입구 땅 파기, 입구 깎기, 터널 만들기, 산 뚫기, 터늘, tunnel, portal, lining, horseshoe, cut and cover, underpass, twin bore, portal cut
commands: tunnel, road, sectionView, pathEdit
context: tunnel
order: 40
---

## 무엇

한쪽 갱문에서 다른 쪽 갱문까지 중심선을 그리면 라이닝(터널 벽)·노면·보도·조명·갱문을 만드는 도구입니다. 양 갱문 앞의 땅은 노면 높이까지 저절로 파이고, 산 속(갱문 사이)의 땅은 그대로 남습니다.

## 하는 순서

1. {m:tunnel} 단추를 누릅니다.
2. {t:civil.typeOf}에서 {t:civil.type.tunnel.horseshoe}, {t:civil.type.tunnel.circle}, {t:civil.type.tunnel.box}, {t:civil.type.tunnel.cutcover} 가운데 하나를 선택합니다.
3. 한쪽 갱문에서 다른 쪽 갱문까지 점을 차례로 클릭합니다.
4. 창에서 {t:cf.tunnel.lanes}, {t:cf.tunnel.height}, {t:cf.tunnel.portal} 같은 값을 정합니다.
5. Enter·오른쪽 클릭·더블클릭으로 만듭니다. 터널 하나를 만들면 도구가 끝납니다.

## 팁

- 노면의 {t:civil.z0}·{t:civil.z1}는 갱문 자리의 땅 높이나, 그곳에 이어진 도로·교량 끝의 높이로 저절로 정해집니다. 갱문 사이의 노면은 두 높이를 곧게 잇고, 창에 그 {t:civil.gradeNow}가 나옵니다.
- 창에는 {t:cf.clearW}과 {t:cf.outerW}이 나옵니다. 내부 폭은 차로 수 × 차로 폭에 양쪽 측대와 보도를 더한 값입니다.
- 창의 값은 세 묶음입니다.

| 묶음 | 값 |
| --- | --- |
| {t:cf.g.tsection} | {t:cf.tunnel.height}(노면에서 천장까지, 2.5 ~ 15 m), {t:cf.tunnel.lining}(0.15 ~ 1.5 m), {t:cf.tunnel.invert}(마제형만), {t:cf.tunnel.bores}(1 ~ 2), 터널이 둘이면 {t:cf.tunnel.boreGap}(2 ~ 60 m) |
| {t:cf.g.tinside} | {t:cf.tunnel.lanes}(1 ~ 4), {t:cf.tunnel.laneWidth}(2.5 ~ 4 m), {t:cf.tunnel.verge}, {t:cf.tunnel.walk}(없음·왼쪽·오른쪽·양쪽)와 {t:cf.tunnel.walkW}, {t:cf.tunnel.pave}, {t:cf.tunnel.lights}(0 ~ 4) |
| {t:cf.g.tportal} | {t:cf.tunnel.portal}: 면벽형({t:cf.tunnel.portalT}, {t:cf.tunnel.wing}, {t:cf.tunnel.parapet}), 벨마우스형({t:cf.tunnel.portalLen}), 원통절개형({t:cf.tunnel.cutAngle} 30 ~ 80°) |

- {t:cfit.dig}는 처음부터 켜져 있습니다. 갱문 면에서 바깥쪽으로, 이어진 도로가 있으면 그 중심선을 따라, 없으면 터널 선을 곧게 이어서 땅을 팝니다. 깊이는 노면 아래 포장 바닥까지, 폭은 갱문 폭에 양쪽 1 m를 더한 만큼이고, 원래 땅이 노면 높이까지 내려오는 곳(최대 150 m)에서 끝납니다. 둘레는 1 : 0.5 비탈로 땅과 이어지고, 원통절개형은 자기 절개 각도를 씁니다.
- 판 흙의 양은 창의 {t:cfit.digCut}와 [면적표](help:site-area-table)의 토공량에 들어갑니다. 터널을 이동하면 파인 곳도 함께 이동되고, 삭제하면 함께 사라집니다.
- 산 속 부분은 파이지 않으므로 명령줄에 \`section\`을 입력해 {c:sectionView}로 잘라 보거나, {c:terrainView}에서 땅 불투명도를 낮춰 봅니다.
- 터널 양 끝에 도로를 이어 그리면 도로 끝이 갱문 노면 높이에 맞춰집니다. 만든 뒤에는 속성 창에서 값을 바꾸고 {c:pathEdit}으로 선을 고칩니다.
- 갱문 자리의 땅이 평탄화로 바뀌면 터널이 새 땅에 저절로 다시 맞춰집니다. 노면 높이는 그대로입니다.
- 속성 창의 {t:cfit.editIn}으로 환기구·표지판 같은 물체를 더할 수 있습니다. {t:cfit.unlink}를 누르면 보통 솔리드가 되고, 입구에 판 땅은 보통 평탄화로 남아 그대로 파여 있습니다.
- 토목 도구는 고급 메뉴에서 보입니다. 토목 전체는 [토목](help:civil-overview)에 정리되어 있습니다.

## 자주 하는 실수

- 너무 짧다는 빨간 글이 나옵니다. 터널은 10 m 이상으로 그립니다.
- 폭에 비해 너무 급하게 꺾였다는 글이 나옵니다. 라이닝 바깥 폭(터널이 둘이면 두 터널과 간격까지)에 비해 급하게 꺾인 경우입니다. 꺾는 각을 줄이거나 꺾인 사이를 길게 그립니다.
- 부분들을 하나로 이을 수 없어 만들지 않았다는 글이 나옵니다. 갱문 가까이에 선의 꺾인 점이 있으면 생길 수 있습니다. 갱문 근처를 곧게 그립니다.
- 입구 앞이 파이지 않습니다. {t:cfit.dig}가 꺼져 있거나, 갱문 앞의 땅이 이미 노면보다 낮은 경우입니다.
- 터널을 만들었는데 산 속이 비어 보이지 않습니다. 산 속의 땅은 파지 않습니다. {c:sectionView}로 확인합니다.
`,Ht=`---
id: civil-water
title: 물 높이
분류: 토목
난이도: 기초
workspace: 3D 건설
keywords: 물, 물 높이, 수위, 저수지, 호수, 바다, 해수면, 침수, 홍수, 잠기는 땅, 담수 면적, 물 채우기, 물 없애기, 물 목록, 물 추가, 여러 물 높이, 댐 담수, 해발, 만수위, 물높이, 물 놓기, water, water level, waterlevel, sea level, flood, reservoir, several water levels
commands: water, dam, waterBody
context: water
order: 80
---

## 무엇

물 높이를 정하면 그보다 낮은 땅이 물에 잠겨 보이게 하는 도구입니다. 호수, 바다, 홍수로 땅이 잠기는 모습을 볼 때 씁니다. 땅은 파이지 않습니다. 물 높이는 여러 개 둘 수 있습니다.

## 하는 순서

1. {m:water} 단추를 누릅니다.
2. {t:water.level} 칸에 물 높이를 넣습니다.
3. {t:water.scope}에서 {t:water.all}, {t:area.site}, {t:area.building} 가운데 하나를 선택합니다.
4. 물 높이보다 낮은 땅이 반투명한 물로 덮입니다. {t:water.area}에서 잠긴 넓이를 봅니다.
5. Enter를 누르면 창이 닫힙니다. 물을 없애려면 {t:water.none}를 누릅니다.

## 팁

- 지형이 있으면 {t:civil.heightRef}에서 {t:civil.sea}(해발 높이) 또는 {t:civil.aboveGround}(가장 낮은 땅에서 잰 높이)를 선택합니다. 창의 {t:water.lowest} 값을 기준으로 삼으면 편합니다.
- 바다에 닿은 땅은 {t:civil.sea}로 두고 물 높이에 \`0\`을 넣으면 해수면이 됩니다.
- 물 높이는 가장 낮은 땅보다 10 m 아래부터 가장 높은 땅보다 50 m 위까지 넣을 수 있습니다. 바꿀 때마다 되돌리기 한 단계가 됩니다.
- 물 높이를 하나 정하면 창 위에 {t:water.list}이 나옵니다. {t:water.add}를 누르면 가장 높은 물보다 1 m 높은 물 높이가 하나 더 생기고, 목록의 단추로 고칠 물 높이를 선택합니다. 물 높이마다 {t:water.scope}을 따로 정합니다.
- {t:area.site}를 선택하면 한 대지 안만 채웁니다. 대지가 여러 개이면 {t:so.target}에서 대지를 선택하고, 이때 작업 범위도 그 대지로 이동됩니다.
- 저수지는 [댐](help:civil-dam)의 담수로 만드는 것이 좋습니다. 댐 뒤 골짜기만 만수위까지 채우고, 창 아래 {t:water.dams}에 댐마다 높이와 넓이가 나옵니다. 이 값은 댐 창에서 바꿉니다.
- 물 높이를 정한 뒤 그리는 댐은 마루가 물보다 여유고 이상 높게, 교량은 상판이 물 위로 형하고만큼 높게 저절로 정해집니다.
- 땅을 파서 만드는 호수·연못·하천은 [물길·못](help:civil-waterway)으로 만듭니다.

## 자주 하는 실수

- 낮은 땅이 모두 물에 잠깁니다. 물은 그 높이보다 낮은 땅을 모두 채웁니다. 한 곳만 채우려면 그곳을 감싸는 대지를 그리고 {t:water.scope}을 {t:area.site}로 바꾸거나, 댐의 담수를 씁니다.
- {t:area.building}을 선택했는데 물이 보이지 않습니다. 아직 건물 외곽선이 없거나 건물 외곽선 자리가 물 높이보다 높은 경우입니다.
- 지형이 없는 평평한 땅에서는 물 높이가 0보다 높아야 물이 보이고, 땅 전체가 잠깁니다.
- {t:water.add} 단추가 없습니다. 물 높이를 하나 먼저 넣어야 목록과 함께 나옵니다.
- 물 도구는 땅을 파지 않습니다. 땅을 파서 호수나 하천을 만들려면 [물길·못](help:civil-waterway)을 씁니다.
- {c:water}이 메뉴에 없습니다. 메뉴 줄 오른쪽에서 {t:level.advanced}을 선택합니다.
`,Ut=`---
id: civil-waterway
title: 물길·못
분류: 토목
난이도: 중급
workspace: 3D 건설
keywords: 물길, 못, 연못, 호수, 저수지, 하천, 강, 개울, 시내, 냇물, 수로, 물웅덩이, 인공 호수, 땅 파기, 물 채우기, 둑 경사, 상류, 하류, 물길못, 강 만들기, 호수 만들기, waterbody, lake, pond, river, stream
commands: waterBody, water, pathEdit
context: waterBody
order: 60
---

## 무엇

호수·저수지와 연못은 외곽선을, 하천은 위쪽(상류)에서 아래쪽(하류)으로 중심선을 그려 땅을 파고 물을 채우는 도구입니다. 판 땅은 평탄화처럼 지형에 반영됩니다.

## 하는 순서

1. {m:waterBody} 단추를 누릅니다.
2. {t:civil.typeOf}에서 {t:civil.type.waterbody.lake}, {t:civil.type.waterbody.pond}, {t:civil.type.waterbody.river} 가운데 하나를 선택합니다.
3. 호수·연못은 외곽선의 점을 차례로 클릭하고, 첫 점을 다시 클릭하면 닫히면서 만들어집니다.
4. 하천은 높은 쪽(상류)에서 낮은 쪽(하류)으로 중심선의 점을 클릭하고 Enter를 누릅니다.
5. 만든 물을 선택하면 속성 창에서 {t:civil.waterDepth}와 (호수·연못은) {t:civil.waterLevel}를 바꿉니다.

## 팁

- 기본 깊이는 {t:civil.type.waterbody.lake} 5 m, {t:civil.type.waterbody.pond} 1.5 m, {t:civil.type.waterbody.river} 2 m입니다. 처음 선택한 형식은 {t:civil.type.waterbody.pond}입니다.
- 호수·연못의 물 높이는 처음에 둘레의 가장 낮은 땅보다 0.3 m 아래로 정해지고, 외곽선 안은 물 높이에서 깊이만큼 아래 바닥까지 곧게 파입니다.
- 하천의 물 높이는 땅을 따라가되 하류로 갈수록 올라가지 않습니다. 물은 땅보다 약 0.3 m 아래에 있고, 물길은 바닥 폭과 둑 경사로 파입니다.
- 하천의 바닥 폭({t:civil.width}, 기본 10 m)과 {t:civil.bank}(기본 1:2)는 {t:civil.more}에서 정합니다. {t:civil.bank}가 0이면 물길 옆면이 수직이 됩니다.
- 점을 누른 채 0.5초 기다렸다가 끌면 곡선이 됩니다. 만든 뒤에는 더블클릭하거나 {m:pathEdit}으로 모양을 고칩니다.
- 하천의 물 높이는 평탄화 전의 원래 땅을 따르므로 평탄화로는 바뀌지 않고, 지형 자체가 바뀌면 저절로 다시 맞춰집니다. 호수·연못의 물 높이는 직접 넣은 값일 수 있어 그대로 남습니다. 선택한 상태에서 {t:civil.refit}를 누르면 새 땅에 맞춰 다시 정해지고, 직접 넣은 물 높이도 바뀝니다.
- 속성 창의 {t:cfit.unlink}를 누르면 보통 솔리드가 되고, 판 땅은 보통 평탄화로 남아 그대로 파여 있습니다. 호수·연못이 판 땅은 평탄화 창의 목록에 대지 없는 항목으로 나와 고치거나 삭제할 수 있습니다.
- 강을 따라 쌓는 둑은 [제방](help:civil-levee), 골짜기를 막는 둑은 [댐·보](help:civil-dam)로 만듭니다.
- 물길·못이 판 흙은 [면적표](help:site-area-table)의 토공량에 함께 들어갑니다. 평탄화·도로와의 순서는 [평탄화와 토목](help:civil-grading)에 있습니다.
- 물길·못을 먼저 만들고 [교량](help:civil-bridge)을 그리면 다리 상판이 물 위로 형하고만큼 저절로 올라갑니다.
- 땅 전체를 한 높이의 물로 덮는 것은 {c:water} 도구입니다. 차이는 [물 높이](help:civil-water)에 있습니다.

## 자주 하는 실수

- 하천을 하류에서 상류 쪽으로 그렸습니다. 물 높이가 첫 점의 낮은 높이에 머물러 위쪽 땅이 깊게 파입니다. 상류에서 하류 쪽으로 다시 그립니다.
- 호수·연못의 물이 땅 위로 솟은 덩어리처럼 보입니다. {t:civil.waterLevel}를 둘레 땅보다 높게 정한 경우이므로 물 높이를 낮춥니다.
- 외곽선이 자기 자신과 엇갈리면 만들어지지 않습니다. 엇갈리지 않게 다시 그립니다.
- 지형이 없는 평평한 땅에서는 땅이 파이지 않습니다. 먼저 [건설 지역](help:site-map)에서 지형을 받습니다.
- {c:waterBody}이 메뉴에 없습니다. 메뉴 줄 오른쪽에서 {t:level.advanced}을 선택합니다.
`,Wt="---\nid: more-ai-ask\ntitle: AI에게 만들기 부탁하기\n분류: 그 밖의 기능\n난이도: 중급\nworkspace: 공통\nkeywords: AI, 인공지능, 만들어 줘, 만들어줘, 만들기 부탁, 부탁하기, 말로 만들기, 문장으로 만들기, 자동으로 만들기, Cadoo에게 부탁, 카두, 책상 만들어, 의자 만들어, 집 만들어, 계단 만들어, 위에, 옆에, 둘레에, 사이에, 일렬로, 원형으로, 간격, 개수, 크기 말하기, 색 바꿔 줘, 옮겨 줘, 지워 줘, 키워 줘, 줄여 줘, 되돌리기, 하는 법 물어보기, 어떻게 해, 어디 있어, 단축키 물어보기, AI make, make it for me, ask to make, natural language, chat command, undo\ncommands: cadooChat, undo\norder: 50\n---\n\n## 무엇\n\n{c:cadooChat} 창에 만들 것을 말로 적으면 Cadoo가 알아들은 대로 바로 만들거나 바꿉니다. 크기, 개수, 위치(위에, 옆에, 둘레에, 사이에), 배치(일렬로, 원형으로)를 함께 말할 수 있습니다. 만든 것은 되돌리기 한 단계로 들어가므로 마음에 들지 않으면 바로 되돌릴 수 있습니다. AI가 연결되어 있지 않아도 이 기능은 동작합니다.\n\n## 하는 순서\n\n1. Cadoo를 두 번 클릭해 {c:cadooChat} 창을 엽니다.\n2. 만들 것을 크기, 개수, 위치와 함께 한 문장으로 적고 Enter를 누릅니다. 예: `의자 4개를 책상 둘레에 만들어 줘`\n3. Cadoo가 알아들은 것은 바로 만들어지고, 답에 무엇을 어디에 만들었는지 나옵니다.\n4. 결과가 마음에 들지 않으면 답 아래의 {t:aimake.undo} 단추를 누릅니다. Cadoo가 한 그 한 단계만 되돌아갑니다.\n5. 이미 있는 물체를 바꾸려면 이름으로 가리켜 말합니다. 예: `직육면체 1을 빨간색으로 칠해 줘`\n\n## 팁\n\n### 만들 수 있는 것\n\n- 기본 도형: 직육면체(상자, 정육면체), 원기둥, 구(공), 원뿔, 도넛, 쐐기, 각기둥(육각기둥 등), 피라미드, 반구\n- 물체: 책상, 탁자, 의자, 스툴, 벤치, 침대, 소파, 책장, 계단, 집, 탑, 나무, 눈사람, 자동차, 버스, 컵, 병, 판, 그릇, 파이프, 로켓, 로봇, 사람, 동물, 다리, 성, 울타리, 스탠드, 가로등, 연필, 비행기, 보트\n- 3D 건설에서는 벽, 방, 기둥, 창문, 문도 만듭니다. 집은 벽 4개와 지붕으로 만들어집니다.\n- 모르는 것을 부탁하면 아직 만들 줄 모른다고 답하고 만들 수 있는 것을 알려 줍니다.\n\n### 크기, 개수, 모양\n\n- 크기는 `가로`, `세로`, `높이`, `지름`, `반지름`과 함께 말합니다. 단위(`mm`, `cm`, `m`)를 붙이지 않으면 3D 물체는 mm, 3D 건설은 m로 읽습니다.\n- 책상, 의자 같은 물체는 크기를 하나만 말해도 나머지를 그 물체의 실제 비율에 맞춰 정합니다. 크기를 말하지 않으면 3D 건설에서는 실제 크기로, 3D 물체에서는 긴 변 약 80 mm의 모형으로 만듭니다. 컵, 연필처럼 작은 것은 3D 물체에서도 실제 크기입니다.\n- 개수는 `4개`, `3그루`, `네 개`처럼 말합니다. 한 번에 50개까지 만듭니다.\n- 모양을 정하는 말: `계단 10단`, `책장 5칸`, `2층 집`, `평지붕`·`박공지붕`·`모임지붕`·`외쪽지붕`, `구멍 뚫린`, `속이 빈`, `등받이 없는 의자`, `손잡이 없는 컵`, `큰`·`작은`, `빨간`·`파란` 같은 색\n\n| 이렇게 말하면 | 이렇게 만듭니다 |\n|---|---|\n| `가로 2m 세로 1m 높이 75cm 책상` | 그 크기의 책상 하나 |\n| `탁자 하나와 의자 4개 만들어 줘` | 탁자 1개와 의자 4개 |\n| `평지붕 2층 집` | 평지붕을 얹은 2층 집 |\n| `구멍 뚫린 컵` | 속이 빈 컵 |\n\n### 위치와 배치\n\n| 이렇게 말하면 | 이렇게 놓습니다 |\n|---|---|\n| `이 상자 위에 원기둥 올려` | 선택한 상자 위에 원기둥 |\n| `그 위에 공 올려 줘` | 방금 만든 것 위에 공 |\n| `의자 4개를 책상 둘레에` | 책상을 바라보게 둘레에 의자 4개 |\n| `두 상자 사이에 원기둥 놓아 줘` | 두 상자 사이에 원기둥 |\n| `상자 1과 상자 2 사이에 공` | 이름으로 가리킨 두 물체 사이에 공 |\n| `나무 3그루를 일렬로` | 한 줄로 나무 3그루 |\n| `원기둥 6개를 원형으로 배치해 줘` | 원 모양으로 원기둥 6개 |\n| `상자 2개를 10 간격으로 나란히` | 10씩 띄워 한 줄로 상자 2개 |\n| `x로 3m 떨어진 곳에 지름 1m 공` | 원점에서 x 방향으로 3 m 떨어진 곳에 공 |\n| `남쪽 벽에 창문 2개` | (3D 건설) 남쪽 벽에 같은 간격으로 창문 2개 |\n| `의자를 책상 옆으로 옮겨 줘` | 있는 의자를 책상 옆으로 이동함 |\n\n- 쓸 수 있는 위치 말: `위에`, `아래에`, `옆에`, `왼쪽에`, `오른쪽에`, `앞에`, `뒤에`, `안에`, `사이에`, `둘레에`(`주위에`), `원점에`\n- 쓸 수 있는 배치 말: `일렬로`(`한 줄로`, `나란히`), `앞뒤로`, `원형으로`, `쌓아서`, `10 간격으로`, `같은 간격으로`\n- `이 상자`, `이거`는 지금 선택한 물체를, `그`는 방금 만든 것을 가리킵니다. 이름은 객체 목록에 보이는 이름(예: `직육면체 1`)을 씁니다.\n\n### 있는 물체 바꾸기\n\n- 크기: `직육면체 2 반으로 줄여 줘`, `이거 2배로 키워줘`, `높이를 5cm로 바꿔 줘`, `지름을 20mm로 바꿔줘`\n- 이동·회전: `위로 10 올려줘`, `오른쪽으로 20mm 옮겨줘`, `원점으로 옮겨줘`, `90도 돌려줘`, `x축으로 45도 회전해줘`\n- 색·재질: `파란색으로 칠해줘`, `유리로 바꿔줘`, `나무 재질로 해줘`\n- 그 밖에: `3개 복사해줘`, `하나 더 만들어줘`, `숨겨줘`, `이거 삭제해`\n- 어느 물체인지는 이름, 지금 선택한 물체, 또는 그 모양이 하나뿐일 때 그 물체로 정합니다.\n\n### 되돌리기\n\n- {t:aimake.undo} 단추는 Cadoo가 한 그 한 단계만 되돌리고, 누르면 {t:aimake.undone}로 바뀝니다.\n- 그 뒤에 다른 작업을 했으면 단추가 흐려집니다. 이때는 Ctrl+Z로 한 단계씩 되돌립니다. 뒤의 작업을 Ctrl+Z로 되돌려 Cadoo의 작업이 다시 마지막 단계가 되면 단추를 다시 쓸 수 있습니다. [되돌리기](help:start-undo)를 봅니다.\n\n### 사용법 묻기\n\n- `구멍 뚫는 법`, `돌출은 어떻게 해?`처럼 물으면 이 도움말에서 맞는 쪽을 찾아 하는 순서를 보여 줍니다. 답 아래 단추로 그 도구를 바로 열거나, 그 도움말 쪽을 엽니다.\n- `모깎기 어디 있어?`처럼 물으면 메뉴 위치를, `저장 단축키`처럼 물으면 단축키를 알려 줍니다.\n- AI가 연결되어 있으면 규칙으로 알아듣지 못한 부탁은 AI가 맡아 만듭니다. AI가 만든 것에도 같은 {t:aimake.undo} 단추가 붙습니다. 연결 방법은 [AI 연결](help:more-ai-setup)에 있습니다.\n\n## 자주 하는 실수\n\n- 같은 모양이 여러 개 있어 어느 것인지 모른다고 답합니다. 바꿀 물체를 먼저 선택하거나 `직육면체 2`처럼 이름을 말합니다.\n- 없는 이름을 말하면 그런 물체가 없다고 답합니다. 이름은 객체 목록에서 확인합니다.\n- `책상 둘레에`처럼 가리킨 물체가 없으면 만들지 않습니다. 가리킬 물체를 먼저 만듭니다.\n- 문장의 일부를 알아듣지 못하면 알아들은 것만 만들고, 반영하지 못한 말을 답에 적습니다. 그 부분은 직접 고칩니다.\n- 3D 물체에서 크기 없이 `집 만들어 줘`라고 하면 실제 크기가 아닌 작은 모형으로 만듭니다. 크기를 함께 말합니다.\n- 허용 범위를 벗어난 크기는 만들지 않습니다. 다른 크기로 다시 말합니다.\n- `상자 만드는 법`처럼 묻는 문장은 만들기 부탁이 아니라 사용법 질문으로 읽습니다. 바로 만들려면 `상자 만들어 줘`처럼 말합니다.\n- 위험한 물건은 만들지 않습니다. [AI가 못 하는 것·안전](help:more-ai-limits)을 봅니다.\n",Gt=`---
id: more-ai-limits
title: AI가 못 하는 것·안전
분류: 그 밖의 기능
난이도: 기초
workspace: 공통
keywords: AI 안전, 안전 규칙, 거절, 왜 안 돼, 답을 안 해, 못 하는 것, 개인 정보, 전화번호, 주소, 비밀번호, 욕, 욕설, 고운 말, 위험한 질문, 대화 멈춤, AI 쉼, 교사 알림, 안전 알림, 상담, 1388, 109, 힘들어, 고민, 숙제, AI 틀림, 잘못된 답, 확인되지 않은 내용, 선생님이 봐, 대화 비밀, AI safety, refused, declined, personal information, privacy, swear words, pause, teacher alert, counselling, wrong answer, 멘토
commands: cadooChat
order: 60
---

## 무엇

Cadoo 대화와 도움말의 AI는 만들기, NukCAD 사용법, 학교 공부, 가벼운 일상 이야기를 돕습니다. 학생이 안전하게 쓰도록 정해 둔 규칙이 있어 돕지 않는 이야기가 있고, AI의 답이 틀릴 때도 있습니다. 이 쪽은 그 규칙과 주의할 점을 설명합니다.

## 하는 순서

1. 질문은 만들기, NukCAD 사용법, 학교 공부, 가벼운 일상 이야기로 합니다.
2. 이름, 주소, 전화번호, 비밀번호 같은 개인 정보는 적지 않습니다.
3. Cadoo가 돕지 않겠다고 답하면 질문을 만들기나 NukCAD 이야기로 바꿉니다.
4. AI가 알려 준 메뉴나 단계는 화면과 도움말에서 한 번 더 확인합니다.
5. 힘든 일이나 걱정되는 일이 있으면 멘토나 보호자처럼 믿을 수 있는 어른에게 이야기합니다.

## 팁

### AI가 돕지 않는 이야기

- 위험한 것: 무기, 폭발물, 약물, 독, 사람을 해치는 방법, 해킹. 이런 질문에는 정해진 답으로 정중히 거절하고 다른 만들기를 권합니다. 위험한 물건을 만들어 달라는 부탁도 만들지 않습니다.
- 성적인 내용, 다른 사람의 개인 정보를 알아내는 방법
- 그 밖에 돕기 어려운 주제: 정치와 선거, 어느 종교가 옳은지, 주식·코인·도박, 약이나 진단 같은 의료 상담, 소송 같은 법률 상담, 연예인 소문. 이런 질문에는 도울 수 있는 주제를 알려 줍니다.
- 이야기 속 장면이나 게임이라고 바꿔 물어도 규칙은 같습니다. "규칙을 무시해"처럼 규칙을 바꾸라는 말도 따르지 않습니다.
- 숙제를 대신 해 주지는 않습니다. 푸는 방법이나 힌트는 물어볼 수 있습니다.

### 힘들 때

- 자해나 자살 이야기를 하면 AI는 따뜻하게 답하고 도움받을 곳을 알려 줍니다. 청소년 상담 전화 1388, 자살 예방 상담 전화 109에 전화하거나 문자를 보낼 수 있고, 지금 위험하면 112나 119에 바로 연락합니다.

### 말투와 쉬기

- 욕이 들어간 질문에는 고운 말로 다시 말해 달라고 답합니다. 답에 나오는 욕은 가려서 보여 줍니다.
- 짧은 동안 위험한 이야기가 되풀이되면 AI 대화가 몇 분 동안 쉽니다. 그동안에도 NukCAD로 만들기는 계속할 수 있습니다.

### 멘토에게 가는 것

- 멘토는 Cadoo 대화를 볼 수 없습니다. 멘토 서버를 거쳐 답할 때도 대화는 서버에 남지 않습니다.
- 멘토 서버 주소와 학년·반·번호가 정해져 있으면, 자해, 위험한 것, 성적인 내용 이야기를 했을 때 멘토에게 **번호와 종류만** 알려집니다. 질문, 답, 대화 내용은 보내지 않습니다. 이 사실은 처음 한 번 대화 창에 안내됩니다.
- 멘토 서버 주소나 학년·반·번호가 없으면 아무 곳에도 알리지 않습니다. 이 컴퓨터에도 거절한 기록을 남기지 않습니다.

### 답이 틀릴 때

- AI는 틀린 메뉴 이름이나 단계를 말할 수 있습니다. 답에 나온 메뉴, 도구, 명령, 단축키 이름은 실제 NukCAD와 맞춰 보고, 찾지 못한 이름은 답 끝에 확인되지 않은 내용으로 표시합니다.
- 답이 틀렸다고 말하면 AI가 앞의 답을 다시 확인해 고칩니다.
- 도구의 정확한 사용법은 이 도움말이 기준입니다. 중요한 내용은 멘토에게 확인합니다.
- 이 컴퓨터에서 실행하는 AI는 모델과 함께 안전 검사 AI를 받아 질문과 답을 한 번 더 검사합니다. 컴퓨터가 안전 검사 AI를 실행하지 못하면 단어 규칙으로만 검사합니다. 연결 방법은 [AI 연결](help:more-ai-setup)에 있습니다.

## 자주 하는 실수

- CAD 질문인데 거절당했다고 생각합니다. 단어가 위험한 말과 비슷하면 잘못 막힐 수 있습니다. "모형", "부품"처럼 만들 것을 분명히 적어 다시 묻습니다.
- 질문에 집 주소나 전화번호를 적습니다. 적지 않아도 답할 수 있습니다.
- AI의 답을 그대로 따랐는데 메뉴가 없습니다. 메뉴 이름은 도움말이나 Cadoo의 오른쪽 클릭 메뉴의 물어보기 창에서 다시 찾습니다. [Cadoo와 대화](help:more-cadoo)를 봅니다.
- AI가 쉬는 중이라는 답이 나옵니다. 몇 분 기다린 뒤 만들기나 NukCAD 이야기로 다시 묻습니다.
`,Kt=`---
id: more-ai-offline
title: 학교용 AI 묶음(인터넷 없이 설치)
분류: 그 밖의 기능
난이도: 중급
workspace: 공통
keywords: 학교용 AI 묶음, 오프라인 설치, 인터넷 없이, 인터넷 없는 PC, USB 설치, 모델 복사, 파일에서 가져오기, NukCAD-models, manifest, 일괄 설치, 조용한 설치, 관리자, 멘토, 큰 AI, Gemma, offline bundle, offline install, import from files, USB
commands: settings
order: 55
desktop: true
---

## 무엇

인터넷이 없거나 느린 학교 PC에 NukCAD와 큰 AI 모델을 함께 설치하는 방법입니다. 인터넷이 되는 PC에서 한 번 묶음 폴더(NukCAD-학교용)를 만들고, USB나 공유 폴더로 옮겨 각 PC에 설치합니다. 묶음에는 설치 프로그램, AI 모델(기본은 보통 크기의 Gemma 4 E4B), 안전 검사 AI, AI 실행 프로그램이 들어 있습니다.

## 하는 순서

1. 관리자나 멘토가 인터넷이 되는 PC에서 NukCAD 설치 프로그램을 받아 둡니다.
2. PowerShell에서 \`tools\\make-offline-bundle.ps1 -Installer <설치 프로그램 경로>\`를 실행합니다. 모델을 받는 데 시간이 걸리고, 끊겨도 다시 실행하면 이어서 받습니다.
3. 만들어진 NukCAD-학교용 폴더를 통째로 USB나 공유 폴더에 복사합니다. 설치 프로그램과 NukCAD-models 폴더는 같은 폴더에 둡니다.
4. 각 PC에서 관리자 계정으로 그 폴더의 설치 프로그램을 실행합니다. 설치가 끝날 때 AI 모델 파일을 NukCAD 설치 폴더의 NukCAD-models(보통 \`C:\\Program Files\\NukCAD\\NukCAD-models\`)로 복사하고, 각 파일이 원본과 같은지(SHA-256) 그 자리에서 한 번 확인합니다. 조용한 설치(/S)도 같습니다.
5. NukCAD를 켜면 설치 때 확인한 모델을 바로 씁니다. AI 방식을 고른 적이 없는 사용자는 내 컴퓨터 AI가 저절로 켜지고 짧은 안내가 한 번 나옵니다. {c:settings} → {t:set.general} 탭의 {t:ai.set.label}에서 모델이 {t:bigai.installed}으로 표시됩니다.
6. 이미 NukCAD가 설치된 PC에서는 {t:ai.set.label}에서 {t:ai.set.local}과 {t:bigai.engine.cpu}을 선택하고 {t:bundle.import}를 누릅니다. {t:bundle.import.find}로 USB의 NukCAD-models 폴더를 찾은 뒤 {t:bundle.import.start}를 누릅니다.

## 팁

- 모델을 고르려면 \`-Models e4b,e2b\`처럼 씁니다. 가벼운 e2b, 보통 e4b, 고성능 12b가 있습니다. 기본은 e4b입니다.
- 설치 프로그램으로 넣은 모델은 NukCAD 설치 폴더에 들어가 그 PC의 모든 사용자가 함께 씁니다. 사용자마다 다시 받지 않습니다.
- 확인은 설치할 때 한 번만 합니다. 확인 결과(verified.json)는 관리자만 바꿀 수 있는 설치 폴더에 있어서, 재부팅 때 사용자 자료를 되돌리는 PC에서도 다시 확인하지 않습니다. 예전 설치처럼 확인 결과가 없을 때만 사용자마다 처음 한 번 확인합니다.
- 묶음 없이 설치할 때는 첫 화면의 '카두 AI 모델 함께 받기'(기본으로 켜짐, 약 5.4 GB)를 켜 두면, 처음 켤 때 이 PC에 맞는 모델을 인터넷으로 받고 내 컴퓨터 AI를 켭니다. 인터넷이 없으면 다음에 켤 때 이어서 받습니다. 조용한 설치에서는 \`/AIMODEL=1\`을 붙입니다.
- 원본과 다른 파일은 설치 프로그램이 지우고 알려 줍니다. 묶음을 다시 만들어 설치하거나 {t:bundle.import}로 넣습니다.
- 자세한 설치 방법은 [AI 연결](help:more-ai-setup)과 묶음 폴더의 '읽어 보세요.txt'에 있습니다.

## 자주 하는 실수

- 설치 프로그램만 다른 폴더에 복사합니다. NukCAD-models 폴더가 설치 프로그램 옆에 없으면 모델을 복사하지 않습니다.
- 다른 버전의 NukCAD로 만든 묶음을 씁니다. 모델 파일이 이 버전과 다르면 쓰지 않습니다. NukCAD를 새 버전으로 바꾸면 묶음도 새로 만듭니다.
- 저장 공간이 부족합니다. 기본 묶음은 PC마다 약 5.5 GB가 더 필요합니다.
`,qt=`---
id: more-ai-setup
title: AI 연결
분류: 그 밖의 기능
난이도: 중급
workspace: 공통
keywords: AI 연결, AI 켜기, AI 설정, AI 도우미, AI 모델, 모델 받기, 다운로드, 내 컴퓨터 AI, 이 컴퓨터 AI, 멘토 서버, 교사 서버, 서버 주소, 연결 시험, WebGPU, 그래픽 칩, 프로세서, CPU, 큰 AI, 웹판 AI, Qwen, AI 안 됨, ai setup, ai model, local model, mentor server
commands: cadooChat, settings
order: 50
---

## 무엇

Cadoo는 AI 없이도 도움말과 규칙으로 답하고 물체를 만듭니다. 자유로운 대화와 더 복잡한 만들기 부탁에는 AI를 연결합니다. 연결 방법은 세 가지입니다: 이 컴퓨터에서 실행하는 AI(웹판·설치판), 멘토 PC의 서버를 거치는 AI(설치판), AI를 쓰지 않음.

## 하는 순서

1. 웹판에서는 {c:cadooChat} 창 위쪽의 {t:chat.aiSetup} 단추를 누릅니다.
2. 그래픽 확인 결과를 보고, 목록에서 모델을 선택한 뒤 받기를 누릅니다. 처음 한 번만 인터넷으로 받습니다.
3. 설치판에서는 {c:settings} → {t:set.general} 탭의 {t:ai.set.label}에서 {t:ai.set.off}, {t:ai.set.local}, {t:ai.set.teacher} 가운데 하나를 선택합니다.
4. {t:ai.set.local}을 선택하면 {t:bigai.engine}를 정하고 모델을 받습니다.
5. {t:ai.set.teacher}를 선택하면 멘토가 알려 준 {t:ai.teacher.server}를 입력하고 {t:ai.teacher.test} 단추로 연결을 확인합니다.
6. {c:cadooChat} 창 위쪽에 지금 누가 답하는지 표시됩니다. 질문을 보내 확인합니다.

## 팁

- 이 컴퓨터 AI는 질문과 답이 컴퓨터 밖으로 나가지 않습니다. 모델은 크기에 따라 수백 MB에서 수 GB입니다. 가벼운 모델일수록 빠르지만 답이 단순합니다.
- {t:bigai.engine}의 {t:bigai.engine.webgpu}는 그래픽 칩으로, {t:bigai.engine.cpu} 쪽은 프로세서로 실행합니다. 프로세서 쪽은 더 큰 모델을 쓰지만 메모리를 많이 쓰고 답이 느립니다.
- 웹판 AI와 작은 AI는 그래픽 칩(WebGPU)이 있어야 합니다. 그래픽 가속이 꺼져 있으면 [3D 화면이 검거나 느릴 때](help:faq-black-screen)를 봅니다.
- 멘토 서버는 멘토 PC의 NukCAD가 켠 프로그램입니다. 멘토 서버 주소와 학년·반·번호는 [멘토에게 도움 요청](help:more-mentor-help)에도 쓰입니다.
- 학교에서 미리 정해 둔 PC는 관리 비밀번호 없이는 이 설정을 바꿀 수 없습니다.
- AI가 무엇을 돕지 않는지는 [AI가 못 하는 것·안전](help:more-ai-limits)에 있습니다.

## 자주 하는 실수

- 모델을 받는 도중에 창을 닫습니다. 받기가 끝날 때까지 창을 열어 둡니다. 받은 모델은 다음부터 바로 쓸 수 있습니다.
- 컴퓨터 메모리에 비해 큰 모델을 선택합니다. 목록에 실행 가능 여부가 표시되므로 '추천' 모델부터 씁니다.
- 멘토 서버 주소를 틀리게 입력합니다. 예처럼 숫자 주소와 포트를 그대로 입력하고 {t:ai.teacher.test} 단추로 확인합니다.
- 웹판에서 멘토 서버를 찾습니다. 멘토 서버 연결은 설치판에서만 됩니다.
`,Jt=`---
id: more-cadoo
title: Cadoo와 대화
분류: 그 밖의 기능
난이도: 기초
workspace: 공통
keywords: Cadoo, 카두, 캐두, 누크 카두, Nuk Cadoo, 캐릭터, 도우미, 도우미 캐릭터, 대화, 채팅, 질문, 물어보기, 대화 창, 대화 내역, 대화 저장, 대화 내보내기, 새 대화, 대화 탭, 탭 닫기, Mergy, Interr, Stub, Separ, 머지, 캐릭터 바꾸기, 캐릭터 끄기, 캐릭터 숨기기, 캐릭터 크기, 말풍선, 도움말 찾기, chat, cadoo, helper, character, ask, conversation, history, export chat, hide character
commands: cadooChat, settings
context: cadooChat
order: 40
---

## 무엇

Cadoo는 3D 화면 아래쪽, 명령줄 바로 위를 걸어 다니는 도우미 캐릭터입니다. Cadoo에게 NukCAD 사용법을 묻거나 만들 것을 부탁하고, 지난 대화를 다시 볼 수 있습니다. 대화는 {c:cadooChat} 창에서 합니다. 멘토도 이 대화를 볼 수 없습니다.

## 하는 순서

1. 3D 화면 아래쪽을 걷는 Cadoo를 두 번 클릭합니다. {c:cadooChat} 창이 열립니다.
2. 아래 입력 칸에 묻고 싶은 것을 적고 Enter를 누릅니다.
3. 답을 읽습니다. 답 아래의 단추로 그 도구를 열거나 도움말 쪽을 엽니다.
4. 다른 주제는 {t:chat.new}를 눌러 새 탭에서 시작합니다.
5. 지난 대화는 {t:chat.history}에서 선택해 다시 엽니다.
6. Cadoo를 오른쪽 클릭하면 캐릭터와 크기를 바꾸거나 캐릭터를 끌 수 있습니다.

## 팁

### Cadoo 캐릭터

- Cadoo를 한 번 클릭하면 인사와 함께 짧은 팁이 나옵니다. 말풍선의 {t:chat.open} 단추를 누르면 대화 창이 열립니다.
- 캐릭터는 {t:buddy.name.mergy}, {t:buddy.name.interr}, {t:buddy.name.stub}, {t:buddy.name.separ} 네 가지입니다. 오른쪽 클릭 메뉴에서 선택합니다.
- 오른쪽 클릭 메뉴의 {t:buddy.size}에서 {t:buddy.sizeSmall}, {t:buddy.sizeNormal}, {t:buddy.sizeLarge}를 선택하거나 막대를 끌어 크기를 바꿉니다.
- 오른쪽 클릭 메뉴의 {t:buddy.still}를 켜면 Cadoo가 걸어 다니지 않고 그 자리에 머뭅니다. 끌어서 이동한 자리도 기억합니다.
- 오른쪽 클릭 메뉴의 **…에게 물어보기**를 선택하면 작은 질문 창이 열립니다. 기능 이름이나 하고 싶은 일(예: 구멍 뚫기)을 적으면 맞는 도구와 하는 방법이 나오고, {t:ask.run} 단추로 바로 엽니다. \`box 30 20 10\` 같은 명령을 적으면 {t:ask.line}이 나옵니다.
- Cadoo를 끌어 이동하거나 던질 수 있습니다. 창 위에 놓으면 그 창의 위쪽 가장자리를 걸어 다닙니다.
- Cadoo가 마우스 커서에 매달리면 마우스를 세게 흔들거나 Esc를 누릅니다.
- Cadoo의 답은 머리 위 말풍선에도 몇 초 동안 보입니다. 말풍선을 누르면 대화 창이 열립니다.

### 대화 창

- 대화 창은 {t:win.menu} 메뉴에서도 열 수 있고, 명령줄에 \`chat\` 또는 \`cadoo\`를 입력해도 됩니다. 다른 창처럼 옆에 붙이거나 따로 띄울 수 있습니다.
- Enter는 보내기, Shift+Enter는 줄바꿈입니다. 한 번에 1000자까지 적을 수 있습니다.
- 답이 오는 동안 {t:chat.stop}를 누르면 받은 부분까지만 남습니다. Esc를 눌러도 됩니다.
- 위쪽의 캐릭터 얼굴을 누르면 다음 답부터 그 캐릭터가 답합니다.
- 대화마다 탭이 하나씩 생깁니다. 탭 이름을 두 번 클릭하면 이름을 변경할 수 있고, 탭의 × 단추나 마우스 가운데 단추로 탭을 닫습니다. 닫은 탭의 대화는 {t:chat.history}에 남습니다. 탭은 20개까지 열립니다.
- AI가 연결되어 있지 않으면 Cadoo는 도움말에서 찾아 답하고, 답에 {t:chat.fromHelp} 표시가 붙습니다. 무엇이 답하는지는 대화 창 첫 화면에 나옵니다. 연결 방법은 [AI 연결](help:more-ai-setup)에 있습니다.
- 만들기 부탁은 [AI에게 만들기 부탁하기](help:more-ai-ask)를, AI가 돕지 않는 이야기는 [AI가 못 하는 것·안전](help:more-ai-limits)을 봅니다.

### 대화 저장

- 웹판은 대화를 이 컴퓨터에 저장하지 않습니다. 창을 닫으면 대화가 사라집니다.
- 설치판은 처음 질문할 때 대화를 이 컴퓨터에 저장할지 한 번 묻습니다. 여럿이 쓰는 학교 컴퓨터에서는 {t:chat.askLocalNo}을 선택합니다. 나중에 {t:chat.history} 화면의 {t:chat.local}에서 바꿀 수 있습니다.
- 대화를 남기려면 {t:chat.history} 화면에서 {t:chat.fileSave}을 누르고 내 구글 드라이브 폴더 같은 곳을 선택합니다. 모든 대화가 \`.json\` 파일 하나로 저장되고, {t:chat.fileOpen}로 다시 가져옵니다.
- {t:chat.export}를 누르면 지금 대화를 {t:chat.exportMd}나 {t:chat.exportTxt} 파일로 저장합니다.
- 대화는 작업 파일 안에는 저장되지 않습니다.

## 자주 하는 실수

- Cadoo가 보이지 않습니다. 캐릭터를 끈 상태입니다. 환경 설정 → {t:set.options} → {t:set.buddy}에서 캐릭터를 선택하면 다시 나옵니다.
- 웹판에서 창을 닫았더니 대화가 없어졌습니다. 웹판은 대화를 저장하지 않습니다. 남길 대화는 닫기 전에 {t:chat.history} 화면에서 {t:chat.fileSave}을 누릅니다.
- 내역에서 삭제한 대화는 되돌릴 수 없습니다. 삭제 전에 확인을 한 번 더 묻습니다.
- 입력 칸에 글자를 적는 동안에는 단축키가 3D 화면에 닿지 않습니다. 대화 창 밖을 클릭한 뒤 작업합니다.
- Cadoo가 단추를 가리면 Cadoo를 끌어 다른 곳에 놓습니다.
`,Yt=`---
id: more-disaster
title: 재난 시뮬레이션
분류: 그 밖의 기능
난이도: 기초
workspace: 3D 건설
keywords: 재난, 재난 시뮬레이션, 시뮬레이션, 핵, 핵폭탄, 폭발, 피해, 폭발 피해, disaster, simulation, nuke, blast, 핵무기, 원자폭탄, 수소폭탄, 히로시마, 나가사키, 폭심지, 폭발 높이, 피해 범위, 충격파, 버섯구름, 화구, 분화구, 소리, 음소거, 원래 모델로 복구, 재난시뮬레이션, 제난
commands: settings
howto: disaster
order: 20
---

## 무엇

실제로 시험되거나 사용된 핵무기가 내 땅 위에서 터졌을 때의 피해 범위를 3D 화면에서 보여 주는 시뮬레이션입니다. 섬광, 불덩이, 버섯구름, 충격파와 무너지는 물체, 피해 범위 고리를 보여 주며, 핵무기가 얼마나 큰 피해를 남기는지 이해하도록 돕습니다. 문서는 바뀌지 않습니다.

## 하는 순서

1. 환경 설정 → 옵션에서 {t:nuke.setting}을 켭니다 (학교 PC는 관리 암호가 필요할 수 있습니다).
2. 3D 건설 화면 왼쪽 아래에 생긴 {t:nuke.launch} 단추를 누릅니다.
3. 폭탄과 폭발 높이를 선택하고 땅 위의 지점을 클릭하면 시작됩니다. 문서는 바뀌지 않고, {t:nuke3.restore}로 원래 화면이 돌아옵니다.

## 팁

- 이 스위치는 3D 건설에서 환경 설정을 열 때만 {t:set.options}에 보입니다. 켠 상태는 이 컴퓨터(브라우저)에 기억됩니다.
- {t:nuke.weapon} 목록에는 실제로 시험·사용된 무기 열 가지가 위력 순서로 있습니다. 처음에는 히로시마에 쓰인 무기가 선택되어 있습니다.
- {t:nuke4.hob}는 {t:nuke4.hobField} 칸에 m 단위로 넣거나 단추로 선택합니다. 단추로는 그 무기가 실제로 터진 높이(기록대로), 5 psi 피해가 가장 넓게 퍼지는 높이(최적), 땅에서 터지는 {t:nuke4.ground}를 선택합니다. 불덩이가 땅에 닿으면 분화구가 생깁니다.
- 지점을 선택하는 동안 커서 둘레에 피해 범위 고리가 보이고, 창의 표에 {t:nuke.ring.fireball}, {t:nuke.ring.psi20}, {t:nuke.ring.psi5}, {t:nuke.ring.burn3}, {t:nuke.ring.psi1}의 반지름이 나옵니다.
- {t:nuke.speed}는 0.5×, 1×, 2×, 4× 가운데에서 선택합니다. 시뮬레이션이 도는 동안 화면을 끌어 둘러볼 수 있고, {t:nuke.replay}로 같은 폭심지에서 처음부터 다시 봅니다.
- 폭발 소리는 처음에 꺼져 있습니다. 창 아래쪽의 {t:nuke.mute} 스위치를 끄면 소리가 납니다. 프로그램을 다시 열면 다시 음소거가 됩니다.
- 땅 주변의 지형과 항공사진을 불러와 넓게 그립니다. 지도 위치가 없거나 불러오지 못하면 둘레를 평평한 땅으로 그립니다.
- 다른 무기를 선택하면 진행 중인 시뮬레이션이 끝나고 폭심지를 다시 선택합니다.

## 자주 하는 실수

- {t:nuke.launch} 단추가 보이지 않습니다. 3D 물체에서는 쓸 수 없습니다. 3D 건설에서 환경 설정 → 옵션의 {t:nuke.setting}을 켭니다.
- 스위치를 켤 때 관리 암호를 묻습니다. 학교에서 잠근 학생 PC입니다. 멘토에게 부탁합니다.
- 클릭해도 시작되지 않습니다. 폭심지는 불러온 땅 안에서 선택해야 합니다.
- 시뮬레이션 뒤에 건물이 부서진 채로 남을까 걱정됩니다. 문서는 처음부터 바뀌지 않습니다. {t:nuke3.restore}를 누르거나 Esc를 누르면 폭발 전 모습으로 돌아옵니다.
- 화면이 끊깁니다. 느린 컴퓨터에서는 주변 지형과 효과가 저절로 간단하게 그려집니다. 환경 설정의 {t:set.drawQuality}을 {t:set.drawQuality.fast}로 바꾸면 더 가볍게 그립니다.
`,Xt=`---
id: more-mentor-admin
title: 멘토 관리
분류: 그 밖의 기능
난이도: 중급
workspace: 공통
keywords: 교사 관리, 교사용, 교사 PC, 교사 서버, 중계 프로그램, 학생 관리, 학생 목록, 학년 반 번호, 허용, 차단, 승인, 안전 알림, 위험 알림, 자해 알림, 도움 요청, 학생 도움 요청, 같이 보기, AI 키, API 키, Claude, 사용량, 비용, 질문 수, 교사 페이지, 관리 창, 선생님 관리, 교사관리, teacher admin, teacher PC, teacher server, relay, students, block, alerts, help requests, API key, usage, cost, 멘토
commands: teacherAdmin, cohelpTeacher, settings
context: teacherAdmin, cohelpTeacher
order: 90
desktop: true
---

## 무엇

멘토용으로 설치한 PC에서 멘토 서버를 켜고 끄고, 학생 목록, 안전 알림, 학생 도움 요청, AI 도우미 설정, 사용량을 한 창에서 관리하는 기능입니다. 설치판의 멘토용 PC에서만 열립니다. 창에는 {t:tapp.tab.status}, {t:tapp.tab.students}, {t:tapp.tab.alerts}, {t:tapp.tab.help}, {t:tapp.tab.ai}, {t:tapp.tab.usage} 탭이 있습니다.

## 하는 순서

1. 멘토용으로 설치한 PC에서 NukCAD를 켭니다. 멘토 서버가 함께 켜집니다.
2. 왼쪽 위 NukCAD 단추 → {c:teacherAdmin} 순서로 누릅니다. 멘토 비밀번호를 정해 두었으면 {t:school.unlock} 단추를 누르고 비밀번호를 넣습니다.
3. {t:tapp.tab.status} 탭에서 {t:tapp.relay}가 켜져 있는지 확인합니다. 꺼져 있으면 {t:tapp.relay.start}를 누릅니다.
4. 같은 탭의 {t:tapp.addr}를 학생에게 알려 줍니다.
5. {t:tapp.tab.students} 탭에서 학교 이름, {t:tapp.school.grades}, {t:tapp.school.classes}, {t:tapp.school.numbers}을 정하고 {t:tapp.school.save}을 누릅니다.
6. AI 도우미를 쓰려면 {t:tapp.tab.ai} 탭에 API 키를 붙여 넣고 {t:tapp.key.save}을 누른 뒤 {t:tapp.test}으로 답이 오는지 확인합니다.
7. {t:tapp.tab.status} 탭의 {t:tapp.ai} 줄에서 {t:tapp.ai.turnOn}를 누르면 학생 질문을 받기 시작합니다.

## 팁

- 학생용으로 설치한 PC는 설치 때 정한 멘토 PC 주소를 저절로 씁니다. 주소가 여러 개 보이면 보통 이더넷이나 Wi-Fi 줄의 주소를 알려 줍니다.
- {t:tapp.tab.students} 탭에는 학생이 학년·반별로 보이고, 줄마다 연결 상태와 질문 수가 나옵니다. {t:tapp.st.block}은 그 번호와 그 학생이 쓴 PC를 50분 동안 막고, {t:tapp.st.unblock}로 되돌립니다. 막아도 안전 알림은 계속 옵니다.
- {t:tapp.school.approval}을 {t:tapp.school.ask}로 두면 처음 보는 번호는 {t:tapp.st.allow}을 누를 때까지 기다립니다. {t:tapp.school.privateOnly}을 켜 두면 학교 네트워크에서만 연결됩니다.
- 같은 번호가 여러 PC에서 동시에 쓰이면 {t:tapp.st.conflictHead}이 위에 보입니다. 다른 학생의 번호를 쓰고 있지 않은지 확인합니다.
- {t:tapp.tab.alerts} 탭에는 학생 AI가 알아차린 위험 신호가 학년·반·번호, 종류, 시각으로만 보입니다. 대화 내용은 오지 않습니다. 종류는 {t:tapp.kind.self}, {t:tapp.kind.danger}, {t:tapp.kind.adult}이고, 자해·자살은 빨갛게 맨 위에 보입니다. 이때는 학생과 직접 이야기합니다.
- 같은 학생의 같은 종류 알림은 10분에 한 번만 옵니다. 알림은 멘토 서버를 끄면 사라지고, {t:tapp.al.clear}로 삭제할 수도 있습니다.
- {t:tapp.tab.help} 탭은 {c:cohelpTeacher} 창과 같습니다. 요청에서 {t:cohelp.accept}을 누르거나 연결된 학생에게 {t:cohelp.t.invite}을 보내고, 학생이 수락하면 학생 모델이 내 화면에 나옵니다. 한 번에 한 학생만 볼 수 있습니다.
- 같이 보는 동안 {t:cohelp.t.follow}를 끄면 내 마음대로 회전해 봅니다. 학생이 {t:cohelp.allowEdit}을 눌러야 고칠 수 있고, {t:cohelp.t.giveBack}로 돌려줍니다. {t:cohelp.stop}를 누르면 학생 모델이 사라지고 내 문서가 그대로 돌아옵니다.
- {t:tapp.tab.ai} 탭에서 AI 모델, 학생 한 명의 하루 질문 수 같은 한도, {t:tapp.extra}를 정하고 {t:tapp.ai.save}을 누릅니다. 시험 질문은 학생 사용량에 세지 않습니다.
- {t:tapp.lim.keepLastQuestions}을 0으로 두면 질문을 남기지 않습니다. 0보다 크게 두어도 Cadoo 대화의 질문은 남기지 않습니다.
- {t:tapp.tab.usage} 탭에는 오늘의 질문 수와 예상 비용이 학년·반별로 나옵니다. 토큰으로 계산한 추정값입니다.
- 학생 쪽 사용법은 [멘토에게 도움 요청](help:more-mentor-help)과 [AI 연결](help:more-ai-setup)에 있습니다.

## 자주 하는 실수

- 창에 {t:tapp.notTeacher}가 보입니다. 멘토용으로 설치한 PC가 아닙니다. 환경 설정 → 일반 → {t:school.title}에서 멘토용 PC로 정하거나 멘토용으로 다시 설치합니다.
- {t:tapp.offNote}가 보입니다. {t:tapp.tab.status} 탭에서 멘토 서버를 켭니다. 멘토 서버를 끄면 학생 AI 질문, 도움 요청, 알림이 모두 멈춥니다.
- {t:tapp.err.startFailed}이 보입니다. 다른 프로그램이 8765 포트를 쓰고 있는지 확인합니다.
- 학생이 연결되지 않습니다. 학생 PC의 멘토 서버 주소가 {t:tapp.addr}와 같은지, 같은 학교 네트워크인지, 번호가 차단되지 않았는지 확인합니다.
- API 키를 학생에게 알려 주지 않습니다. 키는 멘토 서버의 설정 파일에만 저장되고, 창에는 가린 모양만 보입니다.
`,Zt=`---
id: more-mentor-help
title: 멘토에게 도움 요청
분류: 그 밖의 기능
난이도: 기초
workspace: 공통
keywords: 교사, 선생님, 쌤, 도와줘, 도움 요청, 도와주세요, 막혔, 모르겠, 같이 보기, 화면 보여, 고쳐 줘, teacher, help me, ask the teacher, stuck, share screen, 교사에게 도움 요청, 도움 요청하기, 선생님 불러, 선생님께 질문, 화면 공유, 모델 보여 주기, 고치기 허락, 고치기 회수, 정지, 수락, 같이보기, 도움요청, 학년 반 번호, 교사 서버, 멘토
commands: cohelp, settings
howto: askTeacher
context: cohelp
order: 80
desktop: true
---

## 무엇

수업 중에 막혔을 때 멘토에게 도움 요청을 보내고, 멘토가 자기 화면에서 내 모델을 같이 보거나 내가 허락하면 직접 고쳐 주게 하는 기능입니다. 설치판에서만 쓸 수 있습니다. 화면 영상이 아니라 문서(모델)를 그대로 맞추는 방식이라 멘토는 모델을 자유롭게 회전해 볼 수 있습니다.

## 하는 순서

1. 왼쪽 위 NukCAD 단추 → {c:cohelp} 순서로 누릅니다 (설치판).
2. 메모(선택)를 적고 {t:cohelp.request} 단추를 누릅니다.
3. 멘토가 수락하면 뜨는 창에서 {t:cohelp.accept}을 누르면 멘토 화면에 내 모델이 보입니다. {t:cohelp.allowEdit}으로 멘토가 직접 고치게 할 수 있고, {t:cohelp.stop}로 언제든 끊을 수 있습니다.
4. 멘토 서버 주소(환경 설정 → 일반 → AI 도우미)와 학년·반·번호(아래 상태 표시줄에서 선택)가 있어야 합니다.

## 팁

- 이 창은 {t:win.menu} 메뉴에서도 열 수 있고, 명령줄에 \`askteacher\`를 입력해도 됩니다.
- 요청을 보내면 창에 {t:cohelp.requested}이 보입니다. 마음이 바뀌면 {t:cohelp.cancel}를 누릅니다.
- 멘토가 먼저 같이 보기를 요청할 수도 있습니다. 이때도 {t:cohelp.ask.title} 창에서 {t:cohelp.accept}을 눌러야만 연결되고, {t:cohelp.refuse}을 누르면 아무것도 보내지 않습니다.
- 수락하기 전에는 문서도 화면도 보내지 않습니다. 요청에는 학년·반·번호와 메모만 갑니다. 멘토 서버는 받은 것을 전달만 하고 저장하지 않습니다.
- 연결된 동안에는 3D 화면 위에 {t:cohelp.watching} 띠가 보입니다. {t:cohelp.allowEdit}을 누르면 띠가 {t:cohelp.teacherEditing}으로 바뀌고, 그동안 나는 보기만 합니다. 다시 내가 고치려면 {t:cohelp.takeBack}를 누릅니다.
- 멘토가 고친 것은 하나하나가 내 되돌리기 한 단계로 들어옵니다. {t:cohelp.takeBack}를 누른 뒤 Ctrl+Z로 되돌릴 수 있습니다. [되돌리기](help:start-undo)를 봅니다.
- 학년·반·번호는 앱을 켤 때 뜨는 창이나 상태 표시줄의 번호를 눌러 선택합니다. 이름은 받지 않습니다.
- 멘토 서버 주소는 [AI 연결](help:more-ai-setup)의 멘토 서버 주소와 같은 칸입니다. 학교에서 미리 정해 둔 PC는 주소를 바꿀 수 없습니다.
- 연결이 잠깐 끊겨도 앱이 저절로 다시 연결합니다. 30초 안에 다시 연결되면 같이 보기가 이어집니다.

## 자주 하는 실수

- 창에 {t:cohelp.needSetup}가 보입니다. {t:cohelp.openSettings} 단추를 눌러 멘토 서버 주소를 넣고, 학년·반·번호를 선택합니다.
- 웹판에서는 이 기능이 없습니다. 학교 멘토 서버에는 설치판 NukCAD로만 연결할 수 있습니다.
- {t:tapp.link.blocked}가 보입니다. 멘토가 그 번호를 막은 것입니다. 다른 학생의 번호를 선택하지 않았는지 확인하고 멘토에게 말합니다.
- {t:tapp.link.waiting}이 보입니다. 멘토가 새 번호를 허락할 때까지 기다립니다.
- {t:tapp.link.range}이 보입니다. 학년·반·번호를 다시 선택합니다.
- 멘토가 고치는 동안 내가 고치려고 하면 막힙니다. {t:cohelp.takeBack}를 누른 뒤 고칩니다.
- 메모에 이름이나 전화번호 같은 개인 정보는 적지 않습니다. 메모는 멘토 목록에 보이는 짧은 말입니다.
`,Qt=`---
id: more-screenshot
title: 화면 저장
분류: 그 밖의 기능
난이도: 기초
workspace: 공통
keywords: 화면 저장, 화면 캡처, 캡처, 스크린샷, 사진 찍기, 그림 저장, 이미지 저장, 이미지, 사진, png, 발표 자료, 보고서 그림, 과제 제출, 화면 찍기, 화면저장, 캡쳐, screenshot, capture, image, picture, save view
commands: screenshot, visual, grid
context: screenshot
order: 30
---

## 무엇

지금 보이는 3D 화면을 그림 파일(PNG) 한 장으로 저장하는 기능입니다. 발표 자료나 보고서, 과제 제출에 모델 그림을 넣을 때 씁니다.

## 하는 순서

1. 저장할 모습이 보이도록 화면을 회전하고 확대합니다.
2. 왼쪽 위 NukCAD 단추를 누르고 {c:screenshot}을 선택합니다. 뷰 큐브 옆 막대의 카메라 단추를 눌러도 됩니다.
3. 그림이 \`Image_날짜_시각.png\` 이름으로 다운로드 폴더에 저장됩니다.

## 팁

- 명령줄에 \`screenshot\` 또는 \`png\`를 입력해도 됩니다.
- 그림에는 3D 화면만 들어갑니다. 메뉴, 창, 명령줄은 들어가지 않고, 뷰 큐브와 화면에 보이는 치수·설명 글자는 함께 들어갑니다.
- 그림의 크기는 화면의 3D 화면 크기를 따릅니다. 옆 창을 닫거나 프로그램 창을 키우면 더 큰 그림이 됩니다.
- 격자가 필요 없으면 {k:grid}로 끄고 저장합니다. 물체를 그리는 방식은 {c:visual}에서 {t:vis.shaded}, {t:vis.xray} 등으로 바꿉니다.
- 모든 물체가 화면에 들어오게 하려면 {k:fit}을 누릅니다. 보는 방법은 [화면 보기](help:start-view)에 있습니다.
- 발표용 그림은 {c:settings}의 {t:set.drawQuality}을 {t:set.drawQuality.fine}로 두면 작은 물체도 원래 모양대로 그려집니다.
- 3D 건설에서는 {c:lighting}에서 시간을 바꿔 저녁이나 밤 모습을 저장할 수 있습니다.
- 치수가 들어간 정확한 도면이 필요하면 3D 물체는 [투상도](help:obj-drawing), 3D 건설은 [도면](help:arch-drawing)을 씁니다.

## 자주 하는 실수

- 선택한 물체의 강조 표시가 그림에 함께 찍힙니다. 빈 곳을 클릭하거나 Esc를 눌러 선택을 풀고 저장합니다.
- 저장한 파일을 찾지 못합니다. 브라우저의 다운로드 목록이나 다운로드 폴더에서 \`Image_\`로 시작하는 파일을 찾습니다.
- 숨긴 물체는 그림에 나오지 않습니다. 필요한 물체를 다시 보이게 한 뒤 저장합니다. [숨기기·보이기](help:start-hide)를 봅니다.
- 메뉴와 창까지 함께 찍으려면 이 기능 대신 컴퓨터의 화면 캡처 기능을 씁니다.
`,$t=`---
id: more-send-to-building
title: 건설 물체로 보내기
분류: 그 밖의 기능
난이도: 중급
workspace: 공통
keywords: 건설 물체로 보내기, 건설로 보내기, 보내기, 내 물체, 내 토목 구조물, 내 건축 부재, 3D 물체에서 3D 건설로, 모델 옮기기, 가구 만들어 넣기, 범주, 기준점, 축척, 실제 크기, 모형 축척, 1:100, 1:50, 2:1, 배율, 놓을 곳, 바꾸기, 같은 물체 고치기, 다시 보내기, 고쳐서 보내기, 바로 놓기, 보관만, 바닥에 붙이기, 바닥에 놓기, 층 소속, 문 모양, 창 모양, 건축 부재, 조경, 건설물체, send to building, sendobj, my objects
commands: sendToBuilding, myObjects, myCivil, dropFloor
context: sendToBuilding
order: 10
---

## 무엇

3D 물체에서 모델링한 물체를 실제 크기로 바꿔 3D 건설의 내 물체 라이브러리에 넣는 기능입니다. 선택한 물체들은 한 물체로 합쳐지고, 선택한 범주에 따라 층 위, 벽 안 또는 땅 위에 놓입니다. 같은 물체를 고쳐서 다시 보내면 이미 놓은 물체도 함께 바뀝니다.

## 하는 순서

1. 3D 물체에서 보낼 물체를 클릭해 선택합니다 (Shift: 여러 개). 아무것도 선택하지 않으면 보이는 물체가 모두 갑니다.
2. {m:sendToBuilding} 단추를 누릅니다.
3. {t:lib.send.name}을 확인하고 {t:tc.sort}를 선택합니다. 이름과 크기를 보고 {t:tc.suggested}이 붙은 범주가 먼저 선택되어 있습니다.
4. {t:tc.base}에서 {t:lib.send.bottom} 또는 {t:lib.send.origin}을 선택합니다.
5. {t:tc.scale}을 선택하거나 입력하고 {t:lib.send.realSize}를 확인합니다.
6. {t:tc.after}에서 {t:tc.afterPlace} 또는 {t:tc.afterKeep}을 선택합니다. 바로 놓을 때는 {t:tc2.dest}을 확인합니다.
7. Enter를 누릅니다. 바로 놓기를 선택했으면 3D 건설이 열리고 물체가 커서를 따라옵니다. 놓을 곳을 클릭하고 Esc로 끝냅니다.

## 팁

- {t:tc.scale}은 목록에서 선택하거나 직접 씁니다. 3D 물체가 실제보다 작은 모형이면 \`1:50\`(50배로 키움), 실제보다 크게 만든 모형이면 \`2:1\`(절반으로 줄임)처럼 씁니다. \`×2\`, \`2배\`, \`50%\`, \`1/50\`도 되고, 숫자만 쓰면(\`50\`) 그 배수로 키웁니다. 칸 아래에 3D 물체 1 mm가 건설에서 몇 mm가 되는지 나옵니다.
- 범주마다 놓이는 곳이 다릅니다.

| 범주 | 놓이는 곳 |
| --- | --- |
| {t:tc.sort.furniture}, {t:tc.sort.service}, {t:tc.sort.member}, {t:tc.sort.other} | 작업 중인 층 위 (층과 함께 움직임) |
| {t:tc.sort.opening} | 벽 위에 놓으면 벽 안 (벽에 구멍이 뚫림), 벽 밖이면 층 바닥 위 |
| {t:tc.sort.exterior}, {t:tc.sort.civil} | 땅 위 (층과 함께 움직이지 않음) |

- {t:tc2.dest} 줄에 물체가 들어갈 곳이 \`대지 1 › 건물 A › 2층\`처럼 나옵니다. {t:tc2.change}를 누르면 다른 층이나 땅 위를 선택할 수 있고, 지금 작업 범위에는 {t:tc2.scopeTag} 표시가 붙습니다. 작업 중인 층이 없으면 땅 위에 놓이고, 아직 3D 건설이 없으면 평평한 땅을 새로 만들고 그 위에 놓습니다.
- {t:tc.sort.opening}은 {t:presetCat.door}과 {t:presetCat.window} 가운데 하나를 선택합니다. 문은 바닥에서, 창은 바닥에서 0.9 m 위에서 시작하고, 기준점은 늘 바닥 가운데입니다. 폭이 y 방향으로 만들어졌으면 90° 회전해서 보냅니다.
- {t:tc.sort.civil}로 보낸 물체는 3D 건설의 {m:myCivil}에서도 선택합니다. [내 토목 구조물](help:civil-my-civil)을 봅니다.
- 3D 건설에서 가구·조경·내 물체를 끌어 이동하면 아래의 바닥판·층 바닥·옥상, 없으면 지형 위에 앉고, 앉은 높이의 층 소속으로 바뀝니다. 이 동작은 {c:move} 창의 {t:tc2.floorSnap}로 켜고 끕니다. 선택한 물체를 한 번에 내리려면 {m:dropFloor}를 누릅니다. 내 토목 구조물은 늘 땅 위에 있어 층 소속이 바뀌지 않습니다.
- 보낸 적이 있는 물체를 다시 선택하면 창 위에 {t:tc.howUpdate}와 {t:tc.howNew}가 나옵니다. {t:tc.howUpdate}는 내 물체와 이미 놓은 물체를 모두 새 모양으로 바꾸고, 놓은 물체의 자리와 늘린 비율은 그대로 둡니다. 되돌리기 한 번으로 돌아갑니다. 이때 범주·축척·기준점은 지난번 값으로 시작합니다.
- 3D 건설을 열지 않은 채 {t:tc.afterKeep}으로 고쳐 보내면, 다음에 3D 건설을 열 때 놓은 물체가 바뀝니다.
- 3D 건설의 내 물체 창에서 물체를 오른쪽 클릭하고 {t:tc.mEdit}를 선택하면 3D 물체로 가서 그 물체를 만든 물체가 선택됩니다(그 물체가 없으면 보낸 물체를 3D 물체로 가져옵니다). 고친 뒤 다시 보내면 됩니다.
- 내 물체는 이 컴퓨터의 라이브러리에 저장되고, 놓은 물체는 파일 안에도 들어갑니다. 숨긴 물체는 보내지지 않습니다.

## 자주 하는 실수

- 3D 건설에서 크기가 100배 크거나 작습니다. 모형을 실제 크기로 보냈거나 그 반대입니다. 축척을 맞게 선택하고 다시 보냅니다. 가장 긴 변은 1 cm 이상 2 km 이하여야 하고, 10 cm보다 작으면 모형인지 묻는 안내가 나옵니다.
- 고쳐서 보냈는데 놓은 물체가 그대로입니다. {t:tc.howNew}를 선택하면 따로 하나가 더 생깁니다. {t:tc.howUpdate}를 선택합니다.
- 문 모양이 벽에 들어가지 않습니다. 범주를 {t:tc.sort.opening}으로 보내고, 놓을 때 벽 위를 클릭합니다.
- 물체가 엉뚱한 층에 놓였습니다. {t:tc2.dest} 줄의 {t:tc2.change}로 층을 선택하거나, 3D 건설에서 작업 범위의 층을 먼저 선택합니다.
- 물체가 너무 복잡해서 보낼 수 없다고 나옵니다. 물체를 나눠서 보냅니다.
- 3D 건설에는 이 단추가 없습니다. 3D 물체에서 보냅니다.
`,en=`---
id: faq-black-screen
title: 3D 화면이 검거나 아주 느릴 때
분류: 문제 해결
난이도: 기초
workspace: 공통
keywords: 검은 화면, 화면이 검게, 까만 화면, 안 보여, 3D 화면 안 나옴, 그래픽 가속, 하드웨어 가속, GPU, 그래픽 칩, WebGL, WebGPU, 그래픽 드라이버, 느려, 버벅, 소프트웨어 렌더링, 원격 데스크톱, black screen, graphics acceleration, hardware acceleration, gpu off, webgl error
commands: settings
order: 20
---

## 무엇

3D 화면이 검게 나오거나, {t:gl.none} 안내가 뜨거나, 화면 위에 {t:gpuhint.banner} 띠가 보이면 브라우저나 PC가 그래픽 칩을 쓰지 못하는 상태입니다. 이때는 3D 화면이 그려지지 않거나 매우 느리고, 이 컴퓨터 AI도 실행할 수 없습니다.

## 하는 순서

1. 띠의 {t:gpuhint.banner.how} 단추를 누르거나 {c:settings} → {t:set.options} 탭의 {t:gpuhint.set.label} 줄에서 {t:gpuhint.set.show}를 누릅니다.
2. Chrome·Edge에서는 안내의 {t:gpuhint.copy} 단추로 설정 주소를 복사해 주소창에 붙여 넣고 Enter를 누릅니다.
3. '가능한 경우 그래픽 가속 사용'을 켜고 옆의 {t:gpuhint.pic.restart} 단추를 누릅니다.
4. 브라우저가 다시 열리면 NukCAD에서 {t:gpuhint.recheck}을 누릅니다.
5. 그래도 같으면 브라우저 창을 모두 닫았다가 다시 엽니다. 설치판은 PC를 다시 시작합니다.

## 팁

- {t:gl.none} 안내의 {t:gl.retry} 단추는 브라우저를 다시 열지 않고 3D 화면을 한 번 더 만들어 봅니다.
- 그래픽 가속이 켜져 있는데도 막혀 있으면 그래픽 드라이버가 오래되었거나, 학교 관리 설정으로 막혀 있거나, 원격 데스크톱으로 연결된 경우입니다. 드라이버를 업데이트하고, 원격 연결이면 그 PC에서 직접 엽니다.
- 학교 PC에서 설정을 바꿀 수 없으면 PC 관리자에게 문의합니다.
- 설치판은 Chrome 설정과 관계없이 Windows의 그래픽 구성 요소를 씁니다. 설치판에서 이 안내가 보이면 대부분 그래픽 드라이버 문제입니다.
- 그래픽 가속이 켜져 있어도 느리면 [화면이 느릴 때](help:faq-slow)를 봅니다.

## 자주 하는 실수

- 설정을 켜고 '다시 시작'을 누르지 않습니다. 브라우저를 다시 시작해야 바뀝니다.
- 창 하나만 닫고 다시 엽니다. 브라우저는 창이 모두 닫혀야 끝납니다.
- 띠의 {t:gpuhint.banner.never} 단추를 눌러 안내를 숨긴 뒤 원인을 잊습니다. 상태는 {c:settings} → {t:set.options}의 {t:gpuhint.set.label} 줄에서 다시 볼 수 있습니다.
`,tn=`---
id: faq-boolean-fail
title: 합치기·빼기가 안 될 때
분류: 문제 해결
난이도: 중급
workspace: 공통
keywords: 합치기 안 됨, 빼기 안 됨, 불리언 실패, 합쳐지지 않아, 빼지지 않아, 구멍이 안 뚫려, 겹치지 않음, 틈, 맞닿은 면, 메시, STL, 가져온 파일, 교집합 실패, boolean failed, union failed, subtract failed, does not merge, mesh
commands: union, subtract, intersect
order: 70
---

## 무엇

{c:union}, {c:subtract}, {c:intersect}을 했는데 {t:err.boolean-failed} 안내가 뜨거나 모양이 그대로인 경우를 다룹니다. 대부분 두 물체가 실제로는 겹치지 않거나, 면이 아주 조금 어긋나 있거나, 가져온 메시 물체인 경우입니다.

## 하는 순서

1. 두 물체가 정말 겹치는지 확인합니다. {c:visual} 메뉴에서 {t:vis.xrayEdges}으로 바꾸면 안쪽이 보입니다.
2. 떨어져 있으면 {c:move} 또는 {c:align} 명령으로 서로 조금 파고들게 이동합니다.
3. 면이 딱 맞닿기만 한 경우에도 합쳐지지 않으면 한쪽을 0.1 mm쯤 더 파고들게 이동합니다.
4. {c:subtract}에서는 남길 물체를 먼저, 빼낼 물체를 나중에 클릭합니다.
5. 다시 합니다. 그래도 안 되면 Ctrl+Z로 되돌린 뒤 물체를 하나씩 나누어 합칩니다.

## 팁

- 빼낼 물체가 남길 물체보다 길게 튀어나오게 놓으면 끝까지 깔끔하게 뚫립니다. 면이 딱 같은 높이에 있으면 아주 얇은 막이 남을 수 있습니다.
- STL·OBJ에서 가져온 물체는 메시(삼각형 면)일 수 있습니다. 메시는 불리언이 잘 안 됩니다. 가능하면 STEP 파일로 가져오거나 NukCAD에서 다시 만듭니다.
- 여러 물체를 한꺼번에 합치면 실패했을 때 원인을 찾기 어렵습니다. 두 개씩 합치면 어느 물체가 문제인지 보입니다.
- 모깎기를 많이 한 물체끼리는 불리언이 느리거나 실패할 수 있습니다. 합치기를 먼저 하고 모깎기는 마지막에 합니다.
- 맞닿은 물체를 합쳐서 프린트해야 할 때는 [3D 프린팅 내보내기](help:start-export)도 봅니다.

## 자주 하는 실수

- 그룹으로 묶은 것을 합친 것으로 생각합니다. 그룹은 함께 움직일 뿐 하나의 물체가 아닙니다. [그룹·분리](help:obj-group)를 봅니다.
- 빼기에서 순서를 반대로 클릭합니다. 결과가 이상하면 Ctrl+Z로 되돌리고 남길 물체부터 다시 클릭합니다.
- 스케치(평면 도형)를 합치려고 합니다. 스케치는 먼저 {c:extrude} 명령으로 입체로 만듭니다.
`,nn=`---
id: faq-clicks
title: 클릭이 안 먹을 때
분류: 문제 해결
난이도: 기초
workspace: 공통
keywords: 클릭 안 됨, 클릭이 안 먹어, 선택이 안 돼, 안 골라져, 물체가 안 잡혀, 안 눌려, 반응 없음, 먹통, 도구가 안 끝나, 스케치 편집 중, 작업 범위, 다른 층, 숨긴 물체, 가려진 점, Esc, click does not work, cannot select, nothing happens, stuck tool
commands: selectAll, exitSketch
order: 40
---

## 무엇

물체를 클릭해도 선택되지 않거나 아무 일도 일어나지 않는 경우를 다룹니다. 대부분 다른 도구나 스케치 편집이 열려 있거나, 작업 범위 밖의 물체를 누르고 있거나, 창이 3D 화면을 가리고 있는 경우입니다.

## 하는 순서

1. Esc를 한두 번 누릅니다. 열려 있는 도구가 끝나고 클릭이 다시 선택으로 돌아옵니다.
2. 화면 위에 {t:status.sketchEditing} 띠가 보이면 {c:exitSketch} 단추를 누릅니다. 스케치 편집 중에는 클릭이 스케치 선에 갑니다.
3. 3D 건설에서는 위쪽 경로 막대에서 작업 범위(대지 › 건물 › 층)를 확인합니다. 다른 건물이나 다른 층의 물체는 상자 선택에 들지 않습니다.
4. 물체 창에서 그 물체 옆의 눈 모양을 확인합니다. 숨긴 물체는 클릭되지 않습니다.
5. 창이 3D 화면을 가리고 있으면 창을 이동하거나 접습니다.

## 팁

- 물체를 선택한 뒤 한 번 더 클릭하면 면이나 모서리를 선택합니다. 물체 전체를 다시 선택하려면 빈 곳을 클릭한 뒤 물체를 클릭하거나 물체를 더블클릭합니다.
- 도구가 열려 있으면 화살표 키로 선택한 것이 움직이지 않습니다. 도구를 Esc로 끝낸 뒤 씁니다.
- 점을 찍는 도구에서 스냅이 가까운 점으로 끌어당기면 원하는 곳에 찍히지 않는 것처럼 보입니다. 상태 표시줄에서 {c:osnap}({k:osnap})이나 {c:snap}({k:snap})를 잠시 끕니다.
- 다른 물체 뒤에 가려진 점은 Alt를 누른 채 찾습니다. [객체 스냅](help:snap-osnap)을 봅니다.
- 3D 건설에서 모든 층의 부재를 한꺼번에 선택하려면 상태 표시줄의 {t:ab.allLevels} 스위치를 켭니다.
- 물체가 아예 보이지 않으면 [물체가 안 보일 때](help:faq-lost-view)를 봅니다.

## 자주 하는 실수

- 도구를 연 채로 물체를 선택하려고 합니다. 도구 창의 안내 문장이 무엇을 클릭할지 알려 줍니다. 선택만 하려면 Esc로 도구를 끝냅니다.
- 숫자 칸이나 명령줄에 커서가 있어 단축키가 듣지 않습니다. 3D 화면의 빈 곳을 한 번 클릭해 입력 칸에서 나옵니다.
- 다른 건물의 벽을 선택하려고 합니다. 경로 막대에서 선택하거나 전체 목록에서 그 건물 행을 두 번 클릭해 작업 범위를 이동합니다.
`,rn=`---
id: faq-file-open
title: 파일이 안 열릴 때
분류: 문제 해결
난이도: 기초
workspace: 공통
keywords: 파일 안 열림, 안 열려, 열기 실패, 손상, 깨진 파일, 복구, 저장 안 한 작업, 날아갔어, 자동 저장, DWG, DXF, STL, STEP, OBJ, 형식, 새 버전, file will not open, open failed, corrupted, recover, autosave, unsaved work
commands: open, importFile
order: 60
---

## 무엇

파일을 열 때 안내가 뜨고 열리지 않거나, 앱이 갑자기 닫혀 작업이 사라진 것처럼 보이는 경우를 다룹니다. 파일 형식, 손상 여부, 복구용 자동 저장을 차례로 확인합니다.

## 하는 순서

1. {c:open}({k:open}) 명령으로 파일을 엽니다. STL·OBJ·STEP·DXF·SVG 같은 다른 프로그램의 파일은 새 문서로 열리고 놓을 자리를 선택하는 창이 뜹니다. 지금 문서에 더하려면 {c:importFile} 명령을 씁니다.
2. {t:msg.openFailed} 안내가 뜨면 그 파일이 NukCAD 파일인지 확장자를 확인합니다.
3. 앱이 갑자기 닫혔으면 앱을 다시 엽니다. 처음 화면에 {t:start.recoverOpen} 단추가 보이면 눌러 저장하지 않은 작업을 되살립니다.
4. 되살린 작업은 바로 {c:saveAs}({k:saveAs}) 명령으로 이름을 붙여 저장합니다.

## 팁

- 파일의 일부가 손상되어 있으면 앱이 손상된 부분만 빼고 엽니다. 이때 몇 개를 뺐는지 안내합니다.
- 더 새 버전의 NukCAD에서 만든 파일은 일부가 빠지거나 다르게 보일 수 있습니다. 앱을 업데이트합니다.
- DWG 파일은 설치판에서만 열 수 있습니다. 웹판에서는 DWG를 DXF로 바꿔 저장한 뒤 엽니다.
- 복구용 자동 저장은 {c:settings} → {t:set.options} 탭의 {t:set.autosave}에서 켜고 끕니다. 끄면 앱이 닫혔을 때 되살릴 수 없습니다.
- 다른 프로그램의 3D 파일은 메시(삼각형 면)로 들어오는 경우가 있어, 모깎기 같은 도구가 듣지 않을 수 있습니다. [합치기·빼기가 안 될 때](help:faq-boolean-fail)를 봅니다.

## 자주 하는 실수

- 처음 화면의 {t:start.recoverDiscard} 단추를 눌러 복구 사본을 삭제합니다. 삭제한 사본은 되살릴 수 없습니다.
- 지금 문서에 더하려던 파일을 {c:open} 명령으로 엽니다. 새 문서로 열리므로, 더하려면 {c:importFile} 명령을 씁니다.
- 웹판에서 저장한 위치를 잊습니다. 브라우저의 다운로드 폴더를 확인합니다.
`,an=`---
id: faq-lost-view
title: 물체가 안 보일 때
분류: 문제 해결
난이도: 기초
workspace: 공통
keywords: 물체가 안 보여, 사라졌어, 없어졌어, 화면 밖, 너무 작아, 너무 멀어, 숨김, 숨겼어, 다시 보이기, 전체 보기, Home, 위층, 흐리게, 단면, 잘라 보기, 작업 범위, 물체가 없어, lost object, cannot see, disappeared, off screen, hidden, show all, zoom to fit
commands: fit, unhideAll, upperLevels
order: 80
---

## 무엇

만든 물체가 화면에서 보이지 않는 경우를 다룹니다. 화면이 다른 곳을 보고 있거나, 물체를 숨겼거나, 보기 설정(위층 숨기기, 단면 보기, 위 잘라 보기)이 켜져 있는 경우가 대부분입니다. 실수로 삭제했다면 되돌리기로 되살립니다.

## 하는 순서

1. {c:fit}({k:fit}) 명령을 실행합니다. 모든 물체가 화면에 들어오게 맞춰집니다.
2. 물체 창에서 그 물체를 찾습니다. 이름을 클릭하면 선택되고, 눈 모양이 꺼져 있으면 눌러 다시 보이게 합니다.
3. 숨긴 것을 모두 다시 보이게 하려면 명령줄에 \`unhide\`를 입력합니다({c:unhideAll}).
4. 3D 건설에서는 {c:upperLevels} 상태와 작업 범위를 확인합니다. 위층이 숨겨져 있거나 다른 건물이 흐리게 보일 수 있습니다.
5. 단면 보기나 위 잘라 보기가 켜져 있으면 끕니다.
6. 물체 창에도 없으면 Ctrl+Z로 되돌려 삭제 전으로 돌아갑니다.

## 팁

- 선택한 물체만 크게 보려면 {c:fitSel} 명령을 씁니다.
- {c:isolate} 명령으로 선택한 것만 보이게 한 뒤에는 {c:unhideAll} 명령으로 나머지를 다시 보입니다.
- 3D 물체에서 물체가 너무 작거나 너무 크게 만들어진 경우가 있습니다. 속성 창에서 크기를 확인합니다. 3D 건설은 m, 3D 물체는 mm 단위입니다.
- {c:visual} 메뉴의 솔리드·스케치 숨기기가 켜져 있으면 화면 구석에 숨김 표시가 보입니다.
- 화면을 회전하다 방향을 잃으면 뷰 큐브의 면을 누르거나 집 단추로 돌아옵니다. [화면 보기](help:start-view)를 봅니다.

## 자주 하는 실수

- 3D 물체에서 만든 물체를 3D 건설에서 찾습니다. 두 작업 공간은 문서가 따로입니다. 3D 건설로 가져가려면 [건설 물체로 보내기](help:more-send-to-building)를 씁니다.
- 땅 아래에 놓인 물체를 찾지 못합니다. {c:dropGround} 명령이나 속성 창의 높이로 땅 위로 올립니다.
- 숨긴 물체를 삭제한 줄 압니다. 물체 창에 이름이 있으면 삭제한 것이 아닙니다.
`,on=`---
id: faq-shortcuts
title: 단축키
분류: 문제 해결
난이도: 기초
workspace: 공통
keywords: 단축키, 단축 키, 키보드, 키, 핫키, 펑션키, 기능키, F키, 키 맵, 키맵, 단축키 방식, 단축키 바꾸기, 단축키 목록, 단축키 표, 명령어 목록, 오토캐드, 퓨전, 블렌더, 단축키 안 됨, 단축키가 안 돼요, 키가 안 먹힘, 한글 단축키, Fn 키, Alt+P, Alt+S, Alt+C, F2, 평면 보기 단축키, shortcut, shortcuts, hotkey, keyboard, key map, keymap, AutoCAD, Fusion 360, Blender
commands: help, settings
order: 10
---

## 무엇

자주 쓰는 단축키를 모아 둔 쪽입니다. 아래 표의 키는 {c:settings}에서 선택한 단축키 방식에 맞춰 보입니다.

## 하는 순서

1. {k:help} 키를 눌러 {c:help} 창을 엽니다.
2. {t:hd.contents} 맨 아래의 {t:hd.shortcuts}를 누릅니다.
3. 위쪽 검색 칸에 기능 이름, 키, 명령어를 입력해 찾습니다.
4. 단축키 방식을 바꾸려면 {c:settings}을 열고 {t:set.general} 탭의 {t:set.keymap}에서 AutoCAD, Fusion 360, Blender 가운데 하나를 선택합니다.
5. 단축키가 없는 도구는 명령줄에 명령 이름을 입력하고 Enter를 누릅니다.

## 팁

### 파일과 편집

| 기능 | 단축키 |
|---|---|
| {c:new} | {k:new} |
| {c:open} | {k:open} |
| {c:save} | {k:save} |
| {c:saveAs} | {k:saveAs} |
| {c:undo} | {k:undo} |
| {c:redo} | {k:redo} |
| {c:copy} | {k:copy} |
| {c:paste} | {k:paste} |
| {c:duplicate} | {k:duplicate} |
| {c:linkcopy} | {k:linkcopy} |
| {c:delete} | {k:delete} |
| {c:selectAll} | {k:selectAll} |
| {c:group} | {k:group} |
| {c:ungroup} | {k:ungroup} |
| {c:move} | {k:move} |
| {c:scale} | {k:scale} |
| {c:toOrigin} | {k:toOrigin} |
| {c:exportStl} 내보내기 | {k:exportStl} |

### 화면과 창

| 기능 | 단축키 |
|---|---|
| {c:fit} | {k:fit} |
| {c:toggleRight} 창 | {k:toggleRight} |
| {c:toggleCommand} | {k:toggleCommand} |
| {c:help} | {k:help} |
| {c:planView} (3D 건설) | {k:planView} |
| {c:archSection} (3D 건설) | {k:archSection} |
| {c:ceilingView} (3D 건설) | {k:ceilingView} |
| {t:panel.objects} 창에서 {t:obj.rename} | F2 |

### 스냅과 입력

| 기능 | 단축키 |
|---|---|
| {c:osnap} | {k:osnap} |
| {c:ortho} | {k:ortho} |
| {c:grid} | {k:grid} |
| {c:snap} | {k:snap} |
| {c:otrack} | {k:otrack} |
| {t:dyn.setting} | F12 |

### 도구를 쓰는 동안

| 키 | 하는 일 |
|---|---|
| Enter | 도구를 쓰는 중에는 지금 단계를 마칩니다. 도구가 없으면 마지막 도구를 다시 엽니다. |
| 오른쪽 클릭 | 도구를 쓰는 중에는 Enter와 같습니다. 도구가 없으면 클릭한 것에 맞는 메뉴가 열립니다. |
| Esc | 열린 메뉴·창을 닫고, 도구를 끝내고(완성된 것은 남음), 스케치 편집을 마치고, 선택을 풉니다. 한 번에 한 단계씩입니다. |
| Space | 도구가 없으면 명령줄로 갑니다. 도구가 있으면 Enter와 같습니다(Blender 방식에서는 명령줄로 갑니다). |
| Ctrl+Z | 도구를 쓰는 중에는 마지막에 찍은 점을 되돌립니다. |
| Ctrl+오른쪽 클릭 | 객체 스냅 메뉴를 엽니다. |
| Tab | 커서 옆 값 칸 사이를 이동해 다닙니다. |
| Shift (끌면서) | 격자 스냅 없이 자유롭게 움직입니다. |
| Alt (점을 찍는 동안) | 음영 보기에서 면 뒤에 가려진 스냅점에도 붙습니다. |
| → ← ↑, ↓ | 점을 찍는 동안 X·Y·Z 방향으로 고정하고, ↓로 풉니다. |
| 화살표, Page Up, Page Down | 도구가 없을 때 선택한 물체를 조금씩 이동합니다. |

### 선택

| 키 | 하는 일 |
|---|---|
| Shift+클릭, Ctrl+클릭 | 더 선택하거나, 선택한 것을 다시 눌러 뺍니다. |
| 오른쪽으로 끌기 / 왼쪽으로 끌기 | 상자 안에 다 들어간 것만 / 상자에 걸친 것까지 선택합니다. |
| Shift+끌기 / Ctrl+끌기 | 상자로 선택한 것을 더합니다 / 뺍니다. |
| Shift+오른쪽 클릭 | 커서 아래 것의 메뉴를 엽니다. |

- 한글 입력 상태에서도 단축키는 같은 자리의 키로 동작합니다.
- Fusion 360·Blender 방식에서는 한 글자 키로 바로 여는 도구가 더 있습니다. 어떤 키인지는 {t:set.keymap} 아래의 설명과 {t:hd.shortcuts}에 나옵니다.
- 상태 표시줄 오른쪽의 키보드 그림 단추(지금 단축키 방식 이름)를 눌러도 {c:settings}이 열립니다.
- 명령줄 쓰는 법은 [명령줄](help:input-cmdline)에, 스냅 키는 [객체 스냅](help:snap-osnap)과 [격자·격자 스냅](help:snap-grid)에 있습니다.
- {k:snap} 키는 격자 스냅을 {t:ux.snap.auto} → {t:ux.snap.on} → {t:ux.snap.off} 순서로, {k:grid} 키는 격자선을 {t:ag.show.auto} → {t:ag.show.always} → {t:ag.show.off} 순서로 바꿉니다.
- {c:planView}, {c:archSection}, {c:ceilingView}는 3D 건설에서만 동작합니다. 같은 키를 다시 누르거나 Esc를 누르면 끝납니다.

## 자주 하는 실수

- 명령줄이나 숫자 칸에 커서가 있으면 키가 그 칸에 글자로 들어갑니다. 칸 밖을 한 번 클릭한 뒤 다시 누릅니다.
- {c:settings} 같은 창이 열려 있으면 단축키가 작업에 닿지 않습니다({c:save} 키는 됩니다). 창을 닫은 뒤 누릅니다.
- 노트북에서 F 키가 화면 밝기나 소리 키로 쓰이면 Fn 키를 함께 누릅니다.
- 다른 사람이 쓰던 컴퓨터에서 키가 다르게 동작합니다. 상태 표시줄 오른쪽에서 단축키 방식을 확인합니다.
`,sn=`---
id: faq-slow
title: 화면이 느릴 때
분류: 문제 해결
난이도: 중급
workspace: 공통
keywords: 느려, 느림, 버벅, 끊김, 렉, 랙, 멈춰, 무거워, 화면이 늦게, 그리기 품질, 표시 방식, 모서리 선, 물체가 많아, 층 숨기기, 성능, 빠르게, 계산 엔진, slow, lag, laggy, freezes, performance, draw quality
commands: settings, visual, upperLevels
order: 50
---

## 무엇

화면을 회전하거나 물체를 이동할 때 끊기는 경우를 다룹니다. 그래픽 가속 상태, 그리기 품질, 한 번에 그리는 물체의 양을 차례로 확인합니다.

## 하는 순서

1. 화면 위에 그래픽 가속 안내 띠가 보이면 먼저 [3D 화면이 검거나 아주 느릴 때](help:faq-black-screen)대로 그래픽 가속을 켭니다.
2. {c:settings} → {t:set.options} 탭에서 {t:set.drawQuality}을 {t:set.drawQuality.auto}나 {t:set.drawQuality.fast}로 둡니다.
3. {c:visual} 메뉴에서 {t:vis.shaded}처럼 모서리를 그리지 않는 방식을 선택합니다.
4. 지금 쓰지 않는 물체는 숨깁니다. 3D 건설에서는 {c:upperLevels}로 위층을 흐리게 하거나 숨깁니다.
5. 나사산이 있는 볼트, 잇수가 많은 기어처럼 면이 많은 물체는 다 만든 뒤 숨기거나 개수를 줄입니다.
6. 물체가 많아 계산이 오래 걸리면 {c:settings} → {t:set.options} 탭의 {t:set.engines}을 {t:set.engines.auto}으로 둡니다. 엔진이 많으면 더 빨리 계산하지만 메모리를 더 씁니다.

## 팁

- {t:set.drawQuality.auto}는 느려지면 작게 보이는 물체를 스스로 더 대충 그리고, 빨라지면 천천히 되돌립니다. 선택한 물체와 편집 중인 스케치는 항상 원래대로 그립니다.
- 웹판은 설치판보다 일찍 대충 그립니다. 큰 건물이나 넓은 땅은 설치판이 더 빠릅니다.
- 다른 탭이나 프로그램(동영상, 게임)을 닫으면 그래픽 칩과 메모리가 남습니다.
- 이 컴퓨터 AI가 답하는 동안에는 그래픽 칩을 함께 쓰므로 화면이 느려질 수 있습니다.
- 넓은 지도를 받으면 땅이 커집니다. 건설 지역은 필요한 만큼만 선택합니다. [건설 지역 정하기](help:site-map)를 봅니다.

## 자주 하는 실수

- {t:set.drawQuality}을 {t:set.drawQuality.fine}로 둔 채 큰 모델을 엽니다. 발표용 화면 캡처가 끝나면 {t:set.drawQuality.auto}로 회전합니다.
- 패턴으로 수백 개를 만든 뒤 하나씩 고칩니다. 하나를 고친 뒤 다시 패턴을 만들면 빠릅니다.
- 반투명 표시 방식을 계속 씁니다. 반투명은 그리는 양이 많아 느립니다.
`,cn=`---
id: faq-terrain-pits
title: 땅에 구덩이나 솟은 곳이 보일 때
분류: 문제 해결
난이도: 중급
workspace: 3D 건설
keywords: 땅 구멍, 구덩이, 움푹, 파인 곳, 솟은 곳, 뾰족, 지형 오류, 땅이 이상해, 깊은 구멍, 땅 꺼짐, 호숫가, 높이 자료, 평탄화 비탈, 깎기, 도로 밑, 물길, terrain hole, pit, spike, terrain error, ground looks wrong
commands: terrainView, grade
order: 30
---

## 무엇

땅 위에 갑자기 깊은 구덩이나 뾰족하게 솟은 곳이 보이는 경우를 다룹니다. 원인은 대부분 세 가지입니다: 지도에서 받은 높이 자료의 잘못된 점, 평탄화·도로·물길이 땅을 깎은 자리, 땅을 보는 방식입니다.

## 하는 순서

1. 땅 전체를 다시 볼 수 있게 {c:terrainView} 창을 열고 땅의 비침 정도를 원래대로 둡니다.
2. 구덩이가 대지·건물 외곽선이나 도로·물길 자리에 있으면 {c:grade} 창과 그 구조물의 속성 창에서 높이를 확인합니다.
3. 평탄화 높이가 둘레 땅보다 많이 낮으면 깎기 비탈이 깊게 생깁니다. 높이를 다시 정하거나 {t:grade.balance} 단추를 눌러 깎기와 채우기를 맞춥니다.
4. 도로·교량·옹벽은 밑의 땅이 바뀌면 저절로 다시 맞춥니다. 맞지 않으면 그 구조물을 선택하고 {t:civil.refit} 단추를 누릅니다.
5. 지도에서 받은 땅에 관계없는 곳에 바늘처럼 깊은 구멍이나 솟은 점이 있으면 파일을 저장하고 다시 엽니다. 높이 자료의 잘못된 점은 열 때 주변 높이로 바로잡힙니다.

## 팁

- 호숫가나 바닷가의 높이 자료에는 수천 m 깊이의 잘못된 점이 들어 있을 때가 있습니다. 앱은 실제 비탈·절벽·봉우리는 그대로 두고 이런 점만 고칩니다.
- 물길·못은 땅을 파고 물을 채우므로, 물 높이를 낮게 두면 파인 바닥이 그대로 보입니다. [물길·못](help:civil-waterway)을 봅니다.
- 재난 시뮬레이션의 패인 자리는 문서를 바꾸지 않습니다. 시뮬레이션을 끝내면 원래 땅으로 돌아옵니다.
- 깎은 흙과 채운 흙의 양은 [평탄화·토공량](help:site-grade)에서 봅니다.

## 자주 하는 실수

- 평탄화를 삭제한 줄 알았는데 남아 있습니다. {c:grade} 창의 목록에서 남은 평탄화를 확인합니다.
- 평탄화를 바꾼 뒤 도로가 공중에 떠 보입니다. {t:civil.refit} 단추를 누르면 지금 땅에 맞춰집니다.
- 땅을 반투명으로 보고 있어 구멍처럼 보입니다. {c:terrainView}에서 비침 정도를 확인합니다.
`,ln=`---
id: start-delete
title: Delete
분류: 시작하기
난이도: 기초
workspace: 공통
keywords: delete, erase, remove, Delete key, delete face, delete edge, delete line, delete point, delete elements, delete dimension, deleted by mistake, bring back
commands: delete, deleteSub
howto: delete
context: delete
order: 130
---

## What

Deletes the selected objects, sketches or lines. When only faces, edges or vertices of an object are selected, only those parts are deleted, not the whole object.

## Steps

1. Select the object.
2. Press Delete ({c:delete}).
3. Deleted by mistake? Ctrl+Z brings it back.

## Tips

- Select several with Shift+click or a box and delete them at once: [selecting](help:start-select).
- You can also delete with the small bar next to a selected object, the buttons the {t:panel.props} window shows when several things are selected, and the right-click menu of the {t:panel.objects} window ({t:obj.mDelete}).
- In the {t:panel.objects} window, right-click a group, or a level or kind row in 3D Building, and select {t:obj.mDelete} to delete everything in it. Before deleting it says how many of each kind go (for example "{t:ot.k.wall}: 24, {t:ot.k.slab}: 3") and asks once. Empty groups are deleted the same way.
- For a building row, select {t:ot.deleteBuilding} or {t:ot.deleteParts}. When it is the only building, the building stays and only its parts can be deleted.
- Whatever the {t:panel.objects} window deleted at once comes back with a single Ctrl+Z.
- Typing \`erase\` or \`e\` in the command line works too.
- While a sketch is being edited, select lines and press Delete to delete only those lines. Dimensions on them go too.
- Click a selected object again to select a face, edge or vertex; Delete then works as {c:deleteSub}. Only those parts go, and where it can the shape is closed up around them. If nothing would be left, the object is deleted: [partial delete and split](help:obj-partial-delete).
- Delete a 3D dimension by clicking it and pressing Delete, or from the {t:panel.annotations} list in the {t:panel.objects} window.
- With the Blender shortcut style, X deletes too.

## Common mistakes

- With a face selected, Delete removes only that face, not the whole object. To delete the whole object, press Esc to let go of the face first.
- Clicking an object of a group in the 3D view selects the whole group, so all of it is deleted. To delete one object, select only it in the {t:panel.objects} window.
- Faces and edges of mesh objects imported from other programs cannot be deleted one by one. Click {t:btn.meshToSolid} in the {t:panel.props} window first.
- If you only want it out of sight for a while, hide it instead: [hide and show](help:start-hide).
- Even after other changes, pressing Ctrl+Z several times brings a deleted object back: [undo and redo](help:start-undo).
`,un=`---
id: start-export
title: Export and 3D printing
분류: 시작하기
난이도: 기초
workspace: 공통
keywords: stl, 3mf, print, 3d print, export, slicer, 3d printer, printing, cura, bambu, step, obj, dxf, svg, laser cutting, laser, other cad, build plate, printer plate, scale, larger, smaller, 1:50, 2:1, printer size, fit to printer, 3d print button
commands: exportStl, export3mf, exportStep, exportObj, exportDxf3d, exportSvg, exportDxf, print3d
howto: stl
context: exportStl, export3mf, exportStep, exportObj, exportDxf3d, exportSvg, exportDxf, print3d
order: 60
---

## What

Writes your objects to files that 3D printers and other programs read. Use STL or 3MF for 3D printing, STEP for other CAD programs, and SVG or DXF for laser cutting and 2D drawings.

## Steps

1. Click the NukCAD button at the top left.
2. Select {t:menu.export3d} → {c:exportStl} (shortcut Ctrl+P).
3. Select where to save, then open it in your slicer and print.

## Tips

- Before you are asked where to save, an export window opens. Under {t:ex.what} select {t:ex.picked} or {t:ex.all}, then press the export button at the bottom of the window (Enter). If objects were selected when it opened, it starts with {t:ex.picked}.
- {t:ex.quality} sets how finely curved faces are split into triangles. {t:ex.q.medium} is right for 3D printing; {t:ex.q.fine} gives smoother curves and a larger file.
- What each format is for:

| Format | Use |
|---|---|
| {c:exportStl} | 3D printers; all bodies in one mesh, no colours |
| {c:export3mf} | 3D printers; keeps the colours of the bodies |
| {c:exportStep} | other CAD programs; exact surfaces, no triangles |
| {c:exportObj} | other 3D programs; a .mtl file with the colours is saved beside it |
| {c:exportDxf3d} | 3D DXF for AutoCAD |
| {t:menu.export2d} → {c:exportSvg}, {c:exportDxf} | the section and sketches of one plane as 2D lines (laser cutting, 2D drawings) |

- In the 2D export window, set {t:pe.plane} to {t:pe.ground}, {t:pe.front} or {t:pe.side}, or click a sketch or flat face to use {t:pe.picked}. The {t:pe.preview} shows the lines the file will hold.
- Before 3D printing:
  - In the {t:panel.props} window, check that {t:m.solidCheck} under {t:panel.info} says {t:m.solidOk}. If there are several separate lumps, join them with {c:union}.
  - Put floating objects on the floor with {c:drop}.
  - Set your printer's plate under {c:settings} → {t:set.units} → {t:set.printer}. The floor grid shows the plate size.
- The {m:print3d} button opens the same STL export window. On the {t:level.basic} menus it is on the {t:lv.group.output} tab in 3D Object and on the {t:flow.group.finish} tab in 3D Building.
- Technical drawings and building drawings are under {t:menu.export2d}: [technical drawing](help:obj-drawing), [building drawings](help:arch-drawing).

### Scale (exporting larger or smaller)

- Every export window has a {t:sc.section} part: the file is made larger or smaller while the document stays as it is. Select a standard scale from the ▾ of the {t:sc.label} field, or type one.

| Typed | Meaning |
|---|---|
| \`1:50\` or \`1/50\` | 50 times smaller |
| \`2:1\` | twice as large |
| \`×2\`, \`x2\` | twice as large |
| \`0.5x\`, \`50%\` | half the size |
| \`2\` (a plain number) | multiplied by it (twice as large) |

- Press Enter to apply what you typed; ↑ and ↓ go to the next standard scale. Under the field you see what it means (for example "1:50 · 50 times smaller") and the {t:sc.outSize}.
- STL, OBJ and 3MF windows also have the {t:sc.bed} (width, depth, height). {t:sc.fit} selects the largest scale that fits the printer, and red text warns about a model larger than the printer or parts thinner than 0.8 mm.
- In 3D Building, STL, OBJ and 3MF exports start at the largest standard scale that fits the printer. Set {t:sc.base} to add a plate under the model.

## Common mistakes

- Sketches (2D lines) do not go into 3D files. Make a solid first with [extrude](help:obj-extrude).
- Hidden objects are not exported. Show missing objects again before exporting: [hide and show](help:start-hide).
- If only some objects were exported, check whether {t:ex.picked} was selected in the window and select {t:ex.all}.
- An STL is not your work file. Also save it as .nkx so you can change it later: [save](help:start-save).
- An STL exported from 3D Building is scaled down, not real size. Check the {t:sc.outSize} in the window.
- A plain number such as \`50\` in the scale field makes the file 50 times larger. To make it smaller, type \`1:50\`. In a drawing's scale field, a plain number means 1:number.
- A typed scale is not used until you press Enter or click elsewhere; until then {t:sc.pending} shows under the field.
`,dn=`---
id: start-hide
title: Hide and show
분류: 시작하기
난이도: 기초
workspace: 공통
keywords: hide, show, invisible, unhide, show all, hidden, isolate, show selected only, eye, eye button, visibility, disappeared, gone, cannot see
commands: hide, unhideAll, unhidePick, isolate
howto: hide
context: hide, unhideAll, unhidePick, isolate
order: 120
---

## What

Hides objects that are in the way for a while and shows them again. Hidden objects are not deleted; they are only not drawn.

## Steps

1. Click the eye at the right of an object's row in the {t:panel.objects} window to hide or show it.
2. To show everything again, type \`unhide\` ({c:unhideAll}) in the command line.

## Tips

- In the 3D view, select an object and use {c:hide} on the small bar next to it or in the right-click menu.
- To keep only the selected objects and hide all the others, use {c:isolate} in the right-click menu.
- The eye button on the view bar ({t:vis.menu}) offers:
  - {c:unhidePick}: hidden objects show faintly; click the ones to show again, then apply.
  - {t:unhide.all}: shows everything hidden at once.
  - {t:vis.solids} and {t:vis.sketches}: {t:vis.show} | {t:vis.hide} hides all solids or all sketches.
- In the {t:panel.objects} window, the eye of a group row hides or shows everything in it. In 3D Building the eye of a site, building, level or kind row ({t:ot.k.wall}, {t:ot.k.roof} …) hides all the parts in it at once.
- Right-click a row of the {t:panel.objects} window for {t:obj.mHide} ({t:obj.mShow} when it is hidden), {t:obj.mIsolate} and {t:obj.mZoom} too.
- With the Blender shortcut style, H hides, Shift+H shows only the selection and Alt+H shows everything.

## Common mistakes

- An object that disappeared is not necessarily deleted. Look for a row with its eye off in the {t:panel.objects} window, or use {c:unhideAll}.
- When all solids or sketches are hidden, a marker such as {t:vis.hiddenSolids} shows in the 3D view. Use the button beside it to show them again.
- After {c:isolate} the other objects stay hidden. Use {c:unhideAll} when you are done.
- Hidden objects are not exported and are not selected by {c:selectAll}.
- An object may also be out of sight: [moving the view](help:start-view), [when objects are not visible](help:faq-lost-view).
`,fn=`---
id: start-level
title: Basic and Advanced menus
분류: 시작하기
난이도: 기초
workspace: 공통
keywords: basic, advanced, basic menu, advanced menu, menu level, advanced mode, more settings, tool missing, tool not shown, hidden tools, more tools, machine parts, civil
commands: settings
order: 30
---

## What

The {t:level.basic} | {t:level.advanced} switch at the right of the menu bar sets how the menus are laid out. {t:level.basic} shows the tools used most in class on tabs of its own, in the order of the work; {t:level.advanced} shows every tool on tabs by function.

## Steps

1. Click {t:level.basic} or {t:level.advanced} at the right of the menu bar.
2. In {t:level.basic}, the rarer options of the tool windows are folded under {t:ac.advanced}. Click it to open them when you need them.
3. With {t:level.advanced}, every tool is on the menus and the tool windows show all their options.
4. The same choice is under {c:settings} → {t:set.general} → {t:level.switch}.

## Tips

- {t:level.basic} and {t:level.advanced} have different tab names and orders, so a tool may sit on another tab at each level. Menu paths in the help follow the level you use.

| Work | {t:level.basic} tabs | {t:level.advanced} tabs |
|---|---|---|
| 3D Object | {t:group.transform}, {t:group.primitives}, {t:group.sketch}, {t:group.modify}, {t:group.pattern}, {t:group.combine}, {t:group.dims}, {t:lv.group.output} | {t:group.transform}, {t:group.primitives}, {t:group.sketch}, {t:group.sketchEdit}, {t:group.modify}, {t:group.construct}, {t:group.parts}, {t:group.combine}, {t:group.dims} |
| 3D Building | {t:group.site}, {t:group.build}, {t:lib.group}, {t:flow.group.finish}, {t:archui.tab.model} | {t:group.site}, {t:group.civil}, {t:group.build}, {t:lib.group}, {t:flow.group.finish}, {t:archui.tab.model} |

- In 3D Object, the {t:level.basic} {t:group.sketch} tab has the drawing tools followed by {t:lv.head.edit} ({c:editSketch}, {c:trim}, {c:offset} …) and {t:lv.head.solid} ({c:extrude}, {c:revolve}). The {t:lv.group.output} tab holds {c:drawing}, {c:print3d} and {c:screenshot}.
- In 3D Building at {t:level.basic}, {c:road} is on the {t:group.site} tab, and {c:planView} and {c:archSection} are on the {t:flow.group.finish} tab.
- A tool that is not on the {t:level.basic} menus still runs when you type its name in the command line or press its shortcut. You are told that it is on the {t:level.advanced} menus.
- In 3D Object, {t:level.basic} has no {t:group.parts} tab. Tools such as {c:sweep}, {c:loft}, {c:pipe}, {c:ellipse}, {c:spline}, {c:extend} and {c:sectionView} are only in {t:level.advanced}.
- In 3D Building, {t:level.basic} has no {t:group.civil} tab. Tools such as {c:contours}, {c:curtainWall}, {c:lighting} and {c:ceilingView} are only in {t:level.advanced}.
- The small bar over a selection and the right-click menu also leave out the tools that are only on the {t:level.advanced} menus.
- The level applies to both kinds of work and is kept on this computer for the next time.

## Common mistakes

- If a menu described in the help does not have the tool, check whether the {t:level.basic} menus are on. At {t:level.basic} the same tool can be on another tab.
- If a tool window lacks an option, click {t:ac.advanced} to open the folded options.
- Switching to {t:level.advanced} does not change your objects. Only the menus and tool windows change.
`,pn=`---
id: start-modes
title: 3D Object and 3D Building
분류: 시작하기
난이도: 기초
workspace: 공통
keywords: mode, modes, switch mode, kind of work, 3D object, 3D building, object modeling, building modeling, architecture, building, 3D print, start screen, home, new, new file, new document
commands: home, new, sendToBuilding
context: home, new
order: 20
---

## What

NukCAD has two kinds of work. {t:mode.print} makes hand-sized objects in millimetres; {t:mode.arch} puts buildings and civil works on land from a map, in metres.

## Steps

1. On the start screen, click the {t:start.print} or the {t:start.arch} card.
2. To go to the other kind while working, click the {t:mode.short.print} | {t:mode.short.arch} switch at the right of the menu bar.
3. Both pieces of work stay open when you switch. Click again to come back to where you were: the level and work scope, {t:ab.allLevels}, the hidden levels, the grid step and the camera come back as you left them.
4. To start an empty document of the same kind, use {c:new} ({k:new}).
5. To go back to the start screen, click the NukCAD button at the top left, then {c:home}.

## Tips

| | {t:mode.short.print} | {t:mode.short.arch} |
|---|---|---|
| Unit | mm | m |
| Size | up to 2,000 mm | 2 m and larger |
| Menus | {t:group.transform}, {t:group.primitives}, {t:group.sketch}, {t:group.modify}, {t:group.parts} … | {t:group.site}, {t:group.civil}, {t:group.build}, {t:lib.group}, {t:flow.group.finish}, {t:archui.tab.model} |
| Floor grid | the printer plate (200 × 200 mm by default) | the site, or a 100 × 100 m plate without one |
| Main result | STL and 3MF for 3D printing, technical drawings | floor plans and elevations, scaled-down 3D prints |

- To take an object from 3D Object into 3D Building, use the {c:sendToBuilding} button on the menu bar: [send to building](help:more-send-to-building).
- In 3D Building, double-click a door, window or piece of furniture to edit that object alone in 3D Object (you are asked first).
- The start screen lists recovery copies of unsaved work. Click {t:start.recoverOpen} to open one: [saving](help:start-save).
- The {c:open} button under the cards opens a file directly. A 3D Building file opens in 3D Building.
- For typing sizes and units, see [units and sizes](help:start-units).

## Common mistakes

- {c:home} closes both pieces of work. If there are unsaved changes you are asked first. Save what you need before going there.
- The switch does not move objects. To put a 3D Object part into a building, use {c:sendToBuilding}.
- Saving writes only the work you are looking at. To keep both, save each one.
- In 3D Building a plain number is in metres. Type 30 cm as \`0.3\` or \`30cm\`.
`,mn=`---
id: start-open
title: Open and import files
분류: 시작하기
난이도: 기초
workspace: 공통
keywords: open, load, import, open file, import file, file from another program, nkx, stl, step, stp, obj, 3mf, dxf, svg, dwg, blend, blender, 123dx, 123d design, f3d, fusion, unit, mesh, cannot open
commands: open, importFile, new
howto: open
context: open, importFile
order: 50
---

## What

Opens a NukCAD file you saved, or brings 3D and 2D files from other programs into your work.

## Steps

1. Press Ctrl+O, or click the NukCAD button at the top left → {c:open}.
2. Files from other programs (STL, STEP …): {t:menu.import} → {c:importFile}.

## Tips

- {c:open} opens NukCAD files (.nkx). If you select another kind of file (STL, OBJ, STEP, DXF, SVG …), a new document is made and the file is brought into it.
- {c:importFile} keeps your work and adds the objects of the file. Use it to combine another NukCAD file too.
- Click in the 3D view to place what you import. On a face it sits on the face; on a vertex or centre marker it snaps there. Esc cancels.
- Formats you can import:

| Format | What comes in |
|---|---|
| STEP (.step, .stp) | exact solids |
| STL, OBJ, 3MF | triangle mesh objects |
| Blender (.blend) | meshes (only mirror and subdivision modifiers are applied) |
| 123D Design (.123dx) | solids |
| DXF | 2D lines, circles, arcs, polylines, blocks, dimension lines, and 3D solids |
| SVG | 2D lines (a sketch) |
| NukCAD (.nkx) | merged into your work |
| DWG, DWS | installed app only: converted to DXF when the free ODA File Converter is installed |

- When placing an STL or OBJ you can select the {t:imp.unit} (mm, cm, inch, m). If the size looks far too big or small, change the unit.
- Mesh objects can only be viewed, moved and exported. To fillet or drill them, click {t:btn.meshToSolid} in the {t:panel.props} window (30,000 triangles or fewer).
- For saving, see [save](help:start-save).

## Common mistakes

- {c:open} closes your work and opens the new file. If there are unsaved changes you are asked first. To combine two pieces of work, use {c:importFile}.
- Fusion 360 files (.f3d) cannot be opened. Export STEP from Fusion and import that.
- The web version cannot import DWG. Save it as DXF in AutoCAD and import that.
- Meshes with more than 1,500,000 triangles are not read. Reduce them in the program they came from.
- If a file does not open, see [when a file does not open](help:faq-file-open).
`,hn=`---
id: start-save
title: Save
분류: 시작하기
난이도: 기초
workspace: 공통
keywords: save, save as, saving, save file, keep, copy, new name, where to save, nkx, autosave, recover, recovery, lost work, not saved, Ctrl+S
commands: save, saveAs
howto: save
context: save, saveAs
order: 40
---

## What

Saves your work as a NukCAD file (.nkx). When you open the file again, the objects and their steps come back and you can go on editing them.

## Steps

1. Press Ctrl+S, or click the NukCAD button at the top left → {c:save}.
2. The first time, select a place and a name.
3. To keep a separate copy use {c:saveAs} (Ctrl+Shift+S).

## Tips

- The save button right next to the NukCAD button on the menu bar does the same.
- After the first save, {k:save} writes over the same file each time. A message with the file name confirms it.
- A • after the file name on the NukCAD button means there are unsaved changes.
- New work that has no name yet is offered a name such as \`3D_Object_date_time\`.
- The file keeps the view too: the camera's place, direction, projection and zoom, and in 3D Construction the level and work scope worked on and the time of day of the lighting. Opening the file brings them back. {c:otrack} (F11), {t:grid.ortho} (F8) and the grid snap are not saved. Only turning the view never makes changes to save.
- In a browser that has no window for selecting where to save, the file goes to the downloads folder.
- Save to a USB stick or a cloud drive folder to open the work on another computer: [open and import](help:start-open).
- The {t:set.autosave} setting keeps a recovery copy of unsaved work on this computer, every 5 minutes by default. If the program closes suddenly, click {t:start.recoverOpen} on the start screen. Change the interval under {c:settings} → {t:set.options}. Work dropped on {c:new}, {c:open} or {c:home} loses its recovery copy too.
- An STL for 3D printing is an export, not a save: [export and 3D printing](help:start-export).

## Common mistakes

- Do not rely on recovery copies. They stay on this computer only, and the oldest ones can be removed. Save your work to a file with {c:save}.
- An STL alone cannot be edited step by step later. Save the work you want to change as .nkx.
- Saving writes only the kind of work you are looking at. Save 3D Object and 3D Building work separately: [3D Object and 3D Building](help:start-modes).
- Closing the save window saves nothing. If the • after the file name is still there, save again.
`,gn=`---
id: start-screen
title: Screen layout
분류: 시작하기
난이도: 기초
workspace: 공통
keywords: screen, layout, interface, ui, overview, getting started, menu, menu bar, ribbon, tabs, NukCAD button, file menu, properties, properties window, browser, objects window, tool options, command line, status bar, view cube, view bar, globe, language button, linear step, angular step, Cadoo, helper, help, where is
commands: toggleRight, toggleLeft, toggleCommand, cadooChat, help
context: toggleRight, toggleLeft
order: 10
---

## What

The NukCAD screen has the menu bar at the top, the 3D view in the middle, windows at the sides, and the command line and status bar at the bottom. This page names each part, says what it is for, and lists what the {t:panel.props} window shows.

## Steps

1. Click the NukCAD button at the far left of the menu bar to open the file menu: {c:new}, {c:open}, {c:save}, {t:menu.import}, {t:menu.export3d}, {c:settings}, {c:home} and more. The button shows the file name, with a • after it while there are unsaved changes.
2. The small buttons to the right of the NukCAD button are {c:save}, the globe button for the {c:lang} (한국어 or English), {c:undo} and {c:redo}.
3. Click a tab (for example {t:group.primitives} or {t:group.sketch}) to show its tools in the row below. The tabs differ between {t:level.basic} and {t:level.advanced}. Tools that do not fit in the row are under the {t:menu.more} button.
4. At the right of the menu bar are the {t:win.menu} menu, the {t:level.basic} | {t:level.advanced} switch, the {t:mode.short.print} | {t:mode.short.arch} switch, the help (?) button and the {c:settings} button. 3D Object adds a {c:sendToBuilding} button among them, 3D Building a {c:buildFlow} button.
5. Make and select objects in the 3D view. Use the view cube at the top right and the view bar below it to change the viewing direction and display style.
6. The {t:panel.objects} window on the left lists your objects and sketches; the {t:panel.props} window on the right shows the name, colour, position and size of what is selected. A {t:win.toolPanel} window appears when a tool is open.
7. Type commands and values in the {c:toggleCommand} under the 3D view (for example \`box 30 20 10\`).
8. The status bar at the very bottom shows the engine state, the number of objects, a hint for what you can do now, the {t:grid.linear} and {t:grid.angular} lists, the snap buttons and the shortcut style button.

## Tips

### What the Properties window shows

| Selected | Shown |
|---|---|
| Nothing | the {t:panel.props.empty} hint |
| One object | colour and {t:panel.name}, {t:panel.material}, {t:panel.position}, {t:panel.rotation}, the values of the step that made it (for a box: {t:param.x}, {t:param.y}, {t:param.z}), {t:panel.info} ({t:m.size}, {t:m.volume}, {t:m.surface}, {t:m.solidCheck}) |
| One sketch | {t:panel.name}, {t:panel.position}, {t:panel.rotation}, the number of elements, buttons such as {c:editSketch}, {c:extrude} and {c:revolve}, line weight and colour |
| Several | how many are selected, buttons such as {c:union}, {c:subtract}, {c:group} and {c:delete}, the values they share, colour and material |

- A number changed in the {t:panel.props} window is applied to the object at once. Number fields take calculations too: [calculations](help:input-calc).
- Open the steps of an object in the {t:panel.objects} window and click one: the {t:panel.props} window then edits that step's values.
- Building parts in 3D Building show extra settings for their level and height. Mesh objects imported from other programs show a {t:btn.meshToSolid} button.
- When you select an object in the 3D view, a small bar of common tools appears next to the click. Right-click for a menu with the other tools that fit.
- While a tool is open, an {t:btn.apply} button appears in the 3D view. Enter or a right click does the same. Esc ends the tool and keeps what is complete.
- The helper character Cadoo walks along the bottom of the 3D view, just above the command line. Click it for a greeting and a tip; double-click it for the {c:cadooChat} window: [Cadoo chat](help:more-cadoo).
- Press {k:help} or the ? button at the right of the menu bar to open the help.
- Drag the bottom edge of the menu bar to make the menu larger or smaller; double-click it for the automatic size.
- Use the pin button at the end of the tab row ({t:menu.unpin}) to show the tools only when a tab is clicked.
- The {t:level.basic} menus have tabs laid out for class work. In 3D Object the sketch tab holds the drawing tools, then {t:lv.head.edit} and {t:lv.head.solid} tools in that order, and there are separate {t:group.pattern} and {t:lv.group.output} tabs ({c:drawing}, {c:print3d}, {c:screenshot}): [Basic and Advanced menus](help:start-level).

### The status bar

| Part | What it does |
|---|---|
| {t:grid.linear} · {t:grid.angular} | the steps kept to when moving and turning: [grid and grid snap](help:snap-grid) |
| {c:snap} (F9) | each click goes {t:ux.snap.auto} → {t:ux.snap.on} → {t:ux.snap.off} |
| {t:grid.osnap} (F3) ▾ | the main part switches object snaps, the ▾ opens the snap menu: [object snaps](help:snap-osnap) |
| {c:otrack} (F11) | switches [snap tracking](help:snap-track) |
| {t:grid.ortho} (F8) | switches [ortho](help:snap-ortho) |
| keyboard button | shows the shortcut style; click it to open {c:settings} |

- In 3D Building the status bar also shows a site › building › level bar on the left, to change the level you work on.

## Common mistakes

- If the {t:panel.props} window is missing, press {k:toggleRight} or switch it on in the {t:win.menu} menu. To move windows, see [working with windows](help:start-windows).
- If the command line is missing, press {k:toggleCommand}.
- If a tool is not where you expect, the {t:level.basic} menus may have it on another tab or not at all. The menu paths in the help follow the level you use. Select {t:level.advanced} at the right of the menu bar to see every tool: [Basic and Advanced menus](help:start-level).
- The menus of 3D Building differ from 3D Object (tabs such as {t:group.site} and {t:group.build}). The 3D object tools are inside the {t:archui.tab.model} tab.
- There is no language button in the status bar. Change the language with the globe button next to {c:save} at the left of the menu bar.
`,_n=`---
id: start-select
title: Selecting
분류: 시작하기
난이도: 기초
workspace: 공통
keywords: select, selection, pick, click, multiple, several, Shift, Ctrl, box select, drag select, window select, crossing, face, edge, vertex, point, line, select all, deselect, clear selection, cannot select, lock selection type
commands: selectAll, deselect, selectSimilar
context: selectAll, deselect
order: 100
---

## What

Select objects, sketches, faces or edges before using a tool or deleting. What is selected is highlighted, and the {t:panel.props} window shows its details.

## Steps

1. With no tool open, click an object to select it.
2. Hold Shift or Ctrl and click to select more; click something already selected to take it out.
3. Drag a box from an empty spot to select several at once. Dragging to the right draws a solid box that takes only what is fully inside; dragging to the left draws a dashed box that also takes what it touches. Hold Shift while dragging to add to the selection, Ctrl to take out of it.
4. To select a face, edge or vertex, click the selected object once more. A double-click does not select a face.
5. To select everything shown, press {k:selectAll} ({c:selectAll}). In 3D Building it selects only what is inside the work scope, by the same rule as a box.
6. To clear the selection, click an empty spot or press Esc.

## Tips

- Box selection goes by the real shape: whether a thing touches the box depends on its own faces and lines, not on a box around it, and things hidden behind others are taken too.
- With nothing selected, the middle of the status bar shows the hint {t:hint.boxSelect}.
- You can select in the list of the {t:panel.objects} window too: a click selects just that item, Ctrl+click adds or takes out one, Shift+click selects everything in between. Clicking a group, or a level or kind row in 3D Building, selects everything in it. These rows and Shift+click skip hidden things.
- Clicking an object of a group in the 3D view selects the whole group. A double-click goes one step into the group and selects the inner group or that object alone. You can also select it in the {t:panel.objects} window list.
- Pressing Esc while drawing a box or dragging objects or a move handle cancels only the drag: everything goes back to where it started and the selection stays.
- With the section view on, Esc lets go of the selection first; the next Esc turns the section view off.
- With a face selected, Shift+click selects more faces of the same object. Edges and vertices work the same way.
- {t:sel.byKind} at the top of the {t:panel.objects} window selects every shown thing of one kind.
- To select everything of the same colour or kind, use [select similar](help:obj-select-similar).
- Shift + right click opens a menu for what is under the cursor. Its {t:pf.title} makes clicks select only faces, lines, points or objects. Click the marker in the status bar to go back to {t:pf.all}.
- While a sketch is being edited, clicks and boxes select the lines of that sketch, and {k:selectAll} selects all of its lines.
- Typing \`deselect\` in the command line clears the selection too ({c:deselect}). With a face selected, one Esc lets go of the face only; the object stays selected.
- The small bar next to a selected object and the right-click menu offer the tools that fit what is selected.

## Common mistakes

- Dragging on a selected object does not draw a box: it moves the object along the floor. Start the box on an empty spot. If you moved it by mistake, press Ctrl+Z.
- The first click selects the whole object. Click again to select a face.
- Dragging a box with Ctrl held takes things out of the selection. To add with a box, hold Shift.
- A box dragged to the right selected only some objects. That box takes only what is fully inside; drag to the left to take what it touches as well.
- While a tool is open, clicks go to the tool. Press Esc to end the tool before selecting.
- With {t:pf.title} on, whole objects may not be selected. Check the status bar.
- Hidden objects are not selected by {c:selectAll}: [hide and show](help:start-hide).
`,vn=`---
id: start-settings
title: Preferences
분류: 시작하기
난이도: 기초
workspace: 공통
keywords: preferences, settings, options, gear, language, Korean, English, shortcuts, shortcut style, keymap, key map, AutoCAD, Blender, Fusion, text size, font size, colours, theme, dark mode, grid, grid size, build plate, autosave, map key, VWorld, hide character, reset, defaults
commands: settings, lang
context: settings, lang
order: 140
---

## What

{c:settings} changes the language, shortcut style, text size, colours, grid, autosave and more. Settings are kept on this computer (in the browser) for the next time.

## Steps

1. Click the gear button at the far right of the menu bar, or click the NukCAD button at the top left → {c:settings}.
2. Select one of the tabs at the top: {t:set.general}, {t:set.options} or {t:set.units}. 3D Building also has a {t:set.map} tab.
3. A changed value applies at once.
4. Close the window with {t:btn.ok} or Esc.

## Tips

| Tab | Settings |
|---|---|
| {t:set.general} | {t:set.language}, {t:set.uiScale}, {t:set.theme}, {t:set.keymap}, {t:level.switch}, {t:set.tooltipDelay}, {t:set.palette}, the AI connection |
| {t:set.options} | {t:set.projection}, {t:set.drawQuality}, {t:set.wheelZoom}, {t:set.orbitSpeed}, {t:ux.set.pivot}, {t:set.cubeSize}, {t:gizmo3.size}, {t:set.buddy}, {t:buddy.still}, {t:set.buddySize}, {t:set.autosave}, {t:stable.storage}, {t:set.commandLine}, {t:set.edges} · 3D Building: {t:ux.set.scopeFit}, {t:nuke.setting} |
| {t:set.units} | 3D Object: {t:set.printer}, {t:set.gridW}, {t:set.gridH} · 3D Building: {t:set.archGrid} · both: {t:set.gridCell}, {t:set.gridMajor}, {t:set.showGrid}, {t:set.planes}, {t:set.objectSnap}, {t:dyn.setting}, {t:dyn.coords} |
| {t:set.map} | {t:set.vworldKey}, {t:set.siteMax} |

- {t:set.keymap}: with {t:set.keymap.autocad} (the default), typing goes to the command line and Enter runs it. With {t:set.keymap.fusion} or {t:set.keymap.blender}, single keys run tools at once. The main keys of the selected style are listed under it.
- The keyboard button at the right of the status bar (showing the current shortcut style) opens this window.
- The globe button next to {c:save} at the left of the menu bar also changes the language: select 한국어 or English. Typing \`lang\` in the command line switches between the two; \`lang en\` and \`lang ko\` select one.
- {t:ux.set.pivot} is what the view turns about. {t:ux.set.pivot.cursor} (the default) turns about the point where the drag starts, {t:ux.set.pivot.selection} about the middle of what is selected: [moving the view](help:start-view).
- {t:set.uiScale} goes from 90% to 150%. Make it larger if the text is too small.
- {t:set.autosave} can be off or every 1, 2, 5, 10, 15 or 30 minutes (5 by default): [save](help:start-save).
- Set {t:set.buddy} to {t:buddy.off} to hide the Cadoo character. Switch on {t:buddy.still} to keep Cadoo in one place instead of walking.
- {t:set.showGrid} is {t:ag.show.auto}, {t:ag.show.always} or {t:ag.show.off}, kept separately for each kind of work: [grid and grid snap](help:snap-grid).
- The key on the {t:set.map} tab is for aerial photos in 3D Building: [building site](help:site-map). For the AI connection see [AI setup](help:more-ai-setup).
- The {t:set.reset} button at the bottom puts every setting and the window layout back to how they started. It asks first, and keeps the map keys and the AI connection.

## Common mistakes

- No setting changes mm to m. The kind of work sets the unit: [units and sizes](help:start-units).
- If pressing a letter runs a tool at once, the shortcut style is {t:set.keymap.fusion} or {t:set.keymap.blender}. Select {t:set.keymap.autocad} to type in the command line.
- The {t:set.map} tab is not shown in 3D Object; that is normal.
- Clearing the browser's site data can put the settings back to their defaults.
`,yn=`---
id: start-undo
title: Undo and redo
분류: 시작하기
난이도: 기초
workspace: 공통
keywords: undo, mistake, go back, redo, cancel, take back, step back, wrong, restore, Ctrl+Z, Ctrl+Y
commands: undo, redo
howto: undo
context: undo, redo
order: 70
---

## What

Takes back the last change to return to the state before it, and redoes what you took back.

## Steps

1. Press Ctrl+Z or click {c:undo} at the top left.
2. To go forward again: Ctrl+Y ({c:redo}).

## Tips

- Press it again to go back one more step each time, up to 200 steps.
- {c:redo} also works with Ctrl+Shift+Z. In the command line type \`u\` (undo) or \`redo\`.
- While a tool is open, Ctrl+Z takes back only the last point clicked or the last drag of an arrow in that tool, not the whole document.
- One action is one undo step. Holding ↑/↓ in a number field, or dragging in a colour picker, goes back in one step.
- 3D Object and 3D Building keep separate histories. Switching to the other kind and back keeps them.
- To change or switch off an earlier step, open the steps of the object in the {t:panel.objects} window.

## Common mistakes

- After undoing, any new change clears the {c:redo} history after it.
- Esc is not undo. Esc ends the tool and keeps what is complete.
- Turning the view or selecting objects are not undo steps.
- Opening a file or starting with {c:new} starts a new history.
- When the history takes too much memory, its oldest steps are let go and you are told.
`,bn=`---
id: start-units
title: Units and sizes
분류: 시작하기
난이도: 기초
workspace: 공통
keywords: unit, units, size, dimension, mm, millimetre, millimeter, cm, centimetre, centimeter, m, metre, meter, inch, in, change unit, mixed units, decimal, comma, angle, degrees, how big, too big, too small
commands: snap, measure, settings
order: 80
---

## What

The kind of work sets the unit: {t:mode.short.print} uses mm and {t:mode.short.arch} uses m. A value typed with another unit is turned into the field's own unit.

## Steps

1. A plain number in a field is in that field's unit (mm in 3D Object, m in 3D Building).
2. To use another unit, put \`mm\`, \`cm\`, \`m\` or \`in\` right after the number. For example \`2.5cm\` in 3D Object gives 25 mm.
3. Units can be mixed in a calculation. For example \`3m+20cm\` in 3D Building gives 3.2 m.
4. Press Enter or move to another field to apply the value. Esc puts the old value back.
5. Check the size of an object under {t:panel.info} → {t:m.size} in the {t:panel.props} window, and a distance between two points with {c:measure}.

## Tips

| | {t:mode.short.print} | {t:mode.short.arch} |
|---|---|---|
| Unit | mm | m |
| Range of tool length fields | 0.1 to 2,000 mm | 0.01 to 500 m |
| Grid snap steps | 0.1, 0.5, 1, 5, 10 mm (1 mm by default) | 0.01 to 10 m (0.1 m by default) |

- For inches you can also put \`"\` after the number (\`2"\` gives 50.8 mm).
- Angles are in degrees. \`45\`, \`45°\` and \`45deg\` all mean 45 degrees.
- Write decimals with a point, as in \`3.5\`. \`3,5\` is read as 3.5 too, and \`1,000\` as 1000.
- Number fields also take calculations such as \`10/3\` or \`(20+5)*2\`: [calculations](help:input-calc).
- Change the grid snap step with {t:grid.linear} in the {t:grid.title} box in a corner of the 3D view: [grid and grid snap](help:snap-grid).
- The {t:panel.position} heading in the {t:panel.props} window shows the current unit in brackets. {t:m.volume} is in mm³ or m³ and {t:m.surface} in mm² or m².
- When you import an STL or OBJ from another program, select its {t:imp.unit} while placing it: [open and import](help:start-open).

## Common mistakes

- In 3D Building \`30\` means 30 m. Type 30 cm as \`0.3\` or \`30cm\`.
- Length fields in 3D Object take at most 2,000 mm. Make large structures in 3D Building: [3D Object and 3D Building](help:start-modes).
- Units such as \`km\` or \`ft\` are not read. Use mm, cm, m or in.
- There is no setting that changes mm to m. The kind of work sets the unit.
- If an imported STL is about 10 or 25.4 times too big or too small, the file has another unit. Change the {t:imp.unit} while placing it.
`,xn=`---
id: start-view
title: Moving the view
분류: 시작하기
난이도: 기초
workspace: 공통
keywords: view, orbit, rotate view, turn view, pan, move view, zoom, zoom in, zoom out, wheel, mouse, right drag, middle button, view cube, home view, fit, fit all, zoom to selection, look at, front, top, side, isometric, direction, orthographic, perspective, projection, visual style, x-ray, wireframe, orbit centre, pivot, plan view, section, ceiling view, Alt+P, Alt+S, Alt+C
commands: fit, fitSel, faceView, viewIso, viewTop, viewFront, viewRight, projection, visual, orbit, pan, zoomMode
context: fit, fitSel, faceView, viewIso, viewTop, viewBottom, viewFront, viewBack, viewRight, viewLeft, projection, visual, orbit, pan, zoomMode
order: 90
---

## What

Turn, move and zoom the 3D view to see your objects from the direction you want. Use the mouse, the view cube at the top right and the view bar below it. Changing the view never moves the objects.

## Steps

1. Drag with the right mouse button to orbit. The view turns about the point under the cursor where the drag starts, and a small mark shows that point.
2. Drag with the middle button (the wheel) to pan; the point you grabbed stays under the cursor. A right drag with Shift or Ctrl held pans too.
3. Roll the wheel to zoom in and out at the cursor.
4. To fit every object in the view, press {k:fit} ({c:fit}) or double-click the middle button.
5. Click a face, edge or corner of the view cube to turn the view to that direction. The house button beside the cube goes back to the {t:nav.home}.
6. To fill the view with what is selected, click {c:fitSel} on the view bar; to look straight at a selected face, click {c:faceView}.

## Tips

- The view bar holds the {t:view.ortho} | {t:view.persp} switch, {c:pan}, {c:orbit}, {c:zoomMode}, the {t:nav.zoomTitle} (%), {c:fit}, {c:fitSel}, {c:faceView}, {c:visual}, {t:vis.menu}, {c:grid}, {c:dimInfo} and {c:screenshot}.
- Orbit centre: with nothing under the cursor, the view turns about the middle of what is selected, then about the middle of the visible model. To always turn about the selected things, select {t:ux.set.pivot.selection} under {c:settings} → {t:set.options} → {t:ux.set.pivot}.
- {c:faceView} asks you to click a face when none is selected. Flat and curved faces both work.
- With the {c:pan}, {c:orbit} or {c:zoomMode} button on, a left drag does that action. Esc switches it off.
- Click the {t:nav.zoomTitle} (%) to set it exactly with a slider or a number. 100% means the grid plate just fills the height of the view.
- Type standard directions in the command line: \`top\` ({c:viewTop}), \`bottom\` ({c:viewBottom}), \`front\` ({c:viewFront}), \`back\` ({c:viewBack}), \`right\` ({c:viewRight}), \`left\` ({c:viewLeft}), \`iso\` ({c:viewIso}). Each also fits everything in the view.
- With the Blender or Fusion 360 shortcut style, the numpad turns the view: 7 top, 1 front, 3 right, with Ctrl the opposite side, 0 isometric, 5 toggles the projection, . fits the selection.
- The {t:view.ortho} view shows sizes without distortion; the {t:view.persp} view looks as the eye sees. Set the one used at start under {c:settings} → {t:set.options} → {t:set.projection}.
- {c:visual}: select {t:vis.shadedEdges}, {t:vis.shaded}, {t:vis.wire}, {t:vis.xrayEdges} or {t:vis.xray}. X-ray shows parts hidden inside.
- Drag the view cube to orbit. Drag the grip beside it to move the cube to another corner of the view. In 3D Building the cube has north, east, south and west around it (north is +Y).
- Change the cube size, the zoom per wheel notch and the orbit speed under {c:settings} → {t:set.options}: {t:set.cubeSize}, {t:set.wheelZoom}, {t:set.orbitSpeed}.
- On a touch screen, two fingers orbit and zoom and three fingers pan. A long press is the same as a right click.
- 3D Building has views that cut the building: {c:planView} ({k:planView}) cuts one level and looks from above, {c:archSection} ({k:archSection}) cuts the building upright and looks from the side, and {c:ceilingView} ({k:ceilingView}) looks up at one level's ceiling. Press the same key again or Esc to leave: [ceiling view and cut away](help:arch-ceiling).
- In 3D Building, changing the work scope to another building or level moves the view so it is in sight. To stop this, switch off {t:ux.set.scopeFit} under {c:settings} → {t:set.options}.

## Common mistakes

- If your objects are out of sight, press {k:fit}. Hidden objects do not come back with it: [hide and show](help:start-hide), [when objects are not visible](help:faq-lost-view).
- With the {c:pan} or {c:orbit} button left on, clicks do not select objects. Press Esc to switch it off.
- A right click without dragging does not orbit: it opens a menu, or applies (Enter) while a tool is open.
- In the {t:view.persp} view lengths are hard to compare by eye. Use the {t:view.ortho} view when matching sizes.
`,Sn=`---
id: start-windows
title: Working with windows
분류: 시작하기
난이도: 중급
workspace: 공통
keywords: window, windows, windows menu, panel, move window, dock, docking, float, floating, tab, tabs, collapse, expand, close, reopen, window missing, window gone, layout, reset layout, default layout, gather, window size, properties window, browser
commands: winGather, winReset, toggleLeft, toggleRight
context: winGather, winReset
order: 110
---

## What

Windows such as {t:panel.objects}, {t:panel.props} and {t:win.toolPanel} can be docked on the left, right or bottom, floated, joined as tabs, collapsed and closed. Each kind of work remembers its own window layout.

## Steps

1. Drag a window's title bar to float it. The {t:win.float} button on the title bar does the same.
2. Drag a floating window to the left, right or bottom edge of the screen to dock it there. The place it will go is highlighted while you drag.
3. Drop a window on another window's title bar to join them as tabs. Drag a tab out to take only that window out.
4. Double-click a title bar or click its {t:win.collapse} button to collapse the window; do it again to expand it.
5. Reopen a window closed with its {t:win.close} button from the {t:win.menu} menu on the menu bar.
6. If the windows are scattered, select {t:win.menu} → {c:winReset}.

## Tips

- The {t:win.menu} menu lists every window of the current kind of work, with a tick next to the ones shown.
- {c:winGather} docks every window together on the right as tabs.
- The {t:win.dock} button of a floating window docks it back on its side.
- Drag the border between docked windows to change their length, and the inner edge of a side to change its width. Double-click to fit the contents or go back to the default size.
- Resize a floating window by dragging its sides or bottom corners.
- A closed window leaves a small button on the side it was docked on; click it to reopen the window.
- {k:toggleRight} opens and closes the {t:panel.props} window. Type \`browser\` in the command line to open and close the {t:panel.objects} window.
- The {t:win.toolPanel} window shows only while a tool is open. Closing it ends the tool, like Esc.
- In 3D Building, {c:buildFlow} and {t:panel.objects} share the left side as tabs, with {c:levelPanel} and {t:panel.props} on the right.
- The {t:panel.objects} window is a tree. In 3D Object it shows groups and objects under {t:panel.objects} and {t:panel.sketches}; in 3D Building it goes site › building › level › kind of part ({t:ot.k.wall}, {t:ot.k.slab} …). Type part of a name, or Korean initials, in the {t:obj.search} box at the top to keep only what matches.
- Drag a row of the {t:panel.objects} window into a group or above or below another row to move it there in the list. Its place in the 3D view does not change. The right-click menu has entries such as {t:ot.mNewGroup}, {t:ot.mGroup}, {t:obj.rename} and {t:obj.mDelete}: [group and separate](help:obj-group).
- On narrow screens (900 px or less) the windows become drawers that open from the side one at a time.

## Common mistakes

- A window dropped in the middle of the 3D view floats. Drag it all the way to an edge to dock it.
- If the {t:panel.props} window is missing, it is closed or collapsed. Switch it on in the {t:win.menu} menu or press {k:toggleRight}.
- {c:winReset} resets only the layout of the current kind of work.
- {t:set.reset} in {c:settings} also resets the window layout, together with the other settings: [preferences](help:start-settings).
`,Cn=`---
id: obj-align
title: Align
분류: 3D 물체 도구
난이도: 중급
workspace: 공통
keywords: align, alignment, line up, centre, center, center align, align left, align right, align top, align bottom, same height, in a row, reference object, al, 3dalign, allign
commands: align, faceSnap
context: align
order: 320
---

## What

Lines up the ends or the middles of several objects, axis by axis. Click the dots that appear around the objects to select the side, and see where everything goes before it moves.

## Steps

1. Hold Shift and click two or more objects to select them.
2. Click {m:align}.
3. Dots in the axis colours (X red, Y green, Z blue) appear around the objects. Hover a dot to preview where the objects go.
4. Click the dot of the side to line up. Dots on other axes can be added.
5. Apply (Enter) to finish.

## Tips

- Each axis has three dots: X {t:opt.alignLeft}, {t:opt.align.mid}, {t:opt.alignRight}; Y {t:opt.alignFront}, {t:opt.align.mid}, {t:opt.alignBack}; Z {t:opt.alignBottom}, {t:opt.align.mid}, {t:opt.alignTop}. The table in the tool window has the same buttons.
- Without a reference object, the objects line up with the box around all of them. The tool window then shows the hint {t:align2.noRef}.
- To line others up with one object, make it the reference: click the {t:align2.ref} field and then the object, or Alt+click the object. The dots then sit on the reference, which does not move. Setting the same object again removes the reference.
- Hover a dot: each object is drawn faintly where it will go, with a thin line from its centre ending in a small arrowhead. Next to the dot you see its name (the axis and side) and how far the objects move.
- When everything is lined up already, the hint {t:alignv.same} shows.
- Objects can be taken out of the alignment in the {t:align2.movers} list of the tool window.
- Clicking a selected dot again clears that axis. Ctrl+Z takes back the last axis selected.
- After Apply the tool stays open for the next alignment.
- With the tool open, click objects to add or remove them.
- With several objects selected, the Properties window shows an {c:align} button too. In the command line, type \`al\`.
- To put a face of one object flat against a face of another, use {c:faceSnap} ([drop to floor](help:obj-drop)).
- Objects that overlap after aligning can be joined with {c:union} or cut with {c:subtract} ([union](help:obj-union)).

## Common mistakes

- With only one object selected, no dots appear. Select two or more, or set a reference object.
- Centring without a reference can move every object. To keep one object still, make it the reference.
- Clicking empty space ends the tool. Click on a dot or an object.
- With only flat sketches selected there are no Z dots, because they have no height.
`,wn=`---
id: obj-annotate
title: 3D dimensions
분류: 3D 물체 도구
난이도: 중급
workspace: 공통
keywords: annotate, dimension, label size, 3d dimension, diameter, radius, arc length, ordinate, jogged radius, leader, note, edit dimension, delete dimension, show size, dim3d, dimension3d, dimention
commands: annotate, measure
howto: annotate
context: annotate
order: 380
---

## What

Puts dimensions such as lengths, diameters and radii on 3D objects. A dimension sticks to its object and moves with it. Dimensions only show sizes; they never change the object.

## Steps

1. Click {m:annotate}.
2. Click the first and second point (one click on a round edge gives its diameter).
3. Click where the dimension goes.

## Tips

- Clicking a straight edge first gives the length between its two ends.
- A round edge starts as a {t:m.diameter}; switch to {t:m.radius} in the tool window.
- A two-point dimension runs {t:dm.auto} (selected by the way you drag the mouse), {t:opt.aligned}, {t:opt.horizontal} or {t:opt.vertical}.
- The tabs of the tool window add other dimensions:
  - {t:dm.tab.general}: the length between two points, the diameter or radius of a round edge;
  - {t:tab.dimArc}: the arc length of a round edge;
  - {t:tab.dimOrdinate}: one X, Y or Z value of a point from the origin;
  - {t:tab.dimJogged}: the radius of a large circle or arc with a jogged line;
  - {t:tab.leader}: an arrow with a note (type it in the {t:opt.text} field).
- The tool stays open after a dimension is placed, ready for the next one. Enter places the dimension where the mouse is now.
- Ctrl+Z lets go of the last point selected.
- Double-click a placed dimension to open {t:cmd.dimEdit}. Drag its handles or type the {t:dimedit.angle} and the {t:dimedit.offset} to turn the dimension line or move it nearer or farther. Dragging snaps to 15° steps and to the main planes.
- To delete a dimension, click its text to select it and press Delete.
- With object snaps on, points stick exactly to corners, midpoints and circle centres ([object snaps](help:snap-osnap)).
- There is no angle dimension in 3D. Read angles with [measure](help:obj-measure).
- Dimensions inside a sketch that change its size when you type a value are [2D dimensions](help:obj-dimension).
- In the command line, type \`dim3d\`.

## Common mistakes

- You wanted two points, but the first click took the whole edge. Click when the corner marker shows to select a point.
- {t:tab.dimArc} and {t:tab.dimJogged} take round edges only. Clicking a straight edge only shows a message.
- Typing over the number of a 3D dimension does not resize the object. Change sizes with [Smart Scale](help:obj-smart-scale) or in the Properties window.
`,Tn=`---
id: obj-box
title: Make a box
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: box, cube, cuboid, block, bx, brick, plate, board, rectangular block, square block, primitive, cubes, boxes
commands: box, smartScale
howto: box
context: box
order: 10
---

## What

Places a box with a set length, width and height. Many models start from one box and are finished with [subtract](help:obj-subtract), [fillet](help:obj-fillet) and [holes](help:obj-hole).

## Steps

1. Click {m:box}.
2. Click where it goes in the 3D view (a face works too).
3. Change its {t:param.x}, {t:param.y} and {t:param.z} in the Properties window.
4. Or type box 30 20 10 (length width height) in the command line.

## Tips

- The first size is 20 × 20 × 20 mm in 3D objects and 3 × 3 × 3 m in 3D construction.
- Change the size in the {t:param.x}, {t:param.y} and {t:param.z} fields of the Properties window. The {t:panel.position} and {t:panel.rotation} fields of the same window set where it sits and how it is turned.
- Before clicking, type only numbers such as \`30 20 10\` in the command line: the preview takes that size and the next click places it.
- Sizes left out keep the first size. For example, \`box 30\` makes a 30 × 20 × 20 mm box in 3D objects.
- Numbers may carry a unit (\`3cm\`) or be a calculation (\`60/4\`). See [calculations](help:input-calc).
- Clicking a flat face stands the box on that face. Clicking a snap point such as a corner or an edge middle places it at that point ([object snap](help:snap-osnap)).
- A box made at once with \`box 30 20 10\` in the command line is put on the floor to the right of the objects already there.
- After placing, you can also change the size by dragging the handles of [Smart Scale](help:obj-smart-scale).
- To place another box, press Enter: the last tool opens again.

## Common mistakes

- The numbers are in the order length (X), width (Y), height (Z). In another order the box comes out long in the wrong direction.
- Values outside 0.1 to 2000 mm (3D objects) or 0.01 to 500 m (3D construction) are refused, and the allowed range is shown.
- In 3D construction the numbers are metres: \`box 30 20 10\` makes a box 30 m long.
- One click places one box and the tool ends. The new box is selected, so further clicks do not add more boxes.
`,En=`---
id: obj-chamfer
title: Chamfer
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: chamfer, bevel, bevel edges, cut corner, angled edge, slanted edge, chamfre, champher
commands: chamfer, fillet, chamfer2d
howto: chamfer
context: chamfer
order: 190
---

## What

Cuts the edges of a solid at a slant, the same distance back on both sides. Use it to take off sharp edges, or to widen an opening so a part slides in easily.

## Steps

1. Click {m:chamfer}.
2. Click the edges to cut (several are fine).
3. Drag the size arrow and let go, or type the size and press Enter.

## Tips

- The {t:opt.distance} field in the window is how far the cut goes back from the edge. It starts at 1 mm (0.1 m in 3D Building Modeling).
- Clicking a selected edge again drops it, and Ctrl+Z drops the last edge selected.
- If one object is selected when {c:chamfer} opens, the window has a button that selects all of its edges at once.
- Select the object, click it again to select an edge (Shift: more edges), then click {c:chamfer}: the tool starts with those edges.
- Letting go of the arrow applies the chamfer and closes the tool. The value box that stays for a moment after you let go can still change the size just made.
- For rounded edges use [Fillet](help:obj-fillet); for the corner between two lines in a sketch use {c:chamfer2d}.

## Common mistakes

- A distance that is too large gives the error {t:err.chamfer-failed} and nothing is applied. The arrow stops at half the object's thinnest size.
- Clicking an edge of another object lets go of the earlier edges and starts again with that object. Select edges of one object at a time.
- To take a chamfer back, press Ctrl+Z, or delete the chamfer step in the list of steps in the {c:toggleLeft} window.
`,Dn=`---
id: obj-curve-edit
title: Edit Curve
분류: 3D 물체 도구
난이도: 중급
workspace: 공통
keywords: curve, edit curve, bezier, handle, anchor, control point, add point, remove point, smooth, corner, separate handles, direct selection, illustrator, pen, pen tool, bend, curved wall, curved road, path edit, pathedit, pedit, curveedit, curvy
commands: pathEdit, spline, polyline
context: pathEdit
order: 16
---

## What

Reshapes a line by dragging its points and handles, like Illustrator's direct selection tool. It works on sketch lines and pen curves, and in 3D construction on walls, railings, slabs, stair lines, roads, bridges, dams, retaining walls and water bodies.

## Steps

1. Click {m:pathEdit}.
2. Click the line or object to change. Its points (squares) and handles appear.
3. Drag a point to move it; drag a handle end to change how much the line bends.
4. Click on the line to add a point; drag the line to bend that piece.
5. Click a point to select it, then change its kind with {t:curves.smooth}, {t:curves.corner} or {t:curves.split} in the window.
6. Press Esc when you are done.

## Tips

- Other ways to open it: double-click a line while editing a sketch, or double-click an object such as a wall, railing or road in 3D construction. {c:pathEdit} is also on the small bar of a selected wall or road and in the right-click menu of a sketch.
- Points show as squares and handle ends as circles; a selected point becomes a filled square.
- You can make curves while drawing: in {c:spline} with {t:curves.splinePen}, press and drag at a point; in {c:polyline} in line mode, press, wait 0.5 s and drag. Either makes a smooth curve point. Walls, railings and roads in 3D construction are drawn as curves the same way as in {c:polyline}.
- Alt+drag a point pulls handles out of a corner; Alt+click a point removes all its handles, making a corner.
- Alt+drag a handle moves the two handles separately; Shift+drag a handle lines both handles up on one straight line. Dropping a handle end on its point removes that handle.
- Shift+click selects several points, and dragging a selected point moves them all. Holding Shift while dragging a point keeps it to 45° directions. {t:curves.selectAll} selects every point of the line.
- With one point selected, the window shows {t:curves.inLen}, {t:curves.inAng}, {t:curves.outLen} and {t:curves.outAng} fields for exact values.
- Remove selected points with Delete or {t:curves.remove}. {t:curves.dropIn} and {t:curves.dropOut} remove only one handle.
- Ctrl+Z undoes one drag or button at a time. Clicking another wall or road switches to it.
- In 3D construction, the {c:levelOutline} window and {c:landEdit} lead to Edit Curve too. See [walls](help:arch-wall) and [roads](help:civil-road).

## Common mistakes

- Arcs, circles, ellipses and splines drawn with {t:curves.splineThrough} cannot be changed here. Only straight lines and pen curves can.
- Where three or more lines meet at one point, the curve stops there and each part is edited on its own.
- Removing points that would leave too few is refused; those points stay.
- A curved road that bends more sharply than half its width is refused. Shorten the handles for a gentler curve.
- Walls, roads and similar objects that have been tilted do not open in Edit Curve.
`,On=`---
id: obj-dimension
title: 2D dimensions
분류: 3D 물체 도구
난이도: 중급
workspace: 공통
keywords: dimension, dim, sketch dimension, driving dimension, length, diameter, radius, angle, arc length, ordinate, jogged radius, leader, note, reference dimension, dimension info, overall size, width depth height, dimention
commands: dimension, dimArc, dimOrdinate, dimJogged, leader, dimInfo, annotate
context: dimension, dimArc, dimOrdinate, dimJogged, leader, dimInfo
order: 260
---

## What

Puts length, diameter, radius and angle dimensions on the lines, circles and arcs of a sketch. Typing a value into a dimension resizes the sketch to match. {c:dimInfo} shows the overall width, depth and height of the selected objects.

## Steps

1. Click {m:dimension}.
2. Click the line, circle or arc of a sketch to dimension. If the sketch is not being edited, editing it starts.
3. Click where the dimension line goes.
4. Type the value you want right away and press Enter: the sketch is resized to match. Pressing Enter without a value keeps the size as it is.
5. Go on with the next dimension, or press Esc to end the tool.

## Tips

- What you click decides the dimension: one line gives its length, a circle its diameter, an arc its radius, and two lines the angle between them. Clicking two points in turn (ends, middles, centres) gives the distance between them.
- For lengths, select the direction in the window: {t:opt.aligned}, {t:opt.horizontal} or {t:opt.vertical}.
- To change the value of a dimension later, double-click its text and type the new value.
- For a dimension that only informs and never changes the sketch, switch on {t:ks.ref} in the window right after placing it. A length can also get the {t:ks.symSq} or {t:ks.symT} symbol in front.
- The tabs at the top of the window give other dimensions.
  - {t:tab.dimArc} ({c:dimArc}): click an arc to give its length.
  - {t:tab.dimOrdinate} ({c:dimOrdinate}): click near the end or centre of a line, then move the cursor sideways for the Y value or up or down for the X value.
  - {t:tab.dimJogged} ({c:dimJogged}): gives the radius of a large circle or arc with a jogged line.
  - {t:tab.leader} ({c:leader}): click the arrow point, then where the text goes. Write the text in the {t:opt.text} field of the window.
- Switch on {m:dimInfo} to see the width, depth and height of the selected objects in the view. Turn it off with the {t:tg.off} button of the {c:dimInfo} label shown in the view.
- {c:dimArc}, {c:dimOrdinate}, {c:dimJogged}, {c:leader} and {c:dimInfo} are on the {t:level.advanced} menus. See [Basic and Advanced menus](help:start-level).
- To put dimensions on a 3D object itself, use [3D Dimension](help:obj-annotate); to only measure, use [Measure](help:obj-measure).

## Common mistakes

- The edges of a 3D object cannot be dimensioned with this tool. If {t:msg.clickSketchLine} appears, click a line of a sketch or use [3D Dimension](help:obj-annotate).
- A reference dimension only shows the size, so its value cannot be changed.
- Clicking something that does not fit the tab shows {t:msg.dimWrongKind}. For example, {c:dimArc} needs an arc.
- Angle dimensions take only values above 0° and below 180°.
`,kn=`---
id: obj-drawing-sheet
title: Drawing sheet, title block and export
분류: 3D 물체 도구
난이도: 중급
workspace: 3D 물체
keywords: sheet, paper, paper size, A4, A3, A2, A1, A0, landscape, portrait, scale, title block, title, name, date, drawing number, pages, filing margin, comparison scale, zone marks, centring marks, border, third angle, first angle, KS, drafting rules, print, PDF, DXF, SVG, PNG, AutoCAD, export drawing, titleblock
commands: drawing
order: 420
---

## What

Covers the paper of a projection drawing (size, direction, scale), the title block at the bottom right, several pages, and printing or exporting as PDF and DXF. The sheet layout and the line weights follow the KS drafting rules (KS B 0001 and others).

## Steps

1. Click {m:drawing} to open the drawing.
2. Under {t:dv.sheet} in the panel on the right, select the paper size (A4 to A0) and {t:dv.landscape} or {t:dv.portrait}.
3. Select the {t:dv.scale} or type one such as \`1:2\`. To fit the largest scale the paper allows, click {t:dsh.fitScale}.
4. Click {t:dp.titleSetup} and type the title block values such as {t:ks.title} and {t:ks.author}.
5. Click {t:dv.print} and select a printer or "Save as PDF" in the print window. For a file to open in AutoCAD, save with {t:dv.dxf}.

## Tips

### Paper and scale

- Changing the paper places the views of every page again at a scale that fits the new paper, and tells you the new scale.
- The {t:dv.scale} under {t:dv.sheet} is the scale of the main view (the front view). Changing it scales the other views in proportion and places them again.
- Select a standard scale (50:1 to 1:1000) from the ▾ of the {t:dv.scale} field, or type one and press Enter: \`1:50\`, \`1/50\`, \`2:1\`, \`×2\`. A plain number means 1:number (\`50\` is 1:50). ↑ and ↓ go to the next standard scale.
- Under the field you see what the scale means (for example "1:2 · 2 times smaller") and the {t:sc.paperSize}. Dimensions always show real sizes, whatever the scale.
- To draw one view at another scale, click it and change the {t:dv.scale} lower in the panel. Its own scale is then written next to its name, such as (1:2).
- Selecting NA as the scale of a view, or typing \`NA\`, lets you size it freely: drag its corner handle or type a {t:dsh.viewWidth}.
- Switching between {t:dv.third} and {t:dv.first} changes the projection symbol in the title block. To lay the views out again for that projection, click {t:dv.relayout}.
- {t:ks.filing} widens the left margin to 25 mm so the sheet can be bound.

### Objects drawn and layout parts

- Under {t:dp.targets}, select {t:dp.targetPicked} instead of {t:dp.targetAll} and tick the objects to draw in the list. {t:dp.useSelection} draws only the objects selected in the 3D view.
- Under {t:dsh.show}, turn the {t:ks.titleBlock}, {t:dsh.scaleBar}, {t:dsh.zones}, {t:dsh.centre} and {t:dsh.axes} on or off one by one.

### Title block

- The title block starts at the bottom right of the paper with 4 rows and 4 columns (120 × 32 mm).
- Click a cell of the title block on the sheet to type into it; Tab goes to the next cell. A name in braces such as \`{Title}\` shows the title block value.
- The {t:dp.titleSetup} window:
  - {t:dsh.values}: {t:ks.title}, {t:ks.school}, {t:ks.number}, {t:ks.author}, {t:ks.date}, {t:ks.docNo};
  - {t:dp.size}: {t:dsh.rows} (1 to 12), {t:dsh.cols} (1 to 8), {t:dsh.width};
  - {t:dp.cells}: write a {t:dp.cellLabel} in each cell and select the {t:dp.cellValue} it shows;
  - {t:dp.reset} brings back the standard title block.
- An empty {t:ks.date} shows today's date, and an empty {t:ks.title} the file name. With several pages, an empty {t:ks.docNo} shows the page number, such as \`1/3\`.

### Pages

- In the page tabs below the paper, the + button ({t:dp.addPage}) adds a page (up to 20).
- Double-click a tab to rename it; the × on the tab of the page shown deletes that page.
- With several pages, click a view and select another page in its {t:dp.page} field to move it there.

### Export

- {t:dv.print} prints every page in order. For a PDF, select "Save as PDF" in the print window.
- {t:dv.dxf}, SVG and PNG save the page shown. The DXF is split into layers such as VISIBLE, HIDDEN, CENTER, DIM, TEXT and BORDER.
- {t:dp.dxfAll} (with several pages) puts every page side by side in one file.
- {t:dv.viewDxf} saves only the selected view as a 1:1 DXF.

### KS rules (applied by themselves)

| Item | A4 to A2 | A1, A0 |
| --- | --- | --- |
| Thick line (outlines) | 0.5 mm | 0.7 mm |
| Thin lines (dimension, hidden, centre lines) | 0.25 mm | 0.35 mm |
| Text height | 3.5 mm | 5 mm |
| Border margin | 10 mm | 20 mm |

- Scales are written without spaces, such as 1:2, and dimensions carry no unit (mm).
- The first dimension line is 10 mm from the outline, and each size is given only once.

## Common mistakes

- {t:dsh.tooBig} appears: even the smallest scale does not fit. Select a larger paper or draw fewer objects.
- Looking for a PDF button: click {t:dv.print} and select "Save as PDF" in the print window.
- The DXF holds only one page. Save every page with {t:dp.dxfAll}.
- Deleting a page deletes its views too. Press Ctrl+Z if it was a mistake.
`,An=`---
id: obj-drawing
title: Projection drawings
분류: 3D 물체 도구
난이도: 중급
workspace: 3D 물체
keywords: drawing, blueprint, views, orthographic, print, pdf, technical drawing, front view, top view, side view, right view, isometric, oblique, auxiliary view, section view, hidden lines, third angle, first angle, three views, layout, proj, drawign
commands: drawing
howto: drawing
context: drawing
order: 410
---

## What

Turns 3D objects into front, top, side and other views on a sheet of paper. Hidden lines and dimensions follow the KS drafting rules, and the sheet can be printed or saved as PDF or DXF.

## Steps

1. Click {m:drawing}.
2. The first time, a sheet with the standard views is made for you.
3. Add more views with {t:dv.addView}.
4. Print or save a PDF with {t:dv.print}.

## Tips

### The first sheet

- On an A3 landscape sheet in third angle projection: the front view, the top view above it, the right view on its right, and an isometric view in the free corner. The scale is the largest standard scale that fits the paper.
- Opened with only some of the solids selected, the drawing first asks ({t:dp.startTitle}) whether to draw the selected ones or all of them. You can change the objects drawn later ([sheet and title block](help:obj-drawing-sheet)).

### Adding and changing views

- {t:dv.addView} has the buttons {t:dv.front}, {t:dv.top}, {t:dv.right}, {t:dv.left}, {t:dv.back}, {t:dv.bottom}, {t:dv.iso}, {t:dv.oblique}, {t:dv.custom} and {t:dv.section}. A new view goes to a free spot on the sheet.
- Click a view on the sheet to change its {t:dv.scale}, {t:dv.hidden} and {t:dv.dims} in the panel on the right, or to {t:cmd.delete} it. Drag a view to move it.
- In the {t:dv.scale} field, select a standard scale from the ▾ or type one such as \`1:50\`, \`2:1\` or \`×2\` and press Enter. A plain number means 1:number: [sheet and title block](help:obj-drawing-sheet).
- {t:dv.hidden} draws edges hidden from view as dashed lines.
- {t:dv.dims} adds the overall width, depth and height once across the views, ∅ on holes and shafts, and R on rounded edges. Hole positions and chamfers are not dimensioned automatically.
- The {t:dv.iso} and the {t:dv.oblique} start without hidden lines and get no dimensions.
- Centre lines are drawn on round parts such as holes and shafts by themselves.

### Section and auxiliary views

- The {t:dv.section} button opens the {t:dp.setupSection}. For {t:dp.cutAt} select {t:dp.byPlane} (the XY, XZ or YZ plane and the {t:dv.offset}; empty means through the middle of the objects), {t:dp.byFace} (click a flat face in the 3D view) or {t:dp.byLine} (click two points on another view), then click the button next to {t:btn.cancel}. With {t:dp.byPlane} that button is {t:dp.add}.
- A section view gets a letter such as A-A, and its cutting line is drawn on a view that sees the cutting plane as a line. Change the letter in the {t:dp.letter} field after clicking the section view. Cut faces are hatched.
- An {t:dv.custom} shows a slanted face straight on. For {t:dp.auxFrom} select {t:dp.byIncline} (click the face in 3D), {t:dp.byEdge} (click a slanted edge on a view) or {t:dp.byPlane}.
- Section and auxiliary views can be turned round with {t:dv.flip}, and draw their own objects with {t:dp.includes}.

### More

- When the 3D model changes, the views are drawn again from the new shape. The drawing is saved with the file.
- Zoom the sheet with the mouse wheel and drag an empty spot to move it. {t:dv.fit} shows the whole paper.
- Ctrl+Z and Ctrl+Y work in the drawing too.
- {t:dv.back3d} goes back to the 3D view.
- Paper size, scale, title block, pages and DXF or PDF export are explained in [sheet and title block](help:obj-drawing-sheet).

## Common mistakes

- {t:dv.noSolids} appears. Hidden objects and sketches are not drawn; there must be a solid on show.
- Mesh objects such as STL files are left out. Use {t:btn.meshToSolid} in the Properties window to include them.
- A size dimensioned on the front view does not appear again on the top view. That is the KS rule of giving each size only once.
- {t:dp.byLine} works only on orthographic views such as the front, top or side view, not on an isometric view.
`,jn=`---
id: obj-drop
title: Drop to floor
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: drop, floor, lay flat, on the ground, drop on face, move to origin, origin, centre, center, keep height, face snap, snap face, stick together, floating, put down, lay down, dropface, toorigin, centergrid, facesnap, snapface
commands: drop, dropFace, toOrigin, center, faceSnap
howto: drop
context: drop, dropFace, toOrigin, center, faceSnap
order: 330
---

## What

Puts an object that floats, or sinks below the floor, down onto the floor (Z=0). The same {t:group.transform} menu also moves objects to the origin, lays them on another face, and puts a face of one object against a face of another.

## Steps

1. Select the floating object.
2. Click {m:drop} and it lands on the floor (Z=0).
3. To lay it on another face, click {m:dropFace} and click that face.

## Tips

- {c:drop} puts the lowest point of the object at Z=0. It does not move sideways. With several objects selected, each one lands on the floor.
- With one face selected, {c:drop} turns the object so that this face goes down.
- {m:toOrigin} moves the selected objects to the origin (shortcut {k:toOrigin}). Select what goes to the origin: {t:opt.originBottom} (the default; the object stays on the floor), {t:opt.originCenter} or {t:opt.originPoint}, or {t:opt.pivot} when a pivot is set. Apply (Enter) to move.
- {m:center} keeps the height and moves the objects over the origin. With several objects, the middle of all of them goes over the origin.
- {m:faceSnap} puts a face of one object against a face of another. Click the {t:step.movingFace}, then the {t:step.targetFace}: the first face turns to face the second and the two face centres meet. Clicking a corner or an edge midpoint with object snaps lines up those points instead.
- A grouped object moves as a whole with {c:faceSnap}.
- In {t:mode.short.arch}, to put an object on the terrain, use {c:dropGround} ([terrain view](help:site-terrain-view)).
- A part for 3D printing must touch the floor. Laying its widest flat face down with {c:dropFace} usually needs fewer supports ([export and 3D printing](help:start-export)).

## Common mistakes

- Curved faces, such as the side of a cylinder or a sphere, cannot be used with {c:dropFace} or {c:faceSnap}. Only flat faces can be selected.
- {c:drop} with nothing selected only shows a message. Click the object first.
- {c:drop} only goes to the floor (Z=0). To put an object on top of another, use {c:faceSnap} or [align](help:obj-align).
- In {c:faceSnap}, clicking a face of the same object as the second select does nothing. Click a face of the other object.
`,Mn=`---
id: obj-duplicate
title: Duplicate, copy and linked copy
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: copy, duplicate, clone, paste, linked copy, unlink, instance, copy and paste, one more, same again, ctrl+d, ctrl+c, ctrl+v, linkcopy, lnk, duplicat
commands: duplicate, linkcopy, unlink, copy, paste
howto: duplicate
context: duplicate, linkcopy, unlink, copy, paste
order: 350
---

## What

Makes an identical copy of the selected objects. {c:duplicate} makes an independent copy you can change on its own; {c:linkcopy} makes a copy whose shape changes together with the original.

## Steps

1. Select the object.
2. Press Ctrl+D ({c:duplicate}) and a copy appears next to it.
3. Ctrl+C and Ctrl+V copy and paste too.

## Tips

- The copy appears one default size away along X and Y (20 mm in {t:mode.short.print}, 3 m in {t:mode.short.arch}), and its name ends in {t:copySuffix}. An independent copy gets a new colour.
- Pressing Ctrl+V again puts each new copy the same distance further along.
- The small button bar that appears next to a selected object has {c:duplicate} and {c:linkcopy} too.

### Linked copies

- A copy made with {c:linkcopy} (shortcut {k:linkcopy}) shares its shape with the original. Add a fillet or a hole to either one, or change a size, and every linked copy changes with it.
- Position, rotation and colour stay separate for each copy.
- With a linked copy selected, the top of the Properties window names the object it shares its shape with and shows an {c:unlink} button.
- {c:unlink} breaks the link: the copy becomes an independent object and is changed on its own from then on.
- A linked copy pasted with Ctrl+C and Ctrl+V becomes an independent object.

### Many at once

- For many copies at equal spacing use a [pattern](help:obj-pattern); for a copy on the other side, use [mirror](help:obj-mirror). A pattern can also make its copies linked ({t:opt.linkedCopies}).
- In the command line, \`copy\` or \`co\` runs {c:duplicate}.

## Common mistakes

- Ctrl+D with nothing selected only shows a message. Click the object first.
- A hole drilled into one linked copy appeared in all of them. To change only one copy, click {c:unlink} first.
- Ctrl+C alone makes nothing appear. Press Ctrl+V to place the copy.
`,Nn=`---
id: obj-extrude
title: Extrude
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: extrude, extrusion, pad, thickness, height, raise, pull up, make 3D, symmetric, both sides, flip, cut, pocket, groove, engrave, emboss, text extrude, ext, extude, extrud
commands: extrude, presspull, closeOpen
context: extrude
order: 17
---

## What

Gives a closed area of a sketch thickness to make a solid. Use it to stand up a shape drawn on the ground as a new object, to push a shape drawn on a face into the object as a groove, or to engrave or raise letters.

## Steps

1. Draw a sketch with a closed shape ([Draw a sketch and make it 3D](help:obj-sketch)).
2. Click {m:extrude}.
3. Click the closed area to extrude. Click more areas of the same sketch to select several.
4. Drag the arrow to set the height, or type the height in the {t:opt.distance} field of the window.
5. Let go of the arrow, or press Enter, to make it.

## Tips

- With the sketch selected or being edited, {c:extrude} selects its area at once. With several areas, every area except the holes inside is selected; click an area to take it out or put it back.
- The arrow can be dragged from anywhere on the empty view, not only on the arrow itself. With [grid snap](help:snap-grid) on, it moves in grid steps.
- Type a number in the {t:opt.distance} field of the window and press Enter: it is made at that height at once. Typed in the command line, the number only sets the height; press Enter once more to make it. The first height is 10 mm in 3D objects.
- With {t:opt.symmetric} on, half the distance goes to each side of the sketch plane.
- {t:opt.flip} reverses the direction; typing a negative distance does the same.
- Select the result: {t:op.new}, {t:op.union}, {t:op.subtract} or {t:op.intersect}; select the object to merge with or cut in {t:role.target}.
- A sketch drawn on a face of an object takes that object as its {t:role.target}. Pulling outwards gives {t:op.union}; pushing inwards gives {t:op.subtract} and cuts a groove.
- After selecting the area, click a face of another object to make that object the {t:role.target}.
- Clicking letters made with {c:text} selects all of them at once ([Text](help:obj-text)).
- An extrude made as a new object can be changed later: select it and edit the {t:opt.distance} field in the Properties window.
- Clicking a face of an object with no area selected switches to [Press/Pull](help:obj-presspull) and moves that face directly.
- Before it is made, Ctrl+Z takes back the last drag or the last selected area.

## Common mistakes

- Lines without a closed area cannot be extruded. Join the line ends or use {c:closeOpen}.
- The distance cannot be 0. In 3D objects it ranges from -2000 to 2000 mm.
- With {t:op.subtract} or {t:op.union} selected but no {t:role.target}, a separate new object is made.
- When the preview has an error, nothing is made and {t:msg.fixErrorFirst} is shown. Try another distance or direction.
- One extrude takes areas of one sketch only. Clicking an area of another sketch lets go of the earlier areas and takes that sketch instead.
`,Pn=`---
id: obj-fillet
title: Fillet
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: round, rounded, fillet, edge, smooth, round edges, rounded corner, radius, soften edges, filet, filler
commands: fillet, chamfer, fillet2d
howto: fillet
context: fillet
order: 180
---

## What

Rounds the edges of a solid with a set radius. Use it to soften edges you touch, or to make 3D prints less likely to chip.

## Steps

1. Click {m:fillet}.
2. Click the edges to round (several are fine).
3. Drag the size arrow and let go, or type the radius and press Enter.

## Tips

- Clicking a selected edge again drops it. Ctrl+Z drops the last edge selected.
- If one object is selected when {c:fillet} opens, the window has a button that selects all of its edges at once. Press it again to let them all go.
- Select the object, click it again to select an edge (Shift: more edges), then click {c:fillet}: the tool starts with those edges.
- The radius starts at 1 mm (0.1 m in 3D Building Modeling). Number fields take a value such as \`2.5\` or a [calculation](help:input-calc).
- Letting go of the arrow applies the fillet and closes the tool. The value box that stays for a moment after you let go can still change the radius just made.
- Applying with Enter opens the tool again, empty, so you can select the next edges right away.
- A fillet can be switched off or deleted in the list of steps in the {c:toggleLeft} window. Selecting the rounded face and using [partial delete](help:obj-partial-delete) also makes the edge sharp again.
- To round the corner between two lines in a sketch, use {c:fillet2d}.

## Common mistakes

- A radius that is too large gives the error {t:err.fillet-failed} and nothing is applied. The arrow stops at half the object's thinnest size, so stay below that.
- Only the edges of one object can be selected at a time. Clicking an edge of another object lets go of the earlier edges and starts again with that object.
- Clicking the middle of a face selects nothing. Click right on the edge line.
`,Fn=`---
id: obj-group
title: Group and separate
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: group, bundle, ungroup, ungroup all, new group, empty group, remove from group, put in group, drag and drop, drag, folder, rename, separate, split apart, pieces, lumps, move together, grouping, gruop
commands: group, ungroup, ungroupAll, separate, union
howto: group
context: group, ungroup, ungroupAll, separate
order: 170
---

## What

Groups several objects so they are selected and moved together. Their shapes do not change, and ungrouping gives the objects back as they were. Groups can be sorted by drag and drop in the tree of the {c:toggleLeft} window. {c:separate} splits one object made of loose pieces into one object per piece.

## Steps

1. Hold Shift and click several objects.
2. Click {m:group} (Ctrl+G).
3. To undo it: {c:ungroup} (Ctrl+Shift+G).

## Tips

- Clicking one object of a group selects the whole group. To change just one object inside a group, double-click it in the 3D view (a group inside a group is entered one step at a time), or click it in the list of the {c:toggleLeft} window.
- Groups show in the {c:toggleLeft} window as rows that open and close, with the number of things in them. Clicking a group row selects everything in it; its eye button hides or shows all of it.
- Grouping a group together with other objects puts the group inside the new one. {c:ungroup} takes one level apart; groups that were inside stay and become top groups.
- A new group is named like "{t:obj.group} 1". Select the group and press F2, or double-click the name in its row, to rename it.
- {c:ungroupAll} takes every group of the document apart at once. In 3D Object it is on the {t:group.combine} tab of the {t:level.advanced} menus, and in either workspace you can type \`ungroupall\` in the command line.
- Use {m:separate} when an object has fallen into several pieces after a subtraction or a split. Select the object and click it: the first piece stays in the original object and the others become new objects named like the original with (2), (3) after it.
- {c:separate} and {c:ungroupAll} are on the {t:level.advanced} menus. See [Basic and Advanced menus](help:start-level).
- To turn several objects into one solid, use [Merge](help:obj-union) instead of a group.

### Groups in the objects window

- Drag a row onto a group row to put it in that group, or above or below another row to move it there in the list. Dragging one of several selected rows moves all the selected ones. Their places in the 3D view do not change.
- Right-click a row for these entries. Entries that cannot be used are greyed out; hover one to see why.

| Entry | What it does |
|---|---|
| {t:ot.mNewGroup} | makes an empty group there and lets you name it at once; an empty group stays until it is deleted |
| {t:ot.mGroup} (Ctrl+G) | groups the selected things in a new group |
| {t:ot.mUngroup} (Ctrl+Shift+G) | takes the group apart |
| {t:obj.outOfGroup} | takes the selected things out of their group |
| {t:obj.rename} (F2) | renames it |
| {t:obj.mDelete} | deletes the group and everything in it, after saying how many and asking once |

- In 3D Building a group is listed under the level of its first part.

## Common mistakes

- Clicking {c:group} with only one object selected shows {t:msg.needTwo}. Select two or more.
- A group does not make one shape. To join parts into one piece for 3D printing, use [Merge](help:obj-union).
- On an object without loose pieces, {c:separate} only shows {t:msg.nothingToSeparate}.
- In 3D Building a part cannot be dropped into a group on another level. Drag and drop never changes a part's level.
- {t:obj.mDelete} on a group row deletes the objects in it too. To remove only the group, select {t:ot.mUngroup}.
`,In=`---
id: obj-hole
title: Make a hole
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: hole, drill, bore, through hole, screw hole, bolt hole, counterbore, countersink, rectangular hole, square hole, slot, holes
commands: hole, subtract
howto: hole
context: hole
order: 60
---

## What

Drills a hole into a face at a point you select. Holes can be round or rectangular, and a round hole can also be a {t:opt.holeCbore} for a bolt head or a {t:opt.holeCsink} for a flat screw head.

## Steps

1. Click {m:hole}.
2. Click a point on the face to drill.
3. Set the diameter and depth (depth 0 = all the way through).
4. Apply (Enter) to finish.
5. For a square hole, select {t:mo.holeRect} in the window. For other shapes, overlap the shape and use {c:subtract}.

## Tips

- The point snaps to corners, edge middles and circle centres. After the point is placed, clicking elsewhere moves the hole.
- On a flat face, the window lets you place the hole {t:tweak.atClick}, at the {t:tweak.center} or {t:tweak.byDistance}. {t:tweak.byDistance} sets the hole's distances {t:tweak.fromLeft} and {t:tweak.fromBottom} of the face.
- Select {t:mo.holeRect} in the window for a rectangular hole, and set its {t:mo.holeWidth}, {t:mo.holeLength}, {t:mo.holeCorner} and {t:mo.turn}.
- A round hole can be {t:opt.holeSimple}, {t:opt.holeCbore} or {t:opt.holeCsink}. A {t:opt.holeCbore} has its own {t:opt.cbDiameter} and {t:opt.cbDepth}, a {t:opt.holeCsink} its own {t:opt.csDiameter}. With the [Basic menus](help:start-level), these choices are folded under {t:ac.advanced} in the window.
- Letting go of the depth arrow drills the hole at once and closes the tool. Applying with Enter opens the tool again, empty, so you can drill the next hole right away.
- Select the object, click it again to select a flat face, then click {c:hole}: the hole starts in the middle of that face.
- Number fields take calculations, for example \`3.2+0.2\` in the diameter field.
- For a 3D-printed screw hole, make it 0.2 to 0.4 mm larger than the screw so the screw fits.
- For many holes at equal spacing, lay out one cylinder with a [pattern](help:obj-pattern) and remove them all at once with {c:subtract}.

## Common mistakes

- A hole placed on a curved face (the side of a cylinder) goes in square to the face at the clicked point. On a curved face the position can only be {t:tweak.atClick}.
- A depth smaller than the part's thickness leaves a blind hole. Set the depth to 0 to go all the way through.
- A {t:opt.cbDiameter} or {t:opt.csDiameter} that is not larger than the hole is not applied. Make it larger than the hole diameter.
- Clicking empty space does nothing. Click on a face of an object.
`,Ln=`---
id: obj-image-relief
title: Relief
분류: 3D 물체 도구
난이도: 중급
workspace: 3D 물체
keywords: relief, lithophane, heightmap, height map, emboss, photo to 3D, face relief, shading, depth, depth map, depth model, AI depth, depth estimation, picture solid, plaque, medal, stamp, 2.5D
commands: imageRelief, imageMenu
context: imageRelief
order: 396
---

## What

Turns a picture into a solid: a closed object with the picture's shape standing on a plate, ready for 3D printing. There are three methods.

- {t:img.reliefMethod.depth}: an AI depth model reads how near or far each part of the photo is. Near parts rise and far parts fall; the big shapes are pressed shallow while the fine shapes stay. It suits real photos best. It needs the depth model (see "The depth model" below).
- {t:img.reliefMethod.shade}: the shape is read from the photo's light and shade. Lit parts rise and shaded parts fall, joined into one surface. It works without the depth model.
- {t:img.reliefMethod.bright}: light parts are high (or, inverted, dark parts). Use it for a lithophane seen against the light, for lettering and for patterns.

## Steps

1. Open {m:imageMenu} and select {c:imageRelief}.
2. Select a picture file. Starting with a placed image selected uses that image's place, size, crop and adjustments.
3. Select the {t:img.reliefMethod}: {t:img.reliefMethod.depth} for a photo, {t:img.reliefMethod.bright} for a lithophane. With the depth model here, {t:img.reliefMethod.depth} is selected from the start.
4. With {t:img.reliefMethod.depth}, the window shows "{t:depth.loading}" once, then "{t:depth.running}". The depth is worked out once per picture, so the sliders follow at once after that. Set {t:img.depth}, {t:img.detail} and {t:img.smooth} while watching the preview.
5. With {t:img.reliefMethod.shade}, set {t:img.light} to where the light came from when the photo was taken: drag the dot on the disc or type the angles. Most photos are lit from the upper left (135°).
6. Set {t:img.reliefBase}, {t:img.reliefHeight} and {t:img.reliefRes}. The result is previewed on the view: a coarse grid while a slider moves, the full grid once it is let go.
7. Click the face or floor to place it. When you started from a placed image, press {t:btn.apply}.

## The depth model

- The installed app includes the depth model. There is nothing to download.
- The web version asks once, the first time {t:img.reliefMethod.depth} is selected: "Download the depth model (about 50 MB)?". {t:depth.get} shows the progress, checks that the file matches the original and keeps it in this browser. It is not downloaded again.
- {t:depth.later} means it is not asked again. The {t:img.reliefMethod.depth} option then shows "{t:depth.none}", and {t:img.reliefMethod.shade} is the default method until the model is downloaded.
- In {c:settings} → {t:set.options} › {t:stable.storage}, the "{t:depth.row}" line shows its state and has {t:depth.get} and {t:depth.delete}. Clearing the browser's site data removes the model too.

## Tips

- A lower {t:img.depth} flattens the overall near-and-far and makes fine shapes such as the eyes, nose and mouth stand out. 30 to 50 suits a thin medal or plaque; 70 and above keeps the rounded look.
- {t:img.detail} raises fine shapes and edges. Too much raises the grain too, so balance it with {t:img.smooth}.
- With {t:img.flatBg} on, see-through parts or the backdrop stay at the plate and only the subject rises. It starts on for a picture with see-through pixels and off for one without; a value you set yourself is kept. A PNG with the background cut out (transparent) gives the cleanest result.
- {t:img.invert} with {t:img.reliefMethod.depth} or {t:img.reliefMethod.shade} turns the surface over into a hollow mould; with {t:img.reliefMethod.bright} it makes dark parts high. For a lithophane use {t:img.reliefMethod.bright} with invert on and a thin {t:img.reliefBase}, about 0.6 to 0.8 mm.
- With {t:img.reliefMethod.shade}, a wrong {t:img.light} turns the shape inside out (the nose sinks, the cheeks bulge). Dragging the dot to the opposite side shows it at once. Keep {t:img.lightElev} low when the light was low and the shadows long.
- {t:img.reliefRes} is the spacing of the heights: smaller is finer and heavier. A spacing finer than this computer handles is widened, and the window says so.
- A relief exports to STL, OBJ and 3MF and prints. One undo removes it.

## Common mistakes

- 3D construction has no relief. Make it in 3D objects.
- {t:img.reliefMethod.depth} knows near and far only relative to each other. The real thickness is set by {t:img.reliefHeight}. Glass, mirrors and sky, where the distance is unclear, can come out wrong.
- A floor that runs to the bottom of the photo stays as a slope. Turn {t:img.flatBg} on or lower {t:img.depth}.
- {t:img.reliefMethod.shade} expects a photo lit from one side. A frontal flash, backlight, mixed lights or strong patterns come out wrong; use {t:img.reliefMethod.depth} then.
- With {t:img.reliefMethod.bright}, see-through parts of a picture count as white and rise high. Turn {t:img.invert} on if needed.
- To use union, fillet or other tools on a relief, first press {t:btn.meshToSolid} in the Properties window. With too many triangles this is not possible: make it again with a larger {t:img.reliefRes}.
`,Rn=`---
id: obj-image-trace
title: Trace outline
분류: 3D 물체 도구
난이도: 중급
workspace: 3D 물체
keywords: trace, outline, vectorize, silhouette, logo, image to sketch, picture lines, contour
commands: imageTrace, imageMenu, extrude
context: imageTrace
order: 397
---

## What

Finds the edges of the dark parts of a picture (or the light ones, inverted) and makes them closed sketch lines. The lines can be extruded like any sketch with {c:extrude}, or extruded in the same step.

## Steps

1. Open {m:imageMenu} and select {c:imageTrace}.
2. Select a picture file. Starting with a placed image selected puts the lines at that image's place and size.
3. Set {t:img.threshold} and {t:img.traceTol}. The lines are previewed on the view.
4. Click the face or floor to place them. When you started from a placed image, press {t:btn.apply}.

## Tips

- Parts darker than {t:img.threshold} are the shape. Turn {t:img.invert} on to use the light parts.
- A larger {t:img.traceTol} gives fewer, smoother lines. Too many lines raise it by themselves, and the window says so.
- Turn {t:img.traceExtrude} on and set {t:img.traceDepth} to make the lines and the solid at once. One undo removes both.
- Used while editing a sketch, the lines are added to that sketch, for example following an underlay. See [Underlay](help:obj-image-underlay).
- Change the picture's brightness, contrast and crop in the window's advanced settings or in the placed image's adjustments.

## Common mistakes

- 3D construction has no trace outline. Make it in 3D objects.
- No outline appears: the picture is too light or too dark. Move {t:img.threshold} or switch {t:img.invert}.
- Very small specks are taken as noise and get no lines. Place the picture larger or raise its contrast.
`,zn=`---
id: obj-image-underlay
title: Underlay
분류: 3D 물체 도구
난이도: 중급
workspace: 3D 물체
keywords: underlay, reference image, trace over, background picture, plan photo, calibrate, scale, real size
commands: imageUnderlay, imageCalibrate, imageTrace
context: imageUnderlay, imageCalibrate
order: 398
---

## What

While a sketch is edited, lays a picture on the sketch plane so you can draw over it. The underlay lies under the sketch lines and never gets in the way of clicking or snapping to them. Calibrate sets it to real dimensions.

## Steps

1. While editing a sketch, open {m:imageMenu} and select {c:imageUnderlay}.
2. Select a picture file and click where it goes on the sketch plane.
3. Select {c:imageCalibrate} and click two points of the picture whose distance you know.
4. Type the real distance between them in mm and press Enter. The first point stays where it is and the picture is scaled.
5. Draw over it with the line, circle and arc tools, or make its outline into lines with {c:imageTrace}.

## Tips

- A new underlay is placed at 50 % {t:img.transparency} so the lines drawn over it stand out. Change it in the Properties window.
- Once calibrated, the underlay is locked: a click on the view no longer takes it. To move it, select it in the Objects window and turn {c:imageLock} off.
- After the sketch is finished the underlay stays on the sketch plane and moves with the sketch. The eye menu's {t:vis.images} hides every image.
- Hiding the sketch hides its underlay, and deleting the sketch deletes it.
- The underlay's crop, brightness, contrast, saturation and lightness are set in the Properties window like any image. Select the image in the Objects window to open them.

## Common mistakes

- {c:imageUnderlay} works only while a sketch is edited. Make or edit a sketch first.
- While a sketch is edited the underlay cannot be clicked on the view: the lines come first. Click its row in the Objects window.
- The calibration is off: a photo taken at an angle has different scales across and down. Use a photo taken straight on, or a scanned drawing.
`,Bn=`---
id: obj-image
title: Place image
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: image, picture, photo, decal, sticker, logo, label, sign, paste picture, drop file, transparency, brightness, contrast, saturation, lightness, crop, png, jpg
commands: placeImage, imageMenu, importImage, imageCrop, imageReset, imageReplace, imageRepick, imageFront, imageBack, imageLock
context: placeImage, imageMenu, imageCrop, imageRepick, importImage
order: 395
---

## What

Lays a picture file (PNG, JPG, WebP, GIF, BMP, SVG) on a face of an object, a wall, a floor or the ground. A placed image moves with its object and bends onto curved faces. Images do not change any shape, so they are left out of union and subtract, STL export, 3D printing and drawings.

## Steps

1. In 3D objects, open {m:imageMenu} and select {c:placeImage}. In 3D construction, select {m:importImage}.
2. Select a picture file in the window that opens.
3. Move over a face to preview the picture there. Click the face to place it at half the face's shorter side.
4. Click the placed image to select it, then drag it to move it or drag a corner handle to size it.
5. Set {t:img.transparency}, {t:img.brightness}, {t:img.contrast}, {t:img.saturation} and {t:img.lightness} in the Properties window.

## Tips

- A picture copied in another program is placed with Ctrl+V. A picture file dropped on the 3D view lands on the face under it.
- For an exact size, type {t:img.width} and {t:img.height} in the window before placing, or type \`200x100\` in mm on the command line. 3D construction takes mm too (\`20000x15000\` is 20 × 15 m). Empty fields mean a size that fits where it is placed.
- A dragged image can move onto the other faces of the same object. The round handle above it turns it. Hold Shift while dragging a corner to change its shape freely.
- Double-click an image to start {c:imageCrop}. Drag the handles to keep only part of it. Cropped parts are not deleted: {c:imageReset} brings them back any time.
- {t:img.transparency} 0 % is fully visible, 100 % is not seen.
- When images overlap, {c:imageFront} and {c:imageBack} change which one is on top. {c:imageRepick} moves an image to another face.
- A right click on an image lists {c:imageCrop}, {c:imageCalibrate}, the make tools, {c:imageFront} and {c:imageBack}, {c:imageReset}, {c:imageLock}, hide and delete in that order. The top of the Properties window has {c:imageCrop}, {c:imageCalibrate} and delete too.
- A locked image ({c:imageLock}) is not taken by a click or a box in the view, so it never gets in the way of drawing over it. Select it from its row in the Objects window or the project tree; the lock on the row unlocks it.
- In 3D construction, {m:archUnderlay} lays the picture flat, filling the site or building clicked, and goes straight on to {c:imageCalibrate}. Once its size is set the underlay is locked; {t:img.calSkip} leaves it as placed. The project tree lists it as an image row under its site, level or the land.
- The eye menu's {t:vis.images} shows or hides every image at once. One image is hidden with its eye button in the Objects window.
- Deleting an object deletes the images on it too, and says how many. One undo brings them all back.
- Screen captures include the images. Large photos are stored at a size this computer can draw.

## Common mistakes

- A locked image cannot be clicked on the view. Select it from a list, or unlock it with {c:imageLock}.
- While another tool is open, images cannot be clicked: the tool selects the face under them. Press Esc to end the tool first.
- An image is not shown: the eye menu's {t:vis.images} is set to hide, or its object is hidden.
- The STL file has no picture: an image is like paint and does not change the shape. To turn a picture into a solid, use [Relief](help:obj-image-relief) or [Trace outline](help:obj-image-trace).
`,Vn=`---
id: obj-intersect
title: Intersect objects
분류: 3D 물체 도구
난이도: 중급
workspace: 공통
keywords: intersect, overlap, common, intersection, boolean, keep overlap, common part, shared volume, intersct
commands: intersect, union, subtract
howto: intersect
context: intersect
order: 160
---

## What

A Boolean tool that keeps only the part where objects overlap and removes the rest. For example, two spheres that overlap a little give a lens shape.

## Steps

1. Click {m:intersect}.
2. Click the base object.
3. Click the overlapping object and Apply (Enter).

## Tips

- Select two overlapping objects with Shift first, then click {c:intersect}: the result is made at once.
- With several overlapping objects selected, only the part where all of them overlap is kept.
- The result keeps the base object's name and the overlapping objects disappear. To keep them, switch on {t:opt.keepTools} in the tool window (under {t:ac.advanced} with the [Basic menus](help:start-level)).
- Clicking a selected object again drops it from the list, and Ctrl+Z lets go of the last select.
- In 3D Building Modeling, {c:intersect} is on the {t:level.advanced} menus. See [Basic and Advanced menus](help:start-level).

## Common mistakes

- An object that does not touch the base object cannot be selected. Move them so they really overlap first.
- Objects whose faces only touch, without overlapping inside, leave nothing, so no result can be made.
- Surfaces without thickness cannot be used. Make them solid first with [Thicken or Fill Faces](help:obj-tweak).
`,Hn=`---
id: obj-line-style
title: 2D line weight, colour and type
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: line weight, line colour, line color, dashed, linetype, thickness of line, line style, hidden line, centre line, center line, phantom line, continuous, thick line, thin line, new lines, reset style, lineweight
commands: editSketch, selectSimilar, exportSvg, exportDxf
howto: lineStyle
order: 400
---

## What

Sets the colour, weight and type (continuous, hidden, centre, phantom) of sketch lines. The style shows on screen and goes into SVG and DXF exports as it is.

## Steps

1. Select a sketch, or click lines inside a sketch.
2. In the Properties window, change {t:ls.color}, {t:ls.weight} and {t:ls.type} under {t:ls.title}.

## Tips

- Lines selected while a sketch is being edited get the style alone. With the whole sketch selected, you set the sketch default, which every line without its own style follows.
- {t:ls.color}: {t:ls.default}, any colour from the palette, or one of 8 swatches.
- {t:ls.weight}: {t:ls.default}, or a KS / ISO standard weight from 0.13 to 2.0 mm. On screen the lines keep their width at any zoom.
- {t:ls.type}:
  - {t:ls.type.continuous}: an unbroken line, for visible outlines;
  - {t:ls.type.dashed}: short dashes, for edges you cannot see;
  - {t:ls.type.chain}: long dash and dot, for centre lines and pitch lines;
  - {t:ls.type.chain2}: long dash and two dots, for moved positions and neighbouring parts.
- {t:ls.reset} clears the colour, weight and type at once.
- For the lines you draw next, set the style with the {t:ls.new} button in the bar at the top while a sketch is being edited. It is kept until the app closes.
- To select all lines of one kind, use [Select Similar](help:obj-select-similar) inside the sketch.
- {c:exportSvg} and {c:exportDxf} write the colour, weight and type of each line into the file. Importing a DXF reads the line styles too.
- On a dark screen, black lines are drawn light. The file still gets black.

## Common mistakes

- A field shows {t:ls.mixed}: the selected lines have different values. Selecting a value makes them all the same.
- The colour of 3D objects is not set here. See [colours and materials](help:obj-material).
- Line weights and types in a projection drawing follow the KS rules by themselves; they are not set here ([drawing](help:obj-drawing)).
`,Un=`---
id: obj-loft
title: Loft
분류: 3D 물체 도구
난이도: 중급
workspace: 공통
keywords: loft, lofting, blend, transition, sections, profiles, join profiles, square to circle, funnel, vase, bottle neck, straight blend, ruled, loaft, lift
commands: loft, workPlane, newSketch
context: loft
order: 20
---

## What

Joins several profiles at different heights, in the order you select them, into one solid. Use it for objects whose shape changes along their length, such as a pot that is square at the bottom and round at the top, a funnel, or a tapering handle.

## Steps

1. Make a plane offset from the ground with {m:workPlane}.
2. Make a sketch on the ground and one on the workplane, and draw one closed shape in each.
3. Click {m:loft}.
4. Click the profiles to join, from the bottom up.
5. Press Enter to make it.

## Tips

- Each sketch gives one profile. Clicking an area of a sketch already selected takes that profile out of the list.
- The window lists the selected profiles in order; they are joined in that order.
- With three or more profiles the middle can bulge or narrow. Make one workplane for each height ([workplanes](help:obj-workplane)).
- With {t:opt.ruled} on, the profiles are joined by straight faces; off, by smooth curved faces. It can be changed in the Properties window after the object is made.
- If every profile has the same number of holes, the holes are joined too and the object is hollow.
- As with [Extrude](help:obj-extrude), select {t:op.new}, {t:op.union}, {t:op.subtract} or {t:op.intersect} as the result.
- Before it is made, Ctrl+Z takes out the last selected profile.

## Common mistakes

- One profile alone makes nothing ({t:err.loft-sections}).
- Clicking another area of a sketch already selected only takes its profile out. Click the area you want once more to put it back in; it then goes to the end of the list.
- Profiles with different numbers of holes cannot be joined ({t:err.loft-holes}).
- Selecting the profiles out of order joins them crosswise. Take them out with Ctrl+Z and select again from the bottom.
- With all profiles drawn in one sketch, only one can be selected. Draw each profile in its own sketch on its own plane.
`,Wn=`---
id: obj-material
title: Colours and materials
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: color, colour, paint, material, change colour, change color, colour wheel, hex code, recent colours, glass, clear, plastic, metal, wood, rubber, apply overlay, several at once, materials, mat, colur
commands: material, selectSimilar
howto: color
context: material
order: 390
---

## What

Changes the colour and the material (plastic, metal, wood, glass …) of the selected objects. It is done in the Properties window; with several objects selected, all of them change at once.

## Steps

1. Click an object. Hold Shift to select several.
2. Select a colour under {t:panel.color} in the Properties window.
3. Change the surface (wood, metal …) under {t:panel.material}.

## Tips

- {t:panel.material} is split into the tabs {t:matcat.basic}, {t:matcat.metal}, {t:matcat.plastic}, {t:matcat.wood} and {t:matcat.misc}; click a picture to select.
- Under {t:panel.color}, the outer ring of the colour wheel selects the hue and the square inside selects how light and how strong it is. You can also type a code such as \`#FF8800\` in the {t:mat.hex} field, or click a swatch or one of the {t:mat.recent}.
- A material with its own colour, such as a metal or a wood, first shows that colour. Selecting a colour turns {t:mat.overlay} on, so your colour lies over the material; turn it off to see the material's colour again. Materials without a colour of their own, such as the matte and glossy plastics, always show the selected colour.
- {t:mat.clearGlass}, {t:mat.frostedGlass} and the clear plastics are see-through.
- With several objects selected, the Properties window says how many, and fields whose values differ show {t:multi.mixed}. Colours and materials go to all of them in one step, and one undo takes them back.
- When several objects with colours painted on single faces are selected, turn on {t:multi.clearFaces} to remove those face colours and paint each whole object in the new colour.
- {m:material} opens the Properties window and jumps to the material box.
- To select every object of the same colour or kind in one go, use [Select Similar](help:obj-select-similar).
- In {t:mode.short.arch}, to paint only one face of a wall, use [face paint](help:arch-face-paint).

## Common mistakes

- {c:material} with nothing selected only shows a message and does not open the material box. Select the object first.
- The selected colour does not show and the material keeps its own colour: {t:mat.overlay} is off. Turn it on.
- Sketch line colours are not set here. See [2D line weight and colour](help:obj-line-style).
`,Gn=`---
id: obj-measure
title: Measure
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: measure, distance, length, angle, volume, area, how long, shortest distance, diameter, radius, surface area, size, ruler, how big, dimension info, dist, mea, diminfo, mesure
commands: measure, dimInfo
howto: measure
context: measure
order: 370
---

## What

Click points, edges, faces or objects to read distances, angles, areas and volumes. The values appear in the tool window; the model does not change.

## Steps

1. Click {m:measure}.
2. Click two points, edges or faces for the distance or angle.
3. Click a face or an object for its area and volume.

## Tips

- One click is enough to read one thing:
  - an edge: its {t:m.edgeLength}; a circle or arc edge also gives its {t:m.diameter} (∅) and {t:m.radius} (R);
  - a face: its {t:m.faceArea};
  - a point: its coordinates (X, Y, Z).
- With two things clicked you get the {t:m.minDistance}, also drawn in the view as a dimension line. Between two points you also get the distances {t:m.dx}, {t:m.dy} and {t:m.dz}.
- Two flat faces, two straight edges, or a straight edge and a flat face give the angle between them ({t:m.angle}).
- To measure a whole object, select {t:m.filterBody} at the top of the window and click the object: you get its {t:m.size} (width × depth × height), {t:m.volume} and {t:m.surface}. Opened with one or two objects selected, the tool measures them at once.
- With object snaps on ({k:osnap}), the cursor sticks to corners, midpoints, circle centres and face centres ([object snaps](help:snap-osnap)). Click while the marker shows to measure between exact points.
- A third click starts a new measurement. Clicking empty space starts over too. Ctrl+Z lets go of the last thing clicked.
- Lengths are in mm in {t:mode.short.print} and in m in {t:mode.short.arch}.
- Turn on {m:dimInfo} to keep the width, depth and height of the selected objects shown in the view.
- To keep a measured value on the model, use a [3D dimension](help:obj-annotate).
- In the command line, type \`dist\` or \`mea\`.

## Common mistakes

- No volume appears. Clicking a face gives only its area. Switch to {t:m.filterBody} and click the object.
- No angle appears. Angles between curved faces or curved edges are not worked out. Select flat faces or straight edges.
- You wanted a corner but got an edge length. Move closer to the corner until the point marker shows, then click.
`,Kn=`---
id: obj-mirror
title: Mirror
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: mirror, symmetric, flip copy, mirror copy, symmetry, reflect, flip, other side, left and right the same, half model, 3dmirror, mirror3d, miror
commands: mirror3d, union
howto: mirror
context: mirror3d
order: 300
---

## What

Makes a mirrored copy of solids about a plane. For an object whose left and right are the same, build one half and mirror it.

## Steps

1. Select the object and click {m:mirror3d}.
2. Select the mirror plane and Apply (Enter).

## Tips

- Select the plane: {t:opt.planeYZ}, {t:opt.planeXZ}, {t:opt.planeXY} or {t:opt.planeFace}. It starts at {t:opt.planeYZ}.
- {t:opt.mirrorAt} sets where the plane goes:
  - {t:opt.atSide}: at the end face of the objects (the larger coordinate). The copy lands right next to the original, touching it.
  - {t:opt.atCenter}: through the middle of the objects. The copy overlaps the original.
  - {t:opt.atOrigin}: through the origin.
- With {t:opt.planeFace}, click a flat face and the objects are mirrored about it at once.
- Turn {t:opt.keepSource} off to flip the original instead of making a copy.
- Select several solids to mirror them all about the same plane in one go.
- The result is previewed see-through before you apply.
- An original and a copy that touch can be joined into one object with {c:union} ([union](help:obj-union)).
- In the command line, type \`mirror3d\`.

## Common mistakes

- Sketches are not mirrored: this tool takes solids only. For sketch lines, use {c:mirror2d} inside the sketch ([2D edit](help:obj-sketch-edit)).
- With {t:opt.planeFace}, a curved face such as the side of a cylinder cannot be selected. Click a flat face.
- With {t:opt.atCenter}, the copy of a symmetric object lies exactly on the original, so it seems nothing happened. Select {t:opt.atSide} to put the copy beside it.
- For many copies at equal spacing, do not repeat the mirror: use a [pattern](help:obj-pattern).
`,qn=`---
id: obj-move
title: Move and rotate
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: move, rotate, turn, position, tilt, gizmo, handles, arrows, rings, pivot, set pivot, rotate 90, lay down, stand up, type a distance, 3dmove, 3drotate, transform, roate
commands: move, pivotHere, rotX, rotY, rotZ
howto: move
context: move, pivotHere, rotX, rotY, rotZ
order: 310
---

## What

Moves and turns the selected objects with arrow, square and ring handles. Distances and angles can also be typed for an exact move.

## Steps

1. Select the object and click {m:move}.
2. Drag an arrow to move, a ring to rotate.
3. Click an arrow without dragging to type a distance.
4. Or type numbers in {t:panel.position} and {t:panel.rotation} in the Properties window.

## Tips

- X is red, Y green and Z blue. An arrow moves along one axis, a square moves in the plane of two axes, and a ring turns about its axis.
- After you drag an arrow or a ring, a value box opens beside it. A number typed there replaces the value just dragged.
- A drag follows the grid snap in the status bar: with {t:ux.snap.auto} it keeps to the grid square seen, with {t:ux.snap.on} to the {t:grid.linear} step. Hold Shift while dragging to move freely: [grid and grid snap](help:snap-grid).
- Dragging a ring shows a protractor. On its tick band the turn goes in 5° steps; off the band it keeps to the {t:grid.angular} step of the status bar. Hold Shift to turn freely.
- With object snaps on, a drag lines up with corners, midpoints and other points of the other objects ([object snaps](help:snap-osnap)).

### Pivot

- The handles start in the middle of the selected objects. That point is the pivot of moves and turns.
- Click {t:gizmo2.pivotBtn} or press P, then click a point such as a corner, an edge midpoint or a face centre: it becomes the new pivot. Clicking an edge or a face lines the handle axes up with it. Esc ends it.
- Holding Alt changes the pivot for as long as Alt is down.
- {t:gizmo2.axisReset} turns the handle axes back to X, Y and Z.
- With one face, edge or vertex selected, select {c:pivotHere} in the right-click menu: {c:move} opens with the pivot on that point (the middle of an edge, the centre of a face).
- Under {t:ac.advanced} (shown from the start with the advanced menus): {t:opt.pivotToPoint} moves the pivot to a clicked point, {t:opt.pivotToOrigin} moves it to the origin, and {t:opt.pivotReset} puts it back. The first two take the objects along.

### Typed moves

- The {t:opt.moveBy} X, Y, Z and {t:opt.rotateBy} X, Y, Z fields of the tool window are an extra distance and angle from where the objects are now. The objects move as soon as you type, and the fields go back to 0.
- {t:panel.position} and {t:panel.rotation} in the Properties window are measured from the origin. They show when exactly one object is selected.
- Number fields take calculations, for example \`25/2\` ([calculations](help:input-calc)).

### Turning by 90°

- {m:rotX}, {c:rotY} and {c:rotZ} turn the objects 90° at once about the pivot (the middle of the selected objects when no pivot is set). Each press turns another 90°.

### More

- The shortcut is {k:move}; in the command line, type \`m\`.
- While the tool is open, hold Shift or Ctrl and click another object to select it too.

## Common mistakes

- No handles appear when nothing is selected. Click the object first.
- Clicking empty space ends the tool. Click on the object itself.
- A square handle takes no typed value. For an exact distance, click an arrow.
- After a turn the handles stay turned, so the arrows point at a slant. To move along the world directions, click {t:gizmo2.axisReset}.
`,Jn=`---
id: obj-partial-delete
title: Partial delete and splitting
분류: 3D 물체 도구
난이도: 중급
workspace: 공통
keywords: partial delete, delete elements, delete face, delete edge, delete vertex, remove fillet, remove chamfer, fill hole, remove hole, delete part of object, split, divide, deletesub, remove face
commands: deleteSub, delete, splitFace, addLine, addPoint, split, separate
context: deleteSub
order: 240
---

## What

Deletes only the selected faces, edges or vertices of an object instead of the whole object. When a fillet or hole face is deleted, the faces around it close the gap. This page also lists the tools that split faces and objects.

## Steps

1. Click the object to select it.
2. Click the same object again to select the face, edge or vertex to delete. Hold Shift and click to select more of the same kind.
3. Press {k:delete}, or click {c:deleteSub} in the small button bar next to the object.
4. A message tells you what was done.
5. If you deleted the wrong thing, press {k:undo}.

## Tips

- What happens depends on what you delete.

| Selected | Result |
| --- | --- |
| A line made with {c:addLine} or {c:splitFace} | The split faces join into one again |
| A point made with {c:addPoint} | The edge joins up again |
| A face of a fillet, chamfer, hole, pocket or boss | The faces around it are extended to fill it in or cut it away |
| A face that cannot be closed | Only that face goes and an opening is left |
| An original vertex or edge | It is left out and the faces around it are made again |

- If an opening is left and the object becomes a surface without thickness, make it solid again with [Thicken or Fill Faces](help:obj-tweak).
- If nothing would be left, the whole object is deleted.
- {k:delete} deletes faces, edges or vertices only while they are selected. To delete the whole object, press it with just the object selected. See [Delete](help:start-delete).
- In the Shift + right-click menu, {t:pf.title} set to {t:pf.face}, {t:pf.edge} or {t:pf.vertex} makes one click select only that kind.
- Tools that split: {c:addLine} and {c:splitFace} split faces ([Tweak](help:obj-tweak)), [Split Body](help:obj-split) cuts a solid in two, and [Separate](help:obj-group) makes loose pieces separate objects.

## Common mistakes

- Objects brought in as triangle meshes (STL and similar) cannot have faces, edges or vertices deleted separately.
- Vertices and edges that touch a curved face cannot be deleted. Select the curved face and delete it instead.
- With nothing selected, only {t:err.sub-none} appears. Select the object, then click it again to select a face, edge or vertex.
`,Yn=`---
id: obj-parts
title: Machine parts
분류: 3D 물체 도구
난이도: 중급
workspace: 3D 물체
keywords: bolt, nut, screw, gear, spring, cam, coil, rack, spur gear, helix, thread, module, teeth, aluminium profile, aluminum extrusion, t-slot, t-nut, t-bolt, corner bracket, linear guide, rail, steel angle, edit part, machine parts, fastener, gera
commands: gearPart, bolt, nut, rack, cam, spring, helix, alProfile, tNut, tBolt, cornerBracket, linearGuide, steelAngle, editPart
howto: parts
context: bolt, nut, gearPart, rack, cam, spring, helix, alProfile, tNut, tBolt, cornerBracket, linearGuide, steelAngle, editPart
order: 250
---

## What

Makes machine parts such as bolts, nuts, spur gears, racks, cams, springs and helixes, and structural parts such as aluminium profiles, linear guides and steel angles, at standard sizes, ready to place.

## Steps

1. Open the {t:group.parts} menu.
2. Click {c:bolt}, {c:nut}, {c:gearPart} or {c:spring}.
3. Change the values in the window, then click where it goes in the 3D view.

## Tips

- Applying means placing the part. The part follows the cursor; click where it goes in the 3D view (faces work too). Enter places it where the cursor is. After one part is placed the tool ends, and the new part stays selected.
- The tabs at the top of the window switch to another part. {c:bolt} to {c:helix} are tabs of one window, and {c:alProfile} to {c:steelAngle} are tabs of another.
- Select {t:opt.out2d} instead of {t:opt.out3d} to draw the part's outline on the floor as a sketch.
- For bolts and nuts, select M2 to M24 under {t:opt.threadSize}, or {t:opt.custom} to type the diameters and pitch yourself. The first bolt is an M6 hex bolt, 20 mm long. Select the head from {t:opt.headHex}, {t:opt.headSocket} and {t:opt.headCross}; switching off {t:opt.realThread} makes it without a thread.
- Open the {t:opt.fit} part of the window to set the {t:opt.printGap} for 3D printing (0.15 mm at first) and the tolerance class.
- A spur gear is sized by module and teeth ({t:opt.byModule}) or from its pitch or outside diameter ({t:opt.byDiameter}). The {t:opt.pressureAngle} is 14.5°, 20° or 25°. Gears and a {c:rack} that mesh need the same module and pressure angle.
- The table at the bottom of the window shows values such as the {t:opt.pitchDia} and {t:opt.outerDia}. The distance between the centres of two spur gears is the sum of their pitch diameters divided by 2.
- A {c:cam} comes as {t:opt.camDrop}, {t:opt.camPear}, {t:opt.camHeart} or {t:opt.camEccentric}; a {c:spring} takes the {t:opt.outerDia}, {t:opt.wireDia}, {t:opt.freeLength} and {t:opt.coils}.
- An {c:alProfile} comes in sizes 2020 to 4590 and only its length is free (200 mm at first). Select {t:opt.standUp} or {t:opt.layDown}.
- When a placed part is selected, the small button bar next to it shows {c:editPart}. Change the size or standard and press Enter to apply.
- The {t:group.parts} menu is on the {t:level.advanced} menus. If you cannot see it, see [Basic and Advanced menus](help:start-level).

## Common mistakes

- Pressing Esc before clicking in the 3D view or pressing Enter places nothing.
- The {t:group.parts} menu is only in 3D Object Modeling. To use a part in 3D Building Modeling, make it there and use [Send to Building](help:more-send-to-building).
- Two gears with different modules do not mesh. Make them with the same module.
`,Xn=`---
id: obj-pattern
title: Patterns
분류: 3D 물체 도구
난이도: 중급
workspace: 공통
keywords: array, pattern, repeat, copies, many, rectangular pattern, circular pattern, polar array, pattern on path, path array, grid of copies, copies in a circle, copies along a line, arrayrect, arraypolar, arraypath, polar, paterns
commands: rectPattern, circPattern, pathPattern
howto: pattern
context: rectPattern, circPattern, pathPattern
order: 290
---

## What

Makes several evenly spaced copies of the selected objects. {c:rectPattern} lays them out along X, Y and Z, {c:circPattern} around an axis, and {c:pathPattern} along a sketch line.

## Steps

1. Select the object and click {m:rectPattern} (for a circle use {c:circPattern}).
2. Set the count and spacing, then Apply (Enter).

## Tips

### Rectangular pattern

- {t:opt.count} X, Y and Z include the original (1 to 100 per direction). For example, X = 4 gives the original and 3 copies.
- {t:opt.spacing} is the distance between the same point of two neighbouring objects (centre to centre). It starts a little wider than the objects.
- Raise X and Y together for a grid; raise Z to stack copies upwards.

### Circular pattern

- {t:opt.count} includes the original (2 to 360). With a {t:opt.totalAngle} of 360° the copies share a full turn evenly; a smaller angle is the angle from the original to the last copy.
- The {t:opt.patternCenter} starts at the {t:opt.atOrigin} (0, 0, 0). In the preview the centre shows as a dot named "{t:opt.patternCenter}" with a cross and the rotation axis, and the circle the copies go round on is drawn dotted through the middle of the selected objects. The window shows the centre's coordinates.
- To turn about another point, select {t:opt.originPoint} and click the centre point. With object snaps on, it lands exactly on a circle's centre or an edge's end. Pressing Esc before clicking keeps the centre as it was.
- The axis starts as Z (square to the floor). {t:opt.axisXRot} and {t:opt.axisYRot} appear when you open {t:ac.advanced}; with the advanced menus they show from the start ([basic and advanced menus](help:start-level)).

### Pattern on a path

- Click {m:pathPattern}, select the objects, then click the sketch line the copies follow. Lines joined end to end become one path.
- The {t:opt.count} (2 to 500) is spread evenly over the whole path. On a closed line the copies go evenly round it.
- With {t:opt.alignPath} on, each copy turns with the direction of the line.
- The path starts at the end nearest the objects. Put the object on that end point and the copies land on the line; an object away from it keeps that distance from the line.

### Also useful

- {t:opt.linkedCopies} (under {t:ac.advanced} for rectangular and circular patterns) makes the copies linked copies: change the shape of one and all of them change ([duplicate](help:obj-duplicate)).
- With the tool open, clicking an object adds it; clicking it again takes it out. Groups come in whole.
- The copies are previewed before you apply.
- In the command line, type \`ar\` (rectangular), \`polar\` (circular) or \`arraypath\` (path).
- For many holes at equal spacing, pattern one cylinder and remove them all at once with {c:subtract} ([holes](help:obj-hole)).
- To repeat only sketch lines, use {c:array2d} inside the sketch ([2D edit](help:obj-sketch-edit)).

## Common mistakes

- All circular copies sit in one place. The middle of the selected objects is on the rotation axis, so they turn on the spot; the window says so. Move the objects away from the centre, or select another centre with {t:opt.originPoint}.
- With every count of a rectangular pattern at 1 there is no copy, so Apply stays off. Set at least one direction to 2 or more.
- A spacing smaller than the object makes the copies overlap. Type a spacing larger than the object.
- A pattern on a path takes sketch lines only. Clicking an edge of a 3D object does not make a path.
`,Zn=`---
id: obj-presspull
title: Press Pull
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: push, pull, presspull, thicker, press pull, push face, pull face, thinner, change thickness, offset face, push pull, presspul
commands: presspull, tweak, extrude
howto: presspull
context: presspull
order: 210
---

## What

Pushes or pulls one face of a solid square to itself to change its thickness or size. Pulling outwards adds material; pushing inwards cuts it away.

## Steps

1. Click {m:presspull}.
2. Click the face to move.
3. Drag the arrow and let go, or type a distance and press Enter (+ out, − in).

## Tips

- The distance starts at 5 mm (0.75 m in 3D Building Modeling). A negative value such as \`-3\` in the {t:opt.distance} field goes inwards.
- Curved faces work too. Pulling the side of a cylinder moves the whole face out evenly, so the diameter grows.
- Select the object, click it again to select a flat face, then click {c:presspull}: the tool starts with that face.
- Letting go of the arrow applies the move and closes the tool. The value box that stays for a moment after you let go can still change the distance just applied.
- In 3D Building Modeling, pushing or pulling the top face of a wall that has no other steps changes the wall's height, and it stays a wall with its own settings.
- To tilt a face or slide it sideways, use [Tweak](help:obj-tweak).

## Common mistakes

- A distance of 0 cannot be used. If {t:msg.notZero} appears, type a value other than 0.
- Only one face moves at a time. Clicking another face makes that face the one selected.
- A preview that shows an error is not applied. Try a shorter distance or the other direction.
`,Qn=`---
id: obj-primitives
title: Primitives
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: cylinder, sphere, ball, cone, torus, donut, pyramid, prism, wedge, hemisphere, primitive, primitives, basic shape, tube, rod, ring, dome, ramp, hexagonal prism, triangular prism, square pyramid, sph, cyl, tor, hemi, pyr, cilinder, sphear
commands: cylinder, sphere, cone, torus, wedge, prism, pyramid, hemisphere, box
howto: round
context: sphere, cylinder, cone, torus, wedge, prism, pyramid, hemisphere
order: 11
---

## What

Places a sphere, cylinder, cone, torus, wedge, prism, pyramid or hemisphere with one click. Type the sizes before placing, or change them in the Properties window afterwards. For boxes see [Make a box](help:obj-box).

## Steps

1. Click a primitive such as {m:cylinder}, {c:sphere} or {c:cone}.
2. Click where it goes in the 3D view.
3. Change the radius and height in the Properties window.
4. Or type cylinder 10 30 (radius height) in the command line.

## Tips

### Sizes and typed commands

Type the numbers in this order. The first sizes are those of 3D objects; 3D construction uses the same proportions based on 3 m (for example a sphere radius of 1.5 m).

| Shape | Sizes (typed order) | Example | First size |
|---|---|---|---|
| {c:sphere} | {t:param.r} | \`sphere 15\` | radius 10 mm |
| {c:cylinder} | {t:param.r} {t:param.h} | \`cylinder 10 30\` | radius 10 mm, height 20 mm |
| {c:cone} | {t:param.r} {t:param.h} | \`cone 10 30\` | radius 10 mm, height 20 mm |
| {c:torus} | {t:param.R} {t:param.r2} | \`torus 20 4\` | ring radius 10 mm, tube radius 2.5 mm |
| {c:wedge} | {t:param.x} {t:param.y} {t:param.z} | \`wedge 30 20 10\` | 20 × 20 × 20 mm |
| {c:prism} | {t:param.r} {t:param.h} {t:param.n} | \`prism 10 30 6\` | radius 10 mm, height 20 mm, 6 sides |
| {c:pyramid} | {t:param.r} {t:param.h} {t:param.n} | \`pyramid 10 30 4\` | radius 10 mm, height 20 mm, 4 sides |
| {c:hemisphere} | {t:param.r} | \`hemisphere 15\` | radius 10 mm |
| {c:box} | {t:param.x} {t:param.y} {t:param.z} | \`box 30 20 10\` | 20 × 20 × 20 mm |

- Short command names work too: \`sph\` (sphere), \`cyl\` (cylinder), \`tor\` (torus), \`we\` (wedge), \`pyr\` (pyramid), \`hemi\` (hemisphere).
- Typed in the command line with its sizes, the shape is made at once without a click and put on the floor to the right of the objects already there.
- With the tool open, type only numbers such as \`10 30\` before clicking: the preview takes that size and the click places it. Numbers left out keep the current size.
- Numbers may carry a unit (\`2cm\`) or be a calculation (\`25/2\`) ([calculations](help:input-calc)).
- Clicking a flat face stands the shape on that face. For example, clicking the top of a box stands a cylinder on it.
- A hemisphere is placed flat side down. A torus is a ring lying on the floor.
- The {t:param.n} of prisms and pyramids is 3 to 64. Many sides, such as 64, look almost like a cylinder or cone.
- In 3D construction the Basic menus show only the cylinder, wedge, prism, pyramid and box; the sphere, cone, torus and hemisphere are on the Advanced menus. Typed commands always work ([Basic and Advanced menus](help:start-level)).
- To resize a placed shape by dragging handles, use [Smart Scale](help:obj-smart-scale).

## Common mistakes

- Cylinders, cones and spheres are sized by radius, not diameter. A cylinder 20 mm across is \`cylinder 10 30\`.
- For a cylinder, type the radius first and the height second. The other way round gives a flat disc.
- The tube radius of a torus must be smaller than its ring radius; a larger one is refused.
- Values outside 0.1 to 2000 mm (3D objects) or 0.01 to 500 m (3D construction) are refused, and the allowed range is shown. The number of sides must be a whole number.
- One click places one shape and the tool ends. To place more of the same, press Enter to open the tool again.
`,$n=`---
id: obj-revolve
title: Revolve
분류: 3D 물체 도구
난이도: 중급
workspace: 공통
keywords: revolve, lathe, vase, cup, bottle, bowl, revolution, spin, turn, axis, rotation axis, half profile, chess piece, pawn, plate, ring, pottery, rev, revolv
commands: revolve, xline, line
howto: revolve
context: revolve
order: 18
---

## What

Spins half of a profile around an axis to make round objects such as cups, bottles, vases and spinning tops, the way a potter's wheel or a lathe does.

## Steps

1. In a sketch, draw half of the profile and a line for the axis, then click {c:exitSketch}.
2. Click {m:revolve}.
3. Click the profile area, then the axis line.
4. Drag the angle arrow and let go: it is made at once (or type the angle and press Enter).

## Tips

- Drawing the profile on an upright plane (a front face or a [workplane](help:obj-workplane)) gives an object standing up. Drawn on the ground, it comes out lying down.
- The axis is a straight line or an {c:xline} in the same sketch as the profile. One side of the profile can be the axis.
- To skip drawing an axis line, click {t:opt.axisX} or {t:opt.axisY} in the window: the axis then runs through the sketch origin.
- The {t:opt.angle} is -360 to 360°, 360° (a full turn) at first. 180° makes only half.
- A profile touching the axis gives a solid middle; a profile away from the axis gives a ring with an empty middle.
- As with [Extrude](help:obj-extrude), select {t:op.new}, {t:op.union}, {t:op.subtract} or {t:op.intersect} as the result.
- A revolve made as a new object can be changed later: select it and edit the {t:opt.angle} field in the Properties window.
- For a worked example see [the vase example](help:rec-vase-revolve).

## Common mistakes

- A profile on both sides of the axis cannot be revolved ({t:err.revolve-cross}). Keep the profile on one side.
- Only a straight line or a construction line can be the axis. Clicking an arc or a curve shows {t:msg.axisLineOnly}.
- The axis line must be in the same sketch as the profile; lines of another sketch cannot be the axis.
- The angle cannot be 0.
- For a hollow object such as a cup, draw a half profile with a wall thickness (an L shape), or revolve a solid one and use [Shell](help:obj-shell).
`,er=`---
id: obj-section
title: Section View
분류: 3D 물체 도구
난이도: 중급
workspace: 공통
keywords: section, section view, cross section, clip, clipping plane, cut view, look inside, cutaway, see inside, sectoin
commands: sectionView, split, workPlane
context: sectionView
order: 270
---

## What

Cuts the view of the objects with a plane so you can look inside. Only what you see is cut; the objects do not change. Use it to check that a shell or a hole came out right.

## Steps

1. Click {m:sectionView}.
2. Select the direction to cut: {t:opt.planeXY}, {t:opt.planeYZ} or {t:opt.planeXZ}, or select {t:opt.sectionPick} and click a flat face or a work plane.
3. Drag the arrow or type a distance in the {t:opt.offset} field to move the cut.
4. Apply (Enter): the window closes and the section stays on.
5. When you are done, click {t:btn.sectionOff} on the {c:sectionView} label shown in the view.

## Tips

- At first both 3D object and 3D building cut with an upright plane facing the front ({t:opt.planeXZ}): the front half goes away and the inside is seen from the front.
- To see the other half, switch on {t:dv.flip} in the window.
- If objects are selected when the tool starts, the cutting plane goes through their middle; with nothing selected, through the middle of everything shown.
- Select the object, click it again to select a flat face, then start the tool: that face becomes the cutting plane.
- {t:btn.sectionEdit} on the {c:sectionView} label opens the window again to change the plane.
- Once the tool window is closed, Esc also turns the section off. It also turns off by itself when the plane no longer cuts any object shown.
- To really cut an object in two, use [Split Body](help:obj-split). In 3D Building Modeling, [ceiling view and cut away](help:arch-ceiling) show rooms from above.
- {c:sectionView} is on the {t:level.advanced} menus of 3D Object and 3D Building, in the {t:group.dims} tab. See [Basic and Advanced menus](help:start-level). It has no shortcut; typing \`section\` or \`clip\` in the command line opens it too. In 3D Building it also shows a tunnel or the inside of a dam in the ground.
- 3D Building also has {m:archSection} ({k:archSection}), which cuts only buildings. It cuts the work scope's building upright and looks from the side, with the level lines and the cut slabs, walls and roofs. There are also {c:planView} ({k:planView}), which cuts one level and looks from above, and {c:ceilingView} ({k:ceilingView}), which looks up at the ceiling: [ceiling view and cut away](help:arch-ceiling).

## Common mistakes

- {t:btn.close} or Esc in the tool window closes it and turns the section off as well. To keep the section, press Apply (Enter).
- The section only cuts the view. Exported or 3D-printed objects are not cut.
- Clicking a curved face with {t:opt.sectionPick} shows {t:msg.flatFaceOnly}. Click a flat face or a work plane.
`,tr=`---
id: obj-select-similar
title: Select Similar
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: similar, same, select all like, select similar, same colour, same color, same kind, same material, same group, same level, connected, touching, pick by kind, quick select, select many, selectsimilar, qselect, simillar
commands: selectSimilar
howto: selectSimilar
context: selectSimilar
order: 360
---

## What

Selects everything alike to an example object or 2D line in one go: things of the same kind, colour or material, or things joined to it. Then change their colour, delete them or hide them all at once.

## Steps

1. Click {m:selectSimilar}.
2. Click the object to match (Shift: several).
3. Select what counts as the same (kind, colour, material …).

## Tips

- At the top of the tool window select {t:sel.mode.similar} or {t:sel.mode.connected}. {t:sel.mode.connected} selects lines joined end to end and objects that touch.
- {t:sel.byTitle} offers {t:sel.by.kind}, {t:sel.by.color}, {t:sel.by.material} and {t:sel.by.group} in {t:mode.short.print}; {t:mode.short.arch} adds {t:sel.by.shape} and {t:sel.by.level}. {t:sel.by.kind} means the same sort of thing (walls, doors; boxes, cylinders); {t:sel.by.shape} means the very same model, such as one door type.
- Opened with objects already selected, the tool selects the matching ones at once. Clicking another object makes it the new example.
- The {t:sel.byKind} list at the bottom of the window shows every kind of shown object with how many there are. Click a row to select all of that kind. The Objects window has the same {t:sel.byKind} list.
- While a sketch is being edited, the tool selects lines. Match by {t:sel.by.kind} (line, arc, circle …) or {t:sel.by.size} (same length or radius too).
- Ending the tool with Enter or a right click keeps the selection. Then change the [colour or material](help:obj-material), or press Delete.
- In the command line, type \`similar\` or \`qselect\`.
- In the {t:panel.objects} window, clicking a group row, or a level or kind row ({t:ot.k.wall}, {t:ot.k.slab} …) in 3D Building, also selects everything in it. Right-click a row of one of your own objects placed in 3D Building and select {t:tc.mSameObject} to select every placed copy of it.

## Common mistakes

- Hidden objects are never selected. Show them first if they should be included ([hide and show](help:start-hide)).
- {t:sel.by.color} selects only exactly the same colour. Colours that look alike but have another colour code are left out.
- Selecting an object that belongs to a group selects the whole group.
`,nr=`---
id: obj-shell
title: Shell
분류: 3D 물체 도구
난이도: 중급
workspace: 공통
keywords: shell, hollow, empty inside, hollow out, thin wall, wall thickness, cup, bowl, box, container, shel
commands: shell, subtract
howto: shell
context: shell
order: 200
---

## What

Opens the selected faces of a solid and hollows it out, leaving walls of a set thickness. Use it for boxes, cups, pots and other hollow things.

## Steps

1. Click {m:shell}.
2. Click the face to leave open (e.g. the top).
3. Drag the thickness arrow and let go, or type the wall thickness and press Enter.

## Tips

- Several faces can be left open. Clicking a selected face again drops it, and Ctrl+Z drops the last face selected.
- The walls grow inwards: the outside size stays the same and only the inside is emptied.
- The thickness starts at 1.5 mm (0.2 m in 3D Building Modeling). You can also type it in the {t:opt.thickness} field of the window.
- The thickness arrow stands on the wall across from the last face selected. Letting go of it applies the shell and closes the tool.
- Select the object, click it again to select a face, then click {c:shell}: the tool starts with that face open.
- In 3D Building Modeling, {c:shell} is on the {t:level.advanced} menus. See [Basic and Advanced menus](help:start-level).
- The [lamp made with Shell](help:rec-shell-lamp) recipe shows the tool in use.

## Common mistakes

- Walls that are too thick give the error {t:err.shell-failed} and nothing is applied. The arrow stops at half the object's thinnest size.
- Nothing can be applied until at least one face is selected: this tool always opens a face.
- Clicking a face of another object lets go of the earlier faces and starts again with that object.
`,rr=`---
id: obj-sketch-draw
title: Sketch drawing tools
분류: 3D 물체 도구
난이도: 중급
workspace: 공통
keywords: line, polyline, pline, rectangle, rect, square, circle, tangent circle, ttr, arc, semicircle, ellipse, oval, polygon, hexagon, pentagon, spline, curve, pen, xline, construction line, point, divide, donut, ring, spiral, join ends, close, project, face to sketch, exit sketch, finish sketch, draw, 2D drawing, rectangel, cirle
commands: line, polyline, rect, circle, circleTTR, arc, ellipse, polygon, spline, xline, point2d, divide, donut, spiral, closeOpen, project, faceToSketch, exitSketch
context: line, polyline, rect, circle, circleTTR, arc, ellipse, polygon, spline, xline, point2d, divide, donut, spiral, closeOpen, project, faceToSketch, exitSketch
order: 14
---

## What

AutoCAD-style tools that draw 2D shapes such as lines, rectangles, circles, arcs and curves on a sketch plane. The closed areas you draw become profiles for [Extrude](help:obj-extrude) and [Revolve](help:obj-revolve); open lines can be paths for a [sweep](help:obj-sweep).

## Steps

1. Click a drawing tool such as {m:line}.
2. If no sketch is being edited, first click the face, workplane or ground to draw on. This click only selects the plane.
3. Select the drawing method and sizes in the tool window.
4. Click the points one after another, or type coordinates or lengths in the command line and press Enter.
5. For tools that keep drawing, such as lines, press Enter to end one run and Esc to close the tool.
6. When the drawing is done, click {c:exitSketch}.

## Tips

### Tool by tool

- {c:line}: click points one after another for connected straight lines. With three or more points, type \`C\` to close back to the first point; press Enter to end the run and start a new one.
- {c:polyline}: draws lines and tangent arcs in one go. Type \`A\` for arcs, \`L\` for lines and \`C\` to close. In line mode, press, wait 0.5 s and drag to make a curve point ([Edit Curve](help:obj-curve-edit)).
- {c:rect}: click two corners. With {t:opt.fromCenter} on, the first click is the centre. Type the size in {t:opt.sideW} and {t:opt.sideH} in the window, or type \`@30,20\` after the first corner.
- {c:circle}: select {t:opt.centerRadius}, {t:opt.twoPoint}, {t:opt.threePoint} or {t:opt.ttr}. After the centre, type a number to draw that radius.
- {c:circleTTR}: the same as {t:opt.ttr} in the circle window. Click the two lines or circles the circle should touch; set the radius in the window.
- {c:arc}: draw with {t:opt.threePoint} (start → point on arc → end) or {t:opt.centerStartEnd}.
- {c:ellipse}: click the centre, the end of one axis, then the length of the other axis.
- {c:polygon}: click the centre and the radius. {t:opt.sides} is 3 to 64 (6 at first); select {t:opt.inscribed} or {t:opt.circumscribed}. Typing a whole number such as \`8\` before the centre also sets the sides.
- {c:spline}: {t:curves.splinePen} (the default) makes a corner with a click and a smooth curve point with press and drag. {t:curves.splineThrough} draws a smooth curve through the clicked points. Press Enter to finish.
- {c:xline}: an endless construction line. {t:opt.twoPoint} adds one more line through the first point with every click; {t:opt.horizontal}, {t:opt.vertical} and {t:opt.angle} are there too. It also serves as the axis of a [revolve](help:obj-revolve).
- {c:point2d}: puts a point wherever you click.
- {c:divide}: click a line to cut it into equal pieces. Set {t:opt.segments} (5 at first) and {t:opt.dividePoints}. Select several lines first and press Enter to divide them all.
- {c:donut}: set {t:opt.innerDia} and {t:opt.outerDia} and click the centre for a ring of two circles. An inside diameter of 0 gives one circle.
- {c:spiral}: click the centre, then the outer end. Select {t:opt.turns} (3 at first), {t:opt.startRadius} and {t:opt.ccw} or {t:opt.cw}.
- {c:closeOpen}: in the sketch being edited or selected, ends that almost touch are joined and every open run gets a closing line, so it becomes a closed area.
- {c:project}: while a sketch is being edited, click edges or faces of an object to draw their outline on the sketch plane. Circles and arcs seen square-on stay circles and arcs, so they can take dimensions.
- {c:faceToSketch}: click an object, click a flat face once more to select it, then run this to make a new sketch of the face outline. It is on the small bar that appears when a face is selected.
- {c:exitSketch}: ends editing the sketch; the same as the button on the {t:status.sketchEditing} bar at the top of the view.
- Write letters with {c:text} ([Text](help:obj-text)).

### Working with them

- Instead of clicking a point, type \`x,y\` (absolute), \`@dx,dy\` (from the last point), \`length<angle\`, or one number (that length towards the cursor) in the command line ([coordinates and lengths](help:input-coords)).
- {k:osnap} [object snap](help:snap-osnap), {k:snap} [grid snap](help:snap-grid) and {k:ortho} [ortho](help:snap-ortho) help place points.
- Ctrl+Z while drawing removes only the last point. A right-click without dragging acts as Enter.
- Shapes finished in one go, such as rectangles and circles, close the tool when they are made. Lines, polylines, construction lines and points go on until Esc.
- Lengths are in mm in 3D objects and in metres in 3D construction. The 3D construction sketch menu has no divide, donut or 2D spiral, but their commands still work.

## Common mistakes

- If line ends do not meet exactly, there is no closed area. Catch the end points with object snap or close them with {c:closeOpen}.
- {c:project} works only while a sketch is being edited. Double-click a sketch to start editing it first.
- You cannot draw on a curved face. With {t:plane3.auto}, clicking a curved face starts the three-point plane method ([three-point plane](help:obj-sketch-plane3)).
- If the plane is seen almost edge-on, no point is placed. Use {c:faceView} to see the plane from the front.
- A sketch made by a drawing tool stops being edited when the tool closes. To keep drawing in it, start with {c:newSketch} or press {c:editSketch}.
`,ir=`---
id: obj-sketch-edit
title: 2D Edit
분류: 3D 물체 도구
난이도: 중급
workspace: 공통
keywords: 2D edit, edit sketch, trim, extend, offset, parallel line, fillet, round corner, chamfer, move, copy, rotate, scale, mirror, array, pattern, stretch, break, split line, lengthen, length, modify sketch, trimm, ofset
commands: editSketch, trim, extend, offset, fillet2d, chamfer2d, move2d, copy2d, rotate2d, scale2d, mirror2d, array2d, stretch, breakLine, lengthen
context: editSketch, trim, extend, offset, fillet2d, chamfer2d, move2d, copy2d, rotate2d, scale2d, mirror2d, array2d, stretch, breakLine, lengthen
order: 15
---

## What

AutoCAD-style 2D tools that trim, extend, offset, move and rotate the lines in a sketch. You do not have to be editing the sketch: clicking one of its lines opens it for changes.

## Steps

1. Double-click the sketch to change, or click {m:editSketch} and click the sketch.
2. Click a 2D edit tool such as {m:trim}.
3. Click lines or points as the prompt asks.
4. Type distances, radii, angles and factors in the tool window or the command line.
5. Press Esc to close the tool, and click {c:exitSketch} when you are done.

## Tips

### Tool by tool

- {c:editSketch}: edits the selected sketch (or the next sketch you click) until {c:exitSketch} or Esc.
- {c:trim}: click the part to cut away; the piece between intersections goes. A line that meets no other line is removed whole.
- {c:extend}: click near the end to extend and the line grows to the next line. Lines and arcs only.
- {c:offset}: type the distance (2 mm at first in 3D objects), click a line, then click the side. With {t:opt.offsetChain} on, a whole connected run is offset with its corners joined.
- {c:fillet2d} and {c:chamfer2d}: type the radius or distance (2 mm at first) and click two lines. They work on lines and arcs; a 2D fillet also works on circles.
- {c:move2d} and {c:copy2d}: click lines to select them, press Enter, then click a base point and a second point. You can also drag the arrow handles that appear. Copy keeps making copies from new base points.
- {c:rotate2d}: select lines, click the base point, then type the angle or drag the ring handle. With angle snap on, turning with the mouse keeps to its step; hold Shift to turn freely.
- {c:scale2d}: select lines, click the base point, then type the {t:opt.factor} (0.001 to 1000).
- {c:mirror2d}: select lines and click two points of the mirror line. Turn {t:opt.keepSource} off to remove the original.
- {c:array2d}: select {t:tab.arrayRect}, {t:tab.arrayPolar} or {t:tab.arrayPath}. After selecting lines, click the centre (polar) or the path line (path), then press Enter.
- {c:stretch}: click two corners of the crossing window, then a base point and a second point. Only the ends inside the window move, so the shape grows or shrinks.
- {c:breakLine}: click two points on a line to remove the part between them. With {t:opt.breakAtPoint} on, the line is split in two at one point.
- {c:lengthen}: select {t:opt.lenDelta}, {t:opt.lenTotal} or {t:opt.lenPercent} and click near the end to change.

### Working with them

- Lines selected before the tool opens are used at once; move, copy, rotate, scale and mirror then start at the base point.
- While editing a sketch, the small bar that appears for selected lines holds tools such as {c:move2d}, {c:copy2d} and {c:offset}.
- Ctrl+Z inside a tool takes back only the last select or point.
- Number fields take calculations ([calculations](help:input-calc)). Set exact lengths with [2D dimensions](help:obj-dimension).
- To reshape curves by points and handles, use [Edit Curve](help:obj-curve-edit).

## Common mistakes

- 2D edit works only on sketch lines. For 3D objects use [Move and rotate](help:obj-move), [Mirror](help:obj-mirror) and [patterns](help:obj-pattern).
- A closed curve (a circle) can be trimmed only where it meets other lines in two or more places.
- With no line in the way, {c:extend} does nothing. Set the length with {c:lengthen} instead.
- Curves such as splines can only be shortened with {c:lengthen}.
- When an edit makes a line disappear, dimensions measuring it are removed too and you are told how many. Add them again if needed.
`,ar=`---
id: obj-sketch-plane3
title: Sketch on a plane through three points
분류: 3D 물체 도구
난이도: 중급
workspace: 공통
keywords: three points, slanted plane, tilted plane, across faces, plane through points, 3 points, 3-point plane, inclined plane, angled plane, oblique plane, diagonal face, sloped sketch, sketch plane, projected, look at
commands: newSketch, line, polyline, faceView
howto: sketchThreePoints
order: 13
---

## What

Fixes a plane through three points on different faces or objects and sketches on it. Use it when you need a plane no existing face has, such as a face to cut a box corner at an angle or a slope across several plates.

## Steps

1. Click {m:newSketch} and select {t:plane3.three} in its window.
2. Click three points the plane goes through (corners, edge middles, points on faces), on different faces or objects too.
3. The third point starts the sketch on that plane. Draw a closed shape with {c:line} or {c:polyline}.
4. Starting a drawing tool on a corner works too: the first three points fix the plane and the drawing goes on from them.
5. If no point is placed because the plane is seen too edge-on, use {c:faceView} to see it from the front.

## Tips

- While you click, the points, the lines between them and the plane the next point would make (a see-through square) are shown, with the point number next to the cursor (for example 2/3).
- The plane's x axis runs from the first point to the second, and its front faces the screen. So extruding this sketch comes out towards you.
- If all three points lie on one flat face of an object, the sketch belongs to that object and an extrude merges with it.
- When no sketch is being edited, the {t:plane3.choice} choice at the top of a drawing tool's window sets how the plane is selected. With {t:plane3.auto}, clicking inside a face draws on that face, and clicking a corner, an edge middle, a circle centre or a curved face switches to the three-point method.
- {t:plane3.face} always draws on the flat face clicked first (empty space: the ground); {t:plane3.three} always takes three points first.
- The three points become the first points of the drawing: the first three corners of a line, polyline or spline, an arc or circle through the three points, the centre, axis end and other axis of an ellipse, and for a rectangle the first two points make one side and the third sets the width.
- For shapes finished by two points (rectangle, circle, polygon), {t:plane3.auto} takes the clicked flat face at once when both points lie on it.
- While a sketch is being edited, a corner of another face is moved straight onto the sketch plane and marked {t:plane3.projected}.
- Remove a wrong point with Ctrl+Z, one at a time.
- For a plane parallel to an existing face, a [workplane](help:obj-workplane) is simpler. To cut an object along a slanted face, extrude this sketch as a subtraction ([Extrude](help:obj-extrude)) or use [Split solid](help:obj-split).

## Common mistakes

- Three points on one straight line fix no plane, so the third point is refused. Click another point.
- Pressing Enter in {c:newSketch} before there are three points asks for one more point.
- Fixing the plane does not turn the view. Use {c:faceView} to see the plane from the front.
- Starting a line on a corner makes no sketch until the third point. To draw on that face at once, select {t:plane3.face} or click inside the face.
`,or=`---
id: obj-sketch
title: Draw a sketch and make it 3D
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: sketch, free sketch, draw, extrude, profile, shape, 2D, drawing, new sketch, closed area, region, sketch on face, sketch on ground, finish sketch, edit sketch, skecth, sketsh
commands: newSketch, extrude, exitSketch, editSketch, line, rect, circle
howto: sketchExtrude
context: newSketch
order: 12
---

## What

The basic workflow of drawing a 2D sketch (lines, rectangles, circles) on a face or on the ground and giving its closed area thickness. Use it for shapes that boxes and cylinders cannot make easily, such as an L shape, a star or a toothed outline.

## Steps

1. Click {m:newSketch}, then click a face or an empty spot (the floor).
2. Draw a closed shape with {c:line}, {c:rect} or {c:circle}.
3. Click {c:exitSketch}.
4. Click {m:extrude} and click the closed area.
5. Drag the arrow and let go: it is made at once (or type a height and press Enter).

## Tips

- One click on a flat face starts the sketch on that face at once, and the view turns to face it. A click on empty space draws on the ground; a click on a [workplane](help:obj-workplane) draws on that plane.
- With a face or a workplane already selected, {c:newSketch} starts at once without a click.
- To use several faces on the same plane, Shift+click them and press {t:btn.sketchHere}. Closed areas are then made only inside those faces.
- While a sketch is being edited, the {t:status.sketchEditing} bar shows at the top of the view; its button is {c:exitSketch}. Double-clicking empty space or pressing Esc also leaves the sketch.
- You can also start a drawing tool such as {c:line} without {c:newSketch}. The first click selects the plane and the drawing starts with the next click. A sketch made this way closes together with the tool.
- You can press {c:extrude} straight from the sketch being edited. The sketch closes and its closed area is selected at once. With several areas, every area except the holes inside is selected; click an area to take it out or put it back.
- For exact sizes, type lengths while drawing ([coordinates and lengths](help:input-coords)) or set them afterwards with [2D dimensions](help:obj-dimension).
- To change a finished sketch, double-click it or press {c:editSketch} ([2D edit](help:obj-sketch-edit)).
- See [sketch drawing tools](help:obj-sketch-draw) for the drawing tools and [Extrude](help:obj-extrude) for direction, subtract and other options. Spinning a profile instead makes a [revolve](help:obj-revolve).

## Common mistakes

- If line ends do not touch, there is no closed area and nothing can be extruded. Join the ends exactly with [object snap](help:snap-osnap) or close them with {c:closeOpen}.
- A curved face (the side of a cylinder) cannot hold a sketch. Select a flat face or a [workplane](help:obj-workplane).
- A sketch drawn on a face of an object is extruded into that object, not as a new one. To keep it separate, select {t:op.new} in the [Extrude](help:obj-extrude) window.
- Starting a drawing tool on a corner or an edge begins the three-point plane method. Click inside a face to draw on that face at once ([three-point plane](help:obj-sketch-plane3)).
`,sr=`---
id: obj-smart-scale
title: Smart Scale
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: size, scale, resize, bigger, smaller, stretch, smart scale, scale factor, keep proportions, target size, make larger, make smaller, enlarge, shrink, handles, ss, smartscale, sclae
commands: smartScale, scale
howto: smartScale
context: smartScale, scale
order: 340
---

## What

Changes the size of an object by dragging the handles around it. Stretch one side, drag a bottom corner to change width and depth together, or type a factor or a target size.

## Steps

1. Select the object, then click {m:smartScale}.
2. Drag a yellow handle to move that side, a white bottom corner to move the two sides meeting there; the top handle sets the height.
3. For an exact factor or size use {m:scale}.

## Tips

- The yellow handles sit in the middle of the four bottom edges and on the top. Dragging one moves only that side; the opposite side stays.
- Dragging a white corner keeps the opposite corner and the bottom still and changes width and depth together.
- Click one of the three lengths written on the box around the object to type that size directly.
- In the tool window, {t:opt.factor} grows or shrinks all three directions alike (0.01 to 100 times). The {t:opt.sizeTo} X, Y and Z fields take a target size. Number fields take calculations too ([calculations](help:input-calc)).
- With {t:opt.keepRatio} on, all three directions change in proportion when you drag or type.
- Each drag continues from the size before. Ctrl+Z takes back the last drag.
- Apply (Enter) to fix the size. Clicking empty space or pressing Esc also applies the new size, then ends the tool.
- Simple shapes such as a box or a cylinder get new size values, so you can still change them later in the Properties window. A sphere stretched in one direction becomes an ellipsoid.
- Mesh objects such as STL files can only be scaled evenly in all three directions.
- Doors, windows, furniture and similar objects in {t:mode.short.arch} change only within their allowed sizes.
- {c:scale} (shortcut {k:scale}) opens Smart Scale when one object is selected. With several objects or sketches selected, it scales them all evenly about their common middle, by a {t:opt.factor} or a {t:opt.sizeTo}.
- In the command line, type \`ss\`.

## Common mistakes

- No handles appear. Select the object first. Clicking another object while the tool is open switches to that object.
- A yellow handle made the object grow to one side only. That is how it works: the opposite side stays. To grow about the middle, use {t:opt.factor}.
- Smart Scale works on one object at a time. To scale several together, use {c:scale}.
- Scaling changes hole diameters and wall thicknesses in the same proportion. Check parts with a fixed size, such as screw holes, after scaling ([measure](help:obj-measure)).
`,cr=`---
id: obj-split
title: Split Body
분류: 3D 물체 도구
난이도: 중급
workspace: 공통
keywords: split, slice, cut in half, divide, split body, cut, halve, two pieces, cut with a plane, section cut, slpit
commands: split, separate, splitFace, sectionView
howto: split
context: split
order: 230
---

## What

Cuts one solid with a plane into two objects that can be moved apart. Use it to fit a large model on a 3D printer, or to keep only half of something.

## Steps

1. Click {m:split}.
2. Click the solid to split.
3. Select the cutting plane and Apply (Enter).

## Tips

- Under {t:split.pick} there are five kinds of cutting plane.
  - {t:opt.planeXY}, {t:opt.planeYZ}, {t:opt.planeXZ}: a plane through the middle of the solid. Drag the arrow or type a distance in the {t:opt.offset} field to move it.
  - {t:opt.planeFace}: click a flat face of another object or a [work plane](help:obj-workplane) and the solid is split with that plane at once.
  - {t:opt.planeSketch}: click a sketch with cutting lines and the solid is split along them at once. Several lines can cut it into three or more pieces.
- {t:split.draw} sets the plane right there: {t:split.byLine} draws a line on a face or the ground and cuts square to that face, {t:split.by3} cuts through three points, and {t:split.byPoint} cuts through the clicked point, parallel to the selected direction. Ctrl+Z removes the last point placed.
- After the split, one piece stays in the original object and the rest becomes a new object named like the original with (2) after it. With three or more pieces, the new object holds several of them; use [Separate](help:obj-group) to split them up.
- To look inside without cutting the shape, use [Section View](help:obj-section). To split only a face, use [Split Face](help:obj-tweak).

## Common mistakes

- If the plane does not pass through the solid, {t:err.split-miss} is shown and nothing is applied. Move the plane into the solid.
- Clicking a face of the solid being split does not make a cutting plane. Click a face of another object or a [work plane](help:obj-workplane), or set the plane with {t:split.draw}.
- Curved faces cannot be the cutting plane. If {t:msg.flatFaceOnly} appears, select a flat face.
- With {t:split.by3}, three points in one line make no plane.
`,lr=`---
id: obj-subtract
title: Subtract objects
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: subtract, cut out, carve, minus, remove, boolean, difference, cut away, pocket, groove, engrave, hollow out, substract
commands: subtract, union, intersect, hole
howto: subtract
context: subtract
order: 150
---

## What

A Boolean tool that carves the shape of overlapping objects out of the object you keep. Use it for grooves, square holes, engraved letters and any other cut-out shape.

## Steps

1. Put the cutting shape (e.g. a cylinder) so it overlaps the object to keep.
2. Click {m:subtract}.
3. Click the object to keep.
4. Click the object to cut away and Apply (Enter).

## Tips

- Several cutting objects can be selected at once. For evenly spaced grooves, lay out one cutter with a [pattern](help:obj-pattern) and subtract them all in one go.
- If you select objects with Shift before clicking {c:subtract}, the first one selected becomes {t:role.keep} and the others {t:role.cutters}. Apply (Enter) still has to be pressed.
- If the roles are the wrong way round, click {t:opt.swapRoles} in the tool window.
- The cutting objects normally disappear. To cut the same shape several times, switch on {t:opt.keepTools} in the tool window. With the [Basic menus](help:start-level) it is folded under {t:ac.advanced}.
- Open the kept object's list of steps in the {c:toggleLeft} window to see the subtract step. The {t:step.restore} button removes the subtraction and brings the cutting objects back.
- For a single round hole, the [Hole](help:obj-hole) tool is quicker.

## Common mistakes

- A cutting object that does not touch the kept object cannot be selected. Move it so they overlap first.
- Clicking the two objects the wrong way round gives the opposite result. Check the {t:role.keep} list before applying, and click {t:opt.swapRoles} if needed.
- If the result falls apart into separate pieces, use [Separate](help:obj-group) to make each piece its own object.
- If an error appears, see [when merge or subtract fails](help:faq-boolean-fail).
`,ur=`---
id: obj-sweep
title: Sweep and pipe
분류: 3D 물체 도구
난이도: 중급
workspace: 공통
keywords: sweep, pipe, tube, rod, path, profile, handle, rail, wire, hose, straw, bent rod, spiral tube, inner diameter, outer diameter, follow path, sweap, swep
commands: sweep, pipe
context: sweep, pipe
order: 19
---

## What

{c:sweep} runs a profile along a path to make bent rods, handles, rails and similar shapes. {c:pipe} needs no profile: it makes a round rod or a hollow tube along lines or edges.

## Steps

1. Draw the closed profile shape and the path line, each as a sketch.
2. Click {m:sweep}.
3. Click the profile area.
4. Click the sketch line or object edge that is the path.
5. Press Enter to make it.
6. For just a round rod or tube, click {m:pipe}, click the path, set {t:opt.pipeDiameter} and {t:opt.pipeInner}, and press Enter.

## Tips

- {t:opt.sweepAnchor} sets which point of the profile goes on the start of the path. {t:opt.anchorCenter} (the default) puts the profile centre on the path start and stands it square to the path, so the profile can be drawn on any plane.
- {t:opt.anchorPoint} puts a point you click on the profile at the path start; {t:opt.anchorKeep} sweeps the profile from where it was drawn.
- Clicking a sketch line as the path takes that line and every line joined end to end with it. Object edges are added or removed with each click.
- With object edges selected before the tool opens, they become the path at once.
- With {t:opt.frenet} on, the profile turns with the way the path bends; use it for twisting paths such as spirals.
- The first {t:opt.pipeDiameter} of {c:pipe} is 4 mm in 3D objects. An {t:opt.pipeInner} of 0 gives a solid rod; larger than 0 gives a tube.
- Opened with a sketch selected, {c:pipe} takes that sketch's lines as the path at once.
- As with [Extrude](help:obj-extrude), select {t:op.new}, {t:op.union}, {t:op.subtract} or {t:op.intersect} as the result. To fix a handle to a cup, select {t:op.union} and the cup.
- See [the pipe example](help:rec-pipe-sweep) and [the cup handle example](help:rec-cup-handle).

## Common mistakes

- A profile with a hole is swept by its outer outline only. For a hollow tube use the {t:opt.pipeInner} of {c:pipe}.
- If the path line has a gap, the path stops at the gap. Join the ends exactly with object snap.
- If {t:err.sweep-failed} appears, round the sharp bends of the path with {c:fillet2d} or make the profile smaller.
- The {t:opt.pipeInner} of {c:pipe} must be smaller than its {t:opt.pipeDiameter}.
- Select the profile before the path. Clicking a line with no profile selected is not taken as the path.
`,dr=`---
id: obj-text
title: Text
분류: 3D 물체 도구
난이도: 기초
workspace: 3D 물체
keywords: text, letter, engrave, emboss, name, lettering, edit text, font, typeface, bold, italic, name tag, nameplate, numbers, initials, words, mtext, txt, letters
commands: text, extrude, editText
howto: text
context: text, editText
order: 21
---

## What

Turns letter outlines into a sketch, then engraves them into an object or raises them from it with an extrude. Use it to put a name or a number on a name tag, a plate or a key ring.

## Steps

1. Click {m:text}.
2. Click a flat face of the object to write on.
3. Set the text, height and font, then Apply.
4. Click {m:extrude}, click the letters, then click the object they sit on.
5. Drag inwards to engrave or outwards to raise them, then Apply (Enter).

## Tips

- The first click selects the plane (a face, a workplane or the ground); the next click is the start of the text. After that, click elsewhere or drag the small square at the start to move the text.
- Changes to the text, {t:text.font}, {t:text.bold}, {t:text.italic}, {t:text.height} and {t:text.angle} in the window show at once. The first {t:text.height} is 10 mm.
- {t:text.pcFonts} loads the fonts installed on this PC (the browser asks for permission the first time). Korean fonts come first in the list.
- {t:text.fontFile} opens a .ttf, .otf, .ttc or .woff font file. An opened font stays in the list until the app is closed.
- {t:text.bold} and {t:text.italic} work even with fonts that have no bold or italic style. Letters a font lacks are drawn with a default font, and the window says so.
- To change finished text, double-click it, or select it and press {c:editText} on the small bar.
- In Extrude, clicking the letters selects all of them at once (the holes inside letters left out). Clicking one letter takes it out or puts it back.
- Text written on a face takes that object as the extrude target: pushing inwards subtracts (engraves) and pulling outwards merges (raises) ([Extrude](help:obj-extrude)).
- Very thin strokes do not 3D-print well. Turn on {t:text.bold} or make the letters bigger.
- For a worked example see [the nameplate example](help:rec-nameplate).

## Common mistakes

- Text cannot be placed on a curved face. Select a flat face or a [workplane](help:obj-workplane).
- If a font cannot be read, {t:text.unreadableNone} is shown. Select another font.
- {c:editText} works only on sketches made with the text tool; with another sketch selected it shows {t:msg.pickText}.
- Pushing the extrude deeper than the object is thick cuts the letters right through. Keep the engraving depth less than the thickness.
- The 3D construction menus have no {c:text}; type \`text\` in the command line to use it there.
`,fr=`---
id: obj-tweak
title: Tweak, Thicken and Fill Faces
분류: 3D 물체 도구
난이도: 중급
workspace: 공통
keywords: tweak, move vertex, move edge, move face, reshape, slant, tilt, add point, add line, imprint, split face, thicken, surface, fill faces, cap, close openings, make solid, offset curved face, twaek
commands: tweak, addPoint, addLine, splitFace, thicken, capSolid, presspull
context: tweak, addPoint, addLine, splitFace, thicken, capSolid
order: 220
---

## What

Moves vertices, edges and faces of a solid with arrows to change its shape, for example sliding one top edge of a box sideways to make a slope. {c:addPoint}, {c:addLine} and {c:splitFace} on the same menu make points and lines to move first, and {c:thicken} and {c:capSolid} turn surfaces without thickness into solids.

## Steps

1. Click {m:tweak}.
2. Click the vertex, edge or face to move.
3. When moving a vertex or an edge, select {t:tweakflat.flat} or {t:tweakflat.bend} under {t:tweakflat.choice} in the window.
4. Drag an arrow, or type the distance in the ΔX, ΔY and ΔZ fields of the window. For a face, the {t:tweak.alongNormal} field works too.
5. Apply (Enter). Clicking empty space also keeps the move and ends the tool.

## Tips

### Tweak

- With {t:tweakflat.flat}, the faces at the moved vertex or edge stay flat and tilt, and the vertices next to it follow. A move that cannot keep them flat shows a red preview and is not applied.
- With {t:tweakflat.bend}, only the moved vertex or edge moves, and bent faces split into triangles.
- A face moved as a whole always stays flat. A curved face only moves square to itself.
- You can also type X, Y and Z distances in the command line, such as \`5 0 0\`. With a face selected, a single number is the distance square to the face.
- Select the object, click it again to select a vertex, edge or face, then click {c:tweak}: the tool starts with it.
- In 3D Building Modeling, a wall or roof with no other steps is moved, when possible, by changing its wall top heights or roof slopes, so it stays a wall or a roof.

### Add Point, Add Line, Split Face

- {m:addPoint}: the point goes in where you click a face or an edge, and the tool ends. Select how it is placed in the window: {t:tweak.atClick}, {t:al.centerMid} or {t:tweak.byDistance}. The new point is a vertex you can move with {c:tweak}.
- {m:addLine}: click a face, then two points. With the second point, a line through both goes in at once and splits the face in two. On a flat face the line runs across the whole face.
- {m:splitFace}: click the faces to split (several are fine) and press Enter. With {t:split.pick}, clicking a sketch line or another object splits them at once; with {t:split.draw}, you draw a line on the face. The face splits as soon as both ends of the line touch its edge or the line closes on its first point.
- One part of a split face can then be moved alone with [Press Pull](help:obj-presspull) or {c:tweak}. Added points and lines can be removed again with [partial delete](help:obj-partial-delete).

### Thicken, Fill Faces

- {m:thicken}: click a surface without thickness, select {t:opt.thickOut}, {t:opt.thickIn} or {t:opt.thickBoth}, and set the {t:opt.thickness}. It starts at 2 mm (0.3 m in 3D Building Modeling); letting go of the arrow applies it.
- {m:capSolid}: closes every opening with faces and makes a closed solid. With an open object selected it fills at once; with nothing selected, click the object to fill.
- {c:addPoint}, {c:addLine}, {c:splitFace}, {c:thicken} and {c:capSolid} are on the {t:level.advanced} menus. See [Basic and Advanced menus](help:start-level).

## Common mistakes

- Objects with curved faces (cylinders, spheres, filleted objects) cannot have their vertices, edges or flat faces moved; the error {t:err.tweak-curved} appears. Use [Press Pull](help:obj-presspull) instead.
- Moving too far makes faces pass through each other and the move is not applied. Move less or the other way.
- Points and lines cannot be added on a face with holes.
- {c:thicken} and {c:capSolid} do not work on a closed solid. They are only for surfaces without thickness and open objects.
`,pr=`---
id: obj-union
title: Merge objects
분류: 3D 물체 도구
난이도: 기초
workspace: 공통
keywords: union, merge, join, combine, boolean, add, combine solids, make one, glue together, unite, merge fails
commands: union, subtract, intersect, group
howto: union
context: union
order: 140
---

## What

A Boolean tool that joins several touching or overlapping solids into one solid. The result stays on the target object as a step; the added objects go into it and are no longer separate.

## Steps

1. Hold Shift and click two objects that touch.
2. Click {m:union} and they become one.
3. With nothing selected: click the base, then the ones to add, and Apply (Enter).

## Tips

- Three or more objects can be merged at once, as long as they touch one another in a chain.
- With two or more objects selected, the small button bar next to them also offers {c:union}, {c:subtract} and {c:group}.
- In the tool window, the × button in the {t:role.target} or {t:role.others} list drops an object selected by mistake. Clicking a selected object again in the view drops it too, and Ctrl+Z lets go of the last select.
- The merged object keeps the target's name. Open its list of steps in the {c:toggleLeft} window to see the merge step; the {t:step.restore} button deletes the step and brings the added objects back.
- Switch on {t:opt.keepTools} in the tool window to keep the added objects as they are. With the [Basic menus](help:start-level) it is folded under {t:ac.advanced}.
- To move objects together without changing their shape, [group](help:obj-group) them instead of merging.

## Common mistakes

- Objects that do not touch cannot be merged. A selected object that does not touch is dropped from the list with a message. Move them together first with [align](help:obj-align) or [move](help:obj-move).
- Surfaces without thickness cannot be merged. Make them solid first with [Thicken or Fill Faces](help:obj-tweak).
- If the result looks wrong or an error appears, see [when merge or subtract fails](help:faq-boolean-fail).
`,mr=`---
id: obj-workplane
title: Workplane
분류: 3D 물체 도구
난이도: 중급
workspace: 공통
keywords: workplane, work plane, construction plane, offset plane, midplane, middle plane, reference plane, plane, sketch in the air, sketch at a height, sketch plane, wp, workplain
commands: workPlane, newSketch, split, sectionView
context: workPlane
order: 22
---

## What

Makes a plane at a set distance from a face or the ground, or midway between two facing faces. Use it to sketch in the air, to draw the upper profiles of a [loft](help:obj-loft), or as the face to cut objects with.

## Steps

1. Click {m:workPlane}.
2. Select {t:opt.wpOffset} or {t:opt.wpMid} in the window.
3. For {t:opt.wpOffset}, click the flat face to start from. Clicking empty space uses the ground.
4. Drag the arrow and let go, or type the distance and press Enter, to make it.
5. For {t:opt.wpMid}, click two parallel faces facing each other. The second click makes the plane midway at once.

## Tips

- Clicking a workplane makes {c:newSketch}, the drawing tools and {c:text} draw on it. With a workplane selected, {c:newSketch} starts a sketch on it at once.
- {c:split} and {c:sectionView} also take a workplane as the cutting face ([Split solid](help:obj-split), [Section view](help:obj-section)).
- With a face or a workplane selected before the tool opens, it becomes the base at once. A plane can also be offset from another workplane.
- The first offset is 10 mm in 3D objects. A negative value offsets to the other side. Typing in the {t:opt.offset} field of the window and pressing Enter makes the plane at once.
- Workplanes are listed by name in the Objects window. Hide or show them with the eye, or select one and press Delete to remove it.
- For a slanted plane use the [three-point plane](help:obj-sketch-plane3).
- When you draw profiles at several heights, one workplane per height makes a [loft](help:obj-loft) easy.

## Common mistakes

- A curved face cannot be the base ({t:msg.flatFaceOnly}).
- {t:opt.wpMid} takes only faces parallel to each other ({t:msg.parallelOnly}).
- {t:opt.wpMid} cannot use empty space (the ground). Click faces of objects or workplanes.
- A workplane is not an object: it is not 3D-printed or merged. It only serves as a base for drawing and cutting.
`,hr="---\nid: rec-bookshelf\ntitle: Bookshelf\n분류: 3D 물체 예제\n난이도: 중급\nworkspace: 3D 물체\nkeywords: bookshelf, bookcase, book shelf, shelf, shelves, cabinet, display case, compartments, furniture, furniture model, miniature, shell, rectangular pattern, array\ncommands: box, shell, rectPattern, union\norder: 50\n---\n\n## What\n\nMakes a bookshelf model 60 mm wide, 20 mm deep and 80 mm tall. A box is opened at the front and hollowed with [Shell](help:obj-shell) to make the frame, and one shelf is repeated upwards with a [rectangular pattern](help:obj-pattern) to give four compartments of equal height.\n\n## Steps\n\n1. Click {m:box} and place it on the floor. In the Properties window set {t:param.x} `60`, {t:param.y} `20`, {t:param.z} `80` and {t:panel.position} X, Y and Z to `0`.\n2. Click {m:shell} and click the front face (the low-Y side, where the books go in). Set {t:opt.thickness} to `2` and click {t:btn.apply}. The inside is now 56 wide, 18 deep and 76 mm high.\n3. Place a box for a shelf and set {t:param.x} `56`, {t:param.y} `18`, {t:param.z} `2` and {t:panel.position} X `0`, Y `-1`, Z `19.5`. The shelf touches both side walls and the back.\n4. With the shelf selected, click {m:rectPattern}. Set {t:opt.count} X `1`, Y `1`, Z `3` and {t:opt.spacing} Z `19.5`, then click {t:btn.apply}. All four compartments are 17.5 mm high.\n5. Press {k:selectAll} to select everything and click {m:union}.\n\n## Tips\n\n- Compartment height: (inside height 76 − shelf thickness 2 × 3 shelves) ÷ 4 compartments = 17.5 mm; shelf spacing = compartment height + shelf thickness = 19.5 mm. You can type a [calculation](help:input-calc) such as `(76-2*3)/4+2` straight into the field.\n- [Subtract](help:obj-subtract) gives the same bookshelf. Into an unhollowed box put a 56 × 19 × 17.5 box at X `0`, Y `-1.5`, Z `2`, repeat it 4 times along Z with {c:rectPattern} (spacing 19.5), then in {c:subtract} click the bookshelf first, click the four boxes and press Enter. The cutters stick out 1 mm past the front, so the cut comes out clean.\n- For an open display case with no back, click both the front and the back face in {c:shell}. Several faces can be left open.\n- For 3D printing, lay it on its back with {c:dropFace}: every shelf becomes a standing wall and it prints easily without supports.\n- To divide the compartments sideways too, make one upright divider (2 × 18 × 76) and repeat it along X with {c:rectPattern}.\n\n## Common mistakes\n\n- Selecting the top face in {c:shell} gives a box open at the top. Select the front face, where the books go in.\n- The default {t:opt.count} X in {c:rectPattern} is 3. Unless X is set to `1`, the shelves also repeat sideways, outside the bookshelf.\n- A shelf that does not touch the walls cannot be merged; a message says the objects do not touch. Make the shelf length equal to the inside width (56).\n- Changing the shell thickness changes the inside size too. If you change it, work out the shelf size and spacing again.\n",gr="---\nid: rec-car\ntitle: Simple car\n분류: 3D 물체 예제\n난이도: 중급\nworkspace: 3D 물체\nkeywords: car, toy car, vehicle, auto, automobile, model car, wheels, four wheels, tyre, tire, car body, mirror, fillet\ncommands: box, fillet, cylinder, mirror3d, union\norder: 100\n---\n\n## What\n\nMakes a toy car 80 mm long, 46 mm wide and 34 mm tall. The body and the roof are boxes with rounded edges; the wheels are one cylinder copied twice with [Mirror](help:obj-mirror) to make four.\n\n## Steps\n\n1. Click {m:box} and place it on the floor. In the Properties window set {t:param.x} `80`, {t:param.y} `36`, {t:param.z} `14` and {t:panel.position} X `0`, Y `0`, Z `8`. This is the body.\n2. Place another box and set {t:param.x} `40`, {t:param.y} `30`, {t:param.z} `12` and {t:panel.position} X `-6`, Y `0`, Z `22`. This is the roof (cabin).\n3. Select the body and click {m:fillet}. In the window click the button that selects every edge of the object, set {t:opt.radius} to `3` and click {t:btn.apply}. Round the roof the same way.\n4. Click {m:cylinder} and place it on the floor. In the Properties window set {t:param.r} `9` and {t:param.h} `6`, type `90` in the X field of {t:panel.rotation} and set {t:panel.position} to X `25`, Y `23`, Z `9`. Stood up this way, the cylinder reaches 6 mm towards −Y from its position and sinks 1 mm into the side of the body.\n5. With the wheel selected, click {m:mirror3d}, select the {t:opt.planeYZ} plane, change {t:opt.mirrorAt} to {t:opt.atOrigin} and click {t:btn.apply}. This makes the rear wheel.\n6. Hold Shift, select both wheels and click {c:mirror3d} again. Select the {t:opt.planeXZ} plane with {t:opt.mirrorAt} at {t:opt.atOrigin} and click {t:btn.apply}: the two wheels on the other side appear.\n7. Press {k:selectAll} to select everything and click {m:union}.\n\n## Tips\n\n- A [rectangular pattern](help:obj-pattern) works instead of Mirror: put the first wheel at X `-25`, Y `-17` and use {c:rectPattern} with {t:opt.count} X and Y `2` and {t:opt.spacing} X `50`, Y `40`.\n- For tyres, make a {c:torus} with {t:param.R} `7` and {t:param.r2} `2.5`, and set {t:panel.rotation} X `90` and {t:panel.position} X `25`, Y `25.5`, Z `9`: the ring sits on the outer face of the wheel. It reaches 0.5 mm below the floor, so after merging use {c:drop} to put the car back on the floor.\n- Windows: overlap a thin box 1 mm into the side of the roof and carve it out with {c:subtract}. Make one side and use {c:mirror3d} for the other.\n- Fillet the body and the roof separately before merging. After merging there are many more edges and they are hard to select.\n- The underside of the body is 8 mm above the floor, so switch on supports in your slicer when printing.\n- To resize, switch on {t:opt.keepRatio} in [Smart Scale](help:obj-smart-scale) and type the length. Combining Mirror and Align is covered in [Quick layout with Align and Mirror](help:rec-trick-align-mirror).\n\n## Common mistakes\n\n- Without the rotation (X 0) the wheel is a disc lying on the floor.\n- With {t:opt.mirrorAt} left at {t:opt.atSide}, the copy appears right next to the original. The body is centred on the origin, so select {t:opt.atOrigin}.\n- A wheel set apart from the body (for example Y `24`) only just touches it or floats, and they do not merge into one piece. Let the wheel sink into the body a little.\n- A fillet radius larger than half the roof height (6 mm) cannot be made.\n",_r="---\nid: rec-chair\ntitle: Chair\n분류: 3D 물체 예제\n난이도: 중급\nworkspace: 3D 물체\nkeywords: chair, stool, seat, backrest, furniture, furniture model, chair legs, four legs, miniature, doll chair, dollhouse\ncommands: box, align, rectPattern, union, fillet\norder: 30\n---\n\n## What\n\nBuilds a 1:10 model of a chair (seat 45 × 45 mm, 90 mm tall) from five boxes. One leg is lined up with the corner of the seat with [Align](help:obj-align), and a [rectangular pattern](help:obj-pattern) makes the other legs in one go.\n\n## Steps\n\n1. Click {m:box} and click the floor to place it. In the Properties window set {t:param.x} `45`, {t:param.y} `45`, {t:param.z} `4` and {t:panel.position} X `0`, Y `0`, Z `41`. This is the seat.\n2. Place another box and set {t:param.x} `4`, {t:param.y} `4`, {t:param.z} `41`. This is a leg.\n3. Hold Shift, select the seat and the leg, and click {m:align}. Click the {t:align2.ref} field in its window and click the seat.\n4. In the window click {t:opt.alignLeft} in the X row and {t:opt.alignFront} in the Y row, then click {t:btn.apply}. The leg moves under the front left corner of the seat. Press Esc to close the window.\n5. Select only the leg and click {m:rectPattern}. Set {t:opt.count} X `2`, Y `2`, Z `1` and {t:opt.spacing} X `41`, Y `41`, then click {t:btn.apply}. 41 is the seat width 45 minus the leg width 4.\n6. Place another box and set {t:param.x} `45`, {t:param.y} `4`, {t:param.z} `45` and {t:panel.position} X `0`, Y `20.5`, Z `45`. This is the backrest standing on the back of the seat.\n7. Press {k:selectAll} to select everything and click {m:union}.\n8. Click {m:fillet} and click the two long top edges of the backrest. Set {t:opt.radius} to `1.5` and click {t:btn.apply}.\n\n## Tips\n\n- [Mirror](help:obj-mirror) makes the four legs too: mirror one leg on the {t:opt.planeYZ} plane with {t:opt.mirrorAt} set to {t:opt.atOrigin}, then select both legs and mirror them on the {t:opt.planeXZ} plane. This works while the seat is centred on the origin.\n- With {t:opt.linkedCopies} on in the {c:rectPattern} window, changing the size of one leg changes all four until they are merged.\n- To tilt the backrest back, select it alone and type a small angle such as `-8` in the X field of {t:panel.rotation}. It tilts about its bottom and still overlaps the seat.\n- You can also build it at real size (a 450 mm seat) and shrink it with {t:opt.factor} `0.1` in [Smart Scale](help:obj-smart-scale).\n- Typing `box 45 45 4` (length, width, height) in the command line makes a box of that size straight away.\n- More on using Align and Mirror together: [Quick layout with Align and Mirror](help:rec-trick-align-mirror). A [table](help:rec-table) is built the same way.\n\n## Common mistakes\n\n- Without a reference object, {c:align} lines things up with the box around both objects, and the seat may move too. Make the seat the reference.\n- The default {t:opt.count} X in {c:rectPattern} is 3. Left as it is, it makes a row of three legs; set X and Y to `2`.\n- Typing the seat width (45) as the spacing puts the legs outside the seat. The spacing is the distance between leg centres.\n- If the leg height and the seat Z do not match, there is a gap and a message says the objects do not touch. Keep the leg height 41 and the seat Z 41 equal.\n",vr=`---
id: rec-chess
title: Chess pieces
분류: 3D 물체 예제
난이도: 심화
workspace: 3D 물체
keywords: chess, chess piece, chessman, pawn, knight, horse, board game, game piece, janggi, revolve, half profile, turned piece
commands: newSketch, polyline, revolve, dropFace, sphere, union, extrude, subtract
order: 90
---

## What

Makes a chess pawn 44 mm tall with a 30 mm base. The base and body are a half profile spun with [Revolve](help:obj-revolve); the head is a sphere merged on top. The tips show how to make a piece that is not round, like a knight, with extrude and subtract.

## Steps

1. Click {m:newSketch} and click an empty spot to start a sketch on the floor.
2. Click {m:polyline} and type \`0,0\`, \`15,0\`, \`15,4\`, \`12,6\`, \`7,24\`, \`10,26\`, \`10,28\`, \`5,30\` and \`0,30\` in the command line, pressing Enter after each. Finally type \`C\` and press Enter to close it back to (0,0). X is the radius, Y the height.
3. Click {c:exitSketch}.
4. Click {m:revolve} and click the profile area (skip this if it is already selected). Then click the vertical line from (0,30) to (0,0) and press Enter.
5. Click {m:dropFace} and click the flat bottom of the pawn (30 mm across) to stand it up. The centre of the bottom lands on the origin.
6. Click {m:sphere}, place it on the floor and in the Properties window set {t:param.r} \`8\` and {t:panel.position} X \`0\`, Y \`0\`, Z \`28\`. The lowest 2 mm of the ball sink into the top of the body.
7. Hold Shift, select the body and the sphere, and click {m:union}.

## Tips

- A sphere's position is its lowest point. At Z 28 the ball fills heights 28 to 44 mm.
- Changing only the points of the profile gives other pieces. Draw a longer body and put a cone or a hemisphere on top for a bishop, queen or king.
- Knight: open a new sketch on the floor and draw the side view of a horse's head (about 22 wide and 30 mm high) as a closed shape with {c:polyline}. {c:extrude} it 10 mm, then stand it up with {c:dropFace} on its flat underside. Revolve just the foot of the pawn profile (Y 0 to 6) as a base, put the head on it and {c:union} them.
- The knight's eye and mane: overlap a 3 mm cylinder or a thin box with the head and carve it out with {c:subtract}. For the same groove on both sides, make one and use {c:mirror3d} for the other.
- Once one piece is done, {c:rectPattern} with {t:opt.count} X \`8\` and {t:opt.spacing} X \`35\` makes all eight pawns at once.
- To fit the squares of a board, switch on {t:opt.keepRatio} in [Smart Scale](help:obj-smart-scale) and type the base diameter.
- Typing points and drawing profiles is also shown in the [revolved vase](help:rec-vase-revolve).

## Common mistakes

- Without \`C\` the last line is missing and there is no closed area. If it ended open, close it with {c:closeOpen}.
- Clicking a slanted line as the axis spins the profile into a strange shape. The axis is the vertical line at X 0.
- The solid lies half under the floor because the profile was drawn on the floor and spun there. {c:dropFace} stands it up.
- With the sphere at Z 30 or higher it only just touches the body or floats, and they do not become one piece. Let the ball sink into the body a little.
`,yr=`---
id: rec-cup-handle
title: Mug with a handle
분류: 3D 물체 예제
난이도: 중급
workspace: 3D 물체
keywords: cup, mug, handle, coffee cup, tea cup, mug with handle, ring, torus, donut, cylinder, hollow, subtract, merge, union
commands: cylinder, torus, union, subtract, fillet
order: 10
---

## What

Makes a mug 80 mm across and 90 mm tall. A standing torus (ring) is merged with a solid cylinder, then an inner cylinder is subtracted to hollow it. Done in this order, the part of the ring that reaches into the mug is cut away too, and only a clean handle is left.

## Steps

1. Click {m:cylinder} and click the floor to place it. In the Properties window set {t:param.r} to \`40\`, {t:param.h} to \`90\` and {t:panel.position} X, Y and Z to \`0\`.
2. Click {m:torus} and place it on the floor. In the Properties window set {t:param.R} to \`25\` and {t:param.r2} to \`5\`.
3. In the same window type \`90\` in the X field of {t:panel.rotation} to stand the ring up, and set {t:panel.position} to X \`40\`, Y \`5\`, Z \`45\`. The centre of the ring is now on the side of the mug, 45 mm up.
4. Hold Shift, click the cylinder and the torus, then click {m:union}.
5. Place another cylinder and set {t:param.r} to \`37\`, {t:param.h} to \`90\` and {t:panel.position} to X \`0\`, Y \`0\`, Z \`3\`. This leaves 3 mm for the wall and the bottom, and the top of this cylinder sticks out 3 mm above the mug.
6. Click {m:subtract}, click the mug, then click the inner cylinder and press Enter.
7. Click {m:fillet} and click the outer and inner edges of the rim. Set {t:opt.radius} to \`1\` and click {t:btn.apply}.

## Tips

- A torus stood up this way moves towards −Y by its tube radius. That is why Y gets the tube radius (5): it centres the ring on the mug. Instead of numbers, [Align](help:obj-align) with the cylinder as the reference and Y centred does the same.
- The finger gap is ring radius − tube radius = 20 mm. Increase {t:param.R} for a larger handle and {t:param.r2} for a thicker one.
- The order matters. If you [shell](help:obj-shell) the cylinder first, the inner half of the torus sticks into the mug. In that case cut the torus with [Split Solid](help:obj-split) on the {t:opt.planeYZ} plane with {t:opt.offset} \`-2\`, keep the outer piece (it reaches into the wall) and merge it.
- Typing \`cylinder 40 90\` or \`torus 25 5\` in the command line makes the shape at that size straight away; only the position is then set in the Properties window.
- For a mug whose wall gets thicker towards the bottom, spin half of the profile with [Revolve](help:obj-revolve), as in the [revolved vase](help:rec-vase-revolve).
- To resize the finished mug in proportion, switch on {t:opt.keepRatio} in [Smart Scale](help:obj-smart-scale) and type the height.
- Merging first and hollowing by subtraction is explained further in [Hollow with Booleans](help:rec-hollow-boolean).

## Common mistakes

- With the inner cylinder at Z \`0\` the mug becomes a tube open at the bottom. Raise Z by the bottom thickness.
- If the top of the inner cylinder is exactly level with the rim, the cut may not come out clean. Let the cutting shape stick out a little past the part you keep.
- Without the rotation the ring lies flat on the floor around the mug. Set {t:panel.rotation} X to \`90\`.
- If the cylinder and the torus do not touch, a message says the object cannot be selected because it does not touch. Check that the torus X equals the mug radius (40).
- Clicking the two objects the other way round in Subtract keeps the inner cylinder instead of the mug. Click the object to keep (the mug) first.
`,br="---\nid: rec-gear\ntitle: Meshing gears\n분류: 3D 물체 예제\n난이도: 심화\nworkspace: 3D 물체\nkeywords: gear, gears, spur gear, meshing gears, gear pair, gear train, rack, rack and pinion, pinion, module, teeth, pitch circle, centre distance, center distance, gear ratio, machine parts, cog, cogwheel\ncommands: gearPart, rack, editPart\norder: 60\n---\n\n## What\n\nUses the spur gear of the {t:group.parts} tab to make a large gear (module 2, 24 teeth) and a small gear (12 teeth) and sets them in mesh (ratio 2:1). The distance between their centres is module × (sum of teeth) ÷ 2 = 2 × 36 ÷ 2 = 36 mm.\n\n## Steps\n\n1. Click {m:gearPart}. In its window select {t:opt.byModule} and set {t:opt.module} `2`, {t:opt.teeth} `24`, {t:opt.faceWidth} `6` and {t:opt.boreDia} `5`. Leave {t:opt.pressureAngle} at 20°. Check that {t:opt.pitchDia} in the table below reads 48 mm.\n2. Click the floor to place it, then set {t:panel.position} in the Properties window to X `0`, Y `0`, Z `0`.\n3. Click {c:gearPart} again, set {t:opt.module} `2`, {t:opt.teeth} `12`, {t:opt.faceWidth} `6` and {t:opt.boreDia} `5`, and click the floor to place it. Its {t:opt.pitchDia} is 24 mm.\n4. In the Properties window of the small gear set {t:panel.position} to X `36`, Y `0`, Z `0`.\n5. In the same window type `15` in the Z field of {t:panel.rotation}. This turns it by half a tooth (360 ÷ 12 ÷ 2 = 15°), so a gap between its teeth faces a tooth of the large gear. Look from above and check that no teeth overlap.\n\n## Tips\n\n- The {t:group.parts} tab is on the [advanced menu](help:start-level). With the basic menu, type `gear` in the command line to open it.\n- The first tooth of a gear points along +X. The large gear already has a tooth facing the small one, so only the small gear is turned, by 180 ÷ its number of teeth. With an odd number of teeth on the small gear, a gap already faces the large gear and no turn is needed.\n- Gears that mesh need the same {t:opt.module} and {t:opt.pressureAngle}. The centre distance is half the sum of the two {t:opt.pitchDia} values.\n- If printed gears bind, open the {t:opt.advanced} part of the window and raise {t:opt.backlash} to 0.1 to 0.2 mm, or move the gears about 0.2 mm further apart.\n- A stand to turn them on: put a box 100 × 56 × 3 at X `13`, Y `0`, Z `-3`, stand two cylinders of radius 2.3 mm (4.6 mm across) and height 12 mm at X `0` and X `36` (Y `0`, Z `-3`), and merge them with the box. They are thinner than the 5 mm bore, so the gears turn. Print the gears and the stand separately.\n- Selecting a gear shows a small bar with {c:editPart}: change the module, teeth or thickness later there.\n- A {m:rack} made with the same {t:opt.module} meshes with these gears. Its length (teeth × 3.14 × module) shows as {t:opt.rackLength} in the window. The rack lies with its teeth pointing up, so to mesh with it a gear is stood up with {t:panel.rotation} X `90`.\n- For a laser cutter or a drawing, select {t:opt.out2d} at the top of the window: the gear outline is placed as a sketch. For the other parts see [Machine parts](help:obj-parts).\n\n## Common mistakes\n\n- When you place the second gear, the window is back at its first values (module 1 and so on). Set the module, thickness and bore again.\n- Gears with different modules have different tooth sizes and do not mesh.\n- If the small gear is not turned, teeth hit teeth head-on and overlap.\n- Working out the centre distance from the outside diameters instead of the pitch circles leaves the gears apart. Use the pitch diameters.\n- If the two gears have different Z values, they miss each other vertically.\n",xr=`---
id: rec-hollow-boolean
title: Hollow objects with Booleans
분류: 3D 물체 예제
난이도: 중급
workspace: 3D 물체
keywords: boolean, booleans, hollow, hollow out, subtract a copy, smaller copy, intersect, intersection, union, merge, subtract, rounded box, container, storage box, dice shape, divider, compartments
commands: subtract, intersect, union, box, sphere, duplicate, smartScale, align, move
order: 170
---

## What

Subtracting a slightly smaller copy from an object leaves it hollow. Unlike [Shell](help:obj-shell), the inside shape and the wall thickness can be set separately, and you can select what stays inside, such as a divider. The example makes a block with rounded corners as the [intersection](help:obj-intersect) of a box and a sphere, then subtracts a reduced copy of it for an open-topped rounded box (60 × 60 × 40 mm, walls and floor about 3 mm).

## Steps

1. In a new document, type \`box 60 60 40\` in the command line. It is placed at the origin.
2. Type \`sphere 40\` in the command line and set its {t:panel.position} in the Properties window to X \`0\`, Y \`0\`, Z \`-20\`. The centre of the sphere is now at the centre of the box (height 20).
3. Click the box, hold Shift and click the sphere, then click {m:intersect}. Only the overlap stays: a block with rounded corners.
4. With the block selected, press {k:duplicate} for a copy and click {m:smartScale}. In its window type \`54\` in the {t:opt.sizeTo} X field, press Tab to go to the Y field and type \`54\`. Leave the height at 40, press Enter to apply, then Esc to close.
5. Click the block, hold Shift and click the copy, then click {m:align}. Click {t:align2.ref} and click the block, then click X {t:opt.align.mid}, Y {t:opt.align.mid} and Z {t:opt.alignBottom}, press Enter, then Esc to close.
6. Click only the copy, click {m:move}, type \`3\` in the {t:opt.moveBy} Z field of its window and press Enter. The copy rises 3 mm and sticks out above the block. Press Esc to close.
7. Click the block, hold Shift and click the copy, then click {m:subtract} and press Enter.

## Tips

- For two compartments, before step 7 make a thin box with \`box 2 60 50\`, set its {t:panel.position} to X \`0\`, Y \`0\`, Z \`0\`, and {c:subtract} it from the copy first. The copy becomes two pieces, and subtracting them from the block leaves a 2 mm divider in the middle.
- Keeping only the overlap with {c:intersect}: a cube (\`box 40 40 40\`) and a sphere of radius 27 with the same centre give a dice shape with rounded corners. Two cylinders of the same radius crossed at a right angle give the rounded solid where both tubes overlap.
- With several cutting objects, either place them so they touch and merge them first with {c:union}, or bundle them with {c:group} so they are selected at once.
- To use the same copy again, for example for a lid, switch on {t:opt.keepTools} in the {c:subtract} window. The cutting object then stays.
- If you selected the kept and cut objects the wrong way round, click {t:opt.swapRoles} in the {c:subtract} window.
- For a simple pot with even walls {c:shell} is quicker. Related tools: [Subtract](help:obj-subtract), [Union](help:obj-union), [Align](help:obj-align), [Smart Scale](help:obj-smart-scale).

## Common mistakes

- Without step 6 the copy fills the block right down to its floor, and the result is a pot with no bottom. Raise the copy so the floor stays and the top sticks out.
- Reducing all three directions with {t:opt.factor} in step 4 also lowers the copy, so it no longer sticks out of the top. The result is hollow but closed, and the inside cannot be seen.
- If the copy does not overlap the block, {c:subtract} says it cannot be selected. Check the alignment from step 5.
- If {c:smartScale} from step 4 is still open, clicking the block in step 5 makes the block the object being resized. Close it with Esc first.
- When a Boolean does not work, see [When Union or Subtract fails](help:faq-boolean-fail).
`,Sr="---\nid: rec-house-model\ntitle: House model\n분류: 3D 물체 예제\n난이도: 중급\nworkspace: 3D 물체\nkeywords: house, house model, home, cottage, hut, building model, gable roof, pitched roof, roof, wedge, chimney, door, window, miniature, printable house\ncommands: box, mirror3d, subtract, wedge, union\norder: 110\n---\n\n## What\n\nMakes a house model at a good size for a 3D printer (64 × 44 × 56 mm). The main block is a box, the gable roof is one wedge joined to its [mirror](help:obj-mirror) copy, the door and windows are 2 mm deep recesses cut with [Subtract](help:obj-subtract), and the chimney is a small box pushed into the roof.\n\n## Steps\n\n1. Click {m:box} and place it on the floor. In the Properties window set {t:param.x} `60`, {t:param.y} `40`, {t:param.z} `35` and {t:panel.position} X, Y and Z to `0`. This is the main block.\n2. Place another box and set {t:param.x} `12`, {t:param.y} `4`, {t:param.z} `20` and {t:panel.position} X `0`, Y `-20`, Z `0`. This is the door, half sunk into the front wall (Y −20).\n3. Place another box and set {t:param.x} `10`, {t:param.y} `4`, {t:param.z} `10` and {t:panel.position} X `18`, Y `-20`, Z `14`. With the window selected, click {m:mirror3d}, select the {t:opt.planeYZ} plane with {t:opt.mirrorAt} at {t:opt.atOrigin} and click {t:btn.apply} for the left window.\n4. Click {m:subtract}, click the main block, then click the door and both windows and press Enter.\n5. Click {m:wedge}, place it on the floor and set {t:param.x} `32`, {t:param.y} `44`, {t:param.z} `20` and {t:panel.position} X `16`, Y `0`, Z `35`. This is the right half of the roof, with its high side in the middle of the house (X 0).\n6. With the wedge selected, click {c:mirror3d} and mirror it on the {t:opt.planeYZ} plane with {t:opt.mirrorAt} at {t:opt.atOrigin}, then click {t:btn.apply} for the left half of the roof.\n7. Place another box and set {t:param.x} `6`, {t:param.y} `6`, {t:param.z} `18` and {t:panel.position} X `-15`, Y `8`, Z `38`. This is the chimney; its lower part is buried in the roof.\n8. Press {k:selectAll} to select everything and click {m:union}.\n\n## Tips\n\n- A wedge is high on its −X side and slopes down towards +X, so at X `16` its high side is in the middle. The roof height is the wedge's {t:param.z}; the eaves are its {t:param.x} minus half the wall width (30), so 2 mm.\n- A {c:prism} with {t:param.n} `3` laid down also makes a roof, but it is an equilateral triangle with a fixed slope. Two wedges let you set the height and the eaves separately.\n- To make windows you can see through, first hollow the block with {c:shell} (open the bottom face, 2 mm thick), then make the window boxes `6` or more in {t:param.y} so they go right through the wall.\n- Square recesses can also be cut with {c:hole}: select {t:mo.holeRect}, click the wall and type {t:mo.holeWidth}, {t:mo.holeLength} and {t:opt.holeDepth} `2`.\n- For many windows, repeat one with {c:rectPattern} and subtract them all at once.\n- To scale the finished house in proportion, switch on {t:opt.keepRatio} in [Smart Scale](help:obj-smart-scale). To put it on land in the building workspace, use [Send to Building](help:more-send-to-building).\n\n## Common mistakes\n\n- A wedge at X `-16` has its high side outwards and the roof becomes a V. Put it at X `16` so the high side is in the middle, and make the other half by mirroring.\n- Merging everything before subtracting glues the door and window boxes onto the house. Subtract first, then merge the roof and chimney.\n- If the door or window boxes do not touch the wall, Subtract says they cannot be selected. Set their Y to the front wall (`-20`).\n- With {t:opt.mirrorAt} left at {t:opt.atSide}, the copy appears next to the original. Select {t:opt.atOrigin}.\n",Cr="---\nid: rec-knot\ntitle: Knot shapes: a chain of linked rings\n분류: 3D 물체 예제\n난이도: 중급\nworkspace: 3D 물체\nkeywords: knot, knots, chain, chain link, linked rings, interlocking rings, trefoil, twisted, rope, braid, torus, donut, ring chain, knotted\ncommands: torus, duplicate, rectPattern, group, helix, pipe\norder: 150\n---\n\n## What\n\nA true knot such as a trefoil needs a closed path that bends through space and passes over itself. Sketches in NukCAD always lie on one plane and there is no tool for space curves (3D splines), so such a knot path cannot be drawn and wrapped with [Sweep or Pipe](help:obj-sweep). Instead, flat rings threaded through each other make a chain that cannot come apart, and twisted rope is made with {c:helix}. The example is a chain of six rings, about 114 mm long, each ring 29 mm across.\n\n## Steps\n\n1. In a new document, type `torus 12 2.5` in the command line (ring radius 12, tube radius 2.5). In the Properties window set {t:panel.position} Z to `12`. This flat ring floats 12 mm above the floor.\n2. With the ring selected, press {k:duplicate} to {c:duplicate} it.\n3. In the copy's Properties window set {t:panel.rotation} X to `90` and {t:panel.position} to X `17`, Y `2.5`, Z `14.5`. The standing ring now passes through the hole of the flat ring.\n4. Turn the view and check that the two rings are threaded and do not touch. The smallest gap is 2 mm.\n5. Click the flat ring, hold Shift and click the standing ring, then click {m:rectPattern}. Set {t:opt.count} X to `3` and {t:opt.spacing} X to `34`, and press Enter.\n6. Press {k:selectAll} to select everything and click {m:group} to make one group.\n\n## Tips\n\n- For a longer chain, raise {t:opt.count} X in step 5. Every 34 mm adds one flat and one standing ring.\n- The rings do not touch, so the print is a real chain whose links move. The flat rings float, so switch on supports in the slicer.\n- Twisted rope: place a {m:helix} with {t:opt.coilRadius} `6`, {t:opt.pitch} `16`, {t:opt.turns} `3`, {t:opt.wireSize} `4`. Put a copy at the same {t:panel.position} and set its {t:panel.rotation} Z to `180`: the two strands wind between each other. Place a `cylinder 5 52` at the same position and {c:union} all three for a twisted column.\n- {c:pipe} takes the edges of an object as its path, not only sketch lines, and some edges bend through space. For example, two cylinders of radius 20 and 12 crossed at a right angle and merged with {c:union} meet in a closed edge bent like a saddle, which can be selected as the path of {c:pipe}. Depending on the edge, the pipe may not be made.\n- To change the size, change every value by the same factor. Twice the size is `torus 24 5`, Z `24` in step 1, X `34`, Y `5`, Z `29` in step 3 and spacing `68` in step 5.\n- Related tools: [Primitives](help:obj-primitives), [Duplicate](help:obj-duplicate), [Pattern](help:obj-pattern), [Machine parts](help:obj-parts).\n\n## Common mistakes\n\n- The rings do not touch, so {c:union} says they are not touching. To move them together, group them with {c:group} as in step 6.\n- If the position in step 3 is not exact, the rings cut into each other or are not threaded. A duplicate appears next to the original, so type all of X, Y and Z again.\n- A figure eight or knot-like line drawn in a sketch and wrapped with {c:pipe} crosses itself on one plane, so the tube runs into itself. It does not become a knot and may not be made at all.\n- {c:rotX} turns a ring about its middle, which moves it away from the values of step 3. Type the angle in {t:panel.rotation} in the Properties window instead.\n",wr=`---
id: rec-nameplate
title: Name tag
분류: 3D 물체 예제
난이도: 기초
workspace: 3D 물체
keywords: nameplate, name plate, name tag, name badge, keychain, key ring, bag tag, emboss, engrave, raised text, lettering, plate, strap hole, text
commands: box, fillet, hole, text, extrude
order: 80
---

## What

Makes a name tag: an 80 × 25 × 3 mm plate with rounded corners, a hole for a strap and a name raised 1 mm. It works as a bag tag or a key ring.

## Steps

1. Click {m:box} and place it on the floor. In the Properties window set {t:param.x} \`80\`, {t:param.y} \`25\`, {t:param.z} \`3\` and {t:panel.position} X, Y and Z to \`0\`.
2. Click {m:fillet} and click the four short upright edges at the corners of the plate. Set {t:opt.radius} to \`5\` and click {t:btn.apply}.
3. Click {m:hole} and click the top face about 7 mm in from the left end, halfway across. Set {t:opt.diameter} \`5\` and {t:opt.holeDepth} \`0\`, then click {t:btn.apply}.
4. Click {m:text}, click the top face of the plate to select the plane, then click once more where the text starts (to the right of the hole).
5. Type the name in the window, select a font, set {t:text.height} to \`12\`, then click {t:btn.apply}.
6. Click {m:extrude}. All the letters are selected and the plate is set as the object to join. Type \`1\` in {t:opt.distance} and click {t:btn.apply}: the letters stand 1 mm proud.

## Tips

- To engrave the letters instead, type a negative value such as \`-0.8\` in {t:opt.distance}. Going inwards turns the result into {t:op.subtract}.
- To place the hole exactly, select {t:tweak.byDistance} in the {c:hole} window and type distances in {t:tweak.fromLeft} and {t:tweak.fromBottom}.
- For a flat strap, select {t:mo.holeRect} in the {c:hole} window and set {t:mo.holeWidth} \`3\`, {t:mo.holeLength} \`12\` and {t:mo.holeCorner} \`1.5\` for a slot. Turn it with {t:mo.turn}.
- After the text is placed, drag the small square at its start to move it. If thin strokes break when printed, switch on {t:text.bold}.
- If the selected font lacks some letters, the window says they are drawn with another font. Selecting a font that has all of them gives an even look.
- To round the top rim too, select the edges around the top face before adding the text and fillet them again with radius \`0.5\`.
- More text options: [Text](help:obj-text); extrusion: [Extrude](help:obj-extrude); hole shapes: [Hole](help:obj-hole).

## Common mistakes

- Clicking a letter that is already selected in {c:extrude} takes just that letter out. If all are selected, type the distance straight away.
- Applying without changing the distance raises the letters by the default 10 mm.
- Editing the text sketch after extruding does not change the letters on the plate. Check the text and its place before extruding.
- Letters running off the plate leave floating pieces. Keep the letter height and start point inside the plate.
- If the short upright edges are hard to click, zoom in. Selecting the top rim instead rounds only the top.
`,Tr=`---
id: rec-pencil-holder
title: Pencil holder with a hole pattern
분류: 3D 물체 예제
난이도: 중급
workspace: 3D 물체
keywords: pencil holder, pen holder, pen cup, pencil cup, pencil pot, brush holder, desk organizer, hole pattern, perforated, circular pattern, polar array, hollow cylinder, shell, pencilholder
commands: circPattern, cylinder, shell, group, subtract
order: 130
---

## What

[Hollows](help:obj-shell) a cylinder into a pot, spreads one small cylinder around it with a [circular pattern](help:obj-pattern), and subtracts them all at once to put a ring of holes in the side. The holder is 80 mm across and 100 mm high with 2.4 mm walls, and has twelve 10 mm holes at a height of 50 mm.

## Steps

1. In a new document, type \`cylinder 40 100\` in the command line (radius 40, height 100). Check that its {t:panel.position} in the Properties window is X \`0\`, Y \`0\`, Z \`0\`.
2. Click {m:shell}, click the top face of the cylinder, type \`2.4\` and press Enter.
3. Type \`cylinder 5 20\` in the command line for a small cylinder. In the Properties window set {t:panel.rotation} Y to \`90\` and {t:panel.position} to X \`25\`, Y \`0\`, Z \`50\`. The small cylinder now lies on its side and passes through the wall of the pot.
4. With the small cylinder selected, click {m:circPattern}, set {t:opt.count} to \`12\` and {t:opt.totalAngle} to \`360\`, check that {t:opt.patternCenter} is {t:opt.atOrigin}, and press Enter.
5. With all twelve small cylinders selected, click {m:group} ({k:group}) to make them one group.
6. Click the pot, hold Shift and click one small cylinder. The whole group is selected with it.
7. Click {m:subtract} and press Enter. All twelve holes are cut at once.

## Tips

- Change the size and count of the holes for other patterns. For example \`cylinder 3 20\` in step 3 and {t:opt.count} \`18\` in step 4 give eighteen 6 mm holes.
- Make a {c:prism} with \`prism 5 20 6\` (radius 5, height 20, 6 sides) instead of the cylinder in step 3 for hexagonal holes.
- For two rows of holes, before step 4 copy the small cylinder with {k:duplicate}, set the copy's {t:panel.position} to X \`25\`, Y \`0\`, Z \`75\`, then select both and make the circular pattern.
- On a curved wall, overlapping cylinders and using [Subtract](help:obj-subtract) as here works better than placing each hole with [Hole](help:obj-hole).
- On a printer with a 0.4 mm nozzle, wall thicknesses that are multiples of 0.4 (1.6, 2.4) let the slicer fill the wall without gaps.
- To divide the inside, stand a 2 mm thick box in the pot so it touches the wall and the floor, and merge it with {c:union}.
- Patterns and groups are explained in [Pattern](help:obj-pattern) and [Group and separate](help:obj-group).

## Common mistakes

- If the cylinder from step 1 is not at the origin, the circular pattern turns around the origin and the holes land in the wrong place. Set its position to \`0\`, or select {t:opt.originPoint} under {t:opt.patternCenter} and click the centre of the pot's bottom circle.
- Without the group from step 5, step 6 selects only one small cylinder.
- With {t:panel.rotation} Y set to \`-90\` the small cylinder lies towards the inside, does not touch the wall, and {c:subtract} says it cannot be selected.
- A small cylinder that does not go all the way through the wall leaves a dent instead of a hole. The wall is 37.6 to 40 mm from the centre, so place the cylinder across 25 to 45 mm as in step 3.
`,Er="---\nid: rec-phone-stand\ntitle: Phone stand\n분류: 3D 물체 예제\n난이도: 중급\nworkspace: 3D 물체\nkeywords: phone stand, phone holder, smartphone stand, mobile stand, phone dock, tablet stand, cradle, charging cable slot, cable notch, side profile, extrude profile, phonestand\ncommands: extrude, newSketch, line, fillet, subtract, rotX, drop\norder: 120\n---\n\n## What\n\nDraws the side profile of a phone stand in a floor sketch and [extrudes](help:obj-extrude) it. A slot in the front ledge lets the charging cable through, and the inner corners that carry the load are rounded with a [fillet](help:obj-fillet) to make them stronger. The finished stand is 70 mm wide, 100 mm deep and 80 mm high, and the back rest leans at about 72° from the floor.\n\n## Steps\n\n1. Click {m:newSketch} and click an empty spot on the floor. A floor sketch starts at the origin.\n2. Click {m:line} and type these points in the command line, pressing Enter after each: `0,0` → `100,0` → `100,20` → `94,20` → `94,6` → `74,6` → `50,80` → `44,80` → `68,6` → `0,6` → `c` (closes back to the first point).\n3. Click {c:exitSketch}.\n4. Click {m:extrude}, click the profile area, type `70` and press Enter. The stand is made lying on its side.\n5. Click {m:fillet}, click the two inner corner edges where the back rest meets the base (at sketch points `74,6` and `68,6`), type `3` and press Enter.\n6. Type `box 26 22 12` in the command line to make a box, then set its {t:panel.position} in the Properties window to X `89`, Y `10`, Z `29`. This box covers the middle of the front ledge and marks the cable slot.\n7. Click the stand, hold Shift and click the box, then click {m:subtract} and press Enter.\n8. With the stand selected, click {m:rotX} to stand it up, then click {m:drop} to put it on the floor.\n\n## Tips\n\n- The 20 mm from `74,6` to `94,6` is the ledge the phone stands on; the front lip rises 14 mm above it. For a thick case, take the same amount off the X of the four back rest points (`74,6`, `50,80`, `44,80`, `68,6`). Taking 4 off each gives a 24 mm ledge.\n- The two top points set the angle of the back rest. Typing `44,80` and `38,80` instead of `50,80` and `44,80` leans it back further. Keep the 6 mm difference in X between them: it is the thickness of the back rest.\n- For a tablet, extrude `120` in step 4 and set the box's Z to `54` in step 6 so the slot stays in the middle.\n- To type the points in the value box next to the cursor instead of the command line, start each with `#`, as in `#100,0`, so they are read as X and Y. See [Coordinates and lengths](help:input-coords) and [Command line](help:input-cmdline).\n- Printed standing up as after step 8, the back rest is only about 18° off vertical, so it usually prints without supports.\n- To round every edge a little, use the button in the {c:fillet} window that selects all edges of the selected object, and type `1`.\n- To save material, extrude `50` in step 4 and set the box's Z to `19` in step 6.\n\n## Common mistakes\n\n- Without the final `c` the line is not closed and there is no area to extrude. If you finished without it, join the two ends with {m:closeOpen} in the sketch.\n- Typing `100,0` without `#` in the value box next to the cursor reads it as length 100 at angle 0, and the shape goes wrong. Use the command line, or add `#`.\n- If a wrong position in step 6 leaves the box away from the stand, {c:subtract} says it cannot be selected. Check the position in the Properties window.\n- {c:rotX} turns 90° each time it is pressed. If the stand ends up upside down, use {k:undo}.\n",Dr=`---
id: rec-pipe-sweep
title: Bent pipe
분류: 3D 물체 예제
난이도: 중급
workspace: 3D 물체
keywords: pipe, tube, bent pipe, elbow, pipe elbow, plumbing, hose, straw, bent rod, path, sweep, swept, follow path
commands: newSketch, polyline, pipe, drop, sweep
order: 70
---

## What

Makes an L-shaped bent tube, 12 mm outside and 8 mm inside, along a path drawn on the floor (50 mm straight, an arc of radius 30 mm, 50 mm straight). Round tubes are made with {c:pipe}; other profiles such as squares or stars with {c:sweep} (see [Sweep and Pipe](help:obj-sweep)).

## Steps

1. Click {m:newSketch} and click an empty spot to start a sketch on the floor.
2. Click {m:polyline} and type \`0,0\` and \`50,0\` in the command line, pressing Enter after each.
3. Type \`A\` in the command line to switch to arcs, then type \`80,30\`. An arc of radius 30 mm is drawn, running on smoothly from the line.
4. Type \`L\` to switch back to lines, type \`80,80\`, then press Enter on the empty command line to finish. Then click {c:exitSketch}.
5. Click {m:pipe} and click the path. The line, arc and line joined end to end are selected as one path.
6. In the window set {t:opt.pipeDiameter} to \`12\` and {t:opt.pipeInner} to \`8\`, then click {t:btn.apply}.
7. The centre line of the tube is at floor level, so half of it is below the floor. Click {m:drop} to lift it onto the floor.

## Tips

- Instead of typing \`A\` and \`L\`, you can switch with {t:opt.segArc} and {t:opt.segLine} in the {c:polyline} window.
- With {t:opt.pipeInner} at \`0\` the result is a solid rod: good for rings, handles and wire shapes.
- For a profile that is not round, use {m:sweep}. Open a new sketch elsewhere on the floor, draw the profile (for example a 10 × 10 mm rectangle), then in {c:sweep} click the profile area, click the path and press Enter. With {t:opt.sweepAnchor} at {t:opt.anchorCenter}, the centre of the profile is moved to the start of the path and stands square to it.
- Edges of objects can be paths too. Click several edges of a box in {c:pipe} and a rod follows them, making a frame.
- Select {t:op.subtract} in the {c:pipe} window and set the {t:role.target} to carve a bent groove or channel into that object.
- Overlap a cylinder of radius 8 mm and thickness 3 mm with an end of the tube and {c:union} them for a flange.
- {c:pipe}, {c:sweep} and {c:spline} are on the [advanced menu](help:start-level). The path can also be drawn with {c:spline} or {c:arc}; the pieces must meet end to end to form one path.

## Common mistakes

- If line ends do not meet, only the part joined to the clicked line becomes the path. Check the coordinates or join the ends with {c:closeOpen}.
- A bend whose radius is smaller than the tube radius (6 mm) makes the tube run into itself and it is not made. Keep bends generously large.
- Straight lines joined at a sharp corner, with no arc, may not give a good tube at the corner. Round corners with an arc.
- The inner diameter must be smaller than the outer one, and the window does not take a larger value. Change the outer diameter (4 mm at first) before typing the inner one.
`,Or=`---
id: rec-shell-lamp
title: Hollow lampshade
분류: 3D 물체 예제
난이도: 중급
workspace: 3D 물체
keywords: lampshade, lamp shade, lamp, light shade, shade, pendant lamp, mood light, dome, hemisphere, hollow, shell, hole pattern, perforated shade, light holes
commands: hemisphere, shell, cylinder, circPattern, group, subtract
order: 160
---

## What

[Hollows](help:obj-shell) a hemisphere into a thin shade, then cuts a bulb socket hole in the top and a ring of small holes around it. With the light on, light shines out through the holes. The shade is 120 mm across and 60 mm high with 2 mm walls, a 41 mm socket hole and twelve 8 mm holes.

## Steps

1. In a new document, type \`hemisphere 60\` in the command line (radius 60). Check that its {t:panel.position} in the Properties window is X \`0\`, Y \`0\`, Z \`0\`.
2. Click {m:shell}, turn the view to look from below, click the flat bottom face of the hemisphere, type \`2\` and press Enter.
3. Type \`cylinder 20.5 80\` in the command line and set its {t:panel.position} to X \`0\`, Y \`0\`, Z \`0\`. This marks the socket hole in the top.
4. Type \`cylinder 4 80\` in the command line and set its {t:panel.position} to X \`40\`, Y \`0\`, Z \`0\`.
5. With the small cylinder selected, click {m:circPattern}, set {t:opt.count} to \`12\` and {t:opt.totalAngle} to \`360\`, check that {t:opt.patternCenter} is {t:opt.atOrigin}, and press Enter.
6. With all twelve small cylinders selected, click {m:group}.
7. Click the shade, hold Shift and click the socket cylinder and then one small cylinder, click {m:subtract} and press Enter.

## Tips

- For a second ring of holes, place a cylinder at X \`52\` as in step 4, repeat steps 5 and 6, and select that group too in step 7. The second ring sits near the rim.
- For another shape, use a {m:cone} instead of the hemisphere. A cone taller than its radius has walls steeper than 45°, which print more easily without supports.
- For a bell or any other profile, draw half of it in a sketch and make it with [Revolve](help:obj-revolve). Draw the profile as a 2 mm thick band from the start and no {c:shell} is needed.
- A {c:prism} or an extruded star sketch instead of the small cylinder gives differently shaped holes.
- The holes are made the same way as in [Pencil holder with a hole pattern](help:rec-pencil-holder); see its tips too.
- Use only LED bulbs, which stay cool, in a plastic shade.

## Common mistakes

- Clicking the round face instead of the flat bottom face in step 2 does not give the shade. Use {k:undo} and select the bottom face.
- Near the top of a hemisphere the inside surface is almost flat, so without supports it sags when printed. Switch on supports in the slicer or use a cone-shaped shade.
- If the hemisphere from step 1 is not at the origin, the socket hole and the ring of holes are off centre. Set its position to \`0\`.
- Selecting one small cylinder that is not grouped in step 7 cuts only one hole. Make the group in step 6 first.
`,kr=`---
id: rec-spiral
title: Spirals: helix, spring and flat spiral
분류: 3D 물체 예제
난이도: 기초
workspace: 3D 물체
keywords: spiral, helix, coil, spring, swirl, twirl, corkscrew, snail, flat spiral, 2d spiral, 3d spiral, coil spring, spiral strip, helical
commands: helix, spring, spiral, offset, extrude
order: 140
---

## What

A spiral that winds up in space is made at once from [machine parts](help:obj-parts) with {c:helix} or {c:spring}: you only type the values. A flat spiral is drawn with {c:spiral} in a sketch, closed into a strip and extruded. The helix in this example is 33 mm across and 43 mm high; the flat spiral is about 86 mm across with a 3 mm wide, 3 mm thick strip.

## Steps

1. Click {m:helix}. In its window select the {t:opt.secCircle} section, type {t:opt.coilRadius} \`15\`, {t:opt.pitch} \`8\`, {t:opt.turns} \`5\`, {t:opt.wireSize} \`3\`, then click the floor to place it.
2. Click {m:spring}, type {t:opt.outerDia} \`20\`, {t:opt.wireDia} \`2\`, {t:opt.freeLength} \`40\`, {t:opt.coils} \`8\`, then click the floor to place it.
3. Click {m:newSketch} and click an empty spot on the floor to start a floor sketch.
4. Click {m:spiral} and type {t:opt.turns} \`4\` and {t:opt.startRadius} \`5\` in its window. Click the centre, keep the cursor outside it, type \`40\` and press Enter.
5. Click {m:offset}, set {t:opt.distance} in its window to \`3\`, click the spiral, then click outside the spiral.
6. Click {m:line}. Join the inner ends of the two spirals and press Enter, then join the outer ends and press Enter. Snap to the end points with the object snap ({k:osnap}) so they join exactly.
7. Click {c:exitSketch}, click {m:extrude}, click the spiral strip, type \`3\` and press Enter.

## Tips

- In step 1 the {t:opt.secSquare} or {t:opt.secTriangle} section gives a square wire or a thread-like spiral. {t:opt.leftHand} winds it the other way.
- With {t:opt.groundEnds} on in the windows of steps 1 and 2, both ends are cut flat so the coil stands on the floor.
- A placed helix or spring can be changed later: select it and use {c:editPart}.
- For a flat spiral of round wire, instead of steps 5 to 7 click {m:pipe}, click the spiral and set {t:opt.pipeDiameter} to \`3\`. The middle of the pipe is at floor height, so lift it with {c:drop}.
- Printed thin, for example a 2 mm wide, 1.2 mm thick strip, the flat spiral stretches into a cone when you pull its centre up.
- The gap from one turn to the next is (outer radius − {t:opt.startRadius}) ÷ {t:opt.turns}. Here (40 − 5) ÷ 4 = 8.75 mm, which leaves plenty of room around the 3 mm strip.
- {c:helix}, {c:spring}, {c:spiral} and {c:pipe} are on the advanced menus ([Basic and advanced menus](help:start-level)). Twisted rope and linked rings are in [Knot shapes](help:rec-knot).

## Common mistakes

- A {t:opt.wireSize} larger than the {t:opt.pitch} would make the turns overlap, so the window brings the section size back below the pitch. For a thicker wire, raise the pitch first.
- A spiral is an open line, so on its own it has no area to extrude. Offset it and join the two ends to close it into a strip.
- A strip wider than the gap between turns runs into the next turn, and the area does not come out right.
- Placing with {t:opt.out2d} selected in the window of step 1 gives a wavy 2D side drawing. Select {t:opt.out3d} for a solid.
`,Ar=`---
id: rec-table
title: Table
분류: 3D 물체 예제
난이도: 기초
workspace: 3D 물체
keywords: table, round table, dining table, desk, table legs, four legs, furniture, furniture model, miniature, circular pattern, polar array
commands: cylinder, fillet, circPattern, union
order: 40
---

## What

Makes a round table model 80 mm across and 50 mm tall. The top sits centred on the origin; one leg is made and a [circular pattern](help:obj-pattern) sets four legs evenly around the origin.

## Steps

1. Click {m:cylinder} and click the floor to place it. In the Properties window set {t:param.r} \`40\`, {t:param.h} \`4\` and {t:panel.position} X \`0\`, Y \`0\`, Z \`46\`. This is the table top.
2. Click {m:fillet} and click the two round edges of the top, upper and lower. Set {t:opt.radius} to \`1\` and click {t:btn.apply}.
3. Place another cylinder and set {t:param.r} \`2.5\`, {t:param.h} \`46\` and {t:panel.position} X \`30\`, Y \`0\`, Z \`0\`. This is a leg.
4. With the leg selected, click {m:circPattern}. Set {t:opt.count} to \`4\` and {t:opt.totalAngle} to \`360\`, leave {t:opt.patternCenter} at {t:opt.atOrigin} and click {t:btn.apply}.
5. Press {k:selectAll} to select everything and click {m:union}.

## Tips

- For another number of legs, change only {t:opt.count} to \`3\` or \`6\`. The legs are spread evenly around the origin.
- For a square table, make the top a box 80 × 50 × 4 (Z 46) and the leg 4 × 4 × 46, align the leg with a corner of the top as for the [chair](help:rec-chair), then use {c:rectPattern} with {t:opt.count} X and Y \`2\` and {t:opt.spacing} X \`76\`, Y \`46\`. The spacing is the top size minus the leg width.
- If the top is not on the origin, change {t:opt.patternCenter} to {t:opt.originPoint} and click the centre of the top.
- For a table on a single central post, stand a cylinder of radius 5 mm on the origin instead of the legs and put a cylinder of radius 20 mm, height 3 mm under it as a foot, then merge them.
- To resize the finished table, switch on {t:opt.keepRatio} in [Smart Scale](help:obj-smart-scale) and type the diameter or the height.

## Common mistakes

- A leg on the origin (X 0, Y 0) makes every copy land in the same place. Put the leg away from the origin (X 30).
- If the leg height (46) and the top's Z (46) differ, there is a gap and they do not merge, or the legs poke through the top.
- Keep the fillet radius under half the top thickness (2 mm). With both edges rounded, the two radii together must stay below the thickness.
`,jr=`---
id: rec-trick-align-mirror
title: Trick: align and mirror for symmetric parts
분류: 3D 물체 예제
난이도: 심화
workspace: 3D 물체
keywords: align, mirror, symmetric, symmetry, mirror copy, both sides, left and right, half model, line up, centre, edge alignment, tray, handles, mirrored part
commands: mirror3d, align, move, shell, union
order: 180
---

## What

For an object whose two sides are the same, build one side and copy the other with {c:mirror3d}: it is quick and exact. Put the parts you attach at the ends or the middle of a reference object with {c:align}, so there are no coordinates to work out. The example is a tray with a handle on each side (140 × 80 × 15 mm with the handles).

## Steps

1. In a new document, type \`box 120 80 15\` in the command line. It is placed at the origin.
2. Click {m:shell}, click the top face, type \`2\` and press Enter. This is the tray.
3. Type \`box 12 50 8\` in the command line for a handle.
4. Click the tray, hold Shift and click the handle, then click {m:align}. Click {t:align2.ref} and click the tray, then click X {t:opt.alignLeft}, Y {t:opt.align.mid} and Z {t:opt.alignTop}, press Enter, then Esc to close.
5. Click only the handle, click {m:move}, type \`-10\` in the {t:opt.moveBy} X field of its window and press Enter. The handle now sticks out of the tray, overlapping its wall by 2 mm. Press Esc to close.
6. With the handle selected, click {m:mirror3d}, select the {t:opt.planeYZ} plane and set {t:opt.mirrorAt} to {t:opt.atOrigin}, then press Enter. The same handle appears on the opposite wall.
7. Press {k:selectAll} to select everything and click {m:union}. It becomes one piece.

## Tips

- Building half an object: with {t:opt.mirrorAt} set to {t:opt.atSide}, the copy appears right against the side of the selected object (the side where X, Y or Z is larger, depending on the plane). Merge it with {c:union} at once for a symmetric object.
- With {t:opt.keepSource} off, no copy is made: the original is flipped. Use this for left and right parts that are mirror images.
- Cut a finger hole in the handle or round its edges with a [fillet](help:obj-fillet) before step 6, and the mirrored copy gets the same shape.
- Mirroring at {t:opt.atOrigin} uses a plane through the origin. If the tray is not at the origin, select it first, click {m:toOrigin} and press Enter.
- In {c:align}, dots in the X, Y and Z axis colours appear around the reference. Hovering a dot previews where things go, and clicking a dot is the same as the buttons in the window.
- To draw symmetrically inside a sketch use {m:mirror2d} ([2D modify](help:obj-sketch-edit)).
- Related tools: [Align](help:obj-align), [Mirror](help:obj-mirror), [Move and rotate](help:obj-move), [House model](help:rec-house-model).

## Common mistakes

- Align X {t:opt.alignLeft} puts the left end of the handle on the left end of the tray. There is no choice for placing it against the outside, so move it further as in step 5.
- With {t:opt.mirrorAt} left at {t:opt.atSide} and only the handle selected, the copy appears right next to the handle. Select {t:opt.atOrigin} to put it on the other side of the tray.
- A handle that does not touch the tray is left out of {c:union}. Check the distance in step 5.
- Without a {t:align2.ref} in step 4, everything lines up with the box around both objects, so the tray may move too.
`,Mr=`---
id: rec-trick-carve
title: Trick: carve and reshape with lines and moves
분류: 3D 물체 예제
난이도: 심화
workspace: 3D 물체
keywords: carve, sculpt, reshape, tweak, move edge, move face, add line, split face, add point, delete face, delete elements, gable roof, house shape, recess, engrave door, ridge
commands: tweak, addLine, splitFace, presspull, deleteSub, addPoint, box
order: 200
---

## What

Put lines on a box to split its faces, then move those lines or push the split pieces to carve the shape. There are no separate parts to make and join, so it is quick. The example puts a ridge line on a box to raise a gable roof, then splits the front face and recesses a door: a small house of 60 × 40 × 50 mm with a 45° roof.

## Steps

1. Type \`box 60 40 30\` in the command line.
2. Click {m:addLine} and click the top face of the box. In the window select {t:tweak.mid} and click the left top edge, then select {t:tweak.mid} again and click the right top edge. The top face is split in two along the middle line.
3. Click {m:tweak} and click the middle line from step 2. Check that {t:tweakflat.choice} is {t:tweakflat.flat}, type \`20\` in the ΔZ field of the window and press Enter. The top becomes a gable roof.
4. Click {m:splitFace}, click the front face (a long wall) and select {t:split.draw} in the window.
5. Click the bottom edge of the front face about 8 mm left of the middle, then type \`@0,25\` → \`@16,0\` → \`@0,-25\` in the command line. When the line reaches the bottom edge the face is split at once; if it does not, press Enter.
6. Click {m:presspull}, click the door piece, type \`-2\` and press Enter. The door is recessed 2 mm.

## Tips

- Windows are made the same way. In {c:splitFace}, go back to the first point to draw a closed square: a piece appears in the middle of the face, and pushing it \`-1\` with {c:presspull} makes a window.
- Typing \`2\` instead of \`-2\` in step 6 makes the door stand out.
- Put a point in the middle of the top face with {m:addPoint}, select {t:tweakflat.bend} in {c:tweak} and move that point up: the faces around it split into triangles and form a pointed roof.
- To remove a wrong recess or a fillet face, click the object, click that face once more to select it and press Delete ({c:deleteSub}). The face goes and the faces around it extend to fill the gap. Deleting a line added with Add Line in the same way joins the split faces again.
- Moving a single vertex with {t:tweakflat.flat} slides the faces without tilting them. To tilt one side only, move an edge or select {t:tweakflat.bend}.
- {c:addLine}, {c:splitFace} and {c:addPoint} are on the advanced menus ([Basic and advanced menus](help:start-level)).
- Related tools: [Tweak](help:obj-tweak), [Partial delete and splitting](help:obj-partial-delete), [Press Pull](help:obj-presspull). A roof built from wedges is in [House model](help:rec-house-model).

## Common mistakes

- Points away from the middle of the edges in step 2 give a skewed ridge, and the roof leans to one side. Select {t:tweak.mid} or snap to the midpoint with the object snap ({k:osnap}).
- Clicking a face instead of the line in step 3 lifts the whole half of the top. Click exactly on the line.
- A preview that turns red is a move that cannot keep the faces flat, and it is not applied. Use a smaller value or select {t:tweakflat.bend}.
- Vertices and edges of objects with curved faces, such as cylinders or filleted objects, cannot be moved. Start such shapes from a box, carve them, and fillet last.
`,Nr="---\nid: rec-trick-fence\ntitle: Trick: fences, railings, combs and grilles with patterns\n분류: 3D 물체 예제\n난이도: 심화\nworkspace: 3D 물체\nkeywords: pattern, array, repeat, fence, picket fence, railing, balusters, comb, grille, grid, vent, bars, rectangular pattern, path pattern, circular pattern, diorama, evenly spaced\ncommands: rectPattern, circPattern, pathPattern, box, chamfer, union, dropFace\norder: 210\n---\n\n## What\n\nLaying out the same part at equal spacing is done in one go with {c:rectPattern}. The spacing is the part's width plus the gap. The example is a fence for a diorama with fifteen pointed pickets and two rails (180 mm long, 50 mm high). Combs, vent grilles and curved railings are made the same way.\n\n## Steps\n\n1. In a new document, type `box 6 3 50` in the command line for a picket.\n2. With the picket selected, click {m:chamfer}, click the two short edges of the top face (left and right), type `2.5` and press Enter. The picket now ends in a point.\n3. With the picket selected, click {m:rectPattern}, set {t:opt.count} X to `15` and {t:opt.spacing} X to `12`, and press Enter.\n4. Type `box 180 2 6` in the command line and set its {t:panel.position} in the Properties window to X `84`, Y `2`, Z `10`. This is the lower rail, overlapping the back of the pickets by 0.5 mm.\n5. With the rail selected, press {k:duplicate} and set the copy's {t:panel.position} to X `84`, Y `2`, Z `34`. This is the upper rail.\n6. Press {k:selectAll} to select everything and click {m:union}. It becomes one piece.\n7. Before printing, click {m:dropFace} and click the front face of a picket to lay the fence down.\n\n## Tips\n\n- Comb: in a new document make the back with `box 100 12 4`, and a tooth with `box 1.6 25 4` at {t:panel.position} X `-48`, Y `-18`, Z `0`. Pattern the tooth with {t:opt.count} X `30` and {t:opt.spacing} X `3`, then {c:union} everything. The gap between teeth is 1.4 mm.\n- Vent grille: on a `box 60 60 3` plate made in a new document, place a `box 50 3 10` cutter at {t:panel.position} X `0`, Y `-21`, Z `-2` and pattern it with {t:opt.count} Y `8` and {t:opt.spacing} Y `6`. Group the eight cutters and {c:subtract} them from the plate for eight 3 mm slots.\n- A round fence or a toothed rim is made with {m:circPattern}.\n- For a curved railing, draw an arc or a spline in a sketch and lay the posts along it with {m:pathPattern}. Put the post at one end of the line and switch on {t:opt.alignPath} so the posts turn with the line.\n- Using X and Y of {t:opt.count} together lays parts out in a grid, for example the feet of a stand or the studs of a building block.\n- With {t:opt.linkedCopies} on in the pattern window, the copies share the original's shape: change one picket and all of them change.\n- Related tools: [Pattern](help:obj-pattern), [Chamfer](help:obj-chamfer), [Union](help:obj-union), [Drop to floor](help:obj-drop).\n\n## Common mistakes\n\n- A spacing smaller than the part's width makes the copies overlap into one solid plate. Make the spacing larger than the part.\n- A rail that does not overlap the pickets is left out of {c:union}. Check the Y value in step 4.\n- Printed standing, the 3 mm thin fence wobbles and falls over easily. Lay it down as in step 7.\n- A chamfer of half the picket width (3 mm) or more removes the whole top face and may not be made. Keep it a little under half.\n",Pr=`---
id: rec-trick-smart-scale
title: Trick: exact sizes with Smart Scale
분류: 3D 물체 예제
난이도: 심화
workspace: 3D 물체
keywords: smart scale, scale, resize, exact size, stretch, stretch one side, proportional, keep proportions, scale factor, card box, card holder, business card box, size, smartscale
commands: smartScale, scale, box, shell, presspull
order: 190
---

## What

{c:smartScale} stretches one side of an object or grows the whole object in proportion, by dragging handles or typing lengths. The example turns a default box into an exact size and then hollows it into a box for transit cards or business cards (outside 94 × 62 × 25 mm, inside 88 × 56 mm, 3 mm walls). The trick is the order: set the size first, hollow it last.

## Steps

1. Click {m:box} and click the floor to place a default box (20 × 20 × 20 mm).
2. With the box selected, click {m:smartScale}. Handles and the three lengths appear around the box.
3. Click the width (X) length, type \`94\` and press Enter. The left face stays and only the right side moves.
4. In the same way set the depth (Y) to \`62\` and the height (Z) to \`25\`. The front face and the bottom stay.
5. Press Enter to apply and Esc to close the tool. A box gets new size values: the Properties window shows 94, 62 and 25.
6. Click {m:shell}, click the top face, type \`3\` and press Enter.

## Tips

- A yellow handle moves that side only, a white handle on a bottom corner moves the two sides meeting there, and the top handle changes the height. Each drag continues from the last; before applying, {k:undo} takes back the last drag only.
- With {t:opt.keepRatio} on, dragging a white handle grows all three directions alike and the bottom stays. Use it to enlarge a figure or a model as a whole.
- A length typed on the box keeps the smaller side (left, front, bottom) in place; a size typed in the {t:opt.sizeTo} X, Y, Z fields of the window changes both sides about the middle.
- \`2\` in {t:opt.factor} doubles the object about its middle. Lift any part that went below the floor with {c:drop}.
- A sphere stretched in one direction becomes an egg-like ellipsoid.
- To scale several objects together by the same factor, select them all and use {m:scale}.
- A triangle mesh imported from STL cannot be stretched one way; it only scales evenly in all three directions.
- Related tools: [Smart Scale](help:obj-smart-scale), [Shell](help:obj-shell), [Press Pull](help:obj-presspull).

## Common mistakes

- Resizing after hollowing scales the wall thickness and the holes too. Set the size first and hollow last, as here.
- To change only the height of a hollowed box, use {m:presspull} on the top face of the rim instead of Smart Scale. The walls keep their thickness.
- An inside that is exactly card size (85.6 × 54 mm) does not take the card. Leave about 1 mm all round for printing tolerance.
- Clicking empty space after a drag applies the size so far and ends the tool. If you did not mean it, use {k:undo}.
`,Fr=`---
id: rec-vase-revolve
title: Revolved vase
분류: 3D 물체 예제
난이도: 중급
workspace: 3D 물체
keywords: vase, flower vase, bottle, jar, pot, flower pot, revolve, lathe, spin, half profile, profile, spline, curve, shell, hollow, revolved
commands: newSketch, polyline, spline, revolve, dropFace, shell
order: 20
---

## What

Makes a vase 120 mm tall and 80 mm across at its widest. You draw the right half of the vase's profile on the floor, spin it once around the vertical axis, stand it up and hollow it out through the opening.

## Steps

1. Click {m:newSketch} and click an empty spot to start a sketch on the floor.
2. Click {m:polyline} and type \`30,0\`, \`0,0\`, \`0,120\` and \`25,120\` in the command line, pressing Enter after each. Press Enter once more on the empty command line to finish. The line from (0,0) to (0,120) will be the axis.
3. Click {m:spline} and select {t:curves.splineThrough} in its window. Type \`30,0\`, \`40,45\`, \`20,95\` and \`25,120\` in the command line one after another, then press Enter on the empty command line. Both ends of the curve are on the ends of the polyline, so the profile is closed.
4. Click {c:exitSketch}.
5. Click {m:revolve} and click the profile area (skip this if it is already coloured as selected). Then click the vertical line from (0,0) to (0,120) and press Enter: the 360° solid is made.
6. The vase lies on the floor, so click {m:dropFace} and click its flat bottom (60 mm across) to stand it up.
7. Click {m:shell} and click the top face (the opening). Set {t:opt.thickness} to \`2\` and click {t:btn.apply}.

## Tips

- Instead of typing coordinates, turn on grid snap ({k:snap}) and click grid points 5 mm apart. Snap the ends of the curve to the polyline ends with object snap ({k:osnap}). See [Coordinates and lengths](help:input-coords).
- You do not need to draw the axis line: the {t:opt.axisY} button in the {c:revolve} window uses the sketch's Y axis (the vertical line at X 0).
- Set {t:opt.angle} to \`180\` in the {c:revolve} window for a half vase that hangs on a wall.
- Shape the curve with [Edit Curve](help:obj-curve-edit) before revolving. Changing the sketch afterwards does not change a vase that is already made.
- A {t:opt.segArc} piece of {c:polyline} can draw a rounded profile instead of a spline. The spline is on the [advanced menu](help:start-level).
- To use it as a plant pot, after hollowing click the inside bottom with the [Hole](help:obj-hole) tool and drill a 6 mm drain hole with {t:opt.holeDepth} \`0\`.
- To resize it, switch on {t:opt.keepRatio} in [Smart Scale](help:obj-smart-scale) and type the height. The wall thickness scales too, so settle the size before shelling when you shrink it a lot.

## Common mistakes

- If the curve does not end exactly on the polyline ends, there is no closed area and Revolve cannot select a profile. Check the coordinates or close the gap with {c:closeOpen}.
- Draw the profile on one side of the axis only (X greater than 0). A curve that crosses the axis does not revolve properly.
- Clicking the curve as the axis shows a message that only a line or a construction line can be the axis. Click the straight vertical line at X 0.
- Clicking an area that is already selected lets it go. If it is coloured, click the axis straight away.
- Clicking the bottom face in Shell gives a tube open at the bottom. Select the top face, the opening.
`,Ir="---\nid: input-calc\ntitle: Calculations in number fields\n분류: 스냅과 입력\n난이도: 중급\nworkspace: 공통\nkeywords: formula, formulas, calculate, calculation, calculations, expression, arithmetic, excel, excel functions, calculator, square root, sqrt, round, power, trigonometry, sine, cosine, radians, degrees, units, mixed units, add, subtract, multiply, divide, hypotenuse, number field, maths, math\ncommands: toggleCommand\nhowto: calc\norder: 90\n---\n\n## What\n\nFields for numbers and sizes take calculations instead of plain numbers. Starting with `=` also gives functions with the same names as in Excel.\n\n## Steps\n\n1. Type a calculation straight into any number or size field (Properties, tool windows, the command line, the value box by the cursor, Preferences): `10/3`, `(20+5)*2`, `2^3`. Multiply with `*` or `×`, divide with `/` or `÷`.\n2. Units can be mixed: `3m+20cm`. A number without a unit is in the field's own unit (mm or m).\n3. Start with `=` for Excel functions: `=ROUND(10/3,2)`, `=SQRT(2)*10`, `=SUM(10,20,30)`, `=MAX(5,8)`, `=IF(5>3,1,0)`, `=PI()`.\n4. Trigonometry works in radians as in Excel: `=SIN(RADIANS(30))`. For degrees directly: `=SIND(30)`, `=COSD(60)`, `=TAND(45)`.\n5. While typing, the result shows under the field (`= 3.333`). A wrong formula shows why in red and the value stays as it was.\n6. Points in the command line take calculations in each part: `@10/3,5*2` or `=@SQRT(200)<45`. With no tool open the command line is a calculator.\n\n## Tips\n\n- Functions: `SUM`, `PRODUCT`, `AVERAGE`, `MIN`, `MAX`, `ROUND`, `ROUNDUP`, `ROUNDDOWN`, `TRUNC`, `INT`, `ABS`, `SIGN`, `SQRT`, `POWER`, `MOD`, `PI`, `SIN`, `COS`, `TAN`, `ASIN`, `ACOS`, `ATAN`, `ATAN2`, `RADIANS`, `DEGREES`, `SIND`, `COSD`, `TAND`, `HYPOT`, `EXP`, `LN`, `LOG10`, `LOG`, `CEILING`, `FLOOR`, `IF`, `AND`, `OR`, `NOT`, `TRUE`, `FALSE`. Upper and lower case both work.\n- `=HYPOT(30,40)` gives 50, the diagonal of a 30 by 40 rectangle.\n- Formulas starting with `=` also take comparisons (`=`, `<>`, `<`, `>`, `<=`, `>=`) and percentages (`50%` is 0.5).\n- The units you can add are `mm`, `cm`, `m`, `in` and `\"` (inches). `°` or `deg` may be added but change nothing.\n- Powers are worked out as in school maths: `-2^2` is -4, and `2^3^2` is 2 to the 9th power.\n- With no tool open, type `10/3` in the command line and press Enter to get the answer to six decimals, such as `= 3.333333`.\n- For typing points see [typing coordinates and lengths](help:input-coords); for the command line see [command line](help:input-cmdline).\n\n## Common mistakes\n\n- Multiplying with `x`. Use `*` or `×`.\n- A function without `=` (`SQRT(2)`). Functions only work in a formula starting with `=`.\n- Brackets left out, as in `=PI`. Write `=PI()`.\n- `=SIN(30)` does not give 0.5, because it works in radians. Use `=SIND(30)`.\n- `3,5` in a single number field is read as 3.5, and `1,000` as 1000. Use `.` for the decimal point. In a point in the command line, the comma separates X and Y.\n",Lr=`---
id: input-cmdline
title: Command line and autocomplete
분류: 스냅과 입력
난이도: 기초
workspace: 공통
keywords: command line, commandline, command, commands, command name, type a command, autocomplete, auto complete, suggestions, alias, short names, repeat, repeat last command, history, calculator, AutoCAD commands, key map, hide command line, command line missing, typed command
commands: toggleCommand, help
context: toggleCommand
order: 70
---

## What

The command line is where you type a command name to open a tool. While a tool is open it takes values such as points, lengths and options, and with no tool open it also works as a calculator.

## Steps

1. Click the command line. With no tool open, pressing Space works too.
2. Type the first letters of a command name (for example \`bo\`). A list of the commands starting with them appears.
3. Select one with ↑ ↓ and press Enter to open that tool. Tab only fills in the name.
4. Some tools are made at once when values follow the name (for example \`box 30 20 10\`).
5. While a tool is open, type a point or a value in the command line and press Enter (for example \`@10,5\` or \`20\`).
6. With no tool open, Enter opens the last tool you used again.

## Tips

- In the AutoCAD key map (the first setting), letters typed anywhere go into the command line. For example, type \`l\` and press Enter to open {c:line}.
- While the list shows, Space after a command name runs it too.
- Text typed with the Korean input on is read by the keys pressed (\`ㅠㅐㅌ\` becomes \`box\`).
- On an empty command line, ↑ brings back the lines typed before, one by one.
- With no tool open, type a calculation such as \`10/3\` and press Enter to get the answer, such as \`= 3.333333\`. See [calculations](help:input-calc).
- Tools not shown on the Basic menus open when their name is typed, with a note that they are on the Advanced menus.
- A mistyped name gets a suggestion of similar command names.
- Every command's name and key is in {t:hd.shortcuts} of the {c:help} window ({k:help}).
- Show or hide the command line with {k:toggleCommand}, or with {t:set.commandLine} in {c:settings} → {t:set.options}.
- In the Fusion 360 and Blender key maps some letter keys open tools at once. Click the command line before typing a command name there. See [keyboard shortcuts](help:faq-shortcuts).
- For the ways to type points, see [typing coordinates and lengths](help:input-coords).

## Common mistakes

- No list of commands appears while a tool is open. Type the whole name and press Enter to open the new tool. Letters the open tool uses itself (such as \`c\` in {c:line}) are read as that tool's options.
- A 3D construction tool such as a wall does not open when typed in 3D objects. Switch to 3D construction first.
- Esc in the command line: with no tool open it clears the text and leaves the command line. With a tool open, the first Esc clears only the typed text and the next one ends the tool.
- Numbers go into the fields next to the cursor instead of the command line. With {t:dyn.setting} on, numbers typed while placing a point go there. Click the command line first to type there.
- The command line is gone. Press {k:toggleCommand} to bring it back.
`,Rr=`---
id: input-coords
title: Typing coordinates and lengths
분류: 스냅과 입력
난이도: 중급
workspace: 공통
keywords: coordinates, coordinate input, typed point, type a point, absolute, relative, polar, length, angle, distance, exact length, exact position, at sign, @, dynamic input, value fields, lock, direct distance entry, F12, Tab
commands: line, toggleCommand
order: 80
---

## What

Instead of clicking a point, you can type coordinates or a length to put it exactly where it belongs. You can type in the command line, or in the value fields that float next to the cursor while you place points ({t:dyn.setting}).

## Steps

1. Click {m:line}.
2. Click the floor to select the plane to draw on.
3. Click the command line, type \`0,0\` and press Enter. The first point goes on the origin of the floor.
4. Type \`@50,0\` and press Enter. The next point goes 50 along X and 0 along Y from the previous point.
5. Type \`@30<90\` and press Enter. The point goes 30 away from the previous point at 90° (along the Y axis).
6. Point the cursor in the direction to draw, type just \`20\` and press Enter. The point goes 20 from the previous point toward the cursor.
7. Press Esc: the lines drawn stay and the tool ends.

## Tips

- Values are in mm in 3D objects and in m in 3D construction. A unit can be added, such as \`3cm\`, and each value may be a calculation (\`@10/3,5*2\`). See [calculations](help:input-calc).
- On a sketch on a face, \`x,y\` is measured from the middle of that face.
- {t:dyn.setting}: while you place points, value fields float next to the cursor. The first point has {t:dyn.x} and {t:dyn.y}, a next point {t:dyn.len} and {t:dyn.ang}. Some tools have their own fields, such as {t:dyn.w} and {t:dyn.h} for a rectangle.
- A number key goes into the first field next to the cursor and locks that value (a lock shows). Tab moves to the next field, and Enter places the point. Values not locked follow the cursor.
- In a field next to the cursor, type \`#\` first to enter this point as {t:dyn.x} and {t:dyn.y} (from the plane's origin), or \`@\` first for {t:dyn.len} and {t:dyn.ang}.
- A comma or \`<\` in a field next to the cursor makes one point, read exactly as the command line reads it. \`@30,40\` is the point 30 along X and 40 along Y from the previous point, whether typed in the command line or in a field. While the fields are {t:dyn.len} and {t:dyn.ang}, plain \`30,40\` also measures from the previous point.
- To type next points as X and Y from the start, select {t:dyn.abs} under {t:dyn.coords} in {c:settings} → {t:set.units}. The first setting is {t:dyn.rel} (length and angle).
- F12 switches {t:dyn.setting} on and off; it is the same switch as the box of that name in {c:settings} → {t:set.units}.
- On a dotted path of [snap tracking](help:snap-track), a single number goes that far along the path.
- With [ortho](help:snap-ortho) on, a length typed on its own draws exactly across or up.

## Common mistakes

- The first click of the line tool places no point. When no sketch is being edited, the first click only selects the plane to draw on.
- Numbers go into the fields next to the cursor instead of the command line. With {t:dyn.setting} on, number keys typed while placing a point go there. Click the command line first to type there.
- \`50,90\` is typed to give a length and an angle. A comma reads X and Y, so the point goes 50 along X and 90 along Y from the previous point. Type the length \`50\`, press Tab and type \`90\` in the next field, or type \`@50<90\`.
- Without \`@\`, the command line measures from the origin. Add \`@\` to measure from the previous point. With no previous point, such as for the first point, \`@\` also measures from the origin.
- Angles are confusing. The X axis direction of the plane is 0° and the Y axis direction is 90°.

## Example

| Typed in the command line | Point |
|---|---|
| \`30,20\` | 30 along X and 20 along Y from the origin of the plane |
| \`@30,20\` | 30 along X and 20 along Y from the previous point |
| \`@50<30\` | 50 from the previous point at 30° |
| \`50<30\` | 50 from the origin of the plane at 30° |
| \`50\` | 50 from the previous point toward the cursor |
| \`@3cm,2cm\` | relative coordinates with units (the same as \`@30,20\` in 3D objects) |
`,zr=`---
id: snap-from
title: From and Mid between 2 points
분류: 스냅과 입력
난이도: 중급
workspace: 공통
keywords: from, from point, base point, offset point, offset from base point, distance from a point, mid between 2 points, mid between two points, midpoint between, middle of two points, m2p, point input aid, snap menu
commands: osnapWin, osnap
order: 40
---

## What

{t:osnap.aid.from} is a point input aid: you select a base point, then type how far from it the next point is. {t:osnap.aid.m2p} takes two clicked points and uses the middle between them as the next point. Both are selected under {t:osnap.aidHead} in the object snap menu while a tool that selects points is open.

## Steps

### From

1. Open a tool that selects points, for example {m:line}.
2. Hold Ctrl and right-click in the 3D view, then select {t:osnap.aid.from}.
3. Click the base point (for example a corner of a box).
4. Type the offset, such as \`@10,5\`, and press Enter. The point 10 along X and 5 along Y from the base point becomes the tool's point.

### Mid between 2 points

1. With a tool that selects points open, select {t:osnap.aid.m2p} in the same menu.
2. Click the first point.
3. Click the second point. The middle between the two becomes the tool's point.

## Tips

- Both aids are also on the ▾ of the {c:osnap} button in the status bar and on {m:osnapWin}.
- Type the offset in the fields next to the cursor or in the command line. \`10,5\` without \`@\` is read as an offset from the base point too.
- A single number gives the point that far from the base point, toward the cursor.
- In the command line a length and an angle work as well, such as \`@20<45\`.
- In tools that place points in free 3D space (not on a sketch), three values such as \`@10,5,3\` give X, Y and Z. A {t:dyn.z} field appears next to the cursor as well.
- {t:osnap.aid.m2p} finds the middle in space even when the two corners are at different heights. When drawing on a sketch, that point is moved straight onto the sketch plane.
- Use object snaps to hit the base point and the two points exactly.
- A point made with an aid is used once. Esc stops only the aid; the tool stays open.
- When a point only needs to line up, use a [temporary track point](help:snap-temp-track) or [snap tracking](help:snap-track).

## Common mistakes

- The {t:osnap.aidHead} items are greyed out in the menu. Open a tool that selects points first.
- After the base point, a second click puts the point right where you clicked. Type the offset instead.
- The offset goes the wrong way. It is measured along the X and Y axes of the work plane; type a negative value, such as \`@-10,5\`, for the other side.
- Opening another tool cancels the selected aid.
`,Br=`---
id: snap-grid
title: Grid and grid snap
분류: 스냅과 입력
난이도: 기초
workspace: 공통
keywords: grid, grid snap, snap, snapping, step, snap step, move step, angle step, angle snap, increment, grid lines, grid size, grid square, floor grid, thick lines, hide grid, show grid, grid auto, snap auto, snap off, round numbers, reference plane, pick face, height, site floor, level floor, draw on a roof, F7, F9
commands: snap, grid, settings
context: grid, snap
order: 50
---

## What

{c:grid} ({k:grid}) sets how the grid lines show: {t:ag.show.auto}, {t:ag.show.always} or {t:ag.show.off}. {c:snap} ({k:snap}) keeps points and moves on the grid, with three states: {t:ux.snap.auto}, {t:ux.snap.on} and {t:ux.snap.off}. The move step ({t:grid.linear}) and the turning step ({t:grid.angular}) are selected in the status bar.

## Steps

1. Each click on the {c:snap} button in the status bar, or each press of {k:snap}, goes {t:ux.snap.auto} → {t:ux.snap.on} → {t:ux.snap.off}. The button shows the state.
2. With {t:ux.snap.auto}, points keep to the grid square seen on screen. When zooming changes the grid square, the step changes with it.
3. To keep to a fixed step, select it in the {t:grid.linear} list of the status bar. Selecting a step sets {t:ux.snap.on}.
4. Select the angle to keep to when turning in the {t:grid.angular} list.
5. Each press of {k:grid}, or of the grid button on the view bar, switches the grid lines {t:ag.show.auto} → {t:ag.show.always} → {t:ag.show.off}.

## Tips

### Grid snap and steps

| State | Keeps to |
|---|---|
| {t:ux.snap.auto} | {t:ux.snap.tip.auto} |
| {t:ux.snap.on} | {t:ux.snap.tip.on} |
| {t:ux.snap.off} | {t:ux.snap.tip.off} |

- The {t:grid.linear} list: {t:grid.off}, {t:ux.step.auto}, then 0.1, 0.5, 1, 5 or 10 mm in 3D Object, and 0.01, 0.05, 0.1, 0.5, 1, 2, 5 or 10 m in 3D Building. {t:grid.off} switches grid snap off; the list's {t:ux.step.auto} is the same as grid snap {t:ux.snap.auto}.
- The {t:grid.angular} list: {t:grid.off}, {t:ux.step.auto}, 1°, 5°, 15°, 45° or 90° (5° at first). {t:ux.step.auto} turns in 15° steps, and in 5° steps when you drag far from the handle.
- Grid snap starts at {t:ux.snap.auto}.
- With {t:ux.snap.auto}, nothing keeps to the grid while the grid is hidden. A nearby object snap comes first: [object snaps](help:snap-osnap).
- Hold Shift while dragging a move or rotate handle to move freely, off the steps.
- With no tool open, select an object and press the arrow keys to move it by a tenth of the {t:grid.linear} step. Holding a key speeds it up; add Shift for 10 times as far; Page Up and Page Down move it up and down.
- The command line sets them too: \`snap auto\`, \`snap on\`, \`snap off\`, \`snap 5\` (move step 5, and on), \`snap angle 15\`, \`snap angle off\`. Only steps from the list work; a unit such as \`1cm\` is fine.
- The {c:snapSettings} window and the Ctrl+right click menu also switch {c:snap} on and off.
- {t:otrack.dir.polar} of [snap tracking](help:snap-track) uses the {t:grid.angular} step as well.

### Showing the grid

- {t:ag.show.auto}: in 3D Object the grid shows while you draw or edit (a sketch being edited, a tool open, something selected) and while nothing has been made yet. In 3D Building it shows while you draw or edit, with a site selected or as the work scope, and in {c:planView}.
- At first 3D Object uses {t:ag.show.always} and 3D Building {t:ag.show.auto}; each kind of work keeps its own choice.
- The same choice is {t:set.showGrid} under {c:settings} → {t:set.units}. The same tab sets {t:set.gridCell} (with {t:set.gridAuto} it follows the zoom) and {t:set.gridMajor}.
- In 3D Building the grid is drawn faintly over the ground and the parts, so hills never hide it, and covers only the site or building outline you work on.

### The reference plane in 3D Building

- 3D Building tools such as walls, slabs, columns, ceilings, roofs, stairs, railings, placing objects and filling an area draw on the {t:ag.plane} selected at the top of the tool window. The grid lies on that plane too.

| {t:ag.plane} | Height drawn at |
|---|---|
| {t:ag.kind.level} | {t:ag.kindTip.level} |
| {t:ag.kind.face} | {t:ag.kindTip.face} |
| {t:ag.kind.height} | {t:ag.kindTip.height} |
| {t:ag.kind.land} | {t:ag.kindTip.land} |

- With {t:ag.kind.face}, clicking a sloped face uses only the height of the point clicked. A part drawn at another height belongs to the level that height falls in.
- Esc goes back to {t:ag.kind.level}. The selected plane stays while one drawing tool follows another, and goes back to {t:ag.kind.level} when the tool ends.

## Common mistakes

- The grid squares and the move step differ. With {t:ux.snap.on}, points keep to the {t:grid.linear} step. To keep to the squares you see, switch to {t:ux.snap.auto}.
- Hiding the grid lines with {k:grid} also stops grid snap in the {t:ux.snap.auto} state. In the {t:ux.snap.on} state the {t:grid.linear} step is kept even without grid lines.
- Values do not come out round. Check that grid snap is not {t:ux.snap.off} and that Shift was not held while dragging. Typing the value is the surest way.
- Turning still jumps in steps after pressing {k:snap}. {k:snap} changes only the {t:grid.linear} snap. To turn freely, select {t:grid.off} under {t:grid.angular}.
- In 3D Building a wall is drawn at an odd height. Check that the {t:ag.plane} in the tool window is {t:ag.kind.level}.
- A step that is not in the list, such as \`snap 3\`, is refused. Select one of the listed steps.
`,Vr=`---
id: snap-ortho
title: Ortho
분류: 스냅과 입력
난이도: 기초
workspace: 공통
keywords: ortho, ortho mode, orthogonal, horizontal, vertical, straight lines, square lines, right angle, 90 degrees, across or up, crooked lines, F8
commands: ortho, otrack
context: ortho
order: 60
---

## What

With {c:ortho} ({k:ortho}) on, the next point only goes where it lines up across or up with the previous point. It helps to draw straight lines when selecting points one after another, as with lines, polylines and walls.

## Steps

1. Press {k:ortho}, or click the {t:grid.ortho} button in the status bar, to switch it on.
2. Open a tool that selects points one after another, for example {m:line}.
3. Click the first point.
4. Move the cursor. The next point stays on the line across or up, whichever way the cursor has moved more.
5. Click, or type just a length and press Enter.
6. Press {k:ortho} again to switch it off.

## Tips

- Across and up are the two axes of the plane you draw on: X and Y on the floor, the sketch's own two axes on a sketch on a face.
- A length typed on its own goes exactly across or up, toward the cursor.
- Typed coordinates such as \`@30,40\` or \`@50<30\` are used as typed. See [typing coordinates and lengths](help:input-coords).
- The opposite corner of a rectangle is not kept in line.
- To lock one direction for a moment, use the arrow keys while selecting points: → X, ← Y, ↑ Z, ↓ to let go. This works in 3D space too. See [snap tracking](help:snap-track).
- To line up with a point other than the previous one, use [snap tracking](help:snap-track) or a [temporary track point](help:snap-temp-track).

## Common mistakes

- Lines still come out diagonal. With the cursor on a snap point, the object snap comes first. Click where no snap mark shows, or switch object snaps off for a moment with {k:osnap}.
- The first point is not kept in line. Ortho needs a previous point to line up with.
- The switch is hard to find. It is the {t:grid.ortho} button in the status bar, next to {c:otrack}.
`,Hr=`---
id: snap-osnap
title: Object snaps
분류: 스냅과 입력
난이도: 기초
workspace: 공통
keywords: object snap, object snaps, osnap, snap, snapping, endpoint, end point, midpoint, intersection, extension, center, centre, quadrant, tangent, perpendicular, parallel, node, nearest, apparent intersection, deferred perpendicular, deferred tangent, snap settings, running object snaps, next point only, snap override, snap menu, ctrl right click, hidden point, back corner, Alt, F3, dsettings
commands: osnap, osnapWin, snapSettings, otrack
context: osnap, osnapWin, snapSettings
order: 10
---

## What

Object snaps pull the cursor onto exact points such as the end of a line, the middle of an edge or the centre of a circle. They work in every tool that selects points, on the lines of every sketch shown and on the edges of objects. Some snaps run all the time ({t:osnap.keepHead}); one can also be selected for the next point only ({t:osnap.onceHead}).

## Steps

1. Check that the {t:grid.osnap} F3 ▾ button in the status bar at the bottom is on. If it is off, click its main part or press {k:osnap}.
2. Open a tool that selects points, for example {m:line}.
3. Move the cursor near a corner or a line. A mark appears on the point it will snap to, and the snap's name (for example {t:osnap.end}) shows next to the cursor.
4. Click while the mark shows: the point lands exactly there.
5. To use another snap for the next point only, hold Ctrl and right-click in the 3D view, then select one under {t:osnap.onceHead}.
6. To change the running snaps, click the ▾ at the right of the {c:osnap} button in the status bar and switch the {t:osnap.keepShort} box of each row on or off.

## Tips

- The same menu opens from three places: Ctrl+right click in the 3D view, the ▾ of the {c:osnap} button in the status bar, and {m:osnapWin}. {m:osnapWin} opens a small window named {t:osnapWin.title} under the menu button. Only the ▾ menu has the {t:osnap.keepShort} boxes.
- When a snap for the next point or a point aid is selected, its mark shows before the ▾ in the status bar.
- In the shaded views, snap points hidden behind a face are skipped. Hold Alt to snap to hidden points too; {t:ux.osnap.hidden} then shows next to the cursor. In edge-only and see-through views every point is taken.
- A snap selected under {t:osnap.onceHead} is used for the next point only; after it the running snaps apply again. Selecting the same one again, or opening another tool, cancels it.
- A snap selected before any tool is open is used for the first point of the next tool you open.
- {t:osnap.none} makes the next point snap to nothing. Use it to place a point freely where many snap points are close together.
- The {c:snapSettings} window sets {t:osnap.use}, the {t:osnap.keepHead} ({t:osnap.all} / {t:osnap.clear}), {c:otrack} and {c:snap} in one place. It opens with a right click on the {c:osnap} or {c:otrack} button of the status bar, with {t:osnap.settings} at the bottom of the menu, or by typing \`ds\` in the command line. Changes apply at once and are kept.
- {t:osnap.extension}: rest the cursor on the end of a line for a moment; a small + appears, and you can select a point on the dotted extension of that line.
- {t:osnap.parallel}: after the first point, rest the cursor on another line; a dotted path parallel to it appears.
- {t:osnap.perpendicular} and {t:osnap.tangent} are measured from the previous point. Selected for a first point they become {t:osnap.deferPerp} or {t:osnap.deferTan}, and the point is worked out once the next point is known.
- When two lines at different heights only cross on screen, the {t:osnap.apparent} is taken on the front one.
- At first every snap except {t:osnap.tangent} and {t:osnap.parallel} is on.
- The {t:set.objectSnap} box in {c:settings} → {t:set.units} is the same switch as {k:osnap}.
- Object snaps come before [grid snap](help:snap-grid) and [ortho](help:snap-ortho).
- To line up with snap points by resting on them, see [snap tracking](help:snap-track); for a point at an offset from a base point, see [From](help:snap-from).

## Common mistakes

- The cursor keeps snapping to the wrong point. Zoom in, select just the snap you need under {t:osnap.onceHead}, or switch snaps off for a moment with {k:osnap}.
- A snap was selected for the next point, then a spot without such a point was clicked: no point is placed. Click on a matching line or face.
- The {t:osnap.aidHead} items of the menu are greyed out. Open a tool that selects points first.
- While using a tool, a right click without Ctrl works as Enter and finishes the tool's step. Dragging with the right button turns the view.
- Points of hidden objects and hidden sketches are not snapped to.
- A corner at the back of an object is not snapped to: shaded views skip points hidden behind faces. Hold Alt while moving the cursor there, or turn the view so the point can be seen.

## Example

| Snap | Where it snaps |
|---|---|
| {t:osnap.end} | {t:osnap.ex.end} |
| {t:osnap.mid} | {t:osnap.ex.mid} |
| {t:osnap.intersection} | {t:osnap.ex.intersection} |
| {t:osnap.extension} | {t:osnap.ex.extension} |
| {t:osnap.center} | {t:osnap.ex.center} |
| {t:osnap.quadrant} | {t:osnap.ex.quadrant} |
| {t:osnap.tangent} | {t:osnap.ex.tangent} |
| {t:osnap.perpendicular} | {t:osnap.ex.perpendicular} |
| {t:osnap.parallel} | {t:osnap.ex.parallel} |
| {t:osnap.node} | {t:osnap.ex.node} |
| {t:osnap.nearest} | {t:osnap.ex.nearest} |
`,Ur=`---
id: snap-temp-track
title: Temporary track point
분류: 스냅과 입력
난이도: 중급
workspace: 공통
keywords: temporary track point, temp track point, track point, tracking point, tracking, tt, line up, in line, across or up, point input aid, snap menu
commands: osnapWin, otrack, osnap
order: 30
---

## What

A temporary track point is a point input aid: you click one point, and the next point goes where it lines up across or up with that point. Use it to follow a single point for a moment; it works with {c:otrack} off as well.

## Steps

1. Open a tool that selects points, for example {m:line}.
2. Hold Ctrl and right-click in the 3D view, then select {t:osnap.aid.track}.
3. Click the point to track from (for example the centre of a circle). Use object snaps to hit it exactly.
4. Move the cursor to where it lines up across or up with that point. A dotted line appears and the point sticks to it.
5. Click on the line. Or type a distance and press Enter: the point goes that far from the tracked point, toward the cursor.

## Tips

- {t:osnap.aid.track} is also on the ▾ of the {c:osnap} button in the status bar and on {m:osnapWin}.
- Type the distance in the field next to the cursor or in the command line. With the cursor nearer the line across, it goes across; nearer the line up, it goes up. A negative distance goes the other way.
- On a sketch or a work plane the point lines up along that plane's two axes. In free 3D space with no work plane, dotted X, Y and Z paths through the selected point appear.
- When the cursor is near both lines, the point snaps to the tracked point itself.
- A point made with a temporary track point is used once. Select it from the menu again for the next one.
- Esc stops only the temporary track point; the tool stays open.
- To keep following several points, [snap tracking](help:snap-track) is easier. For a point at an exact offset, use [From](help:snap-from).

## Common mistakes

- {t:osnap.aid.track} is greyed out in the menu. Open a tool that selects points first.
- The first click does not place the tool's point. It only sets the point to track from; the tool's point comes from the next click or typed value.
- Clicking far away from the line places the point right there. Click while the dotted line shows.
- Opening another tool cancels the temporary track point.
`,Wr=`---
id: snap-track
title: Snap tracking
분류: 스냅과 입력
난이도: 중급
workspace: 공통
keywords: snap tracking, object snap tracking, otrack, autotrack, tracking, tracking path, dotted line, dashed line, line up, align points, same height, X axis, Y axis, Z axis, polar tracking, polar angles, direction lock, shift lock, arrow keys, tracking directions, F11
commands: otrack, osnap, snapSettings
context: otrack
order: 20
---

## What

Snap tracking selects up a snap point (an endpoint, midpoint, centre and so on) when you rest the cursor on it, then lets you place the next point along coloured dotted paths lined up with it. Use it to put a point level with, or in line with, a corner of another object.

## Steps

1. Check that both the {c:otrack} button ({k:otrack}) and the {c:osnap} button ({k:osnap}) in the status bar are on.
2. Open a tool that selects points, for example {m:line}.
3. Rest the cursor on the snap point to line up with. A small + appears on it.
4. Move the cursor to where it lines up with that point. A dotted path appears, and the name of its direction (for example {t:otrack.axis.x}) shows next to the cursor.
5. Click on the dotted path. Or type a distance and press Enter: the point goes that far along the path from the point you selected up.
6. To let go of a selected-up point, rest the cursor on its + again.

## Tips

- The colour of a path shows its direction: the X axis is red, Y green and Z blue; other directions (the lines of a sloped face, polar angles and so on) are purple.
- On a sketch or a tool's work plane only the two axes of that plane are offered. In free 3D space with no work plane you get X, Y and Z paths, and a point on a sloped roof or a turned wall also gets the face's own directions.
- Where paths from two points meet, the point is taken as an {t:osnap.intersection}. With {t:osnap.intersection} on, a path meeting a line gives a point too.
- Up to 7 points can be selected up; selecting up more lets go of the oldest. Selected-up points stay until the tool ends.
- Hold Shift on a path to lock onto it; release Shift to let go.
- While selecting points, the arrow keys →, ← and ↑ lock the direction from the previous point to X, Y and Z. On a work plane → and ← are the plane's two axes. Press the same key again, or ↓, to let go. This lock works with {c:otrack} off as well.
- Type the distance in the {t:dyn.dist} field next to the cursor or in the command line. Calculations work too.
- In the {c:snapSettings} window, select {t:otrack.dir.polar} under {t:otrack.dirHead} to add a direction at every {t:grid.angular} step (every 45° when the step is smaller than 15°). The first setting is {t:otrack.dir.ortho}.
- A right click on the {c:otrack} button in the status bar opens the {c:snapSettings} window.
- To follow just one point for a moment, use a [temporary track point](help:snap-temp-track). To keep only across or up from the previous point, [ortho](help:snap-ortho) is simpler.

## Common mistakes

- No + appears. Either {c:osnap} is off, or a snap is selected under {t:osnap.onceHead}. Snap tracking works while object snaps are on and no one-time snap is selected.
- The cursor passed over the snap point too quickly to select it up. Wait a moment after the snap mark shows.
- Looking straight down, no Z path appears. Paths pointing almost straight at the viewer are not offered; turn the view a little.
- Points selected up on hidden objects or hidden sketches are not used.
`,Gr=`---
id: site-area-table
title: Area table
분류: 땅과 대지
난이도: 기초
workspace: 3D 건설
keywords: area table, site area, building area, gross floor area, floor area, floor area ratio, FAR, coverage, building coverage ratio, area calculation, earthwork, areas
commands: areaTable, siteArea, buildingOutline
context: areaTable
order: 60
---

## What

A table showing site area, building area, floor area by floor, gross floor area, coverage and floor area ratio in one window. The values are worked out again as soon as the model changes.

## Steps

1. Click {m:areaTable}: the area table window opens on the right.
2. With several sites, select the site to show in the list at the top, or {t:at.all}.
3. Check {t:at.coverage} and {t:at.far}; change the level outlines or the building outline if needed.
4. Click {m:areaTable} again to close the window.

## Tips

- The values are worked out as follows.

| Value | How |
|---|---|
| Site area | Area of the drawn site (the whole land without sites) |
| Building area | For each building, the area of its levels above ground put together (piloti included, basements and courtyards left out), measured inside its building outline (without level outlines, the largest floor; without that, the building outline's area) |
| Floor area by floor | Area inside the closed wall centre lines of the level (slab area without closed walls) |
| Gross floor area | Sum of all floor areas, basements included |
| Floor area for the FAR | Sum of the floor areas above ground |
| Coverage | Building area ÷ site area × 100 % |
| Floor area ratio | Floor area for the FAR ÷ site area × 100 % |

- Next to each floor area, a small note says what it was measured from, such as {t:at.byWalls} or {t:at.bySlabs}. The building area shows {t:at.byLevels}, {t:at.largestFloor} or {t:at.byOutline}: [Building outline](help:build-outline).
- With several buildings on one site, each building gets its own floor areas and a {t:at.subtotal}.
- {t:at.all} shows the coverage and floor area ratio of each site on one line, then {t:at.allSum}. Buildings on no site are shown apart as {t:at.outside} and are not in the totals.
- At first the table shows the site of the [work scope](help:site-scope).
- When the ground has been [graded](help:site-grade), or roads, water bodies or tunnel portals cut and filled it, the earthwork of them all together (cut and fill) is shown under the table.
- Example: a 10 × 12 m building outline on a 20 × 25 m site (500 m²), with three floors of 120 m², gives a building area of 120 m², 24 % coverage, 360 m² gross floor area and a floor area ratio of 72 %.

## Common mistakes

- A floor shows 0 m². That level has neither closed walls nor slabs. Close the walls back to the first point or lay a slab.
- The coverage is higher than expected. The building area is all levels above ground put together, so an upper floor that sticks out counts too. Basements do not: [Building outline](help:build-outline).
- A ratio shows "—". That group has no site area (outside the sites), so no ratio is worked out.
- The table is a study calculation. Check the real rules for counting areas (balconies, pilotis and so on) separately.
`,Kr=`---
id: site-area
title: Site, building outline and area table
분류: 땅과 대지
난이도: 기초
workspace: 3D 건설
keywords: site area, coverage, floor area ratio, area table, site, site boundary, plot, lot, gross floor area, FAR, building coverage ratio, land boundary, areas
commands: siteArea, buildingOutline, areaTable, landEdit
howto: siteArea
context: siteArea
order: 30
---

## What

The process of drawing the boundary of the land a building goes on (the site) inside the construction area, drawing a building outline inside it to make the building, and checking site area, building area, gross floor area, coverage and floor area ratio in the area table. Work in this order: site → building outline → area table.

## Steps

1. Click {m:siteArea} and draw the land boundary as a rectangle or points.
2. With {m:buildingOutline}, draw the ground the building takes up inside the site. When it is drawn, a building is made there.
3. Click {m:areaTable} for site area, building area, floor area, coverage and floor area ratio.

## Tips

- Select {t:opt.areaRect} or {t:opt.areaPoly} in the tool window. A {t:opt.areaRect} takes two corner clicks; a {t:opt.areaPoly} takes point after point, closed by clicking the first point again or pressing Enter.
- The second corner can be typed as width and depth, for example \`@20,25\`.
- Opening {c:siteArea} turns the view to look straight down. Points snap to the corners of other sites and of the land, and to the grid while {c:snap} ({k:snap}) is on.
- Several sites can be drawn, each with its own border colour. Sites drawn overlapping or touching are joined into one.
- In the {c:siteArea} tool, clicking inside a site selects it, and the window offers {c:pathEdit}, {t:area.redraw} and {c:landEdit}. Without a tool, clicking a site shows a small bar beside it. Reshaping is explained in [Edit site](help:site-land-edit).
- With sites drawn, a building outline is drawn inside the selected site. It can also go on the whole land without a site. See [Building outline](help:build-outline).
- What each value of the area table means is explained in [area table](help:site-area-table). The building area is worked out from the levels by itself.
- On land with heights, level the site to one height with [grading](help:site-grade) after drawing it.
- To be guided through one building from start to finish, click the {c:buildFlow} button at the start of the menu tab row.

## Common mistakes

- The building outline is not drawn because it reaches outside the site. Another corner of the rectangle lies outside. Draw it again inside the site.
- The polygon does not close. Click the first point again or press Enter. It needs at least three points.
- Clicking inside a site selects it instead of starting a new one. Start a new site outside the existing ones.
- An area drawn too small is not made.
`,qr=`---
id: site-grade
title: Grading and earthwork
분류: 땅과 대지
난이도: 중급
workspace: 3D 건설
keywords: grade, flatten, level the ground, earthwork, cut and fill, terrain, grading, level, pad, platform, slope, embankment, cut slope, fill slope, mean height, balance cut and fill, soil volume
commands: grade, earthwork, siteMap, contours
howto: grade
context: grade, earthwork
order: 70
---

## What

The tool that levels a site to one height. Inside the site the ground becomes flat at the height you set; around it, cut and fill slopes join it to the natural ground. It also works out how much soil is cut and filled (earthwork).

## Steps

1. Click {m:grade} and select the site in the {t:so.target} list.
2. Type a height or click {t:grade.average} or {t:grade.balance}.
3. Press Enter: the site is levelled and slopes join it to the ground around.
4. Click {t:cmd.earthwork} in the same window to see how much soil is cut and filled (m³).
5. Have a height file? In the {m:siteMap} window select {t:hs.file} under {t:hs.title}.

## Tips

- In the window, the list that selects the site is called {t:so.target}. A site can also be selected by clicking it in the view; without sites, select {t:grade.whole}. Sites graded already are marked {t:grade.done}.
- To level only the ground under one building, select its outline in the {t:so.target} list, such as Building A outline. That grading follows the building outline when it is reshaped or the building moves to another site, When the building is deleted you are asked whether its grading goes too; kept, it stays in the list marked as having no site.
- {t:grade.height} is measured from the 0 m datum and can go from 50 m below the lowest natural ground to 50 m above the highest. It starts at the mean height of the ground under the site.
- {t:grade.average} sets the mean height of the ground now inside the site; {t:grade.balance} finds the height where the soil cut and the soil filled are about the same. Use {t:grade.balance} to avoid carting soil away or bringing it in.
- The ground changes in the view while you try values; it goes into the document only with Enter (or when the next tool opens). Each time is one undo step.
- Civil structures over the graded ground (bridges, tunnels, dams, retaining walls, levees, drainage, roads that follow the terrain) are fitted to the new ground by themselves in the same undo step. See [Grading and civil works](help:civil-grading).
- Under {t:grade.more} the height can be typed as {t:grade.sea}, and {t:grade.cut} and {t:grade.fill} are set as n in \`1 : n\` (0 to 5, by default 1 and 1.5). 1 : 1.5 spreads 1.5 m sideways per 1 m of height; 0 is an upright wall (a retaining wall).
- The earthwork shows {t:grade.cutV}, {t:grade.fillV} and {t:grade.net} in m³. With grading on the land, it also shows under the [area table](help:site-area-table).
- To take the grading away, select the site and click {t:grade.remove}.
- Grading under a building already built opens the {t:lf.followTitle} window when its ground floor is not at the new height. {t:lf.followBtn} moves the ground floor to it and follows the grading from then on; {t:lf.followKeep} leaves the building as it is.
- The grading height can be selected when setting a building's ground floor height. To hold a height step with a wall instead of a slope, build a [retaining wall](help:civil-retaining).
- [Contours](help:site-terrain-view) show the slopes of graded ground clearly.

## Common mistakes

- The window only says there is no terrain. Flat land (no height data) cannot be graded. Use the {c:siteMap} button in the window to select the area on the map or load a height file.
- The site was deleted but its grading stayed. If you chose to keep the grading when deleting the site, it stays in the list marked ‘no site’. Select it to change it or click {t:grade.remove}. The basin of a lake or pond that was made a plain solid with {t:cfit.unlink} shows the same way.
- A cut slope of 0 cut the ground straight down. 0 means an upright wall, as a retaining wall. Values around 1 to 2 are usual.
- Esc left the new height out. Enter puts it in.
`,Jr=`---
id: site-land-edit
title: Edit a site
분류: 땅과 대지
난이도: 중급
workspace: 3D 건설
keywords: edit site, reshape site, site corners, drag corners, rename site, delete site, redraw site, curved site, join sites, site shape, land edit
commands: landEdit, siteArea, pathEdit
context: landEdit
order: 40
---

## What

The tool that reshapes a site you drew by dragging its corners, and edits its curves, draws it again, renames or deletes it. While editing, a grid with its origin at the site's centre lies on the site.

## Steps

1. Click {m:landEdit}, or click a site and then {c:landEdit} in its side bar or right-click menu.
2. With several sites, click the one to edit.
3. Drag the square handles on the corners to reshape it.
4. To rename or delete it, click {t:lb.rename} or {t:lb.delete} in the small bar beside the site.
5. Click {t:land.done} in the bar at the top to finish.

## Tips

- Editing turns the view to look straight down; the site shows a pale blue ground with a grid. The grid starts at the site's centre, and the view turns about that point.
- While a corner is dragged, the lengths of its two sides and the new area are shown. Corners snap to the corners of other sites and of the land, and to object snaps ({k:osnap}).
- Esc during a drag puts the corner back; Esc when nothing is dragged ends the editing. Each drag is one undo step.
- In the bar beside the site, {t:lb.corners} shows or hides the corner handles, {c:pathEdit} moves points and curve handles and adds or removes points, and {t:area.redraw} draws this site again from the start, then returns to editing it.
- Clicking another site while editing edits that one. The list in the top bar switches too.
- Without a tool, one click on a site only selects it. Double-clicking an empty part of a site moves the [work scope](help:site-scope) to that site.
- Building outlines are edited the same way: click the empty ground inside one, then {c:areaEdit} in its side bar. A building outline cannot be changed to reach outside its site or over another building: [Building outline](help:build-outline).
- Opening a building tool (walls, slabs and so on) or a civil tool ends the site editing by itself and turns the view back to 3D.

## Common mistakes

- The corner stops moving. Shapes whose sides cross, and shapes that are too small, cannot be made, so it stops at the last good place.
- A site with curves has no corner handles. Move its points and handles with {c:pathEdit}.
- Two sites became one after a drag. Overlapping sites are joined; Ctrl+Z separates them again. When both are graded, you are asked which height stays.
- Deleting a site deletes the water level filling it. With buildings on it, or with grading, you are asked first. The buildings stay where they are on the whole land, and the next steps of [Construction progress](help:arch-flow) do not wait. With its grading deleted, a building already built counts as left on the ground as it is.
`,Yr=`---
id: site-map
title: Set the site location
분류: 땅과 대지
난이도: 기초
workspace: 3D 건설
keywords: map, location, address, aerial, region, site location, choose site, construction area, aerial photo, satellite, V-World, vworld, API key, heights, terrain, height file, elevation model, DEM, province, city, search
commands: siteMap, terrainView, grade
howto: siteMap
context: siteMap
order: 10
---

## What

The window where you select the land everything in 3D Building stands on, as a rectangle on a map. The aerial photo and the ground heights (terrain) of that rectangle come into the document; sites, buildings and civil structures are then made on it.

## Steps

1. Click {m:siteMap}.
2. Search for an address or place, or select {t:site.region0} → {t:site.region1} → {t:site.region2}.
3. Drag the map, then drag a rectangle over the land.
4. Click {t:site.confirm} to bring in the aerial photo and the ground heights.
5. Aerial photos need a free VWorld key: {t:site.openSettings}.

## Tips

- Entering 3D Building with a document that has no land yet opens this window by itself. Closing it starts on flat land of 50 × 50 m without a map.
- Clicking a search result moves the map there. Each choice in the area lists moves the map to that area and fills the next list. The {t:site.region3} list only appears where there are villages.
- Drag to move the map; zoom with the mouse wheel or the {t:site.zoomIn} and {t:site.zoomOut} buttons.
- After drawing the rectangle, drag a corner or side to resize it and the inside to move it. Click {t:site.redraw} to start over.
- Typing lengths in the {t:opt.sideW} and {t:opt.sideH} fields on the right resizes the rectangle. A side must be at least 5 m; the longest side is 2000 m by default. For larger land, raise {t:set.siteMax} in Preferences (the limit depends on the computer's memory).
- Under {t:hs.title}, {t:hs.auto} gets open height data (about 30 m apart) with the photo. For more precise data (an .asc grid or a list of x y z points), select {t:hs.file} and set {t:tf.coords}. To change only the heights and keep the area, click {t:hs.applyNow}.
- {t:tv.depth} sets how deep the soil block (a cross-section of earth layers) is drawn under the ground (1 to 200 m, 10 m by default).
- Without a key or an internet connection, use {t:site.other}: {t:site.file} makes the land from a photo you took or may use plus its real width, {t:site.plain} from a width and a height only.
- Without a key, the {t:site.openSettings} button on the map opens the map part of Preferences, which lists three steps to get a key. Enter the key in the {t:set.vworldKey} field.
- The aerial photo is stored in the document as one picture, so the file opens offline later. When heights arrive for the first time, the {c:terrainView} window opens too. See [terrain view and contours](help:site-terrain-view).
- Selecting the site location again later keeps everything already built in its place on the earth, and keeps [grading](help:site-grade) and the water level. Civil structures such as roads, bridges and tunnels are fitted to the new ground by themselves.

## Common mistakes

- {t:site.confirm} cannot be clicked. Draw a rectangle on the map first; V-World must also be connected. If it is not, click {t:site.retry} or use {t:site.other}.
- A notice says objects are outside the new area. {t:site.grow} enlarges the area until they all fit; {t:site.keep} uses the area as drawn.
- The photo arrived but the ground is flat. The heights did not arrive. Open this window and select the area again, or load a height file under {t:hs.title}.
- The height file does not overlap the land. Usually {t:tf.coords} does not match the file. Select another coordinate system or {t:tf.centre}.
- Screenshots of Google Maps may not be used. Use V-World or photos you took yourself.
`,Xr=`---
id: site-scope
title: Work scope
분류: 땅과 대지
난이도: 중급
workspace: 3D 건설
keywords: work scope, scope, path, current level, working level, choose site, choose building, choose level, status bar, fade, turn off fading, all levels, double-click, Esc, scope up, cannot select, other building, joined buildings, where am I working
commands: levelPanel, buildFlow, buildingEasy, buildingNew
order: 80
---

## What

The work scope is which site, which building and which level you are working on. The path in the status bar, such as Site 1 › Building A › Level 3, always shows it. New parts such as walls, slabs and columns go on the level of this scope, and while a building tool is open, parts outside the scope cannot be selected.

## Steps

1. Check the site, building and level you are working on in the path on the status bar.
2. Click the site step of the path to open the list of sites, and select the site to work on.
3. Click the building step to see the buildings of that site, and select the building to work on.
4. Click the level step to see the levels of that building with their floor heights, and select the level to work on.
5. Check where the tool works in the first line of its window, then work.

## Tips

- The same path is at the top of the {c:buildFlow} window. The list of the {c:levelPanel} window highlights the same scope. Clicking a row there only selects; double-clicking it moves the scope to it: [Building names, colours and the project tree](help:build-names-tree).
- Next to the path on the status bar are the current level's floor height and storey height, {t:ab.allLevels} and the {t:bo.fade} switch. The levels button in front of the path brings the {c:levelPanel} window to the front.
- With the {t:bo.fade} switch on (it starts on), the upper levels and what lies outside the work scope are faded only while a building tool such as wall, slab or door is in use. Just looking, everything is clear; switched off, nothing is faded even while a tool is in use.
- With {t:ab.allLevels} on, box selection reaches every level of the building, not only the current one.
- With several buildings on one site, the building step lists each building on its own line. Buildings whose outlines touch are selected one by one too: [Joined buildings](help:build-shared-levels).
- Selecting a place without a building shows {t:so.noBuilding} in the path, and the {c:buildFlow} window offers {c:buildingEasy} and {c:buildingNew}. Selecting in the path never opens a dialog.
- Tools used on one level (walls, slabs, columns, doors, windows) select and snap only to parts on the scope's level; roofs and stairs to parts on any level of the scope's buildings. Civil structures such as roads and dams can be snapped to but never selected by building tools.
- The first line of a site or civil tool's window names the site it works on. Changing {t:so.target} in the [grading](help:site-grade), water or [building outline](help:build-outline) tool moves the work scope too.
- Double-clicking a part of another building moves the scope to that building and level, with a notice.
- A click only selects; it never moves the scope. Double-click an empty part of a site to move the scope to that site, or a building, or the empty ground inside its building outline, to move it to that building. Reshape the outline with {c:areaEdit}: [Building outline](help:build-outline).
- With no tool and nothing selected, Esc moves the scope up one level at a time (level and building → site → land). Without a site, that step is skipped.
- When the scope changes, the selected building parts outside the new scope are let go. Things on the land, such as roads, stay selected.
- When the scope's level is hidden or faded, an eye mark appears next to the path. Click it to show the level plainly again.

## Common mistakes

- Walls or columns cannot be clicked. They belong to another building or level, outside the scope. Select that level in the path or double-click the part.
- A wall appeared on the wrong level. New parts go on the scope's level. Check the level step of the path before drawing.
- The view is too faded to see while a tool is in use. Switch {t:bo.fade} off in the status bar.
- After an undo, a notice says the scope moved. Its level or building was gone, so it moved to the nearest one. Select again in the path if needed.
`,Zr=`---
id: site-terrain-view
title: Terrain view, contours and drop on ground
분류: 땅과 대지
난이도: 중급
workspace: 3D 건설
keywords: terrain view, terrain, ground view, see-through ground, opacity, aerial, map, cadastral, lot lines, zoning, soil block, earth layers, contours, contour lines, contour interval, drop on ground, put on the ground, sea level, height above sea level
commands: terrainView, contours, dropGround
context: terrainView, contours, dropGround
order: 20
---

## What

Settings for how the ground (terrain) is shown. {c:terrainView} sets the ground's opacity, the map laid on it and the depth of the soil block; {c:contours} draws lines of equal height. {c:dropGround} moves selected objects down or up to the ground where they stand.

## Steps

1. Click the {c:terrainView} button in the row of view buttons beside the view cube (on the Basic menus, type \`terrainview\` in the command line).
2. Lower {t:tv.opacity} to see through the ground to basements and footings.
3. Under {t:tv.picture}, select {t:tv.aerial}, {t:tv.base} or {t:tv.cadastral}.
4. Click {m:contours} to turn the contour lines on, and set {t:ct.interval} and {t:ct.color} in the window that opens beside it.
5. To set objects on the ground, select them and click {m:dropGround}.

## Tips

- When the land gets heights for the first time, the {c:terrainView} window opens by itself. The {c:terrainView} button in the view row shows on the Advanced menus; the {c:contours} button shows on both levels.
- {t:tv.opacity} at 0 % hides the ground.
- {t:tv.aerial} is the aerial photo stored in the document. {t:tv.base} and {t:tv.cadastral} are fetched from V-World when selected, so they need a key and the internet. The installed app saves the fetched maps in the file too.
- The zoning colours and lot lines of {t:tv.cadastral} are for reference only, not a legal record.
- With the interval set to automatic, it follows the height range of the land; 1, 2, 5, 10 or 20 m can also be selected. Lines at five times the interval above sea level are drawn thicker. Lower {t:ct.opacity} to let the map on the ground show better.
- Contours follow the ground after [grading](help:site-grade), so changing a grading height changes the lines too.
- With the contours on, clicking {m:contours} again closes the window and turns the lines off.
- {c:dropGround} moves objects only up or down until their bottom touches the ground under their middle. One undo takes it back.
- With the cursor over the ground in the 3D view, the status bar shows the ground's height above sea level there.
- Loading terrain is explained in [Set the site location](help:site-map).

## Common mistakes

- The contour window says there is no terrain. The land has no height data yet. Use the {c:siteMap} button in the window to select the area on the map or load a height file.
- {t:tv.base} or {t:tv.cadastral} does not appear. There is no V-World key or no internet. Land not selected on the map (a photo file or flat land) can only show its own loaded picture.
- {c:dropGround} changes nothing. Select the objects first.
- A large object dropped on a slope is half buried or floating. It is matched to the height of one point under its middle. Grade the ground for large buildings first ([grading](help:site-grade)).
`,Qr=`---
id: arch-ceiling
title: Ceilings, ceiling view and cut away above
분류: 건축 부재
난이도: 중급
workspace: 3D 건설
keywords: ceiling, hang a ceiling, suspended ceiling, plenum, plenum depth, ceiling height, follow storey, ceilings on all levels, add ceilings, gypsum, ceiling tile, ceiling view, reflected ceiling plan, rcp, ceiling plan, ceiling lights, look up, view from below, mirror, cut away, cutaway, cut height, look into rooms, celing
commands: ceiling, ceilingAll, ceilingView, cutAway, lighting, lightPlace
context: ceilingView, cutAway, ceiling, ceilingAll
order: 180
---

## What

{c:ceiling} hangs a ceiling board over a whole level or one room. The ceiling hangs the {t:ceil.plenum} below the underside of the slab or roof above and follows storey height changes. {c:ceilingView} looks up at the working level's ceiling from below; {c:cutAway} cuts away what is above the working level so you can look into the rooms from above.

## Steps

1. Click {m:ceiling}.
2. Under {t:ceil.how} in the window, select {t:ceil.how.level}, {t:ceil.how.room} or {t:ceil.how.draw}.
3. With {t:ceil.how.level}, a click or Enter puts a ceiling over the whole working level. With {t:ceil.how.room}, click inside a room closed by walls; with {t:ceil.how.draw}, draw a rectangle or a polygon.
4. To check the ceiling, click {m:ceilingView} or press {k:ceilingView}. The view turns to look up from below; the ground, other levels and other buildings are hidden.
5. In the small box over the 3D view, set the {t:lt.cutHeight}; turn on {t:ceil.flip} to see it the same way round as the floor plan.
6. When you are done, click × in the small box, press Esc, or press {k:ceilingView} again to go back to the view you had.
7. To look into the rooms from above, click {m:cutAway} and set the height to cut at with {t:lt.cutHeight} in its small box.

## Tips

- With {t:ceil.rule} on (it starts on), the ceiling hangs the {t:ceil.plenum} (0.4 m at first) below the underside of the slab or roof above. With a 3 m storey and a 0.2 m slab, the ceiling is at 2.4 m. Turned off, the ceiling keeps the height typed in {t:ceil.height}.
- A ceiling starts 20 mm thick. Under a sloped roof, select {t:ceil.kind.flat} or {t:ceil.kind.roof} under {t:ceil.kind}.
- A ceiling made with {t:ceil.how.level} follows the level outline and its courtyards, and changes when the outline changes.
- {c:ceilingAll} puts a ceiling along the outline of every level that has none, in one go. Piloti levels and levels that already have a ceiling are left out, and a message gives how many were made and left out. It is the {m:ceilingAll} button, in the {c:ceiling} tool window, and in the right-click menu of a building row in the {c:levelPanel}.
- The {t:ceil.build} switch of [Build](help:build-overview) is on from the start, so building puts a ceiling on every level except piloti levels.
- Select a ceiling to change its height, thickness and {t:ceil.finish} ({t:ceil.finish.gypsum}, {t:ceil.finish.tex}, {t:ceil.finish.wood}) in the Properties window. Ceiling lights hang from the ceiling and move with its height: [Lights, time of day and night](help:arch-lighting).
- The {t:lt.cutHeight} is 1.2 m at first. In the {c:ceilingView} it goes from 0.1 m up to 0.1 m under the storey height or the lowest ceiling, so a ceiling you hung always shows.
- Right-clicking a level row in the {c:levelPanel} and selecting {c:ceilingView} moves the work scope to that level, then turns the ceiling view on.
- {c:planView}, {c:archSection}, {c:ceilingView} and {c:cutAway} are never on together: turning one on turns the others off.

## Common mistakes

- The ceiling of the wrong level shows. The {c:ceilingView} looks at the working level; change the level in the path on the status bar or in the {c:levelPanel} first.
- The ceiling looks empty and a note says nothing covers this level. Make the slab of the level above or a roof first.
- A note says the ceiling is lower than 2.2 m. Make the {t:ceil.plenum} smaller or the storey higher.
- With {t:ceil.how.room}, a message says it is not a room. The walls there are not closed. Join the walls, or draw the ceiling with {t:ceil.how.draw}.
- Clicking parts in the cut-away region does not select them. What is cut away cannot be selected; turn the view off to select it.
`,$r=`---
id: arch-column
title: Columns
분류: 건축 부재
난이도: 기초
workspace: 3D 건설
keywords: column, columns, pillar, post, square column, round column, column size, column height, piloti column, place columns
commands: column, levelAdd
context: column
order: 70
---

## What

Puts up a square or round column wherever you click. A column starts on the current level's floor and, when there is a level above, reaches its floor.

## Steps

1. Click {m:column}.
2. In the window, click {t:opt.colSquare} or {t:opt.colRound}.
3. Type the size ({t:opt.colWidth} or {t:opt.diameter}).
4. Click where the column stands on the floor. The tool stays open, so you can go on placing columns.
5. When you are done, press Esc.

## Tips

- The size starts at 0.4 m and goes from 0.1 to 3 m.
- With a level above, {t:flow.top} is set to {t:flow.top.toFloor}, so no height is typed. The column follows storey height changes, and a column under the upper slab stops at the slab's underside.
- Without a level above, or after clicking {t:flow.top.height}, type the height (0.1 to 30 m).
- Selecting a higher level in {t:flow.topLevel} makes a tall column that passes several levels.
- Typing coordinates such as \`3,4\` in the command line puts a column there ([coordinates and lengths](help:input-coords)).
- Columns go on any level, level 2 and up too. Selecting a level in the {t:lv.pickLevel} field of the window also makes it the level you work on.
- A value in {t:flow.baseOffset} starts the column that much above the level's floor.
- Select a placed column to change {t:flow.props.level}, {t:flow.baseOffset} and {t:flow.top} under {t:flow.props} in the Properties window ([wall tops](help:arch-wall-top)).

## Common mistakes

- Enter does not close the tool. Close the column tool with Esc.
- A column goes through the floor above. Check whether its height was typed with {t:flow.top.height}, and switch it to {t:flow.top.toFloor}.
- A column floats above the floor. Check that {t:flow.baseOffset} is 0.
- Columns are an {t:fl.state.optional} step of [Build Progress](help:arch-flow). You can go on to the next step without them.
`,ei=`---
id: arch-curtain-wall
title: Curtain Wall
분류: 건축 부재
난이도: 중급
workspace: 3D 건설
keywords: curtain wall, curtainwall, glass wall, glazing, glass facade, mullion, transom, window wall, glass building
commands: curtainWall, window, wall
context: curtainWall
order: 90
---

## What

A glass wall with panes set between mullions (upright bars) and transoms (cross bars). It stands along a line drawn on the floor, or fits into a wall like a window.

## Steps

1. Click {m:curtainWall}.
2. In the window, click {t:lib.curtain.line} or {t:lib.curtain.wall}.
3. Type values in {t:presetParam.h}, {t:presetParam.gx}, {t:presetParam.gz} and {t:presetParam.mw}.
4. {t:lib.curtain.line}: click points on the floor one after another, then click the last point again or press Enter to stand the curtain wall.
5. {t:lib.curtain.wall}: click on a wall; the wall gets a hole and the curtain wall fits into it. Press Esc when you are done.

## Tips

- Along a line, every straight piece gets one curtain wall panel, and all the panels are put in one group. Pieces shorter than 1 m are skipped.
- The starting values are 3 m high, 1.5 m mullion and transom spacing and a 0.06 m mullion width. Changing the spacings changes the size of the glass panes.
- While drawing the line, {k:undo} removes the last point.
- A curtain wall made {t:lib.curtain.line} stands on the current level's floor. To match the storey, type the storey height in {t:presetParam.h}.
- With {t:lib.curtain.wall}, set its size along the wall in {t:presetParam.w}; the R key turns it round.
- The curtain wall is on the {t:level.advanced} menus and does not show on the {t:level.basic} menus ([basic and advanced menus](help:start-level)). Typing \`cw\` in the command line opens it with either menu.
- For ordinary windows use the {c:window} tool ([doors and windows](help:arch-door-window)).

## Common mistakes

- Finishing after one point makes nothing. Click at least two points.
- A curtain wall made {t:lib.curtain.line} does not cut a hole in a wall. To put it inside a wall, use {t:lib.curtain.wall}.
- To move one panel of a curtain wall made along a line, first ungroup them with {c:ungroup}.
`,ti=`---
id: arch-door-window
title: Doors and windows
분류: 건축 부재
난이도: 기초
workspace: 3D 건설
keywords: door, doors, window, windows, opening, openings, double door, sliding door, automatic door, fire door, revolving door, fixed window, casement window, sliding window, awning window, double-hung window, skylight, frame, hole in wall, put in a door
commands: door, window, curtainWall, move
howto: doorWindow
context: door, window
order: 80
---

## What

Fits doors and windows into walls. A door or window placed on a wall cuts a hole its size in the wall by itself, and moving the wall moves the doors and windows in it.

## Steps

1. Click {m:door} or {c:window}.
2. Select a type and set the width and height in the window.
3. Click a wall: it fits into the wall and cuts its opening (R: turn).
4. Press Esc to finish.

## Tips

- Doors: {t:preset.door.single}, {t:preset.door.double}, {t:preset.door.sliding}, {t:preset.door.auto}, {t:preset.door.fire}, {t:preset.door.revolving}.
- Windows: {t:preset.window.single}, {t:preset.window.double}, {t:preset.window.tall}, {t:preset.window.fixed}, {t:preset.window.casement}, {t:preset.window.sliding}, {t:preset.window.awning}, {t:preset.window.hung}, {t:preset.window.skylight}.
- The {t:lib.group.opening} group at the top of the window switches between {t:presetCat.door}, {t:presetCat.window} and {t:presetCat.curtain}. Typing a name in the search box finds it too.
- The size fields are {t:presetParam.w}, {t:presetParam.thick}, {t:presetParam.h} and {t:presetParam.frame}. The sizes you set are kept until the program closes.
- Doors sit on the floor. Most windows sit 0.9 m above the floor; an {t:preset.window.awning} sits at 1.5 m, a {t:preset.window.hung} at 0.8 m, and a {t:preset.window.tall} starts at the floor.
- In a wall, the R key or the {t:opt.presetFlip} button turns the door or window round to face the other way. On the floor it turns 90°.
- For a {t:preset.door.single}, {t:preset.door.double} or {t:preset.door.fire} in a wall, the F key or the {t:auto.door.side} button changes only the side it opens to. For a {t:preset.door.single} or {t:preset.door.fire}, the H key or the {t:auto.door.hinge} button changes only the hinge side.
- After placing, select the door and change them in the Properties window. {t:auto.door.hinge} is the side the hinges are on, seen from outside the room (from the side the door is pushed from when the rooms are not known); {t:auto.door.side} is {t:auto.door.in} (the room side) or {t:auto.door.out}. Changing one keeps the other.
- The tool stays open after each one, so the next door or window can go in right away. The wall it will go into is highlighted.
- Moving a placed door or window along its wall with {c:move} moves its hole too. Deleting a door or window closes the hole in the wall.
- A {t:preset.window.skylight} goes on a roof, not in a wall ([roof](help:arch-roof)).
- For a large glass wall use a [curtain wall](help:arch-curtain-wall).

## Common mistakes

- If Enter does not close the tool, press Esc.
- Clicking the floor places the door or window on the floor, without a wall and without a hole. Click on a wall face.
- A door is pushed in from the end of a wall. Doors and windows are kept inside one straight piece of the wall; a piece shorter than the door gets it in its middle.
- A door taller than the wall only cuts the hole up to the wall's height. Make the door lower or the wall higher.
`,ni=`---
id: arch-drawing
title: Building Drawings
분류: 건축 부재
난이도: 중급
workspace: 3D 건설
keywords: floor plan, plan, elevation, section, drawing, print, blueprint, building drawings, floor plans, front elevation, back elevation, left elevation, right elevation, sheet, paper, A3, A4, scale, 1:100, title block, DXF, pdf, print drawings, drawings, door swing, door arc, plan view, section view, cut line
commands: archDrawing, planView, archSection
howto: archDrawing
context: archDrawing, planView, archSection
order: 190
---

## What

Draws a floor plan of each level and the four elevations of the building to scale on paper, to print or save as PDF. A floor plan is the level cut 1.2 m above its floor and seen from above, with the swing of every door drawn in. A single plan or section sheet can also be made just as {c:planView} or {c:archSection} shows it.

## Steps

1. Click {m:archDrawing}.
2. Under {t:ad.makeTitle}, select {t:ad.all}, the paper and the scale, then click {t:ad.make}.
3. Print or save a PDF with the Print all / PDF button.

## Tips

- The first time the drawings open, floor plans are made by themselves with the suggested settings (A3 landscape, the scale that fits). To add elevations or change the paper or scale, click {t:ad.new}. One Ctrl+Z takes the automatic sheets back.
- Under {t:ad.what}, select {t:ad.all}, {t:ad.plans} or {t:ad.elevations}.
- Paper goes from A4 to A0, landscape; scales from 1:20 to 1:500. The scale that fits is marked as suggested, and a scale too large for the paper shows a warning.
- Each floor plan gets its own sheet; elevations go in pairs, front with back and left with right. Elevations carry a floor height mark for each level, such as \`Level 1 FL ±0\`.
- Floor plans draw every door's swing in thin lines: the leaf standing fully open and the quarter arc it sweeps. The leaf is as long as the door's hole in the wall and is drawn at the hinge end. Changing {t:auto.door.hinge} or {t:auto.door.side} in the Properties window changes the drawing too.
- {m:planView} ({k:planView}) cuts the working level at the {t:lt.cutHeight} (1.2 m at first) and looks down on it in the 3D view. Cut walls are filled and door swings shown; turn on {t:av.below} in its small box to show the level right below, faded.
- {m:archSection} ({k:archSection}) cuts the work scope's building upright and looks at it from the side. In its small box set {t:av.axisX} or {t:av.axisY} and {t:av.at}, or cut along a line drawn on the plan with {t:av.drawLine}.
- The {c:archDrawing} button in the small box of either view makes one A3 sheet of what you see (the same level and cut height, or the same cut for a section) and opens it. A sheet made from the same view is replaced. A plan is fitted to everything shown on that level, the eaves of its roofs too.
- Making drawings of the same kind again replaces the ones made before. Sheets made from the plan or section view stay when {t:ad.new} makes a new set.
- Deleting a level or a building deletes the sheets that draw it, and a message gives their number.
- Switch sheets under {t:ad.sheet} and remove one with {t:ad.deleteSheet}.
- {t:dv.print} prints the sheet you are looking at; it can also go out as {t:dv.dxf}, SVG or PNG. For a PDF, select Save as PDF in the print dialog.
- In {t:dp.titleSetup}, the title block's {t:ks.author}, {t:ks.school} and {t:ks.number} go on every building sheet at once. Paper and title block are covered in [Drawing sheet and title block](help:obj-drawing-sheet).
- With several buildings, every level name starts with its building's name and each building gets its own floor plans.
- Click {t:dv.back3d} to leave the drawings.

## Common mistakes

- No drawings are made by themselves. There is no building part (wall, slab, column …) yet; build first.
- A warning says the drawing does not fit the paper. Select a smaller scale (such as 1:200) or larger paper. A sheet made from the plan view that does not fit A3 even at the smallest scale is told too.
- The {c:archDrawing} button of the plan view makes no sheet and only shows a message. That level has neither an outline nor parts.
- Upper levels do not show on a floor plan. A plan is the level cut 1.2 m above its floor, so levels above are not drawn.
- A door shows no swing on the plan. It lies on the floor instead of sitting in a wall; delete it and fit it again by clicking on the face of a wall.
- {t:dv.print} prints only the sheet shown; use Print all / PDF for every sheet.
`,ri=`---
id: arch-face-paint
title: Paint faces
분류: 건축 부재
난이도: 기초
workspace: 3D 건설
keywords: paint, face colour, face color, wall colour, wall color, paint faces, paint a wall, inner wall, outer wall, floor colour, eraser, remove colour, single face, one face only, colour a face
commands: facePaint, material
howto: facePaint
context: facePaint
order: 160
---

## What

Colours single faces instead of the whole object: click faces one at a time. The inside and the outside face of the same wall can have different colours.

## Steps

1. Click {m:facePaint}.
2. Select a colour and click the faces to paint.
3. Press Esc to finish.

## Tips

- {t:opt.paintColor} in the window offers 12 colours often used for walls and floors. Select any other colour with {t:opt.paintPick}.
- Turn on the {t:opt.eraser} and click a face to take its colour off; it shows the object's own colour again. Clicking a colour turns the eraser off.
- Every face painted is one step to undo (Ctrl+Z).
- A painted wall face keeps its colour when a door or window is fitted into the wall later.
- The colour used last is still selected the next time the tool opens.
- To change the colour and material of a whole object, use {m:material}. See [Colours and materials](help:obj-material).
- Press Esc to close the window and end the tool.

## Common mistakes

- Clicking empty space does nothing. Click a face of an object.
- With the {t:opt.eraser} on, clicked faces lose their colour. Click a colour first to paint.
- Only one side of a wall changed colour. The inside and the outside of a wall are separate faces; click each one.
`,ii=`---
id: arch-fill-area
title: Fill an area
분류: 건축 부재
난이도: 중급
workspace: 3D 건설
keywords: fill area, fill, area fill, fill with objects, grid of objects, rows, classroom desks, desk layout, parking lot, car park, parking spaces, plant trees, forest, park, array, random, mix objects, place many
commands: fillArea, objects, furniture
context: fillArea
order: 150
---

## What

Draw an area on the floor and the selected objects fill it in a grid. Use it for many of the same object: desks in a classroom, parking spaces in a car park, trees in a park.

## Steps

1. Click {m:fillArea}. The object selected last in the object library is the one to fill with (a desk to start with).
2. To fill with something else, open {t:fa.choose} at the bottom of the window and select it. Ctrl+click or Shift+click adds or removes more objects.
3. Select the area's shape: {t:opt.areaRect}, {t:opt.areaPoly} or {t:fa.shape.pick}.
4. Draw the area on the floor. For a rectangle click two corners; for a polygon click its points, then click the first point again or press Enter to close it. With {t:fa.shape.pick}, click inside a site or building outline already drawn.
5. Check the spots and the count in the preview, and change the spacing or direction.
6. Press Enter (or right-click) to place them all. Until you press Esc you can go on with the next area.

## Tips

- You can also select objects in the {c:objects} window and click the {c:fillArea} button at the bottom of it; the objects selected there with Ctrl or Shift come along.
- {t:fa.gapX} and {t:fa.gapY} start at the objects' size plus some room. After typing your own values, {t:dc.rowAuto} brings them back.
- {t:fa.dir}: {t:fa.dir.auto} is the default; {t:fa.dir.set} lets you type the angle.
- {t:fa.margin} is the room kept between the objects and the area's edge or wall faces (default 0.3 m).
- With {t:fa.skip} on (the default), spots that meet walls, columns or objects already there are left out. The window says how many.
- With several objects, set the {t:fa.order} to {t:fa.order.alternate} or {t:fa.order.random}. A {t:fa.order.random} layout comes out the same for the same {t:fa.seed}; {t:fa.shuffle} makes another one.
- {t:fa.max} is 300 by default and can be 1 to 2000.
- With {t:fa.linked} on, resizing one placed object resizes all the copies of the same object.
- While drawing a polygon, press, wait 0.5 s and drag to make that side a curve.
- Everything placed at once is undone with one Ctrl+Z. For a single row, press and drag on the floor in the furniture tool instead ([Furniture and the object library](help:arch-furniture)).

## Common mistakes

- Doors, windows and skylights do not fill an area. Select objects that stand on the floor, such as desks, cars or trees.
- Clicking the view after the area is drawn does nothing. Press Enter to place, or click {t:fa.redraw}.
- Pressing Esc with an area drawn fills it and then ends the tool. To end without filling, click {t:fa.redraw} first.
- Fewer objects than expected. Check the room from edges and walls, the skipping of taken spots and {t:fa.max}.
- A very small area is not made. Draw it larger.
- Objects go on the floor of the level you are working on. Change the level first to fill another one.
`,ai=`---
id: arch-flow
title: Build Progress
분류: 건축 부재
난이도: 기초
workspace: 3D 건설
keywords: build progress, building steps, steps, step by step, workflow, progress, checklist, next step, to do, waiting, guide, where to start, how to start a building, build a house, order of work, twelve steps
commands: buildFlow, buildingEasy, buildingNew, siteArea, grade, buildingOutline, levelOutline, wall, slab, column, door, window, stair, roof
context: buildFlow
order: 10
---

## What

The {c:buildFlow} window guides one building through twelve steps: site → building outline → grading → ground floor height → build → outline per level → walls → slabs → columns → doors and windows → stairs → roof. It shows which steps are done and gathers the tool buttons each step needs. In step 5, Build with {t:ab.easy} or {t:ab.detailed} makes the levels, outlines, walls and roofs in one go.

## Steps

1. Click the {c:buildFlow} button next to the {t:win.menu} menu on the menu bar. The window is open on the left from the start; the number on the button counts the steps done ({t:fl.state.optional} steps count as done).
2. At the top of the window, check in the path (site › building › level) that it shows the building you want. On a site without buildings, {c:buildingEasy} and {c:buildingNew} buttons are shown; on a site with buildings, each of them has an {t:fl.enter} button. The same shows after Esc took the work scope up to the site.
3. Find the step marked {t:fl.next}.
4. Click a button under that step to open its tool, and do the work.
5. When the work is finished the step shows {t:fl.state.done} and the next step is highlighted.
6. When all twelve steps are done, {c:areaTable}, {c:archDrawing}, {c:facePaint} and {c:buildingNew} buttons appear at the bottom of the window.

## Tips

### Steps and buttons

| Step | What it does | Buttons in the window |
|---|---|---|
| 1 {t:fl.step.site} | Selects the site the building stands on, or decides to build on the {t:bld.wholeLand} without a site. With no site at all it is done by itself as {t:bld.wholeLand}. Choosing another site in the list asks first whether the building moves there. | {t:so.bldSite} list, {c:siteArea} |
| 2 {t:fl.step.shape} | Draws the outline the building takes up. Once drawn, its area is shown with the building area and coverage. | {c:buildingOutline} or {t:cmd.outlineEdit} |
| 3 {t:fl.step.grade} | Flattens the ground under the building outline. It is {t:fl.state.optional} and never holds the later steps. | {c:grade}, {t:fl.gradeSkip} |
| 4 {t:fl.step.base} | Sets the height of the ground floor. | {t:base.button} |
| 5 {t:fl.step.levels} | {t:ab.build}: {t:ab.easy} makes the whole building from the floors and the storey height, {t:ab.detailed} sets an outline and a kind per level. | {t:ab.easy}, {t:ab.detailed} |
| 6 {t:fl.step.outlines} | Draws the outer shape of each level. {t:ca.outlinesFromShape} gives every level the building outline as it is. | {c:levelOutline}, {t:ca.outlinesFromShape} |
| 7 {t:fl.step.walls} | Raises the outer walls along the outline, or draws walls by hand: [Outer walls](help:build-outer-walls). | {c:outerWalls}, {c:wall} |
| 8 {t:fl.step.slabs} | A level with an outline gets its slab by itself. | {t:ca.slabsFromOutline}, {c:slab} |
| 9 {t:fl.step.columns} | Puts up columns where needed. This step is {t:fl.state.optional}. | {c:column} |
| 10 {t:fl.step.openings} | Fits doors and windows into the walls. | {c:door}, {c:window} |
| 11 {t:fl.step.stairs} | Places a stair up from every level but the top one. | {c:stair} |
| 12 {t:fl.step.roof} | Puts a roof on the top level's outline. | {t:fl.roofTop}, {c:roof} |

- Each step shows {t:fl.state.done}, {t:fl.state.todo}, {t:fl.state.optional} or {t:fl.state.wait}. While the site, building outline, ground floor height or build step is not done, the steps left after it show {t:fl.state.wait} and their buttons are off. A waiting step names the step to do first.
- Steps done level by level (outlines, walls, slabs, stairs) show the levels done out of all levels, such as \`2/3\`, and name the levels still left.
- Building with Build in step 5 finishes steps 6 to 8 and step 12 at once: [Building a building](help:build-overview). For a building with walls drawn by hand, step 5 opens on {t:ab.detailed}, where the level fields at the top and {t:fl.planApply} set the levels.
- The {t:base.button} button of step 4 opens a question. Select ‘Use the grading height’, {t:base.high}, {t:base.keep} or {t:base.typed}, then click {t:base.ok}. Moving the ground floor moves every level and part of that building with it.
- If you place a part on terrain before the ground floor height is set, the same question opens first. On land without terrain the ground floor is at 0 m and step 4 counts as done.
- The outer wall button of step 7 raises 0.2 m thick walls just inside the outline, up to the floor above. When several levels are left, a second button raises them on all of those levels at once. Basements get a 0.3 m basement wall, and levels that already have walls are skipped.
- The {t:fl.roofTop} button of step 12 opens the [roof](help:arch-roof) tool with the top outline already selected. The eaves sit at the top level's floor plus its storey height. Check the shape, then press Enter to make the roof.
- If you closed the window, click the {c:buildFlow} button on the menu bar again. Clicking it while the window is in front hides the window.

## Common mistakes

- The window shows the steps of another building. Select the building again in the path at the top of the window or in the {c:levelPanel} ([Work scope](help:site-scope)).
- The buttons of later steps cannot be clicked. Finish first the step named under the waiting one. Grading may be skipped.
- Fewer levels were set, but some levels stay. Levels with parts or an outline are never removed. Empty them, or delete them with {t:levels.delete} in the {c:levelPanel} window.
- Step 10 shows {t:fl.state.done} as soon as there is one door or window. Check yourself that every room has its doors and windows.
- In a building raised by hand, changing an outline does not move the outer walls raised in step 7. Edit those walls, or delete them and raise them again. Walls made by Build are made again along the outline.
`,oi=`---
id: arch-furniture
title: Furniture, landscape and the object library
분류: 건축 부재
난이도: 기초
workspace: 3D 건설
keywords: furniture, desk, chair, bed, sofa, tree, car, people, landscape, table, bookshelf, wardrobe, toilet, bathroom, kitchen, fridge, blackboard, school desk, lockers, playground, swing, bench, bus, bicycle, solar panel, object library, library, objects, place objects, my objects, import objects, export objects, nklib, bundle, search, rotate, furnature, furniture placing
commands: furniture, landscape, objects, myObjects, libImport, libExport
howto: furniture
context: furniture, landscape, objects, myObjects, libImport, libExport
order: 140
---

## What

Places ready-made objects on the floor: furniture, kitchen and bathroom fittings, school furniture, trees, cars, people and more. {m:objects} is the window that shows every object by group and kind and finds them by name.

## Steps

1. Click {m:furniture} (trees, cars, people: {c:landscape}).
2. Select what to place in the window.
3. Click the floor to place it (R: turn 90°, Esc: finish).

## Tips

- Objects go on the floor of the level you are working on. The window stays open after each one so you can place more; press Esc to close it and end the tool.
- Type a name in the search box at the top of the window to search every kind. Korean and English names both work (for example \`의자\` or \`tree\`).
- The {c:objects} window has the groups {t:lib.group.opening}, {t:lib.group.interior}, {t:lib.group.school}, {t:lib.group.exterior} and {t:lib.group.mine}; inside a group, select a kind.
- Set the selected object's {t:presetParam.w}, {t:presetParam.d} and {t:presetParam.h} in the window before placing it. Change the size of a placed object in the Properties window.
- Press and drag on the floor to lay several along the line, one every {t:dc.rowGap} (like desks in a classroom). The spacing starts at the object's width plus some room and can be typed in the window. To fill a whole area, use [Fill area](help:arch-fill-area).
- With no tool open, double-click a placed door, window, piece of furniture or landscape object to change its shape in 3D object modelling. When you are done, click {t:trip.back} at the top to put the new shape into the building.
- Objects made in 3D object modelling arrive in {c:myObjects} once you [send them to the building](help:more-send-to-building).
- {m:libImport} puts many STEP, STL, OBJ, 3MF or NukCAD files or object bundles (.nklib) into the library at once. Select the files or drop them on the window, check each file's {t:li.name}, {t:li.kind}, {t:li.unit} and {t:li.scale}, then put them in.
- {m:libExport} saves your own objects in one bundle file (.nklib). {c:libImport} on another computer takes it as it is; a single object can also go out as STEP.
- Ctrl+click or Shift+click pictures to select several objects; they are then used together to fill an area, to be taken out of the library or for {t:li.move}. Built-in objects are never removed from the library.

## Common mistakes

- Objects land on the wrong level. They go on the level you are working on, so change the level in the {c:levelPanel} first.
- {c:myObjects} is empty. Nothing has been sent from 3D object modelling yet.
- Pressing Delete with the pointer over the pictures takes the selected objects of your own out of the library (after asking). Objects already placed stay, and {t:li.undo} just below brings them back.
- In the web version your objects are kept only in this browser and can disappear when the browser's data is cleared or they are not used for a long time. Keep a bundle (.nklib) with {c:libExport}. Placed objects are also stored in the project file.
`,si=`---
id: arch-levels
title: Levels
분류: 건축 부재
난이도: 기초
workspace: 3D 건설
keywords: level, floor, storey, story, basement, levels, add level, copy level, delete level, rename level, storey height, floor height, floor level, upper levels, hide upper floors, fade, show only this level, current level, levels window, project window, second floor, ground floor, B1
commands: levelAdd, levelPanel, levelCopy, upperLevels, buildingNew, levelOutline
howto: levels
context: levelAdd, levelCopy, levelPanel, upperLevels
order: 20
---

## What

A building is made of levels. Each level has a name and a storey height; its floor height is worked out by stacking the storey heights on the ground floor. New walls, slabs and columns start on the floor of the level you work on.

## Steps

1. Click {m:levelAdd}: a new floor appears on top and you work there.
2. To copy this floor with everything on it: {m:levelCopy}.
3. Floor heights and basements: the {c:levelPanel} window on the right.

## Tips

- The {c:levelPanel} window lists land › site › building › level, with each building's levels from the top down. Click a level's row to work on it; the level you work on is highlighted: [Building names, colours and the project tree](help:build-names-tree).
- Click a level's name to change it in place: Enter keeps it, Esc goes back. Names you typed stay as they are; default names (Level 1, Level 2, B1) are numbered again when levels are added or removed.
- Changing the {t:levels.height} field of a level row moves the levels above it, with their parts, up or down. Changing a basement's storey height moves that basement's floor and the basements below it. Storey heights go from 1 to 20 m.
- The floor height (for example \`+3\`) is worked out from the ground floor and the storey heights, so it is not typed. Set the ground floor height again with the ground floor button of the building row, or in step 4 of [Build Progress](help:arch-flow).
- The {t:levels.add}, {t:levels.addBasement}, {t:levels.copy} and {t:levels.delete} buttons under the list work on the building of the level you work on. {t:levels.addBasement} makes a basement at the bottom. The **+** button of a building row also adds a level on top of that building.
- {c:levelCopy} copies the level's parts and its level outline right above it, and the levels above move up one level. Use it to stack repeated floor plans quickly. A copy of a basement is a basement too.
- In a building made with Build, adding, copying or deleting a level makes the automatic walls and roofs again to fit the new stack: [Building a building](help:build-overview).
- At the right of each level row are the level outline button (it opens the [level outline](help:arch-outline) tool), the view button (each click: shown → faded → hidden), {t:lt.isolate} and {t:lt.view}.
- If upper levels hide the level you are drawing, select {t:upper.fade} or {t:upper.hide} under {t:levels.upper} at the bottom of the window. Typing \`upperlevels\` in the command line also switches {c:upperLevels} between shown, faded and hidden. How levels are shown is not saved in the file.
- {t:upper.fade} fades the upper levels only while a building tool such as wall or slab is in use; just looking, they are clear. With the {t:bo.fade} switch in the status bar off, nothing is faded even while a tool is in use: [Work scope](help:site-scope).
- The status bar always shows the path of where you work and the current level's floor height and storey height. The levels button in front of the path brings the {c:levelPanel} window to the front.
- A building takes up to 60 levels, basements included. To set the number of basements and floors at once, use the {t:fl.step.levels} step of [Build Progress](help:arch-flow).
- With a level above, walls, columns and stairs reach up to its floor by default and follow storey height changes ([wall tops](help:arch-wall-top)). Making the levels first and drawing the parts afterwards saves work.

## Common mistakes

- Walls end up on the wrong level. Check the level you work on in the path on the status bar or in the {c:levelPanel} window before drawing. The {t:lv.pickLevel} field of the tool window changes it too.
- {t:levels.delete} cannot be clicked. The only level above the ground of a building cannot be deleted.
- Deleting a level that holds objects asks whether to delete them too or keep them on the level below (the level above for the lowest one). Undo a mistake with {k:undo}.
- An upper level is not shown. Check whether {t:levels.upper} is set to {t:upper.hide}, or whether that level's view button is on hidden.
- The storey height changed but a wall kept its height. That wall's {t:flow.top} is set to a typed height. Tie it to the level above in the Properties window.
`,ci=`---
id: arch-lighting
title: Lights, time of day and night
분류: 건축 부재
난이도: 중급
workspace: 3D 건설
keywords: light, lights, lamp, lighting, place lights, downlight, pendant, wall light, sconce, floor lamp, streetlight, recessed light, flat panel, spotlight, daylight, sun, sun position, time, date, night, evening, day, shadow, shadows, equinox, solstice, brightness, lumen, colour temperature, color temperature, kelvin, warm white, night view
commands: lightPlace, lighting, ceilingView
context: lightPlace, lighting
order: 170
---

## What

Put lights on ceilings, walls and floors, then change the time and date in the {c:lighting} window to see how sun, sky, lamps and shadows look by day, in the evening and at night.

## Steps

1. Click {m:lightPlace}.
2. In the window, select a light in each row: {t:light.on.ceiling}, {t:light.on.wall} and {t:light.on.floor}.
3. Click a ceiling, wall or floor face. The direction the face looks decides the row, and that row's light is fixed there (R: turn 90°).
4. Press Esc when you are done.
5. Click {m:lighting} to open its window.
6. Set the time with the {t:lt.day}, {t:lt.evening} or {t:lt.night} buttons, or drag the {t:lt.time} and {t:lt.date} sliders.
7. For shadows, select {t:lt.sh.sun} or {t:lt.sh.all} under {t:lt.shadows}.

## Tips

- Sun, sky and lamps follow the time, and lamps really light their surroundings, only while {t:lt.sky} is on. The {t:lt.day}, {t:lt.evening} and {t:lt.night} buttons and turning shadows on switch it on; off, the view goes back to the even modelling light.
- {t:lt.day} sets 13:00, {t:lt.evening} 18:45 and {t:lt.night} 22:00. The {t:lt.spring}, {t:lt.summer} and {t:lt.winter} buttons select those dates at once.
- The sun's place is worked out for the land's position when it was selected on a map, otherwise for Seoul. {t:lt.tz} is the hours from UTC (Korea: 9).
- At first the rows hold a {t:preset.light.downlight} on ceilings, a {t:preset.light.sconce} on walls and a {t:preset.light.floor} on floors. The floor row also has the {t:preset.streetlight}.
- Select a placed light to change {t:light.onOff}, {t:light.lm} (lm), {t:light.watt} (W) and {t:light.k} (K) under {t:lt.selected} in the window or in the Properties window. There are {t:light.kWarm} (2700 K), {t:light.kNeutral} (4000 K) and {t:light.kDay} (6500 K) buttons, and lights that throw a beam also have a {t:light.angle}.
- {t:lt.allOn} and {t:lt.allOff} switch every light at once.
- {t:lt.exposure} only changes how bright the lamps' light looks on screen (×0.25 to ×4). The lights' lumens stay as they are.
- {t:lt.quality}: {t:lt.q.low} 4, {t:lt.q.mid} 8, {t:lt.q.high} 16 (of each kind). The other lights only glow.
- A light is fixed to the object it was put on (a ceiling slab, a wall …) and moves with it.
- Ceiling lights are easiest to put up in the [ceiling view](help:arch-ceiling), looking up from below. The {c:lightPlace} window has a {c:ceilingView} button too.
- Lights can also be placed from the {c:objects} window: group {t:lib.group.interior}, kind {t:presetCat.light}.

## Common mistakes

- A light is up but nothing around it gets brighter. With {t:lt.sky} off, lights only glow. Turn it on in the window.
- Clicking empty space (no face) puts a floor light on the current level's floor. Click right on the ceiling or wall face.
- A light cannot be fixed onto another light.
- The view gets slow. Turn shadows off or set {t:lt.quality} to {t:lt.q.low}. See also [When it is slow](help:faq-slow).
- The night scene is too dark or too bright. Change the lights' brightness (lm) or adjust {t:lt.exposure}.
`,li=`---
id: arch-my-arch
title: My buildings
분류: 건축 부재
난이도: 중급
workspace: 3D 건설
keywords: my building, my buildings, save building, save as my building, saved building, reuse building, copy building, place building, building library, another project, another site, new building from library, place on a level
commands: myArch, myArchSave, objects
context: myArch, myArchSave
order: 200
---

## What

Keeps a building you made in the object library under {t:lib.group.mine} → {t:presetCat.arch}, each level as one solid, and places it again with its levels in this or any other project and site.

## Steps

1. Click {m:myArchSave}.
2. Click a wall or slab of the building to save. With several buildings you can also select the building in the window.
3. Type a {t:ma.save.name} and click {t:ma.save.go}.
4. To place it, click {m:myArch} and select the saved building in the window.
5. Under {t:ma.how}, select {t:ma.howBuilding} or {t:ma.howLevel}.
6. Click where it goes (R: turn 90°).

## Tips

- {t:ma.howBuilding}: a new building appears where you click, with each saved level's parts on its level. Its ground floor sits on the ground height there, and its ground floor becomes the working level. Changing a storey height moves the levels above.
- {t:ma.howLevel}: the whole building goes as one solid on the floor of the level selected under {t:ma.level}, and moves up and down with that level.
- The window shows the saved building's {t:ma.levels} (basements and floors above ground).
- After saving, {t:ma.save.goPlace} in the save window opens the {c:myArch} window at once.
- Saved buildings can also be selected in the {c:objects} window (group {t:lib.group.mine}, kind {t:presetCat.arch}), and its {c:myArchSave} button saves the current building.
- Saved buildings stay in this computer's library and can be placed in other projects. To take one to another computer, make a bundle (.nklib) with {c:libExport}; its levels go along.
- In a new document with only an empty first building, the placed building takes the place of that empty one.

## Common mistakes

- Walls and slabs of a placed building cannot be changed one by one, because saving makes each level one solid. Change the original project and save again.
- A message says there is nothing to save. Make walls or slabs first.
- Hidden parts and works on the land (roads, bridges …) are not saved with the building. Show hidden parts first.
- A building that is too complex cannot be saved. Try fewer levels or parts.
- A message says no more buildings can be added. Delete a building you do not use, then place it again.
`,ui=`---
id: arch-new-building
title: New building
분류: 건축 부재
난이도: 중급
workspace: 3D 건설
keywords: new building, add building, another building, second building, several buildings, buildings, site, building outline, footprint, ground floor height, number of levels, storey height, story height, basement, building name, delete building, Building B
commands: buildingNew, buildingOutline, buildingEasy, levelPanel
context: buildingNew
order: 210
---

## What

Makes one more building. {c:buildingNew} opens the [building outline](help:build-outline) tool; once the outline is drawn, a new building with one level stands there. Its levels, walls and roof are made afterwards with Build. To get the levels, walls and roof in one go, use [Quick Building](help:build-easy).

## Steps

1. Click {m:buildingOutline}, or type \`buildingnew\` on the command line. The building outline tool opens on the site of the current work scope.
2. In the {t:so.target} list of the window, check the site the building stands on. To build without a site, select {t:bld.wholeLand}.
3. Select {t:opt.areaRect} or {t:opt.areaPoly} and draw the ground the building takes up.
4. When it is drawn, a new building named such as Building B is made, and work goes on on its ground floor.
5. In step 5 of the {c:buildFlow} window, type {t:bnew.above}, {t:bnew.below} and {t:bnew.height} under {t:ab.easy} and click {t:aw.easyGo}, or set an outline per level under {t:ab.detailed}.

## Tips

- A new document holds an empty Building A, so the first outline goes to Building A. Each outline after that makes a new building.
- The ground floor height is suggested for the place, and the {t:base.title} question comes when the first part is placed on terrain. Set it again later in the {t:fl.step.base} step of [Build Progress](help:arch-flow) or with the ground floor button of the building row in the {c:levelPanel}.
- Basements: 0 to 10; floors above ground: 1 to 50; storey height: 1 to 20 m.
- A new outline cannot overlap another building's outline. Drawn touching, the two buildings cover and support each other's floors and roofs: [Joined buildings](help:build-shared-levels).
- A document takes up to 30 buildings.
- The {c:levelPanel} shows each site with its buildings and levels. The **+** button of a site row opens the building outline tool too. Rename or delete a building from its row's right-click menu. The bottom of that window and the {c:buildFlow} window also have a {c:buildingNew} button.

## Common mistakes

- The new building is on the wrong site. Check {t:so.target} before drawing. To move a building already made, drag its row onto another site row in the {c:levelPanel}.
- Walls or slabs go into another building. Parts go on the levels of the building you are working in, so click the building in the {c:levelPanel} first.
- The only building cannot be deleted. Use {t:lt.clearBuilding} to empty it instead.
- No more than 30 buildings can be made. Delete buildings you do not use.
`,di=`---
id: arch-outline
title: Level Outline
분류: 건축 부재
난이도: 중급
workspace: 3D 건설
keywords: outline, level outline, plan outline, plan shape, floor plan shape, floor shape, shape of a level, cantilever, overhang, bigger upper floor, grow, shrink, offset outline, basement wall, copy outline
commands: levelOutline, buildingOutline, slab, wall, pathEdit
context: levelOutline
order: 30
---

## What

A level outline is the outer shape of one level. Once it is drawn, the level's slab is made in that shape by itself, and it changes when the outline changes. Each level may have its own outline, so drawing an upper level bigger, within the building outline, makes its slab overhang the level below.

## Steps

1. Make the level you want to outline the level you work on.
2. Click {m:levelOutline}.
3. To use the dashed reference shape as it is, click its Use button in the window.
4. To draw a new one, under {t:ol.mode.draw} click {t:ol.shape.poly} or {t:ol.shape.rect} and click points on the floor. A polygon closes when you click its first point again or press Enter.
5. To change the shape, under {t:ol.mode.edit} click a corner and then its new place. Clicking on a side adds a point there.
6. To move every side at once, type a distance in {t:ol.offset} and click {t:ol.grow} or {t:ol.shrink}.
7. When you are done, press Esc to close the tool.

## Tips

- The dashed reference shape: the ground floor drawn first shows the building outline, an upper level the nearest level below with an outline, a basement the nearest level above with an outline.
- After one level is drawn, the window offers a button that puts the same outline on every level of the building that has none, and a button that moves work to the next level without an outline.
- The {t:ca.outlinesFromShape} button of [Build Progress](help:arch-flow) gives every level of the building its building outline, curves included. Existing outlines change too; one undo brings them back.
- {t:ol.offset} starts at 0.5 m. To make an upper level 1 m bigger all round, use the reference shape, type \`1\` and click {t:ol.grow}. What reaches outside the building outline is cut off.
- Press, wait 0.5 s and drag while clicking points to make a curved side. Edit the points and handles of a curved outline with {c:pathEdit} ([Edit Curve](help:obj-curve-edit)).
- The window shows the outline's {t:ol.area} and {t:ol.perimeter}.
- {t:ol.autoSlab} is on from the start. The slab's top lies on the level's floor and its thickness goes downwards.
- On a basement, switch on {t:ol.retain} for a 0.3 m wall just inside the outline, up to the floor above.
- Once the outline is set, {t:ow.mode.all} in {m:outerWalls} raises the outer walls along it in one go: [Outer walls](help:build-outer-walls).
- The outline button on each level row of the {c:levelPanel} window opens the outline tool on that level too.
- Level outlines (basements too) stay inside the building outline. One reaching outside is cut back to it, with a message; one wholly outside, or one that would fall into pieces, is not set: [Building outline](help:build-outline).

## Common mistakes

- Changing the outline does not move walls already raised. Only the automatic slab and the basement wall follow the outline. Edit the walls separately, or delete them and raise them again.
- Deleting the automatic slab switches {t:ol.autoSlab} off, so it does not come back. Switch it on again or click {t:ca.slabsFromOutline} in [Build Progress](help:arch-flow).
- A shrink distance that is too big would turn the shape inside out, so nothing changes and a message appears. Use a smaller distance.
- An outline with fewer than 3 points, or a very small one, is not set.
- {t:ol.clear} also deletes the level's automatic slab.
- Changing the level you work on while drawing drops the points clicked so far and shows the new level's outline.
`,fi=`---
id: arch-railing
title: Railings
분류: 건축 부재
난이도: 중급
workspace: 3D 건설
keywords: railing, railings, handrail, balustrade, guardrail, fence, balcony railing, stair railing, roof railing, post spacing, railing height
commands: railing, stair, pathEdit
context: railing
order: 110
---

## What

Puts up railings through clicked points, along edges and lines, or along the side of a stair. Joining points at different heights makes the railing follow the slope.

## Steps

1. Click {m:railing}.
2. In the window, click {t:stairs.railHow.points}, {t:stairs.railHow.edge} or {t:stairs.railHow.stair}.
3. Set {t:param.h} and {t:opt.postSpacing}.
4. {t:stairs.railHow.points}: click points one after another and finish with a double click or Enter.
5. {t:stairs.railHow.edge}: click the edges or sketch lines to follow and finish with Enter.
6. {t:stairs.railHow.stair}: click one side of a stair; a railing follows that edge.
7. When you are done, press Esc.

## Tips

- {t:param.h} starts at 1.1 m (0.3 to 3 m) and {t:opt.postSpacing} at 1 m (0.1 to 10 m).
- With {t:stairs.railHow.points}, a point snapped to a corner, an edge end or a top face keeps its height. Clicking the stair nosings one after another makes the railing climb along the stair.
- With {t:stairs.railHow.points}, clicking the first point again closes the railing all round, for a balcony or a roof edge.
- With {t:stairs.railHow.points}, press, wait 0.5 s and drag while clicking points for a curved railing.
- With {t:stairs.railHow.edge}, edges and lines that meet end to end join into one railing. Clicking one that does not meet ends the railing so far and starts a new one.
- {t:stairs.railHow.stair} follows the flights and landings, on the side nearer the click.
- The tool stays open until Esc, so several railings can be drawn in a row. While drawing, {k:undo} takes back the last point.
- Select a drawn railing to change {t:param.h} and {t:opt.postSpacing} in the Properties window, or reshape its points and curves with {c:pathEdit}.
- The {t:stairs.rails} setting of the stair itself makes railings that are part of the stair ([stairs](help:arch-stair)).

## Common mistakes

- A railing made {t:stairs.railHow.stair} does not follow later changes to the stair. After changing the stair, delete the railing and make it again, or use the stair's own {t:stairs.rails} setting.
- {t:stairs.railHow.stair} does not work on spiral stairs.
- The railing lies flat on the floor instead of following the slope. The points went on the floor, not onto the object. Put the points on stair edge ends or corners; with object snap ({k:osnap}) on they are easy to hit ([object snap](help:snap-osnap)).
`,pi=`---
id: arch-roof-edit
title: Roof sides
분류: 건축 부재
난이도: 중급
workspace: 3D 건설
keywords: roof side, roof edge, sloped side, sloped edge, gable end, edit roof, change roof, box select sides, curved roof, round roof, curved side, slope of each edge, ridge, hip, skylight, roof window, roof opening
commands: roof, tweak, window
order: 130
---

## What

After you select what the roof covers, select for each side whether the roof rises from it. The roof slopes up from sides that are on; sides that are off end in a gable. A roof already made is changed the same way in the Properties window.

## Steps

1. Click {m:roof}, then click a slab or closed walls.
2. Click close to a side in the view to turn its slope on or off. Sides that are on show as solid lines, sides that are off as dashed lines.
3. To change several sides at once, press and drag a box over them. Every side inside the box turns on, or off when they were all on already.
4. To change every side at once, click {t:ca.allOn} or {t:ca.allOff} in the window.
5. Check the {t:opt.roofPitch} and {t:opt.overhang}, then Apply (Enter).
6. To change a finished roof, select it and click the numbered side buttons in the Properties window to turn sides on or off.

## Tips

- A curved side counts as one side, however many small steps it is made of. One click or one box turns the whole curved side on or off, and its numbered button in the Properties window carries a \`~\`.
- The window shows how many sides slope out of how many there are.
- Clicking a shape button ({t:opt.roofGable}, {t:opt.roofHip} …) sets the sloped sides for that shape again. Selecting the shape first and then fixing single sides is quickest.
- Under {t:archedit.roofSlopes} in the Properties window, give each sloped side its own slope. Different slopes move the ridge and hip points. {t:archedit.sameSlope} gives every side the same slope again.
- Moving a ridge point or line with {m:tweak} also changes the slopes of the sides, and the roof stays a roof you can change by its values.
- The Properties window also changes the shape, {t:opt.roofPitch}, {t:opt.overhang} and {t:opt.thickness}, and shows the {t:flow.roofEave} and {t:flow.roofRidge} heights.
- Skylights: select {t:preset.window.skylight} in {m:window} and click a roof slope. It lies on the slope, tilted with it, and cuts its hole in the roof. When the roof's slope or height changes the skylight moves with it, and deleting the skylight closes the hole.

## Common mistakes

- Clicking far from a side changes nothing. Click right next to the side.
- With every side off the roof is flat. Turn the sides that should slope back on.
- With many sloped sides on a complex outline, a message says the roof is made flat. Slope fewer sides or simplify the outline.
- A skylight placed off the roof, or away from its top surface, cuts no hole. Where there is no roof it lies on the floor.
`,mi=`---
id: arch-roof
title: Put on a roof
분류: 건축 부재
난이도: 중급
workspace: 3D 건설
keywords: roof, gable, gable roof, hip roof, shed roof, flat roof, pitch, slope, overhang, eaves, ridge, roof thickness, pitched roof, make a roof, add roof, rooftop, rof, ruf
commands: roof, wall, slab
howto: roof
context: roof
order: 120
---

## What

Puts a roof over a slab, a closed ring of walls or a rectangle drawn on the floor. Select the roof shape ({t:opt.roofFlat}, {t:opt.roofShed}, {t:opt.roofGable} or {t:opt.roofHip}) and set its {t:opt.roofPitch}, {t:opt.overhang} and {t:opt.thickness}.

## Steps

1. Click {m:roof}.
2. Click a slab or a wall, or draw a rectangle.
3. Select the roof shape and pitch, then Apply (Enter).

## Tips

- There are three ways to select what the roof covers. Clicking closed walls follows the outer faces of the walls; clicking a slab follows the slab's outline. Clicking two corners where there is no part makes a rectangle, and the second corner can be typed as width and depth, for example \`@10,8\`.
- The shape decides which sides slope. {t:opt.roofGable} slopes the longest side and the side opposite it, {t:opt.roofShed} only the longest side, {t:opt.roofHip} every side, and {t:opt.roofFlat} none. A side that does not slope ends in a gable.
- To turn single sides on or off, or to change a roof after it is made, see [Roof sides](help:arch-roof-edit).
- {t:opt.roofPitch}: 5° to 70° (default 30°). {t:opt.overhang}: 0 to 3 m (default 0.5 m). {t:opt.thickness}: 0.05 to 1 m (default 0.2 m). Number fields take [calculations](help:input-calc).
- The roof's underside sits at the floor of the {t:flow.roofBase} plus the {t:flow.offset}. It starts at the floor of the level above (on the top level: the current floor plus the storey height), which is the top of the top storey's walls. The window shows the {t:flow.roofEave} and {t:flow.roofRidge} heights as you change values.
- With {t:flow.roofAttach} on (the default), the walls under the roof rise to follow its underside. See [Wall tops](help:arch-wall-top).
- If you selected the wrong outline, click {t:opt.repick} or press Ctrl+Z and select again.
- Concave and curved outlines get a roof too, with valleys and hips worked out for you.

## Common mistakes

- Walls that do not close give only the bounding rectangle of the one wall you clicked. Close the walls, or click a slab instead.
- A message says no roof can be made because the outline crosses or folds over itself. Fix the shape of the walls or slab first.
- A message says the roof is made flat. The shape is too complex for a sloped roof: slope fewer sides or simplify the outline.
- Walls and slabs of another building cannot be selected. Click that building in the {c:levelPanel} to work in it, then click again.
- The roof floats above the walls or cuts into them. Check the {t:flow.roofBase} and the {t:flow.offset}.
- Pressing Esc after the outline is selected makes the roof as set so far and ends the tool. To end without a roof, first take the outline back with Ctrl+Z.
`,hi=`---
id: arch-slab
title: Lay a floor slab
분류: 건축 부재
난이도: 기초
workspace: 3D 건설
keywords: slab, floor slab, ceiling, floor, make a floor, slab from walls, automatic slab, slab thickness, hole in slab, stair opening, floor plate, deck
commands: slabAuto, slab, levelOutline, stair, pathEdit
howto: slab
context: slab, slabAuto
order: 60
---

## What

A slab is the plate that makes a level's floor. Its top lies on the level's floor height and its thickness goes downwards. Lay slabs under closed walls in one go, draw them as a rectangle or polygon, or let a level outline make one by itself.

## Steps

1. Draw the walls as a closed loop (back to the first point).
2. Click {m:slabAuto} and press Enter: a slab fills under the walls.
3. To draw one yourself, use {m:slab} with a rectangle or polygon.

## Tips

- The {c:slabAuto} tool finds every closed ring of walls on the current level and lays a slab out to their outer faces. The window shows how many it found in {t:opt.closedWalls}; walls whose ends meet all the way round count as closed too.
- The {t:opt.slabRect} shape of the {c:slab} tool takes two corners. Sizes typed in {t:opt.sideW} and {t:opt.sideH} make it that size.
- {t:opt.slabPoly} takes points one after another; click the first point again or press Enter to close it. Press, wait 0.5 s and drag while clicking points for curved sides.
- {t:opt.thickness} starts at 0.2 m and goes from 0.05 to 2 m. A value in {t:flow.baseOffset} raises the slab's top by that much.
- A level with a level outline gets its slab by itself, and the slab follows the outline ([level outline](help:arch-outline)). Drawing an upper outline bigger makes a slab that overhangs the level below.
- Holes in slabs: a stair cuts a hole its size in the slab above it by itself. The hole follows the stair when it moves and closes when the stair is deleted ([stairs](help:arch-stair)).
- Select a drawn slab to change its thickness in the Properties window, or reshape its edge points and curves with {c:pathEdit}.
- A slab can go on another level too: select it in the {t:lv.pickLevel} field of the window.

## Common mistakes

- {t:opt.closedWalls} shows 0. The walls are not closed, or they are on another level. Make the wall ends meet exactly, or check the level you work on.
- Using {c:slabAuto} or {c:slab} again on a level with an outline puts two slabs on top of each other. Delete one of them.
- The {c:slab} tool closes after one slab. For the next one click the button again, or press Enter to open the tool again.
- The slab seems to float above the floor. Check that {t:flow.baseOffset} is 0.
- No hole appears over a stair. Check that the stair's {t:stairs.slabCut} switch is on and that the slab is at the height of the stair's top.
`,gi=`---
id: arch-stair
title: Stairs
분류: 건축 부재
난이도: 중급
workspace: 3D 건설
keywords: stair, stairs, column, pillar, railing, staircase, straight stair, L-shaped stair, U-shaped stair, switchback, spiral stair, curved stair, landing, riser, tread, going, steps, stair opening, stairwell
commands: stair, column, railing, pathEdit
howto: stair
context: stair
order: 100
---

## What

Places a stair up to the level above. Its rise and number of steps follow the floor above by themselves, and the slab above gets a hole over the stair by itself. The column and railing tools of the same group are used with it.

## Steps

1. Click {m:stair} and click where the stairs start (R: turn 90°).
2. {m:column} puts a column wherever you click.
3. {m:railing}: click point after point for a railing.

## Tips

- After the start, the second click sets the way up. Clicking the start point again keeps the direction shown before the start was selected (the one R turns). The tool closes after one stair.
- Shapes: {t:opt.stairStraight}, {t:opt.stairL}, {t:opt.stairU}, {t:stairs.style.z}, {t:opt.stairSpiral} and {t:stairs.style.path}. For L, U and double switchback stairs, {t:stairs.flip} turns them the other way.
- {t:stairs.top} starts on the level right above. A higher level or {t:stairs.top.typed} can be selected instead.
- Selecting an edge or point of the floor above with the second click makes the stair rise to that height; a {t:opt.stairStraight} stair then fits its treads to end there.
- The number of steps is the {t:opt.stairRise} divided by {t:stairs.maxRiser} (0.18 m at first), rounded up. A 3 m storey gives 17 steps of about 0.176 m. You can also type {t:opt.stairSteps} yourself.
- {t:opt.stairWidth} starts at 1 m (0.5 to 5 m) and {t:opt.stairGoing} at 0.27 m (0.15 to 0.6 m). Risers higher than the max riser, or treads narrower than 0.26 m, show a warning in the window.
- {t:stairs.style.path}: draw the line you walk along, in the middle of the stair. Every turn gets a landing; Enter or a double click finishes. Press, wait 0.5 s and drag while clicking points for a curved stair.
- Under {t:stairs.rails} select {t:stairs.rails.none}, {t:stairs.rails.left}, {t:stairs.rails.right} or {t:stairs.rails.both}, and set {t:stairs.railHeight} (0.9 m at first). These railings are part of the stair and change with it. Spiral stairs do not have them.
- {t:stairs.slabCut} is on from the start and cuts {t:stairs.slabGap} (0.1 m at first) wider than the stair.
- Select a placed stair to change its shape, width, rise, steps, railings and hole in the Properties window. A stair drawn {t:stairs.style.path} can have its walking line reshaped with {c:pathEdit} ([Edit Curve](help:obj-curve-edit)).
- A stair tied to the level above changes its rise and number of steps when storey heights change.
- More on columns in [columns](help:arch-column) and on railings in [railings](help:arch-railing).

## Common mistakes

- A stair placed on the top level has no level to rise to, so its height must be typed. Start stairs on the lower level and go up.
- No hole appears in the slab above. Check that {t:stairs.slabCut} is on and that the slab is at the height of the stair's top.
- Only a stair drawn {t:stairs.style.path} can be reshaped with {c:pathEdit}. Change other stairs with the values in the Properties window.
- R turns the direction used before the start is selected. Once the start is selected, the second click sets the direction.
- A stair with a warning is hard to climb. Use more steps or draw a longer walking line.
`,_i=`---
id: arch-wall-top
title: Wall tops
분류: 건축 부재
난이도: 심화
workspace: 3D 건설
keywords: wall top, wall height, top constraint, up to the floor above, attach to, only to the next floor, attach to roof, attached to roof, wall under roof, gable wall, base level, base offset, top offset, sloped wall top, wall top points, double height wall
commands: wall, column, stair, roof
order: 50
---

## What

How far up a wall goes. Its height can be typed, tied to the floor of a level above, or attached to the underside of a roof. A wall tied to a level grows and shrinks with storey height changes.

## Steps

1. Click {m:wall}, and under {t:flow.top} in the window click {t:flow.top.toFloor}.
2. In {t:flow.topLevel}, select the level the wall top reaches. Selecting a higher level makes the wall pass the levels in between up to that floor.
3. To stop the wall at an in-between level where that level's slab covers it, switch on {t:flow.stopAtSlabs}.
4. Draw the wall.
5. For a wall already drawn, select it and change {t:flow.top} and {t:flow.offset} under {t:flow.props} in the Properties window.
6. To fit the wall top to a roof's underside, select the roof in {t:flow.props.attach} in the same place.

## Tips

- A wall tied to a level stops at the underside of that level's slab. With a 3 m storey and a 0.2 m slab, the wall is 2.8 m where the slab covers it and reaches 3 m only where there is no slab. The slab rests on the walls.
- Example: tie a ground floor wall to level 3 and switch on {t:flow.stopAtSlabs}. The part under the level 2 slab stops at the level 2 floor; only the part with no level 2 slab above it goes up to the level 3 floor. Use it for the outer walls of a building whose level 2 is smaller than level 3.
- {t:flow.stopAtSlabs} can only be switched on when there is a level in between. With the level right above selected, it stays off.
- Without a level above, {t:flow.top.aboveNone} is shown and the height is typed. Add a level with {c:levelAdd} to reach up to it.
- {t:flow.offset} is a distance added to the tied level's floor. Typing \`-0.5\` stops the wall 0.5 m below that floor.
- Changing {t:flow.props.level} and {t:flow.baseOffset} under {t:flow.props} changes the level and height the wall stands on; its place in plan stays.
- When a roof is made with {t:flow.roofAttach} on (it is on from the start), the walls of the storey right under it are cut along its underside, and walls at a gable end rise in a triangle ([roof](help:arch-roof)).
- A wall attached to a roof remembers its own height. Selecting {t:flow.props.detach} in {t:flow.props.attach}, or deleting the roof, gives that height back. The Properties window shows it as {t:archedit.ownHeight}.
- To slope a wall top, click {t:archedit.addTop} under {t:archedit.tops} in the Properties window and set {t:archedit.topAt} and {t:archedit.topZ}. The top runs straight between points; ends without a point stay at the wall height. {t:archedit.clearTops} makes it level again.
- Columns and stairs are tied to the floor above in the same way. {t:flow.stopAtSlabs} and roof attachment exist for walls only.

## Common mistakes

- A wall attached to a roof shows no {t:flow.top} field in the Properties window. Select {t:flow.props.detach} in {t:flow.props.attach} first.
- A wall made with {t:flow.top.height} keeps its height when storey heights change. In a building whose storey heights may change, tie walls with {t:flow.top.toFloor}.
- A wall top that does not reach the top of the slab is not a mistake: walls stop at the slab's underside.
- Deleting the level a wall is tied to ties it to the level that comes down in its place. With no level above, the wall keeps its current height and is no longer tied.
- With {t:flow.roofAttach} switched off when the roof was made, no wall is attached. Select that roof later in {t:flow.props.attach} for each wall.
`,vi=`---
id: arch-wall
title: Draw walls
분류: 건축 부재
난이도: 기초
workspace: 3D 건설
keywords: wall, walls, room, exterior wall, interior wall, outer wall, partition, wall thickness, wall height, centre line, center line, reference line, outer face, inner face, wall join, join walls, curved wall, round wall, draw a room
commands: wall, slabAuto, levelOutline, pathEdit
howto: wall
context: wall
order: 40
---

## What

Click points on the floor one after another to put up walls. A wall starts on the current level's floor and, when there is a level above, reaches up to its floor. Each clicked piece becomes a wall of its own, and walls that meet are joined cleanly by themselves.

## Steps

1. Click {m:wall}.
2. Click point after point to raise the walls (or type a length like 5).
3. Click the first point to close it; double-click or Enter to finish.
4. Set the thickness and height in the window.

## Tips

- Select where the drawn line lies in the wall with the picture buttons in the window: {t:flow.justify.center}, {t:flow.justify.left} or {t:flow.justify.right}. Typing \`f\` in the command line moves the wall to the other side of the drawn line.
- The thickness starts at 0.2 m and goes from 0.05 to 2 m. Without a level above, the height equals the storey height and goes from 0.1 to 30 m.
- With a level above, {t:flow.top} is set to {t:flow.top.toFloor}, so the wall height follows storey height changes. To type a height, click {t:flow.top.height}. More in [wall tops](help:arch-wall-top).
- The pointer snaps to wall ends, wall corners and wall lines on the same level, showing {t:flow.snap.end}, {t:flow.snap.corner} or {t:flow.snap.line}.
- Values in the {t:opt.segLength} and {t:opt.angle} fields of the window set the length and direction of the next wall. You can also type \`@5<90\` in the command line ([coordinates and lengths](help:input-coords)).
- Press, wait 0.5 s and drag while clicking points to draw a curved wall. A wall with curves is made as one wall.
- Switch {t:archedit.wallJoin} off and the ends of new walls are not joined to other walls. After drawing, the {t:archedit.joins} buttons in the Properties window join or free each end.
- To raise the outer walls along the outline in one go, on part of a side only, or to delete part of a wall, use {m:outerWalls}: [Outer walls](help:build-outer-walls).
- A value in {t:flow.baseOffset} starts the wall that much above the level's floor (below it for a negative value).
- Select a drawn wall to change its thickness, height and line position in the Properties window, slope its top with {t:archedit.tops}, or reshape its line with {c:pathEdit}.
- Esc keeps the walls drawn so far and closes the tool. While drawing, {k:undo} takes back only the last point.

## Common mistakes

- The walls are not closed, so {c:slabAuto} finds no closed walls. Click the first point again at the end, or make the wall ends meet exactly.
- Walls appear on another level. Check the {t:lv.pickLevel} field of the tool window and the level in the status bar.
- A wall is a little lower than the storey height, such as 2.8 m. It stops under the slab of the level above; this is correct ([wall tops](help:arch-wall-top)).
- There is no height field in the window. With {t:flow.top} set to {t:flow.top.toFloor}, the height follows the level above. Click {t:flow.top.height} to get the field.
- With {t:flow.justify.left} selected, drawing round the building counter-clockwise makes the walls grow outwards. Draw clockwise, type \`f\` in the command line, or flip it afterwards with {t:opt.flip} in the Properties window.
`,yi=`---
id: build-auto-roof
title: Automatic roofs and roof height
분류: 건물 세우기
난이도: 중급
workspace: 3D 건설
keywords: roof terrace, rooftop, automatic roof, flat roof, terrace, setback, roof height, exposed underside, piloti ceiling, auto roof, lower the roof, raise the roof, exposed face
commands: buildFlow, levelOutline, roof
order: 40
---

## What

Build works out the roofs from the level outlines alone. The part of a level's top that the level above does not cover becomes a flat roof (a roof terrace); the part of its bottom that the level below does not support is an exposed underside. A roof terrace's top sits flush with the floor above by default; {t:aw.roofOffset} moves it up or down per level.

## Steps

1. Raise a building with {t:ab.easy} or {t:ab.detailed}.
2. Draw an upper level's outline narrower than the level below: the part of the lower level's top it does not cover gets a flat roof by itself.
3. In the {t:fl.step.levels} step of the {c:buildFlow} window, under {t:ab.detailed}, find the row of the level that got the roof (the lower level).
4. Type a value in metres in {t:aw.roofOffset}. For example \`-0.1\` puts the roof top 0.1 m below the floor above.
5. Selecting the roof and changing {t:aw.roofOffset} in the Properties window does the same. All roof pieces of that level move together.

## Tips

- The top level has nothing above it, so its whole top is roof. That roof's top sits one storey height above the top level's floor.
- {t:aw.roofOffset} goes from -3 m to 3 m; 0 is flush with the floor above. The roof is 0.2 m thick and is placed by its top.
- When storey heights change, the roof terraces follow the floor above.
- Changing the roof height moves the walls attached to that roof along with its underside. Walls that reach the floor above stay: [Automatic wall splitting](help:build-wall-split).
- An underside the level below does not support (exposed underside) gets no part of its own: the level's slab covers it. That happens when an upper level is wider than the level below, and above a [piloti](help:build-piloti) level.
- If the upper level sits only in the middle of the lower one, or a [courtyard](help:build-courtyard) makes the terrace a ring, the flat roof comes in several pieces.
- Where the upper level of another building whose outline touches this one covers a level, no roof is made either: [Joined buildings](help:build-shared-levels).
- {t:ab.kind.piloti} levels and basements get no roof. On a piloti level, the part the level above does not cover is an open floor with only its slab.

## Common mistakes

- Looking for {t:aw.roofOffset} in the upper level's row. The roof height belongs to the level that has the roof (the lower level).
- An upper outline drawn slightly off the lower one can leave very narrow roof slivers. Pieces under 0.01 m² or under 20 mm wide on average get no roof, and when more than 1 m² is left out on one level the {c:buildFlow} window shows a note. To line corners up, start from {t:aw.useBelow} and edit.
- Deleting an automatic roof does not last: applying the level again makes it again. To get rid of a terrace, widen the upper outline over it.
- A roof made with {m:roof} has no {t:aw.roofOffset} field. Only roofs made by Build have it.
`,bi=`---
id: build-courtyard
title: Courtyards
분류: 건물 세우기
난이도: 중급
workspace: 3D 건설
keywords: courtyard, inner yard, open middle, building with a hole, ring-shaped building, outline hole, inner walls, clear courtyards, atrium, patio, make a courtyard, light well, slab hole
commands: levelOutline, buildFlow
order: 70
---

## What

Draws a hole inside a level outline to leave an open yard (courtyard) in the middle. Inner walls stand round the courtyard by themselves, and the level's slab gets a hole of the same shape.

## Steps

1. In the {t:fl.step.levels} step of the {c:buildFlow} window, under {t:ab.detailed}, click the outline button of the level to get the courtyard.
2. In the outline tool, click {t:ol.mode.draw}.
3. In the {t:aw.ring.outer} / {t:aw.ring.hole} choice, select {t:aw.ring.hole}.
4. Draw the courtyard inside the outline as a {t:ol.shape.poly} or a {t:ol.shape.rect}. The first corner can be typed as coordinates, such as \`5,5\`.
5. When it is finished it applies at once: inner walls stand round the courtyard and the slab gets its hole.
6. For a courtyard open from top to bottom, draw it at the same place on every level above.

## Tips

- A level can have several courtyards. To remove them all, click {t:aw.courtClear} in the outline tool.
- The part reaching outside the outline is cut off; only the part inside becomes the courtyard.
- The roof terrace round a courtyard is made as several flat roof pieces that leave it open: [Automatic roofs and roof height](help:build-auto-roof).
- A ceiling over the whole level leaves the courtyard open too.
- Setting a level with a courtyard to {t:ab.kind.piloti} puts columns round the courtyard as well: [Piloti](help:build-piloti).
- {t:aw.useBelow} takes the outer outline only, not the courtyards. Draw the courtyards on each level.
- A building closed on all four sides gets one courtyard; one open on a side is made by drawing a U-shaped building outline: [Courtyard house](help:brec-courtyard-house), [U-shaped building](help:brec-u-shape).
- A hole in the slab with no walls round it: see [Atrium through several levels](help:brec-atrium).

## Common mistakes

- With a courtyard on the ground floor only, the floor of Level 2 covers it. For a courtyard open to the sky, draw it at the same place on every level above.
- The {t:aw.ring.hole} choice shows only under {t:ol.mode.draw} on a level that already has an outline. Draw the outline first.
- A courtyard drawn outside the outline is not made, and a message says so.
- In a building started by hand, a courtyard drawn with the outline tool opened from the {c:levelPanel} or the menu cuts the slab only, with no inner walls. To get the inner walls, open the tool with the outline button under {t:ab.detailed}.
- {t:ol.clear} removes the level's courtyards too.
`,xi=`---
id: build-detailed
title: Building Per Level
분류: 건물 세우기
난이도: 중급
workspace: 3D 건설
keywords: advanced, outline per level, level kind, normal, piloti, penthouse, level below, level above, outline as is, building outline, setback, overhang, apply outline, shape per level, details, set these levels, outer walls, raise walls, pick sides, part of a side
commands: buildFlow, levelOutline, outerWalls, buildingEasy
order: 30
---

## What

Builds by giving each level its own outline and {t:ab.kind} ({t:ab.kind.normal}, {t:ab.kind.piloti}, {t:ab.kind.rooftop}). Finishing an outline or changing a kind makes the roofs, slabs and piloti columns of that level and of the level right below again at once. {t:ab.detailed} makes no walls by itself: raise them with {c:outerWalls}. Use it also to change a single level of a building made with {t:ab.easy}.

## Steps

1. In the {t:fl.step.levels} step of the {c:buildFlow} window, select {t:ab.detailed} next to {t:ab.build}. The levels are listed from the top down.
2. Click the name of the level to change to work on it.
3. Click that level's outline button ({t:aw.outlineDraw}, or its area in m²) to open the outline tool, then draw a new outline or move its points. It applies as soon as the outline is finished.
4. For the same shape as the level below, click {t:aw.useBelow} next to the outline button. When no level below has an outline, {t:aw.useShape} is shown instead, which takes the building outline as it is.
5. In the {t:ab.kind} field select {t:ab.kind.normal}, {t:ab.kind.piloti} or {t:ab.kind.rooftop}. It applies as soon as it is selected.
6. For walls, click {t:cmd.outerWalls} above the list. At the top of its window select {t:ow.mode.all}, {t:ow.mode.pick} or {t:ow.mode.draw}, then click {t:ew.build} at the bottom of the window: [Outer walls](help:build-outer-walls).
7. A level with an automatic roof gets a {t:aw.roofOffset} field under its row; a {t:ab.kind.piloti} level gets its column fields there.

## Tips

- {t:ab.kind.normal} is an ordinary level with a slab, {t:ab.kind.piloti} a level with columns only ([Piloti](help:build-piloti)), {t:ab.kind.rooftop} a top level smaller than the one below. {t:ab.kind.rooftop} only changes the name: it gets the same parts as {t:ab.kind.normal}.
- A basement shows {t:aw.useAbove} next to its outline button.
- Level outlines (basements too) stay inside the building outline. A part reaching outside is cut off; an outline wholly outside, or one that would fall into pieces, is not taken. For an upper level that overhangs, draw the building outline as large as the widest level and shrink the levels below: [Building outline](help:build-outline).
- The {t:cmd.outerWalls} button is the same as {m:outerWalls} on the menu. Each selected side or stretch gets one ordinary wall, at first with its outer face on the outline, up to the floor above. One raise is one undo step.
- Walls raised with {c:outerWalls} are like walls drawn by hand: they do not follow when the outline changes. Only the outer walls of a building made with {t:ab.easy} are made again along the outline.
- Each apply is one undo step. A message gives the number of walls, columns and roofs made again.
- With the {t:ceil.build} switch above the list on, a level whose outline you finish gets its ceiling too.
- In the outline tool, selecting {t:aw.ring.hole} under {t:ol.mode.draw} draws an open yard inside the outline: [Courtyards](help:build-courtyard).
- Set the number of levels and the storey height in the fields at the top and click {t:fl.planApply}. A new building with only its outline drawn has one level, so add its levels here. A new level takes the outline of the level below, a new basement the one above.
- Roofs and walls between levels of different shapes: [Automatic roofs and roof height](help:build-auto-roof), [Automatic wall splitting](help:build-wall-split).
- Problems of the building are listed one per line above {t:ab.build}. An outline overlapping another building or reaching outside its site comes with an {t:cmd.outlineEdit} button; walls or columns outside the outline come with a {t:bo.issuePick} button.
- For a building with walls drawn by hand, the {c:buildFlow} window starts with {t:ab.detailed} selected.

## Common mistakes

- The outline is set but no walls appear. {t:ab.detailed} makes no walls by itself. Raise them with {c:outerWalls}.
- An upper level made wider was cut back. Level outlines cannot reach outside the building outline. Widen the building outline first with {c:areaEdit}.
- The outline tool opened from the {c:levelPanel} or the menu makes the roofs again at once only in a building made with Build. For a building started by hand, open it with the outline button under {t:ab.detailed}.
- In a building made with {t:ab.easy}, a changed outline makes the level's automatic walls new, so a door or window whose new wall does not stand where the old one did is deleted. Settle the outlines before adding doors and windows.
- If you edit an automatic wall by hand and then apply its level again, the wall may be replaced by a new one. Undo with {c:undo} ({k:undo}).
- Changing a level to {t:ab.kind.piloti} deletes all of its outer walls and puts up columns. Doors and windows in those walls go too.
`,Si=`---
id: build-easy
title: Quick Building
분류: 건물 세우기
난이도: 기초
workspace: 3D 건설
keywords: quick building, basic, fast building, whole building at once, number of floors, storey height, basement, build again, auto building, quickbuilding, easybuilding, draw site, draw outline, building outline, grading, leave as is, add ceilings, outer walls, wall, no wall, part, walls per side, part of a wall, garage
commands: buildingEasy, buildFlow, buildingOutline, siteArea, grade, levelAdd
context: buildingEasy
order: 20
---

## What

Set the number of floors and the storey height, and the levels, level outlines, outer walls, slabs and a flat roof all appear on the building outline at once. The window walks you through ① {t:bo.step.site} ② {t:bo.step.outline} ③ {t:bo.step.grade} ④ {t:bo.step.build} and starts with any step still missing. Step ③ may be skipped: the whole site is never asked to be graded first. Every level's outline takes the shape of the building outline, and the outer walls follow it. Each side can have a wall, no wall, or a wall on part of it. The whole result is one undo step.

## Steps

1. Click {m:buildingEasy}. Typing \`quickbuilding\` on the command line does the same.
2. With sites drawn, select the site in the {t:bo.site} list. To build on the whole land without a site, select {t:bld.wholeLand}. With no site at all this step is done by itself.
3. Select the building to raise in the {t:bo.outlinePick} list. Without an outline, click {t:aw.drawOutline} and draw one. When it is drawn, the window opens again.
4. On land with terrain a {t:bo.grade} button shows at the bottom. It opens the grading tool on the ground under the building outline, and the window opens again when the tool is closed. Skip it to build on the ground as it is.
5. Set {t:bnew.above} (1 to 50), {t:bnew.below} (0 to 10) and the {t:bnew.height} (m).
6. In the {t:ec.title} box, set the sides that need no wall to {t:ec.state.none}, and those open only in part to {t:ec.state.part}. Left as they are, walls go all round.
7. Check the place named in the note at the bottom of the window, then click {t:aw.easyGo}. A message lists the levels, walls, columns and roofs made, and work moves to the building's ground floor.

## Tips

- Where the window opens from: the menu button, the {c:buildingEasy} button at the bottom of the {c:levelPanel} window, the side bar and right-click menu of a building outline, and the {c:buildFlow} window of a scope without a building. Opened with a building outline selected, that building is already selected.
- Instead of the {t:bo.site} and {t:bo.outlinePick} lists, you can click {t:bo.pickInView} and then click a site or building outline in the view. Esc goes back to the window.
- The {t:bo.outlinePick} list shows the buildings with an outline but nothing raised yet, with their areas. To draw a new outline, select {t:bo.outlineNew}.
- The {t:ec.title} box has a small plan of the outline with its sides numbered, and a list with one line per side, such as Side 3 · 12.0 m. Each line selects {t:ec.state.wall}, {t:ec.state.none} or {t:ec.state.part}. A click on a side in the plan switches it between {t:ec.state.wall} and {t:ec.state.none}. The plan and list are the same as {t:ow.mode.pick} in [Outer walls](help:build-outer-walls).
- {t:ec.state.part}: set each stretch with no wall by {t:ec.start} (from the side's first point) and {t:ec.length}, in mm, or drag the dots at its ends on the plan. {t:ec.addGap} gives a side more stretches. For example, start 8000 and length 3000 on a 20 m front side opens only its middle 3 m.
- Deleting part of an outer wall later with {t:ow.mode.cut} in {m:outerWalls} shows up here as {t:ec.state.part} too, and building again leaves that stretch open.
- With two or more levels, select one level instead of {t:ec.allLevels} in the level list of the {t:ec.title} box to change the walls of that level only. For example, select Level 1 and set the front side to {t:ec.state.none} for an open garage on the ground floor. Basements are not in the list.
- With {t:ec.allLevels} selected, a side whose walls differ from level to level shows {t:ec.state.varies}. Selecting {t:ec.state.wall} or {t:ec.state.none} in its row makes every level the same.
- A curved side can be set to {t:ec.state.part} too: {t:ec.start} and {t:ec.length} are measured along the curve. {t:ab.kind.piloti} levels have no outer walls anyway.
- A side set to {t:ec.state.none} stays without a wall as a whole when the building outline is changed later and the side gets longer.
- Walls, roofs and columns made by building that you delete or change stay so when the building is raised again or a level is added. A deleted outer wall shows in the {t:ec.title} box as {t:ec.state.none} or {t:ec.state.part} on its level; a changed part becomes one drawn by hand.
- When raising again changes the walls so that a door or window has no wall left to sit in, it is deleted, and a message gives the number with a {t:cmd.undo} button.
- The first time, the window holds 3 floors, 0 basements and a 3 m storey height; after that it keeps the values you used last. Drawing a site or an outline on the way keeps the values you typed.
- With {t:ceil.build} on (it starts on), every level except piloti levels gets a ceiling too.
- Basements get a 0.3 m basement wall along their outline instead of outer walls. Every level gets a slab; the top level gets the flat roof.
- The ground floor height follows the grading of that place if it has one, else the highest ground there (0 without terrain). Change it later in the {t:fl.step.base} step of [Build Progress](help:arch-flow).
- For a building made this way, change the floors, the storey height and the walls per side under {t:ab.easy} in the {t:fl.step.levels} step of the {c:buildFlow} window and click {t:aw.easyAgain}. New levels take the outline of the level next to them.
- When the building outline is changed, the outer walls are made again along the new outline: [Building outline](help:build-outline).
- Adding a level with {m:levelAdd} also gives the new level the outline below with its walls, and the flat roof moves up to the new top level. With {t:ceil.build} on, the new level gets its ceiling too.
- To change the shape of one level only, use [Per level](help:build-detailed).
- The level list of {t:ec.title} shows the floors typed even before the building is built (Level 1, Level 2 …) and applies them to the real levels when it is built: a ground floor carport is one pass. Each row also names the way the side faces, and pointing at a row or side highlights it in 3D with its number. {t:ec.start} and {t:ec.length} are typed in mm with the value in m beside them.
- Grading is not asked first: once the outline is drawn, a {t:bo.grade} button offers to flatten the ground under it, and it may be skipped.

## Common mistakes

- The storey height is in metres. Type \`3\`, not \`3000\`.
- {t:aw.easyAgain} with fewer floors keeps the levels that hold parts you placed by hand. The message says how many were kept.
- In a building whose walls or columns were drawn by hand, {t:ab.easy} shows a note and a {c:buildingEasy} button instead of {t:aw.easyGo}. Change that building under [Per level](help:build-detailed), or build a new one.
- No building outline is made up for you. With no building to raise, the {t:bo.outlinePick} list shows {t:bo.outlineNew} and the main button turns into {t:aw.drawOutline}.
- A side set to {t:ec.state.none} or {t:ec.state.part} gets no wall there when the building is raised again. For a wall there, set the side to {t:ec.state.wall} and click {t:aw.easyAgain}.
- When a stretch ends less than 0.3 m from the end of its side, the short wall left between is not made.
`,Ci=`---
id: build-names-tree
title: Building names, colours and the project tree
분류: 건물 세우기
난이도: 기초
workspace: 3D 건설
keywords: building name, Building A, building colour, building color, project tree, project list, project window, tree, levels list, land, site, civil, basement name, B1, rename, hide building, path, where am I working, all levels, right click, ceilings on all levels, move building, another site, drag and drop
commands: levelPanel, buildingEasy, buildingNew, buildingOutline, levelAdd, ceilingAll
order: 90
---

## What

New buildings are named **Building A, Building B …** and each gets its own colour. The {c:levelPanel} window shows land › site › building › level and the civil structures in one list; there you select where to work and manage names, colours, hiding and deleting.

## Steps

1. Click the levels button in front of the path in the status bar to bring the {c:levelPanel} window to the front. At first the window is docked at the right of the screen.
2. A click on a row only selects: a site row selects that place, a building or level row selects its shown parts, and the row is marked. Double-click a row, its name included, or press Enter to move work to that site, building or level. While a tool is open, a click on a level row only moves the work to that level and selects nothing. A click on the {t:aw.land} row moves work to the whole land.
3. Use a row's **+** button to add what goes under it: the {t:aw.land} row does {t:aw.addSite}, a site row opens the tool that draws a [building outline](help:build-outline) on that site, a building row adds a level.
4. The eye button of site and building rows hides them in the view or shows them again.
5. Right-click a row for a menu with {t:aw.rename}, {t:aw.delete} and more. Deleting asks once more. F2 on a selected row renames it too; a name is a field only while it is renamed.
6. Building and level names can also be changed in place by clicking the name field of the row (up to 40 characters). Enter keeps the name, Esc goes back.

## Tips

- The right-click menu adds {c:planView}, {c:ceilingView} and {c:archSection} on a level row, and {c:archSection}, {t:aw.color} and {c:ceilingAll} on a building row. Selecting a view moves the work scope to that level or building first.
- A new building takes the first letter not used in the project yet: with Building A there, the next is Building B. A renamed building (such as Main Hall) holds no letter.
- With more than one building, level names start with the building name, such as Building A · Level 2.
- New basements are named B1, B2. A level name you typed stays as it is.
- A new building gets a colour not used yet, saved in the file. The same colour shows in the list, in the path on the status bar and on buildings faded outside the work scope.
- Under {t:aw.color}, select one of twelve colours or any colour with the colour picker; {t:aw.colorAuto} goes back to the colour given by the building's place in the list. Colours dragged in the colour picker go back in one undo step.
- Buildings are listed under the site they stand on; a building on no site is listed right under the {t:aw.land} row. Buildings whose outlines touch get a row each too: [Joined buildings](help:build-shared-levels).
- Drag a building row onto another site row, or pick a site under {t:so.moveToSite} in the building row's right-click menu. When the building lies outside that site you are asked first; it then moves to the middle of the site, or else to the nearest free place 1 m clear of the other buildings, and is selected and brought into view. If there is no room, it stays and a message says so. The Objects window works the same way.
- A level row has its name, the {t:levels.height} field, its floor height, the outline button, the view button (each click: shown → faded → hidden), show only this level and zoom to it. The ground floor button of a building row sets the ground floor height again.
- Under the list are the {t:levels.add}, {t:levels.addBasement}, {t:levels.copy}, {t:levels.delete}, {c:buildingEasy} and {c:buildingNew} buttons and the {t:levels.upper} choice: [Levels](help:arch-levels).
- The {t:aw.civil} group at the end lists civil structures such as roads, bridges, tunnels and levees, in order of kind and by their own names (Road 1, Bridge 1 …). Click one to select it.
- A new part or structure gets the number after the highest one of that name: with Road 1 and Road 3, a new road is Road 4. Existing names never change.
- Click a step of the path in the status bar (Site 1 › Building A › Level 3) to move to another place at that step: [Work scope](help:site-scope).
- Box selection selects parts of the current level of the current building only. Turn on {t:ab.allLevels} in the status bar to reach every level of that building.

## Common mistakes

- Sites and buildings hidden with the eye button are hidden in the view only and not saved. They show again when the file is opened again.
- The only building cannot be deleted. Trying offers {t:lt.clearBuilding} instead, which removes everything in it.
- Deleting a site leaves the buildings on it. If the site has grading, you are asked first whether it goes too.
- Deleting a level that holds objects asks whether to delete them too or keep them on another level.
- Another building only shows faded: it is outside the work scope. To work on it, double-click its row in the list.
- Clicking a building row selected all its parts. A click only selects; double-click to move work there.
`,wi=`---
id: build-outer-walls
title: Outer walls
분류: 건물 세우기
난이도: 기초
workspace: 3D 건설
keywords: outer walls, outerwalls, edgewall, walls along the outline, all, pick sides, draw, delete part, part of a wall, delete part of a wall, stretch, part of a side, wall thickness, wall height, outer face, centre, inner face, all levels, walls first, outline from walls
commands: outerWalls, wallCut, wall, buildingOutline
howto: outerWalls
context: outerWalls, wallCut
order: 35
---

## What

One window for the outer walls along the building outline. The four ways at its top share the same settings. {t:ow.mode.all} raises walls on every side, {t:ow.mode.pick} on the sides you select or on part of them. {t:ow.mode.draw} draws walls as lines, and {t:ow.mode.cut} deletes one stretch of a wall already there. Every way makes ordinary walls, changed later in the same way.

## Steps

1. Click {m:outerWalls}. The {t:fl.step.walls} step of [Build Progress](help:arch-flow) and the {t:cmd.outerWalls} button under {t:ab.detailed} open the same window.
2. At the top of the window select {t:ow.mode.all}, {t:ow.mode.pick}, {t:ow.mode.draw} or {t:ow.mode.cut}.
3. Set the settings, always in the same order: {t:opt.wallJustify} ({t:flow.justify.left}, {t:flow.justify.center}, {t:flow.justify.right}), {t:flow.top}, {t:opt.thickness}, {t:param.h}, and {t:ew.thisLevel} or {t:ec.allLevels}.
4. With {t:ow.mode.all}, click {t:ew.build} at the bottom of the window. Every side of the outline gets a wall. That button is the window's only action button; in {t:ow.mode.cut} it reads {t:ew.delete}.
5. With {t:ow.mode.pick}, click a side in the view for all of it, or drag along it for that stretch only. The window's list can also set each side to {t:ec.state.wall}, {t:ec.state.none} or {t:ec.state.part}. Then click {t:ew.build}.
6. With {t:ow.mode.draw}, the [Walls](help:arch-wall) tool opens with the same settings: click the points of the walls one after another. With {t:ow.mode.cut}, drag along a wall over the stretch to delete, then press Delete or click {t:ew.delete}.

## Tips

- {t:opt.wallJustify} says which face of the wall lies on the outline. With {t:flow.justify.left}, the first choice, the wall stands inside the outline.
- With {t:flow.top.toFloor} under {t:flow.top}, the walls reach the floor above and follow storey height changes. Without a level above, type the {t:param.h}.
- {t:ec.allLevels} raises the walls on every level with the same side at once. {t:ow.mode.all} gives basements their 0.3 m basement wall and skips levels that have walls already.
- The window is named {t:cmd.outerWalls} whichever way is selected. The way in use shows in the buttons on top.
- Dragging along a side snaps to its ends and its middle, and to the grid step elsewhere. Start and length show next to the cursor in mm while you drag.
- Curved sides and curved walls can be selected and deleted in part too. Start and length are measured along the curve, and the snaps are the curve's ends, the middle of its length and the grid step measured along it. The stretch selected is drawn on the curve itself.
- While a stretch is being selected with {t:ow.mode.pick} or {t:ow.mode.cut}, the levels above and the roofs and ceilings of this level are drawn faded, so the walls show from above. Another way or closing the window brings the view back. The {c:upperLevels} setting does not change.
- Type start,length in mm on the command line, such as \`2000,3000\`, to select that stretch of the side last pointed at. One number changes the length of the last stretch.
- The window's plan and list use the same numbers and words as the {t:ec.title} box of [Quick Building](help:build-easy). {t:ec.state.part} takes a {t:ec.start} and {t:ec.length} in mm for each stretch, or the dots dragged on the plan.
- {t:ow.mode.cut} is the same as {c:wallCut} in a wall's right-click menu. The pieces on either side stay; doors and windows wholly inside the stretch go with it, and the message gives their number. A curved wall is split on its curve there, and the pieces left keep the same curve, thickness, top and justification.
- Deleting part of an outer wall of a building made with {t:ab.easy} turns that side to {t:ec.state.part} in the {t:ec.title} box. Building again leaves the stretch open.
- Walls may come first. In a building without an outline, walls closing a ring give it its building outline along their outer faces, with the message {t:bo.fromWalls}. One undo takes the walls and the outline back. The message has {t:cmd.outlineEdit} and {t:cmd.undo} buttons. A small or very thin ring may be a slip: it is not made into the outline by itself, and the message asks with {t:bo.fromWallsBtn}. When the walls that made the outline are changed later, a message offers {t:bo.refit}.
- Walls that do not close make no outline, and the {t:fl.step.shape} step of [Build Progress](help:arch-flow) offers {t:bo.fromWallsBtn}, which makes an outline round all the walls drawn.
- Each raise and each delete is one undo step.

## Common mistakes

- {t:ew.build} is greyed out under {t:ow.mode.pick}. No side is selected yet. Click a side, or set one to {t:ec.state.wall} in the list.
- A message says a door or window lies across an end of the stretch. A stretch cutting through a door or window is not deleted. Move the stretch clear of it, or take the door or window in.
- Closed, stepped-top and linked walls cannot lose only a part; nor can a closed curved wall. An outer wall made by building can, even a closed one.
- A stretch shorter than 100 mm cannot be deleted. Dragging to within 100 mm of an end deletes up to that end.
`,Ti=`---
id: build-outline
title: Building outline
분류: 건물 세우기
난이도: 기초
workspace: 3D 건설
keywords: building outline, outline, footprint, building footprint, building area, coverage, building coverage ratio, where the building stands, ground area, new building, make a building, draw outline, edit outline, delete building, move building, another site
commands: buildingOutline, siteArea, areaTable, buildingEasy
howto: buildingOutline
context: buildingOutline
order: 15
---

## What

The tool that draws the most ground a building may take up. Drawing an outline makes a building there at once. The empty Building A of a new document takes the first outline; after that each outline makes a new Building B, Building C and so on. Level outlines, walls and columns must all stay inside it, and the legal building area and the coverage ratio are worked out from the levels by themselves.

## Steps

1. Click {m:buildingOutline}. {c:buildingNew} and the **+** button of a site row in the project tree open the same tool.
2. With sites drawn, select the site the building stands on in the {t:so.target} list of the window. To build without a site, select {t:bld.wholeLand}.
3. Select {t:opt.areaRect} or {t:opt.areaPoly} and draw the outline. In a polygon, press, wait 0.5 s and drag to make a curved side.
4. When it is drawn the building is made, and a message gives its name and area (for example Building B made · 120.0 m²). Work moves to its ground floor.
5. Raise its levels, walls and roof with [Quick Building](help:build-easy) or [Per level](help:build-detailed).

## Tips

- A site is not needed. With no site at all, the outline is drawn on the whole land. With a site selected, the points are held inside it, and the selected site shows dashed.
- Building outlines may touch but must not overlap. An overlap of more than 0.1 m² is not drawn, and a message says so. Touching buildings cover and support each other's floors and roofs: [Joined buildings](help:build-shared-levels).
- The outline is the most ground the building takes up. A level outline (basements too) reaching outside it is cut back to it, with a message. A level outline wholly outside, or one that would fall into pieces, is not taken.
- Walls and columns drawn outside the outline are not made, and a message says so. Slabs, stairs, railings and furniture may stand outside, but a note above {t:ab.build} in [Build Progress](help:arch-flow) points them out. Roofs may reach outside for their eaves.
- The building area is worked out by itself. With level outlines, it is the area of the levels above ground put together (piloti included, basements and courtyards left out), measured inside the building outline. Without level outlines it is the largest floor area measured, and without that the building outline's own area. The [area table](help:site-area-table) notes where it came from, such as {t:at.byLevels}, {t:at.largestFloor} or {t:at.byOutline}.
- Coverage is building area ÷ site area. Example: on a 500 m² site, draw a 12 × 12 m building outline, then give Level 1 a 10 × 12 m outline and Level 2 a 12 × 12 m one. The building area is both levels together, 144 m², and the coverage is 28.8 %. A larger basement does not count.
- The {t:fl.step.shape} step of the {c:buildFlow} window shows the outline's area with the building area and coverage.
- Changing it later: with no tool, click the empty ground inside an outline to select it. Its side bar and right-click menu offer {c:areaEdit}, {c:buildingEasy} and {c:areaDelete}. A double click inside the outline moves the work scope into that building.
- Reshaping with {c:areaEdit} (dragging corners, editing curves or drawing it again) applies at once. Levels that had the old outline take the new one; other levels are cut to it. The walls and roofs made by building are made again for the new outline, and so are those of a building touching it. Walls drawn by hand that are left outside stay, and a message counts them.
- A side set to {t:ec.state.none} stays without a wall as a whole when it gets longer. The stretches of {t:ec.state.part} keep their places, measured from the side's first point.
- {c:areaDelete} deletes the building with its levels and parts. When it is the only building, {t:lt.clearBuilding} is offered instead. When its outline has its own grading, you are asked first whether the grading goes too, as for a site.
- Moving it to another site: drag the building row onto another site row in the project tree or the Objects window. The building moves to the middle of that site, or else to the nearest free place, and a message says so. Changing the {t:so.bldSite} list in step ① of the {c:buildFlow} window or {t:so.moveToSite} in the right-click menu does the same, asking first when the building lies outside that site. The free place keeps 1 m from the other buildings, and the building moved is selected and brought into view.

## Common mistakes

- Nothing is made and a message says the outline reaches outside the site. Another corner or side of the rectangle crosses outside the site. Draw it again inside, or switch {t:so.target} to {t:bld.wholeLand}.
- A message says it overlaps another building's outline. Draw the two outlines touching only; starting from the other building's corners makes them touch exactly.
- An outline made smaller does not change. A shape that would split a level outline in two, or leave a level with none, is not taken. Change the level outlines first.
- An upper level cannot overhang past the outline. Draw the building outline as large as the widest level, then shrink the lower levels under [Per level](help:build-detailed).
- Dragged onto another site, a message says it does not fit. That site is smaller than the building or has no free place left. The message gives both sizes, width × depth.
`,Ei=`---
id: build-overview
title: Building a Building
분류: 건물 세우기
난이도: 기초
workspace: 3D 건설
keywords: build, building, make a building, raise a building, basic, advanced, quick building, auto walls, auto roof, outline per level, whole building at once, checklist, site grading outline build, building outline, steps
commands: buildingEasy, buildFlow, levelOutline, buildingOutline
order: 10
---

## What

Makes the levels, level outlines, outer walls, slabs and roofs in one go instead of drawing them one by one. Every building starts from its [building outline](help:build-outline). {t:ab.easy} raises the whole building, outer walls included, from the number of floors and the storey height; {t:ab.detailed} sets an outline and a {t:ab.kind} for each level and raises walls only on the sides you select. Both make the same data, so you can build with {t:ab.easy} and then change a single level under {t:ab.detailed}.

## Steps

1. Click {m:buildingEasy}.
2. At the top of the window, the steps ① {t:bo.step.site} ② {t:bo.step.outline} ③ {t:bo.step.grade} ④ {t:bo.step.build} show which one is next. The main button at the bottom does that step.
3. If there is no building outline yet, click the main button and draw it. When it is drawn, this window opens again.
4. Set {t:bnew.above}, {t:bnew.below} and {t:bnew.height}, then click {t:aw.easyGo}.
5. If a level needs another shape, select {t:ab.detailed} in the {t:fl.step.levels} step of the {c:buildFlow} window and change that level's outline or {t:ab.kind}. Changes apply at once.
6. If you do not like the result, click {c:undo} ({k:undo}). Each build and each change is one undo step.

## Tips

- {t:ab.easy} gives every level the shape of the building outline, puts outer walls round it (each side can be switched off) and a flat roof on top: [Quick Building](help:build-easy).
- A building whose third floor is narrower, one standing on columns, or one with an open middle is made under [Per level](help:build-detailed).
- What is worked out by itself: [Automatic roofs and roof height](help:build-auto-roof), [Automatic wall splitting](help:build-wall-split), [Piloti](help:build-piloti), [Courtyards](help:build-courtyard).
- The {t:ceil.build} switch is on from the start: every level except piloti levels gets a ceiling that follows the storey height: [Ceilings](help:arch-ceiling).
- Recipes to follow: [U-shaped building](help:brec-u-shape), [Narrower third floor](help:brec-setback), [Piloti ground floor](help:brec-piloti-overhang), [Courtyard house](help:brec-courtyard-house), [Stepped tower](help:brec-stepped-tower).
- Drawing walls one by one still works too: [Small house from walls](help:brec-small-house).
- Select and manage buildings and levels in the list of the {c:levelPanel} window: [Building names, colours and the project tree](help:build-names-tree).

## Common mistakes

- Deleting automatic walls and roofs one by one and drawing them again. To change the shape, edit that level's outline: its walls and roofs are made again with it.
- A level with walls drawn by hand gets no automatic outer walls, only its roofs.
- A building made with {t:ab.detailed} only gets no walls by itself. Raise them with {m:outerWalls}: [Outer walls](help:build-outer-walls).
- Changing an outline makes that level's automatic walls again. A door or window whose new wall does not stand where the old one did is deleted, so settle the outlines before adding doors and windows.
- On land with terrain, step ② needs a choice, {t:bo.grade} or {t:fl.gradeSkip}, before the next step comes.
`,Di=`---
id: build-piloti
title: Piloti
분류: 건물 세우기
난이도: 중급
workspace: 3D 건설
keywords: piloti, pilotis, columns only, ground floor parking, open ground floor, column spacing, column size, round column, square column, piloti columns, piloti level, stilts, pillars
commands: buildFlow, column, levelOutline
order: 60
---

## What

A level that stands on columns, with no outer walls. Set its {t:ab.kind} to {t:ab.kind.piloti}: its outer walls go, and columns stand at every corner of the outline and at regular spacing along it. Use it for an open ground floor such as a car park.

## Steps

1. Raise a building with {t:ab.easy} or {t:ab.detailed}.
2. In the {t:fl.step.levels} step of the {c:buildFlow} window, select {t:ab.detailed}.
3. In the {t:ab.kind} field of the level to stand on columns, select {t:ab.kind.piloti}. It applies at once.
4. The level's outer walls are deleted and, at first, 0.4 m square columns stand at most 5 m apart, one at every corner too.
5. Change the {t:ab.columnSpacing} and {t:aw.pilotiSize} (in metres) that appear under that level's row.
6. Select {t:aw.square} or {t:aw.round}. Every change makes the columns again at once.

## Tips

- Example: a 20 × 10 m level turned into a piloti level gets 12 columns (4 corners, 3 between them on each long side, 1 on each short side).
- Columns stand half a column size inside the outline. Each side is divided evenly at no more than the spacing, so the real spacing can be a little less than the value set.
- {t:ab.columnSpacing} goes from 1 to 20 m, {t:aw.pilotiSize} from 0.15 to 2 m.
- Columns reach from the level's floor to the floor above, or one storey height on the top level.
- The piloti level keeps its slab as an open floor. It gets no roof, and the bottom of the level above is an exposed underside: [Automatic roofs and roof height](help:build-auto-roof).
- A piloti level gets no ceiling. A ceiling over the whole level made with {t:ceil.build} is deleted when the level turns into a piloti level.
- On a level with a courtyard, columns also stand round the courtyard: [Courtyards](help:build-courtyard).
- The {t:fl.step.walls} step of the {c:buildFlow} window counts a piloti level as a level whose walls are done.
- An upper level overhanging the piloti: [Piloti ground floor and overhang](help:brec-piloti-overhang).

## Common mistakes

- A basement set to {t:ab.kind.piloti} gets no columns. Piloti is for levels above ground.
- A level with walls drawn by hand keeps those walls when set to {t:ab.kind.piloti}, and no columns are made.
- A {t:ab.columnSpacing} smaller than twice the column size does not bring the columns closer than twice the column size.
- Setting the level back to {t:ab.kind.normal} deletes the columns and makes the outer walls again. Check the place of anything you lined up with the columns.
`,Oi=`---
id: build-shared-levels
title: Joined buildings
분류: 건물 세우기
난이도: 심화
workspace: 3D 건설
keywords: joined buildings, attached buildings, touching buildings, neighbouring buildings, several buildings, two buildings, two wings, annex, main hall and annex, party wall, shared wall, shared parts, shared levels, touching outlines, wings
commands: buildingOutline, buildingEasy, buildFlow, levelOutline
order: 80
---

## What

Each building has its own [building outline](help:build-outline). Buildings on the same site whose outlines touch count as joined: their levels at the same floor height cover and support each other. So no roof terrace is made where the neighbour's upper level covers it. Walls and roofs are still made per building from its own outline, and a wall on the line where they touch is shared by both.

## Steps

1. Draw the first building's outline with {m:buildingOutline}. Building A is made.
2. Click {m:buildingOutline} again and draw an outline that touches the first one, starting from a corner of the first building's outline. Building B is made.
3. Click {m:buildingEasy}, select Building A in the {t:bo.outlinePick} list, type the floors and storey height and click {t:aw.easyGo}.
4. Open {m:buildingEasy} again, select Building B and raise it with the same storey height.
5. In the {c:levelPanel}, check that both buildings show as separate rows under the same site.

## Tips

- Buildings are joined when they stand on the same site and sides of their outlines touch. The levels that cover and support each other are those at the same floor height, both above or both below the ground.
- Outlines may only touch, not overlap. More than 0.1 m² of overlap is not drawn. Starting from the other building's corners makes them touch exactly.
- Narrowing only one building's upper level gives a roof terrace on that building's lower level only; the neighbour stays as it is.
- Where the two buildings touch, only the outer wall of the building raised first stands. On levels at the same height, the building raised later makes no wall where it would lie on that wall.
- A part lying across both buildings (such as the wall on the line where they touch) counts as shared, and shows grey stripes when it is faded outside the work scope. Select the part and select its building, or {t:aw.ownerShared}, in the {t:aw.owner} field of the Properties window.
- The work scope is selected one building at a time: in the building rows of the list, or in the building step of the path in the status bar: [Work scope](help:site-scope).
- For buildings apart from each other, draw their outlines apart. Buildings apart do not affect each other.
- Recipe to follow: [Two joined buildings](help:brec-two-buildings). For building names and colours see [Building names, colours and the project tree](help:build-names-tree).

## Common mistakes

- The second outline is not drawn and a message says it overlaps. It reached into the first building's outline. Draw it again against a corner or side of the first one.
- There is no way through. Put a door in the wall on the line where they touch.
- Levels whose floor heights differ because the storey heights differ do not cover each other. Then a roof terrace is made even where the neighbour's upper level covers it.
- Buildings on different sites are not joined even when they touch. Put them on the same site.
`,ki=`---
id: build-wall-split
title: Automatic wall splitting
분류: 건물 세우기
난이도: 중급
workspace: 3D 건설
keywords: split wall, automatic wall split, setback wall, roof terrace wall, wall height, up to the floor above, attached to roof, outer wall, wall split, cut wall, cut walls at the edge
commands: buildFlow, levelOutline, wallSplit, wall, roof
context: wallSplit
order: 50
---

## What

When one side's outer wall lies partly under the level above and partly under a roof terrace, Build cuts the wall at that boundary by itself. The piece under the level above reaches the floor above; the piece under the terrace is attached to the underside of that roof. Walls drawn by hand are cut yourself with {c:wallSplit}.

## Steps

1. On a 20 × 10 m building outline, raise a 3-storey building with {t:ab.easy}.
2. In the {t:fl.step.levels} step of the {c:buildFlow} window, under {t:ab.detailed}, click the outline button of Level 3.
3. In the outline tool, keeping one short side in place, draw Level 3 narrower, 12 × 10 m.
4. When the outline is finished, the long-side walls of Level 2 are made again in two pieces: under Level 3 (12 m) and under the terrace (8 m).
5. Select the pieces one by one and look at {t:flow.props} in the Properties window. The piece under Level 3 has Level 3 as its {t:flow.top}; the piece under the terrace shows the roof under {t:flow.props.attach}.
6. Changing the {t:aw.roofOffset} of Level 2 moves only the pieces under the terrace with the roof.

## Tips

- A wall has one rule for its top, so the part reaching the floor above and the part following the roof become separate walls.
- Pieces shorter than 0.3 m are not made on their own; they join the piece next to them.
- A curved side becomes one curved wall; cut at a boundary, each piece is a smooth curved wall.
- With Level 3 only in the middle of the long direction, the long-side walls of Level 2 come in three pieces: terrace, Level 3, terrace.
- Cut a hand-drawn wall in two where you click with {m:wallSplit}, then set each piece's top on its own. Each click cuts there; Esc ends: [Wall tops](help:arch-wall-top).
- When you make a roof yourself with {m:roof}, {t:aw.splitWalls} (on from the start) cuts the walls lying across the roof's edge there and attaches only the pieces under the roof.
- A hand-drawn wall lying wholly under a roof terrace made by Build is attached to that roof by itself.

## Common mistakes

- Walls drawn by hand are not cut by themselves where a terrace edge crosses them. Cut them yourself with {c:wallSplit} when needed.
- A level with walls drawn by hand gets no automatic outer walls, only its roofs.
- A cut automatic wall that you delete stays deleted: applying the level again makes no wall there. To have one again, draw it with [Outer walls](help:build-outer-walls) or {m:wall}.
- Curved walls, closed walls, walls with a stepped top and linked copies cannot be cut with {c:wallSplit}, and a wall cannot be cut within 0.1 m of its ends.
- {c:wallSplit} is not on the menu. It is on the advanced menus only: select {t:level.advanced} at the right of the menu bar: [Basic and advanced menus](help:start-level).
`,Ai=`---
id: brec-atrium
title: Atrium through several levels
분류: 건물 예제
난이도: 심화
workspace: 3D 건설
keywords: atrium, void, double height, triple height, open to several floors, slab hole, hole in the floor, tall wall, three-storey wall, lobby, hall, railing, light well, recipe, example, tutorial
commands: buildingOutline, buildFlow, levelOutline, outerWalls, wall, railing
order: 70
---

## What

Cut an 8 × 6 m hole in the Level 2 and Level 3 slabs of a 24 × 18 m 4-storey building, for an atrium open three storeys high, from Level 1 up to the Level 4 floor. Railings instead of walls go round the holes, and one tall wall stands in the atrium from Level 1 up to the Level 4 floor. The building is made under {t:ab.detailed}, not {t:ab.easy}, so no walls are made by themselves and the holes get no inner walls.

## Steps

1. Draw a 24 × 18 m building outline with {m:buildingOutline} ({t:opt.areaRect}: click the first corner, then \`@24,18\`). The building is made.
2. In the {t:fl.step.levels} step of the {c:buildFlow} window, select {t:ab.detailed}, open {t:aw.more}, type {t:bnew.above} \`4\` and {t:bnew.height} \`3\`, and click {t:fl.planApply}.
3. In the {t:fl.step.outlines} step, click {t:ca.outlinesFromShape}. Then click {t:cmd.outerWalls} under {t:ab.detailed}, select {t:ow.mode.all} and {t:ec.allLevels}, and click {t:ew.build}.
4. In the {c:levelPanel}, click the outline button of the Level 2 row. In the outline tool click {t:ol.mode.draw}, then select {t:aw.ring.hole} and {t:ol.shape.rect}.
5. Hold Ctrl and right-click, select {t:osnap.aid.from}, click the outline corner that matches the building outline's first corner and type \`@8,6\`, then \`@8,6\` again. The Level 2 slab gets an 8 × 6 m hole.
6. Click the outline button of the Level 3 row and cut a hole at the same place the same way as in steps 4 and 5.
7. On Level 2, click {m:railing}, select {t:stairs.railHow.edge}, click the four edges of the hole one after another and press Enter. Put railings on Level 3 the same way.
8. On Level 1, click {m:wall}, set {t:flow.top} to {t:flow.top.toFloor} and {t:flow.topLevel} to Level 4. With {t:osnap.aid.from}, click \`@9,9\` from the same corner and type \`@6,0\`, then press Enter: a 6 m wall crosses the middle of the atrium.

## Tips

- The wall of step 8 stands 8.8 m high, from the Level 1 floor to the underside of the Level 4 slab. The Level 2 and Level 3 slabs have their holes there, so they do not stop it. It follows storey height changes: [Wall tops](help:arch-wall-top).
- The outer walls of step 3 are ordinary walls raised with {m:outerWalls}: their outer face lies on the building outline and they go up to the floor above: [Outer walls](help:build-outer-walls).
- A courtyard drawn in a building made with {t:ab.easy} gets inner walls round it. This building was made under {t:ab.detailed} only, so the holes are just cut: [Courtyards](help:build-courtyard).
- Level 1 and Level 4 cover the holes of Levels 2 and 3, so the building area stays 24 × 18 m, 432 m².
- For the roof, click {t:fl.roofTop} in the {t:fl.step.roof} step of the {c:buildFlow} window, select {t:opt.roofFlat} and press Enter.
- A stair cuts a hole of its size in the slab above by itself: [Stairs](help:arch-stair).
- For base point input see [From a base point](help:snap-from).

## Common mistakes

- In a building made with {t:ab.easy}, a hole gets inner walls round it. Make an atrium in a building built under {t:ab.detailed}, as in these steps.
- Holes at different places on Level 2 and Level 3 do not make one atrium. Start both from the same corner with the same offset.
- Leaving {t:flow.topLevel} at Level 2 in step 8 makes the wall one storey high only. Select Level 4.
- Railings select only the slab edges of the working level. Make the level for the railing the working level first.
`,ji=`---
id: brec-courtyard-house
title: Courtyard house
분류: 건물 예제
난이도: 중급
workspace: 3D 건설
keywords: courtyard house, courtyard, house round a yard, inner yard, patio house, hanok yard, open middle, inner walls, draw a courtyard, recipe, example, tutorial, atrium house
commands: buildingEasy, buildFlow, levelOutline, door
order: 40
---

## What

An 18 × 18 m 2-storey house with an 8 × 8 m courtyard open to the sky in the middle. Raise the building with {t:ab.easy}, then draw the courtyard at the same place on Level 1 and Level 2 with the outline tool of {t:ab.detailed}. Inner walls stand round the courtyard by themselves, the slabs get their hole, and the roof becomes several flat pieces round the courtyard.

## Steps

1. Follow the steps of the {m:buildingEasy} window and click {t:aw.drawOutline}. Select {t:opt.areaRect}, click the first corner and type \`@18,18\`.
2. Type {t:bnew.above} \`2\`, {t:bnew.below} \`0\`, {t:bnew.height} \`3\` and click {t:aw.easyGo}.
3. In the {t:fl.step.levels} step of the {c:buildFlow} window, select {t:ab.detailed} and click the outline button of the Level 1 row.
4. In the outline tool, click {t:ol.mode.draw}, then select {t:aw.ring.hole} and {t:ol.shape.rect}.
5. In the 3D view, hold Ctrl and right-click, select {t:osnap.aid.from}, click the outline corner that matches the building outline's first corner and type \`@5,5\`. That is the courtyard's first corner.
6. Type \`@8,8\` on the command line. The courtyard is drawn and applies at once: four inner walls stand up and the Level 1 slab gets its hole.
7. Click the outline button of the Level 2 row and draw the courtyard at the same place the same way as in steps 4 to 6.
8. With {m:door}, fit a door into an inner wall to give a way out into the yard.

## Tips

- To draw the courtyard again, click {t:aw.courtClear} in the outline tool and draw a new one.
- The roof of Level 2 is made as several flat pieces round the courtyard. Put [railings](help:arch-railing) round the roof edge.
- With {t:ceil.build} on, the ceilings leave the courtyard open too.
- The courtyard does not count in the building area: 18 × 18 m less 8 × 8 m makes 260 m².
- With a courtyard on Level 1 only, the floor of Level 2 covers it as an indoor court. On Level 2 only, the roof of Level 1 under it becomes the yard's floor.
- A yard open on one side is made by drawing a U-shaped building outline: [U-shaped building](help:brec-u-shape).
- For base point input see [From a base point](help:snap-from). The courtyard rules are in [Courtyards](help:build-courtyard).

## Common mistakes

- Without the courtyard on Level 2 the sky does not show. Draw it at the same place on every level above.
- {t:aw.useBelow} takes the outer outline only, not the courtyards.
- A courtyard touching or crossing the outline keeps only its part inside the outline. Leave room for the walls on every side.
- Doors and windows put in before the courtyard is drawn may be deleted with the automatic walls when the outline changes. Draw the courtyard first.
`,Mi=`---
id: brec-curved-site
title: Building on a curved site
분류: 건물 예제
난이도: 중급
workspace: 3D 건설
keywords: curved site, curved building outline, curved footprint, round building, curved building, half-round building, arch shape, curved wall, round wall, press and drag, edit curve, recipe, example, tutorial, curve
commands: buildingEasy, buildingOutline, siteArea, pathEdit
order: 80
---

## What

Draw a building outline with one straight 18 m side and a round arch opposite, then raise a 2-storey building on it with {c:buildingEasy}. The building outline's curve goes into every level outline as it is, and each curved side becomes one smooth curved wall. The slabs and the flat roof follow the curve too.

## Steps

1. Click {m:buildingEasy}. With sites drawn, select one of about 40 × 30 m in the {t:bo.site} list; without sites, the building goes on the whole land.
2. Click {t:aw.drawOutline} and select {t:opt.areaPoly} in the building outline tool.
3. Click an empty place for the first point, then type \`@18,0\` on the command line.
4. About 8 m above the middle between the two points, press the mouse button, wait 0.5 s, drag to the left and let go. A smooth curve point makes the arch.
5. Click the first point to close. The building is made and the {c:buildingEasy} window opens again.
6. Type {t:bnew.above} \`2\`, {t:bnew.below} \`0\`, {t:bnew.height} \`3\` and click {t:aw.easyGo}.
7. Each level gets one straight wall, one curved wall along the arch and a slab of the curved shape, and a flat roof of the same shape goes on top.

## Tips

- A site can get curved sides the same way: pressing, waiting 0.5 s and dragging while placing a point in {t:opt.areaPoly} makes a curve point.
- If the curve is not right, select the building outline before building and edit its points and handles with {c:pathEdit}: [Edit curves](help:obj-curve-edit), [Building outline](help:build-outline).
- The direction and length of the drag set how strongly the curve bends. Holding Shift while dragging snaps to 45° steps.
- To give an upper level another shape, edit that level's outline under [Per level](help:build-detailed).
- The flat roof on top follows the curved outline too: [Automatic roofs and roof height](help:build-auto-roof).

## Common mistakes

- The first point cannot be a curve point. Click the first point; press, wait 0.5 s and drag from the second point on.
- A curved building outline overlapping another building's outline is not made. Keep them apart, or let them only touch.
- Curved walls cannot be cut with {c:wallSplit}.
- Clicking without dragging, or dragging at once, makes a sharp corner, giving a triangle. Press, wait 0.5 s, move the mouse, then let go.
`,Ni=`---
id: brec-piloti-overhang
title: ③ Piloti ground floor with an overhang
분류: 건물 예제
난이도: 중급
workspace: 3D 건설
keywords: piloti, piloti ground floor, overhang, upper floor overhang, cantilever, car park building, columns, shrink outline, stilts, recipe, example, tutorial
commands: buildingEasy, buildFlow, levelOutline, column
order: 30
---

## What

Raise a 2-storey building on a 23 × 13 m building outline, then shrink the ground floor by 1.5 m on every side into a 20 × 10 m piloti level standing on columns. Level 2 stays 23 × 13 m and overhangs it. The ground floor columns follow the ground floor outline, and the bottom of Level 2 becomes an exposed underside covered by Level 2's slab. Level outlines cannot reach outside the building outline, so draw the building outline to fit the widest level.

## Steps

1. Follow the steps of the {m:buildingEasy} window and click {t:aw.drawOutline}. In the building outline tool select {t:opt.areaRect}, click the first corner and type \`@23,13\`.
2. Type {t:bnew.above} \`2\`, {t:bnew.below} \`0\`, {t:bnew.height} \`3\` and click {t:aw.easyGo}.
3. In the {t:fl.step.levels} step of the {c:buildFlow} window, select {t:ab.detailed}.
4. Click the outline button of the Level 1 row to open the outline tool. Type \`1.5\` in {t:ol.offset} and click {t:ol.shrink}. Level 1 becomes 20 × 10 m and it applies at once.
5. In the {t:ab.kind} field of the Level 1 row, select {t:ab.kind.piloti}. The ground floor's outer walls go and 12 columns stand up.
6. Fine-tune the columns with {t:ab.columnSpacing}, {t:aw.pilotiSize} and the {t:aw.square} / {t:aw.round} choice under the Level 1 row.

## Tips

- To overhang on one side only, draw the building outline wider on that side only, and set the ground floor outline by drawing a new rectangle with {t:ol.mode.draw}.
- The building area is the piloti level and the overhanging Level 2 together: 23 × 13 m, 299 m²: [Building outline](help:build-outline).
- To go higher, click {m:levelAdd}. The new level takes Level 2's outline, with its walls and roof.
- The piloti level keeps its slab as an open floor. Place parking bays or landscaping from [Furniture, landscape and the object library](help:arch-furniture).
- A piloti level gets no roof and no ceiling; the whole bottom of Level 2 is an exposed underside: [Automatic roofs and roof height](help:build-auto-roof).
- Piloti settings: [Piloti](help:build-piloti).

## Common mistakes

- Drawing a 20 × 10 m building outline and then widening Level 2: Level 2's outline cannot reach outside the building outline, so it is cut back. Draw the building outline at the size of the wider Level 2.
- {t:ol.shrink} moves every side together. To shrink one side only, move points or draw a new outline.
- Doors and windows put into the ground floor walls before switching to {t:ab.kind.piloti} are deleted with those walls.
- Setting Level 2 to {t:ab.kind.piloti} instead of Level 1 turns Level 2 into an open level of columns. Select the kind in the row of the level that should stand on columns.
`,Pi=`---
id: brec-setback
title: ② Narrower third floor
분류: 건물 예제
난이도: 중급
workspace: 3D 건설
keywords: setback, narrower top floor, upper level narrower, roof terrace, terrace, stepped building, roof height, wall split, advanced, recipe, example, tutorial
commands: buildingEasy, buildFlow, levelOutline, buildingOutline
order: 20
---

## What

Raise a 20 × 10 m 3-storey building with {t:ab.easy}, then narrow only the third floor to 12 × 10 m. The 8 × 10 m of Level 2's top that Level 3 does not cover gets a flat roof terrace by itself, and the long-side walls of Level 2 are cut where Level 3 ends.

## Steps

1. Follow the steps of the {m:buildingEasy} window and click {t:aw.drawOutline}. In the building outline tool select {t:opt.areaRect}, click the first corner and type \`@20,10\`.
2. When the window opens again, type {t:bnew.above} \`3\`, {t:bnew.below} \`0\`, {t:bnew.height} \`3\` and click {t:aw.easyGo}.
3. In the {t:fl.step.levels} step of the {c:buildFlow} window, select {t:ab.detailed} and click the outline button of the Level 3 row.
4. In the outline tool, click {t:ol.mode.draw} and select {t:ol.shape.rect}.
5. On the dashed Level 2 outline, click the corner that matches the building outline's first corner, then type \`@12,10\` on the command line.
6. When the rectangle is finished it applies at once: an 8 × 10 m roof terrace appears on Level 2, and Level 2's long-side walls are cut in two pieces each.
7. Type \`-0.1\` in {t:aw.roofOffset} of the Level 2 row: the terrace top drops 0.1 m below the Level 3 floor.

## Tips

- Selecting the roof terrace also shows {t:aw.roofOffset} in the Properties window.
- To narrow Level 3 evenly on all sides, set {t:ol.offset} in its outline tool and click {t:ol.shrink}. The terrace then runs round Level 3 in several pieces, and all of Level 2's walls end under the terrace.
- For a building that narrows all the way up, shrink each level's outline the same way: [Stepped tower](help:brec-stepped-tower).
- For railings round the terrace see [Railings](help:arch-railing).
- The rules: [Automatic roofs and roof height](help:build-auto-roof), [Automatic wall splitting](help:build-wall-split).
- The building area is all levels above ground put together, so it stays 200 m² after Level 3 is narrowed: [Building outline](help:build-outline).

## Common mistakes

- A Level 3 outline a few millimetres off Level 2's leaves or drops very narrow roof slivers. Click the first corner right on a corner of the Level 2 outline.
- {t:aw.roofOffset} is in the Level 2 row, the level with the terrace, not in the Level 3 row.
- Moving points one by one with {t:ol.mode.edit} works too, but each move applies at once, so walls and roofs are made again for every in-between shape.
- Doors or windows put into Level 3 before changing its outline may be deleted with Level 3's automatic walls.
`,Fi=`---
id: brec-small-house
title: Small house from walls
분류: 건물 예제
난이도: 기초
workspace: 3D 건설
keywords: small house, build a house, walls first, draw walls, one-storey house, cabin, hut, gable roof, add a door, add windows, slab, by hand, recipe, example, tutorial, first building
commands: wall, slabAuto, door, window, roof
order: 100
---

## What

Build an 8 × 6 m one-storey house by drawing its walls one by one, without Build. Draw four walls as a closed shape, lay a slab under them, fit a door and windows, then put a gable roof on top. A good way to learn how the parts fit together.

## Steps

1. Start in the 3D construction workspace of a new document. Check that the path in the status bar points at Level 1.
2. Click {m:wall} and click an empty place on the ground for the first point.
3. On the command line type \`@8,0\`, \`@0,6\`, \`@-8,0\`, pressing Enter after each one.
4. Click the first point again to close the four walls, then press Esc to close the tool.
5. Click {m:slabAuto} and press Enter: a slab is laid under the closed walls.
6. Click {m:door}, select {t:preset.door.single} and click the middle of an 8 m wall. Press Esc to close the tool.
7. Click {m:window}, select {t:preset.window.single} and click the other walls to fit windows. Press Esc to close the tool.
8. Click {m:roof}, click a wall, select {t:opt.roofGable} and press Enter. The walls of the short sides rise in a triangle along the roof's underside.

## Tips

- Walls start 0.2 m thick, and with no level above they are as high as the storey height (3 m). The roof's eaves sit at the ground floor plus the storey height too.
- To divide rooms, draw more inner walls with {c:wall}. Wall ends snap to other walls and join by themselves: [Walls](help:arch-wall).
- Change the {t:opt.roofPitch} (30° by default) and the {t:opt.overhang} (0.5 m by default) in the roof tool window: [Roofs](help:arch-roof).
- On land with terrain, a window asking for the ground floor height opens before the first wall goes in. Select the suggested height and click {t:base.ok}.
- For a second floor, click {m:levelAdd} and draw the walls on Level 2 the same way. Walls drawn on a level with a level above reach up to its floor, so making the levels first and drawing the walls afterwards saves work: [Levels](help:arch-levels).
- A building with walls drawn by hand cannot be raised again with {t:ab.easy} of Build. For buildings with many floors, [Quick Building](help:build-easy) is faster.
- Open the {c:buildFlow} window to see how far this house is through the twelve steps: [Build Progress](help:arch-flow).

## Common mistakes

- If the last click misses the first point, the walls are not closed and the {c:slabAuto} tool finds no closed walls. When {t:opt.closedWalls} shows 0, draw the walls again with their ends meeting.
- Typing millimetres by mistake: \`@8,0\`, not \`@8000,0\`.
- Clicking one wall that is not closed makes the roof over that wall's bounding rectangle only. Close the walls, or click the slab.
- A door or window placed on the floor makes no hole in a wall. Click on the face of a wall.
`,Ii=`---
id: brec-stepped-tower
title: Stepped tower narrowing upwards
분류: 건물 예제
난이도: 중급
workspace: 3D 건설
keywords: tower, stepped tower, building narrowing upwards, pyramid building, setback, shrink each level, shrink, roof terraces, penthouse, advanced, ziggurat, wedding cake, recipe, example, tutorial
commands: buildingEasy, buildFlow, levelOutline
order: 90
---

## What

Raise a 20 × 20 m 4-storey building with {t:ab.easy}, then under {t:ab.detailed} shrink every level from Level 2 up by 2 m on each side per storey, for a tower of 20 → 16 → 12 → 8 m. Each level gets a flat roof terrace on the rim the level above does not cover, and the outer walls are cut by themselves between the parts under the level above and under the terrace.

## Steps

1. Following the steps of the {m:buildingEasy} window, click {t:aw.drawOutline}, select {t:opt.areaRect}, click the first corner and type \`@20,20\` to draw the building outline. Build with {t:bnew.above} \`4\`, {t:bnew.below} \`0\`, {t:bnew.height} \`3\`.
2. In the {t:fl.step.levels} step of the {c:buildFlow} window, select {t:ab.detailed}. The levels are listed from Level 4 down.
3. Click the outline button of the Level 4 row, type \`6\` in {t:ol.offset} in the outline tool and click {t:ol.shrink}. Level 4 becomes 8 × 8 m.
4. Click the outline button of the Level 3 row, type \`4\` in {t:ol.offset} and click {t:ol.shrink}. Level 3 becomes 12 × 12 m.
5. Click the outline button of the Level 2 row, type \`2\` in {t:ol.offset} and click {t:ol.shrink}. Level 2 becomes 16 × 16 m.
6. In the {t:ab.kind} field of the Level 4 row select {t:ab.kind.rooftop}, then press Esc to close the outline tool.
7. Check that Levels 1, 2 and 3 have a 2 m wide terrace rim made of several flat roof pieces, and that an 8 × 8 m roof sits on Level 4.

## Tips

- To drop the terrace floors a little, type a value such as \`-0.1\` in {t:aw.roofOffset} of the Level 1, 2 and 3 rows: [Automatic roofs and roof height](help:build-auto-roof).
- Different shrink distances per level give terraces of different widths. To step back on one side only, draw a new rectangle with {t:ol.mode.draw}: [Narrower third floor](help:brec-setback).
- {t:ab.kind.rooftop} only changes the name; its parts are the same as {t:ab.kind.normal}.
- Put [railings](help:arch-railing) round the terrace edges.
- How walls are cut between the level above and the terrace: [Automatic wall splitting](help:build-wall-split).

## Common mistakes

- {t:ol.offset} goes back to 0.5 m every time the outline tool opens. Type the value again for each level.
- Shrinking moves every side together, so 2 m makes the width and the depth each 4 m smaller.
- Clicking {t:aw.useBelow} on an upper level brings back the shape of the level below. Do not click it after shrinking.
- A shrink so large that the shape would turn inside out is not made, and a message says so. Shrink a 20 m level by less than 10 m.
`,Li=`---
id: brec-terraced-slope
title: Terraced building on a slope
분류: 건물 예제
난이도: 심화
workspace: 3D 건설
keywords: slope, hillside, sloping site, terraced building, step in the ground, ground at two heights, grading height, two sites, retaining wall, cut slope, fill slope, terrace houses, building on a hill, recipe, example, tutorial
commands: buildingEasy, grade, siteArea, buildingOutline, retainingWall
order: 60
---

## What

Seat two buildings on sloping ground like steps, one storey apart. Grading gives each site one height, so draw one site low on the slope and one higher up, and grade each to its own height. The ground floor of each building follows its site's grading height, and retaining walls go along the edges where the ground steps.

## Steps

1. Start on a slope with terrain ([Construction area](help:site-map)). With {m:siteArea}, draw a 24 × 16 m Site 1 low on the slope and a Site 2 of the same size higher up, at least 2 m away from it.
2. Click {m:buildingEasy}, select Site 1 in the {t:bo.site} list and click {t:bo.grade}.
3. In the grading tool click {t:grade.balance}, open {t:grade.more}, set {t:grade.cut} to \`0\` and apply with Enter. Closing the grading tool window brings the building window back.
4. Click {t:aw.drawOutline}, draw a 20 × 12 m building outline inside Site 1, then click {t:aw.easyGo} with {t:bnew.above} \`2\` and {t:bnew.height} \`3\`.
5. Click {m:buildingEasy} again, select Site 2 in the {t:bo.site} list and click {t:bo.grade}.
6. In the grading tool type a {t:grade.height} 3 m higher than Site 1's, set {t:grade.fill} to \`0\` under {t:grade.more}, apply with Enter and close the window.
7. Click {t:aw.drawOutline}, draw a 20 × 12 m building outline inside Site 2, then click {t:aw.easyGo} with the same values. The second building's ground floor sits at the height of the first building's Level 2 floor.
8. With {m:retainingWall}, raise one retaining wall along the upper edge of Site 1 and one along the lower edge of Site 2. If the earth side is the wrong way round, click {t:civil.x.flip} while drawing.

## Tips

- Sites drawn overlapping or touching join into one. Leave a gap between them.
- A slope value of \`0\` makes a vertical step. The lower site cuts into the slope on its upper side, so its {t:grade.cut} is 0; the upper site is filled on its lower side, so its {t:grade.fill} is 0: [Grading](help:site-grade).
- Check and change the ground floor height in the {t:fl.step.base} step of [Build Progress](help:arch-flow). A building that follows the grading moves with it when the grading height changes.
- For retaining wall types and thickness see [Retaining walls](help:civil-retaining). Set the footing deeper than the ground was cut.
- Join the two buildings with [stairs](help:arch-stair) or a [road](help:civil-road).

## Common mistakes

- Two building outlines inside one site put both buildings at the same grading height. To give them different heights, draw separate sites.
- On flat land without terrain there is no grading step and both buildings stand at the same height. Load terrain in [Construction area](help:site-map) first.
- {c:retainingWall} does not change the ground. Make the step in the ground with grading first.
- If {c:retainingWall} is not on the menu, select {t:level.advanced} at the right of the menu bar.
`,Ri=`---
id: brec-two-buildings
title: Two joined buildings
분류: 건물 예제
난이도: 심화
workspace: 3D 건설
keywords: two buildings, two wings, annex, attached buildings, joined buildings, touching buildings, main hall and annex, party wall, shared wall, shared levels, Building A Building B, recipe, example, tutorial
commands: buildingOutline, buildingEasy, buildFlow, levelPanel
order: 50
---

## What

Raise two 3-storey buildings side by side, with touching outlines. Building A takes the left 14 × 12 m, Building B the right 10 × 12 m. Buildings on the same site whose outlines touch are joined: their levels at the same floor height cover and support each other. The {c:levelPanel} lists the two buildings as separate rows.

## Steps

1. Click {m:buildingOutline}, select {t:opt.areaRect}, click the first corner and type \`@14,12\`. Building A is made.
2. Click {m:buildingOutline} again, click the bottom right corner of Building A's outline and type \`@10,12\`. Building B is made, touching Building A.
3. Click {m:buildingEasy} and select Building A in the {t:bo.outlinePick} list. Type {t:bnew.above} \`3\`, {t:bnew.below} \`0\`, {t:bnew.height} \`3\` and click {t:aw.easyGo}.
4. Open {m:buildingEasy} again, select Building B in the {t:bo.outlinePick} list and click {t:aw.easyGo} with the same values.
5. Check that only one wall stands on the line where the buildings touch. It is the outer wall of Building A, raised first, and both buildings share it.
6. In the {c:levelPanel}, double-click a building row to move the work scope to that building.

## Tips

- Raise Building B with 2 floors instead: only Building B's Level 2 gets a roof, and Building A stays at 3 floors.
- Narrowing only Building A's Level 3 gives a roof terrace on Building A's Level 2 only. Building B is not affected.
- The two buildings show different names and colours. Change the name (such as Main Hall, Annex) and the colour from the right-click menu: [Building names, colours and the project tree](help:build-names-tree).
- A part lying across both buildings counts as shared; change its building in the {t:aw.owner} field of the Properties window.
- The area table shows each building's building area (168 m² and 120 m²); the site's coverage uses both together, 288 m²: [Area table](help:site-area-table).
- The rules are explained in [Joined buildings](help:build-shared-levels).

## Common mistakes

- Building B is not drawn and a message says it overlaps. The first corner landed inside Building A. Draw it again from Building A's corner.
- There is no way through. Put a door in the wall on the line where they touch.
- A different storey height for Building B puts its floors at other heights, so they no longer cover and support each other.
- Buildings on different sites are not joined, even when they touch.
`,zi=`---
id: brec-u-shape
title: ① U-shaped building in one go
분류: 건물 예제
난이도: 기초
workspace: 3D 건설
keywords: U-shaped building, U shape, concave building, polygon outline, building outline, footprint, quick building, school building, recipe, example, tutorial, step by step, C-shaped building
commands: buildingEasy, buildingOutline
order: 10
---

## What

Draw a U-shaped building outline, then raise a 3-storey building on it at once with {c:buildingEasy}. The outer size is 20 × 15 m, with an 8 × 9 m yard open on one side. Concave as it is, every level gets the outline, one outer wall per side and a single U-shaped flat roof on top.

## Steps

1. Click {m:buildingEasy}. With sites drawn, select one comfortably larger than 30 × 25 m in the {t:bo.site} list; without sites, the building goes on the whole land.
2. Check that the {t:bo.outlinePick} list shows {t:bo.outlineNew}, and click {t:aw.drawOutline}.
3. In the building outline tool window select {t:opt.areaPoly}, then click an empty place for the first corner.
4. On the command line type \`@20,0\`, \`@0,15\`, \`@-6,0\`, \`@0,-9\`, \`@-8,0\`, \`@0,9\`, \`@-6,0\`, pressing Enter after each one.
5. Press Enter once more: the 8-corner U-shaped outline closes, the building is made and the {c:buildingEasy} window opens again.
6. Type {t:bnew.above} \`3\`, {t:bnew.below} \`0\`, {t:bnew.height} \`3\`.
7. Check that the note at the bottom of the window names the building you just made, then click {t:aw.easyGo}.
8. All three levels take the U-shaped outline; each level gets 8 outer walls and a slab, and one U-shaped flat roof goes on top.

## Tips

- For typing coordinates see [Coordinates and lengths](help:input-coords). Clicking the corners with the mouse works too.
- If you drew the outline beforehand with {m:buildingOutline}, select that building in the {t:bo.outlinePick} list: [Building outline](help:build-outline).
- The building area is the U-shaped outline's 228 m²; the yard is not counted.
- L and T shapes are built the same way. A shape closed on all four sides is made with a [courtyard](help:build-courtyard).
- To give one wing another height, edit the upper outlines under [Per level](help:build-detailed).
- Building outlines with curved sides are built too, with one curved wall per curved side: [Building on a curved site](help:brec-curved-site).
- If you do not like the result, one {c:undo} ({k:undo}) takes the whole building back.

## Common mistakes

- With a site selected, the outline must lie inside it. Reaching outside, it is not made and a message says so. Start where 20 × 15 m fits.
- Clicking the first corner inside an existing building outline selects that outline instead of drawing a new one. An outline overlapping another building is not made.
- Typing millimetres by mistake. The 3D construction workspace works in metres: \`@20,0\`, not \`@20000,0\`.
- If the note names another building, that building is raised. Select the building you want in the {t:bo.outlinePick} list before building.
`,Bi=`---
id: civil-bridge
title: Bridge
분류: 토목
난이도: 중급
workspace: 3D 건설
keywords: bridge, girder bridge, beam bridge, truss bridge, arch bridge, cable-stayed bridge, suspension bridge, extradosed bridge, rigid frame bridge, pier, abutment, span, side span, deck, pylon, tower, cable, stay, hanger, truss, web, Pratt, Howe, Warren, box girder, clearance, anchorage, viaduct, overpass, brige
commands: bridge, road, pathEdit
context: bridge
order: 30
---

## What

The tool that lays a deck along a line, with piers going down to the footing depth below the ground. There are five types (girder, truss, arch, cable-stayed and suspension), and each type has its own choices for the superstructure (girders, truss web, arches, cables, pylons) and for the shape of the piers and abutments.

## Steps

1. Click {m:bridge}.
2. Under {t:civil.typeOf}, select {t:civil.type.bridge.beam}, {t:civil.type.bridge.truss}, {t:civil.type.bridge.arch}, {t:civil.type.bridge.cable} or {t:civil.type.bridge.suspension}.
3. Click points from one end of the crossing to the other.
4. Set the {t:civil.width} and the values of the type in the window (for a truss, for example, {t:cf.bridge.web} and {t:cf.bridge.panels}).
5. Set the distance between piers with {t:civil.span} under {t:civil.more}.
6. Enter, right-click or double-click makes it. The tool ends after one bridge.

## Tips

- {t:civil.z0} and {t:civil.z1} are set by themselves: the ends meet the ground or a joined road, and the deck is raised so its underside clears the ground or water by the {t:civil.x.clearance} (5 m by default). Heights you type are kept.
- The bridge is divided into equal spans no longer than {t:civil.span} (5 to 200 m). {t:civil.x.spans} sets the number of spans directly. The window shows the number of {t:civil.piers}. The first span is 30 m for girder, 40 m for truss, 60 m for arch, 100 m for cable-stayed and 30 m for suspension bridges.
- Pier height is not typed. A pier runs from under the deck down to the ground after grading and {t:civil.footing} (2 m by default) further into it. To change pier heights, change the start and end heights.
- The values of each type:

| Type | Values |
| --- | --- |
| {t:civil.type.bridge.beam} | {t:cf.bridge.deck} (slab, I-girders, box girder, rigid frame), {t:cf.bridge.girders} (2 to 12), {t:cf.bridge.cells} (1 to 4), {t:cf.bridge.haunch} (0 to 5 m) |
| {t:civil.type.bridge.truss} | {t:cf.bridge.web} (Pratt, Howe, Warren, Warren with verticals, K, X), {t:cf.bridge.panels} per span (2 to 30), {t:cf.bridge.trussH} (2 to 40 m), {t:cf.bridge.deckPos} (through, deck, half-through), {t:cf.bridge.topChord} (level or camelback), {t:cf.bridge.member}, {t:cf.bridge.bracing} |
| {t:civil.type.bridge.arch} | {t:cf.bridge.arch} (deck, through, tied, half-through), {t:cf.bridge.rise} (8 to 60 % of the span), {t:cf.bridge.hangers}, {t:cf.bridge.ribs} (1 to 3), {t:cf.bridge.ribShape} |
| {t:civil.type.bridge.cable} | {t:cf.bridge.stay} (fan, harp, semi-fan), {t:cf.bridge.pylons} (1 to 3), {t:cf.bridge.pylon} (H, A, inverted Y, single), {t:cf.bridge.pylonH}, {t:cf.bridge.stays}, {t:cf.bridge.extradosed} |
| {t:civil.type.bridge.suspension} | {t:cf.bridge.tower} (H, A, portal), {t:cf.bridge.towerH}, {t:cf.bridge.sag}, {t:cf.bridge.hangerGap}, {t:cf.bridge.anchors} |

- Where the pylons or towers stand is set by {t:cf.bridge.sideRatio} (10 to 40 % of the length). On a cable-stayed bridge with two or more pylons, {t:cf.bridge.sidePiers} places piers evenly in the side spans (each end to its nearest pylon), no further apart than {t:cf.bridge.sideGap} (40 m by default). With one pylon there are no side-span piers.
- Select {t:cf.bridge.pier} (wall, single column, twin columns, hammerhead or portal) and set {t:cf.bridge.capH} and {t:civil.pier}. The piers under the pylons or towers of cable-stayed and suspension bridges are always walls the full width of the deck. A rigid-frame girder bridge has no pier shape choice.
- {t:cf.bridge.abut} is inverted T or gravity; an inverted T can have {t:cf.bridge.wings}.
- When {t:cf.members} in the window would pass 360, panels, hangers or stays are reduced (or the hangers spaced wider) by themselves, and a note says so.
- Changing the type starts that type's values over; the pier and abutment shapes stay. Bridges made before these settings existed keep the earlier pier choice: {t:civil.x.pier.wall}, {t:civil.x.pier.column} or {t:civil.x.pier.twin}.
- {t:civil.more} also holds {t:civil.deckThick}, {t:civil.x.girder}, {t:civil.x.abutment}, {t:civil.railings}, {t:civil.x.parapet} and {t:civil.x.joints}.
- Draw roads onto both ends of the bridge: the road ends meet the top of the deck. After making it, change values in the Properties window and reshape its line with {c:pathEdit}.
- When the ground under the bridge changes (grading, a road passing under it), its piers and abutments are fitted to the new ground by themselves. The deck heights stay.
- Objects such as signs added with {t:cfit.editIn} in the Properties window stay when the spans or the form's values change. {t:cfit.unlink} makes it a plain solid without a form.

## Common mistakes

- Red text says the bridge is too short. Draw at least 5 m for a girder bridge, 15 m truss, 20 m arch, 40 m cable-stayed and 60 m suspension.
- A bridge drawn along a bent line is not made. Arch, truss, cable-stayed and suspension bridges must run straight (bends of 15° at most). Make a curved bridge a girder bridge.
- Text says the deck runs through the ground. Raise the start or end height, or move the line.
- Text says the piers would be taller than 200 m. Lower the deck.
- After the ground changed, the bridge stayed as it was and its window shows red text. Fitted to the new ground it would hit one of the two cases above. Change the deck heights, then click {t:civil.refit}.
- Changing {t:cf.bridge.pier} does not change the piers under the pylons of a cable-stayed or suspension bridge. Those are always walls.
- {c:bridge} is not on the menu. The civil tools are on the Advanced menus. Select {t:level.advanced} on the menu bar or type \`bridge\` in the command line.
`,Vi=`---
id: civil-dam
title: Dam and weir
분류: 토목
난이도: 중급
workspace: 3D 건설
keywords: dam, weir, reservoir, lake, water, water level, full supply level, gravity dam, concrete dam, earth dam, fill dam, rockfill dam, arch dam, crest, crest height, spillway, overflow, chute, side channel, apron, gallery, core, filter, riprap, berm, thrust block, gate, fishway, freeboard, upstream, downstream, valley, damm
commands: dam, water, waterBody, levee, pathEdit
howto: dam
context: dam
order: 70
---

## What

Draw an axis across a valley to build a dam from its crest down into the ground. There are four types, {t:civil.type.dam.concrete}, {t:civil.type.dam.fill}, {t:civil.type.dam.arch} and {t:civil.type.dam.weir}, and each type sets parts such as the spillway, gallery, core, gates and fishway. The valley behind the dam fills with water up to its full supply level.

## Steps

1. Click {m:dam}.
2. Select the type under {t:civil.typeOf}.
3. Click points from one side of the valley to the other, so the side the water fills (upstream) is on the left of the drawing direction.
4. Make it with Enter, a right click or a double click. The {t:civil.crest} is set by itself.
5. With {t:cf.dam.reservoir} on in the window, the valley behind the dam fills with water up to the {t:civil.x.fullLevel}.

## Tips

- The {t:civil.crest} is set to the lower of the ground heights at the two ends of the line; on flat land 20 m above the lowest ground, and 3 m for a {t:civil.type.dam.weir}. With water already upstream, it is at least the {t:civil.x.freeboard} (2 m by default) above it. Values you type are kept.
- The window shows the {t:civil.damHeight} and the {t:civil.x.fullLevel}. The full supply level is the crest less the freeboard; a weir's is just under its crest.
- No dam is built where the ground is above the crest, so the line may run a little past the valley.
- The values of each type:

| Type | Values |
| --- | --- |
| Spillway (not a weir) | {t:cf.dam.spill} ({t:cf.dam.spill.none}, {t:cf.dam.spill.overflow}, {t:cf.dam.spill.chute}, {t:cf.dam.spill.side}), {t:cf.dam.spillW}, {t:cf.dam.spillAt}, for a chute or side channel {t:cf.dam.apron} |
| {t:civil.type.dam.concrete} | {t:cf.dam.gallery} (an inspection passage inside the body, not seen from outside) |
| {t:civil.type.dam.fill} | {t:cf.dam.fillMat} ({t:cf.dam.fillMat.rock}, {t:cf.dam.fillMat.earth}), {t:cf.dam.berms} (0 to 4), {t:cf.dam.bermW}, {t:cf.dam.riprap}, {t:cf.dam.core}, {t:cf.dam.coreW}, {t:cf.dam.coreSlope}, {t:cf.dam.filter} |
| {t:civil.type.dam.arch} | {t:cf.dam.angle} (40 to 160°), {t:cf.dam.baseT}, {t:cf.dam.thrust}, {t:cf.dam.thrustL} |
| {t:civil.type.dam.weir} | {t:cf.dam.gates} (0 to 12; 0 is a fixed weir), {t:cf.dam.gateW}, {t:cf.dam.fishway} |

- The core and filters of a {t:civil.type.dam.fill} lie inside its body and do not change its outside; only the cut-off trench under the core goes deeper into the ground. Its spillway starts as a side channel at the end.
- Inner zones such as the core, filters and gallery are filled in colour where {c:sectionView}, {c:archSection} or {c:planView} cuts the dam, and the view bar shows a {t:zone.legend} legend. Drawing sheets and PDFs are filled too; a drawing exported as DXF is not.
- An {t:civil.type.dam.arch} drawn with two points curves upstream by itself. Changing {t:cf.dam.angle} bends the axis again between the same ends. An arch dam sets {t:cf2.crestT} instead of the crest width.
- Changing the type starts the slopes, crest width and that type's values over; the {t:cf.dam.reservoir} switch stays.
- {t:civil.more} holds {t:civil.crestWidth}, {t:civil.x.freeboard}, the upstream and downstream slopes and {t:civil.embed} (2 m by default). Upstream is left of the drawing direction; {t:civil.swap} turns the water side round.
- The reservoir is drawn when the land has terrain. The {c:water} window lists each dam's full supply level and flooded area under {t:water.dams}. A dam shorter than its valley lets the water run round its ends and spread.
- Double-click a made dam or use {m:pathEdit} to change its axis. When grading changes the ground under it, it is fitted to the new ground by itself; the crest height stays.
- A bank along a river is a [levee](help:civil-levee); lakes and rivers dug into the ground are in [Water body](help:civil-waterway).

## Common mistakes

- It says the ground along the axis is above the crest everywhere. Raise the {t:civil.crest}.
- It says the dam is too high. Keep the crest at most 320 m above the lowest ground.
- It says it bends too sharply for its width. A dam is as wide as its crest and slopes; turn less, or make the pieces between bends longer.
- The water fills the downstream side. The dam was drawn the wrong way round; delete it and draw it the other way.
- No water appears behind the dam. {t:cf.dam.reservoir} is off, or the land is flat with no terrain. On flat land, set a water level with {c:water}.
- {c:dam} is not on the menu. Select {t:level.advanced} at the right of the menu bar, or type \`dam\` in the command line.
`,Hi=`---
id: civil-drainage
title: Drainage
분류: 토목
난이도: 중급
workspace: 3D 건설
keywords: drain, drainage, ditch, side ditch, gutter, U-shaped ditch, L-shaped gutter, curb, cover, culvert, box culvert, pipe, drain pipe, sewer, storm drain, manhole, concrete pipe, steel pipe, plastic pipe, cover depth, wing walls, drainige
commands: drain, road, pathEdit
context: drain
order: 55
---

## What

The tool that lays side ditches, box culverts, buried pipes and manholes along a line. Their heights follow the ground under the line, and the ground itself is not changed.

## Steps

1. Click {m:drain}.
2. Under {t:civil.typeOf}, select {t:civil.type.drain.ditch}, {t:civil.type.drain.culvert}, {t:civil.type.drain.pipe} or {t:civil.type.drain.manhole}.
3. Set values such as the width, depth or diameter in the window.
4. Click points along the way the water runs. For a culvert, click only its first and last point across the road.
5. Enter, right-click or double-click makes it. The tool ends after one.

## Tips

- The values each type shows in the window:

| Type | Values |
| --- | --- |
| {t:civil.type.drain.ditch} | {t:cf.drain.ditch} ({t:cf.drain.ditch.U} or {t:cf.drain.ditch.L}), {t:cf.drain.ditchW} (0.3 to 3 m), for U {t:cf.drain.ditchD} and {t:cf.drain.cover}, for L {t:cf.drain.curbH}, {t:cf.drain.ditchT} |
| {t:civil.type.drain.culvert} | {t:cf.drain.cells} (1 to 4), {t:cf.drain.cellW} and {t:cf.drain.cellH} (1 to 8 m), {t:cf.drain.wallT}, {t:cf.drain.wings} |
| {t:civil.type.drain.pipe} | {t:cf.drain.dia} (0.2 to 3 m), {t:cf.drain.material} ({t:cf.drain.material.concrete}, {t:cf.drain.material.steel}, {t:cf.drain.material.plastic}), {t:cf.drain.depth} (0.3 to 6 m) |
| {t:civil.type.drain.manhole} | {t:cf.drain.dia}, {t:cf.drain.material}, {t:cf.drain.mhD}, {t:cf.drain.mhDepth} (1 to 15 m), {t:cf.drain.mhGap} (10 to 200 m, 50 m by default) |

- A box culvert runs straight from the first point to the last, whatever points lie between. Its floor slopes straight, 0.3 m below the ground at both ends.
- Manholes stand at both ends of the line and evenly between them, no further apart than {t:cf.drain.mhGap}; the window shows the number of {t:cf2.manholes}. Past 60, the spacing widens by itself and a note says so.
- Pipes and manholes lie in the ground and are hard to see. Lower the ground's opacity in {c:terrainView}.
- A side ditch along the edge of a road is easier with {t:cf.road.ditch} in the [road](help:civil-road) window: it moves with the road.
- Pressing a point, waiting 0.5 s and dragging makes a curve. After making it, change values in the Properties window and reshape its line with {c:pathEdit}. When grading changes the ground under it, it is fitted to the new ground by itself.
- All civil works are summed up in [Civil works](help:civil-overview).

## Common mistakes

- A culvert is not made and red text appears. Draw it straight (bends of 15° at most) and longer than twice its height and 2 m.
- A ditch was laid but the ground is not dug. Drainage does not change the ground. A channel that digs the ground is a [water body](help:civil-waterway).
- A line that crosses itself makes nothing. Draw it again without crossings.
- {c:drain} is not on the menu. The civil tab is on the Advanced menus only: select {t:level.advanced}, or type \`drain\` in the command line.
`,Ui=`---
id: civil-grading
title: Grading and civil works
분류: 토목
난이도: 심화
workspace: 3D 건설
keywords: grading, grade, civil, cut, fill, cut slope, fill slope, earthwork, cut and fill, levelling, overlap, order, first, later, ground under a road, floating road, buried road, fit to terrain, refit, fitted by itself, portal cut, upright step, slope, order of grading, grding
commands: grade, road, retainingWall, dam, waterBody, bridge, tunnel, earthwork
order: 100
---

## What

Grading, roads, water bodies and tunnel portals change the shape of the ground; bridges, dams, retaining walls, levees and drainage do not change it but stand on it. This page explains which one sets the ground height where they overlap, how the structures are fitted again when the ground changes, and a good order of work.

## Steps

1. First level the site the building will sit on with {m:grade}.
2. Make roads with {m:road} and lakes, ponds and rivers with {m:waterBody}. Roads follow the graded ground, and the ground under roads and water bodies is cut and filled again.
3. Build {m:retainingWall} along the height steps grading made.
4. Place {m:bridge}, {m:tunnel} and {m:dam}. They all stand on the ground after grading.
5. When you change the grading later, the structures over that ground are fitted again by themselves, in the same undo step. Fix the heights or line of any structure whose window still shows red text.
6. See the soil cut and filled with {c:earthwork} in the grading window or in the [area table](help:site-area-table).

## Tips

- The finished ground is the original ground with grading, roads, water bodies and portal cuts applied one after another in the order they were made. Where they overlap, the one made later sets the height. Changing an existing one keeps its place in that order.
- How each tool treats the ground:

| Tool | Ground shape | Heights from |
| --- | --- | --- |
| {c:grade} | levels the site to one height, joined to the ground around by slopes | the grading height you set |
| {c:road} | levels the road width plus 0.5 m on each side to the road bed, joined by slopes | {t:civil.follow} follows the ground after grading, and follows it again when it changes |
| {c:waterBody} | digs the outline or the channel down to the bed | the water level reads the original ground before grading |
| {c:tunnel} | only cuts in front of both portals, down below the road | the road heights set at the portals |
| {c:bridge}, {c:dam}, {c:retainingWall}, {c:levee}, {c:drain} | no change | the ground after grading (piers and footings go the footing depth below it) |

- Fitting again keeps what you set: deck and tunnel road heights, dam crests, wall tops, the levels of lakes and ponds, and the heights of a {t:civil.grade} road. What changes is the length of piers, abutments and footings, and the top of a {t:civil.follow} road.
- When the fitted shape could not be made (piers over 200 m, a deck through the ground), the structure stays as it was and its Properties window shows the reason in red. Change its heights, then click {t:civil.refit} to fit it again.
- When a road fitted again changes the ground under it, the other structures over that ground are fitted in turn.
- In a slope of 1 : n, a larger n is gentler and spreads wider; 0 is an upright step (where a retaining wall goes). For grading, set {t:grade.cut} and {t:grade.fill} under {t:grade.more}; for a road, the cut and fill slopes are under {t:civil.x.earthHead} in {t:civil.more}.
- If a road's slopes spread into a graded site, make the road's slope values smaller or 0. With 0, the ground beyond the road width stays as it is.
- The grading height is used as the ground floor height of the buildings on that site. Civil structures belong to no level, so changing the ground floor height leaves them where they are. Grading itself is in [Grading and earthwork](help:site-grade).
- The earthwork in the grading window counts only the grading of the selected site. The earthwork in the area table adds up grading, the ground under roads, the soil dug by water bodies and the portal cuts of tunnels.
- {t:cfit.unlink} on a structure keeps the ground it dug (under a road, a water body, at tunnel portals) as plain grading, so the ground does not change.

## Common mistakes

- A road made with {t:civil.grade} floats or is buried after grading. Such a road keeps its set heights: change {t:civil.z0} and {t:civil.z1} to suit the new ground, or switch to {t:civil.follow}.
- A retaining wall was built but there is no height step in the ground. Retaining walls do not change the ground. Make the upright step first with grading slopes of 0.
- After changing the grading, a bridge stayed as it was and its window shows red text. Fitted to the new ground it could not be made, so it was left. Change the deck heights, then click {t:civil.refit}.
- After changing the grading, a river's water level did not move. Rivers follow the original ground before grading, so grading does not change them.
- The civil tab is missing. Select {t:level.advanced} at the right of the menu bar.
`,Wi=`---
id: civil-levee
title: Levee
분류: 토목
난이도: 중급
workspace: 3D 건설
keywords: levee, dike, dyke, embankment, river bank, flood bank, revetment, concrete revetment, block revetment, stepped levee, parapet wall, crest, crest width, berm, river slope, land slope, flood, river works, leve
commands: levee, waterBody, water, pathEdit
context: levee
order: 65
---

## What

The tool that builds a bank of earth with a trapezoid section (a levee) along a river or channel. Other types face the river slope with concrete, steps or blocks, or stand a parapet wall on the crest. It only builds the bank; the ground itself is not changed.

## Steps

1. Click {m:levee}.
2. Under {t:civil.typeOf}, select {t:civil.type.levee.earth}, {t:civil.type.levee.concrete}, {t:civil.type.levee.stepped}, {t:civil.type.levee.parapet} or {t:civil.type.levee.block}.
3. Click points along the centre line of the bank so the river is on the left of the drawing direction.
4. Set {t:cf2.leveeHeight} with {t:civil.topGround}, or {t:cf2.leveeTop} with {t:civil.topLevel}.
5. Enter, right-click or double-click makes it. The tool ends after one levee.

## Tips

- With {t:civil.topGround} the crest follows the line {t:cf2.leveeHeight} (4 m by default) above the ground. That height is measured from the ground evened out over 20 m each way, so small bumps do not show in the crest. With {t:civil.topLevel} the crest is at one height; it starts at the highest ground along the line plus the levee height.
- The {t:cf.g.lsection} group sets {t:cf.levee.crestW} (2 to 30 m, 5 m by default), {t:cf.levee.riverSlope}, {t:cf.levee.landSlope}, {t:cf.levee.berms} (0 to 3), {t:cf.levee.bermW} and {t:cf.levee.embed}. Slopes are the horizontal run for a rise of 1; berms are flat steps spaced evenly on the land slope.
- The further values of each type are below. Changing the type sets the river slope to that type's default.

| Type | Values |
| --- | --- |
| {t:civil.type.levee.earth} | the section values only |
| {t:civil.type.levee.concrete} | {t:cf.levee.revetT}, {t:cf.levee.toeW}, {t:cf.levee.toeD} |
| {t:civil.type.levee.stepped} | {t:cf.levee.stepH}, {t:cf.levee.steps} (1 to 30) |
| {t:civil.type.levee.parapet} | {t:cf.levee.wallH}, {t:cf.levee.wallT} |
| {t:civil.type.levee.block} | {t:cf.levee.blockS}, {t:cf.levee.rows} (1 to 40) |

- Dig the river itself as a river with [Water body](help:civil-waterway), then draw the levee along its bank. Water over a wide area is shown with [Water level](help:civil-water).
- Pressing a point, waiting 0.5 s and dragging makes a curve. After making it, change values in the Properties window and reshape its line with {c:pathEdit}. When grading changes the ground under it, it is fitted to the new ground by itself.
- A bank across a valley that holds water back is a [dam or weir](help:civil-dam).

## Common mistakes

- The river side and the land side are the wrong way round. The river is on the left of the drawing direction. Delete the levee and draw it the other way.
- Red text says it bends too sharply for its width. The bend is tight for the crest width. Turn less, or make the crest narrower.
- A line that crosses itself makes nothing. Draw it again without crossings.
- {c:levee} is not on the menu. The civil tab is on the Advanced menus only: select {t:level.advanced}, or type \`levee\` in the command line.
`,Gi=`---
id: civil-my-civil
title: My civil structures
분류: 토목
난이도: 중급
workspace: 3D 건설
keywords: my civil structures, mycivil, my civil, own structures, own bridge, own dam, bridge model, structure model, send from 3D objects, send to building, sent objects, place on the ground, library, category, scale, 1:100, update the same object
commands: myCivil, sendToBuilding, objects
context: myCivil
order: 90
---

## What

The tool that places structures you modelled yourself in 3D objects, such as bridges, dams or towers, on the land of 3D construction. Objects sent from 3D objects with {c:sendToBuilding} under the category {t:tc.sort.civil} gather here.

## Steps

1. In 3D objects, click the structure to send (Shift: several).
2. Click {c:sendToBuilding} on the menu bar of 3D objects.
3. Select {t:tc.sort.civil} under {t:tc.sort} and set the {t:tc.scale} (\`1:1\` if you built it at real size, \`1:100\` for a 1:100 model).
4. Select {t:tc.afterPlace} under {t:tc.after} and press Enter.
5. 3D construction opens with the structure following the cursor: click where it goes on the land. R turns it 90°, Esc ends.
6. To place it again later, click {m:myCivil} in 3D construction and select the structure.

## Tips

- The structure stands at the ground height where you click. It belongs to no level, so changing a building's ground floor height does not move it, and moving it never snaps it to a floor or changes its level.
- Press and drag to place several along the dragged line, one every {t:dc.rowGap}; each stands at the ground height where it lands.
- Change {t:presetParam.w}, {t:presetParam.d} and {t:presetParam.h} in the window to stretch or shrink it. {t:lib.natural} returns to the real size it was sent at. After placing, [Smart scale](help:obj-smart-scale) also changes its size.
- When you fix the structure in 3D objects and send it again with {t:tc.howUpdate}, the copies already placed take the new shape and keep where they stand and how far they were stretched.
- The same structures can also be selected in the {t:lib.group.mine} group of {m:objects}.
- Your objects are kept in this computer's library, and placed structures are also stored in the file, so they open on other computers too.
- {t:lib.remove} removes it from the library only. Structures already placed stay.
- A structure made with a civil tool (road, bridge …) becomes a plain solid without a form with {t:cfit.unlink}, and stays on the land like your own civil structures.
- The send window is explained in [Send to building](help:more-send-to-building).

## Common mistakes

- The list is empty. The {t:tc.sort} was not {t:tc.sort.civil} when sending. Send it again with that category, or right-click the object in the My objects window and select {t:tc.mSort}.
- It came in far too large or too small. A 1:100 model was sent at real size, or the other way round. Select the right {t:tc.scale} and send again with {t:tc.howUpdate} (longest side 1 cm to 2 km).
- On a slope one side of the structure floats or is buried. Your own civil structures do not cut or fill the ground and do not bend with the terrain. Roads, bridges and dams that must follow the ground are made with [Road](help:civil-road), [Bridge](help:civil-bridge) and [Dam and weir](help:civil-dam).
- {c:myCivil} is not on the menu. Select {t:level.advanced} at the right of the menu bar.
`,Ki=`---
id: civil-overview
title: Civil works
분류: 토목
난이도: 중급
workspace: 3D 건설
keywords: civil, civil works, civil engineering, civil structures, road, bridge, tunnel, retaining wall, drainage, ditch, culvert, levee, embankment, water body, river, lake, pond, dam, weir, water level, route, zone, station, chainage, span range, fit to terrain, convert to solid, edit as 3D object
commands: road, bridge, tunnel, retainingWall, drain, waterBody, levee, dam, water, myCivil
order: 10
---

## What

Building structures such as roads, bridges, tunnels, retaining walls, drainage, water bodies, levees and dams on the land. Civil structures belong to the land, not to the levels of a building, and their heights follow the terrain and the structures they join by themselves. When the ground changes, the structures are fitted to the new ground again.

## Steps

1. Click {t:level.advanced} on the {t:level.basic} / {t:level.advanced} switch of the menu bar. The {t:group.civil} tab is on the Advanced menus.
2. Click the structure to make on the {t:group.civil} tab.
3. Select its type under {t:civil.typeOf} in the window and set values such as width or height.
4. Click the points of the centre line (the outline for a lake or pond) on the ground.
5. Enter, right-click or double-click makes it. The tool ends after one structure.

## Tips

- {c:road}: a road along a centre line; the ground under it is cut and filled. Guardrails, a median, sidewalks and side ditches can be added. [Road](help:civil-road)
- {c:bridge}: a deck along a line, on piers and abutments. [Bridge](help:civil-bridge)
- {c:tunnel}: lining, roadway and portals from portal to portal, with the ground dug at both entrances. [Tunnel](help:civil-tunnel)
- {c:retainingWall}: holds back the earth where two ground levels meet. [Retaining wall](help:civil-retaining)
- {c:drain}: side ditches, box culverts, pipes and manholes along a line. [Drainage](help:civil-drainage)
- {c:waterBody}: digs a lake, pond or river and fills it with water. [Water body](help:civil-waterway)
- {c:levee}: a bank along a river with crest, slopes and berms. [Levee](help:civil-levee)
- {c:dam}: a dam or weir across a valley, with the water behind a dam filled in. [Dam and weir](help:civil-dam)
- {c:water}: shows ground lower than the water level under water. [Water level](help:civil-water)
- {c:myCivil}: places your own structures sent from 3D objects on the ground. [My civil structures](help:civil-my-civil)
- On the Basic menus only {c:road} is there, on the {t:group.site} tab. The other civil tools also open when their command name, such as \`bridge\` or \`tunnel\`, is typed in the command line.
- Heights come by themselves from the ground, the water and the joined roads at the points; values typed in the window are kept. With terrain, select under {t:civil.heightRef} whether heights are typed {t:civil.sea} or {t:civil.aboveGround}.
- The less used values are under {t:civil.more} in the window.
- Pressing a point, waiting 0.5 s and dragging makes a curve. After making a structure, select it to change its values in the Properties window or to reshape its line with {c:pathEdit}.
- When grading, a road or a water body changes the ground, or a structure is moved, the structures over that ground are fitted to the new ground in the same undo step. Heights you set (deck and portal heights, crests, wall tops, a lake's level) stay. See [Grading and civil works](help:civil-grading).
- The bottom of the Properties window has {t:civil.refit}, {t:cfit.editIn} and {t:cfit.unlink}. {t:cfit.editIn} opens the structure in the 3D object workspace to add points, lines and objects or cut holes. {t:cfit.unlink} drops the form and makes it a plain solid.
- Made structures are listed by kind in the {t:aw.civil} group at the bottom of the {c:levelPanel} window. Clicking a name selects that structure.
- Civil structures belong to the land, so changing a building's ground floor height does not move them. Building tools cannot select them, but can snap to them.
- A road or bridge across a building is still made, but a notice appears and the overlap shows red.
- Without terrain, structures are made on flat ground at height 0.

## Common mistakes

- The {t:group.civil} tab is missing. The Basic menus have no civil tab. Select {t:level.advanced}, or type the command name, such as \`road\`, in the command line.
- Red text appears and nothing is made. The line crosses itself, bends too sharply for its width, or a bridge or tunnel is too short for its type. Fix the line as the message says.
- After the ground was changed, a bridge or dam stayed as it was and its window shows red text. Fitted to the new ground it could not be made (piers over 200 m, a deck in the ground), so it was left as it was. Change its heights or line as the message says.
`,qi=`---
id: civil-rec-river-crossing
title: Example: a road across a river
분류: 토목
난이도: 심화
workspace: 3D 건설
keywords: example, tutorial, river, stream, creek, bridge, girder bridge, road, approach road, retaining wall, embankment, river crossing, cross a river, join road and bridge, civil example
commands: waterBody, bridge, road, retainingWall
order: 110
---

## What

Dig a river through a valley, lay a girder bridge over it, and build a road on each side that joins the bridge deck. Near the bridge, the high road embankment gets upright sides held by retaining walls. The example shows the order in which the water body, bridge, road and retaining walls read each other's heights and fit together by themselves.

## Steps

1. Prepare land with terrain. Use {m:siteMap} to select a place with a stream or a low valley, and select {t:level.advanced} at the right of the menu bar.
2. Click {m:waterBody} and select {t:civil.type.waterbody.river} under {t:civil.typeOf}. Open {t:civil.more} and set {t:civil.width} to \`20\`; leave {t:civil.waterDepth} at 2 m and {t:civil.bank} at 1:2.
3. Click the points of the centre line from the higher end of the valley (upstream) to the lower end (downstream), then press Enter.
4. Click {m:bridge} and select {t:civil.type.bridge.beam}. Cross the river at a right angle: click two points 30 m from the middle of the river on each side (60 m long), then press Enter. The deck rises above the water by the {t:civil.x.clearance} (default 5 m) by itself.
5. Click {m:road} and select {t:civil.type.road.sidewalk} (10 m wide, the same as the bridge). Start about 100 m from the bridge, put the last point at the middle of one end of the bridge (within 5 m) and press Enter. The road end meets the deck height.
6. Build a road to the other end of the bridge the same way.
7. Select each road and, in the Properties window under {t:civil.more} › {t:civil.x.earthHead}, change {t:civil.fillSlope} to \`0\`. The sides of the road embankment near the bridge become upright.
8. Click {m:retainingWall}, draw about 15 m along the side of the embankment starting at the bridge end, and press Enter. The earth side and the height are set by themselves. Build the next 15 m and the other side the same way.

## Tips

- The order matters. The river must exist for the bridge to rise above the water, and the bridge must exist for the road ends to meet the deck.
- A road never climbs steeper than {t:civil.maxGrade} (default 8 %). At 8 % it takes 12.5 m to climb 1 m, so draw the road longer when the deck is well above the ground.
- Try other bridge types. An {t:civil.type.bridge.arch} bridge needs at least 20 m and a {t:civil.type.bridge.truss} bridge at least 15 m, and both must be drawn straight. See [Bridges](help:civil-bridge).
- Change the height under the bridge with {t:civil.x.clearance} under the bridge's {t:civil.more} › {t:civil.x.heightHead}.
- Short pieces of retaining wall each get the height of their own stretch of embankment. {t:civil.type.retaining.block} looks like a stacked stone wall.
- On a high embankment, select {t:cf.road.rail.beam} under {t:cf.road.rail} in the road window for a guardrail. Along the river you can draw a [levee](help:civil-levee) as a bank.
- When the ground by the river is graded later, the bridge's piers and abutments and the roads are fitted to the new ground by themselves; the deck heights stay.
- When it is done, see the earthwork caused by the embankments and the river in the [area table](help:site-area-table). The rules behind the order are in [Grading and civil works](help:civil-grading).

## Common mistakes

- The river was drawn from downstream to upstream. The water stays at the first point's height and the upper ground is dug deeply; draw it again from upstream to downstream.
- The bridge was drawn before the river. The deck does not rise above the water; delete the bridge and draw it again, or raise {t:civil.z0} and {t:civil.z1} yourself.
- There is a step between the road and the bridge. The road's last point was more than 5 m from the middle of the bridge end. Delete the road and draw it again with its end closer to the bridge end.
- The message says the bridge is too short. Each type has a shortest length; draw the bridge longer or use {t:civil.type.bridge.beam}.
- The top of a retaining wall is far above the road. One wall keeps the same height above the ground from start to end, so split it where the embankment gets lower.
`,Ji=`---
id: civil-retaining
title: Retaining wall
분류: 토목
난이도: 중급
workspace: 3D 건설
keywords: retaining wall, retaining, cantilever wall, inverted T, L-shaped wall, gravity wall, block wall, stone wall, reinforced earth, mechanically stabilized earth, anchored wall, tieback, bearing plate, base slab, toe, heel, weep holes, railing, footing depth, height difference, step in the ground, slope, retaning wall
commands: retainingWall, grade, pathEdit
context: retainingWall
order: 50
---

## What

The tool that builds a wall holding back the earth along the edge between two ground levels. There are six types, {t:civil.type.retaining.cantilever}, {t:civil.type.retaining.gravity}, {t:civil.type.retaining.block}, {t:civil.type.retaining.L}, {t:civil.type.retaining.rse} and {t:civil.type.retaining.anchor}, and the wall's foot goes down to the footing depth in the ground.

## Steps

1. Click {m:retainingWall}.
2. Select the type under {t:civil.typeOf}.
3. Click points along the edge where the ground level changes.
4. With terrain, the higher side (the earth side) and the wall height are found by themselves. If the earth side is wrong, click {t:civil.x.flip}.
5. To set the height yourself, type {t:civil.wallHeight} with {t:civil.topGround}, or {t:civil.wallTop} with {t:civil.topLevel}.
6. Make it with Enter, a right click or a double click. The tool ends after one wall.

## Tips

- The earth (the higher side) is on the left of the drawing direction. With terrain, the ground after grading 2 m to each side of the line is compared to find the higher side, and the top of the wall is set 0.3 m above the higher ground.
- {t:civil.topGround} keeps the same height above the ground along the line; {t:civil.topLevel} keeps the top at one height.
- The values each type shows in the window:

| Type | Values |
| --- | --- |
| {t:civil.type.retaining.cantilever} | {t:civil.base} and {t:civil.x.toe} under {t:civil.more} (the heel is the rest) |
| {t:civil.type.retaining.L} | {t:cf.wall.lSide} ({t:cf.wall.lSide.heel} or {t:cf.wall.lSide.toe}), {t:civil.base} under {t:civil.more} |
| {t:civil.type.retaining.gravity} | {t:cf.wall.baseRatio}, {t:cf.wall.batter} |
| {t:civil.type.retaining.block} | stones stepped back course by course |
| {t:civil.type.retaining.rse} | {t:cf.wall.blockH}, {t:cf.wall.stripGap}, {t:cf.wall.stripL} |
| {t:civil.type.retaining.anchor} | {t:cf.wall.rows} (1 to 6), {t:cf.wall.anchorGap}, {t:cf.wall.anchorL}, {t:cf.wall.anchorAngle}, {t:cf.wall.plate}, {t:cf.wall.plateS} |

- On any type, turning on {t:cf.wall.railing} in the {t:cf.g.wtop} group puts a railing on top; set its {t:cf.wall.railH}.
- When the anchors would pass 150, their spacing widens by itself and a note says so. The window shows the number of {t:cf2.anchors}.
- With terrain, select under {t:civil.heightRef} whether heights are typed {t:civil.sea} or {t:civil.aboveGround}.
- {t:civil.more} holds {t:civil.wallThick} (0.4 m by default), {t:civil.footing} (how deep it goes into the ground, 1 m by default) and {t:civil.x.weep}. With a spacing, 10 cm holes go through 0.3 m above the ground at that spacing; 0 means no holes.
- Pressing a point, waiting 0.5 s and dragging makes a curve. After making a wall, double-click it or use {m:pathEdit} to move its points and handles. See [Edit curve](help:obj-curve-edit).
- Select a made wall to change the same values in the Properties window. When grading changes the ground under it, its foot is fitted to the new ground by itself; the top height stays.
- A height difference in the ground is made with [grading](help:site-grade): cut and fill slopes of 0 make an upright step. Build the wall along that edge. See [Grading and civil works](help:civil-grading).

## Common mistakes

- Building a wall does not change the ground. The wall only stands on the ground, so make the height difference first with [grading](help:site-grade).
- The earth is on the wrong side. Switch it with {t:civil.x.flip} while drawing. For a wall already made, delete it and draw it the other way round.
- The top of a long wall is far too high at one end. {t:civil.topGround} uses one height for the whole line, so draw several walls where the height difference changes.
- A {t:civil.type.retaining.cantilever} wall shows no base slab. Its {t:civil.base} is 0; type a width under {t:civil.more} (for example \`1.8 m\`).
- A line that crosses itself makes nothing. Draw it again without crossings.
- {c:retainingWall} is not on the menu. The civil tab is on the Advanced menus only: select {t:level.advanced} at the right of the menu bar. See [Basic and Advanced menus](help:start-level).
`,Yi=`---
id: civil-road
title: Road
분류: 토목
난이도: 중급
workspace: 3D 건설
keywords: road, street, path, lane, two-lane, four-lane, sidewalk, footpath, median, guardrail, barrier, curb, side ditch, shoulder, cross slope, crown, superelevation, grade, profile, uphill, downhill, pavement, follow terrain, constant grade, cut, fill, road extras, raod
commands: road, bridge, pathEdit
howto: road
context: road
order: 20
---

## What

The tool that makes a road by clicking the points of its centre line on the ground. The road follows the terrain or an even grade, and the ground under it is cut and filled to meet it. Guardrails, a median, sidewalks and side ditches can be added to the road.

## Steps

1. Click {m:road} (for a bridge: {c:bridge}).
2. Click the points of the centre line in order.
3. Make it with Enter, a right click or a double click. Set the width and grade in the window.

## Tips

- Under {t:civil.typeOf} select {t:civil.type.road.two} (6 m wide), {t:civil.type.road.four} (16 m, with a median), {t:civil.type.road.sidewalk} (10 m) or {t:civil.type.road.path} (1.5 m). Changing the type sets the width of that type. The width can be typed from 1 to 50 m.
- The height along the road (the profile) is set one of two ways. {t:civil.follow} follows the ground smoothly, cutting hills and filling hollows so it is never steeper than the {t:civil.maxGrade} (8 % by default). {t:civil.grade} runs straight from {t:civil.z0} to {t:civil.z1}, and the window shows its {t:civil.gradeNow}. The end height is kept so the grade stays within 30 %.
- An end close to the end of another road, a bridge or a tunnel meets its height. Where roads cross, their tops are matched.
- The road extras in the window add parts to the road. With every one set to {t:cf.road.rail.none} the road is only its pavement, as before.

| Extra | Values |
| --- | --- |
| {t:cf.road.rail} | {t:cf.road.rail.beam}, {t:cf.road.rail.pipe} or {t:cf.road.rail.concrete}; {t:cf.road.railSide}, {t:cf.road.railH}, {t:cf.road.postGap} |
| {t:cf.road.median} | {t:cf.road.median.curb} or {t:cf.road.median.barrier}; {t:cf.road.medianW}, {t:cf.road.medianH} |
| {t:cf.road.walk} | left, right or both; {t:cf.road.walkW}, {t:cf.road.curbH} |
| {t:cf.road.ditch} | {t:cf.road.ditch.U}; {t:cf.road.ditchW}, {t:cf.road.ditchD} |

- Sidewalks and the median lie inside the road's width; the side ditches lie just outside its edges. When the guardrail posts of both sides would pass 90, the post spacing widens by itself and a note says so.
- {t:civil.more} holds the lanes: {t:civil.x.lanes} (1 to 8), {t:civil.x.laneWidth} (2.5 to 4 m), {t:civil.x.shoulder}, {t:civil.x.median} and {t:civil.x.walk}. They add up to the road width; typing the width directly lets the lanes share it again.
- {t:civil.x.crossSlope} raises the middle of the road so water runs off (0 to 6 %, 2 % for new roads). {t:civil.x.superelev} tilts the road toward the inside of bends (0 to 10 %).
- The pavement has three layers, {t:civil.x.layer0}, {t:civil.x.layer1} and {t:civil.x.layer2}; together they make the {t:civil.paveThick}.
- The slopes of the ground under the road are {t:civil.cutSlope} and {t:civil.fillSlope} (1 and 1.5 by default).
- Press a point, wait 0.5 s and drag for a curved road. Points can also be typed as coordinates such as \`x,y\`. Ctrl+Z takes back the last point.
- Select a made road to change the same values in the Properties window, and use {c:pathEdit} to move its points and handles.
- A {t:civil.follow} road follows the new ground by itself when grading or the terrain changes later. A {t:civil.grade} road keeps the heights you set.
- Make river or valley crossings a [bridge](help:civil-bridge) and passages through a hill a [tunnel](help:civil-tunnel), and draw the road ends onto their ends. Drains laid apart from roads are in [Drainage](help:civil-drainage).

## Common mistakes

- {c:road} is not on the menu. On the Basic menus it is on the {t:group.site} tab, on the Advanced menus on the {t:group.civil} tab. Typing \`road\` in the command line also works.
- A curved road is not made and red text appears. It bends too tightly for its width, so the road edge would fold. Make the curve gentler or the road narrower.
- A notice says the road passes through a building. The road is made, but the overlap shows red. Move the line, or check where the building is in the [work scope](help:site-scope).
- With {t:civil.grade} the road dives into the ground or floats high. It does not follow the ground: set {t:civil.z0} and {t:civil.z1} to the ground heights or switch to {t:civil.follow}.
- Turning on sidewalks made the lanes narrower. Sidewalks go inside the road's width; widen the road by that much.
`,Xi=`---
id: civil-tunnel
title: Tunnel
분류: 토목
난이도: 중급
workspace: 3D 건설
keywords: tunnel, portal, lining, horseshoe, circular tunnel, box tunnel, cut and cover, underpass, twin bore, invert, headwall, bell mouth, cylindrical cut, portal cut, dig at portals, tunel
commands: tunnel, road, sectionView, pathEdit
context: tunnel
order: 40
---

## What

Draw a centre line from one portal to the other to make the lining (tunnel wall), roadway, walkways, lights and portals. The ground in front of both portals is dug down to the road by itself; the ground inside the hill (between the portals) stays.

## Steps

1. Click {m:tunnel}.
2. Under {t:civil.typeOf}, select {t:civil.type.tunnel.horseshoe}, {t:civil.type.tunnel.circle}, {t:civil.type.tunnel.box} or {t:civil.type.tunnel.cutcover}.
3. Click points from one portal to the other.
4. Set values such as {t:cf.tunnel.lanes}, {t:cf.tunnel.height} and {t:cf.tunnel.portal} in the window.
5. Enter, right-click or double-click makes it. The tool ends after one tunnel.

## Tips

- The road's {t:civil.z0} and {t:civil.z1} are set by themselves from the ground at the portals, or from the end of a road or bridge joined there. Between the portals the road runs straight from one height to the other, and the window shows its {t:civil.gradeNow}.
- The window shows the {t:cf.clearW} and the {t:cf.outerW}. The clear width is lanes × lane width plus the verges on both sides and the walkways.
- The window has three groups:

| Group | Values |
| --- | --- |
| {t:cf.g.tsection} | {t:cf.tunnel.height} (road to ceiling, 2.5 to 15 m), {t:cf.tunnel.lining} (0.15 to 1.5 m), {t:cf.tunnel.invert} (horseshoe only), {t:cf.tunnel.bores} (1 to 2), with two bores {t:cf.tunnel.boreGap} (2 to 60 m) |
| {t:cf.g.tinside} | {t:cf.tunnel.lanes} (1 to 4), {t:cf.tunnel.laneWidth} (2.5 to 4 m), {t:cf.tunnel.verge}, {t:cf.tunnel.walk} (none, left, right, both) and {t:cf.tunnel.walkW}, {t:cf.tunnel.pave}, {t:cf.tunnel.lights} (0 to 4) |
| {t:cf.g.tportal} | {t:cf.tunnel.portal}: headwall ({t:cf.tunnel.portalT}, {t:cf.tunnel.wing}, {t:cf.tunnel.parapet}), bell mouth ({t:cf.tunnel.portalLen}), cylindrical cut ({t:cf.tunnel.cutAngle} 30 to 80°) |

- {t:cfit.dig} is on from the start. From each portal face outward, along the centre line of a joined road or else the tunnel line carried on straight, the ground is dug down to the bottom of the pavement, as wide as the portal plus 1 m on each side, until the natural ground comes down to the road (150 m at most). Its sides meet the ground at a 1 : 0.5 slope; a cylindrical cut uses its own cut angle.
- The soil dug shows as {t:cfit.digCut} in the window and in the earthwork of the [area table](help:site-area-table). Moving the tunnel moves the cut with it; deleting it removes the cut.
- The part inside the hill is not dug: type \`section\` in the command line to cut the view with {c:sectionView}, or lower the ground's opacity in {c:terrainView}.
- Draw roads onto both ends of the tunnel: the road ends meet the road height at the portals. After making it, change values in the Properties window and reshape its line with {c:pathEdit}.
- When grading changes the ground at the portals, the tunnel is fitted to the new ground by itself. The road heights stay.
- {t:cfit.editIn} in the Properties window adds objects such as vents or signs. {t:cfit.unlink} makes it a plain solid; the ground dug at the portals stays dug as a plain grading.
- The civil tools are on the Advanced menus. All civil works are summed up in [Civil works](help:civil-overview).

## Common mistakes

- Red text says it is too short. Draw a tunnel at least 10 m long.
- Text says it bends too sharply for its width. The bend is tight for the outer width of the lining (with two bores, both bores and the gap). Turn less, or make the pieces between bends longer.
- Text says the parts could not be joined into one. A bend in the line close to a portal can cause this. Draw the line straight near the portals.
- Nothing is dug in front of a portal. {t:cfit.dig} is off, or the ground there is already lower than the road.
- The inside of the hill does not look hollow. The ground inside the hill is not dug. Check with {c:sectionView}.
`,Zi=`---
id: civil-water
title: Water Level
분류: 토목
난이도: 기초
workspace: 3D 건설
keywords: water, water level, waterlevel, sea level, flood, flooding, reservoir, lake, sea, flooded area, fill with water, remove water, water levels list, add water level, several water levels, dam reservoir, full supply level, watter
commands: water, dam, waterBody
context: water
order: 80
---

## What

Set a water level and the ground lower than it shows under water. Use it to see lakes, the sea or land flooded by water. The ground is not dug. The land can have several water levels.

## Steps

1. Click {m:water}.
2. Type the height in the {t:water.level} field.
3. Under {t:water.scope}, select {t:water.all}, {t:area.site} or {t:area.building}.
4. Ground lower than the water level is covered with see-through water. {t:water.area} shows the area under water.
5. Enter closes the window. To take the water away, click {t:water.none}.

## Tips

- With terrain, select under {t:civil.heightRef} between {t:civil.sea} (height above sea level) and {t:civil.aboveGround} (height above the lowest ground). The {t:water.lowest} value in the window is a handy reference.
- For land by the sea, keep {t:civil.sea} and type \`0\` for sea level.
- The level can be from 10 m below the lowest ground to 50 m above the highest ground. Each change is one undo step.
- Once there is one water level, {t:water.list} appears at the top of the window. {t:water.add} makes one more level, 1 m above the highest one, and the list's buttons select which level to change. Each level has its own {t:water.scope}.
- {t:area.site} fills one site only. With several sites, select the site under {t:so.target}; the work scope moves to that site too.
- A reservoir is best made with the reservoir of a [dam](help:civil-dam): only the valley behind the dam fills up to its full supply level, and {t:water.dams} at the bottom of the window lists each dam's level and area. Those are changed in the dam's window.
- A dam drawn after the water level is set gets its crest at least the freeboard above the water; a bridge gets its deck the clearance above the water.
- Lakes, ponds and rivers dug into the ground are made with [Water body](help:civil-waterway).

## Common mistakes

- All the low ground goes under water. Water fills every bit of ground lower than its level. To fill one place only, draw a site around it and set {t:water.scope} to {t:area.site}, or use a dam's reservoir.
- {t:area.building} is selected but no water shows. There is no building outline yet, or the outlines lie higher than the water.
- On flat land without terrain, the level must be above 0 for water to show, and then the whole land is under water.
- There is no {t:water.add} button. It appears with the list once one water level is set.
- The water tool does not dig the ground. To dig a lake or river, use [Water body](help:civil-waterway).
- {c:water} is not on the menu. Select {t:level.advanced} at the right of the menu bar.
`,Qi=`---
id: civil-waterway
title: Water Bodies
분류: 토목
난이도: 중급
workspace: 3D 건설
keywords: water body, lake, pond, reservoir, river, stream, creek, canal, channel, dig, basin, bank slope, upstream, downstream, waterbody, watter body
commands: waterBody, water, pathEdit
context: waterBody
order: 60
---

## What

Digs the ground and fills it with water: draw an outline for a lake or a pond, or a centre line from upstream to downstream for a river. The dug ground becomes part of the terrain, like grading.

## Steps

1. Click {m:waterBody}.
2. Under {t:civil.typeOf}, select {t:civil.type.waterbody.lake}, {t:civil.type.waterbody.pond} or {t:civil.type.waterbody.river}.
3. For a lake or a pond, click the points of its outline; clicking the first point again closes it and builds it.
4. For a river, click the points of its centre line from the higher end (upstream) to the lower end (downstream), then press Enter.
5. Select the finished water body to change {t:civil.waterDepth} and, for a lake or pond, {t:civil.waterLevel} in the Properties window.

## Tips

- The default depth is 5 m for a {t:civil.type.waterbody.lake}, 1.5 m for a {t:civil.type.waterbody.pond} and 2 m for a {t:civil.type.waterbody.river}. The type selected at first is {t:civil.type.waterbody.pond}.
- The water level of a lake or pond starts 0.3 m under the lowest ground around it, and the outline is dug straight down to the bed, the depth below the water level.
- A river's water follows the ground but never rises downstream. It stays about 0.3 m under the ground, and the channel is dug with its bed width and bank slopes.
- The river's bed width ({t:civil.width}, default 10 m) and {t:civil.bank} (default 1:2) are under {t:civil.more}. A {t:civil.bank} of 0 gives upright channel sides.
- Press, wait 0.5 s and drag while placing points to draw curves. Afterwards, double-click the water body or use {m:pathEdit} to reshape it.
- A river's water follows the natural ground (before grading), so grading does not move it; when the terrain itself changes, the river is fitted again by itself. The level of a lake or pond may have been typed, so it stays: select it and click {t:civil.refit} to set it from the new ground (a typed level is replaced too).
- {t:cfit.unlink} in the Properties window makes it a plain solid; the dug ground stays dug as a plain grading. The basin of a lake or pond is then listed in the grading window as one without a site, to change or delete.
- Levees along a river are made with [Levee](help:civil-levee); dams across a valley with [Dam and weir](help:civil-dam).
- The soil dug out by water bodies is counted in the earthwork of the [area table](help:site-area-table). How they work with grading and roads is in [Grading and civil works](help:civil-grading).
- Make the water body first and then draw a [bridge](help:civil-bridge): its deck rises above the water by the clearance by itself.
- Covering the whole land with water at one level is the {c:water} tool; see [Water level](help:civil-water).

## Common mistakes

- The river was drawn from downstream to upstream. The water stays at the low height of the first point and the upper ground is dug deeply. Draw it again from upstream to downstream.
- The water of a lake or pond sticks up above the ground like a block. Its {t:civil.waterLevel} is higher than the ground around it; lower it.
- An outline that crosses itself makes nothing. Draw it again without crossings.
- On flat land without terrain nothing is dug. Load terrain in [Site location](help:site-map) first.
- {c:waterBody} is not on the menu. Select {t:level.advanced} at the right of the menu bar.
`,$i="---\nid: more-ai-ask\ntitle: Ask the AI to make things\n분류: 그 밖의 기능\n난이도: 중급\nworkspace: 공통\nkeywords: AI, make it for me, ask to make, make a desk, make a chair, make a house, natural language, sentence, chat command, on top of, next to, around, between, in a row, in a circle, spacing, count, size, change colour, move it, delete it, make it bigger, make it smaller, undo, how do I, where is, shortcut question\ncommands: cadooChat, undo\norder: 50\n---\n\n## What\n\nWrite what you want in the {c:cadooChat} window and Cadoo makes it, or changes it, as it understood. You can give sizes, counts, places (on top of, next to, around, between) and arrangements (in a row, in a circle) in the same sentence. What Cadoo makes is one step of the undo history, so it can be taken back at once. This works without any AI connected.\n\n## Steps\n\n1. Double-click Cadoo to open the {c:cadooChat} window.\n2. Write what to make with its size, count and place in one sentence and press Enter. For example: `의자 4개를 책상 둘레에 만들어 줘` (four chairs around the desk)\n3. What Cadoo understood is made at once, and the answer says what was made and where.\n4. If you do not like the result, press {t:aimake.undo} under the answer. Exactly that one step of Cadoo's is taken back.\n5. To change an object that is there, name it. For example: `직육면체 1을 빨간색으로 칠해 줘` (paint Box 1 red)\n\n## Tips\n\n### What it can make\n\n- Basic shapes: box (cube), cylinder, sphere (ball), cone, torus, wedge, prism (such as a hexagonal prism), pyramid, hemisphere\n- Objects: desk, table, chair, stool, bench, bed, sofa, bookshelf, stairs, house, tower, tree, snowman, car, bus, cup, bottle, plate, tray, pipe, rocket, robot, person, animal, bridge, castle, fence, lamp, streetlight, pencil, airplane, boat\n- In 3D building it also makes walls, rooms, columns, windows and doors. A house is made of four walls and a roof.\n- For something it does not know, it says so and lists what it can make.\n- The rules read Korean sentences best. Simple English such as `make a desk` or `make a red ball` also works; for sizes, counts and places use the Korean forms below.\n\n### Size, count and shape\n\n- Give sizes with `가로` (width), `세로` (depth), `높이` (height), `지름` (diameter) or `반지름` (radius). Without a unit (`mm`, `cm`, `m`), numbers are mm in 3D objects and m in 3D building.\n- For objects such as a desk or a chair, one size is enough: the others follow the object's real proportions. With no size at all, 3D building makes them full size and 3D objects make a model with a longest side of about 80 mm. Small things such as a cup or a pencil keep their real size in 3D objects too.\n- Give counts as `4개`, `3그루` or `네 개`. Up to 50 are made at once.\n- Words that shape it: `계단 10단` (10 steps), `책장 5칸` (5 shelves), `2층 집` (two storeys), `평지붕` (flat roof), `박공지붕` (gable roof), `구멍 뚫린` (with a hole), `속이 빈` (hollow), `등받이 없는 의자` (chair without a back), `큰` / `작은` (big / small), colours such as `빨간` (red) or `파란` (blue)\n\n| Write | It makes |\n|---|---|\n| `가로 2m 세로 1m 높이 75cm 책상` | a desk of that size |\n| `탁자 하나와 의자 4개 만들어 줘` | one table and four chairs |\n| `평지붕 2층 집` | a two-storey house with a flat roof |\n| `구멍 뚫린 컵` | a hollow cup |\n\n### Places and arrangements\n\n| Write | It places |\n|---|---|\n| `이 상자 위에 원기둥 올려` | a cylinder on the selected box |\n| `그 위에 공 올려 줘` | a ball on what was just made |\n| `의자 4개를 책상 둘레에` | four chairs around the desk, facing it |\n| `두 상자 사이에 원기둥 놓아 줘` | a cylinder between the two boxes |\n| `상자 1과 상자 2 사이에 공` | a ball between the two named objects |\n| `나무 3그루를 일렬로` | three trees in a row |\n| `원기둥 6개를 원형으로 배치해 줘` | six cylinders in a circle |\n| `상자 2개를 10 간격으로 나란히` | two boxes in a row, 10 apart |\n| `x로 3m 떨어진 곳에 지름 1m 공` | a ball 3 m from the origin along x |\n| `남쪽 벽에 창문 2개` | (3D building) two windows evenly spaced in the south wall |\n| `의자를 책상 옆으로 옮겨 줘` | moves the chair that is there next to the desk |\n\n- Place words: `위에` (on), `아래에` (under), `옆에` (next to), `왼쪽에` (left of), `오른쪽에` (right of), `앞에` (in front of), `뒤에` (behind), `안에` (inside), `사이에` (between), `둘레에` / `주위에` (around), `원점에` (at the origin)\n- Arrangement words: `일렬로` / `한 줄로` / `나란히` (in a row), `앞뒤로` (front to back), `원형으로` (in a circle), `쌓아서` (stacked), `10 간격으로` (10 apart), `같은 간격으로` (evenly spaced)\n- `이 상자` (this box) and `이거` (this) mean the object selected now; `그` (that) means what was just made. Names are the ones in the object list, such as `직육면체 1`.\n\n### Changing objects that are there\n\n- Size: `직육면체 2 반으로 줄여 줘` (halve Box 2), `이거 2배로 키워줘` (double this), `높이를 5cm로 바꿔 줘` (height 5 cm), `지름을 20mm로 바꿔줘` (diameter 20 mm)\n- Move and turn: `위로 10 올려줘` (up 10), `오른쪽으로 20mm 옮겨줘` (right 20 mm), `원점으로 옮겨줘` (to the origin), `90도 돌려줘` (turn 90°), `x축으로 45도 회전해줘` (45° about x)\n- Colour and material: `파란색으로 칠해줘` (paint blue), `유리로 바꿔줘` (glass), `나무 재질로 해줘` (wood)\n- Others: `3개 복사해줘` (three copies), `하나 더 만들어줘` (one more), `숨겨줘` (hide), `이거 삭제해` (delete this)\n- The object is the one named, the one selected now, or the only object of that shape.\n\n### Undo\n\n- {t:aimake.undo} takes back exactly that one step of Cadoo's, then reads {t:aimake.undone}.\n- If anything changed after it, the button is greyed out. Then use Ctrl+Z to undo step by step. Once Ctrl+Z has taken back the later steps and Cadoo's step is the latest again, the button works again. See [Undo](help:start-undo).\n\n### Asking how to\n\n- Ask `구멍 뚫는 법` (how to make a hole) or `돌출은 어떻게 해?` (how do I extrude?) and Cadoo finds the matching page of this help and shows its steps. The buttons under the answer open the tool or the help page.\n- Ask `모깎기 어디 있어?` (where is fillet?) for the menu place, or `저장 단축키` (save shortcut) for the key.\n- With an AI connected, requests the rules cannot read go to the AI, which makes them itself. What the AI makes gets the same {t:aimake.undo} button. See [AI connection](help:more-ai-setup).\n\n## Common mistakes\n\n- Cadoo says there are several objects of that shape. Select the one to change first, or say its name, such as `직육면체 2`.\n- A name that does not exist gets the answer that there is no such object. Check the names in the object list.\n- If the object a sentence points at is missing (`책상 둘레에`, around the desk), nothing is made. Make that object first.\n- If part of a sentence is not understood, only the understood part is made and the answer names the words it could not use. Change that part yourself.\n- In 3D objects, `집 만들어 줘` (make a house) without a size gives a small model, not a full-size house. Give the size too.\n- Sizes out of the allowed range are not made. Try another size.\n- A question such as `상자 만드는 법` (how to make a box) is read as a how-to question, not a request. To have it made, write `상자 만들어 줘` (make a box).\n- Dangerous things are never made. See [What the AI cannot do, and safety](help:more-ai-limits).\n",ea=`---
id: more-ai-limits
title: What the AI will not do, and safety
분류: 그 밖의 기능
난이도: 기초
workspace: 공통
keywords: AI safety, safety rules, refused, declined, will not answer, personal information, privacy, phone number, address, password, swear words, pause, mentor alert, counselling, homework, wrong answer, mentor
commands: cadooChat
order: 60
---

## What

The AI in the Cadoo chat and in the help assists with making things, using NukCAD, school work and light everyday topics. Rules keep it safe for students, so some topics are declined, and the AI can also be wrong. This page explains those rules and what to watch for.

## Steps

1. Ask about making things, using NukCAD, school work or light everyday topics.
2. Do not type personal details such as your name, address, phone number or passwords.
3. If Cadoo declines, rephrase the question as a making or NukCAD question.
4. Check the menus and steps the AI names against the screen and this help.
5. If something worries you, talk to a trusted adult such as your mentor or a parent.

## Tips

### Topics the AI declines

- Dangerous things: weapons, explosives, drugs, poisons, ways to hurt people, hacking. These get a fixed polite refusal and a suggestion to make something else. Requests to make dangerous objects are not built.
- Sexual content, and ways to find out other people's personal information.
- Other topics it does not help with: politics and elections, which religion is right, stocks, crypto and gambling, medical advice such as medicines or diagnoses, legal advice, celebrity gossip. It answers with the topics it can help with.
- Calling it a story or a game does not change the rules. Requests to ignore the rules are not followed.
- It does not do homework for you. You can ask how to approach a problem or for a hint.

### When things are hard

- If you mention self-harm, the AI answers warmly and points to help: in Korea the youth counselling line 1388 and the suicide prevention line 109 (call or text). If you are in danger now, call 112 or 119.

### Language and pauses

- A question with swear words gets a request to ask again politely. Swear words in answers are masked.
- If dangerous topics come up repeatedly in a short time, the AI chat pauses for a few minutes. You can keep working in NukCAD meanwhile.

### What reaches the mentor

- The mentor cannot read Cadoo chats. When answers come through the mentor's server, the chat is not kept on the server.
- If a mentor server address and your grade, class and number are set, the mentor is told **only your number and the kind of topic** when self-harm, dangerous things or sexual content come up. Questions, answers and the conversation are not sent. The chat window says this once.
- Without a server address or a grade, class and number, nothing is reported anywhere, and no record of refusals is kept on this computer.

### When an answer is wrong

- The AI can name wrong menus or steps. Menu, tool, command and shortcut names in an answer are checked against NukCAD, and names that could not be found are marked as unconfirmed at the end of the answer.
- Say that an answer is wrong and the AI checks its previous answer again and corrects it.
- This help is the reference for exact tool use. Check important points with your mentor.
- An AI running on this computer also downloads a safety-check model that checks questions and answers again. If the computer cannot run it, only word rules are used. See [Connecting an AI](help:more-ai-setup).

## Common mistakes

- Thinking a CAD question was refused on purpose. A word that looks like a dangerous one can be blocked by mistake. Ask again and say clearly what you are making, such as "a model" or "a part".
- Typing a home address or phone number into a question. The AI does not need them.
- Following the AI's answer and not finding the menu. Look the name up in this help or in Cadoo's question window. See [Cadoo and chat](help:more-cadoo).
- Getting an answer that the AI is pausing. Wait a few minutes, then ask about making things or NukCAD again.
`,ta=`---
id: more-ai-offline
title: School AI bundle (install without internet)
분류: 그 밖의 기능
난이도: 중급
workspace: 공통
keywords: school AI bundle, offline bundle, offline install, without internet, USB install, copy model, import from files, NukCAD-models, manifest, silent install, administrator, mentor, big AI, Gemma
commands: settings
order: 55
desktop: true
---

## What

How to install NukCAD together with a big AI model on school PCs with no or slow internet. On one PC with internet you make a bundle folder (NukCAD-학교용) once, then carry it on a USB stick or a shared folder to each PC. The bundle holds the installer, an AI model (by default the normal-sized Gemma 4 E4B), the safety model and the AI runtime.

## Steps

1. An administrator or mentor downloads the NukCAD installer on a PC with internet.
2. In PowerShell, run \`tools\\make-offline-bundle.ps1 -Installer <installer path>\`. Downloading the models takes a while; if it stops, run it again and it continues.
3. Copy the whole NukCAD-학교용 folder to a USB stick or a shared folder. Keep the installer and the NukCAD-models folder in the same folder.
4. On each PC, run the installer from that folder with an administrator account. At the end it copies the AI model files to NukCAD-models in the install folder (usually \`C:\\Program Files\\NukCAD\\NukCAD-models\`) and checks once, right there, that each file matches the original (SHA-256). A silent install (/S) does the same.
5. NukCAD uses the models checked at install time right away. For a user who never chose an AI mode, AI on this computer turns on by itself and a short message says so once. {c:settings} → {t:set.general} tab → {t:ai.set.label} shows the model as {t:bigai.installed}.
6. On a PC that already has NukCAD, choose {t:ai.set.local} and {t:bigai.engine.cpu} under {t:ai.set.label}, then press {t:bundle.import}. Use {t:bundle.import.find} to find the NukCAD-models folder on the USB stick and press {t:bundle.import.start}.

## Tips

- To choose models, add \`-Models e4b,e2b\`. There are e2b (light), e4b (normal) and 12b (smart); the default is e4b.
- Models put in by the installer go into NukCAD's install folder and every user of the PC shares them; no user downloads them again.
- The check runs once, at install time. Its result (verified.json) is in the install folder, which only administrators can change, so even a PC that resets user data at each restart never checks again. Only without that result (an older install) does each user's app check once.
- Without a bundle, keep 'Also download the Cadoo AI model' (on by default, about 5.4 GB) on the installer's first page: at the first start NukCAD downloads the model that suits the PC and turns on AI on this computer. Without internet it continues at the next start. For a silent install, add \`/AIMODEL=1\`.
- A file that differs from the original is deleted by the installer, which says so. Make the bundle again, or add the model with {t:bundle.import}.
- More about installing is in [AI setup](help:more-ai-setup) and in the bundle folder's '읽어 보세요.txt'.

## Common mistakes

- Moving only the installer. Without the NukCAD-models folder next to it, no model is copied.
- Using a bundle made for another NukCAD version. Model files that differ from this version are not used; after updating NukCAD, make a new bundle.
- Not enough free space. The default bundle needs about 5.5 GB more on each PC.
`,na=`---
id: more-ai-setup
title: Connecting an AI
분류: 그 밖의 기능
난이도: 중급
workspace: 공통
keywords: connect ai, turn on ai, ai settings, ai helper, ai model, download model, local ai, this computer, mentor server, server address, test connection, webgpu, graphics chip, processor, cpu, web ai, qwen
commands: cadooChat, settings
order: 50
---

## What

Cadoo answers from this help and its own rules and can make objects without an AI. For free conversation and more complex making requests, connect an AI. There are three ways: an AI running on this computer (web and installed app), an AI reached through the server on the mentor's PC (installed app), or no AI.

## Steps

1. In the web version, click the {t:chat.aiSetup} button at the top of the {c:cadooChat} window.
2. Check the graphics result, select a model from the list and download it. It is downloaded only once.
3. In the installed app, open {c:settings} → {t:set.general} and select {t:ai.set.off}, {t:ai.set.local} or {t:ai.set.teacher} under {t:ai.set.label}.
4. With {t:ai.set.local}, set {t:bigai.engine} and download a model.
5. With {t:ai.set.teacher}, type the {t:ai.teacher.server} your mentor gave you and check it with {t:ai.teacher.test}.
6. The top of the {c:cadooChat} window shows what answers now. Send a question to check.

## Tips

- With an AI on this computer, questions and answers never leave the computer. Models range from a few hundred MB to several GB. Lighter models are faster but give simpler answers.
- Under {t:bigai.engine}, {t:bigai.engine.webgpu} runs on the graphics chip and {t:bigai.engine.cpu} on the processor. The processor option runs larger models but uses much memory and answers slowly.
- The web AI and the small AI need a graphics chip with WebGPU. If graphics acceleration is off, see [Black or slow 3D view](help:faq-black-screen).
- The mentor server is a program started by NukCAD on the mentor's PC. Its address and your grade, class and number are also used by [Ask the mentor for help](help:more-mentor-help).
- On a PC set up by the school, these settings cannot be changed without the admin password.
- What the AI will not help with is in [What the AI will not do, and safety](help:more-ai-limits).

## Common mistakes

- Closing the window while a model downloads. Keep it open until the download ends. After that the model is ready at once.
- Selecting a model too large for the computer's memory. The list shows whether each model can run; start with the recommended one.
- Typing the mentor server address wrongly. Type the numeric address and port exactly as given and check with {t:ai.teacher.test}.
- Looking for the mentor server in the web version. It can only be reached from the installed app.
`,ra=`---
id: more-cadoo
title: Chat with Cadoo
분류: 그 밖의 기능
난이도: 기초
workspace: 공통
keywords: Cadoo, Nuk Cadoo, character, helper, helper character, chat, ask, question, chat window, chat history, save chat, export chat, new chat, chat tabs, close tab, Mergy, Interr, Stub, Separ, switch character, hide character, character size, speech bubble, find in help, conversation
commands: cadooChat, settings
context: cadooChat
order: 40
---

## What

Cadoo is the helper character that walks along the bottom of the 3D view, just above the command line. Ask Cadoo how to use NukCAD, ask it to make things, and read earlier chats again. Chats happen in the {c:cadooChat} window. Not even your mentor can see them.

## Steps

1. Double-click Cadoo at the bottom of the 3D view. The {c:cadooChat} window opens.
2. Type your question in the box at the bottom and press Enter.
3. Read the answer. The buttons under it open the tool or the help page.
4. For another topic, press {t:chat.new} to start in a new tab.
5. Open an earlier chat again from {t:chat.history}.
6. Right-click Cadoo to switch the character, change its size or hide it.

## Tips

### The Cadoo character

- Click Cadoo once for a greeting and a short tip. The {t:chat.open} button in the bubble opens the chat window.
- There are four characters: {t:buddy.name.mergy}, {t:buddy.name.interr}, {t:buddy.name.stub} and {t:buddy.name.separ}. Select one in the right-click menu.
- Under {t:buddy.size} in the right-click menu, select {t:buddy.sizeSmall}, {t:buddy.sizeNormal} or {t:buddy.sizeLarge}, or drag the slider.
- Turn on {t:buddy.still} in the right-click menu and Cadoo stops walking around and stays where it is. A place you drag it to is remembered.
- **Ask …** in the right-click menu opens a small question window. Type a tool name or what you want to do (for example make a hole) to see the matching tools and how-tos; {t:ask.run} opens one at once. A command such as \`box 30 20 10\` gives {t:ask.line}.
- Drag Cadoo to move or throw it. Put it on a window and it walks along that window's top edge.
- If Cadoo hangs on the mouse cursor, shake the mouse hard or press Esc.
- Cadoo's answers also show for a few seconds in a bubble over its head. Click the bubble to open the chat window.

### The chat window

- The chat window is also on the {t:win.menu} menu, or type \`chat\` or \`cadoo\` in the command line. Like other windows, it can be docked or float.
- Enter sends, Shift+Enter starts a new line. A message can have up to 1000 characters.
- While an answer comes in, {t:chat.stop} keeps only what came so far. Esc does the same.
- Click a character's face at the top to have that character answer from the next answer on.
- Every chat is a tab. Double-click a tab's name to rename it; close a tab with its × button or the middle mouse button. A closed tab's chat stays in {t:chat.history}. Up to 20 tabs can be open.
- Without an AI connected, Cadoo answers from the help and marks the answer {t:chat.fromHelp}. The first screen of the chat window says what answers. See [AI connection](help:more-ai-setup) to connect one.
- For making things see [Ask the AI to make things](help:more-ai-ask); for what the AI does not help with see [What the AI cannot do, and safety](help:more-ai-limits).

### Keeping chats

- The web version does not keep chats on this computer. They are gone when you close it.
- The installed app asks once, at your first question, whether to keep chats on this computer. On a school computer that others use too, select {t:chat.askLocalNo}. Change it later with {t:chat.local} on the {t:chat.history} screen.
- To keep chats, press {t:chat.fileSave} on the {t:chat.history} screen and select a place such as your Google Drive folder. All chats go into one \`.json\` file; {t:chat.fileOpen} brings them back.
- {t:chat.export} saves the open chat as a {t:chat.exportMd} or {t:chat.exportTxt} file.
- Chats are not saved inside your work file.

## Common mistakes

- Cadoo is not there. The character is switched off. Select a character under Preferences → {t:set.options} → {t:set.buddy} to bring it back.
- After closing the web version, the chat is gone. The web version keeps no chats. Before closing, press {t:chat.fileSave} on the {t:chat.history} screen.
- A chat deleted from the history cannot be brought back. You are asked once more before it is deleted.
- While you type in the chat box, shortcuts do not reach the 3D view. Click outside the chat window before you go on working.
- If Cadoo covers a button, drag it somewhere else.
`,ia=`---
id: more-disaster
title: Disaster simulation
분류: 그 밖의 기능
난이도: 기초
workspace: 3D 건설
keywords: disaster, simulation, nuke, blast, disaster simulation, nuclear weapon, atomic bomb, hydrogen bomb, Hiroshima, Nagasaki, ground zero, burst height, damage range, shock wave, mushroom cloud, fireball, crater, sound, mute, restore the model
commands: settings
howto: disaster
order: 20
---

## What

A simulation that shows, in the 3D view, the damage ranges of a nuclear weapon that was actually tested or used, as if it went off over your land. It shows the flash, the fireball, the mushroom cloud, the shock wave with objects collapsing, and rings for the damage ranges, to help understand how much harm such a weapon does. The document is not changed.

## Steps

1. Switch on {t:nuke.setting} in Preferences → Options (a school PC may ask for the admin password).
2. Click the {t:nuke.launch} button at the bottom left of the building view.
3. Select the bomb and burst height, then click a spot on the ground to start. The document is not changed; {t:nuke3.restore} brings the view back.

## Tips

- The switch shows under {t:set.options} only when Preferences is opened in 3D building. It is remembered on this computer (browser).
- The {t:nuke.weapon} list holds ten weapons that were actually tested or used, in order of yield. At first the weapon used on Hiroshima is selected.
- Type the {t:nuke4.hob} in metres in {t:nuke4.hobField}, or use the buttons: the height the weapon actually went off at (as tested), the height that spreads 5 psi damage widest (best), and {t:nuke4.ground}. When the fireball touches the ground, a crater forms.
- While you select the spot, rings of the damage ranges follow the cursor, and the table in the window gives the radius of {t:nuke.ring.fireball}, {t:nuke.ring.psi20}, {t:nuke.ring.psi5}, {t:nuke.ring.burn3} and {t:nuke.ring.psi1}.
- Select {t:nuke.speed} from 0.5×, 1×, 2× and 4×. While the simulation runs, drag to look around; {t:nuke.replay} plays it again from the start at the same ground zero.
- The sound of the burst is off at first. Switch off {t:nuke.mute} at the bottom of the window to hear it. It is muted again whenever the program starts.
- The terrain and aerial photos around the land are loaded so the view reaches further. Without a map position, or when they cannot be loaded, the surroundings are drawn as flat ground.
- Selecting another weapon ends the running simulation, and ground zero is selected again.

## Common mistakes

- The {t:nuke.launch} button does not show. It is not available in 3D object modeling. In 3D building, switch on {t:nuke.setting} in Preferences → Options.
- Switching it on asks for the management password. The student PC is locked by the school; ask the mentor.
- Clicking does not start it. Ground zero must be inside the loaded land.
- Worried that the buildings stay broken afterwards: the document is never changed. Click {t:nuke3.restore} or press Esc to bring back the scene before the burst.
- The view stutters. On a slow computer the surroundings and effects are drawn simpler by themselves. Setting {t:set.drawQuality} in Preferences to {t:set.drawQuality.fast} draws it lighter still.
`,aa=`---
id: more-mentor-admin
title: Mentor management
분류: 그 밖의 기능
난이도: 중급
workspace: 공통
keywords: teacher management, teacher admin, teacher PC, teacher server, relay, students, student list, grade class number, allow, block, approval, safety alerts, self-harm alert, help requests, watch a student, AI key, API key, Claude, usage, cost, questions, teacher page, mentor
commands: teacherAdmin, cohelpTeacher, settings
context: teacherAdmin, cohelpTeacher
order: 90
desktop: true
---

## What

On a PC installed for the mentor, one window turns the mentor server on and off and manages the students, safety alerts, student help requests, the AI helper and the usage. It opens only in the installed app on the mentor PC. The window has the tabs {t:tapp.tab.status}, {t:tapp.tab.students}, {t:tapp.tab.alerts}, {t:tapp.tab.help}, {t:tapp.tab.ai} and {t:tapp.tab.usage}.

## Steps

1. Start NukCAD on the PC installed for the mentor. The mentor server starts with it.
2. Click the NukCAD button at the top left → {c:teacherAdmin}. If a mentor password was set, press {t:school.unlock} and enter it.
3. On the {t:tapp.tab.status} tab, check that the {t:tapp.relay} is on. If it is off, press {t:tapp.relay.start}.
4. Give the students the {t:tapp.addr} shown on the same tab.
5. On the {t:tapp.tab.students} tab, set the school name, {t:tapp.school.grades}, {t:tapp.school.classes} and {t:tapp.school.numbers}, then press {t:tapp.school.save}.
6. To use the AI helper, paste the API key on the {t:tapp.tab.ai} tab, press {t:tapp.key.save}, and check with {t:tapp.test} that an answer comes back.
7. On the {t:tapp.tab.status} tab, press {t:tapp.ai.turnOn} on the {t:tapp.ai} line to start taking student questions.

## Tips

- PCs installed for students use the mentor PC address given at installation by themselves. If several addresses are listed, give the one on the Ethernet or Wi-Fi line.
- The {t:tapp.tab.students} tab lists the students by grade and class, each with its connection state and number of questions. {t:tapp.st.block} blocks that number and the PC it used for 50 minutes; {t:tapp.st.unblock} lifts it. Safety alerts still come from a blocked number.
- With {t:tapp.school.approval} set to {t:tapp.school.ask}, a number not seen before waits until you press {t:tapp.st.allow}. With {t:tapp.school.privateOnly} on, only the school network can connect.
- When one number is used on several PCs at once, {t:tapp.st.conflictHead} shows at the top. Check that nobody is using another student's number.
- The {t:tapp.tab.alerts} tab shows only the grade, class and number, the kind and the time of what a student's AI noticed. The conversation is never sent. The kinds are {t:tapp.kind.self}, {t:tapp.kind.danger} and {t:tapp.kind.adult}; self-harm shows in red at the top. Talk with the student in person.
- The same kind from the same student comes at most once in 10 minutes. Alerts are gone when the mentor server stops, and {t:tapp.al.clear} removes them.
- The {t:tapp.tab.help} tab is the same as the {c:cohelpTeacher} window. Press {t:cohelp.accept} on a request, or send a connected student a {t:cohelp.t.invite}; when the student accepts, their model shows on your screen. One student at a time.
- While watching, switch off {t:cohelp.t.follow} to turn the view yourself. You can edit only after the student presses {t:cohelp.allowEdit}; {t:cohelp.t.giveBack} hands it back. {t:cohelp.stop} removes the student's model and brings your own document back as it was.
- On the {t:tapp.tab.ai} tab, select the AI model, limits such as the questions per student per day, and {t:tapp.extra}, then press {t:tapp.ai.save}. Test questions are not counted as student use.
- With {t:tapp.lim.keepLastQuestions} at 0, no questions are kept. Even above 0, questions from the Cadoo chat are never kept.
- The {t:tapp.tab.usage} tab gives today's questions and estimated cost by grade and class. The cost is an estimate from the tokens.
- The student side is in [Ask the mentor for help](help:more-mentor-help) and [AI connection](help:more-ai-setup).

## Common mistakes

- The window shows {t:tapp.notTeacher}. This PC is not set up for the mentor. Set it as the mentor PC under Preferences → General → {t:school.title}, or install it again for the mentor.
- {t:tapp.offNote} shows. Turn the mentor server on on the {t:tapp.tab.status} tab. While it is off, student AI questions, help requests and alerts all stop.
- {t:tapp.err.startFailed} shows. Check whether another program uses port 8765.
- A student cannot connect. Check that the student PC uses the address in {t:tapp.addr}, that it is on the same school network, and that the number is not blocked.
- Never give the API key to students. It is kept only in the mentor server's settings file, and the window shows it masked.
`,oa=`---
id: more-mentor-help
title: Ask the mentor for help
분류: 그 밖의 기능
난이도: 기초
workspace: 공통
keywords: teacher, help me, ask the teacher, stuck, share screen, ask for help, help request, watch together, share my model, let teacher edit, take back, stop sharing, accept, grade class number, teacher server, mentor
commands: cohelp, settings
howto: askTeacher
context: cohelp
order: 80
desktop: true
---

## What

When you are stuck in class, send the mentor a help request. The mentor can then see your model on their own screen and, if you allow it, edit it for you. This works in the installed app only. It does not send a video of your screen: it keeps the mentor's copy of your document in step, so the mentor can turn and zoom the model freely.

## Steps

1. Click the NukCAD button at the top left → {c:cohelp} (installed app).
2. Write a note if you like and press {t:cohelp.request}.
3. When the mentor accepts, press {t:cohelp.accept} in the window that opens: your model shows on the mentor's screen. {t:cohelp.allowEdit} lets the mentor edit; {t:cohelp.stop} ends it any time.
4. It needs the mentor server (Preferences → General → AI helper) and your grade, class and number (select them in the status bar).

## Tips

- The window is also on the {t:win.menu} menu, or type \`askteacher\` in the command line.
- After sending, the window shows {t:cohelp.requested}. Press {t:cohelp.cancel} if you change your mind.
- The mentor can also ask to watch first. You are connected only after you press {t:cohelp.accept} in the {t:cohelp.ask.title} window; {t:cohelp.refuse} sends nothing.
- Nothing of your document or view is sent before you accept. A request carries only your grade, class, number and note. The mentor server passes things on and keeps nothing.
- While connected, a {t:cohelp.watching} bar stays over the 3D view. After {t:cohelp.allowEdit} it reads {t:cohelp.teacherEditing} and you can only watch. Press {t:cohelp.takeBack} to edit again yourself.
- Each change the mentor makes arrives as one step of your undo history. After {t:cohelp.takeBack}, Ctrl+Z takes it back. See [Undo](help:start-undo).
- Select your grade, class and number in the window that opens when the app starts, or click the number in the status bar. Your name is never asked for.
- The mentor server address is the same field as the mentor server in [AI connection](help:more-ai-setup). On a PC set up by the school it cannot be changed.
- If the connection drops, the app reconnects by itself. Back within 30 seconds, the session goes on.

## Common mistakes

- The window shows {t:cohelp.needSetup}. Press {t:cohelp.openSettings}, enter the mentor server address and select your grade, class and number.
- The web version does not have this feature. Only the installed NukCAD can reach the school's mentor server.
- {t:tapp.link.blocked} shows. The mentor has blocked that number. Check that you did not select another student's number, and tell the mentor.
- {t:tapp.link.waiting} shows. Wait until the mentor lets the new number in.
- {t:tapp.link.range} shows. Select your grade, class and number again.
- Editing is blocked while the mentor edits. Press {t:cohelp.takeBack} first.
- Do not put personal details such as your name or phone number in the note. The note is a few words for the mentor's list.
`,sa=`---
id: more-screenshot
title: Screenshot
분류: 그 밖의 기능
난이도: 기초
workspace: 공통
keywords: screenshot, screen shot, capture, screen capture, save image, save picture, image, picture, png, snapshot, presentation, report picture, save view, screenshoot
commands: screenshot, visual, grid
context: screenshot
order: 30
---

## What

Saves the 3D view as it is now as one picture file (PNG). Use it to put a picture of your model into a presentation, a report or homework.

## Steps

1. Turn and zoom the view until it shows what you want to save.
2. Click the NukCAD button at the top left and select {c:screenshot}. The camera button on the bar beside the view cube does the same.
3. The picture is saved to the downloads folder with the name \`Image_date_time.png\`.

## Tips

- You can also type \`screenshot\` or \`png\` in the command line.
- Only the 3D view goes into the picture. Menus, windows and the command line are left out; the view cube and the dimension and note labels shown in the view are included.
- The picture is as large as the 3D view on screen. Close side windows or enlarge the program window for a bigger picture.
- If you do not want the grid, switch it off with {k:grid} before saving. Change how bodies are drawn in {c:visual}, for example {t:vis.shaded} or {t:vis.xray}.
- Press {k:fit} to bring every object into view. Viewing is explained in [The view](help:start-view).
- For a presentation, set {t:set.drawQuality} in {c:settings} to {t:set.drawQuality.fine} so that small things are drawn in their full shape.
- In 3D building, change the time in {c:lighting} to save an evening or night view.
- For an exact drawing with dimensions, use [drawings](help:obj-drawing) in 3D object modeling and [floor plans and elevations](help:arch-drawing) in 3D building.

## Common mistakes

- The highlight of selected objects is in the picture. Click an empty spot or press Esc to clear the selection, then save.
- The saved file cannot be found. Look in the browser's download list or the downloads folder for a file starting with \`Image_\`.
- Hidden objects are not in the picture. Show the objects you need first; see [Hide and show](help:start-hide).
- To capture the menus and windows as well, use your computer's own screen capture instead.
`,ca=`---
id: more-send-to-building
title: Send to building
분류: 그 밖의 기능
난이도: 중급
workspace: 공통
keywords: send to building, send, sendobj, my objects, my civil structures, my building members, 3D objects to 3D construction, move a model, own furniture, category, base point, scale, real size, model scale, 1:100, 1:50, 2:1, factor, goes to, change, update the same object, send again, place now, keep only, sit on the floor, drop to floor, level, door shape, window shape, building member, landscape
commands: sendToBuilding, myObjects, myCivil, dropFloor
context: sendToBuilding
order: 10
---

## What

Turns objects modelled in 3D objects into real size and puts them into the My objects library of 3D construction. The selected bodies are joined into one object, and by the selected category it goes onto a level, into a wall or onto the land. When the same object is fixed and sent again, the copies already placed change with it.

## Steps

1. In 3D objects, click the bodies to send (Shift: several). With nothing selected, every shown body goes.
2. Click {m:sendToBuilding}.
3. Check the {t:lib.send.name} and select the {t:tc.sort}. The category marked {t:tc.suggested}, guessed from the name and size, is selected at first.
4. Under {t:tc.base}, select {t:lib.send.bottom} or {t:lib.send.origin}.
5. Select or type the {t:tc.scale} and check {t:lib.send.realSize}.
6. Under {t:tc.after}, select {t:tc.afterPlace} or {t:tc.afterKeep}. When placing now, check {t:tc2.dest}.
7. Press Enter. With Place now, 3D construction opens and the object follows the cursor. Click where it goes and end with Esc.

## Tips

- The {t:tc.scale} is selected from the list or typed. For a model smaller than the real thing type \`1:50\` (made 50 times larger); for a model larger than real, \`2:1\` (made half as large). \`×2\`, \`2x\`, \`50%\` and \`1/50\` work too, and a plain number (\`50\`) multiplies by that number. The line under the field says how many mm in the building one mm of the 3D object becomes.
- Each category goes somewhere else:

| Category | Where it goes |
| --- | --- |
| {t:tc.sort.furniture}, {t:tc.sort.service}, {t:tc.sort.member}, {t:tc.sort.other} | onto the level being worked on (moves with the level) |
| {t:tc.sort.opening} | over a wall into the wall (the wall gets a hole), elsewhere onto the level's floor |
| {t:tc.sort.exterior}, {t:tc.sort.civil} | onto the land (does not move with a level) |

- The {t:tc2.dest} line shows where the object goes, such as \`대지 1 › 건물 A › 2층\`. {t:tc2.change} offers other levels or the land; the current work scope is marked {t:tc2.scopeTag}. With no level being worked on it goes onto the land, and with no 3D construction yet a flat land is made for it.
- {t:tc.sort.opening} objects are a {t:presetCat.door} or a {t:presetCat.window}. A door starts at the floor, a window 0.9 m above it, and the base point is always the bottom centre. One modelled with its width along y is turned 90° when sent.
- Objects sent as {t:tc.sort.civil} can also be selected with {m:myCivil} in 3D construction. See [My civil structures](help:civil-my-civil).
- In 3D construction, furniture, landscape and your own objects dragged to a new place sit on the slab, floor or roof under them (else on the terrain) and take the level at that height. The switch is {t:tc2.floorSnap} in the {c:move} window. {m:dropFloor} brings the selected objects down at once. Your own civil structures always stay on the land and never change level.
- When bodies sent before are selected again, {t:tc.howUpdate} and {t:tc.howNew} appear at the top. {t:tc.howUpdate} gives My objects and every copy already placed the new shape, keeping where they stand and how far they were stretched; one undo takes it back. The category, scale and base point start as they were last time.
- Updated with {t:tc.afterKeep} while 3D construction is not open, the placed copies change the next time 3D construction opens.
- In the My objects window of 3D construction, right-click an object and select {t:tc.mEdit}: 3D objects opens with the bodies it was made from selected (or with the sent object brought in if they are gone). Fix them and send again.
- Your objects are kept in this computer's library, and placed objects are stored in the file too. Hidden bodies are not sent.

## Common mistakes

- It is 100 times too large or too small in 3D construction. A model was sent at real size, or the other way round. Select the right scale and send again. The longest side must be from 1 cm to 2 km; under 10 cm a note asks whether it is a model.
- After sending a fix, the placed copies did not change. {t:tc.howNew} makes another object; select {t:tc.howUpdate}.
- A door shape does not go into the wall. Send it as {t:tc.sort.opening} and click over a wall when placing it.
- The object landed on the wrong level. Select the level with {t:tc2.change} on the {t:tc2.dest} line, or select the level of the work scope in 3D construction first.
- It says the object is too complex to send. Send it in parts.
- 3D construction has no such button. Send from 3D objects.
`,la=`---
id: faq-black-screen
title: Black or very slow 3D view
분류: 문제 해결
난이도: 기초
workspace: 공통
keywords: black screen, nothing shows, 3d view missing, graphics acceleration, hardware acceleration, gpu, graphics chip, webgl, webgpu, graphics driver, slow, laggy, software rendering, remote desktop
commands: settings
order: 20
---

## What

If the 3D view is black, the message {t:gl.none} appears, or the {t:gpuhint.banner} bar shows above the view, the browser or the PC cannot use the graphics chip. The 3D view is then missing or very slow, and an AI on this computer cannot run.

## Steps

1. Click {t:gpuhint.banner.how} on the bar, or open {c:settings} → {t:set.options} and click {t:gpuhint.set.show} on the {t:gpuhint.set.label} line.
2. In Chrome or Edge, copy the settings address with the {t:gpuhint.copy} button, paste it into the address bar and press Enter.
3. Turn on "Use graphics acceleration when available" and click the {t:gpuhint.pic.restart} button next to it.
4. When the browser opens again, click {t:gpuhint.recheck} in NukCAD.
5. If nothing changed, close every browser window and open it again. In the installed app, restart the PC.

## Tips

- The {t:gl.retry} button under {t:gl.none} tries to make the 3D view again without restarting the browser.
- If acceleration is on but still blocked, the graphics driver is old, a school policy blocks it, or the PC is used through remote desktop. Update the driver; with remote desktop, open NukCAD on that PC directly.
- If a school PC does not let you change the setting, ask the PC administrator.
- The installed app uses the Windows graphics component, not the Chrome setting. In the installed app this message usually means a graphics driver problem.
- If the view is slow with acceleration on, see [Slow screen](help:faq-slow).

## Common mistakes

- Turning the setting on without restarting. The browser has to restart for it to apply.
- Closing only one window. The browser ends only when all its windows are closed.
- Hiding the bar with {t:gpuhint.banner.never} and forgetting the cause. The state is still shown in {c:settings} → {t:set.options} on the {t:gpuhint.set.label} line.
`,ua=`---
id: faq-boolean-fail
title: Union or subtract fails
분류: 문제 해결
난이도: 중급
workspace: 공통
keywords: boolean failed, union failed, subtract failed, intersect failed, does not merge, hole not cut, not overlapping, gap, touching faces, mesh, stl, imported file
commands: union, subtract, intersect
order: 70
---

## What

This page covers {c:union}, {c:subtract} or {c:intersect} showing {t:err.boolean-failed} or leaving the shape unchanged. Usually the two objects do not really overlap, their faces are slightly off, or one of them is an imported mesh.

## Steps

1. Check that the objects really overlap. Switch the {c:visual} menu to {t:vis.xrayEdges} to see inside.
2. If they are apart, move one into the other a little with {c:move} or {c:align}.
3. If faces only touch and still do not merge, move one about 0.1 mm further in.
4. For {c:subtract}, click the object to keep first, then the object to cut away.
5. Try again. If it still fails, undo with Ctrl+Z and combine the objects two at a time.

## Tips

- Let the cutting object stick out past the object you keep, so the hole goes cleanly through. When faces sit at exactly the same height, a very thin skin can be left.
- Objects imported from STL or OBJ can be meshes (triangle faces), and booleans often fail on meshes. Import STEP where possible, or rebuild the part in NukCAD.
- When many objects are joined at once, a failure is hard to trace. Joining two at a time shows which object is the problem.
- Booleans between heavily filleted objects can be slow or fail. Combine first and fillet last.
- For printing touching parts as one, see also [Exporting for 3D printing](help:start-export).

## Common mistakes

- Taking a group for a union. A group only moves together; it is not one object. See [Groups and separate](help:obj-group).
- Clicking the objects of a subtraction in the wrong order. If the result is wrong, undo with Ctrl+Z and click the object to keep first.
- Trying to combine a sketch (a flat shape). Make it a solid with {c:extrude} first.
`,da=`---
id: faq-clicks
title: Clicks do not work
분류: 문제 해결
난이도: 기초
workspace: 공통
keywords: click does not work, cannot select, nothing happens, not responding, stuck tool, sketch editing, work scope, other level, hidden object, hidden point, esc, selection
commands: selectAll, exitSketch
order: 40
---

## What

This page covers clicks that select nothing or do nothing. Usually another tool or sketch editing is open, the object lies outside the work scope, or a window covers the 3D view.

## Steps

1. Press Esc once or twice. The open tool ends and clicks select again.
2. If the {t:status.sketchEditing} bar shows above the view, click {c:exitSketch}. While a sketch is edited, clicks go to its lines.
3. In 3D Building, check the work scope (site › building › level) in the path bar at the top. Objects of other buildings or levels are not taken by box selection.
4. Check the eye next to the object in the objects window. Hidden objects cannot be clicked.
5. If a window covers the 3D view, move or fold it.

## Tips

- Clicking a selected object again selects a face or an edge. To select the whole object again, click empty space, then the object, or double-click the object.
- While a tool is open, the arrow keys do not move what is selected. End the tool with Esc first.
- In a point-placing tool a snap can pull the point to a nearby snap point, so it seems not to land where you click. Turn {c:osnap} ({k:osnap}) or {c:snap} ({k:snap}) off for a moment in the status bar.
- To reach a point hidden behind another object, hold Alt. See [Object snaps](help:snap-osnap).
- In 3D Building, turn on the {t:ab.allLevels} switch in the status bar to select parts on every level.
- If the object is not visible at all, see [Objects not visible](help:faq-lost-view).

## Common mistakes

- Trying to select while a tool is open. The tool window's prompt says what to click; to only select, end the tool with Esc.
- Shortcuts do nothing because the cursor is in a number field or the command line. Click empty space in the 3D view to leave the field.
- Trying to select a wall of another building. Select that building in the path bar, or double-click its row in the project tree, to move the work scope there.
`,fa=`---
id: faq-file-open
title: A file will not open
분류: 문제 해결
난이도: 기초
workspace: 공통
keywords: file will not open, open failed, corrupted, damaged file, recover, unsaved work, lost work, autosave, dwg, dxf, stl, step, obj, format, newer version
commands: open, importFile
order: 60
---

## What

This page covers a file that shows a message and does not open, and work that seems lost after the app closed suddenly. Check the file type, damage and the recovery autosave, in that order.

## Steps

1. Open the file with {c:open} ({k:open}). Files from other programs (STL, OBJ, STEP, DXF, SVG …) open as a new document and a window asks where to place them. To add a file to the current document, use {c:importFile}.
2. If the message {t:msg.openFailed} appears, check from the file extension that it is a NukCAD file.
3. If the app closed suddenly, open it again. If the start screen shows a {t:start.recoverOpen} button, click it to bring back the unsaved work.
4. Save the recovered work at once with {c:saveAs} ({k:saveAs}).

## Tips

- If part of a file is damaged, the app opens it without the damaged parts and says how many were left out.
- A file made with a newer NukCAD may lose parts or look different. Update the app.
- DWG files open only in the installed app. In the web version, save the DWG as DXF first.
- The recovery autosave is switched on and off with {t:set.autosave} in {c:settings} → {t:set.options}. With it off, work cannot be brought back after a crash.
- 3D files from other programs may come in as meshes (triangle faces), so tools such as fillets may not work on them. See [Union or subtract fails](help:faq-boolean-fail).

## Common mistakes

- Clicking {t:start.recoverDiscard} on the start screen. A discarded recovery copy cannot be brought back.
- Opening a file with {c:open} when it should be added to the current document. {c:open} makes a new document; use {c:importFile} to add it.
- Forgetting where the web version saved the file. Check the browser's download folder.
`,pa=`---
id: faq-lost-view
title: Objects not visible
분류: 문제 해결
난이도: 기초
workspace: 공통
keywords: lost object, cannot see, disappeared, gone, off screen, too small, too far, hidden, show again, show all, zoom to fit, home, upper levels, dimmed, section, cut away, work scope
commands: fit, unhideAll, upperLevels
order: 80
---

## What

This page covers an object you made that does not show in the view. Usually the view looks elsewhere, the object is hidden, or a view setting (hidden upper levels, a section view, a cut-away) is on. If it was deleted by mistake, undo brings it back.

## Steps

1. Run {c:fit} ({k:fit}). Every object is fitted into the view.
2. Find the object in the objects window. Click its name to select it; if its eye is off, click the eye to show it again.
3. To show everything hidden, type \`unhide\` in the command line ({c:unhideAll}).
4. In 3D Building, check {c:upperLevels} and the work scope. Upper levels may be hidden or other buildings dimmed.
5. If a section view or a cut-away is on, turn it off.
6. If the object is not in the objects window either, undo with Ctrl+Z to the moment before it was deleted.

## Tips

- To zoom to the selected objects only, use {c:fitSel}.
- After {c:isolate} shows only the selection, {c:unhideAll} shows the rest again.
- An object can be made far too small or too large. Check its size in the Properties window: 3D Building uses m, 3D Objects mm.
- When solids or sketches are hidden from the {c:visual} menu, a note in the corner of the view says so.
- If you lose your direction while turning the view, click a face of the view cube or use Home. See [Viewing](help:start-view).

## Common mistakes

- Looking in 3D Building for an object made in 3D Objects. The two workspaces have separate documents. To take an object across, use [Send to building](help:more-send-to-building).
- Not finding an object placed below the ground. Lift it with {c:dropGround} or with the height in the Properties window.
- Thinking a hidden object was deleted. If its name is in the objects window, it is still there.
`,ma=`---
id: faq-shortcuts
title: Keyboard shortcuts
분류: 문제 해결
난이도: 기초
workspace: 공통
keywords: shortcut, shortcuts, keyboard shortcuts, hotkey, hotkeys, keys, keyboard, function keys, F keys, key map, keymap, shortcut style, change shortcuts, shortcut list, command list, AutoCAD, Fusion 360, Blender, shortcuts not working, keys not working, Fn key, Alt+P, Alt+S, Alt+C, F2
commands: help, settings
order: 10
---

## What

The keyboard shortcuts used most often, in one place. The keys in the tables below follow the shortcut style selected in {c:settings}.

## Steps

1. Press {k:help} to open the {c:help} window.
2. Click {t:hd.shortcuts} at the bottom of {t:hd.contents}.
3. Type a command name, a key or a command-line name in the search box at the top.
4. To change the shortcut style, open {c:settings} and select AutoCAD, Fusion 360 or Blender under {t:set.keymap} on the {t:set.general} tab.
5. For a tool without a shortcut, type its command name in the command line and press Enter.

## Tips

### Files and editing

| Command | Shortcut |
|---|---|
| {c:new} | {k:new} |
| {c:open} | {k:open} |
| {c:save} | {k:save} |
| {c:saveAs} | {k:saveAs} |
| {c:undo} | {k:undo} |
| {c:redo} | {k:redo} |
| {c:copy} | {k:copy} |
| {c:paste} | {k:paste} |
| {c:duplicate} | {k:duplicate} |
| {c:linkcopy} | {k:linkcopy} |
| {c:delete} | {k:delete} |
| {c:selectAll} | {k:selectAll} |
| {c:group} | {k:group} |
| {c:ungroup} | {k:ungroup} |
| {c:move} | {k:move} |
| {c:scale} | {k:scale} |
| {c:toOrigin} | {k:toOrigin} |
| {c:exportStl} export | {k:exportStl} |

### View and windows

| Command | Shortcut |
|---|---|
| {c:fit} | {k:fit} |
| {c:toggleRight} window | {k:toggleRight} |
| {c:toggleCommand} | {k:toggleCommand} |
| {c:help} | {k:help} |
| {c:planView} (3D Building) | {k:planView} |
| {c:archSection} (3D Building) | {k:archSection} |
| {c:ceilingView} (3D Building) | {k:ceilingView} |
| {t:obj.rename} in the {t:panel.objects} window | F2 |

### Snaps and input

| Command | Shortcut |
|---|---|
| {c:osnap} | {k:osnap} |
| {c:ortho} | {k:ortho} |
| {c:grid} | {k:grid} |
| {c:snap} | {k:snap} |
| {c:otrack} | {k:otrack} |
| {t:dyn.setting} | F12 |

### While a tool is open

| Key | What it does |
|---|---|
| Enter | While using a tool, finishes the current step. With no tool open, opens the last tool again. |
| Right click | While using a tool, works as Enter. With no tool open, opens a menu for what you clicked. |
| Esc | Closes an open menu or window, ends the tool (what is finished stays), leaves the sketch, then clears the selection, one step per press. |
| Space | With no tool open, goes to the command line. With a tool open, works as Enter (in the Blender style it goes to the command line). |
| Ctrl+Z | While using a tool, takes back the last point placed. |
| Ctrl+right click | Opens the object snap menu. |
| Tab | Moves between the value fields next to the cursor. |
| Shift (while dragging) | Moves freely, without grid snap. |
| Alt (while placing points) | In shaded views, also snaps to points hidden behind faces. |
| → ← ↑, ↓ | While placing points, locks the X, Y or Z direction; ↓ lets go. |
| Arrow keys, Page Up, Page Down | With no tool open, nudge the selected objects. |

### Selecting

| Key | What it does |
|---|---|
| Shift+click, Ctrl+click | Selects more; clicking a selected thing again takes it out. |
| Drag right / drag left | Selects what is fully inside the box / also what the box touches. |
| Shift+drag / Ctrl+drag | Adds the box to the selection / takes it out. |
| Shift+right click | Opens the menu for what is under the cursor. |

- Shortcuts work by key position, so they also work with the Korean input on.
- The Fusion 360 and Blender styles add more single-letter keys that open tools at once. They are listed in the note under {t:set.keymap} and in {t:hd.shortcuts}.
- The keyboard button at the right of the status bar (showing the current shortcut style) also opens {c:settings}.
- For the command line see [command line](help:input-cmdline); for snap keys see [object snaps](help:snap-osnap) and [grid and grid snap](help:snap-grid).
- {k:snap} switches grid snap {t:ux.snap.auto} → {t:ux.snap.on} → {t:ux.snap.off}, and {k:grid} switches the grid lines {t:ag.show.auto} → {t:ag.show.always} → {t:ag.show.off}.
- {c:planView}, {c:archSection} and {c:ceilingView} work in 3D Building only. Press the same key again or Esc to leave.

## Common mistakes

- With the cursor in the command line or a number field, keys go into that field as text. Click outside the field once, then press the key again.
- While a window such as {c:settings} is open, shortcuts do not reach your work (the {c:save} key still works). Close the window first.
- On a laptop where the F keys control brightness or sound, hold Fn as well.
- Keys act differently on a computer someone else used. Check the shortcut style at the right of the status bar.
`,ha=`---
id: faq-slow
title: Slow screen
분류: 문제 해결
난이도: 중급
workspace: 공통
keywords: slow, lag, laggy, stutter, freezes, heavy, performance, draw quality, geometry engines, display style, edges, many objects, hide levels, faster
commands: settings, visual, upperLevels
order: 50
---

## What

This page covers a view that stutters while you turn it or move objects. Check the graphics acceleration, the draw quality and how much is drawn at once, in that order.

## Steps

1. If a graphics acceleration bar shows above the view, first turn acceleration on as in [Black or very slow 3D view](help:faq-black-screen).
2. In {c:settings} → {t:set.options}, set {t:set.drawQuality} to {t:set.drawQuality.auto} or {t:set.drawQuality.fast}.
3. In the {c:visual} menu, select a style without edges such as {t:vis.shaded}.
4. Hide objects you are not using. In 3D Building, dim or hide the upper levels with {c:upperLevels}.
5. Objects with many faces, such as threaded bolts or gears with many teeth, can be hidden or reduced in number once they are finished.
6. If many objects take long to compute, set {t:set.engines} in {c:settings} → {t:set.options} to {t:set.engines.auto}. More engines compute faster but use more memory.

## Tips

- {t:set.drawQuality.auto} draws small-looking objects more roughly when the view slows down and returns slowly when it is fast again. Selected objects and the sketch being edited are always drawn in full.
- The web version simplifies earlier than the installed app. Large buildings and wide terrain run faster in the installed app.
- Closing other tabs and programs (video, games) frees the graphics chip and memory.
- While an AI on this computer answers, it shares the graphics chip and the view can slow down.
- A wide map area makes a large terrain. Select only the area you need. See [Selecting the site](help:site-map).

## Common mistakes

- Opening a large model with {t:set.drawQuality} set to {t:set.drawQuality.fine}. After taking presentation screenshots, set it back to {t:set.drawQuality.auto}.
- Making hundreds of copies with a pattern and then editing them one by one. Edit one and make the pattern again.
- Keeping an X-ray display style on. See-through drawing is heavier.
`,ga=`---
id: faq-terrain-pits
title: Pits or spikes in the ground
분류: 문제 해결
난이도: 중급
workspace: 3D 건설
keywords: terrain hole, pit, crater, dip, spike, terrain error, ground looks wrong, deep hole, lake shore, height data, grading slope, cut, under the road, waterway
commands: terrainView, grade
order: 30
---

## What

This page covers sudden deep pits or sharp spikes in the ground. They usually have one of three causes: faulty points in the height data from the map, places cut by grading, roads or waterways, or the way the ground is shown.

## Steps

1. Open the {c:terrainView} window and set how much the ground shows through back to normal, so the whole ground is visible.
2. If the pit lies on a site, a building outline, a road or a waterway, check the heights in the {c:grade} window and in that structure's properties.
3. A grading height far below the ground around makes a deep cut slope. Set the height again, or press {t:grade.balance} to balance cut and fill.
4. Roads, bridges and retaining walls refit by themselves when the ground below changes. If one does not fit, select it and press {t:civil.refit}.
5. If a needle-like hole or spike appears on map ground where nothing was built, save the file and open it again. Faulty points in the height data are replaced by the heights around them when the file opens.

## Tips

- Height data near lakes and the sea sometimes holds points thousands of metres deep. The app fixes only such points and leaves real slopes, cliffs and peaks alone.
- A waterway or pond digs the ground and fills it with water; with a low water level the dug bottom shows. See [Waterways and ponds](help:civil-waterway).
- Craters in the disaster simulation do not change the document. The ground comes back when the simulation ends.
- The amounts of cut and fill are shown in [Grading and earthwork](help:site-grade).

## Common mistakes

- A grading pad thought to be deleted is still there. Check the list in the {c:grade} window.
- A road looks as if it floats after a grading change. Press {t:civil.refit} to fit it to the current ground.
- The ground is shown see-through, so it looks like a hole. Check the setting in {c:terrainView}.
`,_a=Object.assign({"../../docs/help/ko/01-start/start-delete.md":e,"../../docs/help/ko/01-start/start-export.md":t,"../../docs/help/ko/01-start/start-hide.md":n,"../../docs/help/ko/01-start/start-level.md":r,"../../docs/help/ko/01-start/start-modes.md":i,"../../docs/help/ko/01-start/start-open.md":a,"../../docs/help/ko/01-start/start-save.md":o,"../../docs/help/ko/01-start/start-screen.md":s,"../../docs/help/ko/01-start/start-select.md":c,"../../docs/help/ko/01-start/start-settings.md":l,"../../docs/help/ko/01-start/start-undo.md":u,"../../docs/help/ko/01-start/start-units.md":d,"../../docs/help/ko/01-start/start-view.md":f,"../../docs/help/ko/01-start/start-windows.md":p,"../../docs/help/ko/02-object/obj-align.md":m,"../../docs/help/ko/02-object/obj-annotate.md":h,"../../docs/help/ko/02-object/obj-box.md":g,"../../docs/help/ko/02-object/obj-chamfer.md":_,"../../docs/help/ko/02-object/obj-curve-edit.md":v,"../../docs/help/ko/02-object/obj-dimension.md":y,"../../docs/help/ko/02-object/obj-drawing-sheet.md":b,"../../docs/help/ko/02-object/obj-drawing.md":x,"../../docs/help/ko/02-object/obj-drop.md":S,"../../docs/help/ko/02-object/obj-duplicate.md":C,"../../docs/help/ko/02-object/obj-extrude.md":w,"../../docs/help/ko/02-object/obj-fillet.md":T,"../../docs/help/ko/02-object/obj-group.md":E,"../../docs/help/ko/02-object/obj-hole.md":D,"../../docs/help/ko/02-object/obj-image-relief.md":O,"../../docs/help/ko/02-object/obj-image-trace.md":k,"../../docs/help/ko/02-object/obj-image-underlay.md":A,"../../docs/help/ko/02-object/obj-image.md":j,"../../docs/help/ko/02-object/obj-intersect.md":M,"../../docs/help/ko/02-object/obj-line-style.md":N,"../../docs/help/ko/02-object/obj-loft.md":P,"../../docs/help/ko/02-object/obj-material.md":F,"../../docs/help/ko/02-object/obj-measure.md":I,"../../docs/help/ko/02-object/obj-mirror.md":L,"../../docs/help/ko/02-object/obj-move.md":R,"../../docs/help/ko/02-object/obj-partial-delete.md":z,"../../docs/help/ko/02-object/obj-parts.md":B,"../../docs/help/ko/02-object/obj-pattern.md":V,"../../docs/help/ko/02-object/obj-presspull.md":H,"../../docs/help/ko/02-object/obj-primitives.md":U,"../../docs/help/ko/02-object/obj-revolve.md":W,"../../docs/help/ko/02-object/obj-section.md":G,"../../docs/help/ko/02-object/obj-select-similar.md":K,"../../docs/help/ko/02-object/obj-shell.md":q,"../../docs/help/ko/02-object/obj-sketch-draw.md":J,"../../docs/help/ko/02-object/obj-sketch-edit.md":Y,"../../docs/help/ko/02-object/obj-sketch-plane3.md":X,"../../docs/help/ko/02-object/obj-sketch.md":Z,"../../docs/help/ko/02-object/obj-smart-scale.md":Q,"../../docs/help/ko/02-object/obj-split.md":$,"../../docs/help/ko/02-object/obj-subtract.md":ee,"../../docs/help/ko/02-object/obj-sweep.md":te,"../../docs/help/ko/02-object/obj-text.md":ne,"../../docs/help/ko/02-object/obj-tweak.md":re,"../../docs/help/ko/02-object/obj-union.md":ie,"../../docs/help/ko/02-object/obj-workplane.md":ae,"../../docs/help/ko/03-objrec/rec-bookshelf.md":oe,"../../docs/help/ko/03-objrec/rec-car.md":se,"../../docs/help/ko/03-objrec/rec-chair.md":ce,"../../docs/help/ko/03-objrec/rec-chess.md":le,"../../docs/help/ko/03-objrec/rec-cup-handle.md":ue,"../../docs/help/ko/03-objrec/rec-gear.md":de,"../../docs/help/ko/03-objrec/rec-hollow-boolean.md":fe,"../../docs/help/ko/03-objrec/rec-house-model.md":pe,"../../docs/help/ko/03-objrec/rec-knot.md":me,"../../docs/help/ko/03-objrec/rec-nameplate.md":he,"../../docs/help/ko/03-objrec/rec-pencil-holder.md":ge,"../../docs/help/ko/03-objrec/rec-phone-stand.md":_e,"../../docs/help/ko/03-objrec/rec-pipe-sweep.md":ve,"../../docs/help/ko/03-objrec/rec-shell-lamp.md":ye,"../../docs/help/ko/03-objrec/rec-spiral.md":be,"../../docs/help/ko/03-objrec/rec-table.md":xe,"../../docs/help/ko/03-objrec/rec-trick-align-mirror.md":Se,"../../docs/help/ko/03-objrec/rec-trick-carve.md":Ce,"../../docs/help/ko/03-objrec/rec-trick-fence.md":we,"../../docs/help/ko/03-objrec/rec-trick-smart-scale.md":Te,"../../docs/help/ko/03-objrec/rec-vase-revolve.md":Ee,"../../docs/help/ko/04-snap/input-calc.md":De,"../../docs/help/ko/04-snap/input-cmdline.md":Oe,"../../docs/help/ko/04-snap/input-coords.md":ke,"../../docs/help/ko/04-snap/snap-from.md":Ae,"../../docs/help/ko/04-snap/snap-grid.md":je,"../../docs/help/ko/04-snap/snap-ortho.md":Me,"../../docs/help/ko/04-snap/snap-osnap.md":Ne,"../../docs/help/ko/04-snap/snap-temp-track.md":Pe,"../../docs/help/ko/04-snap/snap-track.md":Fe,"../../docs/help/ko/05-site/site-area-table.md":Ie,"../../docs/help/ko/05-site/site-area.md":Le,"../../docs/help/ko/05-site/site-grade.md":Re,"../../docs/help/ko/05-site/site-land-edit.md":ze,"../../docs/help/ko/05-site/site-map.md":Be,"../../docs/help/ko/05-site/site-scope.md":Ve,"../../docs/help/ko/05-site/site-terrain-view.md":He,"../../docs/help/ko/06-arch/arch-ceiling.md":Ue,"../../docs/help/ko/06-arch/arch-column.md":We,"../../docs/help/ko/06-arch/arch-curtain-wall.md":Ge,"../../docs/help/ko/06-arch/arch-door-window.md":Ke,"../../docs/help/ko/06-arch/arch-drawing.md":qe,"../../docs/help/ko/06-arch/arch-face-paint.md":Je,"../../docs/help/ko/06-arch/arch-fill-area.md":Ye,"../../docs/help/ko/06-arch/arch-flow.md":Xe,"../../docs/help/ko/06-arch/arch-furniture.md":Ze,"../../docs/help/ko/06-arch/arch-levels.md":Qe,"../../docs/help/ko/06-arch/arch-lighting.md":$e,"../../docs/help/ko/06-arch/arch-my-arch.md":et,"../../docs/help/ko/06-arch/arch-new-building.md":tt,"../../docs/help/ko/06-arch/arch-outline.md":nt,"../../docs/help/ko/06-arch/arch-railing.md":rt,"../../docs/help/ko/06-arch/arch-roof-edit.md":it,"../../docs/help/ko/06-arch/arch-roof.md":at,"../../docs/help/ko/06-arch/arch-slab.md":ot,"../../docs/help/ko/06-arch/arch-stair.md":st,"../../docs/help/ko/06-arch/arch-wall-top.md":ct,"../../docs/help/ko/06-arch/arch-wall.md":lt,"../../docs/help/ko/07-build/build-auto-roof.md":ut,"../../docs/help/ko/07-build/build-courtyard.md":dt,"../../docs/help/ko/07-build/build-detailed.md":ft,"../../docs/help/ko/07-build/build-easy.md":pt,"../../docs/help/ko/07-build/build-names-tree.md":mt,"../../docs/help/ko/07-build/build-outer-walls.md":ht,"../../docs/help/ko/07-build/build-outline.md":gt,"../../docs/help/ko/07-build/build-overview.md":_t,"../../docs/help/ko/07-build/build-piloti.md":vt,"../../docs/help/ko/07-build/build-shared-levels.md":yt,"../../docs/help/ko/07-build/build-wall-split.md":bt,"../../docs/help/ko/08-buildrec/brec-atrium.md":xt,"../../docs/help/ko/08-buildrec/brec-courtyard-house.md":St,"../../docs/help/ko/08-buildrec/brec-curved-site.md":Ct,"../../docs/help/ko/08-buildrec/brec-piloti-overhang.md":wt,"../../docs/help/ko/08-buildrec/brec-setback.md":Tt,"../../docs/help/ko/08-buildrec/brec-small-house.md":Et,"../../docs/help/ko/08-buildrec/brec-stepped-tower.md":Dt,"../../docs/help/ko/08-buildrec/brec-terraced-slope.md":Ot,"../../docs/help/ko/08-buildrec/brec-two-buildings.md":kt,"../../docs/help/ko/08-buildrec/brec-u-shape.md":At,"../../docs/help/ko/09-civil/civil-bridge.md":jt,"../../docs/help/ko/09-civil/civil-dam.md":Mt,"../../docs/help/ko/09-civil/civil-drainage.md":Nt,"../../docs/help/ko/09-civil/civil-grading.md":Pt,"../../docs/help/ko/09-civil/civil-levee.md":Ft,"../../docs/help/ko/09-civil/civil-my-civil.md":It,"../../docs/help/ko/09-civil/civil-overview.md":Lt,"../../docs/help/ko/09-civil/civil-rec-river-crossing.md":Rt,"../../docs/help/ko/09-civil/civil-retaining.md":zt,"../../docs/help/ko/09-civil/civil-road.md":Bt,"../../docs/help/ko/09-civil/civil-tunnel.md":Vt,"../../docs/help/ko/09-civil/civil-water.md":Ht,"../../docs/help/ko/09-civil/civil-waterway.md":Ut,"../../docs/help/ko/10-more/more-ai-ask.md":Wt,"../../docs/help/ko/10-more/more-ai-limits.md":Gt,"../../docs/help/ko/10-more/more-ai-offline.md":Kt,"../../docs/help/ko/10-more/more-ai-setup.md":qt,"../../docs/help/ko/10-more/more-cadoo.md":Jt,"../../docs/help/ko/10-more/more-disaster.md":Yt,"../../docs/help/ko/10-more/more-mentor-admin.md":Xt,"../../docs/help/ko/10-more/more-mentor-help.md":Zt,"../../docs/help/ko/10-more/more-screenshot.md":Qt,"../../docs/help/ko/10-more/more-send-to-building.md":$t,"../../docs/help/ko/11-faq/faq-black-screen.md":en,"../../docs/help/ko/11-faq/faq-boolean-fail.md":tn,"../../docs/help/ko/11-faq/faq-clicks.md":nn,"../../docs/help/ko/11-faq/faq-file-open.md":rn,"../../docs/help/ko/11-faq/faq-lost-view.md":an,"../../docs/help/ko/11-faq/faq-shortcuts.md":on,"../../docs/help/ko/11-faq/faq-slow.md":sn,"../../docs/help/ko/11-faq/faq-terrain-pits.md":cn}),va=Object.assign({"../../docs/help/en/01-start/start-delete.md":ln,"../../docs/help/en/01-start/start-export.md":un,"../../docs/help/en/01-start/start-hide.md":dn,"../../docs/help/en/01-start/start-level.md":fn,"../../docs/help/en/01-start/start-modes.md":pn,"../../docs/help/en/01-start/start-open.md":mn,"../../docs/help/en/01-start/start-save.md":hn,"../../docs/help/en/01-start/start-screen.md":gn,"../../docs/help/en/01-start/start-select.md":_n,"../../docs/help/en/01-start/start-settings.md":vn,"../../docs/help/en/01-start/start-undo.md":yn,"../../docs/help/en/01-start/start-units.md":bn,"../../docs/help/en/01-start/start-view.md":xn,"../../docs/help/en/01-start/start-windows.md":Sn,"../../docs/help/en/02-object/obj-align.md":Cn,"../../docs/help/en/02-object/obj-annotate.md":wn,"../../docs/help/en/02-object/obj-box.md":Tn,"../../docs/help/en/02-object/obj-chamfer.md":En,"../../docs/help/en/02-object/obj-curve-edit.md":Dn,"../../docs/help/en/02-object/obj-dimension.md":On,"../../docs/help/en/02-object/obj-drawing-sheet.md":kn,"../../docs/help/en/02-object/obj-drawing.md":An,"../../docs/help/en/02-object/obj-drop.md":jn,"../../docs/help/en/02-object/obj-duplicate.md":Mn,"../../docs/help/en/02-object/obj-extrude.md":Nn,"../../docs/help/en/02-object/obj-fillet.md":Pn,"../../docs/help/en/02-object/obj-group.md":Fn,"../../docs/help/en/02-object/obj-hole.md":In,"../../docs/help/en/02-object/obj-image-relief.md":Ln,"../../docs/help/en/02-object/obj-image-trace.md":Rn,"../../docs/help/en/02-object/obj-image-underlay.md":zn,"../../docs/help/en/02-object/obj-image.md":Bn,"../../docs/help/en/02-object/obj-intersect.md":Vn,"../../docs/help/en/02-object/obj-line-style.md":Hn,"../../docs/help/en/02-object/obj-loft.md":Un,"../../docs/help/en/02-object/obj-material.md":Wn,"../../docs/help/en/02-object/obj-measure.md":Gn,"../../docs/help/en/02-object/obj-mirror.md":Kn,"../../docs/help/en/02-object/obj-move.md":qn,"../../docs/help/en/02-object/obj-partial-delete.md":Jn,"../../docs/help/en/02-object/obj-parts.md":Yn,"../../docs/help/en/02-object/obj-pattern.md":Xn,"../../docs/help/en/02-object/obj-presspull.md":Zn,"../../docs/help/en/02-object/obj-primitives.md":Qn,"../../docs/help/en/02-object/obj-revolve.md":$n,"../../docs/help/en/02-object/obj-section.md":er,"../../docs/help/en/02-object/obj-select-similar.md":tr,"../../docs/help/en/02-object/obj-shell.md":nr,"../../docs/help/en/02-object/obj-sketch-draw.md":rr,"../../docs/help/en/02-object/obj-sketch-edit.md":ir,"../../docs/help/en/02-object/obj-sketch-plane3.md":ar,"../../docs/help/en/02-object/obj-sketch.md":or,"../../docs/help/en/02-object/obj-smart-scale.md":sr,"../../docs/help/en/02-object/obj-split.md":cr,"../../docs/help/en/02-object/obj-subtract.md":lr,"../../docs/help/en/02-object/obj-sweep.md":ur,"../../docs/help/en/02-object/obj-text.md":dr,"../../docs/help/en/02-object/obj-tweak.md":fr,"../../docs/help/en/02-object/obj-union.md":pr,"../../docs/help/en/02-object/obj-workplane.md":mr,"../../docs/help/en/03-objrec/rec-bookshelf.md":hr,"../../docs/help/en/03-objrec/rec-car.md":gr,"../../docs/help/en/03-objrec/rec-chair.md":_r,"../../docs/help/en/03-objrec/rec-chess.md":vr,"../../docs/help/en/03-objrec/rec-cup-handle.md":yr,"../../docs/help/en/03-objrec/rec-gear.md":br,"../../docs/help/en/03-objrec/rec-hollow-boolean.md":xr,"../../docs/help/en/03-objrec/rec-house-model.md":Sr,"../../docs/help/en/03-objrec/rec-knot.md":Cr,"../../docs/help/en/03-objrec/rec-nameplate.md":wr,"../../docs/help/en/03-objrec/rec-pencil-holder.md":Tr,"../../docs/help/en/03-objrec/rec-phone-stand.md":Er,"../../docs/help/en/03-objrec/rec-pipe-sweep.md":Dr,"../../docs/help/en/03-objrec/rec-shell-lamp.md":Or,"../../docs/help/en/03-objrec/rec-spiral.md":kr,"../../docs/help/en/03-objrec/rec-table.md":Ar,"../../docs/help/en/03-objrec/rec-trick-align-mirror.md":jr,"../../docs/help/en/03-objrec/rec-trick-carve.md":Mr,"../../docs/help/en/03-objrec/rec-trick-fence.md":Nr,"../../docs/help/en/03-objrec/rec-trick-smart-scale.md":Pr,"../../docs/help/en/03-objrec/rec-vase-revolve.md":Fr,"../../docs/help/en/04-snap/input-calc.md":Ir,"../../docs/help/en/04-snap/input-cmdline.md":Lr,"../../docs/help/en/04-snap/input-coords.md":Rr,"../../docs/help/en/04-snap/snap-from.md":zr,"../../docs/help/en/04-snap/snap-grid.md":Br,"../../docs/help/en/04-snap/snap-ortho.md":Vr,"../../docs/help/en/04-snap/snap-osnap.md":Hr,"../../docs/help/en/04-snap/snap-temp-track.md":Ur,"../../docs/help/en/04-snap/snap-track.md":Wr,"../../docs/help/en/05-site/site-area-table.md":Gr,"../../docs/help/en/05-site/site-area.md":Kr,"../../docs/help/en/05-site/site-grade.md":qr,"../../docs/help/en/05-site/site-land-edit.md":Jr,"../../docs/help/en/05-site/site-map.md":Yr,"../../docs/help/en/05-site/site-scope.md":Xr,"../../docs/help/en/05-site/site-terrain-view.md":Zr,"../../docs/help/en/06-arch/arch-ceiling.md":Qr,"../../docs/help/en/06-arch/arch-column.md":$r,"../../docs/help/en/06-arch/arch-curtain-wall.md":ei,"../../docs/help/en/06-arch/arch-door-window.md":ti,"../../docs/help/en/06-arch/arch-drawing.md":ni,"../../docs/help/en/06-arch/arch-face-paint.md":ri,"../../docs/help/en/06-arch/arch-fill-area.md":ii,"../../docs/help/en/06-arch/arch-flow.md":ai,"../../docs/help/en/06-arch/arch-furniture.md":oi,"../../docs/help/en/06-arch/arch-levels.md":si,"../../docs/help/en/06-arch/arch-lighting.md":ci,"../../docs/help/en/06-arch/arch-my-arch.md":li,"../../docs/help/en/06-arch/arch-new-building.md":ui,"../../docs/help/en/06-arch/arch-outline.md":di,"../../docs/help/en/06-arch/arch-railing.md":fi,"../../docs/help/en/06-arch/arch-roof-edit.md":pi,"../../docs/help/en/06-arch/arch-roof.md":mi,"../../docs/help/en/06-arch/arch-slab.md":hi,"../../docs/help/en/06-arch/arch-stair.md":gi,"../../docs/help/en/06-arch/arch-wall-top.md":_i,"../../docs/help/en/06-arch/arch-wall.md":vi,"../../docs/help/en/07-build/build-auto-roof.md":yi,"../../docs/help/en/07-build/build-courtyard.md":bi,"../../docs/help/en/07-build/build-detailed.md":xi,"../../docs/help/en/07-build/build-easy.md":Si,"../../docs/help/en/07-build/build-names-tree.md":Ci,"../../docs/help/en/07-build/build-outer-walls.md":wi,"../../docs/help/en/07-build/build-outline.md":Ti,"../../docs/help/en/07-build/build-overview.md":Ei,"../../docs/help/en/07-build/build-piloti.md":Di,"../../docs/help/en/07-build/build-shared-levels.md":Oi,"../../docs/help/en/07-build/build-wall-split.md":ki,"../../docs/help/en/08-buildrec/brec-atrium.md":Ai,"../../docs/help/en/08-buildrec/brec-courtyard-house.md":ji,"../../docs/help/en/08-buildrec/brec-curved-site.md":Mi,"../../docs/help/en/08-buildrec/brec-piloti-overhang.md":Ni,"../../docs/help/en/08-buildrec/brec-setback.md":Pi,"../../docs/help/en/08-buildrec/brec-small-house.md":Fi,"../../docs/help/en/08-buildrec/brec-stepped-tower.md":Ii,"../../docs/help/en/08-buildrec/brec-terraced-slope.md":Li,"../../docs/help/en/08-buildrec/brec-two-buildings.md":Ri,"../../docs/help/en/08-buildrec/brec-u-shape.md":zi,"../../docs/help/en/09-civil/civil-bridge.md":Bi,"../../docs/help/en/09-civil/civil-dam.md":Vi,"../../docs/help/en/09-civil/civil-drainage.md":Hi,"../../docs/help/en/09-civil/civil-grading.md":Ui,"../../docs/help/en/09-civil/civil-levee.md":Wi,"../../docs/help/en/09-civil/civil-my-civil.md":Gi,"../../docs/help/en/09-civil/civil-overview.md":Ki,"../../docs/help/en/09-civil/civil-rec-river-crossing.md":qi,"../../docs/help/en/09-civil/civil-retaining.md":Ji,"../../docs/help/en/09-civil/civil-road.md":Yi,"../../docs/help/en/09-civil/civil-tunnel.md":Xi,"../../docs/help/en/09-civil/civil-water.md":Zi,"../../docs/help/en/09-civil/civil-waterway.md":Qi,"../../docs/help/en/10-more/more-ai-ask.md":$i,"../../docs/help/en/10-more/more-ai-limits.md":ea,"../../docs/help/en/10-more/more-ai-offline.md":ta,"../../docs/help/en/10-more/more-ai-setup.md":na,"../../docs/help/en/10-more/more-cadoo.md":ra,"../../docs/help/en/10-more/more-disaster.md":ia,"../../docs/help/en/10-more/more-mentor-admin.md":aa,"../../docs/help/en/10-more/more-mentor-help.md":oa,"../../docs/help/en/10-more/more-screenshot.md":sa,"../../docs/help/en/10-more/more-send-to-building.md":ca,"../../docs/help/en/11-faq/faq-black-screen.md":la,"../../docs/help/en/11-faq/faq-boolean-fail.md":ua,"../../docs/help/en/11-faq/faq-clicks.md":da,"../../docs/help/en/11-faq/faq-file-open.md":fa,"../../docs/help/en/11-faq/faq-lost-view.md":pa,"../../docs/help/en/11-faq/faq-shortcuts.md":ma,"../../docs/help/en/11-faq/faq-slow.md":ha,"../../docs/help/en/11-faq/faq-terrain-pits.md":ga});export{va as RAW_EN,_a as RAW_KO};