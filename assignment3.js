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
// Here cost of hotel rent (1-10 days cost = 100/day ; 11-20 days = 80/day ; 20-remaining days = 50/day)
// Here firstPackage = 1st 10 days, secondPackage = 11-20 number days & thirdPackage = (remaining days after 1'st 20 days)

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
        var remainingDays = dayCount - 20;
        var thirdPackage = remainingDays *50 ;
        totalCost = firstPackage + secondPackage + thirdPackage ;
    }
    return totalCost
}

//megaFriend function
// Here i'm using #array as paramiter of megaFriend. #longestName is used for store the vallue of the #array & finaly it will store the longest 1st string in the array by using loop & condition.

function megaFriend(array) {
    var longestName = array[0];
    for (i = 0; i < array.length; i++) {
      if (array[i].length > longestName.length) {
        longestName = array[i];
      }
    }
    return longestName;
  }
