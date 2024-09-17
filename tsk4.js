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
