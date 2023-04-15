setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
    // To print the time and date
    function formatTime(date) {
        const hours12 = date.getHours() % 12 || 12;
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const isAm = date.getHours() < 12;

        return `${hours12.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")} ${isAm ? "AM" : "PM"}`;
    }
    function formatDate(date) {
        const DAYS = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
        const MONTHS = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];

        return `${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()]
            } ${date.getDate()} ${date.getFullYear()}`;
    }
    timeElement.textContent = formatTime(d);
    dateElement.textContent = formatDate(d);
}, 1000);
