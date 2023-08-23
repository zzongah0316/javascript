/**
 * 
 */
// 선언문
 test1();
 
 function test1() {
	 console.log('test1');
 }


 
 // 이건 문제 없음
 //const test2 = () => console.log('test2');
 //test2();
 
 // 이건 문제 (화살표 사용할 때는 호출할 때보다 먼저 가야 실행됨.) 실행문
 test2();
 const test2 = () => console.log('test2');