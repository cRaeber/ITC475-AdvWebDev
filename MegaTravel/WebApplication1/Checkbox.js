function clearList(ThingsToDo) {
    document.getElementById("ThingsToDo").innerHTML = "";
}

function Checkbox(arr, size) {
    const myNode = document.getElementById("ThingsToDo");
    for (i = 0; i < size; i++) {
        var checkbox1 = document.createElement('input');
        checkbox1.type = "checkbox";
        checkbox1.value = "value";
        checkbox1.id = arr[i][0];
        var label = document.createElement('label')
        label.appendChild(document.createTextNode(arr[i][1]));
        var br = document.createElement("br");

        myNode.appendChild(checkbox1);
        myNode.appendChild(label);
        myNode.appendChild(br);
    }

    return (myNode);
}

function Click(arr, size) {
    ReactDOM.render(React.createElement("div", null, React.createElement(Checkbox(arr, size), null)),
        document.getElementById("ThingsToDo"));
}

NZ.onclick = () => {
    clearList();
    document.getElementById("selectLocation").innerHTML = "New Zealand";

    nzArray = [['NZtour', "City Tours"], ['NZsport', "Sports"], ['NZcycle', "Cycling"],
    ['NZmuseum', "Museums"], ['NZboat', "Boating"]];

    len = nzArray.length;
    Click(nzArray, len);
}

MD.onclick = () => {
    clearList();
    document.getElementById("selectLocation").innerHTML = "Maldives, South Asia";

    mdArray = [['MDmuseum', "Museums"], ['MDsail', "Sailing"], ['MDbeach', "Beach"], ['MDhike', "Hiking"], ['MDboat', "Boating"]];

    len = mdArray.length;
    Click(mdArray, len);
}

VI.onclick = () => {
    clearList();
    document.getElementById("selectLocation").innerHTML = "Venice, Italy";

    viArray = [['VImuseum', "Museums"], ['VItheatre', "Theatre"], ['VIpAndr', "Parks and Recreation"], ['VItour', "City Tours"]];

    len = viArray.length;
    Click(viArray, len);
}

CC.onclick = () => {
    clearList();
    document.getElementById("selectLocation").innerHTML = "Cancun";

    ccArray = [['CCpAndr', "Parks and Recreation"], ['CCbeach', "Beach"], ['CCboat', "Boating"], ['CCsnorkel', "Snorkeling"]];

    len = ccArray.length;
    Click(ccArray, len);
}

