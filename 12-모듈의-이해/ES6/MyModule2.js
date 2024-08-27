
const name = '노드';
const property = { id:'nodejs', type:'javascript' };
const say = function () {
    console.log('Hello World');
};
const home = {
    postcode: '1234',
    address: '서울',
    getAddress: function () {
        console.log(this.postcode+this.address);
    }
};

export {name, property, say, home};

