 
 let admission = [];
 
 
 window.onload = () => {
    
getAdmissionInfo()
    }
 
 
 async function getAdmissionInfo()  {
try {

const resp = await fetch ("https://studenter.miun.se/~mallar/dt211g/")


if(!resp.ok) {
 throw new error("Kan ej läsa in")
    
 }

admission = await resp.json();


WriteDiagram()


 }catch(error) {
 console.error(error); }
 

 
 
}

function WriteDiagram() {
let test = admission


 


let test2 = test.sort((a,b) => b.applicantsTotal-a.applicantsTotal).slice(0,6);

console.table(test2);



 const ctx = document.getElementById('myChart');


  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
  });

}




  