function f1()
{
    setTimeout(()=> { 
    } ,1000);
    return 1;
}

function f2(callback)
{
    
    setTimeout(()=> {
        
        let x = callback();      // f3(f2(f1))
        console.log(x); 
        
    } ,1000);
    return 2;
}

function f3(callback)
{
    setTimeout(()=> {
        console.log("Function 3 start") 
        let y = callback(); 
        console.log(y); 
    } ,1000);
    return "success";
}

// old callbacks
//f2(f1);

let msg = f3(function () {
    console.log("Before function 2");
    let x = f2(()=>
    {
        console.log("Before function 1");
        let y = f1();
        console.log("y = " + y);
    });
    console.log("x = " + x);
});



// async & await

// function f1()
// {
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=> {
//             resolve(1);
//         } ,1000);
//     })

// }

// function f2()
// {
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=> {
//             resolve(2);
//         } ,1000);
//     })

// }

// function f3()
// {
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=> {
//             resolve("success");
//         } ,1000);
//     })
// }

// // using promises 
// f1().then((res1)=>
// {
//     console.log(res1);

//     f2().then((res2)=>
//     {
//         console.log(res2);

//         f3().then((res3)=>
//         {
//            console.log(res3);
//         })
//     })
// })

// async function callAll()
// {
//     let x = await f1();
//     let y = await f2();
//     console.log(`x = ${x} y = ${y}`);

//     let msg = await f3();
//     console.log(msg);
// }

// callAll();