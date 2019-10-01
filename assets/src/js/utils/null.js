// Array.from needs polyfill for our weak IE foe

export const nullLinks = () => {
	const links = document.querySelectorAll( 'a.js-null' );

	Array.from( links ).forEach( ( link ) => {
		link.addEventListener( 'click', ( event ) => {
			event.preventDefault();
		} );
	} );
};
