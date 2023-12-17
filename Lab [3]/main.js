var arr = 
[{
        id: 1,
        name: "Ahmed Hossam",
        phone: "01234567890",
        email: "ahmed@gmail.com",
        dateOfBirth: '2 / 1 / 2000',
        track: 'open source',
        gender: "male",
        hobbies: ['football' , "TV Show"],
        address : {
            location: "Cairo",
            Country: "Egypt",
            zipCode: 1220
        }
        
    },
    {
        id: 2,
        name: "Omar Sayed",
        phone: "0112345678",
        email: "omar@gmail.com",
        dateOfBirth: '7/11/1998',
        track: 'open source',
        gender: "male",
        hobbies: ['football' , "TV Show"],
        address : {
            location: "Cairo",
            Country: "Egypt",
            zipCode: 1220
        }
    },
    {
        id: 3,
        name: "Nouran Tarek",
        phone: "0112345678",
        email: "nour@gmail.com",
        dateOfBirth: '10/6/2001',
        track: 'open source',
        gender: "female",
        hobbies: ['football' , "TV Show"],
        address : {
            location: "Cairo",
            Country: "Egypt",
            zipCode: 1220
        }
    },
    
    {
        id: 4,
        name: "Seif Osama",
        phone: "0102345678",
        email: "seif@gmail.com",
        dateOfBirth: '11/4/1999',
        track: 'open source',
        gender: "male",
        hobbies: ['football' , "TV Show"],
        address : {
            location: "Cairo",
            Country: "Egypt",
            zipCode: 1220
        }
    },



];

arr.forEach((el) => {
    console.log(`Name :  ${el.name}`);
    console.log(`Email : ${el.email}`);
    console.log(`Phone : ${el.phone}`);
    console.log(`Address : ${el.address.location}`);

    console.log(`
    
    --------------------
    
    `)
})