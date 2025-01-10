import { setupFavoriteButton } from './components/favorite-button.js';
import { setupTabs } from './components/tabs.js';
import { setupDonationButtons } from './components/donation-buttons.js';
import { setupDonationScroll } from './utils/scroll-to-donation.js';
import { setupSupporters } from './components/supporters.js';

document.addEventListener('DOMContentLoaded', () => {
    setupFavoriteButton();
    setupTabs();
    setupDonationButtons();
    setupDonationScroll();
    setupSupporters();
});