
//  1) 다른 JSON 객체를 value로 포함하는 경우

//  단일 형태의 JSON
var centerPoint = {
    x : 5,
    y : 10
};

//  다른 JSON을 포함하는 JSON
var circle1 = {
    center : centerPoint,
    radius : 5.10
};

console.group("circle1");
console.log(`원의 중점 : (${circle1.center.x}, ${circle1.center.y})`);
console.log(`원의 반지름 : ${circle1.radius}`);
console.groupEnd();


//  2) 계층적으로 정의된 경우
var circle2 = {
    center : {
        x : 5,
        y : 10
    },
    radius : 5.10
};

console.group('circle2');
console.log(`원의 중점 : (${circle2.center.x}, ${circle2.center.y})`);
console.log(`원의 반지름 : ${circle2.radius}`);
console.groupEnd();


