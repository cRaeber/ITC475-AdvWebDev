function Greeting() {
    var timeOfDay = "";
    var today = new Date();

    var hour = today.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min = today.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec = today.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    if (hour <= 11) {
        timeOfDay = "Morning";
    }
    else if (hour >= 12 && hour <= 16) {
        timeOfDay = "Afternoon";
    }
    else if (hour >= 17 && hour < 24) {
        timeOfDay = "Evening";
    }

    if (hour > 12) { hour -= 12 };
    var time = hour + ":" + min + ":" + sec;

    return (
        React.createElement("h3", { id: "Welcome" }, " Good ", timeOfDay, "! ", React.createElement("p", { id: "WelcomeTime" }), time));
}

function Tick() {
    ReactDOM.render(React.createElement("div", null, React.createElement(Greeting, null)),
        document.getElementById("Greeting"));
}
setInterval(Tick, 500); 