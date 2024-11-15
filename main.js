// 背景画像の設定を反映
if (backgroundImageUrl) {
    document.body.style.backgroundImage = `url(${backgroundImageUrl})`;
}

// カードを生成する関数
function createCards() {
    const gameBoard = document.getElementById("gameBoard");
    gameBoard.innerHTML = ''; // ゲームボードをカラにしてやるわよ！

    if (punishmentValues.length < cardCount) {
        alert("罰ゲームの数がカード枚数より少ないです。罰ゲームを追加してください。"); // 罰ゲームが足りないわよ！もっと追加しなさい！
        return;
    }

    const selectedPunishments = punishmentValues.slice(0, cardCount); // 8枚分の罰ゲームだけ取り出してやるわ！

    selectedPunishments.forEach((item, index) => {
        const card = document.createElement("div"); // 新しいカードを作ってやったわよ
        card.classList.add("card");
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front" style="${cardImageUrl ? `background-image: url('${cardImageUrl}')` : ''};">
                    ?
                </div>
                <div class="card-back" style="background-color: ${item.backColor}; color: ${item.textColor}; font-size: ${item.fontSize};">
                    ${item.description}
                </div>
            </div>
        `;
        card.addEventListener("click", () => flipCard(card)); // クリックしたらひっくり返してやるわ！
        gameBoard.appendChild(card); // ゲームボードにカードを追加してやるから感謝しなさいよね！
    });
}

// カードを裏返す関数
function flipCard(card) {
    if (!card.classList.contains("flip")) {
        card.classList.add("flip"); // ほら、ひっくり返してやるわよ！
    }
}

// ゲームボードを初期化
createCards();
