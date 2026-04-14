FROM node:20-slim

# Install required tools
RUN apt-get update && apt-get install -y \
    openjdk-17-jdk \
    curl \
    unzip \
    && rm -rf /var/lib/apt/lists/*

# Install Android SDK (command-line tools only — no emulator needed in this image)
ENV ANDROID_HOME=/opt/android-sdk
RUN mkdir -p $ANDROID_HOME/cmdline-tools && \
    curl -o /tmp/cmdline-tools.zip \
    https://dl.google.com/android/repository/commandlinetools-linux-11076708_latest.zip && \
    unzip /tmp/cmdline-tools.zip -d $ANDROID_HOME/cmdline-tools && \
    mv $ANDROID_HOME/cmdline-tools/cmdline-tools $ANDROID_HOME/cmdline-tools/latest && \
    rm /tmp/cmdline-tools.zip

ENV PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools

# Accept licenses and install platform-tools (adb)
RUN yes | sdkmanager --licenses && \
    sdkmanager "platform-tools"

# Install Appium + UiAutomator2 driver
RUN npm install -g appium && \
    appium driver install uiautomator2

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

CMD ["npx", "wdio", "run", "config/wdio.android.config.ts"]