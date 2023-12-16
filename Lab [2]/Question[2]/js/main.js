function startGame()
{
    while(ans != 0)
    {
    
    var ans=1;
    var Name = prompt("Hi , Say Your Name");
    
    if(Name == "" || Name == null)
    {
        alert("Please Start Again and Say your Name");
        break;
    }

    alert(`Hi , ${Name} Please Answer the following Questions`);
    
    var age = prompt("How old Are you ?");
    
    if (isNaN(Number(age)))
    {
        alert("Please Start Again and Say your Age");
        ans=0 ;
    }

    if (age < 18)
    {
        alert("Sorry you are child");
        ans=0 ;
    }
    else
    {
        alert("Ok Good Enough To Continue !")
        var choice = prompt("Reply by yes or No | do you think programming is good for you ?");
        
        if(choice == "yes")
        {
            alert(`${Name}, Sorry to say it | but you Have A mental issues 🙂`);
            ans=0;
        }
        else if(  choice.toLocaleLowerCase() == "no" )
        {
            alert("Mee too , thank you for telling us , I will give you somthing"); 

            var reply = prompt("reply by ( advise || info || thanks )");
        
                    if (reply == "advise")
                    {
                        alert(`${Name}, the secret of getting a head is getting started , so start now 👌`)
                    }
                    else if (reply == "info")
                    {
                        alert("The human heart beats about 100,000 times a day! That means your ticker will beat around 36,500,000 times in a year. Count them if you don't believe us! Yes, we'll wait. 🤷‍♂️");
                        ans=0;
                    }
                    else if (reply == "thanks")
                    {
                        alert(`Thank you ${Name}`)
                        ans=0;
                    }
                    else
                    {
                        alert("😒😒😒");
                        ans=0;
                    }
        }
        else
        {
        alert("I Said Reply by YES OR NO 😒 ");
        ans=0;    
        }
        
    }
    
    }
}
