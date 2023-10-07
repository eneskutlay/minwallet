import AsyncStorage from "@react-native-async-storage/async-storage";

// Veriyi AsyncStorage'e kaydetmek için işlev
export const saveData = async (key, data) => {
  //console.log("Key:", key, "Data:", data); // Ekle
  try {
    await AsyncStorage.setItem(key, data);
    //console.log(`${key} verisi başarıyla kaydedildi.`, data);
  } catch (error) {
    //console.error(`${key} verisi kaydedilirken bir hata oluştu:`, error);
  }
};
// Veriyi AsyncStorage'den almak için işlev
export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      //(`${key} verisi başarıyla alındı:`, value);
      return value;
    } else {
      //console.log(`${key} verisi bulunamadı.`);
      return null;
    }
  } catch (error) {
    console.error(`${key} verisi alınırken bir hata oluştu:`, error);
    return null;
  }
};

// Veriyi AsyncStorage'den silmek için işlev
export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    //console.log(`${key} verisi başarıyla silindi.`);
  } catch (error) {
    console.error(`${key} verisi silinirken bir hata oluştu:`, error);
  }
};

export const getAllData = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const data = await AsyncStorage.multiGet(keys);

    const allData = {};
    data.forEach(([key, value]) => {
      allData[key] = value;
    });
    console.log("Tüm veriler başarıyla alındı:", allData);
  } catch (error) {
    console.error("Veriler alınırken bir hata oluştu:", error);
  }
};

export const clearAllData = async () => {
  try {
    await AsyncStorage.clear();
    console.log("Tüm veriler başarıyla silindi.");
  } catch (error) {
    console.error("Veriler silinirken bir hata oluştu:", error);
  }
};
