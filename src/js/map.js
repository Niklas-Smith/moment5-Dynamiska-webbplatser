   let map = L.map('map').setView([55.88, 12.85], 15  );

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

 
 
 
 let mapInfo = []
let buttonEl = document.getElementById("button_search"); 

let searchEl = document.getElementById("searchmap");


    

buttonEl.addEventListener("click", getMapInfo)





 async function getMapInfo()  {
let searchValue = searchEl.value

try {




const resp = await fetch (`https://nominatim.openstreetmap.org/search?format=json&city=${searchValue}`) 


if(!resp.ok) {
 throw new error("Kan ej läsa in")
    
 }

mapInfo = await resp.json();

searchMap () 



 }catch(error) {
 console.error(error); }
 

 
 
}



function searchMap () {

let mapSearch= mapInfo
let lat = mapSearch[0].lat
let lon = mapSearch[0].lon

map.panTo([lat, lon]);
L.marker([lat, lon]).addTo(map);
//   let map = L.map('map').setView([lat, lon], 17  );

//   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 17,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);


// L.marker([lat, lon]).addTo(map);







/*
let searchEl = document.getElementById("search_map");


let buttonEl = document.getElementById("button_search"); 
buttonEl.addEventListner("click", functionName)
map.setView (lat+lot) (zoomlvl)
addTo(map)
let lat = mapSearch[0].lat
let lon = mapSearch[0].lon
let searchValue = searchEl.value
map = (innerHTML = "")

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();


L.marker([lat, lon]).addTo(map);

setLatLng(<LatLng> latlng)	this	
Changes the marker position to the given point.   (maybe need)
q=${searchValue}

https://nominatim.openstreetmap.org/search?country=SE&format=json&q=${searchValue}
*/
}