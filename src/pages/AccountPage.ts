import { BasePage } from "./BasePage";

class AccountPage extends BasePage {
  protected get pageIdentifier() {
    return this.loginButton;
  }

  private get loginButton() {
    return $(
      '//android.widget.TextView[@text="Увійти в акаунт"] | //android.widget.TextView[@text="Sign in"]',
    );
  }

  private get guestPrompt() {
    return $('//android.widget.TextView[contains(@text, "MEGOGO")]');
  }

  async isGuestMode(): Promise<boolean> {
    return this.step("Check if guest prompt is displayed", () =>
      this.isDisplayed(this.guestPrompt),
    );
  }
}

export default new AccountPage();
