import type { ChainablePromiseElement } from "webdriverio";

export async function tap(element: ChainablePromiseElement): Promise<void> {
  await element.waitForDisplayed({ timeout: 15_000 });
  await element.click();
}

export async function getText(
  element: ChainablePromiseElement,
): Promise<string> {
  await element.waitForDisplayed({ timeout: 15_000 });
  return element.getText();
}

export async function isDisplayed(
  element: ChainablePromiseElement,
): Promise<boolean> {
  try {
    await element.waitForDisplayed({ timeout: 10_000 });
    return true;
  } catch {
    return false;
  }
}
