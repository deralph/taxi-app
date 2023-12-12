import * as SecureStore from "expo-secure-store";

export async function save(key: any, value: any) {
  console.log("value =", value);
  await SecureStore.setItemAsync(key, value).catch((error) =>
    console.log("error in storing user", error)
  );
}

export async function getValueFor(key: any) {
  let result = await SecureStore.getItemAsync(key)
    .then((data) => {
      // console.log(data);
      // if (data) {
      //   alert("🔐 Here's your value 🔐 \n" + data);
      // } else {
      //   alert("No values stored under that key.");
      // }
      console.log("user =", data);
      return data;
    })
    .catch((error) => {
      console.log("error in getting user :", error);
    });
  return result;
}

export async function deleteValueFor(key: any) {
  let result = await SecureStore.deleteItemAsync(key);
  console.log(result);
}
