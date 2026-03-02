const dateAndTimeFormate = (isoDate) => {
    const d = new Date(isoDate);

    // Date
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();

    // Time
    let hours = d.getHours();
    const minutes = String(d.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    // Final format
    const formatted = `${day}-${month}-${year} ${hours}:${minutes} ${ampm}`;

    return formatted;
}

export default dateAndTimeFormate;