/**
 *  Empty array that will store data from miun
 * @type {Array}
 */
 let admission = [];

/**
 * 
 * Call function getAdmissinInfo when page is load
 * @function window.onload
 * 
 */
 window.onload = () => {
    
getAdmissionInfo()

    }
 
/**
 * Fetch data from miun
 * and put this data in empty array admission in json format
 * @async
 * @function getAdmissionInfo
 * @throws {Error} if response not ok
 * @returns {Promise} Data from api
*/
 
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



/**
 * Use filter() so to seperate courses and program and use slice()<br>
 * To keep six higest from courses and five higest from program <br>
 * Then use sort to have both them go from higest to lowest (six higest from courses and five higest from program) <br>
 * @function WriteDiagram
 * @returns {chart} input data from courses in a bar chart that show higest applicant for courses 
 * @returns {chart} input data from programs in a pie chart that show higest applicant for program 
 */ 

function WriteDiagram() {
let applicant = admission


const courses = applicant.filter(applicant => applicant.type === "Kurs").sort((a,b) => b.applicantsTotal-a.applicantsTotal).slice(0,6);
const program = applicant.filter(applicant => applicant.type === "Program").sort((a,b) => b.applicantsTotal-a.applicantsTotal).slice(0,5);




let coursesApplicantTotal = courses.sort((a,b) => b.applicantsTotal-a.applicantsTotal)

let  programApplicantTotal =  program.sort((a,b) => b.applicantsTotal-a.applicantsTotal)




 
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
    type: 'pie',
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




