const getOptions = {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
};

async function getPageData() {
    const defaultFirstClient = await fetch("http://localhost:8081/client/1", getOptions).then(response => response.json());
    console.log(defaultFirstClient);
    document.querySelector("#first-client-name").textContent = defaultFirstClient.name;
    document.querySelector("#first-client-balance").textContent = defaultFirstClient.balance;

    const allClients = await fetch("http://localhost:8081/client", getOptions).then(response => response.json());
    console.log(allClients);
    document.querySelector('#all-clients').textContent = JSON.stringify(allClients, null, 2);

    const defaultSecondClient = await fetch("http://localhost:8081/client/2", getOptions).then(response => response.json());
    console.log(defaultSecondClient);
    document.querySelector("#second-client-name").textContent = defaultSecondClient.name;
    document.querySelector("#second-client-balance").textContent = defaultSecondClient.balance;

}

getPageData();





