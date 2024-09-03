/*
load 이벤트
- 웹 브라우저가 모든 HTML 해석을 완료한 후에 실행되는 이벤트
- JS코드가 <body>보다 먼저 나타나도 문제없다
- script가 맨 마지막에 배치될 경우 load 이벤트 적용 생략해도 된다
*/

window.addEventListener( 'load', e => {
    document.querySelector('#title').innerHTML = '안녕';
} );