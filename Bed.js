 fetch("https://api.covidbedsindia.in/v1/storages/608982f703eef3de2bd05a72/Bengaluru")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            Search_hospital(data)
        });


function Search_hospital(data) {
    let str;
    const tbody = document.getElementById("tabbody");
    data.forEach(element => {
        //console.log(element)
        str = `
        <tr>
           <td>${element.HOSPITAL_NAME}</td>
           <td>${element.NET_AVAILABLE_ICU}</td>
           <td>${element.NET_AVAILABLE_ICU_WITH_VENTILATOR}</td>
           <td>${element.LAST_SYNCED}</td>
       </tr>`
        tbody.innerHTML += str
    });
}
