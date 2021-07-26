fetch("https://api.covid19india.org/data.json")
  .then((response) => {
    console.log("Inside first then");
    return response.json();
  })
  .then((data) => {
    let str;
    const tbody = document.getElementById("tabbody");
    console.log("Inside second then");
    //console.log(data.statewise);
    data.statewise.forEach((element) => {
      str = `<tr>
        <td>${element.state}</td>
        <td>${element.confirmed}</td>
        <td>${element.active}</td>
        <td>${element.recovered}</td>
        <td>${element.deaths}</td>
        <td>${element.lastupdatedtime}</td>
    </tr>`;
      tbody.innerHTML += str;
    });
  });
fetch(
  "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-vaccine-news/0",
  {
    method: "GET",
    headers: {
      "x-rapidapi-key": "a4986df1fbmshc5caa97d5e2154fp1ff93cjsn114e91efa093",
      "x-rapidapi-host":
        "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
    },
  }
)
  .then((response) => {
    //console.log("Inside first then")
    return response.json();
  })
  .then((data) => {
    let str;
    const parent = document.getElementById("parentid");
    //console.log(data.news)
    data.news.forEach((element, index) => {
      if (index == 0) {
        element.urlToImage = "covid_news_pic_1.jpg";
      }
      if (index == 1) {
        element.urlToImage = "covid_news_pic_2.jpg";
      }
      str = `<div class="card" style="width: 80%;">
            <img src=${element.urlToImage} id="" class="card-img-top problem" style="align-self:center" alt="Image not found">
            <div class="card-body">
              <h5 class="card-title">Head Line: ${element.title}</h5>
              <h5 class="card-title">Date: ${element.pubDate}</h5>
              <h5 class="card-title">Source: ${element.reference}</h5>
              <p class="card-text">${element.content}</p>
              <a href=${element.link} class="card-link">readmore</a>
            </div>
          </div>
       </div>
            `;
      parent.innerHTML += str;
    });
  });
let obj = [
  {
    Name: "Dhanush Hospital ",
    District: "Bagalkote",
    phone_no: 8354226533,
  },
  {
    Name: "M S Kerudi Hospital And Research Centre Bagalkot",
    District: "Bagalkote",
    phone_no: 9980393733,
  },
  {
    Name: "Shanti Hospital Bagalkot",
    District: "Bagalkote",
    phone_no: 7829990797,
  },
  {
    Name: "Baragi Hospital Bagalkot",
    District: "Bagalkote",
    phone_no: 8354225335,
  },
  {
    Name: "Venkatesh Hospital",
    District: "Bagalkote",
    phone_no: 8350271236,
  },
  {
    Name: "Ashirwad Hospital",
    District: "Bagalkote",
    phone_no: 9008663093,
  },
  {
    Name: "Dr Katti Hospita",
    District: "Bagalkote",
    phone_no: 9845378505,
  },
  {
    Name: "Arogyadham Hospital",
    District: "Bagalkote",
    phone_no: 8350270839,
  },
  {
    Name: "Citi Hospital",
    District: "Ballari",
    phone_no: 8394231713,
  },
  {
    Name: "Jindal Sanjeevani MultiSpeciality Hospital ",
    District: "Ballari",
    phone_no: 8395242222,
  },
  {
    Name: "Arogyadhama Hospital unit of Shivanagouda Hosp Pvt",
    District: "Ballari",
    phone_no: 8123690929,
  },
  {
    Name: "Belgaum Childrens Hospital Pvt Ltd",
    District: "Belagavi",
    phone_no: 8312425556,
  },
  {
    Name: "Yash Hospital Critical Care Centre",
    District: "Belagavi",
    phone_no: 8314215333,
  },
  {
    Name: "Saideep Eye Hospital ",
    District: "Belagavi",
    phone_no: 9945447572,
  },
  {
    Name: "Karnatak Health Institute",
    District: "Belagavi",
    phone_no: 8332286231,
  },
  {
    Name: "Ajit Nursing Home",
    District: "Belagavi",
    phone_no: 8331225603,
  },
  {
    Name: "Shri Sai Hospital",
    District: "Belagavi",
    phone_no: 8312496444,
  },
  {
    Name: "Dr B B Ghodageri",
    District: "Belagavi",
    phone_no: 8332226750,
  },
  {
    Name: "M S Ramaiah Narayana Heart Centre",
    District: "Bengaluru",
    phone_no: 9980021380,
  },
  {
    Name: "Rajarajeswari Medicalcollege And Hospital ",
    District: "Bengaluru",
    phone_no: 8028437888,
  },
  {
    Name: "Bangalore Cancer Centre Private Limited",
    District: "Bengaluru",
    phone_no: 8028536767,
  },
  {
    Name: "Leena Multispeciality Hospital",
    District: "Bengaluru",
    phone_no: 9535000622,
  },
  {
    Name: "Manasa Hospital",
    District: "Bengaluru",
    phone_no: 8027622162,
  },
  {
    Name: "Tathagat Heart Care Centre Llp",
    District: "Bengaluru",
    phone_no: 8022357777,
  },
  {
    Name: "Raksha Multispeciality Hospital",
    District: "Bengaluru",
    phone_no: 8152976976,
  },
  {
    Name: "Ramaiah Harsha Hospital",
    District: "Bengaluru",
    phone_no: 9886809595,
  },
  {
    Name: "New Varalakshmi Hospital",
    District: "Bengaluru",
    phone_no: 9845390002,
  },
  {
    Name: "Santosh Hospital",
    District: "Bengaluru",
    phone_no: 9845306703,
  },
  {
    Name: "Bms Hospital",
    District: "Bengaluru",
    phone_no: 9900013238,
  },
  {
    Name: "Akash Medical College",
    District: "Bengaluru",
    phone_no: 8071159900,
  },
  {
    Name: "East Point Medical College",
    District: "Bengaluru",
    phone_no: 8028472999,
  },
  {
    Name: "M.S. Ramaiah Medical College",
    District: "Bengaluru",
    phone_no: 8023608888,
  },
  {
    Name: "Narayana Hrudayalaya Private Limited.",
    District: "Bengaluru",
    phone_no: 8022152215,
  },
  {
    Name: "Sai Preet Bhalke Vydehi Hospital",
    District: "Bidar",
    phone_no: 8482226665,
  },
  {
    Name: "Megur Eye Care Center",
    District: "Bidar",
    phone_no: 8482226642,
  },
  {
    Name: "Shree Hospital",
    District: "Bidar",
    phone_no: 8482240064,
  },
  {
    Name: "Gudage Hospital",
    District: "Bidar",
    phone_no: 9880966842,
  },
  {
    Name: "Arogya Hospital",
    District: "Bidar",
    phone_no: 8482220667,
  },
  {
    Name: "Prayavi Hospital",
    District: "Bidar",
    phone_no: 9341666661,
  },
  {
    Name: "Guru Nanak Hospital",
    District: "Bidar",
    phone_no: 9448470015,
  },
  {
    Name: "Vasu Hospital",
    District: "Bidar",
    phone_no: 8792932111,
  },
  {
    Name: "Shree Gajanan Hospital",
    District: "Bidar",
    phone_no: 8482226396,
  },
  {
    Name: "Shree Gajanan Hospital",
    District: "Bidar",
    phone_no: 8482226396,
  },
  {
    Name: "Jss Hosital Chamarajanagr",
    District: "Chamarajanagara",
    phone_no: 8226222209,
  },
  {
    Name: "R K HOSPITAL",
    District: "Chamarajanagara",
    phone_no: 8226222122,
  },
  {
    Name: "BASAVARAJENDRA HOSPITAL",
    District: "Chamarajanagara",
    phone_no: 8226297485,
  },
  {
    Name: "Jeevan Hospital",
    District: "Chamarajanagara",
    phone_no: 8156271444,
  },
  {
    Name: "Deccan Hospital",
    District: "Chamarajanagara",
    phone_no: 9663598888,
  },
  {
    Name: "Prasad Hospital",
    District: "Chamarajanagara",
    phone_no: 8155284195,
  },
  {
    Name: "Someshwara Hospital",
    District: "Chamarajanagara",
    phone_no: 8155286156,
  },
  {
    Name: "Prashamani Hospital",
    District: "Chamarajanagara",
    phone_no: 8265221996,
  },
  {
    Name: "Akshya Global Hospital",
    District: "Chitradurga",
    phone_no: 9845200810,
  },
  {
    Name: "Basaveshwara Hospital",
    District: "Chitradurga",
    phone_no: 8194222054,
  },
  {
    Name: "Basappa Multi Specialty Hospital",
    District: "Chitradurga",
    phone_no: 9880820999,
  },
  {
    Name: "Indiana Hospital And Heart Institute Ltd ",
    District: "Dakshina Kannada",
    phone_no: 8242880880,
  },
  {
    Name: "Unity Hospital Unit Of Uchs",
    District: "Dakshina Kannada",
    phone_no: 8244245555,
  },
  {
    Name: "Omega Hospital Pvt Ltd Mangalore",
    District: "Dakshina Kannada",
    phone_no: 8242430000,
  },
  {
    Name: "Mangalore Institute Of Oncology",
    District: "Dakshina Kannada",
    phone_no: 8244249999,
  },
  {
    Name: "Pragathi Speciality Hospital",
    District: "Dakshina Kannada",
    phone_no: 8251231026,
  },
  {
    Name: "Adarsha Hospital Puttur",
    District: "Dakshina Kannada",
    phone_no: 8251235065,
  },
  {
    Name: "Somayaji Hospital",
    District: "Dakshina Kannada",
    phone_no: 8255232268,
  },
  {
    Name: "Sukshema Hospital",
    District: "Davanagere",
    phone_no: 8192222310,
  },
  {
    Name: "Suchethana Hospital",
    District: "Davanagere",
    phone_no: 9742733116,
  },
  {
    Name: "Spandana Urology Centre",
    District: "Davanagere",
    phone_no: 8192233023,
  },
  {
    Name: "Unity Health Centre Davanagere",
    District: "Davanagere",
    phone_no: 8192233573,
  },
  {
    Name: "Apoorva Multispeciality Hospital",
    District: "Davanagere",
    phone_no: 9986151291,
  },
  {
    Name: "City Central Hospital Pvt Ltd",
    District: "Davanagere",
    phone_no: 8192253717,
  },
  {
    Name: "Sanjeevini Hospital",
    District: "Davanagere",
    phone_no: 8192222274,
  },
  {
    Name: "Ashraya Hospital",
    District: "Davanagere",
    phone_no: 8192224679,
  },
  {
    Name: "Hcg Nmr Curie Centre Of Oncology",
    District: "Dharwad",
    phone_no: 8364252940,
  },
  {
    Name: "Sdm Narayana Hrudayalaya",
    District: "Dharwad",
    phone_no: 9901597597,
  },
  {
    Name: "Fortis Suchirayu Hospital",
    District: "Dharwad",
    phone_no: 8362239000,
  },
  {
    Name: "Ashoka Hospital",
    District: "Dharwad",
    phone_no: 8362373778,
  },
  {
    Name: "Jayapriya Hospital",
    District: "Dharwad",
    phone_no: 9886526926,
  },
  {
    Name: "Mahatma Gandhi MultiSpecility Hospital",
    District: "Gadag",
    phone_no: 9008373937,
  },
  {
    Name: "Dr N B Patil Hospital",
    District: "Gadag",
    phone_no: 8372237778,
  },
  {
    Name: "Rajiv Gandhi Education Societys Hospital",
    District: "Gadag",
    phone_no: 8381267452,
  },
  {
    Name: "C S I Basel Mission Hospital ",
    District: "Gadag",
    phone_no: 9900093577,
  },
  {
    Name: "Ashraya Hospital",
    District: "Gadag",
    phone_no: 8372277009,
  },
  {
    Name: "Mangala Hospital",
    District: "Hassan",
    phone_no: 8172267236,
  },
  {
    Name: "Ssm Hospital",
    District: "Hassan",
    phone_no: 8172234412,
  },
  {
    Name: "Nagesh Hospital",
    District: "Hassan",
    phone_no: 8176252008,
  },
  {
    Name: "Hemavathi Hospital",
    District: "Hassan",
    phone_no: 8172261204,
  },
  {
    Name: "Janapriya Hospital",
    District: "Hassan",
    phone_no: 94482044679,
  },
  {
    Name: "Sri Sooryanarayana Hospital",
    District: "Haveri",
    phone_no: 9535404760,
  },
  {
    Name: "J R Nursing Home",
    District: "Haveri",
    phone_no: 8378255501,
  },
  {
    Name: "Shakuntala Hospital",
    District: "Haveri",
    phone_no: 9900756562,
  },
  {
    Name: "Shivajyoti Institute of Child Health",
    District: "Haveri",
    phone_no: 9448109997,
  },
  {
    Name: "Kelagar Medical Center",
    District: "Haveri",
    phone_no: 9844184180,
  },
  {
    Name: "Sidrameshwar Eye Clinic",
    District: "Kalaburagi",
    phone_no: 8472223773,
  },
  {
    Name: "Raj Laxmi Kidney Hospital ",
    District: "Kalaburagi",
    phone_no: 8472235704,
  },
  {
    Name: "Basaveshwar General Hospital",
    District: "Kalaburagi",
    phone_no: 8472247955,
  },
  {
    Name: "United Hospital",
    District: "Kalaburagi",
    phone_no: 8472225006,
  },
  {
    Name: "Kamareddy Hospital",
    District: "Kalaburagi",
    phone_no: 8472256163,
  },
  {
    Name: "Shree Mallikarjuna Multi Speciality Hospital",
    District: "Koppal",
    phone_no: 9008181837,
  },
  {
    Name: "Tejeswini Childran Hospital",
    District: "Koppal",
    phone_no: 9448023967,
  },
  {
    Name: "Yashodha hospital",
    District: "Koppal",
    phone_no: 9480089042,
  },
  {
    Name: "Amar Hospital Child Care Clinic",
    District: "Koppal",
    phone_no: 9482567678,
  },
  {
    Name: "Ks Health Care",
    District: "Koppal",
    phone_no: 9008166335,
  },
  {
    Name: "Archana Hospital",
    District: "Mandya",
    phone_no: 8232224092,
  },
  {
    Name: "Brindavan Hospital",
    District: "Mysore",
    phone_no: 8214000782,
  },
  {
    Name: "Hosamani Hospital ",
    District: "Raichur",
    phone_no: 9663556077,
  },
  {
    Name: "Belaku Eye Hospital",
    District: "Ramanagara",
    phone_no: 8232400502,
  },
  {
    Name: "Malnad Institute Of Oncology",
    District: "Shivmogga",
    phone_no: 8182246800,
  },
  {
    Name: "Tumkur Speciality Hospital",
    District: "Thmkur",
    phone_no: 9844777202,
  },
  {
    Name: "Mahesh Hospital ",
    District: "Udupi",
    phone_no: 8202562656,
  },
  {
    Name: "Ramleela Hospital",
    District: "Uttarkannada",
    phone_no: 8386222232,
  },
  {
    Name: "Sanjeevini Superspeciality Hospital",
    District: "Vijayapura",
    phone_no: 8352225950,
  },
];
function Retrive(array) {
  let htmlstr=``;
  let tablebody = document.getElementById("tabbody2");
  array.forEach((element, index) => {
    htmlstr += `<tr>
            <td>${index + 1}</td>
            <td>${element.Name}</td>
            <td>${element.District}</td> 
            <td>${element.phone_no}</td>
        </tr>`;
    tablebody.innerHTML = htmlstr;
  });
}
Retrive(obj);
document.getElementById('searchquery').addEventListener('change',()=>{
  const uservalue=document.getElementById('searchquery').value
  console.log(uservalue)
   let filteredarry = obj.filter((hospitals) => {
        //console.log(hospitals.District)
      if (hospitals.District.match(uservalue)) {
        return true;
      } else {
        return false;
      }
    });
    //console.log(filteredarry)
    Retrive(filteredarry)
})



 

