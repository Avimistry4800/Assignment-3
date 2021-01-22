//https://github.com/Avimistry4800/Assignment-3
// #1 Kilometer to meter function
function kilometerToMeter(kilometer){
    var reasult = kilometer * 1000 ;
    return reasult;
}

// #2 budgetCalculator function 
// in this function , if you want to buy one or two product, please give 0 as input on which product you don't want to buy.
function budgetCalculator (watch,mobile,laptop){  
    var watchCost = watch * 50 ;
    var mobileCost = mobile * 100;
    var laptopCost = laptop *500;
    var totalCost = watchCost + mobileCost + laptopCost ;
    return totalCost ;
}

// #3 hotelCost function
function hotelCost (dayCount){
    var totalCost = 0;
    if (dayCount <= 10 ){
        totalCost = dayCount * 100;
    }
    else if(dayCount <= 20){
        var firstPackage = 10 * 100;
        var remainingDays = dayCount - 10;
        var secondPackage = remainingDays * 80;
        var totalCost = firstPackage + secondPackage;
    } 
    else {
        var firstPackage =10 * 100;
        var secondPackage = 10 * 80;
        var remainingDays = dayCount -20;
        var thirdPackage = remainingDays *50 ;
        totalCost = firstPackage + secondPackage + thirdPackage ;
    }
    return totalCost
}
