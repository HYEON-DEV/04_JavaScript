
//  에러 종류를 세분화 하기위해 기본 Error 클래스의 기능을 확장해서 개발자가 직접 에러에 대한 경우의 수를 정의할 수 있다

class EmptyIdError extends Error {
    //  자식 클래스가 생성자를 갖을 경우 부모의 생성자를 반드시 강제호출해야 한다  ->  super
    constructor ( msg ) {
        super(msg);
        super.name = 'EmptyIdError';
    }
}

class EmptyPwError extends Error {
    constructor (msg) {
        super(msg);
        super.name = 'EmptyPwError';
    }
}

function foo ( id, pw ) {
    if (!id) {
        throw new EmptyIdError('아이디를 입력하세요');
    }
    if (!pw) {
        throw new EmptyPwError('비밀번호를 입력하세요');
    }
    return '로그인 완료';
}

const a = null;
const b = null;

try {
    a = foo ( '', '1234' );
} catch (err) {
    console.error(`에러이름 : ${err.name}`);
    console.error(`에러내용 : ${err.message}`);
}

try {
    b = foo ( 'hello', '' );
} catch (err) {
    console.error(`에러이름 : ${err.name}`);
    console.error(`에러내용 : ${err.message}`);
}

console.log(a);
console.log(b);
