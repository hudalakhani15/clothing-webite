

var dresses = [
	{
		id: 0,
		img: "./images/i1.jpg",
		des: "Festive Printed Lawn With Embrioded Dupatta",
		price: "PKR:2500",
	},
	{
		id: 1,
		img: "./images/12.jpeg",
		des: "Silkoria printed lawn",
		price: "PKR:2500",
	},
	{
		id: 2,
		img: "./images/i3.jpeg",
		des: " White shirt",
		price: "PKR:2500",
	},
	{
		id: 3,
		img: "./images/i4.jpeg",
		des: "MULTI SILK PRET",
		price: "PKR:2500"
	},
	{
		id: 4,
		img: "./images/i5.jpg",
		des: "Silk Suit with Chiffon Dupatta",
		price: "PKR:2500",
	},

	{
		id: 5,
		img: "./images/i6.jpg",
		des: "Silkoria printed lawn",
		price: "PKR:2500",
	},

	{
		id: 6,
		img: "./images/i7.jpeg",
		des: "GREEN Silkoria lawn",
		price: "PKR:2500",
	},

	{
		id: 7,
		img: "./images/i8.jpg",
		des: "Silk Suit with Chiffon Dupatta",
		price: "PKR:2500",
	}

]

var productItem = document.getElementById("productItem")
for (var i = 0; i < dresses.length; i++) {
	productItem.innerHTML += `<div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
	<div class="product"> <img src="${dresses[i].img}" alt="">
		<ul class="d-flex align-items-center justify-content-center list-unstyled icons">
			<li class="icon"><span class="fas fa-expand-arrows-alt"></span></li>
			<li class="icon mx-3"><span class="far fa-heart"></span></li>
			<li class="icon" onclick="addtocart(${dresses[i].id})"><span class="fas fa-shopping-bag"></span></li>
		</ul>
	</div>
	 <div class="tag bg-red">Best Selling</div>
	<div class="title pt-4 pb-1 text-center">${dresses[i].des}</div>
	<div class="d-flex align-content-center justify-content-center"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> </div>
	<div class="price">${dresses[i].price}</div>
</div> `
}
function addtocart(i) {
	console.log(i);
	for (var j = 0; j > dresses.length; j++) {
		if (i == dresses[j]) {
			console.log(dresses[j])
		}
	};
}
