/*
Beginner = 1
Journeyman = 2

Warrior = 7
Barbarian = 8
Squire = 9

Archer = 19
Bowman = 20
Hunter = 21

Mage = 31
Wizard = 32
Shaman = 33
*/
var charSubclassMap = {
    "Journeyman": "Beginner",
    "Barbarian": "Warrior",
    "Squire": "Warrior",
    "Bowman": "Archer",
    "Hunter": "Archer",
    "Shaman": "Mage",
    "Wizard": "Mage"
};
var OLDcharSubclassMap = {
    2: 1,
    8: 7,
    9: 7,
    20: 19,
    21: 19,
    33: 31,
    32: 31
};

var skillIndexMap = {
    0: "character",
    1: "mining",
    2: "smithing",
    3: "chopping",
    4: "fishing",
    5: "alchemy",
    6: "catching",
    7: "trapping",
    8: "construction",
    9: "worship"
};

var obolNameMap = {
    "ObolLocked1": "None",
    "ObolLocked2": "None",
    "ObolLocked3": "None",
    "ObolLocked4": "None",
    "Blank": "None",

    "ObolAmarokA": "Granite_Obol_of_Amarok's_Stare",
    "ObolBronze0": "Bronze_STR_Obol",
    "ObolBronze1": "Bronze_AGI_Obol",
    "ObolBronze2": "Bronze_WIS_Obol",
    "ObolBronze3": "Bronze_LUK_Obol",
    "ObolBronzeCard": "Bronze_Obol_of_Cards",
    "ObolBronzeCatching": "Bronze_Obol_of_Few_Flies",
    "ObolBronzeChoppin": "Bronze_Obol_of_Chippin_Chops",
    "ObolBronzeCons": "Bronze_Obol_of_Construction",
    "ObolBronzeDamage": "Bronze_Obol_of_Puny_Damage",
    "ObolBronzeDef": "Bronze_Obol_of_Defence",
    "ObolBronzeEXP": "Bronze_Obol_of_Experience",
    "ObolBronzeFishing": "Bronze_Obol_of_Finite_Fish",
    "ObolBronzeKill": "Bronze_Obol_of_Multikill",
    "ObolBronzeMining": "Bronze_Obol_of_Small_Swings",
    "ObolBronzePop": "Bronze_Obol_of_Pop",
    "ObolBronzeTrapping": "Bronze_Obol_of_Trapping",
    "ObolBronzeWorship": "Bronze_Obol_of_Worship",
    "ObolEfauntA": "Skeletal_Obol_of_Efaunt's_Gaze",
    "ObolGold0": "Gold_STR_Obol",
    "ObolGold1": "Gold_AGI_Obol",
    "ObolGold2": "Gold_WIS_Obol",
    "ObolGold3": "Gold_LUK_Obol",
    "ObolGoldCard": "Golden_Obol_of_Cards",
    "ObolGoldCatching": "Golden_Obol_of_Insane_Insects",
    "ObolGoldChoppin": "Golden_Obol_of_Huge_Hackin",
    "ObolGoldCons": "Golden_Obol_of_Construction",
    "ObolGoldDamage": "Golden_Obol_of_Big_Boy_Damage",
    "ObolGoldDef": "Golden_Obol_of_Defence",
    "ObolGoldEXP": "Golden_Obol_of_Experience",
    "ObolGoldFishing": "Golden_Obol_of_Crazy_Carp",
    "ObolGoldKill": "Golden_Obol_of_Ultrakill",
    "ObolGoldLuck": "Golden_Obol_of_Triple_Sixes",
    "ObolGoldMining": "Golden_Obol_of_Diligent_Digging",
    "ObolGoldMoney": "Golden_Obol_of_Plentiful_Riches",
    "ObolGoldPop": "Golden_Obol_of_Poppity_Pop",
    "ObolGoldTrapping": "Golden_Obol_of_Trapping",
    "ObolGoldWorship": "Golden_Obol_of_Worship",
    "ObolPink0": "Dementia_STR_Obol",
    "ObolPink1": "Dementia_AGI_Obol",
    "ObolPink2": "Dementia_WIS_Obol",
    "ObolPink3": "Dementia_LUK_Obol",
    "ObolPinkCard": "Dementia_Obol_of_Cards",
    "ObolPinkCatching": "Dementia_Obol_of_Idk_Yet",
    "ObolPinkChoppin": "Dementia_Obol_of_WOWOWOWWO",
    "ObolPinkCons": "Dementia_Obol_of_Construction",
    "ObolPinkDamage": "Dementia_Obol_of_Infinite_Damage",
    "ObolPinkDef": "Dementia_Obol_of_Defence",
    "ObolPinkEXP": "Dementia_Obol_of_Experience",
    "ObolPinkFishing": "Dementia_Obol_of_Monument_Marlins",
    "ObolPinkKill": "Dementia_Obol_of_Killionaire",
    "ObolPinkLuck": "Dementia_Obol_of_Infinisixes",
    "ObolPinkMining": "Dementia_Obol_of_Magisterial_Metals",
    "ObolPinkPop": "Dementia_Obol_of_Pop_Pop_Pop_Pop",
    "ObolPinkTrapping": "Dementia_Obol_of_Trapping",
    "ObolPinkWorship": "Dementia_Obol_of_Worship",
    "ObolPlatinum0": "Platinum_STR_Obol",
    "ObolPlatinum1": "Platinum_AGI_Obol",
    "ObolPlatinum2": "Platinum_WIS_Obol",
    "ObolPlatinum3": "Platinum_LUK_Obol",
    "ObolPlatinumCard": "Platinum_Obol_of_Cards",
    "ObolPlatinumCatching": "Platinum_Obol_of_Idk_Yet",
    "ObolPlatinumChoppin": "Platinum_Obol_of_Lumby_Loggo",
    "ObolPlatinumCons": "Platinum_Obol_of_Construction",
    "ObolPlatinumDamage": "Platinum_Obol_of_Lethal_Damage",
    "ObolPlatinumDef": "Platinum_Obol_of_Defense_with_an_S",
    "ObolPlatinumEXP": "Platinum_Obol_of_Experience",
    "ObolPlatinumFishing": "Platinum_Obol_of_Tremendous_Trout",
    "ObolPlatinumKill": "Platinum_Obol_of_Killimanjaro",
    "ObolPlatinumLuck": "Platinum_Obol_of_Yahtzee_Sixes",
    "ObolPlatinumMining": "Platinum_Obol_of_Dwarven_Delving",
    "ObolPlatinumPop": "Platinum_Obol_of_Poppity_Poppy",
    "ObolPlatinumSpeed": "Platinum_Obol_of_Blinding_Speed",
    "ObolPlatinumTrapping": "Platinum_Obol_of_Trapping",
    "ObolPlatinumWorship": "Platinum_Obol_of_Worship",
    "ObolSilver0": "Silver_STR_Obol",
    "ObolSilver1": "Silver_AGI_Obol",
    "ObolSilver2": "Silver_WIS_Obol",
    "ObolSilver3": "Silver_LUK_Obol",
    "ObolSilverCard": "Silver_Obol_of_Cards",
    "ObolSilverCatching": "Silver_Obol_of_Big_Bugs",
    "ObolSilverChoppin": "Silver_Obol_of_Big_Bark",
    "ObolSilverCons": "Silver_Obol_of_Construction",
    "ObolSilverDamage": "Silver_Obol_of_Little_Damage",
    "ObolSilverDef": "Silver_Obol_of_Defence",
    "ObolSilverEXP": "Silver_Obol_of_Experience",
    "ObolSilverFishing": "Silver_Obol_of_Puny_Pikes",
    "ObolSilverKill": "Silver_Obol_of_Megakill",
    "ObolSilverLuck": "Silver_Obol_of_Double_Sixes",
    "ObolSilverMining": "Silver_Obol_of_Moderate_Mining",
    "ObolSilverMoney": "Silver_Obol_of_Pocket_Change",
    "ObolSilverPop": "Silver_Obol_of_Pop_Pop",
    "ObolSilverTrapping": "Silver_Obol_of_Trapping",
    "ObolSilverWorship": "Silver_Obol_of_Worship"

};

// maps stored stamp ID to it's display name in game
var stampIdToDisplayMap = {
    0: "Sword_Stamp",
    1: "Heart_Stamp",
    2: "Mana_Stamp",
    3: "Tomahawk_Stamp",
    4: "Target_Stamp",
    5: "Shield_Stamp",
    6: "Longsword_Stamp",
    7: "Kapow_Stamp",
    8: "Fist_Stamp",
    9: "Battleaxe_Stamp",
    10: "Agile_Stamp",
    11: "Vitality_Stamp",
    12: "Book_Stamp",
    13: "Manamoar_Stamp",
    14: "Clover_Stamp",
    15: "Scimitar_Stamp",
    16: "Bullseye_Stamp",
    17: "Feather_Stamp",
    18: "Polearm_Stamp",
    19: "Violence_Stamp",
    20: "Buckler_Stamp",
    21: "FILLER",
    22: "Sukka_Foo",
    23: "Arcane_Stamp",
    24: "FILLER",
    25: "Steve_Sword",
    26: "Blover_Stamp",
    27: "Stat_Graph_Stamp",
    28: "FILLER",
    29: "FILLER",
    30: "FILLER",
    31: "FILLER",
    32: "FILLER",
    33: "FILLER",
    34: "FILLER",
    1000: "Pickaxe_Stamp",
    1001: "Hatchet_Stamp",
    1002: "Anvil_Zoomer|Stamp",
    1003: "Lil' Mining_Baggy|Stamp",
    1004: "Twin_Ores_Stamp",
    1005: "Choppin' Bag|Stamp",
    1006: "Duplogs_Stamp",
    1007: "Matty_Bag_Stamp",
    1008: "Smart_Dirt_Stamp",
    1009: "Cool_Diggy_Tool|Stamp",
    1010: "High_IQ_Lumber|Stamp",
    1011: "Swag_Swingy_Tool|Stamp",
    1012: "Alch_Go_Brrr|Stamp",
    1013: "Brainstew_Stamps",
    1014: "Drippy_Drop_Stamp",
    1015: "Droplots_Stamp",
    1016: "Fishing_Rod_Stamp",
    1017: "Fishhead_Stamp",
    1018: "Catch_Net_Stamp",
    1019: "Fly_Intel_Stamp",
    1020: "Bag_o_Heads_Stamp",
    1021: "Holy_Mackerel|Stamp",
    1022: "Bugsack_Stamp",
    1023: "Buzz_Buzz_Stamp",
    2000: "Questin_Stamp",
    2001: "Mason_Jar_Stamp",
    2002: "Crystallin",
    2003: "Blank",
    2004: "Apple_Stamp",
    2005: "Potion_Stamp",
    2006: "Golden_Apple|Stamp",
    2007: "Blank",
    2008: "Card_Stamp",
    2009: "Blank",
    2010: "Blank",
    2011: "Blank",
    2012: "Talent_I_Stamp",
    2013: "Talent_II_Stamp",
    2014: "Talent_III_Stamp",
    2015: "Talent_IV_Stamp",
    2016: "Talent_V_Stamp",
    2017: "Talent_S_Stamp"
};

// maps the star signs ID (index) with their in game name
var starSignMap = {
    999: "None",
    0: "The_Buff_Guy",
    1: "Flexo_Bendo",
    2: "The_Book_Worm",
    3: "The_Fuzzy_Dice",
    4: "Dwarfo_Beardus",
    5: "Hipster_Logger",
    6: "Pie_Seas",
    7: "Shoe_Fly",
    8: "Blue_Hedgehog",
    9: "Gum_Drop",
    10: "Activelius",
    11: "Pack_Mule",
    12: "Ned_Kelly",
    13: "Robinhood",
    14: "Pirate_Booty",
    15: "Muscle_Man",
    16: "Fast_Frog",
    17: "Smart_Stooge",
    18: "Lucky_Larry",
    19: "Silly_Snoozer",
    20: "The_Big_Comatose",
    21: "Miniature_Game",
    22: "Mount_Eaterest",
    23: "Bob_Build_Guy",
    24: "The_Big_Brain",
    25: "The_OG_Skiller",
    26: "Grim_Reaper",
    27: "The_Fallen_Titan",
    28: "The_Forsaken",
    29: "Mr_No_Sleep",
    30: "Sir_Savvy",
    31: "All_Rounder",
    32: "Fatty_Doodoo",
    33: "Chronus_Cosmos"
}

var fishingBaitMap = {
    0: "Fly",
    1: "Wormie",
    2: "Iron_Hook",
    3: "Basic_Bobber",
    4: "Dualhook_Prongs",
    5: "Pound_of_Steel",
    6: "Pound_of_Feathers",
    7: "Massless_Unit",
    8: "Literal_Elephant",
    9: "Valve_Circles",
    10: "Dynamite",
    11: "Not_Dynamite",
    12: "Triple_Threat",
    13: "Crash_Box",
    14: "Fat_Albert"
}

var fishingLineMap = {
    0: "Fishing_Twine",
    1: "Copper_Twine",
    2: "Silver_Twine",
    3: "Gold_Twine",
    4: "Platinum_Twine",
    5: "Leafy_Vines",
    6: "Fun_Flags",
    7: "Electrical_Wire",
    8: "Wiener_Links",
    9: "Zeus_Gon_Fishin",
    10: "Needledrop",
    11: "Spoons_Lol",
    12: "Its_a_Boy",
    13: "Its_a_Girl",
    14: "Its_Alright"
}

// this should probably change.. but it works...
var cardSetMap = {
    "None": "None",
    "{%_EXP_if_below_Lv_50" : "Blunder_Hills",
    "{%_All_Food_Effect" : "Yum-Yum_Desert",
    "{%_Skill_Efficiency" : "Easy_Resources",
    "{%_Skill_EXP_Gain" : "Medium_Resources",
    "{%_DEF_and_ACC" : "Frostbite_Tundra",
    "{%_Skill_AFK_Gain_Rate" : "Hard_Resources",
    "{%_Dmg,_Drop,_and_EXP" : "Bosses_n_Nightmares",
    "{%_Drop_Rate" : "Events"
}

// maps_the_weird_naming_convention_of_each_large_bubble_to_its_display_name
var largeBubbleMap = {
    "_11" : "call_me_bob",
    "_6" : "sploosh_sploosh",
    "_3" : "wyoming_blood",
    "a11" : "call_me_ash",
    "a7" : "sanic_tools",
    "a2" : "hammer_hammer",
    "b11" : "call_me_pope",
    "b7" : "cookin_roadkill",
    "b3" : "molto_loggo",
    "c12" : "big_game_hunter",
    "c8" : "grind_time",
    "c3" : "level_up_gift"
}
