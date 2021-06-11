//represents the level up requirements for each card
//for example, mushG 1 star is 5 cards collected, 2 star is 15 cards, etc
//Note that this maps the mob data to their card star values, as it is stored that way in the game API data
var cardLevelMap = {
    "mushG": [5,15,25],
    "mushR" : [10,30,50],
    "frogG" : [6,18,30],
    "beanG" : [7,21,35],
    "slimeG" : [8,24,40],
    "snakeG" : [9,27,45],
    "carrotO" : [10,30,50],
    "goblinG" : [10,30,50],
    "plank" : [10,30,50],
    "frogBIG" : [10,30,50],
    "poopSmall" : [10,30,50],
    "ratB" : [10,30,50],
    "branch" : [10,30,50],
    "acorn" : [10,30,50],
    "Crystal0" : [3,9,15],
    "mushW" : [10,30,50],

    "jarSand" : [10,30,50],
    "mimicA" : [10,30,50],
    "crabcake" : [10,30,50],
    "coconut" : [10,30,50],
    "sandcastle" : [10,30,50],
    "pincermin" : [10,30,50],
    "potato" : [10,30,50],
    "steak" : [10,30,50],
    "moonman" : [10,30,50],
    "sandgiant" : [10,30,50],
    "snailZ" : [10,30,50],
    "shovelR" : [10,30,50],
    "Crystal1" : [3,9,15], 
    "Bandit_Bob" : [1,3,5],  //need fix?

    "Copper" : [10,30,50],
    "Iron" : [10,30,50],
    "Gold" : [10,30,50],
    "ForgeA" : [10,30,50],
    "OakTree" : [10,30,50],
    "BirchTree" : [10,30,50],
    "JungleTree" : [10,30,50],
    "ForestTree" : [10,30,50],
    "Fish1" : [10,30,50],
    "Fish2" : [10,30,50],
    "Fish3" : [10,30,50],
    "Bug1" : [10,30,50], //Not BugNest1?
    "Bug2" : [10,30,50], //Not BugNest2?

    "Plat" : [10,30,50],
    "Dementia" : [10,30,50],
    "Void" : [10,30,50],
    "ForgeB" : [10,30,50],
    "PalmTree" : [10,30,50],
    "ToiletTree" : [10,30,50],
    "StumpTree" : [10,30,50],
    "Fish4" : [10,30,50],
    "Bug3" : [10,30,50], //Not BugNest3?
    "Bug4" : [10,30,50],
    "SoulCard1" : [3,9,15],
    "SoulCard2" : [3,9,15],
    "CritterCard1" : [4,12,20],
    "CritterCard2" : [4,12,20],
    "CritterCard3" : [4,12,20],

    "Tree7" : [10,30,50],
    "SoulCard3" : [3,9,15],
    "SoulCard4" : [4,12,20],
    "SoulCard5" : [5,15,25],
    "CritterCard4" : [4,12,20],
    "CritterCard5" : [4,12,20],
    "CritterCard6" : [5,15,25],
    "CritterCard7" : [6,18,30],
    "Lustre" : [10,30,50],
    "SaharanFoal" : [10,30,50],
    "Bug5" : [10,30,50],
    "Bug6" : [10,30,50],

    "sheep" : [11,33,55],
    "flake" : [12,36,60],
    "stache" : [13,39,65],
    "bloque" : [14,42,70],
    "mamoth" : [15,45,75],
    "snowball" : [15,45,75],
    "penguin" : [15,45,75],
    "thermostat" : [15,45,75],
    "glass" : [17,51,85],
    "snakeB" : [17,51,85],
    "speaker" : [17,51,85],
    "eye" : [17,51,85],
    "ram" : [20,60,100],
    "skele" : [15,45,75],
    "skele2" : [15,45,75],
    "Crystal2" : [10,30,50],

    "babayaga" : [2,6,10],
    "poopBig" : [2,6,10],
    "poopD" : [1,3,5],
    "wolfA" : [2,6,10],
    "wolfB" : [2,6,10],
    "babaHour" : [2,6,10],
    "babaMummy" : [2,6,10],
    "Boss2A" : [2,6,10],
    "Boss2B" : [2,6,10],
    "Boss3A" : [2,6,10],
    "Boss3B" : [2,6,10],

    "xmasEvent" : [2,6,10],
    "ghost" : [2,6,10],
    "xmasEvent2" : [2,6,10],
    "slimeR" : [2,6,10],
    "loveEvent" : [2,6,10],
    "loveEvent2" : [2,6,10],
    "sheepB" : [3,9,15],
    "snakeY" : [3,9,15],
    "EasterEvent1" : [2,6,10],
    "EasterEvent2" : [2,6,10],

    "Blank" : [0,0,0]
}