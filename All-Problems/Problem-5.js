
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

console.log(monthlySavings( 100, [ 900 , 2700 , 3400] ))