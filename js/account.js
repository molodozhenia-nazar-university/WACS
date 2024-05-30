// ! Additional for Account Form

const account_choice_link = document.querySelectorAll('.account-choice__link');
const account_form = document.querySelectorAll('.account-form');

account_choice_link.forEach((answers_questions, index) => {
	answers_questions.addEventListener('click', () => {

		account_choice_link.forEach(el => el.classList.remove('account-choice__link--active'));
		account_form.forEach(el => el.classList.remove('account-form--active'));

		account_choice_link[index].classList.add('account-choice__link--active');
		account_form[index].classList.add('account-form--active');

		console.log('Індекс елемента: ', index);

	});
});

// ! Additional for Account Sign In Form

document.querySelector('.sign-in').addEventListener('submit', e => {
	e.preventDefault();

	const data = {
		phone: document.querySelector('.sifi__phone').value,
		password: document.querySelector('.sifi__password').value
	}

	// console.log("data: " + data.name);
	// console.log("data: " + data.surname);
	// console.log("data: " + data.phone);
	// console.log("data: " + data.password);

	sendSignInForm(data);
});

async function sendSignInForm(data) {

	// const res = await fetch("../php/account.php", {
	const res = await fetch("http://localhost:8000/php/account.php", {
		method: 'POST',
		headers: { 'Content-type': 'application/json' },
		body: JSON.stringify(data),
	});

	// Перевірка, чи відповідь має статус 200 (OK)
	// if (res.status !== 200) {
	// 	alert("Помилка при отриманні відповіді від сервера.");
	// 	return;
	// }

	// Перевірка, чи відповідь містить JSON-дані
	// const contentType = res.headers.get('content-type');
	// if (!contentType || !contentType.includes('application/json')) {
	// 	alert("Помилка: очікується JSON-відповідь, але отримано інший тип відповіді.");
	// 	return;
	// }

	try {
		const result = await res.json();
		// console.log(result);
		// alert(`${result.message}`);
		if (result.action == true) { window.location.href = "account-home.html"; }
		else if (result.action == false) { alert(`${result.message}`); window.location.href = "account.html"; }

	} catch (error) {
		// alert("Помилка при розпакуванні JSON: " + error.message);
	}

}

// ! Additional for Account Sign Up Form

document.querySelector('.sign-up').addEventListener('submit', e => {
	e.preventDefault();

	const data = {
		name: document.querySelector('.sufi_name').value,
		surname: document.querySelector('.sufi_surname').value,
		phone: document.querySelector('.sufi_phone').value,
		password: document.querySelector('.sufi_password').value
	}

	// console.log("data: " + data.name);
	// console.log("data: " + data.surname);
	// console.log("data: " + data.phone);
	// console.log("data: " + data.password);

	sendSignUpForm(data);
});

async function sendSignUpForm(data) {

	// const res = await fetch("../php/account.php", {
	const res = await fetch("http://localhost:8000/php/account.php", {
		method: "POST",
		headers: { 'Content-type': 'application/json' },
		body: JSON.stringify(data),
	});

	// Перевірка, чи відповідь має статус 200 (OK)
	// if (res.status !== 200) {
	// 	alert("Помилка при отриманні відповіді від сервера.");
	// 	return;
	// }

	// Перевірка, чи відповідь містить JSON-дані
	// const contentType = res.headers.get('content-type');
	// if (!contentType || !contentType.includes('application/json')) {
	// 	alert("Помилка: очікується JSON-відповідь, але отримано інший тип відповіді.");
	// 	return;
	// }

	try {
		const result = await res.json();
		// console.log(result);
		alert(`${result.message}`);
		window.location.href = "account.html";
	} catch (error) {
		// alert("Помилка при розпакуванні JSON: " + error.message);
	}

}