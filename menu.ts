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
        name: "Classique",
        price: 25,
        discountPrice: null,
        ingredients: "surimi, Avocat, concombre, cheese",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746219026/dishes/IMG-20250407-WA0099_spxkvz.jpg", name: "" }
      },
      {
        id: 102,
        name: "Roll Saumon",
        price: 25,
        discountPrice: null,
        ingredients: "Saumon, Avocat, Seame",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218970/dishes/IMG-20250407-WA0097_drf4ck.jpg", name: "" }
      },
      {
        id: 103,
        name: "Ebi Fry",
        price: 25,
        discountPrice: null,
        ingredients: "Crevette pane, Avocat, Giboulet",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746219026/dishes/IMG-20250407-WA0100_uqpuax.jpg", name: "" }
      },
      {
        id: 104,
        name: "California Chaki Yaki",
        price: 25,
        discountPrice: null,
        ingredients: "saumon coike, avocat",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746576229/chaki_yaki_sataqc.png", name: "" }
      },
      {
        id: 105,
        name: "Cream Cheese",
        price: 35,
        discountPrice: null,
        ingredients: "Saumon, Avocat, Surimi, cream cheese",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746219026/dishes/IMG-20250407-WA0101_ai0dyt.jpg", name: "" }
      },
      {
        id: 106,
        name: "Avocat de Rolls",
        price: 30,
        discountPrice: null,
        ingredients: "saumon, avocat, avocat",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218970/dishes/IMG-20250407-WA0095_cignam.jpg", name: "" }
      },
      {
        id: 107,
        name: "Rolls 57",
        price: 30,
        discountPrice: null,
        ingredients: "saumon pane, avocat, cheese, tobiko noir",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218969/dishes/IMG-20250407-WA0091_bnr5k5.jpg", name: "" }
      },
      {
        id: 108,
        name: "Edo Rolls",
        price: 30,
        discountPrice: null,
        ingredients: "Grab, surimi pane, mangue, cheese",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218970/dishes/IMG-20250407-WA0094_rxq5aq.jpg", name: "" }
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
        name: "Rolls Saumon Frech",
        price: 30,
        discountPrice: null,
        ingredients: "Avocat, saumon",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218970/dishes/IMG-20250407-WA0096_a42bun.jpg", name: "" }
      },
      {
        id: 202,
        name: "Mangoe Rolls",
        price: 30,
        discountPrice: null,
        ingredients: "surimi pane, crevette pane, mangue, cheese",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218970/dishes/IMG-20250407-WA0093_rc8yd9.jpg", name: "" }
      },
      {
        id: 203,
        name: "Goma",
        price: 30,
        discountPrice: null,
        ingredients: "saumon frais, Wakami avocat, poireau",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746575923/goma_p9z2jt.png", name: "" }
      },
      {
        id: 204,
        name: "Veggie Rolls",
        price: 30,
        discountPrice: null,
        ingredients: "avocat, cheese, carot, concombre, mangue",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746575920/veggie_roll_ufcbb1.jpg", name: "" }
      },
      {
        id: 205,
        name: "Frais Saumon Rolls",
        price: 35,
        discountPrice: null,
        ingredients: "saumon, cheese",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218968/dishes/IMG-20250407-WA0086_lil2vx.jpg", name: "" }
      },
      {
        id: 206,
        name: "Anaconda Rolls",
        price: 35,
        discountPrice: null,
        ingredients: "crevette pane, crab, anguille",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218967/dishes/IMG-20250407-WA0085_tm8wnp.jpg", name: "" }
      },
      {
        id: 207,
        name: "Okinawa Rolls",
        price: 40,
        discountPrice: null,
        ingredients: "saumon, cheese",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218969/dishes/IMG-20250407-WA0088_ao8s0e.jpg", name: "" }
      },
      {
        id: 208,
        name: "Okinawa Frech",
        price: 45,
        discountPrice: null,
        ingredients: "saumen, riz marine",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746575928/okinawa_fresh_nclxr7.png", name: "" }
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
        name: "Makis concombre",
        price: 18,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218965/dishes/IMG-20250407-WA0080_xoruor.jpg", name: "" }
      },
      {
        id: 302,
        name: "Makis avocat",
        price: 20,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218966/dishes/IMG-20250407-WA0083_zv92vq.jpg", name: "" }
      },
      {
        id: 303,
        name: "Makis Surimi",
        price: 20,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218966/dishes/IMG-20250407-WA0082_pmgdkl.jpg", name: "" }
      },
      {
        id: 304,
        name: "Makis saumon et avocat",
        price: 25,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218965/dishes/IMG-20250407-WA0079_vaylir.jpg", name: "" }
      },
      {
        id: 305,
        name: "Makis crevettes",
        price: 30,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218969/dishes/IMG-20250407-WA0081_oxviqs.jpg", name: "" }
      },
      {
        id: 306,
        name: "Makis saumon",
        price: 30,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218966/dishes/IMG-20250407-WA0084_quzmjm.jpg", name: "" }
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
        name: "Sushi crevettes",
        price: 20,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218965/dishes/IMG-20250407-WA0077_sbdmbe.jpg", name: "" }
      },
      {
        id: 402,
        name: "Sushi saumon",
        price: 25,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218965/dishes/IMG-20250407-WA0076_oj3had.jpg", name: "" }
      },
      {
        id: 403,
        name: "Sushi anguille",
        price: 25,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218965/dishes/IMG-20250407-WA0078_ubj0dj.jpg", name: "" }
      },
      {
        id: 404,
        name: "Sushi mixte 4pcs",
        price: 30,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218964/dishes/IMG-20250407-WA0075_t0jkbk.jpg", name: "" }
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
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218963/dishes/IMG-20250407-WA0074_zt7k3w.jpg", name: "" }
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
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218963/dishes/IMG-20250407-WA0071_evum8y.jpg", name: "" }
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
        name: "Tartar Crevettes",
        price: 45,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218962/dishes/IMG-20250407-WA0069_i0w31i.jpg", name: "" }
      },
      {
        id: 702,
        name: "Tartar Saumon",
        price: 50,
        discountPrice: null,
        ingredients: "saumon, avocat",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218963/dishes/IMG-20250407-WA0072_psmhtl.jpg", name: "" }
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
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218962/dishes/IMG-20250407-WA0067_wimrtu.jpg", name: "" }
      },
      {
        id: 802,
        name: "Chirachi Saumon Avocat",
        price: 55,
        discountPrice: null,
        ingredients: "saumon, riz, vinagre, tobiko, avocat",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218962/dishes/IMG-20250407-WA0066_kweiqy.jpg", name: "" }
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
        name: "Poke crevettes",
        price: 45,
        discountPrice: null,
        ingredients: "crevettes, wakami, mangue, tomates cerises, tobiko rouge",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218962/dishes/IMG-20250407-WA0068_fbwgbt.jpg", name: "" }
      },
      {
        id: 902,
        name: "Poke saumon",
        price: 50,
        discountPrice: null,
        ingredients: "saumon frais, wakami, ananas, radis rouge, surimi",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218963/dishes/IMG-20250407-WA0070_neugno.jpg", name: "" }
      },
      {
        id: 903,
        name: "Poke mixte",
        price: 55,
        discountPrice: null,
        ingredients: "crevettes pané, saumon frais, surimi, avocat, concombre, radis rouge",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218962/dishes/IMG-20250407-WA0065_alu2p0.jpg", name: "" }
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
        name: "Aromaki végétarien",
        price: 30,
        discountPrice: null,
        ingredients: "concombre, salade vert, avocat, cheese, tobiko",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218960/dishes/IMG-20250407-WA0060_lw89jt.jpg", name: "" }
      },
      {
        id: 1002,
        name: "Aromaki osaka",
        price: 30,
        discountPrice: null,
        ingredients: "saumon quich, avocat, surimi",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218962/dishes/IMG-20250407-WA0064_wxe2vq.jpg", name: "" }
      },
      {
        id: 1003,
        name: "Aromaki crevettes",
        price: 30,
        discountPrice: null,
        ingredients: "crevette pané, avocat, cheese, surimi",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218960/dishes/IMG-20250407-WA0061_flwmp6.jpg", name: "" }
      },
      {
        id: 1004,
        name: "Aromaki saumon",
        price: 35,
        discountPrice: null,
        ingredients: "saumon, avocat, surimi, cheese",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218960/dishes/IMG-20250407-WA0062_apxubp.jpg", name: "" }
      },
      {
        id: 1005,
        name: "Aromaki exotique",
        price: 40,
        discountPrice: null,
        ingredients: "mangue, saumon, cheese, avocat",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218961/dishes/IMG-20250407-WA0063_rjjt7u.jpg", name: "" }
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
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218961/dishes/IMG-20250407-WA0059_jlvo9c.jpg", name: "" }
      },
      {
        id: 1102,
        name: "Crevette",
        price: 25,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218960/dishes/IMG-20250407-WA0057_a47nzx.jpg", name: "" }
      },
      {
        id: 1103,
        name: "Crab",
        price: 30,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218961/dishes/IMG-20250407-WA0058_ghuap2.jpg", name: "" }
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
        name: "Crevette",
        price: 35,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218959/dishes/IMG-20250407-WA0054_lw8snl.jpg", name: "" }
      },
      {
        id: 1202,
        name: "Epinad",
        price: 35,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746577928/epinad_orxmdj.jpg", name: "" }
      },
      {
        id: 1203,
        name: "Saumon",
        price: 40,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218960/dishes/IMG-20250407-WA0056_davmhi.jpg", name: "" }
      },
      {
        id: 1204,
        name: "Crab",
        price: 40,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218959/dishes/IMG-20250407-WA0055_uqae5f.jpg", name: "" }
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
        name: "Avocat saumon",
        price: 30,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218959/dishes/IMG-20250407-WA0051_slhu2e.jpg", name: "" }
      },
      {
        id: 1302,
        name: "Crevette avocat",
        price: 30,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218959/dishes/IMG-20250407-WA0052_wbjc1o.jpg", name: "" }
      },
      {
        id: 1303,
        name: "Crab avocat",
        price: 35,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218959/dishes/IMG-20250407-WA0053_md08pm.jpg", name: "" }
      }
    ]
  },
  {
    id: 14,
    name: "Assortiments Sushi",
    notes: "",
    dishes: [
      {
        id: 1401,
        name: "Assortiment SOLO",
        price: 54,
        discountPrice: null,
        ingredients: "+4 pcs Eby fry, +6 pcs Fry eby Fry",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746577084/Assortiment-15pcs-300x204_nqmm4t.jpg", name: "" }
      },
      {
        id: 1402,
        name: "Mini pack",
        price: 79,
        discountPrice: null,
        ingredients: "+4 pcs california cream cheese, +6 pcs Maki avocat, +6 pcs crushy Ginza",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746577749/16-pices_ydb4eb.jpg", name: "" }
      },
      {
        id: 1403,
        name: "gold",
        price: 129,
        discountPrice: null,
        ingredients: "+4 pcs classique, +6 pcs Maki souman, +6 pcs Fry Casablanca, +6 pcs Aromaki Crevettes",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746577010/assortiment-de-sushi_fppf1x.jpg", name: "" }
      },
      {
        id: 1404,
        name: "Assortiment california",
        price: 129,
        discountPrice: null,
        ingredients: "+4 pcs cream cheese, +4 pcs Roll saumon, +4 pcs Classique, +4 pcs CHaki roll, +4 pcs Ebi fry",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746577430/images_ohfycj.jpg", name: "" }
      },
      {
        id: 1405,
        name: "Assortiment sushi Fujimix",
        price: 199,
        discountPrice: null,
        ingredients: "+4 pcs chaki roll, +6 pcs dragon eyes, +8 pcs pizza mozzarella, +6 pcs aromaki saumon, +6 pcs Dynamik, +5 pcs Goma roll",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746219027/dishes/IMG-20250407-WA0104_jast0c.jpg", name: "" }
      },
      {
        id: 1406,
        name: "Family pack",
        price: 264,
        discountPrice: null,
        ingredients: "+4 pcs cream chess, +4 pcs Classique, +6 pcs Fry eby Fry, +6 pcs Aromaki saumon, +6 pcs Maki crevettes, +6 pcs crevettes pané, +5 pcs Mango Roll, +5 pcs fresh Roll avocat, Maki surimi pané",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746576968/ASSORTIMENT_SUSHI_20PCS_ujedkx.jpg", name: "" }
      },
      {
        id: 1407,
        name: "Party box",
        price: 385,
        discountPrice: null,
        ingredients: "+8 pcs Eby fry, +8 pcs Classique, +6 pcs Aromaki crevette, +6 pcs Aromaki saumon, +6 pcs Maki saumon avocat, +6 pcs casablanca, +6 pcs Gizza, +8 pcs pizza saumon, +4 pcs Nigiri saumon, +4 pcs Chaki roll",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746576858/assortissement_potwmi.jpg", name: "" }
      }
    ]
  },
  {
    id: 15,
    name: "Fry Rolls",
    notes: "6 pcs",
    dishes: [
      {
        id: 1501,
        name: "CRONCHY CREVETTE",
        price: 25,
        discountPrice: null,
        ingredients: "double crevettes, Tonoki, Shihimi",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218974/dishes/IMG-20250407-WA0098_b9b2bo.jpg", name: "" }
      },
      {
        id: 1502,
        name: "Fry saumon fry",
        price: 25,
        discountPrice: null,
        ingredients: "saumon quick, cheese, toblio",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218958/dishes/IMG-20250407-WA0046_fo9u5j.jpg", name: "" }
      },
      {
        id: 1503,
        name: "Fry ebi fry",
        price: 30,
        discountPrice: null,
        ingredients: "crevette, surimi, cheese",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218959/dishes/IMG-20250407-WA0049_tld8mb.jpg", name: "" }
      },
      {
        id: 1504,
        name: "Ginza",
        price: 30,
        discountPrice: null,
        ingredients: "crevette pane, surimi, avocat, cheese",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218958/dishes/IMG-20250407-WA0047_q7u2b6.jpg", name: "" }
      },
      {
        id: 1505,
        name: "Shan ghai",
        price: 30,
        discountPrice: null,
        ingredients: "surimi pane, avocat, cheese, ananas",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218957/dishes/IMG-20250407-WA0043_yojdyb.jpg", name: "" }
      },
      {
        id: 1506,
        name: "Dynamic",
        price: 30,
        discountPrice: null,
        ingredients: "saumon quick, avocat, crevette pane",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218958/dishes/IMG-20250407-WA0044_ulp12f.jpg", name: "" }
      },
      {
        id: 1507,
        name: "Volcano Rolls",
        price: 35,
        discountPrice: null,
        ingredients: "avocat, surimi, saumon",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218958/dishes/IMG-20250407-WA0045_sknilb.jpg", name: "" }
      },
      {
        id: 1508,
        name: "Casablanca",
        price: 40,
        discountPrice: null,
        ingredients: "avocat, saumon, cheese, surimi",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218958/dishes/IMG-20250407-WA0048_biggrm.jpg", name: "" }
      },
      {
        id: 1509,
        name: "Dragon eyes",
        price: 50,
        discountPrice: null,
        ingredients: "saumon, carotte, poireau, teblico",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218959/dishes/IMG-20250407-WA0050_odee0j.jpg", name: "" }
      },
      {
        id: 1510,
        name: "Les boules de riz",
        price: 30,
        discountPrice: null,
        ingredients: "avocat, surimi, crevette pochées, cheese",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218957/dishes/IMG-20250407-WA0042_hdave2.jpg", name: "" }
      },
      {
        id: 1511,
        name: "Aromaki pané",
        price: 35,
        discountPrice: null,
        ingredients: "surimi, saumon, avocat, cheese",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218957/dishes/IMG-20250407-WA0041_kveeao.jpg", name: "" }
      },
      {
        id: 1512,
        name: "Maki saumon pané",
        price: 30,
        discountPrice: null,
        ingredients: "quick",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218956/dishes/IMG-20250407-WA0039_zr3tts.jpg", name: "" }
      },
      {
        id: 1513,
        name: "Makis pané",
        price: 30,
        discountPrice: null,
        ingredients: "crevettes",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218959/dishes/IMG-20250407-WA0040_adncmw.jpg", name: "" }
      },
      {
        id: 1514,
        name: "Maki pané",
        price: 35,
        discountPrice: null,
        ingredients: "saumon frais",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218956/dishes/IMG-20250407-WA0038_nd4zxr.jpg", name: "" }
      },
      {
        id: 1515,
        name: "Maki crevette pané pochées",
        price: 30,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218955/dishes/IMG-20250407-WA0037_a4hdus.jpg", name: "" }
      }
    ]
  },
  {
    id: 16,
    name: "Pizza",
    notes: "",
    dishes: [
      {
        id: 1601,
        name: "Pizza mozzarella",
        price: 55,
        discountPrice: null,
        ingredients: "saumon, mozarella, tobiko",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218956/dishes/IMG-20250407-WA0036_k6kmxi.jpg", name: "" }
      },
      {
        id: 1602,
        name: "Pizza saumon",
        price: 60,
        discountPrice: null,
        ingredients: "saumon, avocat, crab, tobiko",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218956/dishes/IMG-20250407-WA0035_mbqqsd.jpg", name: "" }
      },
      {
        id: 1603,
        name: "Pizza asiatique",
        price: 65,
        discountPrice: null,
        ingredients: "saumon, crevette pochées, avocat",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218954/dishes/IMG-20250407-WA0034_v4vj0u.jpg", name: "" }
      }
    ]
  },
  {
    id: 17,
    name: "Les Croquettes",
    notes: "",
    dishes: [
      {
        id: 1701,
        name: "Croquettes poulet",
        price: 30,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 1702,
        name: "Croquettes saumon",
        price: 35,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      },
      {
        id: 1703,
        name: "Crevette pané",
        price: 35,
        discountPrice: null,
        ingredients: "",
        image: { url: "", name: "" }
      }
    ]
  },
  {
    id: 18,
    name: "Chauds Asiatiques",
    notes: "",
    dishes: [
      {
        id: 1801,
        name: "Riz cantonais poulet",
        price: 60,
        discountPrice: null,
        ingredients: "riz, poulet, carottes, oignons, ciboules, mais, brocolis, courgettes, champignons",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218956/dishes/IMG-20250407-WA0033_dcq0qo.jpg", name: "" }
      },
      {
        id: 1802,
        name: "Riz cantonais boeuf",
        price: 60,
        discountPrice: null,
        ingredients: "riz, bœuf, carottes, oignons, ciboules, mais, brocolis, courgettes, champignons",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218931/dishes/IMG-20250407-WA0030_xqrx0f.jpg", name: "" }
      },
      {
        id: 2103,
        name: "Riz cantonais crevette",
        price: 60,
        discountPrice: null,
        ingredients: "riz, crevette, carottes, oignons, ciboules, mais, brocolis, courgettes, champignons",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746219049/dishes/IMG-20250407-WA0127_rchany.jpg", name: "" }
      },
      {
        id: 2104,
        name: "Riz cantonais fruits de mer",
        price: 60,
        discountPrice: null,
        ingredients: "riz, crevette, calamar, carottes, oignons, ciboules, mais, brocolis, courgettes, champignons",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218931/dishes/IMG-20250407-WA0028_o25xok.jpg", name: "" }
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
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746573018/wok_chicken_xksf1j.jpg", name: "" }
      },
      {
        id: 2202,
        name: "Wok boeuf",
        price: 65,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746573012/wok_beef_egggoz.jpg", name: "" }
      },
      {
        id: 2203,
        name: "Wok végétarien",
        price: 40,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746573000/wok_veggie_wx4jat.jpg", name: "" }
      },
      {
        id: 2204,
        name: "Wok fruits de mer",
        price: 70,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746573019/wok_seafood_mk9fac.jpg", name: "" }
      },
      {
        id: 2205,
        name: "Wok crevette",
        price: 55,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746573014/wok_shrimp_fwb0iv.jpg", name: "" }
      },
      {
        id: 2206,
        name: "Wok saumon",
        price: 65,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746573020/wok_salamon_q3g5sq.jpg", name: "" }
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
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746573019/sate_chicken_g72rfa.jpg", name: "" }
      },
      {
        id: 2302,
        name: "Saté au crevettes",
        price: 65,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746573007/sate_shrimp_z89kof.jpg", name: "" }
      },
      {
        id: 2303,
        name: "Saté boeuf",
        price: 65,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746573020/satay_beef_a3vli2.jpg", name: "" }
      },
      {
        id: 2304,
        name: "Saté fruits de mer",
        price: 75,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746573003/sate_seafood_jlttcd.jpg", name: "" }
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
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746219048/dishes/IMG-20250407-WA0124_pax5mh.jpg", name: "" }
      },
      {
        id: 2402,
        name: "Riz vinaigre",
        price: 10,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746219048/dishes/IMG-20250407-WA0124_pax5mh.jpg", name: "" }
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
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218930/dishes/IMG-20250407-WA0025_pfkhnc.jpg", name: "" }
      },
      {
        id: 2502,
        name: "Soupe miso",
        price: 25,
        discountPrice: null,
        ingredients: "bouillon, tofu, wakami, paté miso",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746573004/miso_soup_kzhpfp.jpg", name: "" }
      },
      {
        id: 2503,
        name: "Soupe pekinoise",
        price: 45,
        discountPrice: null,
        ingredients: "bouillon, crevette, calamar, poison blanc, curry rouge, jaune gingenre frais",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746573013/soup_pekin_x7vvdt.jpg", name: "" }
      },
      {
        id: 2504,
        name: "Soupe tom kha Kai",
        price: 45,
        discountPrice: null,
        ingredients: "gingembre, poulet, Coriander, citron, lait de coco",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746573012/soup_tom_kha_kai_ik2jct.jpg", name: "" }
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
        name: "Poulet",
        price: 30,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746219048/dishes/IMG-20250407-WA0121_xnjn5n.jpg", name: "" }
      },
      {
        id: 2602,
        name: "Crevettes",
        price: 40,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218930/dishes/IMG-20250407-WA0024_zeuuhp.jpg", name: "" }
      },
      {
        id: 2603,
        name: "Saumon",
        price: 45,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746219047/dishes/IMG-20250407-WA0119_esazz1.jpg", name: "" }
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
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218930/dishes/IMG-20250407-WA0022_et8nqo.jpg", name: "" }
      },
      {
        id: 2702,
        name: "Salade gamba",
        price: 45,
        discountPrice: null,
        ingredients: "crevette, avocat, saumon, surimi, Tomate cerises",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218931/dishes/IMG-20250407-WA0020_kstosm.jpg", name: "" }
      },
      {
        id: 2703,
        name: "Salade wakami",
        price: 40,
        discountPrice: null,
        ingredients: "gamba, wakami, saumon",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218930/dishes/IMG-20250407-WA0019_y5f7rg.jpg", name: "" }
      },
      {
        id: 2704,
        name: "Salade 57",
        price: 55,
        discountPrice: null,
        ingredients: "saumon, manque, avocat, crevette, mais, tomate cerises, ananas",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218929/dishes/IMG-20250407-WA0018_z69l3r.jpg", name: "" }
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
        name: "Poulet",
        price: 35,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218929/dishes/IMG-20250407-WA0016_n14g4c.jpg", name: "" }
      },
      {
        id: 2802,
        name: "Crevette",
        price: 40,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218929/dishes/IMG-20250407-WA0016_n14g4c.jpg", name: "" }
      },
      {
        id: 2803,
        name: "Mixte",
        price: 45,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746218929/dishes/IMG-20250407-WA0016_n14g4c.jpg", name: "" }
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
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746219029/dishes/IMG-20250407-WA0114_qktwg8.jpg", name: "" }
      },
      {
        id: 2902,
        name: "Jus Avocat",
        price: 28,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746219028/dishes/IMG-20250407-WA0111_uvze9c.jpg", name: "" }
      },
      {
        id: 2903,
        name: "Jus Citron",
        price: 20,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746219027/dishes/IMG-20250407-WA0107_sqbjgm.jpg", name: "" }
      },
      {
        id: 2904,
        name: "Jus Ananas",
        price: 25,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746219028/dishes/IMG-20250407-WA0113_bgvhb5.jpg", name: "" }
      },
      {
        id: 2905,
        name: "Jus Tropical",
        price: 30,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746219028/dishes/IMG-20250407-WA0110_cn1avo.jpg", name: "" }
      },
      {
        id: 2906,
        name: "Jus Mangue",
        price: 25,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746219028/dishes/IMG-20250407-WA0112_bcaytw.jpg", name: "" }
      },
      {
        id: 2907,
        name: "Jus Citron gingembre",
        price: 30,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746219028/dishes/IMG-20250407-WA0108_kd6clt.jpg", name: "" }
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
        name: "Banoffee bie",
        price: 30,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746219029/dishes/IMG-20250407-WA0109_jvnibr.jpg", name: "" }
      },
      {
        id: 3002,
        name: "Panna cotta",
        price: 25,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746219027/dishes/IMG-20250407-WA0106_gyllkl.jpg", name: "" }
      },
      {
        id: 3003,
        name: "Tiramisu",
        price: 25,
        discountPrice: null,
        ingredients: "",
        image: { url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746219027/dishes/IMG-20250407-WA0105_lwbetv.jpg", name: "" }
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