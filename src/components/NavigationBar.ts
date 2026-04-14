import { tap } from "../helpers/interactions";

class NavigationBar {
  get homeTab() {
    return $("id=com.megogo.application:id/navigation_catalogue");
  }
  get audioTab() {
    return $("id=com.megogo.application:id/navigation_audio");
  }
  get favoritesTab() {
    return $("id=com.megogo.application:id/navigation_iwatch");
  }
  get searchTab() {
    return $("id=com.megogo.application:id/navigation_search");
  }
  get accountTab() {
    return $("id=com.megogo.application:id/navigation_account");
  }

  async goToHome(): Promise<void> {
    await tap(this.homeTab);
  }
  async goToSearch(): Promise<void> {
    await tap(this.searchTab);
  }
  async goToFavorites(): Promise<void> {
    await tap(this.favoritesTab);
  }
  async goToAudio(): Promise<void> {
    await tap(this.audioTab);
  }
  async goToAccount(): Promise<void> {
    await tap(this.accountTab);
  }

  async isHomeTabDisplayed(): Promise<boolean> {
    return this.homeTab.isDisplayed();
  }

  async assertAllTabsVisible(): Promise<void> {
    await expect(this.homeTab).toBeDisplayed();
    await expect(this.audioTab).toBeDisplayed();
    await expect(this.favoritesTab).toBeDisplayed();
    await expect(this.searchTab).toBeDisplayed();
    await expect(this.accountTab).toBeDisplayed();
  }
}

export default new NavigationBar();
