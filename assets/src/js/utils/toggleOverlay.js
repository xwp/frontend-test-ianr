/* eslint-disable no-undef */

export const toggleOverlay = () => {
	const toggleTrigger = document.querySelector('.js-toggle-text');
	const toggleTarget = document.querySelector('.js-toggle-target');

	toggleTrigger.onclick = () => toggleTarget.classList.toggle('is-active');
};
