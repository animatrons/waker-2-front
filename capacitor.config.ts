/* eslint-disable @typescript-eslint/naming-convention */
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.waker.front',
  appName: 'waker-2',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: '635930979688-fd325hl0d5heja66sjbqv7cotmhu6phn.apps.googleusercontent.com',
      forceCodeForRefreshToken: true
    }
  }
};

export default config;
