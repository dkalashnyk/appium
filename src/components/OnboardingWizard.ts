import { tap } from "../helpers/interactions";

class OnboardingWizard {
  private get newUserButton() {
    return $('//*[@text="Я новий користувач"]');
  }

  private get backButton() {
    return $('//android.widget.ImageButton[@content-desc="Перейти вгору"]');
  }

  async skipIfVisible(): Promise<void> {
    try {
      await this.newUserButton.waitForExist({ timeout: 30_000 });
      await tap(this.newUserButton);
      await browser.pause(1_000);
      await this.clickNextUntilDone();
      await this.closeSubscriptionsIfVisible();
      await browser.pause(2_000);
    } catch (e) {
      console.log(e.message);
    }
  }

  private async clickNextUntilDone(): Promise<void> {
    const { width, height } = await browser.getWindowSize();
    const x = Math.round(width * 0.5);
    const y = Math.round(height * 0.83);

    for (let i = 0; i < 10; i++) {
      const homeVisible = await $(
        "id=com.megogo.application:id/navigation_catalogue",
      ).isExisting();
      if (homeVisible) {
        return;
      }

      await browser.action("pointer").move({ x, y }).down().up().perform();
      await browser.pause(1_500);
    }
  }

  private async closeSubscriptionsIfVisible(): Promise<void> {
    try {
      await this.backButton.waitForDisplayed({ timeout: 20_000 });
      await tap(this.backButton);
    } catch (e) {
      console.log(e.message);
    }
  }
}

export default new OnboardingWizard();
