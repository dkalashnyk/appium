import { baseConfig } from "./wdio.base.config";

export const config = {
  ...baseConfig,

  hostname: process.env.APPIUM_HOST ?? "localhost",
  port: Number(process.env.APPIUM_PORT ?? 4723),
  path: "/",

  services: [
    [
      "appium",
      {
        args: {
          port: 4723,
          relaxedSecurity: true,
        },
        logFileName: "appium.log",
      },
    ],
  ],

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
