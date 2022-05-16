// Declare DOM variables
const generateInfoBtn = document.querySelector('#random-user');

function getRandomInfo() {
	// AJAX Request to Selected API
	let xhr = new XMLHttpRequest();
	let apiUrl = 'https://randomuser.me/api/';
	xhr.open('GET', apiUrl, true);

	xhr.onload = function () {
		if (xhr.readyState == 4 && xhr.status == 200) {
			displayAPIContent(this.responseText);
		} else {
			window.alert('There has been a problem with the API. Try again later!');
			// console.log('Error status: ', xhr.status);
		}
	};

	xhr.send();
}

function displayAPIContent(response) {
	const data = JSON.parse(response);

	const {
		picture: { large },
		name: { first },
		name: { last },
		phone,
		cell,
		gender,
		location: { city },
		location: { state },
		location: { country },
		location: { postcode },
		email,
	} = data.results[0];
	document.getElementById('photo').src = large;
	document.getElementById('first-name').textContent = first;
	document.getElementById('last-name').textContent = last;
	document.getElementById('phone').textContent = phone;
	(document.getElementById('cell').textContent = cell),
		(document.getElementById('gender').textContent = gender),
		(document.getElementById('city').textContent = city);
	document.getElementById('state').textContent = state;
	document.getElementById('country').textContent = country;
	document.getElementById('postal-code').textContent = postcode;
	document.getElementById('email-web').textContent = email;
}

generateInfoBtn.addEventListener('click', getRandomInfo);
getRandomInfo();
