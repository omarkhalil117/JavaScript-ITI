// get all countries data
async function getData ()
{
    let prom = await fetch("https://restcountries.com/v3.1/all");
    let data = await prom.json();
    return data ;
}

// get selected country data by cca2
async function getCountry (par)
{
    let prom = await fetch(`https://restcountries.com/v3.1/alpha/${par}`);
    let data = await prom.json();
    return data ;
}

// get news for certaion country
async function getNews(country)
{
    let res = await fetch(`https://api.worldnewsapi.com/search-news?api-key=21afb76cbe5e4cb8b1457313807fd24c&source-countries=${country}`);
    let data = await res.json();
    return data ;
}

// fill select tag using getData
async function fillSelectTag()
{
    let countries = await getData();
    let sortedCountries = [];

    // initialize sorted array with arrays of (common name , country code )
    countries.forEach(element =>{
        sortedCountries.push([element.name.common , element.cca2]);
    })

    // sort the array
    sortedCountries.sort();

    // fill selecttag with soreted elements
    sortedCountries.forEach(element => {
        countriess.innerHTML += `<option value="${element[1]}">${element[0]}</option>`;
    });
   
}