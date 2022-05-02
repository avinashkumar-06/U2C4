// write js code here corresponding to matches.html

var matchData=JSON.parse(localStorage.getItem("schedule"))
var favArr= JSON.parse(localStorage.getItem("favourites"))||[];
display(matchData)

function display(data){

    document.querySelector("tbody").innerHTML=""
    data.map(function(elem){

        var trow=document.createElement("tr")

        var td1=document.createElement("td")
        td1.innerText=elem.matchNumber

        var td2=document.createElement("td")
        td2.textContent=elem.teamA

        var td3=document.createElement("td")
        td3.textContent=elem.teamB

        var td4=document.createElement("td")
        td4.textContent=elem.date

        var td5=document.createElement("td")
        td5.textContent=elem.venue


        var td6=document.createElement("td")
        td6.textContent="Add as Favourites"
        td6.style.color="green"
        td6.style.cursor="pointer"


        td6.addEventListener("click",function(){

            favArr.push(elem)
            localStorage.setItem("favourites",JSON.stringify(favArr))

        })





        trow.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(trow)

    })

}

document.querySelector("#filterVenue").addEventListener("change",filterByVenue)

function filterByVenue(){

    var selected=document.querySelector("#filterVenue").value
    console.log(selected)
    if(selected == "none" )
        display(matchData)
    else{

    var filtered=matchData.filter(function(elem){

         return elem.venue==selected

    })

   display(filtered)
    }
}