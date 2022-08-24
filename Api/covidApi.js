var covid_url = "https://api.covid19api.com/summary";

function getData(url){

    fetch(url).then((res) => {return (res.json())}).then((data) => console.log(data)).catch((error) => {displayCases(error.message)})
}

function displayCases(covidData){
    // console.log(covidData);

    for(i of covidData){
        let tr = document.createElement("tr")

        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");

        // console.log(i);

        td1.innerText = `${i.Global}`;
        td2.innerText = `${i.Global.Date}`;
        td3.innerText = `${i.Global.TotalConfirmed}`;
        td4.innerText = `${i.Global.TotalDeaths}`;
        td5.innerText = `${i.Global.NewConfirmed}`;
        td6.innerText = `${i.Global.NewDeaths}`;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);

        let table = document.getElementById("covidTable");
        table.appendChild(tr);
        
    }
}

getData(covid_url);