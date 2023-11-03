function sum(){ //arguments :10,20
    total = 0;
    for(i = 0; i<arguments.length; i++){
        total += arguments[i];
    }
    return total;
}