import { dropdown } from './utils/dropdown';
import { nullLinks } from './utils/null';
import { toggleOverlay } from './utils/toggleOverlay';

( () => {
	dropdown(); // Test console output
	nullLinks(); // Disable JS on <a> links with class '.js-null'
	toggleOverlay();
} )();
