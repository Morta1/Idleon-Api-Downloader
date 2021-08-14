// talents are stored as a number, so this maps that number to their name
var talentMap = {
    0: "HEALTH_BOOSTER",
    1: "MANA_BOOSTER",
    2: "EXPERIENCE_BOOSTER",
    3: "SPARE_CHANGE",
    4: "BEGINNERS_LUCK",
    5: "SHARPENED_AXE",
    6: "GILDED_SWORD",
    7: "KAPOW!",
    8: "STAR_PLAYER",
    9: "BUCKLERED_UP",
    10: "FIST_OF_RAGE",
    11: "QUICKNESS_BOOTS",
    12: "BOOK_OF_THE_WISE",
    13: "LUCKY_CLOVER",
    14: "BLAH",
    15: "INDIANA_ATTACK",
    16: "BREAKIN'_THE_BANK",
    17: "SUPERNOVA_PLAYER",
    18: "TWO_PUNCH_MAN",
    19: "GIMME_GIMME",
    20: "LUCKY_HIT",
    21: "F'LUK'EY_FABRICS",
    22: "CHACHING!",
    23: "LUCKY_HORSESHOE",
    24: "CURSE_OF_MR_LOOTY_BOOTY",
    25: "ITS_YOUR_BIRTHDAY!",
    26: "CMON_OUT_CRYSTALS",
    27: "REROLL_PLS",
    28: "CARDS_GALORE",
    29: "RARES_EVERYWHERE!",
    30: "COIN_TOSS",
    31: "SKILLAGE_DAMAGE",
    32: "PRINTER_GO_BRRR",
    33: "TRIPLE_JAB",
    34: "ONE_STEP_AHEAD",
    35: "LUCKY_CHARMS",
    36: "CLEVER_CLOVER_OBOLS",
    37: "SKILLIEST_STATUE",
    38: "BLISS_N_CHIPS",
    39: "COLLOQUIAL_CONTAINERS",
    40: "MAESTRO_TRANSFUSION",
    41: "CRYSTAL_COUNTDOWN",
    42: "LEFT_HAND_OF_LEARNING",
    43: "RIGHT_HAND_OF_ACTION",
    44: "JMAN_WAS_BETTER",
    45: "_",
    46: "_",
    47: "_",
    48: "QUAD_JAB",
    49: "_",
    50: "_",
    51: "_",
    52: "_",
    53: "_",
    54: "_",
    55: "_",
    56: "_",
    57: "_",
    58: "_",
    59: "_",
    60: "_",
    61: "_",
    62: "_",
    63: "_",
    64: "_",
    65: "_",
    66: "_",
    67: "_",
    68: "_",
    69: "_",
    70: "_",
    71: "_",
    72: "_",
    73: "_",
    74: "_",
    75: "HAPPY_DUDE",
    76: "KNUCKLEBUSTER",
    77: "FEATHER_FLIGHT",
    78: "EXTRA_BAGS",
    79: "SLEEPIN'_ON_THE_JOB",
    80: "BULLSEYE",
    81: "STR_SUMMORE",
    82: "KAPOW!",
    83: "BULLSEYE",
    84: "FILLER",
    85: "BRUTE_EFFICIENCY",
    86: "MEAT_SHANK",
    87: "CRITIKILL",
    88: "IDLE_BRAWLING",
    89: "IDLE_SKILLING",
    90: "POWER_STRIKE",
    91: "WHIRL",
    92: "HEALTH_OVERDRIVE",
    93: "Double_Strike",
    94: "FIRMLY_GRASP_IT",
    95: "STRENGTH_IN_NUMBERS",
    96: "'STR'ESS_TESTED_GARB",
    97: "CARRY_A_BIG_STICK",
    98: "ABSOLUTE_UNIT",
    99: "HAUNGRY_FOR_GOLD",
    100: "BIG_PICK",
    101: "COPPER_COLLECTOR",
    102: "MOTHERLODE_MINER",
    103: "TOOL_PROFICIENCY",
    104: "TEMPESTUOUS_EMOTIONS",
    105: "BEAR_SWIPE",
    106: "AXE_HURL",
    107: "MOCKING_SHOUT",
    108: "NO_PAIN_NO_GAIN",
    109: "MONSTER_DECIMATOR",
    110: "APOCALYPSE_ZOW",
    111: "FISTFUL_OF_OBOL",
    112: "STRONGEST_STATUES",
    113: "BLIND_ADRENALINE",
    114: "BEEFY_BOTTLES",
    115: "WORMING_UNDERCOVER",
    116: "BOBBIN'_BOBBERS",
    117: "ALL_FISH_DIET",
    118: "CATCHING_SOME_ZZZ'S",
    119: "BACK_TO_BASICS",
    120: "SHOCKWAVE_SLASH",
    121: "DAGGERANG",
    122: "BRICKY_SKIN",
    123: "MASTERY_UP",
    124: "BALANCED_SPIRIT",
    125: "PRECISION_POWER",
    126: "_",
    127: "SHIELDIEST_STATUES",
    128: "_",
    129: "BLOCKY_BOTTLES",
    130: "REFINERY_THROTTLE",
    131: "REDOX_RATES",
    132: "SHARPER_SAWS",
    133: "SUPER_SAMPLES",
    134: "_",
    135: "_",
    136: "_",
    137: "_",
    138: "_",
    139: "_",
    140: "_",
    141: "_",
    142: "_",
    143: "_",
    144: "_",
    145: "_",
    146: "_",
    147: "_",
    148: "_",
    149: "_",
    150: "_",
    151: "_",
    152: "_",
    153: "_",
    154: "_",
    155: "_",
    156: "_",
    157: "_",
    158: "_",
    159: "_",
    160: "_",
    161: "_",
    162: "_",
    163: "_",
    164: "_",
    165: "_",
    166: "_",
    167: "_",
    168: "_",
    169: "_",
    170: "_",
    171: "_",
    172: "_",
    173: "_",
    174: "_",
    175: "_",
    176: "_",
    177: "_",
    178: "_",
    179: "_",
    180: "_",
    181: "_",
    182: "_",
    183: "_",
    184: "_",
    185: "_",
    186: "_",
    187: "_",
    188: "_",
    189: "_",
    190: "_",
    191: "_",
    192: "_",
    193: "_",
    194: "_",
    195: "_",
    196: "_",
    197: "_",
    198: "_",
    199: "_",
    200: "_",
    201: "_",
    202: "_",
    203: "_",
    204: "_",
    205: "_",
    206: "_",
    207: "_",
    208: "_",
    209: "_",
    210: "_",
    211: "_",
    212: "_",
    213: "_",
    214: "_",
    215: "_",
    216: "_",
    217: "_",
    218: "_",
    219: "_",
    220: "_",
    221: "_",
    222: "_",
    223: "_",
    224: "_",
    225: "_",
    226: "_",
    227: "_",
    228: "_",
    229: "_",
    230: "_",
    231: "_",
    232: "_",
    233: "_",
    234: "_",
    235: "_",
    236: "_",
    237: "_",
    238: "_",
    239: "_",
    240: "_",
    241: "_",
    242: "_",
    243: "_",
    244: "_",
    245: "_",
    246: "_",
    247: "_",
    248: "_",
    249: "_",
    250: "_",
    251: "_",
    252: "_",
    253: "_",
    254: "_",
    255: "HEALTH_BOOSTER",
    256: "MANA_BOOSTER",
    257: "KNOWLEDGE_BOOSTER",
    258: "SPARE_CHANGE",
    259: "BEGINNERS_LUCK",
    260: "SHARPENED_AXE",
    261: "GILDED_SWORD",
    262: "KAPOW!",
    263: "ELUSIVE_EFFICIENCY",
    264: "BUCKLERED_UP",
    265: "FOCUSED_SOUL",
    266: "FEATHERWEIGHT",
    267: "I_SEE_YOU",
    268: "IDLE_SHOOTING",
    269: "BROKEN_TIME",
    270: "PIERCING_ARROW",
    271: "KUNG_FU_KICK",
    272: "HEMA_OVERDRIVE",
    273: "STRAFE",
    274: "HAVE_ANOTHER!",
    275: "TALENTED_REINVESTOR",
    276: "GARB_OF_UN'AGI'NG_QUALITY",
    277: "HIGH_POLYMER_LIMBS",
    278: "SANIC_SPEED",
    279: "ROBBINGHOOD",
    280: "SMELTIN'_ERRYDAY",
    281: "ACME_ANVIL",
    282: "YEA_I_ALREADY_KNOW",
    283: "GODLY_CREATION",
    284: "VEINS_OF_THE_INFERNAL",
    285: "HOMING_ARROWS",
    286: "MAGIC_SHORTBOW",
    287: "FLAX_INSTASTRING",
    288: "EXTENDO_RANGEO",
    289: "WOAH,_THAT_WAS_FAST!",
    290: "SPEEDNA",
    291: "SHOEFUL_OF_OBOL",
    292: "SHWIFTY_STATUES",
    293: "AGI_AGAIN",
    294: "VELOCITY_VESSELS",
    295: "TELEKI'NET'IC_LOGS",
    296: "BRIAR_PATCH_RUNNER",
    297: "BUG_ENTHUSIAST",
    298: "SUNSET_ON_THE_HIVES",
    299: "PREVIOUS_POINTS",
    300: "360_NOSCOPE",
    301: "BEAR_TRAP",
    302: "UWU_RAWRRR",
    303: "STOP_RIGHT_THERE",
    304: "HAVE_ANOTHER..._AGAIN!",
    305: "LOOTY_MC_SHOOTY",
    306: "_",
    307: "STRAIGHTSHOT_STATUES",
    308: "_",
    309: "VISIBILITY_VESSELS",
    310: "EAGLE_EYE",
    311: "INVASIVE_SPECIES",
    312: "SHROOM_BAIT",
    313: "REFLECTIVE_EYESIGHT",
    314: "_",
    315: "BALLISTA",
    316: "_",
    317: "_",
    318: "_",
    319: "_",
    320: "_",
    321: "_",
    322: "_",
    323: "_",
    324: "_",
    325: "_",
    326: "_",
    327: "_",
    328: "_",
    329: "_",
    330: "_",
    331: "_",
    332: "_",
    333: "_",
    334: "_",
    335: "_",
    336: "_",
    337: "_",
    338: "_",
    339: "_",
    340: "_",
    341: "_",
    342: "_",
    343: "_",
    344: "_",
    345: "_",
    346: "_",
    347: "_",
    348: "_",
    349: "_",
    350: "_",
    351: "_",
    352: "_",
    353: "_",
    354: "_",
    355: "_",
    356: "_",
    357: "_",
    358: "_",
    359: "_",
    360: "_",
    361: "_",
    362: "_",
    363: "_",
    364: "_",
    365: "_",
    366: "_",
    367: "_",
    368: "_",
    369: "_",
    370: "_",
    371: "_",
    372: "_",
    373: "_",
    374: "_",
    375: "_",
    376: "_",
    377: "_",
    378: "_",
    379: "_",
    380: "_",
    381: "_",
    382: "_",
    383: "_",
    384: "_",
    385: "_",
    386: "_",
    387: "_",
    388: "_",
    389: "_",
    390: "_",
    391: "_",
    392: "_",
    393: "_",
    394: "_",
    395: "_",
    396: "_",
    397: "_",
    398: "_",
    399: "_",
    400: "_",
    401: "_",
    402: "_",
    403: "_",
    404: "_",
    405: "_",
    406: "_",
    407: "_",
    408: "_",
    409: "_",
    410: "_",
    411: "_",
    412: "_",
    413: "_",
    414: "_",
    415: "_",
    416: "_",
    417: "_",
    418: "_",
    419: "_",
    420: "_",
    421: "_",
    422: "_",
    423: "_",
    424: "_",
    425: "_",
    426: "_",
    427: "_",
    428: "_",
    429: "_",
    430: "_",
    431: "_",
    432: "_",
    433: "_",
    434: "_",
    435: "HEALTH_BOOSTER",
    436: "MANA_BOOSTER",
    437: "KNOWLEDGE_BOOSTER",
    438: "SPARE_CHANGE",
    439: "BEGINNERS_LUCK",
    440: "SHARPENED_AXE",
    441: "GILDED_SWORD",
    442: "KAPOW!",
    443: "BULLSEYE",
    444: "BUCKLERED_UP",
    445: "SMART_EFFICIENCY",
    446: "OVERCLOCKED_ENERGY",
    447: "FARSIGHT",
    448: "IDLE_CASTING",
    449: "ACTIVE_AFK'ER",
    450: "ENERGY_BOLT",
    451: "MINI_FIREBALL",
    452: "MANA_OVERDRIVE",
    453: "TELEPORT",
    454: "YOU'RE_NEXT",
    455: "KNOWLEDGE_IS_POWER",
    456: "UNT'WIS'TED_ROBES",
    457: "POWER_OVERWHELMING",
    458: "FREE_MEAL",
    459: "INDIVIDUAL_INSIGHT",
    460: "LOG_ON_LOGS",
    461: "LEAF_THIEF",
    462: "DEFORESTING_ALL_DOUBT",
    463: "CHOPPIN_IT_UP_EZ",
    464: "INNER_PEACE",
    465: "ICE_SHARDS",
    466: "FLOOR_IS_LAVA",
    467: "TORNADO",
    468: "SPEEDY_BOOK",
    469: "MANA_IS_LIFE",
    470: "PAPERWORK,_GREAT...",
    471: "_",
    472: "STARING_STATUES",
    473: "_",
    474: "FUSCIA_FLASKS",
    475: "CHARGE_SYPHON",
    476: "SOOOULS",
    477: "BLESS_UP",
    478: "NEARBY_OUTLET",
    479: "_",
    480: "CRAZY_CONCOCTIONS",
    481: "AUSPICIOUS_AURA",
    482: "SIZZLING_SKULL",
    483: "TENTEYECLE",
    484: "INSTANT_INVINCIBILITY",
    485: "VIRILE_VIALS",
    486: "OCCULT_OBOLS",
    487: "STUPENDOUS_STATUES",
    488: "WIS_WUMBO",
    489: "FANTASIA_FLASKS",
    490: "CRANIUM_COOKING",
    491: "BUSY_BREWIN'",
    492: "BUBBLE_BREAKTHROUGH",
    493: "SHARING_SOME_SMARTS",
    494: "EARLIER_EDUCATION",
    495: "_",
    496: "_",
    497: "_",
    498: "_",
    499: "_",
    500: "_",
    501: "_",
    502: "_",
    503: "_",
    504: "_",
    505: "_",
    506: "_",
    507: "_",
    508: "_",
    509: "_",
    510: "_",
    511: "_",
    512: "_",
    513: "_",
    514: "_",
    515: "_",
    516: "_",
    517: "_",
    518: "_",
    519: "_",
    520: "_",
    521: "_",
    522: "_",
    523: "_",
    524: "_",
    525: "_",
    526: "_",
    527: "_",
    528: "_",
    529: "_",
    530: "_",
    531: "_",
    532: "_",
    533: "_",
    534: "_",
    535: "_",
    536: "_",
    537: "_",
    538: "_",
    539: "_",
    540: "_",
    541: "_",
    542: "_",
    543: "_",
    544: "_",
    545: "_",
    546: "_",
    547: "_",
    548: "_",
    549: "_",
    550: "_",
    551: "_",
    552: "_",
    553: "_",
    554: "_",
    555: "_",
    556: "_",
    557: "_",
    558: "_",
    559: "_",
    560: "_",
    561: "_",
    562: "_",
    563: "_",
    564: "_",
    565: "_",
    566: "_",
    567: "_",
    568: "_",
    569: "_",
    570: "_",
    571: "_",
    572: "_",
    573: "_",
    574: "_",
    575: "_",
    576: "_",
    577: "_",
    578: "_",
    579: "_",
    580: "_",
    581: "_",
    582: "_",
    583: "_",
    584: "_",
    585: "_",
    586: "_",
    587: "_",
    588: "_",
    589: "_",
    590: "_",
    591: "_",
    592: "_",
    593: "_",
    594: "_",
    595: "_",
    596: "_",
    597: "_",
    598: "_",
    599: "_",
    600: "_",
    601: "_",
    602: "_",
    603: "_",
    604: "_",
    605: "_",
    606: "_",
    607: "_",
    608: "_",
    609: "_",
    610: "_",
    611: "_",
    612: "_",
    613: "_",
    614: "_",
    615: "BORED_TO_DEATH",
    616: "BEGINNER_BEST_CLASS",
    617: "STUDIOUS_QUESTER",
    618: "QUEST_CHUNGUS",
    619: "CRYSTALS_4_DAYYS",
    620: "WILL_OF_THE_ELDEST",
    621: "TICK_TOCK",
    622: "STONKS!",
    623: "ROLL_DA_DICE",
    624: "ATTACKS_ON_SIMMER",
    625: "TOILET_PAPER_POSTAGE",
    626: "EXP_CONVERTER",
    627: "GOBLET_OF_HEMOGLOBIN",
    628: "CARDIOVASCULAR!",
    629: "PULSATION",
    630: "CONVERT_BETTER,_DARNIT!",
    631: "FROTHY_MALK",
    632: "JUST_EXP",
    633: "_",
    634: "TELEKINETIC_STORAGE",
    635: "PRINTER_SAMPLING",
    636: "_",
    637: "_",
    638: "_",
    639: "SHRINE_ARCHITECT",
    640: "_",
    641: "Special27",
    642: "_",
    643: "_",
    644: "_",
    645: "_",
    646: "_",
    647: "_",
    648: "_",
    649: "_",
    650: "_",
    651: "_",
    652: "_",
    653: "_",
    654: "Special40",
    655: "_",
    656: "_",
    657: "_",
    658: "_",
    659: "_",
    660: "_",
    661: "_",
    662: "_",
    663: "_",
    664: "_",
    665: "_",
    666: "_",
    667: "Special53",
    668: "_",
    669: "_",
    670: "_",
    671: "_",
    672: "_",
    673: "_",
    674: "_",
    675: "_",
    676: "_",
    677: "_",
    678: "_",
    679: "_"

};