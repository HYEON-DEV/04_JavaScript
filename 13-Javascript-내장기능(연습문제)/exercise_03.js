

const str = '수업시간에 배운것은 수업시간에 다 이해하고 넘어가야지 수업시간에 놓치면 따라오기 힘들다';

const arr = str.split(' ');     //console.log(arr);

let cnt = 0;
for ( let i=0; i<arr.length; i++ ) {
    cnt = arr[i].includes('수업시간') ? ++cnt : cnt;
}

console.log(cnt);

