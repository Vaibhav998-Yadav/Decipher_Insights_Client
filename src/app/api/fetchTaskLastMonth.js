const fetchTaskLastMonth = async (date) => {
    const url = `http://13.201.129.153:5050/app/tasks/last-month`;

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching tasks:", error);
        return null;
    }
};

export default fetchTaskLastMonth
