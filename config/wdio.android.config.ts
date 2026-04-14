import { baseConfig } from "./wdio.base.config.js";

const appiumHost = process.env.APPIUM_HOST ?? "localhost";
const appiumPort = Number(process.env.APPIUM_PORT ?? 4723);

export const config = {
  ...baseConfig,

  hostname: appiumHost,
  port: appiumPort,
  path: "/",

  capabilities: [
    {
      platformName: "Android",
      "appium:automationName": "UiAutomator2",
      "appium:deviceName": "emulator-5554",
      "appium:app": process.env.APP_PATH ?? "./apps/base.apk",
      "appium:appPackage": process.env.APP_PACKAGE ?? "com.megogo.application",
      "appium:appActivity":
        process.env.APP_ACTIVITY ?? "net.megogo.app.main.MainActivity",
      "appium:noReset": false,
      "appium:newCommandTimeout": 240,
    },
  ],
};
