삼항 연산자 (조건부 연산자)
조건식 ? 참일 때 실행되는 식 : 거짓일 때 실행되는 식

    let a = false;
    let b = true;
    let c = a ? 'true' : 'false' 
    console.log(c);
    c = b ? 'true' : 'false' 
    console.log(c);

백틱(backtick)

    let URL = 'https://github.com/nyaongnyaooong';
    let string = `my github URL is &{URL}.`;


형변환
parseInt();
parseFloat();
String();


배열에 마지막에 요소 추가
array.push(ELEMENT);

    let arr = ['a', 'b', 'c', 'd', 'e']
    arr.push('f');

배열 마지막 요소 제거
array.pop();

    let arr = ['a', 'b', 'c', 'd', 'e']
    arr.pop();
    //e가 제거

배열에 첫번째에 요소 추가
array.unshift(ELEMENT);

    let arr = ['a', 'b', 'c', 'd', 'e']
    arr.unshift('aa');
    //aa, a, b, c, d, e

배열 첫번째 요소 제거
array.shift();

    let arr = ['a', 'b', 'c', 'd', 'e']
    arr.shift();
    //a가 제거


배열 n~m까지 요소 추출(복사)
array.slice(START, END)
    
    let arr = ['a', 'b', 'c', 'd', 'e']
    arr2 = arr.slice(1, 3);
    //b, c

    let arr = ['a', 'b', 'c', 'd', 'e']
    arr2 = arr.slice(1, -1);    //뒤에서 부터 1
    //b, c, d

    
배열 중간 요소 제거 및 추가
array.splice(POSITION, NUMBER, ELEMENT)

    let arr = ['a', 'b', 'c', 'd', 'e']
    arr.splice(1, 2, 'f');
    //a, f, d, e


    let arr = ['a', 'b', 'c', 'd', 'e']
    arr.splice(1, 0, 'f');
    //a, f, b, c, d, e


배열 요소 찾기
array.includes(ELEMENT);

    let arr = ['a', 'b', 'c', 'd', 'e']
    arr.includes('a');
    //true


배열 요소 위치 찾기
array.indexof(ELEMENT)
array.lastindexof(ELEMENT)

    let arr = ['a', 'b', 'c', 'a']
    arr.indexof('a');
    //0
    arr.indexof('b');
    //1
    arr.lastindexof('b');
    //1
    arr.lastindexof('a');
    //3
    arr.lastindexof('d');
    //-1





객체 리터럴

    object = {
        name : '홍길동',
        age : 30,
        year : 1992,
    }
    
    console.log(object.name);
    console.log(object['name']);

    //홍길동


객체 속성 제거
delete object.PROPERTY

    object = {
        name : '홍길동',
        age : 30,
        year : 1992,
    }
    delete object.year;


객체 메서드
- 객체 속성으로 함수를 의미

    object = {
        log : function(value) {
            console.log(value);
        },
    }
    object.log('message');
    //object라는 이름의 객체 내부에 log라는 이름의 매서드






배열을 문자로 합치기
array.join('');

    array = [1,2,3,4];
    string = array.join('');
    //'1234'
    string = array.join(:);
    //'1:2:3:4'

문자를 배열로 분할
string.split('');

    string = '1234';
    array = string.split('');
    // ["1", "2", "3", "4"]
    array = string.split('2');
    // ["1", "34"]

배열 내부 값들의 합
array.reduce((STACK, ELEMENT) => {
    return NewStackValue;
}, InitialValue);

    total = array.reduce((a, c) => a + c);
    average = total / array.length;

고차 함수

    let func = (element1) => (element2) => (element3) => {
        return element1 + element2 * element3;
    };

    console.log(func(1)(2)(3));
    //7

    let firstStep = func(1);
    let secondStep = firstStep(2);
    let thirdStep = secondStep(3);
    console.log(thirdStep);
    //7
    console.log(secondStep);
    //(element3) => {
    //  return element1 + element2 * element3;
    //}
    console.log(firstStep);
    //(element2) => (element3) => {
    //  return element1 + element2 * element3;
    //}


배열 길이 만큼 반복문
array.forEach((element, index) => {
});

    array = [a, b, c, d]   
    array.forEach((element, index) => {
        //element a, b, c, d
        //index 0, 1, 2, 3
    });

    //위 아래는 같은 역할
    for(let i = 0; i < array.length; i++) {

    }

기존 배열 요소를 참조하여 새로운 배열 생성
array.map((element, i) => {

});
    array = [1, 2, 3, 4];
    array.map((element, index) => {
        return element * 2;
    });
    //[2, 4, 6, 8]

배열 내부 채우기
Array(9); //길이가 9인 배열 생성
Array(9).fill(); //undefined로 9칸 채움

    Array(9).fill(0).map((element, index) => {
        return index + 1;
    });
    //[1, 2, 3, 4, 5, 6, 7, 8, 9]

정렬
array.sort(compareFunction);

    array = [9, 4, 1, 6, 2, 3, 8, 7, 5];
    array.sort((a, b) => a - b);
    //Tim sort
    //[1, 2, 3, 4, 5, 6, 7, 8, 9]

타이머
setTimeout(() => function, INTERVAL);

    setTimeout(() => console.log('hello'), 3000);
    //3초 후 hello

var와 let const의 차이
var는 함수 스코프
let/const는 블록 스코프

ex)
    function func() {
        var v = 1;
        let l = 1;
    }

    console.log(v, l);
    //undefined, undefined

    if (true) {
        var v = 1;
        let l = 1;
    }

    console.log(v, l);
    //1, undefined

    for(var i = 0; i++;)

타이머
setTimeout(() => {}, Time);

ex)
    setTimeout(() => {
        console.log('1초후에 실행됩니다.')
    }, 1000);

일정 주기로 반복
setInterval(() => {}, Time);

ex)
    setInterval(() => {
        console.log('1초마다 반복됩니다.')
    }, 1000);

타이머와 반복 타이머를 제거
clearTimeout, clearInterval

ex)
    timer1 = setTimeout(() => {
        console.log('1초후에 실행됩니다.')
    }, 1000);

    if (a) {
        //a가 true일 때 1초 후 실행 될 타이머가 멈춤
        clearTimeout(timer1);
    }

Class 추가 제거 변경

    const $test = document.querySelector('#test');
    $test.classList.add('a3');   //a3 class 추가
    $test.classList.remove('a1');   //a1 class 제거
    $test.classList.replace('a2', 'a4');   //a2 class 제거, a4 class 추가
    $test.classList.contains('a1'); //false


객체 및 배열의 구조 분해 할당
아래 링크 참조
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    
ex)
    const {body, head} = document;
    //const body = document.body;
    //const head = document.head;

    let arr = [1, 2, 3, 4, 5];
    const [one, two, three, , five] = arr;
    //const one = arr[0];
    //const two = arr[1];
    //const three = arr[2];
    //const five = arr[4];

    const object = {
        a: 1,
        b: {
            c: 2,
            d: {
                e: 3,
            },
        },
    };

    const { a, b: { c, d: { e } } } = object;
    //const a = object.a
    //const c = object.b.c
    //const e = object.b.d.e
    

이벤트 버블링 <-> 이벤트 캡쳐링 (잘 안씀)
자식 태그에서 일어난 이벤트 리스너가 부모태그에도 일어남

ex)
    <table id="table">
        <tr>
            <td id="td">
                
            </td>
            <td>
                
            </td>
            <td>
                
            </td>
        </tr>
    </table>

    const $td =  document.querySelector('#td');
    const $table = document.querySelector('#table');

    //table의 click 이벤트 감지이지만 td 클릭도 감지됨
    $table.addEventListener('click', (event) => {
        console.log('click');
        console.log(event.target.textContent);  //td 혹은 tr 혹은 table의 event
        console.log(event.currentTargettarget.textContent);  //table만의 event
    });

    td에서 일어난 이벤트 리스너가 부모태그인 tr, table에도 일어남

table에서 row, column 값 알아내기

ex)
    const $td =  document.querySelector('#td');

    $td.addEventListener('click', onClickFunction);

    function onClickFunction() {
        const rowIndex = event.target.parentNode.rowIndex;
        const cellIndex = event.target.cellIndex;
        //event.target => td를 의미
        //event.target.parentNode => tr을 의미
        //tr의 rowIndex 매서드와 td의 cellIndex에 각각의 위치 값이 들어가 있다
    }

optional chaining
배열이나 객체에서 해당 값이 undefined일 경우 하위 값에 접근할지 말지 결정하는 연산자

ex)
    const a = {
        b: 1,
        c: {
            e: 2,
        },
        d: 3,
    };

    a.b;    //1
    a.f     //undefined
    a.f.g   //error
    //undefined에 접근하면 에러가 난다
    a.f?.g  //undefined

&& 연산자와 || 연산자 ??
a && b; //a가 false면 b를 실행하지 않음
a || b; //a가 false면 b를 실행함
a ?? b; //||와 동일하나 0은 false로 취급하지 않음

ex)1
    let effect = 0;
    const compare = 'message';
    
    !compare && effect++;
    !compare || effect--;

    console.log(effect);
    //-1

ex)2
    let variable = 1;   //true
    let effect = variable && 2; //variable이 true이므로 2가 들어감, false면 variable이 들어감
    console.log(effect);    //2

    variable = 0;
    effect = variable || 2; //variable이 false이므로 2가 들어감, true면 variable이 들어감
    console.log(effect);    //2

    effect = variable ?? 2; //variable이 0이므로 true로 취급하여 2가 아닌 variable이 들어감
    console.log(effect);    //0


이벤트 버블링을 막음
event.stopPropagtion();


태그의 기본동작을 막음
event.preventDefault();

ex)
    <div id="main">

    </div>

        const $main = document.querySelector('#main');
        $main.addEventListener('click', (event) => {
            event.preventDefault();

        });


배열의 평탄화
array.flat(depth)

ex)
    array = [1, 2, [3, 4, [5]]];
    array.flat();
    //[1, 2, 3, 4, [5]]
    array.flat(2);
    //[1, 2, 3, 4, 5]

배열의 내부 요소가 주어지는 판별 함수를 통과하는지 테스트
array.every((element) => {CompareFunction});

ex)
    array = [1, 2, 3, 4, 5];
    array.every((element) => element < 6);
    //true


얕은 복사, 깊은 복사, 참조
- 배열이나 객체 내부 요소가 값이 아닌 또 다른 객체나 배열일 경우, 
이를 변수로 선언했을 때 해당 값이 아닌 해당 주소가 들어가여 참조가 되지만
참조가 아닌 완전히 동일한 배열이나 객체를 또다시 선언하고 싶을 경우 얕은 복사 혹은 경우에 따라 깊은 복사를 사용한다

ex)
    const array = [[0, 1], [1, 2]];
    let a = array[0];
    a[0] = 1;
    console.log(array[0][0]);
    // 1
    
    a = [...array[0]];  //얕은 복사
    //a = array[0].concat();  //얕은 복사
    a[0] = 2;
    console.log(array[0][0], a[0]);
    // 1, 2
    //배열이 아닌 객체의 경우 [...array]가 아닌{...object}

    //깊은 복사의 경우 구글링하여 라이브러리 사용




클래스
class Object {
    constructor() {
    }
}

ex)
    class AddHuman {
        constructor(number, name, age, gender) {
            this.number = number;
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
    }

    let personList = [];
    personList.push(new AddHuman(personList.length, 'jaeahJeong', 31, 'male'));
    personList.push(new AddHuman(personList.length, 'boyoungKim', 25, 'female'));
    console.log(personList[0].name);
    console.log(personList[1].name);
    console.log(personList[1]);

