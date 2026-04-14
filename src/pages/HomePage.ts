import { BasePage } from "./BasePage";
import NavigationBar from "../components/NavigationBar";

class HomePage extends BasePage {
  readonly nav = NavigationBar;

  protected get pageIdentifier() {
    return $("id=com.megogo.application:id/navigation_catalogue");
  }

  async waitForPage(): Promise<void> {
    await this.step("Wait for home page to be displayed", async () => {
      await this.pageIdentifier.waitForDisplayed({ timeout: 30_000 });
    });
  }
}

export default new HomePage();
