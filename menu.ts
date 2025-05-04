export interface Dish {
  id: number;
  name: string;
  price: number;
  ingredients: string;
  discountPrice: any;
  image: {
    url: string;
    name: string;
  };
}

export interface Category {
  id: number;
  name: string;
  notes: string;
  dishes: Dish[];
}

export const menuData: Category[] = [
  {
    id: 1,
    name: "California Rolls",
    notes: "4 pcs",
    dishes: [
      {
        id: 101,
        name: "Cream Cheese",
        price: 35,
        discountPrice: null,
        ingredients: "Saumon, Avocat, Surimi, cream cheese",
        image: { url: "", name: "" }
      },
      {
        id: 102,
        name: "Ebi Fry",
        price: 25,
        discountPrice: null,
        ingredients: "Crevette pane, Avocat, Giboulet",
        image: { url: "", name: "" }
      },
      {
        id: 103,
        name: "Classique",
        price: 25,
        discountPrice: null,
        ingredients: "surimi, Avocat, concombre, cheese",
        image: { url: "", name: "" }
      },
      {
        id: 104,
        name: "Roll Saumon",
        price: 25,
        discountPrice: null,
        ingredients: "Saumon, Avocat, Seame",
        image: { url: "", name: "" }
      },
      {
        id: 105,
        name: "California Chaki Yaki",
        price: 25,
        discountPrice: null,
        ingredients: "saumon eolite, avocat",
        image: { url: "", name: "" }
      },
      {
        id: 106,
        name: "Avocat de Rolls",
        price: 30,
        discountPrice: null,
        ingredients: "saumon, avocat, avocat",
        image: { url: "", name: "" }
      },
      {
        id: 107,
        name: "Rolls 57",
        price: 30,
        discountPrice: null,
        ingredients: "saumon pane, avocat, cheese, tobiko noir",
        image: { url: "", name: "" }
      },
      {
        id: 108,
        name: "Edo Rolls",
        price: 30,
        discountPrice: null,
        ingredients: "Grab, surimi pane, mangue, cheese",
        image: { url: "", name: "" }
      }
    ]
  },
  {
    id: 2,
    name: "Les Spéciaux",
    notes: "5 pcs",
    dishes: [
      {
        id: 201,
        name: "Mangoe Rolls",
        price: 30,
        discountPrice: null,
        ingredients: "surimi pane, crevette pane, mangue, cheese",
        image: { url: "", name: "" }
      },
      {
        id: 202,
        name: "Goma",
        price: 30,
        discountPrice: null,
        ingredients: "saumon frais, Wakami avocat, poireau",
        image: { url: "", name: "" }
      },
      {
        id: 203,
        name: "Okinawa Frech",
        price: 45,
        discountPrice: null,
        ingredients: "saumen, riz marine",
        image: { url: "", name: "" }
      },
      {
        id: 204,
        name: "Frais Saumon Rolls",
        price: 35,
        discountPrice: null,
        ingredients: "saumon, cheese",
        image: { url: "", name: "" }
      },
      {
        id: 205,
        name: "Veggie Röh",
        price: 30,
        discountPrice: null,
        ingredients: "avocat, cheese, carot, concombre, mangue",
        image: { url: "", name: "" }
      },
      {
        id: 206,
        name: "Anaconda Rolls",
        price: 35,
        discountPrice: null,
        ingredients: "crevette pane, crab, anguille",
        image: { url: "", name: "" }
      },
      {
        id: 207,
        name: "Okinawa Rolls",
        price: 40,
        discountPrice: null,
        ingredients: "saumon, cheese",
        image: { url: "", name: "" }
      },
      {
        id: 208,
        name: "Rolls Saumon Frech",
        price: 30,
        discountPrice: null,
        ingredients: "Avocat, saumon",
        image: { url: "", name: "" }
      }
    ]
  },
  {
    id: 3,
    name: "Les Makis",
    notes: "6 pcs",
    dishes: [
      {
        id: 301,
        name: "Makis saumon",
        price: 30,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 302,
        name: "Makis avocat",
        price: 20,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 303,
        name: "Makis crevettes",
        price: 30,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 304,
        name: "Makis concombre",
        price: 18,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 305,
        name: "Makis saumon et avocat",
        price: 25,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      }
    ]
  },
  {
    id: 4,
    name: "Nigiri",
    notes: "2 pcs",
    dishes: [
      {
        id: 401,
        name: "Sushi saumon",
        price: 25,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 402,
        name: "Sushi crevettes",
        price: 20,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 403,
        name: "Sushi mixte",
        price: 30,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 404,
        name: "Sushi anguille",
        price: 25,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      }
    ]
  },
  {
    id: 5,
    name: "Sashimi",
    notes: "5 pcs",
    dishes: [
      {
        id: 501,
        name: "Sashimi",
        price: 40,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      }
    ]
  },
  {
    id: 6,
    name: "Tataki",
    notes: "5 pcs",
    dishes: [
      {
        id: 601,
        name: "Tataki saumon",
        price: 40,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      }
    ]
  },
  {
    id: 7,
    name: "Tartar",
    notes: "",
    dishes: [
      {
        id: 701,
        name: "Tartar Saumon",
        price: 50,
        discountPrice: null,
        ingredients: "saumon, avocat",
        image: { url: "", name: "" }
      },
      {
        id: 702,
        name: "Tartar Crevettes",
        price: 45,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      }
    ]
  },
  {
    id: 8,
    name: "Chirachi",
    notes: "",
    dishes: [
      {
        id: 801,
        name: "Chirachi Saumon",
        price: 50,
        discountPrice: null,
        ingredients: "saumon, riz, vinegre, tobiko",
        image: { url: "", name: "" }
      },
      {
        id: 802,
        name: "Chirachi Saumon Avocat",
        price: 55,
        discountPrice: null,
        ingredients: "saumon, riz, vinagre, tobiko, avocat",
        image: { url: "", name: "" }
      }
    ]
  },
  {
    id: 9,
    name: "Poke bowl",
    notes: "",
    dishes: [
      {
        id: 901,
        name: "Poke saumon",
        price: 50,
        discountPrice: null,
        ingredients: "saumon frais, wakami, ananas, radis rouge, surimi",
        image: { url: "", name: "" }
      },
      {
        id: 902,
        name: "Poke crevettes",
        price: 45,
        discountPrice: null,
        ingredients: "crevettes, wakami, mangue, tomates cerises, tobiko rouge",
        image: { url: "", name: "" }
      },
      {
        id: 903,
        name: "Poke mixte",
        price: 55,
        discountPrice: null,
        ingredients: "crevettes pané, saumon frais, surimi, avocat, concombre, radis rouge",
        image: { url: "", name: "" }
      }
    ]
  },
  {
    id: 10,
    name: "Les Aromakis",
    notes: "6 pcs",
    dishes: [
      {
        id: 1001,
        name: "Aromaki osaka",
        price: 30,
        discountPrice: null,
        ingredients: "saumon quich, avocat, surimi",
        image: { url: "", name: "" }
      },
      {
        id: 1002,
        name: "Aromaki saumon",
        price: 35,
        discountPrice: null,
        ingredients: "saumon, avocat, surimi, cheese",
        image: { url: "", name: "" }
      },
      {
        id: 1003,
        name: "Aromaki crevettes",
        price: 30,
        discountPrice: null,
        ingredients: "crevette pané, avocat, cheese, surimi",
        image: { url: "", name: "" }
      },
      {
        id: 1004,
        name: "Aromaki exotique",
        price: 40,
        discountPrice: null,
        ingredients: "mangue, saumon, cheese, avocat",
        image: { url: "", name: "" }
      },
      {
        id: 1005,
        name: "Aromaki végétarien",
        price: 30,
        discountPrice: null,
        ingredients: "concombre, salade vert, avocat, cheese, tobiko",
        image: { url: "", name: "" }
      }
    ]
  },
  {
    id: 11,
    name: "Gonkan",
    notes: "",
    dishes: [
      {
        id: 1101,
        name: "Saumon",
        price: 25,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 1102,
        name: "Crab",
        price: 30,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 1103,
        name: "Crevette",
        price: 25,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      }
    ]
  },
  {
    id: 12,
    name: "Futo Maki",
    notes: "",
    dishes: [
      {
        id: 1201,
        name: "Saumon",
        price: 40,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 1202,
        name: "Crab",
        price: 40,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 1203,
        name: "Crevette",
        price: 35,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 1204,
        name: "Epinad",
        price: 35,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      }
    ]
  },
  {
    id: 13,
    name: "Temaki",
    notes: "",
    dishes: [
      {
        id: 1301,
        name: "Crab avocat",
        price: 35,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 1302,
        name: "Avocat saumon",
        price: 30,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 1303,
        name: "Crevette avocat",
        price: 30,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      }
    ]
  },
  {
    id: 14,
    name: "Assortiment Sushi",
    notes: "",
    dishes: [
      {
        id: 1401,
        name: "Assortiment sushi Fujimix",
        price: 199,
        discountPrice: null,
        ingredients: "+4 pcs chaki roll, +6 pcs dragon eyes, +8 pcs pizza mozzarella, +6 pcs aromaki saumon, +6 pcs Dynamik, +5 pcs Goma roll",
        image: { url: "", name: "" }
      }
    ]
  },
  {
    id: 15,
    name: "Mini pack",
    notes: "",
    dishes: [
      {
        id: 1501,
        name: "Mini pack Gold",
        price: 129,
        discountPrice: null,
        ingredients: "+4 pcs california cream cheese, +6 pcs Maki avocat, +6 pcs crushy Ginza",
        image: { url: "", name: "" }
      },
      {
        id: 1502,
        name: "Assortiment california",
        price: 129,
        discountPrice: null,
        ingredients: "+4 pcs cream cheese, +4 pcs Roll saumon, +4 pcs Classique, +4 pcs CHaki roll, +4 pcs Ebi fry",
        image: { url: "", name: "" }
      }
    ]
  },
  {
    id: 16,
    name: "Assortiment",
    notes: "",
    dishes: [
      {
        id: 1601,
        name: "Assortiment SOLO",
        price: 54,
        discountPrice: null,
        ingredients: "+4 pcs Eby fry, +6 pcs Fry eby Fry",
        image: { url: "", name: "" }
      },
      {
        id: 1602,
        name: "Family pack",
        price: 264,
        discountPrice: null,
        ingredients: "+4 pcs cream chess, +4 pcs Classique, +6 pcs Fry eby Fry, +6 pcs Aromaki saumon, +6 pcs Maki crevettes, +6 pcs crevettes pané, +5 pcs Mango Roll, +5 pcs fresh Roll avocat, Maki surimi pané",
        image: { url: "", name: "" }
      },
      {
        id: 1603,
        name: "Party box",
        price: 385,
        discountPrice: null,
        ingredients: "+8 pcs Eby fry, +8 pcs Classique, +6 pcs Aromaki crevette, +6 pcs Aromaki saumon, +6 pcs Maki saumon avocat, +6 pcs casablanca, +6 pcs Gizza, +8 pcs pizza saumon, +4 pcs Nigiri saumon, +4 pcs Chaki roll",
        image: { url: "", name: "" }
      }
    ]
  },
  {
    id: 17,
    name: "Fry Rolls",
    notes: "6 pcs",
    dishes: [
      {
        id: 1701,
        name: "Fry ebi fry",
        price: 30,
        discountPrice: null,
        ingredients: "crevette, surimi, cheese",
        image: { url: "", name: "" }
      },
      {
        id: 1702,
        name: "Casablanca",
        price: 40,
        discountPrice: null,
        ingredients: "avocat, saumon, cheese, surimi",
        image: { url: "", name: "" }
      },
      {
        id: 1703,
        name: "Ginza",
        price: 30,
        discountPrice: null,
        ingredients: "crevette pane, surimi, avocat, cheese",
        image: { url: "", name: "" }
      },
      {
        id: 1704,
        name: "Dragon eyes",
        price: 50,
        discountPrice: null,
        ingredients: "saumon, carotte, poireau, teblico",
        image: { url: "", name: "" }
      }
    ]
  },
  {
    id: 18,
    name: "Les Boulettes",
    notes: "",
    dishes: [
      {
        id: 1801,
        name: "Fry saumon fry",
        price: 25,
        discountPrice: null,
        ingredients: "saumon quick, cheese, toblio",
        image: { url: "", name: "" }
      },
      {
        id: 1802,
        name: "Shan glai",
        price: 30,
        discountPrice: null,
        ingredients: "surimi pane, avocat, cheese, ananas",
        image: { url: "", name: "" }
      },
      {
        id: 1803,
        name: "Volcano Rolls",
        price: 35,
        discountPrice: null,
        ingredients: "avocat, surimi, saumon",
        image: { url: "", name: "" }
      },
      {
        id: 1804,
        name: "Dynamic",
        price: 30,
        discountPrice: null,
        ingredients: "saumon quick, avocat, crevette pane",
        image: { url: "", name: "" }
      }
    ]
  },
  {
    id: 19,
    name: "Pizza",
    notes: "",
    dishes: [
      {
        id: 1901,
        name: "Pizza saumon",
        price: 60,
        discountPrice: null,
        ingredients: "saumon, avocat, crab, tobiko",
        image: { url: "", name: "" }
      },
      {
        id: 1902,
        name: "Pizza mozzarella",
        price: 55,
        discountPrice: null,
        ingredients: "saumon, mozarella, tobiko",
        image: { url: "", name: "" }
      },
      {
        id: 1903,
        name: "Pizza asiatique",
        price: 65,
        discountPrice: null,
        ingredients: "saumon, crevette pochées, avocat",
        image: { url: "", name: "" }
      }
    ]
  },
  {
    id: 20,
    name: "Les Croquettes",
    notes: "",
    dishes: [
      {
        id: 2001,
        name: "Croquettes poulet",
        price: 30,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 2002,
        name: "Croquettes saumon",
        price: 35,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      }
    ]
  },
  {
    id: 21,
    name: "Chauds Asiatiques",
    notes: "",
    dishes: [
      {
        id: 2101,
        name: "Riz cantonais boeuf",
        price: 60,
        discountPrice: null,
        ingredients: "riz, bœuf, carottes, oignons, ciboules, mais, brocolis, courgettes, champignons",
        image: { url: "", name: "" }
      },
      {
        id: 2102,
        name: "Riz cantonais poulet",
        price: 60,
        discountPrice: null,
        ingredients: "riz, poulet, carottes, oignons, ciboules, mais, brocolis, courgettes, champignons",
        image: { url: "", name: "" }
      },
      {
        id: 2103,
        name: "Riz cantonais crevette",
        price: 60,
        discountPrice: null,
        ingredients: "riz, crevette, carottes, oignons, ciboules, mais, brocolis, courgettes, champignons",
        image: { url: "", name: "" }
      },
      {
        id: 2104,
        name: "Riz cantonais fruits de mer",
        price: 60,
        discountPrice: null,
        ingredients: "riz, crevette, calamar, carottes, oignons, ciboules, mais, brocolis, courgettes, champignons",
        image: { url: "", name: "" }
      }
    ]
  },
  {
    id: 22,
    name: "Wok",
    notes: "",
    dishes: [
      {
        id: 2201,
        name: "Wok poulet",
        price: 50,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 2202,
        name: "Wok boeuf",
        price: 65,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 2203,
        name: "Wok végétarien",
        price: 40,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 2204,
        name: "Wok fruits de mer",
        price: 70,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 2205,
        name: "Wok crevette",
        price: 55,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 2206,
        name: "Wok saumon",
        price: 65,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      }
    ]
  },
  {
    id: 23,
    name: "Sate",
    notes: "",
    dishes: [
      {
        id: 2301,
        name: "Saté au poulet",
        price: 60,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 2302,
        name: "Saté au crevettes",
        price: 65,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 2303,
        name: "Saté boeuf",
        price: 65,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 2304,
        name: "Saté fruits de mer",
        price: 75,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      }
    ]
  },
  {
    id: 24,
    name: "Les Riz",
    notes: "",
    dishes: [
      {
        id: 2401,
        name: "Riz blanc",
        price: 5,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 2402,
        name: "Riz vinaigre",
        price: 10,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      }
    ]
  },
  {
    id: 25,
    name: "Les Soupes",
    notes: "",
    dishes: [
      {
        id: 2501,
        name: "Soupe fruits de mer",
        price: 55,
        discountPrice: null,
        ingredients: "bouillon, crevette, calamar, poison blanc, curry rouge, gingembre frais",
        image: { url: "", name: "" }
      },
      {
        id: 2502,
        name: "Soupe miso",
        price: 25,
        discountPrice: null,
        ingredients: "bouillon, tofu, wakami, paté miso",
        image: { url: "", name: "" }
      },
      {
        id: 2503,
        name: "Soupe pekinoise",
        price: 45,
        discountPrice: null,
        ingredients: "bouillon, crevette, calamar, poison blanc, curry rouge, jaune gingenre frais",
        image: { url: "", name: "" }
      },
      {
        id: 2504,
        name: "Soupe tom kha Kai",
        price: 45,
        discountPrice: null,
        ingredients: "gingembre, poulet, Coriander, citron, lait de coco",
        image: { url: "", name: "" }
      }
    ]
  },
  {
    id: 26,
    name: "Les Brochettes",
    notes: "",
    dishes: [
      {
        id: 2601,
        name: "Brochette Poulet",
        price: 30,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 2602,
        name: "Brochette Crevette",
        price: 40,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 2603,
        name: "Brochette Saumon",
        price: 45,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      }
    ]
  },
  {
    id: 27,
    name: "Les Salades",
    notes: "",
    dishes: [
      {
        id: 2701,
        name: "Salade exotique",
        price: 45,
        discountPrice: null,
        ingredients: "manque, avocat, concombre, ananas, saumon, mais",
        image: { url: "", name: "" }
      },
      {
        id: 2702,
        name: "Salade gamba",
        price: 45,
        discountPrice: null,
        ingredients: "crevette, avocat, saumon, surimi, Tomate cerises",
        image: { url: "", name: "" }
      },
      {
        id: 2703,
        name: "Salade wakami",
        price: 40,
        discountPrice: null,
        ingredients: "gamba, wakami, saumon",
        image: { url: "", name: "" }
      },
      {
        id: 2704,
        name: "Salade 57",
        price: 55,
        discountPrice: null,
        ingredients: "saumon, manque, avocat, crevette, mais, tomate cerises, ananas",
        image: { url: "", name: "" }
      }
    ]
  },
  {
    id: 28,
    name: "Les Nems",
    notes: "2 pcs",
    dishes: [
      {
        id: 2801,
        name: "Nem Poulet",
        price: 35,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 2802,
        name: "Nem Crevette",
        price: 40,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 2803,
        name: "Nem Mixte",
        price: 45,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      }
    ]
  },
  {
    id: 29,
    name: "Les Jus",
    notes: "",
    dishes: [
      {
        id: 2901,
        name: "Jus Orange",
        price: 22,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 2902,
        name: "Jus Avocat",
        price: 28,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 2903,
        name: "Jus Citron",
        price: 20,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 2904,
        name: "Jus Ananas",
        price: 25,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 2905,
        name: "Jus Tropical",
        price: 30,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 2906,
        name: "Jus Mangue",
        price: 25,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 2907,
        name: "Jus Citron gingembre",
        price: 30,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      }
    ]
  },
  {
    id: 30,
    name: "Les Desserts",
    notes: "",
    dishes: [
      {
        id: 3001,
        name: "Banoffee ble",
        price: 30,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 3002,
        name: "Panna cotta",
        price: 25,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 3003,
        name: "Tiramisu",
        price: 25,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      }
    ]
  },
  {
    id: 31,
    name: "Les Cafés et Sodas",
    notes: "",
    dishes: [
      {
        id: 3101,
        name: "Café Noir",
        price: 15,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 3102,
        name: "Café creme",
        price: 15,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 3103,
        name: "Chocolat chaud",
        price: 18,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 3104,
        name: "Café au chocolat",
        price: 15,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 3105,
        name: "Sodas",
        price: 15,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 3106,
        name: "Eau minerale 1/2L",
        price: 5,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 3107,
        name: "Eau minerale 1L",
        price: 8,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      }
    ]
  }
];

// Utility function to match your Strapi fetching pattern
export async function getCategoriesWithDishes(): Promise<Category[]> {
  // In a real app, this would fetch from Strapi
  // Here we're just returning our local data
  return menuData;
}