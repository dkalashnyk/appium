import AllureReporter from "@wdio/allure-reporter";
import { Status } from "allure-js-commons";

export async function step<T>(
  name: string,
  action: () => Promise<T>,
): Promise<T> {
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
