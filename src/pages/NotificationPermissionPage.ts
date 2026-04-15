import { BasePage } from "./BasePage";

class NotificationPermissionPage extends BasePage {
  protected get pageIdentifier() {
    return this.skipButton;
  }

  private get skipButton() {
    return $("id=com.megogo.application:id/actionSkip");
  }

  private get allowButton() {
    return $("id=com.megogo.application:id/actionAllow");
  }

  async skip(): Promise<void> {
    await this.step("Skip notification permission", async () => {
      await browser.saveScreenshot("./allure-results/notification-skip.png");
      await this.tap(this.skipButton);
    });
  }

  async allow(): Promise<void> {
    await this.step("Allow notification permission", async () => {
      await this.tap(this.allowButton);
    });
  }
}

export default new NotificationPermissionPage();
