
function doLogin ( userId, userPw ) {
    if (!userId) {
        return '아이디를 입력하세요';
    }
    if (!userPw) {
        return '비밀번호를 입력하세요';
    }
    return '로그인을 수행함';
}

console.log(doLogin('',''));
console.log(doLogin('hello',''));
console.log(doLogin('hyeon','world'));

