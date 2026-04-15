import { BasePage } from "./BasePage";

class AccountPage extends BasePage {
  protected get pageIdentifier() {
    return this.loginButton;
  }

  private get loginButton() {
    return $(
      '//android.widget.TextView[@text="Увійти в акаунт"] | ' +
        '//android.widget.TextView[@text="Log in to Your Account"]',
    );
  }

  private get guestPrompt() {
    return $(
      '//android.widget.TextView[@text="Увійдіть в обліковий запис, щоб мати доступ до MEGOGO на всіх ваших пристроях"] | ' +
        '//android.widget.TextView[@text="Log in to your account to access MEGOGO on all your devices"]',
    );
  }

  async isGuestMode(): Promise<boolean> {
    return this.step("Check if guest prompt is displayed", () =>
      this.isDisplayed(this.guestPrompt),
    );
  }
}

export default new AccountPage();
