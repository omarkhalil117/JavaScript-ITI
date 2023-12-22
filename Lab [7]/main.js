function parent()
{
    let coins = 5 ;

    return function child()
    {
        coins -= 1 ;
        console.log(coins);
    }
}

let ch1 = parent() ;
let ch2 = parent() ;
let ch3 = parent() ;

// every child has his own coins.

console.log("Child [1]");
ch1();  // 4
ch1();  // 3
ch1(); // 2

console.log("Child [2]");  
ch2();  // 4
ch2();  // 3
ch2();  // 2

console.log("Child [3]");
ch3(); // 4


