/******************
  feetToMile
*****************/

function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var finalMile = feetToMile(12000);
console.log(finalMile);

/******************
  woodCalculator
*****************/
function woodCalculator(chair, table, bedstead) {
    var countChair = chair * 1;
    var countTable = table * 3;
    var countBedstead = bedstead * 5;
    var totalWood = countChair + countTable + countBedstead;
    return totalWood;
}
var countTotalWood = woodCalculator(2, 3, 2);
console.log(countTotalWood);

/******************************
    brickCalculator
 ******************************/

function brickCalculator(floor) {
    const brickPerFeet = 1000;
    for ( var i = 0; i <= floor; i++){
        if(i <= 10 ){
        var brick = brickPerFeet * 15;
        }
        else if (i > 10 && i < 20) {
           var count = brickPerFeet * 15;
            var brick = count + (brickPerFeet *12);
        }
        else if (i >= 20){
            var count = (brickPerFeet * 15) + (brickPerFeet * 12);
            var brick = count + (brickPerFeet *10);
        }
    }
    return brick;
}
var totalBrick = brickCalculator(11);
console.log(totalBrick);

/**********************************
    tinFriend
 **********************************/
function tinyFriend(names) {
    var tiny = names[0];
    for (var i = 0; i < names.length; i++){
        var currentFriend = names[i];
        if (currentFriend.length < tiny.length) {
            tiny = currentFriend;
        }
    }
    return tiny;
}
var friendsName = ['alfaz', 'ayub', 'Mamunur', 'joy'];
var mytinyFriend = tinyFriend(friendsName);
console.log(mytinyFriend);
