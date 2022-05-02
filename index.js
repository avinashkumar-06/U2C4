// write js code here corresponding to index.html
// You should add submit event on the form

var matchDataArr= JSON.parse(localStorage.getItem("schedule")) || []

document.querySelector("#masaiForm").addEventListener("submit",function(){
    event.preventDefault();
    var obj={

        matchNumber:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        date:masaiForm.date.value,
        venue:masaiForm.venue.value
    }

    matchDataArr.push(obj)
    localStorage.setItem("schedule",JSON.stringify(matchDataArr))

})