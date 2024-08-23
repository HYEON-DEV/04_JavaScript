
const data = ['A','A','A','O','B','B','O','AB','AB','O'];
const result = {};

let a=0, b=0, ab=0, o=0;

for ( let i=0; i<data.length; i++ ) {
    if ( data[0] != data[i] ) {

    }
    a = data[i]=='A'? a++ : a;
}

console.log(result);
