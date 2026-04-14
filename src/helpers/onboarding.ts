import NotificationPermissionPage from "../pages/NotificationPermissionPage";
import AgeConfirmationPage from "../pages/AgeConfirmationPage";
import AdOverlay from "../components/AdOverlay";
import OnboardingWizard from "../components/OnboardingWizard";

export async function completeOnboarding(): Promise<void> {
  await NotificationPermissionPage.skip();
  await AgeConfirmationPage.confirmIfVisible();
  await OnboardingWizard.skipIfVisible();
  await AdOverlay.closeIfVisible();
}
