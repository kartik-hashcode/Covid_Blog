
fetch("https://covid-193.p.rapidapi.com/statistics", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "a4986df1fbmshc5caa97d5e2154fp1ff93cjsn114e91efa093",
        "x-rapidapi-host": "covid-193.p.rapidapi.com"
    }
}).then((response) => {
    //console.log("Inside first then")
    return response.json();
}).then((data) => {
    console.log("Inside second then")
    //console.log(data.response[0]);
    for (const key in data.response) {
        //console.log(data.response[key]);
        const tbody = document.getElementById("tabbody")
        str = `<tr>
                   <td>${data.response[key].country}</td>
                   <td>${data.response[key].cases.active}</td>
                   <td>${data.response[key].deaths.total}</td>
                   <td>${data.response[key].tests.total}</td>
               </tr>`
        tbody.innerHTML += str;
    }
})
function save(){
    if(localStorage.getItem("user")==null){
        let email=document.getElementById("exampleInputEmail1").Value;
        let name=document.getElementById("exampleInputPassword1").value;
        let review=document.getElementById("rating").value;
        let opinion=document.getElementById("flexCheckIndeterminate").value;
        useritem=[];
        useritem.push([email,name,review,opinion]);
        localStorage.setItem("user",JSON.stringify(useritem))
    }
    else{
        let email=document.getElementById("exampleInputEmail1").Value;
        let name=document.getElementById("exampleInputPassword1").value;
        let review=document.getElementById("rating").value;
        let opinion=document.getElementById("flexCheckIndeterminate").value;
        userreview=localStorage.getItem("user");
        useritem=JSON.parse(userreview);
        useritem.push([email,name,review,opinion])
        localStorage.setItem("user",JSON.stringify(useritem))

    }
    document.getElementById("hbody").style.display="block"
    Update()
}
function Update(){
    if(localStorage.getItem("user")==null){
        useritem=[];
        localStorage.setItem("user",JSON.stringify(useritem))
    }
    else{
        userreview=localStorage.getItem("user");
        useritem=JSON.parse(userreview);
        localStorage.setItem("user",JSON.stringify(useritem))

    }
    stirig=``
    let headbody=document.getElementById("hbody");
    useritem.forEach(element => {
        stirig=`<span class="badge badge-info">${element[1]}</span> Your rating: <span class="badge badge-info"> ${element[2]}</span>
        `
    });
    headbody.innerHTML+=stirig;
}