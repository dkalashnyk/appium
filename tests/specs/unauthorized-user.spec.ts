import { completeOnboarding } from "../../src/helpers/onboarding";
import { step } from "../../src/helpers/allureSteps";
import HomePage from "../../src/pages/HomePage";
import AccountPage from "../../src/pages/AccountPage";

describe("Unauthorized User opens the app", () => {
  before(async () => {
    await completeOnboarding();
  });

  it("should display all navigation tabs", async () => {
    await step("Wait for home page", () => HomePage.waitForPage());
    await step("Assert all navigation tabs visible", () =>
      HomePage.nav.assertAllTabsVisible(),
    );
  });

  it("should show guest state on account screen", async () => {
    await step("Go to account page", () => HomePage.nav.goToAccount());
    await step("Wait for account page", () => AccountPage.waitForPage());
    await step("Verify guest mode is active", async () => {
      await expect(await AccountPage.isGuestMode()).toBe(true);
    });
  });
});
