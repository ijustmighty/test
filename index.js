document.getElementById("popup-open-btn").addEventListener("click", function() {
	document.getElementById("popup-model").classList.add("view");
});

document.getElementById("popup-model").addEventListener("click", function(event) {
	if (event.target === this) {
			document.getElementById("popup-model").classList.remove("view");
	}
});

document.querySelector(".form").addEventListener("click", function(event) {
	event.stopPropagation();
});

document.getElementById("send-btn").addEventListener("click", function() {
	let firstName = document.getElementById("firstName").value;
	let lastName = document.getElementById("lastName").value;
	let middleName = document.getElementById("middleName").value;
	let income = document.getElementById("money").value;
	let workplace = document.getElementById("workplace").value;

	let data = {
		lastName: lastName,
		firstName: firstName,
		middleName: middleName,
		income: income,
		workplace: workplace
	};

	let jsonData = JSON.stringify(data, null, 2);

	document.getElementById("info").innerHTML = "<pre>" + jsonData + "</pre>";

	document.getElementById("popup-model").classList.remove("view");
	document.getElementById("info").classList.remove("hidden");
});
