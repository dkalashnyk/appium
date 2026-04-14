import NotificationPermissionPage from "../pages/NotificationPermissionPage";
import AgeConfirmationPage from "../pages/AgeConfirmationPage";
import AdOverlay from "../components/AdOverlay";
import OnboardingWizard from "../components/OnboardingWizard";

export async function completeOnboarding(): Promise<void> {
  await browser.pause(5_000);
  await NotificationPermissionPage.skip();
  await browser.saveScreenshot("./allure-results/age-confirmation-start.png");
  await AgeConfirmationPage.confirm();
  await OnboardingWizard.skipIfVisible();
  await AdOverlay.closeIfVisible();
}
