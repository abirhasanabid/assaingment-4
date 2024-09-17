function calculateTax(income, expenses) {
    if ((income < 0 || expenses < 0) || expenses > income) {
        return 'Invalid Input'
    }
    const tax = (income - expenses) * 20 / 100;
    return tax;

}
