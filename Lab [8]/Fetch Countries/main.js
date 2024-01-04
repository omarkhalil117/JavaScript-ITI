async function getData ()
{
    let prom = await fetch("https://restcountries.com/v3.1/all")
    let data = await prom.json()
    return data ;
}

async function myfun()
{
    let countries = await getData();
    countries.forEach(element => {
        console.log(element.name.common)
    })
    //console.log(countries[0].name.common);
}

myfun();

// async function getData ()
// {
//     let prom = await fetch("https://api.worldnewsapi.com/search-news?api-key=21afb76cbe5e4cb8b1457313807fd24c&text=tesla")
//     let data = await prom.json()
//     return data ;
// }

// async function myfun()
// {
//     let countries = await getData();
//     console.log(countries);
//     countries.news.forEach(element => {
//         console.log(element)
//     });
// }

// console.log("Hello");

// myfun();
// https://api.worldnewsapi.com/search-news?api-key=21afb76cbe5e4cb8b1457313807fd24c&text=tesla.