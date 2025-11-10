export const user_login = async (email, password) => {
  try {
    // Construct the request with the passed URL as a query parameter

    const url = `http://13.201.129.153:5050/api/auth/login`;
    const response = await fetch(url,{
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({email,password})
    });

    if (!response.ok) {
      throw new Error(`An error has occurred: ${response.status}`);
    }

    // Parse the response to JSON format
    const data = await response.json();

    return data;
  } catch (error) {
    // Handle any errors
    console.error("Error fetching data:", error);
  }
};
