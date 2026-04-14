import NotificationPermissionPage from "../pages/NotificationPermissionPage";
import AgeConfirmationPage from "../pages/AgeConfirmationPage";
import AdOverlay from "../components/AdOverlay";
import OnboardingWizard from "../components/OnboardingWizard";

export async function completeOnboarding(): Promise<void> {
  await browser.pause(15_000);
  await browser.saveScreenshot("./allure-results/onboarding-start.png");
  await NotificationPermissionPage.skip();
  await AgeConfirmationPage.confirm();
  await OnboardingWizard.skipIfVisible();
  await AdOverlay.closeIfVisible();
}
