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
