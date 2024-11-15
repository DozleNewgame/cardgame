// 背景画像のURL設定
const backgroundImageUrl = ''; // 背景に画像を入れたかったらURL貼りなさいよね！なかったら何もしないから！

// カードの表面の画像URL（必要な場合のみ設定）
const cardImageUrl = ''; // 表面に画像を入れたかったらURLを入れなさいよ！ないなら黒のままだからね

// ゲームボードの設定
const rows = 3; // カードを縦に3枚並べてあげるわ！
const columns = 3; // 横にも3枚ね、文句ないでしょ？
const cardCount = 8; // カードの枚数はこれで決まり！

// それぞれのカードの裏に仕込む罰ゲームの内容
const punishmentValues = [
    { description: "大声で笑う", fontSize: "1.2em", backColor: "lightgray", textColor: "black" },
    { description: "変顔をする", fontSize: "1.5em", backColor: "lightgray", textColor: "black" },
    { description: "逆立ちする", fontSize: "1.3em", backColor: "lightgray", textColor: "black" },
    { description: "驚くポーズ", fontSize: "1.4em", backColor: "lightgray", textColor: "black" },
    { description: "おどける", fontSize: "1.6em", backColor: "lightgray", textColor: "black" },
    { description: "いたずらをする", fontSize: "1.2em", backColor: "lightgray", textColor: "black" },
    { description: "冷たい顔をする", fontSize: "1.3em", backColor: "lightgray", textColor: "black" },
    { description: "お化けの真似", fontSize: "1.5em", backColor: "lightgray", textColor: "black" }
];
