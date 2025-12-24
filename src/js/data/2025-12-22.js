dataSetVersion = "2025-12-22"; // Change this when creating a new data set version. YYYY-MM-DD format.
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
      { name: "Rays", key: "S4" },
      { name: "The Best 2020-2025", key: "Solo"},
      { name: "Onkochishin", key: "S5" },
      { name: "Unreleased Songs", key: "unr" },
    ]
  },
  {
    name: "Filter by Singles",
    key: "singles",
    tooltip: "Check this to restrict to only songs in the following singles.",
    checked: false,
    sub: [ { name: "D.D./Imitation Rain", key: "ss1" }, { name: "Kissin' My Lips/Stories", key: "ss2" }, { name: "Grandeur", key: "ss3" }, { name: "Hello Hello", key: "ss4" }, { name: "Secret Touch", key: "ss5" }, { name: "Brother Beat", key: "ss6" }, { name: "Orange Kiss", key: "ss7" }, { name: "Tapestry/W", key: "ss8" }, { name: "Dangerholic", key: "ss9" },  { name: "Love Trigger/We'll Go Together", key: "ss10" },  { name: "Breakout/Kimi wa Boku no Mono", key: "ss11" }, { name: "Serious", key: "ss12" } 
    ]
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "D.D.",
    img: "dd.webp",
    opts: {
      albums: ["S1","Solo"],
      singles: ["ss1"]
    }
  },
  {
    name: "Crazy F-R-E-S-H Beat",
    img: "cfb.webp",
    opts: {
      albums: ["S1", "Solo"],
      singles: ["ss1"]
    }
  },
  {
    name: "Snow World",
    img: "sw.webp",
    opts: {
      albums: [],
      singles: ["ss1"]
    }
  },
  {
    name: "KISSIN' MY LIPS",
    img: "kml.webp",
    opts: {
      albums: ["S1","Solo"],
      singles: ["ss2"]
    }
  },
  {
    name: "Stories",
    img: "stories.webp",
    opts: {
      albums: ["S1","Solo"],
      singles: ["ss2"]
    }
  },
  {
    name: "Kimi no Kareshi ni Naritai - 君の彼氏になりたい",
    img: "kimikare.webp",
    opts: {
      albums: ["Solo"],
      singles: ["ss2"]
    }
  },
  {
    name: "Fantanamore - ファンターナモーレ",
    img: "",
    opts: {
      albums: ["Solo"],
      singles: ["ss2"]
    }
  },
  {
    name: "Grandeur",
    img: "grandeur.webp",
    opts: {
      albums: ["S1","Solo"],
      singles: ["ss3"]
    }
  },
  {
    name: "Big Bang Sweet",
    img: "bbs.webp",
    opts: {
      albums: ["S1"],
      singles: ["ss3"]
    }
  },
  {
    name: "Namida no Umi wo Koeteike - ナミダの海を越えて行け",
    img: "nmd.webp",
    opts: {
      albums: ["S1", "Solo"],
      singles: ["ss3"]
    }
  },
  {
    name: "EVERYTHING IS EVERYTHING",
    img: "eie.webp",
    opts: {
      albums: ["Solo"],
      singles: ["ss3"]
    }
  },
  {
    name: "HELLO HELLO",
    img: "hh.webp",
    opts: {
      albums: ["S1","Solo"],
      singles: ["ss4"]
    }
  },
  {
    name: "縁 -YUÁN-",
    img: "yuan.webp",
    opts: {
      albums: ["S1", "Solo"],
      singles: ["ss4"]
    }
  },
  {
    name: "YumYumYum~SpicyGirl~",
    img: "yyy.webp",
    opts: {
      albums: ["S1"],
      singles: ["ss4"]
    }
  },
  {
    name: "Hip bounce!!",
    img: "hb.webp",
    opts: {
      albums: ["Solo"],
      singles: ["ss4"]
    }
  },
  {
    name: "Secret Touch",
    img: "st.webp",
    opts: {
      albums: ["S2","Solo"],
      singles: ["ss5"]
    }
  },
  {
    name: "Boku no Kanojo ni natte yo - 僕の彼女になってよ",
    img: "",
    opts: {
      albums: ["Solo"],
      singles: ["ss5"]
    }
  },
  {
    name: "Christmas wishes",
    img: "cw.webp",
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
    img: "bb.webp",
    opts: {
      albums: ["S2","Solo"],
      singles: ["ss6"]
    }
  },
  {
    name: "REFRESH",
    img: "rfsh.webp",
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
    img: "icbbs.webp",
    opts: {
      albums: ["Solo"],
      singles: ["ss6"]
    }
  },
  {
    name: "Orange Kiss - オレンジkiss",
    img: "ok.webp",
    opts: {
      albums: ["S3","Solo"],
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
    img: "bts.webp",
    opts: {
      albums: ["Solo"],
      singles: ["ss7"]
    }
  },
  {
    name: "Tapestry - タペストリー ",
    img: "tpsty.webp",
    opts: {
      albums: ["S3","Solo"],
      singles: ["ss8"]
    }
  },
  {
    name: "W",
    img: "w.webp",
    opts: {
      albums: ["S3","Solo"],
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
    img: "evlt.webp",
    opts: {
      albums: ["S1", "Solo"],
      singles: []
    }
  },
  {
    name: "Sugar",
    img: "sugar.webp",
    opts: {
      albums: ["S1","Solo"],
      singles: []
    }
  },
  {
    name: "Infighter",
    img: "inf.webp",
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
    img: "ss.webp",
    opts: {
      albums: ["S1", "Solo"],
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
      albums: ["S1", "Solo"],
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
      albums: ["S1", "Solo"],
      singles: []
    }
  },
  {
    name: "P.M.G.",
    img: "pmg.webp",
    opts: {
      albums: ["S1"],
      singles: []
    }
  },
  {
    name: "ADDICTED TO LOVE",
    img: "atl.webp",
    opts: {
      albums: ["S1"],
      singles: []
    }
  },
  {
    name: "360m",
    img: "360m.webp",
    opts: {
      albums: ["S1"],
      singles: []
    }
  },
  {
    name: "JUICY",
    img: "juicy.webp",
    opts: {
      albums: ["S2","Solo"],
      singles: []
    }
  },
  {
    name: "Tic Tac Toe",
    img: "",
    opts: {
      albums: ["S2", "Solo"],
      singles: []
    }
  },
  {
    name: "Toxic Girl",
    img: "tg.webp",
    opts: {
      albums: ["S2"],
      singles: []
    }
  },
  {
    name: "Midnight Trendy - ミッドナイト・トレンディ",
    img: "mt.webp",
    opts: {
      albums: ["S2", "Solo"],
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
    img: "kk.webp",
    opts: {
      albums: ["S2"],
      singles: []
    }
  },
  {
    name: "Movin' up",
    img: "nu.webp",
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
    img: "bktk.webp",
    opts: {
      albums: ["S2", "Solo"],
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
    img: "aiktb.webp",
    opts: {
      albums: ["S3", "Solo"],
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
      albums: ["S3", "Solo"],
      singles: []
    }
  },
  {
    name: "slow...",
    img: "slow.webp",
    opts: {
      albums: ["S3","Solo"],
      singles: []
    }
  },
  {
    name: "Julietta",
    img: "",
    opts: {
      albums: ["S3", "Solo"],
      singles: []
    }
  },
  {
    name: "Kura Kura - クラクラ",
    img: "",
    opts: {
      albums: ["S3", "Solo"],
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
      albums: ["S3", "Solo"],
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
    img: "bg.webp",
    opts: {
      albums: ["unr"],
      singles: []
    }
  },
  {
    name: "Hirari to Sakura - ひらりと桜",
    img: "hts.webp",
    opts: {
      albums: ["unr"],
      singles: []
    }
  },
  {
    name: "Cry Out",
    img: "co.webp",
    opts: {
      albums: ["Solo"],
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
    name: "With Love",
    img: "",
    opts: {
      albums: ["unr"],
      singles: []
    }
  },
  {
    name: "One Heart",
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
  },
  {
    name: "Dangerholic",
    img: "dh.webp",
    opts: {
      albums: ["S4","Solo"],
      singles: ["ss9"]
    }
  },
  {
    name: "ANY & EVERY",
    img: "",
    opts: {
      albums: [],
      singles: ["ss9"]
    }
  },
  {
    name: "DA BOMB",
    img: "dabomb.webp",
    opts: {
      albums: ["Solo"],
      singles: ["ss9"]
    }
  },
  {
    name: "Best Friend (ベストフレンド)",
    img: "bestfriend.webp",
    opts: {
      albums: [],
      singles: ["ss9"]
    }
  },
  {
    name: "Love Trigger",
    img: "lovetrigger.png",
    opts: {
      albums: ["S4","Solo"],
      singles: ["ss10"]
    }
  },
  {
    name: "We'll Go Together",
    img: "wgt.png",
    opts: {
      albums: ["S4","Solo"],
      singles: ["ss10"]
    }
  },
  {
    name: "NEXT",
    img: "",
    opts: {
      albums: [],
      singles: ["ss10"]
    }
  },
  {
    name: "kokoro hitotsu - ココロヒトツ",
    img: "",
    opts: {
      albums: [],
      singles: ["ss10"]
    }
  },
  {
    name: "BREAKOUT",
    img: "breakout.png",
    opts: {
      albums: ["Solo"],
      singles: ["ss11"]
    }
  },
  {
    name: "kimi wa boku no mono - 君は僕のもの",
    img: "kimiboku.png",
    opts: {
      albums: ["Solo"],
      singles: ["ss11"]
    }
  },
  {
    name: "dress & tuxedo - ドレス&タキシード",
    img: "dressntux.png",
    opts: {
      albums: [],
      singles: ["ss11"]
    }
  },
  {
    name: "What's Your Color",
    img: "",
    opts: {
      albums: [],
      singles: ["ss11"]
    }
  },
  {
    name: "Serious",
    img: "serious.png",
    opts: {
      albums: ["S5"],
      singles: ["ss12"]
    }
  },
  {
    name: "Jack In The Box",
    img: "jitb.png",
    opts: {
      albums: [],
      singles: ["ss12"]
    }
  },
  {
    name: "natsuiro hanabi - 夏色花火",
    img: "nihb.png",
    opts: {
      albums: [],
      singles: ["ss12"]
    }
  },
  {
    name: "bakyun - ばきゅん",
    img: "",
    opts: {
      albums: [],
      singles: ["ss12"]
    }
  },
  {
    name: "EMPIRE",
    img: "empire.png",
    opts: {
      albums: ["S4","Solo"],
      singles: []
    }
  },
  {
    name: "One",
    img: "one.png",
    opts: {
      albums: ["S4", "Solo"],
      singles: []
    }
  },
  {
    name: "lindi lala - リンディーララ",
    img: "",
    opts: {
      albums: ["S4"],
      singles: []
    }
  },
  {
    name: "endless night",
    img: "",
    opts: {
      albums: ["S4"],
      singles: []
    }
  },
  {
    name: "start line - スタートライン",
    img: "",
    opts: {
      albums: ["S4", "Solo"],
      singles: []
    }
  },
  {
    name: "kimi e okuru ouenka - 君へ贈る応援歌",
    img: "kimiokuru.png",
    opts: {
      albums: ["S4"],
      singles: []
    }
  },
  {
    name: "kore ga ai janai no nara - これが愛じゃないのなら",
    img: "",
    opts: {
      albums: ["S4"],
      singles: []
    }
  },
  {
    name: "ROCK 'N' ROLL",
    img: "",
    opts: {
      albums: ["S4"],
      singles: []
    }
  },
  {
    name: "Wha cha cha",
    img: "",
    opts: {
      albums: ["S4"],
      singles: []
    }
  },
  {
    name: "KATANA",
    img: "",
    opts: {
      albums: ["S4"],
      singles: []
    }
  },
  {
    name: "GLITCH",
    img: "",
    opts: {
      albums: ["S4"],
      singles: []
    }
  },
  {
    name: "Hot Flow",
    img: "",
    opts: {
      albums: ["S4"],
      singles: []
    }
  },
  {
    name: "nightscape - ナイトスケープ",
    img: "",
    opts: {
      albums: ["S4"],
      singles: []
    }
  },
  {
    name: "hoshi no uta - 星のうた",
    img: "",
    opts: {
      albums: ["S4"],
      singles: []
    }
  },
  {
    name: "KANPAI Year!!",
    img: "",
    opts: {
      albums: ["S4", "Solo"],
      singles: []
    }
  },
    {
    name: "SBY",
    img: "sby.png",
    opts: {
      albums: ["Solo"],
      singles: []
    }
  },
    {
    name: "Dear,",
    img: "",
    opts: {
      albums: ["Solo"],
      singles: []
    }
  },
  {
    name: "Snow Man's Life",
    img: "",
    opts: {
      albums: ["Solo", "S1"],
      singles: []
    }
  },
  {
    name: "Happy Birthday",
    img: "",
    opts: {
      albums: ["Solo", "S2"],
      singles: []
    }
  },
  {
    name: "Nine Snow Flash",
    img: "",
    opts: {
      albums: ["Solo", "S3"],
      singles: []
    }
  },
  {
    name: "A PIECE OF CAKE",
    img: "",
    opts: {
      albums: ["Solo"],
      singles: []
    }
  },
  {
    name: "7%",
    img: "7.png",
    opts: {
      albums: ["Solo"],
      singles: []
    }
  },
  {
    name: "iro iro",
    img: "iroiro.png",
    opts: {
      albums: ["Solo"],
      singles: []
    }
  },
  {
    name: "Induction",
    img: "induction.png",
    opts: {
      albums: ["Solo"],
      singles: []
    }
  },
  {
    name: "otononaruhoue - オトノナルホウへ",
    img: "otono.png",
    opts: {
      albums: ["Solo"],
      singles: []
    }
  },
  {
    name: "finder - ファインダー",
    img: "finder.png",
    opts: {
      albums: ["Solo"],
      singles: []
    }
  },
  {
    name: "isso, kirai ni naretara - いっそ、嫌いになれたら。",
    img: "isso.png",
    opts: {
      albums: ["Solo"],
      singles: []
    }
  },
  {
    name: "asa no jikan - 朝の時間",
    img: "asano.png",
    opts: {
      albums: ["Solo"],
      singles: []
    }
  },
  {
    name: "I・datetomaranai - I・だって止まらない",
    img: "idate.png",
    opts: {
      albums: ["Solo"],
      singles: []
    }
  },
    {
    name: "mamoritai、so no egao - 守りたい、その笑顔",
    img: "mamori.png",
    opts: {
      albums: ["Solo"],
      singles: []
    }
  },
  {
    name: "TRUE LOVE",
    img: "truelove.png",
    opts: {
      albums: ["S5"],
      singles: []
    }
  },
  {
    name: "BOOST",
    img: "boost.png",
    opts: {
      albums: ["S5"],
      singles: []
    }
  },
  {
    name: "Spark!!",
    img: "",
    opts: {
      albums: ["S5"],
      singles: []
    }
  },
  {
    name: "kuchibiru - くちびる",
    img: "",
    opts: {
      albums: ["S5"],
      singles: []
    }
  },
   {
    name: "itazura na tenshi - 悪戯な天使",
    img: "itazuratenshi.png",
    opts: {
      albums: ["S5"],
      singles: []
    }
  },
  {
    name: "CHARISMAX - カリスマックス",
    img: "charismax.webp",
    opts: {
      albums: ["S5"],
      singles: []
    }
  },
  {
    name: "shitto girl - 嫉妬ガール",
    img: "",
    opts: {
      albums: ["S5"],
      singles: []
    }
  },
  {
    name: "Miss Brand-New Friday Night",
    img: "",
    opts: {
      albums: ["S5"],
      singles: []
    }
  },
  {
    name: "yakusoku ha kimi to 約束は君と",
    img: "",
    opts: {
      albums: ["S5"],
      singles: []
    }
  },
   {
    name: "Days",
    img: "",
    opts: {
      albums: ["S5"],
      singles: []
    }
  },
  {
    name: "愛のせいで",
    img: "ainoseide.png",
    opts: {
      albums: ["S5"],
      singles: []
    }
  },
  {
    name: "Symmetry",
    img: "",
    opts: {
      albums: ["S5"],
      singles: []
    }
  },
  {
    name: "ART",
    img: "",
    opts: {
      albums: ["S5"],
      singles: []
    }
  },
  {
    name: "chikyuu shiteruze - 地球してるぜ",
    img: "",
    opts: {
      albums: ["S5"],
      singles: []
    }
  },
  {
    name: "sunshine dreamer - サンシャインドリーマー",
    img: "",
    opts: {
      albums: ["S5"],
      singles: []
    }
  },
  {
    name: "Nine Snow Charge!!",
    img: "",
    opts: {
      albums: ["S5"],
      singles: []
    }
  },
];
