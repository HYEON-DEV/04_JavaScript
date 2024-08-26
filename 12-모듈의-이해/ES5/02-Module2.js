
module.exports.name = '노드';
module.exports.property = { id: 'node.js', type: 'javascript' };
module.exports.say = function () {
    console.log('Hello World');
};

//  exports 속성으로 객체 추가
module.exports.home = {
    postcode: '1234',
    address: '서울시 강남구',
    getAddress: function () {
        console.log(this.postcode + ' ' + this.address);
    }
};

