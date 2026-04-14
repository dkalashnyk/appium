import { BasePage } from "./BasePage";

class AgeConfirmationPage extends BasePage {
  protected get pageIdentifier() {
    return this.title;
  }

  private get confirmButton() {
    return $('//android.widget.TextView[@text="Підтверджую"]');
  }

  private get title() {
    return $('//android.widget.TextView[@text="Підтвердьте свій вік"]');
  }

  async confirm(): Promise<void> {
    await this.step("Confirm age", async () => {
      await this.confirmButton.waitForExist({ timeout: 20_000 });
      await this.tap(this.confirmButton);
    });
  }
}

export default new AgeConfirmationPage();
