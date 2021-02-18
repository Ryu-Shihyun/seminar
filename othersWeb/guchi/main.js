const zikosyoukai = document.getElementById("zikosyoukai")
const katudou = document.getElementById("katudou")
const tuba = document.getElementById("tuba")
const si = document.getElementById("self-introduction")

let i = 0

zikosyoukai.onclick = function() {
  alert("自己紹介とは、自分で自分の経歴などを述べること")
}

katudou.onmouseover = function() {
  if (i === 0) {
    const katu1 = document.createElement("div")
    katu1.textContent = "普段の演奏活動や、最近の活動について紹介"
    katudou.append(katu1)
    i = 1
  } else {
    const katu1 = katudou.children[0]
    katudou.removeChild(katu1)

    i = 0
  }
}

let j = 0

tuba.onclick = function() {
  if (j === 0) {
    const mytuba = document.createElement("div")
    mytuba.textContent =
      "私のチューバは、ヨークタイプの4/4モデルで、ベルがゴールドブラスの特別仕様です"
    si.append(mytuba)
    j = 1
  } else {
    const mytuba = si.children[2]
    si.removeChild(mytuba)
    j = 0
  }
}
