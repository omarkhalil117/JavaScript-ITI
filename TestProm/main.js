let selectedCountry = document.getElementById("countries");
var country;
selectedCountry.addEventListener("change" , ()=>{
    country = selectedCountry.value;
    console.log(country);
})

let result;

async function getData ()
{
    let prom = await fetch(`https://restcountries.com/v3.1/all`)
    let data = await prom.json()
    result = data ;
    return data ;
}

async function getCountry (par)
{
    let prom = await fetch(`https://restcountries.com/v3.1/alpha/${par}`)
    let data = await prom.json()
    return data ;
}


async function myfun()
{
    let countries = await getData();
    countries.forEach(element => {
        console.log(element.name.common)
        selectedCountry.innerHTML += `
        <option value="${element.cca2}">${element.name.common}</option>
        `
    })
}

myfun()

let countries = document.getElementById("countries")
let content = document.getElementById("content")

let currentdata;
countries.addEventListener("change" , async ()=>{    
     let res = await getCountry(countries.value);
     console.log(res);
     currentdata = res;
     content.innerHTML += `<h1>${res[0].name.common}</h1>`
     content.innerHTML += `<h1>${res[0].flags.png}</h1>`
     content.innerHTML += `<h1>${res[0].unMember}</h1>`
})



