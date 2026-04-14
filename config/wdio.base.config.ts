import type { Options } from "@wdio/types";
import video from "wdio-video-reporter";
import * as dotenv from "dotenv";
import path from "path";
dotenv.config();

export const baseConfig: Partial<Options.Testrunner> = {
  specs: [path.join(__dirname, "../tests/specs/**/*.spec.ts")],
  maxInstances: 1,
  logLevel: "warn",
  framework: "mocha",
  waitforTimeout: 15_000,
  waitforInterval: 500,
  reporters: [
    "spec",
    [
      video,
      {
        saveAllVideos: false, // only save on failure
        videoSlowdownMultiplier: 3, // slow down for readability
        outputDir: "allure-results", // put videos alongside allure results
      },
    ],
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
    [
      "junit",
      {
        outputDir: "junit-results",
        outputFileFormat: (options: { cid: string }) =>
          `results-${options.cid}.xml`,
      },
    ],
  ],
  mochaOpts: {
    timeout: 300_000,
  },
  afterTest: async function (
    _test: never,
    _context: never,
    { error }: { error?: Error },
  ) {
    if (error) {
      const screenshot = await browser.takeScreenshot();
      require("@wdio/allure-reporter").default.addAttachment(
        "Screenshot on failure",
        Buffer.from(screenshot, "base64"),
        "image/png",
      );
    }
  },
};
