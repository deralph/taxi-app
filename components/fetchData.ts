const fetcher = async (
  url: string,
  method: string,
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  setData: any,
  fetchData?: any
) => {
  try {
    const response: any = await fetch(url, {
      method: method,
      body: fetchData ? JSON.stringify(fetchData) : null,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    setMessage("");
    console.log("hello");
    console.log("Response Data:", data);
    if (!data) {
      setMessage("No data available, An error occured, Try again");
    }
    if (data?.type == "error" || data?.success == "error") {
      setMessage(data.message);
    }
    if (data) {
      console.log("hi", data);
      setData(data);
    }
  } catch (error) {
    setMessage("An error occured, Try again");
    console.log("Error in fetching");
    console.log("Error : ", error);
  }
  return;
};
export default fetcher;
