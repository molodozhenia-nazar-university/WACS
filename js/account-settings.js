// Additional for Sidebar

const menu = document.querySelectorAll('.settings-menu__list-link');
const content = document.querySelectorAll('.right-sidebar__child');

for (let i = 0; i < menu.length; i++) {
	menu[i].addEventListener('click', () => {

		// Видаляємо активний клас із усіх елементів
		menu.forEach(el => el.classList.remove('settings-menu__list-link--active'));
		content.forEach(el => el.classList.remove('right-sidebar__child--active'));

		// Додаємо активний клас до поточного елемента
		menu[i].classList.add('settings-menu__list-link--active');
		content[i].classList.add('right-sidebar__child--active');

	});
};

fetch('http://localhost:8000/account-settings.php')
	.then(response => {
		if (!response.ok) {
			throw new Error('Помилка при отриманні відповіді від сервера.');
		}
		return response.json();
	})
	.then(profileData => {
		document.querySelector('.profile-current__name').textContent = profileData.name;
		document.querySelector('.profile-current__surname').textContent = profileData.surname;
		document.querySelector('.profile-current__patronymic').textContent = profileData.patronymic;
		document.querySelector('.profile-current__address').textContent = profileData.address;
	})
	.catch(error => console.error('Помилка завантаження даних профілю:', error));