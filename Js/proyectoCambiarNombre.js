// Social Media Profile 

// 1. User information
const username = 'FuturoConT'
const fullName = 'David H'
const age = 25
const isStudent = true

// Addres 

const addres = {
    stree: 'Calle toledo',
    city: 'Medellin',
    state: 'ColombiaAnt', 
    zipCode: 123456
}

// 3. Hobbies

const hobbies = ['Codding', 'reading', 'Gamming']

// 4. Gerating personalized bio

const personalizedBio = `Hi, I'm ${fullName}.
I'm ${age} years old.
I live in ${addres.city}.
i love ${hobbies.join(', ')}.
`

console.log(personalizedBio)