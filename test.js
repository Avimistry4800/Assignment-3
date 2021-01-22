
function hotelCost (dayCount){
    var totalCost = 0;
    if (dayCount <= 0){
        return "Error : Enter valid number of days"
    }

    else if (dayCount <= 10 ){
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
        var remainingDays = dayCount - 20;
        var thirdPackage = remainingDays *50 ;
        totalCost = firstPackage + secondPackage + thirdPackage ;
    }
    return totalCost
}

var q = hotelCost (-3);
console.log(q);