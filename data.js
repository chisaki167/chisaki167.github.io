// ========================================================
// NỘI DUNG HỘP THƯ
// ========================================================
const letterData = {
  title: "Lời nhắn từ utara🧀",
  content: `Chào mọi người!

Nếu mà mọi người muốn thêm pack vô danh sách random(nếu chưa có) mọi người hãy nhắn qua gmail cho mình nha

Khi bạn muốn góp ý tưởng hãy nhắn như sau pack(type), có thể nhập nhiều pack nha.
Pack : mọi người nhập tên nhân vật waifu của mình.
Type : mọi người nhập thể loại hent hoặc ani.
(Về phần pack hent mình sẽ chỉ dùng những bộ/game nổi tiếng nhiều nhân vật vì ảnh hent rất ít ảnh)`
};

// NỘI DUNG LƯU Ý CHO TỪNG PHIÊN BẢN
const notes = {
  java: "Lưu ý : Nào đủ 2k follow 10pack tiếp theo của toi sẽ không phải vượt link nhe ❤",
  bedrock: "Mình không đủ khả năng để làm các gui nhe mọi người, mọi người nếu tải chơi có thể chơi chỉ có sky thui nhe ❤",
  cosplay: "Các pack cosplay mình sẽ không đăng lên tiktok để thông báo được nên mọi người có thể vào đây để kiểm tra theo thời gian nha ❤"
};

// ========================================================
// 1. DANH SÁCH PACK JAVA CHÍNH
// ========================================================
const javaPackList = [
  {
    title: "zenless Zone Zero 210",
    key: "zenless Zone Zero 210",
    images: [
      "assets/zzz/",
    ],
    desc: "Download pack tại link dưới đây",
    link: "https://link4m.net/cQgqJ",
    olink: ""
  },
  {
    title: "Yuki Suou",
    key: "Yuki Suou 210",
    images: [
      "assets/yuki/yuki1.png",
      "assets/yuki/yuki2.png",
      "assets/yuki/yuki3.png",
      "assets/yuki/yuki4.png",
      "assets/yuki/yuki5.png",
      "assets/yuki/yuki6.png",
      "assets/yuki/yuki7.png",
      "assets/yuki/yuki8.png",
      "assets/yuki/yuki9.png"
    ],
    desc: "Download pack tại link dưới đây",
    link: "https://link4m.net/O2mTrH",
    olink: ""
  },
  {
    title: "Pack Siesta",
    key: "siesta anime waifu",
    images: [
      "assets/sis1.png",
      "assets/sis2.png",
      "assets/sis3.png"
    ],
    desc: "Download pack tại link dưới đây",
    link: "https://link4m.org/A6KZtDEn",
    olink: ""
  },
  {
    title: "Arisu Tendou",
    key: "blue archive ba arisu tendou",
    images: [
      "assets/aris1.png",
      "assets/aris2.png",
      "assets/aris3.png",
      "assets/aris4.png",
      "assets/aris5.png",
      "assets/aris6.png",
      "assets/aris7.png",
      "assets/aris8.png",
      "assets/aris9.png",
      "assets/aris10.png",
      "assets/aris11.png",
    ],
    desc: "Tải pack Aris Tendou tại link bên dưới này.",
    link: "https://link4m.net/TbMqts",
    olink: "https://shrinkme.click/tmO3kJPz"
  },
  {
    title: "Elaina",
    key: "elaina witch anime",
    images: [
      "assets/elaina/elaina1.png",
      "assets/elaina/elaina2.png",
      "assets/elaina/elaina3.png",
      "assets/elaina/elaina4.png",
      "assets/elaina/elaina5.png",
      "assets/elaina/elaina6.png",
    ],
    desc: "Pack elaina, download bằng link dưới nhe",
    link: "https://link4m.org/gXM4VgZJ",
    olink: ""
  },
  {
    title: "Azur lane 210",
    key: "azur lane 210 ship waifu",
    images: [
      "assets/azur/azur1.png",
      "assets/azur/azur2.png",
      "assets/azur/azur3.png",
      "assets/azur/azur4.png",
    ],
    desc: "Pack azur lane, download bằng link dưới nhe",
    link: "https://link4m.net/eBGmD",
    olink: ""
  },
  {
    title: "Rikka Takanashi",
    key: "rikka chuunibyou anime",
    images: [
      "assets/rikka/rikka1.png",
      "assets/rikka/rikka2.png",
      "assets/rikka/rikka3.png",
      "assets/rikka/rikka4.png",
      "assets/rikka/rikka5.png",
      "assets/rikka/rikka6.png",
    ],
    desc: "Pack rikka, download bằng link dưới nhe",
    link: "https://link4m.org/CR50d",
    olink: ""
  },
  {
    title: "Furina de Fontaine",
    key: "genshin impact furina fontaine waifu",
    images: [
      "assets/furina/furina12.png",
      "assets/furina/furina13.png",
      "assets/furina/furina14.png",
      "assets/furina/furina15.png",
      "assets/furina/furina1.png",
      "assets/furina/furina2.png",
      "assets/furina/furina3.png",
      "assets/furina/furina4.png",
      "assets/furina/furina5.png",
      "assets/furina/furina6.png",
      "assets/furina/furina7.png",
      "assets/furina/furina9.png",
      "assets/furina/furina10.png",
      "assets/furina/furina11.png",
    ],
    desc: "Pack Furina, download bằng link dưới nhe",
    link: "https://link4m.net/8nZhyB5D",
    olink: ""
  },
  {
    title: "Frieren",
    key: "frieren sousou anime",
    images: [
      "assets/fri/fri1.png",
      "assets/fri/fri2.png",
      "assets/fri/fri3.png",
      "assets/fri/fri4.png",
      "assets/fri/fri5.png",
      "assets/fri/fri6.png",
      "assets/fri/fri7.png",
      "assets/fri/fri9.png",
      "assets/fri/fri10.png",
      "assets/fri/fri11.png",
      "assets/fri/fri12.png",
      "assets/fri/fri13.png",
      "assets/fri/fri14.png",
      "assets/fri/fri15.png",
    ],
    desc: "Pack Frieren, download bằng link dưới nhe",
    link: "https://link4m.net/7xWsCt",
    olink: ""
  },
  {
    title: "Hutao Remake",
    key: "genshin impact hutao remake waifu",
    images: [
      "assets/hutao1.png",
      "assets/hutao2.png",
      "assets/hutao3.png",
      "assets/hutao4.png",
      "assets/hutao5.png",
      "assets/hutao6.png",
      "assets/hutao7.png",
      "assets/hutao8.png",
    ],
    desc: "Tải pack Hutao ở link dưới nha (đây là bản làm lại để tránh lag, dù chỉ là 1 tí :Đ)",
    link: "https://link4m.org/ytOENB34",
    olink: ""
  },
  {
    title: "Genshin Impact 210",
    key: "genshin impact 210 waifu 18",
    images: [
      "assets/gen2101.png",
    ],
    desc: "Pack genshin download bằng link dưới đây.",
    link: "https://link4m.org/8mzEed",
    olink: "https://shrinkme.click/KBAbdO"
  },
  {
    title: "Blue Archive 210",
    key: "blue archive 210 ba waifu",
    images: [
      "assets/blu1.png",
    ],
    desc: "Pack hentai Blue Archiver, download bằng link dưới nhe",
    link: "https://link4m.org/DocKrNd",
    olink: ""
  },
  {
    title: "Honkai Star Rail 210",
    key: "honkai star rail 210 hsr waifu",
    images: [
      "assets/hon1.png",
    ],
    desc: "Pack Honkai Star Rail, download bằng link dưới nhe",
    link: "https://link4m.net/4VhcfzFr",
    olink: ""
  },
  {
    title: "Kaoruko Waguri",
    key: "waguri kaoruko anime",
    images: [
      "assets/wag1.png",
      "assets/wag2.png",
      "assets/wag3.png",
      "assets/wag4.png",
      "assets/wag5.png",
      "assets/wag6.png",
      "assets/wag7.png",
      "assets/wag9.png",
      "assets/wag10.png",
      "assets/wag11.png",
    ],
    desc: "Pack Waguri, download bằng link dưới nhe",
    link: "https://link4m.org/0p421",
    olink: ""
  },
  {
    title: "Mahiru Shiina",
    key: "mahiru shiina otonari tenshi anime waifu",
    images: [
      "assets/mah1.png",
      "assets/mah2.png",
      "assets/mah3.png",
      "assets/mah4.png",
      "assets/mah5.png",
      "assets/mah6.png",
      "assets/mah7.png",
      "assets/mah9.png",
      "assets/mah10.png",
      "assets/mah11.png",
      "assets/mah12.png",
      "assets/mah13.png",
      "assets/mah14.png",
    ],
    desc: "Pack Mahiru, download bằng link dưới nhe",
    link: "https://link4m.org/Pv3qtb",
    olink: ""
  },
  {
    title: "Alya - Alisa Mikhailovna Kujou",
    key: "alya alisa kujou roshidere anime",
    images: [
      "assets/alya1.png",
      "assets/alya2.png",
      "assets/alya3.png",
      "assets/alya4.png",
      "assets/alya5.png",
      "assets/alya6.png",
      "assets/alya7.png",
    ],
    desc: "Pack đầu tay của tui nhe 💖",
    link: "https://link4m.org/aaNlL",
    olink: "https://shrinkme.click/DwKGXu"
  },
  {
    title: "Roxy Migurdia",
    key: "roxy mushoku tensei waifu",
    images: [
      "assets/roxy9.png",
      "assets/roxy1.png",
      "assets/roxy2.png",
      "assets/roxy3.png",
      "assets/roxy4.png",
      "assets/roxy5.png",
      "assets/roxy6.png",
      "assets/roxy7.png",
      "assets/roxy8.png",
    ],
    desc: "Download pack tại link dưới đây <3",
    link: "https://link4m.org/of6KTBPw",
    olink: ""
  },
  {
    title: "Nakano Miku",
    key: "miku gotoubun anime waifu",
    images: [
      "assets/miku1.png",
      "assets/miku2.png",
      "assets/miku3.png"
    ],
    desc: "Download pack tại link dưới đây",
    link: "https://link4m.net/mda4EQ",
    olink: "https://shrinkme.click/FP0MxIAd"
  },
  {
    title: "Hutao",
    key: "genshin impact hutao",
    images: [
      "assets/hutao1.png",
      "assets/hutao2.png",
      "assets/hutao3.png",
      "assets/hutao4.png",
      "assets/hutao5.png",
      "assets/hutao6.png",
      "assets/hutao7.png",
      "assets/hutao8.png",
    ],
    desc: "Tải pack Hutao. Pack hutao mình khuyên mọi người không nên tải hoặc chỉ nên tải cho đẹp. lý do vì khi làm pack mình chưa tối ưu nên nó sẽ khiến game của mọi người rất lag",
    link: "https://link4m.org/LSMiM",
    olink: "https://shrinkme.click/1qzc2"
  },
  {
    title: "Gawr Gura",
    key: "gawr gura hololive vtuber shark",
    images: [
      "assets/gg0.png",
      "assets/gg1.png",
      "assets/gg2.png",
      "assets/gg3.png",
      "assets/gg4.png",
      "assets/gg5.png",
      "assets/gg6.png",
      "assets/gg7.png",
      "assets/gg9.png",
      "assets/gg10.png",
      "assets/gg11.png",
      "assets/gg12.png",
      "assets/gg13.png",
    ],
    desc: "Pack gawr gura, tải bằng link dưới nhe",
    link: "https://link4m.org/SHOJKW",
    olink: "https://shrinkme.click/G2BOLADR"
  },
  {
    title: "Hoshino",
    key: "hoshino blue archive ba",
    images: [
      "assets/hoshino2.png",
      "assets/hoshino3.png",
      "assets/hoshino4.png",
      "assets/hoshino5.png",
      "assets/hoshino6.png",
      "assets/hoshino7.png",
      "assets/hoshino8.png",
      "assets/hoshino9.png",
    ],
    desc: "Pack hoshino, download bằng link dưới nhe",
    link: "https://link4m.net/Rh74Q",
    olink: ""
  }
];

// ========================================================
// 2. DANH SÁCH PACK BEDROCK CHÍNH
// ========================================================
const bedrockPackList = [
  {
    title: "Pack Cartethyia Bedrock",
    key: "Wuthering Waves Cartethyia bedrock",
    images: [
      "assets/car/car.png",
    ],
    desc: "Tải pack Cartethyia tại link bên dưới này.",
    link: "https://link4m.org/go/mU6br",
    olink: "https://shrinkme.click/GBpuh8t"
  },
  {
    title: "Pack yuki suou Bedrock",
    key: "Yuki Suou 210",
    images: [
      "assets/yuki/yuki9.png",
    ],
    desc: "Tải pack yuki suou tại link bên dưới này.",
    link: "https://link4m.net/h27dL4cO",
    olink: "https://shrinkme.click/nr6I2p"
  },
  {
    title: "Pack Hoshino Bedrock",
    key: "blue archive Hoshino ba bedrock",
    images: [
      "assets/hoshino3.png",
    ],
    desc: "Tải pack Hoshino tại link bên dưới này.",
    link: "https://link4m.net/M8hr4Y",
    olink: ""
  },
  {
    title: "Pack Arisu Bedrock",
    key: "blue archive arisu ba bedrock",
    images: [
      "assets/aris.png",
    ],
    desc: "Tải pack Aris tại link bên dưới này.",
    link: "https://link4m.net/orASf3IO",
    olink: ""
  },
  {
    title: "Pack Azur lane bedrock 210",
    key: "azur lane 210 bedrock waifu",
    images: [
      "assets/azur/azur1.png",
      "assets/azur/azur2.png",
      "assets/azur/azur3.png",
      "assets/azur/azur4.png",
    ],
    desc: "Pack azur lane, download bằng link dưới nhe",
    link: "https://link4m.org/LIetAJ",
    olink: ""
  },
  {
    title: "Pack Rikka",
    key: "rikka takanashi bedrock anime",
    images: [
      "assets/rikka/rikkab2.png",
      "assets/rikka/rikkab3.png",
      "assets/rikka/rikkab4.png",
      "assets/rikka/rikkab5.png",
      "assets/rikka/rikkab6.png",
    ],
    desc: "Pack rikka, download bằng link dưới nhe",
    link: "https://link4m.org/znlgsw",
    olink: ""
  },
  {
    title: "Pack Furina",
    key: "genshin impact furina fontaine bedrock",
    images: [
      "assets/furina/furina11.png",
      "assets/furina/furina12.png",
      "assets/furina/furina13.png",
      "assets/furina/furina14.png",
    ],
    desc: "Pack Furina, download bằng link dưới nhe",
    link: "https://link4m.net/uOgQZx",
    olink: ""
  },
  {
    title: "Pack Frieren",
    key: "frieren sousou bedrock anime",
    images: [
      "assets/fri/fria.jpg",
      "assets/fri/frib.jpg",
      "assets/fri/fric.jpg",
      "assets/fri/frid.jpg",
      "assets/fri/frie.jpg",
    ],
    desc: "Pack Frieren, download bằng link dưới nhe",
    link: "https://link4m.net/Dv7la",
    olink: ""
  },
  {
    title: "Pack Hutao",
    key: "genshin impact hutao bedrock",
    images: [
      "assets/hutaoBR/hutao1.jpg",
      "assets/hutaoBR/hutao2.jpg",
      "assets/hutaoBR/hutao3.jpg",
      "assets/hutaoBR/hutao4.jpg",
      "assets/hutaoBR/hutao5.jpg",
      "assets/hutaoBR/hutao6.jpg",
      "assets/hutaoBR/hutao7.jpg",
      "assets/hutaoBR/hutao8.jpg",
    ],
    desc: "Pack Hutao, tải xuống bằng link dưới đây nhe.",
    link: "https://link4m.net/VBJe4",
    olink: ""
  },
  {
    title: "Pack Sky Gawr Gura",
    key: "gawr gura hololive vtuber sky bedrock",
    images: [
      "assets/gg10.png",
      "assets/gg11.png",
      "assets/gg12.png",
      "assets/gg13.png",
    ],
    desc: "Pack Gawr Gura, tải xuống bằng link dưới đây nhe.",
    link: "https://link4m.org/TgAXc2ir",
    olink: ""
  },
  {
    title: "Pack Arya",
    key: "alya alya roshidere bedrock",
    images: [
      "assets/arbr.jpg",
      "assets/arbr1.jpg",
      "assets/arbr2.jpg",
      "assets/arbr3.jpg",
      "assets/arbr4.jpg",
    ],
    desc: "Pack Arya, tải xuống bằng link dưới đây nhe.",
    link: "https://link4m.org/xun9wMZx",
    olink: ""
  },
  {
    title: "Pack blue",
    key: "blue archive ba 210 sky bedrock",
    images: [
      "assets/blu1.png",
    ],
    desc: "Pack Sky Blue archiver, tải xuống bằng link dưới đây nhe.",
    link: "https://link4m.net/d8Im4OhB",
    olink: ""
  },
  {
    title: "Pack honkai",
    key: "honkai star rail hsr bedrock sky",
    images: [
      "assets/honk1.jpg",
      "assets/honk2.jpg",
      "assets/honk3.jpg",
      "assets/honk4.jpg",
    ],
    desc: "Pack Honkai , tải xuống bằng link dưới đây nhe.",
    link: "https://link4m.net/3nETDYY",
    olink: ""
  },
  {
    title: "combo Sky pack genshin",
    key: "genshin impact 210 sky combo bedrock",
    images: [
      "assets/gen2101.png",
      "assets/gen2102.png",
      "assets/gen2108.png",
    ],
    desc: "combo Sky pack genshin",
    link: "https://link4m.net/fl8J8",
    olink: "https://shrinkme.click/e2csQ"
  }
];

// ========================================================
// 3. KHO PACK COSPLAY
// ========================================================
const cosplayPackList = [
  
  {
    title: "FireFly Cos 18+",
    key: "",
    images: [
      "assets/cos/firefly.png",
    ],
    desc: "fireflycosplay18+: thông tin của coser trong pack nha!",
    link: "https://drive.google.com/file/d/1-fQ6egvgNadEPqv3UI0YsdO6db88PeO4/view?usp=sharing",
    olink: "https://shrinkme.click/JKkYqt"
  },
  {
    title: "Cyrene Cos 18+",
    key: "",
    images: [
      "assets/cos/Cyrene.png",
    ],
    desc: "Cyrene cosplay18+: thông tin của coser trong pack nha!",
    link: "https://www.mediafire.com/file/qwryewpj2p1lm1a/%25C2%25A79%25C2%25A7lCosplayCyrene%25C2%25A76%25C2%25A7l18.zip/file",
    olink: "https://shrinkme.click/r7lRiWu1"
  },
];
