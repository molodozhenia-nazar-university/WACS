$(function () {

	$(".additional-services__bottom-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		// swipe: false,
	});

	$(".asbb__categories").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		asNavFor: '.additional-services__bottom-slider',
		focusOnSelect: true,
		variableWidth: true,
	});

	// Additional for Slider

	const categories = document.querySelectorAll('.asbb__categories-item');

	$('.additional-services__bottom-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
		setActiveCategory(currentSlide);
	});

	function setActiveCategory(index) {
		// Знімаємо клас активного елемента з усіх елементів меню
		categories.forEach(function (item) {
			item.classList.remove('asbb__categories-item--active');
		});
		// Додаємо клас активного елемента потрібному елементу меню за індексом
		categories[index].classList.add('asbb__categories-item--active');
	}

});

// Additional for FAQ

const answers_questions = document.querySelectorAll('.answers-questions__item');
const answers_questions_title = document.querySelectorAll('.answers-questions__item-head');
const answers_questions_text = document.querySelectorAll('.answers-questions__item-body');

answers_questions.forEach((answers_questions, index) => {
	answers_questions.addEventListener('click', () => {

		if (answers_questions_text[index].classList.contains('answers-questions__item-body--active')) {
			answers_questions_title[index].classList.remove('answers-questions__item-head--active');
			answers_questions_text[index].classList.remove('answers-questions__item-body--active');
		} else {
			answers_questions_title[index].classList.add('answers-questions__item-head--active');
			answers_questions_text[index].classList.add('answers-questions__item-body--active');
		}

		// console.log('Індекс елемента: ', index);

	});
});