const fetch = require('cross-fetch');

const api_call = async () => {
    const res = await fetch('http://api.nobelprize.org/v1/prize.json');
    const data = await res.json();

    const output = data.prizes.filter(prize => (prize.year)>1999 && (prize.year)<2020 && prize.category == "chemistry")
    console.log(output)
    output.forEach(data=> {
        data.laureates.forEach(laureate => {
            console.log(`Name: ${laureate.firstname} ${laureate.surname}`)
        })
    })
    
    
        
}

api_call();