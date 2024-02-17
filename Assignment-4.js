// Problem-1
function calculateMoney(ticketSale) {
    if( typeof ticketSale !== 'number'){
        return 'Invalid Number. You should enter a valid Number.'
    }
    else if (ticketSale < 0){
        return 'Invalid Number.'
    }
    else{
        const perTicketPrice = 120;

        const janitorCost = 500;
        const staffTotalCost = 50 * 8;
        const totalCost = janitorCost + staffTotalCost;
    
        const totalTicketIncome = perTicketPrice * ticketSale;
    
        const residualIncome = totalTicketIncome - totalCost;
    
        return residualIncome;
    }
}

// Problem-2
function checkName(name){
    if (typeof name !== 'string'){
        return 'invalid'
    }
    else{
        const lowerCaseName = name.trim().toLowerCase();
        let lastLatter = '';
        for ( latter of lowerCaseName){
            lastLatter = latter;
        }
    
        if( 'a' === lastLatter || 'y' === lastLatter || 'i' === lastLatter || 'e' === lastLatter || 'o' === lastLatter || 'u' === lastLatter || 'w' === lastLatter){
            return 'Good Name'
        }
        else{
            return 'Bad Name'
        }
    }  
}

// Problem-3
function deleteInvalids(array){
    if ( !Array.isArray(array) ){
        return "Invalid Array"
    }
    else{
        let virusRemovedArray =[];
        for (number of array){
            if ( typeof number === 'number' && (number <= 0 || number > 0) ){
                virusRemovedArray.push(number);
            }
        }
    
        return virusRemovedArray;
    }
}

// Problem-4
function password(obj) {
    if (!obj.hasOwnProperty("birthYear")) {
        return "invalid"
    }
    else {

        const lengthOfBirthYear = obj.birthYear;
        const forLength = lengthOfBirthYear.toString()

        if (!obj.hasOwnProperty("name") || !obj.hasOwnProperty("birthYear") || !obj.hasOwnProperty("siteName")) {
            return "invalid"
        }
        else if (forLength.length < 4) {
            return "invalid"
        }
        else {
            const userName = obj.name;
            const userBirthYear = obj.birthYear;

            const visitedSiteName = obj.siteName;

            const firstLetter = visitedSiteName.charAt(0);
            const firstLetterCapitalize = firstLetter.toUpperCase();
            const remainingLetters = visitedSiteName.slice(1);
            const capitalizeName = firstLetterCapitalize + remainingLetters;

            const userPassword = `${capitalizeName}#${userName}@${userBirthYear}`

            return userPassword;
        }
    }

}

// Problem-5
function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
        return "invalid input"
    }
    else {
        let allPayment = [];
        for (payment of arr) {
            if (payment < 3000) {
                allPayment.push(payment);
            } else if (payment >= 3000) {
                const tax = payment * 0.2; // 20%
                const remainingPayment = payment - tax;
                allPayment.push(remainingPayment);
            }
        }

        let totalIncome = 0;
        for (income of allPayment) {
            totalIncome = totalIncome + income;
        }

        const savings = totalIncome - livingCost;
        if (savings < 0) {
            return "earn more";
        } else {
            return savings;
        }
    }
}



