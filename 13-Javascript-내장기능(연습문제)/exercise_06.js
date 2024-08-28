
//  참여자 명단
//  1명 이상 100000명 이하
//  1개이상 20개이하 알파벳소문자로 이뤄진 이름
//  동명이인 X
const participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
//  완주자 명단
//  배열크기 participant-1
const completion=["josipa","filipa","marina","nikola"];

/* 
const p = ['mislav','stanko','steave','ana'];
const c = ['stanko','ana','mislav'];
 */
//  완주하지 못한 선수 이름 return
function solution( participant, completion ) {
    var answer;
    //  indexOf  
    //  includes  ->  true,  false 

    participant.forEach( v => {
        let res = completion.includes(v);
        //console.log(res);
        if ( res == false ) {
            answer = v;
        }
    } );

    return answer;
}

console.log( solution(participant,completion) );
//console.log( solution(p,c) );

