const rightControls = document.getElementsByClassName("ytp-right-controls");
if(rightControls.length > 0){	

	const btn = document.createElement("button");
	btn.className = "ytp-button goposmotrim-button";
	btn.setAttribute("aria-pressed", false);
	btn.setAttribute("title", "GoPosmotrim");

	const btnSpan = document.createElement("span");
	btnSpan.className = "goposmotrim-button-content";
	btnSpan.innerHTML = 'Go!';
	btn.appendChild(btnSpan);

	const insertionTarget = rightControls[0];
	insertionTarget.insertAdjacentElement('afterbegin', btn);

	btn.onclick = function(){
		const urlParams = new URLSearchParams(window.location.search);
		const videoId = urlParams.get('v');

		window.location.href = "https://goposmotrim.herokuapp.com/?v=" + videoId;
	};
}