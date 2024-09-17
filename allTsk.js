function calculateTax(income, expenses) {
    if ((income < 0 || expenses < 0) || expenses > income) {
        return 'Invalid Input'
    }
    const tax = (income - expenses) * 20 / 100;
    return tax;

}


function sendNotification(email) {
    if (typeof email !== 'string' || !email.includes('@')) {
        return 'Invalid Email';
    }
    let indexNumber = email.indexOf('@');
    const userName = email.slice(0, indexNumber);
    const domainName = email.slice(indexNumber + 1);

    const returnResult = userName.concat(' ','sent you an email from').concat(' ',domainName);

    return returnResult;
}


function checkDigitsInName(names){
    if(typeof names === 'names'){
        return 'Invalid Input';
    }
    for(const name of names){
        if(isNaN(name)=== false){
            return true;
        }
    }
    return false;
}



function calculateFinalScore(object) {
    if (typeof object !== 'object') {
        return 'Invalid Input';
    }
    const testScore = object.testScore;
    const schoolGrade = object.schoolGrade;
    const isFFamily = object.isFFamily;

    let result = testScore + schoolGrade;
    if (isFFamily) {
        result += 20;
    }
    return result >= 80;
}



function waitingTime(waitingTimes, serialNumber) {
    if (Array.isArray(waitingTimes) === false || typeof serialNumber !== 'number') {
        return 'Invalid Input';
    }
    let sum = 0;
    const len = waitingTimes.length;
    for (const time of waitingTimes) {
        sum += time;
    }
    const avgTime = Math.round(sum / len);
    const remainingPersones = serialNumber - (len + 1);
    return remainingPersones * avgTime;
}
