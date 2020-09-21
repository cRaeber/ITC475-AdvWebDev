function Icon() {

    var today = new Date();
    var hours = today.getHours();

    if (hours >= 6 && hours <= 18) {
        return (
            React.createElement("img", { src: "./sun.jpg" }));
    }
    else {
        return (
            React.createElement("img", { src: "./moon.jpg" }));
    }

}

function Tick() {
    ReactDOM.render(React.createElement("div", null, React.createElement(Icon, null)),
        document.getElementById("SunMoon"));
}
setInterval(Tick, 500); 