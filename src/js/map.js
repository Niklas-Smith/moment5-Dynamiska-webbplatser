  
  /**
   * create a map 
   */
  let map = L.map('map').setView([55.88, 12.85], 15  );
   
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

 
 
 /**
 *  Empty array that will store data from nominatim
 * @type {Array}
 */
 let mapInfo = []
let buttonEl = document.getElementById("button_search"); 

let searchEl = document.getElementById("searchmap");


    

buttonEl.addEventListener("click", getMapInfo)



/**
 * 
 * Fetch data from nominatim api
 * and store that data in empty array mapinfo in json format
 * @async
 * @function getMapInfo
 * @throws {Error} if response not ok
 * @returns {Promise} Data from api
 * 
*/
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


/**
 * 
 * display map on right city from input and put it on right latitudes and longitudes
 * @function searchMap
 * @returns {number} latitudes
 * @returns {number} longitudes
 */
function searchMap () {

let mapSearch= mapInfo
let lat = mapSearch[0].lat
let lon = mapSearch[0].lon

map.panTo([lat, lon]);
L.marker([lat, lon]).addTo(map);

}