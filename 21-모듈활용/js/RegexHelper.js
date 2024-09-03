
class StringFormatException extends Error {
    // 입력 요소에 대한 selector 추가
    #selector;

    constructor( msg='잘못된 요청입니다', selector=undefined ){
        super(msg);
        super.name = 'StringFormatException';
        //  멤버변수에 입력요소를 참조시킨다
        this.#selector = selector;
    }

    get selector() {
        return this.#selector;
    }

    get element() {
        const el = this.#selector!==null ? document.querySelector(this.#selector) : undefined;
        return el;
    }
}

/**
 * 정규표현식 기반으로 입력값에 대한 유효성 검사 수행하는 클래스
 * HTML 문서에서 사용하기 위해 input selector 에 대한 입력값을 검사한다
 */
class RegexHelper {

    /**
     * 값의 존재 여부 검사
     * @param {string} selector - 검사할 대상에 대한 <input>요소의 selector
     * @param {string} msg - 값이 없을 경우 표시할 메시지 내용
     * 
     */
    value(selector,msg) {
        const content = document.querySelector(selector).value; //  <input> 입력값
        if ( content===undefined || content===null || (typeof(content)==='string' && content.trim().length===0) ){
            throw new StringFormatException(msg, selector);
        }
        return true;
    }
}

const regexHelper = new RegexHelper();