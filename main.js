
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]


const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

// Checks if array is valid or not
const validOrNot = array => {
    //Maths tests - luhn algorithm
    for (let z = 0; z < array.length; z++) {
        let i = array[z].length - 1;
        let sum = 0;
        while (i >= 0) {
            sum = sum + array[z][i];
            i = i - 2;
        }
        let j = array[z].length -2;
        while (j >= 0) {
            let x =0;
            x = array[z][j] *2;
            if (x > 9) {
                x = x - 9;
            } 
            sum = sum + x;
            j = j - 2;
        }
        //When math results that card number is valid, then number is pushed to validCards array, if not it goes to invalidCards array
        if (sum % 10 === 0) {
            validCards.push(array[z]);
        } else {
            invalidCards.push(array[z]);
        }
    }
}

// Gets companies that have made invalid cards, pushes its names to companies array
const getInvalidCardsCompanies = invalCards => {
    for (let i = 0; i < invalCards.length; i++) {
        if ( invalCards[i][0] === 3) {
            let companyName = 'American Express';
            if (companies.includes(companyName)) {

            } else {
                companies.push(companyName);
            }
        }
        if ( invalCards[i][0] === 4) {
            let companyName = 'Visa';
            if (companies.includes(companyName)) {

            } else {
                companies.push(companyName);
            }
        }
        if ( invalCards[i][0] === 5) {
            let companyName = 'Master Card';
            if (companies.includes(companyName)) {

            } else {
                companies.push(companyName);
            }
        }
        if ( invalCards[i][0] === 6) {
            let companyName = 'Discover';
            if (companies.includes(companyName)) {

            } else {
                companies.push(companyName);
            }
        }
    }
}

const validCards = [];
const invalidCards = [];
const companies = [];

validOrNot(batch);
getInvalidCardsCompanies(invalidCards);
console.log(validCards);
console.log(invalidCards);
console.log(companies);
console.log(invalidCards)








