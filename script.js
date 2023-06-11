let myAge ;
let currentYear = 2023;
let birthYear = 1995;
myAge = currentYear - birthYear;
console.log (myAge + " is my age.");
let WW2begin = 1939;
let WW2end = 1945;
let WW2duration = WW2end - WW2begin;
console.log("WW2 was " + WW2duration + " years long.");
let teslaShare = 244.4 ;
let price76 = teslaShare * 76 + " $";
console.log(price76);
let seconsOfADay = (60*60)*24;
console.log("There are " + seconsOfADay + " seconds in a day");
let worldPopulation = 8038134087;
let hungarians = 15000000;
let hungPerc = (15000000*100)/8038134087;
console.log("Hungarians are " + hungPerc + "% of whole world's population.");
let squareChina = 9596960;
let squareCZ = 78871;
if (squareChina > squareCZ) {
    let squareDif = squareChina - squareCZ;
    console.log ("China is bigger than Czech Republic for " + squareDif + " km2");
}
let participant = 654;
let group = 7;
let smalestGroupParticipants = participant%group;
console.log ("The smalest group will contain " + smalestGroupParticipants + " participants.");
let names = ["Viki", "Milan", "George", "Marianna", "Viktor", "Ion"];
// console.log(names[0]);
if (names[2].length == 5) {
    console.log(names[2] + " is 5 charecters long.")
} else {
    console.log(names[2] + " isn't 5 characters long.")
}
names.push ("Patrik");
console.log(names [6]);
names[0] = "Milan";
console.log(names[0]);
if (names.lenght < 4){
    console.log ('Array "names" has less than 4 elements' )
} else if(names.lenght == 4) {
    console.log('Array "names" has 4 elements')
}else console.log('Array "names" has more than 4 elements');
// let hasManyColors = jewerly.colors.length > 3 == true;
let jewerly = {
    colors: ['red', 'yellow', 'green','cian'],
    size: [Number],
    material: ['gold', 'silver', 'bronze'],
    // x : colors,
    
};
jewerly.hasManyColors = jewerly.colors.length > 3;
if(jewerly.hasManyColors === true){
    console.log("Jewerlys have many colors")
}


