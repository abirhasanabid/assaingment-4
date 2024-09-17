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

