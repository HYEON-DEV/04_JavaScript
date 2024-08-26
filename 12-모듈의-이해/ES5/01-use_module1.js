
//  require() 함수는 module.exports 를 통해서 등록된 기능들을 리턴한다
//  리턴 받는 객체는 module.exports 에 확장된 기능들을 참조한다
//  파일 경로 명시할 때 확장자 생략가능
//  동일 경로라도 "./" 생략불가!!!
//  "./" 생략되는 경우, node 의 내장 모듈로 인식한다

const my = require('./01-Module1');
my();

