import { Platform } from "react-native";

interface RequestOptions {
  method: "GET" | "POST";
  body?: string | FormData;
  headers?: Record<string, string>;
}

async function fetchData<T>(url: string, options: RequestOptions): Promise<T> {
  try {
    const defaultHeaders = {
      "Content-Type": "application/json",
      // Add any other headers you need
    };

    const headers = {
      ...defaultHeaders,
      ...options.headers,
    };

    const fetchOptions: RequestInit = {
      method: options.method,
      headers,
      body: options.body,
    };

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch Error:", error);
    throw error;
  }
}

// Example usage:

// GET request
fetchData<{ key: string }>("https://example.com/api/data", { method: "GET" })
  .then((data) => {
    console.log("GET Data:", data);
  })
  .catch((error) => {
    console.error("GET Error:", error);
  });

// POST request
const postData = { key: "value" };
fetchData<{ key: string }>("https://example.com/api/data", {
  method: "POST",
  body: JSON.stringify(postData),
  headers: {
    Authorization: "Bearer YOUR_ACCESS_TOKEN",
  },
})
  .then((data) => {
    console.log("POST Data:", data);
  })
  .catch((error) => {
    console.error("POST Error:", error);
  });

export default fetchData;
