// src/pages/BasePage.ts
import { tap, getText, isDisplayed } from "../helpers/interactions";
import type { ChainablePromiseElement } from "webdriverio";
import AllureReporter from "@wdio/allure-reporter";
import { Status } from "allure-js-commons";

export abstract class BasePage {
  protected async step<T>(name: string, action: () => Promise<T>): Promise<T> {
    AllureReporter.startStep(name);
    try {
      const result = await action();
      AllureReporter.endStep(Status.PASSED);
      return result;
    } catch (error) {
      AllureReporter.endStep(Status.FAILED);
      throw error;
    }
  }

  // Each page defines its own identity element
  protected abstract get pageIdentifier(): ChainablePromiseElement;

  protected tap = tap;
  protected getText = getText;
  protected isDisplayed = isDisplayed;

  async waitForPage(): Promise<void> {
    await this.pageIdentifier.waitForDisplayed({ timeout: 20_000 });
  }

  async isPageDisplayed(): Promise<boolean> {
    return isDisplayed(this.pageIdentifier);
  }
}
