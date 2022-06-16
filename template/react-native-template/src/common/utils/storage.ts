import AsyncStorage from '@react-native-async-storage/async-storage';

export const setStorage = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    throw e;
  }
};

export const getStorage = async (key: string) => {
  try {
    const res: any = await AsyncStorage.getItem(key);
    return JSON.parse(res);
  } catch (e) {
    throw e;
  }
};

export const clearStoarge = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    throw e;
  }
};
