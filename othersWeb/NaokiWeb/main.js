//画像切り替え
const gazo = document.getElementById("gazo")
let count1 = 0
gazo.onclick = function() {
  if (count1 % 5 === 0) {
    count1 += 1
    gazo.classList.add("Photo01")
  } else if (count1 % 5 === 1) {
    count1 += 1
    gazo.classList.remove("Photo01")
    gazo.classList.add("Photo02")
  } else if (count1 % 5 === 2) {
    count1 += 1
    gazo.classList.remove("Photo02")
    gazo.classList.add("Photo03")
  } else if (count1 % 5 === 3) {
    count1 += 1
    gazo.classList.remove("Photo03")
    gazo.classList.add("Photo04")
  } else {
    count1 = 0
    gazo.classList.remove("Photo04")
    gazo.classList.add("Photo00")
  }
}

const sunobo = document.getElementById("sunobo")
let count2 = 0
sunobo.onclick = function() {
  if (count2 % 5 === 0) {
    count2 += 1
    sunobo.classList.remove("sunobo00")
    sunobo.classList.add("sunobo01")
  } else if (count2 % 5 === 1) {
    count2 += 1
    sunobo.classList.remove("sunobo01")
    sunobo.classList.add("sunobo02")
  } else if (count2 % 5 === 2) {
    count2 += 1
    sunobo.classList.remove("sunobo02")
    sunobo.classList.add("sunobo03")
  } else if (count2 % 5 === 3) {
    count2 += 1
    sunobo.classList.remove("sunobo03")
    sunobo.classList.add("sunobo04")
  } else {
    count2 = 0
    sunobo.classList.remove("sunobo04")
    sunobo.classList.add("sunobo00")
  }
}

//タイマー
const display = document.getElementById("display")

let count = 0

const countUp = function() {
  //countを更新
  count += 1
  //count を秒単位にして表示
  display.textContent = count
}

window.onload = function() {
  setInterval(countUp, 1000)
}
