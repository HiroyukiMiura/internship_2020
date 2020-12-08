let star = document.getElementById("star");
let star_html = '<span>★</span>'
for (let i = 0; i < 5; i++) {
	star.insertAdjacentHTML("beforeend",star_html)
}

let star25 = document.getElementById("star25");
let white_html = '<span>☆</span>'
let br_html = '<br>'
for (let i = 0; i < 25; i++) {
	if (i%2 === 0) {
		star25.insertAdjacentHTML("beforeend",white_html)
	} else if (i%2 === 1) {
		star25.insertAdjacentHTML("beforeend",star_html)
	} if (i%5 === 4) {
		star25.insertAdjacentHTML("beforeend",br_html)
	}
}

function purchase() {
	var money = document.getElementById("money").value;
	var select = document.getElementById("menu");
	if (select.options[0].selected) {
	var price = 150;
	var drink = "コーヒー";
	} else if (select.options[1].selected) {
	var price = 130;
	var drink = "お茶";
	} else if (select.options[2].selected) {
	var price = 160;
	var drink = "オレンジジュース";
	} else if (select.options[3].selected) {
	var price = 100;
	var drink = "水";
	}
	var change = money - price;
	if (change<0) {
		var message = "お金が足りません。";
	} else if (change>=0) {
		var message = drink+"を購入しました。"+br_html+"おつりは"+change+"円です。";
	}
	document.getElementById('output').innerHTML = message;
}