/* Fetch API's if we dont say anything: get*/

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f4665780demshf25da1cd482c4f6p182f92jsn792728a50217',
		'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
	}
};

fetch('https://gogoanime2.p.rapidapi.com/popular', options)
	.then(response => response.json())
	.then((data) =>
		data.forEach((item) => {
			const animeContainer = document.querySelector("#anime-container");
			const container = document.createElement("div");
			container.className = "item-container"

			const title = document.createElement("h2");
			title.textContent = item.animeTitle
			const id = document.createElement("p");
			id.textContent = item.animeId;
			const image= document.createElement("img");
			image.src = item.animeImg
			const url = document.createElement("a");
			url.href= item.animeUrl;
			const btn = document.createElement("button");
			btn.textContent = "Watch";
			
			animeContainer.appendChild(url);
			url.appendChild(container);
			container.append(title, id, image, btn);
		})
	)
	.catch(err => console.error(err));