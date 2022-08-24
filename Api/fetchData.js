const api_url = "https://jsonplaceholder.typicode.com/users";

function getApiData(URL){

    fetch(URL).then((res) => {
        return( res.json() ) 
    }).then((data) => displayData(data)).catch((error) => {
        console.log(error.message)
    }
        )
}

function displayData(apiData){
    console.log(apiData);

    setTimeout(() => {
        for (let i of apiData) {
          let tr = document.createElement("tr");

          let td1 = document.createElement("td");
          let td2 = document.createElement("td");
          let td3 = document.createElement("td");
          let td4 = document.createElement("td");
          let td5 = document.createElement("td");

          td1.innerText = `${i.id}`;
          td2.innerText = `${i.name}`;
          td3.innerText = `${i.email}`;
          td4.innerText = `${i.phone}`;
          td5.innerText = `${i.address.city}`;

          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3);
          tr.appendChild(td4);
          tr.appendChild(td5);

          let table = document.getElementById("apiTable");
          table.appendChild(tr);
        }
    }, 1000);

    
}

getApiData(api_url);