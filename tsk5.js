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
