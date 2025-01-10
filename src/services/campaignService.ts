import { CampaignData, DonationLink } from '../types';

export const campaignService = {
  // Update campaign title
  async updateTitle(title: string): Promise<void> {
    try {
      // Update title in index.html
      const titleElement = document.querySelector('.campaign-header h1');
      if (titleElement) {
        titleElement.textContent = title;
      }
    } catch (error) {
      console.error('Error updating title:', error);
      throw error;
    }
  },

  // Update main text content
  async updateMainText(text: string): Promise<void> {
    try {
      // Update text in index.html
      const textElement = document.querySelector('.about-section p');
      if (textElement) {
        textElement.innerHTML = text;
      }
    } catch (error) {
      console.error('Error updating text:', error);
      throw error;
    }
  },

  // Update campaign image
  async updateImage(imageFile: File): Promise<void> {
    try {
      const imageUrl = URL.createObjectURL(imageFile);
      const imageElement = document.querySelector('.campaign-image img');
      if (imageElement) {
        imageElement.src = imageUrl;
      }
    } catch (error) {
      console.error('Error updating image:', error);
      throw error;
    }
  },

  // Update donation links
  async updateDonationLinks(links: DonationLink[]): Promise<void> {
    try {
      const donationButtons = document.querySelectorAll('.donation-btn');
      links.forEach((link, index) => {
        const button = donationButtons[index];
        if (button) {
          button.setAttribute('onclick', `donate('${link.url}')`);
        }
      });
    } catch (error) {
      console.error('Error updating donation links:', error);
      throw error;
    }
  }
};