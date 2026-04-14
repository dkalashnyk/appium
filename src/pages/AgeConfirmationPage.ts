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

  async confirmIfVisible(): Promise<void> {
    try {
      await this.confirmButton.waitForExist({ timeout: 10_000 });
      await this.step("Confirm age", async () => {
        await this.tap(this.confirmButton);
      });
    } catch {
      // Age confirmation not shown — continue
    }
  }
}

export default new AgeConfirmationPage();
