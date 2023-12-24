let urlEl = document.getElementById("base-url");
let userInput = document.getElementsByTagName("input")[0];
let requestBtn = document.getElementsByName("request")[0];
let result = document.getElementById("result");
requestBtn.addEventListener("click", function () {
	let url = new URL(urlEl.textContent + "/" + userInput.value);
	let data;
	fetch(url.href)
		.then((res) => res.json())
		.then((resData) => renderRequest(resData.slice(0, 10)));
});

function renderRequest(data) {
	result.innerHTML = "";
	for (let i = 0; i < data.length; ++i) {
		let { postId, name, email, body, title, url, thumbnailUrl } = data[i];
		let container = document.createElement("div");
		if (postId && name && email && body) {
			let h2 = document.createElement("h3");
			h2.textContent = name;
			let postIdEl = document.createElement("p");
			postIdEl.textContent = postId;
			let emailEl = document.createElement("p");
			emailEl.textContent = email;
			let bodyEl = document.createElement("p");
			bodyEl.textContent = body;
            container.appendChild(h2);
            container.appendChild(postIdEl);
            container.appendChild(emailEl);
            container.appendChild(bodyEl);
		} else if (title && url && thumbnailUrl) {
			let h2 = document.createElement("h3");
			h2.textContent = title;
			let image = document.createElement("img");
			image.src = url;
			let thumbnail = document.createElement("img");
			thumbnail.width = "200";
			thumbnail.src = thumbnailUrl;
            container.appendChild(h2);
            container.appendChild(image)
            container.appendChild(thumbnail)
		}
		
		result.appendChild(container);
	}
}

