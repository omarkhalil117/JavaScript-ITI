// country Info section
let countryInfo = document.getElementById("countryInfo");

// facts section 
let facts = document.querySelector(".some-facts");

// maps section
let mapForm = document.querySelector(".map-form");

// news section 
let cityNews = document.querySelector(".city-news");

// first div variables
let flag = document.getElementById("flag");
let Coat = document.getElementById("Coat");
let un = document.getElementById("un");
let independant = document.getElementById("independant");
let unCheckTrue = document.getElementsByClassName('fa-check')[0];
let unCheckFalse = document.getElementsByClassName('fa-times')[1];
let independentCheckTrue = document.getElementsByClassName('fa-check')[1];
let independentCheckFalse = document.getElementsByClassName('fa-times')[2];


// second div variables
let population = document.getElementById("population").getElementsByTagName('strong')[0];
let region = document.getElementById("region").getElementsByTagName('strong')[0];
let weekStart = document.getElementById("weekStart").getElementsByTagName('strong')[0];
let timezone = document.getElementById("timezone").getElementsByTagName('strong')[0];
let capital = document.getElementById("capital").getElementsByTagName('strong')[0];


// newsContainer
let countryNews = document.getElementById("countryNews");

// countries list
let countriess = document.getElementById("countries");

// Initialize (country info , facts , mapform)  sections
countryInfo.style.display = "none";
facts.style.display = "none";
mapForm.style.display = "none";
cityNews.style.display = "none";


// fill select tag with options
fillSelectTag();


// add event to change the divs data 
countriess.addEventListener("change" , async function(){
    
    // fetch selected country data
    let countryData = await getCountry(countriess.value);

    // get country code to fetch news of this country
    let countryCode = countryData[0].cca2;

    // store old population
    let oldPop = countryData[0].population;
 
    // create function to convert old number to comma separated number
    function numberWithCommas(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    //if it is Isr
    if (countryCode == "IL")
    {
        // replace IS flag with Palestine flag
        flag.src = "https://flagcdn.com/ps.svg";
        Coat.src = "./images/Ezz-Eldin.webp";
        independentCheckFalse.style.display="none";
        unCheckTrue.style.display="none";
        unCheckFalse.style.display="inline-block";
    }
    else
    {
    // change first div data 
    flag.src = countryData[0].flags.png;
    Coat.src = countryData[0].coatOfArms.png;

    // check if country is independent and if they are members in united nations
    countryData[0].unMember ? unCheckFalse.style.display="none" : unCheckTrue.style.display="none";
    countryData[0].independent ? independentCheckFalse.style.display="none" : independentCheckTrue.style.display="none" ;
    }
   
    // show country info
    countryInfo.style.display = "block";


    // change second div data 
    population.innerHTML = `${numberWithCommas(oldPop)}`;  // display the new number
    region.innerHTML = `${countryData[0].region}`;
    timezone.innerHTML = `${countryData[0].timezones}`;
    capital.innerHTML = `${countryData[0].capital}`;
    weekStart.innerHTML = `${countryData[0].startOfWeek}`;
    
    // show facts 
    facts.style.display = "block";


    // update map
    let map = document.getElementById("map");
    let mapBtn = document.getElementById("mapBtn");
    // needs embed because it's iframe
    map.src = `https://www.google.com/maps?q=${countryData[0].name.common}&hl=en&z=6&output=embed`;
    // doesn't need embed
    mapBtn.href = `https://www.google.com/maps?q=${countryData[0].name.common}&hl=en&z=6`;

    // show map form 
    mapForm.style.display = "block";


    // get country news
    let news = await getNews(countryCode);

    // reset news div
    countryNews.innerHTML = "";

    // add first 4 news 
    news.news.slice(0,4).forEach( (el)=>{
        let fetchedDate = el.publish_date;
        let date = new Date(fetchedDate);
        let formattedDat = date.toLocaleDateString("en-US" ,{
            day: "numeric",
            month: "long",
            year: "numeric"
          });
        
        countryNews.innerHTML += `
        <div class="col-md-3  col-sm-6">
        <div class="news-box">
          <div class="new-thumb"> <img src=${el.image} alt=""> </div>
          <div class="new-txt">
            <ul class="news-meta">
              <li>${formattedDat}</li>
            </ul>
            <h6><a href="${el.url}">${el.title.split(" ").splice(0,10).join(" ")}</a></h6>
            <p>${el.text.split(" ").splice(0,30).join(" ")}</p>
          </div>
          <div class="news-box-f"> <img src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png" alt=""> ${el.authors[0]} <a href="index.html#"><i class="fas fa-arrow-right"></i></a> </div>
        </div>
      </div>
        `;

      // show news
      cityNews.style.display = "none";

    });


});


// email form objects
let form = document.querySelector('#emailFrom');
let sendBtn = document.querySelector('#sendBtn');
let nameField = document.querySelector('#name');
let emailField = document.querySelector('#email');
let messageField = document.querySelector('#message');

// Emailjs variables
const publicKey = "gnKGt5-kICFhB0Ckw";
const serviceId = "service_kiisboy";
const templateId = "template_7xxv3fq";

// Initialize emailjs using publickey
emailjs.init(publicKey);

// sending message
form.addEventListener( 'submit', (e)=>{
    //prevent default behaviour of submitting
    e.preventDefault();

    // fetch email content
    const mail = {
    name:nameField.value,
    email:emailField.value,
    message:messageField.value
    };
   
   // sending email
   emailjs.send(serviceId,templateId,mail)
   .then(()=>{
    sendBtn.value="Message sent successfully !";
    nameField.value="";
    emailField.value="";
    messageField.value="";
    
    // delay before returning to original state
    setTimeout(()=> sendBtn.value =  "SEND MESSAGE" , 2000)
    },
    (err)=>{
        console.log(err);
        sendBtn.value="Error !!";
    });

})



