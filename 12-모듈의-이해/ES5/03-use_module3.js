
//  1) 클래스 형태의 모듈 참조
const my3 = require('./MyModule3');

const module_obj = new my3();
module_obj.say();


//  2) 객체 형태의 모듈 참조
const my4 = require('./MyModule4');
my4.say();