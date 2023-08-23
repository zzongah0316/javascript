/**
 * event.js
 */

 document.addEventListener('DOMContentLoaded', function() {
	 
	 const itemInput = document.querySelector('input#itemInput');
	 const btnInput = document.querySelector('button#btnInput');
	 const itemList = document.querySelector('ul#itemList');
	 const enter = document.querySelector('input#enter');
	 const list = document.querySelector('ul#list');
	 const username = document.querySelector('input#username');
	 const age = document.querySelector('input#age');
	 const result = document.querySelector('div#result');
	 
	 btnInput.addEventListener('click', function() {
		 //console.log(arguments); -> pointerEvent
		 // input에 입력된 값을 읽음.
		 const value = itemInput.value;
		 // console.log(value);
		 
		 // input에 입력된 값으로 li 요소를 만듦.
		 const item = `<li>${value}</li>`;
		 
		 // li 요소를 ul에 추가.
		 itemList.innerHTML += item;
		 
		 // input의 값을 지움.
		 itemInput.value = '';
		 
		 // input에 포커스를 줌.
		 itemInput.focus(); 
	 });
	 
	 enter.addEventListener('keydown', function(e) {
		 // console.log(e); -> e: keyboardEvent 객체
		 // 모든 이벤트 핸들러 함수(콜백)은 이벤트 객체를 argument로 전달받음.
		 if(e.key === 'Enter'){ // 엔터 키가 눌렸을 때
			//const value1 = enter.value;
		 
		    const item1 = `<li>${enter.value}</li>`;
		    
		 
		    list.innerHTML += item1; 
		    enter.value = '';
		    enter.focus(); 
		 }	 
	 });
	 
	 username.addEventListener('change', function(e) {
		 updateNameAndAge();
	 });
	 
	 age.addEventListener('change', function(e) {
		 updateNameAndAge();
	 });
	 
	 function updateNameAndAge() {
		 const name = username.value;
		 const age2 = age.value;
		 const text = `<b>이름:</b> ${name}, <b>나이:</b> ${age2}`;
		 
		 result.innerHTML = text;
		 
	 }
	 
	 
	 
 });