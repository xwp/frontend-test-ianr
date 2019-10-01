// TODO
// Ensure the JS element selection finds the appropriate card
// Polyfill closest() if necessary
// Note addEventListener() not necessary as no other events / actions on
// this handler.

export const toggleOverlay = () => {
	// Identify trigger
	const toggleTrigger = document.querySelector( '.js-toggle-text' );

	// Find parent of trigger so that we don't toggle all cards
	const triggerParent = toggleTrigger.closest( '.js-toggle-parent' );

	// Find content to toggle overlay
	const toggleTarget = triggerParent.querySelector( '.js-toggle-target' );

	// Toggle up/down icons
	const toggleIcons = triggerParent.querySelectorAll( '.js-icon-toggle' );

	// Toggle overlay shadow over text
	const toggleShadow = triggerParent.querySelector( '.js-toggle-shadow' );

	toggleTrigger.onclick = ( event ) => {
		toggleTarget.classList.toggle( 'is-active' );
		toggleShadow.classList.toggle( 'has-no-shadow' );
		toggleIcons.forEach( ( icon ) => {
			icon.classList.toggle( 'is-hidden' );
		} );
		event.preventDefault();
	};
};
