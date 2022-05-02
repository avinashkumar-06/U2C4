// write js code here corresponding to favourites.html


var favouritesData=JSON.parse(localStorage.getItem("favourites"))

display(favouritesData)


function display(data){

    document.querySelector("tbody").innerHTML=""
    data.map(function(elem,index){

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
        td6.textContent="Delete"
        td6.style.color="red"
        td6.style.cursor="pointer"

        td6.addEventListener("click",function(){

           deleteFun(index);

        })


    

      

        trow.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(trow)

    })

}

function deleteFun(index){

    favouritesData.splice(index,1)
    localStorage.setItem("favourites",JSON.stringify(favouritesData))
    display(favouritesData)   
}