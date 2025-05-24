 
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
let applicant = admission


const courses = applicant.filter(applicant => applicant.type === "Kurs").sort((a,b) => b.applicantsTotal-a.applicantsTotal).slice(0,6);
const program = applicant.filter(applicant => applicant.type === "Program").sort((a,b) => b.applicantsTotal-a.applicantsTotal).slice(0,5);




let coursesApplicantTotal = courses.sort((a,b) => b.applicantsTotal-a.applicantsTotal).slice(0,6); 

let  programApplicantTotal =  program.sort((a,b) => b.applicantsTotal-a.applicantsTotal).slice(0,5); 




 
 const ctx = document.getElementById('myChart');


  new Chart(ctx, {
    type: 'bar',
    data: {
              labels: courses.map(courses => courses.name),
      datasets: [{
        label: 'Antal sökande',
       data: coursesApplicantTotal.map(coursesApplicantTotal => coursesApplicantTotal.applicantsTotal),

        borderWidth: 1

      }]
    },

  });



 const ctx2 = document.getElementById('myChartCircle');


  new Chart(ctx2, {
    type: 'doughnut',
    data: {
              labels: program.map(program => program.name),
      datasets: [{
        label: 'Antal sökande',
       data: programApplicantTotal.map(programApplicantTotal => programApplicantTotal.applicantsTotal),

        borderWidth: 1

      }]
    },

  });





}




