
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


