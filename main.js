// 背景画像の設定を反映
if (backgroundImageUrl) {
    document.body.style.backgroundImage = `url(${backgroundImageUrl})`;
}

// カードを生成する関数
function createCards() {
    const gameBoard = document.getElementById("gameBoard");
    gameBoard.innerHTML = ''; // ゲームボードをカラにする

    if (punishmentValues.length < cardCount) {
        alert("罰ゲームの数がカード枚数より少ないです。罰ゲームを追加してください。");
        return;
    }

    const selectedPunishments = punishmentValues.slice(0, cardCount);

    selectedPunishments.forEach((item, index) => {
        const card = document.createElement("div");
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
        card.addEventListener("click", () => flipCard(card, index)); // クリックしたらひっくり返る
        gameBoard.appendChild(card);
    });
}

// カードを裏返す関数
function flipCard(card, index) {
    if (!card.classList.contains("flip")) {
        card.classList.add("flip");

        // カードの状態をFirebaseに書き込む
        database.ref('cards/' + index).set({
            flipped: true
        });
    }
}

// Firebaseからカードの状態をリアルタイムで取得
database.ref('cards').on('value', (snapshot) => {
    const cardData = snapshot.val();
    if (cardData) {
        Object.keys(cardData).forEach(index => {
            if (cardData[index].flipped) {
                document.querySelectorAll('.card')[index].classList.add('flip');
            }
        });
    }
});

// 初期化処理
createCards();
