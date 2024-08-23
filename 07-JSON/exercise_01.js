
const result = { 'A':0, 'B':0, 'AB':0, 'O':0 };
const data = ['A','A','A','O','B','B','O','AB','AB','O'];

let a=0, b=0, ab=0, o=0;

for ( let i=0; i<data.length; i++ ) {
    a = data[i]=='A'? ++a : a;
    b = data[i]=='B'? ++b : b;
    ab = data[i]=='AB'? ++ab : ab;
    o = data[i]=='O'? ++o : o;
}
// console.log(a);
// console.log(b);
// console.log(ab);
// console.log(o);

result.A = a;
result.B = b;
result.AB = ab;
result.O = o;

console.log(result);
