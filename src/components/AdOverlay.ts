import { tap, isDisplayed } from "../helpers/interactions";

class AdOverlay {
  private get closeButton() {
    return $('//android.widget.Image[@text="Close button"]');
  }

  async isVisible(): Promise<boolean> {
    return isDisplayed(this.closeButton);
  }

  async closeIfVisible(): Promise<void> {
    try {
      await this.closeButton.waitForExist({ timeout: 5_000 });
      await tap(this.closeButton);
    } catch {
      // No ad overlay present — continue
    }
  }
}

export default new AdOverlay();
