dataSetVersion = "2023-06-29"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Albums",
    key: "albums",
    tooltip: "Check this to restrict to certain releases/albums.",
    checked: false,
    sub: [
      { name: "Snow Mania S1", key: "S1" },
      { name: "Snow Labo. S2", key: "S2" },
      { name: "I Do Me", key: "S3" },
      { name: "Unreleased Songs", key: "unr" },
    ]
  },
  {
    name: "Filter by Singles",
    key: "singles",
    tooltip: "Check this to restrict to only songs in the following singles.",
    checked: false,
    sub: [ { name: "D.D./Imitation Rain", key: "ss1" }, { name: "Kissin' My Lips/Stories", key: "ss2" }, { name: "Grandeur", key: "ss3" }, { name: "Hello Hello", key: "ss4" }, { name: "Secret Touch", key: "ss5" }, { name: "Brother Beat", key: "ss6" }, { name: "Orange Kiss", key: "ss7" }, { name: "Tapestry/W", key: "ss8" }
    ]
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "D.D.",
    img: "",
    opts: {
      albums: ["S1"],
      singles: ["ss1"]
    }
  },
  {
    name: "Crazy F-R-E-S-H Beat",
    img: "",
    opts: {
      albums: ["S1"],
      singles: ["ss1"]
    }
  },
  {
    name: "Snow World",
    img: "",
    opts: {
      albums: [],
      singles: ["ss1"]
    }
  },
  {
    name: "KISSIN' MY LIPS",
    img: "",
    opts: {
      albums: ["S1"],
      singles: ["ss2"]
    }
  },
  {
    name: "Stories",
    img: "",
    opts: {
      albums: ["S1"],
      singles: ["ss2"]
    }
  },
  {
    name: "Kimi no Kareshi ni Naritai - 君の彼氏になりたい",
    img: "",
    opts: {
      albums: [],
      singles: ["ss2"]
    }
  },
  {
    name: "Fantanamore - ファンターナモーレ",
    img: "",
    opts: {
      albums: [],
      singles: ["ss2"]
    }
  },
  {
    name: "Grandeur",
    img: "",
    opts: {
      albums: ["S1"],
      singles: ["ss3"]
    }
  },
  {
    name: "Big Bang Sweet",
    img: "",
    opts: {
      albums: ["S1"],
      singles: ["ss3"]
    }
  },
  {
    name: "Namida no Umi wo Koeteike - ナミダの海を越えて行け",
    img: "",
    opts: {
      albums: ["S1"],
      singles: ["ss3"]
    }
  },
  {
    name: "EVERYTHING IS EVERYTHING",
    img: "",
    opts: {
      albums: [],
      singles: ["ss3"]
    }
  },
  {
    name: "HELLO HELLO",
    img: "",
    opts: {
      albums: ["S1"],
      singles: ["ss4"]
    }
  },
  {
    name: "縁 -YUÁN-",
    img: "",
    opts: {
      albums: ["S1"],
      singles: ["ss4"]
    }
  },
  {
    name: "YumYumYum~SpicyGirl~",
    img: "",
    opts: {
      albums: ["S1"],
      singles: ["ss4"]
    }
  },
  {
    name: "Hip bounce!!",
    img: "",
    opts: {
      albums: [],
      singles: ["ss4"]
    }
  },
  {
    name: "Secret Touch",
    img: "",
    opts: {
      albums: ["S2"],
      singles: ["ss5"]
    }
  },
  {
    name: "Boku no Kanojo ni natte yo - 僕の彼女になってよ",
    img: "",
    opts: {
      albums: [],
      singles: ["ss5"]
    }
  },
  {
    name: "Christmas wishes",
    img: "",
    opts: {
      albums: [],
      singles: ["ss5"]
    }
  },
  {
    name: "My Sweet Girl",
    img: "",
    opts: {
      albums: [],
      singles: ["ss5"]
    }
  },
  {
    name: "Brother Beat - ブラザービート",
    img: "",
    opts: {
      albums: ["S2"],
      singles: ["ss6"]
    }
  },
  {
    name: "REFRESH",
    img: "",
    opts: {
      albums: ["S2"],
      singles: ["ss6"]
    }
  },
  {
    name: "From Today",
    img: "",
    opts: {
      albums: ["S2"],
      singles: ["ss6"]
    }
  },
  {
    name: "Ichibanboshi - イチバンボシ",
    img: "",
    opts: {
      albums: [],
      singles: ["ss6"]
    }
  },
  {
    name: "Orange Kiss - オレンジkiss",
    img: "",
    opts: {
      albums: ["S3"],
      singles: ["ss7"]
    }
  },
  {
    name: "Wonderful! x Surprise!",
    img: "",
    opts: {
      albums: [],
      singles: ["ss7"]
    }
  },
  {
    name: "Feel the light, Lovely",
    img: "",
    opts: {
      albums: [],
      singles: ["ss7"]
    }
  },
  {
    name: "Boku ni Taisetsu ni Sarete ne -  僕に大切にされてね",
    img: "",
    opts: {
      albums: [],
      singles: ["ss7"]
    }
  },
  {
    name: "Tapestry - タペストリー ",
    img: "",
    opts: {
      albums: ["S3"],
      singles: ["ss8"]
    }
  },
  {
    name: "W",
    img: "",
    opts: {
      albums: ["S3"],
      singles: ["ss8"]
    }
  },
  {
    name: "Luv Classic",
    img: "",
    opts: {
      albums: [],
      singles: ["ss8"]
    }
  },
  {
    name: "NO SURRENDER!",
    img: "",
    opts: {
      albums: [],
      singles: ["ss8"]
    }
  },
  {
    name: "EVOLUTION",
    img: "",
    opts: {
      albums: ["S1"],
      singles: []
    }
  },
  {
    name: "Sugar",
    img: "",
    opts: {
      albums: ["S1"],
      singles: []
    }
  },
  {
    name: "Infighter",
    img: "",
    opts: {
      albums: ["S1"],
      singles: []
    }
  },
  {
    name: "TIKI TIKI",
    img: "",
    opts: {
      albums: ["S1"],
      singles: []
    }
  },
  {
    name: "Super Sexy",
    img: "",
    opts: {
      albums: ["S1"],
      singles: []
    }
  },
  {
    name: "Delicious!!!",
    img: "",
    opts: {
      albums: ["S1"],
      singles: []
    }
  },
  {
    name: "Be Proud!",
    img: "",
    opts: {
      albums: ["S1"],
      singles: []
    }
  },
  {
    name: "GRATITUDE",
    img: "",
    opts: {
      albums: ["S1"],
      singles: []
    }
  },
  {
    name: "Acrobatic",
    img: "",
    opts: {
      albums: ["S1"],
      singles: []
    }
  },
  {
    name: "Boogie Woogie Baby",
    img: "",
    opts: {
      albums: ["S1"],
      singles: []
    }
  },
  {
    name: "Vanishing Over",
    img: "",
    opts: {
      albums: ["S1"],
      singles: []
    }
  },
  {
    name: "IX Guys Snow Man/VI Guys Snow Man",
    img: "",
    opts: {
      albums: ["S1"],
      singles: []
    }
  },
  {
    name: "Don't Hold Back",
    img: "",
    opts: {
      albums: ["S1"],
      singles: []
    }
  },
  {
    name: "Party! Party! Party!",
    img: "",
    opts: {
      albums: ["S1"],
      singles: []
    }
  },
  {
    name: "Make It Hot",
    img: "",
    opts: {
      albums: ["S1"],
      singles: []
    }
  },
  {
    name: "Lock on!",
    img: "",
    opts: {
      albums: ["S1"],
      singles: []
    }
  },
  {
    name: "Owaranai Memories - 終わらない memories",
    img: "",
    opts: {
      albums: ["S1"],
      singles: []
    }
  },
  {
    name: "P.M.G.",
    img: "",
    opts: {
      albums: ["S1"],
      singles: []
    }
  },
  {
    name: "ADDICTED TO LOVE",
    img: "",
    opts: {
      albums: ["S1"],
      singles: []
    }
  },
  {
    name: "360m",
    img: "",
    opts: {
      albums: ["S1"],
      singles: []
    }
  },
  {
    name: "JUICY",
    img: "",
    opts: {
      albums: ["S2"],
      singles: []
    }
  },
  {
    name: "Tic Tac Toe",
    img: "",
    opts: {
      albums: ["S2"],
      singles: []
    }
  },
  {
    name: "Toxic Girl",
    img: "",
    opts: {
      albums: ["S2"],
      singles: []
    }
  },
  {
    name: "Midnight Trendy - ミッドナイト・トレンディ",
    img: "",
    opts: {
      albums: ["S2"],
      singles: []
    }
  },
  {
    name: "Brand New Smile",
    img: "",
    opts: {
      albums: ["S2"],
      singles: []
    }
  },
  {
    name: "BOOM BOOM LIGHT",
    img: "",
    opts: {
      albums: ["S2"],
      singles: []
    }
  },
  {
    name: "Kitta Kittenai - キッタキッテナイ",
    img: "",
    opts: {
      albums: ["S2"],
      singles: []
    }
  },
  {
    name: "Movin' up",
    img: "",
    opts: {
      albums: ["S2"],
      singles: []
    }
  },
  {
    name: "THIS IS LOVE",
    img: "",
    opts: {
      albums: ["S2"],
      singles: []
    }
  },
  {
    name: "Boku to Kimi to - ボクとキミと",
    img: "",
    opts: {
      albums: ["S2"],
      singles: []
    }
  },
  {
    name: "HYPNOSIS",
    img: "",
    opts: {
      albums: ["S2"],
      singles: []
    }
  },
  {
    name: "Gararaikyu! - ガラライキュ!",
    img: "",
    opts: {
      albums: ["S2"],
      singles: []
    }
  },
  {
    name: "Color me live...",
    img: "",
    opts: {
      albums: ["S2"],
      singles: []
    }
  },
  {
    name: "Aikotoba - あいことば",
    img: "",
    opts: {
      albums: ["S3"],
      singles: []
    }
  },
  {
    name: "Ready Go Round",
    img: "",
    opts: {
      albums: ["S3"],
      singles: []
    }
  },
  {
    name: "Super Deeper",
    img: "",
    opts: {
      albums: ["S3"],
      singles: []
    }
  },
  {
    name: "POWEEEEER",
    img: "",
    opts: {
      albums: ["S3"],
      singles: []
    }
  },
  {
    name: "slow...",
    img: "",
    opts: {
      albums: ["S3"],
      singles: []
    }
  },
  {
    name: "Julietta",
    img: "",
    opts: {
      albums: ["S3"],
      singles: []
    }
  },
  {
    name: "Kura Kura - クラクラ",
    img: "",
    opts: {
      albums: ["S3"],
      singles: []
    }
  },
  {
    name: "Hachigatsu no Ao - 8月の青",
    img: "",
    opts: {
      albums: ["S3"],
      singles: []
    }
  },
  {
    name: "Boku toiu Namae no Dorama - 僕という名のドラマ",
    img: "",
    opts: {
      albums: ["S3"],
      singles: []
    }
  },
  {
    name: "Two",
    img: "",
    opts: {
      albums: ["S3"],
      singles: []
    }
  },
  {
    name: "Bass Bon",
    img: "",
    opts: {
      albums: ["S3"],
      singles: []
    }
  },
  {
    name: "Vroom Vroom Vroom",
    img: "",
    opts: {
      albums: ["S3"],
      singles: []
    }
  },
  {
    name: "Gotcha!",
    img: "",
    opts: {
      albums: ["S3"],
      singles: []
    }
  },
  {
    name: "Nine Snow Flash",
    img: "",
    opts: {
      albums: ["S3"],
      singles: []
    }
  },
  {
    name: "Zig Zag Love",
    img: "",
    opts: {
      albums: ["unr"],
      singles: []
    }
  },
  {
    name: "Black Gold",
    img: "",
    opts: {
      albums: ["unr"],
      singles: []
    }
  },
  {
    name: "Hirari to Sakura - ひらりと桜",
    img: "",
    opts: {
      albums: ["unr"],
      singles: []
    }
  },
  {
    name: "Cry Out",
    img: "",
    opts: {
      albums: ["unr"],
      singles: []
    }
  },
  {
    name: "Shokai Rap ~We Are Snow Man~ - 紹介RAP～WE　ARE　SNOW　MAN～",
    img: "",
    opts: {
      albums: ["unr"],
      singles: []
    }
  },
  {
    name: "Su no Kimi ni Aitai - 素の君に会いたい",
    img: "",
    opts: {
      albums: ["unr"],
      singles: []
    }
  },
  {
    name: "Asayake no Hana - 朝焼けの花",
    img: "",
    opts: {
      albums: ["unr"],
      singles: []
    }
  },
  {
    name: "Snow Dream",
    img: "",
    opts: {
      albums: ["unr"],
      singles: []
    }
  }
];
