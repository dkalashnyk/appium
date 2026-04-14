import { BasePage } from "./BasePage";

class AgeConfirmationPage extends BasePage {
  protected get pageIdentifier() {
    return this.title;
  }

  private get confirmButton() {
    return $("//android.widget.Button");
  }

  private get title() {
    return $('//android.widget.TextView[@text="Підтвердьте свій вік"]');
  }

  async confirm(): Promise<void> {
    await this.step("Confirm age", async () => {
      try {
        await this.confirmButton.waitForExist({ timeout: 120_000 });
        await this.tap(this.confirmButton);
      } catch (error) {
        // Screenshot at point of failure — shows exactly what's on screen
        const screenshot = await browser.takeScreenshot();
        require("@wdio/allure-reporter").default.addAttachment(
          "Age screen at timeout",
          Buffer.from(screenshot, "base64"),
          "image/png",
        );
        throw error; // re-throw so test still fails
      }
    });
  }
}

export default new AgeConfirmationPage();
