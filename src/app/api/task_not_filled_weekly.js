const task_not_filled_weekly = async() => {
    try {
        const response = await fetch("http://13.201.129.153:5050/app/tasks/not-filled/last-week");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        return(data)
        
    } catch (error) {
        console.error("Failed to fetch users with missing tasks:", error);
    }
}


export default task_not_filled_weekly