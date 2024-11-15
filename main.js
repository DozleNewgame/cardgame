// ゲームの設定を読み込んで、カードを生成する
function createCards() {
    const gameBoard = document.getElementById("gameBoard");
    gameBoard.innerHTML = ''; // ゲームボードを空にする

    punishmentValues.forEach((item, index) => {
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
        card.addEventListener("click", () => flipCard(card, index)); // クリックイベントを追加
        gameBoard.appendChild(card);
    });
}

// カードをひっくり返す関数
function flipCard(card, index) {
    if (!card.classList.contains("flip")) {
        card.classList.add("flip");
        // カードの状態をFirebaseに保存
        database.ref('cards/' + index).set({
            flipped: true
        });
    }
}

// Firebaseからカードの状態を取得し、反映する
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
