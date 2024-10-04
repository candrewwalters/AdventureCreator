
//  The Fnord Program
//  Copyright 1997-1999, 2021 by Steve Jackson Games (http://www.sjgames.com/).
//  All Rights Reserved.

//  The Fnorder was originally written for the Illuminati BBS by Steve
//  Jackson and Creede Lambard.  It was later reimplemented in C by
//  Loyd Blankenship, and then converted to perl by Jackie Hamilton.
//  Finally, Ian Gordon then converted the perl back to C.

//  After "finally", C. Andrew Walters grabbed the C code and turned it into Javascript.

adjectives = [
   "23rd", "acceptable", "acrobatic", "alien", "amiable",
   "amoeboid", "ancient", "arbitrary", "atomic", "avenging",
   "awesome", "balanced", "besotted", "best", "black", "blue",
   "calculating", "cast iron", "cat-like", "cautious", "Chinese",
   "cold", "communist", "corrupt", "dead", "deadly", "dehydrated",
   "disguised", "dizzy", "drug-crazed", "drunken", "easy",
   "electric", "embossed", "enormous", "expensive", "explosive",
   "extraterrestrial", "ferocious", "frozen", "furry", "gelatinous",
   "glowing", "gnarly", "gold", "granular", "greedy", "green",
   "high", "highest", "hot", "humming", "illuminated", "imitation",
   "impotent", "impudent", "impulsive", "indictable", "innocent",
   "insane", "Japanese", "lecherous", "lizard-like", "lovely",
   "maniacal", "mauve", "medium-sized", "morbid", "most influential",
   "mutant", "naughty", "nuclear", "oily", "oozing", "opaque",
   "opulent", "orbital", "persuasive", "pickled", "poor",
   "pregnant", "protozoan", "puce", "pulsating", "purple",
   "putrid", "radical", "radioactive", "red", "reformed",
   "reincarnated", "rubber", "Russian", "screaming", "sexy",
   "shiftless", "shifty", "Siamese", "silver", "sin-ridden",
   "sinister", "sizzling", "skeptical", "slack-producing",
   "sleeping", "slick", "slime-dripping", "slimy", "slippery",
   "sluggish", "smoking", "solid gold", "splendid", "squamous",
   "stoned", "sweet", "temporary", "throbbing", "tin-plated",
   "tiny", "transient", "treacherous", "tubular", "ugly",
   "untouchable", "user-friendly", "user-serviceable", "vacant",
   "vacillating", "vampiric", "vibrant", "virginal", "vivid",
   "wealthy", "well-dressed", "white", "wimpy", "worthless",
   "young","illegal", "tax-free", "drugged", "polluted",
   "flaming", "diseased", "agnostic","anorexic", "conquering",
   "cosmic", "dancing", "dyslexic", "frenzied", "lumpy", "musical",
   "plump", "perfectly ordinary", "French", "Martian"
];

names = [
   "007", "a dead relative", "a long-lost uncle","a dead rock star",
   "Abdul Al-Azrad", "Abraham Lincoln", "Agent Orange","Bill Gates",
   "Albert Einstein", "Alfred E. Neumann", "Ali Baba", "Aladdin",
   "Arsenio Hall", "Barry Goldwater", "Batman", "Buck Rogers","Calvin",
   "Bullwinkle", "Captain Ahab", "Captain America", "Captain Kirk",
   "Captain Nemo", "Charlie Brown", "Cthulhu", "Dan Quayle","Dilbert",
   "Darth Vader", "Dave Letterman", "Uncle Bob", "Dr. Destructo",
   "Dracula", "Eddie Murphy", "Edgar Rice Burroughs", "Elvis",
   "Erik Bloodaxe", "Evil Stevie", "Fearless Leader",
   "Ferdinand Marcos", "Flamin' Jane", "Flaming Carrot",
   "Gary Shandling", "George", "George Lucas", "Gerald Ford",
   "Gandhi", "Gorbachev", "Grandmother", "Gumby", "Hamlet","Hobbes",
   "Han Solo", "Hitler", "Ho Chi Minh", "Hulk Hogan","Hillary",
   "Hunter S. Thompson", "Idi Amin", "Internal Security",
   "Isaac Asimov", "Jack the Ripper", "Jane Fonda", "Jesus",
   "Jimmy Carter", "Johnny Carson", "Johnny-B-Gud",
   "Joseph Stalin", "Kareem Abdul-Jabbar", "King Arthur", "King Tut",
   "Lex Luthor", "Luke Skywalker", "Manuel Noriega",
   "Margaret Thatcher", "Michael Jordan", "Mick Jagger",
   "Mohammed", "Moses", "Mr. Bill", "Mr. Ed", "Mr. Science",
   "Mr. Spock", "Muffy", "Nancy Reagan", "Nelson Mandela", "Nixon",
   "Norman Bates", "Obi-Wan Kenobi", "Oliver North", "Paul",
   "Paul Newman", "Perry Mason", "President Clinton", "Princess Leia",
   "Rambo", "Richard Pryor", "Ringo", "Robby the Robot",
   "Robert Heinlein", "Rocky", "Roger Rabbit", "Ronald Reagan",
   "Scrooge", "Sir Lancelot", "Snoopy", "Spaceman Spiff",
   "Spiderman", "Squad 23", "Steve", "Steven Spielberg", "Superman",
   "the A.C.L.U.", "The Computer", "the Discordian", "Sir Paul",
   "the Hand", "The Illuminati", "the Joker", "the Legion of Doom",
   "the ninja", "the Pentagon", "the Secret Master",
   "the Secret Service", "the vice squad", "Thor", "Timothy Leary",
   "Tiny Tim", "Tom Clancy", "Tweety-Bird", "Uncle Duke", "Weird Al",
   "Winston Churchill", "yo' mama", "your brother",
   "your evil twin", "your father", "your mother", "your sister",
   "Zaphod Beeblebrox", "Zeus", "Zonker","Donovan's Brain",
   "Jimmy Hoffa","Tristero","the Archdean","Asmodeus",
   "Archangel Gabriel"
];

places = [
   "(not available at your clearance)", "Alpha Centauri",
   "Alpha Complex", "Atlantis", "Austin", "Berkeley", "Berlin",
   "Buckingham Palace", "Callahan's Place", "Cheyenne Mountain",
   "Chicago", "Cyberworld", "Dallas", "Death Valley", "Dime Box",
   "Endsville", "Gasoline Alley", "headquarters", "Hell",
   "Hollywood", "Hong Kong", "Iran", "Iraq", "Israel",
   "Joe's Bar and Grill", "Katmandu", "Lake Geneva", "Las Vegas",
   "left field", "Lithuania", "London", "Los Angeles", "Main Street",
   "Mars", "Middle Earth", "Mission Control", "Mordor", "Moscow",
   "Munich", "my back yard", "New York", "Peking", "Poland",
   "San Francisco", "Siberia", "Sixth Street", "SJ Games",
   "Switzerland", "Tel Aviv", "the back forty", "the Bastille",
   "the bathroom", "the best place possible", "the brewery",
   "the Bat Cave", "the corner bar", "the dentists' convention",
   "the doghouse", "the dumpster", "the editorial department",
   "the Empire State Building", "the hackers' convention",
   "the home of a trusted friend", "the Hotel California",
   "the Last National Bank", "the North Pole", "the ocean",
   "the outback", "the Pentagon", "the Phoenix Project", "the river",
   "the same place as before", "the service station", "the South Pole",
   "the Super Bowl", "the tavern", "the toxic waste dump",
   "the U.S. Attorney's Office", "the Vatican", "the Watergate Hotel",
   "the White House", "the World Trade Center", "Toledo", "Topeka",
   "Uranus", "Wall Street", "Washington, D.C.", "you-know-where",
   "your place", "Yrth","the Death Star",
   "beautiful downtown Burbank"
];

prepositions = [
   "assumes responsibility for", "avoids servants of",
   "deals with", "elopes with", "evades agents of", "flees from",
   "flees to", "flies to", "flies toward", "goes for", "goes to",
   "has finished in", "has left with", "hides in", "is attacked by",
   "is commanded by", "is concerned about", "is contaminated by",
   "is destroyed by", "is distressed by", "is financed by",
   "is fondled by", "is found by", "is imitated by", "is infiltrated by",
   "is joined by", "is like a god to", "is removed by",
   "is the patron of", "is threatened by", "listens to", "makes fun of",
   "may not visit", "moves to", "originates from", "reports to",
   "retreats from", "returns to", "shoots henchmen of",
   "should watch for", "steals from", "takes blame for",
   "takes control of", "takes no notice of", "takes refuge in",
   "travels to", "walks to", "was eliminated by", "was seen in",
   "will go to", "withdraws from", "assumed responsibility for",
   "avoided servants of","has dealt with", "eloped with",
   "evaded agents of", "fled from", "fled to", "flew to",
   "flew toward", "has gone for", "went to", "hides in",
   "was attacked by", "was commanded by", "was concerned about",
   "was contaminated by", "was destroyed by", "was distressed by",
   "was financed by", "was fondled by", "was found by",
   "was imitated by", "was infiltrated by", "was joined by",
   "was removed by", "was the patron of", "was threatened by",
   "listened to", "made fun of", "moved to", "originated from",
   "reported to", "retreated from", "returned to", "shot henchmen of",
   "watched for", "stole from", "took blame for", "took control of",
   "took no notice of", "took refuge in", "traveled to",
   "walked to","withdrew from", "plays with", "played with",
   "is assassinated by", "was assassinated by", "is boggled by",
   "was boggled by", "performs surgical alternations on"
];


actions = [
   "amuses", "avoids", "berates", "boggles", "bothers",
   "buries", "catches", "commands", "contaminates", "controls",
   "converts", "delivers", "destroys", "disfigures", "eats", "enters",
   "fondles", "handles", "harasses", "hassles", "helps",
   "imitates", "infiltrates", "inherits", "joins", "kills", "leaves",
   "massages", "molests", "persuades", "perverts", "pitches",
   "rebuilds", "reinforces", "removes", "replaces", "resurrects",
   "saves", "serves", "spanks", "squeezes", "strokes", "subverts",
   "swallows", "swats", "torments", "tortures", "transforms",
   "whips","teases", "stomps", "mates with", "tickles", "audits",
   "beats", "defeats", "outwits","manipulates", "defects to",
   "titillates", "perverts", "defenestrates", "discards",
   "abandons", "talks to", "talks back to", "allies with",
   "discovers", "betrays", "assassinates", "promotes",
   "pretends to be", "disguises", "disobeys", "alters",
   "intimidates"
];

 pronouns = [ "his", "my", "our", "the", "your" ];

 intros = [
   "4 out of 5 dentists recommend that","Abort immediately unless",
   "Abort previous sequence.","Advance code sequence.",
   "Alert all stations!","Confirmed report:",
   "Contrary to popular belief,","Delete all evidence that",
   "Determine whether","E.F. Hutton says","Effective immediately,",
   "Enemy agents now know that","Fnord!","Follow plan x if",
   "Ignore previous message.","Ignore this message.","Imperative that",
   "It appears that","It is not true that",
   "Most people surveyed believe that","Observe and report if",
   "Oral Roberts dreamed that","Our foes believe that",
   "Our reporters claim that","Pentagon officials deny that",
   "Please investigate report that","Step up operation.",
   "Terminate operation if", "The surgeon general warns that",
   "Unsubstantiated rumor:","Urgent!","Usual sources confirm that",
   "Warning!","We suspect that"
];

 nouns = [
   "911 file", "(censored)", "amethyst",
   "amulet", "ash tray", "baby", "BBS", "beer bottle", "blueprint",
   "boat", "book", "bowling ball", "business card", "button", "cable",
   "cactus", "cannibal", "capsule", "carnation", "cash", "cat",
   "cauliflower", "chainsaw", "chair", "chicken", "club", "cockroach",
   "code wheel", "coke can", "compact disc", "computer", "cork",
   "couch", "cow", "crystal", "cummerbund",
   "cyberdeck", "demon", "devil", "diamond", "dictaphone", "dictator",
   "dinosaur", "disk drive", "document", "dragon", "drug", "duck",
   "elephant", "engine", "eye", "file", "flag", "floppy disk",
   "fly", "football", "frame", "frog", "geographer", "goldfish",
   "grasshopper", "grimoire", "gyroslugger", "hammer", "hat",
   "hat-rack", "helmet", "hemisphere", "hot tub", "hypodermic",
   "ice cream", "ID card", "iguana", "implement", "infant", "insect",
   "jellybean", "jet", "jet ski", "jukebox", "kitten", "Klingon",
   "krugerrand", "kumquat", "lamp", "light bulb", "machine gun",
   "mallet", "manuscript", "mason jar", "message", "mosquito",
   "motorcycle", "mouse", "oar", "octopus", "olive", "ostrich",
   "paddle", "paintbrush", "paper clip", "passport", "password file",
   "password", "pendant", "penguin", "petunia", "phased plasma rifle",
   "phone", "photocopy", "piranha", "pistol", "pit viper", "plant",
   "playtester", "pop tart", "power drill", "ptarmigan", "pterodactyl",
   "puppy", "pyramid", "racquetball", "radio", "railroad", "razor",
   "rescuer", "ring", "rom chip", "saber", "saxophone", "scenario",
   "scraper", "screwdriver", "scuba mask", "sculpture", "sex toy",
   "shark", "shoggoth", "skateboard", "ski lift", "skillet",
   "spark plug", "spider", "submarine", "surfboard", "sword",
   "teddy bear", "telegram", "television", "tennis ball", "termite",
   "textbook", "toast", "tornado", "traitor", "transmitter",
   "treasure chest", "tree", "trolley", "trumpet", "typewriter",
   "user's manual", "Uzi", "van", "virus", "volleyball", "wand",
   "wheel", "whip", "yak", "Zulu","INWO deck", "ukelele", "icon",
   "amphibian", "toad", "terminal", "additive", "piccolo", "tuba",
   "angel", "demon"
];

 modifiers = [
   "apparently", "barely", "definitely", "disgustingly", "far too",
   "much too", "not", "probably", "secretly", "slightly", "too"
];

 infinitives = [
   "amuse", "avoid", "berate", "boggle", "bother", "bury",
   "catch", "command", "contaminate", "control", "convert", "deliver",
   "destroy", "disfigure", "eat", "enter", "fondle", "handle",
   "harass", "hassle", "help", "imitate", "infiltrate", "inherits",
   "join", "kill", "leave", "massage", "molest", "persuade", "pervert",
   "pitche", "rebuild", "reinforce", "remove", "replace", "resurrect",
   "save", "serve", "spank", "squeezes", "stroke", "subvert",
   "swallow", "swat", "torment", "torture", "transform", "whip"
];

 abilities = [
   "can", "cannot", "will", "will not", "should", "should not",
   "must", "must not", "will probably", "will probably not",
   "doesn't", "wants to", "is afraid to", "is ordered to"
];

  function intro() {
    return intros[ Math.floor( Math.random() * intros.length ) ]
  }

  function noun() {
    return nouns[ Math.floor( Math.random() * nouns.length ) ]
  }

  function name() {
    return names[ Math.floor( Math.random() * names.length ) ]
  }

  function place() {
    return places[ Math.floor( Math.random() * places.length ) ]
  }

  function preposition() {
    return prepositions[ Math.floor( Math.random() * prepositions.length ) ]
  }

  function action() {
    return actions[ Math.floor( Math.random() * actions.length ) ]
  }

  function pronoun() {
    return pronouns[ Math.floor( Math.random() * pronouns.length ) ]
  }

  function adjective() {
    return adjectives[ Math.floor( Math.random() * adjectives.length ) ]
  }

  function fnord() {

//    fnordString = "";

    whichGrammar = Math.ceil( Math.random() * 14 );

//    console.log( whichGrammar );

    switch ( whichGrammar ) {
      case 1:
        fnordString = "The ";
        fnordString += ( Math.random() < 0.5 ? adjective() + " " : "" );
        fnordString += noun() + " ";
        fnordString += ( Math.random() < 0.2 ? "in " + place() + " " : "" );
        fnordString += "is ";
        fnordString += adjective() + ".";
        break;
      case 2:
        fnordString = name() + " ";
        fnordString += action() + " ";
        fnordString += "the ";
        fnordString += adjective() + " ";
        fnordString += noun() + " ";
        fnordString += "and the ";
        fnordString += adjective() + " ";
        fnordString += noun() + ".";
        break;
      case 3:
        fnordString = "The ";
        fnordString += noun() + " ";
        fnordString += "from ";
        fnordString += place() + " ";
        fnordString += "will go to ";
        fnordString += place() + "."
        break;
      case 4:
        fnordString = name() + " ";
        fnordString += "must take the ";
        fnordString += adjective() + " ";
        fnordString += noun() + " ";
        fnordString += "from ";
        fnordString += place() + " ";
        fnordString += "to ";
        fnordString += place() + ".";
        break;
      case 5:
        fnordString = place() + " ";
        fnordString += "is ";
        fnordString += adjective() + " ";
        fnordString += "and the ";
        fnordString += noun() + " ";
        fnordString += "is ";
        fnordString += adjective() + ".";
        break;
      case 6:
        fnordString = name() + " ";
        fnordString += preposition() + " ";
        fnordString += place() + " ";
        fnordString += "for the ";
        fnordString += adjective() + " ";
        fnordString += noun() + ".";
        break;
      case 7:
        fnordString = "The ";
        fnordString += ( Math.random() < 0.5 ? adjective() + " " : "" );
        fnordString += noun() + " ";
        fnordString += action() + " ";
        fnordString += "the ";
        fnordString += adjective() + " ";
        fnordString += noun();
        fnordString += ( Math.random() < 0.5 ? " in " + place() + "." : "." );
        break;
      case 8:
        fnordString = name() + " ";
        fnordString += preposition() + " ";
        fnordString += place() + " and ";
        fnordString += action() + " the ";
        fnordString += noun() + ".";
        break;
      case 9:
        fnordString = name() + " ";
        fnordString += "takes ";
        fnordString += pronoun() + " ";
        fnordString += ( Math.random() < 0.5 ? adjective() + " " : "" );
        fnordString += noun();
        fnordString += " and ";
        fnordString += preposition() + " ";
        fnordString += place() + ".";
        break;
      case 10:
        fnordString = name() + " ";
        fnordString += action() + " ";
        fnordString += "the ";
        fnordString += ( Math.random() < 0.5 ? adjective() + " " : "" );
        fnordString += noun() + ".";
        break;
      case 11:
        fnordString = name() + " ";
        fnordString += action() + " ";
        fnordString += name() + " and ";
        fnordString += pronoun() + " ";
        fnordString += ( Math.random() < 0.5 ? adjective() + " " : "" );
        fnordString += noun() + ".";
        break;
      case 12:
        fnordString = name() + " is the ";
        fnordString += ( Math.random() < 0.5 ? adjective() + " " : "" );
        fnordString += noun() + "; ";
        fnordString += name() + " ";
        fnordString += preposition() + " ";
        fnordString += place() + ".";
        break;
      case 13:
        fnordString = "You must meet ";
        fnordString += name() + " at ";
        fnordString += place() + " ";
        fnordString += "and get the ";
        fnordString += ( Math.random() < 0.5 ? adjective() + " " : "" );
        fnordString += noun() + ".";
        break;
      case 14:
        fnordString = "A ";
        fnordString += noun() + " from ";
        fnordString += place() + " ";
        fnordString += action() + " the ";
        fnordString += ( Math.random() < 0.5 ? adjective() + " " : "" );
        fnordString += ( Math.random() < 0.2 ? adjective() + " " : "" );
        fnordString += noun() + ".";
        break;

    }

    fnordString = fnordString.charAt(0).toUpperCase() + fnordString.slice(1)


    return fnordString;

  }
