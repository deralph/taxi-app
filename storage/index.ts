import * as SecureStore from "expo-secure-store";
import error from "../Server/error";

export async function save(key: any, value: any) {
  await SecureStore.setItemAsync(key, value)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

export async function getValueFor(key: any) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    alert("🔐 Here's your value 🔐 \n" + result);
  } else {
    alert("No values stored under that key.");
  }
  return result;
}
