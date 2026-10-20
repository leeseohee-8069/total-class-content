count = 0;

let post = "강남 마제소바 맛집";

//버튼을 눌렀을 때 p태그에 내용을 post변수값으로
// 집어넣고 싶다.
function 내용수정() {
  // 1. p태그를 찾는다.
  let p태그 = document.getElementById("p태그");
  // 2. 내용 변경
  p태그.innerText = post;
}
