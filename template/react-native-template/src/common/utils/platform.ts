import { Platform } from 'react-native';

class PlatformUtils {
  static getPlatform() {
    return Platform.OS === 'ios' ? 'ios' : 'android';
  }
}

export { PlatformUtils };
