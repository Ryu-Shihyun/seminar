// const slidebox= document.getElementById('first-block');

// const pics = ["images/ヒッチハイク.jpg","images/sea.png","images/self.png"]



// let num = -1;
 
 
// function slideshow_timer(){
//   if (num === 2){
//     num = 0;
//   } 
//   else {
//     num ++;
//   }
//   slidebox.style.backgroundImage = "url("+pics[num]+")"
// }
 
// setInterval(slideshow_timer, 3000);

// スライドショーここから
addEventListener('load', function () {
	viewSlide('.slide img');
});
function viewSlide(className, slideNo = -1)
{
	let imgArray = document.querySelectorAll(className);
	if (slideNo >= 0) {
		//初回以外は現在のスライドを消す
		imgArray[slideNo].style.opacity = 0;
	}
	slideNo++;
	if (slideNo >= imgArray.length) {
		slideNo = 0; //次のスライドがなければ最初のスライドへ戻る
	}
	imgArray[slideNo].style.opacity = 1;
	let msec = document.getElementById('slide_speed').value;
	setTimeout(function(){viewSlide(className, slideNo);}, msec);
}



// まずinput要素を取得
const inputElem = document.getElementById('slide_speed');
// 埋め込む先の要素
const currentValueElem = document.getElementById('current-value');

// 現在の値を埋め込む関数
const setCurrentValue = (val) => {
  currentValueElem.innerText = val/1000;
}

// inputイベント時に値をセットする関数
const rangeOnChange = (e) =>{
  setCurrentValue(e.target.value);
}

window.onload = () => {
  // 変更に合わせてイベントを発火する
  inputElem.addEventListener('input', rangeOnChange);
  // ページ読み込み時の値をセット
  setCurrentValue(inputElem.value);
}

// スライドショーここまで

// フェードインここから
const scrollAnimationElm = document.querySelectorAll('.sa');
const scrollAnimationFunc = function() {
  for( i = 0; i < scrollAnimationElm.length; i++) {
    const triggerMargin = 300;
    if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
      scrollAnimationElm[i].classList.add('show');
    }
  }
}
addEventListener('load', scrollAnimationFunc);
addEventListener('scroll', scrollAnimationFunc);

// フェードインここまで

// お問い合わせフォームここから

// console.logではなくlocalstorageなりに保存
window.addEventListener('DOMContentLoaded', function(){
	const input_firm = document.getElementById("formInput1");
  input_firm.addEventListener("change",function(){
		const firm = "会社名:"+input_firm.value
		console.log(firm);
  });
  
  const input_name = document.getElementById("formInput2");
  input_name.addEventListener("change",function(){
		const oname = "お名前:"+ input_name.value
    console.log(oname);
	});
	
  const input_phonenumber = document.getElementById("formInput3");
  input_phonenumber.addEventListener("change",function(){
		const phonenumber="電話番号:"+input_phonenumber.value
    console.log(phonenumber);
	});
	
  const input_mail = document.getElementById("formInput4");
  input_mail.addEventListener("change",function(){
		const mail ="メールアドレス:"+input_mail.value
    console.log(mail);
	});
	
	const input_inquiry = document.getElementById("Form-Item-Textarea");
  input_inquiry.addEventListener("change",function(){
		const inquiry ="お問い合わせ:"+input_inquiry.value
    console.log(inquiry);
	});
	
	
	// 配列のすべてのlengthが０より大きければ実行
	// const array = [ firm, oname, phonenumber,  mail, inquiry] ;
	// for (let i = 0; i < array.length; i++) {
	// 	if(${array[i]}.length=0)
	// 	console.log("aaaaaa")
	// 		} 

	const submit = document.getElementById("btn")
	
	newFunction(submit, input_firm, input_name, input_phonenumber, input_mail, input_inquiry);
	
	
	
});


// 入力値確認画面に値を表示する
function MoveCheck() {
	if( confirm("入力情報にお間違いはないですか？") ) {
			window.location.href = "https://www.stardust.co.jp/section3/profile/arakiyuko.html";
	}
	else {
			alert("再度値を入力してください。");
	}
}

function newFunction(submit, input_firm, input_name, input_phonenumber, input_mail, input_inquiry) {
	submit.onclick = () => {

		if (input_firm.value.length == 0) {
			alert("値を入力してください");
		}
		else if (input_name.value.length == 0) {
			alert("値を入力してください");
		}
		else if (input_phonenumber.value.length == 0) {
			alert("値を入力してください");
		}
		else if (input_mail.value.length == 0) {
			alert("値を入力してください");
		}
		else if (input_inquiry.value.length == 0) {
			alert("値を入力してください");
		}
		else {
			MoveCheck()
		}
	};
}

