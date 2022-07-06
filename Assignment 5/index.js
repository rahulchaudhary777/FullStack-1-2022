var url ='http://api.covid19api.com/summary';
function getApiData(url){
fetch(url)
 .then(response =>{return response.json()})
 .then(data => displayData(data));
}
function displayData(api_data){
  console.log(api_data);

for(let i of api_data.Countries)

{
if(i.Country == 'India'){

   let Name=i.Country;
  let date =i.Date;
  let TotalConfirmed=i.TotalConfirmed;
  let TotalDeathst=i.TotalDeaths;
document.getElementById('coutryname').innerHTML=Name;
  document.getElementById('date').innerHTML=date;
  document.getElementById('TotalConfirmed').innerHTML=TotalConfirmed;
  document.getElementById('TotalDeaths').innerHTML=TotalDeathst;
}
}}



getApiData(url);
