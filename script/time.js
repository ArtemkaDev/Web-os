function updateTime() {
    // Automatically detect the user's timezone
    let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Create a date object
    let date = new Date();

    // Create an options object for formatting the date and time
    let options = {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: timezone
    };

    // Format the date and time
    let formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

    // Remove the comma and replace it with a space
    formattedDate = formattedDate.replace(', ', '');

    // Update the text of the div
    document.getElementById('menu-time').innerText = formattedDate;

    // Update the time every minute (60000 milliseconds)
    setTimeout(updateTime, 60000);
}

// Call the function when the page loads
updateTime();