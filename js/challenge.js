document.addEventListener("DOMContentLoaded", () => {
	let i = 1;
	let j = 0;
	const timer = document.querySelector("#counter");
	const buttonDown = document.querySelector("#minus");
	const buttonUp = document.querySelector("#plus");
	const buttonHeart = document.querySelector("#heart");
	const buttonPause = document.querySelector("#pause");
	const likeList = document.querySelector(".likes");
	const buttonSubmit = document.querySelector("#submit");

	let myVar = setInterval(myTimer, 1000);

	function myTimer() {
		timer.innerHTML = i++;
		j = 0;
	}
	myTimer();

	buttonDown.addEventListener("click", intervalDown);
	buttonUp.addEventListener("click", intervalUp);
	buttonHeart.addEventListener("click", likeButton);
	buttonPause.addEventListener("click", intervalPause);

	function intervalPause() {
		if (buttonPause.innerText == "pause") {
			clearInterval(myVar);
			buttonPause.innerText = "resume";
			buttonUp.disabled = true;
			buttonDown.disabled = true;
			buttonHeart.disabled = true;
			buttonSubmit.disabled = true;
		} else {
			myVar = setInterval(myTimer, 1000);
			buttonPause.innerText = "pause";
			buttonDown.disabled = false;
			buttonHeart.disabled = false;
			buttonUp.disabled = false;
			buttonSubmit.disabled = false;
		}
	}

	function intervalDown() {
		timer.innerHTML--;
	}

	function intervalUp() {
		timer.innerHTML++;
	}

	function likeButton() {
		j++;
		let likePhrase = `<li>${i} has been liked ${j} times</li>`;
		likeList.innerHTML += likePhrase;
	}

	const commentForm = document.querySelector("#comment-form");
	const commentInput = document.querySelector("#comment-input");
	const commentList = document.querySelector("#list");

	commentForm.addEventListener("submit", updateComments);

	function updateComments(e) {
		e.preventDefault();
		let commentMessage = commentInput.value;
		let commentHTML = `<li>${commentMessage}</li>`;
		commentList.innerHTML += commentHTML;
		commentInput.value = "";
	}
});
