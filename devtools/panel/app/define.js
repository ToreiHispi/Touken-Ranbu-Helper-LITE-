(function(exports) {
  if (!exports.tohken) {
    exports.tohken = {};
  }
  if (!exports.tohken.define) {
    exports.tohken.define = {};
  }
  exports.tohken.define.type = {
    "1": "Oodachi",
    "2": "Tachi",
    "3": "Naginata",
    "4": "Wakizashi",
    "5": "Uchigatana",
    "6": "Yari",
    "7": "Tantou",
    "8": "Tsurugi",
  };
  exports.tohken.define.group = {
    "1": "None",
    "2": "Sanjou",
    "3": "Kanesada",
    "4": "Kobizen",
    "5": "Horikawa",
    "6": "Samonji",
    "7": "Muramasa",
    "8": "Rai",
    "9": "Awataguchi",
    "10": "Kotetsu",
    "11": "Osafune",
    "12": "Aoe",
    "13": "Sadamune",
    "14": "Miike",
    "15": "Kotetsu...?",
    "16": "Masamune",
    "17": "Gou",
	"18": "Fukuoka Ichimonji"
  };
  exports.tohken.define.area = {
    "1": "Short",
    "2": "Wide",
    "3": "Horizontal",
    "4": "Vertical"
  };
  exports.tohken.define.tohkens = {
    "3": {
      "name": "Mikazuki",
      "id": 3,
      "rarity": 5,
      "type": 2,
      "group": 2,
      "equip": 3,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "5": {
      "name": "Kogitsunemaru",
      "id": 5,
      "rarity": 3,
      "type": 2,
      "group": 2,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "7": {
      "name": "Ishikirimaru",
      "id": 7,
      "rarity": 3,
      "type": 1,
      "group": 2,
      "equip": 2,
	  "area": 2,
      "upgrade": 25,
      "symbol": 1
    },
    "8": {
      "name": "Ishikirimaru K.",
      "id": 8,
      "rarity": 4,
      "type": 1,
      "group": 2,
      "equip": 3,
	  "area": 2,
      "upgrade": 25,
      "symbol": 7
    },
    "9": {
      "name": "Iwatooshi",
      "id": 9,
      "rarity": 3,
      "type": 3,
      "group": 2,
      "equip": 2,
	  "area": 3,
      "upgrade": 25,
      "symbol": 1
    },
	"10": {
      "name": "Iwatooshi K.",
      "id": 10,
      "rarity": 4,
      "type": 3,
      "group": 2,
      "equip": 3,
	  "area": 3,
      "upgrade": 25,
      "symbol": 6
    },
    "11": {
      "name": "Imanotsurugi",
      "id": 11,
      "rarity": 1,
      "type": 7,
      "group": 2,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "12": {
      "name": "Imanotsurugi K.",
      "id": 12,
      "rarity": 2,
      "type": 7,
      "group": 2,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 2
    },
    "13": {
      "name": "Oodenta",
      "id": 13,
      "rarity": 5,
      "type": 2,
      "group": 14,
      "equip": 3,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "15": {
      "name": "Sohayanotsurugi",
      "id": 15,
      "rarity": 3,
      "type": 2,
      "group": 14,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "17": {
      "name": "Juzumaru",
      "id": 17,
      "rarity": 5,
      "type": 2,
      "group": 12,
      "equip": 3,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "19": {
      "name": "Nikkari",
      "id": 19,
      "rarity": 2,
      "type": 4,
      "group": 12,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "20": {
      "name": "Nikkari K.",
      "id": 20,
      "rarity": 3,
      "type": 4,
      "group": 12,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 3
    },
	"21": {
      "name": "Onimaru",
      "id": 21,
      "rarity": 5,
      "type": 2,
      "group": 9,
      "equip": 3,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "23": {
      "name": "Nakigitsune",
      "id": 23,
      "rarity": 2,
      "type": 5,
      "group": 9,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "24": {
      "name": "Nakigitsune K.",
      "id": 24,
      "rarity": 3,
      "type": 5,
      "group": 9,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 4
    },
    "25": {
      "name": "Ichigo",
      "id": 25,
      "rarity": 4,
      "type": 2,
      "group": 9,
      "equip": 3,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "27": {
      "name": "Namazuo",
      "id": 27,
      "rarity": 2,
      "type": 4,
      "group": 9,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "28": {
      "name": "Namazuo K.",
      "id": 28,
      "rarity": 3,
      "type": 4,
      "group": 9,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 3
    },
    "29": {
      "name": "Honebami",
      "id": 29,
      "rarity": 2,
      "type": 4,
      "group": 9,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "30": {
      "name": "Honebami K.",
      "id": 30,
      "rarity": 3,
      "type": 4,
      "group": 9,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 3
    },
    "31": {
      "name": "Hirano",
      "id": 31,
      "rarity": 1,
      "type": 7,
      "group": 9,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "32": {
      "name": "Hirano K.",
      "id": 32,
      "rarity": 2,
      "type": 7,
      "group": 9,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 2
    },
    "33": {
      "name": "Atsushi",
      "id": 33,
      "rarity": 1,
      "type": 7,
      "group": 9,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "34": {
      "name": "Atsushi K.",
      "id": 34,
      "rarity": 2,
      "type": 7,
      "group": 9,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 2
    },
    "35": {
      "name": "Gotou",
      "id": 35,
      "rarity": 1,
      "type": 7,
      "group": 9,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "36": {
      "name": "Gotou K.",
      "id": 36,
      "rarity": 2,
      "type": 7,
      "group": 9,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 2
    },
    "37": {
      "name": "Shinano",
      "id": 37,
      "rarity": 1,
      "type": 7,
      "group": 9,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "38": {
      "name": "Shinano K.",
      "id": 38,
      "rarity": 2,
      "type": 7,
      "group": 9,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 2
    },
    "39": {
      "name": "Maeda",
      "id": 39,
      "rarity": 1,
      "type": 7,
      "group": 9,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "40": {
      "name": "Maeda K.",
      "id": 40,
      "rarity": 2,
      "type": 7,
      "group": 9,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 2
    },
    "41": {
      "name": "Akita",
      "id": 41,
      "rarity": 1,
      "type": 7,
      "group": 9,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "42": {
      "name": "Akita K.",
      "id": 42,
      "rarity": 2,
      "type": 7,
      "group": 9,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 2
    },
    "43": {
      "name": "Hakata",
      "id": 43,
      "rarity": 1,
      "type": 7,
      "group": 9,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "44": {
      "name": "Hakata K.",
      "id": 44,
      "rarity": 2,
      "type": 7,
      "group": 9,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 2
    },
    "45": {
      "name": "Midare",
      "id": 45,
      "rarity": 1,
      "type": 7,
      "group": 9,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "46": {
      "name": "Midare K.",
      "id": 46,
      "rarity": 2,
      "type": 7,
      "group": 9,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 2
    },
    "47": {
      "name": "Gokotai",
      "id": 47,
      "rarity": 1,
      "type": 7,
      "group": 9,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "48": {
      "name": "Gokotai K.",
      "id": 48,
      "rarity": 2,
      "type": 7,
      "group": 9,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 2
    },
    "49": {
      "name": "Yagen",
      "id": 49,
      "rarity": 1,
      "type": 7,
      "group": 9,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "50": {
      "name": "Yagen K.",
      "id": 50,
      "rarity": 2,
      "type": 7,
      "group": 9,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 2
    },
    "51": {
      "name": "Houchou",
      "id": 51,
      "rarity": 1,
      "type": 7,
      "group": 9,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "52": {
      "name": "Houchou K.",
      "id": 52,
      "rarity": 2,
      "type": 7,
      "group": 9,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 2
  },
    "53": {
      "name": "Ookanehira",
      "id": 53,
      "rarity": 5,
      "type": 2,
      "group": 4,
      "equip": 3,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "55": {
      "name": "Uguisumaru",
      "id": 55,
      "rarity": 4,
      "type": 2,
      "group": 4,
      "equip": 3,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "57": {
      "name": "Akashi",
      "id": 57,
      "rarity": 3,
      "type": 2,
      "group": 8,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "59": {
      "name": "Hotarumaru",
      "id": 59,
      "rarity": 4,
      "type": 1,
      "group": 8,
      "equip": 3,
	  "area": 2,
      "upgrade": 25,
      "symbol": 1
    },
    "60": {
      "name": "Hotarumaru K.",
      "id": 60,
      "rarity": 5,
      "type": 1,
      "group": 8,
      "equip": 3,
	  "area": 2,
      "upgrade": 25,
      "symbol": 7
    },
    "61": {
      "name": "Aizen",
      "id": 61,
      "rarity": 1,
      "type": 7,
      "group": 8,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "62": {
      "name": "Aizen K.",
      "id": 62,
      "rarity": 2,
      "type": 7,
      "group": 8,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 2
    },
    "63": {
      "name": "Sengo",
      "id": 63,
      "rarity": 3,
      "type": 5,
      "group": 7,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    }, 
    "64": {
      "name": "Sengo K.",
      "id": 64,
      "rarity": 4,
      "type": 5,
      "group": 7,
      "equip": 3,
      "area": 1,
      "upgrade": 25,
      "symbol": 5
    }, 
    "65": {
      "name": "Tonbokiri",
      "id": 65,
      "rarity": 3,
      "type": 6,
      "group": 7,
      "equip": 2,
      "area": 4,
      "upgrade": 25,
      "symbol": 1
    },
	"66": {
      "name": "Tonbokiri K.",
      "id": 66,
      "rarity": 4,
      "type": 6,
      "group": 7,
      "equip": 3,
      "area": 4,
      "upgrade": 25,
      "symbol": 3
    },    
    "67": {
      "name": "Monoyoshi",
      "id": 67,
      "rarity": 2,
      "type": 4,
      "group": 13,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "68": {
      "name": "Monoyoshi K.",
      "id": 68,
      "rarity": 3,
      "type": 4,
      "group": 13,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 3
    },
    "69": {
      "name": "Taikogane",
      "id": 69,
      "rarity": 1,
      "type": 7,
      "group": 13,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "70": {
      "name": "Taikogane K.",
      "id": 70,
      "rarity": 2,
      "type": 7,
      "group": 13,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 2
    },
    "71": {
      "name": "Kikkou",
      "id": 71,
      "rarity": 2,
      "type": 5,
      "group": 13,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "72": {
      "name": "Kikkou K.",
      "id": 72,
      "rarity": 3,
      "type": 5,
      "group": 13,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 4
    },
    "73": {
      "name": "Shoukudaikiri",
      "id": 73,
      "rarity": 3,
      "type": 2,
      "group": 11,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "75": {
      "name": "Daihannya",
      "id": 75,
      "rarity": 4,
      "type": 2,
      "group": 11,
      "equip": 3,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "77": {
      "name": "Koryuu",
      "id": 77,
      "rarity": 4,
      "type": 2,
      "group": 11,
      "equip": 3,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "79": {
      "name": "Kousetsu",
      "id": 79,
      "rarity": 4,
      "type": 2,
      "group": 6,
      "equip": 3,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "81": {
      "name": "Souza",
      "id": 81,
      "rarity": 2,
      "type": 5,
      "group": 6,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "82": {
      "name": "Souza K.",
      "id": 82,
      "rarity": 3,
      "type": 5,
      "group": 6,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 4
    },
    "83": {
      "name": "Sayo",
      "id": 83,
      "rarity": 1,
      "type": 7,
      "group": 6,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "84": {
      "name": "Sayo K.",
      "id": 84,
      "rarity": 2,
      "type": 7,
      "group": 6,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 2
    },
    "85": {
      "name": "Kashuu",
      "id": 85,
      "rarity": 2,
      "type": 5,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "86": {
      "name": "Kashuu K.",
      "id": 86,
      "rarity": 3,
      "type": 5,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 4
    },
    "87": {
      "name": "Yamatonokami",
      "id": 87,
      "rarity": 2,
      "type": 5,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "88": {
      "name": "Yamatonokami K.",
      "id": 88,
      "rarity": 3,
      "type": 5,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 4
    },
    "89": {
      "name": "Kasen",
      "id": 89,
      "rarity": 2,
      "type": 5,
      "group": 3,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "90": {
      "name": "Kasen K.",
      "id": 90,
      "rarity": 3,
      "type": 5,
      "group": 3,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 4
    },
    "91": {
      "name": "Izuminokami",
      "id": 91,
      "rarity": 3,
      "type": 2,
      "group": 3,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "92": {
      "name": "Izuminokami K.",
      "id": 92,
      "rarity": 4,
      "type": 2,
      "group": 3,
      "equip": 3,
      "area": 1,
      "upgrade": 25,
      "symbol": 5
    },
    "93": {
      "name": "Mutsunokami",
      "id": 93,
      "rarity": 2,
      "type": 5,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "94": {
      "name": "Mutsunokami K.",
      "id": 94,
      "rarity": 3,
      "type": 5,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 4
    },
    "95": {
      "name": "Yamanbagiri",
      "id": 95,
      "rarity": 2,
      "type": 5,
      "group": 5,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "96": {
      "name": "Yamanbagiri K.",
      "id": 96,
      "rarity": 3,
      "type": 5,
      "group": 5,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 4
    },
    "97": {
      "name": "Yamabushi",
      "id": 97,
      "rarity": 3,
      "type": 2,
      "group": 5,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "99": {
      "name": "Horikawa",
      "id": 99,
      "rarity": 2,
      "type": 4,
      "group": 5,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "100": {
      "name": "Horikawa K.",
      "id": 100,
      "rarity": 3,
      "type": 4,
      "group": 5,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 3
    },
    "101": {
      "name": "Hachisuka",
      "id": 101,
      "rarity": 2,
      "type": 5,
      "group": 10,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "102": {
      "name": "Hachisuka K.",
      "id": 102,
      "rarity": 3,
      "type": 5,
      "group": 10,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 4
    },
    "103": {
      "name": "Urashima",
      "id": 103,
      "rarity": 2,
      "type": 4,
      "group": 10,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "104": {
      "name": "Urashima K.",
      "id": 104,
      "rarity": 3,
      "type": 4,
      "group": 10,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 3
    },
    "105": {
      "name": "Nagasone",
      "id": 105,
      "rarity": 2,
      "type": 5,
      "group": 15,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "106": {
      "name": "Nagasone K.",
      "id": 106,
      "rarity": 3,
      "type": 5,
      "group": 15,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 4
    },
    "107": {
      "name": "Higekiri",
      "id": 107,
      "rarity": 2,
      "type": 2,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "108": {
      "name": "Higekiri",
      "id": 108,
      "rarity": 2,
      "type": 2,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 50,
      "symbol": 1
    },
    "109": {
      "name": "Higekiri",
      "id": 109,
      "rarity": 3,
      "type": 3,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 75,
      "symbol": 1
    },
    "110": {
      "name": "Higekiri",
      "id": 110,
      "rarity": 4,
      "type": 2,
      "group": 1,
      "equip": 3,
      "area": 1,
      "upgrade": 75,
      "symbol": 1
    },
    "112": {
      "name": "Hizamaru",
      "id": 112,
      "rarity": 2,
      "type": 2,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "113": {
      "name": "Hizamaru",
      "id": 113,
      "rarity": 3,
      "type": 2,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 50,
      "symbol": 1
    },
    "114": {
      "name": "Hizamaru",
      "id": 114,
      "rarity": 4,
      "type": 2,
      "group": 1,
      "equip": 3,
      "area": 1,
      "upgrade": 50,
      "symbol": 1
    },
    "116": {
      "name": "Ookurikara",
      "id": 116,
      "rarity": 3,
      "type": 2,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "117": {
      "name": "Ookurikara K.",
      "id": 117,
      "rarity": 4,
      "type": 2,
      "group": 1,
      "equip": 3,
      "area": 1,
      "upgrade": 20,
      "symbol": 5
    },
    "118": {
      "name": "Hasebe",
      "id": 118,
      "rarity": 2,
      "type": 5,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "119": {
      "name": "Hasebe K.",
      "id": 119,
      "rarity": 3,
      "type": 5,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 4
    },
    "120": {
      "name": "Fudou",
      "id": 120,
      "rarity": 1,
      "type": 7,
      "group": 9,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "121": {
      "name": "Fudou K.",
      "id": 121,
      "rarity": 2,
      "type": 7,
      "group": 9,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 2
    },
    "122": {
      "name": "Shishiou",
      "id": 122,
      "rarity": 3,
      "type": 2,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "124": {
      "name": "Kogarasumaru",
      "id": 124,
      "rarity": 5,
      "type": 2,
      "group": 1,
      "equip": 3,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "128": {
      "name": "Doudanuki",
      "id": 128,
      "rarity": 3,
      "type": 2,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "129": {
      "name": "Doudanuki K.",
      "id": 129,
      "rarity": 4,
      "type": 2,
      "group": 1,
      "equip": 3,
      "area": 1,
      "upgrade": 25,
      "symbol": 5
    },
    "130": {
      "name": "Tsurumaru",
      "id": 130,
      "rarity": 4,
      "type": 2,
      "group": 1,
      "equip": 3,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "132": {
      "name": "Taroutachi",
      "id": 132,
      "rarity": 3,
      "type": 1,
      "group": 1,
      "equip": 2,
	  "area": 2,
      "upgrade": 25,
      "symbol": 1
    },
    "133": {
      "name": "Taroutachi K.",
      "id": 133,
      "rarity": 4,
      "type": 1,
      "group": 1,
      "equip": 3,
	  "area": 2,
      "upgrade": 25,
      "symbol": 7
    },
    "134": {
      "name": "Jiroutachi",
      "id": 134,
      "rarity": 3,
      "type": 1,
      "group": 1,
      "equip": 2,
	  "area": 2,
      "upgrade": 25,
      "symbol": 1
    },
    "135": {
      "name": "Jiroutachi K.",
      "id": 135,
      "rarity": 4,
      "type": 1,
      "group": 1,
      "equip": 3,
	  "area": 2,
      "upgrade": 25,
      "symbol": 7
    },
    "136": {
      "name": "Nihongou",
      "id": 136,
      "rarity": 3,
      "type": 6,
      "group": 1,
      "equip": 2,
      "area": 4,
      "upgrade": 25,
      "symbol": 1
    },
	"137": {
      "name": "Nihongou K.",
      "id": 137,
      "rarity": 4,
      "type": 6,
      "group": 1,
      "equip": 3,
      "area": 4,
      "upgrade": 25,
      "symbol": 3
    },
    "138": {
      "name": "Otegine",
      "id": 138,
      "rarity": 3,
      "type": 6,
      "group": 1,
      "equip": 2,
      "area": 4,
      "upgrade": 25,
      "symbol": 1
    },
	"139": {
      "name": "Otegine K.",
      "id": 139,
      "rarity": 4,
      "type": 6,
      "group": 1,
      "equip": 3,
      "area": 4,
      "upgrade": 25,
      "symbol": 3
    },
    "140": {
      "name": "Tomoegata",
      "id": 140,
      "rarity": 3,
      "type": 3,
      "group": 1,
      "equip": 2,
	  "area": 3,
      "upgrade": 25,
      "symbol": 1
    },
	"141": {
      "name": "Tomoegata K.",
      "id": 141,
      "rarity": 4,
      "type": 3,
      "group": 1,
      "equip": 3,
	  "area": 3,
      "upgrade": 25,
      "symbol": 6
    },
    "142": {
      "name": "Mouri",
      "id": 142,
      "rarity": 1,
      "type": 7,
      "group": 9,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
	"143": {
	  "name": "Mouri K.",
	  "id": 143,
	  "rarity": 2,
	  "type": 7,
	  "group": 9,
	  "equip": 2,
	  "area": 1,
	  "upgrade": 20,
	  "symbol": 2
	},
    "144": {
      "name": "Kotegiri",
      "id": 144,
      "rarity": 2,
      "type": 4,
      "group": 17,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
	"145": {
	  "name": "Kotegiri K.",
	  "id": 145,
	  "rarity": 3,
	  "type": 4,
	  "group": 17,
	  "equip": 2,
	  "area": 1,
	  "upgrade": 20,
	  "symbol": 3
	},
    "146": {
      "name": "Kenshin",
      "id": 146,
      "rarity": 1,
      "type": 7,
      "group": 11,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
	"147": {
	  "name": "Kenshin K.",
	  "id": 147,
	  "rarity": 2,
	  "type": 7,
	  "group": 11,
	  "equip": 2,
	  "area": 1,
	  "upgrade": 20,
	  "symbol": 2
	},
    "148": {
      "name": "Azuki",
      "id": 148,
      "rarity": 3,
      "type": 2,
      "group": 11,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "150": {
      "name": "Hyuuga",
      "id": 150,
      "rarity": 1,
      "type": 7,
      "group": 16,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
	"151": {
	  "name": "Hyuuga K.",
	  "id": 151,
	  "rarity": 2,
	  "type": 7,
	  "group": 16,
	  "equip": 2,
	  "area": 1,
	  "upgrade": 20,
	  "symbol": 2
	},
    "152": {
      "name": "Shizukagata",
      "id": 152,
      "rarity": 3,
      "type": 3,
      "group": 1,
      "equip": 2,
	  "area": 3,
      "upgrade": 25,
      "symbol": 1
    },
	"153": {
      "name": "Shizukagata K.",
      "id": 153,
      "rarity": 4,
      "type": 3,
      "group": 1,
      "equip": 3,
	  "area": 3,
      "upgrade": 25,
      "symbol": 6
    },
    "154": {
      "name": "Nansen",
      "id": 154,
      "rarity": 2,
      "type": 5,
      "group": 18,
      "equip": 2,
	  "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
	"155": {
	  "name": "Nansen K.",
	  "id": 155,
	  "rarity": 3,
	  "type": 5,
	  "group": 18,
	  "equip": 2,
	  "area": 1,
	  "upgrade": 20,
	  "symbol": 4
	},
    "156": {
      "name": "Chiyoganemaru",
      "id": 156,
      "rarity": 3,
      "type": 2,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "158": {
      "name": "Chougi",
      "id": 158,
      "rarity": 2,
      "type": 5,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
	"159": {
	  "name": "Chougi K.",
	  "id": 159,
	  "rarity": 3,
	  "type": 5,
	  "group": 1,
	  "equip": 2,
	  "area": 1,
	  "upgrade": 20,
	  "symbol": 4
	},
    "160": {
      "name": "Buzen",
      "id": 160,
      "rarity": 2,
      "type": 5,
      "group": 17,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
	"161": {
	  "name": "Buzen K.",
	  "id": 161,
	  "rarity": 3,
	  "type": 5,
	  "group": 17,
	  "equip": 2,
	  "area": 1,
	  "upgrade": 20,
	  "symbol": 4
	},
    "162": {
      "name": "Nenekirimaru",
      "id": 162,
      "rarity": 3,
      "type": 1,
      "group": 1,
      "equip": 2,
	  "area": 2,
      "upgrade": 25,
      "symbol": 1
    },
	"163": {
	  "name": "Nenekirimaru K.",
	  "id": 163,
	  "rarity": 4,
	  "type": 1,
	  "group": 1,
	  "equip": 3,
	  "area": 2,
	  "upgrade": 25,
	  "symbol": 7
	},
    "164": {
      "name": "Hakusan",
      "id": 164,
      "rarity": 4,
      "type": 8,
      "group": 9,
      "equip": 3,
	  "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
	"166": {
      "name": "Nankaitarou",
      "id": 166,
      "rarity": 2,
      "type": 5,
      "group": 1,
      "equip": 2,
	  "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
	"167": {
      "name": "Nankaitarou K.",
      "id": 167,
      "rarity": 3,
      "type": 5,
      "group": 1,
      "equip": 2,
	  "area": 1,
      "upgrade": 20,
      "symbol": 4
    },
	"168": {
      "name": "Hizen",
      "id": 168,
      "rarity": 2,
      "type": 4,
      "group": 1,
      "equip": 2,
	  "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
	"169": {
      "name": "Hizen K.",
      "id": 169,
      "rarity": 3,
      "type": 4,
      "group": 1,
      "equip": 2,
	  "area": 1,
      "upgrade": 20,
      "symbol": 3
    },
	"170": {
	  "name": "Chatannakiri",
      "id": 170,
      "rarity": 1,
      "type": 7,
      "group": 1,
      "equip": 1,
	  "area": 1,
      "upgrade": 20,
      "symbol": 1
	},
	"171": {
	  "name": "Chatannakiri K.",
      "id": 171,
      "rarity": 2,
      "type": 7,
      "group": 1,
      "equip": 2,
	  "area": 1,
      "upgrade": 20,
      "symbol": 2
	},
	"172": {
	  "name": "Kuwana Gou",
      "id": 172,
      "rarity": 2,
      "type": 5,
      "group": 17,
      "equip": 2,
	  "area": 1,
      "upgrade": 20,
      "symbol": 1
	},
	"173": {
	  "name": "Kuwana Gou K.",
      "id": 173,
      "rarity": 3,
      "type": 5,
      "group": 17,
      "equip": 2,
	  "area": 1,
      "upgrade": 20,
      "symbol": 4
	},
	"174": {
	  "name": "Suishinshi",
      "id": 174,
      "rarity": 2,
      "type": 5,
      "group": 1,
      "equip": 2,
	  "area": 1,
      "upgrade": 20,
      "symbol": 1
	},
	"175": {
	  "name": "Suishinshi K.",
      "id": 175,
      "rarity": 3,
      "type": 5,
      "group": 1,
      "equip": 2,
	  "area": 1,
      "upgrade": 20,
      "symbol": 4
	},
	"176": {
	  "name": "Minamoto",
      "id": 176,
      "rarity": 2,
      "type": 5,
      "group": 1,
      "equip": 2,
	  "area": 1,
      "upgrade": 20,
      "symbol": 1
	},
	"177": {
	  "name": "Minamoto K.",
      "id": 177,
      "rarity": 3,
      "type": 5,
      "group": 1,
      "equip": 2,
	  "area": 1,
      "upgrade": 20,
      "symbol": 4
	},
	"178": {
	  "name": "Matsui",
      "id": 178,
      "rarity": 2,
      "type": 5,
      "group": 17,
      "equip": 2,
	  "area": 1,
      "upgrade": 20,
      "symbol": 1
	},
	"179": {
	  "name": "Matsui K.",
      "id": 179,
      "rarity": 3,
      "type": 5,
      "group": 17,
      "equip": 2,
	  "area": 1,
      "upgrade": 20,
      "symbol": 4
	},
	"180": {
      "name": "Sanchoumou",
      "id": 180,
      "rarity": 5,
      "type": 2,
      "group": 18,
      "equip": 3,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    }
  };
  exports.tohken.define.equiptype = {
    "1": "Catapult",
    "2": "Spearmen",
    "3": "Light Infantry",
    "4": "Heavy Infantry",
    "5": "Shieldmen",
    "6": "Light Cavalry",
    "7": "Hesvy Cavalry",
    "8": "Elite",
    "9": "Archers",
    "10": "Musketeers",
    "11": "Bean Thrower",
	"12": "Demon Troop", //Demon Oodachi troops 敵刀装_鬼
	"13": "Water Artillery", //Seaside Camp troops 水砲兵
	"14": "Water Artillery", //Enemy Seaside Camp troops 敵刀装_水砲兵
    "-1": "Horse"
  };
  exports.tohken.define.equiptype_s = {
    "1": "Catapult",
    "2": "Spearmen",
    "3": "Light Infantry",
    "4": "Heavy Infantry",
    "5": "Shieldmen",
    "6": "Light Cavalry",
    "7": "Heavy Cavalry",
    "8": "Elite",
    "9": "Archers",
    "10": "Musketeers",
    "11": "Bean Thrower",
	"12": "Demon Troop", //Demon Oodachi troops 敵刀装_鬼
	"13": "Water Artillery", //Seaside Camp troops 水砲兵
	"14": "Water Artillery" //Enemy Seaside Camp troops 敵刀装_水砲兵
  };
  exports.tohken.define.equip = {
    "1": {
      "name": "Catapult·Bronze",
      "soldier": 8,
      "type": 1
    },
    "2": {
      "name": "Catapult·Silver",
      "soldier": 9,
      "type": 1
    },
    "3": {
      "name": "Catapult·Gold",
      "soldier": 10,
      "type": 1
    },
    "4": {
      "name": "Spearman·Bronze",
      "soldier": 7,
      "type": 2
    },
    "5": {
      "name": "Spearmen·Silver",
      "soldier": 7,
      "type": 2
    },
    "6": {
      "name": "Spearmen·Gold",
      "soldier": 8,
      "type": 2
    },
    "7": {
      "name": "Light Infantry·Bronze",
      "soldier": 8,
      "type": 3
    },
    "8": {
      "name": "Light Infantry·Silver",
      "soldier": 9,
      "type": 3
    },
    "9": {
      "name": "Light Infantry·Gold",
      "soldier": 10,
      "type": 3
    },
    "10": {
      "name": "Heavy Infantry·Bronze",
      "soldier": 10,
      "type": 4
    },
    "11": {
      "name": "Heavy Infantry·Silver",
      "soldier": 11,
      "type": 4
    },
    "12": {
      "name": "Heavy Infantry·Gold",
      "soldier": 12,
      "type": 4
    },
    "13": {
      "name": "Shieldmen·Bronze",
      "soldier": 11,
      "type": 5
    },
    "14": {
      "name": "Shieldmen·Silver",
      "soldier": 13,
      "type": 5
    },
    "15": {
      "name": "Shieldmen·Gold",
      "soldier": 15,
      "type": 5
    },
    "16": {
      "name": "Light Cavalry·Bronze",
      "soldier": 9,
      "type": 6
    },
    "17": {
      "name": "Light Cavalry·Silver",
      "soldier": 10,
      "type": 6
    },
    "18": {
      "name": "Light Cavalry·Gold",
      "soldier": 12,
      "type": 6
    },
    "19": {
      "name": "Heavy Cavalry·Bronze",
      "soldier": 11,
      "type": 7
    },
    "20": {
      "name": "Heavy Cavalry·Silver",
      "soldier": 12,
      "type": 7
    },
    "21": {
      "name": "Heavy Cavalry·Gold",
      "soldier": 13,
      "type": 7
    },
    "22": {
      "name": "Elite·Bronze",
      "soldier": 11,
      "type": 8
    },
    "23": {
      "name": "Elite·Silver",
      "soldier": 12,
      "type": 8
    },
    "24": {
      "name": "Elite·Gold",
      "soldier": 13,
      "type": 8
    },
    "25": {
      "name": "Archers·Bronze",
      "soldier": 6,
      "type": 9
    },
    "26": {
      "name": "Archers·Silver",
      "soldier": 7,
      "type": 9
    },
    "27": {
      "name": "Archers·Gold",
      "soldier": 8,
      "type": 9
    },
    "28": {
      "name": "Musketeers·Bronze",
      "soldier": 5,
      "type": 10
    },
    "29": {
      "name": "Musketeers·Silver",
      "soldier": 6,
      "type": 10
    },
    "30": {
      "name": "Musketeers·Gold",
      "soldier": 6,
      "type": 10
    },
    "31": {
      "name": "Bean Thrower·Bronze",
      "soldier": 8,
      "type": 11
    },
    "32": {
      "name": "Bean Thrower·Silver",
      "soldier": 9,
      "type": 11
    },
    "33": {
      "name": "Bean Thrower·Gold",
      "soldier": 10,
      "type": 11
    },
	"34": {
	  "name": "Water Artillery·B",
	  "soldier": 8,
	  "type": 13
	},
	"35": {
	  "name": "Water Artillery·S",
	  "soldier": 9,
	  "type": 13
	},
	"36": {
	  "name": "Water Artillery·G",
	  "soldier": 10,
	  "type": 13
	},
    "10001": {
      "name": "Horse 01 Oba",
      "soldier": 0,
      "type": -1
    },
    "10002": {
      "name": "Horse 02 Mikuniguro",
      "soldier": 0,
      "type": -1
    },
    "10003": {
      "name": "Horse 03 Matsukaze",
      "soldier": 0,
      "type": -1
    },
    "10004": {
      "name": "Horse 04 Kohibari",
      "soldier": 0,
      "type": -1
    },
    "10005": {
      "name": "Horse 05 Takadateguro",
      "soldier": 0,
      "type": -1
    },
    "10006": {
      "name": "Horse 06 Hanakōji",
      "soldier": 0,
      "type": -1
    },
    "10007": {
      "name": "Horse 07 Segaiwa",
      "soldier": 0,
      "type": -1
    },
    "10008": {
      "name": "Horse 08 Mochizuki",
      "soldier": 0,
      "type": -1
    },
    "11011": {
      "name": "Horse Shiroge",
      "soldier": 0,
      "type": -1
    },
    "11021": {
      "name": "Horse Kage",
      "soldier": 0,
      "type": -1
    },
    "11031": {
      "name": "Horse Aoge",
      "soldier": 0,
      "type": -1
    },
    "11041": {
      "name": "Horse Iwaiichigou",
      "soldier": 0,
      "type": -1
    },
    "11042": {
      "name": "Horse Iwainigou",
      "soldier": 0,
      "type": -1
    },
    "11043": {
      "name": "Horse Iwaisangou",
      "soldier": 0,
      "type": -1
    },
	"11044": {
      "name": "Horse Iwaiyongou",
      "soldier": 0,
      "type": -1
    },
	"11045": {
      "name": "Horse Iwaigogou",
      "soldier": 0,
      "type": -1
    }
  };
  exports.tohken.define.era = {
    "1": "Memory of Meiji Restoration",
    "2": "Memdory of Edo",
    "3": "Memory of Shokuho",
    "4": "Memory of Sengoku",
    "5": "Memory of Samurai",
	"6": "Memory of Ikedaya",
	"7": "Memory of Enkyou",
	"8": "Memory of Anonogahara"
  };
  exports.tohken.define.map = {
    "1": {
      "id": "1-1",
      "no": "1",
      "area": "1",
      "name": "Hakodate",
      "star": "1",
      "resource": "-",
      "max_lv": "11",
      "sence": ""
    },
    "2": {
      "id": "1-2",
      "no": "2",
      "area": "1",
      "name": "Aizu",
      "star": "1",
      "resource": "Charcoal",
      "max_lv": "12",
      "sence": ""
    },
    "3": {
      "id": "1-3",
      "no": "3",
      "area": "1",
      "name": "Utsunomiya",
      "star": "1",
      "resource": "Whetstone",
      "max_lv": "13",
      "sence": ""
    },
    "4": {
      "id": "1-4",
      "no": "4",
      "area": "1",
      "name": "Toba",
      "star": "2",
      "resource": "Charcoal,Coolant",
      "max_lv": "20",
      "sence": ""
    },
    "5": {
      "id": "2-1",
      "no": "5",
      "area": "2",
      "name": "Toba",
      "star": "1",
      "resource": "Steel,Whetstone",
      "max_lv": "23",
      "sence": ""
    },
    "6": {
      "id": "2-2",
      "no": "6",
      "area": "2",
      "name": "Edo",
      "star": "1",
      "resource": "Charcoal",
      "max_lv": "26",
      "sence": ""
    },
    "7": {
      "id": "2-3",
      "no": "7",
      "area": "2",
      "name": "Edo(Genroku)",
      "star": "2",
      "resource": "Coolant",
      "max_lv": "29",
      "sence": ""
    },
    "8": {
      "id": "2-4",
      "no": "8",
      "area": "2",
      "name": "Edo(Seige of Osaka Winter Campaign)",
      "star": "2",
      "resource": "Request Token",
      "max_lv": "32",
      "sence": ""
    },
    "9": {
      "id": "3-1",
      "no": "9",
      "area": "3",
      "name": "Sekihagara",
      "star": "2",
      "resource": "Whetstone",
      "max_lv": "40",
      "sence": ""
    },
    "10": {
      "id": "3-2",
      "no": "10",
      "area": "3",
      "name": "Honnouji",
      "star": "2",
      "resource": "Steel,Request Token",
      "max_lv": "42",
      "sence": ""
    },
    "11": {
      "id": "3-3",
      "no": "11",
      "area": "3",
      "name": "Echizen",
      "star": "2",
      "resource": "Charcoal,Steel",
      "max_lv": "47",
      "sence": ""
    },
    "12": {
      "id": "3-4",
      "no": "12",
      "area": "3",
      "name": "Azuchi",
      "star": "3",
      "resource": "Whetstone,Request Token",
      "max_lv": "51",
      "sence": ""
    },
    "13": {
      "id": "4-1",
      "no": "13",
      "area": "4",
      "name": "Nagashino",
      "star": "2",
      "resource": "Coolant,Request Token",
      "max_lv": "55",
      "sence": ""
    },
    "14": {
      "id": "4-2",
      "no": "14",
      "area": "4",
      "name": "Mikatagahara",
      "star": "3",
      "resource": "Whetstone",
      "max_lv": "59",
      "sence": ""
    },
    "15": {
      "id": "4-3",
      "no": "15",
      "area": "4",
      "name": "Okehazama",
      "star": "3",
      "resource": "Charcoal,Coolant,Steel",
      "max_lv": "63",
      "sence": ""
    },
    "16": {
      "id": "4-4",
      "no": "16",
      "area": "4",
      "name": "Kyoto(Tsubaki Era)",
      "star": "4",
      "resource": "Coolant,Request Token",
      "max_lv": "68",
      "sence": ""
    },
    "17": {
      "id": "5-1",
      "no": "17",
      "area": "5",
      "name": "Kamakura",
      "star": "3",
      "resource": "Charcoal",
      "max_lv": "78",
      "sence": ""
    },
    "18": {
      "id": "5-2",
      "no": "18",
      "area": "5",
      "name": "Genko(Hakata Bay)",
      "star": "4",
      "resource": "Coolant,Charcoal,Steel",
      "max_lv": "82",
      "sence": ""
    },
    "19": {
      "id": "5-3",
      "no": "19",
      "area": "5",
      "name": "Sunomata(Joukyuu War)",
      "star": "5",
      "resource": "Whetstone,Steel",
      "max_lv": "88",
      "sence": ""
    },
    "20": {
      "id": "5-4",
      "no": "20",
      "area": "5",
      "name": "Atsukashiyama",
      "star": "5",
      "resource": "Charcoal,Coolant",
      "max_lv": "99",
      "sence": ""
    },
	"21": {
      "id": "6-1",
      "no": "21",
      "area": "6",
      "name": "Kyoto(Within the City)",
      "star": "6",
      "resource": "Coolant,Whetstone",
      "max_lv": "99",
      "sence": ""
    },
	"22": {
      "id": "6-2",
      "no": "22",
      "area": "6",
      "name": "Sanjo Bridge",
      "star": "6",
      "resource": "Steel,Coolant",
      "max_lv": "99",
      "sence": ""
    },
	"23": {
      "id": "6-3",
      "no": "23",
      "area": "6",
      "name": "Ikedaya Inn 2F",
      "star": "6",
      "resource": "Charcoal,Steel,Request Token",
      "max_lv": "99",
      "sence": ""
    },
	"24": {
      "id": "6-4",
      "no": "24",
      "area": "6",
      "name": "Ikedaya Inn 1F",
      "star": "6",
      "resource": "Charcoal,Whetstone",
      "max_lv": "99",
      "sence": ""
    },
	"25": {
      "id": "7-1",
      "no": "25",
      "area": "7",
      "name": "Edo(Shinbashi)",
      "star": "7",
      "resource": "Charcoal,Steel,Request Token",
      "max_lv": "99",
      "sence": ""
    },
	"26": {
      "id": "7-2",
      "no": "26",
      "area": "7",
      "name": "Edo(Shirokanedai)",
      "star": "7",
      "resource": "Charcoal,Steel,Coolant,Whetstone",
      "max_lv": "99",
      "sence": ""
    },
	"27": {
      "id": "7-3",
      "no": "27",
      "area": "7",
      "name": "Edo(Around Edo Castle)",
      "star": "7",
      "resource": "Charcoal,Steel,Coolant,Whetstone",
      "max_lv": "99",
      "sence": ""
    },
	"28": {
      "id": "7-4",
      "no": "28",
      "area": "7",
      "name": "Edo(Within Edo Castle)",
      "star": "7",
      "resource": "-",
      "max_lv": "99",
      "sence": ""
    },
	"29": {
      "id": "8-1",
      "no": "29",
      "area": "8",
      "name": "Amidagamine",
      "star": "7",
      "resource": "Charcoal,Steel,Coolant,Whetstone",
      "max_lv": "99",
      "sence": ""
    },
	"30": {
      "id": "8-2",
      "no": "30",
      "area": "8",
      "name": "UedaCastle",
      "star": "7",
      "resource": "Charcoal,Steel,Coolant,Whetstone",
      "max_lv": "99",
      "sence": ""
    }
  };
  exports.tohken.define.conquest = {
    "1": {
      "id": "A1",
      "no": "1",
      "area": "1",
      "name": "Battle of Toba-Fushimi",
      "desc": "Organize a group of level 5 or more and try to win the battle!",
      "time": "0:10:00",
      "lv": 5,
      "need": [],
      "get": {
        "player_exp": "10(20)",
        "sword_exp": "25",
        "bill": null,
        "bonemeal": null,
        "charcoal": "10(15)",
        "steel": "15(22)",
        "coolant": null,
        "file": null,
        "money": null
      }
    },
    "2": {
      "id": "A2",
      "no": "2",
      "area": "1",
      "name": "Social Reform Riot",
      "desc": "Organize a group of level 10 or more with a Tantou-cenetered party and try to push for Social Reform!",
      "time": "0:30:00",
      "lv": "10",
      "need": [7],
      "get": {
        "player_exp": "20(40)",
        "sword_exp": "70",
        "bill": null,
        "bonemeal": null,
        "charcoal": null,
        "steel": null,
        "coolant": "30(45)",
        "file": "30(45)",
        "money": null
      }
    },
    "3": {
      "id": "A3",
      "no": "3",
      "area": "1",
      "name": "The Battle of Koshu Katsunuma",
      "desc": "Organize a group of level 20 or more with a Wakizashi-centered party and march towards Edo!",
      "time": "0:20:00",
      "lv": "20",
      "need": [4],
      "get": {
        "player_exp": "20(40)",
        "sword_exp": "65",
        "bill": null,
        "bonemeal": null,
        "charcoal": "20(30)",
        "steel": null,
        "coolant": "20(30)",
        "file": null,
        "money": null
      }
    },
    "4": {
      "id": "A4",
      "no": "4",
      "area": "1",
      "name": "Shirakawa Front",
      "desc": "Organize a group of level 30 or more with a Tantou and Wakizashi-centered party and head to Shirakawa Castle!",
      "time": "1:00:00",
      "lv": "30",
      "need": [4, 7],
      "get": {
        "player_exp": "35(70)",
        "sword_exp": "135",
        "bill": null,
        "bonemeal": null,
        "charcoal": null,
        "steel": "60(90)",
        "coolant": null,
        "file": "60(90)",
        "money": null
      }
    },
    "5": {
      "id": "B1",
      "no": "5",
      "area": "2",
      "name": "Koubu Gattai Exercise",
      "desc": "Orgaize a group of level 50 or more and patrol!",
      "time": "1:30:00",
      "lv": "50",
      "need": [4],
      "get": {
        "player_exp": "55(110)",
        "sword_exp": "285",
        "bill": null,
        "bonemeal": null,
        "charcoal": null,
        "steel": null,
        "coolant": "90(135)",
        "file": "90(135)",
        "money": "Koban Box(S)"
      }
    },
    "6": {
      "id": "B2",
      "no": "6",
      "area": "2",
      "name": "Auditing the Ashoro Fields",
      "desc": "Organize a group of level 60 or more with an Uchigatana-centered party and attempt to be self-sufficient!",
      "time": "3:00:00",
      "lv": "60",
      "need": [5],
      "get": {
        "player_exp": "100(200)",
        "sword_exp": "570",
        "bill": null,
        "bonemeal": null,
        "charcoal": null,
        "steel": "50(75)",
        "coolant": null,
        "file": "250(375)",
        "money": "Koban Box(S)"
      }
    },
    "7": {
      "id": "B3",
      "no": "7",
      "area": "2",
      "name": "Great Famine of Kyohou",
      "desc": "Organize a group of level 80 or more with a Tachi-centered party and try to help people!",
      "time": "2:00:00",
      "lv": "80",
      "need": [2],
      "get": {
        "player_exp": "70(140)",
        "sword_exp": "380",
        "bill": "1",
        "bonemeal": null,
        "charcoal": "120(180)",
        "steel": null,
        "coolant": "120(180)",
        "file": null,
        "money": null
      }
    },
    "8": {
      "id": "B4",
      "no": "8",
      "area": "2",
      "name": "World Peace",
      "desc": "Organize a group of level 100 or more, with an Uchigatana and Tachi-centered party and patrol!",
      "time": "2:30:00",
      "lv": "100",
      "need": [2, 5],
      "get": {
        "player_exp": "90(180)",
        "sword_exp": "585",
        "bill": null,
        "bonemeal": "1",
        "charcoal": null,
        "steel": "180(270)",
        "coolant": null,
        "file": "120(180)",
        "money": null
      }
    },
    "9": {
      "id": "C1",
      "no": "9",
      "area": "3",
      "name": "Battle of Mino Province",
      "desc": "Organize a group of level 110 or more and aid the Battle of Sekigahara!",
      "time": "4:00:00",
      "lv": "110",
      "need": [],
      "get": {
        "player_exp": "130(260)",
        "sword_exp": "760",
        "bill": "1",
        "bonemeal": null,
        "charcoal": "130(195)",
        "steel": "240(360)",
        "coolant": null,
        "file": null,
        "money": null
      }
    },
    "10": {
      "id": "C2",
      "no": "10",
      "area": "3",
      "name": "Cause of Revolt",
      "desc": "Organize a group of level 120 or more with an Oodachi-centered party and go investigate Honnouji!",
      "time": "3:00:00",
      "lv": "120",
      "need": [],
      "get": {
        "player_exp": "105(210)",
        "sword_exp": "700",
        "bill": null,
        "bonemeal": "1",
        "charcoal": null,
        "steel": "100(150)",
        "coolant": "60(90)",
        "file": "150(225)",
        "money": null
      }
    },
    "11": {
      "id": "C3",
      "no": "11",
      "area": "3",
      "name": "Security of Azuchi Castle",
      "desc": "Organize a group of level 130 or more and guard Azuchi Castle!",
      "time": "10:00:00",
      "lv": "130",
      "need": [1],
      "get": {
        "player_exp": "315(630)",
        "sword_exp": "2325",
        "bill": null,
        "bonemeal": null,
        "charcoal": "200(300)",
        "steel": null,
        "coolant": "500(750)",
        "file": null,
        "money": "Koban Box(M)"
      }
    },
    "12": {
      "id": "C4",
      "no": "12",
      "area": "3",
      "name": "Conquest",
      "desc": "Organize a group of level 140 or more and investigate Ashikaga's survival!",
      "time": "8:00:00",
      "lv": "140",
      "need": [],
      "get": {
        "player_exp": "255(510)",
        "sword_exp": "1860",
        "bill": null,
        "bonemeal": "1",
        "charcoal": null,
        "steel": "200(300)",
        "coolant": null,
        "file": "500(750)",
        "money": null
      }
    },
    "13": {
      "id": "D1",
      "no": "13",
      "area": "4",
      "name": "Siege of Nagashino Castle",
      "desc": "Organize a group of level 150 or more and protect the Torii gates!",
      "time": "2:00:00",
      "lv": "150",
      "need": [],
      "get": {
        "player_exp": "80(160)",
        "sword_exp": "540",
        "bill": null,
        "bonemeal": null,
        "charcoal": null,
        "steel": "80(120)",
        "coolant": "100(150)",
        "file": "60(90)",
        "money": null
      }
    },
    "14": {
      "id": "D2",
      "no": "14",
      "area": "4",
      "name": "Westward Operation",
      "desc": "Organize a group of level 180 or more and head towards the provinces of Tōtōmi, Mikawa and Mino!",
      "time": "5:00:00",
      "lv": "180",
      "need": [],
      "get": {
        "player_exp": "170(340)",
        "sword_exp": "1345",
        "bill": null,
        "bonemeal": null,
        "charcoal": "100(150)",
        "steel": "380(570)",
        "coolant": null,
        "file": null,
        "money": "Koban Box(M)"
      }
    },
    "15": {
      "id": "D3",
      "no": "15",
      "area": "4",
      "name": "Kousousun Triple Alliance",
      "desc": "Organize a group of level 200 or more and lend a hand with the peace agreement!",
      "time": "12:00:00",
      "lv": "200",
      "need": [],
      "get": {
        "player_exp": "385(770)",
        "sword_exp": "3600",
        "bill": null,
        "bonemeal": null,
        "charcoal": "100(150)",
        "steel": "200(300)",
        "coolant": "500(750)",
        "file": null,
        "money": null
      }
    },
    "16": {
      "id": "D4",
      "no": "16",
      "area": "4",
      "name": "Enryaku-ji Temple on Mt. Hiei",
      "desc": "Organize a group of level 220 or more and patrol the Enryaku-ji Temple!",
      "time": "6:00:00",
      "lv": "220",
      "need": [],
      "get": {
        "player_exp": "200(400)",
        "sword_exp": "1610",
        "bill": null,
        "bonemeal": null,
        "charcoal": "150(225)",
        "steel": null,
        "coolant": null,
        "file": "400(600)",
        "money": "Koban Box(L)"
      }
    },
    "17": {
      "id": "E1",
      "no": "17",
      "area": "5",
      "name": "Defense of Kamakura",
      "desc": "Organize a group of level 240 or more and head towards Kamakura!",
      "time": "12:00:00",
      "lv": "240",
      "need": [],
      "get": {
        "player_exp": "380(760)",
        "sword_exp": "3220",
        "bill": null,
        "bonemeal": "1",
        "charcoal": "250(375)",
        "steel": "250(375)",
        "coolant": "250(375)",
        "file": null,
        "money": null
      }
    },
    "18": {
      "id": "E2",
      "no": "18",
      "area": "5",
      "name": "Genkou Bourui",
      "desc": "Organize a group of 260 or more with a Yari-cenetered party and patrol the fortress!",
      "time": "18:00:00",
      "lv": "260",
      "need": [6],
      "get": {
        "player_exp": "560(1020)",
        "sword_exp": "4830",
        "bill": null,
        "bonemeal": "1",
        "charcoal": "200(300)",
        "steel": "500(750)",
        "coolant": "300(450)",
        "file": null,
        "money": "Koban Box(L)"
      }
    },
    "19": {
      "id": "E3",
      "no": "19",
      "area": "5",
      "name": "Yabusame Collection",
      "desc": "Organize a group of level 280 or more with a Naginata-centered party and gather troops from various provinces!",
      "time": "15:00:00",
      "lv": "280",
      "need": [3],
      "get": {
        "player_exp": "475(950)",
        "sword_exp": "4500",
        "bill": null,
        "bonemeal": null,
        "charcoal": "350(525)",
        "steel": "200(300)",
        "coolant": "100(150)",
        "file": "250(375)",
        "money": "Koban Box(L)"
      }
    },
    "20": {
      "id": "E4",
      "no": "20",
      "area": "5",
      "name": "Battle of Oushuu",
      "desc": "Organize a group of level 300 or more with a 1-sword-per-type assembled party and go forth to battle!",
      "time": "24:00:00",
      "lv": "300",
      "need": [-1],
      "get": {
        "player_exp": "745(1490)",
        "sword_exp": "7200",
        "bill": "3",
        "bonemeal": null,
        "charcoal": "300(450)",
        "steel": "400(600)",
        "coolant": "500(750)",
        "file": null,
        "money": "Koban Box(L)"
      }
    }
  };
  //normal exp
  exports.tohken.define.upexp = [0, 100, 300, 700, 1300, 2100, 3100, 4300, 5700, 7300, 9100, 11100, 13300, 15700, 18300, 21100, 24100, 27300, 30700, 34300, 38200, 42400, 46900, 51700, 56800, 62200, 67900, 73900, 80200, 86800, 93700, 100900, 108400, 116200, 124300, 132700, 141400, 150400, 159700, 169300, 179300, 189700, 200500, 211700, 223300, 235300, 247700, 260500, 273700, 287300, 301300, 315700, 330500, 345700, 361300, 377300, 393700, 410500, 427700, 445300, 463400, 482000, 501100, 520700, 540800, 561400, 582500, 604100, 626200, 648800, 672000, 695800, 720200, 745200, 770800, 797000, 823800, 851200, 879200, 907800, 937200, 967400, 998400, 1030200, 1062800, 1096200, 1130400, 1165400, 1201200, 1237800, 1277800, 1327800, 1387800, 1457800, 1537800, 1627800, 1727800, 1827800, 1927800, 0];
  //kiwame tantou exp
  exports.tohken.define.upexp2 = [0, 588, 1305, 2194, 3296, 4653, 6307, 8300, 10673, 13468, 16727, 20491, 24802, 29702, 35233, 41436, 48354, 56027, 64498, 73808, 84000, 95114, 107193, 120278, 134411, 149634, 165989, 183517, 202260, 222260, 307195, 454335, 660950, 924310, 1241685, 1610345, 2027560, 2490600, 2996735, 3543235, 4127370, 4746410, 5397625, 6078285, 6785660, 7517020, 8269635, 9040775, 9827710, 10627710, 11429400, 12233306, 13039953, 13849865, 14663567, 15481584, 16304441, 17132662, 17966772, 18807296, 19654759, 20509686, 21372601, 22244029, 23124495, 24014524, 24914640, 25825368, 26747233, 27680760, 28626474, 29584899, 30556560, 31541982, 32541690, 33556208, 34586062, 35631776, 36693875, 37772883, 38869326, 39983728, 41116614, 42268509, 43439937, 44631423, 45843492, 47076669, 48331479, 49608446, 50908096, 52230953, 53577541, 54948386, 56344012, 57764944, 59211707, 60684826, 62184826, 0];
  //kiwame wakizashi & yari exp
  exports.tohken.define.upexp3 = [0, 588, 1305, 2194, 3296, 4653, 6307, 8300, 10673, 13468, 16727, 20491, 24802, 29702, 35233, 41436, 48354, 56027, 64498, 73808, 84000, 95114, 107193, 120278, 134411, 149634, 165989, 183517, 202260, 222260, 307195, 454335, 660950, 924310, 1241685, 1771379, 2230316, 2739660, 3296408, 3897558, 4540107, 5221051, 5937387, 6686113, 7464226, 8268722, 9096598, 9944852, 10810481, 11690481, 12572340, 13456636, 14343948, 15234851, 16129923, 17029742, 17934885, 18845928, 19763449, 20688025, 21620235, 22560654, 23509861, 24468432, 25436944, 26415976, 27406104, 28407904, 29421956, 30448836, 31489121, 32543389, 33612216, 34696180, 35795859, 36911829, 38044668, 39194953, 40363262, 41550171, 42756258, 43982101, 45228275, 46495360, 47783930, 49094565, 50427841, 51784336, 53164627, 54569290, 55998905, 57454048, 58935295, 60443224, 61978413, 63541438, 65132878, 66753308, 68403309, 0];
  //kiwame uchigatana exp (r3)
  exports.tohken.define.upexp4 = [0, 588, 1305, 2194, 3296, 4653, 6307, 8300, 10673, 13468, 16727, 20491, 24802, 29702, 35233, 41436, 48354, 56027, 64498, 73808, 84000, 95114, 107193, 120278, 134411, 149634, 165989, 183517, 202260, 222260, 307195, 454335, 660950, 924310, 1241685, 1932413, 2433071, 2988719, 3596081, 4251881, 4952843, 5695691, 6477149, 7293941, 8142791, 9020423, 9923561, 10848929, 11793251, 12753251, 13715279, 14679967, 15647943, 16619837, 17596280, 18577900, 19565329, 20559194, 21560126, 22568755, 23585710, 24611623, 25647121, 26692834, 27749393, 28817428, 29897567, 30990441, 32096679, 33216911, 34351768, 35501878, 36667871, 37850378, 39050027, 40267449, 41503274, 42758131, 44032649, 45327459, 46643191, 47980473, 49339936, 50722210, 52127924, 53557707, 55012190, 56492002, 57997774, 59530135, 61089715, 62677143, 64293049, 65938063, 67612814, 69317932, 71054048, 72821791, 74621791, 0];
  //kiwame uchigatana exp (r4)
  exports.tohken.define.upexp5 = [0, 588, 1305, 2194, 3296, 4653, 6307, 8300, 10673, 13468, 16727, 20491, 24802, 29702, 35233, 41436, 48354, 56027, 64498, 73808, 84000, 95114, 107193, 120278, 134411, 149634, 165989, 183517, 202260, 222260, 307195, 454335, 660950, 924310, 1241685, 2093448, 2635828, 3237780, 3895755, 4606205, 5365581, 6170333, 7016912, 7901770, 8821358, 9772126, 10750525, 11753007, 12776023, 13816023, 14858220, 15903297, 16951938, 18004824, 19062637, 20126059, 21195773, 22272460, 23356803, 24449484, 25551186, 26662591, 27784381, 28917237, 30061843, 31218881, 32389032, 33572978, 34771402, 35984988, 37214416, 38460368, 39723528, 41004576, 42304197, 43623070, 44961880, 46321308, 47702037, 49104748, 50530123, 51978846, 53451598, 54949061, 56471918, 58020850, 59596539, 61199669, 62830922, 64490979, 66180524, 67900239, 69650803, 71432901, 73247215, 75094427, 76975219, 78890273, 80840274, 0];
  //kiwame naginata exp
  exports.tohken.define.upexp6 = [0, 588, 1305, 2194, 3296, 4653, 6307, 8300, 10673, 13468, 16727, 20491, 24802, 29702, 35233, 41436, 48354, 56027, 64498, 73808, 84000, 95114, 107193, 120278, 134411, 149634, 165989, 183517, 202260, 222260, 307195, 454335, 660950, 924310, 1241685, 1771379, 2230316, 2739660, 3296408, 3897558, 4540107, 5221051, 5937387, 6686113, 7464226, 8268722, 9096598, 9944852, 10810481, 11690481, 12572340, 13456636, 14343948, 15234851, 16129923, 17029742, 17934885, 18845928, 19763449, 20688025, 21620235, 22560654, 23509861, 24468432, 25436944, 26415976, 27406104, 28407904, 29421956, 30448836, 31489121, 32543389, 33612216, 34696180, 35795859, 36911829, 38044668, 39194953, 40363262, 41550171, 42756258, 43982101, 45228275, 46495360, 47783930, 49094565, 50427841, 51784336, 53164627, 54569290, 55998905, 57454048, 58935295, 60443224, 61978413, 63541438, 65132878, 66753308, 68403309, 0];
  //kiwame oodachi exp
  exports.tohken.define.upexp7 = [0, 588, 1305, 2194, 3296, 4653, 6307, 8300, 10673, 13468, 16727, 20491, 24802, 29702, 35233, 41436, 48354, 56027, 64498, 73808, 84000, 95114, 107193, 120278, 134411, 149634, 165989, 183517, 202260, 222260, 307195, 454335, 660950, 924310, 1241685, 2415518, 3041340, 3735900, 4495103, 5314853, 6191055, 7119615, 8096438, 9117428, 10178490, 11275530, 12404453, 13561163, 14741565, 15941565, 17144100, 18349959, 19559930, 20774798, 21995351, 23222376, 24456662, 25698993, 26950158, 28210944, 29482139, 30764529, 32058902, 33366044, 34686743, 36021786, 37371960, 38738052, 40120850, 41521140, 42939711, 44377349, 45834840, 47312973, 48812535, 50334312, 51879093, 53447664, 55040813, 56659325, 58303989, 59975592, 61674921, 63402764, 65159906, 66947135, 68765238, 70615004, 72497219, 74412669, 76362144, 78346430, 80366312, 82422579, 84516018, 86647416, 88817561, 91027239, 93277239, 0];
  //疑似极枪 (placeholder [?])
  exports.tohken.define.upexp9 = [0, 588, 1305, 2194, 3296, 4653, 6307, 8300, 10673, 13468, 16727, 20491, 24802, 29702, 35233, 41436, 48354, 56027, 64498, 73808, 84000, 95114, 107193, 120278, 134411, 149634, 165989, 183517, 202260, 222260, 307195, 454335, 660950, 924310, 1241685, 1771379, 2230316, 2739660, 3296408, 3897558, 4540107, 5221051, 5937387, 6686113, 7464226, 8268722, 9096598, 9944852, 10810481, 11690481, 12572340, 13456636, 14343948, 15234851, 16129923, 17029742, 17934885, 18845928, 19763449, 20688025, 21620235, 22560654, 23509861, 24468432, 25436944, 26415976, 27406104, 28407904, 29421956, 30448836, 31489121, 32543389, 33612216, 34696180, 35795859, 36911829, 38044668, 39194953, 40363262, 41550171, 42756258, 43982101, 45228275, 46495360, 47783930, 49094565, 50427841, 51784336, 53164627, 54569290, 55998905, 57454048, 58935295, 60443224, 61978413, 63541438, 65132878, 66753308, 68403309, 0];
})(window);

